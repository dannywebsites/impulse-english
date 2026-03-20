// Type declarations for Google Tag Manager / gtag.js
declare global {
  interface Window {
    dataLayer: Record<string, unknown>[];
    gtag: (...args: unknown[]) => void;
  }
}

export {};
