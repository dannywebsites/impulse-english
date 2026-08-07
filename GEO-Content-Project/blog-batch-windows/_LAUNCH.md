# _LAUNCH.md — how to run the night

**13 windows. 42 new articles + 27 fixes.** Open a fresh Claude Code window per line below and paste
the line. Each brief is fully self-contained — no prior context needed, and no window needs to read
the 754-line batch brief.

## The 13 launch lines

```
Read and execute /Users/danny/Desktop/backup website Impuls Englisch /GEO-Content-Project/blog-batch-windows/W01.md
Read and execute /Users/danny/Desktop/backup website Impuls Englisch /GEO-Content-Project/blog-batch-windows/W02.md
Read and execute /Users/danny/Desktop/backup website Impuls Englisch /GEO-Content-Project/blog-batch-windows/W03.md
Read and execute /Users/danny/Desktop/backup website Impuls Englisch /GEO-Content-Project/blog-batch-windows/W04.md
Read and execute /Users/danny/Desktop/backup website Impuls Englisch /GEO-Content-Project/blog-batch-windows/W05.md
Read and execute /Users/danny/Desktop/backup website Impuls Englisch /GEO-Content-Project/blog-batch-windows/W06.md
Read and execute /Users/danny/Desktop/backup website Impuls Englisch /GEO-Content-Project/blog-batch-windows/W07.md
Read and execute /Users/danny/Desktop/backup website Impuls Englisch /GEO-Content-Project/blog-batch-windows/W08.md
Read and execute /Users/danny/Desktop/backup website Impuls Englisch /GEO-Content-Project/blog-batch-windows/W09.md
Read and execute /Users/danny/Desktop/backup website Impuls Englisch /GEO-Content-Project/blog-batch-windows/W10.md
Read and execute /Users/danny/Desktop/backup website Impuls Englisch /GEO-Content-Project/blog-batch-windows/W11.md
Read and execute /Users/danny/Desktop/backup website Impuls Englisch /GEO-Content-Project/blog-batch-windows/W12.md
Read and execute /Users/danny/Desktop/backup website Impuls Englisch /GEO-Content-Project/blog-batch-windows/W13.md
```

## What each window holds

| Window | Work | n | Notes |
|---|---|---|---|
| W01 | articles 1, 4, 5, 6, 7 | 5 | Group 1 core. Article 1 is the biggest keyword in the batch (5.400/mo, zero impressions today). |
| W02 | articles 8, 10, 16, 17 | 4 | Cambridge logistics for parents. |
| W03 | articles 9, 19, 20, 21, 22 | 5 | **Highest care.** Sits on 16 B2 + 12 C1 existing articles. Flags rather than stops. |
| W04 | articles 11, 12, 13, 14 | 4 | The school-stage ladder. Best parent hook in the batch. |
| W05 | articles 15, 29, 32, 33 | 4 | **Writes article 29 first** — the conversion node everything links into. |
| W06 | articles 23, 24, 25, 26 | 4 | Parent decision moments. Zero-volume by design; judge on enquiries. |
| W07 | articles 18, 27, 28, 39 | 4 | Trinity, EBAU, summer, the certificate landscape. |
| W08 | articles 30, 31, 34, 37, 38 | 5 | Adults, commercial. Holds the 13,34 € CPC term. |
| W09 | articles 35, 36, 40, 44 | 4 | Adults, routes back in. Two carry real fact risk. |
| W10 | articles 41, 42, 43 | 3 | GSC gap remainder. No supplied PAA — uses the live pull. |
| W11 | fixes F7, F1, F2, F4, F5, F6, F9, F10 | 8 | **Start here if you only run one.** F7 is a one-line title fix against 391 wasted impressions. |
| W12 | fixes F17, F13/F8, F11, F12, F16, F14, F15 | 7 | The B2/C1 cluster. Three deferral decisions already made. |
| W13 | fixes F18–F21, F28, F25, F26, F23, F22 + flags F24, F27 | 11 | Two cannibalisation pairs, two flag-only pages. |

**Cheapest-first order if you want the highest return before the rest finishes:** W11, then W05
(article 29), then W01.

## Already done, before the windows open

- **Article 2** `/blog/guia-niveles-ingles-a1-c2/` — the hub. Live, committed (`249a996`).
- **Article 3** `/blog/fechas-examenes-cambridge-2026-27/` — live, committed, and repaired: wrong
  category, `paaAnswer` was the H1, unrotated images with an English hero alt.

That is why the batch is **42 new**, not 44.

## What is deliberately NOT in tonight's work

- **F3 `examen-cae-cambridge`** — the site's worst page (1,056 imp, 0 clicks). Not patched. W03's
  article 20 replaces it and flags it for consolidation.
- **F24 `examenes-cambridge-guia`** and **F27 `mejores-academias-madrid-norte`** — flagged, not
  edited. F27 names seven rivals and contradicts the approved facts.
- **The 12 `.astro`-shadowed pages staying off the design system.** Danny's ruling: edit in place.
  They keep their hand-rolled Tailwind rather than moving onto the rebuilt `PAAArticlePage`.
- **The three service pages that actually cause the family zero-click problem** —
  `/academias-ingles-madrid/ninos/` (pos 42–78), `/cursos-ingles/infantil/` (18–37),
  `/cursos-ingles/primaria/` (36). No blog article fixes that. Separate job.

## In the morning

No window builds. Run the gate once, serially, from
`GEO-Content-Project/blog-batch-windows/_LEDGER.md`'s checklist:

```bash
cd "/Users/danny/Desktop/backup website Impuls Englisch /March-Impulse-Web-e7ad8740054b4e468e95bc81e5e4c79f17b98c97"
rm -rf dist && npm run build
npm run verify:design
```

Then reconcile the ledger against `git log --oneline`, grep `dist/` for a sample of the new URLs, and
**link the service pages down into the new cluster** — that step was skipped for the extranjero batch
and left 21 articles orphaned.
