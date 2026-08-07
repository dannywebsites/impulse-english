# Humanizer Rules

The full production ruleset. ~240 forbidden words, ~45 forbidden phrases, and structural rules. Every rule here has been validated against thousands of real articles.

**Goal:** strip every signal of AI writing. If the output could plausibly be ChatGPT with a basic prompt, it fails.

---

## Reading level

**Target: Flesch-Kincaid grade 7 or under.**

This is the single most important rule. AI writing is almost always grade 10+ because it defaults to Latinate, polysyllabic, corporate vocabulary. Human writing on the internet lives at grade 6–8.

Concretely:

- Prefer one-syllable words over three-syllable ones
- Prefer Anglo-Saxon roots over Latinate roots (use "use" not "utilize", "help" not "facilitate", "start" not "commence")
- Sentences average 15 words or fewer
- Paragraphs stay short (max 5 sentences, often 2–3)
- No jargon unless immediately defined

If a sentence reads above grade 8, rewrite it. Break it up. Swap the big word for a small one. Remove the qualifier clause.

---

## How to use this file

When writing or revising any section:

1. **Don't use any word on the forbidden list.** There is no "replacement" to fall back on — just use a simpler, more common word Claude would naturally reach for at grade 7 reading level.
2. **If a forbidden word is the only word that works**, the sentence is wrong. Rewrite it.
3. **After writing each section, scan it** for any forbidden word you missed.
4. **Before final output, scan the full article** one more time and check the reading level.

---

## Forbidden phrases (hard ban)

Any sentence containing one of these phrases must be rewritten or deleted.

### Openers
- "In a world where..."
- "In an era of..."
- "In today's digital landscape"
- "In today's fast-paced (world/society/environment)"
- "In the ever-evolving (world/landscape) of"
- "In this comprehensive guide"
- "In this article, we will explore / we'll cover"
- "Whether you're a beginner or an expert"
- "Whether you're a seasoned professional or just starting out"
- "Buckle up"
- "Get ready to..."

### Meta-commentary
- "Let's explore"
- "Let's dive into / dive in"
- "Let's delve into"
- "Let's take a look"
- "Let's get started"
- "Let's get to work"
- "Let's begin"
- "Let's get into it"
- "It's important to note"
- "It's worth noting"
- "It's crucial to"
- "Without further ado"
- "Now, let's..."

### Closers
- "In conclusion"
- "To summarize"
- "In summary"
- "At the end of the day"
- "When all is said and done"

### Corporate filler
- "Serves as a testament"
- "Stands as a testament"
- "Rich tapestry"
- "Vibrant ecosystem"
- "Paradigm shift"
- "Leverage the power of"
- "Unlock the potential"
- "Paving the way"
- "At the forefront of"
- "Shed light on"
- "Game-changing"
- "Cutting-edge"
- "Revolutionary approach"
- "Holistic approach"
- "Valuable insights"
- "Significant impact"
- "Testament to"
- "Thought-provoking"
- "Community engagement"
- "Strong community"
- "Professional development"
- "Through structured..."
- "Stay informed about"
- "Stay informed about reputable"
- "It perfect for"
- "Accessible" (when used as a generic positive adjective — "this tool is accessible")

### Niche-specific (from production anti_ai_guidelines)
These were added for finance/crypto content and may not apply to every article, but the skill inherits them:
- "Start with small"
- "Than you can afford to"
- "More than you can"
- "Afford to"

---

## Forbidden words

Do not use any of these. Rewrite the sentence instead.

**Proper noun exception:** if a banned word is part of a brand name, product name, or official title (e.g., "Google Lens", "Deep Research", "Notion AI Insights", "Key Takeaways" as a competitor's section heading you're quoting), it's allowed. The ban only covers the word used as generic vocabulary. When in doubt, rewrite to avoid the ambiguity.

### Nouns

