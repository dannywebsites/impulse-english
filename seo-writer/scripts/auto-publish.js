#!/usr/bin/env node

/**
 * Auto-Publish Pipeline - Impulse English Academy
 *
 * Standalone headless script that generates a blog article and writes it
 * as an Astro Content Collection markdown file. No Express, no Prisma.
 *
 * Usage: node auto-publish.js "topic" ["keywords"] ["category"]
 *
 * Environment variables required:
 *   ANTHROPIC_API_KEY, GEMINI_API_KEY,
 *   DATAFORSEO_LOGIN, DATAFORSEO_PASSWORD,
 *   APIFY_API_TOKEN
 */

import Anthropic from '@anthropic-ai/sdk';
import { GoogleGenAI } from '@google/genai';
import { ApifyClient } from 'apify-client';
import { stringify as yamlStringify } from 'yaml';
import { writeFileSync, existsSync } from 'fs';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

// Redirect all logging to stderr so only the slug goes to stdout
const log = (...args) => process.stderr.write(args.join(' ') + '\n');

const __dirname = dirname(fileURLToPath(import.meta.url));

// ---------------------------------------------------------------------------
// Config
// ---------------------------------------------------------------------------

const CLAUDE_MODEL = process.env.CLAUDE_MODEL || 'claude-sonnet-4-5-20250929';
const GEMINI_MODEL = process.env.GEMINI_MODEL || 'gemini-1.5-flash';
const GEMINI_TIMEOUT_MS = 120_000; // 2 min per Gemini call before abort+retry

const SITE_ROOT = resolve(
  __dirname,
  '../../March-Impulse-Web-e7ad8740054b4e468e95bc81e5e4c79f17b98c97'
);
const ARTICLES_DIR = resolve(SITE_ROOT, 'src/content/articles');

// Impulse brand settings (hardcoded, no Prisma)
const BRAND = {
  companyName: 'Impulse English Academy',
  companyDescription:
    'Centro Preparador Oficial Cambridge en La Vaguada, Madrid. 100% de aprobados en 2024-2025.',
  targetAudience:
    'Padres buscando clases de inglés para sus hijos y adultos/jóvenes profesionales en Madrid',
  uniqueValue:
    'Centro Oficial Cambridge con 100% aprobados, grupos reducidos de máx. 10 alumnos, profesores nativos certificados TEFL/CELTA',
  socialProof:
    '100% de aprobados en exámenes Cambridge 2024-2025. Más de 500 alumnos satisfechos.',
  brandMentionLevel: 'subtle',
  language: 'Spanish',
  locationCode: 'Spain',
  researchDepth: 'standard',
};

// ---------------------------------------------------------------------------
// API Clients (lazy)
// ---------------------------------------------------------------------------

let claudeClient = null;
function getClaude() {
  if (!claudeClient) {
    claudeClient = new Anthropic({
      apiKey: process.env.ANTHROPIC_API_KEY,
      timeout: 5 * 60 * 1000,
      maxRetries: 3,
    });
  }
  return claudeClient;
}

let geminiClient = null;
function getGemini() {
  if (!geminiClient) {
    geminiClient = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });
  }
  return geminiClient;
}

let apifyClient = null;
function getApify() {
  if (!apifyClient) {
    apifyClient = new ApifyClient({ token: process.env.APIFY_API_TOKEN });
  }
  return apifyClient;
}

// ---------------------------------------------------------------------------
// Retry helper
// ---------------------------------------------------------------------------

async function withRetry(fn, label, maxRetries = 3) {
  for (let attempt = 0; attempt <= maxRetries; attempt++) {
    try {
      return await fn();
    } catch (err) {
      const retryable =
        /503|429|UNAVAILABLE|RESOURCE_EXHAUSTED|timeout|ECONNRESET|socket hang up|fetch failed|ETIMEDOUT|ECONNABORTED|abort/i.test(
          err.message
        );
      if (attempt < maxRetries && retryable) {
        const delay = 3000 * Math.pow(2, attempt) + Math.random() * 2000;
        log(
          `[${label}] Attempt ${attempt + 1} failed (${err.message}). Retrying in ${(delay / 1000).toFixed(1)}s…`
        );
        await new Promise((r) => setTimeout(r, delay));
      } else {
        throw err;
      }
    }
  }
}

// ---------------------------------------------------------------------------
// DataForSEO
// ---------------------------------------------------------------------------

