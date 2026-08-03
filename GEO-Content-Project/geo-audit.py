#!/usr/bin/env python3
"""
GEO Service Page Audit — scores location pages against the 16-element scorecard
from `Service Page GEO Audit _ Checklist - GEO Audit.csv`.

Each element scores 0-10. Raw /160 -> GEO score /100 -> grade.
Gate for this project: every element >= 9, total >= 90 (grade A).

Mechanical signals only. Rows marked [J] need human judgement and are scored
conservatively from proxies — the script never flatters a page it cannot verify.

Usage: python3 geo-audit.py [--dir PAGES_DIR] [--json out.json]
"""

import re, os, sys, json, glob, itertools, argparse, unicodedata

DEFAULT_DIR = ("/Users/danny/Desktop/backup website Impuls Englisch /"
               "March-Impulse-Web-e7ad8740054b4e468e95bc81e5e4c79f17b98c97")

HERE = os.path.dirname(os.path.abspath(__file__))
# Ground truth for the review count, pulled live from the Google profile by
# reviews/pull_reviews.py. The shipped AggregateRating is scored against this
# rather than against a number typed into the audit, so the check can't go stale.
REVIEWS_JSON = os.path.join(HERE, "reviews", "reviews.json")


def live_review_count():
    try:
        return json.load(open(REVIEWS_JSON))["meta"]["reviews_count"]
    except Exception:
        return None

ELEMENTS = [
    ("CONTENT UNIQUENESS", "Title Tag"),
    ("CONTENT UNIQUENESS", "H1 Heading"),
    ("CONTENT UNIQUENESS", "Intro Paragraph"),
    ("CONTENT UNIQUENESS", "Overall Uniqueness"),
    ("LOCAL TRUST SIGNALS", "Team Member/Expert"),
    ("LOCAL TRUST SIGNALS", "Testimonials"),
    ("LOCAL TRUST SIGNALS", "Case Studies"),
    ("LOCAL TRUST SIGNALS", "Service Area Details"),
    ("TRANSACTIONAL", "Hero CTA"),
    ("TRANSACTIONAL", "Pricing Information"),
    ("TRANSACTIONAL", "FAQ Section"),
    ("TRANSACTIONAL", "Contact Information"),
    ("TECHNICAL & SCHEMA", "LocalBusiness Schema"),
    ("TECHNICAL & SCHEMA", "Service Schema"),
    ("TECHNICAL & SCHEMA", "FAQPage Schema"),
    ("TECHNICAL & SCHEMA", "AggregateRating"),
]

# The page sets this scorecard can be run against. Same 16 elements either way —
# what changes is which components are peers for the uniqueness comparison, and
# whether a page carries a place name of its own.
#
# `own_place_name`: barrio pages are named after a place, so score_h1 credits the
# page's own barrio as a local signal. Service pages are named after an audience
# ("Adultos", "Primaria"), so there is no place name to look for and the H1 has to
# earn its local signal from the shared vocabulary like every other page.
PAGE_SETS = {
    "barrios": {
        "glob": "pages/ubicaciones/*.tsx",
        "label": "barrio pages",
        "own_place_name": True,
    },
    "servicios": {
        "glob": "pages/cursos/*.tsx",
        "label": "service pages",
        "own_place_name": False,
    },
}

# Spanish generic-marketing blacklist — the anti-pattern phrases that cap a score.
BLACKLIST = [
    r"tu academia de confianza", r"l[ií]deres en", r"amplia experiencia",
    r"profesionales cualificados", r"la mejor academia", r"no dudes en contactar",
    r"estamos aqu[ií] para ayudarte", r"m[aá]s de \d+ a[ñn]os de experiencia",
    r"comprometidos con", r"apuesta por la calidad",
]

