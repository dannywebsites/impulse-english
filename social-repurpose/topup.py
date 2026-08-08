#!/usr/bin/env python3
"""
topup.py — work out what still needs scheduling, and write it as a schedule file.

Built 2026-08-02, after two things made the original one-shot schedule.json stale:

  1. Only 56 days of it were ever pushed to Post for Me. The queue runs dry on
     2026-09-24 — right before the September enrolment spike.
  2. The 21 watermarked 2022 clips were pulled out of the pool (see watermarked.json),
     which cancelled 19 already-scheduled YouTube/X posts and left gaps in August.

Rather than regenerate schedule.json from scratch — which would reshuffle every clip's
date and desync from the 193 posts already live in the API — this reads the **live queue**
and schedules only what is genuinely missing:

  * clips in the clean pool that are not in the queue on a given lane, and
  * the slots those clips can go into: first the gaps left by the cancellations, then
    fresh days after the lane's current last scheduled date.

The API is the source of truth for what is already scheduled, not schedule.json. That is
deliberate: schedule.json describes an intent, the queue describes reality, and after a
cancellation only reality is correct.

Output is `schedule-topup.json`, same shape as schedule.json, so:

    python3 postforme.py week --week 1 --schedule schedule-topup.json

works unchanged — including its idempotency check, which compares instants against the
live queue and skips anything already there.

Dry-run in the sense that matters: this writes a plan file and touches nothing remote.
"""

from __future__ import annotations

import argparse
import json
import re
import sys
import time
import urllib.request
from collections import Counter
from datetime import date, datetime, timedelta
from pathlib import Path
from zoneinfo import ZoneInfo

HERE = Path(__file__).resolve().parent
API_BASE = "https://api.postforme.dev/v1"
DEFAULT_ENV_FILE = Path.home() / ".ai-os" / "postforme.env"

TZ = "Europe/Madrid"
MADRID = ZoneInfo(TZ)
SLOTS = ["07:30", "14:30", "20:30"]
INSTAGRAM_SLOT = "18:00"
# Mid-morning on LinkedIn: the feed is a working-hours feed, not an evening one.
LINKEDIN_SLOT = "08:30"
YOUTUBE_X_PER_DAY = 3

# Same rules as build_schedule.py. Kept in sync by importing the archive and re-deriving
# rather than trusting a stale keeper list.
EXCLUDE_RE = re.compile(r"d[uú]o con|Responder a @|Reply to @", re.I)
BRAND_ERA_FROM = "20210101"


def stamp(d: date, hhmm: str) -> str:
    """Madrid-local ISO instant. Never build a naive one — the API reads naive as UTC,
    which is the bug that put the first 28 posts up two hours late."""
    return datetime.combine(d, datetime.strptime(hhmm, "%H:%M").time(),
                            tzinfo=MADRID).isoformat()


def load_api_key(env_file: Path | None) -> str:
    import os
    key = os.environ.get("POSTFORME_API_KEY", "").strip()
    if key:
        return key
    path = env_file or DEFAULT_ENV_FILE
    if path.exists():
        for line in path.read_text(encoding="utf-8").splitlines():
            if line.strip().startswith("POSTFORME_API_KEY="):
                return line.split("=", 1)[1].strip().strip("'\"")
    sys.exit(f"No API key. Set POSTFORME_API_KEY or put it in {path}.")


def fetch_all_posts(key: str) -> list:
    """Pagination here is OFFSET-based (meta.total / meta.next), not cursor. A cursor
    loop silently returns only the first 100 and every count downstream comes out wrong."""
    posts, off = [], 0
    while True:
        req = urllib.request.Request(f"{API_BASE}/social-posts?limit=100&offset={off}")
        req.add_header("Authorization", f"Bearer {key}")
        with urllib.request.urlopen(req, timeout=60) as r:
            d = json.loads(r.read().decode())
        posts += d["data"]
        if len(posts) >= d["meta"]["total"]:
            return posts
        off += 100
        time.sleep(0.3)


def lane_of(post: dict) -> str:
    keys = set((post.get("platform_configurations") or {}).keys())
    if keys == {"linkedin"}:
        return "linkedin"
    if keys == {"instagram"}:
        return "instagram"
    return "youtube_x"


def clip_of(post: dict, url_to_id: dict) -> str | None:
    for m in (post.get("media") or []):
        u = m.get("url") if isinstance(m, dict) else m
        if u in url_to_id:
            return url_to_id[u]
    return None


def clean_pool() -> list:
    """The archive minus every exclusion rule, newest metadata wins."""
    rows = [json.loads(l) for l in (HERE / "archive.jsonl").read_text(encoding="utf-8").splitlines() if l.strip()]
    wm = set(json.loads((HERE / "watermarked.json").read_text(encoding="utf-8"))["video_ids"])
    # Published ad-hoc, before media_cache existed — so it cannot be matched back from the
    # queue by media URL and would otherwise look "not yet scheduled" and get posted twice.
    pub_file = HERE / "published.json"
    published = (set(json.loads(pub_file.read_text(encoding="utf-8"))["video_ids"])
                 if pub_file.exists() else set())
    keep = []
    for r in rows:
        if r["id"] in wm or r["id"] in published:
            continue
        if EXCLUDE_RE.search(r.get("description") or ""):
            continue
        if not r.get("duration"):
            continue
        keep.append(r)
    return keep