async function serpSearch(query) {
  const login = process.env.DATAFORSEO_LOGIN;
  const password = process.env.DATAFORSEO_PASSWORD;
  const auth = 'Basic ' + Buffer.from(`${login}:${password}`).toString('base64');

  const res = await fetch(
    'https://api.dataforseo.com/v3/serp/google/organic/live/regular',
    {
      method: 'POST',
      headers: { Authorization: auth, 'Content-Type': 'application/json' },
      body: JSON.stringify([
        {
          keyword: query,
          location_name: 'Spain',
          language_code: 'es',
          depth: 10,
        },
      ]),
    }
  );
  if (!res.ok) throw new Error(`DataForSEO ${res.status}`);
  const data = await res.json();
  const result = data.tasks?.[0]?.result?.[0];
  if (!result) return { organicResults: [], paa: [], relatedSearches: [] };

  const items = result.items || [];
  return {
    organicResults: items
      .filter((i) => i.type === 'organic')
      .map((i) => ({
        position: i.rank_absolute,
        title: i.title,
        link: i.url,
        snippet: i.description,
      })),
    paa: items
      .filter((i) => i.type === 'people_also_ask')
      .flatMap((i) =>
        (i.items || [i]).map((q) => ({
          question: q.title,
          snippet: q.description || '',
        }))
      ),
    relatedSearches: (
      items.find((i) => i.type === 'related_searches')?.items || []
    ).map((r) => r.title || r.query),
  };
}

// ---------------------------------------------------------------------------
// Apify scraper
// ---------------------------------------------------------------------------

async function scrapeURL(url) {
  const run = await getApify()
    .actor('apify/website-content-crawler')
    .call({
      startUrls: [{ url }],
      maxCrawlPages: 1,
      crawlerType: 'cheerio',
      removeElementsCssSelector:
        'nav, footer, header, aside, .sidebar, .cookie-banner',
    });
  const { items } = await getApify()
    .dataset(run.defaultDatasetId)
    .listItems();
  return items?.[0]?.text || items?.[0]?.markdown || '';
}

// ---------------------------------------------------------------------------
// Image mapping
// ---------------------------------------------------------------------------

const CATEGORY_IMAGE_MAP = {
  'Cambridge B2 First': 'cambridge',
  'Cambridge C1 Advanced': 'cambridge',
  'Cambridge B1 Preliminary': 'cambridge',
  'Cambridge A2 Key': 'cambridge',
  Cambridge: 'cambridge',
  Linguaskill: 'technology',
  Comparison: 'classroom',
  'Learning Methods': 'classroom',
  Skills: 'adults',
  'Kids Early Childhood': 'infantil',
  'Kids Primary': 'students',
  'Kids Secondary': 'teenagers',
  Kids: 'infantil',
  Career: 'adults',
  'Local Madrid': 'reception',
  Price: 'reception',
  Definitions: 'classroom',
};

const KEYWORD_IMAGE_RULES = [
  { pattern: /niñ|infantil|bebé|pequeñ/i, key: 'infantil' },
  { pattern: /primaria|colegio|6.años|7.años|8.años/i, key: 'students' },
  { pattern: /adolescen|secundaria|joven|teenager/i, key: 'teenagers' },
  { pattern: /cambridge|b2|c1|b1|a2|first|advanced|preliminary|key/i, key: 'cambridge' },
  { pattern: /linguaskill|aptis|online/i, key: 'technology' },
  { pattern: /adult|empresa|profesional|trabajo|carrera/i, key: 'adults' },
  { pattern: /academia|madrid|precio|cost|barrio|vaguada/i, key: 'reception' },
];

function mapImageKey(topic, category) {
  if (category && CATEGORY_IMAGE_MAP[category]) {
    return CATEGORY_IMAGE_MAP[category];
  }
  for (const rule of KEYWORD_IMAGE_RULES) {
    if (rule.pattern.test(topic)) return rule.key;
  }
  return 'classroom';
}

// ---------------------------------------------------------------------------
// Category auto-detection
// ---------------------------------------------------------------------------

