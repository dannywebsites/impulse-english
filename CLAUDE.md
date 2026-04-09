# CLAUDE.md — Impulse English Academy Website

---

## Project Overview

This is the **Impulse English Academy** website project — a React + TypeScript + Vite site deployed on Vercel. All visible content is written in **Peninsular Spanish (Spain)**.

The project contains:
- A full website codebase (React/TS/Vite) in `March-Impulse-Web-e7ad8740054b4e468e95bc81e5e4c79f17b98c97/`
- A dedicated SEO optimisation system in `March-Impulse-Web-.../seo-system/`
- Root-level Claude Code tooling (agents, commands, skills) in `.claude/`

---

## Project Structure

```
/                                       ← Project root (this file lives here)
├── CLAUDE.md                           ← This file — central documentation hub
├── .claude/                            ← Claude Code tooling (agents, commands, skills)
│   ├── agents/                         ← 6 development agents
│   ├── commands/                       ← Slash commands (ultra-think)
│   ├── skills/                         ← 4 development skills
│   └── TEMPLATE-README.md             ← Reproducibility guide for this tooling setup
│
├── March-Impulse-Web-.../              ← Website codebase
│   ├── src/                            ← Source code (React components, pages)
│   ├── components/                     ← Shared UI components
│   ├── pages/                          ← Page components
│   ├── data/                           ← Site data files
│   ├── assets/                         ← Static assets (images, fonts)
│   ├── public/                         ← Public static files
│   ├── seo-system/                     ← SEO optimisation engine (has its own CLAUDE.md)
│   │   └── files/CLAUDE.md            ← SEO system documentation — DO NOT DUPLICATE HERE
│   ├── .claude/                        ← Nested project tooling (settings, frontend-design skill)
│   ├── package.json                    ← Dependencies
│   ├── vite.config.ts                  ← Vite configuration
│   ├── tailwind.config.ts             ← Tailwind CSS configuration
│   ├── tsconfig.json                   ← TypeScript configuration
│   └── vercel.json                     ← Vercel deployment configuration
```

---

## Available Agents

| Agent | File | When to Use |
|-------|------|-------------|
| **Architect Review** | `.claude/agents/architect-review.md` | Review code for architectural consistency, SOLID principles, service boundaries, and design patterns |
| **Debugger** | `.claude/agents/debugger.md` | Diagnose bugs, analyze error logs/stack traces, identify root causes, fix memory leaks and race conditions |
| **AI Engineer** | `.claude/agents/ai-engineer.md` | Design AI systems, model selection, training pipelines, inference optimisation, and production deployment |
| **DevOps Troubleshooter** | `.claude/agents/devops-troubleshooter.md` | Production incident response, log analysis, deployment failures, container debugging, monitoring setup |
| **Architecture Modernizer** | `.claude/agents/architecture-modernizer.md` | Monolith decomposition, microservices design, event-driven architecture, API gateway patterns |
| **Unused Code Cleaner** | `.claude/agents/unused-code-cleaner.md` | Detect and safely remove dead code (unused imports, functions, classes) across multiple languages |

---

## Available Commands

| Command | File | How to Use |
|---------|------|------------|
| **Ultra Think** | `.claude/commands/ultra-think.md` | `/ultra-think [problem]` — Deep multi-dimensional analysis with structured recommendations |

---

## Available Skills

| Skill | Directory | When It Triggers |
|-------|-----------|-----------------|
| **SEO Optimizer** | `.claude/skills/seo-optimizer/` | Content optimisation, keyword research, technical SEO, meta tags, schema markup, Core Web Vitals |
| **Git Commit Helper** | `.claude/skills/git-commit-helper/` | Writing commit messages, analyzing staged changes, conventional commits format |
| **Skill Creator** | `.claude/skills/skill-creator/` | Creating new skills, running evaluations, benchmarking skill performance, optimising descriptions |
| **Systematic Debugging** | `.claude/skills/systematic-debugging/` | Any bug, test failure, or unexpected behaviour — enforces root cause investigation before fixes |
| **Taste** | `.claude/skills/taste/` | Design quality enforcement — anti-slop rules, style archetypes, premium craft standards. Used in SEO pipeline as Agent 06.5 |

