# Codebase Structure

**Analysis Date:** 2026-04-09

## Directory Layout

```
March-Impulse-Web-.../
├── src/                           # Astro source directory (file-based routing + content)
│   ├── pages/                     # File-based page routes (121 .astro files)
│   │   ├── index.astro            # Homepage
│   │   ├── blog/
│   │   │   ├── [slug].astro       # Dynamic route for article pages
│   │   │   ├── cuantas-veces-b2-first.astro  # Static blog article (overrides [slug])
│   │   │   └── ... (75 more static blog articles)
│   │   ├── cursos-ingles/         # 7 course pages
│   │   ├── examenes-cambridge/    # 6 exam hub pages
│   │   ├── academia-ingles-*.astro  # 10 location pages
│   │   ├── contacto.astro         # Contact form page
│   │   ├── gracias.astro          # Thank you (noindex)
│   │   ├── sobre-nosotros.astro   # About us
│   │   ├── testimonios.astro      # Testimonials
│   │   ├── preguntas-frecuentes.astro  # FAQ hub
│   │   ├── 404.astro              # 404 error page
│   │   └── ... (other pages)
│   ├── layouts/                   # Astro layout components
│   │   ├── BaseLayout.astro       # Universal page wrapper (meta, GTM, schema)
│   │   ├── ArticleLayout.astro    # Article-specific layout (ogType=article)
│   │   ├── CourseLayout.astro     # Course page layout
│   │   └── ExamLayout.astro       # Exam page layout
│   ├── content/                   # Content Collections (Astro 3+)
│   │   ├── config.ts              # Zod schema for article validation
│   │   └── articles/              # ~25 markdown article files
│   │       ├── cuantas-veces-b2-first.md
│   │       ├── diferencia-b2-c1.md
│   │       └── ... (more articles)
│   ├── data/                      # Data layer for pages/components
│   │   ├── images.ts              # Image key → optimized path mappings
│   │   ├── academyImages.ts       # Academy photo gallery data
│   │   └── ... (other data files)
│   └── index.css                  # Global Tailwind + custom styles
│
├── components/                    # Shared React + Astro components (35 files)
│   ├── Navbar.tsx                 # Navigation with dropdowns (client:load)
│   ├── Hero.tsx                   # Homepage hero section
│   ├── Footer.tsx                 # Global footer (15KB, lists all locations)
│   ├── PAAArticlePage.tsx         # Blog article template (React)
│   ├── LeadForm.tsx               # Contact/lead form (client:visible)
│   ├── CoursePageLayout.tsx       # Course template component
│   ├── ExamPageLayout.tsx         # Exam hub template component
│   ├── CoursesSection.tsx         # Courses overview (grid of cards)
│   ├── LocationsSection.tsx       # Locations/areas served
│   ├── TestimonialsSection.tsx    # Testimonials carousel
│   ├── FAQSection.tsx             # FAQ accordion
│   ├── CookieBanner.tsx           # GDPR cookie consent (client:idle)
│   ├── SEOHead.tsx                # Legacy SEO component (being replaced by BaseLayout)
│   ├── WelcomeSection.tsx         # "Why choose us" section
│   ├── MetodoSection.tsx          # Methodology section
│   ├── PartnersSection.tsx        # Partnership logos
│   ├── NewsOverlay.tsx            # Hero news ticker
│   ├── AcademyGallery.tsx         # Photo gallery
│   ├── FullPhotoGallery.tsx       # Lightbox-style gallery
│   ├── Breadcrumb.tsx             # Navigation breadcrumbs
│   ├── InfoCards.tsx              # Generic card grid
│   ├── OptimizedImage.tsx         # Image wrapper (falls back if not found)
│   ├── RelatedArticles.tsx        # Related blog articles
│   ├── FAQ.tsx                    # FAQ accordion item
│   ├── LazyVideo.tsx              # Vimeo/YouTube video embed
│   └── ... (other sections)
│
├── utils/                         # Utility functions and data
│   ├── napData.ts                 # NAP (Name, Address, Phone) — SINGLE SOURCE OF TRUTH
│   │                              # Contains: address, phone, email, social, logo, hours, etc.
│   ├── schemaData.ts              # Schema.org generators
│   │                              # Functions: generateOrganizationSchema, generateArticleSchema, etc.
│   ├── buildPageTitle.ts          # Append brand name to page titles
│   └── ... (other utilities)
│
├── data/                          # Article metadata + category config (non-src)
│   ├── articles/
│   │   ├── types.ts               # TypeScript interfaces for articles (ArticleCategory, PAAArticle, etc.)
│   │   ├── cambridge-b2-first.ts  # Article data exports
│   │   ├── cambridge-c1-advanced.ts
│   │   └── index.ts               # Aggregate exports + getSiblingArticles()
│   ├── category-config.ts         # Category metadata (display names, hub paths, colors)
│   ├── internal-links.ts          # Internal link references for articles
│   └── ... (other data files)
│
├── assets/                        # Static assets
│   └── images/                    # Project image files (original masters)
│
├── public/                        # Public root directory (served at /)
│   ├── favicon.ico
│   ├── images/optimized/          # Optimized image outputs
│   │   ├── hero-mobile-*.webp
│   │   ├── favicon-*.png
│   │   └── ... (optimized images)
│   ├── site.webmanifest           # PWA manifest
│   └── ... (other public files)
│
├── scripts/                       # Build/utility scripts
│   └── ... (automation scripts)
│
├── templates/                     # Starter templates for new pages
│   └── ... (boilerplate files)
│
├── dist/                          # Build output (generated, not committed)
│   ├── index.html
│   ├── blog/
│   ├── cursos-ingles/
│   ├── examenes-cambridge/
│   └── ... (all routes as static HTML)
│
├── .astro/                        # Astro build cache + generated types
│   ├── content.d.ts               # Auto-generated types from content collections
│   ├── types.d.ts
│   └── collections/
│
├── .claude/                       # Claude Code tooling (project-level)
│   ├── settings.json
│   └── skills/frontend-design/    # Nested frontend design skill
│
├── seo-system/                    # Separate SEO automation system (has own CLAUDE.md)
│   ├── files/CLAUDE.md            # SEO system documentation
│   ├── components/                # SEO-specific components
│   ├── site/
│   │   ├── pages/                 # SEO-generated content
│   │   └── backups/               # Auto-backups of articles
│   └── ... (other SEO tools)
│
├── astro.config.mjs               # Astro configuration
├── tsconfig.json                  # TypeScript configuration
├── tailwind.config.ts             # Tailwind CSS configuration
├── vercel.json                    # Vercel deployment + redirects (150+ rules)
├── package.json                   # Dependencies (Astro 5, React 19, Tailwind 3)
└── vite.config.ts                 # Vite bundler config
```

