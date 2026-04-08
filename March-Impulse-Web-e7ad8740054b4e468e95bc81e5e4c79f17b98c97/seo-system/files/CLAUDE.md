# CLAUDE.md — SEO Site Optimisation System

---

## What This System Is

This is a **precision SEO optimisation engine** for an existing website.
It polishes, structures, and enriches existing content — it does NOT generate from scratch.

This system has four inputs it ALWAYS reads before doing anything:

1. `/brand/` — Brand identity, tone, messaging, and visual rules
2. `/data/paas/` — People Also Ask data (inserted verbatim, never rewritten)
3. `/data/serps/` — SERP snippet data (inserted verbatim, never rewritten)
4. `/data/location-pages/` — Exact directions for each academy location (one page per location)

The academy SEO knowledge (specific page content, copy, and course material)
is fed into sessions separately by the operator at the time of use.

---

## Language Rule — MANDATORY

```
ALL outputs produced by this system MUST be written in Spanish from Spain.
This applies to: all content additions, meta titles, meta descriptions,
FAQ answers, schema text fields, report files, page copy, and alt text.

Spanish standard: Peninsular Spanish (Spain)
Register: Formal but friendly — professional, clear, warm, never stiff
Vocabulary: Spanish from Spain — use vosotros, not vosotros alternatives
Tone: Matches the brand voice from /brand/ — applied in Spanish

The only exceptions are:
  - Schema JSON property names (these are always in English per schema.org standard)
  - HTML tag names and attributes (always in English per HTML standard)
  - File paths, folder names, and code (always in English)
  - Agent report headers and structure labels (English for system consistency)

NEVER mix Spanish and English within a sentence of visible page content.
NEVER use Latin American Spanish variants — this is Spain.
ALWAYS proofread additions for natural, fluent Peninsular Spanish.
```

---

## SEO Philosophy This System Enforces

**Coverage → Retrievability → Authority**

- **Coverage** — Does this page address the full semantic topic cluster, not just one keyword?
- **Retrievability** — Is this page structured so AI search engines can extract and cite it?
- **Authority** — Does this page signal trust through entities, E-E-A-T, schema, and links?

---

## Environment Variables

This system uses a `.env` file for API credentials.
Copy `.env.example` to `.env` and fill in your values before running any agent.

```
DATAFORSEO_LOGIN      ← Required for Technical Audit, Research, and Monitoring
DATAFORSEO_PASSWORD   ← Required for Technical Audit, Research, and Monitoring
DATAFORSEO_BASE_URL   ← Default: https://api.dataforseo.com/v3
GSC_CLIENT_ID         ← Optional: Google Search Console integration
GSC_CLIENT_SECRET     ← Optional
GSC_REFRESH_TOKEN     ← Optional
GSC_SITE_URL          ← Your site's verified URL in GSC
WP_SITE_URL           ← WordPress site URL for migration
WP_USERNAME           ← WordPress username
WP_APP_PASSWORD       ← WordPress application password
SITE_URL              ← Your site's public URL
SITE_LANGUAGE         ← es-ES
SITE_COUNTRY          ← ES
```

NEVER commit `.env` to version control. It is listed in `.gitignore`.

---

## Project Folder Structure

```
/brand/                    ← Brand context (READ BEFORE EVERY SESSION)
/data/paas/                ← PAA files — insert verbatim, never rewrite
/data/serps/               ← SERP files — insert verbatim, never rewrite
/data/location-pages/      ← Location directions document — one page per location
/assets/images/            ← Original approved images ONLY
/site/pages/               ← HTML files being optimised
/site/pages/backups/       ← Auto-backup before any edits
/site/pages/locations/     ← Generated location pages (one per academy location)
/site/schema/              ← Generated schema blocks for reference
/reports/                  ← All agent output reports saved here
/reports/site-link-map.md  ← Site-wide internal link map (built by Audit, updated by all agents)
.env                       ← API credentials (never commit)
.env.example               ← Template — safe to commit
.gitignore                 ← Protects .env and backups from version control
```

---

## Pipeline Agents (custom — in /agents/)

