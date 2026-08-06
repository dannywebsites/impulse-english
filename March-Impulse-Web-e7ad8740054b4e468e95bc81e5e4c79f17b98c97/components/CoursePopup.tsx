import React, { useState, useEffect, useRef } from 'react';
import { X, Send, CheckCircle, Check, Loader2 } from 'lucide-react';
import { resolveVariant, isSuppressed, type PopupVariant } from '../utils/popupVariants';

// Same GoHighLevel inbound hook the existing LeadForm / reservar-clase forms use,
// so popup leads land in the exact same CRM workflow. The per-variant `source`
// (popup-c1, popup-b2, ...) tells GHL which page/level produced the lead.
const WEBHOOK_URL =
  'https://services.leadconnectorhq.com/hooks/OAJYwGK3D8G66kUMQsht/webhook-trigger/0fe57216-4cdc-42af-b2d6-d401e9015573';

// Bumped to _v2 with the prueba-de-nivel rewrite: visitors who dismissed the old
// "solicita información" popup had it suppressed forever, so without a new key
// they would never be shown the new offer.
const DISMISS_KEY = 'impulse_popup_dismissed_v2';
const DELAY_MS = 30000; // fire after 30s on page

// "What are you looking for" — same offering set + values the existing LeadForm
// uses, so the selection maps onto the same CRM `level` field.
const COURSE_OPTIONS: { value: string; label: string }[] = [
  { value: 'infantil', label: 'Infantil' },
  { value: 'primaria', label: 'Primaria' },
  { value: 'secundaria', label: 'Secundaria' },
  { value: 'adulto', label: 'Adulto' },
  { value: 'one-to-one', label: 'One to One' },
  { value: 'online', label: 'Online' },
  { value: 'no-se', label: 'No lo sé todavía' },
];

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

// What the visitor actually gets for their details. Identical across variants:
// the offer is the same everywhere, only the page-matched hook changes.
const POPUP_BENEFITS: string[] = [
  'Tu nivel MCER exacto (A1-C2), no un "nivel medio"',
  'En qué destrezas estás fuerte y cuáles te frenan',
  'Un plan de estudios personalizado y plazos reales',
  'Con JP, nuestro Director de Estudios y experto Cambridge',
];

const inputClass =
  'w-full px-4 py-3 border border-zinc-200 rounded-lg focus:ring-2 focus:ring-accent-blue focus:border-transparent transition-all';

/**
 * Time-on-page lead-capture popup. Mounted once in BaseLayout.astro (client:idle)
 * so it covers every page. Shows after 30s with content matched to the page's
 * exam level, once per visitor (localStorage), and never on form/legal pages.
 */
export default function CoursePopup() {
  const [variant, setVariant] = useState<PopupVariant | null>(null);
  const [visible, setVisible] = useState(false); // overlay in the DOM
  const [shown, setShown] = useState(false); // drives the enter/exit transition
  const [firstName, setFirstName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [course, setCourse] = useState('');
  const [consent, setConsent] = useState(false);
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const firstNameRef = useRef<HTMLInputElement>(null);

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
        name: firstName.trim(),
        email: email.trim(),
        phone: phone.trim(),
        level: course, // what they're looking for (infantil, primaria, ...)
        source: variant.source, // which page/level produced the lead (popup-c1, ...)
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
        course_name: course || 'General',
        location_preference: 'Barrio del Pilar',
      });

      // Send the same event straight to GA4 — the dataLayer push above only
      // reaches Google Ads via GTM, never GA4. send_to is REQUIRED: GTM claims
      // destination G-KNMS5YW69T on this page, and gtag events without an
      // explicit send_to are silently dropped.
      window.gtag?.('event', 'generate_lead', {
        send_to: 'G-KNMS5YW69T',
        form_type: 'popup',
        course_name: course || 'General',
        source: variant.source,
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

  // Arm the 30s timer once on mount (skips dismissed visitors and suppressed pages).
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
    const ft = window.setTimeout(() => firstNameRef.current?.focus(), 80);
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
        className={`relative w-full max-w-md rounded-2xl bg-white p-6 shadow-panel transition-all duration-200 md:p-8 ${
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
            <p className="text-zinc-600">
              Te llamamos en menos de 24 horas para darte cita para tu prueba de nivel gratuita.
            </p>
          </div>
        ) : (
          <>
            <h3 className="mb-2 pr-6 text-2xl font-bold text-accent-blue">{variant.title}</h3>
            <p className="mb-4 text-zinc-500">{variant.subtitle}</p>

            {/* The benefits are what make the ask worth answering — without them
                this is just another form demanding a phone number. Same four on
                every variant: the offer doesn't change, only the hook above does. */}
            <ul className="mb-5 space-y-2 rounded-xl bg-accent-blue/5 p-4">
              {(variant.benefits ?? POPUP_BENEFITS).map((benefit) => (
                <li key={benefit} className="flex items-start gap-2 text-sm text-zinc-700">
                  <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-emerald-600" />
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>

            <form onSubmit={handleSubmit} className="space-y-3">
              <input
                ref={firstNameRef}
                type="text"
                required
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                placeholder="Tu nombre"
                aria-label="Nombre"
                className={inputClass}
              />
              <input
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
              <select
                required
                value={course}
                onChange={(e) => setCourse(e.target.value)}
                aria-label="¿Qué buscas?"
                className={inputClass}
              >
                <option value="">¿Qué buscas?</option>
                {COURSE_OPTIONS.map((opt) => (
                  <option key={opt.value} value={opt.value}>
                    {opt.label}
                  </option>
                ))}
              </select>

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
                className="btn-primary w-full disabled:cursor-not-allowed disabled:opacity-50"
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
