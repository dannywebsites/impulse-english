import React, { useState } from 'react';
import { Send, CheckCircle, Loader2, AlertCircle } from 'lucide-react';
import { toast } from 'sonner';
import { PUBLIC_WEBHOOK_URL } from 'astro:env/client';
import { NAP } from '../utils/napData';

interface LeadFormProps {
  title?: string;
  subtitle?: string;
  ctaText?: string;
  source?: string;
  compact?: boolean;
  showPhone?: boolean;
  showAge?: boolean;
  showLevel?: boolean;
}

export default function LeadForm({
  title = "Solicita información",
  subtitle = "Déjanos tus datos y te contactamos en menos de 24 horas",
  ctaText = "Enviar solicitud",
  source = "general",
  compact = false,
  showPhone = true,
  showAge: _showAge = false,
  showLevel = true
}: LeadFormProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    level: ''
  });
  const [privacyAccepted, setPrivacyAccepted] = useState(false);
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [honeypot, setHoneypot] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // FORM-04/FORM-05: Honeypot guard — FIRST check, before setStatus('loading')
    // If honeypot is filled, this is a bot — fake success without hitting webhook
    if (honeypot) {
      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push({
        event: 'generate_lead',
        form_type: 'course_inquiry',
        course_name: formData.level || 'General',
        location_preference: NAP.neighborhood,
      });
      window.location.href = '/gracias';
      return;
    }

    setStatus('loading');

    try {
      const payload = {
        ...formData,
        source,
        timestamp: new Date().toISOString()
      };

      // FORM-01: Webhook URL from astro:env — no hardcoded URL
      // FORM-02: Check response.ok — throws on 4xx/5xx, closes silent lead loss bug
      const response = await fetch(PUBLIC_WEBHOOK_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });

      if (!response.ok) {
        throw new Error(`Error del servidor: ${response.status}`);
      }

      // Push lead event to GTM dataLayer
      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push({
        event: 'generate_lead',
        form_type: 'course_inquiry',
        course_name: formData.level || 'General',
        location_preference: NAP.neighborhood,
      });

      // FORM-06: Success toast before redirect (D-02)
      toast.success('¡Solicitud enviada! Te contactamos en menos de 24 horas.');
      setStatus('success');
      setFormData({ name: '', email: '', phone: '', level: '' });
      setPrivacyAccepted(false);

      // D-02: 1500ms delay so user sees the toast before redirect
      setTimeout(() => { window.location.href = '/gracias'; }, 1500);

    } catch (error) {
      setStatus('error');
      // FORM-06: Error toast with Spanish message and phone number (D-03)
      toast.error(`Ha ocurrido un error. Inténtalo de nuevo o llámanos al ${NAP.phone}.`);
    }
  };

  if (status === 'success') {
    return (
      <div className={`bg-green-50 border border-green-200 rounded-lg ${compact ? 'p-6' : 'p-8 md:p-12'} text-center`}>
        <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
        <h3 className="text-2xl font-bold text-green-800 mb-2">¡Gracias por contactarnos!</h3>
        <p className="text-green-700">Te contactaremos en menos de 24 horas.</p>
      </div>
    );
  }

  return (
    <div className={`bg-white rounded-xl shadow-lg border border-zinc-100 ${compact ? 'p-6' : 'p-8 md:p-12'}`}>
      {!compact && (
        <div className="text-center mb-8">
          <h3 className="text-2xl md:text-3xl font-bold text-accent-blue mb-2">{title}</h3>
          <p className="text-zinc-500">{subtitle}</p>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Honeypot — hidden from real users, visible to bots (D-04, D-05, D-06) */}
        <div
          aria-hidden="true"
          style={{ position: 'absolute', left: '-9999px', top: 'auto', width: '1px', height: '1px', overflow: 'hidden' }}
        >
          <input
            type="text"
            name="website"
            tabIndex={-1}
            autoComplete="one-time-code"
            value={honeypot}
            onChange={(e) => setHoneypot(e.target.value)}
          />
        </div>

        {/* Nombre */}
        <div>
          <label className="block text-sm font-semibold text-zinc-700 mb-2">Nombre completo *</label>
          <input
            type="text"
            required
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="w-full px-4 py-3 border border-zinc-200 rounded-lg focus:ring-2 focus:ring-accent-blue focus:border-transparent transition-all"
            placeholder="Tu nombre"
          />
        </div>

        {/* Email */}
        <div>
          <label className="block text-sm font-semibold text-zinc-700 mb-2">Email *</label>
          <input
            type="email"
            required
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className="w-full px-4 py-3 border border-zinc-200 rounded-lg focus:ring-2 focus:ring-accent-blue focus:border-transparent transition-all"
            placeholder="tu@email.com"
          />
        </div>

        {/* Teléfono */}
        {showPhone && (
        <div>
          <label className="block text-sm font-semibold text-zinc-700 mb-2">Teléfono *</label>
          <input
            type="tel"
            required
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            className="w-full px-4 py-3 border border-zinc-200 rounded-lg focus:ring-2 focus:ring-accent-blue focus:border-transparent transition-all"
            placeholder="+34 600 000 000"
          />
        </div>
        )}

        {/* Nivel */}
        {showLevel && (
        <div>
          <label className="block text-sm font-semibold text-zinc-700 mb-2">Nivel *</label>
          <select
            required
            value={formData.level}
            onChange={(e) => setFormData({ ...formData, level: e.target.value })}
            className="w-full px-4 py-3 border border-zinc-200 rounded-lg focus:ring-2 focus:ring-accent-blue focus:border-transparent transition-all"
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
            className="mt-1 w-4 h-4 border-zinc-300 rounded text-accent-blue focus:ring-accent-blue"
            id="privacy-lead"
          />
          <label htmlFor="privacy-lead" className="text-sm text-zinc-600">
            He leído la Política de Privacidad y acepto ser contactado/a por teléfono o WhatsApp. *
          </label>
        </div>

        <button
          type="submit"
          disabled={status === 'loading'}
          className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-4 px-6 rounded-lg transition-all duration-200 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
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
        {status === 'error' && (
          <div className="mt-3 p-3 bg-red-50 border border-red-200 rounded-lg">
            <p className="text-sm text-red-700 flex items-center gap-2">
              <AlertCircle className="w-4 h-4 flex-shrink-0" />
              Ha ocurrido un error. Inténtalo de nuevo o llámanos al{' '}
              <a href={NAP.phoneTel} className="font-semibold underline">
                {NAP.phone}
              </a>.
            </p>
          </div>
        )}
      </form>
    </div>
  );
}
