# Feature Landscape

**Domain:** Website template / client onboarding system for a language academy (Astro 5 + React)
**Researched:** 2026-04-09
**Scope:** Three research questions:
1. What do website template/scaffolding systems need?
2. What is table stakes for a "give info, get website" onboarding flow?
3. What image optimization features are expected in modern Astro sites?

---

## Table Stakes

Features without which the template is unusable or the onboarding fails.

| Feature | Why Expected | Complexity | Notes |
|---------|--------------|------------|-------|
| Single config file for all business identity | Template portability — new client = change one file, not 35+ components | Low | `napData.ts` already exists but logo/image fields still point to S3 |
| Single config file for brand/voice/CTAs | Separates brand decisions from business facts | Low | `brand-config.ts` already exists |
| Zero hardcoded client references in component code | Without this, "clone for new client" requires grep-and-replace surgery across all TSX/Astro files | Medium | S3 URLs in 76 files violate this right now |
| All images local to the repo | External image URLs (S3, CDN) break when cloning — new client has no access to previous client's bucket | Medium | Current state: S3 URLs scattered across `images.ts`, `academyImages.ts`, `napData.ts`, and 10+ component files |
| Env var for webhook URL | Hardcoded webhook URL in `LeadForm.tsx` requires a code change per client — blocks portability | Low | One `.env` file change vs. touching component source |
| Form error feedback to users | Silent webhook failure loses leads — a business-critical failure mode | Low | Currently LeadForm silently fails on submission error |
| Honeypot spam protection on lead form | Bots will hit unprotected forms; honeypot is zero-friction prevention | Low | Hidden field, no CAPTCHA UX penalty |
| Build-time validation that catches missing client config | If napData has blank fields, build should warn or fail, not silently produce broken pages | Medium | Currently Zod only validates article content, not napData completeness |
| TEMPLATE-SETUP.md documenting every substitution step | Reproducibility — next developer (or future you) needs a runbook | Low | Already exists, needs update as system evolves |

### Client Onboarding Questionnaire — Table Stakes Questions

Based on industry-standard web design questionnaire research, a "give info, get website" flow must collect these categories at minimum:

**Business Identity (maps to napData.ts)**
- Business name (display name, legal name, short name)
- Physical address with all components (street, postal, city, region, country)
- Phone number (displayed format, raw E.164, WhatsApp)
- Email address
- Website domain (target domain for new site)
- Google Business Profile URL
- Geo coordinates (for Maps embed)
- Opening hours (Schema.org format)
- Service area (neighborhoods, districts served)

**Brand Identity (maps to brand-config.ts)**
- Primary and secondary colors (hex)
- Font preferences or existing font stack
- Logo file (PNG/SVG with transparent background)
- Tagline / headline copy
- Brand voice descriptors (professional/warm/casual/luxury)

**Visual Assets (maps to /assets/images/)**
- Hero/banner images (interior of premises, team photos)
- Gallery images (facilities, classrooms, events)
- Team member photos with names and roles
- Partner/accreditation logos

**Content (maps to page-specific data)**
- Course or service names, descriptions, pricing
- Testimonials (name, quote, star rating)
- FAQs (question + answer pairs)
- About us narrative
- Social media profile URLs (Instagram, Facebook, LinkedIn, YouTube)

**Technical (maps to build config)**
- Target language (for content language detection)
- GTM container ID
- GA4 measurement ID
- Google Ads conversion ID

**Confidence: MEDIUM** — Synthesized from multiple web design questionnaire sources (clientmanager.io, infozub.com, jotform.com). The specific fields listed map directly to the existing `napData.ts` and `brand-config.ts` schemas in this codebase.

---

## Differentiators

Features that make this template more valuable than "just clone and edit manually."