aim, aims, aspect, challenges, change, climate, community, compel, compelling, complexities, complexity, component, comprehensive, confront, confrontation, confrontational, confrontations, depth, development, dreams, dynamics, elusiveness, embodiment, embodiments, endurance, enlightenment, enlightenments, environment, era, eras, exploration, explorations, facet, facets, groundwork, health, illumination, imperative, imperatives, importance, innovation, innovator, innovators, insight, insights, inspiration, inspirations, interplay, interplays, intricacies, journey, kaleidoscope, kaleidoscopes, key, landscape, landscapes, lens, life, meticulousness, notes, nuance, nuances, offering, poignancy, possibilities, quest, readers, realm, realms, relentlessness, resonance, revolution, roadmap, role, scheme, seamlessness, shape, significance, support, symphony, tapestry, tapestries, tempest, testament, testaments, timelessness, toolkit, transcendence, understanding, value, values, versatility, whimsy

### Descriptors

deep, deeper, deepest, diverse, elegant, hidden, manifold, meaningful, paramount, pivotal, poignant, potent, profound, quirky, relentless, robust, seamless, straightforward, timeless, tireless, transcendent, transformative, underlying, vast, versatile, vibrant, vital, vivid

### Verbs

aimed, aiming, capturing, compels, confront, confronts, confronted, confronting, consider, crafted, curated, deepen, deepens, deepened, deepening, delve, delves, delved, delving, draw, draws, drawn, drawing, elevate, elevates, elevated, elevating, elucidate, elucidates, elucidated, elucidating, elucidatory, embark, embarks, embarked, embarking, embody, embodies, embodied, embodying, embrace, embraces, embraced, embracing, empower, empowers, emulate, emulates, emulated, enact, enacts, endeavor, endeavors, endeavored, endeavoring, endure, endured, enduring, engage, engages, enhance, enhances, enhanced, enhancing, enlighten, enlightens, enlightened, enlightening, ensure, entwine, entwines, entwined, entwining, espouse, espouses, espoused, espousing, esteemed, evoke, evokes, evoked, evoking, evolving, exacerbate, exacerbates, exacerbated, exacerbating, exemplify, exemplifies, exemplifying, explore, explores, explored, exploring, faceted, facilitate, foster, fosters, fostered, fostering, grapple, grapples, grappled, grappling, guiding, harness, highlight, highlights, highlighted, highlighting, illuminate, illuminates, illuminated, illuminating, implement, improve, innovate, innovates, innovated, innovating, inspire, inspires, inspired, inspiring, integrate, interplayed, interplaying, intertwine, intertwines, intertwined, intertwining, jeopardizing, leverage, navigate, navigates, navigated, navigating, optimize, partaking, pivot, pivots, pivoted, pivoting, reimagine, reimagines, reimagined, reimagining, resonate, resonates, resonating, reveal, reveals, revealed, revealing, reverberate, reverberates, reverberated, reverberating, revitalize, revolutionize, revolutionizes, revolutionized, revolutionizing, seek, seeks, seeking, showcase, showcases, showcased, showcasing, streamline, strive, strives, strived, striving, structured, tailor, transcend, transcends, transcended, transcending, underlies, underline, underlines, underlined, underlining, undermine, undermines, undermined, undermining, underpin, underpinned, underpinning, underscore, underscores, underscored, underscoring, undervalue, undervalues, undervalued, undervaluing, unleash, unleashes, unleashed, unleashing, unlock, unlocks, unlocked, unlocking, unravel, unravels, unraveled, unraveling, utilize, valued, valuing, vitalize, weave, weaves, wove, weaving, woven

### Adjectives

aimless, authentic, commendable, complex, creative, critical, crucial, dynamic, elucidative, elucidatory, elusive, endurable, essential, exemplary, explorational, explorative, exploratory, grand, groundbreaking, indelible, innovative, insightful, insignificant, inspirational, intricate, invaluable, meticulous, multifaceted, nonconfrontational, notable, nuanced, powerful, professional, rich, significant, sustainable, uninspired, uninspiring, valuable, whimsical

### Adverbs

additionally, aimlessly, aptly, creatively, critically, crucially, deeply, dynamically, elusively, embracingly, endurably, enduringly, indelibly, insightfully, insignificantly, intricately, invaluably, mere, merely, meticulously, moreover, notably, pivotally, poignantly, powerfully, profoundly, relentlessly, seamlessly, significantly, successfully, timelessly, tirelessly, underly, vibrantly, vividly

### Corporate jargon

aforementioned, commence, constitutes, demonstrate, encompasses, myriad, plethora, signifies, subsequently

