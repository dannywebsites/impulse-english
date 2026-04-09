---
name: Auto-Publish Pipeline
description: >
  Build and maintain the fully automated blog post pipeline for Impulse English Academy. Use this
  skill when creating the auto-publish script, modifying pipeline steps, updating AI prompts,
  adjusting the schema conversion logic, changing image selection, or debugging pipeline failures.
  This skill covers the complete 5-step flow: Research (Gemini + DataForSEO + Apify) -> Write
  (Claude) -> Meta Generation (Gemini) -> Schema Conversion (deterministic) -> Assembly & File Write.
  Also use when adding new article categories or modifying the frontmatter output format.
---

# Auto-Publish Pipeline

The headless, serverless blog automation engine. Takes a topic string and produces a fully-formed
Astro Content Collection markdown file with Zod-compliant frontmatter, ready for deployment.
No Express, no database, no CMS — just a Node.js script called by GitHub Actions.

**Brand configuration:** All business-specific values (company name, voice, CTAs, impulse section
template, category topic refs) are defined in `brand-config.ts` at project root. When templating
for a new client, change that file — not this skill or the pipeline script.

## When to Use

- Creating or modifying the `auto-publish.js` pipeline script
- Updating AI prompts (research, writer, meta generation)
- Adjusting schema conversion logic (markdown to HTML, FAQ extraction)
- Changing image selection rules or adding new image categories
- Adding new article categories with their CTAs, internal links, and breadcrumbs
- Debugging pipeline failures in GitHub Actions
- Modifying the frontmatter output format

---

## 1. Architecture Overview

**File:** `seo-writer/scripts/auto-publish.js` (1,188 lines, ES modules)

```
Input:  node auto-publish.js "topic" ["keywords"] ["category"]
Output: slug printed to stdout (e.g., "es-dificil-b2-first")
Logs:   All logging goes to stderr via log() function
```

**5-Step Sequential Flow:**
```
Step 1: Research       (Gemini + DataForSEO + Apify)  ~3-5 min
Step 2: Write Article  (Claude Sonnet streaming)       ~1-2 min
Step 2.5: Validate     (deterministic, no API)          instant
Step 3: Meta Gen       (Gemini JSON schema)             ~10 sec
Step 4: Schema Convert (deterministic, no API)          instant
Step 5: Assemble       (YAML frontmatter + write file)  instant
```

**Key design decisions:**
- All logging to stderr so stdout is clean for slug capture by GitHub Actions
- Lazy singleton API clients (created on first use)
- Pre-flight Anthropic key validation before expensive research step
- Partial recovery on Claude stream interruption (if >500 chars accumulated)

---

## 2. Step 1 — Research (Gemini + DataForSEO + Apify)

Gemini acts as an autonomous research agent using function calling. It decides which searches to run and which pages to scrape.

**Research System Prompt** (see `references/prompts.md` for full text):
- Conduct competitive intelligence for the given keyword
- Reverse-engineer search intent, analyze content format
- Use 3-5 SERP searches + 3-5 page scrapes
- Output: structured markdown content brief

**Tools provided to Gemini:**
```javascript
const RESEARCH_TOOLS = [
  { name: 'serp_search', parameters: { query: string } },
  { name: 'web_scrape', parameters: { url: string } },
];
```

**Loop:** Up to 20 iterations. Gemini calls tools, pipeline executes them, returns results. Loop ends when Gemini returns text without tool calls.

**DataForSEO SERP Search:**
- Endpoint: `api.dataforseo.com/v3/serp/google/organic/live/regular`
- Config: `location_name: 'Spain'`, `language_code: 'es'`, `depth: 10`
- Extracts: organic results (position, title, URL, snippet), PAA questions, related searches

**Apify Web Scraper:**
- Actor: `apify/website-content-crawler`
- Config: `maxCrawlPages: 1`, `crawlerType: 'cheerio'`
- Removes: `nav, footer, header, aside, .sidebar, .cookie-banner`
- Returns: text content or markdown

---

## 3. Step 2 — Write Article (Claude Sonnet)

**Writer System Prompt** (see `references/prompts.md` for full text):
- All content in Peninsular Spanish (vosotros, Spain vocabulary)
- Follow exact structure from research brief
- Include FAQ section titled `## Preguntas frecuentes` with 5-8 questions as ### subheadings
- No markdown tables (use HTML `<table>` tags)
- 30 banned AI words (delve, tapestry, realm, etc.)

**Claude API call:**
```javascript
const stream = getClaude().messages.stream({
  model: 'claude-sonnet-4-5-20250929',
  max_tokens: 16384,
  system: WRITER_SYSTEM_PROMPT,
  messages: [{ role: 'user', content: prompt }],
});
```

**Prompt template includes:**
- Primary focus (topic/keywords)
- Target length: 1500-2500 words
- Full research brief
- Brand context (subtle mention level)

**Partial recovery:** If stream is interrupted but >500 chars accumulated, content is used anyway.