| Agent | File | Role |
|---|---|---|
| Brand Reader | 00-brand-reader.md | Reads /brand/ — always runs first |
| Audit Agent | 01-audit-agent.md | Maps all files, PAAs, SERPs, builds site-link-map |
| Technical Audit Agent | 01b-technical-audit-agent.md | 13-point technical check via Puppeteer + DataForSEO |
| Location Pages Agent | 02-location-pages-agent.md | Builds all location pages from /data/location-pages/ |
| Research Agent | 03-research-agent.md | Per-page brief — intent, entities, PAA/SERP mapping |
| Optimisation Engine | 04-optimisation-engine.md | Executes all page edits — only agent that touches files |
| Schema Agent | 05-schema-agent.md | Generates, validates, and inserts all structured data |
| Visual QA Agent | 06-visual-qa-agent.md | Mobile/desktop rendering, JS errors, image checks |
| Taste Quality Check | 06.5-taste-quality-check.md | Design quality enforcement — anti-slop, brand consistency, typography |
| Quality Gate | 07-quality-gate.md | Final gate — nothing exports without PASS |
| WP Migration Agent | 08-wp-migration-agent.md | WordPress import, post-launch verification |

## Template Agents (from claude-code-templates — loaded at session start)

| Template | Primary Use in Pipeline |
|---|---|
| `mcp-expert` | MCP connection management — WordPress, Puppeteer debugging |
| `content-marketer` | Powers Optimisation Engine content polishing |
| `seo-analyzer` | Powers Audit Agent, Technical Audit, Quality Gate |
| `debugger` | Powers Schema Agent JSON validation and HTML error detection |
| `academic-researcher` | Powers Research Agent intent and semantic analysis |
| `mcp-server-architect` | WordPress MCP endpoint configuration and troubleshooting |
| `research-coordinator` | Powers Research Agent multi-page coordination |
| `agent-expert` | System-wide orchestration — routes tasks between agents |
| `context-manager` | Maintains session state across long multi-page runs |
| `task-decomposition-expert` | Breaks complex pages into sequential agent sub-tasks |
| `documentation-expert` | Structures all report outputs, audit logs, and changelogs |
| `task-planner` | Pipeline sequencing and priority queue management |
| `search-ai-optimization-expert` | GEO layer — AI Overview, featured snippet, micro-passage optimisation |

---

## Installed Skills

| Skill | Source | Where Used |
|---|---|---|
| `seo-optimizer` | claude-code-templates | All agents — core SEO rule enforcement |
| `content-creator` | claude-code-templates | Optimisation Engine — writing within SEO + brand constraints |
| `seo-audit` | claude-code-templates | Audit Agent + Technical Audit + Quality Gate |
| `schema-markup` | claude-code-templates | Schema Agent — generation and validation templates |
| `responsive-qa` | custom `/skills/` | Visual QA Agent — mobile/desktop layout standards |
| `taste` | installed `/skills/taste/` | Taste Quality Check — anti-slop, design quality, brand consistency |
| `dataforseo` | custom `/skills/` | Technical Audit + Research Agent — live API data |

---

## Installed MCP Tools

| Tool | Source | Use |
|---|---|---|
| `puppeteer` | `@modelcontextprotocol/server-puppeteer` | Primary browser engine — all 13 technical checks, schema validation, QA, SERP |
| `playwright-mcp-server` | claude-code-templates | Secondary viewport rendering, fallback browser checks |
| `browser-use-mcp-server` | claude-code-templates | AI-assisted browsing, Rich Results Test, AI Overview detection |

Puppeteer install:
```bash
claude mcp add puppeteer -- npx -y @modelcontextprotocol/server-puppeteer
```
Puppeteer mode: DANGEROUS (`ALLOW_DANGEROUS=true` in `.env`)
Puppeteer tools: `puppeteer_navigate`, `puppeteer_evaluate`, `puppeteer_screenshot`, `puppeteer_click`, `puppeteer_fill`, `puppeteer_hover`, `console://logs`

