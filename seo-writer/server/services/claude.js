import Anthropic from '@anthropic-ai/sdk';

const apiKey = process.env.ANTHROPIC_API_KEY;
const model = process.env.CLAUDE_MODEL || 'claude-sonnet-4-5-20250929';

// Lazy initialization - only create client when needed
let client = null;

function getClient() {
  if (!apiKey) {
    throw new Error('ANTHROPIC_API_KEY environment variable is not set. Please add it to your .env file.');
  }
  if (!client) {
    client = new Anthropic({
      apiKey,
      timeout: 10 * 60 * 1000, // 10 minute timeout (large rewrites can take 5+ min)
      maxRetries: 0, // No retries — fail fast so the queue stays healthy
    });
  }
  return client;
}

/**
 * Chat completion with optional system instruction
 * Matches the same interface as gemini.chat(prompt, systemInstruction)
 */
export async function chat(prompt, systemInstruction = null) {
  try {
    const params = {
      model,
      max_tokens: 16384,
      messages: [{ role: 'user', content: prompt }],
    };

    if (systemInstruction) {
      params.system = systemInstruction;
    }

    console.log(`[Claude] Starting request (prompt: ${prompt.length} chars, max_tokens: ${params.max_tokens})`);
    const start = Date.now();

    const response = await getClient().messages.create(params);

    const elapsed = ((Date.now() - start) / 1000).toFixed(1);
    console.log(`[Claude] Completed in ${elapsed}s (response: ${response.content[0].text.length} chars, stop: ${response.stop_reason})`);

    return response.content[0].text;
  } catch (error) {
    console.error('Claude chat error:', error);
    throw new Error(`Claude API error: ${error.message}`);
  }
}

export default { chat };
