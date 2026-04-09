---
name: Astro Site Builder
description: >
  Scaffold and configure an Astro 5 website with React, Tailwind CSS, and Vercel deployment for the
  Impulse English Academy. Use this skill when creating a new site from scratch, setting up the project
  structure, configuring build tools, or troubleshooting Astro/Vite/Vercel configuration. Also use when
  adding new integrations, updating dependencies, or modifying the build pipeline. This skill contains
  the exact configuration needed to reproduce the live impulse-english.es website.
---

# Astro Site Builder

Scaffolds the complete Astro 5 project structure for Impulse English Academy with React interactivity,
Tailwind CSS styling, and Vercel static deployment. Contains pinned dependency versions, exact config
files, and the BaseLayout template that powers every page.

## When to Use

- Creating the project from scratch (`npm create astro@latest`)
- Adding or updating dependencies
- Modifying `astro.config.mjs`, `tailwind.config.ts`, or `tsconfig.json`
- Troubleshooting build errors or Vite configuration issues
- Setting up the BaseLayout with SEO, analytics, and schema injection
- Configuring fonts, colors, or global styles

---

## 1. Tech Stack (Exact Versions)

| Package | Version | Purpose |
|---|---|---|
| astro | ^5.7.10 | Static site generator (core) |
| @astrojs/react | ^4.2.0 | React integration (client:idle hydration) |
| @astrojs/tailwind | ^6.0.2 | Tailwind CSS integration |
| @astrojs/sitemap | ^3.3.0 | Auto-generates sitemap.xml |
| react | ^19.0.0 | UI components |
| react-dom | ^19.0.0 | React DOM renderer |
| lucide-react | ^0.460.0 | Icon library |
| @vercel/analytics | ^2.0.1 | Vercel Web Analytics |
| @vercel/speed-insights | ^2.0.0 | Vercel Speed Insights |

### Dev Dependencies
| Package | Version | Purpose |
|---|---|---|
| tailwindcss | ^3.4.17 | Utility-first CSS |
| postcss | ^8.4.49 | CSS processing |
| autoprefixer | ^10.4.20 | Vendor prefixing |
| sharp | ^0.34.5 | Image optimization |
| typescript | ~5.6.0 | Type checking |
| @types/node | ^22.14.0 | Node.js types |
| @types/react | ^19.0.0 | React types |
| @types/react-dom | ^19.0.0 | React DOM types |

### package.json
```json
{
  "name": "impulse-english-academy",
  "private": true,
  "version": "1.0.0",
  "type": "module",
  "scripts": {
    "dev": "astro dev",
    "build": "astro build",
    "preview": "astro preview"
  }
}
```

---

## 2. Astro Configuration

**File:** `astro.config.mjs`

```javascript
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://impulse-english.es',
  output: 'static',
  trailingSlash: 'always',
  server: { port: 3000 },
  integrations: [
    react(),
    tailwind({ configFile: './tailwind.config.ts' }),
    sitemap(),
  ],
  build: { format: 'directory' },
  // Redirects handled exclusively by vercel.json (single source of truth)
  vite: {
    resolve: {
      alias: { '@': '.' }
    }
  }
});
```

**Critical settings:**
- `output: 'static'` — pre-renders all pages at build time (no SSR)
- `trailingSlash: 'always'` — all URLs end with `/` (must match vercel.json)
- `build: { format: 'directory' }` — generates `page/index.html` not `page.html`
- `alias: { '@': '.' }` — allows `@/utils/schemaData` imports from project root
- Redirects are in `vercel.json` ONLY, never in Astro config

---

## 3. Tailwind Configuration

**File:** `tailwind.config.ts`

```typescript
import type { Config } from 'tailwindcss';

export default {
  content: [
    './src/**/*.{astro,html,js,jsx,ts,tsx}',
    './*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './pages/**/*.{ts,tsx}',
    './utils/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'accent-blue': '#12477d',
        'brand-red': '#ea4e59',
        'zinc-surface': '#F4F4F5',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Inter', 'system-ui', 'sans-serif'],
        serif: ['Playfair Display', 'Georgia', 'serif'],
      },
    },
  },
  plugins: [],
} satisfies Config;
```