### Nested Project Skills

| Skill | Directory | When It Triggers |
|-------|-----------|-----------------|
| **Frontend Design** | `March-Impulse-Web-.../.claude/skills/frontend-design/` | Building web components, pages, dashboards, React components, HTML/CSS layouts, UI design |

---

## Active Skills & When They Fire

Skills auto-trigger based on what you're doing. This table shows exactly which skills activate for each task:

| Task | Skills That Fire | Trigger |
|------|-----------------|---------|
| **Building a new page** | `astro-site-builder` + `page-builder` + `schema-markup-generator` + `taste` + `frontend-design` | Auto: keywords "page", "component", "layout" |
| **Writing blog content** | `brand-voice-enforcer` + `auto-publish-pipeline` + `seo-optimizer` | Auto: Spanish content, blog articles |
| **Designing UI components** | `taste` + `design-motion-principles` + `hero-section-designer` | Auto: frontend/CSS/React work |
| **Creating icons or images** | `icon-set-creator` + `nano-banana` | Auto: "generate image", "create icon" |
| **Adding animations** | `motion-graphics` + `design-motion-principles` | Auto: animation/motion work |
| **Running blog pipeline** | `auto-publish-pipeline` + `github-actions-publisher` + `api-integrations` | Auto: pipeline/publish work |
| **Schema.org markup** | `schema-markup-generator` + `seo-optimizer` | Auto: structured data work |
| **Managing redirects** | `redirect-manager` | Auto: vercel.json, 404, redirect work |
| **Configuring deployment** | `vercel-deployer` + `astro-site-builder` | Auto: Vercel/deploy work |
| **Cleaning up code** | `cleanup` | Auto: "clean up", "audit", "tidy" |
| **Improving a skill** | `autolearn` + `skill-creator` | Auto: "improve skill", "run evals" |
| **Debugging issues** | `systematic-debugging` + debugger agent | Auto: bugs, errors, failures |
| **Creating a PR** | `/pr` command | Slash command |
| **Deep analysis** | `/ultra-think` command | Slash command |

### Skill Priority Rules

When global skills (from `~/.claude/`) conflict with project skills (from `.claude/`):

- **`brand-voice-enforcer`** (project) overrides **`brand-voice`** (global) for ALL content in this project
- **`taste`** (global) applies as-is — design quality enforcement, no conflict
- **`cleanup`** (global) applies as-is — generic code hygiene
- **`autolearn`** (global) applies as-is — can improve any project skill
- **All other global skills** apply unless they conflict with a project-level equivalent
- **When in doubt:** Project-level skills take precedence within this directory

---

## Brand Configuration

**File:** `brand-config.ts` (project root)

All brand-specific values (company name, voice, CTAs, content rules) are centralized here. Skills reference this file instead of hardcoding business data. When templating for a new client, change this file first.

**File:** `utils/napData.ts` (website codebase)

All business identity data (address, phone, geo, hours, socials, credentials) lives here. Schema.org markup and page components import from this file.

See `TEMPLATE-SETUP.md` for the complete guide on cloning this project for a new client.

---

## Workflow Guide: Which Tool for Which Task

### Website Development
- **Building new pages/components** → `page-builder` + `frontend-design` + `taste` skills (auto-trigger)
- **Reviewing component architecture** → Spawn `architect-review` agent
- **Cleaning up after refactoring** → `cleanup` skill or `unused-code-cleaner` agent
- **Debugging build/runtime issues** → `systematic-debugging` skill + `debugger` agent

### SEO & Content
- **Optimising page content for search** → `seo-optimizer` skill (auto-triggers)
- **Full SEO pipeline** → See `seo-system/files/CLAUDE.md` for the 10-agent pipeline
- **Schema markup** → `schema-markup-generator` skill (auto-triggers)
- **Writing blog articles** → `brand-voice-enforcer` + `auto-publish-pipeline` skills

### Design & Visual
- **Hero sections** → `hero-section-designer` skill (auto-triggers)
- **Icons and illustrations** → `icon-set-creator` + `nano-banana` skills
- **Animations and transitions** → `motion-graphics` + `design-motion-principles` skills
- **Design quality review** → `taste` skill (auto-triggers on UI work)

