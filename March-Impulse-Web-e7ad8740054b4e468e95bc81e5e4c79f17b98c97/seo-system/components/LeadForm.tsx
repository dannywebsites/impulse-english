import React, { useState } from 'react';
import { Send, CheckCircle, Loader2 } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface LeadFormProps {
  title?: string;
  subtitle?: string;
  ctaText?: string;
  webhookUrl?: string;
  source?: string;
  compact?: boolean;
}

export default function LeadForm({
  title = "Solicita información",
  subtitle = "Déjanos tus datos y te contactamos en menos de 24 horas",
  ctaText = "Enviar solicitud",
  webhookUrl = "https://n8n.example.com/webhook/impulse-lead",
  source = "general",
  compact = false
}: LeadFormProps) {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    age: '',
    message: ''
  });
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

      // Simulate API call for demo
      await new Promise(resolve => setTimeout(resolve, 1000));

      // Uncomment for real webhook:
      // await fetch(webhookUrl, {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify(payload)
      // });

      setStatus('success');
      setFormData({ name: '', email: '', phone: '', age: '', message: '' });

      // Redirect to thank you page
      navigate('/gracias');
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
        {/* Name */}
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

        {/* Phone */}
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

        {/* Age of student */}
        <div>
          <label className="block text-sm font-semibold text-zinc-700 mb-2">Edad del alumno *</label>
          <select
            required
            value={formData.age}
            onChange={(e) => setFormData({ ...formData, age: e.target.value })}
            className="w-full px-4 py-3 border border-zinc-200 rounded-lg focus:ring-2 focus:ring-accent-blue focus:border-transparent transition-all"
          >
            <option value="">Seleccionar</option>
            <option value="infantil">Infantil (2-5 años)</option>
            <option value="primaria">Primaria (6-12 años)</option>
            <option value="secundaria">Secundaria (13-17 años)</option>
            <option value="adulto">Adulto (18+ años)</option>
          </select>
        </div>

        {/* Optional message */}
        <div>
          <label className="block text-sm font-semibold text-zinc-700 mb-2">Mensaje (opcional)</label>
          <textarea
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            rows={3}
            className="w-full px-4 py-3 border border-zinc-200 rounded-lg focus:ring-2 focus:ring-accent-blue focus:border-transparent transition-all resize-none"
            placeholder="¿Tienes alguna pregunta específica?"
          />
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

        <p className="text-xs text-zinc-400 text-center">
          Al enviar este formulario, aceptas nuestra política de privacidad.
        </p>
      </form>
    </div>
  );
}
