#!/usr/bin/env python3
"""
Pull the REAL Google reviews for Impulse English Academy and write them to disk.

Why this exists: the site shipped fabricated testimonials because there was no
machine-readable source of truth for "which reviews actually exist". This script
is that source of truth. It talks to the DataForSEO Business Data API (Google
Reviews), which reads the live public Google Business Profile, and writes:

  reviews-raw.json   the untouched API payload (audit trail, never edited by hand)
  reviews.json       one normalised record per review, sorted newest first

Every downstream step - the allocator, the injector, the GEO audit gate - reads
reviews.json. Nothing else is allowed to invent a reviewer.

Usage:
  python3 pull_reviews.py                 # post a fresh task, poll, write both files
  python3 pull_reviews.py --normalise-only  # re-normalise from the existing raw file

Credentials come from /Users/danny/.env (DATAFORSEO_LOGIN / DATAFORSEO_PASSWORD).
Cost: ~$0.015 per pull for the whole profile. Safe to re-run monthly.
"""
import argparse, json, os, re, sys, time
import urllib.request, urllib.error, base64

HERE = os.path.dirname(os.path.abspath(__file__))
RAW = os.path.join(HERE, "reviews-raw.json")
OUT = os.path.join(HERE, "reviews.json")

# The academy's Google place, verified against the live knowledge panel 2026-08-02.
PLACE_ID = "ChIJG7G2oAkpQg0Re7iLuuLzbr4"
CID = "13722173269762357371"

API = "https://api.dataforseo.com/v3/business_data/google/reviews"


def creds():
    login = os.environ.get("DATAFORSEO_LOGIN")
    pwd = os.environ.get("DATAFORSEO_PASSWORD")
    if not (login and pwd):
        # fall back to the shell profile env file
        try:
            with open(os.path.expanduser("~/.env")) as fh:
                for line in fh:
                    m = re.match(r'\s*(?:export\s+)?(DATAFORSEO_LOGIN|DATAFORSEO_PASSWORD)\s*=\s*"?([^"\n]+)"?', line)
                    if m:
                        if m.group(1).endswith("LOGIN"):
                            login = m.group(2).strip()
                        else:
                            pwd = m.group(2).strip()
        except OSError:
            pass
    if not (login and pwd):
        sys.exit("DATAFORSEO_LOGIN / DATAFORSEO_PASSWORD not found in env or ~/.env")
    return login, pwd


def call(url, payload=None):
    login, pwd = creds()
    auth = base64.b64encode(f"{login}:{pwd}".encode()).decode()
    data = json.dumps(payload).encode() if payload is not None else None
    req = urllib.request.Request(url, data=data, method="POST" if data else "GET")
    req.add_header("Authorization", "Basic " + auth)
    req.add_header("Content-Type", "application/json")
    with urllib.request.urlopen(req, timeout=120) as r:
        # strict=False: review bodies contain raw newlines, which strict JSON rejects.
        return json.loads(r.read().decode(), strict=False)


def pull(depth=200):
    body = [{
        "place_id": PLACE_ID,
        "language_name": "Spanish",
        "location_name": "Madrid,Community of Madrid,Spain",
        "depth": depth,
        "sort_by": "newest",
        "tag": "impulse-reviews-full",
    }]
    posted = call(API + "/task_post", body)
    task = posted["tasks"][0]
    if task["status_code"] not in (20000, 20100):
        sys.exit("task_post failed: %s" % task["status_message"])
    tid = task["id"]
    print("task %s posted (cost $%s), polling..." % (tid, posted.get("cost")))
    for attempt in range(60):
        time.sleep(20)
        got = call(API + "/task_get/" + tid)
        code = got["tasks"][0]["status_code"]
        if code == 20000:
            with open(RAW, "w") as fh:
                json.dump(got, fh, ensure_ascii=False, indent=2)
            print("raw payload -> %s" % RAW)
            return got
        if code not in (40601, 40602):  # not "task in queue" / "in progress"
            sys.exit("task_get failed: %s" % got["tasks"][0]["status_message"])
        print("  ...%ds" % ((attempt + 1) * 20))
    sys.exit("timed out waiting for the reviews task")


def normalise(payload):
    res = (payload["tasks"][0].get("result") or [{}])[0]
    items = res.get("items") or []
    out = []
    for it in items:
        text = (it.get("review_text") or "").strip()
        out.append({
            "review_id": it.get("review_id"),
            "author": (it.get("profile_name") or "").strip(),
            "author_url": it.get("profile_url"),
            "local_guide": bool(it.get("local_guide")),
            "rating": (it.get("rating") or {}).get("value"),
            "text": re.sub(r"\s*\n\s*", " ", text),
            # 8 of the 180 were written in English; Google shows a Spanish machine
            # translation and keeps the author's actual words here. Publishing the
            # translation would put words in their mouth, so both are carried.
            "original_text": re.sub(r"\s*\n\s*", " ",
                                    (it.get("original_review_text") or "").strip()) or None,
            "language": it.get("original_language"),
            "timestamp": it.get("timestamp"),
            "time_ago": it.get("time_ago"),
            "review_url": it.get("review_url"),
            "owner_answered": bool(it.get("owner_answer")),
        })
    out.sort(key=lambda r: r["timestamp"] or "", reverse=True)
    meta = {
        "place_id": PLACE_ID,
        "cid": CID,
        "pulled_at": res.get("datetime"),
        "rating": (res.get("rating") or {}).get("value"),
        "reviews_count": res.get("reviews_count"),
        "pulled_count": len(out),
        "source": "DataForSEO business_data/google/reviews",
    }
    doc = {"meta": meta, "reviews": out}
    with open(OUT, "w") as fh:
        json.dump(doc, fh, ensure_ascii=False, indent=2)
    print("normalised %d reviews -> %s" % (len(out), OUT))
    return doc


if __name__ == "__main__":
    ap = argparse.ArgumentParser()
    ap.add_argument("--normalise-only", action="store_true")
    ap.add_argument("--depth", type=int, default=200)
    a = ap.parse_args()
    if a.normalise_only:
        with open(RAW) as fh:
            normalise(json.load(fh, strict=False))
    else:
        normalise(pull(a.depth))
