import Anthropic from '@anthropic-ai/sdk';

const apiKey = process.env.ANTHROPIC_API_KEY;
const model = process.env.CLAUDE_MODEL || 'claude-sonnet-4-5-20250929';

let client = null;

function getClient() {
  if (!apiKey) {
    throw new Error('ANTHROPIC_API_KEY environment variable is not set. Please add it to your .env file.');
  }
  if (!client) {
    client = new Anthropic({
      apiKey,
      timeout: 5 * 60 * 1000, // 5 min — long-form content generation needs time
      maxRetries: 3, // Retry transient network failures and timeouts
    });
  }
  return client;
}

/**
 * Chat completion with optional system instruction.
 * Uses streaming to prevent timeouts on long-form content generation.
 * Accumulates partial text so a mid-stream failure can still return usable content.
 */
export async function chat(prompt, systemInstruction = null) {
  const params = {
    model,
    max_tokens: 16384,
    messages: [{ role: 'user', content: prompt }],
  };

  if (systemInstruction) {
    params.system = systemInstruction;
  }

  const promptKB = (prompt.length / 1024).toFixed(1);
  console.log(`[Claude] Streaming request (${promptKB} KB prompt, model: ${model})`);
  const start = Date.now();

  let accumulated = '';

  try {
    const stream = getClient().messages.stream(params);

    stream.on('text', (text) => {
      accumulated += text;
      if (accumulated.length % 4000 < text.length) {
        const elapsed = ((Date.now() - start) / 1000).toFixed(0);
        console.log(`[Claude] ...${(accumulated.length / 1024).toFixed(1)} KB written (${elapsed}s)`);
      }
    });

    const response = await stream.finalMessage();

    const elapsed = ((Date.now() - start) / 1000).toFixed(1);
    const outputKB = (response.content[0].text.length / 1024).toFixed(1);
    console.log(`[Claude] Done in ${elapsed}s (${outputKB} KB, stop: ${response.stop_reason})`);

    return response.content[0].text;
  } catch (error) {
    const elapsed = ((Date.now() - start) / 1000).toFixed(1);

    // If we received substantial content before the stream died, return it
    // rather than wasting the entire API call
    if (accumulated.length > 500) {
      console.warn(`[Claude] Stream failed after ${elapsed}s but recovered ${(accumulated.length / 1024).toFixed(1)} KB of content. Returning partial result.`);
      return accumulated;
    }

    console.error(`[Claude] Failed after ${elapsed}s (${accumulated.length} chars received):`, error.message);
    throw new Error(`Claude API error: ${error.message}`);
  }
}

export default { chat };