### DevOps & Deployment
- **Vercel deployment issues** → `vercel-deployer` skill + `devops-troubleshooter` agent
- **Build pipeline failures** → `devops-troubleshooter` agent
- **URL redirects** → `redirect-manager` skill
- **Architecture decisions** → `/ultra-think [question]` for deep analysis

### Blog Automation
- **Pipeline configuration** → `auto-publish-pipeline` + `api-integrations` skills
- **GitHub Actions workflows** → `github-actions-publisher` skill
- **Content Collections** → `content-collection-designer` skill
- **Project setup** → `astro-site-builder` skill

### Code Quality
- **Complex design decisions** → `/ultra-think [question]`
- **Commit messages** → `git-commit-helper` skill (auto-triggers on staging)
- **Creating a PR** → `/pr` command
- **Creating new custom skills** → `skill-creator` skill
- **Improving existing skills** → `autolearn` skill

---

## Key Rules

### Language
- ALL visible content: **Peninsular Spanish (Spain)**
- Use vosotros forms, Spain-specific vocabulary
- Never use Latin American Spanish variants
- Code, file paths, schema property names, HTML tags: English

### Images
- ONLY use images from the project's `/assets/images/`
- Never use external, stock, or AI-generated images
- Always write alt text in Spanish

### FAQ Schema Rules (MANDATORY for all pages with FAQs)
- Always import `FAQItem` from `utils/schemaData.ts` — **never** define the interface locally
- Always type FAQ exports: `export const faqs: FAQItem[] = [...]`
- Always use `question` and `answer` keys — never `q`/`a` or other variants
- Always wire FAQs through `generateFAQSchema()` in the `.astro` file
- `generateFAQSchema()` includes runtime validation — build will fail on malformed FAQ data
- See `templates/` directory for starter files when creating new pages

### Backups
- Always back up files before editing
- SEO system auto-backs up to `/site/pages/backups/`

### SEO System
- The SEO system has its own comprehensive CLAUDE.md at `seo-system/files/CLAUDE.md`
- Do not duplicate SEO rules here — refer to that file
- The SEO pipeline has 10 custom agents and strict ordering rules

---

## Do Not Modify

These files belong to the nested project and should not be changed from the root level:
- `March-Impulse-Web-.../.claude/settings.json`
- `March-Impulse-Web-.../.claude/skills/frontend-design/SKILL.md`
- `March-Impulse-Web-.../seo-system/files/CLAUDE.md`

<!-- GSD:project-start source:PROJECT.md -->
## Project

**Impulse English Academy — Website Template**

A production Astro 5 + React + Tailwind website for Impulse English Academy (Madrid, Spain) that doubles as a reusable template for cloning to new client websites. The site includes a homepage, course pages, exam hub pages, location pages, a blog with auto-publishing pipeline, and lead capture forms. All visible content is in Peninsular Spanish.

**Core Value:** The template must be portable — changing `brand-config.ts`, `napData.ts`, and a handful of config files should produce a fully functional website for a new client with zero hardcoded references to Impulse.

### Constraints

- **Language**: All visible content in Peninsular Spanish (vosotros forms, Spain vocabulary)
- **Images**: Must use only images from project's /assets/images/ — no external/stock/AI images
- **Deployment**: Vercel static hosting — no server-side runtime for main site
- **Template portability**: All changes must work when brand-config.ts and napData.ts are swapped for a new client
- **No breaking changes**: Existing URLs, redirects, and SEO must be preserved
<!-- GSD:project-end -->

<!-- GSD:stack-start source:codebase/STACK.md -->
## Technology Stack