---

## Structural rules

### Em dashes

AI overuses em dashes as a tonal crutch. The rule is simple:

- **Zero em dashes.** None. Not one.
- This applies to every section — intro, product reviews, bullets, rating blocks, FAQ, verdict, meta description.
- Replace every em dash with a period, a comma, a colon, or parentheses. If none of those fit, the sentence is wrong — rewrite it.
- En dashes (–) in number ranges like "2-3 sentences" or "$10–$15" are fine, but prefer hyphens where possible.

### Connective phrases

Never start a sentence with:
- "Moreover,"
- "Furthermore,"
- "Additionally,"
- "In addition,"
- "On top of that,"

Replace with: a period and a new sentence. If a connection is needed, use a specific one like "That's because..." or "The result:".

### Tricolons

Don't write "faster, smarter, and better." Pick one specific word that means something. Tricolons are an AI tell.

### Parallel structure overuse

If 3+ sentences in a row follow the same grammatical pattern (e.g., "It can X. It can Y. It can Z."), break the pattern.

### Rhetorical questions

Max 1 per article. AI overuses them as a transition crutch.

### "Not only... but also..."

Never. Rewrite as two short sentences.

### Meta-commentary

Never write "Now that we've covered X, let's talk about Y." Just start talking about Y.

---

## Voice rules

- Use **"you"** not "users" or "people"
- Use contractions: you'll, it's, won't, don't, isn't, aren't
- First person singular (I) is OK if the article has a distinctive POV
- First person plural (we) only for genuinely company-authored content
- Never "as an AI language model" or similar disclaimers

---

## Paragraph rules

- Max 5 sentences per paragraph (aligned with `rules/seo.md`)
- Vary sentence length (short, long, short, medium)
- No wall-of-text — break into sub-headings every 250–300 words
- No passive voice unless grammatically necessary

---

## Specificity test

For every generic claim, ask: **can I cite a number, a brand, a year, or a specific example?**

- If yes → add the specific.
- If no → delete the sentence or rewrite from `research.json`.

Examples:
- Bad: "Many teams use project management tools."
- Good: "Atlassian reports 250,000 teams use Jira as of Q3 2025."

- Bad: "SEO is important for businesses."
- Good: Delete. Saying "SEO is important" in an SEO article is filler.

---

## Paragraph test

Read each paragraph after writing it. Ask:

1. Does it say something specific?
2. Does it earn its place (or could the article stand without it)?
3. Does any sentence in it sound like a template?

If any answer suggests removal, delete or rewrite.

---

## Commonly-tripped word substitutions (domain-specific)

Some banned words show up constantly in SaaS and productivity writing. Use these defaults so you don't hit the same wall twice:

### SaaS / productivity
- "key features" → **"what it does well"**, "main features", "top features"
- "key benefit" → **"main benefit"**, "core benefit"
- "key differentiator" → **"main differentiator"**, "standout"
- "notes" → **"pages"**, "docs", "entries", "notebooks"
- "community" → **"user base"**, "users", "members"
- "support" → **"help desk"**, "customer service", "assistance"
- "seamless integration" → **"works with"**, "plugs into", "connects to"
- "comprehensive" → **"full"**, "complete", "end-to-end"
- "deep" → **"thorough"**, "detailed", "in-depth" (wait — "in-depth" uses "depth" which is banned. Use "detailed" or "full".)
- "robust" → **"solid"**, "strong", "reliable"
- "value" → **"worth"**, "payoff", "return"
- "straightforward" → **"simple"**, "easy", "clear"

### Finance / crypto
- "invest" (OK) but "invest wisely" → **"pick your spots"**, "be picky"
- "navigate the market" → **"read the market"**, "find your way"

### E-commerce
- "embark on your journey" → **"get started"**, "begin"
- "unlock revenue" → **"grow revenue"**, "lift sales"

If a substitution below sounds worse than the forbidden original, the sentence is wrong. Rewrite the whole sentence, not just the word.

---

## Final rule

If the finished article could plausibly have been written by ChatGPT with a basic prompt, it fails. The whole point of this skill is that the output is indistinguishable from a human subject-matter expert writing at grade 7 reading level.