def order_for_posting(rows: list) -> list:
    """Interleave brand-era and archive-era so a run of weak clips never clusters.

    Same intent as build_schedule.lanes(): brand = post-2021 (the academy footage),
    archive = the 2020 phone-era clips, each sorted by views desc with id as a stable
    tiebreak. Interleaved 1:2 because the archive lane is roughly twice the size.
    """
    def views(r):
        return int(r.get("view_count") or 0)

    brand = sorted([r for r in rows if (r.get("upload_date") or "") >= BRAND_ERA_FROM],
                   key=lambda r: (-views(r), r["id"]))
    archive = sorted([r for r in rows if (r.get("upload_date") or "") < BRAND_ERA_FROM],
                     key=lambda r: (-views(r), r["id"]))
    out = []
    while brand or archive:
        if brand:
            out.append(brand.pop(0))
        for _ in range(2):
            if archive:
                out.append(archive.pop(0))
    return out


def lane_label(r: dict) -> str:
    return "brand" if (r.get("upload_date") or "") >= BRAND_ERA_FROM else "archive"


def open_youtube_x_slots(posts: list, frm: date, to: date) -> list:
    """Slots inside the existing run that no longer hold a post.

    These are the holes the watermark cancellations left. Filling them first is what
    keeps the cadence at 3/day instead of dropping to 2/day for most of August.

    Which *time* is free matters, not just how many. postforme.py's idempotency check
    keys on (instant, platforms), so proposing a slot that is already occupied would make
    the push silently skip that entry — the gap would stay open and the clip would go
    unscheduled with no error. So compare actual Madrid-local times.

    The API returns scheduled_at in UTC; converting to Madrid before taking HH:MM is what
    makes "20:30" match "18:30+00:00" in summer.
    """
    taken: dict[str, set] = {}
    for p in posts:
        if lane_of(p) != "youtube_x":
            continue
        local = datetime.fromisoformat(p["scheduled_at"].replace("Z", "+00:00")).astimezone(MADRID)
        taken.setdefault(local.date().isoformat(), set()).add(local.strftime("%H:%M"))
    slots = []
    d = frm
    while d <= to:
        busy = taken.get(d.isoformat(), set())
        for hhmm in SLOTS:
            if hhmm not in busy:
                slots.append((d, hhmm))
        d += timedelta(days=1)
    return slots


