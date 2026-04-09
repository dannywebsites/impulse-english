# Architecture Patterns — Impulse Template Improvement Milestone

**Domain:** Astro 5 static website with React islands, template portability system
**Researched:** 2026-04-09
**Confidence:** HIGH (based on direct codebase read + verified Astro 5 docs)

---

## Current Architecture Overview

The site is a fully static Astro 5 build — no server runtime on the main site. All interactivity is handled by React island components hydrated on the client via `client:` directives. The five improvements must work within this constraint.

**Layer stack (innermost to outermost):**

```
brand-config.ts / napData.ts      ← Config layer (per-client identity)
        ↓
utils/schemaData.ts               ← Schema generators (read config)
        ↓
components/*.tsx                  ← React islands (hydrated on client)
        ↓
src/layouts/BaseLayout.astro      ← Page wrapper (meta, GTM, JSON-LD)
        ↓
src/pages/**/*.astro              ← Route handlers (compose layouts + components)
        ↓
dist/                             ← Static HTML output → Vercel
```

---

## Component Boundaries

### What Talks to What

| Component | Reads From | Writes To | Communicates With |
|-----------|------------|-----------|-------------------|
| `LeadForm.tsx` | Props (webhookUrl, source) | External webhook URL | LeadConnectorHQ API via `fetch()` |
| `BaseLayout.astro` | napData, schemaData, page props | `<head>` HTML | Nothing (server-only render) |
| `utils/napData.ts` | Hardcoded file values | Exported NAP object | All components and layouts |
| `brand-config.ts` | Hardcoded file values | Exported BRAND_CONFIG | Skills, SEO pipeline, some components |
| `src/content/config.ts` | Zod schema definition | Build-time types | Dynamic blog route, Content Collections |
| `src/pages/blog/[slug].astro` | Content Collection | Static HTML | `PAAArticlePage.tsx` |
| `vercel.json` | Static config | Vercel deployment | Redirect rules, headers |

### Boundary Rules
- **Config layer never imports from components** — data flows downward only
- **React components never import from Astro pages** — components are leaves
- **schemaData always imports from napData** — single source of truth chain
- **Static pages import from `data/` not from `src/content/`** — two separate article systems exist

---

## How Each Improvement Integrates

### 1. Webhook URL — Move to Environment Variable

**Current:** Hardcoded default in `LeadForm.tsx` props interface (line 20 of the component).

**Integration pattern:**

```
.env (VITE_WEBHOOK_URL)
        ↓
astro.config.mjs (no schema needed — VITE_ prefix auto-exposes to client)
        ↓
LeadForm.tsx (import.meta.env.VITE_WEBHOOK_URL replaces hardcoded default)
```

**Constraint:** Astro 5 introduced `astro:env` with a type-safe schema. For a `PUBLIC_` variable consumed by a React island (`client:visible`), two approaches work:

- **VITE_ prefix approach:** `VITE_WEBHOOK_URL` in `.env`, accessed as `import.meta.env.VITE_WEBHOOK_URL` in any `.tsx` file. No schema required. Works in Astro components and React components alike. (HIGH confidence — standard Vite behavior)
- **astro:env approach:** Define `WEBHOOK_URL` in `astro.config.mjs` under `env.schema` as `{ context: 'client', access: 'public' }`, import from `astro:env/client`. More type-safe, catches missing vars at build time. (HIGH confidence — Astro 5 native)

**Recommendation:** Use `astro:env` schema approach. It validates at build time, produces a TypeScript error if the var is missing, and is the Astro 5 idiomatic pattern. Add `PUBLIC_WEBHOOK_URL` to the schema so it is clearly marked as non-secret.

**Where to change:**
1. `astro.config.mjs` — add env schema definition
2. `LeadForm.tsx` — replace hardcoded default with `import.meta.env.PUBLIC_WEBHOOK_URL`
3. `.env` (local) and Vercel dashboard — add `PUBLIC_WEBHOOK_URL` value
4. `TEMPLATE-SETUP.md` — document as a required per-client env var

**Component boundary:** No new component needed. Change is isolated to `LeadForm.tsx` and `astro.config.mjs`. No other component is affected.

---

### 2. Honeypot Spam Protection

**Current:** No spam protection. Form posts directly to webhook on valid submit.

