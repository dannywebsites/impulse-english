import type { Config } from 'tailwindcss';

/**
 * Design tokens for Impulse English Academy.
 *
 * `accent-blue` and `brand-red` are objects with a DEFAULT, so every existing
 * `bg-accent-blue` / `text-brand-red` class keeps working unchanged while the
 * numbered steps give hover and surface states a home. Before this, hovers
 * reached for stock Tailwind (`hover:bg-blue-700`, `bg-red-600`) and the brand
 * drifted page by page.
 */
export default {
  content: [
    './src/**/*.{astro,html,js,jsx,ts,tsx}',
    './*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './pages/**/*.{ts,tsx}',
    './utils/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'accent-blue': {
          50: '#f1f6fb',
          100: '#dfeaf5',
          200: '#c3d8ec',
          300: '#96bcdd',
          400: '#629bc9',
          500: '#3d7cb0',
          600: '#2b6294',
          700: '#12477d',
          800: '#123c66',
          900: '#143355',
          950: '#0d2038',
          DEFAULT: '#12477d',
        },
        'brand-red': {
          50: '#fef3f3',
          100: '#fde5e6',
          200: '#fbd0d2',
          300: '#f7aab0',
          400: '#f17a85',
          500: '#ea4e59',
          600: '#d62f3f',
          700: '#b42335',
          800: '#962031',
          900: '#7f1f2f',
          950: '#460c14',
          DEFAULT: '#ea4e59',
        },
        'zinc-surface': '#F4F4F5',
        /* WhatsApp's own brand green. Buttons previously used Tailwind's
           arbitrary `green-500`, which is neither the platform colour nor ours. */
        whatsapp: {
          DEFAULT: '#25D366',
          dark: '#1DA851',
        },
      },
      fontFamily: {
        // `font-display` is applied to ~355 spans/paragraphs across the site and
        // has always resolved to Inter. Repointing it at Playfair would silently
        // reflow all of them, so it stays as-is. The serif is reached through
        // `font-serif` and the heading defaults in index.css.
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Inter', 'system-ui', 'sans-serif'],
        serif: ['Playfair Display', 'Georgia', 'serif'],
      },
      /**
       * Brand-tinted shadows. Flat grey `shadow-md` on every card is the single
       * loudest generic-template tell; these carry the blue (or red, for CTAs)
       * so depth reads as part of the palette rather than a default.
       */
      boxShadow: {
        card: '0 1px 2px 0 rgb(18 71 125 / 0.04), 0 8px 24px -8px rgb(18 71 125 / 0.10)',
        lift: '0 2px 4px 0 rgb(18 71 125 / 0.05), 0 18px 40px -12px rgb(18 71 125 / 0.18)',
        cta: '0 6px 20px -6px rgb(234 78 89 / 0.45)',
        'cta-lift': '0 10px 28px -8px rgb(234 78 89 / 0.55)',
        panel: '0 24px 60px -24px rgb(13 32 56 / 0.35)',
      },
      maxWidth: {
        // Comfortable reading measure for body columns.
        measure: '68ch',
      },
    },
  },
  plugins: [],
} satisfies Config;