# Local-signal vocabulary: transit, street types, named landmarks.
LOCAL_SIGNALS = [
    r"\bL[79]\b", r"l[ií]nea [79]", r"metro", r"autob[uú]s", r"\bbus\b",
    r"Av\. de", r"Avenida", r"calle", r"paseo", r"plaza", r"glorieta",
    r"Herrera Oria", r"El Ferrol", r"La Vaguada", r"Castellana", r"Ilustraci[oó]n",
    r"Fermín Caballero", r"Ginzo de Limia", r"Pe[ñn]agrande", r"colegio", r"instituto",
    r"\bIES\b", r"parque", r"centro comercial",
]

WORD_RE = re.compile(r"\b\w{4,}\b", re.UNICODE)


def strip_code(src: str) -> str:
    """Reduce a TSX file to its human-visible Spanish text, roughly."""
    s = re.sub(r"className=\"[^\"]*\"", " ", src)
    s = re.sub(r"import .*?;", " ", s)
    s = re.sub(r"//.*", " ", s)
    s = re.sub(r"/\*.*?\*/", " ", s, flags=re.S)
    s = re.sub(r"<[^>]+>", " ", s)
    s = re.sub(r"\s+", " ", s)
    return s


def read(path):
    with open(path, encoding="utf-8") as fh:
        return fh.read()


def find_astro_for(page_name, root):
    """Map AdultosPage.tsx -> the src/pages/**/*.astro wrapper that imports it.

    The glob is RECURSIVE. It used to be `src/pages/*.astro`, which only ever sees
    top-level routes — every page in a subdirectory (cursos-ingles/, examenes-cambridge/)
    resolved to None, and a None wrapper silently scores Title Tag and all four schema
    rows as 0. The barrio pages happened to live at the top level, so the bug stayed
    invisible until this ran against the service pages.

    Matched on a word boundary: the bare substring test made `ParticularsPage` match
    any wrapper that merely mentioned it, and short stems collide easily.
    """
    stem = os.path.basename(page_name).replace(".tsx", "")
    probe = re.compile(r"\b%s\b" % re.escape(stem))
    for astro in sorted(glob.glob(os.path.join(root, "src/pages/**/*.astro"), recursive=True)):
        if probe.search(read(astro)):
            return astro
    return None


# Mirrors utils/buildPageTitle.ts. The .astro `title=` prop is a THEME, not the
# finished title: unless the page passes fullTitle, BaseLayout appends the brand
# chain and hard-truncates to 70 chars. Scoring the prop instead of the composed
# string is how four pages scored 9-10 here while shipping titles that read
# "Inglés a una parada de La Ventilla | Camb | Impulse English La Vaguada".
CORE_BRAND = "Impulse English Academy La Vaguada"
BARRIO_SUFFIX = "Barrio del Pilar"
SHORT_BRAND = "Impulse English La Vaguada"
SEP = " | "


def compose_title(theme, full_title):
    """Return (the title Google actually sees, whether the theme got cut)."""
    if full_title:
        return theme, False
    barrio_bonus = theme + SEP + CORE_BRAND + SEP + BARRIO_SUFFIX
    standard = theme + SEP + CORE_BRAND
    emergency = theme + SEP + SHORT_BRAND
    if len(theme) < 15 and len(barrio_bonus) <= 70:
        return barrio_bonus, False
    if len(standard) <= 70:
        return standard, False
    if len(emergency) <= 70:
        return emergency, False
    max_theme = 70 - len(SEP) - len(SHORT_BRAND)
    return theme[:max_theme] + SEP + SHORT_BRAND, True


