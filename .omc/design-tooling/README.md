# Design-pass tooling — non-blog UI refresh

Verification harness for branch `design/ui-refresh-non-blog`. Lives here (untracked,
outside `March-Impulse-Web-.../`) so it survives session clears without entering the repo.

## Files

| File | What it does |
|---|---|
| `gate.py` | De-slop gate. Strips `<script>`, `<style>` and HTML comments first, so tracking-script prose and build comments never inflate counts. Fails on any `bg-gradient`, generic `shadow-md/lg/xl/2xl`, em/en dash in visible text, or pure black. |
| `in-scope-routes.txt` | The 34 in-scope dist paths. Excludes the 14 non-`/blog/` URLs rendered by `pages/blog/*.tsx`. |
| `shots.mjs` | Playwright screenshots at 390px + 1440px with a horizontal-overflow probe. |
| `regen-baseline.sh` | Rebuilds the pre-change baseline from commit `91af40c` in a detached worktree. |

## Running

All paths are relative to `March-Impulse-Web-e7ad8740054b4e468e95bc81e5e4c79f17b98c97/`.

```bash
npm run build
python3 /path/to/.omc/design-tooling/gate.py /path/to/.omc/design-tooling/in-scope-routes.txt
```

`shots.mjs` imports `playwright-core`, so it must be **copied into the project directory**
to resolve — running it from here fails with `ERR_MODULE_NOT_FOUND`:

```bash
cp .omc/design-tooling/shots.mjs "$SUB/.shots.tmp.mjs"
cd "$SUB" && npm run preview &          # serves on :3000, NOT :4321
BASE=http://localhost:3000 OUT=/tmp/shots ROUTES='/,/precios/' node .shots.tmp.mjs
rm "$SUB/.shots.tmp.mjs"                # do not commit
```

## Baseline constants (commit `91af40c`, pre-design-pass)

Recorded so the no-leak and perf gates can be checked without regenerating anything:

- **JS total:** `3594786` bytes across `dist/_astro/*.js`
- **Blog pages built:** `98`
- **`LeadForm` legacy fingerprints** — each must appear on exactly **96** blog pages:
  - `bg-red-600 hover:bg-red-700`
  - `shadow-lg hover:shadow-xl`
  - `focus:ring-2 focus:ring-accent-blue focus:border-transparent`
- **`FAQSection` legacy fingerprints** — each must appear on exactly **34** blog pages:
  - `text-3xl font-bold text-zinc-900 mb-8 text-center`
  - `bg-white rounded-xl shadow-sm overflow-hidden`
- **Refresh-only classes that must never appear under `dist/blog`:**
  `btn-primary` `t-h2` `t-h3` `t-lede` `card-interactive` `section-lead` `surface-alt`
  `eyebrow` `shadow-card`

Run `./regen-baseline.sh` only if you need a full file-level diff of `dist/blog`.

## Tracking gate

`LeadForm`, `CoursePopup` and `BaseLayout` are tracking surfaces, so `verify:tracking`
must return ALL PASS. Point it at a local build so it tests the branch, not production:

```bash
cd "$SUB" && npm run preview &
VERIFY_SITE=http://localhost:3000 npm run verify:tracking
```

## Gotchas

- **zsh does not word-split unquoted variables** — list files explicitly in `sed`/`grep` loops.
- The shell's `grep` is **ugrep** and hangs on some regexes; use `/usr/bin/grep`.
- `npm run preview` serves on **:3000** (`astro.config.mjs` sets it), not the `:4321` the
  verify-tracking comment claims.
- `.omc/` is untracked but **not** gitignored — never `git add -A` from the repo root.
