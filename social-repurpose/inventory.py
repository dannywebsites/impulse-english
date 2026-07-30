#!/usr/bin/env python3
"""
inventory.py — probe every downloaded TikTok clip and write inventory.json.

Pairs each .mp4 with the .info.json yt-dlp wrote beside it, so the original
Spanish caption, view count and upload date survive into the caption generator.

Watermark check: yt-dlp's TikTok extractor labels the *watermarked* rendition
`download` and the clean ones `h264_*` / `bytevc1_*`. Default selection already
picks a clean one, but that is a property of the download, not a guarantee — so
every file is checked against the format it actually came from and flagged if it
came from the watermarked rendition.

What this does NOT detect: burned-in TikTok-editor captions. Those are baked into
the frames by the creator, no download flag removes them, and no probe sees them.
Assume they are present on this archive.

Usage
  python3 inventory.py                       # defaults to ./clips
  python3 inventory.py --clips /path/to/dir
"""

from __future__ import annotations  # system python3 is 3.9

import argparse
import json
import subprocess
import sys
from pathlib import Path

HERE = Path(__file__).resolve().parent
OUT_FILE = HERE / "inventory.json"

# Shorts and Reels both want vertical 9:16. Anything else needs a decision, not
# a silent pad, so it gets flagged rather than fixed.
TARGET_AR = 9 / 16
AR_TOLERANCE = 0.02
SHORTS_MAX_SECONDS = 180  # YouTube Shorts cutoff


def ffprobe(path: Path) -> dict:
    """Return the first video stream + format block, or {} if unreadable."""
    cmd = ["ffprobe", "-v", "error", "-select_streams", "v:0",
           "-show_entries", "stream=width,height,codec_name,r_frame_rate,pix_fmt",
           "-show_entries", "format=duration,size,bit_rate",
           "-of", "json", str(path)]
    try:
        out = subprocess.run(cmd, capture_output=True, text=True, timeout=60, check=True)
    except (subprocess.CalledProcessError, subprocess.TimeoutExpired) as e:
        print(f"  ! ffprobe failed on {path.name}: {e}", file=sys.stderr)
        return {}
    data = json.loads(out.stdout)
    stream = (data.get("streams") or [{}])[0]
    fmt = data.get("format", {})
    return {**stream, **fmt}


def read_info(mp4: Path) -> dict:
    """yt-dlp writes <stem>.info.json beside the video."""
    info_path = mp4.with_suffix("").with_suffix(".info.json")
    if not info_path.exists():
        info_path = mp4.parent / f"{mp4.stem}.info.json"
    if not info_path.exists():
        return {}
    try:
        return json.loads(info_path.read_text(encoding="utf-8"))
    except (json.JSONDecodeError, OSError):
        return {}


def main():
    ap = argparse.ArgumentParser(description=__doc__,
                                 formatter_class=argparse.RawDescriptionHelpFormatter)
    ap.add_argument("--clips", type=Path, default=HERE / "clips")
    args = ap.parse_args()

    if not args.clips.is_dir():
        raise SystemExit(f"No clips directory at {args.clips}")

    mp4s = sorted(args.clips.glob("*.mp4"))
    if not mp4s:
        raise SystemExit(f"No .mp4 files in {args.clips}. Download the archive first.")

    clips, flags = [], {"watermarked": [], "not_vertical": [], "too_long": [], "no_metadata": []}

    for mp4 in mp4s:
        probe = ffprobe(mp4)
        if not probe:
            continue
        info = read_info(mp4)

        w, h = int(probe.get("width", 0)), int(probe.get("height", 0))
        duration = float(probe.get("duration", 0) or 0)
        ar = (w / h) if h else 0
        fmt_id = str(info.get("format_id", "")).lower()

        # `download` is yt-dlp's label for TikTok's watermarked rendition.
        watermarked = fmt_id == "download" or "watermark" in fmt_id

        entry = {
            "file": mp4.name,
            "path": str(mp4),
            "width": w, "height": h,
            "aspect_ratio": round(ar, 4),
            "duration_s": round(duration, 2),
            "codec": probe.get("codec_name"),
            "pix_fmt": probe.get("pix_fmt"),
            "size_mb": round(int(probe.get("size", 0)) / 1_048_576, 2),
            "format_id": info.get("format_id"),
            "watermarked": watermarked,
            "needs_upscale": h < 1920,
            # TikTok metadata — the original Spanish copy is reusable as a starting point.
            "tiktok_id": info.get("id"),
            "tiktok_title": info.get("title"),
            "tiktok_description": info.get("description"),
            "upload_date": info.get("upload_date"),
            "view_count": info.get("view_count"),
            "like_count": info.get("like_count"),
        }
        clips.append(entry)

        if watermarked:
            flags["watermarked"].append(mp4.name)
        if abs(ar - TARGET_AR) > AR_TOLERANCE:
            flags["not_vertical"].append(mp4.name)
        if duration > SHORTS_MAX_SECONDS:
            flags["too_long"].append(mp4.name)
        if not info:
            flags["no_metadata"].append(mp4.name)

    out = {
        "clips_dir": str(args.clips),
        "count": len(clips),
        "flags": flags,
        "clips": clips,
    }
    OUT_FILE.write_text(json.dumps(out, indent=2, ensure_ascii=False) + "\n", encoding="utf-8")

    heights = sorted({c["height"] for c in clips})
    durations = [c["duration_s"] for c in clips]
    print(f"{len(clips)} clips in {args.clips}")
    print(f"  heights   : {heights}")
    print(f"  duration  : {min(durations):.1f}s – {max(durations):.1f}s")
    print(f"  need upscale to 1080x1920: {sum(c['needs_upscale'] for c in clips)}")
    for name, items in flags.items():
        marker = "!" if items and name != "no_metadata" else " "
        print(f"  {marker} {name:14}: {len(items)}" + (f"  {items[:3]}" if items else ""))
    if not flags["watermarked"]:
        print("\n  No watermarked renditions — yt-dlp picked clean formats.")
    print("\n  Burned-in TikTok-editor captions are NOT detectable here; assume present.")
    print(f"\nWrote {OUT_FILE}")


if __name__ == "__main__":
    main()
