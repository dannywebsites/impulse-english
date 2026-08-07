# DESIGN.md — the design system, and how not to drift off it

> **Read this before writing any page markup.** Gate: `npm run verify:design`.

## Why this file exists

August 2026: seven service pages shipped with correct content and poor presentation —
no eyebrow/rule headers, prose on `leading-relaxed` instead of `.t-body` (inconsistent line
spacing), text links instead of buttons so there was nothing to click below the hero, Google
reviews rendered as bare blockquotes with no stars and no Google mark, and a paragraph about JP
with no photo of JP — **while `jp-director-estudios.webp` was already in the repo and the barrio
pages already did all of it correctly**.

Nothing was missing. It just wasn't reused. That is the failure mode this file and the gate exist
to prevent.

**The rule: look for it before you write it.** The pattern you need almost certainly exists in
`src/index.css`, `components/`, or `pages/ubicaciones/`.

---

## 1. Tokens — never hand-roll these

Defined in `src/index.css` under `@layer components`.

| Need | Use | Never |
|---|---|---|
| Page container | `.container-page` (wide) · `.container-narrow` (prose) | `container mx-auto max-w-4xl` |
| Section rhythm | `.section-lead` · `.section` · `.section-tight` | `py-16`, `py-20`, `py-12` |
| Alternating band | `.surface-alt` · `.surface-deep` · `.surface-ink` | `bg-zinc-50`, gradient washes |
| Headings | `.t-display` `.t-h1` `.t-h2` `.t-h3` | `text-4xl md:text-6xl font-bold` |
| Body copy | `.t-body` (1.7) · `.t-lede` (section intro) · `.t-small` | `text-zinc-600 leading-relaxed` |
| Section label | `.eyebrow` + `.rule` | a bare `<h2>` |
| Card | `.card` · `.card-interactive` · `.card-quiet` · `.card-inverse` | `bg-white rounded-xl border shadow-md` |
| Button | `.btn-primary` `.btn-secondary` `.btn-outline` `.btn-on-dark` (+ `.btn-lg` `.btn-sm`) | a styled `<a>` with `rounded-lg py-3 bg-…` |
| Shadow | `shadow-card` `shadow-lift` `shadow-cta` `shadow-panel` | `shadow-md` |
| Reading measure | `.measure` (68ch) | `max-w-prose` |

**Section header pattern**, used everywhere:

```jsx
<div className="mb-10 max-w-2xl">
  <span className="eyebrow mb-4">Precios y ubicación</span>
  <h2 className="t-h2 mb-5 text-zinc-900">Cuánto cuesta el curso</h2>
  <span className="rule"></span>
</div>
```

## 2. Components — compose, don't rewrite

| Component | Use for |
|---|---|
| `GoogleReviews` | Any block of Google reviews. Stars, Google mark, avatar, profile link. Exports `GoogleMark` for reuse. |
| `TeacherCard` | "Quién da las clases". JP's photo + prose. Never a bare paragraph. |
| `PriceLocationCards` | Price beside address/hours/transport. NAP renders from `napData`. |
| `QuickFacts` | The strip under the hero: **price first**, group size, address, WhatsApp. |
| `CTABand` | Mid-page conversion band. At least two per page below the hero. |
| `OptimizedImage` | Responsive images registered in `src/data/images.ts`. |
| `FAQSection` · `LeadForm` · `Breadcrumb` · `Footer` | As they already are. |

**Reference implementations:** `pages/ubicaciones/MirasierraPage.tsx` (teacher block, review card,
review CTA) and `components/TestimonialsSection.tsx` (Google mark, star row, review badge).

## 3. Hard rules

- **Never `dangerouslySetInnerHTML` in `pages/`.** `geo-audit.py`'s `strip_code` matches `<[^>]+>`,
  so on `<p … __html: "…prose…<strong>` it eats from `<p` to the first `>` and swallows the
  sentence. Copy written that way is invisible to the auditor and scored as absent. Write JSX.
- **Copy that a gate reads must live in the page**, not the component. `verify_quotes.py` and
  `geo-audit.py` read `pages/**/*.tsx`. Pass reviews, prices and prose in as props/children.
  If you must move a marker into a component, teach the auditor to follow imports — both
  `geo-audit.py` (`imported_component_sources`) and `verify-design/run.mjs` already do.
- **Facts come from a single source.** NAP from `utils/napData.ts`. Prices and group sizes from
  `PreciosPage.tsx` + `GEO-Content-Project/Business-Information.txt`. Group size is **per course**:
  infantil 7 · primaria 10 · secundaria 10 · adultos 8 · online 8 · particulares 1:1. Never quote a
  range on a page about one course.
