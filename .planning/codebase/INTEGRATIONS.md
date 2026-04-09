# External Integrations

**Analysis Date:** 2026-04-09

## APIs & External Services

**AI & Content Generation:**
- **Anthropic Claude API** - Long-form article writing and content repurposing
  - SDK: `@anthropic-ai/sdk` 0.72.1
  - Auth: `ANTHROPIC_API_KEY` environment variable
  - Service file: `seo-writer/server/services/claude.js`
  - Model: `claude-sonnet-4-5-20250929` (configurable via `CLAUDE_MODEL` env var)
  - Features: Chat completions with streaming, 16,384 max tokens, retry logic (max 3 retries)
  - Timeout: 5 minutes

- **Google Gemini API** - Research, meta generation, image specifications, keyword detection
  - SDK: `@google/genai` 1.39.0
  - Auth: `GEMINI_API_KEY` environment variable
  - Service file: `seo-writer/server/services/gemini.js`
  - Model: `gemini-3-flash-preview` (configurable via `GEMINI_MODEL` env var)
  - Features: Function calling, JSON output, retry logic (max 4 retries with exponential backoff)

**Search & SERP Data:**
- **DataForSEO SERP API** - Primary Google SERP research (replaces SerpAPI)
  - Auth: `DATAFORSEO_LOGIN` and `DATAFORSEO_PASSWORD` (Basic auth)
  - Service file: `seo-writer/server/services/dataforseo.js`
  - Endpoint: `https://api.dataforseo.com/v3` (configurable via `DATAFORSEO_BASE_URL`)
  - Features: Live/Regular SERP endpoint, keyword research, competitor analysis

**Web Scraping:**
- **Firecrawl** - High-quality web page scraping and markdown extraction
  - SDK: Firecrawl (native `firecrawl` package)
  - Auth: `FIRECRAWL_API_KEY` environment variable
  - Service file: `seo-writer/server/services/firecrawl.js`
  - Features: Markdown extraction, metadata capture, 48-hour cache, content filtering
  - Options: `onlyMainContent` flag to remove nav/footer/sidebar

- **Apify** - Web scraper actor for content crawling (fallback/alternative)
  - SDK: `apify-client` 2.9.0
  - Auth: `APIFY_API_TOKEN` environment variable
  - Service file: `seo-writer/server/services/apify.js`
  - Actor: `apify/website-content-crawler`
  - Features: CSS selector filtering, markdown output, single-page crawl

**Image Generation:**
- **FAL AI** - Image generation for blog headers and thumbnails
  - SDK: `@fal-ai/client`
  - Auth: `FAL_API_KEY` environment variable
  - Service file: `seo-writer/server/services/fal.js`
  - Model: `fal-ai/nano-banana-pro` (configurable via `MODEL_ID`)
  - Features: Aspect ratio (3:2), resolution (1K/4K), multiple images per prompt
  - Used by: Thumbnail generation pipeline, in-blog image generation pipeline

**Analytics & Performance:**
- **Vercel Analytics** - Page performance monitoring
  - SDK: `@vercel/analytics` 2.0.1
  - Configured in website project
  - Integration: Auto-tracked page views and performance metrics

- **Vercel Speed Insights** - Web vitals monitoring
  - SDK: `@vercel/speed-insights` 2.0.0
  - Configured in website project
  - Integration: Core Web Vitals (LCP, FID, CLS)

## Data Storage

**Databases:**
- **SQLite** (SEO Writer only)
  - Provider: `sqlite`
  - Connection: File-based (`DATABASE_URL=file:./dev.db`)
  - Client: Prisma ORM (`@prisma/client` 6.2.0)
  - Schema file: `seo-writer/prisma/schema.prisma`
  - Models: `Brand`, `ContentJob`, `OptimizationJob`, `SitemapPage`, `WritingSample`

**File Storage:**
- Local filesystem only
  - Website images: `March-Impulse-Web-e7ad8740054b4e468e95bc81e5e4c79f17b98c97/assets/images/`
  - Build output: `dist/` directory (Vercel handles)

**Caching:**
- Firecrawl: 48-hour HTTP cache
- In-memory job queue (SEO Writer): `server/pipeline/queue.js` - FIFO, max 1 concurrent job

