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
