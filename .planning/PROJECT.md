# Impulse English Academy — Website Template

## What This Is

A production Astro 5 + React + Tailwind website for Impulse English Academy (Madrid, Spain) that doubles as a reusable template for cloning to new client websites. The site includes a homepage, course pages, exam hub pages, location pages, a blog with auto-publishing pipeline, and lead capture forms. All visible content is in Peninsular Spanish.

## Core Value

The template must be portable — changing `brand-config.ts`, `napData.ts`, and a handful of config files should produce a fully functional website for a new client with zero hardcoded references to Impulse.

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

### Active

- [x] LeadForm error feedback — Validated in Phase 1: LeadForm Hardening
- [x] Webhook URL to env var — Validated in Phase 1: LeadForm Hardening
- [x] Image consolidation — Validated in Phase 2: Image Consolidation (69 images to public/images/academy/, central registry at utils/images.ts)
- [x] Image optimization — Validated in Phase 3: Image Optimization (Astro <Picture>/<Image> pipeline, getImage() for React props, hand-rolled system deleted)
- [x] Honeypot spam protection — Validated in Phase 1: LeadForm Hardening
- [ ] Auto-publish integration — ensure pipeline auto-posts articles without manual intervention (approval workflow deferred)
- [x] Client onboarding system — Validated in Phase 4: Client Onboarding CLI (scripts/onboard-client.js — 8-category question flow, generates brand-config.ts/napData.ts/buildPageTitle.ts/.env.template, draft/promote flow, build verification)

### Out of Scope

- Google Search Console verification — leave as PLACEHOLDER, user will provide code later
- Approval workflow for auto-publish — deferred to future milestone
- Backend proxy for form submissions — env var approach chosen instead
- CSP headers — not prioritized for this milestone
- Test coverage — not in scope for this template improvement pass
- Rate limiting on forms — honeypot chosen as simpler approach
- Duplicate lead detection — deferred, requires backend

## Context

**Brownfield project:** Full production website already running on Vercel at impulse-english.es. The codebase has 35+ React components, 148 Vercel redirects from WordPress migration, and an SEO writer tool with its own Express backend + Prisma + SQLite stack.

**Template system:** The site is designed to be cloned for new clients. `brand-config.ts` and `napData.ts` are the two central config files. Most skills and components read from these dynamically. The TEMPLATE-SETUP.md documents the 10-step cloning process.

**Current pain points:**
- S3 image URLs scattered across 10+ component files — breaks template portability
- Webhook URL hardcoded in LeadForm.tsx — security risk and requires code change per client
- Form silently loses leads on webhook failure — business-critical data loss
- No spam protection — bots can submit unlimited fake leads
- No image optimization — serving uncompressed JPEGs from S3

**Tech stack:** Astro 5.7.10, React 19, TypeScript 5.6, Tailwind CSS 3.4, Vite, Sharp, deployed on Vercel. SEO writer uses Express 4, Prisma 6, Anthropic SDK, Google Gemini API.

## Constraints

- **Language**: All visible content in Peninsular Spanish (vosotros forms, Spain vocabulary)
- **Images**: Must use only images from project's /assets/images/ — no external/stock/AI images
- **Deployment**: Vercel static hosting — no server-side runtime for main site
- **Template portability**: All changes must work when brand-config.ts and napData.ts are swapped for a new client
- **No breaking changes**: Existing URLs, redirects, and SEO must be preserved

## Key Decisions

| Decision | Rationale | Outcome |
|----------|-----------|---------|
| Move webhook URL to env var (not backend proxy) | Simpler, no new infrastructure needed, Vercel supports env vars natively | — Pending |
| Honeypot over CAPTCHA/rate-limiting | Zero UX friction, no external dependencies, effective against most bots | — Pending |
| Move S3 images to local public/images/academy/ | Template portability — new clients won't have access to Impulse's S3 bucket | Phase 2 Complete |
| Auto-post articles (no approval workflow) | Keep it simple now, revisit approval flow in future milestone | — Pending |
| Skip GSC verification | User will provide code later, don't block template improvements on this | — Pending |
| Client onboarding as core feature | Template's value prop is "give info, get website" — research agent + question flow + auto-build | — Pending |

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
*Last updated: 2026-04-09 after Phase 4 completion (all v1 phases complete)*
