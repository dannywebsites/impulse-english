---
phase: 08-auto-publish-pipeline-decouple
plan: 01
subsystem: seo-pipeline
tags: [debranding, template-portability, auto-publish, pipeline]
dependency_graph:
  requires: [brand-config.ts, utils/images.ts]
  provides: [decoupled auto-publish pipeline]
  affects: [seo-writer/scripts/auto-publish.js, seo-writer/scripts/package.json]
tech_stack:
  added: [--experimental-strip-types Node.js flag]
  patterns: [config-import pattern for brand values, central image registry import]
key_files:
  created: []
  modified:
    - brand-config.ts
    - seo-writer/scripts/auto-publish.js
    - seo-writer/scripts/package.json
decisions:
  - "BRAND alias approach preserves all prompt references (BRAND.*) with zero diff to prompt code"
  - "IMAGE_POOL uses Object.values(blogImages) — simple flat array, no category-keyed lookup needed"
  - "impulseSection heading/content updated to use BRAND.companyName and BRAND.socialProof — removes last hardcoded brand strings in generation logic"
  - "pipelineLanguage named to avoid collision with existing language (BCP 47) field in BRAND_CONFIG"
metrics:
  duration: ~3m
  completed: 2026-04-09T18:29:54Z
  tasks_completed: 2
  files_modified: 3
---

# Phase 08 Plan 01: Auto-Publish Pipeline Decouple Summary

**One-liner:** Replaced hardcoded BRAND block and S3 IMAGE_CATALOG in auto-publish.js with imports from brand-config.ts and utils/images.ts — pipeline now generates branded articles for any client without code changes.

## Tasks Completed

| Task | Name | Commit | Files |
|------|------|--------|-------|
| 1 | Extend brand-config.ts with pipeline settings and update package.json | 45db231 | brand-config.ts, seo-writer/scripts/package.json |
| 2 | Replace BRAND block and IMAGE_CATALOG with imports in auto-publish.js | e6fd429 | seo-writer/scripts/auto-publish.js |

## What Was Built

### Task 1: brand-config.ts + package.json
- Added 3 new pipeline settings fields to `BRAND_CONFIG`: `pipelineLanguage`, `locationCode`, `researchDepth`
- Updated `seo-writer/scripts/package.json` publish script with `--experimental-strip-types` flag (enables direct `.ts` file imports from Node.js)
- Removed brand reference from package.json description

### Task 2: auto-publish.js decoupling
- Added `import { BRAND_CONFIG } from '../../brand-config.ts'` and `import { blogImages } from '../../March-Impulse-Web-.../utils/images.ts'` at top of file
- Replaced 15-line hardcoded `BRAND` object with 6-line alias mapping to `BRAND_CONFIG.*` — all prompt references (`BRAND.*`) unchanged
- Replaced 90-line `IMAGE_CATALOG` / `CATEGORY_IMAGE_MAP` / `KEYWORD_IMAGE_RULES` / `COMPLEMENTARY_CATEGORIES` block with `const IMAGE_POOL = Object.values(blogImages)` (2 lines)
- Replaced 57-line `selectArticleImages` with 10-line version using random shuffle + modulo guard
- Replaced hardcoded "Impulse English Academy" strings in `impulseSection` heading/content with `BRAND.companyName` and `BRAND.socialProof` template expressions
- Updated file header comment to remove brand reference

## Deviations from Plan

### Auto-fixed Issues

**1. [Rule 2 - Missing Critical Functionality] Replaced hardcoded Impulse strings in impulseSection**
- **Found during:** Task 2 verification
- **Issue:** Lines 868-869 contained hardcoded "Impulse English Academy" and "Centro Preparador Oficial Cambridge en La Vaguada (Madrid)" strings inside the article generation function — not covered by the plan's BRAND alias approach
- **Fix:** Replaced with `BRAND.companyName` and `BRAND.companyDescription`/`BRAND.socialProof` template expressions
- **Files modified:** seo-writer/scripts/auto-publish.js
- **Commit:** e6fd429

## Verification Results

- Zero S3 URLs (`s3.us-east-1.amazonaws.com`) in auto-publish.js
- Zero `impulseenglish.s3` references in auto-publish.js
- `import { BRAND_CONFIG }` present at top of auto-publish.js
- `import { blogImages }` present at top of auto-publish.js
- `const BRAND = {` alias present
- `IMAGE_POOL` derived from `blogImages` present
- `IMAGE_CATALOG`, `CATEGORY_IMAGE_MAP`, `KEYWORD_IMAGE_RULES`, `COMPLEMENTARY_CATEGORIES` all removed
- `--experimental-strip-types` present in package.json publish script
- Remaining "Impulse" occurrences (2) are only in file system path strings (`March-Impulse-Web-e7ad8740...`) — unavoidable, not brand content

## Known Stubs

None — all pipeline brand values are now wired through BRAND_CONFIG at runtime.

## Self-Check: PASSED