| Feature | Value Proposition | Complexity | Notes |
|---------|-------------------|------------|-------|
| Research agent that auto-populates napData from client URL | Provide client website URL → agent scrapes NAP, hours, social links, writes napData.ts draft | High | Requires Claude/AI call, web scraping; PROJECT.md explicitly lists this as the client onboarding vision |
| Structured questionnaire CLI / interactive prompt flow | Guided question-and-answer session outputs a completed napData.ts + brand-config.ts | Medium | Replaces "edit the config file manually" with a structured flow; lower AI dependency than full scraping |
| Image naming convention + manifest auto-generation | Client drops images into /assets/images/, runs a script, manifest is generated with semantic names and alt text | Medium | Current hand-rolled `images.ts` is 400+ lines; a generator would replace it |
| Config validation script (pre-build check) | `npm run validate-config` checks that all required napData/brand-config fields are populated before attempting build | Low | Prevents silent broken builds; build can still fail but this gives actionable errors |
| Per-client `.env` template file | `.env.template` with all required variables listed; developer fills in and renames | Low | Formalizes what env vars exist per client |
| Astro `<Image>` / `<Picture>` pipeline replacing hand-rolled srcset | Native Astro image optimization: automatic WebP conversion, srcset, lazy loading, CLS prevention — no custom build scripts needed | Medium | Current `optimize-images.mjs` script + manual `images.ts` = hand-rolled version of what Astro provides natively |
| Global responsive image config in astro.config | Set `image.layout: 'constrained'` and `image.responsiveStyles: true` once — all `<Image>` components inherit it | Low | Astro 5.10 stable feature; eliminates per-image `layout` prop boilerplate |
| `priority` prop on above-the-fold images | Hero images get `priority={true}` → `loading="eager"`, `fetchpriority="high"` — measurable LCP improvement | Low | Single prop; Astro handles the rest |
| `<Picture>` with `formats={['avif', 'webp']}` for hero images | AVIF is 30-50% smaller than WebP at same quality — meaningful bandwidth saving for image-heavy pages | Low | Use `<Picture>` for hero/featured images where format savings matter most; `<Image>` elsewhere |

---

## Anti-Features

Features to deliberately NOT build in this milestone.

| Anti-Feature | Why Avoid | What to Do Instead |
|--------------|-----------|-------------------|
| Visual theme/color picker UI | Adds enormous complexity (UI, state, CSS variable generation) for a workflow that runs once per client | Edit `tailwind.config.ts` and `brand-config.ts` directly during onboarding |
| Admin dashboard for non-developer clients | This template is developer-operated — a no-code dashboard requires a full CMS integration (Decap, Keystatic, Contentlayer) which is a separate project | Document which files to edit in TEMPLATE-SETUP.md |
| Approval workflow for auto-published blog posts | PROJECT.md explicitly defers this — it requires a backend or external service | Auto-post directly; add approval workflow in a future milestone |
| CAPTCHA on lead form | UX friction, external dependency, overkill for the bot volume a small academy receives | Honeypot field is sufficient |
| Rate limiting on form submissions | Requires server-side logic; static Vercel site has no runtime | Honeypot + webhook-side rate limiting (handled by LeadConnectorHQ) |
| Duplicate lead detection | Requires a backend or CRM integration to compare submitted emails | Defer to CRM side |
| Automatic image alt text generation | Nice-to-have, but adds AI API dependency to the build pipeline | Write alt text manually during image onboarding — it is fast and produces better SEO results |
| Image CDN integration (Cloudinary, Imgix) | Adds external dependency, cost, and complexity | Astro's native `astro:assets` with Sharp covers all optimization needs for a static site |
| Server-Side Rendering (SSR) for main site | Static is the right choice for this use case — no runtime cost on Vercel, faster, simpler | Keep SSG; only the SEO writer Express server needs SSR |
| Multi-tenant architecture | Each client gets their own repo clone — not a single shared codebase with multi-tenancy | Git clone + config swap is the correct model for this scale |

---

## Astro Image Optimization: Current State vs Target State

### Current State (What Exists)

The project has a hand-rolled image optimization system:

- `src/data/images.ts` — 400+ line file manually defining every image with 4 responsive sizes (sm/md/lg/xl) in both `.webp` and `.jpg` variants, each as an absolute S3 URL
- `src/data/academyImages.ts` — Similar pattern for academy-specific photos, also S3-hosted
- `scripts/optimize-images.mjs` — Custom Sharp script that reads source images and generates the responsive variants
- Components use raw `<img>` tags with manually constructed `srcset` attributes referencing these S3 URLs
- `utils/napData.ts` logo/image fields point to S3 URLs

This system works but it has three problems for the template goal:
1. S3 URLs are client-specific — not portable
2. Duplicates what Astro provides natively for free
3. Requires maintaining `images.ts` manually every time images change

### Target State (Astro Native)

**Confidence: HIGH** — Official Astro docs, confirmed stable in Astro 5.10 (June 2025)

Astro provides two components via `astro:assets`:

