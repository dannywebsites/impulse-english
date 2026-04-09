# Phase 4: Client Onboarding CLI - Context

**Gathered:** 2026-04-09
**Status:** Ready for planning

<domain>
## Phase Boundary

Interactive CLI script at `scripts/onboard-client.js` that walks a developer through structured question categories and generates fully configured `brand-config.ts`, `napData.ts`, `buildPageTitle.ts`, and `.env.template`. Drafts are written first, reviewed via diff, then promoted to final files on confirmation. A TEMPLATE_MODE guard prevents running on the production Impulse repo. After promotion, `npm run build` verifies the generated config compiles.

</domain>

<decisions>
## Implementation Decisions

### Question Flow Design
- **D-01:** Questions organized in grouped categories with section headers, matching TEMPLATE-SETUP.md's natural structure: (1) Business Identity, (2) Contact Info, (3) Geo & Address, (4) Opening Hours, (5) Social Profiles, (6) Brand Voice & Language, (7) Credentials & Ratings, (8) CTA Defaults.
- **D-02:** Use `@inquirer/prompts` (already specified in ONBD-01). Modern ESM-first API with individual prompt imports (`input`, `select`, `confirm`, `editor`).
- **D-03:** Show current Impulse values as defaults for each question. Developer sees exactly what they're replacing and can press Enter to keep values during testing. This makes the mapping between questions and config fields transparent.
- **D-04:** Opening hours use a structured sub-flow: for each day, ask if open (Y/N), then open/close times. Weekend days default to closed.

### Draft/Promotion UX
- **D-05:** Generated files are written to a `.draft/` directory at project root (`.draft/brand-config.ts`, `.draft/napData.ts`, `.draft/buildPageTitle.ts`, `.draft/.env.template`). This keeps drafts clearly separated from production files.
- **D-06:** After generation, display a colorized diff of each draft against the current original file. Developer reviews all changes before deciding.
- **D-07:** Single Y/N confirmation prompt after showing all diffs: "Promote these drafts to final files?" Avoids per-file confirmation fatigue.
- **D-08:** On rejection: keep drafts in `.draft/` directory, print message explaining drafts are preserved and can be edited manually or script re-run. Non-destructive — originals are never touched.
- **D-09:** On acceptance: copy each draft to its final location, overwriting the Impulse originals. Back up originals to `.draft/backup/` before overwriting.

### TEMPLATE_MODE Guard
- **D-10:** Check for `TEMPLATE_MODE=true` environment variable first. If not set, fall back to checking git remote URLs for "impulse" (case-insensitive). Either match triggers the guard.
- **D-11:** When guard triggers: exit immediately with clear error message: "This appears to be the production Impulse repo. Set TEMPLATE_MODE=true to override, or run on a fresh clone." Exit code 1.
- **D-12:** The guard runs as the very first step — before any questions are asked.

