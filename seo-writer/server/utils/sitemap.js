import prisma from '../db.js';

/**
 * Try to fetch XML from a URL and extract <loc> entries.
 * Returns { urls, isSitemapIndex } or null if not valid XML sitemap.
 */
async function tryFetchSitemap(url) {
  try {
    const response = await fetch(url, {
      headers: { 'User-Agent': 'SEO-Blog-Writer/1.0' },
      signal: AbortSignal.timeout(10000),
    });
    if (!response.ok) return null;

    const text = await response.text();

    // Check if this is a sitemap index (contains <sitemap> tags)
    if (text.includes('<sitemapindex') || text.includes('<sitemap>')) {
      const sitemapUrls = [];
      const locRegex = /<loc>\s*(.*?)\s*<\/loc>/gi;
      let match;
      while ((match = locRegex.exec(text)) !== null) {
        sitemapUrls.push(match[1]);
      }
      return { urls: sitemapUrls, isSitemapIndex: true };
    }

    // Regular sitemap — extract page URLs
    const urls = [];
    const locRegex = /<loc>\s*(.*?)\s*<\/loc>/gi;
    let match;
    while ((match = locRegex.exec(text)) !== null) {
      urls.push(match[1]);
    }

    if (urls.length > 0) {
      return { urls, isSitemapIndex: false };
    }

    return null;
  } catch {
    return null;
  }
}

/**
 * Resolve a user-provided URL to an actual sitemap URL.
 * Handles: direct sitemap URLs, domain-only input, robots.txt lookup.
 */
export async function resolveSitemapUrl(input) {
  if (!input) return null;

  let url = input.trim();

  // Add protocol if missing
  if (!url.startsWith('http://') && !url.startsWith('https://')) {
    url = 'https://' + url;
  }

  // If it looks like a sitemap URL already, try it directly
  if (url.endsWith('.xml') || url.includes('sitemap')) {
    const result = await tryFetchSitemap(url);
    if (result) return { sitemapUrl: url, ...result };
  }

  // Extract origin for probing common locations
  let origin;
  try {
    origin = new URL(url).origin;
  } catch {
    return null;
  }

  // Try common sitemap locations
  const candidates = [
    `${origin}/sitemap.xml`,
    `${origin}/sitemap_index.xml`,
    `${origin}/sitemap/sitemap-index.xml`,
  ];

  for (const candidate of candidates) {
    const result = await tryFetchSitemap(candidate);
    if (result) return { sitemapUrl: candidate, ...result };
  }

  // Try robots.txt as a last resort
  try {
    const robotsRes = await fetch(`${origin}/robots.txt`, {
      headers: { 'User-Agent': 'SEO-Blog-Writer/1.0' },
      signal: AbortSignal.timeout(5000),
    });
    if (robotsRes.ok) {
      const robotsTxt = await robotsRes.text();
      const sitemapMatch = robotsTxt.match(/^Sitemap:\s*(.+)$/im);
      if (sitemapMatch) {
        const robotsSitemapUrl = sitemapMatch[1].trim();
        const result = await tryFetchSitemap(robotsSitemapUrl);
        if (result) return { sitemapUrl: robotsSitemapUrl, ...result };
      }
    }
  } catch {
    // ignore
  }

  return null;
}

/**
 * Fetch and parse a sitemap URL (or sitemap index), returning all page URLs.
 */
export async function parseSitemap(sitemapUrl) {
  if (!sitemapUrl) return [];

  const resolved = await resolveSitemapUrl(sitemapUrl);
  if (!resolved) return [];

  // If it's a sitemap index, fetch each child sitemap
  if (resolved.isSitemapIndex) {
    const allUrls = [];
    for (const childUrl of resolved.urls) {
      const child = await tryFetchSitemap(childUrl);
      if (child && !child.isSitemapIndex) {
        allUrls.push(...child.urls);
      }
    }
    return allUrls;
  }

  return resolved.urls;
}

/**
 * Fetch a single page's title and meta description via lightweight HTTP GET.
 * No Firecrawl — just basic HTML parsing.
 */