const CATEGORY_RULES = [
  { pattern: /b2.*first|first.*b2/i, cat: 'Cambridge B2 First' },
  { pattern: /c1.*advanced|advanced|cae/i, cat: 'Cambridge C1 Advanced' },
  { pattern: /b1.*preliminary|preliminary|pet/i, cat: 'Cambridge B1 Preliminary' },
  { pattern: /a2.*key|key.*a2|ket/i, cat: 'Cambridge A2 Key' },
  { pattern: /linguaskill|aptis/i, cat: 'Linguaskill' },
  { pattern: /vs|compar|diferencia/i, cat: 'Comparison' },
  { pattern: /speaking|listening|writing|reading/i, cat: 'Skills' },
  { pattern: /niñ|infantil|bebé|3.años|4.años|5.años/i, cat: 'Kids Early Childhood' },
  { pattern: /primaria|colegio|6.años/i, cat: 'Kids Primary' },
  { pattern: /secundaria|adolescen|joven/i, cat: 'Kids Secondary' },
  { pattern: /trabajo|empresa|profesional|carrera/i, cat: 'Career' },
  { pattern: /madrid|academia|barrio|vaguada/i, cat: 'Local Madrid' },
  { pattern: /precio|cost|cuánto cuesta|invertir/i, cat: 'Price' },
  { pattern: /qué es|significado|definición/i, cat: 'Definitions' },
];

function detectCategory(topic) {
  for (const rule of CATEGORY_RULES) {
    if (rule.pattern.test(topic)) return rule.cat;
  }
  return 'Learning Methods';
}

// ---------------------------------------------------------------------------
// Internal link refs by category
// ---------------------------------------------------------------------------

const INTERNAL_LINKS_BY_CATEGORY = {
  'Cambridge B2 First': ['B2 page', 'Metodología', 'Cursos Adultos', 'Precios Cambridge'],
  'Cambridge C1 Advanced': ['C1 Guide', 'Metodología', 'Cursos Adultos', 'Precios Cambridge'],
  'Cambridge B1 Preliminary': ['B1 Guide', 'Metodología', 'Cursos Adultos', 'Precios Cambridge'],
  'Cambridge A2 Key': ['A2 Guide', 'Metodología', 'Cursos Adultos'],
  Cambridge: ['Cambridge Hub', 'Metodología', 'Cursos Adultos'],
  Linguaskill: ['Linguaskill page', 'Precios Linguaskill', 'Cursos Adultos'],
  Comparison: ['Cambridge Hub', 'Linguaskill page', 'Metodología'],
  'Learning Methods': ['Metodología', 'Cursos Adultos', 'Contacto'],
  Skills: ['Metodología', 'Cursos Adultos', 'B2 page'],
  'Kids Early Childhood': ['Infantil', 'Great Little People', 'Metodología'],
  'Kids Primary': ['Primaria', 'Metodología', 'Contacto'],
  'Kids Secondary': ['Secundaria', 'Metodología', 'B1 Guide'],
  Kids: ['Infantil', 'Primaria', 'Secundaria', 'Metodología'],
  Career: ['Cursos Adultos', 'Linguaskill page', 'Metodología'],
  'Local Madrid': ['Location pages', 'Barrio del Pilar', 'La Vaguada page', 'Contacto'],
  Price: ['Precios Cambridge', 'Precios Linguaskill', 'Contacto', 'Cursos Adultos'],
  Definitions: ['Cambridge Hub', 'Metodología', 'Contacto'],
};

// CTA links by category
const CTA_LINKS_BY_CATEGORY = {
  'Cambridge B2 First': [
    { text: 'Prueba de nivel gratis', href: '/reservar-clase' },
    { text: 'Preparación B2 First', href: '/examenes-cambridge/b2-first' },
  ],
  'Cambridge C1 Advanced': [
    { text: 'Prueba de nivel gratis', href: '/reservar-clase' },
    { text: 'Preparación C1 Advanced', href: '/examenes-cambridge/c1-advanced' },
  ],
  'Cambridge B1 Preliminary': [
    { text: 'Prueba de nivel gratis', href: '/reservar-clase' },
    { text: 'Preparación B1 Preliminary', href: '/examenes-cambridge/b1-preliminary' },
  ],
  Linguaskill: [
    { text: 'Prueba de nivel gratis', href: '/reservar-clase' },
    { text: 'Preparación Linguaskill', href: '/linguaskill' },
  ],
  default: [
    { text: 'Prueba de nivel gratis', href: '/reservar-clase' },
    { text: 'Nuestros cursos', href: '/cursos-ingles/adultos' },
  ],
};

function getCtaLinks(category) {
  return CTA_LINKS_BY_CATEGORY[category] || CTA_LINKS_BY_CATEGORY.default;
}

// Breadcrumbs by category
const CATEGORY_HUB = {
  'Cambridge B2 First': { label: 'B2 First', href: '/examenes-cambridge/b2-first' },
  'Cambridge C1 Advanced': { label: 'C1 Advanced', href: '/examenes-cambridge/c1-advanced' },
  'Cambridge B1 Preliminary': { label: 'B1 Preliminary', href: '/examenes-cambridge/b1-preliminary' },
  'Cambridge A2 Key': { label: 'Exámenes Cambridge', href: '/examenes-cambridge' },
  Linguaskill: { label: 'Linguaskill', href: '/linguaskill' },
  'Local Madrid': { label: 'Academias Madrid', href: '/academias-ingles-madrid' },
};

