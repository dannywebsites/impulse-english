import React, { useState, useEffect } from 'react';
import { CheckCircle, ArrowRight, Phone, Clock, Users, Award, Loader2, Send } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import SEOHead from '../components/SEOHead';

export default function ReservarClasePage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    age: '',
    level: '',
    course: '',
    availability: '',
    message: ''
  });
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
        timestamp: new Date().toISOString(),
        // This would be sent to your N8N webhook
      };

      // Simulate API call - in production, uncomment the fetch below
      await new Promise(resolve => setTimeout(resolve, 1500));

      // Real webhook integration:
      // await fetch('https://your-n8n-instance.com/webhook/impulse-booking', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify(payload)
      // });

      console.log('Form submitted:', payload);
      setStatus('success');
    } catch (error) {
      console.error('Error submitting form:', error);
      setStatus('error');
    }
  };

  if (status === 'success') {
    return (
      <>
        <SEOHead
          title="Reserva Confirmada - Impulse English Academy"
          description="Tu reserva ha sido confirmada. Te contactaremos en menos de 24 horas para tu clase de prueba gratuita."
          canonical="/reservar-clase"
          noindex={true}
        />
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
              <Link
                to="/"
                className="bg-accent-blue hover:bg-blue-900 text-white font-bold py-3 px-6 rounded-lg transition-colors"
              >
                Volver al inicio
              </Link>
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
      <SEOHead
        title="Reservar Clase de Prueba Gratuita"
        description="Reserva tu clase de prueba gratuita en Impulse English Academy. Sin compromiso. Te contactamos en menos de 24 horas. La Vaguada, Barrio del Pilar."
        keywords="reservar clase inglés, prueba gratis inglés madrid, clase prueba academia inglés, inscripción cursos inglés"
        canonical="/reservar-clase"
      />
      <Navbar />

      <div className="min-h-screen bg-zinc-50">
        {/* Hero Banner */}
        <section className="bg-accent-blue pt-24 pb-12 md:pt-32 md:pb-16 px-6">
          <div className="container mx-auto max-w-4xl text-center">
            <span className="inline-block bg-red-500 text-white text-sm font-bold px-4 py-2 rounded-full mb-6">
              CLASE DE PRUEBA GRATUITA
            </span>
            <h1 className="text-3xl md:text-5xl font-bold text-white tracking-tight mb-4">
              Reserva tu clase de prueba
            </h1>
            <p className="text-xl text-white/90 font-light max-w-2xl mx-auto">
              Sin compromiso. Conoce nuestra metodología y a nuestros profesores antes de decidir.
            </p>
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
                    {/* Name & Email */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
                    </div>

                    {/* Phone */}
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

                    {/* Age & Level */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-semibold text-zinc-700 mb-2">
                          Edad del alumno *
                        </label>
                        <select
                          required
                          value={formData.age}
                          onChange={(e) => setFormData({ ...formData, age: e.target.value })}
                          className="w-full px-4 py-3 border border-zinc-200 rounded-lg focus:ring-2 focus:ring-accent-blue focus:border-transparent"
                        >
                          <option value="">Seleccionar</option>
                          <option value="2-5">2-5 años (Infantil)</option>
                          <option value="6-12">6-12 años (Primaria)</option>
                          <option value="13-17">13-17 años (Secundaria)</option>
                          <option value="18+">18+ años (Adultos)</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-zinc-700 mb-2">
                          Nivel aproximado
                        </label>
                        <select
                          value={formData.level}
                          onChange={(e) => setFormData({ ...formData, level: e.target.value })}
                          className="w-full px-4 py-3 border border-zinc-200 rounded-lg focus:ring-2 focus:ring-accent-blue focus:border-transparent"
                        >
                          <option value="">No lo sé / Por determinar</option>
                          <option value="principiante">Principiante</option>
                          <option value="a1-a2">A1-A2 (Básico)</option>
                          <option value="b1">B1 (Intermedio)</option>
                          <option value="b2">B2 (Intermedio-alto)</option>
                          <option value="c1-c2">C1-C2 (Avanzado)</option>
                        </select>
                      </div>
                    </div>

                    {/* Course Interest */}
                    <div>
                      <label className="block text-sm font-semibold text-zinc-700 mb-2">
                        ¿Qué curso te interesa?
                      </label>
                      <select
                        value={formData.course}
                        onChange={(e) => setFormData({ ...formData, course: e.target.value })}
                        className="w-full px-4 py-3 border border-zinc-200 rounded-lg focus:ring-2 focus:ring-accent-blue focus:border-transparent"
                      >
                        <option value="">Seleccionar curso</option>
                        <option value="infantil">Inglés Infantil (2-5 años)</option>
                        <option value="primaria">Inglés Primaria (6-12 años)</option>
                        <option value="secundaria">Inglés Secundaria (13-17 años)</option>
                        <option value="adultos">Inglés Adultos</option>
                        <option value="cambridge">Preparación Cambridge</option>
                        <option value="particulares">Clases Particulares</option>
                      </select>
                    </div>

                    {/* Availability */}
                    <div>
                      <label className="block text-sm font-semibold text-zinc-700 mb-2">
                        Disponibilidad horaria
                      </label>
                      <select
                        value={formData.availability}
                        onChange={(e) => setFormData({ ...formData, availability: e.target.value })}
                        className="w-full px-4 py-3 border border-zinc-200 rounded-lg focus:ring-2 focus:ring-accent-blue focus:border-transparent"
                      >
                        <option value="">Seleccionar</option>
                        <option value="manana">Mañanas (10:00-14:00)</option>
                        <option value="tarde">Tardes (16:00-21:00)</option>
                        <option value="sabado">Sábados</option>
                        <option value="flexible">Horario flexible</option>
                      </select>
                    </div>

                    {/* Message */}
                    <div>
                      <label className="block text-sm font-semibold text-zinc-700 mb-2">
                        Comentarios adicionales (opcional)
                      </label>
                      <textarea
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        rows={3}
                        className="w-full px-4 py-3 border border-zinc-200 rounded-lg focus:ring-2 focus:ring-accent-blue focus:border-transparent resize-none"
                        placeholder="¿Hay algo que debamos saber?"
                      />
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

                    <p className="text-xs text-zinc-400 text-center">
                      Al enviar este formulario, aceptas nuestra{' '}
                      <a href="#" className="underline">política de privacidad</a>.
                    </p>
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
