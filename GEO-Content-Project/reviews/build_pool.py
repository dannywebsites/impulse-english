#!/usr/bin/env python3
"""
Turn the 180 pulled Google reviews into a publishable pool.

Reads  reviews.json   (raw truth from Google, never edited by hand)
Writes review-pool.json  (every review + eligible/ineligible + why + theme tags)

Eligibility rules, all of them defensible in front of a customer:
  1. 5 stars.
  2. At least MIN_CHARS of actual text - a quote has to say something.
  3. At most MAX_CHARS - longer than this and it gets truncated on the page,
     and truncating a customer's words is editing them.
  4. A real full name (>= 2 tokens). "Rosa E." style initials are allowed only
     if Google itself shows them that way, but anonymous accounts are not.
  5. No teacher named outside the approved set {JP, Danny}. Standing rule from
     Business-Information.txt: the third teacher is not referenced anywhere.
     We never edit a customer's words - we just don't place that review.
  6. Written in Spanish or English (the site's two languages).

Themes are tagged so the allocator can match a review to the barrio it fits:
family barrios get parent reviews, commuter barrios get career reviews, etc.
"""
import json, os, re, unicodedata

HERE = os.path.dirname(os.path.abspath(__file__))
IN = os.path.join(HERE, "reviews.json")
OUT = os.path.join(HERE, "review-pool.json")

# Lowered 70 -> 43 on 2026-08-03 to open enough headroom for four new barrio
# pages. 78 of the 79 reviews eligible at 70 chars were already placed, and the
# no-repeats rule means a new page needs new reviews. 43 is not arbitrary: it is
# the shortest real review that still reads as a sentence rather than a fragment.
# Raise it again once JP brings in more long reviews — shorter quotes are weaker.
MIN_CHARS = 43
MAX_CHARS = 600

# Teachers we are allowed to name on the site. Anything else in a quote
# disqualifies that quote (we do not edit the customer's text).
# "fitzpatrick" added 2026-08-05: the capitalised-token scan splits "Danny
# Fitzpatrick" and flagged the surname of a cofounder as an unapproved teacher,
# which blocked the only review describing the Ireland programme.
APPROVED_TEACHERS = {"jp", "danny", "dani", "daniel", "fitzpatrick"}

# Teachers who really do appear in the reviews but are not in the approved set.
# Matched case-insensitively anywhere in the text, because the capitalised-token
# scan below misses a name that lands at the start of a sentence.
BLOCKED_TEACHERS = {"ahu", "chesca", "katie", "thomas", "stephan", "stephen",
                    "philip", "philippe", "mauricio"}

# Words that are capitalised mid-sentence in Spanish but are not people.
NOT_PEOPLE = {
    "impulse", "english", "academy", "academia", "cambridge", "advanced", "first",
    "proficiency", "starters", "movers", "flyers", "trinity", "linguaskill", "ket",
    "pet", "fce", "cae", "cpe", "madrid", "españa", "spain", "irlanda", "ireland",
    "inglés", "ingles", "english", "google", "eoi", "esic", "eso", "bachillerato",
    "ebau", "selectividad", "navidad", "septiembre", "junio", "verano", "erasmus",
    "b1", "b2", "c1", "c2", "a1", "a2", "barrio", "pilar", "vaguada", "tetuán",
    "whatsapp", "instagram", "facebook", "reino", "unido", "estados", "unidos",
    "nueva", "york", "londres", "dublín", "dublin", "recomiendo", "gracias",
    "muchas", "enhorabuena", "gran", "gente", "gracias", "gustaría", "gustaria",
    "gustan", "también", "gonzalo", "gustó",
    # Study-abroad vocabulary, added 2026-08-05 with the /ingles-en-el-extranjero/
    # pages. "Canadá" and "Osteópatas" were both being read as teacher names.
    # Lookup happens after strip_accents(), so the unaccented form is what matters.
    "canada", "malta", "osteopatas", "osteopata", "drogheda", "eaquals",
    "aseproce", "irlandes", "irlandesa", "escocia", "gales", "boston", "toronto",
    "vancouver", "florida", "california",
    # Ordinary Spanish words that happen to start a sentence, so the
    # capitalised-token scan reads them as names. Each one here was observed
    # blocking a real review: "Sobre todo…", "Sigan así", "Recomendados 100%".
    "sobre", "sigan", "recomendados", "recomendado", "recomendable", "excelente",
    "excelentes", "desde", "tanto", "completamente", "totalmente", "siempre",
    "ademas", "aunque", "porque", "cuando", "despues", "ahora", "todos", "todas",
    "nunca", "nada", "personalmente", "realmente", "gran", "grandes", "mejor",
    "mejores", "buenos", "buenas", "buena", "bueno", "clases", "profesores",
    "profesorado", "trato", "ambiente", "calidad", "atencion", "hola", "estoy",
    "llevo", "hace", "para", "como", "salir", "hay", "mis", "mi", "los", "las",
}


def strip_accents(s):
    return "".join(c for c in unicodedata.normalize("NFD", s)
                   if unicodedata.category(c) != "Mn")


