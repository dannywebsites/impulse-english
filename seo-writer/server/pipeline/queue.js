import { runPipeline } from './orchestrator.js';
import { runOptimizationPipeline, runRewritePipeline } from './optimizer.js';

const queue = [];
let running = null;

const runners = {
  content: runPipeline,
  optimization: runOptimizationPipeline,
  rewrite: runRewritePipeline,
};

/**
 * Enqueue a content generation job.
 * Signature unchanged for backward compatibility.
 */
export function enqueuePipeline(jobId) {
  queue.push({ id: jobId, type: 'content' });
  processNext();
}

/**
 * Enqueue an optimization analysis job.
 */
export function enqueueOptimization(jobId) {
  queue.push({ id: jobId, type: 'optimization' });
  processNext();
}

/**
 * Enqueue a rewrite for an analyzed optimization job.
 * @param {string} jobId
 * @param {Object} options - Optional parameters for rewrite
 * @param {string} options.userInstructions - User-provided instructions for the rewrite
 */
export function enqueueRewrite(jobId, options = {}) {
  queue.push({ id: jobId, type: 'rewrite', options });
  processNext();
}

function processNext() {
  if (running !== null) return;
  if (queue.length === 0) return;

  const item = queue.shift();
  running = item.id;

  const runner = runners[item.type];

  runner(item.id, item.options)
    .catch((error) => {
      console.error(`Queue pipeline error for ${item.type} job ${item.id}:`, error);
    })
    .finally(() => {
      running = null;
      processNext();
    });
}

/**
 * Get current queue status.
 */
export function getQueueStatus() {
  return {
    running,
    queued: queue.map((item) => item.id),
    length: queue.length,
  };
}