## Languages
- **TypeScript** 5.6.0 - Used in website project (`March-Impulse-Web-e7ad8740054b4e468e95bc81e5e4c79f17b98c97/`)
- **JavaScript** - Used in SEO writer backend and frontend (`seo-writer/`)
- **JSX/TSX** - React components in both projects
- **HTML/CSS** - Markup and styling (Tailwind CSS framework)
## Runtime
- **Node.js** - Required for both projects (type definitions include `@types/node` ^22.14.0)
- **Browser Runtime** - React/Astro client-side JavaScript
- **npm** - Primary package manager for both projects
- **Lockfile** - `package-lock.json` (standard npm lockfile)
## Frameworks
- **Astro** 5.7.10 - Static site generation framework for main website
- **React** 18.3.1 - Frontend UI framework
- **Vite** 6.0.7 - Frontend build tool and dev server
- **Express** 4.21.2 - Backend HTTP server framework
- **Prisma** 6.2.0 - ORM for database access
- **Radix UI** (seo-writer)
- **Tailwind CSS** 3.4.17 - Utility-first CSS framework (both projects)
- **PostCSS** 8.4.49 - CSS processing
- **Autoprefixer** 10.4.20 - CSS vendor prefixes
- Not detected in package dependencies
- **Vite** 6.0.7 - Frontend bundler (SEO writer)
- **TypeScript** 5.6.0 - Type checking and transpilation (website)
- **Nodemon** 3.1.9 - Development file watcher for Node.js
- **Concurrently** 9.1.2 - Run multiple npm scripts in parallel
## Key Dependencies
- `react` 19.0.0 - UI rendering
- `react-dom` 19.0.0 - React DOM bindings
- `lucide-react` 0.460.0 - Icon library
- `sharp` 0.34.5 - Image processing for Astro
- `@anthropic-ai/sdk` 0.72.1 - Claude API client for content writing
- `@google/genai` 1.39.0 - Google Gemini AI API client
- `@prisma/client` 6.2.0 - Database client (ORM)
- `apify-client` 2.9.0 - Apify web scraping platform
- `@tanstack/react-query` 5.90.20 - Server state management
- `react-router-dom` 7.13.0 - Client-side routing
- `react-markdown` 10.1.0 - Markdown renderer
- `dotenv` 16.4.5 - Environment variable loader
- `cors` 2.8.5 - Cross-origin resource sharing middleware
- `express` 4.21.2 - HTTP request handling
- `class-variance-authority` 0.7.1 - CSS variant management
- `clsx` 2.1.1 - Conditional className merging
- `tailwind-merge` 3.4.0 - Tailwind CSS class merging
- `sonner` 2.0.7 - Toast notification library
- `remark-gfm` 4.0.1 - GitHub-flavored markdown support
- `@tailwindcss/typography` 0.5.19 - Prose styling
## Configuration
- Config files: `astro.config.mjs`, `tsconfig.json`, `tailwind.config.ts`, `postcss.config.js`
- Vite config via `astro.config.mjs`
- Vercel deployment config: `vercel.json`
- No required environment variables for local development
- Config files: `vite.config.js`, `tailwind.config.js`, `postcss.config.js`
- Prisma schema: `prisma/schema.prisma`
- Database: SQLite file-based (configured via `DATABASE_URL` env var)
- **Website**: Static output to `/dist/` via Astro
- **SEO Writer**: Frontend to `/dist/` via Vite, backend as Node.js app
## Platform Requirements
- Node.js v20 or higher (per seo-writer README, inferred for website)
- npm or equivalent package manager
- macOS/Linux/Windows (Unix-like shell for scripts)
- **Website**: Vercel (static hosting configured in `vercel.json`)
- **SEO Writer Backend**: Any Node.js 20+ hosting (Express.js)
- **SEO Writer Frontend**: Any static hosting (or served from Node.js)
- SQLite database file persisted in application directory
## Deployment Configuration
- Build command: `npm run build`
- Output directory: `dist/`
- Clean URLs enabled
- Trailing slashes enforced
- Security headers: HSTS enabled
- Robots meta tags for specific pages (`/gracias`, search results)
- 148 permanent redirects from legacy WordPress site
- Single 404 rewrite: `/:path*` → `/404.html`
<!-- GSD:stack-end -->

<!-- GSD:conventions-start source:CONVENTIONS.md -->
## Conventions

