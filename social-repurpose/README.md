# social-repurpose

Republishes the dormant TikTok archive (`@impulse_english`, 262 clips, nothing since
2024-12-22) to **YouTube Shorts**, **X** and **Instagram Reels**, with every caption
written against a real Search Console gap and anchored inside a 5–6 km radius of
Barrio del Pilar.

**262 → 216 postable.** 40 are duets/reply-videos (another creator on screen, or a
stranger's comment) and 6 are TikTok photo/slideshow posts with no video stream —
`duration: None`, yt-dlp reports "No video formats found!" for every one, and they
cannot be published as Reels or Shorts. Both sets are excluded by rule, not by
hardcoded ID.

**Cadence:** YouTube + X 3/day over 72 days; Instagram 1/day over 216 days. 648 posts,
~90/month against Post for Me's 1,000/month.

Moved here from `DANNYS AI OPERATING SYSTEM/scripts/` on 2026-07-30, next to the GSC data
and the site the captions link to.

## Pipeline

```
yt-dlp  ──▶  clips/  ──▶  inventory.py  ──▶  inventory.json
                             │
             normalise.sh ───┤                gsc_pull.py ──▶ build_gap_map.py ──▶ gap-map.json
                             ▼                                        │
                     clips-normalised/                                ▼
                             └──────────────▶ build_captions.py ──▶ out/*.json
                                                                      │
                                                                      ▼
                                                              postforme.py post
```

| File | Does |
|---|---|
| `inventory.py` | ffprobe every clip + pair with its `.info.json` → `inventory.json`. Flags watermarked renditions, non-vertical, over-length. |
| `normalise.sh` | 576×1024 → 1080×1920 (lanczos + mild unsharp), h264/yuv420p, `+faststart`. Idempotent. |
| `build_gap_map.py` | Ranks radius barrios by *estimated monthly clicks left on the table*, not impressions → `gap-map.json`. |
| `build_schedule.py` | Three lanes (proven/mid/brand) → `schedule.json`. Slots rotate so no lane owns 07:30. |
| `build_captions.py` | Joins schedule × gap map × NAP → per-platform caption JSON in `out/`. |
| `hooks_manual.json` | Hooks read off burned-in captions via mid-point frame extraction. |
| `hooks_extra.json` | The 161 raw TikTok fragments rewritten as natural Spanish questions. |
| `postforme.py` | Post for Me REST client. Dry-run by default; `--privacy private` default. |
| `volumes.json` | Cached Google Ads volumes (Spain/es) so targeting decisions stay auditable offline. |

## Run it

```bash
# 1. refresh the gap map (GSC pull lives in the ops repo)
cd /Users/danny/Desktop/impulse-seo-ops && python3 gsc_pull.py --days 28
cd -                                     && python3 build_gap_map.py

# 2. clips
python3 inventory.py
./normalise.sh

# 3. schedule + captions
python3 build_schedule.py --start 2026-08-04
python3 build_captions.py

# 4. connect accounts (once) — Danny clicks each link
python3 postforme.py auth-url --platform youtube
python3 postforme.py auth-url --platform x
python3 postforme.py auth-url --platform instagram
python3 postforme.py accounts          # capture the three IDs into accounts.json

# 5. post a week — DRY RUN first, always
python3 postforme.py week --week 1
# add --confirm only when the payload is right
```

`accounts.json` is a plain map the `week` command reads:
`{"youtube":"acc_…","x":"acc_…","instagram":"acc_…"}`

## Titles and descriptions

**All 216 hooks are written** — `hooks_extra.json` holds the 161 rewritten from raw TikTok
fragments, `hooks_manual.json` the ones read off burned-in captions. Hand-written hooks are
used verbatim; only auto-seeded fragments get the `¿Sabes cómo se dice …?` wrapper.

Titles are natural Spanish questions carrying the keyword ("¿Cómo se pronuncia FEBRUARY en
inglés?") with a rotating geo suffix appended when it fits inside 100 chars. Phrasing is
varied on purpose — 216 titles all opening "¿Cómo se dice" would read as machine-stamped and
compete with each other in the same video block. All 216 are unique.

**YouTube descriptions lead with the academy**, because the first ~150 characters are the
Google snippet and that is the line doing the local-keyword work. **Instagram and X lead with
the question** — their fold is ~125 chars and a corporate opener there kills feed reach; the
geo still lands on line 2, inside the fold.

**No hashtags anywhere**, on any platform, in any field.

To change a title, edit `hooks_extra.json` and re-run `build_captions.py`.

## Things that will bite you

- **The archive is 540p and that is the ceiling.** No higher rendition exists on TikTok to
  re-download. `normalise.sh` upscales so the platforms hand it a better transcode ladder —
  it does not add detail.
- **Burned-in TikTok-editor captions are permanent.** They are in the pixels. Cropping them
  out would eat the subject. Accepted defect.
- **Reused-content risk is the real risk.** 216 backdated, 540p, burned-in-caption clips is
  a textbook reused-content profile on YouTube. The 72-day drip and a hand-triggered,
  watched first week are the controls. Everything posts **public** from day one — unlisted
  would hide the very signals worth watching.
- **Instagram and X have no private mode.** `--privacy` is YouTube-only. On those two the
  dry-run gate is the only guard.
- **The platform key is `x`, not `twitter`.** The API schema is named
  `TwitterConfigurationDto` but `PlatformConfigurationsDto` keys it `x`. Wrong key = silent no-op.
- **`youtube.localizations` is REQUIRED** by the API. Omitting it fails the whole request.
- **YouTube recording *location* is not exposed** by Post for Me (only `recording_date`).
  Setting it is a manual YouTube Studio step.
- **Never trim a clip.** `normalise.sh` only rescales; the 208 s video posts full length and
  is simply a regular YouTube video rather than a Short.
- **Impression counts in `gap-map.json` are seasonal.** July–August is the Spanish academy
  trough. The *ranking* is Google Ads volume-driven and stable; the impression columns are
  not. Re-run in September before reading trends.
- **Captions do not move the local pack.** YouTube titles/descriptions get indexed by Google
  and that is where the ranking value is. Instagram buys brand-search demand, not rankings.

## Prerequisites still open

1. Post for Me API key → `~/.ai-os/postforme.env` (mode 600), after `POSTFORME_API_KEY=`.
2. Which YouTube channel to connect (`@Impulse-English` exists, per `napData.ts`).
3. Instagram must be a Business/Creator account linked to a Facebook Page for API posting.
4. Confirm `@impulse_english` (archive) and `@impulse_english_lavaguada` (canonical, in
   `napData.ts`) are the same business.
5. **Sanchinarro has no page.** It is #2 on the opportunity ranking and takes 38 posts in the
   rotation, all of which currently link to the homepage. Building
   `academia-ingles-sanchinarro` is the cheapest neighbourhood win available — 30/mo,
   unranked, competitors already holding it inside the Las Tablas SERP.
