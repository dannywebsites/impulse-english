# Architecture

**Analysis Date:** 2026-04-09

## Pattern Overview

**Overall:** Astro Static Site Generator with React Islands + SEO-Driven Content Collection Architecture

**Key Characteristics:**
- Static site generation (SSG) with zero JavaScript by default
- React islands for interactive components (navbar, forms, filters) using Astro's `client:` directives
- Content-driven: Blog articles defined in Astro Content Collections (markdown files), dynamically routed
- SEO-first architecture: All schema.org markup generated server-side in BaseLayout
- Multi-layer composition: Page (Astro) → Layout (Astro) → Components (React + Astro hybrid)
- Single source of truth for business data: `utils/napData.ts` imported across all pages/components

## Layers

**Presentation Layer:**
- Purpose: Render UI components and pages to static HTML
- Location: `components/` (React TSX), `src/pages/` (Astro pages), `src/layouts/` (Astro layouts)
- Contains: Page components, UI sections, reusable layouts, forms, galleries
- Depends on: Data layer (napData, schemaData, articles), utilities
- Used by: Astro build pipeline to generate `dist/`

**Data Layer:**
- Purpose: Centralize business data, article content, and schema definitions
- Location: `utils/napData.ts`, `utils/schemaData.ts`, `data/articles/`, `src/content/`
- Contains: NAP (Name, Address, Phone), schema generators, article metadata, category configurations
- Depends on: External schema.org types, Zod validation
- Used by: All presentation components, layout meta tags, JSON-LD generation

**Content Collection Layer:**
- Purpose: Define article structure and validate markdown frontmatter
- Location: `src/content/config.ts` (collection schema), `src/content/articles/` (markdown files)
- Contains: Zod schema for article validation, article markdown with structured frontmatter
- Depends on: Astro Content Collections API, Zod validation
- Used by: Dynamic blog page router (`src/pages/blog/[slug].astro`)

**Layout Layer:**
- Purpose: Wrap content with common page structure (meta tags, GTM, schema, navigation)
- Location: `src/layouts/BaseLayout.astro`, `src/layouts/ArticleLayout.astro`, etc.
- Contains: HTML boilerplate, GTM setup, consent mode, analytics, JSON-LD injection
- Depends on: Schema generators, build config
- Used by: All pages (required wrapper)

**Routing Layer:**
- Purpose: Map URLs to page files and dynamic routes
- Location: `src/pages/` (file-based routing), `src/pages/blog/[slug].astro` (dynamic), `vercel.json` (redirects)
- Contains: Astro file-based routes, dynamic parameterized routes, Vercel redirect rules
- Depends on: Astro routing engine, Vercel deployment config
- Used by: Build process to generate static routes

## Data Flow

**Homepage Request:**

1. Browser requests `https://impulse-english.es/`
2. Astro routes to `src/pages/index.astro`
3. Index imports BaseLayout, passes title/description/schemas
4. BaseLayout generates:
   - Meta tags (title, description, OG, Twitter)
   - Organization + Website schema.org JSON-LD
   - GTM consent mode + GA4 + Google Ads tracking
5. Index mounts Astro components: `Navbar`, `Hero`, `WelcomeSection`, etc.
6. Navbar imports `NAP` from napData, renders phone/email/social links
7. All components inherit Tailwind styling via `@astrojs/tailwind`
8. Build outputs: `dist/index.html` (static)

**Blog Article Request:**

1. Browser requests `https://impulse-english.es/blog/cuantas-veces-b2-first/`
2. Astro routes to `src/pages/blog/[slug].astro` (dynamic route)
3. Dynamic route calls `getCollection('articles')` → finds `src/content/articles/cuantas-veces-b2-first.md`
4. Validates markdown frontmatter against `src/content/config.ts` Zod schema
5. Dynamic route generates:
   - Article schema (headline, description, datePublished, etc.)
   - FAQ schema if `faqItems` present in frontmatter
   - Passes to BaseLayout (ogType=article, article meta tags)
6. Renders `PAAArticlePage` component (React) with article data
7. PAAArticlePage renders: breadcrumbs → hero image → paaAnswer → contextSections → impulseSection → faqItems
8. Build outputs: `dist/blog/cuantas-veces-b2-first/index.html` (static)

**Schema.org Flow:**