## Naming Patterns
- PascalCase for React/component files: `Hero.tsx`, `LeadForm.tsx`, `Navbar.tsx`
- camelCase for utility/service files: `images.ts`, `napData.ts`, `schemaData.ts`
- kebab-case for page files: `[slug].astro`, `about-us.tsx`
- `.test.js` or `.spec.js` suffix for test files (co-located with source)
- camelCase for all functions: `handleSubmit`, `getClient`, `emitJobStatus`, `fetchJobs`
- Async functions named as verbs: `chat()`, `runWriter()`, `enqueuePipeline()`
- Event handlers prefixed with `handle`: `handleScroll()`, `handleSubmit()`
- camelCase for all variables: `formData`, `isHomePage`, `openDropdown`, `apiKey`
- UPPERCASE_SNAKE_CASE for constants: `API_BASE`, `BASE_WRITER_SYSTEM_PROMPT`, `MAX_TOKENS`, `BLOG_DIR`
- Boolean prefixes (optional but observed): `is*`, `show*`, `enable*`: `isHomePage`, `showPhone`, `enableCache`
- PascalCase for all TypeScript types and interfaces: `LeadFormProps`, `FAQItem`, `ImageData`, `NavItem`
- Suffix interfaces with `Props` for component props: `ExamPageLayoutProps`, `OptimizedImageProps`
- No leading `I` prefix for interfaces (modern TypeScript convention)
- camelCase for most directories: `components/`, `services/`, `utils/`, `pipeline/`, `hooks/`
- Kebab-case for route-based directories: `/pages/blog/`, `/pages/cursos/`, `/pages/ubicaciones/`
## Code Style
- No explicit formatter config detected (no `.prettierrc` or ESLint config in main codebase)
- Inferred from source: 2-space indentation, semicolons present, Tailwind classes inline
- Strict mode enabled: `"extends": "astro/tsconfigs/strict"` in `tsconfig.json`
- Target: ES2022, Module: ESNext
- JSX: react-jsx (automatic runtime)
- Path alias configured: `@/*` maps to project root
- Functional components default: `export default function ComponentName() { ... }`
- Props destructuring: `function Component({ prop1, prop2 }: ComponentProps) { ... }`
- Use `export default` for page components, `export` for reusable components (though not consistently enforced)
## Import Organization
- Use `@/` prefix for absolute imports from project root: `import { useJobs } from '@/hooks/useJobs'`
- Relative imports `../` used when within same component tree (components → utils)
## Error Handling
- Wrap async operations in try-catch blocks
- Throw descriptive Error objects with context (e.g., "Claude API error: {message}")
- Log errors to console with context prefix: `[Claude]`, `Error fetching jobs:`
- Return user-friendly error messages in API responses: `{ error: 'Failed to fetch jobs' }`
- Use Union types for state machines: `'idle' | 'loading' | 'success' | 'error'`
## Logging
- Prefix logs with module/service name in brackets: `[Claude]`, `[Database]`, `[Pipeline]`
- Include timing information for performance-critical operations
- No debug logging in client React components (use React DevTools)
- Error logs include full error object context: `console.error('message', error)`
- Use server logs to track pipeline progress and AI API calls
## Comments
- Complex algorithms or business logic: `// Build dynamic system prompt sections`
- Non-obvious implementation decisions: `// If we received substantial content before stream died, return it`
- Section delimiters for large code blocks: `/* Mobile Version */`, `/* Desktop Navigation */`
- Temporary workarounds: Mark with TODO or FIXME (though rarely found in this codebase)
- Use JSDoc for public functions and services
- Keep comments concise; code should be self-documenting
- Inline comments for "why", not "what" (code shows what, comment explains why)
## Function Design
- Use object destructuring for multiple props: `function Component({ prop1, prop2, ...rest }) { }`
- Order required params before optional/defaults
- Type props interfaces instead of inline types: `(props: ComponentProps)` preferred over `(prop1: string, prop2?: number)`
- React components return JSX or null: `return <div>...</div>` or `return null`
- Async functions return Promises: `async function runWriter(...) { ... }`
- Data transformations return plain objects/arrays: `return { id, name, status }`
- Custom hooks return tuples or objects: `return { data, loading, error }`
## Module Design
- Default export for main component: `export default function Hero() { ... }`
- Named exports for utilities and hooks: `export function useJobs() { ... }`
- Type exports use `export type`: `export type FAQItem = { question: string; answer: string }`
- No explicit barrel files observed (no `index.ts` re-exports)
- Each file imports directly from source: `import { LeadForm } from '../components/LeadForm'`
## Testing & Type Safety
- All component props typed with interfaces
- Function parameters typed: `(props: LeadFormProps)`, `async function chat(prompt, systemInstruction = null)`
- State typed with Union types: `useState<'idle' | 'loading' | 'success' | 'error'>('idle')`
- No `any` types observed; strict mode enforced
<!-- GSD:conventions-end -->

