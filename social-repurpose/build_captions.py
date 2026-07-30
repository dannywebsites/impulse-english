#!/usr/bin/env python3
"""
build_captions.py — one caption file per video, per platform, ready for postforme.py.

Design note: this script does NOT write the creative line.
-----------------------------------------------------------
Everything deterministic is generated here and is correct by construction: the NAP
block (parsed from napData.ts, never retyped), the geo anchor, the rotating barrio, the
deep link, tags and hashtags. The *hook* — the topic phrase that becomes the YouTube
title — is seeded from the clip's original TikTok description or its non-generic
hashtags, and marked `needs_review` when the seed is only a truncation.

Write those hooks by hand before posting. The title is where the entire SEO value of a
Short lives; regex-generating 222 Spanish titles would produce slop exactly there.

Why the platforms differ (SERP-checked 2026-07-30)
--------------------------------------------------
`academia ingles las tablas` returns a local pack plus ten business pages and NO video
results of any kind. `como se pronuncia queue en ingles` returns a video block at
position 4 and a ten-slot "Videos cortos" block at position 6.

So a vocabulary Short cannot rank for a neighbourhood query, and barrio names in the
TITLE would cost relevance for the query it *can* win. Titles are therefore topic-only;
the geo lives in the description, where it does brand/NAP work and carries the link to
the barrio page that can rank.

  YouTube   topic-only title; geo + NAP in the description, first 150 chars = the snippet
  X         280 chars total. Topic + "La Vaguada, Madrid" + link. No NAP block.
  Instagram geo above the 125-char fold; NAP and hashtags in the body

Usage
  python3 build_captions.py
  python3 build_captions.py --only-ready      # skip clips whose hook needs writing
"""

from __future__ import annotations  # system python3 is 3.9

import argparse
import json
import re
import unicodedata
from pathlib import Path

HERE = Path(__file__).resolve().parent
SITE = Path("/Users/danny/Desktop/backup website Impuls Englisch /"
            "March-Impulse-Web-e7ad8740054b4e468e95bc81e5e4c79f17b98c97")
NAP_TS = SITE / "utils" / "napData.ts"
OUT_DIR = HERE / "out"

YT_TITLE_MAX = 100
IG_CAPTION_MAX = 2200
X_CAPTION_MAX = 280          # free tier — never assume Premium
IG_FOLD = 125                # Instagram truncates in-feed around here

BASE_URL = "https://impulse-english.es"

# The academy sits inside these two. "cerca de Barrio del Pilar" when the academy IS in
# Barrio del Pilar reads as machine-written, and to a local it reads as wrong.
HOME_BARRIOS = {"Barrio del Pilar", "La Vaguada"}

# Hashtags that carry no topic — pure reach tags. What remains after removing these is
# the lesson word, which is how 34 of the 222 clips get their topic back.
GENERIC_TAGS = {
    "ingles", "english", "hablaingles", "aprendeingles", "english101", "inglesfacil",
    "fluentin3months", "speakingenglish", "englishteacher", "edutok", "fluent",
    "tupuedes", "españa", "aprenderingles", "colombia", "spokenenglish", "teacher",
    "argentina", "venezuela", "foryou", "fyp", "parati", "profe", "vamos", "intentalo",
    "inglesparatodos", "profesoringles", "aprenderinglés", "inglésenacción", "comosedice",
    "dúo", "duo", "edutoklanguages", "mexico", "chile", "peru", "educacion", "viral",
    "learnenglish", "idiomas", "clasesdeingles", "academiadeingles", "spain", "fun",
    "phrasalverbs", "inglésfácil", "clasedeingles",
    # Second pass: these survived the first stoplist and were being emitted as lesson
    # words ("¿Cómo se pronuncia yomequedoencasa en inglés?"). They are 2020-era reach
    # and campaign tags, not topics.
    "yomequedoencasa", "englishchallenge", "houseoftiktok", "somosverdeesperanza",
    "edutoklanguage", "englishteache", "education", "inglês", "brighterinside",
    "games", "anda", "comeon", "aprender", "antes", "challenge", "quedateencasa",
}


# --------------------------------------------------------------------- NAP parsing

