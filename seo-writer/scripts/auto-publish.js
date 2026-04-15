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
import { stringify as yamlStringify, Scalar } from 'yaml';
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
const GEMINI_MODEL = process.env.GEMINI_MODEL || 'gemini-3-flash-preview';
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
      apiKey: (process.env.ANTHROPIC_API_KEY || '').trim(),
      timeout: 5 * 60 * 1000,
      maxRetries: 3,
    });
  }
  return claudeClient;
}

let geminiClient = null;
function getGemini() {
  if (!geminiClient) {
    geminiClient = new GoogleGenAI({ apiKey: (process.env.GEMINI_API_KEY || '').trim() });
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
// Image catalog & selection (3+ images per article)
// ---------------------------------------------------------------------------

// S3-hosted image catalog organized by category
const IMAGE_CATALOG = {
  cambridge: [
    { url: 'https://impulseenglish.s3.us-east-1.amazonaws.com/impulsephotos/6E08CD95-47B7-4D36-95C7-FECFB41E3883.JPEG', alt: 'Certificado oficial Cambridge English academia La Vaguada Madrid' },
    { url: 'https://impulseenglish.s3.us-east-1.amazonaws.com/impulsephotos/Cambridge+search.JPEG', alt: 'Centro Cambridge verificado Impulse English Academy Madrid' },
    { url: 'https://impulseenglish.s3.us-east-1.amazonaws.com/impulsephotos/JP+WITH+STUDENTS.jpg', alt: 'Profesor JP con estudiantes y certificados Cambridge La Vaguada Madrid' },
    { url: 'https://impulseenglish.s3.us-east-1.amazonaws.com/LARA+C1+CERT.JPEG', alt: 'Lara con certificado Cambridge C1 Advanced academia La Vaguada Madrid' },
    { url: 'https://impulseenglish.s3.us-east-1.amazonaws.com/NEW/Cambridge+logo+-+Edited.png', alt: 'Logo Cambridge English centro preparador oficial La Vaguada Madrid' },
  ],
  classroom: [
    { url: 'https://impulseenglish.s3.us-east-1.amazonaws.com/impulsephotos/NACHOS+photos.+/Classroom+Facilities+Main+Classroom.JPG', alt: 'Aula principal academia inglés La Vaguada Barrio del Pilar Madrid' },
    { url: 'https://impulseenglish.s3.us-east-1.amazonaws.com/CLASS+ROOM+FACILITIES.JPEG', alt: 'Instalaciones aula academia inglés La Vaguada Madrid' },
    { url: 'https://impulseenglish.s3.us-east-1.amazonaws.com/impulsephotos/NACHOS+photos.+/Technology-based+classroom+photo.JPG', alt: 'Aula tecnológica academia inglés La Vaguada Madrid' },
    { url: 'https://impulseenglish.s3.us-east-1.amazonaws.com/impulsephotos/%40nabscabDSC_6785.JPEG', alt: 'Vista aérea aula Stephen academia inglés La Vaguada Madrid' },
  ],
  infantil: [
    { url: 'https://impulseenglish.s3.us-east-1.amazonaws.com/impulsephotos/NACHOS+photos.+/Infantil+classes.JPG', alt: 'Clase de inglés infantil Great Little People La Vaguada Madrid' },
    { url: 'https://impulseenglish.s3.us-east-1.amazonaws.com/impulsephotos/NACHOS+photos.+/Infantile+classes.JPG', alt: 'Niños pequeños clase inglés inmersión La Vaguada Madrid' },
    { url: 'https://impulseenglish.s3.us-east-1.amazonaws.com/impulsephotos/ESCUELA_GONZALO-21.JPEG', alt: 'Niño de infantil feliz aprendiendo inglés La Vaguada Madrid' },
    { url: 'https://impulseenglish.s3.us-east-1.amazonaws.com/NEW/JPEG+UPLOADS/INFANTS+CLASS.jpg', alt: 'Clase de inglés para niños pequeños academia La Vaguada' },
  ],
  students: [
    { url: 'https://impulseenglish.s3.us-east-1.amazonaws.com/impulsephotos/NACHOS+photos.+/Primary+classes+students+smiling.JPG', alt: 'Estudiantes primaria sonriendo clase inglés La Vaguada Madrid' },
    { url: 'https://impulseenglish.s3.us-east-1.amazonaws.com/impulsephotos/NACHOS+photos.+/Primary+classes.JPG', alt: 'Clase inglés primaria Cambridge Young Learners La Vaguada Madrid' },
    { url: 'https://impulseenglish.s3.us-east-1.amazonaws.com/NEW/IMG_8639.jpg', alt: 'Estudiante de primaria clase inglés Cambridge La Vaguada Madrid' },
    { url: 'https://impulseenglish.s3.us-east-1.amazonaws.com/NEW/JPEG+UPLOADS/PRIAMRY.jpg', alt: 'Estudiante de primaria inglés academia Cambridge La Vaguada Madrid' },
  ],
  teenagers: [
    { url: 'https://impulseenglish.s3.us-east-1.amazonaws.com/impulsephotos/NACHOS+photos.+/Secondary+classes+student+happy.JPG', alt: 'Estudiante secundaria feliz clase inglés La Vaguada Madrid' },
    { url: 'https://impulseenglish.s3.us-east-1.amazonaws.com/impulsephotos/NACHOS+photos.+/Daniel+helping+secondary+school+students.JPG', alt: 'Profesor Daniel ayudando estudiantes secundaria La Vaguada Madrid' },
    { url: 'https://impulseenglish.s3.us-east-1.amazonaws.com/impulsephotos/NACHOS+photos.+/Productive+secondary+school+students.JPG', alt: 'Estudiantes secundaria productivos clase inglés La Vaguada Madrid' },
    { url: 'https://impulseenglish.s3.us-east-1.amazonaws.com/impulsephotos/NACHOS+photos.+/Secondary+students+-+Danny+helping+student.JPG', alt: 'Danny ayudando estudiante secundaria La Vaguada Madrid' },
  ],
  adults: [
    { url: 'https://impulseenglish.s3.us-east-1.amazonaws.com/impulsephotos/NACHOS+photos.+/Adult+one-to-one+classes.JPG', alt: 'Clases inglés adultos one-to-one La Vaguada Madrid' },
    { url: 'https://impulseenglish.s3.us-east-1.amazonaws.com/impulsephotos/ESCUELA_GONZALO-18.JPEG', alt: 'Profesor Daniel con estudiantes clase inglés La Vaguada Madrid' },
    { url: 'https://impulseenglish.s3.us-east-1.amazonaws.com/impulsephotos/ESCUELA_GONZALO-4.JPEG', alt: 'Estudiante feliz clase de inglés academia La Vaguada Madrid' },
  ],
  reception: [
    { url: 'https://impulseenglish.s3.us-east-1.amazonaws.com/impulsephotos/NACHOS+photos.+/Photos+of+facilities.JPG', alt: 'Instalaciones academia inglés La Vaguada Barrio del Pilar Madrid' },
    { url: 'https://impulseenglish.s3.us-east-1.amazonaws.com/impulsephotos/NACHOS+photos.+/Stairs.JPG', alt: 'Escaleras interiores academia inglés La Vaguada Madrid' },
    { url: 'https://impulseenglish.s3.us-east-1.amazonaws.com/impulsephotos/OUTSIDE+ACADEMY.jpg', alt: 'Fachada exterior academia Impulse English La Vaguada Madrid' },
  ],
  technology: [
    { url: 'https://impulseenglish.s3.us-east-1.amazonaws.com/impulsephotos/NACHOS+photos.+/Technology-based+classroom+photo.JPG', alt: 'Aula tecnológica preparación Linguaskill La Vaguada Madrid' },
    { url: 'https://impulseenglish.s3.us-east-1.amazonaws.com/impulsephotos/NACHOS+photos.+/Classroom+Facilities+Main+Classroom.JPG', alt: 'Aula principal academia inglés La Vaguada Madrid' },
    { url: 'https://impulseenglish.s3.us-east-1.amazonaws.com/NEW/linguaskill-logo-blanco.png', alt: 'Examen Linguaskill centro oficial academia La Vaguada Madrid' },
  ],
};

// Category → primary image catalog key
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

// Complementary categories for variety in inline images
const COMPLEMENTARY_CATEGORIES = {
  cambridge: ['classroom', 'adults'],
  classroom: ['cambridge', 'reception'],
  infantil: ['classroom', 'reception'],
  students: ['classroom', 'cambridge'],
  teenagers: ['classroom', 'cambridge'],
  adults: ['cambridge', 'classroom'],
  reception: ['classroom', 'cambridge'],
  technology: ['classroom', 'cambridge'],
};

function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

/**
 * Select 3 unique images for an article: 1 hero + 2 inline.
 * Uses category matching with randomized selection to avoid repetition.
 */
function selectArticleImages(topic, category) {
  // Determine primary category key
  let primaryKey = CATEGORY_IMAGE_MAP[category];
  if (!primaryKey) {
    for (const rule of KEYWORD_IMAGE_RULES) {
      if (rule.pattern.test(topic)) { primaryKey = rule.key; break; }
    }
  }
  primaryKey = primaryKey || 'classroom';

  const primaryPool = shuffle(IMAGE_CATALOG[primaryKey] || IMAGE_CATALOG.classroom);
  const usedUrls = new Set();

  // Hero image: first from primary category
  const hero = primaryPool[0];
  usedUrls.add(hero.url);

  // Inline images: one more from primary, one from complementary
  const inlineImages = [];

  // Second image from primary pool
  const secondFromPrimary = primaryPool.find(img => !usedUrls.has(img.url));
  if (secondFromPrimary) {
    inlineImages.push(secondFromPrimary);
    usedUrls.add(secondFromPrimary.url);
  }

  // Third image from complementary category
  const complementaryKeys = COMPLEMENTARY_CATEGORIES[primaryKey] || ['classroom', 'cambridge'];
  for (const compKey of complementaryKeys) {
    if (inlineImages.length >= 2) break;
    const compPool = shuffle(IMAGE_CATALOG[compKey] || []);
    const pick = compPool.find(img => !usedUrls.has(img.url));
    if (pick) {
      inlineImages.push(pick);
      usedUrls.add(pick.url);
    }
  }

  // Fallback: fill from any remaining category if we still need images
  if (inlineImages.length < 2) {
    for (const [, pool] of Object.entries(IMAGE_CATALOG)) {
      if (inlineImages.length >= 2) break;
      for (const img of shuffle(pool)) {
        if (!usedUrls.has(img.url)) {
          inlineImages.push(img);
          usedUrls.add(img.url);
          if (inlineImages.length >= 2) break;
        }
      }
    }
  }

  return [
    { url: hero.url, alt: hero.alt, placement: 'hero' },
    ...inlineImages.map(img => ({ url: img.url, alt: img.alt, placement: 'inline' })),
  ];
}

// Hard contract: every published article must have 1 hero + 2+ inline images
// from Impulse English's own photo library. Throws before the .md is written
// if the pipeline ever produces a non-compliant image set.
function assertArticleImages(articleImages, topic) {
  if (!Array.isArray(articleImages) || articleImages.length < 3) {
    throw new Error(
      `IMAGE CONTRACT VIOLATION: Article "${topic}" has ${articleImages?.length ?? 0} images, need 3+ (1 hero + 2 inline).`
    );
  }
  const heroCount = articleImages.filter((i) => i.placement === 'hero').length;
  const inlineCount = articleImages.filter((i) => i.placement === 'inline').length;
  if (heroCount !== 1) {
    throw new Error(`IMAGE CONTRACT VIOLATION: Expected exactly 1 hero image, got ${heroCount}.`);
  }
  if (inlineCount < 2) {
    throw new Error(`IMAGE CONTRACT VIOLATION: Expected 2+ inline images, got ${inlineCount}.`);
  }
  const OWN_HOST = 'impulseenglish.s3.us-east-1.amazonaws.com';
  const bad = articleImages.filter((i) => !i.url?.includes(OWN_HOST));
  if (bad.length) {
    throw new Error(
      `IMAGE CONTRACT VIOLATION: ${bad.length} image(s) not from own library (${OWN_HOST}): ${bad.map((i) => i.url).join(', ')}`
    );
  }
}

// ---------------------------------------------------------------------------
// Category auto-detection
// ---------------------------------------------------------------------------

const CATEGORY_RULES = [
  { pattern: /vs|compar|diferencia/i, cat: 'Comparison' },
  { pattern: /b2.*first|first.*b2/i, cat: 'Cambridge B2 First' },
  { pattern: /c1.*advanced|advanced|cae/i, cat: 'Cambridge C1 Advanced' },
  { pattern: /b1.*preliminary|preliminary|pet/i, cat: 'Cambridge B1 Preliminary' },
  { pattern: /a2.*key|key.*a2|ket/i, cat: 'Cambridge A2 Key' },
  { pattern: /linguaskill|aptis/i, cat: 'Linguaskill' },
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
  default: ['Metodología', 'Contacto'],
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
- Include a detailed FAQ section at the end titled exactly "## Preguntas frecuentes" with 5-8 questions as ### subheadings followed by their answers
- Do NOT use markdown tables — use HTML <table> tags instead when presenting tabular data

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

// ---------------------------------------------------------------------------
// Post-writer validation (deterministic, no API calls)
// ---------------------------------------------------------------------------

function validateArticle(articleContent) {
  const warnings = [];

  const wordCount = articleContent.split(/\s+/).length;
  if (wordCount < 800) warnings.push(`Article too short: ${wordCount} words (min 800)`);
  if (wordCount > 5000) warnings.push(`Article very long: ${wordCount} words`);

  const hasFAQ = /^## (?:Preguntas [Ff]recuentes|FAQ)/m.test(articleContent);
  if (!hasFAQ) warnings.push('Missing FAQ section (## Preguntas frecuentes)');

  const h2Count = (articleContent.match(/^## /gm) || []).length;
  if (h2Count < 3) warnings.push(`Only ${h2Count} H2 sections (min 3)`);

  const hasVosotros = /vosotros|vuestro|vuestra|vuestros|vuestras|tenéis|podéis|sabéis|estéis|necesitáis|habéis/i.test(articleContent);
  if (!hasVosotros) warnings.push('No vosotros forms found — may not be Peninsular Spanish');

  const hasMdTables = /^\|.+\|.*\n\|[-:| ]+\|/m.test(articleContent);
  if (hasMdTables) warnings.push('Contains markdown tables (will be auto-converted to HTML)');

  const banned = /\bdelve\b|\btapestry\b|\brealm\b|\blandscape\b|\bever-evolving\b|\bcutting-edge\b|\brobust\b|\btransformative\b|\bpivotal\b|\bseamless\b/i;
  if (banned.test(articleContent)) warnings.push('Contains banned AI slop words');

  for (const w of warnings) log(`  ⚠️ ${w}`);
  return { warnings, hasFAQ };
}

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
        .then((r) => {
          try {
            return JSON.parse(r.text);
          } catch (_) {
            const jsonMatch = r.text.match(/\{[\s\S]*\}/);
            if (jsonMatch) return JSON.parse(jsonMatch[0]);
            throw new Error(`Meta gen returned invalid JSON: ${r.text.substring(0, 200)}`);
          }
        })
        .finally(() => clearTimeout(timer));
    },
    'meta-gen',
    5
  );

  // Sanitize slug: lowercase, strip accents, only [a-z0-9-]
  meta.slug = meta.slug
    .toLowerCase()
    .normalize('NFD').replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9-]/g, '-')
    .replace(/-{2,}/g, '-')
    .replace(/^-|-$/g, '');

  // Validate and auto-fix meta lengths
  if (meta.metatitle.length > 65) {
    log(`  ⚠️ Meta title too long (${meta.metatitle.length} chars), truncating`);
    meta.metatitle = meta.metatitle.substring(0, 60).replace(/\s\S*$/, '') || meta.metatitle.substring(0, 60);
  }
  if (meta.metadescription.length > 165) {
    log(`  ⚠️ Meta description too long (${meta.metadescription.length} chars), truncating`);
    meta.metadescription = meta.metadescription.substring(0, 160).replace(/\s\S*$/, '') || meta.metadescription.substring(0, 160);
  }

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
      // Handle markdown tables (pipe-delimited rows)
      if (p.match(/^\|.+\|/m)) {
        const rows = p.split('\n').filter((r) => r.trim().startsWith('|'));
        if (rows.length >= 2) {
          const parseRow = (r) => r.split('|').slice(1, -1).map((c) => c.trim());
          const isSeparator = (r) => /^[\s|:-]+$/.test(r);
          const headers = parseRow(rows[0]);
          const dataRows = rows.slice(1).filter((r) => !isSeparator(r)).map(parseRow);
          let html = '<table><thead><tr>' + headers.map((h) => `<th>${convertInlineMarkdown(h)}</th>`).join('') + '</tr></thead><tbody>';
          for (const row of dataRows) {
            html += '<tr>' + row.map((c) => `<td>${convertInlineMarkdown(c)}</td>`).join('') + '</tr>';
          }
          html += '</tbody></table>';
          return html;
        }
      }

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
    .replace(/&(?!amp;|lt;|gt;|nbsp;|#\d+;)/g, '&amp;')
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
    /## (?:Preguntas [Ff]recuentes|FAQ|Preguntas [Rr]elacionadas|Preguntas y [Rr]espuestas|Dudas [Ff]recuentes|Lo que más nos preguntáis|Resolvemos tus dudas)[\s\S]*$/
  );

  if (!faqMatch) {
    log('  ⚠️ No FAQ heading found in article');
    return [];
  }

  const faqSection = faqMatch[0];
  const faqs = [];
  let match;

  // Pattern 1: ### Question\n(Answer paragraphs until next ### or ## or end)
  const h3Pattern = /###\s*(.+?)\n\n?([\s\S]*?)(?=\n###|\n## |$)/g;
  while ((match = h3Pattern.exec(faqSection)) !== null) {
    const question = match[1].trim().replace(/^\*\*|\*\*$/g, '').replace(/^¿?\s*|\s*\?$/g, '').trim();
    const answer = match[2].trim().replace(/\n{3,}/g, '\n\n');
    if (question && answer) {
      faqs.push({ question: question.startsWith('¿') ? question : `¿${question}?`, answer });
    }
  }

  // Pattern 2: **Question**\n(Answer) — if no ### matches
  if (faqs.length === 0) {
    const boldPattern = /\*\*(.+?)\*\*\n\n?([\s\S]*?)(?=\n\*\*|\n## |$)/g;
    while ((match = boldPattern.exec(faqSection)) !== null) {
      const question = match[1].trim();
      const answer = match[2].trim().replace(/\n{3,}/g, '\n\n');
      if (question && answer) {
        faqs.push({ question, answer });
      }
    }
  }

  // Pattern 3: Numbered questions — 1. **Q**\nA
  if (faqs.length === 0) {
    const numberedPattern = /\d+\.\s*\*\*(.+?)\*\*\n\n?([\s\S]*?)(?=\n\d+\.\s*\*\*|\n## |$)/g;
    while ((match = numberedPattern.exec(faqSection)) !== null) {
      const question = match[1].trim();
      const answer = match[2].trim();
      if (question && answer) {
        faqs.push({ question, answer });
      }
    }
  }

  if (faqs.length === 0) {
    log(`  ⚠️ FAQ section found but 0 items extracted. Section preview: "${faqSection.substring(0, 200)}…"`);
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

  // Use the first paragraph as the direct answer (matching hand-crafted articles)
  // Append second paragraph only if first is too short
  const stripMd = (p) => p.replace(/\*\*(.+?)\*\*/g, '$1').replace(/\*(.+?)\*/g, '$1').trim();
  let paaAnswer = introParagraphs.length > 0 ? stripMd(introParagraphs[0]) : topic;
  if (paaAnswer.length < 100 && introParagraphs.length > 1) {
    paaAnswer += ' ' + stripMd(introParagraphs[1]);
  }
  if (paaAnswer.length > 500) {
    paaAnswer = paaAnswer.substring(0, 500).replace(/\s\S*$/, '');
  }

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
    content: `En Impulse English Academy, Centro Preparador Oficial Cambridge en La Vaguada (Madrid), os acompañamos en cada paso. Con un 100% de aprobados en exámenes Cambridge 2024-2025, grupos reducidos de máximo 10 alumnos y profesores nativos certificados TEFL/CELTA, tenéis todo lo necesario para alcanzar vuestros objetivos.`,
  };

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

function truncateLabel(text, max = 50) {
  if (text.length <= max) return text;
  const truncated = text.substring(0, max).replace(/\s\S*$/, '');
  return truncated.length > 0 ? truncated : text.substring(0, max);
}

function assembleArticle(meta, schema, category, articleImages) {
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
    { label: truncateLabel(meta.metatitle, 50) },
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
    publishedDate: (() => { const s = new Scalar(today); s.type = 'QUOTE_DOUBLE'; return s; })(),
    modifiedDate: (() => { const s = new Scalar(today); s.type = 'QUOTE_DOUBLE'; return s; })(),
    readTime: schema.readTime || '6 min',
    articleImages,
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
  const articleImages = selectArticleImages(topic, category);
  assertArticleImages(articleImages, topic);

  log(`\n📝 Auto-Publish Pipeline`);
  log(`   Topic: ${topic}`);
  log(`   Keywords: ${keywords || '(auto)'}`);
  log(`   Category: ${category}`);
  log(`   Images: ${articleImages.length} (1 hero + ${articleImages.length - 1} inline)`);
  log(`   Output: ${ARTICLES_DIR}/\n`);

  // Step 1: Research
  const researchBrief = await runResearch(topic, keywords);

  // Step 2: Write article
  const articleContent = await runWriter(topic, keywords, researchBrief);

  // Step 2.5: Validate article quality (deterministic, no API calls)
  log('\n✅ Validating article…');
  validateArticle(articleContent);

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

  const content = assembleArticle(meta, schema, category, articleImages);
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
