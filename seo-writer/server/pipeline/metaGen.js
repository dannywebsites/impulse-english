import * as gemini from '../services/gemini.js';
import { emitJobStatus } from '../utils/events.js';

const META_SYSTEM_PROMPT = `Create high-converting SEO metadata for the following content.

LANGUAGE REQUIREMENT (MANDATORY):
- ALL metadata MUST be written in Peninsular Spanish (Spain).
- Use Spain-specific vocabulary and phrasing.
- Slug must use Spanish words (lowercase, hyphens, no accents in slug).

YOUR TASK:
1. Analyze the content to determine funnel stage (TOFU/MOFU/BOFU), primary search intent, main value proposition, target keywords, and key benefits.
2. Extract the H1 heading from the content as foundation for meta title.

Create:
- Meta Title (50-60 characters): Front-load primary keyword in Spanish, include stage-appropriate power words, promise clear value. NO brand names or special characters.
- Meta Description (150-160 characters): Open with compelling benefit/hook in Spanish, include subtle CTA, address specific pain point, incorporate 1-2 secondary keywords naturally.
- Slug (3-5 words): All lowercase with hyphens, contains primary keyword in Spanish, removes stop words, human-readable. No accented characters in slug.

STAGE ADAPTATION:
- If TOFU content: Use educational, explanatory language. Promise learning and understanding.
- If MOFU content: Use evaluative, comparison language. Promise informed decisions and clarity.
- If BOFU content: Use direct, action-oriented language. Promise results and specific outcomes.

Respond with valid JSON only.`;

const META_SCHEMA = {
  type: 'object',
  properties: {
    metatitle: {
      type: 'string',
      description: '50-60 character meta title',
    },
    metadescription: {
      type: 'string',
      description: '150-160 character meta description',
    },
    slug: {
      type: 'string',
      description: 'URL slug with hyphens, lowercase',
    },
  },
  required: ['metatitle', 'metadescription', 'slug'],
};

/**
 * Run meta generator
 */
export async function runMetaGenerator(job, content, settings = {}) {
  const { id: jobId, topic, keywords, language } = job;

  const titleMax = settings.metaTitleMaxLength || 60;
  const descMax = settings.metaDescMaxLength || 160;

  // Dynamically adjust system prompt character limits
  const dynamicSystemPrompt = META_SYSTEM_PROMPT
    .replace('50-60 characters', `${titleMax - 10}-${titleMax} characters`)
    .replace('150-160 characters', `${descMax - 10}-${descMax} characters`);

  // Dynamically adjust schema descriptions
  const dynamicSchema = {
    ...META_SCHEMA,
    properties: {
      metatitle: {
        type: 'string',
        description: `${titleMax - 10}-${titleMax} character meta title`,
      },
      metadescription: {
        type: 'string',
        description: `${descMax - 10}-${descMax} character meta description`,
      },
      slug: META_SCHEMA.properties.slug,
    },
  };

  try {
    emitJobStatus(jobId, 'meta', 'running', 'Generating SEO metadata...');

    let brandInstruction = '';
    if (settings.brandMentionLevel === 'prominent' && settings.companyName) {
      brandInstruction = `\nInclude "${settings.companyName}" in the meta title if it fits naturally.`;
    }

    const prompt = `PRIMARY FOCUS: ${topic} / ${keywords}
LANGUAGE: ${language}

IMPORTANT: Do NOT add a year to the meta title, meta description, or slug unless the user's keyword already contains a year. Keep metadata focused on the topic itself.${brandInstruction}

CONTENT TO ANALYZE:
${content.substring(0, 5000)}

Generate optimized SEO metadata for this content.`;

    const metadata = await gemini.generateJSON(
      prompt,
      dynamicSchema,
      dynamicSystemPrompt
    );

    emitJobStatus(jobId, 'meta', 'completed', 'SEO metadata generated');

    return metadata;
  } catch (error) {
    emitJobStatus(jobId, 'meta', 'error', `Meta generation failed: ${error.message}`);
    throw error;
  }
}

export default runMetaGenerator;
