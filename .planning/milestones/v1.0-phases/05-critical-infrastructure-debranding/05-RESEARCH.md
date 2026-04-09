# Phase 5: Critical Infrastructure Debranding - Research

**Researched:** 2026-04-09
**Domain:** Astro layout configuration, napData extension, onboarding CLI extension, PWA webmanifest
**Confidence:** HIGH

---

<user_constraints>
## User Constraints (from CONTEXT.md)

### Locked Decisions

- **D-01:** Add a `tracking` object to napData.ts with `ga4Id`, `googleAdsId`, `gtmContainerId` fields. Current Impulse values become the defaults. BaseLayout.astro imports these instead of hardcoding.
- **D-02:** Onboarding CLI (`scripts/onboard-client.js`) adds a tracking category to its question flow and includes tracking IDs in the generated napData.ts.
- **D-03:** Add a dedicated `NAP.siteTitle` field (e.g., `"Impulse English Academy La Vaguada – Barrio del Pilar"`). BaseLayout.astro and SEOHead.tsx read `NAP.siteTitle` instead of declaring their own `SITE_NAME` constant.
- **D-04:** BaseLayout.astro reads `NAP.website` instead of declaring its own `BASE_URL` constant.
- **D-05:** Add `NAP.social.xHandle` field (e.g., `"@ImpulseEnglish"`) — explicit, not extracted from URL. BaseLayout.astro reads this for `twitter:site` and `twitter:creator` meta tags.
- **D-06:** Onboarding CLI asks for X/Twitter handle alongside the X URL in the social profiles category.
- **D-07:** Keep `site.webmanifest` as a static JSON file. Fix broken icon paths from `/images/optimized/` to `/images/favicons/`. Update name/short_name to match NAP values.
- **D-08:** Onboarding CLI adds a step to write the `site.webmanifest` file with the new client's brand name and correct icon paths.
- **D-09:** SEOHead.tsx reads `NAP.siteTitle`, `NAP.website`, and `NAP.name` (for author) from napData. Its own `SITE_NAME`, `BASE_URL`, and `author` constants are deleted.
- **D-10:** BaseLayout.astro default `author` prop reads from `NAP.name` instead of hardcoding "Impulse English Academy".

### Claude's Discretion

- Exact property names within the `tracking` object (ga4Id vs ga4MeasurementId, etc.) — pick clear, intuitive names
- Whether to add a `social.xHandle` field or a top-level `twitterHandle` — choose what fits napData structure best
- Order of new fields in napData.ts
- Exact phrasing of onboarding CLI questions for tracking IDs

### Deferred Ideas (OUT OF SCOPE)

None — discussion stayed within phase scope
</user_constraints>

---

<phase_requirements>
## Phase Requirements

| ID | Description | Research Support |
|----|-------------|------------------|
| ONBD-01 | CLI script walks user through structured question flow — integration gap closure | Phase 5 extends the existing CLI (categories 1-8 complete) to add tracking IDs (category 9) and webmanifest generation. The napData extension with `tracking`, `siteTitle`, `social.xHandle` fields closes the gap where CLI-generated files left BaseLayout.astro and SEOHead.tsx with hardcoded Impulse values. |
</phase_requirements>

---

## Summary

Phase 5 is a targeted refactor of three infrastructure files — `BaseLayout.astro`, `components/SEOHead.tsx`, and `public/site.webmanifest` — plus corresponding extensions to `utils/napData.ts` and `scripts/onboard-client.js`. The goal is to eliminate all hardcoded Impulse-specific values from the layout layer so that running `npm run onboard` produces a fully debranded site.

The current state is well-understood: BaseLayout.astro declares `SITE_NAME`, `BASE_URL`, and `author` as local constants (lines 23-24, 39) and embeds three tracking IDs inline in JavaScript blocks (lines 98-110, 244). SEOHead.tsx mirrors the same `SITE_NAME`, `BASE_URL`, and `author` constants independently (lines 18-19, 36). The webmanifest references `/images/optimized/` paths that were deleted in Phase 3 — every PWA install attempt currently 404s.

