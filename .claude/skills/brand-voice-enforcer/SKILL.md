---
name: Brand Voice Enforcer
description: >
  Enforce Peninsular Spanish (Spain) language rules, banned AI phrases, and Impulse English Academy
  brand voice standards across all content. Use this skill whenever writing, reviewing, or generating
  any visible Spanish content for the website — blog articles, page copy, meta descriptions, FAQ answers,
  CTA text, or any user-facing text. Also use when validating auto-generated articles from the publish
  pipeline. This skill MUST be applied before any Spanish content is committed or published.
---

# Brand Voice Enforcer

Ensures all visible content on the Impulse English Academy website uses correct Peninsular Spanish,
avoids generic AI language, and maintains consistent brand voice. This skill is the quality gate
for every piece of Spanish text — manual or auto-generated.

## When to Use

- Writing or editing any Spanish content (pages, articles, meta tags, FAQs, CTAs)
- Reviewing auto-generated blog articles before publish
- Creating new page copy for courses, locations, exams
- Writing email notifications or marketing copy
- Any time the `auto-publish-pipeline` skill generates content

---

## 1. Peninsular Spanish Rules (MANDATORY)

### Verb Forms
- **ALWAYS** use vosotros/vuestro forms for second-person plural
- **NEVER** use ustedes (Latin American form)

| Correct (Spain) | Incorrect (Latin American) |
|---|---|
| vosotros tenéis | ustedes tienen |
| vuestro examen | su examen (ambiguous) |
| podéis preparar | pueden preparar |
| os acompañamos | los acompañamos |
| necesitáis practicar | necesitan practicar |
| habéis aprobado | han aprobado |
| estéis preparados | estén preparados |
| sabéis que | saben que |

### Spain-Specific Vocabulary

| Use (Spain) | Never Use (Latin America) |
|---|---|
| ordenador | computadora |
| movil | celular |
| coche | carro |
| vale | OK / dale |
| genial | chevere |
| deberes | tarea (homework) |
| asignatura | materia |
| nota | calificacion |
| matricularse | inscribirse |
| plaza | cupo |
| academia | instituto (for language school) |
| clase particular | tutoria |
| aprobar | pasar (an exam) |
| suspender | reprobar |

### Validation Regex (Vosotros Check)
The article MUST contain at least one vosotros-form word:
```regex
/vosotros|vuestro|vuestra|vuestros|vuestras|tenéis|podéis|sabéis|estéis|necesitáis|habéis/i
```
If zero matches: the content is likely NOT Peninsular Spanish. Flag and rewrite.

---

## 2. Banned AI Phrases (NEVER Use)

These words sound robotic, generic, and immediately signal AI-generated content. They must never appear in any published content:

```
delve, tapestry, realm, landscape, ever-evolving, cutting-edge, robust, transformative,
pivotal, vibrant, crucial, compelling, seamless, groundbreaking, leverage, harness, embark,
navigate (metaphorical), unveil, facilitate, synergy, game-changer, unlock, unleash, elevate,
utilize, endeavour, multifaceted, holistic, paradigm, empower
```

### Detection Regex
```regex
/\bdelve\b|\btapestry\b|\brealm\b|\blandscape\b|\bever-evolving\b|\bcutting-edge\b|\brobust\b|\btransformative\b|\bpivotal\b|\bseamless\b/i
```

**Note:** The regex in `auto-publish.js` only checks a subset. The full list above should be checked manually for any content not processed by the pipeline.

### Spanish Equivalents to Also Avoid
Some AI-generated Spanish text uses translated equivalents of these banned words:
- "profundizar" (delve) — use "analizar" or "explorar"
- "panorama" (landscape) — use "situacion" or "contexto"
- "impulsar" when meaning "empower" — use "ayudar" or "preparar"
- "aprovechar" when meaning "leverage" — use "usar" or "aplicar"
- "embarcarse" (embark) — use "empezar" or "comenzar"
- "sin fisuras" (seamless) — use "fluido" or "natural"

---

## 3. Brand Constants

**Source of truth:** Read `brand-config.ts` at project root for current values.

When templating for a new client, change `brand-config.ts` — not this skill file. Key fields used by this skill: `companyName`, `tagline`, `targetAudience`, `uniqueValue`, `socialProof`, `brandMentionLevel`, `impulseSectionTemplate`, `categoryTopicRef`.

