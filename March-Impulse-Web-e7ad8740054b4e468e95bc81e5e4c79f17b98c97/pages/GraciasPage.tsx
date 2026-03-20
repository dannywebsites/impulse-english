import React, { useEffect } from 'react';
import { CheckCircle, Phone, Clock, MapPin, Instagram, Facebook, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import SEOHead from '../components/SEOHead';

const nextSteps = [
  {
    number: "1",
    title: "Revisamos Tu Solicitud (Hoy)",
    description: "Tu formulario llegó directamente a nuestro equipo. Lo revisaremos inmediatamente."
  },
  {
    number: "2",
    title: "Te Contactamos (Menos de 24 horas)",
    description: "Te llamaremos o enviaremos WhatsApp para confirmar tu disponibilidad y agendar fecha y hora."
  },
  {
    number: "3",
    title: "Vienes a Conocernos",
    description: "Infantil: Clase de prueba gratuita de 1 hora. Primaria/Secundaria/Adultos: Prueba de nivel de 25 minutos."
  },
  {
    number: "4",
    title: "Empiezas Tu Viaje con el Inglés",
    description: "Después de la prueba, te explicamos el mejor curso para tu nivel y objetivos."
  }
];

const courses = [
  { name: "Infantil (2-5 años)", description: "Great Little People. Música, movimiento, diversión.", href: "/cursos-ingles/infantil" },
  { name: "Primaria (6-12 años)", description: "A1-A2. Cambridge Young Learners.", href: "/cursos-ingles/primaria" },
  { name: "Secundaria (13-17 años)", description: "EBAU, Cambridge B1/B2/C1. 100% aprobados.", href: "/cursos-ingles/secundaria" },
  { name: "Adultos", description: "Expertos en principiantes absolutos. Cambridge, Linguaskill.", href: "/cursos-ingles/adultos" },
  { name: "Clases Particulares", description: "Presencial u online. Horarios flexibles.", href: "/cursos-ingles/particulares" },
  { name: "Exámenes Cambridge", description: "Centro Oficial. Todos los niveles Pre-A1 hasta C2.", href: "/examenes-cambridge" }
];

export default function GraciasPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <SEOHead
        title="Gracias por Contactarnos"
        description="Tu solicitud ha sido recibida. Te contactaremos en menos de 24 horas."
        canonical="/gracias"
        noindex={true}
      />
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-28 pb-20 md:pt-36 md:pb-32 overflow-hidden">
        <div className="absolute inset-0">
          <img src="https://impulseenglish.s3.us-east-1.amazonaws.com/impulsephotos/JP+WITH+STUDENTS.jpg" alt="Estudiantes con profesor Impulse English Academy" className="w-full h-full object-cover" loading="eager" />
          <div className="absolute inset-0 bg-gradient-to-br from-emerald-950/90 via-green-950/80 to-emerald-900/70"></div>
        </div>
        <div className="absolute inset-0 hero-grain opacity-[0.03]"></div>
        <div className="absolute -top-32 -right-32 w-[420px] h-[420px] rounded-full bg-emerald-400/[0.05]"></div>

        <div className="relative z-10 container mx-auto px-6 md:px-12 text-center">
          <div className="w-20 h-20 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full flex items-center justify-center mx-auto mb-8 animate-hero-fade-up">
            <CheckCircle className="w-10 h-10 text-white" />
          </div>

          <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl text-white tracking-tight leading-[1.1] mb-6 animate-hero-fade-up animation-delay-100">
            ¡Gracias por Contactarnos!
          </h1>
          <div className="w-16 h-0.5 bg-brand-red mx-auto mb-6 animate-hero-fade-up animation-delay-150"></div>

          <p className="font-display text-xl md:text-2xl text-white/85 font-light mb-4 max-w-2xl mx-auto animate-hero-fade-up animation-delay-200">
            Tu solicitud ha sido recibida con éxito.
          </p>

          <p className="font-display text-lg text-white/70 max-w-xl mx-auto animate-hero-fade-up animation-delay-300">
            Nuestro equipo revisará tu información y te contactaremos en menos de 24 horas para agendar tu clase de prueba o prueba de nivel.
          </p>

          <div className="mt-8 inline-flex items-center gap-2 border border-white/20 backdrop-blur-sm px-6 py-3 rounded-full animate-hero-fade-up animation-delay-400">
            <Clock className="w-4 h-4 text-brand-red" />
            <span className="font-display text-white font-medium text-sm">Respuesta garantizada en menos de 24 horas</span>
          </div>
        </div>
      </section>

      {/* Next Steps */}
      <section className="py-12 md:py-20 px-6 bg-white">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 mb-12 text-center">
            Próximos Pasos
          </h2>

          <div className="space-y-6">
            {nextSteps.map((step, index) => (
              <div key={index} className="flex items-start gap-4 p-6 bg-zinc-50 rounded-xl border border-zinc-100">
                <div className="w-12 h-12 bg-accent-blue text-white rounded-full flex items-center justify-center font-bold text-xl flex-shrink-0">
                  {step.number}
                </div>
                <div>
                  <h3 className="font-bold text-zinc-900 text-lg mb-1">{step.title}</h3>
                  <p className="text-zinc-600">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Options */}
      <section className="py-16 px-6 bg-zinc-50">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold text-zinc-900 mb-8 text-center">
            ¿Necesitas Ayuda Ahora?
          </h2>
          <p className="text-zinc-600 text-center mb-8">
            No esperes a que te contactemos. Puedes escribirnos ahora:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <a
              href="https://wa.me/34604910611"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 hover:bg-green-600 text-white p-6 rounded-xl text-center transition-colors"
            >
              <Phone className="w-8 h-8 mx-auto mb-3" />
              <div className="font-bold mb-1">WhatsApp (Más Rápido)</div>
              <div className="text-green-100">+34 604 910 611</div>
            </a>

            <a
              href="tel:+34604910611"
              className="bg-accent-blue hover:bg-blue-900 text-white p-6 rounded-xl text-center transition-colors"
            >
              <Phone className="w-8 h-8 mx-auto mb-3" />
              <div className="font-bold mb-1">Teléfono</div>
              <div className="text-blue-100">+34 604 910 611</div>
            </a>

            <a
              href="mailto:info@impulse-english.es"
              className="bg-zinc-700 hover:bg-zinc-800 text-white p-6 rounded-xl text-center transition-colors"
            >
              <div className="w-8 h-8 mx-auto mb-3 flex items-center justify-center text-2xl">@</div>
              <div className="font-bold mb-1">Email</div>
              <div className="text-zinc-300">info@impulse-english.es</div>
            </a>
          </div>

          {/* Hours */}
          <div className="mt-8 p-6 bg-white rounded-xl border border-zinc-100">
            <div className="flex items-center gap-3 mb-4">
              <Clock className="w-6 h-6 text-accent-blue" />
              <h3 className="font-bold text-zinc-900">Horario de Atención</h3>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4 text-sm text-zinc-600">
              <div><span className="font-semibold">Lunes:</span> 10:00–21:30</div>
              <div><span className="font-semibold">Martes:</span> 15:30–21:30</div>
              <div><span className="font-semibold">Miércoles:</span> 10:00–21:30</div>
              <div><span className="font-semibold">Jueves:</span> 15:30–21:30</div>
              <div><span className="font-semibold">Viernes:</span> 15:30–19:30</div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Media */}
      <section className="py-16 px-6 bg-white">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold text-zinc-900 mb-4">
            Mientras Esperas, Síguenos
          </h2>
          <p className="text-zinc-600 mb-8">
            Tips de inglés, historias de estudiantes, vida en la academia.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="https://www.instagram.com/impulse_english_academy/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-3 rounded-full font-semibold hover:opacity-90 transition-opacity"
            >
              <Instagram className="w-5 h-5" />
              @impulse_english_academy
            </a>
            <a
              href="https://www.tiktok.com/@impulse_english"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-black text-white px-6 py-3 rounded-full font-semibold hover:opacity-90 transition-opacity"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
              </svg>
              @impulse_english
            </a>
            <a
              href="https://www.facebook.com/impulseenglish.es"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-full font-semibold hover:opacity-90 transition-opacity"
            >
              <Facebook className="w-5 h-5" />
              Facebook
            </a>
          </div>
        </div>
      </section>

      {/* Location */}
      <section className="py-16 px-6 bg-zinc-50">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold text-zinc-900 mb-8 text-center">
            Nuestra Ubicación
          </h2>

          <div className="bg-white p-8 rounded-xl border border-zinc-100">
            <div className="flex items-start gap-4 mb-6">
              <MapPin className="w-6 h-6 text-accent-blue flex-shrink-0" />
              <div>
                <div className="font-bold text-zinc-900 text-lg">Av. de El Ferrol, 22, La Vaguada</div>
                <div className="text-zinc-600">Barrio del Pilar, 28029 Madrid</div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-bold text-zinc-900 mb-3">Cómo Llegar:</h3>
                <ul className="space-y-2 text-zinc-600 text-sm">
                  <li><strong>Metro:</strong> Línea 9 – Barrio del Pilar (4 min caminando)</li>
                  <li><strong>Metro:</strong> Línea 7 – Peñagrande (12-15 min caminando)</li>
                  <li><strong>Autobús:</strong> Líneas 42, 132, 137, 147</li>
                  <li><strong>A pie:</strong> 8–10 minutos desde La Vaguada</li>
                </ul>
              </div>
              <div>
                <h3 className="font-bold text-zinc-900 mb-3">Servimos:</h3>
                <p className="text-zinc-600 text-sm">
                  Barrio del Pilar, La Vaguada, Peñagrande, La Ventilla, La Paz, Plaza Castilla, Tetuán
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Explore Courses */}
      <section className="py-16 px-6 bg-white">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold text-zinc-900 mb-8 text-center">
            Mientras Esperas, Conoce Nuestros Cursos
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {courses.map((course, index) => (
              <Link
                key={index}
                to={course.href}
                className="p-4 bg-zinc-50 rounded-lg border border-zinc-100 hover:bg-accent-blue hover:text-white group transition-colors"
              >
                <h3 className="font-bold text-zinc-900 group-hover:text-white mb-1">{course.name}</h3>
                <p className="text-zinc-500 group-hover:text-white/80 text-sm">{course.description}</p>
                <div className="flex items-center gap-1 text-accent-blue group-hover:text-white text-sm font-semibold mt-2">
                  Ver Más <ArrowRight className="w-4 h-4" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Final Message */}
      <section className="py-16 px-6 bg-accent-blue text-white text-center">
        <div className="container mx-auto max-w-2xl">
          <h2 className="text-3xl font-bold mb-4">
            Gracias por Confiar en Impulse English Academy
          </h2>
          <p className="text-white/80 mb-8">
            Estamos emocionados de ser parte de tu viaje de aprendizaje de inglés.
            Nos vemos pronto en la academia.
          </p>
          <p className="text-lg font-semibold">
            El equipo de Impulse English Academy
          </p>

          <Link
            to="/"
            className="inline-block mt-8 bg-white text-accent-blue font-bold py-3 px-8 rounded-lg hover:bg-zinc-100 transition-colors"
          >
            Volver al Inicio
          </Link>
        </div>
      </section>

      <Footer />
    </>
  );
}