The pattern for this phase is already proven in the codebase: `napData.ts` is the single source of truth, all components import `NAP` from it, and the CLI generates a new `napData.ts` from user answers. This phase simply extends that pattern to four new fields (`tracking`, `siteTitle`, `social.xHandle`) and adds two new generator behaviours (tracking questions in CLI, webmanifest file write).

**Primary recommendation:** Extend napData.ts with the four new fields first, then update the three consumer files (BaseLayout.astro, SEOHead.tsx, webmanifest), then extend the CLI to generate those fields — in that order, so the Astro build remains valid at every step.

---

## Standard Stack

### Core

| Library | Version | Purpose | Why Standard |
|---------|---------|---------|--------------|
| Astro | 5.7.10 | Static site generation, BaseLayout.astro is an Astro component | Already in use |
| React | 18.3.1 | SEOHead.tsx is a React component using useEffect | Already in use |
| @inquirer/prompts | (existing in project) | CLI question flow for onboarding | Already used in all 8 current categories |
| Node.js fs | built-in | Write webmanifest from CLI generator | Already used for brand-config.ts, napData.ts writes |

### No New Dependencies Required

This phase adds zero new packages. All changes are within the existing stack.

---

## Architecture Patterns

### Pattern 1: napData Extension (established pattern)

**What:** Add new top-level fields to the `NAP` const object in `utils/napData.ts`. The object uses `as const` so TypeScript infers a readonly type that consumers can rely on.

**When to use:** Any time a new brand-specific value needs to flow to multiple components.

**Existing pattern to follow:**
```typescript
// Current napData.ts shape (established)
export const NAP = {
  name: "Impulse English Academy La Vaguada",
  website: "https://impulse-english.es",
  social: {
    instagram: "...",
    x: "https://x.com/impulse_vaguada",
  },
  // ...
} as const;
```

**New fields to add (following same pattern):**
```typescript
export const NAP = {
  // existing fields...
  
  // NEW: D-03 — used by BaseLayout.astro and SEOHead.tsx
  siteTitle: "Impulse English Academy La Vaguada – Barrio del Pilar",

  social: {
    // existing social fields...
    xHandle: "@ImpulseEnglish",  // D-05: explicit handle, not extracted from x URL
  },

  // NEW: D-01 — used by BaseLayout.astro
  tracking: {
    ga4Id: "G-WN5973VY1M",
    googleAdsId: "AW-11461982741",
    gtmContainerId: "GTM-TDC7CQDD",
  },
} as const;
```