def parse_nap() -> dict:
    """Pull the fields we need straight out of napData.ts.

    Parsed rather than copied because napData.ts is the declared single source of truth
    and NAP-identical repetition across channels is the whole point. A typo in a
    hand-copied address becomes a broken citation on 666 posts.
    """
    src = NAP_TS.read_text(encoding="utf-8")

    def field(name: str) -> str:
        m = re.search(rf'^\s*{name}:\s*"([^"]*)"', src, re.M)
        if not m:
            raise SystemExit(f"Could not parse '{name}' from {NAP_TS}")
        return m.group(1)

    metro = re.search(r"metro:\s*\[(.*?)\]", src, re.S)
    metro_lines = re.findall(r'"([^"]+)"', metro.group(1)) if metro else []

    return {
        "name": field("name"),
        "full_address": field("fullAddress"),
        "phone": field("phone"),
        "website": field("website"),
        "neighborhood": field("neighborhood"),
        "metro": metro_lines,
    }


def live_slugs() -> dict:
    """Real published URLs, so a deep link is never invented.

    Gotcha this respects: static src/pages/blog/*.astro SHADOW the content collection's
    [slug].astro, so a slug existing only as .md may not render. Static pages win.
    """
    static = {p.stem for p in (SITE / "src/pages/blog").glob("*.astro")
              if not p.stem.startswith("[")}
    collection = {p.stem for p in (SITE / "src/content/articles").glob("*.md")}
    barrios = {p.stem for p in (SITE / "src/pages").glob("academia-ingles-*.astro")}
    return {"blog": static | collection, "barrio": barrios, "shadowed": collection & static}


# ------------------------------------------------------------------ barrio rotation

def allocate_rotation(barrios: list, n: int) -> list:
    """Assign one barrio per clip, proportional to opportunity, deterministically.

    Largest-remainder allocation, then interleaved so the same barrio does not land on
    ten consecutive posts — which reads as spam to a human and to a platform.
    """
    if not barrios or n <= 0:
        return []
    weights = [max(b["est_monthly_clicks_left"], 0.01) for b in barrios]
    total = sum(weights)
    exact = [w / total * n for w in weights]
    counts = [int(e) for e in exact]
    for idx in sorted(range(len(exact)), key=lambda i: -(exact[i] - counts[i]))[:n - sum(counts)]:
        counts[idx] += 1

    queues = [[barrios[i]["barrio"]] * counts[i] for i in range(len(barrios))]
    out = []
    while len(out) < n:
        for q in queues:
            if q:
                out.append(q.pop())
            if len(out) == n:
                break
    return out


# --------------------------------------------------------------------- hook seeding

def slugify(s: str) -> str:
    s = "".join(c for c in unicodedata.normalize("NFD", s.lower())
                if unicodedata.category(c) != "Mn")
    return re.sub(r"[^a-z0-9]+", "-", s).strip("-")


def seed_hook(desc: str) -> dict:
    """Derive a title seed from the original TikTok description, or from its hashtags.

    Three cases, in descending quality:
      1. A leading question — already search-shaped, usable as-is.
      2. A short declarative — usable but should be rewritten as a query.
      3. Nothing but hashtags — recover the lesson word from the non-generic ones
         (`#bear #beer #bird #beard` is the 1M-view pronunciation video).
    """
    if not desc:
        return {"seed": "", "needs_review": True, "reason": "no TikTok description"}

    text = re.sub(r"\s+", " ", re.sub(r"#\w+", "", desc)).strip(" -–—")
    if text:
        first = re.split(r"(?<=[.!?…])\s+", text)[0].strip()
        if first.startswith("¿") and "?" in first and len(first) <= YT_TITLE_MAX:
            return {"seed": first, "needs_review": False, "reason": "clean question"}
        if 3 <= len(first) <= YT_TITLE_MAX:
            return {"seed": first, "needs_review": True,
                    "reason": "declarative — rewrite as a search query"}
        return {"seed": first[:YT_TITLE_MAX - 1].rstrip() + "…",
                "needs_review": True, "reason": "truncated — rewrite"}

    topic_tags = [t for t in re.findall(r"#(\w+)", desc) if t.lower() not in GENERIC_TAGS]
    if topic_tags:
        words = " / ".join(topic_tags[:4])
        return {"seed": f"¿Cómo se pronuncia {words} en inglés?"[:YT_TITLE_MAX],
                "needs_review": True,
                "reason": f"recovered from hashtags ({', '.join(topic_tags[:4])}) — verify"}
    return {"seed": "", "needs_review": True, "reason": "no topic — watch the video"}


# ------------------------------------------------------------------ caption assembly

def proximity_phrase(barrio: str) -> str:
    return f"en {barrio}" if barrio in HOME_BARRIOS else f"cerca de {barrio}"