export async function fetchPageMetadata(url) {
  try {
    const response = await fetch(url, {
      headers: { 'User-Agent': 'SEO-Blog-Writer/1.0' },
      signal: AbortSignal.timeout(5000),
    });

    if (!response.ok) {
      return { url, title: '', description: '' };
    }

    // Only read the first ~50KB to find title/meta tags (skip heavy pages)
    const reader = response.body.getReader();
    const decoder = new TextDecoder();
    let html = '';
    let bytesRead = 0;
    const maxBytes = 50000;

    while (bytesRead < maxBytes) {
      const { done, value } = await reader.read();
      if (done) break;
      html += decoder.decode(value, { stream: true });
      bytesRead += value.length;
    }
    reader.cancel();

    // Extract <title>
    const titleMatch = html.match(/<title[^>]*>([\s\S]*?)<\/title>/i);
    const title = titleMatch ? titleMatch[1].trim().substring(0, 200) : '';

    // Extract <meta name="description">
    const descMatch = html.match(
      /<meta\s+[^>]*name=["']description["'][^>]*content=["']([\s\S]*?)["'][^>]*>/i
    ) || html.match(
      /<meta\s+[^>]*content=["']([\s\S]*?)["'][^>]*name=["']description["'][^>]*>/i
    );
    const description = descMatch ? descMatch[1].trim().substring(0, 300) : '';

    return { url, title, description };
  } catch {
    return { url, title: '', description: '' };
  }
}

/**
 * Run tasks with a concurrency limit.
 */
async function runWithConcurrency(tasks, limit) {
  const results = [];
  const executing = new Set();

  for (const task of tasks) {
    const p = task().then((result) => {
      executing.delete(p);
      return result;
    });
    executing.add(p);
    results.push(p);

    if (executing.size >= limit) {
      await Promise.race(executing);
    }
  }

  return Promise.all(results);
}

/**
 * Full sitemap sync: parse sitemap, fetch metadata for all pages,
 * upsert into DB, remove stale pages, update settings.
 */
export async function syncSitemap(sitemapUrl, brandId) {
  // 1. Resolve and parse sitemap to get URL list
  const resolved = await resolveSitemapUrl(sitemapUrl);

  if (!resolved) {
    throw new Error('Could not find a valid sitemap. Try providing a direct URL like https://example.com/sitemap.xml');
  }

  // Use the resolved sitemap URL (auto-detected) for storage
  sitemapUrl = resolved.sitemapUrl;

  // If sitemap index, fetch all child sitemaps
  let urls;
  if (resolved.isSitemapIndex) {
    urls = [];
    for (const childUrl of resolved.urls) {
      const child = await tryFetchSitemap(childUrl);
      if (child && !child.isSitemapIndex) {
        urls.push(...child.urls);
      }
    }
  } else {
    urls = resolved.urls;
  }

  if (urls.length === 0) {
    throw new Error('No page URLs found in sitemap');
  }

  // 2. Fetch metadata for each page (20 concurrent)
  const tasks = urls.map((url) => () => fetchPageMetadata(url));
  const pages = await runWithConcurrency(tasks, 20);

  // 3. Upsert each page (scoped by brand)
  let newPages = 0;
  for (const page of pages) {
    const existing = await prisma.sitemapPage.findUnique({
      where: { brandId_url: { brandId, url: page.url } },
    });
    if (existing) {
      await prisma.sitemapPage.update({
        where: { brandId_url: { brandId, url: page.url } },
        data: {
          title: page.title,
          description: page.description,
          lastSynced: new Date(),
        },
      });
    } else {
      await prisma.sitemapPage.create({
        data: {
          brandId,
          url: page.url,
          title: page.title,
          description: page.description,
        },
      });
      newPages++;
    }
  }

  // 4. Delete pages no longer in sitemap (scoped by brand)
  const currentUrls = new Set(urls);
  const allDbPages = await prisma.sitemapPage.findMany({
    where: { brandId },
    select: { url: true },
  });
  const staleUrls = allDbPages.filter((p) => !currentUrls.has(p.url)).map((p) => p.url);

  if (staleUrls.length > 0) {
    await prisma.sitemapPage.deleteMany({
      where: { brandId, url: { in: staleUrls } },
    });
  }

  // 5. Update brand with sync metadata
  await prisma.brand.update({
    where: { id: brandId },
    data: {
      sitemapUrl,
      sitemapLastSync: new Date(),
      sitemapPageCount: urls.length,
    },
  });

  return {
    pageCount: urls.length,
    newPages,
    removedPages: staleUrls.length,
  };
}
