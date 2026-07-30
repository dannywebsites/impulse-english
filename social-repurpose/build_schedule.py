#!/usr/bin/env python3
"""
build_schedule.py — decide which video posts where, on which day. Writes schedule.json.

Two independent tracks, because the platforms tolerate very different cadences:

  YouTube + X : 3/day for 74 days. Same trio each day, so one prepared clip serves both.
  Instagram   : 1/day for 222 days, its own ordering, deliberately offset from the
                YouTube/X track so a video does not hit every platform on the same day.

The YouTube/X track is a BLENDED MIX rather than "best first". Three lanes:

  proven  67  2020 archive, top half by TikTok views (floor ~23k)
  mid     67  2020 archive, bottom half
  brand   88  2022-24 "Inglés en Acción", the Impulse-branded series

Posting best-first would front-load the 2020 content and leave every brand video to the
final month, so the channel would read as a repost farm for ten weeks and only look like
an academy at the end. Blending fixes that. The lanes are uneven (67/67/88), so the
pattern is:

  60 days = 1 brand + 1 proven + 1 mid
  14 days = 2 brand + 1 archive
  -> 88 brand + 134 archive = 222 exactly, no remainder, both tracks run dry together.

Determinism: no randomness anywhere. Same input -> same schedule, so a re-run after
adding a clip produces a reviewable diff rather than a reshuffle.

Usage
  python3 build_schedule.py --start 2026-08-04
  python3 build_schedule.py --start 2026-08-04 --dry-run
"""

from __future__ import annotations  # system python3 is 3.9

import argparse
import json
import re
from datetime import date, datetime, timedelta
from pathlib import Path
from zoneinfo import ZoneInfo

HERE = Path(__file__).resolve().parent
ARCHIVE = HERE / "archive.jsonl"
OUT_FILE = HERE / "schedule.json"

# Europe/Madrid. Before the commute, after lunch, evening — the three windows a
# Madrid audience is actually on a phone.
SLOTS = ["07:30", "14:30", "20:30"]
TZ = "Europe/Madrid"
INSTAGRAM_SLOT = "18:00"
MADRID = ZoneInfo(TZ)


def stamp(d, hhmm: str) -> str:
    """ISO 8601 WITH the Madrid UTC offset.

    A naive "2026-08-10T20:30:00" is read as UTC by the API, which in August put
    every post two hours late (20:30 Madrid became 22:30). zoneinfo also handles the
    DST change this schedule crosses: +02:00 until 25 Oct 2026, +01:00 after.
    """
    return datetime.combine(d, datetime.strptime(hhmm, "%H:%M").time(),
                            tzinfo=MADRID).isoformat()

YOUTUBE_X_PER_DAY = 3
INSTAGRAM_PER_DAY = 1

# Duets show another creator's video; reply-videos show a stranger's comment. Neither
# stands alone and neither is ours to republish.
EXCLUDE_RE = re.compile(r"d[uú]o con|Responder a @|Reply to @", re.I)

BRAND_ERA_FROM = "20210101"


def load_keepers() -> list:
    """Returns (keep, excluded_duets, excluded_photos).

    Photo posts: six entries have `duration: None` where all 216 real videos have a
    duration. They are TikTok photo/slideshow posts, not videos — yt-dlp reports
    "No video formats found!" for every one, consistently, and impersonation does not
    help because there is no video stream to fetch. They also cannot be published as
    Reels or Shorts. Excluded by rule rather than by hardcoded ID, so the same thing
    happens automatically if more are added later.
    """
    rows = [json.loads(l) for l in ARCHIVE.read_text(encoding="utf-8").splitlines() if l.strip()]
    # Already published ad-hoc — never schedule them again.
    pub = HERE / "published.json"
    already = set(json.loads(pub.read_text(encoding="utf-8"))["video_ids"]) if pub.exists() else set()
    rows = [r for r in rows if r["id"] not in already]
    keep, duets, photos = [], [], []
    for r in rows:
        if EXCLUDE_RE.search(r.get("description") or ""):
            duets.append(r)
        elif not r.get("duration"):
            photos.append(r)
        else:
            keep.append(r)
    return keep, duets, photos