---

## 4. Step 2.5 — Validation (Deterministic)

```javascript
function validateArticle(articleContent) {
  // Word count: 800-5000
  // FAQ section present (## Preguntas frecuentes)
  // H2 count >= 3
  // Vosotros forms detected
  // No markdown tables (warning, auto-converted later)
  // No banned AI words
}
```

Warnings are logged but do NOT block publication. The pipeline continues.

---

## 5. Step 3 — Meta Generation (Gemini JSON Schema)

**Meta System Prompt:** Create SEO metadata in Peninsular Spanish.

**Gemini JSON Schema Response:**
```javascript
const META_SCHEMA = {
  type: 'object',
  properties: {
    metatitle: { type: 'string' },      // 50-60 chars
    metadescription: { type: 'string' }, // 150-160 chars
    slug: { type: 'string' },           // lowercase, hyphens, no accents
  },
  required: ['metatitle', 'metadescription', 'slug'],
};
```

**Post-processing:**
- Slug sanitization: `normalize('NFD') → strip accents → lowercase → only [a-z0-9-]`
- Auto-truncate: meta title to 60 chars, description to 160 chars (word-boundary safe)

---

## 6. Step 4 — Schema Conversion (Deterministic)

NO AI rewriting. The writer's exact words are preserved. This step only restructures.

### markdownToHTML(md)
Converts markdown paragraphs to HTML:
- Double-newline split → `<p>` tags
- Markdown tables → `<table><thead><tbody>` HTML
- `###` headings → `<h3>` tags
- Unordered lists (`-`/`*`) → `<ul><li>` 
- Ordered lists (`1.`) → `<ol><li>`
- Inline: `**bold**` → `<strong>`, `*italic*` → `<em>`, `[text](url)` → `<a>`
- Ampersand escaping (preserves existing HTML entities)

### extractFAQs(articleContent)
Three pattern matchers tried in order:
1. `### Question\n\nAnswer` (preferred)
2. `**Question**\n\nAnswer` (fallback)
3. `1. **Question**\n\nAnswer` (numbered fallback)

FAQ heading patterns detected: "Preguntas frecuentes", "FAQ", "Preguntas relacionadas", "Preguntas y respuestas", "Dudas frecuentes", "Lo que mas nos preguntais", "Resolvemos tus dudas"

