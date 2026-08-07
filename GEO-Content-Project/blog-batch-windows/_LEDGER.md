# _LEDGER.md — append-only, one line per finished item

**Every window appends here.** Do not rewrite, reorder or tidy another window's lines — append at the
bottom of your window's section. This file is how the morning gate knows what actually happened, and
it is reconciled against `git log`.

Line formats:

```
DONE  W01  art-01  <slug>  runs/<run-id>  <commit-sha>  <words>w  <errors/warnings>
NOOP  W11  F07    <slug>   —              —            already answered the query, nothing to change
FLAG  W03  art-20  <kind>  <one line on what needs a human decision>
```

`FLAG` kinds in use: `boundary` (could not hold an angle apart from an existing page) ·
`consolidation` (a new page supersedes an old one) · `retire` · `frozen` (needs Danny's ruling) ·
`fact` (a number could not be verified) · `scope` (work identified but not done).

---

## Step 0 — prep (done before the windows opened)

```
DONE  W00  art-02  guia-niveles-ingles-a1-c2         runs/niveles-de-ingles-a1-a-c2-la-guia-comple-msj7s8l2  249a996  ~2300w  0 errors
DONE  W00  art-03  fechas-examenes-cambridge-2026-27  runs/fechas-de-los-examenes-cambridge-2026-27-msj1nadb  249a996  ~2900w  0 errors, 1 readability warning
```

Article 3 was re-assembled to fix three defects: `category` was "Cambridge B2 First" on a Local
Madrid piece, `paaAnswer` was the H1, and the images were unrotated brand defaults (English hero alt
with an em dash, plus an infantil photo on a Cambridge exam article). Rotated to index 4.

```
FLAG  W00  —  scope  Three assembled .md files sit in the skill output dir and were NOT shipped:
      guia-sistema-educativo-irlandes.md is a DUPLICATE SLUG of the live sistema-educativo-irlandes-guia.md
      (a re-assemble without --slug); mejores-academias-ingles-plaza-castilla.md and
      que-hacer-si-tu-hijo-odia-el-ingles.md belong to the local-30 batch, not this one. Danny's call.
FLAG  W00  —  scope  Three untracked .md files are sitting in src/content/articles/ uncommitted from
      another batch: mejor-academia-ingles-tetuan.md, mejor-academia-ingles-chamartin.md,
      mejores-academias-ingles-plaza-castilla.md. Not touched. Not ours to commit.
```

---

## W01 — Group 1 core (articles 1, 4, 5, 6, 7)

## W02 — Cambridge logistics (articles 8, 10, 16, 17)

## W03 — Consolidation hubs (articles 9, 19, 20, 21, 22)

## W04 — School-stage level ladder (articles 11, 12, 13, 14)

## W05 — Self-assessment + conversion asset (articles 15, 29, 32, 33)

## W06 — Parent decision moments (articles 23, 24, 25, 26)

## W07 — Exams, seasons, certificates (articles 18, 27, 28, 39)

## W08 — Adults, commercial (articles 30, 31, 34, 37, 38)

## W09 — Adults, routes back in (articles 35, 36, 40, 44)

## W10 — GSC gap remainder (articles 41, 42, 43)

## W11 — Fixes Tier A (F7, F1, F2, F4, F5, F6, F9, F10)

## W12 — Fixes Tier B i (F17, F13/F8, F11, F12, F16, F14, F15)

## W13 — Fixes Tier B ii (F18–F21, F28, F25, F26, F23, F22, + flags F24, F27)

---

## Morning gate (fill in at the end)

```
[ ] rm -rf dist && npm run build            green?
[ ] npm run verify:design                   no new structural errors, debt not above baseline?
[ ] verify_quotes.py                        (false-FAILs on Desktop-sync duplicates — read the paths)
[ ] article count in src/content/articles/  expected 61 + however many new tonight
[ ] every pinned slug resolves in dist/
[ ] no "Cambridge B2 First" badge on a non-B2 article
[ ] ledger reconciles against git log --oneline
[ ] service pages linked DOWN into the cluster (skipped for the extranjero batch — 21 orphans)
```
