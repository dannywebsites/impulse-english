# Research Summary

**Project:** Impulse English Academy — Website Template Improvement
**Date:** 2026-04-09

## Executive Summary

This milestone converts the Impulse English Academy website from a one-off client build into a reusable, portable template. Five targeted improvements are in scope: moving S3-hosted images to local Astro-optimized assets, extracting the hardcoded webhook URL to an environment variable, adding honeypot spam protection, surfacing form submission errors, and building a CLI-driven client onboarding system. All five work within the existing architecture — no SSR, no CMS, no new infrastructure.

## Key Findings

### Stack
- All technologies already installed. Sharp 0.34.5 ready for Astro image pipeline.
- `astro:env` (Astro 5.0 stable) is the correct env var approach — validates at build time, auto-generates TypeScript types.
- Two new deps only: `sonner` (toast notifications), `@inquirer/prompts` v8.4.1 (onboarding CLI).

### Features — Table Stakes
- Zero S3/client-specific URLs in source code
- All images local and Astro-processed (webp, srcset, lazy-loading)
- Webhook URL in `.env` via `astro:env`
- Form error feedback with `response.ok` check (currently missing — active bug)
- Honeypot with off-screen CSS positioning

### Architecture
- LeadForm changes are self-contained (one file)
- Image changes are structural but touch no routing or layout
- Onboarding system is an offline CLI in `scripts/` — no runtime presence
- Config layer flows: napData.ts + brand-config.ts → schemaData.ts → components → layouts → pages

### Critical Pitfalls
1. **Image migration scope explosion** — 170 S3 URL matches across 3 subsystems (main site, seo-system, scripts). Must bucket before starting.
2. **`fetch()` does not throw on HTTP errors** — Root cause of silent lead loss. `response.ok` check is missing.
3. **Honeypot autofill on iOS** — Use off-screen CSS + `tabIndex={-1}` + `autoComplete="one-time-code"`, NOT `display: none`.
4. **Astro `<Image>` only works on local images** — Must consolidate before optimizing.
5. **Onboarding CLI can overwrite production config** — Guard with TEMPLATE_MODE check + draft files.

## Suggested Phases (4)

| # | Phase | Scope | Risk |
|---|-------|-------|------|
| 1 | LeadForm Hardening | Webhook env var + response.ok fix + error UI + honeypot | Low |
| 2 | Image Consolidation | Move S3 images to src/assets/, create central registry, update all references | Medium |
| 3 | Astro Image Pipeline | Replace hand-rolled system with `<Image>`/`<Picture>` from astro:assets | Low |
| 4 | Client Onboarding CLI | Question flow + config generation + build verification | Medium |

## Watch Out For
- S3 images span 76+ files across 3 subsystems — budget time accordingly
- Sonner + Astro 5 + React 19 hydration compatibility needs verification
- Onboarding draft file promotion flow needs design before implementation
- Vercel build artifact size may be impacted by committed optimized images

## Confidence: HIGH
All findings grounded in direct codebase inspection and official Astro 5 documentation.