**Integration pattern:**

```
LeadForm.tsx
├── [visible fields: name, email, phone, level, privacy checkbox]
├── [honeypot div — hidden via CSS position:absolute, left:-9999px]
│   └── [input name="website" autocomplete="one-time-code" tabIndex={-1}]
└── handleSubmit()
    ├── if (honeypotValue !== '') → fake success, return early, do not POST
    └── else → POST to webhook as normal
```

**Key implementation decisions (verified from 2025 research):**

- Do NOT use `display:none` or `visibility:hidden` — some bots detect these
- Use CSS `position: absolute; left: -9999px; opacity: 0;` instead
- Set `autoComplete="one-time-code"` to prevent browsers from autofilling the honeypot
- Set `tabIndex={-1}` so keyboard users cannot accidentally land on it
- Name the field something plausible (`website`, `url`, `company`) not `honeypot`
- Return a fake success response when bot detected — do not give bots error signals
- Add React state for honeypot value: `const [honeypot, setHoneypot] = useState('')`

**Where to change:** `LeadForm.tsx` only. No other file touches the form internals.

**Component boundary:** Self-contained. Honeypot state and check live entirely within `LeadForm.tsx`. No new components, no new routes, no config changes.

---

### 3. Form Error Feedback

**Current:** `catch (error) { setStatus('error') }` exists but the `status === 'error'` state is never rendered (no JSX branch for it). Leads are silently lost on webhook failure.

**Integration pattern:**

```
LeadForm.tsx state machine:
idle → loading → success → [redirect to /gracias]
idle → loading → error   → [show error message, allow retry]
```

**What to add:**
- Error JSX branch in the return — display a Spanish-language error message with a retry option
- Do NOT redirect on error — user must be able to retry without re-entering data
- Keep form data in state on error (do not reset `formData`)
- Reset status to `idle` on retry so loading state works again
- Error message must be in Peninsular Spanish per project language rules

**Error message content (Peninsular Spanish):**
> "Ha habido un problema al enviar tu solicitud. Por favor, inténtalo de nuevo o llámanos directamente al [phone from napData]."

**Where to change:** `LeadForm.tsx` only. Import `NAP` from `utils/napData.ts` to get the phone number dynamically (do not hardcode it).

**Component boundary:** Self-contained. The `status` state already exists — only the rendering branch is missing.

---

### 4. Image Consolidation and Astro Image Pipeline

**Current:** Images referenced from S3 URLs scattered across 10+ component files. No centralized image registry for components that use external images.

**Target architecture:**

```
assets/images/           ← master originals (committed to git)
        ↓ (Astro build processes these)
Astro Image component    ← <Image src={import(...)} alt="..." />
        ↓
dist/_astro/             ← build-output optimized webp + fallback jpg
```

**Astro 5 image pipeline rules (HIGH confidence — verified against official docs):**

- Images in `src/` (or `assets/` aliased to `src/`) are processed by Sharp at build time
- Images in `public/` are NOT optimized — they are served as-is
- Import images as ES modules: `import heroImg from '../assets/images/hero.jpg'`
- Pass the imported object to `<Image src={heroImg} alt="..." />` — Astro infers width/height automatically
- Output format: WebP by default with Sharp, JPEG fallback available via `format` prop
- `getImage()` is available for programmatic use (e.g., CSS backgrounds, dynamic generation)

**Migration pattern for each S3 image:**
1. Download the image file into `assets/images/{descriptive-name}.jpg`
2. Find all component references to the old S3 URL
3. Replace with ES module import + `<Image />` usage
4. Alt text must be written in Peninsular Spanish

**Centralized image registry (recommended):**
Create `utils/images.ts` (one already exists at `src/data/images.ts` — extend it):
```typescript
// utils/images.ts — import all images here, export named references
import hero from '../assets/images/hero.jpg';
import teamPhoto from '../assets/images/team.jpg';
// ...
export const IMAGES = { hero, teamPhoto } as const;
```
Components import from `IMAGES` rather than doing individual imports. This makes future image swaps (per client) a single-file change.

**Existing `OptimizedImage.tsx`** component already acts as a fallback wrapper — this component should be the standard image rendering component once images are local. Verify it uses `<Image>` from `astro:assets` or wraps a native `<img>` with lazy loading.