# Geo title templates. Rotated by index so 216 titles do not read as one stamped
# string. Peninsular Spanish, because the people searching these terms search in
# Spanish — an English title would be on-brand but off-language for the query.
GEO_TITLE_TEMPLATES = [
    "Aprende inglés con nosotros en {barrio}",
    "Aprende inglés en {barrio}, Madrid Norte",
    "Clases de inglés en {barrio}, Madrid",
    "Academia de inglés en {barrio}, Madrid Norte",
    "Inglés en {barrio} — Impulse English Academy",
    "Tu academia de inglés en {barrio}, Madrid",
]

GEO_SUFFIX_TEMPLATES = [
    " | Academia de inglés en {barrio}",
    " | Inglés en {barrio}, Madrid",
    " | Clases de inglés en {barrio}",
]


def geo_title(barrio: str, i: int) -> str:
    """Fallback title for a clip whose topic could not be recovered.

    There is no pronunciation query to win here — we do not know what the video
    teaches — so a geo/brand title costs nothing in relevance and at least carries
    the keywords. This is the one place a barrio name in a title is clearly right.
    """
    return GEO_TITLE_TEMPLATES[i % len(GEO_TITLE_TEMPLATES)].format(barrio=barrio)[:YT_TITLE_MAX]


def geo_suffix(title: str, barrio: str, i: int) -> str:
    """Append a geo phrase to a real topical title, but ONLY if it fits in 100 chars.

    Trade-off, stated once and then respected: the neighbourhood SERPs carry no video
    results, so this suffix will not rank the video for `academia ingles <barrio>`.
    What it does buy is the keyword appearing in the title text. It is appended, never
    substituted, so the topic — the part that can actually win its SERP — always leads.
    """
    # Ladder from richest to shortest, so a long title still gets *some* location
    # rather than none. Only the last resort drops the barrio itself.
    ladder = [
        GEO_SUFFIX_TEMPLATES[i % len(GEO_SUFFIX_TEMPLATES)].format(barrio=barrio),
        f" | Inglés en {barrio}",
        f" | {barrio}, Madrid",
        f" | {barrio}",
        " | Academia de inglés en Madrid Norte",
        " | Inglés en Madrid Norte",
        " | Madrid Norte",
    ]
    for suffix in ladder:
        if len(title) + len(suffix) <= YT_TITLE_MAX:
            return title + suffix
    return title


def nap_block(nap: dict, barrio: str) -> str:
    metro = nap["metro"][0].split(" (")[0] if nap["metro"] else ""
    reach = ("y de todo el norte de Madrid" if barrio in HOME_BARRIOS
             else f"de {barrio} y de todo el norte de Madrid")
    return (f"📍 {nap['name']} — {nap['full_address']}\n"
            f"🚇 Metro {metro}\n"
            f"📞 {nap['phone']}\n"
            f"🌐 {nap['website']}\n"
            f"Damos clase a alumnos {reach}.")


# The first ~150 characters are the Google snippet. They lead with the academy and the
# location, not with the lesson — that is the line doing the local-keyword work, and it
# is the same on every video so the entity signal repeats consistently. Six variants so
# 216 descriptions do not read as one stamped string.
ACADEMY_OPENERS = [
    "Impulse English Academy, tu academia de inglés en La Vaguada (Barrio del Pilar), "
    "en el norte de Madrid.",
    "Somos Impulse English Academy: academia de inglés en La Vaguada, Barrio del Pilar "
    "(Madrid Norte).",
    "Academia de inglés en La Vaguada y Barrio del Pilar, en pleno Madrid Norte: "
    "Impulse English Academy.",
    "¿Buscas una academia de inglés cerca de ti en Madrid Norte? Estamos en La Vaguada, "
    "Barrio del Pilar.",
    "Impulse English Academy: clases de inglés en La Vaguada (Barrio del Pilar), "
    "norte de Madrid.",
    "Tu academia de inglés en el Barrio del Pilar y La Vaguada, en el norte de Madrid: "
    "Impulse English Academy.",
]


def academy_opener(barrio: str, i: int) -> str:
    """Snippet line: who we are + where + which barrio we reach."""
    opener = ACADEMY_OPENERS[i % len(ACADEMY_OPENERS)]
    reach = ("" if barrio in HOME_BARRIOS
             else f" Damos clase a alumnos de {barrio} y de todo Madrid Norte.")
    return opener + reach


def as_question(hook: str, final: bool = False) -> str:
    """Present the lesson as a question — that is how people search, and it reads as an
    invitation rather than a label.

    `final=True` means the hook was written by hand and is already the finished line.
    Wrapping those produced nonsense like «¿Sabes cómo se dice "La evolución del inglés:
    de dónde viene el idioma" en inglés?» — a declarative hand-written title stuffed
    inside a question template. Hand-written hooks are used verbatim.
    """
    h = hook.strip()
    if final or h.startswith("¿") or h.endswith("?"):
        return h
    return f"¿Sabes cómo se dice «{h}» en inglés?"