## Authentication & Identity

**Auth Provider:**
- Not implemented - No user authentication layer detected
- Admin/API access: Direct database mutations via Prisma in `server/routes/`
- No session/JWT/OAuth integration

## Monitoring & Observability

**Error Tracking:**
- Not detected - No Sentry, DataDog, or similar integration

**Logs:**
- Console logging only
  - Website: Standard Astro build logs
  - SEO Writer: Server console logs via `console.log()` and `console.error()`
  - Real-time progress: Server-Sent Events (SSE) via `server/utils/events.js`

## CI/CD & Deployment

**Hosting:**
- **Vercel** - Website deployment (`March-Impulse-Web-e7ad8740054b4e468e95bc81e5e4c79f17b98c97/`)
  - Build: `npm run build`
  - Output: Static files in `dist/`
  - Config: `vercel.json` with redirects, headers, rewrites
  - URL: `https://impulse-english.es` (with `www` redirect)

- **Undeployed** - SEO Writer (`seo-writer/`) requires manual hosting setup
  - Backend: Express on configurable port (default 5001)
  - Frontend: Vite static build to `dist/`

**CI Pipeline:**
- Not detected - No GitHub Actions, GitLab CI, or similar workflow files

## Environment Configuration

**Required Environment Variables:**

**Website:**
- None required for local development
- Vercel auto-detects and builds from `astro.config.mjs`

**SEO Writer - Backend:**
- `ANTHROPIC_API_KEY` - Claude API key (required)
- `GEMINI_API_KEY` - Gemini API key (required)
- `DATAFORSEO_LOGIN` - DataForSEO account login (required)
- `DATAFORSEO_PASSWORD` - DataForSEO account password (required)
- `FIRECRAWL_API_KEY` - Firecrawl API key (required)
- `APIFY_API_TOKEN` - Apify API token (fallback/optional)
- `FAL_API_KEY` - FAL AI API key (required for image generation)
- `DATABASE_URL` - SQLite database path (default: `file:./dev.db`)
- `PORT` - Express server port (default: 5001, can override)
- `NODE_ENV` - Environment mode (development/production)
- `CLAUDE_MODEL` - Claude model variant (default: `claude-sonnet-4-5-20250929`)
- `GEMINI_MODEL` - Gemini model variant (default: `gemini-3-flash-preview`)
- `DATAFORSEO_BASE_URL` - DataForSEO API endpoint (default: `https://api.dataforseo.com/v3`)

**SEO Writer - Frontend:**
- Configured via `vite.config.js` proxy: `/api` routes → `http://localhost:5001`

**Secrets Location:**
- `.env` file in project root (gitignored, development only)
- Vercel: Environment variables configured in project dashboard
- SEO Writer: No secret management integration (add `.env.local` manually)

## Webhooks & Callbacks

**Incoming:**
- Not detected - No webhook endpoints implemented

**Outgoing:**
- Server-Sent Events (SSE) for real-time updates
  - Endpoint: `GET /api/jobs/:id/stream`
  - Used by: Pipeline progress tracking
  - Service: `seo-writer/server/routes/stream.js`
  - Emitter: `seo-writer/server/utils/events.js`

## Job Queue & Background Processing

**Pipeline Queue:**
- In-memory FIFO queue: `seo-writer/server/pipeline/queue.js`
- Max concurrent jobs: 1 (sequential processing)
- Queue types:
  - `enqueuePipeline()` - Content generation (5 steps)
  - `enqueueOptimization()` - Content optimization (4 steps)
  - `enqueueRewrite()` - Optional rewrite step

**Pipeline Orchestration:**
- Content generation: Research → In-Blog Images → Writer → Meta Gen → Thumbnail
- Optimization: Scrape → Keyword Detection → SERP Research → Analysis → (Optional) Rewrite
- Real-time status via SSE to connected clients

## Data & Sitemap Management

**Sitemap Integration:**
- Manual URL input or automatic sitemap parsing
- Service: `seo-writer/server/utils/sitemap.js`
- Scoped by `brandId` in `SitemapPage` model
- Used for internal linking in generated articles
- Last sync timestamp tracked per brand

---

*Integration audit: 2026-04-09*
