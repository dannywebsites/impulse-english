#!/usr/bin/env python3
"""
postforme.py — thin CLI over the Post for Me API (https://api.postforme.dev/v1).

Built 2026-07-30 for the Impulse TikTok repurposing rail. Moved out of
DANNYS OPERATING SYSTEM/scripts/ into this workspace on 2026-07-30, alongside the
GSC data and the site that the captions link to. Still has no external deps.

Targets YouTube Shorts and Instagram Reels. One upload, fanned out to both.

Auth: reads POSTFORME_API_KEY from the environment or from an env file passed
with --env-file (default: ~/.ai-os/postforme.env, mode 600). The key is never
printed, never logged, and never written to any output file.

Publishing safety (per .claude/rules/guardrails.md + autonomy-ladder Phase 3):
  * `post` is DRY-RUN by default. It prints the exact payload and exits.
  * Nothing is published without the explicit --confirm flag.
  * --privacy defaults to `private`. Going public is an opt-in, per call.
    Instagram has no private mode — publishing there is always live, so the
    dry-run gate is the only guard and --confirm is required to cross it.

Subcommands
  auth-url    Generate the OAuth link to connect a channel (you click it)
  accounts    List connected social accounts
  post        Upload a video file and create a post (dry-run unless --confirm)
  results     Show delivery results for a post
"""

from __future__ import annotations  # system python3 here is 3.9; keeps `X | None` hints legal

import argparse
import json
import mimetypes
import os
import sys
import urllib.error
import urllib.request
from datetime import date, datetime, timedelta
from pathlib import Path

API_BASE = "https://api.postforme.dev/v1"
DEFAULT_ENV_FILE = Path.home() / ".ai-os" / "postforme.env"
HERE = Path(__file__).resolve().parent


# ---------------------------------------------------------------- auth/plumbing

def load_api_key(env_file: Path | None) -> str:
    key = os.environ.get("POSTFORME_API_KEY", "").strip()
    if key:
        return key

    path = env_file or DEFAULT_ENV_FILE
    if path.exists():
        for line in path.read_text(encoding="utf-8").splitlines():
            line = line.strip()
            if not line or line.startswith("#") or "=" not in line:
                continue
            name, _, value = line.partition("=")
            if name.strip() == "POSTFORME_API_KEY":
                return value.strip().strip("'\"")

    sys.exit(
        f"No API key found.\n"
        f"  Set POSTFORME_API_KEY in the environment, or put it in {path}:\n"
        f"    POSTFORME_API_KEY=pfm_xxx\n"
        f"  then: chmod 600 {path}"
    )


def api(method: str, path: str, key: str, body: dict | None = None) -> dict:
    url = f"{API_BASE}{path}"
    data = json.dumps(body).encode() if body is not None else None
    req = urllib.request.Request(url, data=data, method=method)
    req.add_header("Authorization", f"Bearer {key}")
    req.add_header("Content-Type", "application/json")
    try:
        with urllib.request.urlopen(req, timeout=60) as resp:
            raw = resp.read().decode()
            return json.loads(raw) if raw else {}
    except urllib.error.HTTPError as e:
        detail = e.read().decode(errors="replace")[:800]
        sys.exit(f"API {method} {path} failed: HTTP {e.code}\n{detail}")
    except urllib.error.URLError as e:
        sys.exit(f"Could not reach {url}: {e.reason}")


MEDIA_CACHE = HERE / "media_cache.json"