<!-- GSD:architecture-start source:ARCHITECTURE.md -->
## Architecture

## Pattern Overview
- Static site generation (SSG) with zero JavaScript by default
- React islands for interactive components (navbar, forms, filters) using Astro's `client:` directives
- Content-driven: Blog articles defined in Astro Content Collections (markdown files), dynamically routed
- SEO-first architecture: All schema.org markup generated server-side in BaseLayout
- Multi-layer composition: Page (Astro) → Layout (Astro) → Components (React + Astro hybrid)
- Single source of truth for business data: `utils/napData.ts` imported across all pages/components
## Layers
- Purpose: Render UI components and pages to static HTML
- Location: `components/` (React TSX), `src/pages/` (Astro pages), `src/layouts/` (Astro layouts)
- Contains: Page components, UI sections, reusable layouts, forms, galleries
- Depends on: Data layer (napData, schemaData, articles), utilities
- Used by: Astro build pipeline to generate `dist/`
- Purpose: Centralize business data, article content, and schema definitions
- Location: `utils/napData.ts`, `utils/schemaData.ts`, `data/articles/`, `src/content/`
- Contains: NAP (Name, Address, Phone), schema generators, article metadata, category configurations
- Depends on: External schema.org types, Zod validation
- Used by: All presentation components, layout meta tags, JSON-LD generation
- Purpose: Define article structure and validate markdown frontmatter
- Location: `src/content/config.ts` (collection schema), `src/content/articles/` (markdown files)
- Contains: Zod schema for article validation, article markdown with structured frontmatter
- Depends on: Astro Content Collections API, Zod validation
- Used by: Dynamic blog page router (`src/pages/blog/[slug].astro`)
- Purpose: Wrap content with common page structure (meta tags, GTM, schema, navigation)
- Location: `src/layouts/BaseLayout.astro`, `src/layouts/ArticleLayout.astro`, etc.
- Contains: HTML boilerplate, GTM setup, consent mode, analytics, JSON-LD injection
- Depends on: Schema generators, build config
- Used by: All pages (required wrapper)
- Purpose: Map URLs to page files and dynamic routes
- Location: `src/pages/` (file-based routing), `src/pages/blog/[slug].astro` (dynamic), `vercel.json` (redirects)
- Contains: Astro file-based routes, dynamic parameterized routes, Vercel redirect rules
- Depends on: Astro routing engine, Vercel deployment config
- Used by: Build process to generate static routes
## Data Flow
- No client-side state management framework (Jotai, Zustand, Redux)
- Local component state via React hooks (`useState`, `useEffect`) for interactive elements:
- Data fetching: None (fully static)
- Navigation: Standard HTML links, no router library
## Key Abstractions
- Purpose: Universal page wrapper
- Location: `src/layouts/BaseLayout.astro`
- Pattern: Astro component with Props interface, server-side rendering of all meta tags
- Responsibilities:
- Purpose: Render "People Also Ask" blog articles
- Location: `components/PAAArticlePage.tsx` (React component)
- Pattern: Functional React component receiving article object + siblings array
- Responsibilities:
- Purpose: Centralized schema.org structured data
- Location: `utils/schemaData.ts`
- Pattern: Exported functions returning JSON-LD objects
- Abstractions:
- Purpose: Single source of truth for all business identity data
- Location: `utils/napData.ts`
- Pattern: Exported const NAP object with nested properties
- Includes:
- Used by: Every component, layout, schema generator
- Purpose: Type-safe article metadata and validation
- Location: `src/content/config.ts` (schema definition)
- Pattern: Zod object schema with nested objects and arrays
- Structure: Article URL, category, priority, question (for PAA), SEO title/description, paaAnswer, contextSections (heading + content), impulseSection (heading + content + CTA links), faqItems (question + answer), breadcrumbs, dates, images
- Validation enforced at build time: missing/malformed articles fail build
## Entry Points
- Location: `src/pages/index.astro`
- Triggers: GET request to `/`
- Responsibilities:
- Location: `src/pages/blog/[slug].astro`
- Triggers: GET request to `/blog/{slug}/`
- Responsibilities:
- Location: `src/pages/blog/*.astro` (co-located pages like `cuantas-veces-b2-first.astro`)
- Priority: Static .astro files override dynamic `[slug].astro` route
- Triggers: GET request to `/blog/{matching-filename}/`
- Responsibilities: Simple wrapper importing data from `data/articles/` TypeScript files, rendering PAAArticlePage
- Location: `src/pages/cursos-ingles/*.astro`
- Pattern: Static routes per course type (infantil, primaria, secundaria, adultos, particulares, online)
- Responsibilities: Render course-specific content, import CourseLayout, display course info, FAQs, CTAs
- Location: `src/pages/examenes-cambridge/*.astro`
- Pattern: Static routes (index, b1-preliminary, b2-first, c1-advanced, fechas-precios, centros-madrid)
- Responsibilities: Render exam-specific content, import ExamLayout, display pricing, schedule, center locations
- Location: `src/pages/academia-ingles-*.astro`
- Pattern: Static routes per Madrid neighborhood/location
- Responsibilities: Location-specific contact info, hours, gallery, maps embed, reviews
## Error Handling
## Cross-Cutting Concerns
- No server-side logging framework
- Client-side: Google Tag Manager + GA4 capture all user events
- No console.log statements in production code (can add via skills)
- Build-time: Zod schema for articles (enforced in `src/content/config.ts`)
- Runtime: Form validation in `LeadForm` component (email format, required fields)
- No request body validation (static site, no API endpoints)
- Not applicable (static site, no user accounts)
- Contact form submissions POST to external service (Impulse backend)
- None at runtime
- All content pre-built into static HTML at build time
- External only: Contact form POST, Google Maps embed, Vimeo iframe (homepage hero only on desktop)
- File-based routing via Astro (no router library)
- Dynamic routes via `[slug]` params
- Redirects centralized in `vercel.json` (replaces Astro redirects)
- Navbar tracking: `currentPath` prop passed from pages, stored in component state
- Canonical URLs: auto-generated in BaseLayout (page path → BASE_URL + canonical prop)
- All canonical URLs end with trailing slash (enforced in astro.config: `trailingSlash: 'always'`)
- Meta robots: default "index, follow" (override with `noindex` prop for non-indexable pages like /gracias/, /blog?q=search)
- Open Graph + Twitter Card generated for all pages
- JSON-LD structures for: Organization, WebSite, Article, FAQPage, LocalBusiness
- No XML sitemaps explicitly defined (Astro `@astrojs/sitemap` auto-generates based on routes)
- Static HTML (no dynamic rendering overhead)
- React hydration only where necessary (client: directives)
- Image optimization: Sharp for generation, `.webp` preferred with `.jpg` fallback
- Font preloading: Google Fonts Inter + Playfair Display preconnected + preloaded
- Analytics: Deferred GA4 (loads after 3.5s or first user interaction) to avoid blocking render
<!-- GSD:architecture-end -->

<!-- GSD:workflow-start source:GSD defaults -->
## GSD Workflow Enforcement

Before using Edit, Write, or other file-changing tools, start work through a GSD command so planning artifacts and execution context stay in sync.

Use these entry points:
- `/gsd:quick` for small fixes, doc updates, and ad-hoc tasks
- `/gsd:debug` for investigation and bug fixing
- `/gsd:execute-phase` for planned phase work

Do not make direct repo edits outside a GSD workflow unless the user explicitly asks to bypass it.
<!-- GSD:workflow-end -->

<!-- GSD:profile-start -->
## Developer Profile

> Profile not yet configured. Run `/gsd:profile-user` to generate your developer profile.
> This section is managed by `generate-claude-profile` -- do not edit manually.
<!-- GSD:profile-end -->