def build_youtube(hook: str, nap: dict, barrio: str, link: str, tags: list,
                  title: str, i: int, final: bool = False) -> dict:
    """Academy first (the snippet), then the lesson as a question, then the detail."""
    description = (
        f"{academy_opener(barrio, i)}\n\n"
        f"{as_question(hook, final)} Te lo explicamos en este vídeo.\n\n"
        f"Preparamos exámenes oficiales de Cambridge y Linguaskill, e impartimos inglés "
        f"general para niños, jóvenes y adultos, con clases presenciales y online.\n\n"
        f"👉 Más información: {link}\n\n"
        f"{nap_block(nap, barrio)}"
    )
    return {"title": title[:YT_TITLE_MAX], "description": description, "tags": tags}


def build_instagram(hook: str, nap: dict, barrio: str, final: bool = False) -> str:
    """Only the ANCHOR has to clear the ~125-char fold — that is the term with the
    volume. The rotating barrio goes in the body, so a short geo line does not eat the
    hook (a full '— cerca de Sanchinarro.' line left only ~45 chars and truncated clean
    questions mid-sentence)."""
    geo = "📍 Inglés en La Vaguada, Barrio del Pilar."
    # Instagram and X keep the LESSON first, not the academy. The fold is ~125 chars and
    # a corporate opener there kills reach on a feed surface — the geo still lands on
    # line 2, inside the fold. YouTube is the SEO surface and leads with the academy.
    opener = as_question(hook, final)
    if len(opener) + len(geo) + 1 > IG_FOLD:
        opener = opener[:max(0, IG_FOLD - len(geo) - 2)].rstrip() + "…"
    return (
        f"{opener}\n{geo}\n\n"
        f"Somos Impulse English Academy: inglés general y preparación de Cambridge y "
        f"Linguaskill para niños, jóvenes y adultos. Damos clase a alumnos "
        f"{proximity_phrase(barrio)} y de todo el norte de Madrid.\n\n"
        f"¿Quieres una clase de prueba? Escríbenos por WhatsApp o entra en el enlace de "
        f"la bio.\n\n"
        f"{nap['full_address']}\n{nap['phone']}"
    )


def build_x(hook: str, link: str, final: bool = False) -> str:
    """280 chars, hard. Budget: hook + geo line + link. The NAP block does not fit and is
    not attempted — X is a click to the site, not a citation surface."""
    geo = "Academia de inglés en La Vaguada, Madrid."
    tail = f"\n{geo}\n{link}"
    room = X_CAPTION_MAX - len(tail)
    q = as_question(hook, final)
    h = q if len(q) <= room else q[:max(0, room - 1)].rstrip() + "…"
    return f"{h}{tail}"


