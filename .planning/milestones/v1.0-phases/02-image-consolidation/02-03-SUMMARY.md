---
phase: 02-image-consolidation
plan: 03
subsystem: ui
tags: [images, registry, blog, typescript, react]

# Dependency graph
requires:
  - phase: 02-image-consolidation plan 01
    provides: utils/images.ts central registry with S3ImageData interface and named exports
provides:
  - blogImages export in utils/images.ts with 8 named keys covering all blog image paths
  - All 85 blog page .tsx files import images from @/utils/images (zero hardcoded paths)
affects: [image-optimization, blog pages]

# Tech tracking
tech-stack:
  added: []
  patterns:
    - "blogImages registry: keyed S3ImageData objects for blog hero images, imported per page"
    - "satisfies S3ImageData constraint for compile-time type safety on blogImages export"

key-files:
  created: []
  modified:
    - March-Impulse-Web-e7ad8740054b4e468e95bc81e5e4c79f17b98c97/utils/images.ts
    - March-Impulse-Web-e7ad8740054b4e468e95bc81e5e4c79f17b98c97/pages/blog/ (85 files)

key-decisions:
  - "blogImages export uses S3ImageData shape (single url, no responsive variants) matching how blog pages consume images"
  - "satisfies Record<string, S3ImageData> used instead of as const alone for explicit type contract"

patterns-established:
  - "Blog page image pattern: import { blogImages } from '@/utils/images'; use src={blogImages.<key>.url}"

requirements-completed: [IMG-03]

# Metrics
duration: 8min
completed: 2026-04-09
---

# Phase 02 Plan 03: Blog Image Registry Migration Summary

**blogImages registry added to utils/images.ts with 8 named keys; all 85 blog page .tsx files migrated from hardcoded /images/ strings to src={blogImages.<key>.url} registry references**

## Performance

- **Duration:** ~8 min
- **Started:** 2026-04-09T14:05:00Z
- **Completed:** 2026-04-09T14:13:00Z
- **Tasks:** 1
- **Files modified:** 86 (utils/images.ts + 85 blog pages)

## Accomplishments

- Discovered blog pages already had 0 S3 URLs (Plan 02-02 handled them) but still used hardcoded local `/images/academy/` string paths
- Added `blogImages` export to `utils/images.ts` with 8 named keys covering every unique image path across all 85 blog pages
- Migrated all 85 blog `.tsx` files via Node.js script: added `import { blogImages } from '@/utils/images'` and replaced every `src="/images/..."` with `src={blogImages.<key>.url}`

## Task Commits

Each task was committed atomically:

1. **Task 1: Map 8 unique blog image paths and migrate all 85 blog pages** - `44bc2f4` (feat)

## Files Created/Modified

- `March-Impulse-Web-e7ad8740054b4e468e95bc81e5e4c79f17b98c97/utils/images.ts` - Added `blogImages` export (8 keys, S3ImageData shape) + `BlogImageKey` type
- `March-Impulse-Web-e7ad8740054b4e468e95bc81e5e4c79f17b98c97/pages/blog/*.tsx` (85 files) - Added registry import; replaced hardcoded image src strings with registry references

## Decisions Made

- Used `satisfies Record<string, S3ImageData>` on the `blogImages` export for explicit type-safety without losing key inference
- Kept original alt attributes untouched on all `<img>` tags — only src changed from string to expression
- Unsplash URLs found in 16 blog pages (in `articleSchema` image fields and some `<img>` src) were not modified: out-of-scope per plan (plan targets `impulseenglish.s3` URLs; replacing stock images requires selecting local replacements — architectural decision per Rule 4)

## Deviations from Plan

None - plan executed exactly as written. The plan anticipated S3 URLs but they had been replaced by Plan 02-02; the remaining work (hardcoded local paths → registry) was the correct target and was completed fully.

## Known Stubs

None — all 8 image paths point to real local files confirmed by the manifest from Plan 02-01.

## Issues Encountered

- Plan assumed S3 URLs would be the migration target; they were already 0 (Plan 02-02 completed that). The actual migration target was hardcoded local `/images/academy/` paths. Proceeded with the correct migration without blocking — the outcome (all pages use registry) is identical to what the plan required.
- 16 blog pages contain Unsplash URLs in `articleSchema` image fields (schema.org `image` property) and some `<img>` src attributes. These are pre-existing CLAUDE.md violations (stock images). Documented as deferred — replacing them requires selecting local image alternatives (Rule 4 architectural decision).

## User Setup Required

None - no external service configuration required.

## Next Phase Readiness

- All blog pages now use the central registry — ready for Phase 03 image optimization
- `blogImages` registry uses `S3ImageData` shape (single `url` field, no responsive variants). Phase 03 Astro `<Image>` optimization will need to handle this shape or upgrade to `OptimizedImageData` with srcset
- Deferred: 16 blog pages with Unsplash URLs need local image replacements before full CLAUDE.md compliance

---
*Phase: 02-image-consolidation*
*Completed: 2026-04-09*