def score_title(astro_src, all_titles, title, truncated=False, theme=None):
    """Scored against `title` — the composed string Google renders, not the prop."""
    if not title:
        return 0, "no title found"
    if truncated:
        # Chopped mid-word is worse than generic: it ships visibly broken.
        return 2, "theme too long, BaseLayout truncated it to %r" % title
    t = title.lower()
    # Pure template "[service] [barrio]" with nothing else. Judged on the theme,
    # since the appended brand chain would mask it in the composed title.
    probe = (theme if theme is not None else title).lower().strip()
    generic = bool(re.fullmatch(r"academia (de )?ingl[eé]s [\w\s]+", probe))
    has_brand = "impulse" in t
    has_differentiator = bool(re.search(
        r"cambridge|100%|gratis|gratuita|\d+\s?€|grupos reducidos|desde|min|oficial", t))
    dupes = sum(1 for o in all_titles if o and o.lower() == t)
    if dupes > 1:
        return 2, "title duplicated across pages"
    if generic and not has_differentiator:
        return 3, "template '[servicio] [barrio]', no differentiator"
    s = 4
    if has_differentiator: s += 3
    if has_brand: s += 2
    # The book's rule: <=60 chars or Google truncates it in the SERP.
    if len(title) <= 60: s += 1
    return min(s, 10), f"len={len(title)} brand={has_brand} diff={has_differentiator}"


NUMBER_WORDS = r"\b(?:una?|dos|tres|cuatro|cinco|seis|siete|ocho|nueve|diez)\b"


def score_h1(text, h1, all_h1s, barrio=None):
    if not h1:
        return 0, "no H1 found"
    dupes = sum(1 for o in all_h1s if o and o.strip().lower() == h1.strip().lower())
    if dupes > 1:
        return 2, "H1 duplicated across pages"
    # The page's OWN barrio name is the strongest local signal it can carry —
    # the generic vocabulary list doesn't contain every barrio, so check it too.
    # Filenames are unaccented (TetuanPage.tsx) but the copy is not (Tetuán),
    # so compare with accents stripped or the page's own barrio never matches.
    def deaccent(x):
        return "".join(c for c in unicodedata.normalize("NFD", x)
                       if unicodedata.category(c) != "Mn")
    has_local = bool(re.search("|".join(LOCAL_SIGNALS), h1, re.I))
    if not has_local and barrio:
        has_local = deaccent(barrio).lower() in deaccent(h1).lower()
    # "a una parada" is as concrete as "a 2 paradas"; Spanish spells small
    # numbers out, so digits alone under-credit a specific claim.
    has_number = bool(re.search(r"\d", h1)) or bool(re.search(NUMBER_WORDS, h1, re.I))
    s = 5
    if has_local: s += 2
    if has_number: s += 2
    return min(s, 10), f"local={has_local} number={has_number}"


def score_intro(text):
    """First ~80 words of visible copy = the answer capsule slot."""
    words = text.split()[:120]
    intro = " ".join(words)
    hits = len(re.findall("|".join(LOCAL_SIGNALS), intro, re.I))
    # Case-insensitive: headings and card titles are title-cased ("7-10 Alumnos",
    # "15 Minutos"), and a matched-case scan silently skipped every one of them.
    nums = len(re.findall(r"\d+\s?(?:€|min|a[ñn]os|alumnos|%)", intro, re.I))
    black = [b for b in BLACKLIST if re.search(b, intro, re.I)]
    s = 3
    s += min(hits, 3)
    s += min(nums * 2, 4)
    if black: s = max(0, s - 3)
    return min(s, 10), f"local_refs={hits} numbers={nums} blacklist={len(black)}"


def score_uniqueness(name, sets):
    """Near-duplicate similarity via 3-word shingles, not bag-of-words.

    Bag-of-words Jaccard is the wrong tool here: two Spanish pages about the
    same English academy share most of their vocabulary by definition, so it
    reported 0.72-0.77 overlap even for pages with completely different prose.
    Shingling is what actual near-duplicate detection (MinHash) uses. A 3-word
    window is the middle ground: less noisy than bag-of-words, and less brittle
    than 5+ grams, which a single swapped barrio name would break everywhere
    while leaving the sentence otherwise identical.

    Bands follow the source scorecard: <30% unique poor, 30-50% average,
    >50% excellent.
    """
    others = [v for k, v in sets.items() if k != name]
    mine = sets[name]
    if not mine:
        return 0, "empty"
    worst = max(len(mine & o) / len(mine | o) for o in others) if others else 0
    unique_pct = (1 - worst) * 100
    if unique_pct < 30: s_ = 2
    elif unique_pct < 50: s_ = 5
    elif unique_pct < 55: s_ = 7
    elif unique_pct < 60: s_ = 8
    elif unique_pct < 65: s_ = 9
    else: s_ = 10
    return s_, "max 3-gram overlap=%.2f -> %.0f%% unique vs nearest page" % (worst, unique_pct)


