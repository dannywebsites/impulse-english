import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';

const API_BASE = '/api/optimizations';

// Fetch all optimization jobs
export function useOptimizations(status = null, brandId = null) {
  return useQuery({
    queryKey: ['optimizations', status, brandId],
    queryFn: async () => {
      const params = new URLSearchParams();
      if (status) params.set('status', status);
      if (brandId) params.set('brandId', brandId);
      const qs = params.toString();
      const url = qs ? `${API_BASE}?${qs}` : API_BASE;
      const response = await fetch(url);
      if (!response.ok) throw new Error('Failed to fetch optimization jobs');
      return response.json();
    },
  });
}

// Fetch single optimization job
export function useOptimization(jobId, { polling = false } = {}) {
  return useQuery({
    queryKey: ['optimization', jobId],
    queryFn: async () => {
      const response = await fetch(`${API_BASE}/${jobId}`);
      if (!response.ok) throw new Error('Failed to fetch optimization job');
      return response.json();
    },
    enabled: !!jobId,
    refetchInterval: polling ? 3000 : false,
  });
}

// Create new optimization job
export function useCreateOptimization() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (data) => {
      const response = await fetch(API_BASE, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      if (!response.ok) {
        const err = await response.json();
        throw new Error(err.error || 'Failed to create optimization job');
      }
      return response.json();
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['optimizations'] });
    },
  });
}

// Delete optimization job
export function useDeleteOptimization() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (jobId) => {
      const response = await fetch(`${API_BASE}/${jobId}`, {
        method: 'DELETE',
      });
      if (!response.ok) throw new Error('Failed to delete optimization job');
      return response.json();
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['optimizations'] });
    },
  });
}

// Trigger analysis pipeline
export function useAnalyzeContent() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (jobId) => {
      const response = await fetch(`${API_BASE}/${jobId}/analyze`, {
        method: 'POST',
      });
      if (!response.ok) throw new Error('Failed to start analysis');
      return response.json();
    },
    onSuccess: (_, jobId) => {
      queryClient.invalidateQueries({ queryKey: ['optimization', jobId] });
      queryClient.invalidateQueries({ queryKey: ['optimizations'] });
    },
  });
}

// Trigger rewrite pipeline
export function useRewriteContent() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async ({ jobId, userInstructions = null }) => {
      const response = await fetch(`${API_BASE}/${jobId}/rewrite`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ userInstructions }),
      });
      if (!response.ok) {
        const err = await response.json();
        throw new Error(err.error || 'Failed to start rewrite');
      }
      return response.json();
    },
    onSuccess: (_, { jobId }) => {
      queryClient.invalidateQueries({ queryKey: ['optimization', jobId] });
      queryClient.invalidateQueries({ queryKey: ['optimizations'] });
    },
  });
}