// ---------------------------------------------------------------------------
// Step 1 - Research
// ---------------------------------------------------------------------------

const RESEARCH_SYSTEM_PROMPT = `Conduct comprehensive competitive intelligence research to discover the optimal content strategy for the given keyword/topic. Your mission is to reverse-engineer search intent, identify content opportunities, and create a complete content brief.

RESEARCH OBJECTIVES:
1. Intent Discovery: Determine what users ACTUALLY want when searching this keyword
2. Content Format Analysis: Should this be a guide, comparison, listicle, problem-solution article?
3. Decode Ranking DNA: Analyze why top-ranking content succeeds
4. Competitive Intelligence: Identify what works, what's missing, and exploitable gaps
5. Strategic Positioning: Develop a complete content strategy

MANDATORY REQUIREMENTS:
- Use ALL available research tools SYSTEMATICALLY (3-5 calls each)
- Analyze at least 5-7 top-ranking competitors
- Provide a complete content brief that guides the writer

OUTPUT FORMAT: Clean, well-structured markdown with ## headings, bullet lists, tables, and blockquotes.`;

const RESEARCH_TOOLS = [
  {
    name: 'serp_search',
    description: 'Search Google SERPs for a keyword',
    parameters: {
      type: 'object',
      properties: {
        query: { type: 'string', description: 'Search query' },
      },
      required: ['query'],
    },
  },
  {
    name: 'web_scrape',
    description: 'Scrape a URL to get its content in markdown',
    parameters: {
      type: 'object',
      properties: {
        url: { type: 'string', description: 'URL to scrape' },
      },
      required: ['url'],
    },
  },
];

async function runResearch(topic, keywords) {
  log('\n🔍 Step 1/5: Research');

  const currentDate = new Date().toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  const prompt = `RESEARCH PARAMETERS:
Topic/Keywords: ${topic} / ${keywords || topic}
Language: Spanish
Today's Date: ${currentDate}
Research Depth: Analyze 5-7 top-ranking competitors. Use 3-5 SERP searches and 3-5 page scrapes.
TARGET AUDIENCE: ${BRAND.targetAudience}

IMPORTANT: Do NOT append the year to your search queries unless the user's keyword already includes a year.

Begin your comprehensive research now. Use all available tools extensively to gather data, then synthesize your findings into a complete content brief.`;

  const config = {
    tools: [{ functionDeclarations: RESEARCH_TOOLS }],
    systemInstruction: RESEARCH_SYSTEM_PROMPT,
  };

  let contents = [{ role: 'user', parts: [{ text: prompt }] }];
  let iterations = 0;

  while (iterations < 20) {
    iterations++;
    log(`  Research iteration ${iterations}…`);

    const response = await withRetry(
      () => {
        const ac = new AbortController();
        const timer = setTimeout(() => ac.abort(), GEMINI_TIMEOUT_MS);
        return getGemini()
          .models.generateContent({
            model: GEMINI_MODEL,
            contents,
            config: { ...config, abortSignal: ac.signal },
          })
          .finally(() => clearTimeout(timer));
      },
      `research-iter-${iterations}`,
      5 // more retries for Gemini 503s
    );

    const message = response.candidates[0].content;
    const functionCalls = response.functionCalls;

    if (!functionCalls || functionCalls.length === 0) {
      log('  ✅ Research complete');
      return response.text;
    }

    contents.push(message);

    const functionResponses = [];
    for (const fnCall of functionCalls) {
      log(`  🔧 ${fnCall.name}: ${JSON.stringify(fnCall.args).substring(0, 80)}`);
      try {
        let result;
        if (fnCall.name === 'serp_search') {
          result = JSON.stringify(await serpSearch(fnCall.args.query));
        } else if (fnCall.name === 'web_scrape') {
          result = await scrapeURL(fnCall.args.url);
        } else {
          result = `Unknown tool: ${fnCall.name}`;
        }
        functionResponses.push({
          functionResponse: { name: fnCall.name, response: { result } },
        });
      } catch (err) {
        log(`  ⚠️ Tool error: ${err.message}`);
        functionResponses.push({
          functionResponse: {
            name: fnCall.name,
            response: { error: err.message },
          },
        });
      }
    }

    contents.push({ role: 'user', parts: functionResponses });
  }

  throw new Error('Research exceeded max iterations');
}