def upload_file(local: Path, key: str, cache_key: str = "") -> str:
    """Get a signed URL, PUT the bytes, return the public media URL.

    Cached by video id: a clip posts to YouTube+X on one day and Instagram on
    another, so without this every video uploads twice — ~216 redundant uploads
    and twice the media storage over the campaign.
    """
    if cache_key and MEDIA_CACHE.exists():
        cache = json.loads(MEDIA_CACHE.read_text(encoding="utf-8"))
        if cache_key in cache:
            print(f"  reusing uploaded media for {cache_key}")
            return cache[cache_key]

    if not local.exists():
        sys.exit(f"File not found: {local}")

    slot = api("POST", "/media/create-upload-url", key, {})
    upload_url = slot.get("upload_url")
    media_url = slot.get("media_url")
    if not upload_url or not media_url:
        sys.exit(f"Unexpected upload-url response: {json.dumps(slot)[:400]}")

    ctype = mimetypes.guess_type(local.name)[0] or "application/octet-stream"
    payload = local.read_bytes()
    print(f"  uploading {local.name} ({len(payload) / 1_048_576:.1f} MB, {ctype})...")

    put = urllib.request.Request(upload_url, data=payload, method="PUT")
    put.add_header("Content-Type", ctype)
    try:
        with urllib.request.urlopen(put, timeout=600) as resp:
            if resp.status not in (200, 201, 204):
                sys.exit(f"Upload failed: HTTP {resp.status}")
    except urllib.error.HTTPError as e:
        sys.exit(f"Upload failed: HTTP {e.code}\n{e.read().decode(errors='replace')[:400]}")

    print(f"  uploaded -> {media_url}")
    if cache_key:
        cache = json.loads(MEDIA_CACHE.read_text(encoding="utf-8")) if MEDIA_CACHE.exists() else {}
        cache[cache_key] = media_url
        MEDIA_CACHE.write_text(json.dumps(cache, indent=2) + "\n", encoding="utf-8")
    return media_url


# ------------------------------------------------------------------- subcommands

def cmd_auth_url(args, key):
    body = {"platform": args.platform}
    if args.redirect:
        body["redirect_url_override"] = args.redirect
    out = api("POST", "/social-accounts/auth-url", key, body)
    url = out.get("url") or out.get("auth_url") or out.get("data", {}).get("url")
    print(json.dumps(out, indent=2) if not url else f"\nOpen this in a browser to connect the account:\n\n{url}\n")


def fetch_all_posts(key: str) -> list:
    """Every post on the account, paginated.

    `GET /social-posts` caps at limit=50 by default. A bare call therefore returns a
    single page, which silently broke the `week` idempotency check — it could only
    "see" the newest 50 posts and would have re-posted anything older, duplicating
    them on the channel. Always page.
    """
    out, offset = [], 0
    while True:
        r = api("GET", f"/social-posts?limit=100&offset={offset}", key)
        rows = r.get("data", r if isinstance(r, list) else [])
        out.extend(rows)
        if len(rows) < 100:
            return out
        offset += 100


def cmd_accounts(args, key):
    out = api("GET", "/social-accounts", key)
    rows = out.get("data", out if isinstance(out, list) else [])
    if not rows:
        print("No social accounts connected yet. Run: postforme.py auth-url --platform youtube")
        return
    print(f"{'ID':<38} {'PLATFORM':<12} {'USERNAME':<28} STATUS")
    for a in rows:
        print(
            f"{a.get('id', ''):<38} {a.get('platform', ''):<12} "
            f"{(a.get('username') or a.get('external_id') or ''):<28} {a.get('status', '')}"
        )


def load_caption_file(path: Path) -> dict:
    """Read a caption JSON produced by build_captions.py.

    Expected shape (all keys optional except the ones a platform needs):
      {"youtube": {"title", "description", "tags": [...]},
       "instagram": {"caption"}}
    Reading from a file rather than argv keeps Spanish accents, emoji, newlines
    and '#' out of shell quoting — a caption is 2,200 chars of user copy, not a flag.
    """
    try:
        data = json.loads(path.read_text(encoding="utf-8"))
    except FileNotFoundError:
        sys.exit(f"Caption file not found: {path}")
    except json.JSONDecodeError as e:
        sys.exit(f"Caption file is not valid JSON ({path}): {e}")
    if not isinstance(data, dict):
        sys.exit(f"Caption file must contain a JSON object, got {type(data).__name__}: {path}")
    return data


YT_TITLE_MAX = 100
IG_CAPTION_MAX = 2200
X_CAPTION_MAX = 280  # free tier; Premium raises it but we must not assume Premium

ALL_PLATFORMS = ("youtube", "x", "instagram")