def score_team(text):
    named = [n for n in ("JP", "Danny Fitzpatrick", "Danny") if re.search(rf"\b{n}\b", text)]
    if not named:
        return 2, "no named teacher"
    s = 5
    if re.search(r"director de estudios|cofundador", text, re.I): s += 2
    if re.search(r"\d+\s?a[ñn]os", text): s += 2
    if re.search(r"Irlanda|irland[eé]s", text, re.I): s += 1
    return min(s, 10), f"named={named}"


# Testimonials are checked against the live Google Business Profile, not against a
# list maintained by hand. `reviews/reviews.json` holds all 180 reviews as pulled
# from the profile; a name that isn't in it is invented, and words that aren't in
# that person's review are invented too - which a name allowlist can never catch,
# and which is how paraphrased quotes stayed live under real customers' names.
sys.path.insert(0, os.path.join(os.path.dirname(os.path.abspath(__file__)), "reviews"))
import verify_quotes as VQ   # noqa: E402

_REVIEWS, _BY_AUTHOR = VQ.load_reviews()


def score_testimonials(text, src, dist_html=None):
    quotes = VQ.extract(src)
    if not quotes:
        return 0, "no testimonials on page"

    results = [(n, ) + VQ.check(n, t, _BY_AUTHOR) for n, t in quotes]
    bad = [(n, status, why) for n, status, why in results if status != "OK"]
    if bad:
        # Publishing words a customer did not write - under their name - is a trust
        # failure and, in Spain, a consumer-law problem. No partial credit.
        return 0, "; ".join("%s: %s" % (s, n) for n, s, _ in bad[:3])

    # The rendered page is the ground truth for whether it actually shipped.
    if dist_html:
        shown = [n for n, _, _ in results if n in dist_html]
        if len(shown) < min(2, len(results)):
            return 3, "only %d verified review(s) rendered on the page" % len(shown)

    names = [n for n, _, _ in results]
    s = 5
    if len(names) >= 2: s += 2
    if len(names) >= 3: s += 1
    if all(" " in n for n in names): s += 2   # full names, not "Cristina R."
    return min(s, 10), "verbatim Google reviews=%d" % len(names)


def score_case_study(text, src):
    named = [n for n in ("Sergio", "Daniel de la Pe", "Josmary", "Josh Mary") if n in src]
    if not named:
        return 0, "no case study"
    s = 5
    if re.search(r"\d+\s?(meses|a[ñn]o)", text): s += 2
    if re.search(r"B1|B2|C1|C2", text): s += 2
    return min(s, 10), f"case_studies={named}"


def score_area(text):
    hits = len(set(re.findall("|".join(LOCAL_SIGNALS), text, re.I)))
    times = len(re.findall(r"\d+\s?min", text))
    s = 2
    s += min(hits, 4)
    s += min(times, 4)
    return min(s, 10), f"distinct_local_signals={hits} travel_times={times}"


def score_cta(src):
    hero = src[:src.find("</section>") if "</section>" in src else 4000]
    wa = "whatsapp" in hero.lower() or "wa.me" in hero.lower()
    prueba = "prueba de nivel" in hero.lower()
    href = bool(re.search(r"<a\s[^>]*href", hero))
    s = 2
    if href: s += 2
    if wa: s += 3
    if prueba: s += 3
    return min(s, 10), f"link={href} whatsapp={wa} prueba_de_nivel={prueba}"