// ---------------------------------------------------------------------------
// Step 2 - Write article
// ---------------------------------------------------------------------------

const WRITER_SYSTEM_PROMPT = `Create exceptional content that dominates search results and perfectly serves user intent based on the comprehensive research brief provided.

LANGUAGE REQUIREMENT (MANDATORY):
- Write ALL content in Peninsular Spanish (Spanish from Spain).
- Use vosotros/vuestro forms for second-person plural (NEVER ustedes).
- Use Spain-specific vocabulary: ordenador (not computadora), móvil (not celular), coche (not carro), vale (not OK).
- Tone: formal but friendly, professional yet approachable.
- NEVER use Latin American Spanish variants.

EXECUTION REQUIREMENTS:
- Follow the exact content structure recommended in the research
- Address every "must-include element" identified
- Use all key statistics and data points discovered
- Write to the identified user profile and expertise level
- Match or exceed the content length recommendation
- Incorporate semantic keywords naturally throughout
- Include a detailed FAQ section at the end with 5-8 questions and answers

BANNED WORDS (never use these - they sound robotic and generic):
delve, tapestry, realm, landscape, ever-evolving, cutting-edge, robust, transformative, pivotal, vibrant, crucial, compelling, seamless, groundbreaking, leverage, harness, embark, navigate (metaphorical), unveil, facilitate, synergy, game-changer, unlock, unleash, elevate, utilize, endeavour, multifaceted, holistic, paradigm, empower

OUTPUT FORMAT:
Begin content immediately without prefixes, explanations, or markdown code blocks. Write as a full article with clear headings (## and ###).`;

async function runWriter(topic, keywords, researchBrief) {
  log('\n✍️  Step 2/5: Writing article');

  const prompt = `CORE REQUIREMENTS:
- Primary Focus: ${topic} / ${keywords || topic}
- Language: Peninsular Spanish (Spain)
- Target length: 1500-2500 words

MANDATORY ELEMENTS TO INCORPORATE:

1. RESEARCH FOUNDATION (Your Complete Blueprint):
${researchBrief}

Follow this blueprint while making the content engaging and valuable.

2. BRAND CONTEXT (weave subtly):
Company: ${BRAND.companyName}
About: ${BRAND.companyDescription}
Value Props: ${BRAND.uniqueValue}
Social Proof: ${BRAND.socialProof}
Level: Subtle - mention naturally once or twice, do not over-promote.

Write the complete article now.`;

  const response = await withRetry(async () => {
    const stream = getClaude().messages.stream({
      model: CLAUDE_MODEL,
      max_tokens: 16384,
      system: WRITER_SYSTEM_PROMPT,
      messages: [{ role: 'user', content: prompt }],
    });

    let accumulated = '';
    stream.on('text', (text) => {
      accumulated += text;
    });

    try {
      const msg = await stream.finalMessage();
      return msg.content[0].text;
    } catch (err) {
      if (accumulated.length > 500) {
        log('  ⚠️ Stream interrupted but recovered partial content');
        return accumulated;
      }
      throw err;
    }
  }, 'writer');

  log(`  ✅ Article written (${response.length} chars)`);
  return response;
}

// ---------------------------------------------------------------------------
// Step 3 - Meta generation
// ---------------------------------------------------------------------------

const META_SYSTEM_PROMPT = `Create high-converting SEO metadata for the following content.

LANGUAGE REQUIREMENT (MANDATORY):
- ALL metadata MUST be written in Peninsular Spanish (Spain).
- Use Spain-specific vocabulary and phrasing.
- Slug must use Spanish words (lowercase, hyphens, no accents in slug).

Create:
- Meta Title (50-60 characters): Front-load primary keyword in Spanish. NO brand names.
- Meta Description (150-160 characters): Open with a strong benefit or hook in Spanish, include subtle CTA.
- Slug (3-5 words): All lowercase with hyphens, primary keyword in Spanish, no accents.

Respond with valid JSON only.`;

const META_SCHEMA = {
  type: 'object',
  properties: {
    metatitle: { type: 'string', description: '50-60 character meta title' },
    metadescription: { type: 'string', description: '150-160 char meta description' },
    slug: { type: 'string', description: 'URL slug with hyphens, lowercase, no accents' },
  },
  required: ['metatitle', 'metadescription', 'slug'],
};

