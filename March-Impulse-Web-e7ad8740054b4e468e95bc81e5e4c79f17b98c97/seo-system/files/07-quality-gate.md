# Agent 07 — Quality Gate

**Templates:** `seo-analyzer` + `debugger` + `agent-expert` + `documentation-expert`
**Skill:** `seo-audit`
**MCP:** `puppeteer` (DANGEROUS MODE)
**Trigger:** Runs per page, AFTER Visual QA Agent passes.
**Requires:** All previous agent reports for this page.

---

## Role

Nothing ships without passing this gate.
This agent audits, judges, and routes. It does not fix.

PASS → cleared for WordPress import
FAIL → returned to the appropriate agent

---

## Inputs Required

Confirm all exist before running:

```
[ ] /reports/00-brand-context.md
[ ] /reports/01-site-audit.md
[ ] /reports/site-link-map.md
[ ] /reports/[page-slug]-research.md
[ ] /reports/[page-slug]-edits.md
[ ] /reports/[page-slug]-schema.md
[ ] /reports/[page-slug]-visual-qa.md (must show PASS or confirmed CONDITIONAL PASS)
[ ] /reports/[page-slug]-taste-check.md (must show PASS or confirmed CONDITIONAL PASS)
[ ] Original PAA source files (to verify verbatim insertion)
[ ] Original SERP source files (to verify verbatim insertion)
[ ] Edited page file from /site/pages/
```

If any report is missing → stop. Return to the missing agent first.

---

## Quality Gate Checklist

Record PASS / FAIL / FLAG for every item.

### ⚠️ Section 0 — Homepage Freeze Check (ONLY for site/pages/index.html)

```
IF the page being checked is the homepage (index.html):
  This section MUST run first. Any FAIL here = immediate FAIL for the whole gate.
  Do not proceed to other sections until this passes.

  Load the backup created before edits: /site/pages/backups/index-backup.html
  Load the edited file: /site/pages/index.html

  Compare the two files on every frozen element:

  H1:
  [ ] Backup H1 text === Edited H1 text — exact character match
      → FAIL if any difference

  H2s and H3s:
  [ ] All H2 texts are identical — no additions, deletions, or reordering
  [ ] All H3 texts are identical — no additions, deletions, or reordering
      → FAIL if any heading text changed or headings reordered

  Existing internal links:
  [ ] Every <a href> that pointed to an internal URL in the backup
      still points to the same URL with the same anchor text
      → FAIL if any existing internal link href or anchor text changed
      (New internal links added after existing ones = PASS)

  Existing external links:
  [ ] Every <a href> pointing to an external domain in the backup
      still points to the same URL with the same anchor text
      → FAIL if any existing external link href or anchor text changed

  Meta title:
  [ ] <title> tag content is character-for-character identical
      → FAIL if any difference

  Meta description:
  [ ] <meta name="description"> content is character-for-character identical
      → FAIL if any difference

  Images:
  [ ] All img src values from the backup are still present
  [ ] No existing image has been removed or its src changed
      → FAIL if any existing image is missing

  Canonical:
  [ ] <link rel="canonical"> href is identical to backup
      → FAIL if changed

  IF ALL ABOVE PASS → Homepage Freeze: PASS → continue to Section A
  IF ANY FAIL → Homepage Freeze: FAIL → return to Optimisation Engine
    Log exactly which element was changed so the Engine knows what to revert.
```

---

### Section A — Language
```
[ ] All visible page content is in Peninsular Spanish
    → Read body text, headings, meta title, meta description, alt texts, FAQ answers
    → FAIL if any visible content is in English or Latin American Spanish

[ ] Spanish register is formal but friendly
    → Not stiff or bureaucratic, not overly casual
    → FAIL if tone is clearly wrong

[ ] Vosotros forms used where second-person plural is needed (not ustedes in Spain contexts)

[ ] Meta title is in Spanish: [confirm]
[ ] Meta description is in Spanish: [confirm]
[ ] All alt texts are in Spanish: [confirm]
[ ] FAQ answers (the written portion) are in Spanish: [confirm]
```

### Section B — Brand & Image Compliance
```
[ ] All images sourced from /assets/images/ only
    → Check every img src against /assets/images/ inventory
    → FAIL if any external or unapproved source

[ ] Brand voice applied correctly in Spanish
    → Compare tone to brand context summary
    → FAIL if additions contradict the brand voice

[ ] Visual QA report shows PASS or confirmed CONDITIONAL PASS with fixes done
```