def lanes(keep: list):
    """Split into brand / proven / mid. Sorting is by views desc, then id, so ties are stable."""
    def views(r):
        return int(r.get("view_count") or 0)

    brand = [r for r in keep if (r.get("upload_date") or "") >= BRAND_ERA_FROM]
    archive = [r for r in keep if (r.get("upload_date") or "") < BRAND_ERA_FROM]
    brand.sort(key=lambda r: (-views(r), r["id"]))
    archive.sort(key=lambda r: (-views(r), r["id"]))
    half = len(archive) // 2
    return brand, archive[:half], archive[half:]


def build_youtube_x(brand, proven, mid, start: date) -> list:
    """Interleave the three lanes into 3-per-day, brand-heavy on the tail days."""
    brand, proven, mid = list(brand), list(proven), list(mid)
    total = len(brand) + len(proven) + len(mid)
    days = total // YOUTUBE_X_PER_DAY
    # Days that must take 2 brand instead of 1, so all three lanes empty together.
    extra_brand_days = len(brand) - days

    entries = []
    # Alternate which archive lane leads, so two weak days never sit back to back.
    lead_proven = True
    for d in range(days):
        day_items = []
        if extra_brand_days > 0 and d >= days - extra_brand_days:
            day_items.append(("brand", brand.pop(0)))
            day_items.append(("brand", brand.pop(0)))
            src = proven if (lead_proven and proven) or not mid else mid
            day_items.append(("proven" if src is proven else "mid", src.pop(0)))
        else:
            day_items.append(("brand", brand.pop(0)) if brand else None)
            first, second = (proven, mid) if lead_proven else (mid, proven)
            if first:
                day_items.append(("proven" if first is proven else "mid", first.pop(0)))
            if second:
                day_items.append(("proven" if second is proven else "mid", second.pop(0)))
            day_items = [x for x in day_items if x]
        lead_proven = not lead_proven

        when = start + timedelta(days=d)
        # Rotate which lane gets which slot. Without this the brand lane — the
        # lowest-performing one — would own 07:30 every single day, and the platform
        # would learn the channel underperforms in that slot. Rotating spreads each
        # lane across all three windows over a 3-day cycle.
        day_items = day_items[d % len(day_items):] + day_items[:d % len(day_items)]
        for slot_i, (lane, r) in enumerate(day_items):
            entries.append({
                "video_id": r["id"],
                "url": r["url"],
                "lane": lane,
                "date": when.isoformat(),
                "time": SLOTS[slot_i],
                "timezone": TZ,
                "scheduled_at": stamp(when, SLOTS[slot_i]),
                "platforms": ["youtube", "x"],
                "tiktok_views": int(r.get("view_count") or 0),
                "upload_date": r.get("upload_date"),
                "duration_s": int(r.get("duration") or 0),
            })
    # The archive is not always a multiple of 3 (publishing one ad-hoc leaves 215).
    # Rather than drop the remainder, give it one short final day.
    leftovers = [("brand", r) for r in brand] + [("proven", r) for r in proven] + \
                [("mid", r) for r in mid]
    if leftovers:
        when = start + timedelta(days=days)
        for slot_i, (lane, r) in enumerate(leftovers[:len(SLOTS)]):
            entries.append({
                "video_id": r["id"], "url": r["url"], "lane": lane,
                "date": when.isoformat(), "time": SLOTS[slot_i], "timezone": TZ,
                "scheduled_at": stamp(when, SLOTS[slot_i]),
                "platforms": ["youtube", "x"],
                "tiktok_views": int(r.get("view_count") or 0),
                "upload_date": r.get("upload_date"),
                "duration_s": int(r.get("duration") or 0),
            })
        leftovers = leftovers[len(SLOTS):]
    return entries, [r for _, r in leftovers]


