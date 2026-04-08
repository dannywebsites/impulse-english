import * as gemini from '../services/gemini.js';
import * as dataforseo from '../services/dataforseo.js';
import * as apify from '../services/apify.js';
import { emitJobStatus } from '../utils/events.js';

const RESEARCH_SYSTEM_PROMPT = `Conduct comprehensive competitive intelligence research to discover the optimal content strategy for the given keyword/topic. Your mission is to reverse-engineer search intent, identify content opportunities, and create a complete content brief.

RESEARCH OBJECTIVES:
1. Intent Discovery: Determine what users ACTUALLY want when searching this keyword - informational, comparison, solution evaluation, how-to, etc.
2. Content Format Analysis: Should this be a guide, comparison, listicle, problem-solution article, or landing page?
3. Decode Ranking DNA: Analyze why top-ranking content succeeds (format, depth, user experience, technical factors)
4. Competitive Intelligence: Identify what works, what's missing, and exploitable gaps
5. Strategic Positioning: Develop a complete content strategy from scratch based on what you discover

DISCOVERY PROCESS:
- Start broad with keyword research to understand the search landscape
- Analyze SERP features (featured snippets, People Also Ask, related searches)
- Map user intent clusters and subtopics that must be covered
- Identify the content type that dominates (blog posts vs landing pages vs tools)
- Determine TOFU/MOFU/BOFU stage based on intent signals
- Extract unique data, statistics, and angles from top performers

MANDATORY REQUIREMENTS:
- Use ALL available research tools SYSTEMATICALLY (3-5 calls each)
- Analyze at least 5-7 top-ranking competitors
- Identify both explicit search intent and implicit user needs
- Determine optimal content structure and sections needed
- Provide a complete content brief that guides the writer

Your research should answer: "If I knew nothing about this topic except the keyword, what content should I create and why?"

IMPORTANT: USE THE TOOLS EXTENSIVELY, GATHER COMPREHENSIVE DATA, THEN SYNTHESIZE INTO AN ACTIONABLE BRIEF.

OUTPUT FORMAT REQUIREMENTS:
Your final research brief MUST be formatted as clean, well-structured markdown. Follow these rules strictly:
- Use ## for major sections (e.g., "## 1. Intent Discovery & Search Landscape")
- Use ### for subsections (e.g., "### Primary User Intent Clusters")
- Use **bold** for key terms and labels
- Use bullet lists (- ) for listing items, not run-on sentences
- Use numbered lists (1. ) for ordered/ranked items
- Use markdown tables (with | header | pipes |) for comparison data, competitive analysis, and feature matrices
- Use > blockquotes for key insights or important callouts
- Separate sections with blank lines for readability
- Use --- horizontal rules between major sections
- Never output a wall of unformatted text — every piece of data should be in a structured element`;

const TOOL_DEFINITIONS = [
  {
    name: 'serp_search',
    description: 'Search Google SERPs for a keyword to get organic results, featured snippets, and People Also Ask questions',
    parameters: {
      type: 'object',
      properties: {
        query: {
          type: 'string',
          description: 'Search query/keyword',
        },
        num_results: {
          type: 'integer',
          description: 'Number of results to return (default 10)',
        },
      },
      required: ['query'],
    },
  },
  {
    name: 'web_scrape',
    description: 'Scrape a URL to get its content in markdown format',
    parameters: {
      type: 'object',
      properties: {
        url: {
          type: 'string',
          description: 'URL to scrape',
        },
      },
      required: ['url'],
    },
  },
];

/**
 * Convert full language name to 2-letter code for SerpAPI
 */
function getLanguageCode(language) {
  const languageMap = {
    'English': 'en',
    'Spanish': 'es',
    'French': 'fr',
    'German': 'de',
    'Italian': 'it',
    'Portuguese': 'pt',
  };
  return languageMap[language] || 'en';
}

/**
 * Tool executor for research agent
 */
async function executeResearchTool(toolName, args, jobId, options) {
  const { language, locationCode } = options;

  if (toolName === 'serp_search') {
    emitJobStatus(jobId, 'research', 'running', `Searching SERPs for: ${args.query}`);

    const result = await dataforseo.getComprehensiveSERPData(args.query, {
      location: locationCode || 'Spain',
      language: getLanguageCode(language) || 'es',
      numResults: args.num_results || 10,
    });

    return JSON.stringify(result, null, 2);
  }

  if (toolName === 'web_scrape') {
    emitJobStatus(jobId, 'research', 'running', `Scraping URL: ${args.url}`);

    const result = await apify.scrapeWithRetry(args.url);

    return result.markdown;
  }

  throw new Error(`Unknown tool: ${toolName}`);
}

/**
 * Build research depth instructions based on settings
 */
function getResearchDepthInstructions(depth) {
  const depthMap = {
    light: 'Analyze 2-3 top-ranking competitors. Use 1-2 SERP searches and 2-3 page scrapes.',
    standard: 'Analyze 5-7 top-ranking competitors. Use 3-5 SERP searches and 3-5 page scrapes.',
    deep: 'Analyze 7-10 top-ranking competitors exhaustively. Use 5+ SERP searches and 5-7 page scrapes.',
  };
  return depthMap[depth] || depthMap.standard;
}

/**
 * Run research agent
 */
export async function runResearchAgent(job, settings = {}) {
  const { id: jobId, topic, keywords, language, locationCode } = job;

  try {
    emitJobStatus(jobId, 'research', 'running', 'Starting research agent...');

    const currentDate = new Date().toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });

    // Build context sections from settings
    const depthInstruction = getResearchDepthInstructions(settings.researchDepth);

    let audienceContext = '';
    if (settings.targetAudience) {
      audienceContext = `\nTARGET AUDIENCE: ${settings.targetAudience}`;
    }

    let brandContext = '';
    if (settings.brandMentionLevel !== 'subtle' && settings.companyName) {
      brandContext = `\nBRAND CONTEXT: The content is for ${settings.companyName}${settings.companyDescription ? ` — ${settings.companyDescription}` : ''}. Keep this in mind during competitive analysis.`;
    }

    const prompt = `RESEARCH PARAMETERS:
Topic/Keywords: ${topic} / ${keywords}
Language: ${language}
Today's Date: ${currentDate}
Research Depth: ${depthInstruction}${audienceContext}${brandContext}

IMPORTANT: Do NOT append the year to your search queries unless the user's keyword already includes a year. Search for the topic as-is. The date above is provided so you can accurately judge how recent scraped content is — not to make the year a focus of the research.

Begin your comprehensive research now. Use all available tools extensively to gather data, then synthesize your findings into a complete content brief.`;

    const toolExecutor = (toolName, args) =>
      executeResearchTool(toolName, args, jobId, { language, locationCode });

    const researchBrief = await gemini.functionCalling(
      prompt,
      TOOL_DEFINITIONS,
      RESEARCH_SYSTEM_PROMPT,
      toolExecutor
    );

    emitJobStatus(jobId, 'research', 'completed', 'Research complete');

    return researchBrief;
  } catch (error) {
    emitJobStatus(jobId, 'research', 'error', `Research failed: ${error.message}`);
    throw error;
  }
}

export default runResearchAgent;