**`<Image />`** — For most images
- Accepts local imports from `src/assets/` (dimensions inferred automatically)
- Auto-converts to WebP by default
- Auto-generates `width` and `height` attributes (prevents CLS)
- `loading="lazy"` by default; set `priority={true}` for above-the-fold images
- `layout` prop controls responsive behavior (requires Astro 5.10+)

**`<Picture />`** — For hero / featured images needing format negotiation
- Generates `<source>` elements for each format in priority order
- `formats={['avif', 'webp']}` produces AVIF-first with WebP fallback and original as final fallback
- Same `layout`, `priority`, `fit`, `position` props as `<Image />`

**Global config in astro.config.mjs** (Astro 5.10, stable):
```js
image: {
  responsiveStyles: true,
  layout: 'constrained'  // or 'full-width' for heroes
}
```

**Key props reference:**
| Prop | Default | When to Override |
|------|---------|-----------------|
| `format` | `webp` | Use `<Picture>` with `formats` array instead for multi-format |
| `quality` | service default | Set `quality={80}` for hero images if file sizes are too large |
| `loading` | `lazy` | Set `priority={true}` for LCP image (hero, above the fold) |
| `layout` | `none` | Set `constrained` for content images, `full-width` for heroes |
| `fit` | `cover` | Override to `contain` for logos/partner icons |
| `densities` | undefined | Add `densities={[1, 2]}` for fixed-size UI images on HiDPI screens |

**What this replaces:**
- Custom `optimize-images.mjs` build script → delete it
- Manual `images.ts` srcset definitions → replace with direct imports
- Hand-crafted `<img srcset="...">` tags → replace with `<Image>` or `<Picture>`
- `S3ImageData` interface and all S3 URL references → replace with local file imports from `src/assets/`

---

## Feature Dependencies

```
Local images in /assets/ → Astro <Image> / <Picture> pipeline
  (Astro:assets requires src/ imports to optimize; images in public/ are not optimized)

napData.ts zero hardcoded Impulse refs → Template portability
  (Logo, fallback image fields must reference local paths, not S3 URLs)

Env var for webhook → Portability + security
  (No code changes needed when cloning for new client)

Config validation script → Reliable onboarding
  (Depends on: napData.ts schema being fully typed with all required fields)

Client onboarding questionnaire → Research agent auto-population
  (Research agent fills what it can find; questionnaire fills what it cannot)

Image naming convention → Image manifest auto-generation
  (Script can only generate manifest if filenames follow a pattern)
```

---

## MVP Recommendation for This Milestone

Prioritize (highest leverage, unblocks everything else):

1. **Move all S3 images to local `/assets/images/`** — unblocks Astro image pipeline and template portability simultaneously
2. **Replace hand-rolled srcset + S3 URLs with Astro `<Image>` / `<Picture>`** — deletes the custom build scripts and `images.ts` complexity
3. **Move webhook URL to `.env`** — one-line fix, high business value (no more hardcoded Impulse backend URL in client repos)
4. **Add form error feedback** — prevents silent lead loss
5. **Add honeypot to lead form** — spam protection before the form is promoted

Defer to next milestone:
- Full client onboarding questionnaire / research agent (high complexity, separate workstream)
- Config validation script (useful but not blocking)
- Image naming convention + manifest generator (nice-to-have, manual is acceptable short-term)

---

## Sources

- [Astro Images Guide — Official Docs](https://docs.astro.build/en/guides/images/) — HIGH confidence
- [Astro Image and Assets API Reference](https://docs.astro.build/en/reference/modules/astro-assets/) — HIGH confidence
- [Astro 5.10 Release Notes — Responsive Images Stable](https://astro.build/blog/astro-5100/) — HIGH confidence
- [Astro X announcement — 5.10 responsive images stable](https://x.com/astrodotbuild/status/1935687534111027398) — HIGH confidence
- [Ultimate Client Onboarding Questionnaire — INFOZUB](https://academy.infozub.com/web-design/ultimate-client-onboarding-questionnaire/) — MEDIUM confidence
- [Web Design Questionnaire Guide — Uploadcare Astro Image Optimization](https://uploadcare.com/blog/how-to-optimize-images-in-astro/) — MEDIUM confidence
- [Astro Responsive Image Specification Notes](https://siqilu.github.io/notes/astro-responsive-image-specification/) — MEDIUM confidence
