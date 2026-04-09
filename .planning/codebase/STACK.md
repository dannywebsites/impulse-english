# Technology Stack

**Analysis Date:** 2026-04-09

## Languages

**Primary:**
- **TypeScript** 5.6.0 - Used in website project (`March-Impulse-Web-e7ad8740054b4e468e95bc81e5e4c79f17b98c97/`)
- **JavaScript** - Used in SEO writer backend and frontend (`seo-writer/`)
- **JSX/TSX** - React components in both projects

**Secondary:**
- **HTML/CSS** - Markup and styling (Tailwind CSS framework)

## Runtime

**Environment:**
- **Node.js** - Required for both projects (type definitions include `@types/node` ^22.14.0)
- **Browser Runtime** - React/Astro client-side JavaScript

**Package Manager:**
- **npm** - Primary package manager for both projects
- **Lockfile** - `package-lock.json` (standard npm lockfile)

## Frameworks

**Core (Website):**
- **Astro** 5.7.10 - Static site generation framework for main website
  - `@astrojs/react` 4.2.0 - React integration for Astro
  - `@astrojs/tailwind` 6.0.2 - Tailwind CSS integration
  - `@astrojs/sitemap` 3.3.0 - Automatic sitemap generation

**Core (SEO Writer):**
- **React** 18.3.1 - Frontend UI framework
- **Vite** 6.0.7 - Frontend build tool and dev server
- **Express** 4.21.2 - Backend HTTP server framework
- **Prisma** 6.2.0 - ORM for database access

**UI Components:**
- **Radix UI** (seo-writer)
  - `@radix-ui/react-alert-dialog` 1.1.15
  - `@radix-ui/react-dialog` 1.1.15
  - `@radix-ui/react-label` 2.1.8
  - `@radix-ui/react-select` 2.2.6
  - `@radix-ui/react-slot` 1.2.4
  - `@radix-ui/react-switch` 1.2.6
  - `@radix-ui/react-tabs` 1.1.13

**Styling:**
- **Tailwind CSS** 3.4.17 - Utility-first CSS framework (both projects)
- **PostCSS** 8.4.49 - CSS processing
- **Autoprefixer** 10.4.20 - CSS vendor prefixes

**Testing:**
- Not detected in package dependencies

**Build/Dev:**
- **Vite** 6.0.7 - Frontend bundler (SEO writer)
- **TypeScript** 5.6.0 - Type checking and transpilation (website)
- **Nodemon** 3.1.9 - Development file watcher for Node.js
- **Concurrently** 9.1.2 - Run multiple npm scripts in parallel

## Key Dependencies

**Critical:**

**Website Project:**
- `react` 19.0.0 - UI rendering
- `react-dom` 19.0.0 - React DOM bindings
- `lucide-react` 0.460.0 - Icon library
- `sharp` 0.34.5 - Image processing for Astro

**SEO Writer Project:**
- `@anthropic-ai/sdk` 0.72.1 - Claude API client for content writing
- `@google/genai` 1.39.0 - Google Gemini AI API client
- `@prisma/client` 6.2.0 - Database client (ORM)
- `apify-client` 2.9.0 - Apify web scraping platform
- `@tanstack/react-query` 5.90.20 - Server state management
- `react-router-dom` 7.13.0 - Client-side routing
- `react-markdown` 10.1.0 - Markdown renderer
- `dotenv` 16.4.5 - Environment variable loader

**Infrastructure:**
- `cors` 2.8.5 - Cross-origin resource sharing middleware
- `express` 4.21.2 - HTTP request handling
- `class-variance-authority` 0.7.1 - CSS variant management
- `clsx` 2.1.1 - Conditional className merging
- `tailwind-merge` 3.4.0 - Tailwind CSS class merging
- `sonner` 2.0.7 - Toast notification library
- `remark-gfm` 4.0.1 - GitHub-flavored markdown support
- `@tailwindcss/typography` 0.5.19 - Prose styling

## Configuration

**Environment:**

**Website (`March-Impulse-Web-e7ad8740054b4e468e95bc81e5e4c79f17b98c97/`):**
- Config files: `astro.config.mjs`, `tsconfig.json`, `tailwind.config.ts`, `postcss.config.js`
- Vite config via `astro.config.mjs`
- Vercel deployment config: `vercel.json`
- No required environment variables for local development

**SEO Writer (`seo-writer/`):**
- Config files: `vite.config.js`, `tailwind.config.js`, `postcss.config.js`
- Prisma schema: `prisma/schema.prisma`
- Database: SQLite file-based (configured via `DATABASE_URL` env var)

**Build:**
- **Website**: Static output to `/dist/` via Astro
- **SEO Writer**: Frontend to `/dist/` via Vite, backend as Node.js app

## Platform Requirements

**Development:**
- Node.js v20 or higher (per seo-writer README, inferred for website)
- npm or equivalent package manager
- macOS/Linux/Windows (Unix-like shell for scripts)

**Production:**
- **Website**: Vercel (static hosting configured in `vercel.json`)
- **SEO Writer Backend**: Any Node.js 20+ hosting (Express.js)
- **SEO Writer Frontend**: Any static hosting (or served from Node.js)
- SQLite database file persisted in application directory

## Deployment Configuration

**Vercel (`vercel.json`):**
- Build command: `npm run build`
- Output directory: `dist/`
- Clean URLs enabled
- Trailing slashes enforced
- Security headers: HSTS enabled
- Robots meta tags for specific pages (`/gracias`, search results)
- 148 permanent redirects from legacy WordPress site
- Single 404 rewrite: `/:path*` → `/404.html`

---

*Stack analysis: 2026-04-09*