### runSchemaConversion(topic, articleContent, category)
1. Split article on `## ` headings
2. Separate FAQ section from content sections
3. Convert each section's markdown to HTML via `markdownToHTML()`
4. Extract `paaAnswer` from intro paragraphs (before first ##), 100-500 chars
5. Calculate read time: `max(3, round(wordCount / 200))` minutes
6. Generate impulse section programmatically (no AI):
```
"Impulse English Academy te ayuda con {topicRef}"
```

---

## 7. Step 5 — Assembly & File Write

### assembleArticle(meta, schema, category, articleImages)
Builds complete frontmatter YAML:

```javascript
const frontmatter = {
  url: `/blog/${meta.slug}`,
  category,
  priority: 'Medium',
  question: schema.question,
  seoTitle: meta.metatitle,
  metaDescription: meta.metadescription,
  paaAnswer: schema.paaAnswer,
  contextSections: schema.contextSections,  // [{heading, content: HTML}]
  impulseSection: { heading, content, ctaLinks },
  faqItems: schema.faqItems,
  internalLinkRefs,                         // from INTERNAL_LINKS_BY_CATEGORY
  breadcrumbs,                              // [Blog, CategoryHub?, TruncatedTitle]
  publishedDate: "2026-04-09",              // QUOTE_DOUBLE scalar
  modifiedDate: "2026-04-09",
  readTime: "6 min",
  articleImages,                            // 3 images: 1 hero + 2 inline
};
```

**YAML options:** `lineWidth: 0` (no wrapping), `blockQuote: 'literal'` (preserves HTML)

**Dates:** Use YAML `Scalar` with `type: 'QUOTE_DOUBLE'` to ensure quotes in output.

**Output file:** `{SITE_ROOT}/src/content/articles/{slug}.md`

**Safety:** Path must start with ARTICLES_DIR — rejects writes outside content directory.

---

## 8. Category System

### Auto-Detection (14 regex rules)
```javascript
const CATEGORY_RULES = [
  { pattern: /vs|compar|diferencia/i, cat: 'Comparison' },
  { pattern: /b2.*first|first.*b2/i, cat: 'Cambridge B2 First' },
  { pattern: /c1.*advanced|advanced|cae/i, cat: 'Cambridge C1 Advanced' },
  { pattern: /b1.*preliminary|preliminary|pet/i, cat: 'Cambridge B1 Preliminary' },
  { pattern: /a2.*key|key.*a2|ket/i, cat: 'Cambridge A2 Key' },
  { pattern: /linguaskill|aptis/i, cat: 'Linguaskill' },
  { pattern: /speaking|listening|writing|reading/i, cat: 'Skills' },
  { pattern: /nin|infantil|bebe|3.anos|4.anos|5.anos/i, cat: 'Kids Early Childhood' },
  { pattern: /primaria|colegio|6.anos/i, cat: 'Kids Primary' },
  { pattern: /secundaria|adolescen|joven/i, cat: 'Kids Secondary' },
  { pattern: /trabajo|empresa|profesional|carrera/i, cat: 'Career' },
  { pattern: /madrid|academia|barrio|vaguada/i, cat: 'Local Madrid' },
  { pattern: /precio|cost|cuanto cuesta|invertir/i, cat: 'Price' },
  { pattern: /que es|significado|definicion/i, cat: 'Definitions' },
];
// Default: 'Learning Methods'
```

### CTA Links by Category
```javascript
'Cambridge B2 First': [
  { text: 'Prueba de nivel gratis', href: '/reservar-clase' },
  { text: 'Preparacion B2 First', href: '/examenes-cambridge/b2-first' },
],
'Linguaskill': [
  { text: 'Prueba de nivel gratis', href: '/reservar-clase' },
  { text: 'Preparacion Linguaskill', href: '/linguaskill' },
],
default: [
  { text: 'Prueba de nivel gratis', href: '/reservar-clase' },
  { text: 'Nuestros cursos', href: '/cursos-ingles/adultos' },
],
```

### Internal Links by Category
```javascript
'Cambridge B2 First': ['B2 page', 'Metodologia', 'Cursos Adultos', 'Precios Cambridge'],
'Linguaskill': ['Linguaskill page', 'Precios Linguaskill', 'Cursos Adultos'],
'Kids Early Childhood': ['Infantil', 'Great Little People', 'Metodologia'],
'Local Madrid': ['Location pages', 'Barrio del Pilar', 'La Vaguada page', 'Contacto'],
'Price': ['Precios Cambridge', 'Precios Linguaskill', 'Contacto', 'Cursos Adultos'],
```

### Breadcrumb Hubs
```javascript
'Cambridge B2 First': { label: 'B2 First', href: '/examenes-cambridge/b2-first' },
'Cambridge C1 Advanced': { label: 'C1 Advanced', href: '/examenes-cambridge/c1-advanced' },
'Linguaskill': { label: 'Linguaskill', href: '/linguaskill' },
'Local Madrid': { label: 'Academias Madrid', href: '/academias-ingles-madrid' },
```

---

## 9. Image Selection

See `references/image-catalog.md` for the full S3 image catalog.

### Selection Algorithm
```javascript
function selectArticleImages(topic, category) {
  // 1. Map category to primary image key via CATEGORY_IMAGE_MAP
  // 2. If no match, try KEYWORD_IMAGE_RULES (regex on topic)
  // 3. Default to 'classroom'
  // 4. Hero: first random image from primary category
  // 5. Inline 1: second image from primary category
  // 6. Inline 2: image from complementary category
  // 7. Fallback: fill from any remaining category
  return [
    { url, alt, placement: 'hero' },
    { url, alt, placement: 'inline' },
    { url, alt, placement: 'inline' },
  ];
}
```

### Complementary Category Pairs
```javascript
cambridge ↔ [classroom, adults]
classroom ↔ [cambridge, reception]
infantil  ↔ [classroom, reception]
students  ↔ [classroom, cambridge]
teenagers ↔ [classroom, cambridge]
adults    ↔ [cambridge, classroom]
reception ↔ [classroom, cambridge]
technology ↔ [classroom, cambridge]
```

---

## 10. Main Flow

```javascript
async function main() {
  const [topic, keywords, categoryArg] = process.argv.slice(2);

  // Validate env vars (ANTHROPIC_API_KEY, GEMINI_API_KEY, DATAFORSEO_LOGIN, DATAFORSEO_PASSWORD, APIFY_API_TOKEN)
  // Pre-flight: validate Anthropic key with ping
  
  const category = categoryArg || detectCategory(topic);
  const articleImages = selectArticleImages(topic, category);

  const researchBrief = await runResearch(topic, keywords);          // Step 1
  const articleContent = await runWriter(topic, keywords, researchBrief); // Step 2
  validateArticle(articleContent);                                    // Step 2.5
  const meta = await runMetaGen(topic, keywords, articleContent);    // Step 3
  const schema = runSchemaConversion(topic, articleContent, category); // Step 4

  const content = assembleArticle(meta, schema, category, articleImages); // Step 5
  writeFileSync(filePath, content, 'utf-8');

  process.stdout.write(slug); // Captured by GitHub Actions
}
```

---

## Related Skills

- **api-integrations** — API client setup, retry strategy, model config
- **content-collection-designer** — output format must match Zod schema
- **brand-voice-enforcer** — validation rules applied in Step 2.5
- **github-actions-publisher** — orchestrates this script via cron
- **schema-markup-generator** — articles generate Article + FAQ schemas at render time
