#!/usr/bin/env python3
"""How many of an article's FAQ headings came from the scraped People Also Ask box.

Called by gate-article.sh. Lives in its own file because a Python heredoc inside a bash
$( ) command substitution breaks bash's parser as soon as the Python contains a quote.

Usage:  paa-coverage.py <article.md> <serp.json>
Prints: matched|total|need|available     (need = ceil(total/2))
Exit:   0 if matched >= need, 1 otherwise, 2 on bad input.
"""
import json
import re
import sys
import unicodedata


def norm(s):
    """Case, accents and punctuation all drift between the SERP and the article.

    '¿Cuánto cobra un au pair en Irlanda?' and 'Cuanto cobra un au pair en Irlanda'
    are the same question and must compare equal, or the gate punishes correct work.
    """
    s = unicodedata.normalize('NFD', s.lower())
    s = ''.join(c for c in s if unicodedata.category(c) != 'Mn')
    s = re.sub(r'[¿?¡!.,;:\'"()]', '', s)
    return re.sub(r'\s+', ' ', s).strip()


def main():
    if len(sys.argv) != 3:
        print('usage: paa-coverage.py <article.md> <serp.json>', file=sys.stderr)
        return 2
    article_path, serp_path = sys.argv[1], sys.argv[2]

    try:
        body = open(article_path, encoding='utf-8').read()
        data = json.load(open(serp_path, encoding='utf-8'))
    except Exception as e:  # noqa: BLE001 - the gate needs the reason, not a traceback
        print(f'error reading inputs: {e}', file=sys.stderr)
        return 2

    faqs = [norm(m) for m in re.findall(r'^###\s+(.+)$', body, re.M)]
    paa = {
        norm(p['question'])
        for k in data.get('keywords', [])
        for p in k.get('peopleAlsoAsk', [])
        if p.get('question')
    }

    matched = sum(1 for f in faqs if f in paa)
    need = (len(faqs) + 1) // 2  # ceil
    print(f'{matched}|{len(faqs)}|{need}|{len(paa)}')
    return 0 if matched >= need else 1


if __name__ == '__main__':
    sys.exit(main())