### Build Verification
- **D-13:** After draft promotion, automatically run `npm run build` in the website directory and report pass/fail. This satisfies ONBD-06.
- **D-14:** If build fails: show the build error output, keep promoted files in place (don't rollback), suggest the developer fix TypeScript/config errors manually. The errors are the useful signal.
- **D-15:** If build succeeds: print success message with next steps (review site locally, update vercel.json redirects, update analytics IDs per TEMPLATE-SETUP.md Steps 8-10).

### Claude's Discretion
- Exact question wording and help text for each prompt
- Whether to add a `--skip-build` flag for faster iteration during development
- Color scheme for diff output (green/red standard)
- Whether to validate individual answers inline (e.g., URL format, phone format) or batch-validate at the end
- Order of categories within the question flow (as long as all 8 categories are covered)

</decisions>

<canonical_refs>
## Canonical References

**Downstream agents MUST read these before planning or implementing.**

### Config Files (generation targets)
- `brand-config.ts` — Brand identity, voice, CTAs, content rules. 93 lines. The CLI must generate a complete replacement.
- `March-Impulse-Web-e7ad8740054b4e468e95bc81e5e4c79f17b98c97/utils/napData.ts` — Business NAP data, geo, hours, social, credentials. 154 lines. Full replacement.
- `March-Impulse-Web-e7ad8740054b4e468e95bc81e5e4c79f17b98c97/utils/buildPageTitle.ts` — 3 brand constants for page titles. 30 lines. Simple replacement.

### Template Documentation
- `TEMPLATE-SETUP.md` — 10-step manual cloning guide. The CLI automates Steps 2-4 (brand-config, napData, buildPageTitle). Steps 5-10 remain manual.

### Requirements
- `.planning/REQUIREMENTS.md` — ONBD-01 through ONBD-08 requirements with acceptance criteria.

### Prior Phase Context
- `.planning/phases/01-leadform-hardening/01-CONTEXT.md` — D-08/D-09: astro:env with PUBLIC_WEBHOOK_URL. The .env.template must document this variable.

### Astro Configuration
- `March-Impulse-Web-e7ad8740054b4e468e95bc81e5e4c79f17b98c97/astro.config.mjs` — env.schema section defines PUBLIC_WEBHOOK_URL. The .env.template must match.

</canonical_refs>

<code_context>
## Existing Code Insights

### Reusable Assets
- `brand-config.ts` (93 lines) — Well-structured with clear section comments. Each property has a descriptive comment. The CLI can use this as a template to understand what values to collect.
- `napData.ts` (154 lines) — Comprehensive NAP object with helper functions. The CLI generates the full NAP object; helper functions (`getSchemaAddress`, `getAddressLines`) are generic and don't need modification.
- `buildPageTitle.ts` (30 lines) — Only 3 constants need changing. The rest of the function logic is portable.
- `TEMPLATE-SETUP.md` — Documents the manual process the CLI is automating. Useful as a reference for question categories.

### Established Patterns
- `scripts/` directory exists with 6 existing scripts (download, migration, verification utilities). The onboarding script fits here naturally.
- Project uses ESM (`.mjs` extensions for scripts, `"type": "module"` likely in package.json).
- Existing scripts use Node.js built-in modules (fs, path, child_process).

### Integration Points
- `scripts/onboard-client.js` — New file, the main CLI entry point (ONBD-01).
- `.draft/` — New directory for draft output (created at runtime, should be in .gitignore).
- `package.json` — May need a new `"onboard"` script alias: `"onboard": "node scripts/onboard-client.js"`.
- `.env.template` — New file documenting required env vars (PUBLIC_WEBHOOK_URL at minimum).

</code_context>

<specifics>
## Specific Ideas

- The CLI automates TEMPLATE-SETUP.md Steps 2-4 only. Steps 5-10 (skills install, voice enforcer, auto-publish categories, vercel.json, CLAUDE.md, analytics) remain manual and are listed as "next steps" after successful onboarding.
- napData.ts has helper functions (getSchemaAddress, getAddressLines) that are generic — the CLI only needs to generate the NAP const and the `as const` assertion, then append the existing helper functions unchanged.
- The `.draft/` directory should be added to `.gitignore` to prevent accidental commits of draft files.
- Current Impulse values shown as defaults serve double duty: they document the expected format AND allow quick testing by pressing Enter through all prompts.

</specifics>

<deferred>
## Deferred Ideas

- **ONBD-09 (v2):** Research agent that scrapes client website via Firecrawl to auto-populate answers — future milestone
- **ONBD-10 (v2):** Web UI alternative to CLI for non-technical users — future milestone
- Auto-updating CLAUDE.md project description (TEMPLATE-SETUP Step 9) — could be added to CLI in future phase
- Auto-updating vercel.json redirects and analytics IDs — manual per TEMPLATE-SETUP Steps 8, 10

</deferred>

---

*Phase: 04-client-onboarding-cli*
*Context gathered: 2026-04-09*
