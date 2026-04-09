# Impulse English Academy — Website Template

## What This Is

A production Astro 5 + React + Tailwind website for Impulse English Academy (Madrid, Spain) that serves as a reusable, fully debranded template for cloning to new client websites. The site includes a homepage, course pages, exam hub pages, location pages, a blog with auto-publishing pipeline, and lead capture forms. All visible content is in Peninsular Spanish. A CLI onboarding system generates all client-specific config files from a question flow.

## Core Value

The template must be portable — running `npm run onboard` and answering questions produces a fully functional website for a new client with zero hardcoded references to Impulse.

## Requirements

### Validated

- ✓ Static Astro site with React islands for interactivity — existing
- ✓ File-based routing with dynamic blog routes — existing
- ✓ Schema.org JSON-LD structured data (Organization, WebSite, Article, FAQ) — existing
- ✓ Lead capture form with webhook submission — existing
- ✓ Auto-publish blog pipeline (research → write → validate → publish) — existing
- ✓ Vercel deployment with redirects and security headers — existing
- ✓ Content Collections with Zod validation for blog articles — existing
- ✓ GTM/GA4/Google Ads tracking with consent mode — existing
- ✓ SEO system with 10-agent pipeline — existing
- ✓ Brand voice enforcer skill for Peninsular Spanish — existing
- ✓ Centralized business data in napData.ts — existing
- ✓ Centralized brand config in brand-config.ts — existing
- ✓ LeadForm error feedback with sonner toasts — v1.0
- ✓ Webhook URL moved to env var via astro:env — v1.0
- ✓ Honeypot spam protection — v1.0
- ✓ S3 images consolidated to local assets with central registry — v1.0
- ✓ Astro native image optimization pipeline — v1.0
- ✓ Client onboarding CLI with 9-category question flow — v1.0
- ✓ Full template debranding (layouts, components, pages, articles, pipeline) — v1.0

### Active

- [ ] Auto-publish integration — ensure pipeline auto-posts articles without manual intervention (approval workflow deferred)

### Out of Scope

- Google Search Console verification — leave as PLACEHOLDER, user will provide code later
- Approval workflow for auto-publish — deferred to future milestone
- Backend proxy for form submissions — env var approach chosen instead
- CSP headers — not prioritized for this milestone
- Test coverage — not in scope for this template improvement pass
- Rate limiting on forms — honeypot chosen as simpler approach
- Duplicate lead detection — deferred, requires backend
- Visual theme picker / admin dashboard — over-engineering, template is developer-operated
- SSR / server-side rendering — static site architecture is a feature
- Multi-tenancy — one repo per client is the correct model

## Context

Shipped v1.0 with 8 phases across 20 days. The template is now fully debranded — a developer can clone, run `npm run onboard`, answer questions, and get a clean client-branded site that builds successfully.

**Tech stack:** Astro 5.7.10, React 19, TypeScript 5.6, Tailwind CSS 3.4, Vite, Sharp, deployed on Vercel. SEO writer uses Express 4, Prisma 6, Anthropic SDK, Google Gemini API.

**Current state:** ~77k lines added across 907 files. Production site running at impulse-english.es. Template portability verified through CLI onboarding flow.

**Known tech debt:**
- seo-system/dist/ pre-built bundle has stale `/images/optimized/` references (rebuild clears it)
- 19 blog pages use Unsplash stock image URLs (pre-existing, not S3)
- Empty `allImages` and `allS3Images` exports in utils/images.ts (no consumers)

## Constraints

- **Language**: All visible content in Peninsular Spanish (vosotros forms, Spain vocabulary)
- **Images**: Must use only images from project's /assets/images/ — no external/stock/AI images
- **Deployment**: Vercel static hosting — no server-side runtime for main site
- **Template portability**: All changes must work when brand-config.ts and napData.ts are swapped for a new client
- **No breaking changes**: Existing URLs, redirects, and SEO must be preserved

## Key Decisions

| Decision | Rationale | Outcome |
|----------|-----------|---------|
| Webhook URL to env var (not backend proxy) | Simpler, Vercel supports env vars natively | ✓ Good — works cleanly with astro:env |
| Honeypot over CAPTCHA/rate-limiting | Zero UX friction, no external dependencies | ✓ Good — effective for template scope |
| S3 images to local public/images/academy/ | Template portability — new clients won't have Impulse's S3 | ✓ Good — central registry clean |
| Two-registry pattern (images.ts + images-astro.ts) | seo-system needs URL strings, Astro needs ImageMetadata | ✓ Good — clean separation |
| Astro `<Picture>`/`<Image>` over hand-rolled optimization | Native framework support, automatic avif/webp | ✓ Good — deleted 246 optimization files |
| CLI onboarding with draft/promote flow | Prevents accidental overwrites, human verification step | ✓ Good — safe by default |
| BrandSection rename from ImpulseSection | Generic type names for template consumers | ✓ Good — 30+ files updated cleanly |
| define:vars for Astro inline scripts | is:inline scripts can't access frontmatter variables without it | ✓ Good — solved tracking ID injection |
| Pipeline hardcoded defaults in CLI (not interactive) | Pipeline internals edited manually post-onboarding | ✓ Good — avoids complex prompts for rarely-changed values |

## Evolution

This document evolves at phase transitions and milestone boundaries.

**After each phase transition** (via `/gsd:transition`):
1. Requirements invalidated? → Move to Out of Scope with reason
2. Requirements validated? → Move to Validated with phase reference
3. New requirements emerged? → Add to Active
4. Decisions to log? → Add to Key Decisions
5. "What This Is" still accurate? → Update if drifted

**After each milestone** (via `/gsd:complete-milestone`):
1. Full review of all sections
2. Core Value check — still the right priority?
3. Audit Out of Scope — reasons still valid?
4. Update Context with current state

---
*Last updated: 2026-04-09 after v1.0 milestone completion*