def build_payload(args, caption_data: dict) -> tuple:
    """Assemble platform_configurations. Returns (payload, targets).

    Split out of cmd_post so `--week` can reuse it without duplicating the limit
    checks — the checks are the whole point, and a second copy would drift.
    """
    yt_data = caption_data.get("youtube", {})
    ig_data = caption_data.get("instagram", {})
    x_data = caption_data.get("x", {})

    # Explicit flags always beat the caption file, so a one-off override works.
    title = args.title or yt_data.get("title", "")
    description = args.description or yt_data.get("description", "")
    tags = args.tags or ",".join(yt_data.get("tags", []))
    ig_caption = args.ig_caption or ig_data.get("caption", "") or description
    x_caption = args.x_caption or x_data.get("caption", "")

    targets = list(ALL_PLATFORMS) if args.platform == "all" else [args.platform]

    if "youtube" in targets:
        if not title:
            sys.exit("YouTube needs a title — pass --title or a caption file with youtube.title")
        if len(title) > YT_TITLE_MAX:
            sys.exit(f"YouTube title is {len(title)} chars; the API limit is {YT_TITLE_MAX}.")
    if "instagram" in targets:
        if not ig_caption:
            sys.exit("Instagram needs a caption — pass --ig-caption or a caption file")
        if len(ig_caption) > IG_CAPTION_MAX:
            sys.exit(f"Instagram caption is {len(ig_caption)} chars; limit is {IG_CAPTION_MAX}.")
    if "x" in targets:
        if not x_caption:
            sys.exit("X needs a caption — pass --x-caption or a caption file with x.caption")
        if len(x_caption) > X_CAPTION_MAX:
            sys.exit(f"X caption is {len(x_caption)} chars; the free-tier limit is "
                     f"{X_CAPTION_MAX}. Shorten it — do not assume Premium.")

    configs = {}
    if "youtube" in targets:
        yt = {
            "title": title,
            "privacy_status": args.privacy,
            "made_for_kids": args.made_for_kids,
            # REQUIRED by the API (YoutubeConfigurationDto.required = ["localizations"]).
            # Omitting it fails the request outright.
            "localizations": {
                (args.language or "es"): {"title": title, "description": description or title}
            },
        }
        if description:
            yt["description"] = description
        if tags:
            yt["tags"] = [t.strip() for t in tags.split(",") if t.strip()]
        if args.category_id:
            yt["category_id"] = args.category_id
        if args.language:
            yt["default_language"] = args.language
        if args.recording_date:
            yt["recording_date"] = args.recording_date
        configs["youtube"] = yt

    if "instagram" in targets:
        # placement=reels is what makes this a Reel rather than a feed video.
        ig = {"caption": ig_caption, "placement": "reels"}
        if args.ig_location:
            ig["location"] = args.ig_location
        configs["instagram"] = ig

    if "x" in targets:
        # The JSON key is `x`, NOT `twitter` — the schema is named TwitterConfigurationDto
        # but PlatformConfigurationsDto keys it as `x`. Getting this wrong is a silent no-op.
        configs["x"] = {"caption": x_caption}

    payload = {
        "caption": ig_caption or description or title,
        "social_accounts": args.account,
        "platform_configurations": configs,
    }
    if args.schedule:
        payload["scheduled_at"] = args.schedule
    return payload, targets


def cmd_post(args, key):
    """Build the per-platform payload and (only with --confirm) publish it."""
    caption_data = load_caption_file(args.caption_file) if args.caption_file else {}
    payload, targets = build_payload(args, caption_data)

    print("\nPayload to be sent to Post for Me:")
    print(json.dumps({**payload, "media": [{"url": "<uploaded after confirm>"}]},
                     indent=2, ensure_ascii=False))
    print(f"\nLocal file: {args.video}")
    print(f"Targets:    {', '.join(targets)}")

    if not args.confirm:
        print("\nDRY RUN — nothing uploaded, nothing posted.\n"
              "Re-run with --confirm to upload and publish.")
        if "youtube" in targets:
            print(f"  YouTube privacy would be: {args.privacy.upper()}")
        for p in ("instagram", "x"):
            if p in targets:
                print(f"  {p.capitalize()} has no private mode — it would publish LIVE.")
        return

    print("\nConfirmed. Uploading...")
    payload["media"] = [{"url": upload_file(Path(args.video), key)}]
    out = api("POST", "/social-posts", key, payload)
    print("\nPost created:")
    print(json.dumps(out, indent=2, ensure_ascii=False)[:2000])


