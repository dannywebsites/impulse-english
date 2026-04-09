# Roadmap: Impulse English Academy — Website Template

## Overview

This milestone converts the Impulse English Academy website from a one-off production build into a portable, client-ready template. Four phases deliver the work: hardening the lead form against silent failures and bots, consolidating all S3 images into local assets, replacing the hand-rolled image optimization system with Astro's native pipeline, and building a CLI-driven client onboarding system that generates a fully configured website from a question flow.

## Phases

**Phase Numbering:**
- Integer phases (1, 2, 3): Planned milestone work
- Decimal phases (2.1, 2.2): Urgent insertions (marked with INSERTED)

Decimal phases appear between their surrounding integers in numeric order.

- [x] **Phase 1: LeadForm Hardening** - Secure, reliable lead capture with error feedback and bot protection (completed 2026-04-09)
- [x] **Phase 2: Image Consolidation** - All S3 images moved to local assets with central registry (completed 2026-04-09)
- [x] **Phase 3: Image Optimization** - Astro native image pipeline replaces hand-rolled system (completed 2026-04-09)
- [x] **Phase 4: Client Onboarding CLI** - Interactive question flow generates fully configured website (completed 2026-04-09)
- [x] **Phase 5: Critical Infrastructure Debranding** - Remove hardcoded tracking IDs, site names, and broken PWA manifest from core layout files (completed 2026-04-09)
- [x] **Phase 6: Component Debranding** - Replace hardcoded Impulse references in React/Astro components with napData/brand-config imports (completed 2026-04-09)
- [ ] **Phase 7: Content Debranding** - Remove hardcoded Impulse references from page meta tags and article content
- [ ] **Phase 8: Auto-Publish Pipeline Decouple** - Connect auto-publish.js to brand-config.ts instead of hardcoded BRAND block

## Phase Details

### Phase 1: LeadForm Hardening
**Goal**: The lead form captures every submission reliably, protects against bots, and tells users when something goes wrong
**Depends on**: Nothing (first phase)
**Requirements**: FORM-01, FORM-02, FORM-03, FORM-04, FORM-05, FORM-06
**Success Criteria** (what must be TRUE):
  1. Submitting the form with a filled honeypot field returns a fake success response without reaching the webhook
  2. When the webhook returns a 4xx or 5xx error, the user sees a visible error message with a retry option instead of a silent failure
  3. The webhook URL does not appear anywhere in source code — it is read from an environment variable via astro:env
  4. Sonner toast notifications fire on both successful and failed submissions
**Plans**: 3 plans

Plans:
- [x] 01-01-PLAN.md — Infrastructure: sonner install, astro:env schema, .env.example
- [x] 01-02-PLAN.md — Main LeadForm: all four hardening changes + Toaster in BaseLayout
- [x] 01-03-PLAN.md — seo-system LeadForm: adapted hardening for Vite/React Router context

### Phase 2: Image Consolidation
**Goal**: Every production image lives in local assets and is referenced through a single central registry — no S3 URLs remain in source code
**Depends on**: Phase 1
**Requirements**: IMG-01, IMG-02, IMG-03, IMG-04
**Success Criteria** (what must be TRUE):
  1. A search for S3 URLs across the entire codebase returns zero results
  2. All image imports in component files resolve through utils/images.ts, not direct file paths or external URLs
  3. The seo-system mirrored components reference the same local image paths as the main site components
**Plans**: 5 plans

Plans:
- [x] 02-01-PLAN.md — Download 73 S3 images + create central registry at utils/images.ts
- [x] 02-02-PLAN.md — Migrate main site components, pages, layouts, and data layer to registry
- [x] 02-03-PLAN.md — Migrate all 85 blog pages from inline S3 URLs to registry imports
- [x] 02-04-PLAN.md — Migrate seo-system components and pages to shared registry via relative paths
- [x] 02-05-PLAN.md — Delete old data files, full S3 audit, build verification, visual check

