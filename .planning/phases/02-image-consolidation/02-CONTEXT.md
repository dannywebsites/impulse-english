# Phase 2: Image Consolidation - Context

**Gathered:** 2026-04-09
**Status:** Ready for planning

<domain>
## Phase Boundary

Move every S3-hosted image to local `src/assets/images/` and route all image references through a single central registry (`utils/images.ts`). No S3 URLs remain in source code after this phase. The seo-system mirrored components are updated in the same changeset. No image optimization (that's Phase 3) — just consolidation and registry creation.

</domain>

<decisions>
## Implementation Decisions

### Registry Architecture
- **D-01:** Create `utils/images.ts` as the single canonical image registry. Organize exports as category-based objects (facilities, logos, blog, team, partners, locations, etc.) matching the semantic groupings already present in `src/data/images.ts` and `src/data/academyImages.ts`.
- **D-02:** Each image entry exports: `name`, `alt` (Spanish), `altEn` (English), `category`, and a local URL string path. Images live in `public/images/academy/` so URL strings (`/images/academy/...`) work in both Astro SSG and seo-system Vite SPA. Phase 3 migrates to `src/assets/images/` with Astro static imports when the image pipeline is configured. *(Amended: original said src/assets/images/ but research found seo-system Vite SPA cannot consume Astro static imports — public/ with URL strings is the cross-system compatible approach for Phase 2.)*
- **D-03:** After `utils/images.ts` is established, delete `src/data/images.ts` and `src/data/academyImages.ts` — consolidate their contents into the single registry. Update all consumers.

### Image Download & Organization
- **D-04:** Download all 73 unique S3 images to `public/images/academy/` with category subdirectories: `facilities/`, `logos/`, `blog/`, `team/`, `partners/`, `locations/`, `general/`. This keeps the directory navigable. *(Amended: changed from src/assets/images/ to public/images/academy/ per D-02 rationale — seo-system cross-compatibility. Phase 3 moves to src/assets/ for Astro pipeline.)*
- **D-05:** Use original filenames from S3 where possible, cleaned to kebab-case (no URL-encoded `+` signs, no ALL CAPS). Preserve file extensions as-is (jpg, png, webp).
- **D-06:** The `public/images/optimized/` directory (194 files from hand-rolled optimization) is NOT deleted in this phase — it's referenced by the existing `src/data/images.ts` responsive variants. Phase 3 handles replacing these with Astro's native pipeline. For Phase 2, the registry maps these local paths for images that already have optimized variants.

### seo-system Sync
- **D-07:** seo-system components import from the main project's `utils/images.ts` via relative paths (e.g., `../../utils/images.ts`), NOT from a separate mirrored registry. This ensures a single source of truth (IMG-04).
- **D-08:** seo-system's own `src/data/images.ts` and `src/data/academyImages.ts` are deleted after migration — all imports point to the shared registry.

### Component Migration Pattern
- **D-09:** For components with inline S3 URLs (e.g., `Footer.tsx`, `ExamPageLayout.tsx`, `LocationsSection.tsx`), replace the URL string with a registry import: `import { logos } from '@/utils/images'` then `src={logos.cambridge.url}`.
- **D-10:** For blog page components (`pages/blog/*.tsx`) that each have 1 S3 URL (typically OG/hero image), replace with registry references. These are high volume (~60+ files) but mechanical — each has one image to swap.
- **D-11:** For `napData.ts` and `utils/schemaData.ts` which reference S3 URLs for schema.org data (logo, OG image), update to use local paths via the registry.

### Claude's Discretion
- Exact category naming for subdirectories (as long as semantically clear)
- Whether to create a download script or download manually
- Order of file migration (which components first)
- Whether to batch-commit by category or by subsystem

</decisions>

<canonical_refs>
## Canonical References

**Downstream agents MUST read these before planning or implementing.**

### Image Data Files (current state — will be consolidated)
- `March-Impulse-Web-e7ad8740054b4e468e95bc81e5e4c79f17b98c97/src/data/images.ts` — Current image registry with OptimizedImageData + S3ImageData types, 30 S3 URLs
- `March-Impulse-Web-e7ad8740054b4e468e95bc81e5e4c79f17b98c97/src/data/academyImages.ts` — Academy-specific images, 49 S3 URLs
- `March-Impulse-Web-e7ad8740054b4e468e95bc81e5e4c79f17b98c97/seo-system/src/data/images.ts` — seo-system mirror of images.ts (30 S3 URLs)
- `March-Impulse-Web-e7ad8740054b4e468e95bc81e5e4c79f17b98c97/seo-system/src/data/academyImages.ts` — seo-system mirror of academyImages.ts (49 S3 URLs)

### High-S3-URL Components
- `March-Impulse-Web-e7ad8740054b4e468e95bc81e5e4c79f17b98c97/components/Footer.tsx` — 4 S3 URLs (partner logos)
- `March-Impulse-Web-e7ad8740054b4e468e95bc81e5e4c79f17b98c97/components/ExamPageLayout.tsx` — 2 S3 URLs
- `March-Impulse-Web-e7ad8740054b4e468e95bc81e5e4c79f17b98c97/pages/cursos/AdultosPage.tsx` — 12 S3 URLs
- `March-Impulse-Web-e7ad8740054b4e468e95bc81e5e4c79f17b98c97/pages/ubicaciones/LaVaguadaPage.tsx` — 28 S3 URLs (highest single file)

### Business Data & Schema
- `March-Impulse-Web-e7ad8740054b4e468e95bc81e5e4c79f17b98c97/utils/napData.ts` — logo and image URLs for schema.org
- `March-Impulse-Web-e7ad8740054b4e468e95bc81e5e4c79f17b98c97/utils/schemaData.ts` — schema.org generators that may reference S3 URLs

### Layout & SEO
- `March-Impulse-Web-e7ad8740054b4e468e95bc81e5e4c79f17b98c97/src/layouts/BaseLayout.astro` — DEFAULT_OG_IMAGE is an S3 URL
- `March-Impulse-Web-e7ad8740054b4e468e95bc81e5e4c79f17b98c97/components/SEOHead.tsx` — DEFAULT_OG_IMAGE is an S3 URL

### Project Context
- `.planning/PROJECT.md` — Core value: template portability drives this phase
- `.planning/REQUIREMENTS.md` — IMG-01 through IMG-04 requirements
- `.planning/codebase/CONCERNS.md` — Documents S3 URL scattering as known issue

</canonical_refs>

<code_context>
## Existing Code Insights

### Reusable Assets
- `src/data/images.ts` — Has well-structured types (`OptimizedImageData`, `S3ImageData`, `ImageSize`) that can be adapted for the new registry
- `public/images/optimized/` — 194 pre-optimized image files already local (webp + jpg variants at 4 sizes)
- `public/images/original/` — 23 original source images already local

### Established Patterns
- Images are referenced via data objects with `url`, `alt`, `altEn`, `name`, `category` properties
- Components use `<img src={image.url} alt={image.alt} />` pattern
- Location pages (`pages/ubicaciones/*.tsx`) have the heaviest image usage (15 S3 refs each, 8 location pages)
- Blog pages use a consistent pattern: single OG/hero image per page

### Integration Points
- `utils/images.ts` (new) — All components will import from here
- `src/assets/images/` (new directory) — Local image storage for Astro pipeline compatibility
- seo-system components — Must switch from mirrored data files to shared registry imports
- `napData.ts` and `schemaData.ts` — Schema.org logo/image URLs must point to local paths

### Scale
- 73 unique S3 URLs to download
- 708 total S3 URL occurrences to replace
- 152 files affected
- 3 subsystems: main site components, seo-system mirrors, blog pages

</code_context>

<specifics>
## Specific Ideas

- STATE.md blocker note: "Image migration scope: 170 S3 URL matches across 3 subsystems — bucket before starting Phase 2" (actual count is higher: 708 across 152 files)
- Phase 3 depends on this: Astro `<Image>` and `<Picture>` components only work with local images in `src/assets/`
- The `public/images/optimized/` files are from a hand-rolled optimization system that Phase 3 replaces — Phase 2 should NOT delete these
- napData.ts logo URLs use the production domain (`https://impulse-english.es/images/optimized/`) — these need to become local references too

</specifics>

<deferred>
## Deferred Ideas

None — discussion stayed within phase scope

</deferred>

---

*Phase: 02-image-consolidation*
*Context gathered: 2026-04-09*
