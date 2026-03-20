import type { Config } from 'tailwindcss';

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
        'accent-blue': '#12477d',
        'brand-red': '#ea4e59',
        'zinc-surface': '#F4F4F5',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Inter', 'system-ui', 'sans-serif'],
        serif: ['Playfair Display', 'Georgia', 'serif'],
      },
    },
  },
  plugins: [],
} satisfies Config;
