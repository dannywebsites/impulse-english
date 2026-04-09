import React, { useState, useEffect } from 'react';
import { CheckCircle, Phone, Clock, Users, Award, Loader2, Send } from 'lucide-react';
import Navbar from '../components/Navbar';

export default function ReservarClasePage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    level: ''
  });
  const [privacyAccepted, setPrivacyAccepted] = useState(false);
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    try {
      const payload = {
        ...formData,
        source: 'reservar-clase',
        timestamp: new Date().toISOString()
      };

      await fetch('https://services.leadconnectorhq.com/hooks/OAJYwGK3D8G66kUMQsht/webhook-trigger/0fe57216-4cdc-42af-b2d6-d401e9015573', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });

      // Push lead event to GTM dataLayer
      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push({
        event: 'generate_lead',
        form_type: 'enrollment',
        course_name: formData.level || 'General',
        location_preference: 'Barrio del Pilar',
      });

      setStatus('success');
      setPrivacyAccepted(false);
    } catch (error) {
      console.error('Error submitting form:', error);
      setStatus('error');
    }
  };

  if (status === 'success') {
    return (
      <>
        <Navbar />
        <div className="min-h-screen bg-gradient-to-br from-green-50 to-green-100 pt-24 pb-16 px-6 flex items-center justify-center">
          <div className="max-w-lg mx-auto text-center">
            <div className="w-24 h-24 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-8">
              <CheckCircle className="w-12 h-12 text-white" />
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-green-800 mb-4">
              ¡Reserva confirmada!
            </h1>
            <p className="text-lg text-green-700 mb-8">
              Hemos recibido tu solicitud. Te contactaremos en menos de 24 horas para confirmar tu clase de prueba gratuita.
            </p>

            <div className="bg-white p-6 rounded-xl shadow-sm mb-8">
              <h3 className="font-bold text-zinc-900 mb-4">Próximos pasos:</h3>
              <ol className="text-left space-y-3 text-zinc-600">
                <li className="flex items-start gap-3">
                  <span className="w-6 h-6 bg-accent-blue text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">1</span>
                  Te llamaremos para confirmar horario
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-6 h-6 bg-accent-blue text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">2</span>
                  Realizaremos una prueba de nivel gratuita
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-6 h-6 bg-accent-blue text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">3</span>
                  Asistirás a tu clase de prueba sin compromiso
                </li>
              </ol>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
              href="/"
                className="bg-accent-blue hover:bg-blue-900 text-white font-bold py-3 px-6 rounded-lg transition-colors"
              >
                Volver al inicio
              </a>
              <a
                href="tel:+34604910611"
                className="bg-white border border-zinc-200 text-zinc-900 font-bold py-3 px-6 rounded-lg hover:bg-zinc-50 transition-colors"
              >
                Llamar ahora
              </a>
            </div>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <Navbar />

      <div className="min-h-screen bg-zinc-50">
        {/* Hero Banner */}
        <section className="relative pt-28 pb-20 md:pt-36 md:pb-28 overflow-hidden">
          <div className="absolute inset-0">
            <picture>
              <source media="(max-width: 640px)" srcSet="/images/optimized/heroes-mobile/primary-students-mobile.webp" type="image/webp" />
              <source media="(max-width: 640px)" srcSet="/images/optimized/heroes-mobile/primary-students-mobile.jpg" type="image/jpeg" />
              <img src="/images/academy/facilities/primary-classes-students-smiling.jpg" alt="Estudiantes felices Impulse English Academy La Vaguada Madrid" className="w-full h-full object-cover" loading="eager" fetchPriority="high" />
            </picture>
            <div className="absolute inset-0 bg-gradient-to-br from-accent-blue/95 via-accent-blue/85 to-[#0a3560]/75"></div>
          </div>
          <div className="absolute inset-0 hero-grain opacity-[0.03]"></div>
          <div className="absolute -top-32 -right-32 w-[420px] h-[420px] rounded-full bg-brand-red/[0.05]"></div>

          <div className="relative z-10 container mx-auto max-w-4xl px-6 text-center">
            <div className="mt-12 md:mt-16">
              <div className="flex items-center justify-center gap-4 mb-6 animate-hero-fade-up">
                <div className="w-8 h-px bg-white/40"></div>
                <span className="font-display text-brand-red text-xs font-semibold uppercase tracking-[0.2em]">
                  Clase de prueba gratuita
                </span>
                <div className="w-8 h-px bg-white/40"></div>
              </div>
              <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl text-white tracking-tight leading-[1.1] mb-6 animate-hero-fade-up animation-delay-100">
                Reserva tu clase de prueba
              </h1>
              <div className="w-16 h-0.5 bg-brand-red mx-auto mb-6 animate-hero-fade-up animation-delay-150"></div>
              <p className="font-display text-lg md:text-xl text-white/80 font-light max-w-2xl mx-auto animate-hero-fade-up animation-delay-200">
                Sin compromiso. Conoce nuestra metodología y a nuestros profesores antes de decidir.
              </p>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-12 md:py-16 px-6">
          <div className="container mx-auto max-w-6xl">
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
              {/* Benefits Sidebar */}
              <div className="lg:col-span-2 order-2 lg:order-1">
                <div className="sticky top-24">
                  <h2 className="text-xl font-bold text-zinc-900 mb-6">
                    ¿Qué incluye tu clase de prueba?
                  </h2>

                  <div className="space-y-4">
                    {[
                      { icon: <Clock className="w-5 h-5" />, text: "Clase completa de 60 minutos" },
                      { icon: <Users className="w-5 h-5" />, text: "Grupo reducido de tu nivel" },
                      { icon: <Award className="w-5 h-5" />, text: "Prueba de nivel incluida" },
                      { icon: <CheckCircle className="w-5 h-5" />, text: "Sin compromiso de matrícula" }
                    ].map((item, index) => (
                      <div key={index} className="flex items-center gap-4 p-4 bg-white rounded-lg border border-zinc-100">
                        <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center text-green-600">
                          {item.icon}
                        </div>
                        <span className="text-zinc-700 font-medium">{item.text}</span>
                      </div>
                    ))}
                  </div>

                  <div className="mt-8 p-6 bg-accent-blue/5 rounded-xl border border-accent-blue/10">
                    <h3 className="font-bold text-accent-blue mb-2">¿Prefieres hablar con nosotros?</h3>
                    <p className="text-zinc-600 text-sm mb-4">
                      Llámanos y te ayudamos a elegir el curso perfecto para ti.
                    </p>
                    <a
                      href="tel:+34604910611"
                      className="flex items-center gap-2 text-accent-blue font-bold"
                    >
                      <Phone className="w-5 h-5" />
                      604 910 611
                    </a>
                  </div>

                  {/* Trust Badges */}
                  <div className="mt-8 flex flex-wrap gap-4">
                    <div className="flex items-center gap-2 text-sm text-zinc-500">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      100% tasa de aprobados
                    </div>
                    <div className="flex items-center gap-2 text-sm text-zinc-500">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      Centro Cambridge oficial
                    </div>
                  </div>
                </div>
              </div>

              {/* Form */}
              <div className="lg:col-span-3 order-1 lg:order-2">
                <div className="bg-white p-6 md:p-10 rounded-2xl shadow-xl border border-zinc-100">
                  <h2 className="text-2xl font-bold text-zinc-900 mb-2">
                    Completa tu reserva
                  </h2>
                  <p className="text-zinc-500 mb-8">
                    Todos los campos marcados con * son obligatorios
                  </p>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Nombre */}
                    <div>
                      <label className="block text-sm font-semibold text-zinc-700 mb-2">
                        Nombre completo *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-3 border border-zinc-200 rounded-lg focus:ring-2 focus:ring-accent-blue focus:border-transparent"
                        placeholder="Tu nombre"
                      />
                    </div>

                    {/* Email */}
                    <div>
                      <label className="block text-sm font-semibold text-zinc-700 mb-2">
                        Email *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3 border border-zinc-200 rounded-lg focus:ring-2 focus:ring-accent-blue focus:border-transparent"
                        placeholder="tu@email.com"
                      />
                    </div>

                    {/* Teléfono */}
                    <div>
                      <label className="block text-sm font-semibold text-zinc-700 mb-2">
                        Teléfono *
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-4 py-3 border border-zinc-200 rounded-lg focus:ring-2 focus:ring-accent-blue focus:border-transparent"
                        placeholder="+34 600 000 000"
                      />
                    </div>

                    {/* Nivel */}
                    <div>
                      <label className="block text-sm font-semibold text-zinc-700 mb-2">
                        Nivel *
                      </label>
                      <select
                        required
                        value={formData.level}
                        onChange={(e) => setFormData({ ...formData, level: e.target.value })}
                        className="w-full px-4 py-3 border border-zinc-200 rounded-lg focus:ring-2 focus:ring-accent-blue focus:border-transparent"
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

                    {/* Política de privacidad */}
                    <div className="flex items-start gap-3">
                      <input
                        type="checkbox"
                        required
                        checked={privacyAccepted}
                        onChange={(e) => setPrivacyAccepted(e.target.checked)}
                        className="mt-1 w-4 h-4 border-zinc-300 rounded text-accent-blue focus:ring-accent-blue"
                        id="privacy-reservar"
                      />
                      <label htmlFor="privacy-reservar" className="text-sm text-zinc-600">
                        He leído la Política de Privacidad y acepto ser contactado/a por teléfono o WhatsApp. *
                      </label>
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={status === 'loading'}
                      className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-4 px-6 rounded-lg transition-all flex items-center justify-center gap-2 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {status === 'loading' ? (
                        <>
                          <Loader2 className="w-5 h-5 animate-spin" />
                          Enviando reserva...
                        </>
                      ) : (
                        <>
                          <Send className="w-5 h-5" />
                          Reservar clase de prueba gratuita
                        </>
                      )}
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
