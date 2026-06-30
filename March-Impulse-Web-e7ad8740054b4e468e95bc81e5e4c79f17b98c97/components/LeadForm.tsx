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
      window.gtag?.('event', 'generate_lead', {
        form_type: 'course_inquiry',
        course_name: formData.level || 'General',
        source,
      });

      setStatus('success');
      setFormData({ name: '', email: '', phone: '', level: '' });
      setPrivacyAccepted(false);

      // Redirect to thank you page
      window.location.href = '/gracias';
    } catch (error) {
      setStatus('error');
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
      </form>
    </div>
  );
}