### Phase 3: Image Optimization
**Goal**: All images are served in modern formats with correct loading strategies — no hand-rolled optimization scripts remain
**Depends on**: Phase 2
**Requirements**: OPT-01, OPT-02, OPT-03, OPT-04
**Success Criteria** (what must be TRUE):
  1. Hero images are served as avif/webp with loading="eager" via Astro's <Picture> component
  2. Non-hero images use loading="lazy" via Astro's <Image> component
  3. The files optimize-images.mjs and any manual srcset generation are deleted — the Astro pipeline handles all optimization at build time
**Plans**: 4 plans

Plans:
- [x] 03-01-PLAN.md — Move images to src/assets/ + create images-astro.ts registry
- [x] 03-02-PLAN.md — Migrate homepage hero, favicons, TeamSection, CoursesSection to Astro pipeline
- [x] 03-03-PLAN.md — Migrate 13 React page components to getImage() props
- [x] 03-04-PLAN.md — Delete hand-rolled system, clean up types, visual verification

### Phase 4: Client Onboarding CLI
**Goal**: A developer can clone the repo, run a single CLI script, answer questions, and receive a fully configured website ready to build — without touching Impulse-specific config files manually
**Depends on**: Phase 1
**Requirements**: ONBD-01, ONBD-02, ONBD-03, ONBD-04, ONBD-05, ONBD-06, ONBD-07, ONBD-08
**Success Criteria** (what must be TRUE):
  1. Running the onboarding script on a fresh clone walks through all required question categories and produces draft versions of brand-config.ts, napData.ts, buildPageTitle.ts, and .env.template
  2. The script halts with an error if run against the production Impulse repo (TEMPLATE_MODE guard active)
  3. Draft files require explicit human confirmation before being promoted to final files — the originals are never overwritten silently
  4. After confirmation, running npm run build against the generated config succeeds without TypeScript or Astro errors
**Plans**: 2 plans

Plans:
- [x] 04-01-PLAN.md — Create complete CLI script with guard, 8-category question flow, 4 file generators, draft/diff/promotion UX, and build verification
- [x] 04-02-PLAN.md — Integration test of generated files against TypeScript compiler + human verification of interactive UX

### Phase 5: Critical Infrastructure Debranding
**Goal**: Core layout files read all brand identity, tracking IDs, and PWA config from napData/brand-config — no Impulse-specific values remain hardcoded
**Depends on**: Phase 4
**Requirements**: ONBD-01 (integration gap closure)
**Gap Closure:** CRIT-01, CRIT-02, CRIT-04, BROKEN-01, BROKEN-03
**Success Criteria** (what must be TRUE):
  1. BaseLayout.astro reads SITE_NAME, BASE_URL, GA4 ID, Google Ads ID, GTM container ID, and Twitter handle from napData or brand-config — zero hardcoded tracking strings
  2. SEOHead.tsx reads site name, base URL, and author from napData — no duplicate constants
  3. site.webmanifest reads brand name from config and icon paths resolve to existing files
  4. After running `npm run onboard` with test data, none of the above files contain "Impulse", "G-WN5973VY1M", "AW-11461982741", or "GTM-TDC7CQDD"
**Plans**: 2 plans

Plans:
- [x] 05-01-PLAN.md — Extend napData with tracking/siteTitle/xHandle + debrand BaseLayout, SEOHead, webmanifest
- [x] 05-02-PLAN.md — Extend onboarding CLI with tracking questions, webmanifest generator, verification

