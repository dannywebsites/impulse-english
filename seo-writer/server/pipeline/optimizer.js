import prisma from '../db.js';
import { emitJobStatus } from '../utils/events.js';
import * as apify from '../services/apify.js';
import * as gemini from '../services/gemini.js';
import * as claude from '../services/claude.js';
import * as dataforseo from '../services/dataforseo.js';

// ─── Tool Definitions (same as research.js) ───

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

// ─── Tool Executor ───

async function executeResearchTool(toolName, args, jobId) {
  if (toolName === 'serp_search') {
    emitJobStatus(jobId, 'serp_research', 'running', `Searching SERPs: ${args.query}`);
    const result = await dataforseo.getComprehensiveSERPData(args.query, {
      location: 'Spain',
      language: 'es',
      numResults: args.num_results || 10,
    });
    return JSON.stringify(result, null, 2);
  }

  if (toolName === 'web_scrape') {
    emitJobStatus(jobId, 'serp_research', 'running', `Scraping: ${args.url}`);
    const result = await apify.scrapeWithRetry(args.url);
    return result.markdown;
  }

  throw new Error(`Unknown tool: ${toolName}`);
}

// ─── Step 1: Scrape Source URL ───

async function runScrapeStep(job) {
  emitJobStatus(job.id, 'scrape', 'running', `Scraping ${job.sourceUrl}...`);

  const result = await apify.scrapeWithRetry(job.sourceUrl, {
    onlyMainContent: true,
  });

  const markdown = result.markdown || '';

  // Extract metadata from markdown
  const wordCount = markdown.split(/\s+/).filter(Boolean).length;
  const headingRegex = /^(#{1,6})\s+(.+)$/gm;
  const headings = [];
  let match;
  while ((match = headingRegex.exec(markdown)) !== null) {
    headings.push({ level: match[1].length, text: match[2] });
  }

  const scrapedMeta = JSON.stringify({
    title: result.metadata?.title || '',
    description: result.metadata?.description || '',
    wordCount,
    headings,
  });

  await prisma.optimizationJob.update({
    where: { id: job.id },
    data: {
      scrapedContent: markdown,
      scrapedMeta,
      currentStep: 'scrape_complete',
    },
  });

  emitJobStatus(job.id, 'scrape', 'completed', 'Page scraped successfully');
  return { markdown, meta: scrapedMeta };
}

// ─── Step 2: Keyword Detection ───

async function runKeywordDetection(job, scrapedContent) {
  if (job.targetKeyword) {
    return job.targetKeyword;
  }

  emitJobStatus(job.id, 'keyword_detection', 'running', 'Detecting target keyword...');

  const schema = {
    type: 'object',
    properties: {
      keyword: {
        type: 'string',
        description: 'The primary target keyword this content is optimized for',
      },
      confidence: {
        type: 'string',
        enum: ['high', 'medium', 'low'],
        description: 'Confidence in the detected keyword',
      },
    },
    required: ['keyword', 'confidence'],
  };

  const prompt = `Analyze this blog post content and identify the PRIMARY target keyword it is trying to rank for in search engines.

Consider:
- The main topic and theme
- Keywords in headings, especially H1 and H2
- Repeated phrases throughout
- The search intent being addressed

CONTENT (first 8000 chars):
${scrapedContent.substring(0, 8000)}

Identify the single most important target keyword.`;

  const result = await gemini.generateJSON(prompt, schema,
    'You are an SEO expert. Identify the primary target keyword from this content.'
  );

  await prisma.optimizationJob.update({
    where: { id: job.id },
    data: {
      detectedKeyword: result.keyword,
      currentStep: 'keyword_complete',
    },
  });

  emitJobStatus(job.id, 'keyword_detection', 'completed',
    `Detected keyword: "${result.keyword}" (${result.confidence} confidence)`
  );

  return result.keyword;
}

// ─── Step 3: SERP Research ───

const SERP_RESEARCH_SYSTEM = `You are a competitive SEO researcher. Your mission is to analyze what's currently ranking for the given keyword and understand why those pages rank well.

RESEARCH PROCESS:
1. Search for the target keyword to see the current SERP landscape
2. Scrape the top 3-5 ranking pages to understand their content strategy
3. Identify common topics, structure patterns, and content depth across top results
4. Note any featured snippets, People Also Ask questions, and related searches

OUTPUT FORMAT:
Provide a structured competitive analysis in markdown format including:

## Top Competitors
For each competitor: URL, word count estimate, key sections/headings, unique angles

## Common Topics & Subtopics
Topics covered by all or most top results

## Content Gaps
Topics some competitors cover that others miss

## Structural Patterns
Average depth, heading usage, lists vs tables, media usage

## People Also Ask
Questions found in SERP features

## Related Searches
Additional keyword opportunities discovered

Be thorough but focused. This research will be compared against an existing page to find optimization opportunities.`;

async function runSerpResearch(job, keyword) {
  emitJobStatus(job.id, 'serp_research', 'running', `Researching competitors for "${keyword}"...`);

  const prompt = `Research the competitive landscape for the keyword: "${keyword}"

Analyze what's currently ranking, scrape 3-5 top competitors, and provide a comprehensive competitive analysis. This research will be used to audit an existing page and identify improvement opportunities.

Begin your research now.`;

  const toolExecutor = (toolName, args) =>
    executeResearchTool(toolName, args, job.id);

  const researchData = await gemini.functionCalling(
    prompt,
    TOOL_DEFINITIONS,
    SERP_RESEARCH_SYSTEM,
    toolExecutor
  );

  await prisma.optimizationJob.update({
    where: { id: job.id },
    data: {
      researchData,
      currentStep: 'research_complete',
    },
  });

  emitJobStatus(job.id, 'serp_research', 'completed', 'Competitive research complete');
  return researchData;
}

// ─── Step 4: Content Analysis ───

const ANALYSIS_SYSTEM = `You are an expert SEO content auditor. You analyze existing content against competitor data and provide a detailed, actionable content audit.

Your audit must be specific and data-driven. Do not give vague advice like "improve your content." Instead, give concrete recommendations like "Add a section on [specific topic] that competitors X and Y cover in their H2s but you are missing."

OUTPUT FORMAT:
Structure your audit as a clean markdown report with these sections:

## Content Score
Assign a score from 0-100 with a brief justification.

## Executive Summary
2-3 sentences summarizing the biggest opportunities.

## Content Depth & Completeness
- Topics competitors cover that this content is missing
- Areas where competitors go deeper
- Specific subtopics to add

## Keyword Optimization
- Primary keyword usage (title, H1, first paragraph, density)
- Missing semantic/related keywords to incorporate
- Over-optimization warnings if applicable

## Structure & Formatting
- Heading hierarchy issues
- Missing structural elements (TOC, FAQ, tables, lists)
- Heading text improvements

## Meta Tags
- Title tag evaluation and suggested improvement
- Meta description evaluation and suggested improvement

## Readability & Engagement
- Sentence/paragraph length issues
- Formatting and scannability
- Hooks, transitions, CTAs

## Prioritized Action Items
Numbered list of specific actions, ordered by impact (highest first).
Format: **[Action]**: [Specific instruction with enough detail to execute]`;

async function runAnalysis(job, scrapedContent, scrapedMeta, keyword, researchData) {
  emitJobStatus(job.id, 'analysis', 'running', 'Analyzing content against competitors...');

  const meta = JSON.parse(scrapedMeta);

  const headingStructure = meta.headings
    .map((h) => `${'  '.repeat(h.level - 1)}H${h.level}: ${h.text}`)
    .join('\n');

  const prompt = `CONTENT AUDIT REQUEST

## Source Page
URL: ${job.sourceUrl}
Title: ${meta.title}
Meta Description: ${meta.description}
Word Count: ${meta.wordCount}
Heading Structure:
${headingStructure || '(no headings found)'}

## Target Keyword
"${keyword}"

## Existing Content
${scrapedContent.substring(0, 12000)}

## Competitive Research
${researchData.substring(0, 10000)}

Provide a comprehensive content audit comparing this page against the competitive landscape. Be specific, actionable, and prioritized.`;

  const analysisReport = await claude.chat(prompt, ANALYSIS_SYSTEM);

  await prisma.optimizationJob.update({
    where: { id: job.id },
    data: {
      analysisReport,
      currentStep: 'analysis_complete',
    },
  });

  emitJobStatus(job.id, 'analysis', 'completed', 'Content analysis complete');
  return analysisReport;
}

// ─── Main Analysis Pipeline ───

export async function runOptimizationPipeline(jobId) {
  let job = null;

  try {
    job = await prisma.optimizationJob.findUnique({
      where: { id: jobId },
      include: { brand: true },
    });

    if (!job) throw new Error('Optimization job not found');
    if (!job.brand) throw new Error('Job has no associated brand');

    await prisma.optimizationJob.update({
      where: { id: jobId },
      data: { action: 'Analyzing' },
    });

    emitJobStatus(jobId, 'pipeline', 'running', 'Optimization pipeline started');

    // Step 1: Scrape
    const { markdown, meta } = await runScrapeStep(job);

    // Step 2: Keyword Detection
    const keyword = await runKeywordDetection(job, markdown);

    // Step 3: SERP Research
    const researchData = await runSerpResearch(job, keyword);

    // Step 4: Analysis
    await runAnalysis(job, markdown, meta, keyword, researchData);

    // Mark as Done
    await prisma.optimizationJob.update({
      where: { id: jobId },
      data: { action: 'Done', currentStep: 'done' },
    });

    emitJobStatus(jobId, 'done', 'completed', 'Content analysis complete!');
  } catch (error) {
    console.error(`Optimization pipeline error for job ${jobId}:`, error);

    if (job) {
      await prisma.optimizationJob.update({
        where: { id: jobId },
        data: { action: 'Error', errorMessage: error.message },
      });
    }

    emitJobStatus(jobId, 'error', 'failed', `Analysis failed: ${error.message}`);
    throw error;
  }
}

// ─── Rewrite Pipeline (user-triggered) ───

export async function runRewritePipeline(jobId, options = {}) {
  const { userInstructions } = options;
  let job = null;

  try {
    job = await prisma.optimizationJob.findUnique({
      where: { id: jobId },
      include: { brand: true },
    });

    if (!job) throw new Error('Optimization job not found');
    if (!job.analysisReport) throw new Error('Analysis must complete before rewriting');

    await prisma.optimizationJob.update({
      where: { id: jobId },
      data: { action: 'Rewriting', currentStep: 'rewrite' },
    });

    emitJobStatus(jobId, 'rewrite', 'running', 'Rewriting content with optimizations...');

    const keyword = job.targetKeyword || job.detectedKeyword;
    const meta = JSON.parse(job.scrapedMeta);

    // Build brand context
    let brandContext = '';
    if (job.brand.companyName) {
      brandContext = `\nBRAND CONTEXT:
Company: ${job.brand.companyName}
${job.brand.companyDescription ? `About: ${job.brand.companyDescription}` : ''}
${job.brand.uniqueValue ? `Value Props: ${job.brand.uniqueValue}` : ''}
Brand Mention Level: ${job.brand.brandMentionLevel || 'subtle'}`;
    }

    // Build user instructions section if provided
    const userInstructionsSection = userInstructions
      ? `\n\n## User Instructions (PRIORITY - follow these specific requests):
${userInstructions}`
      : '';

    // Load writing samples for voice/style reference
    const writingSamples = await prisma.writingSample.findMany({
      where: { brandId: job.brandId },
      select: { title: true, content: true },
      orderBy: { createdAt: 'desc' },
    });

    let voiceSection = '';
    if (writingSamples.length > 0) {
      const sampleTexts = writingSamples
        .map((s, i) => `--- Sample ${i + 1}: "${s.title}" ---\n${s.content.substring(0, 3000)}`)
        .join('\n\n');
      voiceSection = `\nWRITING STYLE REFERENCE — Match the tone, voice, and style of these samples:\n\n${sampleTexts}`;
    }

    const systemPrompt = `You are an expert SEO content writer tasked with rewriting and optimizing existing content. Your goal is to create a substantially improved version that addresses all the issues identified in the content audit while preserving the original article's core value and voice.

GUIDELINES:
- Preserve the core message and unique insights from the original
- Address EVERY prioritized action item from the audit
- Expand thin sections and add missing topics identified in the research
- Improve heading hierarchy and keyword placement
- Maintain natural keyword density
- Keep the same general structure but improve it where recommended
- Add new sections for missing topics identified in competitive analysis
- Improve readability with shorter paragraphs, lists, and formatting
${userInstructions ? '- IMPORTANT: Prioritize any specific instructions provided by the user' : ''}
${voiceSection}
${job.brand.bannedWords ? `\nBANNED WORDS: ${job.brand.bannedWords}` : ''}

OUTPUT FORMAT:
Begin the optimized content immediately. No preambles, no explanations. Pure optimized article in markdown.
Do NOT include HTML anchor tags like <a name="..."></a>. Use only clean markdown headings for sections.`;

    const prompt = `OPTIMIZATION REWRITE REQUEST

## Target Keyword: "${keyword}"
## Original Page: ${job.sourceUrl}
## Original Word Count: ${meta.wordCount}
${brandContext}${userInstructionsSection}

## Original Content:
${job.scrapedContent.substring(0, 10000)}

## Content Audit (address ALL recommendations):
${job.analysisReport}

## Competitive Research (incorporate missing topics):
${job.researchData.substring(0, 8000)}

Rewrite this content to be significantly better optimized for "${keyword}" while addressing every issue in the audit.${userInstructions ? ' Pay special attention to the user instructions provided above.' : ''} The rewritten version should be comprehensive enough to outrank current competitors.`;

    const optimizedContent = await claude.chat(prompt, systemPrompt);

    await prisma.optimizationJob.update({
      where: { id: jobId },
      data: {
        optimizedContent,
        action: 'Rewritten',
        currentStep: 'rewrite_complete',
      },
    });

    emitJobStatus(jobId, 'done', 'completed', 'Optimized content generated!');
  } catch (error) {
    console.error(`Rewrite pipeline error for job ${jobId}:`, error);

    if (job) {
      await prisma.optimizationJob.update({
        where: { id: jobId },
        data: { action: 'Error', errorMessage: error.message },
      });
    }

    emitJobStatus(jobId, 'error', 'failed', `Rewrite failed: ${error.message}`);
    throw error;
  }
}
