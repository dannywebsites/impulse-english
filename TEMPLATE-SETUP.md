# Template Setup Guide

How to clone this project for a new client website.

---

## Step 1: Clone and Rename

```bash
cp -r "backup website Impuls Englisch " "new-client-project"
cd "new-client-project"
rm -rf .git
git init
```

## Step 2: Update brand-config.ts

This is the **first and most important file** to change. It controls the brand voice, CTA text, impulse section templates, and content rules.

**File:** `brand-config.ts` (project root)

Change:
- `companyName`, `shortName`, `tagline`
- `language` (e.g., `es-ES` for Spain, `en-US` for English, `es-MX` for Mexico)
- `pronouns` (e.g., `vosotros` for Spain, `ustedes` for LATAM, `you` for English)
- `voiceRegister` (formal-friendly, casual, professional, academic)
- `targetAudience` and `audienceSegments`
- `uniqueValue`, `socialProof`, `credentials`
- `primaryCta`, `secondaryCta`
- `impulseSectionTemplate` (the branded CTA paragraph in articles)
- `categoryTopicRef` (if the new business has different service categories)

## Step 3: Update napData.ts

**File:** `March-Impulse-Web-.../utils/napData.ts`

This is the **business identity file** — all Schema.org markup and page components pull from here.

Change ALL fields:
- Business name, address, phone, email, website
- Geo coordinates (latitude/longitude)
- Opening hours
- Social media profiles
- Areas served, transit info
- Credentials and aggregate rating
- Price range

## Step 4: Update buildPageTitle.ts

**File:** `March-Impulse-Web-.../utils/buildPageTitle.ts`

Change the 3 brand constants:
```typescript
const CORE_BRAND = 'Your Business Name';
const BARRIO_SUFFIX = 'Your Location';
const SHORT_BRAND = 'Short Name';
```

## Step 5: Install Claude Code Skills

Run the LeadGenJay skills installer:
```bash
curl -sL 'https://leadgenjay.com/api/skills/install.sh?items=cleanup,pr,nano-banana,motion-graphics,LGJ-graphics,icon-set-creator,hero-section-designer,taste,brand-voice,autolearn,design-motion-principles&email=YOUR_EMAIL' | bash
```

The 10 project-specific skills in `.claude/skills/` are already included in the template.

## Step 6: Review brand-voice-enforcer

**File:** `.claude/skills/brand-voice-enforcer/SKILL.md`

If the new client's language is different (e.g., English instead of Spanish):
- Update Section 1 (verb forms, vocabulary)
- Update Section 2 (add language-specific banned words)
- Update Section 5 (validation regex for the target language)

If the language is the same (Peninsular Spanish), no changes needed — the skill reads from `brand-config.ts`.

## Step 7: Update Auto-Publish Categories

**File:** `.claude/skills/auto-publish-pipeline/SKILL.md`

If the new business is in a different industry (not English academy):
- Update Section 8 `CATEGORY_RULES` regex patterns
- Update `INTERNAL_LINKS_BY_CATEGORY` with new page URLs
- Update `CTA_LINKS_BY_CATEGORY` with new CTAs
- Update `CATEGORY_HUB` with new breadcrumb hubs

If same industry, the existing categories work as-is.

## Step 8: Update vercel.json Redirects

**File:** `March-Impulse-Web-.../vercel.json`

- Remove all Impulse-specific redirects (WordPress migration, old URLs)
- Keep the structure: HSTS header, www redirect, 404 fallback
- Add redirects for the new client's old URL patterns (if migrating)

## Step 9: Update CLAUDE.md

**File:** `CLAUDE.md` (project root)

- Update the Project Overview section with the new client's description
- Update analytics IDs (GTM, GA4, Google Ads) in the deployment section
- Update the domain name references
- Keep the skill listings and workflow guide as-is

## Step 10: Update Analytics IDs

**File:** `March-Impulse-Web-.../src/layouts/BaseLayout.astro`

Replace:
- GTM container ID: `GTM-TDC7CQDD` with new client's GTM
- GA4 measurement ID: `G-WN5973VY1M` with new client's GA4
- Google Ads ID: `AW-11461982741` with new client's Ads ID (if applicable)

---

## Quick Reference: What to Change vs What's Portable

### Change Per Client
| File | What Changes |
|---|---|
| `brand-config.ts` | Brand identity, voice, CTAs |
| `utils/napData.ts` | Business address, phone, geo, hours |
| `utils/buildPageTitle.ts` | Brand name in page titles |
| `vercel.json` | Domain, redirects |
| `BaseLayout.astro` | Analytics IDs (GTM, GA4) |
| `CLAUDE.md` | Project description |

### Keep As-Is (Portable)
| File/Directory | Why |
|---|---|
| `.claude/skills/` (all 10) | Reference brand-config.ts, not hardcoded |
| `.claude/agents/` (all 6) | Generic development tools |
| `utils/schemaData.ts` | Reads from napData.ts dynamically |
| `src/content/config.ts` | Zod schema is industry-agnostic |
| `seo-writer/scripts/auto-publish.js` | Reads from brand-config.ts at runtime |
| `components/PAAArticlePage.tsx` | Renders any article data |
