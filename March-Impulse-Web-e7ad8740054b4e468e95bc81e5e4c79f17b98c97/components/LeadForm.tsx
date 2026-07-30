import React, { useState } from 'react';
import { Send, CheckCircle, Loader2 } from 'lucide-react';

interface LeadFormProps {
  title?: string;
  subtitle?: string;
  ctaText?: string;
  webhookUrl?: string;
  source?: string;
  compact?: boolean;
  showPhone?: boolean;
  showAge?: boolean;
  showLevel?: boolean;
  /**
   * `legacy` (default) renders the original markup byte-for-byte, so the 85
   * blog articles that mount this form are unaffected by the non-blog design
   * pass. Non-blog pages opt in with `variant="refresh"`.
   *
   * Presentation only — the submit handler, webhook, dataLayer push and gtag
   * call below are identical in both variants and must stay that way.
   */
  variant?: 'legacy' | 'refresh';
}

export default function LeadForm({
  title = "Solicita información",
  subtitle = "Déjanos tus datos y te contactamos en menos de 24 horas",
  ctaText = "Enviar solicitud",
  webhookUrl = "https://services.leadconnectorhq.com/hooks/OAJYwGK3D8G66kUMQsht/webhook-trigger/0fe57216-4cdc-42af-b2d6-d401e9015573",
  source = "general",
  compact = false,
  showPhone = true,
  showAge: _showAge = false,
  showLevel = true,
  variant = 'legacy'
}: LeadFormProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    level: ''
  });
  const [privacyAccepted, setPrivacyAccepted] = useState(false);
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const refresh = variant === 'refresh';
  const pad = compact ? 'p-6' : 'p-8 md:p-12';

  const wrapperClass = refresh
    ? `card ${compact ? 'p-6' : 'p-8 md:p-10'}`
    : `bg-white rounded-xl shadow-lg border border-zinc-100 ${pad}`;

  const successClass = refresh
    ? `rounded-2xl border border-emerald-200 bg-emerald-50 ${compact ? 'p-6' : 'p-8 md:p-10'}`
    : `bg-green-50 border border-green-200 rounded-lg ${pad} text-center`;

  const labelClass = refresh
    ? "mb-2 block text-sm font-medium text-zinc-700"
    : "block text-sm font-semibold text-zinc-700 mb-2";

  const fieldClass = refresh
    ? "w-full rounded-lg border border-zinc-300 bg-white px-4 py-3 text-zinc-900 placeholder:text-zinc-400 transition-[border-color,box-shadow] focus:border-accent-blue focus:outline-none focus:ring-4 focus:ring-accent-blue/15"
    : "w-full px-4 py-3 border border-zinc-200 rounded-lg focus:ring-2 focus:ring-accent-blue focus:border-transparent transition-all";

  const buttonClass = refresh
    ? "btn-primary btn-lg w-full disabled:cursor-not-allowed disabled:opacity-50"
    : "w-full bg-red-600 hover:bg-red-700 text-white font-bold py-4 px-6 rounded-lg transition-all duration-200 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed";

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    try {
      // In production, this would send to the actual webhook
      const payload = {
        ...formData,
        source,
        timestamp: new Date().toISOString()
      };

      await fetch(webhookUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });

      // Push lead event to GTM dataLayer (GTM → Google Ads conversion)
      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push({
        event: 'generate_lead',
        form_type: 'course_inquiry',
        course_name: formData.level || 'General',
        location_preference: 'Barrio del Pilar',
      });

      // Send the same event straight to GA4. GA4 runs via the standalone
      // gtag (not through GTM), so the dataLayer push above never reaches it.
      // send_to is REQUIRED: GTM also claims destination G-KNMS5YW69T on this
      // page, and gtag events without an explicit send_to are silently dropped.
      window.gtag?.('event', 'generate_lead', {
        send_to: 'G-KNMS5YW69T',
        form_type: 'course_inquiry',
        course_name: formData.level || 'General',
        source,
      });

      setStatus('success');
      setFormData({ name: '', email: '', phone: '', level: '' });
      setPrivacyAccepted(false);

      // Redirect to thank you page
      window.location.href = '/gracias/';
    } catch (error) {
      setStatus('error');
    }
  };

  if (status === 'success') {
    return (
      <div className={successClass}>
        <CheckCircle className={refresh ? "mb-4 h-12 w-12 text-emerald-600" : "w-16 h-16 text-green-500 mx-auto mb-4"} />
        <h3 className={refresh ? "t-h3 mb-2 text-emerald-900" : "text-2xl font-bold text-green-800 mb-2"}>¡Gracias por contactarnos!</h3>
        <p className={refresh ? "text-emerald-800" : "text-green-700"}>Te contactaremos en menos de 24 horas.</p>
      </div>
    );
  }

  return (
    <div className={wrapperClass}>
      {!compact && (
        refresh ? (
          <div className="mb-8">
            <h3 className="t-h3 text-accent-blue">{title}</h3>
            <p className="mt-2 text-zinc-500">{subtitle}</p>
            <span className="rule mt-5" />
          </div>
        ) : (
          <div className="text-center mb-8">
            <h3 className="text-2xl md:text-3xl font-bold text-accent-blue mb-2">{title}</h3>
            <p className="text-zinc-500">{subtitle}</p>
          </div>
        )
      )}

      <form onSubmit={handleSubmit} className={refresh ? "space-y-5" : "space-y-4"}>
        {/* Nombre */}
        <div>
          <label className={labelClass}>Nombre completo *</label>
          <input
            type="text"
            required
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className={fieldClass}
            placeholder="Tu nombre"
          />
        </div>

        {/* Email */}
        <div>
          <label className={labelClass}>Email *</label>
          <input
            type="email"
            required
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className={fieldClass}
            placeholder="tu@email.com"
          />
        </div>

        {/* Teléfono */}
        {showPhone && (
        <div>
          <label className={labelClass}>Teléfono *</label>
          <input
            type="tel"
            required
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            className={fieldClass}
            placeholder="+34 600 000 000"
          />
        </div>
        )}

        {/* Nivel */}
        {showLevel && (
        <div>
          <label className={labelClass}>Nivel *</label>
          <select
            required
            value={formData.level}
            onChange={(e) => setFormData({ ...formData, level: e.target.value })}
            className={fieldClass}
          >
            <option value="">Seleccionar</option>
            <option value="infantil">Infantil</option>
            <option value="primaria">Primaria</option>
            <option value="secundaria">Secundaria</option>
            <option value="adulto">Adulto</option>
            <option value="one-to-one">One to One</option>
            <option value="no-se">No sé</option>
          </select>
        </div>
        )}

        {/* Política de privacidad */}
        <div className="flex items-start gap-3">
          <input
            type="checkbox"
            required
            checked={privacyAccepted}
            onChange={(e) => setPrivacyAccepted(e.target.checked)}
            className={refresh
              ? "mt-1 h-4 w-4 rounded border-zinc-300 text-accent-blue focus:ring-accent-blue"
              : "mt-1 w-4 h-4 border-zinc-300 rounded text-accent-blue focus:ring-accent-blue"}
            id="privacy-lead"
          />
          <label htmlFor="privacy-lead" className="text-sm text-zinc-600">
            He leído la Política de Privacidad y acepto ser contactado/a por teléfono o WhatsApp. *
          </label>
        </div>

        <button
          type="submit"
          disabled={status === 'loading'}
          className={buttonClass}
        >
          {status === 'loading' ? (
            <>
              <Loader2 className="w-5 h-5 animate-spin" />
              Enviando...
            </>
          ) : (
            <>
              <Send className="w-5 h-5" />
              {ctaText}
            </>
          )}
        </button>
      </form>
    </div>
  );
}
