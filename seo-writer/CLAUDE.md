# SEO Blog Writer - Project Guide

## Architecture

- **Frontend:** React + Vite (port 5173), Tailwind CSS + shadcn/ui, React Query for state
- **Backend:** Express.js (port 3000), Prisma ORM with SQLite
- **AI Services:**
  - Claude (`server/services/claude.js`) — writer, thumbnail prompts, repurpose (LinkedIn/YouTube), content analysis/rewrite
  - Gemini (`server/services/gemini.js`) — research, meta generation, image generation, keyword detection (uses functionCalling/generateJSON)
- **Other APIs:** SerpAPI (SERP research), Firecrawl (page scraping), FAL AI (image generation)
- **Pipeline:** Research → In-Blog Images → Writer → Meta Gen → Thumbnail (5 steps, sequential)
- **Real-time:** SSE for pipeline progress (`server/routes/stream.js`, `src/hooks/useSSE.js`)

## Key Patterns

- Pipeline steps receive a `settings` object (merged from `DEFAULT_SETTINGS` + brand fields). All steps extract fields by name — no step knows about the Brand model directly.
- Jobs belong to a Brand. Brand settings flow: `job.brand` → `settings` object → pipeline steps.
- Sitemap pages are scoped by `brandId`. Compound unique: `[brandId, url]`.
- Pipeline queue (`server/pipeline/queue.js`): in-memory FIFO, MAX_CONCURRENT=1. Typed dispatch: `enqueuePipeline()` for content, `enqueueOptimization()` and `enqueueRewrite()` for optimization.
- Batch jobs share a `batchId` (UUID). Batch generate enqueues all idle jobs in the batch.
- Optimization pipeline: Scrape → Keyword Detection → SERP Research → Analysis (4 steps). Optional user-triggered Rewrite step.
- Fire-and-forget pattern for repurpose endpoints (202 + SSE updates).
- `concurrently` runs both servers in dev (`npm run dev`). Nodemon watches `.js` files only.

## Data Model (Prisma)

- `Brand` — all content settings (voice, linking, images, etc.) + name, relations to jobs/sitemapPages
- `ContentJob` — topic, keywords, pipeline outputs, belongs to Brand, optional `batchId` for grouping
- `OptimizationJob` — sourceUrl, keyword, scraped content, analysis report, optimized rewrite, belongs to Brand
- `SitemapPage` — indexed URLs for internal linking, belongs to Brand

## File Layout

```
server/
  index.js              — Express app, routes, middleware
  db.js                 — Prisma client singleton
  routes/
    brands.js           — CRUD + sitemap endpoints for brands
    jobs.js             — CRUD + generate + repurpose endpoints
    optimizations.js    — Optimization CRUD + analyze + rewrite + SSE endpoints
    stream.js           — SSE endpoint for real-time progress
  pipeline/
    orchestrator.js     — Runs all content steps, manages job state
    optimizer.js        — Optimization pipeline (scrape, keyword, research, analysis, rewrite)
    queue.js            — In-memory FIFO pipeline queue (typed dispatch)
    research.js         — SERP analysis + competitor scraping (Gemini)
    writer.js           — Article writing (Claude)
    metaGen.js          — Meta title/desc/slug (Gemini)
    imageGen.js         — In-blog image generation (Gemini + FAL)
    thumbnail.js        — Thumbnail prompt + generation (Claude + FAL)
    repurpose.js        — LinkedIn post + YouTube script (Claude)
  services/
    claude.js           — Claude API wrapper (chat function)
    gemini.js           — Gemini API wrapper (chat, generateJSON, functionCalling)
  utils/
    events.js           — SSE event emitter
    sitemap.js          — Sitemap parsing + page indexing (scoped by brandId)
src/
  App.jsx               — Routes: /, /new, /jobs/:id, /optimize, /optimize/new, /optimize/:id, /brands, /brands/new, /brands/:id
  components/
    Sidebar.jsx         — Navigation: My Content, Create Content, Optimize Content, Brands
    ui/                 — shadcn/ui components
  hooks/
    useBrands.js        — Brand CRUD + sitemap hooks
    useJobs.js          — Job CRUD + generate + repurpose hooks
    useOptimizations.js — Optimization CRUD + analyze + rewrite hooks
    useSSE.js           — SSE connection hook (configurable basePath)
  pages/
    Dashboard.jsx       — Job list with status tabs, brand filter, Generate All Idle, queue indicator
    NewJob.jsx          — Job creation form, Single/Batch mode toggle
    JobDetail.jsx       — Job detail with pipeline progress, content tabs, repurpose
    OptimizeList.jsx    — Optimization job list with status filters
    OptimizeNew.jsx     — Create new optimization (URL + brand + optional keyword)
    OptimizeDetail.jsx  — Optimization detail with tabs (Analysis, Rewrite, Original, Research)
    BrandList.jsx       — Brand table with CRUD
    BrandEdit.jsx       — Brand create/edit with 7 settings tabs
```

## Feature Roadmap

1. ~~Multi-Brand / Client Management~~ — DONE
2. ~~Batch Content Planning~~ — DONE (batch create, pipeline queue, Generate All Idle)
3. ~~Existing Content Optimization~~ — DONE (scrape, keyword detect, SERP research, audit report, optional rewrite)
4. **Auto-Publishing / CMS Integration** — Push to WordPress, Webflow, etc.
5. **Site/Tech Audit** — Crawl for SEO issues (broken links, missing meta, speed)
6. **Funnel-Based Content Strategy** — TOFU/MOFU/BOFU content mapping
7. **Auto-Generated Business Profile** — Scrape URL to auto-fill brand settings

## Dev Commands

```bash
npm run dev           # Start both servers (concurrently)
npm run dev:server    # Backend only (nodemon)
npm run dev:client    # Frontend only (vite)
npm run build         # Production build (vite)
npx prisma db push   # Sync schema to DB
npx prisma studio    # Visual DB browser
```

## Notes

- English-only product — language field exists in schema but not exposed in brand list UI
- Claude API key in `.env` as `ANTHROPIC_API_KEY`
- Model configurable via `CLAUDE_MODEL` env var (default: `claude-sonnet-4-5-20250929`)
- Gemini model: `gemini-3-flash-preview`
