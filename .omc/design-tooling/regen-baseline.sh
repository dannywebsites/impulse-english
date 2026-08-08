#!/bin/bash
# Regenerate the pre-design-pass baseline used by the blog no-leak and perf gates.
#
# The original 8.2MB dist/blog snapshot is NOT stored — it is deterministically
# reproducible from the branch point, which is more trustworthy than a stale copy.
# Uses a detached git worktree so your working tree is never disturbed.
#
#   ./regen-baseline.sh [OUT_DIR]      default OUT_DIR: ./baseline
#
# Takes ~1 min (npm ci in the worktree + one build).
set -euo pipefail

BASE_COMMIT="${BASE_COMMIT:-91af40c}"   # branch point of design/ui-refresh-non-blog
REPO="/Users/danny/Desktop/backup website Impuls Englisch "
SUB="March-Impulse-Web-e7ad8740054b4e468e95bc81e5e4c79f17b98c97"
OUT="${1:-$(cd "$(dirname "$0")" && pwd)/baseline}"
WT="$(mktemp -d)/impulse-baseline"

cleanup() { git -C "$REPO" worktree remove --force "$WT" 2>/dev/null || true; }
trap cleanup EXIT

echo "==> worktree at $BASE_COMMIT"
git -C "$REPO" worktree add --detach "$WT" "$BASE_COMMIT" >/dev/null

# node_modules is untracked, so reuse the main checkout's rather than reinstalling.
ln -s "$REPO/$SUB/node_modules" "$WT/$SUB/node_modules"

echo "==> building"
( cd "$WT/$SUB" && npm run build >/dev/null 2>&1 )

mkdir -p "$OUT"
rm -rf "$OUT/blog"
cp -R "$WT/$SUB/dist/blog" "$OUT/blog"
find "$WT/$SUB/dist/_astro" -name '*.js' -exec cat {} + | wc -c | tr -d ' ' > "$OUT/js-bytes.txt"

echo "==> baseline written to $OUT"
echo "    blog pages : $(find "$OUT/blog" -name '*.html' | wc -l | tr -d ' ')   (expect 98)"
echo "    JS bytes   : $(cat "$OUT/js-bytes.txt")   (expect 3594786)"
