import React, { useState, useEffect, useRef } from 'react';
import { X, Send, CheckCircle, Loader2 } from 'lucide-react';
import { resolveVariant, isSuppressed, type PopupVariant } from '../utils/popupVariants';

// Same GoHighLevel inbound hook the existing LeadForm / reservar-clase forms use,
// so popup leads land in the exact same CRM workflow. The per-variant `source`
// (popup-c1, popup-b2, ...) tells GHL which page/level produced the lead.
const WEBHOOK_URL =
  'https://services.leadconnectorhq.com/hooks/OAJYwGK3D8G66kUMQsht/webhook-trigger/0fe57216-4cdc-42af-b2d6-d401e9015573';

const DISMISS_KEY = 'impulse_popup_dismissed';
const DELAY_MS = 20000; // fire after 20s on page

function alreadyDismissed(): boolean {
  try {
    return localStorage.getItem(DISMISS_KEY) === '1';
  } catch {
    return false;
  }
}

function markDismissed(): void {
  try {
    localStorage.setItem(DISMISS_KEY, '1');
  } catch {
    /* localStorage unavailable (private browsing) — fail open */
  }
}

const inputClass =
  'w-full px-4 py-3 border border-zinc-200 rounded-lg focus:ring-2 focus:ring-accent-blue focus:border-transparent transition-all';

/**
 * Time-on-page lead-capture popup. Mounted once in BaseLayout.astro (client:idle)
 * so it covers every page. Shows after 20s with content matched to the page's
 * exam level, once per visitor (localStorage), and never on form/legal pages.
 */
export default function CoursePopup() {
  const [variant, setVariant] = useState<PopupVariant | null>(null);
  const [visible, setVisible] = useState(false); // overlay in the DOM
  const [shown, setShown] = useState(false); // drives the enter/exit transition
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [consent, setConsent] = useState(false);
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const emailRef = useRef<HTMLInputElement>(null);

  function close() {
    markDismissed();
    setShown(false);
    window.setTimeout(() => setVisible(false), 180); // let the exit transition play
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!variant) return;
    setStatus('loading');
    try {
      const payload = {
        name: '',
        email: email.trim(),
        phone: phone.trim(),
        level: variant.level,
        source: variant.source,
        page_url: window.location.href,
        timestamp: new Date().toISOString(),
      };

      await fetch(WEBHOOK_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      // Mirror the existing forms' GTM lead event so GA4 / Google Ads conversions fire.
      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push({
        event: 'generate_lead',
        form_type: 'popup',
        course_name: variant.level || 'General',
        location_preference: 'Barrio del Pilar',
      });

      markDismissed();
      setStatus('success');
      window.setTimeout(() => {
        setShown(false);
        window.setTimeout(() => setVisible(false), 180);
      }, 2800);
    } catch {
      setStatus('error');
    }
  }

  // Arm the 20s timer once on mount (skips dismissed visitors and suppressed pages).
  useEffect(() => {
    if (typeof window === 'undefined') return;
    if (alreadyDismissed()) return;
    const path = window.location.pathname;
    if (isSuppressed(path)) return;
    const v = resolveVariant(path);
    const t = window.setTimeout(() => {
      setVariant(v);
      setVisible(true);
    }, DELAY_MS);
    return () => window.clearTimeout(t);
  }, []);

  // While visible: lock body scroll, run the enter transition, focus the email
  // field, and wire Escape-to-close.
  useEffect(() => {
    if (!visible) return;
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    const raf = requestAnimationFrame(() => setShown(true));
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close();
    };
    document.addEventListener('keydown', onKey);
    const ft = window.setTimeout(() => emailRef.current?.focus(), 80);
    return () => {
      document.body.style.overflow = prevOverflow;
      document.removeEventListener('keydown', onKey);
      cancelAnimationFrame(raf);
      window.clearTimeout(ft);
    };
  }, [visible]);

  if (!visible || !variant) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={variant.title}
      onClick={close}
      className={`fixed inset-0 z-[9998] flex items-end justify-center p-4 bg-black/50 transition-opacity duration-200 sm:items-center ${
        shown ? 'opacity-100' : 'opacity-0'
      }`}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className={`relative w-full max-w-md rounded-2xl bg-white p-6 shadow-2xl transition-all duration-200 md:p-8 ${
          shown
            ? 'translate-y-0 scale-100 opacity-100'
            : 'translate-y-4 opacity-0 sm:translate-y-0 sm:scale-95'
        }`}
      >
        <button
          type="button"
          onClick={close}
          aria-label="Cerrar"
          className="absolute right-3 top-3 text-zinc-400 transition-colors hover:text-zinc-700"
        >
          <X className="h-5 w-5" />
        </button>

        {status === 'success' ? (
          <div className="py-6 text-center">
            <CheckCircle className="mx-auto mb-4 h-14 w-14 text-green-500" />
            <h3 className="mb-1 text-xl font-bold text-green-800">¡Gracias!</h3>
            <p className="text-zinc-600">Te contactamos en menos de 24 horas.</p>
          </div>
        ) : (
          <>
            <h3 className="mb-2 pr-6 text-2xl font-bold text-accent-blue">{variant.title}</h3>
            <p className="mb-5 text-zinc-500">{variant.subtitle}</p>

            <form onSubmit={handleSubmit} className="space-y-3">
              <input
                ref={emailRef}
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="tu@email.com"
                aria-label="Email"
                className={inputClass}
              />
              <input
                type="tel"
                required
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="+34 600 000 000"
                aria-label="Teléfono"
                className={inputClass}
              />

              <label className="flex items-start gap-2 text-xs text-zinc-600">
                <input
                  type="checkbox"
                  required
                  checked={consent}
                  onChange={(e) => setConsent(e.target.checked)}
                  className="mt-0.5 h-4 w-4 rounded border-zinc-300 text-accent-blue focus:ring-accent-blue"
                />
                <span>
                  He leído y acepto la{' '}
                  <a
                    href="/politica-privacidad/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-accent-blue underline hover:text-blue-800"
                  >
                    Política de Privacidad
                  </a>{' '}
                  y acepto ser contactado/a por teléfono o WhatsApp.
                </span>
              </label>

              {status === 'error' && (
                <p className="text-sm text-red-600">Algo ha fallado. Inténtalo de nuevo.</p>
              )}

              <button
                type="submit"
                disabled={status === 'loading'}
                className="flex w-full items-center justify-center gap-2 rounded-lg bg-red-600 px-6 py-3 font-bold text-white shadow-lg transition-all hover:bg-red-700 hover:shadow-xl disabled:cursor-not-allowed disabled:opacity-50"
              >
                {status === 'loading' ? (
                  <>
                    <Loader2 className="h-5 w-5 animate-spin" />
                    Enviando...
                  </>
                ) : (
                  <>
                    <Send className="h-5 w-5" />
                    {variant.ctaText}
                  </>
                )}
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
}