def main():
    ap = argparse.ArgumentParser(description=__doc__,
                                 formatter_class=argparse.RawDescriptionHelpFormatter)
    ap.add_argument("--only-ready", action="store_true",
                    help="skip clips whose hook still needs writing")
    args = ap.parse_args()

    archive = [json.loads(l) for l in
               (HERE / "archive.jsonl").read_text(encoding="utf-8").splitlines() if l.strip()]
    by_id = {r["id"]: r for r in archive}
    sched = json.loads((HERE / "schedule.json").read_text(encoding="utf-8"))
    gap = json.loads((HERE / "gap-map.json").read_text(encoding="utf-8"))
    nap = parse_nap()
    slugs = live_slugs()

    # One caption per VIDEO (not per entry) — the same video posts to YouTube/X on one
    # day and Instagram on another, but its copy is identical across both.
    video_ids = [e["video_id"] for e in sched["youtube_x"]]
    rotation = allocate_rotation(gap["rotation"], len(video_ids))
    barrio_pages = {t["barrio"]: t["has_page"] for t in gap["all_targets"]}

    OUT_DIR.mkdir(exist_ok=True)
    written, needs_review = 0, []

    # Hand-written hooks win over anything auto-seeded. These were read off the
    # burned-in caption in a mid-point frame for clips whose topic was not recoverable
    # from text or hashtags — see hooks_manual.json.
    manual = {}
    for name in ("hooks_manual.json", "hooks_extra.json"):  # extra wins on conflict
        p = HERE / name
        if p.exists():
            manual.update(json.loads(p.read_text(encoding="utf-8")).get("hooks", {}))

    for i, (vid, barrio) in enumerate(zip(video_ids, rotation)):
        row = by_id.get(vid)
        if not row:
            needs_review.append((vid, "not in archive.jsonl")); continue

        if vid in manual:
            hook = {"seed": manual[vid], "needs_review": False, "reason": "hand-written"}
        else:
            hook = seed_hook(row.get("description") or row.get("title") or "")

        # No recoverable topic -> geo/brand title rather than dropping the clip.
        if not hook["seed"]:
            hook = {"seed": geo_title(barrio, i), "needs_review": False,
                    "reason": "geo fallback — topic unknown"}
        # Hand-written and geo-fallback hooks are finished lines; auto-seeded
        # fragments still need the question wrapper.
        is_final = hook["reason"] in ("hand-written",) or hook["reason"].startswith("geo fallback")

        if args.only_ready and hook["needs_review"]:
            needs_review.append((vid, hook["reason"])); continue

        page = barrio_pages.get(barrio)
        link = f"{BASE_URL}/{page}/" if page and page in slugs["barrio"] else f"{BASE_URL}/"
        # Topical only. The barrio tags that used to be here ("academia ingles las
        # tablas", "ingles barrio del pilar") were removed deliberately: YouTube tags
        # are a weak within-YouTube topic signal and carry no weight in Google web
        # search, and the neighbourhood SERPs contain no video results at all — so a
        # geo tag on a vocabulary Short could never rank it locally. It was just
        # irrelevant tagging. These remaining tags serve the "cómo se pronuncia /
        # cómo se dice" queries, which is the SERP these videos can actually win.
        tags = ["ingles", "aprender ingles", "pronunciacion en ingles",
                "vocabulario en ingles", "clases de ingles", "cambridge english",
                "linguaskill"]

        payload = {
            "_video_id": vid,
            "_barrio": barrio,
            "_link": link,
            "_needs_review": hook["needs_review"],
            "_review_reason": hook["reason"],
            "_hook_seed": hook["seed"],
            "_tiktok_views": int(row.get("view_count") or 0),
            # Geo suffix on real topical titles: appended, never substituted, and only
            # when it fits inside 100 chars. A geo-fallback title already carries the
            # barrio, so it is not double-suffixed.
            "youtube": build_youtube(
                hook["seed"], nap, barrio, link, tags,
                title=(hook["seed"] if hook["reason"].startswith("geo fallback")
                       else geo_suffix(as_question(hook["seed"], is_final), barrio, i)),
                i=i, final=is_final),
            "instagram": {"caption": build_instagram(hook["seed"], nap, barrio, is_final)},
            "x": {"caption": build_x(hook["seed"], link, is_final)},
        }

        # Hard-fail rather than let the API reject it later.
        for label, value, limit in (
            ("YouTube title", payload["youtube"]["title"], YT_TITLE_MAX),
            ("Instagram caption", payload["instagram"]["caption"], IG_CAPTION_MAX),
            ("X caption", payload["x"]["caption"], X_CAPTION_MAX),
        ):
            if len(value) > limit:
                raise SystemExit(f"{vid}: {label} is {len(value)} chars, limit {limit}")

        (OUT_DIR / f"{vid}.json").write_text(
            json.dumps(payload, indent=2, ensure_ascii=False) + "\n", encoding="utf-8")
        written += 1
        if hook["needs_review"]:
            needs_review.append((vid, hook["reason"]))

    print(f"Wrote {written} caption file(s) to {OUT_DIR}")
    print(f"NAP from napData.ts: {nap['full_address']} · {nap['phone']}")
    print(f"Live slugs: {len(slugs['blog'])} blog, {len(slugs['barrio'])} barrio "
          f"({len(slugs['shadowed'])} collection articles shadowed by static pages)")

    counts = {}
    for b in rotation[:written]:
        counts[b] = counts.get(b, 0) + 1
    print("\nBarrio rotation (weighted by opportunity):")
    for b, c in sorted(counts.items(), key=lambda x: -x[1]):
        print(f"  {b:20} {c}")

    if needs_review:
        by_reason = {}
        for _, reason in needs_review:
            by_reason[reason] = by_reason.get(reason, 0) + 1
        print(f"\n⚠ {len(needs_review)} clip(s) need the hook written before posting:")
        for reason, n in sorted(by_reason.items(), key=lambda x: -x[1]):
            print(f"    {n:>4}  {reason}")
        print("\n  Edit 'youtube.title' / '_hook_seed' in out/*.json, then post.")


if __name__ == "__main__":
    main()