1. Every page passes `schemas` array to `BaseLayout`
2. BaseLayout imports `generateOrganizationSchema()` and `generateWebSiteSchema()`
3. Combines global schemas (Organization, Website) + page-specific (Article, FAQPage, LocalBusiness)
4. Wraps in @graph structure (one @context, multiple @type nodes)
5. Injects as `<script type="application/ld+json">` in `<head>`
6. Auto-deduplication: if page has aggregateRating, strips it from Organization schema to prevent Google warnings

**State Management:**

- No client-side state management framework (Jotai, Zustand, Redux)
- Local component state via React hooks (`useState`, `useEffect`) for interactive elements:
  - `Navbar`: scroll state, mobile menu toggle, dropdown tracking
  - `LeadForm`: form field state, submission state
  - `CookieBanner`: cookie acceptance state (localStorage)
- Data fetching: None (fully static)
- Navigation: Standard HTML links, no router library

## Key Abstractions

**BaseLayout (Core Template):**
- Purpose: Universal page wrapper
- Location: `src/layouts/BaseLayout.astro`
- Pattern: Astro component with Props interface, server-side rendering of all meta tags
- Responsibilities:
  - Render HTML boilerplate, meta charset, viewport
  - Generate SEO meta tags (title, description, robots, canonical, OG, Twitter)
  - Inject Google Tag Manager + GA4 + Google Ads with consent mode
  - Generate JSON-LD structured data (@graph)
  - Preload critical fonts and resources
  - Define hero animation keyframes
  - Wrap page content with `<slot />`

**PAAArticlePage (Article Template):**
- Purpose: Render "People Also Ask" blog articles
- Location: `components/PAAArticlePage.tsx` (React component)
- Pattern: Functional React component receiving article object + siblings array
- Responsibilities:
  - Render breadcrumbs
  - Display hero image (article images array or fallback)
  - Render paaAnswer paragraph
  - Map and render contextSections (heading + content pairs)
  - Render impulseSection with CTA links
  - Render FAQ accordion from faqItems
  - Display related articles (sibling suggestions)

**SchemaData (Schema Generators):**
- Purpose: Centralized schema.org structured data
- Location: `utils/schemaData.ts`
- Pattern: Exported functions returning JSON-LD objects
- Abstractions:
  - `generateOrganizationSchema()`: LocalBusiness + EducationalOrganization combo, includes NAP data
  - `generateWebSiteSchema()`: WebSite schema with searchAction
  - `generateArticleSchema()`: NewsArticle schema with author, datePublished, image
  - `generateFAQSchema()`: FAQPage with itemList of questions/answers
  - All import NAP from napData (single source of truth)

**napData (Business Data Central)**
- Purpose: Single source of truth for all business identity data
- Location: `utils/napData.ts`
- Pattern: Exported const NAP object with nested properties
- Includes:
  - Business name variants, legal name, address (street, postal, city, region, country)
  - Contact (phone formatted 3 ways: display, raw, tel:)
  - Web (site URL, Google Business Profile share URL)
  - Assets (logo, fallback image)
  - Geo coordinates (latitude/longitude for maps embed)
  - Opening hours (Schema.org format + human-readable)
  - Price range, social profiles, credentials, aggregate rating
  - areaServed list (Madrid neighborhoods)
- Used by: Every component, layout, schema generator

**Content Collection (Zod-Validated Articles):**
- Purpose: Type-safe article metadata and validation
- Location: `src/content/config.ts` (schema definition)
- Pattern: Zod object schema with nested objects and arrays
- Structure: Article URL, category, priority, question (for PAA), SEO title/description, paaAnswer, contextSections (heading + content), impulseSection (heading + content + CTA links), faqItems (question + answer), breadcrumbs, dates, images
- Validation enforced at build time: missing/malformed articles fail build

## Entry Points

**Homepage:**
- Location: `src/pages/index.astro`
- Triggers: GET request to `/`
- Responsibilities:
  - Import 16+ section components (Hero, WelcomeSection, TeamSection, CoursesSection, etc.)
  - Load Navbar with `client:load` (required for interactivity)
  - Load form/gallery components with `client:visible` (hydrate on scroll)
  - Load CookieBanner with `client:idle` (hydrate when idle)
  - Pass SEO meta to BaseLayout
  - Compose full page layout

**Blog Dynamic Route:**
- Location: `src/pages/blog/[slug].astro`
- Triggers: GET request to `/blog/{slug}/`
- Responsibilities:
  - Export `getStaticPaths()` to generate all routes from `getCollection('articles')`
  - Validate article structure against Zod schema
  - Generate article schema + FAQ schema
  - Pass to BaseLayout with article-specific meta (ogType=article, dates)
  - Mount PAAArticlePage component

