# Phase 3: Image Optimization - Context

**Gathered:** 2026-04-09
**Status:** Ready for planning

<domain>
## Phase Boundary

Replace the hand-rolled image optimization system (optimize-images.mjs + OptimizedImage.tsx + public/images/optimized/) with Astro's native `<Image>` and `<Picture>` pipeline. All production images served in modern formats (avif/webp) with correct loading strategies (eager for hero, lazy for non-hero). No new pages, no new images, no new features — just swapping the optimization layer.

</domain>

<decisions>
## Implementation Decisions

### Image File Migration
- **D-01:** Move all 73 images from `public/images/academy/` to `src/assets/images/academy/` preserving the existing category subdirectory structure (facilities/, logos/, blog/, team/, partners/, locations/, general/). Astro's `<Image>` and `<Picture>` only optimize images imported from `src/` — images in `public/` are served as-is.
- **D-02:** Keep `public/images/academy/` as a secondary copy for seo-system access. The seo-system is a standalone Vite SPA with its own dev server — it cannot consume `astro:assets` imports or Astro build output. This is a known cross-system limitation from Phase 2 (D-02, D-07).
- **D-03:** After Astro pipeline is verified working, delete `public/images/optimized/` (194 hand-generated files) and `public/images/original/` (23 source files). These are artifacts of the hand-rolled system being replaced.

### Astro/React Component Boundary
- **D-04:** In `.astro` files (layouts, pages), use Astro's `<Image>` and `<Picture>` components directly with static imports from `src/assets/images/`. This is the primary optimization path.
- **D-05:** For React components (.tsx) that render images, use `getImage()` from `astro:assets` in the `.astro` page/layout frontmatter to generate optimized URLs at build time, then pass those URLs as string props to the React component. React components continue using `<img>` tags with the optimized URLs — they don't need to know about Astro's image pipeline.
- **D-06:** Hero images (above-the-fold) use `<Picture>` with `formats={['avif', 'webp']}` and `loading="eager"` in the `.astro` wrapper. This satisfies OPT-02.
- **D-07:** Non-hero images use `<Image>` or `getImage()` with `loading="lazy"` (default). This satisfies OPT-03.

### Registry Refactor
- **D-08:** Refactor `utils/images.ts` to export Astro-compatible static imports for the main site. Each image entry gains an `import` from `src/assets/images/academy/...` that returns `ImageMetadata`. The existing `url` string property is preserved for seo-system consumers.
- **D-09:** Add a separate export section or companion file (e.g., `utils/images-astro.ts`) with static `import` statements if dual-exporting from a single file causes Vite/Astro module resolution issues. The researcher should investigate whether a single file can cleanly export both `ImageMetadata` and URL strings.

### Hand-Rolled System Cleanup
- **D-10:** Delete `scripts/optimize-images.mjs` — the Sharp download/resize script. Astro handles all optimization at build time via Sharp internally.
- **D-11:** Delete `seo-system/scripts/optimize-images.mjs` — seo-system copy of the same script.
- **D-12:** Delete `components/OptimizedImage.tsx` and its sub-exports (`OptimizedBackground`, `OptimizedFigure`). Currently only used by `TeamSection.tsx`. Astro's `<Picture>` replaces all three patterns.
- **D-13:** Update `TeamSection.tsx` to accept an optimized image URL as a prop instead of importing `OptimizedImage`. The `.astro` parent will call `getImage()` and pass the result.
- **D-14:** Remove `OptimizedImageData` and `ImageSize` types from `utils/images.ts` once no consumers remain. Keep `S3ImageData` and `AcademyImage` types if still used by seo-system.

### Claude's Discretion
- Exact file structure for static imports (one big file vs. per-category files)
- Whether to create an Astro wrapper component for common image patterns
- Build verification approach (visual check vs. automated size comparison)
- Order of migration (hero images first vs. all at once)

</decisions>

<canonical_refs>
## Canonical References

**Downstream agents MUST read these before planning or implementing.**

### Image System (current state)
- `March-Impulse-Web-e7ad8740054b4e468e95bc81e5e4c79f17b98c97/utils/images.ts` — Central image registry (string URL paths, Phase 2 output). Must be refactored for Astro static imports.
- `March-Impulse-Web-e7ad8740054b4e468e95bc81e5e4c79f17b98c97/components/OptimizedImage.tsx` — Hand-rolled React `<picture>` component with srcset. DELETE target.
- `March-Impulse-Web-e7ad8740054b4e468e95bc81e5e4c79f17b98c97/scripts/optimize-images.mjs` — Hand-rolled Sharp script (349 lines). DELETE target.
- `March-Impulse-Web-e7ad8740054b4e468e95bc81e5e4c79f17b98c97/seo-system/scripts/optimize-images.mjs` — seo-system copy. DELETE target.

