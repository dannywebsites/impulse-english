import { EventEmitter } from 'events';

// Global event emitter for pipeline status updates
const pipelineEvents = new EventEmitter();

/**
 * Emit a status update for a job
 */
export function emitJobStatus(jobId, step, status, message) {
  pipelineEvents.emit(`job:${jobId}`, {
    step,
    status,
    message,
    timestamp: new Date().toISOString(),
  });
}

/**
 * Subscribe to job status updates
 */
export function subscribeToJob(jobId, callback) {
  pipelineEvents.on(`job:${jobId}`, callback);
}

/**
 * Unsubscribe from job status updates
 */
export function unsubscribeFromJob(jobId, callback) {
  pipelineEvents.off(`job:${jobId}`, callback);
}

export default pipelineEvents;
