import { fal } from '@fal-ai/client';

const MODEL_ID = 'fal-ai/nano-banana-pro';

// Lazy configuration - only configure client when needed
let configured = false;

function ensureConfigured() {
  const apiKey = process.env.FAL_API_KEY;
  if (!apiKey) {
    throw new Error('FAL_API_KEY environment variable is not set. Please add it to your .env file.');
  }
  if (!configured) {
    fal.config({ credentials: apiKey });
    configured = true;
  }
}

/**
 * Generate a single image
 */
export async function generateImage(prompt, options = {}) {
  try {
    ensureConfigured();

    const {
      aspectRatio = '3:2',
      resolution = '1K',
      numImages = 1,
      outputFormat = 'png',
    } = options;

    const input = {
      prompt,
      aspect_ratio: aspectRatio,
      resolution,
      num_images: numImages,
      output_format: outputFormat,
    };

    const result = await fal.subscribe(MODEL_ID, {
      input,
      logs: false,
    });

    if (!result.data || !result.data.images || result.data.images.length === 0) {
      throw new Error('No images generated');
    }

    return {
      url: result.data.images[0].url,
      contentType: result.data.images[0].content_type,
      prompt,
      description: result.data.description || '',
    };
  } catch (error) {
    console.error('FAL AI image generation error:', error);
    throw new Error(`FAL AI error: ${error.message}`);
  }
}

/**
 * Generate multiple images in parallel
 */
export async function generateMultipleImages(prompts, options = {}) {
  try {
    const imagePromises = prompts.map((prompt) =>
      generateImage(prompt, options)
        .catch((error) => ({
          prompt,
          error: error.message,
          url: null,
        }))
    );

    return await Promise.all(imagePromises);
  } catch (error) {
    console.error('FAL AI batch generation error:', error);
    throw new Error(`FAL AI batch error: ${error.message}`);
  }
}

/**
 * Generate image with retry logic
 */
export async function generateWithRetry(prompt, options = {}, maxRetries = 2) {
  let lastError;

  for (let attempt = 0; attempt <= maxRetries; attempt++) {
    try {
      return await generateImage(prompt, options);
    } catch (error) {
      lastError = error;
      console.log(`Retry ${attempt + 1}/${maxRetries} for image generation`);

      if (attempt < maxRetries) {
        // Exponential backoff
        await new Promise((resolve) => setTimeout(resolve, Math.pow(2, attempt) * 2000));
      }
    }
  }

  throw lastError;
}

/**
 * Generate in-blog images from structured specs
 */
export async function generateInBlogImages(imageSpecs, imageQuality = '1K') {
  try {
    const results = [];

    for (const spec of imageSpecs) {
      try {
        const image = await generateImage(spec.description, {
          aspectRatio: spec.size || '3:2',
          resolution: imageQuality,
        });

        results.push({
          url: image.url,
          alt_text: spec.alt_text,
          caption: spec.caption,
          placement: spec.placement,
        });
      } catch (error) {
        console.error(`Failed to generate image for: ${spec.placement}`, error);
        results.push({
          url: null,
          alt_text: spec.alt_text,
          caption: spec.caption,
          placement: spec.placement,
          error: error.message,
        });
      }
    }

    return results;
  } catch (error) {
    console.error('Error generating in-blog images:', error);
    throw error;
  }
}

export default {
  generateImage,
  generateMultipleImages,
  generateWithRetry,
  generateInBlogImages,
};
