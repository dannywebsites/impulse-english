import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';

const API_BASE = '/api/jobs';

// Fetch all jobs
export function useJobs(status = null, brandId = null) {
  return useQuery({
    queryKey: ['jobs', status, brandId],
    queryFn: async () => {
      const params = new URLSearchParams();
      if (status) params.set('status', status);
      if (brandId) params.set('brandId', brandId);
      const qs = params.toString();
      const url = qs ? `${API_BASE}?${qs}` : API_BASE;
      const response = await fetch(url);
      if (!response.ok) throw new Error('Failed to fetch jobs');
      return response.json();
    },
  });
}

// Fetch single job
export function useJob(jobId, { polling = false } = {}) {
  return useQuery({
    queryKey: ['job', jobId],
    queryFn: async () => {
      const response = await fetch(`${API_BASE}/${jobId}`);
      if (!response.ok) throw new Error('Failed to fetch job');
      return response.json();
    },
    enabled: !!jobId,
    refetchInterval: polling ? 3000 : false,
  });
}

// Create new job
export function useCreateJob() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (jobData) => {
      const response = await fetch(API_BASE, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(jobData),
      });
      if (!response.ok) throw new Error('Failed to create job');
      return response.json();
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['jobs'] });
    },
  });
}

// Update job
export function useUpdateJob() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async ({ jobId, updates }) => {
      const response = await fetch(`${API_BASE}/${jobId}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(updates),
      });
      if (!response.ok) throw new Error('Failed to update job');
      return response.json();
    },
    onSuccess: (_, { jobId }) => {
      queryClient.invalidateQueries({ queryKey: ['jobs'] });
      queryClient.invalidateQueries({ queryKey: ['job', jobId] });
    },
  });
}

// Delete job
export function useDeleteJob() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (jobId) => {
      const response = await fetch(`${API_BASE}/${jobId}`, {
        method: 'DELETE',
      });
      if (!response.ok) throw new Error('Failed to delete job');
      return response.json();
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['jobs'] });
    },
  });
}

// Generate content (trigger pipeline)
export function useGenerateContent() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (jobId) => {
      const response = await fetch(`${API_BASE}/${jobId}/generate`, {
        method: 'POST',
      });
      if (!response.ok) throw new Error('Failed to start generation');
      return response.json();
    },
    onSuccess: (_, jobId) => {
      queryClient.invalidateQueries({ queryKey: ['job', jobId] });
      queryClient.invalidateQueries({ queryKey: ['jobs'] });
    },
  });
}

// Create batch of jobs
export function useCreateBatch() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (batchData) => {
      const response = await fetch(`${API_BASE}/batch`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(batchData),
      });
      if (!response.ok) {
        const data = await response.json();
        throw new Error(data.error || 'Failed to create batch');
      }
      return response.json();
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['jobs'] });
    },
  });
}

// Generate all idle jobs in a batch
export function useGenerateBatch() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (batchId) => {
      const response = await fetch(`${API_BASE}/batch/${batchId}/generate`, {
        method: 'POST',
      });
      if (!response.ok) {
        const data = await response.json();
        throw new Error(data.error || 'Failed to generate batch');
      }
      return response.json();
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['jobs'] });
    },
  });
}

// Get pipeline queue status
export function useQueueStatus(enabled = false) {
  return useQuery({
    queryKey: ['queue-status'],
    queryFn: async () => {
      const response = await fetch(`${API_BASE}/queue`);
      if (!response.ok) throw new Error('Failed to fetch queue status');
      return response.json();
    },
    enabled,
    refetchInterval: enabled ? 3000 : false,
  });
}

// Generate LinkedIn post (repurpose)
export function useGenerateLinkedIn() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (jobId) => {
      const response = await fetch(`${API_BASE}/${jobId}/repurpose/linkedin`, {
        method: 'POST',
      });
      if (!response.ok) {
        const data = await response.json();
        throw new Error(data.error || 'Failed to start LinkedIn generation');
      }
      return response.json();
    },
    onSuccess: (_, jobId) => {
      queryClient.invalidateQueries({ queryKey: ['job', jobId] });
    },
  });
}

// Generate YouTube script (repurpose)
export function useGenerateYouTube() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (jobId) => {
      const response = await fetch(`${API_BASE}/${jobId}/repurpose/youtube`, {
        method: 'POST',
      });
      if (!response.ok) {
        const data = await response.json();
        throw new Error(data.error || 'Failed to start YouTube script generation');
      }
      return response.json();
    },
    onSuccess: (_, jobId) => {
      queryClient.invalidateQueries({ queryKey: ['job', jobId] });
    },
  });
}
