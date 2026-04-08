import { getJson } from 'serpapi';

/**
 * Search Google SERPs for organic results
 */
export async function searchSERP(query, options = {}) {
  try {
    const apiKey = process.env.SERPAPI_API_KEY;
    if (!apiKey) {
      throw new Error('SERPAPI_API_KEY environment variable is not set. Please add it to your .env file.');
    }

    const {
      location = 'us',
      language = 'en',
      numResults = 10,
    } = options;

    const params = {
      q: query,
      gl: location,
      hl: language,
      num: numResults,
      api_key: apiKey,
    };

    return new Promise((resolve, reject) => {
      getJson(params, (json) => {
        if (json.error) {
          reject(new Error(json.error));
        } else {
          resolve(json);
        }
      });
    });
  } catch (error) {
    console.error('SerpAPI error:', error);
    throw new Error(`SerpAPI error: ${error.message}`);
  }
}

/**
 * Extract organic results from SERP response
 */
export function extractOrganicResults(serpResponse) {
  if (!serpResponse.organic_results) {
    return [];
  }

  return serpResponse.organic_results.map((result) => ({
    position: result.position,
    title: result.title,
    link: result.link,
    displayedLink: result.displayed_link,
    snippet: result.snippet,
    source: result.source,
    sitelinks: result.sitelinks?.inline || [],
  }));
}

/**
 * Extract People Also Ask questions
 */
export function extractPAA(serpResponse) {
  if (!serpResponse.related_questions) {
    return [];
  }

  return serpResponse.related_questions.map((q) => ({
    question: q.question,
    snippet: q.snippet,
    title: q.title,
    link: q.link,
  }));
}

/**
 * Extract featured snippet
 */
export function extractFeaturedSnippet(serpResponse) {
  if (!serpResponse.answer_box) {
    return null;
  }

  const answerBox = serpResponse.answer_box;

  return {
    type: answerBox.type,
    title: answerBox.title,
    snippet: answerBox.snippet || answerBox.answer,
    source: answerBox.source,
    link: answerBox.link,
  };
}

/**
 * Get comprehensive SERP data
 */
export async function getComprehensiveSERPData(query, options = {}) {
  try {
    const serpResponse = await searchSERP(query, options);

    return {
      query,
      organicResults: extractOrganicResults(serpResponse),
      peopleAlsoAsk: extractPAA(serpResponse),
      featuredSnippet: extractFeaturedSnippet(serpResponse),
      relatedSearches: serpResponse.related_searches || [],
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