def score_pricing(text):
    figs = re.findall(r"\d+\s?€|€\s?\d+", text)
    ranges = re.findall(r"desde \d+", text, re.I)
    if not figs:
        return 2 if re.search(r"precio|tarifa|consultar", text, re.I) else 0, "no price figures"
    s = 4
    s += min(len(set(figs)), 4)
    if ranges: s += 2
    return min(s, 10), f"price_figures={sorted(set(figs))[:6]}"


def score_faq(src, text):
    n = len(re.findall(r"question:", src))
    if n == 0:
        return 0, "no FAQ block"
    local = len(re.findall(r"question:\s*\"[^\"]*(?:barrio|zona|desde|cerca|metro|tarda|"
                           r"Vaguada|Pilar|Tetu|Mirasierra|Pe[ñn]agrande)", src, re.I))
    s = 3
    if n >= 5: s += 2
    if n >= 7: s += 1
    s += min(local, 4)
    return min(s, 10), f"faqs={n} location_specific={local}"


def score_contact(text, src):
    # The pages render contact details through the NAP module, so the literal digits
    # never appear in source. Resolve through the import, not the raw string.
    phone = bool(re.search(r"604\s?910\s?611|604910611|NAP\.phone|NAP\.phoneTel", src))
    addr = "El Ferrol" in text or "NAP.fullAddress" in src or "NAP.shortAddress" in src
    hours = bool(re.search(r"\d{1,2}:\d{2}|NAP\.openingHours", src))
    s = 1 + 3 * phone + 3 * addr + 3 * hours
    return min(s, 10), f"phone={phone} address={addr} hours={hours}"


def resolve_schema_helper(root):
    """Read what generateLocationPageSchema actually emits.

    The .astro wrappers only CALL the helper — the @type nodes live in
    utils/schemaData.ts. Scoring the wrapper text alone reports false failures.
    """
    path = os.path.join(root, "utils/schemaData.ts")
    if not os.path.exists(path):
        return {}
    src = read(path)
    body, capture, depth = [], False, 0
    for line in src.splitlines():
        if "export function generateLocationPageSchema" in line:
            capture = True
        if capture:
            body.append(line)
            depth += line.count("{") - line.count("}")
            if depth <= 0 and len(body) > 1:
                break
    b = "\n".join(body)
    # The rating VALUES live in napData, not in the helper that emits the node.
    nap = os.path.join(root, "utils/napData.ts")
    shipped_count = None
    if os.path.exists(nap):
        m = re.search(r"reviewCount:\s*(\d+)", read(nap))
        if m:
            shipped_count = int(m.group(1))
    return {
        "reviewCount": shipped_count,
        "service": bool(re.search(r'"@type":\s*"Service"', b)),
        "offers": bool(re.search(r'"@type":\s*"Offer"', b)),
        "prices": sorted(set(re.findall(r'price:\s*"(\d+)"', b))),
        "rating": "aggregateRating" in b,
        "geo": "latitude" in b or "NAP.geo" in b or "getSchemaAddress" in b,
        "areaServed": "areaServed" in b,
    }


