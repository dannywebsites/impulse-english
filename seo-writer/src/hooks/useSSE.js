import { useEffect, useState, useCallback } from 'react';

/**
 * Hook for subscribing to Server-Sent Events for a specific job
 * @param {string} jobId - The job ID to subscribe to
 * @param {boolean} enabled - Whether to enable the SSE connection
 */
export function useSSE(jobId, enabled = true, { basePath = '/api/jobs' } = {}) {
  const [status, setStatus] = useState(null);
  const [isConnected, setIsConnected] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!jobId || !enabled) return;

    let eventSource = null;

    const connect = () => {
      try {
        eventSource = new EventSource(`${basePath}/${jobId}/stream`);

        eventSource.onopen = () => {
          setIsConnected(true);
          setError(null);
        };

        eventSource.onmessage = (event) => {
          try {
            const data = JSON.parse(event.data);
            setStatus(data);
          } catch (err) {
            console.error('Failed to parse SSE data:', err);
          }
        };

        eventSource.onerror = (err) => {
          console.error('SSE error:', err);
          setIsConnected(false);
          setError('Connection lost');
          eventSource.close();
        };
      } catch (err) {
        console.error('Failed to create EventSource:', err);
        setError(err.message);
      }
    };

    connect();

    return () => {
      if (eventSource) {
        eventSource.close();
        setIsConnected(false);
      }
    };
  }, [jobId, enabled, basePath]);

  const reset = useCallback(() => {
    setStatus(null);
    setError(null);
  }, []);

  return {
    status,
    isConnected,
    error,
    reset,
  };
}
