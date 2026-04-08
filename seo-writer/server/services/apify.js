import { ApifyClient } from 'apify-client';

const WEB_SCRAPER_ACTOR = 'apify/website-content-crawler';

// Lazy initialization
let client = null;

function getClient() {
  const token = process.env.APIFY_API_TOKEN;
  if (!token) {
    throw new Error('APIFY_API_TOKEN environment variable is not set. Please add it to your .env file.');
  }
  if (!client) {
    client = new ApifyClient({ token });
  }
  return client;
}

/**
 * Scrape a single URL and return markdown content
 */
export async function scrapeURL(url, options = {}) {
  try {
    const {
      onlyMainContent = true,
    } = options;

    const run = await getClient().actor(WEB_SCRAPER_ACTOR).call({
      startUrls: [{ url }],
      maxCrawlPages: 1,
      crawlerType: 'cheerio',
      removeElementsCssSelector: onlyMainContent
        ? 'nav, footer, header, aside, .sidebar, .cookie-banner, .newsletter-signup'
        : '',
    });

    const { items } = await getClient().dataset(run.defaultDatasetId).listItems();

    if (!items || items.length === 0) {
      throw new Error(`No content extracted from ${url}`);
    }

    const page = items[0];

    return {
      url,
      markdown: page.text || page.markdown || '',
      metadata: {
        title: page.title || page.metadata?.title || '',
        description: page.metadata?.description || '',
        language: page.metadata?.language || '',
      },
    };
  } catch (error) {
    console.error(`Apify scrape error for ${url}:`, error);
    throw new Error(`Apify scrape error: ${error.message}`);
  }
}

/**
 * Scrape multiple URLs in parallel
 */
export async function scrapeMultipleURLs(urls, options = {}) {
  try {
    const scrapePromises = urls.map((url) =>
      scrapeURL(url, options)
        .catch((error) => ({
          url,
          error: error.message,
          markdown: null,
        }))
    );

    return await Promise.all(scrapePromises);
  } catch (error) {
    console.error('Apify batch scrape error:', error);
    throw new Error(`Apify batch error: ${error.message}`);
  }
}

/**
 * Scrape URL with retry logic
 */
export async function scrapeWithRetry(url, options = {}, maxRetries = 2) {
  let lastError;

  for (let attempt = 0; attempt <= maxRetries; attempt++) {
    try {
      return await scrapeURL(url, options);
    } catch (error) {
      lastError = error;
      console.log(`Retry ${attempt + 1}/${maxRetries} for ${url}`);

      if (attempt < maxRetries) {
        await new Promise((resolve) => setTimeout(resolve, Math.pow(2, attempt) * 1000));
      }
    }
  }

  throw lastError;
}

export default {
  scrapeURL,
  scrapeMultipleURLs,
  scrapeWithRetry,
};