def build_instagram(keep: list, start: date) -> list:
    """Own 222-day sequence. Strongest first — Instagram rewards an early strong signal
    far more than YouTube does, and there is no lane-balancing constraint here."""
    ordered = sorted(keep, key=lambda r: (-int(r.get("view_count") or 0), r["id"]))
    out = []
    for i, r in enumerate(ordered):
        when = start + timedelta(days=i)
        out.append({
            "video_id": r["id"],
            "url": r["url"],
            "date": when.isoformat(),
            "time": INSTAGRAM_SLOT,
            "timezone": TZ,
            "scheduled_at": stamp(when, INSTAGRAM_SLOT),
            "platforms": ["instagram"],
            "tiktok_views": int(r.get("view_count") or 0),
            "upload_date": r.get("upload_date"),
            "duration_s": int(r.get("duration") or 0),
        })
    return out


def main():
    ap = argparse.ArgumentParser(description=__doc__,
                                 formatter_class=argparse.RawDescriptionHelpFormatter)
    ap.add_argument("--start", required=True, help="first posting date, YYYY-MM-DD")
    ap.add_argument("--dry-run", action="store_true", help="print the summary, write nothing")
    args = ap.parse_args()

    try:
        start = datetime.strptime(args.start, "%Y-%m-%d").date()
    except ValueError:
        raise SystemExit("--start must be YYYY-MM-DD")

    keep, duets, photos = load_keepers()
    excluded = duets + photos
    brand, proven, mid = lanes(keep)
    yt_x, leftovers = build_youtube_x(brand, proven, mid, start)
    insta = build_instagram(keep, start)

    if leftovers:
        raise SystemExit(f"BUG: {len(leftovers)} videos unscheduled on the YouTube/X track")

    yt_days = sorted({e["date"] for e in yt_x})
    ig_days = sorted({e["date"] for e in insta})

    out = {
        "generated_start": start.isoformat(),
        "timezone": TZ,
        "totals": {
            "archive_total": len(keep) + len(excluded),
            "excluded_duets_replies": len(duets),
            "excluded_photo_posts": len(photos),
            "scheduled_videos": len(keep),
            "youtube_x_entries": len(yt_x),
            "youtube_x_days": len(yt_days),
            "instagram_entries": len(insta),
            "instagram_days": len(ig_days),
        },
        "lanes": {"brand": len(brand), "proven": len(proven), "mid": len(mid)},
        "youtube_x": yt_x,
        "instagram": insta,
        "excluded_video_ids": [r["id"] for r in excluded],
    }

    print(f"archive {len(keep)+len(excluded)} → {len(keep)} scheduled "
          f"({len(duets)} duets/replies + {len(photos)} photo posts excluded)")
    print(f"  YouTube+X : {len(yt_x)} entries over {len(yt_days)} days "
          f"({yt_days[0]} → {yt_days[-1]})")
    print(f"  Instagram : {len(insta)} entries over {len(ig_days)} days "
          f"({ig_days[0]} → {ig_days[-1]})")
    print(f"  lanes     : brand {out['lanes']['brand']}, proven {out['lanes']['proven']}, "
          f"mid {out['lanes']['mid']}")
    print(f"  total posts: {len(yt_x)*2 + len(insta)} "
          f"(YouTube {len(yt_x)} + X {len(yt_x)} + Instagram {len(insta)})")

    print("\nFirst 3 days on the YouTube/X track:")
    for e in yt_x[:9]:
        print(f"  {e['date']} {e['time']}  {e['lane']:6} {e['tiktok_views']:>8,} views  {e['video_id']}")

    if args.dry_run:
        print("\nDRY RUN — schedule.json not written.")
        return
    OUT_FILE.write_text(json.dumps(out, indent=2, ensure_ascii=False) + "\n", encoding="utf-8")
    print(f"\nWrote {OUT_FILE}")


if __name__ == "__main__":
    main()
