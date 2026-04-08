import { GoogleGenAI } from '@google/genai';

const apiKey = process.env.GEMINI_API_KEY;
const model = process.env.GEMINI_MODEL || 'gemini-3-flash-preview';

let client = null;

function getClient() {
  if (!apiKey) {
    throw new Error('GEMINI_API_KEY environment variable is not set. Please add it to your .env file.');
  }
  if (!client) {
    client = new GoogleGenAI({ apiKey });
  }
  return client;
}

const MAX_RETRIES = 4;
const BASE_DELAY_MS = 3000;

function isRetryable(error) {
  const msg = (error.message || '') + (error.code || '');
  return (
    msg.includes('503') ||
    msg.includes('UNAVAILABLE') ||
    msg.includes('429') ||
    msg.includes('RESOURCE_EXHAUSTED') ||
    msg.includes('overloaded') ||
    msg.includes('ETIMEDOUT') ||
    msg.includes('ECONNRESET') ||
    msg.includes('ECONNABORTED') ||
    msg.includes('socket hang up') ||
    msg.includes('timeout') ||
    msg.includes('AbortError') ||
    msg.includes('network') ||
    error.name === 'AbortError'
  );
}

/**
 * Race a promise against a timeout. Rejects with a retryable error on timeout.
 */
function withTimeout(promise, ms, label) {
  return Promise.race([
    promise,
    new Promise((_, reject) =>
      setTimeout(() => reject(new Error(`timeout: ${label} exceeded ${ms / 1000}s`)), ms)
    ),
  ]);
}

async function withRetry(fn, label) {
  for (let attempt = 0; attempt <= MAX_RETRIES; attempt++) {
    try {
      return await fn();
    } catch (error) {
      if (attempt < MAX_RETRIES && isRetryable(error)) {
        // Exponential backoff with jitter to avoid thundering herd
        const baseDelay = BASE_DELAY_MS * Math.pow(2, attempt);
        const jitter = Math.random() * baseDelay * 0.3;
        const delay = baseDelay + jitter;
        console.warn(`[Gemini] ${label} attempt ${attempt + 1}/${MAX_RETRIES} failed (${error.message}). Retrying in ${(delay / 1000).toFixed(1)}s...`);
        await new Promise((r) => setTimeout(r, delay));
      } else {
        throw error;
      }
    }
  }
}

/**
 * Chat completion with optional system instruction
 */
export async function chat(prompt, systemInstruction = null) {
  try {
    return await withRetry(() => {
      const config = systemInstruction
        ? { systemInstruction }
        : undefined;

      const request = getClient().models.generateContent({
        model,
        contents: prompt,
        config,
      }).then((r) => r.text);

      return withTimeout(request, 3 * 60 * 1000, 'chat'); // 3 min
    }, 'chat');
  } catch (error) {
    console.error('Gemini chat error:', error);
    throw new Error(`Gemini API error: ${error.message}`);
  }
}

/**
 * Function calling with tool loop
 * Executes tools and continues conversation until model produces final text
 */
export async function functionCalling(prompt, tools, systemInstruction, toolExecutor) {
  try {
    const config = {
      tools: [{ functionDeclarations: tools }],
      systemInstruction,
    };

    let contents = [
      {
        role: 'user',
        parts: [{ text: prompt }],
      },
    ];

    let iterationCount = 0;
    const maxIterations = 20; // Prevent infinite loops

    while (iterationCount < maxIterations) {
      iterationCount++;

      const response = await withRetry(() => {
        const request = getClient().models.generateContent({
          model,
          contents,
          config,
        });

        return withTimeout(request, 5 * 60 * 1000, `functionCalling iteration ${iterationCount}`); // 5 min
      }, `functionCalling iteration ${iterationCount}`);

      const message = response.candidates[0].content;

      // Check if model wants to call a function
      const functionCalls = response.functionCalls;

      if (!functionCalls || functionCalls.length === 0) {
        // No more function calls - return final text
        return response.text;
      }

      // Append model's response to conversation
      contents.push(message);

      // Execute all function calls and collect results
      const functionResponses = [];

      for (const fnCall of functionCalls) {
        console.log(`Executing tool: ${fnCall.name}`, fnCall.args);

        try {
          const result = await toolExecutor(fnCall.name, fnCall.args);
          functionResponses.push({
            functionResponse: {
              name: fnCall.name,
              response: { result },
            },
          });
        } catch (error) {
          console.error(`Tool execution error for ${fnCall.name}:`, error);
          functionResponses.push({
            functionResponse: {
              name: fnCall.name,
              response: { error: error.message },
            },
          });
        }
      }

      // Append function results to conversation
      contents.push({
        role: 'user',
        parts: functionResponses,
      });
    }

    throw new Error('Max function calling iterations reached');
  } catch (error) {
    console.error('Gemini function calling error:', error);
    throw new Error(`Gemini function calling error: ${error.message}`);
  }
}

/**
 * Generate content with structured JSON output
 */
export async function generateJSON(prompt, schema, systemInstruction = null) {
  try {
    return await withRetry(() => {
      const config = {
        responseMimeType: 'application/json',
        responseJsonSchema: schema,
      };

      if (systemInstruction) {
        config.systemInstruction = systemInstruction;
      }

      const request = getClient().models.generateContent({
        model,
        contents: prompt,
        config,
      }).then((r) => JSON.parse(r.text));

      return withTimeout(request, 3 * 60 * 1000, 'generateJSON'); // 3 min
    }, 'generateJSON');
  } catch (error) {
    console.error('Gemini JSON generation error:', error);
    throw new Error(`Gemini JSON generation error: ${error.message}`);
  }
}

/**
 * Streaming chat completion
 */
export async function* chatStream(prompt, systemInstruction = null) {
  try {
    const config = systemInstruction
      ? { systemInstruction }
      : undefined;

    const stream = await client.models.generateContentStream({
      model,
      contents: prompt,
      config,
    });

    for await (const chunk of stream) {
      yield chunk.text;
    }
  } catch (error) {
    console.error('Gemini streaming error:', error);
    throw new Error(`Gemini streaming error: ${error.message}`);
  }
}

export default {
  chat,
  functionCalling,
  generateJSON,
  chatStream,
};