### Components with images (migration targets)
- `March-Impulse-Web-e7ad8740054b4e468e95bc81e5e4c79f17b98c97/components/TeamSection.tsx` — Only consumer of OptimizedImage.tsx
- `March-Impulse-Web-e7ad8740054b4e468e95bc81e5e4c79f17b98c97/components/CoursePageLayout.tsx` — Hero images with loading="eager"
- `March-Impulse-Web-e7ad8740054b4e468e95bc81e5e4c79f17b98c97/components/ExamPageLayout.tsx` — Hero images with loading="eager"
- `March-Impulse-Web-e7ad8740054b4e468e95bc81e5e4c79f17b98c97/components/PAAArticlePage.tsx` — Blog article images (hero eager, related lazy)
- `March-Impulse-Web-e7ad8740054b4e468e95bc81e5e4c79f17b98c97/components/Footer.tsx` — Partner logos (lazy)
- `March-Impulse-Web-e7ad8740054b4e468e95bc81e5e4c79f17b98c97/components/LocationsSection.tsx` — Location photos (lazy)
- `March-Impulse-Web-e7ad8740054b4e468e95bc81e5e4c79f17b98c97/components/FullPhotoGallery.tsx` — Gallery images (lazy)

### Astro Configuration
- `March-Impulse-Web-e7ad8740054b4e468e95bc81e5e4c79f17b98c97/astro.config.mjs` — Current Astro 5 config. Image service uses Sharp by default.
- `March-Impulse-Web-e7ad8740054b4e468e95bc81e5e4c79f17b98c97/src/layouts/BaseLayout.astro` — Main layout wrapper (potential `getImage()` location)

### Prior Phase Context
- `.planning/phases/02-image-consolidation/02-CONTEXT.md` — Phase 2 decisions on image location and seo-system compatibility
- `.planning/REQUIREMENTS.md` — OPT-01 through OPT-04 requirements

</canonical_refs>

<code_context>
## Existing Code Insights

### Reusable Assets
- `utils/images.ts` — Central registry with 73 images, well-organized by category. Refactor target (add static imports).
- `Sharp` 0.34.5 already installed — Astro uses Sharp internally for image processing, so no new dependency needed.
- Existing `loading="eager"` and `loading="lazy"` attributes already applied correctly in most components — the pattern just needs to be wired through Astro's pipeline instead of raw `<img>` tags.

### Established Patterns
- React islands via `client:load` / `client:visible` / `client:idle` — images in React components need `getImage()` in Astro frontmatter, passed as props
- All image `alt` text in Spanish (brand voice enforcer) — preserved as-is during migration
- `<picture>` element only used in `OptimizedImage.tsx` (being deleted) and `index.astro` homepage — most components use plain `<img>`

### Integration Points
- `.astro` page files — Where `getImage()` calls will live for React component image props
- `src/assets/images/academy/` — New home for all images (must be created)
- `utils/images.ts` — Registry refactor: add `ImageMetadata` exports alongside URL strings
- `TeamSection.tsx` — Only direct consumer of `OptimizedImage.tsx`, needs prop change

### Scale
- 73 images to move from `public/images/academy/` to `src/assets/images/academy/`
- 194 files in `public/images/optimized/` to delete
- 23 files in `public/images/original/` to delete
- ~17 React components with `<img>` tags to potentially update
- 2 script files to delete (optimize-images.mjs)
- 1 React component to delete (OptimizedImage.tsx)

</code_context>

<specifics>
## Specific Ideas

- Phase 2 explicitly noted this migration: "Phase 3 migrates to src/assets/images/ with Astro static imports when the image pipeline is configured" (02-CONTEXT D-02)
- The seo-system cross-compatibility constraint is the main architectural challenge — Vite SPA cannot consume astro:assets
- `OptimizedImage.tsx` has 3 sub-components (OptimizedImage, OptimizedBackground, OptimizedFigure) but only OptimizedImage is imported anywhere (TeamSection.tsx)
- Homepage `index.astro` already has a `<picture>` element — can be updated to use Astro's `<Picture>` as a reference pattern

</specifics>

<deferred>
## Deferred Ideas

None — discussion stayed within phase scope

</deferred>

---

*Phase: 03-image-optimization*
*Context gathered: 2026-04-09*