## Directory Purposes

**`src/pages/`**
- Purpose: File-based routing — each .astro file becomes a URL route
- Contains: 121 Astro page files
- Pattern:
  - Static routes: `/src/pages/contacto.astro` → `https://site.com/contacto/`
  - Dynamic routes: `/src/pages/blog/[slug].astro` → `https://site.com/blog/{article-slug}/`
  - Nested: `/src/pages/cursos-ingles/infantil.astro` → `https://site.com/cursos-ingles/infantil/`
  - Index: `/src/pages/index.astro` → `https://site.com/`
- Key: Static .astro files take priority over dynamic [slug] routes

**`src/layouts/`**
- Purpose: Reusable page wrappers (Astro components)
- Contains: 4 layout files
- Pattern: Each layout wraps content with `<slot />`, defines props interface
- `BaseLayout.astro` — required on all pages (meta, GTM, schema)
- `ArticleLayout.astro` — optional, passes ogType=article to BaseLayout
- `CourseLayout.astro`, `ExamLayout.astro` — course/exam-specific wrappers

**`src/content/`**
- Purpose: Astro Content Collections (type-safe markdown)
- Contains: Zod schema definition + markdown article files
- Pattern: `articles` collection in config.ts, files in `articles/` directory
- Build-time validation: Invalid frontmatter fails build
- Dynamic routing: `[slug].astro` reads from this collection

**`components/`**
- Purpose: Reusable UI components (React + Astro)
- Contains: 35+ component files, mostly React (.tsx)
- Lifecycle:
  - `client:load` — Navbar (interactive, needed immediately)
  - `client:visible` — Forms, testimonials, galleries (hydrate on scroll)
  - `client:idle` — CookieBanner, analytics (hydrate when idle)
  - No `client:` — Text sections, static content (0% JS)

