import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://www.impulse-english.es',
  output: 'static',
  server: { port: 3000 },
  integrations: [
    react(),
    tailwind({ configFile: './tailwind.config.ts' }),
    sitemap(),
  ],
  build: { format: 'directory' },
  // Redirects handled exclusively by vercel.json (single source of truth)
  vite: {
    resolve: {
      alias: { '@': '.' }
    }
  }
});