def main():
    ap = argparse.ArgumentParser(description=__doc__,
                                 formatter_class=argparse.RawDescriptionHelpFormatter)
    ap.add_argument("--env-file", type=Path, default=None)
    ap.add_argument("--out", type=Path, default=HERE / "schedule-topup.json")
    ap.add_argument("--backfill-from", default=None,
                    help="earliest date to backfill cancelled slots (default: tomorrow)")
    args = ap.parse_args()

    key = load_api_key(args.env_file)
    posts = fetch_all_posts(key)
    cache = json.loads((HERE / "media_cache.json").read_text(encoding="utf-8"))
    url_to_id = {v: k for k, v in cache.items()}

    used = {"youtube_x": set(), "instagram": set(), "linkedin": set()}
    last = {"youtube_x": "", "instagram": "", "linkedin": ""}
    unresolved = 0
    for p in posts:
        L = lane_of(p)
        c = clip_of(p, url_to_id)
        if c:
            used[L].add(c)
        else:
            unresolved += 1
        last[L] = max(last[L], p["scheduled_at"][:10])
    if unresolved:
        print(f"note: {unresolved} queued post(s) could not be matched to a clip "
              f"(ad-hoc posts predate media_cache) — they are treated as not-in-pool.")

    pool = clean_pool()
    pool_by_id = {r["id"]: r for r in pool}

    # Backfill window: only the cancelled slots inside the run we already pushed.
    backfill_from = (date.fromisoformat(args.backfill_from) if args.backfill_from
                     else date.today() + timedelta(days=1))
    yt_last = date.fromisoformat(last["youtube_x"])
    ig_last = date.fromisoformat(last["instagram"])

    out = {"generated_start": backfill_from.isoformat(), "timezone": TZ,
           "youtube_x": [], "instagram": [], "linkedin": []}

    # ---- YouTube/X: cancelled slots first, then fresh days after the current run.
    remaining_yt = order_for_posting([pool_by_id[i] for i in
                                      (set(pool_by_id) - used["youtube_x"])])
    slots = open_youtube_x_slots(posts, backfill_from, yt_last)
    d = yt_last + timedelta(days=1)
    while len(slots) < len(remaining_yt):
        for s in SLOTS:
            slots.append((d, s))
        d += timedelta(days=1)
    for r, (when, hhmm) in zip(remaining_yt, slots):
        out["youtube_x"].append({
            "video_id": r["id"], "url": r["url"], "lane": lane_label(r),
            "date": when.isoformat(), "time": hhmm, "timezone": TZ,
            "scheduled_at": stamp(when, hhmm), "platforms": ["youtube", "x"],
            "tiktok_views": int(r.get("view_count") or 0),
            "upload_date": r.get("upload_date"),
            "duration_s": int(r.get("duration") or 0),
        })

    # ---- Instagram: strictly one a day, continuing after the current run. No backfill;
    # the Instagram lane was never gapped (the cancellations were all YouTube/X).
    remaining_ig = order_for_posting([pool_by_id[i] for i in
                                      (set(pool_by_id) - used["instagram"])])
    d = ig_last + timedelta(days=1)
    for r in remaining_ig:
        out["instagram"].append({
            "video_id": r["id"], "url": r["url"], "lane": lane_label(r),
            "date": d.isoformat(), "time": INSTAGRAM_SLOT, "timezone": TZ,
            "scheduled_at": stamp(d, INSTAGRAM_SLOT), "platforms": ["instagram"],
            "tiktok_views": int(r.get("view_count") or 0),
            "upload_date": r.get("upload_date"),
            "duration_s": int(r.get("duration") or 0),
        })
        d += timedelta(days=1)

    # ---- LinkedIn: one a day, and only clips with a hand-written lesson body.
    # The pool here is not the archive, it is out/*.json entries carrying a "linkedin"
    # caption — build_captions.py emits one only where linkedin_lessons.json has a body.
    # So the LinkedIn lane is self-limiting: it grows exactly as fast as lessons get
    # written, and can never fall back to a generic post.
    with_lesson = []
    for r in pool:
        cap = HERE / "out" / f"{r['id']}.json"
        if not cap.exists():
            continue
        if "linkedin" in json.loads(cap.read_text(encoding="utf-8")):
            with_lesson.append(r)
    remaining_li = order_for_posting([r for r in with_lesson
                                      if r["id"] not in used["linkedin"]])
    li_last = date.fromisoformat(last["linkedin"]) if last["linkedin"] else None
    d = (li_last + timedelta(days=1)) if li_last else backfill_from
    for r in remaining_li:
        out["linkedin"].append({
            "video_id": r["id"], "url": r["url"], "lane": lane_label(r),
            "date": d.isoformat(), "time": LINKEDIN_SLOT, "timezone": TZ,
            "scheduled_at": stamp(d, LINKEDIN_SLOT), "platforms": ["linkedin"],
            "tiktok_views": int(r.get("view_count") or 0),
            "upload_date": r.get("upload_date"),
            "duration_s": int(r.get("duration") or 0),
        })
        d += timedelta(days=1)

    out["totals"] = {
        "clean_pool": len(pool),
        "youtube_x_already_queued": len(used["youtube_x"]),
        "instagram_already_queued": len(used["instagram"]),
        "youtube_x_entries": len(out["youtube_x"]),
        "instagram_entries": len(out["instagram"]),
        "backfilled_slots": min(len(slots), len(remaining_yt)) and
                            sum(1 for e in out["youtube_x"] if e["date"] <= yt_last.isoformat()),
    }

    # A caption file must exist for every entry or postforme.py will skip it silently at
    # push time — better to fail loudly here, while the plan is still cheap to change.
    missing = [e["video_id"] for e in out["youtube_x"] + out["instagram"]
               if not (HERE / "out" / f"{e['video_id']}.json").exists()]
    if missing:
        print(f"\n!! {len(set(missing))} clip(s) have no caption file in out/ — "
              f"run build_captions.py before pushing:")
        for m in sorted(set(missing))[:10]:
            print(f"   {m}")

    args.out.write_text(json.dumps(out, indent=2, ensure_ascii=False) + "\n", encoding="utf-8")

    yt, ig = out["youtube_x"], out["instagram"]
    print(f"\nclean pool {len(pool)} clips")
    print(f"  YouTube/X : {len(used['youtube_x'])} already queued → {len(yt)} to schedule")
    if yt:
        print(f"              {out['totals']['backfilled_slots']} into cancelled August slots, "
              f"rest from {yt_last + timedelta(days=1)}")
        print(f"              {yt[0]['date']} → {yt[-1]['date']}")
    print(f"  Instagram : {len(used['instagram'])} already queued → {len(ig)} to schedule")
    if ig:
        print(f"              {ig[0]['date']} → {ig[-1]['date']}")
    li = out["linkedin"]
    print(f"  LinkedIn  : {len(used['linkedin'])} already queued → {len(li)} to schedule "
          f"(1/day, only clips with a written lesson)")
    if li:
        print(f"              {li[0]['date']} → {li[-1]['date']}")
        lessons_total = len(json.loads((HERE / "linkedin_lessons.json").read_text(encoding="utf-8"))["lessons"])
        print(f"              lesson bodies written: {lessons_total} of {len(pool)} clips "
              f"— the lane stops when they run out")
    print(f"\nwrote {args.out.name}  ({len(yt) + len(ig) + len(li)} entries, nothing pushed)")
    print(f"push a week at a time:\n"
          f"  python3 postforme.py week --week 1 --schedule {args.out.name}")


if __name__ == "__main__":
    main()