def score_schema(astro_src, kind, helper):
    if astro_src is None:
        return 0, "no .astro wrapper found"
    a = astro_src
    calls_location = "generateLocationPageSchema" in a
    if kind == "local":
        if not calls_location:
            return 0, "no LocalBusiness schema"
        s = 7 + (1 if helper.get("geo") else 0) + (1 if helper.get("areaServed") else 0)
        return s, "generateLocationPageSchema: geo=%s areaServed=%s" % (
            helper.get("geo"), helper.get("areaServed"))
    if kind == "service":
        if not (calls_location and helper.get("service")):
            return 0, "no Service schema"
        if helper.get("offers") and helper.get("prices"):
            return 9, "Service + Offer with prices %s (via helper)" % helper["prices"]
        return 6, "Service present but no priced Offer"
    if kind == "faq":
        if "generateFAQSchema" not in a:
            return 0, "no FAQPage schema"
        return 9, "generateFAQSchema wired"
    if kind == "rating":
        if not (calls_location and helper.get("rating")):
            return 0, "no AggregateRating on page"
        shipped, live = helper.get("reviewCount"), live_review_count()
        if live is None:
            return 8, ("AggregateRating via helper, reviewCount=%s — no reviews.json "
                       "to check it against (run reviews/pull_reviews.py)" % shipped)
        if shipped == live:
            return 10, ("AggregateRating via helper, reviewCount=%d — in sync with the "
                        "live Google profile" % shipped)
        return 6, ("AggregateRating reviewCount=%s but the profile has %d — re-run "
                   "reviews/pull_reviews.py and update napData" % (shipped, live))
    return 0, "?"


def barrio_of(path):
    """MontecarmeloLasTablasPage.tsx -> 'Montecarmelo' (first CamelCase word)."""
    stem = os.path.basename(path).replace("Page.tsx", "")
    parts = re.findall(r"[A-Z][a-z]+", stem)
    return parts[0] if parts else None


def dist_of(page_path, root, astro_src=None):
    """Read the built HTML for this page, if a dist/ exists.

    Prefers the wrapper's `canonical` prop, which states the built path exactly.
    Guessing the slug from the component name works for barrios but not for
    services: ParticularsPage.tsx serves /cursos-ingles/particulares/ and
    CursosOverviewPage.tsx serves /cursos-ingles/ — neither is derivable from
    the filename. Falls back to the old slug guess so barrio scoring cannot move.
    """
    if astro_src:
        m = re.search(r'canonical="([^"]+)"', astro_src)
        if m:
            cand = os.path.join(root, "dist", m.group(1).strip("/"), "index.html")
            if os.path.exists(cand):
                return read(cand)
    stem = os.path.basename(page_path).replace("Page.tsx", "")
    slug = re.sub(r"(?<!^)(?=[A-Z])", "-", stem).lower()
    for cand in glob.glob(os.path.join(root, "dist", "academia-ingles-*", "index.html")):
        if slug.replace("-", "") in cand.replace("-", "").lower():
            return read(cand)
    return None