- **Reviews are verbatim.** Never reword one; pick a different review. `verify_quotes.py --dist`
  is the gate.
- **Amber, not yellow**, for stars: `fill-amber-400 text-amber-400`.

## 4. Before you ship

```bash
npm run verify:design                                   # errors fail; debt must not grow
npm run build && npx astro check                        # 0 errors, 0 warnings
python3 ../GEO-Content-Project/geo-audit.py --set servicios   # and --set barrios
python3 ../GEO-Content-Project/reviews/verify_quotes.py --dist
```

Then read the built page, not the source: check `dist/` at **390 px and 1440 px**. Titles and
metas are verified from `dist/` too — the `.astro` `title=` prop is a theme, not the final title.

**Lighthouse: four runs, not one.** A single cold run on a just-started static server reported
CLS 0.154 where four runs read 0.080.

## 5. Paying down the debt

`npm run verify:design` records token debt per file in `scripts/verify-design/baseline.json`
(currently **793** across 21 components — it predates the design system). It fails if any file gets
worse. When you touch a file, convert its raw utilities, then:

```bash
npm run verify:design -- --list              # see what's left
npm run verify:design -- --update-baseline   # record the improvement
```

---

## 6. Blog — the contract between the writer and the template

This section is **read by the `seo-blog-writer` skill** (`brands/impulse-english.brand.json` →
`design.briefPath`) and surfaced into every run's `write-context.md`. It is this client's copy of
the blog design brief. A new client gets their own, in their own repo — nothing about the blog's
appearance lives in the skill.

### Who owns what

Blog articles are **not** hand-built pages. The writer produces a markdown body; `assemble.js`
converts it to `contextSections[].content` as HTML strings; `components/PAAArticlePage.tsx` renders
every one of them. So:

- **The template owns all appearance.** Typography, spacing, colour, section rhythm, CTAs.
- **The writer owns structure and words only.** It emits semantic markup and nothing else.

The writer must never try to style anything. Inline styles, decorative separators, emoji section
markers and ASCII rules are the AI tell, not a substitute for a design system.

### The markup a writer may emit

The template styles exactly this set through `.article-prose`. Anything outside it renders
unstyled, because the article body is injected HTML and no utility class reaches inside it.

| Tag | Treatment |
|---|---|
| `<p>` | 17px / 1.7, `.measure` (68ch) |
| `<h3>` `<h4>` | `.t-h3` / small caps. **Never `<h2>`** — the section heading is supplied separately by `contextSections[].heading` |
| `<ul>` `<ol>` | disc / decimal, accent-blue markers |
| `<table>` `<thead>` `<tbody>` `<th>` `<td>` | Accent-blue rule under the header row, hairline row separators. **HTML tables only** (`brand.useHtmlTables: true`) — markdown tables do not survive the HTML conversion |
| `<strong>` | Semibold, zinc-900 |
| `<a>` | `.link-inline`. Internal links are root-relative (`/cursos-ingles/primaria/`); external links only to allow-listed authorities |
| `<blockquote>` | Brand-red left rule, italic |

**Never** `<h1>` (the template renders `article.question`), `<h2>`, `<img>` (image placement is
decided by `images.json`, not by the body), `<style>`, `<div>`, or any `class`/`style` attribute.

### What the template adds around the words

Do not write these into the body; they already exist and will duplicate:

- hero with breadcrumb, category eyebrow, read time and date
- the "Respuesta directa" card, from `paaAnswer`
- alternating `.surface-alt` bands between sections
- inline images after sections 2 and 4, from `images.json`
- a mid-article `<CTABand>`, the "Te puede interesar" links, the Impulse CTA band with `LeadForm`,
  `FAQSection`, related articles, and the back-to-hub link

### Anti-AI checklist for an article

The subset of the playbook that applies to a blog piece. The full split of writer laws versus page
laws is in `~/.claude/skills/seo-blog-writer/references/anti-ai-playbook.md`.

- [ ] Written from the run's evidence (`brief.md`, `serp.json`, `sources/`), never from memory
- [ ] Every image `src` is in `images.json` — an invented path is a blocking error
- [ ] Every external link is an allow-listed authority; **never** a competitor
- [ ] Reviews and figures verbatim and sourced, or absent
- [ ] Paragraphs of five sentences or fewer; sentence length varied
- [ ] No em dashes, no banned words, no `<h1>`/`<h2>`, no inline styling