def cmd_week(args, key):
    """Post one week of schedule.json. Dry-run by default, like `post`.

    Deliberately a week at a time rather than scheduling all 222 up front: the
    schedule stays editable, a bad caption template cannot escape into 222 posts,
    and the blast radius of any single mistake is seven days.
    """
    sched = json.loads((HERE / "schedule.json").read_text(encoding="utf-8"))
    accounts = json.loads(args.accounts.read_text(encoding="utf-8"))

    start = date.fromisoformat(sched["generated_start"]) + timedelta(days=(args.week - 1) * 7)
    end = start + timedelta(days=6)
    print(f"Week {args.week}: {start} → {end}\n")

    entries = [e for e in sched["youtube_x"] + sched["instagram"]
               if start.isoformat() <= e["date"] <= end.isoformat()]
    entries.sort(key=lambda e: (e["date"], e["time"]))
    if not entries:
        sys.exit(f"No scheduled entries between {start} and {end}.")

    # Idempotency: a partially-completed run must be resumable. Without this, a retry
    # re-posts everything already scheduled and you get duplicates on the channel.
    existing = set()
    if args.confirm:
        for r in fetch_all_posts(key):
            when = (r.get("scheduled_at") or "")
            plats = tuple(sorted((r.get("platform_configurations") or {}).keys()))
            if when:
                # Compare instants, not strings — the API returns UTC, we send Madrid.
                try:
                    inst = datetime.fromisoformat(when.replace("Z", "+00:00")).timestamp()
                    existing.add((inst, plats))
                except ValueError:
                    pass

    posted, skipped = 0, []
    for e in entries:
        if args.confirm:
            inst = datetime.fromisoformat(e["scheduled_at"]).timestamp()
            if (inst, tuple(sorted(e["platforms"]))) in existing:
                skipped.append((e["video_id"], "already scheduled")); continue
        cap_path = HERE / "out" / f"{e['video_id']}.json"
        vid_path = HERE / "clips-normalised" / f"{e['upload_date']}_{e['video_id']}.mp4"
        if not cap_path.exists():
            skipped.append((e["video_id"], "no caption file")); continue
        if not vid_path.exists():
            skipped.append((e["video_id"], "no normalised video")); continue

        caption_data = load_caption_file(cap_path)
        plats = e["platforms"]

        class A:  # reuse build_payload's checks rather than re-implementing them
            account = [accounts[p] for p in plats if p in accounts]
            platform = "all" if len(plats) > 1 else plats[0]
            title = description = ig_caption = x_caption = tags = ""
            ig_location = args.ig_location
            recording_date = ""
            category_id = "27"
            language = "es"
            privacy = args.privacy
            made_for_kids = False
            schedule = e["scheduled_at"]
            video = str(vid_path)

        if len(A.account) != len(plats):
            skipped.append((e["video_id"], f"missing account id for {plats}")); continue

        # `platform` must name a single platform or "all"; when a day's entry targets
        # youtube+x only, "all" would wrongly add instagram.
        payload, targets = build_payload(A, caption_data)
        if set(targets) != set(plats):
            payload["platform_configurations"] = {
                k: v for k, v in payload["platform_configurations"].items() if k in plats}
            targets = plats

        print(f"  {e['date']} {e['time']}  {'+'.join(plats):18} {e['video_id']}")
        if args.confirm:
            payload["media"] = [{"url": upload_file(vid_path, key, e["video_id"])}]
            out = api("POST", "/social-posts", key, payload)
            print(f"      -> {out.get('id', out)}")
        posted += 1

    print(f"\n{posted} entr{'y' if posted == 1 else 'ies'} "
          f"{'POSTED' if args.confirm else 'would post (DRY RUN)'}")
    if skipped:
        print(f"{len(skipped)} skipped:")
        for vid, why in skipped[:10]:
            print(f"  {vid} — {why}")
    if not args.confirm:
        print("\nRe-run with --confirm to upload and publish this week.")