def grade(score):
    if score >= 90: return "A"
    if score >= 80: return "B"
    if score >= 70: return "C"
    if score >= 60: return "D"
    return "F"


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("--dir", default=DEFAULT_DIR)
    ap.add_argument("--set", default="barrios", choices=sorted(PAGE_SETS),
                    help="which page set to audit (default: barrios)")
    ap.add_argument("--json")
    args = ap.parse_args()
    root = args.dir
    pset = PAGE_SETS[args.set]

    files = sorted(glob.glob(os.path.join(root, pset["glob"])))
    if not files:
        sys.exit(f"no {pset['label']} under {root}/{pset['glob']}")

    srcs = {f: read(f) for f in files}
    texts = {f: strip_code(s) for f, s in srcs.items()}
    def shingles(t, n=3):
        w = WORD_RE.findall(t.lower())
        return set(tuple(w[i:i + n]) for i in range(len(w) - n + 1))
    sets = {f: shingles(t) for f, t in texts.items()}
    helper = resolve_schema_helper(root)
    astros = {f: find_astro_for(f, root) for f in files}
    astro_srcs = {f: (read(a) if a else None) for f, a in astros.items()}

    titles, themes, truncs, h1s = {}, {}, {}, {}
    for f in files:
        a = astro_srcs[f]
        m = re.search(r'title="([^"]+)"', a) if a else None
        theme = m.group(1) if m else None
        themes[f] = theme
        full = bool(a and re.search(r"fullTitle(?!\s*=\s*\{?\s*false)", a))
        titles[f], truncs[f] = compose_title(theme, full) if theme else (None, False)
        m2 = re.search(r"<h1[^>]*>(.*?)</h1>", srcs[f], re.S)
        h1s[f] = strip_code(m2.group(1)).strip() if m2 else None

    results = {}
    for f in files:
        src, text, a = srcs[f], texts[f], astro_srcs[f]
        row = [
            score_title(a, list(titles.values()), titles[f], truncs[f], themes[f]),
            score_h1(text, h1s[f], list(h1s.values()),
                     barrio_of(f) if pset["own_place_name"] else None),
            score_intro(text),
            score_uniqueness(f, sets),
            score_team(text),
            score_testimonials(text, src, dist_of(f, root, a)),
            score_case_study(text, src),
            score_area(text),
            score_cta(src),
            score_pricing(text),
            score_faq(src, text),
            score_contact(text, src),
            score_schema(a, "local", helper),
            score_schema(a, "service", helper),
            score_schema(a, "faq", helper),
            score_schema(a, "rating", helper),
        ]
        raw = sum(s for s, _ in row)
        results[f] = {"row": row, "raw": raw, "geo": round(raw / 160 * 100),
                      "grade": grade(round(raw / 160 * 100))}

    name = lambda f: os.path.basename(f).replace("Page.tsx", "")
    w = max(len(name(f)) for f in files)

    print("\n" + "=" * 78)
    print(("GEO AUDIT — %s" % pset["label"]).center(78))
    print("=" * 78)
    hdr = "ELEMENT".ljust(24) + "".join(name(f)[:6].rjust(8) for f in files)
    print("\n" + hdr)
    print("-" * len(hdr))
    for i, (cat, el) in enumerate(ELEMENTS):
        line = el[:23].ljust(24)
        for f in files:
            s = results[f]["row"][i][0]
            line += (f"{s}" + ("!" if s < 9 else " ")).rjust(8)

        print(line)
    print("-" * len(hdr))
    print("RAW /160".ljust(24) + "".join(str(results[f]["raw"]).rjust(8) for f in files))
    print("GEO /100".ljust(24) + "".join(str(results[f]["geo"]).rjust(8) for f in files))
    print("GRADE".ljust(24) + "".join(results[f]["grade"].rjust(8) for f in files))
    print("\n('!' marks any element below the project gate of 9)")

    print("\n" + "=" * 78)
    print("WEAKEST ELEMENTS ACROSS ALL PAGES")
    print("=" * 78)
    avgs = []
    for i, (cat, el) in enumerate(ELEMENTS):
        vals = [results[f]["row"][i][0] for f in files]
        avgs.append((sum(vals) / len(vals), el, cat, results[files[0]]["row"][i][1]))
    for avg, el, cat, why in sorted(avgs):
        flag = "BLOCKS A" if avg < 9 else "ok"
        print(f"  {avg:5.1f}/10  {el:<24} [{cat:<19}] {flag}")
        if avg < 9:
            print(f"           └─ e.g. {why}")

    total_raw = sum(results[f]["raw"] for f in files)
    total_geo = round(total_raw / (160 * len(files)) * 100)
    print("\n" + "=" * 78)
    print(f"  SITE-WIDE BASELINE: {total_geo}/100  (grade {grade(total_geo)})")
    print(f"  TARGET:             90/100  (grade A), every element >= 9")
    print(f"  GAP:                {90 - total_geo} points")
    print("=" * 78 + "\n")

    if args.json:
        out = {name(f): {"raw": results[f]["raw"], "geo": results[f]["geo"],
                         "grade": results[f]["grade"],
                         "elements": {ELEMENTS[i][1]: {"score": results[f]["row"][i][0],
                                                       "evidence": results[f]["row"][i][1]}
                                      for i in range(len(ELEMENTS))}} for f in files}
        with open(args.json, "w", encoding="utf-8") as fh:
            json.dump(out, fh, indent=2, ensure_ascii=False)
        print(f"JSON written to {args.json}")


if __name__ == "__main__":
    main()
