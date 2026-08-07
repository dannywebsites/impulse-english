# _CONTRACT.md — the rules every window obeys

Read this once, at the start of your window. It is the same for all 13 windows. Your own
`W##.md` carries the per-article research; this file carries everything shared.

Batch: **42 new articles + 27 fixes**, run across 13 parallel windows on the night of
2026-08-07. Source of truth for the research:
`GEO-Content-Project/blog-batch-2026-08-writer-brief.md` (you do **not** need to read it — your
brief quotes the parts that concern you).

---

## 1. Where things are

| What | Path |
|---|---|
| Skill (run all commands from here) | `~/.claude/skills/seo-blog-writer` |
| Brand config | `brands/impulse-english.brand.json` |
| Your topics subset | `topics/impulse-2026-08-w##.json` |
| Site repo | `/Users/danny/Desktop/backup website Impuls Englisch /March-Impulse-Web-e7ad8740054b4e468e95bc81e5e4c79f17b98c97` |
| Articles land here | `<site>/src/content/articles/<slug>.md` |
| Fix targets (prose) | `<site>/pages/blog/<Name>Page.tsx` |
| Fix targets (title/meta) | `<site>/src/pages/blog/<slug>.astro` |
| Slug map (cross-linking contract) | `GEO-Content-Project/blog-batch-windows/_SLUG-MAP.md` |
| Ledger (append your lines) | `GEO-Content-Project/blog-batch-windows/_LEDGER.md` |

The site path has a **trailing space** in the parent folder name. Quote it every time.

---

## 2. Voice and audience

Peninsular Spanish, **tú** (never *vosotros* for a single reader, never *ustedes*, never
Latin-American vocabulary). Parent-facing for the family articles, reader-facing for the adult
ones. Audience: parents of children in infantil, primaria and ESO in Madrid Norte, plus adults
who need English for work.

Spain vocabulary: ordenador, móvil, coche, vale. Not computadora, celular, carro.

---

## 3. Facts you may state (and only these)

- **Group sizes:** 7 infantil · 10 primaria · 10 secundaria · 8 adultos · 8 online · 1:1
  particulares. The exact figure, never a range, never the adjective alone.
- **Prices:** 64 / 83 / 87 / 94 € al mes · matrícula **45 €** · libro **máx. 40 €** ·
  particulares 29 €/hora
- **960 alumnos** since 2023 (not "+1.000") · **183 reseñas**, 5,0 (not 180, not "150+")
- **Prueba de nivel:** 25 minutes, free, in person, run by **JP** (Director de Estudios)
- **100 aprobados** de Cambridge · **100% de aprobados** in B2 First 2024/25 and 2025/26
- Centro Preparador Oficial Cambridge (accredited to December 2026) and official Linguaskill
  centre. Barrio del Pilar, next to La Vaguada.
- Timetable: L/X 10:00–21:30 · M/J 15:30–21:30 · V 13:30–19:30

**Never:**

- ❌ A **denominator** for the "100% de aprobados" claim. We do not know the cohort size.
  "100% de aprobados" is fine. "100% de 40 alumnos" is invented.
- ❌ **Rewording a Google review.** If a quote does not fit, pick a different review.
- ❌ **Naming or linking a competing academy.** (The one existing article that does is F27, and
  it is flagged, not edited.)
- ❌ Inventing a statistic, a study, or a source. If you need a number you do not have, leave it
  out and write a `FLAG:` line in the ledger.

**Cambridge exam fees are approved for publication** (Danny, 2026-08-07) — but **attribute every
fee to the exam centre and the date it applies from**. Madrid centres currently run a
`Hasta 31/07/26` / `Desde 01/08/26` split, so an unattributed number goes stale within weeks.
Add a "conviene revisarlo cada año" line wherever you publish fees.

---

## 4. The CTA

Every article ends on the free **25-minute prueba de nivel** with JP → then the matching course
page (`/cursos-ingles/infantil|primaria|secundaria|adultos|online|particulares/`).

**Exception:** infantil articles get the **1-hour trial class**, never the prueba de nivel.

Prueba de nivel page: `/prueba-de-nivel-ingles/`

---