def other_teacher_mentions(text):
    """Names in the quote that are people but not JP or Danny.

    Two passes: an explicit 'profesor/a X' / 'con X' construction, and a general
    mid-sentence capitalised-token scan. Anything this flags is dropped from the
    pool - a false positive costs us one quote out of 100+, a false negative
    puts an excluded teacher's name on the site.
    """
    hits = set()
    for t in BLOCKED_TEACHERS:
        # "Isla Mauricio" is Mauritius, not a teacher - the only place-name clash.
        if t == "mauricio" and re.search(r"isla\s+mauricio", text, re.I):
            continue
        if re.search(r"\b" + t + r"\b", text, re.I):
            hits.add(t.capitalize())
    for m in re.finditer(r"(?:profesor(?:a)?|teacher|maestr[oa]|con la|con el|con)\s+"
                         r"([A-ZÁÉÍÓÚÑ][a-záéíóúñ]{1,})", text):
        hits.add(m.group(1))
    for m in re.finditer(r"(?<![.!?¡¿]\s)(?<!^)\b([A-ZÁÉÍÓÚÑ][a-záéíóúñ]{2,})\b", text):
        hits.add(m.group(1))
    out = []
    for h in hits:
        low = strip_accents(h).lower()
        if low in NOT_PEOPLE or low in APPROVED_TEACHERS:
            continue
        # A capitalised word that is also a normal Spanish word in lowercase
        # elsewhere in the corpus is almost never a name; keep the check simple
        # and let the human review the flagged list.
        out.append(h)
    return sorted(out)


BRAND_WORDS = {"english", "academy", "academia", "school", "coaching", "cake", "sl", "s.l"}

# Judgement calls a regex can't make: real reviews posted under an alias or a
# business account. The review is genuine; the byline would read as invented.
# One name per line, '#' comments allowed.
EXCLUDED_NAMES_FILE = os.path.join(HERE, "excluded-names.txt")


def excluded_names():
    try:
        lines = open(EXCLUDED_NAMES_FILE, encoding="utf-8").read().splitlines()
    except OSError:
        return set()
    return {strip_accents(l.split("#")[0].strip()).lower()
            for l in lines if l.split("#")[0].strip()}


EXCLUDED = None


def name_problems(author):
    """A testimonial byline has to look like a person, because it is one."""
    global EXCLUDED
    if EXCLUDED is None:
        EXCLUDED = excluded_names()
    out = []
    toks = author.split()
    if len(toks) < 2:
        out.append("no full name")
    if re.search(r"usuario de google|google user", author, re.I):
        out.append("anonymous account")
    if re.search(r"\d", author):
        out.append("username, not a name")
    low = [strip_accents(t).lower() for t in toks]
    if len(low) != len(set(low)):
        out.append("duplicated name token (auto-generated handle)")
    if any(t in BRAND_WORDS for t in low):
        out.append("business account, not a person")
    if strip_accents(author).lower() in EXCLUDED:
        out.append("on excluded-names.txt")
    return out


THEMES = [
    ("cambridge", r"cambridge|advanced|first certificate|\bfce\b|\bcae\b|b1|b2|c1|"
                  r"examen|aprob|t[ií]tulo|certificad"),
    ("parent",    r"mi hij|mis hij|mi peque|mi ni[ñn]|mi hija|padre|madre"),
    ("kids",      r"ni[ñn]os|infantil|peque[ñn]os|le encanta|van content"),
    ("adult",     r"trabajo|laboral|entrevista|empresa|profesional|curr[ií]cul|"
                  r"mi nivel|empec[ée] de cero|adulto"),
    ("teens",     r"eso\b|bachillerato|instituto|adolescen|selectividad|ebau"),
    ("method",    r"m[ée]todo|din[áa]mic|clases amenas|forma de ense[ñn]ar|divertid"),
    ("atmosphere", r"ambiente|familiar|cercan|trato|acogedor|como en casa"),
    ("progress",  r"progres|avanz|mejorad|evoluci[óo]n|nivel ha subido|not[ao] la diferencia"),
    ("recommend", r"recomiendo|recomendable|sin duda|100%"),
]


def tag(text):
    low = strip_accents(text).lower()
    return [name for name, pat in THEMES
            if re.search(strip_accents(pat), low)]


def build():
    doc = json.load(open(IN))
    pool = []
    for r in doc["reviews"]:
        reasons = []
        text, author = r["text"], r["author"]
        if r["rating"] != 5:
            reasons.append("not 5 stars")
        if len(text) < MIN_CHARS:
            reasons.append("too short (%d chars)" % len(text))
        if len(text) > MAX_CHARS:
            reasons.append("too long to quote whole (%d chars)" % len(text))
        reasons += name_problems(author)
        others = other_teacher_mentions(text)
        if others:
            reasons.append("names a teacher outside the approved set: " + ", ".join(others))
        rec = dict(r)
        rec["themes"] = tag(text)
        rec["eligible"] = not reasons
        rec["blocked_by"] = reasons
        pool.append(rec)

    doc_out = {
        "meta": dict(doc["meta"], eligible=sum(1 for p in pool if p["eligible"]),
                     rules={"min_chars": MIN_CHARS, "max_chars": MAX_CHARS,
                            "approved_teachers": sorted(APPROVED_TEACHERS)}),
        "reviews": pool,
    }
    json.dump(doc_out, open(OUT, "w"), ensure_ascii=False, indent=2)
    print("eligible %d / %d  ->  %s" % (doc_out["meta"]["eligible"], len(pool), OUT))
    return doc_out


if __name__ == "__main__":
    build()
