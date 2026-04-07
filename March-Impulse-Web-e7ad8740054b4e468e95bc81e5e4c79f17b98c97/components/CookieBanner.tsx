import React, { useState, useEffect } from 'react';

const CONSENT_KEY = 'impulse_cookie_consent';

type ConsentStatus = 'pending' | 'accepted' | 'rejected';

/**
 * Returns the current cookie consent status from localStorage.
 * Defaults to 'pending' if no decision has been made.
 */
export function getConsentStatus(): ConsentStatus {
  try {
    const stored = localStorage.getItem(CONSENT_KEY);
    if (stored === 'accepted' || stored === 'rejected') return stored;
  } catch {
    // localStorage unavailable (e.g. private browsing)
  }
  return 'pending';
}

/**
 * Fires the GTM consent update when the user accepts cookies.
 * Called from within this component and can be re-used elsewhere.
 */
function grantAnalyticsConsent() {
  if (typeof window.gtag === 'function') {
    window.gtag('consent', 'update', {
      analytics_storage: 'granted',
      ad_storage: 'granted',
    });
  }
}

/**
 * GDPR-compliant cookie consent banner for Spanish law (LSSI-CE + RGPD).
 * Defaults to REJECTED — analytics/marketing tags only fire after explicit "Accept".
 */
export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const status = getConsentStatus();
    if (status === 'pending') {
      setVisible(true);
    }
    // If previously accepted, grant consent on page load
    if (status === 'accepted') {
      grantAnalyticsConsent();
    }
  }, []);

  const handleAccept = () => {
    try {
      localStorage.setItem(CONSENT_KEY, 'accepted');
    } catch { /* ignore */ }
    grantAnalyticsConsent();
    setVisible(false);
  };

  const handleReject = () => {
    try {
      localStorage.setItem(CONSENT_KEY, 'rejected');
    } catch { /* ignore */ }
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-label="Aviso de cookies"
      className="fixed bottom-0 left-0 right-0 z-[9999] bg-white border-t border-zinc-200 shadow-[0_-4px_20px_rgba(0,0,0,0.1)] px-4 py-4 md:px-6 md:py-5"
    >
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-start sm:items-center gap-4">
        <p className="text-sm text-zinc-600 flex-1">
          Utilizamos cookies propias y de terceros para analizar el uso de nuestro sitio web y mejorar tu experiencia.
          Puedes aceptar todas las cookies o rechazar las no esenciales.
          Consulta nuestra{' '}
          <a href="/politica-cookies/" className="text-accent-blue underline hover:text-blue-800">
            Política de Cookies
          </a>{' '}
          y nuestra{' '}
          <a href="/politica-privacidad/" className="text-accent-blue underline hover:text-blue-800">
            Política de Privacidad
          </a>.
        </p>

        <div className="flex gap-3 flex-shrink-0">
          <button
            onClick={handleReject}
            className="px-5 py-2.5 text-sm font-semibold text-zinc-700 bg-zinc-100 hover:bg-zinc-200 rounded-lg transition-colors"
          >
            Rechazar
          </button>
          <button
            onClick={handleAccept}
            className="px-5 py-2.5 text-sm font-semibold text-white bg-accent-blue hover:bg-blue-900 rounded-lg transition-colors"
          >
            Aceptar
          </button>
        </div>
      </div>
    </div>
  );
}