### Brand Mention Rules
- **Level: Subtle** — mention the academy naturally once or twice per article
- Never over-promote or make the article read like an ad
- The brand section is handled programmatically by the `impulseSection` in articles
- The impulseSection CTA is the ONLY hard-sell element — the rest of the article must be informational

### Impulse Section Template
Defined in `brand-config.ts` under `impulseSectionTemplate`. Uses `{companyName}`, `{tagline}`, `{socialProof}`, and `{topicRef}` placeholders filled at runtime per article category.

---

## 4. Tone and Style

- **Register:** Formal but friendly, professional yet approachable
- **Audience awareness:** Write for both parents (searching for kids' classes) AND adult professionals
- **Authority signals:** Reference Cambridge Official Preparatory Center status, pass rates, teacher qualifications
- **Local signals:** Reference La Vaguada, Barrio del Pilar, Madrid where natural
- **Direct address:** Use "vosotros" to create connection (not distant "se" constructions)

### Do NOT:
- Write in passive voice excessively
- Use overly academic/formal register
- Sound like a government document
- Use English words when a natural Spanish equivalent exists
- Use emoji in article body text

---

## 5. Article Quality Gates (Deterministic Validation)

Every article must pass these checks before publication. These are implemented in `validateArticle()` in `auto-publish.js`:

| Check | Rule | Action on Fail |
|---|---|---|
| Word count | 800 - 5000 words | Warning if outside range |
| FAQ section | Must have `## Preguntas frecuentes` heading | Warning — FAQ required for schema |
| H2 count | Minimum 3 `## ` headings | Warning if fewer |
| Vosotros forms | At least 1 vosotros-form word (see regex above) | Warning — likely not Peninsular Spanish |
| Markdown tables | Should use HTML `<table>` instead | Auto-converted by schema converter |
| Banned AI words | None of the 30 banned words | Warning — must be manually fixed |

### Validation Function Reference
```javascript
function validateArticle(articleContent) {
  const warnings = [];
  const wordCount = articleContent.split(/\s+/).length;
  if (wordCount < 800) warnings.push(`Article too short: ${wordCount} words`);
  if (wordCount > 5000) warnings.push(`Article very long: ${wordCount} words`);
  const hasFAQ = /^## (?:Preguntas [Ff]recuentes|FAQ)/m.test(articleContent);
  if (!hasFAQ) warnings.push('Missing FAQ section');
  const h2Count = (articleContent.match(/^## /gm) || []).length;
  if (h2Count < 3) warnings.push(`Only ${h2Count} H2 sections (min 3)`);
  const hasVosotros = /vosotros|vuestro|vuestra|vuestros|vuestras|tenéis|podéis|sabéis|estéis|necesitáis|habéis/i.test(articleContent);
  if (!hasVosotros) warnings.push('No vosotros forms found');
  const banned = /\bdelve\b|\btapestry\b|\brealm\b|\blandscape\b|\bever-evolving\b|\bcutting-edge\b|\brobust\b|\btransformative\b|\bpivotal\b|\bseamless\b/i;
  if (banned.test(articleContent)) warnings.push('Contains banned AI slop words');
  return { warnings, hasFAQ };
}
```

---

## 6. Meta Tag Voice Rules

- **Meta titles (50-60 chars):** Front-load primary keyword in Spanish. NO brand names in title.
- **Meta descriptions (150-160 chars):** Open with strong benefit or hook in Spanish, include subtle CTA.
- **URL slugs:** All lowercase, hyphens only, no accents, 3-5 Spanish words.

### Slug Sanitization
```javascript
slug.toLowerCase()
  .normalize('NFD').replace(/[\u0300-\u036f]/g, '')  // strip accents
  .replace(/[^a-z0-9-]/g, '-')                        // only alphanumeric + hyphens
  .replace(/-{2,}/g, '-')                              // collapse double hyphens
  .replace(/^-|-$/g, '');                              // trim leading/trailing
```

---

## Related Skills

- **auto-publish-pipeline** — calls this skill's validation rules during Step 2.5
- **content-collection-designer** — articles must conform to both this skill's voice rules AND the Zod schema
- **seo-optimizer** — meta tag rules overlap; this skill takes precedence for Spanish-specific decisions