def cmd_results(args, key):
    path = f"/social-post-results/{args.id}" if args.id else "/social-post-results"
    print(json.dumps(api("GET", path, key), indent=2)[:4000])


# -------------------------------------------------------------------------- main

def main():
    p = argparse.ArgumentParser(description="Post for Me CLI (YouTube-focused)")
    p.add_argument("--env-file", type=Path, default=None, help=f"default: {DEFAULT_ENV_FILE}")
    sub = p.add_subparsers(dest="cmd", required=True)

    a = sub.add_parser("auth-url", help="get the OAuth link to connect a channel")
    a.add_argument("--platform", default="youtube")
    a.add_argument("--redirect", help="optional redirect URL override")
    a.set_defaults(fn=cmd_auth_url)

    l = sub.add_parser("accounts", help="list connected accounts")
    l.set_defaults(fn=cmd_accounts)

    o = sub.add_parser("post", help="upload a video and post it (dry-run by default)")
    o.add_argument("--account", required=True, action="append", metavar="ID",
                   help="social account ID from `accounts`; repeat once per platform")
    o.add_argument("--platform", choices=["youtube", "x", "instagram", "all"], default="youtube",
                   help="where to publish (default: youtube)")
    o.add_argument("--video", required=True, help="path to the local video file")
    o.add_argument("--caption-file", type=Path, default=None,
                   help="JSON from build_captions.py: {youtube:{title,description,tags},"
                        " instagram:{caption}, x:{caption}}. Explicit flags below override it.")
    o.add_argument("--title", default="", help="YouTube title, max 100 chars")
    o.add_argument("--description", default="", help="YouTube description")
    o.add_argument("--ig-caption", default="", help="Instagram caption, max 2200 chars")
    o.add_argument("--x-caption", default="", help="X caption, max 280 chars (free tier)")
    o.add_argument("--ig-location", default="", help="Instagram location Page id to tag")
    o.add_argument("--recording-date", default="", help="YouTube recording date, YYYY-MM-DD")
    o.add_argument("--tags", default="", help="comma-separated")
    o.add_argument("--category_id", default="27", help="YouTube category id (27 = Education)")
    o.add_argument("--language", default="es", help="BCP-47, default es")
    o.add_argument("--privacy", choices=["private", "unlisted", "public"], default="private",
                   help="YouTube only; X and Instagram have no private mode. Default stays "
                        "'private' as a safety net — the schedule sets 'public' explicitly.")
    o.add_argument("--made-for-kids", action="store_true")
    o.add_argument("--schedule", default="", help="ISO 8601 datetime to schedule for")
    o.add_argument("--confirm", action="store_true", help="actually upload and publish")
    o.set_defaults(fn=cmd_post)

    w = sub.add_parser("week", help="post one week from schedule.json (dry-run by default)")
    w.add_argument("--week", type=int, required=True, help="1-based week number")
    w.add_argument("--accounts", type=Path, default=HERE / "accounts.json",
                   help='JSON map, e.g. {"youtube":"acc_1","x":"acc_2","instagram":"acc_3"}')
    w.add_argument("--privacy", choices=["private", "unlisted", "public"], default="public",
                   help="YouTube privacy for this batch (default: public, per the plan)")
    w.add_argument("--ig-location", default="", help="Instagram location Page id to tag")
    w.add_argument("--confirm", action="store_true", help="actually upload and publish")
    w.set_defaults(fn=cmd_week)

    r = sub.add_parser("results", help="delivery results")
    r.add_argument("--id", default="")
    r.set_defaults(fn=cmd_results)

    args = p.parse_args()
    args.fn(args, load_api_key(args.env_file))


if __name__ == "__main__":
    main()
