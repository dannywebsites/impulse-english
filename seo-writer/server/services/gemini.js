import { GoogleGenAI } from '@google/genai';

const apiKey = process.env.GEMINI_API_KEY;
const model = process.env.GEMINI_MODEL || 'gemini-3-flash-preview';

// Lazy initialization - only create client when needed
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

/**
 * Chat completion with optional system instruction
 */
export async function chat(prompt, systemInstruction = null) {
  try {
    const config = systemInstruction
      ? { systemInstruction }
      : undefined;

    const response = await getClient().models.generateContent({
      model,
      contents: prompt,
      config,
    });

    return response.text;
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

      const response = await getClient().models.generateContent({
        model,
        contents,
        config,
      });

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
    const config = {
      responseMimeType: 'application/json',
      responseJsonSchema: schema,
    };

    if (systemInstruction) {
      config.systemInstruction = systemInstruction;
    }

    const response = await getClient().models.generateContent({
      model,
      contents: prompt,
      config,
    });

    return JSON.parse(response.text);
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