**Static Blog Pages:**
- Location: `src/pages/blog/*.astro` (co-located pages like `cuantas-veces-b2-first.astro`)
- Priority: Static .astro files override dynamic `[slug].astro` route
- Triggers: GET request to `/blog/{matching-filename}/`
- Responsibilities: Simple wrapper importing data from `data/articles/` TypeScript files, rendering PAAArticlePage

**Course Pages:**
- Location: `src/pages/cursos-ingles/*.astro`
- Pattern: Static routes per course type (infantil, primaria, secundaria, adultos, particulares, online)
- Responsibilities: Render course-specific content, import CourseLayout, display course info, FAQs, CTAs

**Exam Hub Pages:**
- Location: `src/pages/examenes-cambridge/*.astro`
- Pattern: Static routes (index, b1-preliminary, b2-first, c1-advanced, fechas-precios, centros-madrid)
- Responsibilities: Render exam-specific content, import ExamLayout, display pricing, schedule, center locations

**Location Pages:**
- Location: `src/pages/academia-ingles-*.astro`
- Pattern: Static routes per Madrid neighborhood/location
- Responsibilities: Location-specific contact info, hours, gallery, maps embed, reviews

## Error Handling

**Strategy:** Build-time validation with type safety, runtime graceful degradation

**Patterns:**

1. **Content Validation (Build-time):**
   - All articles must match Zod schema in `src/content/config.ts`
   - Invalid frontmatter → build fails with Astro error
   - Missing required fields (url, seoTitle, metaDescription, paaAnswer) → immediate failure

2. **Component Error Boundaries:**
   - No explicit error boundaries (client-side React Suspense/ErrorBoundary not used)
   - Forms (`LeadForm`) catch submission errors, display toast-like message
   - Image optimization (`OptimizedImage`) has fallback src if image key not found

3. **URL/Slug Handling:**
   - Dynamic routes check article exists in collection
   - Non-existent slugs → Astro 404 handling (routed to `src/pages/404.astro`)
   - Redirects handled in `vercel.json` (single source of truth, not Astro)

4. **Schema Validation:**
   - BaseLayout auto-detects if page schema has aggregateRating
   - Strips from Organization schema to prevent Google "multiple ratings" error
   - All schema functions return valid JSON-LD objects

## Cross-Cutting Concerns

**Logging:**
- No server-side logging framework
- Client-side: Google Tag Manager + GA4 capture all user events
- No console.log statements in production code (can add via skills)

**Validation:**
- Build-time: Zod schema for articles (enforced in `src/content/config.ts`)
- Runtime: Form validation in `LeadForm` component (email format, required fields)
- No request body validation (static site, no API endpoints)

**Authentication:**
- Not applicable (static site, no user accounts)
- Contact form submissions POST to external service (Impulse backend)

**Data Fetching:**
- None at runtime
- All content pre-built into static HTML at build time
- External only: Contact form POST, Google Maps embed, Vimeo iframe (homepage hero only on desktop)

**Navigation & Routing:**
- File-based routing via Astro (no router library)
- Dynamic routes via `[slug]` params
- Redirects centralized in `vercel.json` (replaces Astro redirects)
- Navbar tracking: `currentPath` prop passed from pages, stored in component state

**SEO:**
- Canonical URLs: auto-generated in BaseLayout (page path → BASE_URL + canonical prop)
- All canonical URLs end with trailing slash (enforced in astro.config: `trailingSlash: 'always'`)
- Meta robots: default "index, follow" (override with `noindex` prop for non-indexable pages like /gracias/, /blog?q=search)
- Open Graph + Twitter Card generated for all pages
- JSON-LD structures for: Organization, WebSite, Article, FAQPage, LocalBusiness
- No XML sitemaps explicitly defined (Astro `@astrojs/sitemap` auto-generates based on routes)

**Performance:**
- Static HTML (no dynamic rendering overhead)
- React hydration only where necessary (client: directives)
  - `client:load`: Navbar (needed immediately for interactions)
  - `client:visible`: Forms, galleries, testimonials (hydrate on scroll)
  - `client:idle`: CookieBanner (hydrate when browser idle)
  - No client: directive: Hero, most text sections (0KB JS)
- Image optimization: Sharp for generation, `.webp` preferred with `.jpg` fallback
- Font preloading: Google Fonts Inter + Playfair Display preconnected + preloaded
- Analytics: Deferred GA4 (loads after 3.5s or first user interaction) to avoid blocking render

---

*Architecture analysis: 2026-04-09*