**`utils/`**
- Purpose: Shared utility functions and data
- Key files:
  - `napData.ts` — Business data (address, phone, hours, social, logo)
  - `schemaData.ts` — Schema.org structured data generators
  - `buildPageTitle.ts` — Append brand name to SEO titles

**`data/`**
- Purpose: Non-source article metadata, category configs, internal links
- Pattern:
  - `articles/types.ts` — TypeScript interfaces
  - `articles/index.ts` — Aggregates articles, exports getSiblingArticles()
  - `category-config.ts` — Category display names, colors, hub paths, lead form sources
  - `internal-links.ts` — Internal link references

**`public/`**
- Purpose: Served at site root, contains static assets
- Key:
  - `images/optimized/` — Optimized .webp + .jpg fallbacks
  - `favicon.ico`, PNG favicons
  - `site.webmanifest` — PWA manifest
  - All assets referenced via absolute paths: `/images/optimized/...`

**`seo-system/`**
- Purpose: Separate SEO automation pipeline (has own architecture)
- Do not modify from main codebase level
- See `seo-system/files/CLAUDE.md` for internal documentation

**`dist/`**
- Purpose: Build output (generated, not committed)
- Pattern: Mirror of src/pages structure, all .astro → .html
- Deployment: Push entire `dist/` to Vercel

## Key File Locations

**Entry Points:**

- `src/pages/index.astro` — Homepage, composes 16+ sections
- `src/pages/blog/[slug].astro` — Dynamic blog router, loads articles from Content Collection
- `src/pages/cursos-ingles/*.astro` — 7 course landing pages
- `src/pages/examenes-cambridge/*.astro` — 6 exam hub pages

**Configuration:**

