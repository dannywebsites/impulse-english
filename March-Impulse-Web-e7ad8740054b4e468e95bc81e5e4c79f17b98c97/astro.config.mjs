import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

// Stamp every sitemap entry with the build time so Google can prioritize recrawls.
const BUILD_ISO = new Date().toISOString();

export default defineConfig({
  site: 'https://impulse-english.es',
  output: 'static',
  trailingSlash: 'always',
  server: { port: 3000 },
  integrations: [
    react(),
    tailwind({ configFile: './tailwind.config.ts' }),
    sitemap({
      serialize(item) {
        item.lastmod = BUILD_ISO;
        return item;
      },
    }),
  ],
  build: { format: 'directory' },
  // Redirects handled exclusively by vercel.json (single source of truth)
  vite: {
    resolve: {
      alias: { '@': '.' }
    }
  }
});
