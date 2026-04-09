# Phase 8: Auto-Publish Pipeline Decouple - Context

**Gathered:** 2026-04-09
**Status:** Ready for planning
**Source:** Auto-mode (recommended defaults selected)

<domain>
## Phase Boundary

auto-publish.js reads all brand identity and image URLs from brand-config.ts and utils/images.ts — the hardcoded BRAND block and S3 image URLs are deleted. The SEO pipeline generates correctly branded articles for any client.

</domain>

<decisions>
## Implementation Decisions

### BRAND block replacement
- **D-01:** Delete the hardcoded `BRAND` object (lines ~45-57 in auto-publish.js) and import `BRAND_CONFIG` from `brand-config.ts` instead.
- **D-02:** Map BRAND fields to BRAND_CONFIG equivalents:
  - `BRAND.companyName` → `BRAND_CONFIG.companyName`
  - `BRAND.companyDescription` → `BRAND_CONFIG.tagline`
  - `BRAND.targetAudience` → `BRAND_CONFIG.targetAudience`
  - `BRAND.uniqueValue` → `BRAND_CONFIG.uniqueValue`
  - `BRAND.socialProof` → `BRAND_CONFIG.socialProof`
  - `BRAND.brandMentionLevel` → `BRAND_CONFIG.brandMentionLevel`
- **D-03:** For fields not in brand-config.ts (`language`, `locationCode`, `researchDepth`), add them to brand-config.ts with current Impulse defaults. The onboarding CLI already generates brand-config.ts so new fields are portable.

### Import path strategy
- **D-04:** auto-publish.js is ESM (`import` syntax). Use a relative path from `seo-writer/scripts/` to project root: `import { BRAND_CONFIG } from '../../brand-config.js'`. Note: Node.js ESM requires `.js` extension even for `.ts` files when using ts-node or similar, OR the script may need a dynamic `import()` if the TS file isn't directly importable. Research should verify the actual import mechanism.
- **D-05:** Alternative if direct TS import fails: auto-publish.js reads brand-config.ts as text and parses it, OR a small JS wrapper re-exports BRAND_CONFIG. Claude has discretion on the cleanest approach.

### Image URL replacement
- **D-06:** Replace all hardcoded S3 image URLs in auto-publish.js with imports from the central image registry (`utils/images.ts`). The `blogImages` export in `utils/images.ts` provides URL strings suitable for article frontmatter.
- **D-07:** Import path from seo-writer/scripts/ to utils/images.ts: use relative path `../../March-Impulse-Web-.../utils/images.js` (same ESM import consideration as D-04).

### Onboarding CLI integration
- **D-08:** The onboarding CLI already generates brand-config.ts with the `BRAND_CONFIG` export. Any new fields added in D-03 must also be added to the CLI's brand-config generator.

### Claude's Discretion
- Exact import mechanism (direct TS import, dynamic import, JS wrapper, or text parsing)
- Whether to create a small `brand-config.js` that re-exports from `.ts` for Node.js ESM compatibility
- How to structure the image pool from blogImages (array of URLs vs object)
- Whether `BRAND` variable name should be kept as an alias or all references renamed to `BRAND_CONFIG`

</decisions>

<canonical_refs>
## Canonical References

**Downstream agents MUST read these before planning or implementing.**

### File to modify
- `seo-writer/scripts/auto-publish.js` — Contains hardcoded BRAND block (~line 45-57), ~30 S3 image URLs, 37 total Impulse/S3 references

### Source of truth files
- `brand-config.ts` (project root) — BRAND_CONFIG export with companyName, tagline, targetAudience, uniqueValue, socialProof, brandMentionLevel, language, tone, articleRules, brandSectionTemplate
- `March-Impulse-Web-e7ad8740054b4e468e95bc81e5e4c79f17b98c97/utils/images.ts` — blogImages export with URL strings for article images

### Onboarding CLI
- `March-Impulse-Web-e7ad8740054b4e468e95bc81e5e4c79f17b98c97/scripts/onboard-client.js` — Generates brand-config.ts, must include any new fields

### Milestone audit
- `.planning/v1.0-MILESTONE-AUDIT.md` — Defines CRIT-03, BROKEN-02 gaps

</canonical_refs>

<code_context>
## Existing Code Insights

### Reusable Assets
- `BRAND_CONFIG` in brand-config.ts already has most fields the BRAND block needs
- `blogImages` in utils/images.ts provides URL strings for article images
- Onboarding CLI brand-config generator can be extended for new fields

### Established Patterns
- ESM imports used throughout auto-publish.js (`import ... from '...'`)
- Phase 5-7 established the pattern of importing from centralized config files
- seo-writer/scripts/ is two directories deep from project root

### Integration Points
- auto-publish.js generates markdown articles written to `src/content/articles/`
- Generated articles use BRAND values in prompts to Claude API
- Image URLs go into article frontmatter `image` and `ogImage` fields
- The script uses `brandSectionTemplate` pattern (renamed from impulseSectionTemplate in Phase 6)

</code_context>

<specifics>
## Specific Ideas

- Keep the `BRAND` variable name as a local alias for backwards compatibility within the script: `const BRAND = { ...BRAND_CONFIG, language: BRAND_CONFIG.language }` or similar mapping
- For S3 URLs: create an `IMAGE_POOL` array from blogImages values, use random selection for article images
- The script's system prompts reference BRAND fields extensively — mapping must preserve all field names used in prompts

</specifics>

<deferred>
## Deferred Ideas

None — this is the last phase in the milestone

</deferred>

---

*Phase: 08-auto-publish-pipeline-decouple*
*Context gathered: 2026-04-09 via auto-mode*