### Phase 6: Component Debranding
**Goal**: All React and Astro components read brand name, location, and display text from napData/brand-config — no visible Impulse references remain in component source
**Depends on**: Phase 5
**Requirements**: FORM-06, ONBD-01 (integration gap closure)
**Gap Closure:** HIGH-01, HIGH-02, HIGH-03, HIGH-04, HIGH-05, HIGH-06, FORM-06, MED-01, MED-02, MED-03
**Success Criteria** (what must be TRUE):
  1. Logo.tsx, Navbar.tsx, Footer.tsx, CoursePageLayout.tsx, PAAArticlePage.tsx render brand name from napData — no literal "Impulse" strings
  2. CookieBanner.tsx localStorage key uses a brand-agnostic or config-derived name
  3. LeadForm.tsx GTM dataLayer reads location from napData, not hardcoded "Barrio del Pilar"
  4. seo-system App.tsx mounts `<Toaster />` so toast notifications are visible
  5. `ImpulseSection` type/schema renamed to brand-agnostic name across types.ts and config.ts
**Plans**: 2 plans

Plans:
- [x] 06-01-PLAN.md — Rename ImpulseSection to BrandSection across types, schema, data, and consumers
- [x] 06-02-PLAN.md — Debrand 7 main-site components with NAP field imports + verify FORM-06 Toaster



### Phase 7: Content Debranding
**Goal**: All page meta tags and article content use brand-config values — a grep for "Impulse" in .astro pages and article data returns zero results
**Depends on**: Phase 6
**Requirements**: ONBD-01 (integration gap closure)
**Gap Closure:** HIGH-07, HIGH-08
**Success Criteria** (what must be TRUE):
  1. All 18 .astro page files read meta titles, descriptions, and keywords from napData/brand-config or a page data file — no hardcoded "Impulse" strings
  2. Article data in data/articles/ and src/content/articles/ references brand name through a template variable or config import — not literal "Impulse English Academy"
  3. After running `npm run onboard` with test data and `npm run build`, zero "Impulse" strings appear in the generated dist/ output
**Plans**: 2 plans

Plans:
- [ ] 07-01-PLAN.md — Debrand 16 .astro page meta tags + 2 TS article data files with NAP imports
- [ ] 07-02-PLAN.md — Add markdown article debranding step to onboarding CLI

### Phase 8: Auto-Publish Pipeline Decouple
**Goal**: auto-publish.js reads all brand identity and image URLs from brand-config.ts — the SEO pipeline generates correctly branded articles for any client
**Depends on**: Phase 5
**Requirements**: ONBD-01 (integration gap closure), IMG-03 (integration gap closure)
**Gap Closure:** CRIT-03, BROKEN-02
**Success Criteria** (what must be TRUE):
  1. auto-publish.js imports brand name, voice, and content rules from brand-config.ts — the hardcoded BRAND block is deleted
  2. Article image selection uses the central image registry (utils/images.ts) — no hardcoded S3 URLs remain in the script
  3. Running the pipeline after onboarding with test client data produces articles with the test client's brand name, not "Impulse"
**Plans**: 2 plans

Plans:
- [ ] 05-01-PLAN.md — Extend napData with tracking/siteTitle/xHandle + debrand BaseLayout, SEOHead, webmanifest
- [ ] 05-02-PLAN.md — Extend onboarding CLI with tracking questions, webmanifest generator, verification

## Progress

**Execution Order:**
Phases execute in numeric order: 1 → 2 → 3 → 4 → 5 → 6 → 7 → 8

| Phase | Plans Complete | Status | Completed |
|-------|----------------|--------|-----------|
| 1. LeadForm Hardening | 3/3 | Complete   | 2026-04-09 |
| 2. Image Consolidation | 5/5 | Complete | 2026-04-09 |
| 3. Image Optimization | 4/4 | Complete   | 2026-04-09 |
| 4. Client Onboarding CLI | 2/2 | Complete   | 2026-04-09 |
| 5. Critical Infrastructure Debranding | 2/2 | Complete   | 2026-04-09 |
| 6. Component Debranding | 2/2 | Complete   | 2026-04-09 |
| 7. Content Debranding | 0/2 | Pending | — |
| 8. Auto-Publish Pipeline Decouple | 0/0 | Pending | — |
