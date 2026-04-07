import express from 'express';
import { subscribeToJob, unsubscribeFromJob } from '../utils/events.js';

const router = express.Router();

// GET /api/jobs/:id/stream - SSE stream for real-time updates
router.get('/:id/stream', (req, res) => {
  const { id } = req.params;

  // Set SSE headers
  res.setHeader('Content-Type', 'text/event-stream');
  res.setHeader('Cache-Control', 'no-cache');
  res.setHeader('Connection', 'keep-alive');

  // Send initial connection success message
  res.write(`data: ${JSON.stringify({ type: 'connected', jobId: id })}\n\n`);

  // Create listener for this job
  const listener = (data) => {
    res.write(`data: ${JSON.stringify(data)}\n\n`);
  };

  // Subscribe to job events
  subscribeToJob(id, listener);

  // Handle client disconnect
  req.on('close', () => {
    unsubscribeFromJob(id, listener);
    console.log(`Client disconnected from stream for job ${id}`);
  });
});

export default router;
