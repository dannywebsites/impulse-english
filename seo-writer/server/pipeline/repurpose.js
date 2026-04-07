import * as claude from '../services/claude.js';
import { emitJobStatus } from '../utils/events.js';

const LINKEDIN_SYSTEM_PROMPT = `You are an expert social media content strategist specializing in LinkedIn and Twitter/X long-form posts.

Your task: Transform a blog article and its research into a compelling long-form LinkedIn/Twitter post.

FORMAT REQUIREMENTS:
- Opening hook (1-2 lines) that stops the scroll — pattern interrupts, bold claims, or surprising stats
- Body structured in short paragraphs (1-3 sentences each) with line breaks between them
- Use line breaks generously — LinkedIn favors vertical whitespace
- Include 2-3 key insights or takeaways from the article
- End with a clear call-to-action or thought-provoking question
- Add 3-5 relevant hashtags at the bottom
- Total length: 800-1500 words (long-form post territory)
- Do NOT use any markdown formatting — no headers (##), no bold (**), no italic (*), no bold-italic (***)
- LinkedIn renders plain text only — asterisks show up as literal characters
- Use unicode bullets (•) or emojis sparingly for visual structure if appropriate
- Use ALL CAPS sparingly for emphasis instead of markdown bold
- Write in first person perspective

OUTPUT: Begin the post immediately with no preamble or explanation.`;

const YOUTUBE_SYSTEM_PROMPT = `You are an expert YouTube scriptwriter who creates engaging, watchable video scripts.

Your task: Transform a blog article and its research into a YouTube video script/transcript.

FORMAT REQUIREMENTS:
- HOOK (first 15 seconds): Open with a compelling question, surprising stat, or bold statement
- INTRO: Brief channel intro placeholder, topic overview, and promise of what viewers will learn
- BODY: Main content broken into clear segments with transition phrases
  - Each segment should be 2-4 minutes of speaking time
  - Include [B-ROLL: description] markers where visual aids would help
  - Include [ON-SCREEN TEXT: content] markers for key statistics or lists
  - Use conversational, spoken-word language (contractions, rhetorical questions)
- OUTRO: Recap key points, call-to-action (like, subscribe, comment), and teaser for related content
- Total length: Approximately 1500-3000 words (targeting 10-20 minute video)

SCRIPT FORMATTING:
- Use [SEGMENT: Title] markers to separate major sections
- Use [B-ROLL: description] for visual suggestions
- Use [ON-SCREEN TEXT: content] for text overlay suggestions
- Use [PAUSE] for dramatic beats
- Write dialogue as natural speech, not written prose

OUTPUT: Begin the script immediately with the hook. No preamble.`;

/**
 * Build brand context section from settings
 */
function buildBrandContext(settings) {
  if (!settings.companyName) return '';

  const parts = [`Company: ${settings.companyName}`];
  if (settings.companyDescription) parts.push(`About: ${settings.companyDescription}`);
  if (settings.targetAudience) parts.push(`Target Audience: ${settings.targetAudience}`);
  if (settings.productsServices) parts.push(`Products/Services: ${settings.productsServices}`);

  return `\nBRAND CONTEXT:\n${parts.join('\n')}\nWrite as if you are a thought leader at this company.`;
}

/**
 * Generate a LinkedIn/Twitter long-form post from a completed article
 */
export async function generateLinkedInPost(job, settings) {
  const { id: jobId, topic, keywords, researchData, content } = job;

  try {
    emitJobStatus(jobId, 'linkedin_post', 'running', 'Generating LinkedIn post...');

    // Build system prompt with optional style sample and banned words
    const sections = [LINKEDIN_SYSTEM_PROMPT];

    if (settings.linkedinStyleSample) {
      sections.push(`\nSTYLE REFERENCE — Match the tone and style of this LinkedIn writing sample:\n"""${settings.linkedinStyleSample.substring(0, 3000)}"""`);
    }

    if (settings.bannedWords) {
      sections.push(`\nBANNED WORDS/PHRASES — Never use these: ${settings.bannedWords}`);
    }

    const systemPrompt = sections.join('\n');

    const brandContext = buildBrandContext(settings);
    const socialProofNote = settings.socialProof
      ? `\nSOCIAL PROOF (weave in naturally): ${settings.socialProof}`
      : '';

    const prompt = `Transform this article into a compelling LinkedIn/Twitter long-form post.

TOPIC: ${topic}
KEYWORDS: ${keywords}
${brandContext}${socialProofNote}

RESEARCH DATA (for additional context and statistics):
${(researchData || '').substring(0, 4000)}

FULL ARTICLE TO REPURPOSE:
${(content || '').substring(0, 8000)}

Create the LinkedIn post now.`;

    const result = await claude.chat(prompt, systemPrompt);

    emitJobStatus(jobId, 'linkedin_post', 'completed', 'LinkedIn post generated');

    return result;
  } catch (error) {
    emitJobStatus(jobId, 'linkedin_post', 'error', `LinkedIn generation failed: ${error.message}`);
    throw error;
  }
}

/**
 * Generate a YouTube video script from a completed article
 */
export async function generateYouTubeScript(job, settings) {
  const { id: jobId, topic, keywords, researchData, content } = job;

  try {
    emitJobStatus(jobId, 'youtube_script', 'running', 'Generating YouTube script...');

    // Build system prompt with optional style sample and banned words
    const sections = [YOUTUBE_SYSTEM_PROMPT];

    if (settings.youtubeStyleSample) {
      sections.push(`\nSTYLE REFERENCE — Match the tone and speaking style of this YouTube script sample:\n"""${settings.youtubeStyleSample.substring(0, 3000)}"""`);
    }

    if (settings.bannedWords) {
      sections.push(`\nBANNED WORDS/PHRASES — Never use these: ${settings.bannedWords}`);
    }

    const systemPrompt = sections.join('\n');

    const brandContext = buildBrandContext(settings);

    const prompt = `Transform this article into an engaging YouTube video script.

TOPIC: ${topic}
KEYWORDS: ${keywords}
${brandContext}

RESEARCH DATA (for additional context and statistics):
${(researchData || '').substring(0, 4000)}

FULL ARTICLE TO REPURPOSE:
${(content || '').substring(0, 8000)}

Create the YouTube script now.`;

    const result = await claude.chat(prompt, systemPrompt);

    emitJobStatus(jobId, 'youtube_script', 'completed', 'YouTube script generated');

    return result;
  } catch (error) {
    emitJobStatus(jobId, 'youtube_script', 'error', `YouTube script generation failed: ${error.message}`);
    throw error;
  }
}