**Tool priority:** Puppeteer is primary. Playwright and browser-use are fallback and supplementary.
Use `search-ai-optimization-expert` + `browser-use-mcp-server` together for AI Overview and GEO checks.

---

## Agent Activation Order

```
1. BRAND READER              → /agents/00-brand-reader.md
2. AUDIT AGENT               → /agents/01-audit-agent.md
   (builds /reports/site-link-map.md)
2B. TECHNICAL AUDIT AGENT    → /agents/01b-technical-audit-agent.md
   (requires .env with DataForSEO credentials)
   (saves /reports/01b-technical-audit.md)
3. LOCATION PAGES AGENT      → /agents/02-location-pages-agent.md
   (run once — builds all location pages)
4. RESEARCH AGENT            → /agents/03-research-agent.md  [per page]
5. OPTIMISATION ENGINE       → /agents/04-optimisation-engine.md  [per page]
6. SCHEMA AGENT              → /agents/05-schema-agent.md  [per page]
7. VISUAL QA AGENT           → /agents/06-visual-qa-agent.md  [per page]
7B. TASTE QUALITY CHECK      → /files/06.5-taste-quality-check.md  [per page]
   (requires: Visual QA passes, brand-context report)
8. QUALITY GATE              → /agents/07-quality-gate.md  [per page]
9. WP MIGRATION AGENT        → /agents/08-wp-migration-agent.md  [per page]
```

No agent runs without the previous one's output report confirmed.

---

## Absolute Rules

### Language Rules
```
ALL visible page content MUST be written in formal but friendly Peninsular Spanish
ALWAYS use Spanish from Spain — vosotros forms, Spain-specific vocabulary
NEVER use Latin American Spanish variants
NEVER mix languages within visible page content sentences
Schema property names, HTML, file paths, and code remain in English
Agent report structure labels remain in English for system consistency
```

### Brand Rules
```
ALWAYS read /brand/ at the start of every session before taking any action
ALWAYS apply brand tone and voice — expressed in Peninsular Spanish
NEVER use images from any source other than /assets/images/
NEVER add placeholder, stock, or AI-generated images
NEVER alter the meaning or tone of existing brand content
```

### Homepage Protection Rules — HARD FREEZE ⚠️

```
The homepage (site/pages/index.html) is a LIVE, RANKING PAGE.
It has established search positions that depend on its current structure.
The following are PERMANENTLY FROZEN and must NEVER be altered:

FROZEN — DO NOT TOUCH:
  ✗ All existing body copy and paragraph text
  ✗ All existing H1 (there is exactly one — do not alter a single word)
  ✗ All existing H2s and H3s — text, order, and hierarchy are frozen
  ✗ All existing internal links — href values and anchor text are frozen
  ✗ All existing external links — href values and anchor text are frozen
  ✗ Meta title tag — frozen (page is ranking with this title)
  ✗ Meta description — frozen (do not alter)
  ✗ Existing images — do not remove, reorder, or swap
  ✗ Existing canonical tag — do not alter the URL

PERMITTED on the homepage:
  ✓ ADD new internal links to pages that did not exist when the homepage was built
    (new location pages, new blog posts — added contextually, never replacing existing links)
  ✓ ADD new external links to credible sources where they fit naturally
  ✓ INSERT micro-passages (40-80 words) into existing sections — additive only
  ✓ INSERT PAA FAQ blocks — added after existing content in the most relevant section
  ✓ ADD or EXPAND schema in <head> — new FAQPage blocks, expanded LocalBusiness fields
  ✓ ADD hreflang tags if missing
  ✓ ADD author/publisher meta if missing

WHAT THIS MEANS IN PRACTICE:
  The Optimisation Engine may only APPEND and INSERT on the homepage.
  It may not DELETE, REPLACE, or REORDER any existing element.
  The Research Agent must flag the homepage as PROTECTED in its report.
  The Quality Gate must verify the frozen elements are unchanged before passing.

If there is ever a conflict between an SEO improvement and the homepage freeze:
  THE FREEZE WINS. Log the conflict in the edit report and leave the element untouched.
```