**Brand colors:**
- `accent-blue` (#12477d) — primary brand color, used for headers, CTAs, backgrounds
- `brand-red` (#ea4e59) — accent color, used for dividers, highlights, hover states
- `zinc-surface` (#F4F4F5) — light gray background for alternating sections

**Fonts:**
- `Inter` — body text, headings (sans-serif)
- `Playfair Display` — decorative serif for hero headlines

**Content paths include root-level directories** (`components/`, `pages/`, `utils/`) because the project has files outside `src/`.

---

## 4. TypeScript Configuration

**File:** `tsconfig.json`

```json
{
  "extends": "astro/tsconfigs/strict",
  "compilerOptions": {
    "target": "ES2022",
    "module": "ESNext",
    "lib": ["ES2022", "DOM", "DOM.Iterable"],
    "skipLibCheck": true,
    "types": ["node"],
    "moduleResolution": "bundler",
    "isolatedModules": true,
    "moduleDetection": "force",
    "allowJs": true,
    "jsx": "react-jsx",
    "paths": { "@/*": ["./*"] },
    "allowImportingTsExtensions": true,
    "noEmit": true
  }
}
```

**Key:** The `@/*` path alias maps to project root, NOT `src/`. This is because many shared files (`utils/`, `components/`, `data/`) live at the project root alongside `src/`.

---

## 5. Directory Structure

```
project-root/
├── src/
│   ├── pages/              ← Astro file-based routing (138 .astro files)
│   │   ├── index.astro
│   │   ├── blog/
│   │   │   ├── index.astro
│   │   │   ├── [slug].astro  ← Dynamic route for Content Collection articles
│   │   │   └── *.astro       ← Static blog pages (74 hand-written)
│   │   ├── cursos-ingles/
│   │   ├── examenes-cambridge/
│   │   ├── linguaskill/
│   │   ├── academia-ingles-*.astro  ← Location pages (10)
│   │   ├── academias-ingles-madrid/ ← Mega-hub pages
│   │   └── 404.astro
│   ├── content/
│   │   └── articles/       ← Content Collection (Zod-validated .md files)
│   │       └── config.ts   ← Zod schema definition
│   ├── layouts/
│   │   └── BaseLayout.astro ← Master layout (SEO, analytics, JSON-LD)
│   └── index.css           ← Global Tailwind imports
├── components/             ← React components (root level, NOT in src/)
│   ├── Navbar.tsx
│   ├── Footer.tsx
│   ├── Hero.tsx
│   ├── LeadForm.tsx
│   ├── PAAArticlePage.tsx
│   └── ...
├── pages/                  ← React page components (root level)
│   └── blog/
├── data/                   ← Static data files
│   ├── articles/
│   ├── category-config.ts
│   └── internal-links.ts
├── utils/                  ← Utility functions
│   ├── schemaData.ts       ← Schema.org generators
│   ├── napData.ts          ← NAP (Name, Address, Phone) data
│   └── buildPageTitle.ts
├── public/                 ← Static assets served as-is
│   ├── favicon.ico
│   ├── robots.txt
│   ├── llms.txt
│   ├── site.webmanifest
│   └── images/
├── templates/              ← Starter templates for new pages
├── astro.config.mjs
├── tailwind.config.ts
├── tsconfig.json
├── postcss.config.js       ← { plugins: { tailwindcss: {}, autoprefixer: {} } }
├── vercel.json             ← Deployment config + redirects
└── package.json
```

**Important:** Components, pages, data, and utils directories exist at the ROOT level (not inside `src/`). Only `pages/` (routing), `content/` (collections), `layouts/`, and `index.css` are inside `src/`. The `@/` alias resolves to root, making imports like `@/utils/schemaData` work.

---

## 6. BaseLayout Template

**File:** `src/layouts/BaseLayout.astro`

This is the master layout wrapping every page. It handles:

### Props Interface
```typescript
interface Props {
  title: string;
  description: string;
  keywords?: string;
  canonical?: string;
  ogImage?: string;               // Default: S3 logo image
  ogType?: 'website' | 'article';
  noindex?: boolean;
  publishedTime?: string;         // ISO 8601 for articles
  modifiedTime?: string;          // ISO 8601 for articles
  author?: string;                // Default: 'Impulse English Academy'
  fullTitle?: boolean;            // true = use title as-is; false = append site name
  schemas?: object[];             // Page-specific Schema.org objects
}
```

### Schema Injection (@graph Pattern)
```typescript
// Global schemas (every page)
const globalSchemas = [generateOrganizationSchema(), generateWebSiteSchema()];

// Combine with page-specific schemas
const allSchemas = [...globalSchemas, ...pageSchemas];

// Build @graph (removes duplicate @context)
const schemaGraph = {
  "@context": "https://schema.org",
  "@graph": allSchemas.map(s => {
    const { "@context": _, ...rest } = s;
    return rest;
  })
};
```

**AggregateRating dedup:** If any page schema has `aggregateRating`, it's stripped from the global Organization schema to prevent Google's "multiple aggregate ratings" error.

### Analytics Loading Strategy
1. **GTM + GA4:** Deferred — loads after 3.5s timeout OR first user interaction (scroll/click/touch/keydown)
2. **Vercel Analytics + Speed Insights:** Loaded via `requestIdleCallback` (falls back to 2s setTimeout)
3. **GDPR Consent Mode:** Default `denied` for both `analytics_storage` and `ad_storage`, with 500ms `wait_for_update`

### Font Loading (Non-Render-Blocking)
```html
<link rel="preload" as="style" href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Playfair+Display:wght@400;600;700&display=swap">
<link rel="stylesheet" href="..." media="print" onload="this.media='all'">
<noscript><link rel="stylesheet" href="..."></noscript>
```

### Tracking IDs
- GTM: `GTM-TDC7CQDD`
- GA4: `G-WN5973VY1M`
- Google Ads: `AW-11461982741`

### Global Click Tracking
Phone (`tel:`) and WhatsApp (`wa.me`) clicks are pushed to `dataLayer` with event names `phone_click` and `whatsapp_click`.

### Hero Animations (CSS)
```css
@keyframes heroFadeUp {
  from { opacity: 0; transform: translateY(28px); }
  to { opacity: 1; transform: translateY(0); }
}
.animate-hero-fade-up { animation: heroFadeUp 0.9s cubic-bezier(0.22, 1, 0.36, 1) forwards; }
```
Delay classes: `.animation-delay-100` through `.animation-delay-400`

### Accessibility
- Skip-to-content link: `<a href="#main" class="sr-only focus:not-sr-only ...">Saltar al contenido principal</a>`
- `<html lang="es-ES">`
- `<meta name="theme-color" content="#12477d">`
- `selection:bg-accent-blue selection:text-white` on main container

---

## 7. PostCSS Configuration

**File:** `postcss.config.js`

```javascript
export default {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
};
```

---

## 8. Global Styles

**File:** `src/index.css`

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

Imported by BaseLayout.astro via `import '../index.css';`

---

## 9. Build & Development

```bash
npm run dev      # Start dev server on port 3000
npm run build    # Build static site to dist/
npm run preview  # Preview built site locally
```

**Output:** `dist/` directory containing static HTML files. Deployed to Vercel via git push.

---

## Critical Rules

- Redirects are NEVER configured in `astro.config.mjs` — all redirects go in `vercel.json` (see redirect-manager skill)
- The `components/` directory lives at the project root level, NOT inside `src/`. This is a deliberate architectural decision.
- Astro uses Vite under the hood. Path aliases must be configured in BOTH `tsconfig.json` (for TypeScript) and via Vite's `resolve.alias` (for build resolution).
- When debugging "Cannot resolve" errors, check both tsconfig.json `paths` and the Vite config.

---

## Related Skills

- **content-collection-designer** — defines the Content Collections that Astro builds pages from
- **redirect-manager** — manages the `vercel.json` that this config references for redirects
- **vercel-deployer** — handles the Vercel deployment that serves the built site
- **schema-markup-generator** — provides the Schema.org generators used in BaseLayout
- **page-builder** — creates pages that use this project structure and BaseLayout