async function runMetaGen(topic, keywords, articleContent) {
  log('\n🏷️  Step 3/5: Meta generation');

  const prompt = `PRIMARY FOCUS: ${topic} / ${keywords || topic}
LANGUAGE: Spanish

IMPORTANT: Do NOT add a year unless the keyword already contains one.

CONTENT TO ANALYZE:
${articleContent.substring(0, 5000)}

Generate optimized SEO metadata.`;

  const meta = await withRetry(
    () => {
      const ac = new AbortController();
      const timer = setTimeout(() => ac.abort(), GEMINI_TIMEOUT_MS);
      return getGemini()
        .models.generateContent({
          model: GEMINI_MODEL,
          contents: prompt,
          config: {
            responseMimeType: 'application/json',
            responseJsonSchema: META_SCHEMA,
            systemInstruction: META_SYSTEM_PROMPT,
            abortSignal: ac.signal,
          },
        })
        .then((r) => JSON.parse(r.text))
        .finally(() => clearTimeout(timer));
    },
    'meta-gen',
    5
  );

  log(`  ✅ Meta: "${meta.metatitle}" → /${meta.slug}`);
  return meta;
}

// ---------------------------------------------------------------------------
// Step 4 - Schema conversion (deterministic markdown-to-schema parser)
// ---------------------------------------------------------------------------
// NO AI rewriting. The writer's exact words are preserved.
// Splits on ## headings, converts markdown paragraphs to <p> tags,
// extracts FAQs from the FAQ section pattern.

/**
 * Convert markdown text to HTML paragraphs.
 * Preserves the writer's exact words - only wraps in <p> tags
 * and converts basic markdown formatting to HTML.
 */