### Location Pages Rules
```
ALWAYS read /data/location-pages/ before building any location page
Each location entry in that document = exactly one location page on the website
Directions content is SACRED — insert exactly as provided, never rewrite
Every location page must have: LocalBusiness schema, directions content,
  Service schema for services at that location, internal links to homepage
  and relevant service pages, and links FROM homepage and service pages back to it
Location pages are part of the hub-and-spoke structure:
  Homepage = hub | Location pages = spokes
```

### SEO Content Rules
```
ALWAYS confirm primary search intent before editing
ALWAYS identify the semantic branch this page belongs to
ALWAYS check the page covers the full intent cluster
ALWAYS add micro-passages (40-80 words) answering specific sub-questions
ALWAYS include semantic entities naturally
NEVER add content without a clear, named SEO purpose
NEVER rewrite existing content unless it violates an SEO principle
```

### Internal Linking Rules
```
ALWAYS consult /reports/site-link-map.md before editing any page
ALWAYS update /reports/site-link-map.md after completing any page
ALWAYS add minimum 2-3 contextual internal links per page
ALWAYS use anchor text that describes the destination topic clearly
ALWAYS implement hub-and-spoke: hub pages link to ALL spoke pages in the branch
ALWAYS add sibling links between location pages (each location links to other locations)
NEVER use "click here", "read more", or "learn more" as anchor text
NEVER link to the same page twice on one page
NEVER leave orphan pages — every page must have links in AND links out
```

### Structural Rules
```
ALWAYS maintain H1 → H2 → H3 hierarchy — never skip levels
ALWAYS write title tags: 50-60 characters, intent-first, in Spanish
ALWAYS write meta descriptions: 140-160 characters, in Spanish
ALWAYS add canonical tags to every page
NEVER duplicate H1s
```

### Technical Rules
```
ALWAYS validate schema before inserting
ALWAYS back up page files before editing
ALWAYS check for broken links before marking a page done
NEVER ship without valid schema, internal links, canonical tag, meta description
```

### Image Rules
```
ONLY use images from /assets/images/
ALWAYS write descriptive alt text in Spanish
ALWAYS verify images are correctly sized and optimised
NEVER use external, stock, or AI-generated images
```

---

## Prohibited Actions

```
NEVER optimise a page without first running the Research Agent
NEVER build a location page without reading /data/location-pages/ first
NEVER rewrite directions content — insert exactly as provided
NEVER skip the site-link-map update after completing a page
NEVER publish in English where Spanish is required
NEVER use Latin American Spanish
NEVER keyword-stuff headings
NEVER leave orphan pages
NEVER skip the Quality Gate

HOMEPAGE-SPECIFIC (site/pages/index.html):
NEVER alter existing copy, headings, links, images, meta title, or meta description
NEVER reorder any existing section or element
NEVER delete anything that currently exists on the homepage
NEVER replace an existing link's href or anchor text
Only APPEND and INSERT — the homepage grows, it does not change
```

---

## Page Priority Queue

1. Homepage
2. Location pages (all of them — built by Location Pages Agent before other pages)
3. Primary service/product pages
4. Supporting blog/cluster content
5. All remaining pages

---

## Definition of Done

A page is DONE when:

- [ ] Written in formal but friendly Peninsular Spanish
- [ ] Brand rules applied
- [ ] Research Agent report completed before edits
- [ ] PAA data inserted verbatim
- [ ] SERP data inserted verbatim
- [ ] Semantic branch mapped (hub identified, spokes linked)
- [ ] All intent layers addressed
- [ ] Micro-passages present (40-80 words)
- [ ] H1 → H2 → H3 hierarchy correct
- [ ] Schema valid and inserted
- [ ] Canonical tag present
- [ ] Title tag and meta description written in Spanish
- [ ] Minimum 2-3 contextual internal links
- [ ] Hub-and-spoke linking confirmed
- [ ] Site link map updated
- [ ] Images from /assets/images/ only, alt text in Spanish
- [ ] Mobile and desktop layout passed
- [ ] Quality Gate: PASSED
- [ ] Page report saved to /reports/
- [ ] Cleared for WordPress import