## 5. AI Overviews and PAA

Your brief marks **AI Overview: YES/NO** per article. Where it is YES:

- Answer the headline question **in the first 80 words, under 300 characters**, as a plain
  factual statement. That is the passage Google lifts when it cites a source.
- Do not open with scene-setting. Answer first, expand after.
- Do not paraphrase Google's own AI Overview — that gives nobody a reason to click.

**PAA questions in your brief were copied verbatim from the live Madrid SERP on 2026-08-07.**
Use them as FAQ `###` headings, keeping the `¿` and `?` exactly. Aim for **at least half** your
FAQ verbatim. Google's *questions* are stable; its *answers* are volatile — never copy Google's
answer text, write ours.

The ≥50% PAA gate is **relaxed for this batch** (Danny, 2026-08-07). Six articles have no PAA
box at all or a polluted one; those FAQs are written by hand on purpose and your brief says so
per article.

---

## 6. Categories — the landmine

`PAAArticlePage.tsx:58` does `categoryConfig[article.category] ?? categoryConfig['Cambridge B2 First']`.
An unregistered category does **not** error. It silently becomes "Cambridge B2 First", and that
wrongness propagates to the badge, the hub link **and the GHL lead source**, so leads get
misattributed.

Your topics subset already carries a validated category per article. **Use it. Never invent one.**
The 17 registered values are:

```
Cambridge B2 First · Cambridge C1 Advanced · Cambridge B1 Preliminary · Cambridge A2 Key
Linguaskill · Comparison · Learning Methods · Skills · Kids Early Childhood · Kids Primary
Kids Secondary · Career · Local Madrid · Price · Definitions · Inglés en el extranjero
Niveles de inglés
```

---

## 6b. Do not use `--format listicle` on this batch

The skill has a ranked-listicle mode. **No article in these 42 uses it.** Its contract puts the
brand at **entry 1** of the ranking, and none of our list-shaped topics can honestly carry that:

- Article 42 ranks **exam centres** in Madrid. Impulse is a *preparation* centre, not an exam
  centre — heading that list would assert something untrue.
- Article 39 ranks **certificates**. Impulse is not a certificate.
- Articles 23 and 30 are explicitly *questions to ask before you pay*, never a ranking of rivals.
- Articles 18 and 41 compare two **exams**, not two businesses.

Listicle mode is for the "mejores academias de <barrio>" pieces, which belong to a different
batch. If a topic here feels list-shaped, write it as a guide with a comparison table.

## 7. Images

`rotate-images.js --pool academy` strides a **36-photo** filtered pool by 3, so there are only
**12 distinct sets** and the index band decides the audience:

| index | photos | use for |
|---|---|---|
| 0, 1 | infantil | infantil articles only |
| 2, 3 | primaria | primaria, Young Learners |
| 4 | primaria + JP + Cambridge certificate | exam articles about younger children |
| 5, 6, 7 | secundaria | ESO, teens, the "for Schools" family |
| 8, 9, 10 | adults, one-to-one, certificates, facilities | adults, price, generic |
| **11** | **two logos** (`img-4117-1.png`, `esic-idiomas.jpg`) | **never — a logo is not a photo** |

Your brief assigns an index per article. **Photo repetition across the batch is expected and
approved** — the pool is 36 real photos for 42 articles. What is *not* acceptable is an infantil
photo on a teen or adult article: read the rotated alt text and check.

Never use Ireland/extranjero photos (`--pool ireland`) — consent is scoped to the travel section.
Never invent an image path. Never use a stock or AI-generated image.

---

## 8. Internal linking

`_SLUG-MAP.md` has all 44 slugs and their URLs. Other windows are writing those files right now,
so **link to the pinned URL even if the file does not exist yet** — it will by morning.

- Every article links **up** to the hub, `/blog/guia-niveles-ingles-a1-c2/` (already live).
- Most articles link to the conversion node, `/blog/prueba-nivel-ingles-25-minutos/`.
- Every article links to **at least two** others: one up, one sideways.
- Each URL at most once per article. Descriptive anchor text, never "haz clic aquí".

---

## 9. Parallel-safety rules — breaking these damages another window's work