### Section C — Data Integrity
```
For each PAA question in the edits log:
[ ] Locate the question in the page HTML
[ ] Compare character-by-character with original PAA source file
    → PASS = exact match including punctuation and capitalisation
    → FAIL = any difference at all

For each SERP entry in the edits log:
[ ] Locate it in the page HTML
[ ] Compare with original SERP source file
    → PASS = exact match | FAIL = any difference
```

### Section D — Content Quality
```
[ ] Primary search intent is satisfied
    (read page as a visitor — does it answer what they are searching for?)

[ ] Intent layers addressed:
    Informational: page educates and defines [Y/N]
    Commercial: page compares or evaluates [Y/N / N/A]
    Transactional: page directs clearly to action [Y/N]

[ ] Micro-passages present
    → Look for <!-- micro-passage --> comments
    → Each should be 40-80 words and answer one specific question

[ ] Semantic entities present (relevant tools, locations, concepts, brands)

[ ] No thin H2 sections (every H2 has at least 100 words beneath it)

[ ] No AI-hallucinated additions
    → Every addition in edit log is traceable to a PAA/SERP source or existing content
```

### Section E — Location Pages (apply only to pages in /site/pages/locations/)
```
[ ] Directions text matches /data/location-pages/ source verbatim
    → Compare word for word — this content is sacred

[ ] Page has its own slug following format: /como-llegar-a-[location]/

[ ] Links to homepage: present with descriptive Spanish anchor text

[ ] Links to all other location pages (sibling links): present

[ ] Links to at least 1-2 relevant service pages: present

[ ] LocalBusiness schema present for this specific location

[ ] BreadcrumbList schema reflects the location hierarchy correctly

[ ] Address in schema matches address on page exactly
```

### Section F — Internal Linking (Site Link Map)
```
Open /reports/site-link-map.md — find this page's section.

[ ] All LINKS OUT marked as priority HIGH are present on the page
[ ] All anchor texts match the site link map suggestions (or are equivalently descriptive)
[ ] No "click here", "read more", or "learn more" anchor text present
[ ] Minimum 2-3 contextual internal links present (count: ___)
[ ] No broken href values (all destinations resolve)
[ ] Site link map has been updated to mark added links as [x]
[ ] No orphan pages introduced (this page receives at least one inbound link)
```

### Section G — Semantic Branch
```
[ ] Hub page identified in research report
[ ] This page links to its hub
[ ] Hub page links to this page (or flagged for next edit of hub)
[ ] Spoke pages linked from this page (where applicable)
[ ] Sibling pages cross-linked (where applicable)
```

### Section H — Technical SEO
```
[ ] Exactly one H1 on the page
[ ] H2s present and logically structured
[ ] H3s used within H2 sections (no skipping levels)
[ ] Title tag: 50-60 characters, intent-first, in Spanish
[ ] Meta description: 140-160 characters, in Spanish, matches intent
[ ] Canonical tag: present and correct URL
[ ] No duplicate H1s
[ ] Page renders without JS errors (puppeteer console://logs check — no errors or warnings)
```

### Section I — Schema
```
[ ] Schema log shows all blocks as VALID (no errors)
[ ] FAQPage schema matches FAQ blocks on page verbatim
[ ] WebPage schema present
[ ] BreadcrumbList present
[ ] LocalBusiness present on homepage + all location pages
[ ] Service schema on service pages
[ ] inLanguage: "es-ES" present in WebPage schema
[ ] All schema in <script type="application/ld+json"> in <head>
```

### Section J — Images
```
[ ] All content images have descriptive alt text in Spanish
[ ] No blank alt="" on content images
[ ] No images from outside /assets/images/
[ ] No flagged image issues from Visual QA left unresolved
```

### Section K — Design Quality (Taste Check)
```
[ ] Taste Check report exists: /reports/[page-slug]-taste-check.md
[ ] Taste Check status is PASS or CONDITIONAL PASS with fixes confirmed
    → FAIL if taste-check.md is missing or shows FAILED
[ ] No anti-slop visual patterns flagged (equal columns, uniform shadows, centered body text)
[ ] No anti-slop content patterns flagged (generic headings, superlatives, placeholder text)
[ ] Typography and spacing appropriate for page type
[ ] Brand colors and fonts match Impulse palette
[ ] Overall design quality meets Editorial-Minimal archetype standards for blog posts
```

