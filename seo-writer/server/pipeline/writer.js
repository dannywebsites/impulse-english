import * as claude from '../services/claude.js';
import { emitJobStatus } from '../utils/events.js';

const BASE_WRITER_SYSTEM_PROMPT = `Create exceptional content that dominates search results and perfectly serves user intent based on the comprehensive research brief provided.

LANGUAGE REQUIREMENT (MANDATORY):
- Write ALL content in Peninsular Spanish (Spanish from Spain).
- Use vosotros/vuestro forms for second-person plural (NEVER ustedes).
- Use Spain-specific vocabulary: ordenador (not computadora), móvil (not celular), coche (not carro), vale (not OK).
- Tone: formal but friendly, professional yet approachable.
- NEVER use Latin American Spanish variants.

EXECUTION REQUIREMENTS:
- Follow the exact content structure recommended in the research
- Address every "must-include element" identified
- Use all key statistics and data points discovered
- Write to the identified user profile and expertise level
- Match or exceed the content length recommendation
- Incorporate semantic keywords naturally throughout
- Implement the unique differentiation angle specified

OUTPUT FORMAT:
Begin content immediately without prefixes, explanations, or markdown code blocks. Write in the format determined by research (guide, comparison article, listicle, etc.).`;

/**
 * Build the word count instruction based on settings
 */
function getWordCountInstruction(settings) {
  if (settings.customWordCount) {
    return `TARGET LENGTH: Approximately ${settings.customWordCount} words.`;
  }
  const lengthMap = {
    short: 'TARGET LENGTH: Approximately 500 words. Keep it concise and focused.',
    standard: 'TARGET LENGTH: Approximately 1,500 words. Balanced depth and readability.',
    detailed: 'TARGET LENGTH: Approximately 2,500 words. In-depth coverage of the topic.',
    long: 'TARGET LENGTH: Approximately 3,500 words. Comprehensive, long-form treatment.',
    auto: '', // Let the AI decide based on research
  };
  return lengthMap[settings.articleLength] || '';
}

/**
 * Format in-blog images for writer prompt
 */
function formatInBlogImages(inBlogImages) {
  if (!inBlogImages || inBlogImages.length === 0) {
    return 'No images provided - create vivid, descriptive content that paints mental pictures';
  }

  return inBlogImages
    .map((img, i) => {
      if (img.url) {
        return `Image ${i + 1}:
- Placement: ${img.placement}
- Caption: ${img.caption}
- Alt text: ${img.alt_text}
- URL: ${img.url}`;
      } else {
        return `Image ${i + 1} failed to generate - continue without it`;
      }
    })
    .join('\n\n');
}

/**
 * Run writer agent
 */
export async function runWriter(job, researchData, inBlogImages = [], settings = {}, sitemapPages = []) {
  const { id: jobId, topic, keywords, language } = job;

  try {
    emitJobStatus(jobId, 'writing', 'running', 'Writing content...');

    // Build dynamic system prompt sections
    const sections = [BASE_WRITER_SYSTEM_PROMPT];

    // Writing samples for voice/style reference
    if (settings.writingSamples && settings.writingSamples.length > 0) {
      const sampleTexts = settings.writingSamples
        .map((s, i) => `--- Sample ${i + 1}: "${s.title}" ---\n${s.content.substring(0, 3000)}`)
        .join('\n\n');
      sections.push(`\nWRITING STYLE REFERENCE — Analyze and match the tone, voice, and style of these writing samples:\n\n${sampleTexts}`);
    }

    // Banned words
    if (settings.bannedWords) {
      sections.push(`\nBANNED WORDS/PHRASES — Never use these: ${settings.bannedWords}`);
    }

    const systemPrompt = sections.join('\n');

    // Build dynamic user prompt sections
    const wordCountInstruction = getWordCountInstruction(settings);

    let brandSection = '';
    if (settings.companyName && settings.brandMentionLevel !== 'subtle') {
      const level = settings.brandMentionLevel === 'prominent'
        ? 'Prominently weave brand mentions throughout the content.'
        : 'Naturally integrate brand mentions where relevant.';
      brandSection = `\n3. BRAND CONTEXT:
Company: ${settings.companyName}
${settings.companyDescription ? `About: ${settings.companyDescription}` : ''}
${settings.uniqueValue ? `Value Props: ${settings.uniqueValue}` : ''}
${settings.productsServices ? `Products/Services: ${settings.productsServices}` : ''}
${settings.socialProof ? `Social Proof: ${settings.socialProof}` : ''}
${level}`;
    }

    let structureSection = '';
    if (settings.includeTableOfContents || settings.includeFAQSection) {
      const parts = [];
      if (settings.includeTableOfContents) {
        parts.push('- Include a Table of Contents near the top with links to each major section');
      }
      if (settings.includeFAQSection) {
        parts.push('- Include a comprehensive FAQ section at the end of the article, with 5-8 relevant questions and answers');
      }
      structureSection = `\nSTRUCTURE REQUIREMENTS:\n${parts.join('\n')}`;
    }

    let internalLinksSection = '';
    if (sitemapPages.length > 0) {
      const densityMap = {
        minimal: '1-2 internal links',
        light: '3-4 internal links',
        balanced: '5-7 internal links',
        rich: '8-12 internal links',
      };
      const linkDensity = densityMap[settings.linksPerArticle] || densityMap.balanced;

      // Format pages with title + description for richer context
      const pageList = sitemapPages
        .map((p) => {
          const parts = [p.url];
          if (p.title) parts.push(`"${p.title}"`);
          if (p.description) parts.push(p.description.substring(0, 120));
          return `- ${parts.join(' — ')}`;
        })
        .join('\n');

      // Parse custom link rules
      let mandatoryRules = '';
      try {
        const rules = settings.customLinkRules
          ? JSON.parse(settings.customLinkRules)
          : [];
        if (rules.length > 0) {
          mandatoryRules = '\n\nMANDATORY LINK RULES (always include these when keywords match):\n' +
            rules.map((r) => `- Keywords "${r.keywords}" → link to ${r.url}`).join('\n');
        }
      } catch {
        // ignore invalid JSON
      }

      internalLinksSection = `\n4. INTERNAL LINKING:
Naturally incorporate ${linkDensity} where relevant. Use descriptive anchor text that accurately describes the linked page.
IMPORTANT: Each URL must appear at most ONCE in the article. Never link to the same page twice.${mandatoryRules}

AVAILABLE PAGES (pick the most relevant):
${pageList}`;
    }

    const prompt = `CORE REQUIREMENTS:
- Primary Focus: ${topic} / ${keywords}
- Language: ${language}
${wordCountInstruction}${structureSection}

MANDATORY ELEMENTS TO INCORPORATE:

1. RESEARCH FOUNDATION (Your Complete Blueprint):
${researchData}

This research brief is your strategic guide. It tells you:
- What users are searching for and why
- What content structure will win
- What competitors cover and what they miss
- What unique angles and data to emphasize
- What sections, elements, and topics are mandatory

Follow this blueprint while making the content engaging and valuable.

2. VISUAL STORYTELLING (If Available):
${formatInBlogImages(inBlogImages)}

If images are provided, place each image EXACTLY where specified in proper markdown format: ![alt text](url)
${brandSection}${internalLinksSection}

Write the complete article now.`;

    const content = await claude.chat(prompt, systemPrompt);

    emitJobStatus(jobId, 'writing', 'completed', 'Content written');

    return content;
  } catch (error) {
    emitJobStatus(jobId, 'writing', 'error', `Writing failed: ${error.message}`);
    throw error;
  }
}

export default runWriter;
