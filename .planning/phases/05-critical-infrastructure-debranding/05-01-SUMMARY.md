---
phase: 05-critical-infrastructure-debranding
plan: "01"
subsystem: core-layout
tags: [debranding, napData, tracking, seo, pwa]
dependency_graph:
  requires: []
  provides: [debranded-base-layout, debranded-seo-head, fixed-webmanifest, napData-tracking]
  affects: [every-page, seo-system-seo-head, pwa-manifest]
tech_stack:
  added: []
  patterns: [napData-single-source-of-truth, astro-define-vars-for-inline-script-variables]
key_files:
  modified:
    - March-Impulse-Web-e7ad8740054b4e468e95bc81e5e4c79f17b98c97/utils/napData.ts
    - March-Impulse-Web-e7ad8740054b4e468e95bc81e5e4c79f17b98c97/src/layouts/BaseLayout.astro
    - March-Impulse-Web-e7ad8740054b4e468e95bc81e5e4c79f17b98c97/components/SEOHead.tsx
    - March-Impulse-Web-e7ad8740054b4e468e95bc81e5e4c79f17b98c97/public/site.webmanifest
decisions:
  - "Astro define:vars directive used to pass NAP.tracking values to inline script — Astro frontmatter variables are not available in is:inline scripts without this directive"
  - "Relative import path used in SEOHead.tsx (../utils/napData) not @/ alias — @/ resolves to seo-system root in Vite context, relative path works in both Astro and seo-system builds"
metrics:
  duration: "~8m"
  completed: "2026-04-09T17:11:16Z"
  tasks_completed: 3
  files_modified: 4
---

# Phase 05 Plan 01: Core Infrastructure Debranding Summary

**One-liner:** Extended napData.ts with siteTitle, xHandle, and tracking IDs; debranded BaseLayout.astro and SEOHead.tsx to read all brand values from NAP; fixed site.webmanifest icon paths to existing /images/favicons/ directory.

## Tasks Completed

| Task | Name | Commit | Files |
|------|------|--------|-------|
| 1 | Extend napData.ts with siteTitle, xHandle, tracking | 5b2a1eb | utils/napData.ts |
| 2 | Debrand BaseLayout.astro | 7e9accc | src/layouts/BaseLayout.astro |
| 3 | Debrand SEOHead.tsx and fix site.webmanifest | 3eab621 | components/SEOHead.tsx, public/site.webmanifest |

## What Was Built

### napData.ts Extension
Three new fields added to the NAP `as const` object:
- `siteTitle` — full page title string used in meta publisher/og:site_name tags
- `social.xHandle` — Twitter/X handle string used in twitter:site and twitter:creator meta tags
- `tracking` object — contains `ga4Id`, `googleAdsId`, `gtmContainerId`

### BaseLayout.astro Debranding
- Added `import { NAP } from '../../utils/napData'`
- Deleted `const SITE_NAME` and `const BASE_URL` constants
- Changed `author` default prop from hardcoded string to `NAP.name`
- Changed canonical URL computation to use `NAP.website`
- Replaced hardcoded tracking IDs in deferred analytics script using Astro's `define:vars` directive
- Replaced `SITE_NAME` with `NAP.siteTitle` in publisher and og:site_name meta tags
- Replaced `@ImpulseEnglish` with `NAP.social.xHandle` in twitter:site and twitter:creator meta tags
- Replaced `GTM-TDC7CQDD` hardcode in GTM noscript iframe with `NAP.tracking.gtmContainerId`

### SEOHead.tsx Debranding
- Added `import { NAP } from '../utils/napData'`
- Deleted `const SITE_NAME` and `const BASE_URL` constants (kept `DEFAULT_OG_IMAGE` and `DEFAULT_DESCRIPTION`)
- Changed `author` default parameter to `NAP.name`
- Replaced all `SITE_NAME` usages with `NAP.siteTitle` (document.title, publisher, og:site_name)
- Replaced all `BASE_URL` usages with `NAP.website` (canonical, og:url)

### site.webmanifest Fix
- Fixed broken icon paths from `/images/optimized/` (deleted in Phase 3) to `/images/favicons/` (where favicon files actually exist)

## Verification Results

- Zero hardcoded tracking IDs in BaseLayout.astro or SEOHead.tsx
- Zero `const SITE_NAME` or `const BASE_URL` in either file
- site.webmanifest has 0 references to `/images/optimized/`, 2 references to `/images/favicons/`
- Full Astro build: 131 pages built successfully

## Decisions Made

1. **Astro `define:vars` for inline script variables** — Astro frontmatter variables (including NAP imports) are not available inside `<script is:inline>` tags. The `define:vars` directive serializes server values into the script's scope, making GA4/GTM IDs available as plain JS variables inside the inline script.

2. **Relative import path in SEOHead.tsx** — Used `../utils/napData` instead of `@/utils/napData`. The `@/` alias resolves to seo-system root in the Vite SPA context; relative path works correctly in both the Astro website build and seo-system Vite builds.

## Deviations from Plan

None — plan executed exactly as written.

## Known Stubs

None — all fields wired to real production values. napData.ts contains current Impulse production values as defaults; the onboarding CLI (Plan 05-02) will generate client-specific values when cloning for a new client.

## Self-Check: PASSED

Files exist:
- FOUND: March-Impulse-Web-e7ad8740054b4e468e95bc81e5e4c79f17b98c97/utils/napData.ts
- FOUND: March-Impulse-Web-e7ad8740054b4e468e95bc81e5e4c79f17b98c97/src/layouts/BaseLayout.astro
- FOUND: March-Impulse-Web-e7ad8740054b4e468e95bc81e5e4c79f17b98c97/components/SEOHead.tsx
- FOUND: March-Impulse-Web-e7ad8740054b4e468e95bc81e5e4c79f17b98c97/public/site.webmanifest

Commits verified:
- 5b2a1eb: feat(05-01): extend napData with siteTitle, xHandle, and tracking fields
- 7e9accc: feat(05-01): debrand BaseLayout.astro — all hardcoded values replaced with NAP imports
- 3eab621: feat(05-01): debrand SEOHead.tsx and fix site.webmanifest icon paths