**Where to change:**
- `assets/images/` — add downloaded image files
- `utils/images.ts` — central image registry
- Individual components — replace S3 URLs with registry imports
- `OptimizedImage.tsx` — confirm it uses Astro image optimization correctly

**Component boundary:** Image changes are local to each component that referenced an S3 URL. No routing, layout, or config changes needed.

---

### 5. Client Onboarding Automation System

**This is architecturally the most distinct improvement.** It does not fit inside the Astro static site — it is a separate offline tool that generates a ready-to-deploy Astro project from the template.

**Recommended architecture: CLI script in `scripts/onboard-client.js`**

```
INPUT: Client URL + Q&A answers
         ↓
[Phase 1: Research Agent]
  Firecrawl scrapes client website
  Gemini/Claude extracts structured business data
  Output: raw JSON { name, address, phone, email, geo, hours, social, ... }
         ↓
[Phase 2: Question Flow]
  CLI prompts for data Firecrawl could not extract
  (logo path, analytics IDs, service categories, brand voice, tone)
  Output: merged complete config object
         ↓
[Phase 3: Config Population]
  Write brand-config.ts from BRAND_CONFIG template
  Write napData.ts from NAP template
  Write buildPageTitle.ts constants
  Write .env with PUBLIC_WEBHOOK_URL placeholder
  Output: modified config files
         ↓
[Phase 4: Asset Preparation]
  Copy client-provided images into assets/images/
  Generate webp previews (Sharp)
  Update utils/images.ts registry
         ↓
[Phase 5: Build Verification]
  Run `npm run build` 
  Report success/failure
  List TODOs: analytics IDs, GSC verification code, etc.
```

**Technology fit:**
- Firecrawl is already integrated in the SEO writer system (`seo-writer/server/services/firecrawl.js`) — the onboarding script can import the same service or call the same API key
- Gemini is already integrated for structured JSON extraction (`seo-writer/server/services/gemini.js`)
- Node.js fs module for config file writing (no new dependencies)
- `readline` or `@inquirer/prompts` for interactive Q&A CLI
- Sharp is already a project dependency — use for image prep

**Why not a web UI?** The static site has no server runtime. A CLI script run once during project setup is the correct fit. It runs locally, produces committed files, and requires no infrastructure.

**Config population strategy:** Templates with replacement tokens are fragile. Instead, generate the TypeScript config files programmatically by constructing the object and using `JSON.stringify` or a typed template string. The output files should be valid TypeScript that passes `tsc --noEmit`.

**Data flow for onboarding:**

```
Client website URL (input)
        ↓
Firecrawl markdown extraction
        ↓
LLM structured extraction → { businessData: {...} }
        ↓
CLI confirmation/gap-fill prompts
        ↓
Merged config object
        ↓
brand-config.ts (written)
napData.ts (written)
buildPageTitle.ts (written)
.env template (written)
        ↓
`npm run build` (validation)
        ↓
TODO list printed to terminal
```

**Component boundaries for onboarding system:**

| Component | Responsibility | Inputs | Outputs |
|-----------|---------------|--------|---------|
| `scripts/onboard-client.js` | Orchestrator | Client URL | Modified config files |
| `scripts/lib/scrapeClient.js` | Web research | URL | Raw business JSON |
| `scripts/lib/extractConfig.js` | LLM extraction | Raw HTML/markdown | Typed config object |
| `scripts/lib/promptUser.js` | Interactive Q&A | Partial config | Complete config |
| `scripts/lib/writeConfigs.js` | File writer | Complete config | brand-config.ts, napData.ts |
| `scripts/lib/prepAssets.js` | Image prep | Image files + config | assets/images/, utils/images.ts |

---

## Suggested Build Order (Dependency Graph)

Build in this order — each phase unblocks the next:

```
1. Webhook env var       → unblocks: safer form, enables per-client config
         ↓
2. Form error feedback   → depends on: nothing new (just the existing status state)
         ↓
3. Honeypot protection   → depends on: nothing new (adds to form after error feedback)
   [1-3 are pure LeadForm.tsx changes — batch these, test once]

4. Image consolidation   → depends on: assets/ structure decision (do this before onboarding
         ↓                 so onboarding script knows where images go)
5. Onboarding system     → depends on: all of the above being stable
                           (generates configs that reference env vars, images, etc.)
```

