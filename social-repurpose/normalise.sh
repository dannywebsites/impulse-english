#!/usr/bin/env bash
# normalise.sh — bring the TikTok archive up to what Shorts and Reels expect.
#
# The archive is 576x1024 (TikTok's 540p ceiling — no higher rendition exists to
# re-download, this was verified against the source). Upscaling adds no detail.
# What it does buy: both platforms treat sub-720p uploads as low-quality source and
# hand them a worse transcode ladder, and Reels in particular letterboxes odd sizes.
# 1080x1920 is the native Shorts/Reels frame, so we hand them exactly that.
#
# lanczos is the sharpest of the practical scalers for integer-ish upscales; the
# light unsharp pass afterwards recovers some of the softness lanczos leaves.
# Values are deliberately mild — heavier settings make 540p source look processed.
#
# NOT fixed here: burned-in TikTok-editor captions. They are in the pixels. Cropping
# them out would eat the subject, so they stay. This is a known, accepted defect.
#
# Usage:
#   ./normalise.sh                    # clips/ -> clips-normalised/
#   ./normalise.sh in_dir out_dir

set -euo pipefail

HERE="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
IN_DIR="${1:-$HERE/clips}"
OUT_DIR="${2:-$HERE/clips-normalised}"

command -v ffmpeg >/dev/null || { echo "ffmpeg not found (brew install ffmpeg)" >&2; exit 1; }
[ -d "$IN_DIR" ] || { echo "No input directory: $IN_DIR" >&2; exit 1; }

mkdir -p "$OUT_DIR"

shopt -s nullglob
clips=("$IN_DIR"/*.mp4)
(( ${#clips[@]} )) || { echo "No .mp4 files in $IN_DIR" >&2; exit 1; }

echo "Normalising ${#clips[@]} clip(s): $IN_DIR -> $OUT_DIR"
ok=0; skipped=0; failed=0

for src in "${clips[@]}"; do
  name="$(basename "$src")"
  dst="$OUT_DIR/$name"

  # Idempotent: re-running after adding clips only encodes the new ones.
  if [ -f "$dst" ] && [ "$dst" -nt "$src" ]; then
    echo "  = $name (already normalised)"
    skipped=$((skipped+1))
    continue
  fi

  # scale to 1080 wide, force_original_aspect_ratio keeps 9:16 intact; the pad
  # is a no-op for true 9:16 source and prevents a crop on anything slightly off.
  if ffmpeg -nostdin -loglevel error -y -i "$src" \
      -vf "scale=1080:1920:force_original_aspect_ratio=decrease:flags=lanczos,\
pad=1080:1920:(ow-iw)/2:(oh-ih)/2:color=black,\
unsharp=5:5:0.6:5:5:0.0,format=yuv420p" \
      -c:v libx264 -preset slow -crf 20 -profile:v high -level 4.1 \
      -r 30 -g 60 \
      -c:a aac -b:a 128k -ar 44100 \
      -movflags +faststart \
      "$dst" 2>/dev/null; then
    before=$(du -h "$src" | cut -f1 | tr -d ' ')
    after=$(du -h "$dst" | cut -f1 | tr -d ' ')
    echo "  ✓ $name  ($before -> $after)"
    ok=$((ok+1))
  else
    echo "  ✗ $name — ffmpeg failed" >&2
    rm -f "$dst"
    failed=$((failed+1))
  fi
done

echo
echo "encoded: $ok   skipped: $skipped   failed: $failed"
[ "$failed" -eq 0 ] || exit 1

echo
echo "Verify one:  ffprobe -v error -select_streams v:0 \\"
echo "  -show_entries stream=width,height,codec_name,pix_fmt -of default=nw=1 \\"
echo "  \"$OUT_DIR/$(basename "${clips[0]}")\""