function markdownToHTML(md) {
  // Split into paragraphs (double newline separated)
  const paragraphs = md
    .split(/\n\n+/)
    .map((p) => p.trim())
    .filter((p) => p.length > 0);

  return paragraphs
    .map((p) => {
      // Skip if it's a heading (### subsection inside a section)
      if (p.startsWith('###')) {
        const text = p.replace(/^###\s*/, '');
        return `<h3>${text}</h3>`;
      }

      // Handle unordered lists
      if (p.match(/^[-*]\s/m)) {
        const items = p
          .split(/\n/)
          .filter((line) => line.match(/^[-*]\s/))
          .map((line) => `<li>${convertInlineMarkdown(line.replace(/^[-*]\s*/, ''))}</li>`)
          .join('');
        return `<ul>${items}</ul>`;
      }

      // Handle ordered lists
      if (p.match(/^\d+\.\s/m)) {
        const items = p
          .split(/\n/)
          .filter((line) => line.match(/^\d+\.\s/))
          .map((line) => `<li>${convertInlineMarkdown(line.replace(/^\d+\.\s*/, ''))}</li>`)
          .join('');
        return `<ol>${items}</ol>`;
      }

      // Regular paragraph - convert inline markdown and wrap in <p>
      const html = convertInlineMarkdown(p.replace(/\n/g, ' '));
      return `<p>${html}</p>`;
    })
    .join('');
}

/**
 * Convert inline markdown (bold, italic, links) to HTML.
 */
function convertInlineMarkdown(text) {
  return text
    .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
    .replace(/\*(.+?)\*/g, '<em>$1</em>')
    .replace(/\[(.+?)\]\((.+?)\)/g, '<a href="$2">$1</a>');
}

/**
 * Extract FAQ items from the article's FAQ section.
 * Looks for ### question / answer pairs after a ## FAQ heading.
 */
function extractFAQs(articleContent) {
  // Find the FAQ section (various heading patterns)
  const faqMatch = articleContent.match(
    /## (?:Preguntas [Ff]recuentes|FAQ|Preguntas [Rr]elacionadas|Preguntas y [Rr]espuestas)[\s\S]*$/
  );

  if (!faqMatch) return [];

  const faqSection = faqMatch[0];
  const faqs = [];

  // Pattern 1: ### Question\n\nAnswer
  const h3Pattern = /###\s*(.+?)\n\n([\s\S]*?)(?=###|\n## |$)/g;
  let match;
  while ((match = h3Pattern.exec(faqSection)) !== null) {
    const question = match[1].trim().replace(/^\*\*|\*\*$/g, '');
    const answer = match[2].trim().split('\n\n')[0].trim();
    if (question && answer) {
      faqs.push({ question, answer });
    }
  }

  // Pattern 2: **Question**\n\nAnswer (if no ### matches found)
  if (faqs.length === 0) {
    const boldPattern = /\*\*(.+?)\*\*\n\n([\s\S]*?)(?=\*\*|\n## |$)/g;
    while ((match = boldPattern.exec(faqSection)) !== null) {
      const question = match[1].trim();
      const answer = match[2].trim().split('\n\n')[0].trim();
      if (question && answer) {
        faqs.push({ question, answer });
      }
    }
  }

  return faqs;
}

/**
 * Deterministic schema conversion - no AI, preserves the writer's exact words.
 */
function runSchemaConversion(topic, articleContent, category) {
  log('\n🔄 Step 4/5: Schema conversion (deterministic)');

  // Split article on ## headings
  const sections = [];
  const h2Pattern = /^## (.+)$/gm;
  const headings = [];
  let match;

  while ((match = h2Pattern.exec(articleContent)) !== null) {
    headings.push({ heading: match[1].trim(), index: match.index });
  }

  // Extract content between headings
  for (let i = 0; i < headings.length; i++) {
    const start = headings[i].index + articleContent.substring(headings[i].index).indexOf('\n') + 1;
    const end = i + 1 < headings.length ? headings[i + 1].index : articleContent.length;
    const content = articleContent.substring(start, end).trim();
    sections.push({ heading: headings[i].heading, content });
  }

  // Separate FAQ section from content sections
  const faqHeadingPatterns = /preguntas frecuentes|faq|preguntas relacionadas|preguntas y respuestas/i;
  const contentSections = sections.filter((s) => !faqHeadingPatterns.test(s.heading));
  const faqItems = extractFAQs(articleContent);

  // Convert each content section's markdown to HTML (preserving exact words)
  const htmlSections = contentSections.map((s) => ({
    heading: s.heading,
    content: markdownToHTML(s.content),
  }));

  // Extract paaAnswer from content before the first ## heading (the intro paragraph)
  const introEnd = headings.length > 0 ? headings[0].index : articleContent.length;
  const introParagraphs = articleContent
    .substring(0, introEnd)
    .trim()
    .split(/\n\n+/)
    .filter((p) => p.trim().length > 0 && !p.startsWith('#'));

  // Use the first 2-3 paragraphs as the direct answer
  const paaAnswer = introParagraphs
    .slice(0, 3)
    .map((p) => p.replace(/\*\*(.+?)\*\*/g, '$1').replace(/\*(.+?)\*/g, '$1').trim())
    .join(' ');

  // Calculate read time from word count
  const wordCount = articleContent.split(/\s+/).length;
  const readMinutes = Math.max(3, Math.round(wordCount / 200));
  const readTime = `${readMinutes} min`;

  // Generate impulse section (programmatic, not AI-rewritten)
  const categoryNames = {
    'Cambridge B2 First': 'el B2 First',
    'Cambridge C1 Advanced': 'el C1 Advanced',
    'Cambridge B1 Preliminary': 'el B1 Preliminary',
    'Cambridge A2 Key': 'el A2 Key',
    Linguaskill: 'el Linguaskill',
    'Kids Early Childhood': 'el ingles infantil',
    'Kids Primary': 'el ingles en primaria',
    'Kids Secondary': 'el ingles en secundaria',
    Kids: 'el ingles para ninos',
    Career: 'el ingles profesional',
    'Local Madrid': 'el ingles en Madrid',
    Price: 'tu preparacion',
  };

  const topicRef = categoryNames[category] || 'tu aprendizaje de ingles';
  const impulseSection = {
    heading: `Impulse English Academy te ayuda con ${topicRef}`,
    content: `En Impulse English Academy, Centro Preparador Oficial Cambridge en La Vaguada (Madrid), os acompanamos en cada paso. Con un 100% de aprobados en examenes Cambridge 2024-2025, grupos reducidos de maximo 10 alumnos y profesores nativos certificados TEFL/CELTA, teneis todo lo necesario para alcanzar vuestros objetivos.`,
  };

  // Build the question from the topic
  const question = topic.replace(/^¿|[?]$/g, '').trim();

  log(
    `  ✅ Schema: ${htmlSections.length} sections, ${faqItems.length} FAQs, ${readTime} read time`
  );

  return {
    question: topic,
    paaAnswer,
    contextSections: htmlSections,
    impulseSection,
    faqItems,
    readTime,
  };
}

// ---------------------------------------------------------------------------
// Step 5 - Assemble & write file
// ---------------------------------------------------------------------------

function assembleArticle(meta, schema, category, imageKey) {
  const today = new Date().toISOString().split('T')[0];
  const hub = CATEGORY_HUB[category];
  const ctaLinks = getCtaLinks(category);
  const internalLinkRefs =
    INTERNAL_LINKS_BY_CATEGORY[category] ||
    INTERNAL_LINKS_BY_CATEGORY.default ||
    ['Metodología', 'Contacto'];

  const breadcrumbs = [
    { label: 'Blog', href: '/blog' },
    ...(hub ? [hub] : []),
    { label: meta.metatitle.substring(0, 40) },
  ];

  const frontmatter = {
    url: `/blog/${meta.slug}`,
    category,
    priority: 'Medium',
    question: schema.question,
    seoTitle: meta.metatitle,
    metaDescription: meta.metadescription,
    paaAnswer: schema.paaAnswer,
    contextSections: schema.contextSections,
    impulseSection: {
      heading: schema.impulseSection.heading,
      content: schema.impulseSection.content,
      ctaLinks,
    },
    faqItems: schema.faqItems,
    internalLinkRefs,
    breadcrumbs,
    publishedDate: today,
    modifiedDate: today,
    readTime: schema.readTime || '6 min',
    imageKey,
  };

  // Use YAML block scalar style for multi-line HTML content
  const yamlStr = yamlStringify(frontmatter, {
    lineWidth: 0, // no line wrapping
    blockQuote: 'literal',
  });

  // Article body (the paaAnswer repeated as body for Astro rendering)
  const body = schema.paaAnswer;

  return `---\n${yamlStr}---\n\n${body}\n`;
}

// ---------------------------------------------------------------------------
// Main
// ---------------------------------------------------------------------------

async function main() {
  const [topic, keywords, categoryArg] = process.argv.slice(2);

  if (!topic) {
    log('Usage: node auto-publish.js "topic" ["keywords"] ["category"]');
    process.exit(1);
  }

  // Validate env vars
  const required = [
    'ANTHROPIC_API_KEY',
    'GEMINI_API_KEY',
    'DATAFORSEO_LOGIN',
    'DATAFORSEO_PASSWORD',
    'APIFY_API_TOKEN',
  ];
  const missing = required.filter((k) => !process.env[k]);
  if (missing.length) {
    log(`Missing environment variables: ${missing.join(', ')}`);
    process.exit(1);
  }

  // Pre-flight: verify Anthropic key is valid before spending time on research
  log('\n🔑 Validating API keys…');
  try {
    await getClaude().messages.create({
      model: CLAUDE_MODEL,
      max_tokens: 5,
      messages: [{ role: 'user', content: 'ping' }],
    });
    log('  ✅ Anthropic key valid');
  } catch (err) {
    log(`  ❌ Anthropic key invalid: ${err.message}`);
    log('  → Update ANTHROPIC_API_KEY in GitHub repo secrets');
    process.exit(1);
  }

  const category = categoryArg || detectCategory(topic);
  const imageKey = mapImageKey(topic, category);

  log(`\n📝 Auto-Publish Pipeline`);
  log(`   Topic: ${topic}`);
  log(`   Keywords: ${keywords || '(auto)'}`);
  log(`   Category: ${category}`);
  log(`   Image: ${imageKey}`);
  log(`   Output: ${ARTICLES_DIR}/\n`);

  // Step 1: Research
  const researchBrief = await runResearch(topic, keywords);

  // Step 2: Write article
  const articleContent = await runWriter(topic, keywords, researchBrief);

  // Step 3: Meta generation
  const meta = await runMetaGen(topic, keywords, articleContent);

  // Step 4: Schema conversion (deterministic - no AI rewriting)
  const schema = runSchemaConversion(topic, articleContent, category);

  // Step 5: Assemble & write
  log('\n💾 Step 5/5: Writing file');

  const slug = meta.slug;
  const filePath = resolve(ARTICLES_DIR, `${slug}.md`);

  // Safety: ensure we never write outside the articles directory
  if (!filePath.startsWith(ARTICLES_DIR)) {
    throw new Error(`SAFETY: Refusing to write outside articles directory: ${filePath}`);
  }

  if (existsSync(filePath)) {
    log(`  ⚠️ File already exists: ${slug}.md - overwriting`);
  }

  const content = assembleArticle(meta, schema, category, imageKey);
  writeFileSync(filePath, content, 'utf-8');

  log(`  ✅ Written: ${filePath}`);
  log(`\n🎉 Done! Article slug: ${slug}`);

  // Print slug to stdout for the GitHub Actions workflow to capture
  // (all log output goes to stderr via the log() function)
  process.stdout.write(slug);
}

main().catch((err) => {
  log(`\n❌ Pipeline failed: ${err.message}`);
  log(err.stack);
  process.exit(1);
});