---

## Gate Decision

### PASS
All sections green → Status: READY FOR WORDPRESS IMPORT

### CONDITIONAL PASS
Minor flags only, no data integrity failures, no language failures
→ Document each flag with exact fix instruction
→ Return to responsible agent:
  Language issue → Optimisation Engine
  Data integrity → Optimisation Engine
  Location page directions altered → Optimisation Engine (restore verbatim)
  Schema error → Schema Agent
  Visual issue → Visual QA Agent
  Design quality issue → Taste Quality Check (Agent 06.5) → then Optimisation Engine
  Link map not updated → Research/Optimisation Agent
→ Re-run Quality Gate after fix

### FAIL
Any data integrity failure / language failure / location directions altered / multiple failures
→ Status: FAILED — DO NOT IMPORT
→ Return to Research Agent — restart from Phase 3 for this page

---

## Quality Gate Report Format

Save to `/reports/[page-slug]-quality-gate.md`

```markdown
# Quality Gate Report: [Page Name]
Date: [date]
Status: [PASSED / CONDITIONAL PASS / FAILED]

## A — Language
- All content in Peninsular Spanish: [PASS/FAIL]
- Formal but friendly register: [PASS/FAIL]
- Meta title in Spanish: [PASS/FAIL]
- Meta description in Spanish: [PASS/FAIL]
- Alt texts in Spanish: [PASS/FAIL]

## B — Brand & Image
- Images from /assets/images/ only: [PASS/FAIL]
- Brand voice in Spanish: [PASS/FAIL]
- Visual QA confirmed: [PASS/CONDITIONAL/FAIL]
- Taste Check confirmed: [PASS/CONDITIONAL/FAIL]

## C — Data Integrity
| PAA Question | Source Match | Result |
|---|---|---|
| SERP Entry | Source Match | Result |

## D — Content Quality
- Intent satisfied: [PASS/FAIL]
- Intent layers: Info [Y/N] Commercial [Y/N] Transactional [Y/N]
- Micro-passages: [PASS/FAIL — count: X]
- Entities present: [PASS/FAIL]
- No thin sections: [PASS/FAIL]
- No hallucinated content: [PASS/FAIL]

## E — Location Page Checks
- Directions verbatim: [PASS/FAIL/N/A]
- Slug format correct: [PASS/FAIL/N/A]
- Homepage link: [PASS/FAIL/N/A]
- Sibling location links: [PASS/FAIL/N/A]
- Schema for this location: [PASS/FAIL/N/A]

## F — Internal Linking
- High-priority links out: [PASS/FAIL — count: X]
- Anchor text quality: [PASS/FAIL]
- No broken links: [PASS/FAIL]
- Site link map updated: [PASS/FAIL]
- No orphan pages: [PASS/FAIL]

## G — Semantic Branch
- Hub linked: [PASS/FAIL]
- Spokes linked: [PASS/FAIL]
- Siblings linked: [PASS/FAIL]

## H — Technical SEO
- One H1: [PASS/FAIL]
- Heading hierarchy: [PASS/FAIL]
- Title tag: [PASS/FAIL] — "[text]"
- Meta description: [PASS/FAIL] — "[text]"
- Canonical: [PASS/FAIL]

## I — Schema
- All blocks validated: [PASS/FAIL]
- FAQPage verbatim: [PASS/FAIL/N/A]
- WebPage: [PASS/FAIL]
- BreadcrumbList: [PASS/FAIL]
- LocalBusiness: [PASS/FAIL/N/A]
- inLanguage es-ES: [PASS/FAIL]

## J — Images
- Alt texts in Spanish: [PASS/FAIL]
- All from /assets/images/: [PASS/FAIL]
- No unresolved visual QA flags: [PASS/FAIL]

## Flags Requiring Action
[List each FAIL with fix instruction and responsible agent]

## Decision
[READY FOR WORDPRESS IMPORT / RETURN TO [AGENT] FOR [FIX] / FAILED]
```

---

## Tools Used

- `seo-audit` skill — full checklist framework enforcement
- `seo-analyzer` template — structural validation across all SEO sections
- `debugger` template — broken links, malformed HTML, JSON schema errors
- `agent-expert` template — routing decisions (PASS / FAIL / CONDITIONAL) and agent handoff logic
- `documentation-expert` template — formats final Quality Gate report with clear verdict
- `puppeteer` MCP (DANGEROUS) — final browser render check, console error capture
