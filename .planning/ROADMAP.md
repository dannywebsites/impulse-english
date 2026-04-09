# Roadmap: Impulse English Academy — Website Template

## Overview

This milestone converts the Impulse English Academy website from a one-off production build into a portable, client-ready template. Four phases deliver the work: hardening the lead form against silent failures and bots, consolidating all S3 images into local assets, replacing the hand-rolled image optimization system with Astro's native pipeline, and building a CLI-driven client onboarding system that generates a fully configured website from a question flow.

## Phases

**Phase Numbering:**
- Integer phases (1, 2, 3): Planned milestone work
- Decimal phases (2.1, 2.2): Urgent insertions (marked with INSERTED)

Decimal phases appear between their surrounding integers in numeric order.

- [ ] **Phase 1: LeadForm Hardening** - Secure, reliable lead capture with error feedback and bot protection
- [ ] **Phase 2: Image Consolidation** - All S3 images moved to local assets with central registry
- [ ] **Phase 3: Image Optimization** - Astro native image pipeline replaces hand-rolled system
- [ ] **Phase 4: Client Onboarding CLI** - Interactive question flow generates fully configured website

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
**Plans**: TBD

### Phase 2: Image Consolidation
**Goal**: Every production image lives in src/assets/images/ and is referenced through a single central registry — no S3 URLs remain in source code
**Depends on**: Phase 1
**Requirements**: IMG-01, IMG-02, IMG-03, IMG-04
**Success Criteria** (what must be TRUE):
  1. A search for S3 URLs across the entire codebase returns zero results
  2. All image imports in component files resolve through utils/images.ts, not direct file paths or external URLs
  3. The seo-system mirrored components reference the same local image paths as the main site components
**Plans**: TBD

### Phase 3: Image Optimization
**Goal**: All images are served in modern formats with correct loading strategies — no hand-rolled optimization scripts remain
**Depends on**: Phase 2
**Requirements**: OPT-01, OPT-02, OPT-03, OPT-04
**Success Criteria** (what must be TRUE):
  1. Hero images are served as avif/webp with loading="eager" via Astro's <Picture> component
  2. Non-hero images use loading="lazy" via Astro's <Image> component
  3. The files optimize-images.mjs and any manual srcset generation are deleted — the Astro pipeline handles all optimization at build time
**Plans**: TBD

### Phase 4: Client Onboarding CLI
**Goal**: A developer can clone the repo, run a single CLI script, answer questions, and receive a fully configured website ready to build — without touching Impulse-specific config files manually
**Depends on**: Phase 1
**Requirements**: ONBD-01, ONBD-02, ONBD-03, ONBD-04, ONBD-05, ONBD-06, ONBD-07, ONBD-08
**Success Criteria** (what must be TRUE):
  1. Running the onboarding script on a fresh clone walks through all required question categories and produces draft versions of brand-config.ts, napData.ts, buildPageTitle.ts, and .env.template
  2. The script halts with an error if run against the production Impulse repo (TEMPLATE_MODE guard active)
  3. Draft files require explicit human confirmation before being promoted to final files — the originals are never overwritten silently
  4. After confirmation, running npm run build against the generated config succeeds without TypeScript or Astro errors
**Plans**: TBD

## Progress

**Execution Order:**
Phases execute in numeric order: 1 → 2 → 3 → 4

| Phase | Plans Complete | Status | Completed |
|-------|----------------|--------|-----------|
| 1. LeadForm Hardening | 0/? | Not started | - |
| 2. Image Consolidation | 0/? | Not started | - |
| 3. Image Optimization | 0/? | Not started | - |
| 4. Client Onboarding CLI | 0/? | Not started | - |