**Rationale for this order:**
- LeadForm improvements (1-3) are isolated and fast — no architectural changes, just new logic in one file. Completing these first reduces risk for the larger image + onboarding work.
- Image consolidation must precede the onboarding system because the onboarding script needs to know the canonical image locations to populate `utils/images.ts` correctly.
- Onboarding is last because it wraps everything — it populates config files that reference the env var, installs images in the now-established location, and its output is validated by a full build.

---

## Anti-Patterns to Avoid

### Anti-Pattern 1: Putting Onboarding Logic Inside the Astro Site
**What:** Creating an Astro page or API route for client onboarding.
**Why bad:** The main site is purely static (no server runtime). Adding a server-rendered route would require switching to SSR mode, changing the Vercel deployment config, and adding auth. This is massive scope creep.
**Instead:** CLI script in `scripts/` — runs once locally, generates files, done.

### Anti-Pattern 2: Hardcoding New Image Paths Per Component
**What:** Migrating S3 images by pasting new relative paths directly into each component.
**Why bad:** Makes the next client clone require editing 10+ component files to swap images.
**Instead:** Central `utils/images.ts` registry. Components import from the registry. Client swap = swap images + update one registry file.

### Anti-Pattern 3: Using `display:none` for the Honeypot Field
**What:** `<input style={{display: 'none'}} />` for the honeypot.
**Why bad:** Many bots detect `display:none` and skip those fields. Screen readers may also announce the field.
**Instead:** Off-screen CSS (`position: absolute; left: -9999px; opacity: 0`) + `tabIndex={-1}` + `autoComplete="one-time-code"`.

### Anti-Pattern 4: VITE_ Prefix for the Webhook URL
**What:** Using `VITE_WEBHOOK_URL` instead of `PUBLIC_WEBHOOK_URL` with `astro:env`.
**Why bad:** `VITE_` variables bypass Astro's type system. `import.meta.env.VITE_WEBHOOK_URL` will be `undefined` in production if not set, with no build-time warning.
**Instead:** Declare in `astro:env` schema with `context: 'client', access: 'public'`. Build fails loudly if missing.

### Anti-Pattern 5: Resetting Form State on Webhook Error
**What:** `setFormData({ name: '', email: '', ... })` inside the catch block.
**Why bad:** User loses all their input and must retype everything to retry.
**Instead:** Only reset on success. On error, keep form data intact, change button to "Reintentar" state.

---

## Scalability Considerations

| Concern | Current Scale | With Template Improvements |
|---------|--------------|---------------------------|
| New client setup | 10-step manual process (TEMPLATE-SETUP.md) | 1 CLI command + answer questions |
| Image management | S3 URLs scattered in 10+ files | Central registry, swap = 1 file |
| Webhook security | URL hardcoded in source code | Env var per deployment |
| Form spam | No protection | Honeypot blocks ~95%+ of bots |
| Lead loss on failure | Silent (current) | Visible error + retry option |

---

## Sources

- Astro 5 env vars (type-safe): [docs.astro.build/en/guides/environment-variables](https://docs.astro.build/en/guides/environment-variables/) — HIGH confidence
- Astro 5 astro:env module: [docs.astro.build/en/reference/modules/astro-env](https://docs.astro.build/en/reference/modules/astro-env/) — HIGH confidence
- Astro image pipeline: [docs.astro.build/en/guides/images](https://docs.astro.build/en/guides/images/) — HIGH confidence
- Honeypot implementation: [dev.to/rohitnirban/honeypot-for-spam-prevention-react-tailwind-css-57lh](https://dev.to/rohitnirban/honeypot-for-spam-prevention-react-tailwind-css-57lh) — MEDIUM confidence (WebSearch, consistent with multiple sources)
- Firecrawl AI scraping: [firecrawl.dev](https://www.firecrawl.dev/) — MEDIUM confidence (already integrated in this codebase)
- Direct codebase reads: `LeadForm.tsx`, `brand-config.ts`, `napData.ts`, `TEMPLATE-SETUP.md`, existing ARCHITECTURE.md — HIGH confidence

---

*Architecture research: 2026-04-09*
