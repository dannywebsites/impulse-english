---
name: API Integrations
description: >
  Configure and manage all external API integrations for the Impulse English Academy blog automation
  pipeline. Use this skill when setting up API keys, configuring client libraries, troubleshooting
  API errors, adjusting retry strategies, or updating model versions. Covers Anthropic (Claude),
  Google Gemini, DataForSEO, Apify, and Resend APIs. Also use when setting up GitHub Secrets for
  the CI/CD pipeline or debugging authentication failures in the auto-publish workflow.
---

# API Integrations

Configures all external API clients used by the Impulse English Academy auto-publish pipeline.
Five APIs work together: Claude writes articles, Gemini handles research and meta generation,
DataForSEO provides SERP data, Apify scrapes competitor pages, and Resend sends email notifications.

## When to Use

- Setting up the pipeline for the first time (API keys, GitHub Secrets)
- Debugging API authentication errors in GitHub Actions
- Updating AI model versions (Claude, Gemini)
- Adjusting retry strategies or timeouts
- Adding new API integrations to the pipeline
- Troubleshooting rate limits or quota issues

---

## 1. Required Environment Variables

```bash
# AI Models
ANTHROPIC_API_KEY=sk-ant-api03-...    # Claude API (article writing)
GEMINI_API_KEY=AIza...                 # Google Gemini (research + meta gen)

# SERP Research
DATAFORSEO_LOGIN=your@email.com        # DataForSEO account email
DATAFORSEO_PASSWORD=your-password       # DataForSEO account password

# Web Scraping
APIFY_API_TOKEN=apify_api_...          # Apify cloud API token

# Notifications
RESEND_API_KEY=re_...                  # Resend email API key
NOTIFICATION_EMAIL=your@email.com      # Where to send new post alerts
```

### GitHub Secrets Setup
All the above must be added as GitHub repository secrets (Settings > Secrets > Actions):
- `ANTHROPIC_API_KEY`
- `GEMINI_API_KEY`
- `DATAFORSEO_LOGIN`
- `DATAFORSEO_PASSWORD`
- `APIFY_API_TOKEN`
- `RESEND_API_KEY`
- `NOTIFICATION_EMAIL`

`GITHUB_TOKEN` is automatically available in GitHub Actions — no manual setup needed.

---

## 2. NPM Dependencies

**File:** `seo-writer/scripts/package.json`

```json
{
  "name": "impulse-auto-publish",
  "version": "1.0.0",
  "type": "module",
  "dependencies": {
    "@anthropic-ai/sdk": "^0.72.1",
    "@google/genai": "^1.39.0",
    "apify-client": "^2.9.0",
    "yaml": "^2.7.0"
  }
}
```

Install with: `cd seo-writer/scripts && npm ci`

---

## 3. AI Model Configuration

### Claude (Article Writing)
```javascript
const CLAUDE_MODEL = process.env.CLAUDE_MODEL || 'claude-sonnet-4-5-20250929';
```
- Used in Step 2 (article writing) via streaming API
- Max tokens: 16384
- Timeout: 5 minutes (300,000ms)
- Max retries: 3 (built into SDK)

### Gemini (Research + Meta Generation)
```javascript
const GEMINI_MODEL = process.env.GEMINI_MODEL || 'gemini-3-flash-preview';
const GEMINI_TIMEOUT_MS = 120_000; // 2 minutes per call
```
- Used in Step 1 (research with function calling) and Step 3 (meta generation with JSON schema)
- AbortController timeout per call: 120 seconds
- Max retries: 5 (higher than Claude due to frequent 503s)

---

## 4. Client Initialization (Lazy Singletons)

All API clients use lazy initialization — created on first use, reused thereafter:

```javascript
import Anthropic from '@anthropic-ai/sdk';
import { GoogleGenAI } from '@google/genai';
import { ApifyClient } from 'apify-client';

let claudeClient = null;
function getClaude() {
  if (!claudeClient) {
    claudeClient = new Anthropic({
      apiKey: (process.env.ANTHROPIC_API_KEY || '').trim(),
      timeout: 5 * 60 * 1000,   // 5 minute timeout
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
```

**Important:** The Anthropic API key is `.trim()`'d to handle trailing whitespace from GitHub Secrets copy-paste.

---

## 5. Retry Strategy

All API calls use exponential backoff with jitter:

```javascript
async function withRetry(fn, label, maxRetries = 3) {
  for (let attempt = 0; attempt <= maxRetries; attempt++) {
    try {
      return await fn();
    } catch (err) {
      const retryable = /503|429|UNAVAILABLE|RESOURCE_EXHAUSTED|timeout|ECONNRESET|socket hang up|fetch failed|ETIMEDOUT|ECONNABORTED|abort/i.test(err.message);
      if (attempt < maxRetries && retryable) {
        const delay = 3000 * Math.pow(2, attempt) + Math.random() * 2000;
        // Wait and retry
        await new Promise(r => setTimeout(r, delay));
      } else {
        throw err;
      }
    }
  }
}
```

