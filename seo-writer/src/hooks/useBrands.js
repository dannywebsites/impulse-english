import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';

const API_BASE = '/api/brands';

// Fetch all brands
export function useBrands() {
  return useQuery({
    queryKey: ['brands'],
    queryFn: async () => {
      const response = await fetch(API_BASE);
      if (!response.ok) throw new Error('Failed to fetch brands');
      return response.json();
    },
  });
}

// Fetch single brand
export function useBrand(brandId) {
  return useQuery({
    queryKey: ['brand', brandId],
    queryFn: async () => {
      const response = await fetch(`${API_BASE}/${brandId}`);
      if (!response.ok) throw new Error('Failed to fetch brand');
      return response.json();
    },
    enabled: !!brandId,
  });
}

// Create brand
export function useCreateBrand() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (brandData) => {
      const response = await fetch(API_BASE, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(brandData),
      });
      if (!response.ok) throw new Error('Failed to create brand');
      return response.json();
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['brands'] });
    },
  });
}

// Update brand
export function useUpdateBrand() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async ({ brandId, updates }) => {
      const response = await fetch(`${API_BASE}/${brandId}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(updates),
      });
      if (!response.ok) {
        const data = await response.json().catch(() => ({}));
        throw new Error(data.error || 'Failed to update brand');
      }
      return response.json();
    },
    onSuccess: (_, { brandId }) => {
      queryClient.invalidateQueries({ queryKey: ['brands'] });
      queryClient.invalidateQueries({ queryKey: ['brand', brandId] });
    },
  });
}

// Delete brand
export function useDeleteBrand() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (brandId) => {
      const response = await fetch(`${API_BASE}/${brandId}`, {
        method: 'DELETE',
      });
      if (!response.ok) {
        const data = await response.json();
        throw new Error(data.error || 'Failed to delete brand');
      }
      return response.json();
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['brands'] });
    },
  });
}

// Connect sitemap for a brand
export function useConnectBrandSitemap() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async ({ brandId, sitemapUrl }) => {
      const response = await fetch(`${API_BASE}/${brandId}/sitemap/connect`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ sitemapUrl }),
      });
      if (!response.ok) {
        const data = await response.json();
        throw new Error(data.error || 'Failed to connect sitemap');
      }
      return response.json();
    },
    onSuccess: (_, { brandId }) => {
      queryClient.invalidateQueries({ queryKey: ['brand', brandId] });
      queryClient.invalidateQueries({ queryKey: ['brands'] });
    },
  });
}

// Refresh sitemap for a brand
export function useRefreshBrandSitemap() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (brandId) => {
      const response = await fetch(`${API_BASE}/${brandId}/sitemap/refresh`, {
        method: 'POST',
      });
      if (!response.ok) {
        const data = await response.json();
        throw new Error(data.error || 'Failed to refresh sitemap');
      }
      return response.json();
    },
    onSuccess: (_, brandId) => {
      queryClient.invalidateQueries({ queryKey: ['brand', brandId] });
      queryClient.invalidateQueries({ queryKey: ['brands'] });
    },
  });
}

// Disconnect sitemap for a brand
export function useDisconnectBrandSitemap() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (brandId) => {
      const response = await fetch(`${API_BASE}/${brandId}/sitemap/disconnect`, {
        method: 'POST',
      });
      if (!response.ok) throw new Error('Failed to disconnect sitemap');
      return response.json();
    },
    onSuccess: (_, brandId) => {
      queryClient.invalidateQueries({ queryKey: ['brand', brandId] });
      queryClient.invalidateQueries({ queryKey: ['brands'] });
    },
  });
}

// ─── Writing Samples ───

// Fetch writing samples for a brand
export function useWritingSamples(brandId) {
  return useQuery({
    queryKey: ['writingSamples', brandId],
    queryFn: async () => {
      const response = await fetch(`${API_BASE}/${brandId}/writing-samples`);
      if (!response.ok) throw new Error('Failed to fetch writing samples');
      return response.json();
    },
    enabled: !!brandId,
  });
}

// Create writing sample
export function useCreateWritingSample() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async ({ brandId, title, content }) => {
      const response = await fetch(`${API_BASE}/${brandId}/writing-samples`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ title, content }),
      });
      if (!response.ok) {
        const data = await response.json();
        throw new Error(data.error || 'Failed to create writing sample');
      }
      return response.json();
    },
    onSuccess: (_, { brandId }) => {
      queryClient.invalidateQueries({ queryKey: ['writingSamples', brandId] });
    },
  });
}

// Update writing sample
export function useUpdateWritingSample() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async ({ brandId, sampleId, title, content }) => {
      const response = await fetch(`${API_BASE}/${brandId}/writing-samples/${sampleId}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ title, content }),
      });
      if (!response.ok) {
        const data = await response.json();
        throw new Error(data.error || 'Failed to update writing sample');
      }
      return response.json();
    },
    onSuccess: (_, { brandId }) => {
      queryClient.invalidateQueries({ queryKey: ['writingSamples', brandId] });
    },
  });
}

// Delete writing sample
export function useDeleteWritingSample() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async ({ brandId, sampleId }) => {
      const response = await fetch(`${API_BASE}/${brandId}/writing-samples/${sampleId}`, {
        method: 'DELETE',
      });
      if (!response.ok) {
        const data = await response.json();
        throw new Error(data.error || 'Failed to delete writing sample');
      }
      return response.json();
    },
    onSuccess: (_, { brandId }) => {
      queryClient.invalidateQueries({ queryKey: ['writingSamples', brandId] });
    },
  });
}
