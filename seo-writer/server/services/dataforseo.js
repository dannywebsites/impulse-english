/**
 * DataForSEO SERP API service
 * Replaces SerpAPI — uses DataForSEO Live/Regular endpoint
 */

const BASE_URL = process.env.DATAFORSEO_BASE_URL || 'https://api.dataforseo.com/v3';

function getAuthHeader() {
  const login = process.env.DATAFORSEO_LOGIN;
  const password = process.env.DATAFORSEO_PASSWORD;

  if (!login || !password) {
    throw new Error('DATAFORSEO_LOGIN and DATAFORSEO_PASSWORD environment variables are required. Please add them to your .env file.');
  }

  return 'Basic ' + Buffer.from(`${login}:${password}`).toString('base64');
}

async function apiRequest(endpoint, body) {
  const response = await fetch(`${BASE_URL}${endpoint}`, {
    method: 'POST',
    headers: {
      'Authorization': getAuthHeader(),
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  });

  if (!response.ok) {
    throw new Error(`DataForSEO API error: ${response.status} ${response.statusText}`);
  }

  const data = await response.json();

  if (data.status_code !== 20000) {
    throw new Error(`DataForSEO error: ${data.status_message || 'Unknown error'}`);
  }

  return data;
}

/**
 * Search Google SERPs for organic results
 */
export async function searchSERP(query, options = {}) {
  const {
    location = 'Spain',
    language = 'es',
    numResults = 10,
  } = options;

  const body = [{
    keyword: query,
    location_name: location,
    language_code: language,
    depth: numResults,
  }];

  const data = await apiRequest('/serp/google/organic/live/regular', body);

  const result = data.tasks?.[0]?.result?.[0];
  if (!result) {
    return { items: [], related_searches: [] };
  }

  return result;
}

/**
 * Extract organic results from SERP response
 */
export function extractOrganicResults(serpResponse) {
  const items = serpResponse.items || [];

  return items
    .filter((item) => item.type === 'organic')
    .map((item) => ({
      position: item.rank_absolute,
      title: item.title,
      link: item.url,
      displayedLink: item.displayed_link || item.url,
      snippet: item.description,
      source: item.domain,
      sitelinks: [],
    }));
}

/**
 * Extract People Also Ask questions
 */
export function extractPAA(serpResponse) {
  const items = serpResponse.items || [];

  return items
    .filter((item) => item.type === 'people_also_ask')
    .flatMap((item) => {
      if (item.items) {
        return item.items.map((q) => ({
          question: q.title,
          snippet: q.description || q.snippet || '',
          title: q.title,
          link: q.url || '',
        }));
      }
      return [{
        question: item.title,
        snippet: item.description || '',
        title: item.title,
        link: item.url || '',
      }];
    });
}

/**
 * Extract featured snippet
 */
export function extractFeaturedSnippet(serpResponse) {
  const items = serpResponse.items || [];
  const featured = items.find((item) => item.type === 'featured_snippet');

  if (!featured) return null;

  return {
    type: featured.type,
    title: featured.title,
    snippet: featured.description || featured.snippet || '',
    source: featured.domain,
    link: featured.url,
  };
}

/**
 * Get comprehensive SERP data (matches SerpAPI interface)
 */
export async function getComprehensiveSERPData(query, options = {}) {
  try {
    const serpResponse = await searchSERP(query, options);

    // Extract related searches if available
    const items = serpResponse.items || [];
    const relatedBlock = items.find((item) => item.type === 'related_searches');
    const relatedSearches = relatedBlock?.items?.map((r) => ({
      query: r.title || r.query,
      link: r.url || '',
    })) || [];

    return {
      query,
      organicResults: extractOrganicResults(serpResponse),
      peopleAlsoAsk: extractPAA(serpResponse),
      featuredSnippet: extractFeaturedSnippet(serpResponse),
      relatedSearches,
    };
  } catch (error) {
    console.error('Error getting comprehensive SERP data:', error);
    throw error;
  }
}

export default {
  searchSERP,
  extractOrganicResults,
  extractPAA,
  extractFeaturedSnippet,
  getComprehensiveSERPData,
};
