# Consent record — Ireland trip photography

**Status: CLEARED for commercial website use.** Confirmed by Danny Fitzpatrick, 2026-08-06,
in response to a direct question about parental consent.

## Why this file exists

These 34 images show **identifiable minors**. Under GDPR and Spain's LOPDGDD, publishing them
on a commercial website needs consent from the parents or guardians — and posting to the
academy's own Facebook page is a *different purpose*, so it does not by itself transfer.

The sibling set in `new fotos/facebook-scrape/` (169 images) is recorded as
`consentCleared: false` and is **still gated**. Without this file, a future session would
reasonably assume the same gate covers these, and either re-block them or — worse — assume the
opposite for the gated set. The two decisions are separate and both are deliberate.

## What was confirmed

| | |
|---|---|
| Consent for commercial website use | Yes — Danny, 2026-08-06 |
| All 34 taken in Ireland | Yes — Danny, 2026-08-06 |
| Scope | The study-abroad section of impulse-english.es |

## Provenance and processing

- Source: photographs published by the academy on its own Facebook page, 2018–2025.
  Originals kept outside the repo in `en el extrangero/` (note: folder is spelled *extrangero*).
- Re-encoded to webp at max 1280px, quality 74. Re-encoding drops all metadata — verified
  with `sharp`: **no EXIF and no GPS** on the output. Facebook had already stripped EXIF on
  upload, so there was nothing to leak, but the check was run rather than assumed.
- Total payload 5.1 MB across 34 files, avg 153 KB.

## Rules for reuse

- **Do not reuse outside the study-abroad section** without re-checking the scope of consent.
  Consent for one context is not consent for advertising, social, or print.
- Naming the country is accurate for all 34. Naming a **specific activity** is only accurate
  where it is visible in the frame — 7 images were individually reviewed and carry specific
  alt text; the rest carry honest general descriptions. Do not invent an activity to make a
  caption livelier.
- If a family withdraws consent, delete the file here **and** its entry in
  `src/data/extranjeroImages.ts`, then rebuild. There is no other reference to remove.
