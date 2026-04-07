import FirecrawlApp from 'firecrawl';

const apiKey = process.env.FIRECRAWL_API_KEY;

// Lazy initialization - only create client when needed
let firecrawl = null;

function getClient() {
  if (!apiKey) {
    throw new Error('FIRECRAWL_API_KEY environment variable is not set. Please add it to your .env file.');
  }
  if (!firecrawl) {
    firecrawl = new FirecrawlApp({ apiKey });
  }
  return firecrawl;
}

/**
 * Scrape a single URL and return markdown content
 */
export async function scrapeURL(url, options = {}) {
  try {
    const {
      onlyMainContent = true,
      formats = ['markdown'],
      maxAge = 172800000, // 48 hours cache
    } = options;

    const result = await getClient().scrape(url, {
      formats,
      onlyMainContent,
      maxAge,
    });

    return {
      url,
      markdown: result.markdown,
      metadata: {
        title: result.metadata?.title,
        description: result.metadata?.description,
        language: result.metadata?.language,
      },
    };
  } catch (error) {
    console.error(`Firecrawl scrape error for ${url}:`, error);
    throw new Error(`Firecrawl error: ${error.message}`);
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
    console.error('Firecrawl batch scrape error:', error);
    throw new Error(`Firecrawl batch error: ${error.message}`);
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
        // Exponential backoff
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