**Retryable errors (regex):**
- `503` — Service unavailable (common with Gemini)
- `429` — Rate limited
- `UNAVAILABLE`, `RESOURCE_EXHAUSTED` — gRPC errors from Google
- `timeout`, `ETIMEDOUT`, `ECONNABORTED`, `abort` — Network timeouts
- `ECONNRESET`, `socket hang up`, `fetch failed` — Connection drops

**Retry config by API:**
| API | Max Retries | Base Delay | Used In |
|---|---|---|---|
| Gemini (research) | 5 | 3s * 2^attempt + random(0-2s) | Step 1 |
| Claude (writer) | 3 | 3s * 2^attempt + random(0-2s) | Step 2 |
| Gemini (meta) | 5 | 3s * 2^attempt + random(0-2s) | Step 3 |

---

## 6. DataForSEO API

**Endpoint:** `https://api.dataforseo.com/v3/serp/google/organic/live/regular`
**Auth:** HTTP Basic (login:password as base64)

```javascript
async function serpSearch(query) {
  const auth = 'Basic ' + Buffer.from(`${login}:${password}`).toString('base64');
  const body = [{
    keyword: query,
    location_name: 'Spain',
    language_code: 'es',
    depth: 10,
  }];
  // Returns: { organicResults, paa, relatedSearches }
}
```

**Config:**
- Location: `Spain` (country-level targeting)
- Language: `es` (Spanish)
- Depth: `10` (top 10 results)

**Response parsing extracts:**
- `organicResults` — position, title, URL, snippet for each organic result
- `paa` — People Also Ask questions with snippets
- `relatedSearches` — related search queries

---

## 7. Apify Web Scraper

**Actor:** `apify/website-content-crawler`
**Crawler type:** `cheerio` (fast, no JavaScript rendering)

```javascript
async function scrapeURL(url) {
  const run = await getApify()
    .actor('apify/website-content-crawler')
    .call({
      startUrls: [{ url }],
      maxCrawlPages: 1,
      crawlerType: 'cheerio',
      removeElementsCssSelector: 'nav, footer, header, aside, .sidebar, .cookie-banner',
    });
  const { items } = await getApify().dataset(run.defaultDatasetId).listItems();
  return items?.[0]?.text || items?.[0]?.markdown || '';
}
```

**Config:**
- Single page only (`maxCrawlPages: 1`)
- Removes navigation chrome (`nav, footer, header, aside, .sidebar, .cookie-banner`)
- Returns text content (falls back to markdown)

---

## 8. Resend Email API

Used by the `notify-new-blog-post.yml` GitHub Action:

```bash
curl -s -X POST 'https://api.resend.com/emails' \
  -H "Authorization: Bearer $RESEND_API_KEY" \
  -H 'Content-Type: application/json' \
  -d '{
    "from": "Impulse Blog <onboarding@resend.dev>",
    "to": ["$NOTIFICATION_EMAIL"],
    "subject": "New Blog Post: $TITLE",
    "html": "<h2>New Blog Post Published</h2>..."
  }'
```

**Note:** Uses Resend's default sending domain (`onboarding@resend.dev`). For production, configure a custom sending domain.

---

## 9. Pre-Flight API Key Validation

Before running the expensive research step, the pipeline validates the Anthropic key:

```javascript
await getClaude().messages.create({
  model: CLAUDE_MODEL,
  max_tokens: 5,
  messages: [{ role: 'user', content: 'ping' }],
});
```

This catches invalid/expired keys early before wasting Gemini and DataForSEO credits on research.

---

## 10. Gemini Function Calling (Research)

The research step uses Gemini's function calling with custom tools:

```javascript
const RESEARCH_TOOLS = [
  {
    name: 'serp_search',
    description: 'Search Google SERPs for a keyword',
    parameters: {
      type: 'object',
      properties: { query: { type: 'string' } },
      required: ['query'],
    },
  },
  {
    name: 'web_scrape',
    description: 'Scrape a URL to get its content in markdown',
    parameters: {
      type: 'object',
      properties: { url: { type: 'string' } },
      required: ['url'],
    },
  },
];
```

Gemini decides when to call these tools (up to 20 iterations). Results are fed back via `functionResponse` messages.

---

## 11. Gemini JSON Schema Response (Meta Gen)

The meta generation step uses Gemini's structured JSON output:

```javascript
const META_SCHEMA = {
  type: 'object',
  properties: {
    metatitle: { type: 'string', description: '50-60 character meta title' },
    metadescription: { type: 'string', description: '150-160 char meta description' },
    slug: { type: 'string', description: 'URL slug with hyphens, lowercase, no accents' },
  },
  required: ['metatitle', 'metadescription', 'slug'],
};

// Used as:
config: {
  responseMimeType: 'application/json',
  responseJsonSchema: META_SCHEMA,
}
```

---

## Related Skills

- **auto-publish-pipeline** — uses all these API clients in its 5-step flow
- **github-actions-publisher** — configures these env vars as GitHub Secrets
- **vercel-deployer** — Resend notifications trigger after Vercel deploys