- `astro.config.mjs` — Build, routing, integrations, vite aliases
- `tsconfig.json` — TypeScript compiler options (ES2022, JSX, path alias @/*)
- `tailwind.config.ts` — Tailwind theme (colors, fonts, spacing)
- `vercel.json` — Deployment, redirects (150+ rules), headers, rewrites
- `package.json` — Dependencies (Astro 5, React 19, Tailwind 3, Sharp, Lucide)

**Core Logic:**

- `utils/napData.ts` — Business data (address, phone, hours, credentials)
- `utils/schemaData.ts` — Schema generators, import napData
- `src/content/config.ts` — Zod article validation schema
- `src/content/articles/*.md` — Article markdown files with frontmatter

**Testing:**

- No test files (static site, no unit tests)
- Manual QA via `npm run build` → `npm run preview`

**Styling:**

- `src/index.css` — Global Tailwind imports, custom animations
- `tailwind.config.ts` — Theme colors, fonts (Inter, Playfair Display)
- All component styles inline via className (Tailwind utility classes)

## Naming Conventions

**Files:**

- React components: PascalCase (`.tsx`) — `Navbar.tsx`, `LeadForm.tsx`, `PAAArticlePage.tsx`
- Astro pages: kebab-case (`.astro`) — `index.astro`, `sobre-nosotros.astro`, `[slug].astro`
- Astro layouts: PascalCase (`.astro`) — `BaseLayout.astro`, `ArticleLayout.astro`
- Utilities: camelCase (`.ts`) — `napData.ts`, `buildPageTitle.ts`, `schemaData.ts`
- Data files: camelCase (`.ts`) — `internal-links.ts`, `category-config.ts`
- Articles: kebab-case (`.md`) — `cuantas-veces-b2-first.md`, `diferencia-b2-c1.md`

**Directories:**

- Component folders: kebab-case inside `src/pages/` — `cursos-ingles/`, `examenes-cambridge/`
- Feature folders: plural nouns — `components/`, `utils/`, `data/`, `pages/`, `layouts/`
- Collection folders: plural — `articles/`, `images/`

**Variables & Functions:**

- Functions: camelCase — `buildPageTitle()`, `generateArticleSchema()`, `getSiblingArticles()`
- Constants: UPPER_SNAKE_CASE (if static) — `DEFAULT_OG_IMAGE`, `SITE_NAME`, `BASE_URL`
- React props: camelCase — `currentPath`, `client:load`, `ogImage`, `ogType`
- Astro component props: PascalCase interface — `interface Props { title: string }`

**URLs:**

- Page routes: kebab-case, all lowercase — `/cursos-ingles/infantil/`, `/examenes-cambridge/b2-first/`
- Blog slugs: kebab-case — `/blog/cuantas-veces-b2-first/`, `/blog/diferencia-b2-c1/`
- All routes end with trailing slash (enforced in astro.config: `trailingSlash: 'always'`)

## Where to Add New Code

**New Blog Article:**

1. Create markdown file: `src/content/articles/{slug}.md`
2. Structure frontmatter according to `src/content/config.ts` Zod schema
3. Include: url, category, priority, question, seoTitle, metaDescription, paaAnswer, contextSections[], impulseSection, faqItems[], breadcrumbs[], publishedDate, modifiedDate, readTime
4. If adding new category: update `ArticleCategory` type in `data/articles/types.ts` and `categoryConfig` in `data/category-config.ts`
5. Dynamic route `src/pages/blog/[slug].astro` automatically generates page at build time
6. Optional: Create static `.astro` file in `src/pages/blog/{slug}.astro` for page-specific customization (takes priority over dynamic route)

**New Course/Exam Page:**

1. Create `.astro` file: `src/pages/cursos-ingles/{course-name}.astro` or `src/pages/examenes-cambridge/{exam-name}.astro`
2. Import `BaseLayout`, import `CoursePageLayout` or `ExamPageLayout` component
3. Pass SEO props to BaseLayout (title, description, canonical, etc.)
4. Mount component with data props (course info, FAQs, pricing)
5. Styling: Import from `../../../components/` relative paths, use Tailwind classes

**New Location Page:**

1. Create `.astro` file: `src/pages/academia-ingles-{location}.astro`
2. Follow naming: kebab-case neighborhood name
3. Import BaseLayout, mount location-specific components
4. Import location data from `data/` (address, hours, gallery, etc.)
5. Include maps embed (use `mapsEmbedUrl` from napData or location-specific URL)

**New Reusable Component:**

1. Create `.tsx` file: `components/{ComponentName}.tsx`
2. If interactive (nav, form, filter): use React hooks (`useState`, `useEffect`)
3. If static: use Astro `.astro` component (0 JS overhead)
4. Import `NAP` from `utils/napData` if using business data
5. Use Tailwind classes for styling (no CSS files)
6. Export default function, define props interface
7. Use relative imports: `import { Navbar } from '../../components/Navbar'`

**New Schema or Data:**

1. Business data: Add to `utils/napData.ts` in NAP object
2. Schema generators: Add function to `utils/schemaData.ts`, export it
3. Article category: Add to `ArticleCategory` type in `data/articles/types.ts` and `categoryConfig` in `data/category-config.ts`
4. Article metadata: Use `data/articles/index.ts` to aggregate exports

**Utilities:**

- Shared helpers: `utils/{functionName}.ts`
- No classes or OOP patterns (functional utilities only)
- Type-safe: Always define input/output types

**Styling:**

- Global CSS: `src/index.css` (Tailwind @directives)
- Custom animations: Define in layout/component `<style>` tag or Tailwind config
- Component styles: Inline via className (no CSS files per component)

## Special Directories

**`dist/`**
- Purpose: Build output directory
- Generated: Yes (by `npm run build`)
- Committed: No (.gitignore excludes)
- Content: Static HTML files mirroring src/pages structure
- Deployment: Entire directory deployed to Vercel

**`.astro/`**
- Purpose: Astro build cache, generated types
- Generated: Yes (automatic during build)
- Committed: No (.gitignore excludes)
- Key: `content.d.ts` auto-generates Content Collection types

**`node_modules/`**
- Purpose: Installed dependencies
- Generated: Yes (by npm install)
- Committed: No
- Lockfile: `package-lock.json` (committed)

**`seo-system/`**
- Purpose: Separate SEO automation pipeline
- Generated: Partially (auto-backups in `site/pages/backups/`)
- Committed: Yes (version controlled)
- Do not modify: Has own git history and CLAUDE.md docs
- Access: Only via parent orchestration agents

**`.claude/`**
- Purpose: Project-level Claude Code tooling
- Contains: `settings.json`, `skills/` subdirectory
- Key: `skills/frontend-design/` — React/component design skill
- Do not modify: `settings.json` from root level (project-scoped)

**`public/images/optimized/`**
- Purpose: Optimized image outputs (.webp + .jpg fallback)
- Generated: Yes (by Sharp during build or manual optimization)
- Committed: Yes (assets included)
- Usage: Reference via absolute paths `/images/optimized/{filename}.webp`

---

*Structure analysis: 2026-04-09*