**Property name choices (Claude's discretion):**
- `ga4Id` — clear abbreviation matching Google's own naming
- `googleAdsId` — explicit service name, avoids confusion with GA4
- `gtmContainerId` — matches GTM's own terminology ("container ID")
- `xHandle` — nested under `social` since it is a social identity field; fits the existing structure better than a top-level `twitterHandle`

---

### Pattern 2: Astro Component Variable Substitution (established pattern)

**What:** In Astro component frontmatter, import `NAP` and assign its values to variables used in the template. The Astro component already does this for schemas.

**Current problematic pattern (BaseLayout.astro lines 23-24, 39):**
```typescript
// These three constants must be REPLACED:
const SITE_NAME = 'Impulse English Academy La Vaguada – Barrio del Pilar';
const BASE_URL = 'https://impulse-english.es';
// ...
author = 'Impulse English Academy',   // default prop value
```

**Target pattern:**
```typescript
import { NAP } from '../../utils/napData';

// Delete SITE_NAME and BASE_URL constants. Use NAP directly:
// NAP.siteTitle      → replaces SITE_NAME
// NAP.website        → replaces BASE_URL  (D-04)
// NAP.name           → replaces hardcoded 'Impulse English Academy' author default (D-10)

const {
  // ...
  author = NAP.name,   // D-10: reads from napData
} = Astro.props;
```

**Important:** `NAP.website` already exists in napData.ts (line 32: `website: "https://impulse-english.es"`). This is a pure substitution — the field is already there.

---

### Pattern 3: Inline Script Tracking ID Injection (new pattern for this codebase)

**What:** BaseLayout.astro contains `is:inline` scripts that embed tracking IDs as string literals. Since `is:inline` scripts bypass Astro's build pipeline (they are emitted verbatim), they cannot use `import.meta.env` or module imports. The pattern is to use Astro template expressions to inject values into the inline script text.

**Astro's `is:inline` behaviour (HIGH confidence — verified from existing code):**
- `is:inline` scripts are output exactly as written — no Astro processing
- However, Astro template expressions (`{expression}`) ARE evaluated in the frontmatter scope before the HTML is rendered
- The trick: use `set:html` on a `<script>` tag OR inject a JSON config variable before the inline scripts

**Recommended approach — inject a config variable before the tracking scripts:**
```astro
<!-- In <head>, after NAP import in frontmatter: -->
<script is:inline define:vars={{ ga4Id: NAP.tracking.ga4Id, googleAdsId: NAP.tracking.googleAdsId, gtmContainerId: NAP.tracking.gtmContainerId }}>
  // Variables ga4Id, googleAdsId, gtmContainerId are now available
  // They are serialized by Astro's define:vars mechanism
</script>
```

**Astro's `define:vars` directive (HIGH confidence — this is a core Astro feature):**
- `define:vars={{ key: value }}` on a `<script>` tag serializes the variables into the script scope
- Works with `is:inline` scripts
- Values are JSON-serialized, making them safe for string IDs like `"G-WN5973VY1M"`
- This is the canonical Astro pattern for passing server-side values to inline scripts

**Alternative — use `set:html` with a template literal:**
```astro
<script is:inline set:html={`
  var GA4_ID = "${NAP.tracking.ga4Id}";
  var GOOGLE_ADS_ID = "${NAP.tracking.googleAdsId}";
  var GTM_ID = "${NAP.tracking.gtmContainerId}";
`}></script>
```

**Recommendation:** Use `define:vars` — it is the idiomatic Astro approach, handles escaping automatically, and is documented in Astro's official script guide. The `set:html` approach requires manual escaping.

**Exact locations to change in BaseLayout.astro:**
1. Line 98: `g.src = 'https://www.googletagmanager.com/gtag/js?id=G-WN5973VY1M'` → use variable
2. Line 103: `gtag('config', 'G-WN5973VY1M')` → use variable
3. Line 104: `gtag('config', 'AW-11461982741')` → use variable
4. Lines 106-110: GTM snippet with `'GTM-TDC7CQDD'` → use variable
5. Line 170-171: `@ImpulseEnglish` twitter tags → use `NAP.social.xHandle` in Astro template (these are regular HTML, not inline scripts — straightforward substitution)
6. Line 244: noscript GTM iframe with `GTM-TDC7CQDD` → use variable

**The deferred GA4 loading script** (lines 92-117) needs restructuring. Currently one big `is:inline` block. With `define:vars`, it becomes:

```astro
<script is:inline define:vars={{ ga4Id: NAP.tracking.ga4Id, googleAdsId: NAP.tracking.googleAdsId, gtmContainerId: NAP.tracking.gtmContainerId }}>
  (function(){
    var loaded = false;
    function load(){
      if(loaded) return; loaded = true;
      var g = document.createElement('script');
      g.src = 'https://www.googletagmanager.com/gtag/js?id=' + ga4Id;
      g.async = true;
      document.head.appendChild(g);
      g.onload = function(){
        gtag('js', new Date());
        gtag('config', ga4Id);
        gtag('config', googleAdsId);
      };
      (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
      new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
      j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
      'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
      })(window,document,'script','dataLayer', gtmContainerId);
    }
    setTimeout(load, 3500);
    ['scroll','click','touchstart','keydown'].forEach(function(e){
      document.addEventListener(e, load, {once:true, passive:true});
    });
  })();
</script>
```

---

### Pattern 4: SEOHead.tsx napData Import (established pattern in codebase)

**What:** SEOHead.tsx is used by the seo-system SPA (separate Vite build context). It currently declares its own `SITE_NAME`, `BASE_URL`, and `author` constants. Per D-09, delete these constants and import from `napData.ts`.

**Import path note (CRITICAL — from STATE.md Phase 02 decision):**
> "seo-system components use relative ../../utils/images path — @/ alias resolves to seo-system root not project root"

SEOHead.tsx is in `components/` (not inside the main Astro project). The correct import path must use a relative path:

```typescript
import { NAP } from '../utils/napData';
```

Check: `components/SEOHead.tsx` → `utils/napData.ts` — one level up from `components/` is the website root where `utils/` lives. So `../utils/napData` is correct.

**Changes to SEOHead.tsx:**
- Add: `import { NAP } from '../utils/napData';`
- Delete: `const SITE_NAME = 'Impulse English Academy La Vaguada – Barrio del Pilar';`
- Delete: `const BASE_URL = 'https://impulse-english.es';`
- Change: `author = 'Impulse English Academy'` default → `author = NAP.name`
- Replace all `SITE_NAME` usages with `NAP.siteTitle`
- Replace all `BASE_URL` usages with `NAP.website`

**SITE_NAME usages in SEOHead.tsx (lines 18, 42, 77, 90):**
- Line 42: `document.title = fullTitle ? title : \`${title} | ${SITE_NAME}\`` → `NAP.siteTitle`
- Line 77: `setMetaTag('publisher', SITE_NAME)` → `NAP.siteTitle`
- Line 90: `setMetaTag('og:site_name', SITE_NAME, true)` → `NAP.siteTitle`

---

### Pattern 5: Webmanifest Generator in CLI (new pattern)

**What:** The CLI's promotion flow currently writes 4 files: `brand-config.ts`, `napData.ts`, `buildPageTitle.ts`, `.env.template`. Per D-08, add `site.webmanifest` as a 5th generated file.

**Key difference from other generated files:** `site.webmanifest` is in `public/` (not `utils/` or project root), and it is JSON not TypeScript.

**Generator function:**
```javascript
function generateWebmanifest(answers) {
  return JSON.stringify({
    name: answers.companyName,
    short_name: answers.shortName,
    icons: [
      {
        src: "/images/favicons/favicon-192x192.png",
        sizes: "192x192",
        type: "image/png"
      },
      {
        src: "/images/favicons/apple-touch-icon.png",
        sizes: "180x180",
        type: "image/png"
      }
    ],
    theme_color: "#ffffff",
    background_color: "#ffffff",
    display: "standalone"
  }, null, 2);
}
```

**Verified:** `/images/favicons/` directory contains `favicon-192x192.png` and `apple-touch-icon.png` — paths will resolve correctly.

**CLI integration:** Add to `draftFiles` object and `promotionMap`/`backupMap` arrays. The webmanifest `originalPath` is `join(WEBSITE_ROOT, 'public', 'site.webmanifest')`.

---

### Pattern 6: CLI Tracking Questions (new category)

**What:** Add a 9th question category "(9) Tracking & Analytics" after the existing category 8 (CTA Defaults). Per D-02 and D-06, collect GA4 ID, Google Ads ID, GTM container ID, and X/Twitter handle (the handle question belongs logically in category 5 Social Profiles per D-06).

**X/Twitter handle — where it fits in the CLI:**
Per D-06, the xHandle question goes in category (5) Social Profiles, immediately after the X URL question:

```javascript
// After: answers.x = await input({ message: 'X (Twitter) URL:', ... })
answers.xHandle = await input({
  message: 'X (Twitter) handle (e.g. @YourBrand):',
  default: '@ImpulseEnglish',
});
```

**New category (9) Tracking & Analytics:**
```javascript
console.log('\n─── (9) Tracking & Analytics ───────────────────────────\n');
console.log('Leave as-is if you have not yet set up Google Analytics.\n');

answers.ga4Id = await input({
  message: 'Google Analytics 4 Measurement ID (G-XXXXXXXXXX):',
  default: 'G-XXXXXXXXXX',
});

answers.googleAdsId = await input({
  message: 'Google Ads Conversion ID (AW-XXXXXXXXXXX):',
  default: 'AW-XXXXXXXXXXX',
});

answers.gtmContainerId = await input({
  message: 'Google Tag Manager Container ID (GTM-XXXXXXX):',
  default: 'GTM-XXXXXXX',
});
```

**Note:** Default values are PLACEHOLDER strings (not Impulse values). This is consistent with the `specifics` section of CONTEXT.md: "All tracking IDs, Twitter handle, site name, and base URL should be placeholders in the template — the onboarding CLI fills them in."

**However:** The Impulse values remain as defaults in the current (production) `napData.ts` — they are not replaced. The CLI generates a new file with placeholders as defaults; if the user presses Enter without entering values, they get placeholder IDs, which is correct behaviour for a template.

---

### Pattern 7: generateNapData Extension

The `generateNapData()` function in the CLI must output the three new fields. The existing function generates a complete `napData.ts` string. The additions slot into two places:

1. After `social` object — add `xHandle: "${answers.xHandle}"` to the social block
2. After the `foundingDate` field — add the `tracking` object

```javascript
// In generateNapData(answers), inside the template literal:
  social: {
    instagram: "${answers.instagram}",
    facebook: "${answers.facebook}",
    tiktok: "${answers.tiktok}",
    x: "${answers.x}",
    xHandle: "${answers.xHandle}",     // NEW: D-05
    linkedin: "${answers.linkedin}",
    youtube: "${answers.youtube}",
  },

  // ... later, after foundingDate:

  // Tracking IDs (Google Analytics, Ads, Tag Manager)
  tracking: {
    ga4Id: "${answers.ga4Id}",
    googleAdsId: "${answers.googleAdsId}",
    gtmContainerId: "${answers.gtmContainerId}",
  },
```

---

### Anti-Patterns to Avoid

- **Using `import.meta.env` for tracking IDs:** These are brand configuration, not environment secrets. They belong in napData.ts per D-01, not `.env` files. (Tracking IDs are already public — they appear in every page's HTML.)
- **Modifying the webmanifest at build time via Astro config:** Keep it static JSON per D-07. The CLI writes it once; it doesn't need to be dynamic.
- **Extracting the X handle from the X URL string:** Per D-05, the handle is an explicit field. URL parsing is fragile (different URL formats, handle vs. username differences).
- **Creating a new NAP import path:** SEOHead.tsx already lives in `components/` and the relative path `../utils/napData` is the correct pattern per the established two-registry decision from Phase 2.
- **Touching the is:inline consent block:** The consent mode script (lines 81-89 of BaseLayout.astro) has no brand-specific values. Do not modify it.

---

## Don't Hand-Roll

| Problem | Don't Build | Use Instead | Why |
|---------|-------------|-------------|-----|
| Passing napData values to inline scripts | Custom window global injection | Astro `define:vars` directive | define:vars handles serialization and scoping correctly |
| JSON file writing | Custom JSON formatter | `JSON.stringify(obj, null, 2)` | Built-in, produces valid pretty-printed JSON |
| CLI question with defaults | Custom readline code | `@inquirer/prompts` `input()` with `default:` | Already used for all 8 existing categories |

---

## Common Pitfalls

### Pitfall 1: define:vars with is:inline

**What goes wrong:** Developer adds `define:vars` to an existing `is:inline` script but the script uses module syntax or Astro-specific APIs that don't work in inline context.

**Why it happens:** `define:vars` only works with `is:inline` scripts (it cannot be used with module scripts). The existing tracking script already uses `is:inline` and browser-global `window`/`document` — no module syntax — so this is safe.

**How to avoid:** The existing script body is already valid for inline use. Only the ID string literals change; the rest stays the same.

**Warning signs:** TypeScript errors like "Cannot use import statement in a script that is not a module" would indicate someone accidentally added module syntax.

---

### Pitfall 2: `as const` TypeScript Narrowing After napData Extension

**What goes wrong:** The `NAP` object uses `as const`, which narrows all string values to literal types. If a consumer tries to assign `NAP.tracking.ga4Id` to a variable typed as `string`, TypeScript may complain because the inferred type is the literal `"G-WN5973VY1M"` not `string`.

**Why it happens:** `as const` is used on the whole object. This is not a problem for template interpolation (both `${NAP.tracking.ga4Id}` and `"G-WN5973VY1M"` produce the same string). It could be a problem if someone writes `const id: string = NAP.tracking.ga4Id` — but this phase's usage is purely template string interpolation, not typed assignment.

**How to avoid:** Use `NAP.tracking.ga4Id` directly in template expressions. No intermediate typed variables needed.

---

### Pitfall 3: SEOHead.tsx is Used by seo-system (Different Build Context)

**What goes wrong:** Adding a napData import to SEOHead.tsx could break the seo-system's Vite build if the import path resolves differently in the seo-system context.

**Why it happens:** The seo-system is a separate Vite SPA (`seo-system/` directory). Its `@/` alias resolves to `seo-system/` root, not the website root. The established decision (STATE.md Phase 02) was to use relative paths for cross-boundary imports.

**How to avoid:** Use `import { NAP } from '../utils/napData'` (relative, not `@/utils/napData`). This resolves correctly whether imported from `components/` in either the Astro or seo-system context since both have `utils/napData.ts` accessible via `../utils/` from `components/`.

**Verify:** `components/SEOHead.tsx` is in `March-Impulse-Web-.../components/`. The `utils/` directory is `March-Impulse-Web-.../utils/`. So `../utils/napData` is correct. The seo-system mounts the main project's `components/` via the `vite.config` alias — confirm this before executing.

---

### Pitfall 4: Webmanifest Written as Draft, Then Promoted

**What goes wrong:** The webmanifest path is `public/site.webmanifest` inside the website root, not the project root. Using the wrong base path in the CLI's `promotionMap` would write it to the wrong location.

**How to avoid:** Use `join(WEBSITE_ROOT, 'public', 'site.webmanifest')` — not `join(PROJECT_ROOT, ...)`. `WEBSITE_ROOT` is already defined in the CLI as `join(__dirname, '..')`.

---

### Pitfall 5: Onboarding CLI Build Check After Phase 5

**What goes wrong:** After CLI runs and generates a new `napData.ts` with placeholder tracking IDs (`G-XXXXXXXXXX`), the Astro build runs (`npm run build`). If BaseLayout.astro's tracking script passes these placeholder strings to GTM/GA4, the build should still succeed (they are just strings — no build-time validation of their format). GTM and GA4 only fail at runtime when they try to contact Google's servers.

**How to avoid:** No action needed — placeholder IDs will not break the build. The existing build check (`execSync('npm run build')`) continues to work correctly as a compile-time gate.

---

## Code Examples

### Verified: Current hardcoded locations in BaseLayout.astro

```
Line 23: const SITE_NAME = 'Impulse English Academy La Vaguada – Barrio del Pilar';
Line 24: const BASE_URL = 'https://impulse-english.es';
Line 39: author = 'Impulse English Academy',  (default prop value)
Line 98: g.src = 'https://www.googletagmanager.com/gtag/js?id=G-WN5973VY1M';
Line 103: gtag('config', 'G-WN5973VY1M');
Line 104: gtag('config', 'AW-11461982741');
Line 110: })(window,document,'script','dataLayer','GTM-TDC7CQDD');
Line 149: <meta name="publisher" content={SITE_NAME} />
Line 161: <meta property="og:site_name" content={SITE_NAME} />
Line 170: <meta name="twitter:site" content="@ImpulseEnglish" />
Line 171: <meta name="twitter:creator" content="@ImpulseEnglish" />
Line 244: <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-TDC7CQDD"
```

### Verified: Current hardcoded locations in SEOHead.tsx

```
Line 18: const SITE_NAME = 'Impulse English Academy La Vaguada – Barrio del Pilar';
Line 19: const BASE_URL = 'https://impulse-english.es';
Line 36: author = 'Impulse English Academy',  (default param value)
Line 42: document.title = fullTitle ? title : `${title} | ${SITE_NAME}`;
Line 77: setMetaTag('publisher', SITE_NAME);
Line 82: setLinkTag('canonical', canonical.startsWith('http') ? canonical : `${BASE_URL}${canonical}`);
Line 90: setMetaTag('og:site_name', SITE_NAME, true);
Line 93: setMetaTag('og:url', canonical.startsWith('http') ? canonical : `${BASE_URL}${canonical}`, true);
```

### Verified: Current broken webmanifest

```json
{
  "name": "Impulse English Academy",
  "short_name": "Impulse English",
  "icons": [
    { "src": "/images/optimized/favicon-192x192.png" },   ← 404 (dir deleted Phase 3)
    { "src": "/images/optimized/apple-touch-icon.png" }   ← 404 (dir deleted Phase 3)
  ]
}
```

### Verified: Correct favicon paths (exist in public/)

```
/images/favicons/apple-touch-icon.png     ✓ exists
/images/favicons/favicon-16x16.png        ✓ exists
/images/favicons/favicon-192x192.png      ✓ exists
/images/favicons/favicon-32x32.png        ✓ exists
```

### Verified: NAP.website already exists in napData.ts

```typescript
// Line 32 of napData.ts — no new field needed for BASE_URL substitution
website: "https://impulse-english.es",
```

---

## Runtime State Inventory

Not applicable — this is a code/config refactor phase. No runtime systems, databases, or registered services embed the tracking IDs or brand strings that are being moved. The tracking IDs are present in HTML source served to browsers but are not stored in any database or registered service that requires a data migration.

---

## Environment Availability

Step 2.6: SKIPPED (no external dependencies identified — this phase modifies TypeScript/JavaScript/JSON source files and extends an existing Node.js CLI using already-installed packages).

---

## Validation Architecture

nyquist_validation is `false` in `.planning/config.json` — this section is skipped.

---

## Execution Order (Recommended)

The safest order preserves a valid Astro build at each commit:

1. **Extend napData.ts** — add `siteTitle`, `social.xHandle`, `tracking` fields. Build passes (no consumers use them yet, but `as const` typing is now available).

2. **Update BaseLayout.astro** — import NAP, delete `SITE_NAME`/`BASE_URL` constants, substitute all usages, add `define:vars` to tracking script block, update twitter meta tags with `NAP.social.xHandle`, update author default. Build passes.

3. **Update SEOHead.tsx** — import NAP, delete the three constants, substitute all usages. Build passes (TypeScript compilation in both main project and seo-system).

4. **Fix site.webmanifest** — update icon paths and brand name manually (the template's production values). This is a static edit. Build passes.

5. **Extend onboard-client.js** — add xHandle question to category 5, add tracking category 9, add `generateWebmanifest()` function, add webmanifest to draftFiles/backupMap/promotionMap, update `generateNapData()` to include new fields. No build impact.

6. **Verification** — run `npm run onboard --skip-build` with test data and grep the output files for "Impulse", "G-WN5973VY1M", "AW-11461982741", "GTM-TDC7CQDD". Expect zero matches.

---

## Open Questions

1. **seo-system Vite config — does it alias `components/` from website root?**
   - What we know: seo-system uses `../../utils/images` relative path for cross-boundary imports (Phase 2 decision)
   - What's unclear: Whether SEOHead.tsx is imported by seo-system pages currently, and whether adding a napData import breaks seo-system's Vite build
   - Recommendation: Before modifying SEOHead.tsx, confirm the import resolution by checking seo-system's vite.config and which pages import SEOHead.tsx

2. **onboard-client.js test exports — do the new generators need test exports?**
   - What we know: Phase 4 added named exports (`export { generateBrandConfig, generateNapData, ... }`) for testability (STATE.md decision: "kept permanently since they don't affect runtime")
   - What's unclear: Whether `generateWebmanifest` should also be exported
   - Recommendation: Export `generateWebmanifest` alongside the existing exports — consistent with established pattern

---

## Sources

### Primary (HIGH confidence)

- Direct file reads: `BaseLayout.astro`, `SEOHead.tsx`, `site.webmanifest`, `napData.ts`, `onboard-client.js` — exact line numbers verified
- Astro `define:vars` documentation (core Astro feature, present since Astro 2.x, confirmed present in 5.x usage context)
- `public/images/favicons/` directory listing — favicon files verified to exist
- `.planning/config.json` — nyquist_validation: false confirmed

### Secondary (MEDIUM confidence)

- Phase decision log (STATE.md) — import path patterns for cross-boundary imports (`../utils/napData` vs `@/utils/napData`)
- Milestone audit (v1.0-MILESTONE-AUDIT.md) — gap definitions CRIT-01, CRIT-02, CRIT-04, BROKEN-01, BROKEN-03 with exact file/line references

---

## Metadata

**Confidence breakdown:**
- Standard stack: HIGH — zero new dependencies, all existing
- Architecture patterns: HIGH — direct file inspection, no assumptions
- Pitfalls: HIGH for #1-4, MEDIUM for #5 (build-time behaviour with placeholder IDs)

**Research date:** 2026-04-09
**Valid until:** 2026-05-09 (stable — no moving dependencies)