1. **Never `node scripts/assemble.js --all`.** It picks up every unpublished `article.md` under
   `runs/`, including the half-written one another window is editing right now. Always
   `--run runs/<id>`.
2. **Never re-run `prewrite.js` without `--run runs/<existing-id>`.** `runId()` timestamps every
   invocation, so a bare re-run mints a fresh directory and re-pays for the whole SERP + research
   pass. And **always re-run `rotate-images.js` after a resume** — resume regenerates
   `images.json` from brand defaults and would ship the wrong photos.
3. **Always pass `--slug <pinned>` to assemble.** The generated slug comes from a Gemini call and
   is not deterministic; without the pin you mint a new URL and orphan the one in `_SLUG-MAP.md`
   that other windows already linked to.
4. **Never `git add <directory>`.** Untracked `.bak-*` twins and Desktop-sync `* 2.md`
   duplicates sit beside the sources and get committed silently. Stage explicit paths only.
   If you hit `index.lock`, wait a few seconds and retry once.
5. **Never run `npm run build`, `npm run verify:design`, `astro check` or `rm -rf dist`.** One
   shared working tree; 13 concurrent builds clobber each other. A single serialized gate pass
   runs these after every window reports.
6. **Never edit another window's files** — not its run dir, not its articles, not the brand
   config, not the skill scripts.

---

## 10. Flag, never block

Nobody is awake to answer a question. If you cannot proceed on an article — a boundary you cannot
hold against an existing page, a fact you would have to invent, a gate you cannot pass — **do not
stop and do not guess.** Append a line to `_LEDGER.md`:

```
FLAG  W03  art-19  boundary  Could not hold "hub only" against escala-cambridge; needs Danny's call
```

Then move to your next article. A flagged article is a good outcome. A silently duplicated one is
not.

---

## 11. Before you commit each article

- [ ] `validation.json` has **zero errors** (warnings: fix or note in the ledger)
- [ ] `category:` is one of the 17 · `url:` matches the pinned slug
- [ ] `paaAnswer:` is a real answer, not the H1 *(regression check — this bug was fixed 2026-08-07)*
- [ ] every `alt:` is in Spanish, and no em/en dash anywhere in the file
- [ ] `articleImages` ≥ 3, and no infantil photo on a teen/adult article
- [ ] ≥ half the FAQ headings verbatim from your brief's PAA list, `¿`/`?` intact
- [ ] the approved facts only, no invented denominator, no reworded review, no rival named
- [ ] exam fees carry centre + effective date
- [ ] the CTA is there (infantil → 1-hour trial class, everyone else → 25-min prueba de nivel)
- [ ] ≥ 2 internal links, one of them the hub
- [ ] the first 80 words answer the question where AI Overview: YES

Commit message shape:

```
feat(blog): <article title>

<one line on the evidence: target keyword, volume, what the GSC data said>

Co-Authored-By: Claude Opus 5 (1M context) <noreply@anthropic.com>
```

Then append to `_LEDGER.md`:

```
DONE  W01  art-01  test-cambridge-hijo-preparado  runs/<id>  <commit-sha>  2380w  0 errors
```

---

## 12. Known gotchas, all of them

- `paaAnswer` used to pick up the H1 — fixed 2026-08-07 in `cms-impulse-astro.js`. Check anyway.
- The brand-default hero `alt` used to be English with an em dash — fixed 2026-08-07 in
  `lib/images.js`. It only ever appeared when `rotate-images.js` was skipped. Do not skip it.
- `BaseLayout` appends the brand chain to `title=` and hard-truncates at 70 chars (the theme cuts
  at 41). Only relevant to the fix windows: use `fullTitle={true}` and ≤ 60 chars.
- Desktop sync breeds `index 2.html` / `* 2.md` duplicates. Never glob-stage; ignore them.
- If you see `[research] firecrawl failed → apify fallback` in prewrite output, note it in the
  ledger. The Apify account is at its spending cap and the fallback may return nothing.
- `verify:design` does **not** scan `pages/blog/*.tsx`, so the fix windows carry no token-debt
  risk. It *does* scan `components/PAAArticlePage.tsx` — do not touch that file.
