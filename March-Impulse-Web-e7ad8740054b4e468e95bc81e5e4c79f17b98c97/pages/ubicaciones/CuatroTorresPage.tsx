import React, { useEffect } from 'react';
import { MapPin, Clock, Phone, Train, Bus, CheckCircle, Star, ArrowRight, MessageCircle, Briefcase } from 'lucide-react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import LeadForm from '../../components/LeadForm';
import LazyVideo from '../../components/LazyVideo';
import Breadcrumb from '../../components/Breadcrumb';
import { NAP } from '../../utils/napData';
import type { FAQItem } from '../../utils/schemaData';

const benefits = [
  { title: "A 20-25 Minutos de Cuatro Torres Business Area", desc: "Conexión por metro o autobús. Ideal para profesionales que trabajan en la zona." },
  { title: "Centro Oficial de Preparación Cambridge", desc: "Prepárate y haz el examen donde estudias. Sin sorpresas." },
  { title: "100% de Aprobados Cambridge 24/25", desc: "Todos nuestros estudiantes aprobaron sus exámenes." },
  { title: "Grupos Reducidos (Máximo 7-10 Alumnos)", desc: "Atención personalizada real. No 15-20 como otras \"reducidas\"." },
  { title: "Profesionales de Cuatro Torres Business Area Confían en Nosotros", desc: "Más de 174 reseñas de 5 estrellas en Google." },
  { title: "Horarios Flexibles para Profesionales", desc: "Clases de mañana y tarde adaptadas a tu jornada laboral." }
];

const courses = [
  { name: "Infantil (2-5 años)", method: "Great Little People", href: "/cursos-ingles/infantil" },
  { name: "Primaria (6-12 años)", method: "Young Learners + Cambridge", href: "/cursos-ingles/primaria" },
  { name: "Secundaria (13-17 años)", method: "EBAU + Cambridge B1/B2/C1", href: "/cursos-ingles/secundaria" },
  { name: "Adultos", method: "Todos niveles + Cambridge + Linguaskill", href: "/cursos-ingles/adultos" },
  { name: "Clases Particulares", method: "Presencial u online", href: "/cursos-ingles/particulares" }
];

export const localFaqs: FAQItem[] = [
  {
    question: "¿Qué niveles de inglés ofrecéis cerca de Cuatro Torres?",
    answer: "Ofrecemos todos los niveles desde principiante (A1) hasta avanzado (C2). Realizamos una prueba de nivel gratuita para ubicarte en el grupo adecuado. Preparamos exámenes Cambridge (Pre-A1 Starters hasta C2 Proficiency) y Linguaskill."
  },
  {
    question: "¿Hay clase de prueba gratuita en vuestra academia cerca de Cuatro Torres?",
    answer: "Sí, ofrecemos una prueba de nivel gratuita de 25 minutos donde evaluamos tu nivel actual y te recomendamos el curso más adecuado. Puedes reservarla por WhatsApp o a través de nuestra web."
  },
  {
    question: "¿Cuántos alumnos hay por grupo en las clases de inglés?",
    answer: "Nuestros grupos son reducidos: máximo 7-10 alumnos por clase. Esto garantiza atención personalizada real, no como otras academias que dicen tener grupos reducidos con 15-20 estudiantes."
  },
  {
    question: "¿Qué horarios hay disponibles para clases de inglés cerca de Cuatro Torres?",
    answer: "Tenemos horarios de mañana y tarde: lunes y miércoles de 10:00 a 21:30, martes y jueves de 15:30 a 21:30, y viernes de 13:30 a 19:30. Adaptamos los horarios a familias y profesionales de la zona."
  },
  {
    question: "¿Cómo llego a la academia desde Cuatro Torres?",
    answer: "Desde Cuatro Torres Business Area puedes llegar fácilmente en metro. Toma la Línea 10 hasta Plaza Castilla y luego la Línea 9 hasta Barrio del Pilar. Nuestra academia está a solo 500 metros de la salida del metro."
  }
];

const testimonials = [
  { quote: "Desde que llevo a mis hijos están aprobando inglés y sobre todo que van encantados.", author: "Lidia Ramirez", location: "Google Reviews" },
  { quote: "100% recomendado, vale la pena. Mi hijo continúa para exámenes de cualificación.", author: "Luis Martín González", location: "Google Reviews" },
  { quote: "Necesitaba el Linguaskill para mi empresa y lo saqué en tiempo récord. Profesionales de verdad.", author: "David Hernández", location: "Google Reviews" },
  { quote: "Excelente trato y muy buenos resultados. Recomendado para profesionales que necesitan certificar su nivel.", author: "Carmen Vega", location: "Google Reviews" }
];

export const locationMeta = {locationName: "Cuatro Torres Business Area",
        pageUrl: "https://impulse-english.es/academia-ingles-cuatro-torres"};

export default function CuatroTorresPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = 'Academia de Inglés cerca de Cuatro Torres Business Area Madrid | Impulse English Academy La Vaguada – Barrio del Pilar';
  }, []);

  return (
    <>
<Navbar />

      {/* Hero Section */}
      <section className="relative pt-28 pb-20 md:pt-36 md:pb-32 overflow-hidden">
        <div className="absolute inset-0">
          <img src="/images/academy/outside-academy.jpg" alt="Impulse English Academy fachada exterior La Vaguada Madrid" className="w-full h-full object-cover" loading="eager" />
          <div className="absolute inset-0 bg-gradient-to-br from-accent-blue/95 via-accent-blue/85 to-[#0a3560]/75"></div>
        </div>
        <div className="absolute inset-0 hero-grain opacity-[0.03]"></div>
        <div className="absolute -top-32 -right-32 w-[420px] h-[420px] rounded-full bg-brand-red/[0.05]"></div>
        <div className="absolute -bottom-24 -left-24 w-80 h-80 rounded-full bg-white/[0.03]"></div>

        <div className="relative z-10 container mx-auto px-6 md:px-12">
          <Breadcrumb
            items={[
              { label: 'Ubicaciones', href: '/academias-ingles-madrid/por-barrios/' },
              { label: 'Cuatro Torres' }
            ]}
            variant="light"
          />

          <div className="max-w-4xl mt-12 md:mt-16">
            <div className="flex items-center gap-4 mb-6 animate-hero-fade-up">
              <div className="w-8 h-px bg-white/40"></div>
              <MapPin className="w-4 h-4 text-brand-red" />
              <span className="font-display text-white/70 text-xs uppercase tracking-[0.2em]">
                Cuatro Torres
              </span>
            </div>
            <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl text-white tracking-tight leading-[1.1] mb-6 animate-hero-fade-up animation-delay-100">
              Academia de Inglés cerca de Cuatro Torres
            </h1>
            <div className="w-16 h-0.5 bg-brand-red mb-6 animate-hero-fade-up animation-delay-150"></div>
            <p className="font-display text-lg md:text-xl text-white/80 font-light leading-relaxed mb-4 animate-hero-fade-up animation-delay-200">
              Centro Oficial Cambridge a 20-25 minutos de Cuatro Torres Business Area
            </p>
            <div className="flex items-center gap-2 text-white/60 font-display text-sm mb-2 animate-hero-fade-up animation-delay-200">
              <Train className="w-4 h-4" />
              <span>Metro Línea 10 (Begoña) o autobuses 132, 137</span>
            </div>
            <p className="font-display text-white/50 text-sm mb-8 animate-hero-fade-up animation-delay-200">
              {NAP.fullAddress}
            </p>
            <div className="flex flex-wrap gap-3 mb-8 animate-hero-fade-up animation-delay-300">
              <span className="border border-white/15 px-4 py-2 rounded-full text-white/80 font-display text-sm">Centro Oficial Cambridge</span>
              <span className="border border-white/15 px-4 py-2 rounded-full text-white/80 font-display text-sm">100% Aprobados 24/25</span>
              <span className="border border-white/15 px-4 py-2 rounded-full text-white/80 font-display text-sm">Linguaskill Disponible</span>
            </div>
            <div className="flex flex-wrap gap-4 animate-hero-fade-up animation-delay-400">
              <a
              href="/reservar-clase/"
                className="bg-brand-red hover:bg-[#d4444e] text-white font-display font-semibold py-3 px-6 rounded-lg flex items-center gap-2 transition-all duration-300"
              >
                Reservar Prueba de Nivel Gratuita
                <ArrowRight className="w-5 h-5" />
              </a>
              <a
                href={`${NAP.whatsappUrl}?text=Hola,%20trabajo%20en%20Cuatro%20Torres%20y%20me%20gustaría%20información%20sobre%20los%20cursos`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 backdrop-blur-sm border border-white/20 text-white font-display font-medium py-3 px-6 rounded-lg flex items-center gap-2 hover:bg-white/15 transition-all duration-300"
              >
                <MessageCircle className="w-4 h-4" />
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Local Intro Section */}
      <section className="py-12 md:py-16 px-6 bg-white">
        <div className="container mx-auto max-w-4xl">
          <p className="text-lg text-zinc-700 leading-relaxed">
            Nuestra academia ofrece clases de inglés cerca de <strong>Cuatro Torres Business Area (CTBA)</strong> — Torre PwC, Torre Cepsa, Torre de Cristal y Torre Espacio — perfectamente conectada por metro y autobús hasta Barrio del Pilar. Ubicados en el código postal <strong>28029 Madrid</strong>, junto al <strong>Paseo de la Castellana</strong> y el <strong>Campo de las Naciones</strong>, trabajamos con niños, adolescentes y adultos que buscan aprender inglés con grupos reducidos y atención personalizada. Somos centro oficial de preparación Cambridge con 100% de aprobados.
          </p>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-12 md:py-20 px-6 bg-zinc-50">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 mb-12 text-center">
            Por Qué Profesionales de Cuatro Torres Nos Eligen
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, i) => (
              <div key={i} className="p-6 bg-zinc-50 rounded-xl">
                <CheckCircle className="w-8 h-8 text-green-500 mb-4" />
                <h3 className="font-bold text-zinc-900 mb-2">{benefit.title}</h3>
                <p className="text-zinc-600 text-sm">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* How to Get There */}
      <section className="py-16 px-6 bg-zinc-50">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold text-zinc-900 mb-8 text-center">
            Cómo Llegar desde Cuatro Torres
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-xl">
              <div className="flex items-center gap-3 mb-4">
                <Train className="w-8 h-8 text-accent-blue" />
                <h3 className="font-bold text-zinc-900">En Metro</h3>
              </div>
              <p className="text-zinc-600 mb-3">
                Desde <strong>Cuatro Torres Business Area</strong> (Paseo de la Castellana):
              </p>
              <ul className="text-zinc-600 text-sm space-y-2">
                <li>• Metro Begoña (Línea 10) junto a Torre PwC y Torre Cepsa</li>
                <li>• Transbordo en intercambiador de Plaza Castilla a Línea 9</li>
                <li>• Baja en Barrio del Pilar (28029)</li>
                <li>• Camina 800 metros hasta nuestra academia</li>
              </ul>
              <p className="text-accent-blue font-medium mt-4">Tiempo total: ~22 minutos</p>
            </div>
            <div className="bg-white p-6 rounded-xl">
              <div className="flex items-center gap-3 mb-4">
                <Bus className="w-8 h-8 text-green-600" />
                <h3 className="font-bold text-zinc-900">En Autobús</h3>
              </div>
              <p className="text-zinc-600 mb-3">
                Líneas desde CTBA (Torre de Cristal, Torre Espacio):
              </p>
              <ul className="text-zinc-600 text-sm space-y-2">
                <li>• Línea 137 desde Campo de las Naciones + 800m (~25 min)</li>
                <li>• Línea 132 desde Paseo de la Castellana + 800m (~20 min)</li>
              </ul>
              <p className="text-green-600 font-medium mt-4">Tiempo total: 20-25 minutos</p>
            </div>
          </div>
        </div>
      </section>

      {/* Video Section - Above Courses */}
      <section className="py-16 md:py-20 px-6 bg-white">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-zinc-900 mb-4">
              Conoce nuestra academia
            </h2>
            <p className="text-zinc-600">
              Descubre por qué somos la mejor opción cerca de Cuatro Torres
            </p>
          </div>
          <LazyVideo
            videoId="Fdso-d9_F20"
            title="Impulse English Academy - Tu academia de inglés cerca de Cuatro Torres"
            className="shadow-xl"
          />
        </div>
      </section>

      {/* Courses Section */}
      <section className="py-12 md:py-20 px-6 bg-zinc-50">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 mb-4 text-center">
            Cursos para Profesionales de Cuatro Torres Business Area
          </h2>
          <p className="text-zinc-600 text-center mb-12">Horarios adaptados a tu jornada laboral</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {courses.map((course, i) => (
              <a
                key={i}
                href={course.href}
                className="bg-zinc-50 p-6 rounded-xl hover:shadow-lg transition-shadow group"
              >
                <h3 className="font-bold text-zinc-900 mb-2 group-hover:text-accent-blue transition-colors">{course.name}</h3>
                <p className="text-zinc-600 text-sm mb-3">{course.method}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Inglés para niños cerca de Cuatro Torres */}
      <section className="py-12 md:py-16 px-6 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 mb-6">
                Inglés para niños cerca de Cuatro Torres
              </h2>
              <p className="text-zinc-600 mb-6">
                Ofrecemos clases de inglés para niños de 2 a 12 años cerca de Cuatro Torres Business Area, con metodologías adaptadas a cada edad y horarios pensados para las familias de la zona.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                  <span className="text-zinc-700"><strong>Apoyo escolar</strong> para colegios de la zona: refuerzo del inglés curricular</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                  <span className="text-zinc-700"><strong>Aprendizaje progresivo:</strong> metodología Great Little People para infantil, Cambridge Young Learners para primaria</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                  <span className="text-zinc-700"><strong>Horarios adaptados</strong> a familias cerca de Cuatro Torres: tardes después del colegio</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                  <span className="text-zinc-700"><strong>Grupos reducidos:</strong> máximo 7-10 niños para atención personalizada</span>
                </li>
              </ul>
              <div className="mt-8">
                <a
              href="/cursos-ingles/infantil/"
                  className="text-accent-blue font-semibold hover:underline inline-flex items-center gap-1"
                >
                  Ver cursos infantil y primaria <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
            <div className="rounded-xl overflow-hidden shadow-lg">
              <img
                src="/images/academy/primary-classes-students-smiling.jpg"
                alt="Clases de inglés para niños cerca de Cuatro Torres La Vaguada Madrid"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Clases de inglés para adultos cerca de Cuatro Torres */}
      <section className="py-12 md:py-16 px-6 bg-zinc-50">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1 rounded-xl overflow-hidden shadow-lg">
              <img
                src="/images/academy/adult-one-to-one-classes.jpg"
                alt="Clases de inglés para adultos cerca de Cuatro Torres La Vaguada Madrid"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 mb-6">
                Clases de inglés para adultos cerca de Cuatro Torres
              </h2>
              <p className="text-zinc-600 mb-6">
                Aprende inglés cerca de Cuatro Torres Business Area con clases diseñadas para profesionales y adultos. Todos los niveles, desde principiante hasta C2.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                  <span className="text-zinc-700"><strong>Clases de conversación:</strong> practica speaking desde el primer día con profesores altamente cualificados</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                  <span className="text-zinc-700"><strong>Inglés para trabajo o viajes:</strong> enfoque práctico y comunicativo</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                  <span className="text-zinc-700"><strong>Grupos reducidos</strong> cerca de Cuatro Torres: máximo 7-10 alumnos</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                  <span className="text-zinc-700"><strong>Preparación Cambridge y Linguaskill:</strong> certificaciones oficiales reconocidas</span>
                </li>
              </ul>
              <div className="mt-8">
                <a
              href="/cursos-ingles/adultos/"
                  className="text-accent-blue font-semibold hover:underline inline-flex items-center gap-1"
                >
                  Ver cursos para adultos <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cambridge & Linguaskill Section */}
      <section className="py-16 px-6 bg-accent-blue">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Certificaciones para tu Carrera Profesional
          </h2>
          <p className="text-white/80 mb-8">
            Preparamos Cambridge y Linguaskill - ideal para profesionales:
          </p>
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            <a href="/examenes-cambridge/b1-preliminary/" className="px-4 py-2 rounded-full text-sm font-medium bg-white/20 text-white hover:bg-white/30 transition-colors">B1 Preliminary</a>
            <a href="/examenes-cambridge/b2-first/" className="px-4 py-2 rounded-full text-sm font-medium bg-white text-accent-blue hover:bg-yellow-400 hover:text-blue-900 transition-colors">B2 First</a>
            <a href="/examenes-cambridge/c1-advanced/" className="px-4 py-2 rounded-full text-sm font-medium bg-white/20 text-white hover:bg-white/30 transition-colors">C1 Advanced</a>
            <a href="/linguaskill/" className="px-4 py-2 rounded-full text-sm font-medium bg-white text-accent-blue hover:bg-yellow-400 hover:text-blue-900 transition-colors">Linguaskill</a>
          </div>
          <div className="bg-white/10 p-4 rounded-xl inline-block mb-8">
            <p className="text-white/90 font-medium">
              Linguaskill: Certificado en 48 horas. Perfecto para requisitos laborales urgentes.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="/examenes-cambridge/"
              className="bg-white text-accent-blue font-bold py-3 px-6 rounded-lg hover:bg-yellow-400 hover:text-blue-900 transition-colors"
            >
              Ver todos los exámenes Cambridge
            </a>
            <a
              href="/linguaskill/"
              className="bg-white/10 text-white border border-white/30 font-bold py-3 px-6 rounded-lg hover:bg-white hover:text-accent-blue transition-colors"
            >
              Conocer Linguaskill
            </a>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 px-6 bg-zinc-50">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold text-zinc-900 mb-12 text-center">
            Lo Que Dicen Nuestros Alumnos
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {testimonials.map((t, i) => (
              <div key={i} className="bg-white p-6 rounded-xl">
                <div className="flex gap-1 mb-4">
                  {[1,2,3,4,5].map(star => (
                    <Star key={star} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
                <p className="text-zinc-600 italic mb-4">"{t.quote}"</p>
                <p className="font-bold text-zinc-900">{t.author}</p>
                <p className="text-zinc-500 text-sm">{t.location}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <a
              href={NAP.gbpUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent-blue font-semibold hover:underline"
            >
              Ver todas las reseñas en Google
            </a>
          </div>
        </div>
      </section>

      {/* Gallery Section - Photos at Bottom */}
      <section className="py-16 md:py-20 px-6 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 mb-4">
              Nuestras Instalaciones
            </h2>
            <p className="text-zinc-600 text-lg">
              Un espacio diseñado para el aprendizaje
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {[
              { url: "/images/academy/outside-academy.jpg", alt: "Fachada exterior Impulse English Academy cerca Cuatro Torres La Vaguada Madrid" },
              { url: "/images/academy/classroom-facilities-main-classroom.jpg", alt: "Aula principal academia inglés cerca Cuatro Torres La Vaguada Madrid" },
              { url: "/images/academy/technology-based-classroom-photo.jpg", alt: "Aula tecnológica academia inglés cerca Cuatro Torres La Vaguada Madrid" },
              { url: "/images/academy/stairs.jpg", alt: "Interior academia dos plantas cerca Cuatro Torres La Vaguada Madrid" },
              { url: "/images/academy/infantil-classes.jpg", alt: "Clases inglés infantil cerca Cuatro Torres La Vaguada Madrid" },
              { url: "/images/academy/primary-classes-students-smiling.jpg", alt: "Estudiantes primaria felices cerca Cuatro Torres La Vaguada Madrid" },
              { url: "/images/academy/daniel-helping-secondary-school-students.jpg", alt: "Profesor Daniel ayudando estudiantes cerca Cuatro Torres La Vaguada Madrid" },
              { url: "/images/academy/secondary-classes-student-happy.jpg", alt: "Estudiante secundaria feliz cerca Cuatro Torres La Vaguada Madrid" },
              { url: "/images/academy/adult-one-to-one-classes.jpg", alt: "Clases particulares adultos cerca Cuatro Torres La Vaguada Madrid" },
              { url: "/images/academy/jp-with-students.jpg", alt: "Estudiantes certificados Cambridge cerca Cuatro Torres La Vaguada Madrid" },
              { url: "/images/academy/photos-of-facilities.jpg", alt: "Instalaciones academia inglés cerca Cuatro Torres La Vaguada Madrid" },
              { url: "/images/academy/cambridge-logo-edited.png", alt: "Centro Preparador Cambridge cerca Cuatro Torres La Vaguada Madrid" }
            ].map((img, idx) => (
              <div key={idx} className="aspect-[4/3] rounded-xl overflow-hidden shadow-lg">
                <img
                  src={img.url}
                  alt={img.alt}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Nearby Locations */}
      <section className="py-12 px-6 bg-zinc-50">
        <div className="container mx-auto max-w-4xl">
          <div className="p-6 bg-white rounded-xl border border-zinc-200">
            <p className="text-zinc-900 font-medium mb-4">
              <strong>Servimos también zonas cercanas:</strong>
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              <a href="/academia-ingles-barrio-del-pilar/" className="text-accent-blue hover:underline text-sm">Barrio del Pilar</a>
              <span className="text-zinc-400">•</span>
              <a href="/academia-ingles-la-vaguada/" className="text-accent-blue hover:underline text-sm">La Vaguada</a>
              <span className="text-zinc-400">•</span>
              <a href="/academia-ingles-penagrande/" className="text-accent-blue hover:underline text-sm">Peñagrande</a>
              <span className="text-zinc-400">•</span>
              <a href="/academia-ingles-la-ventilla/" className="text-accent-blue hover:underline text-sm">La Ventilla</a>
              <span className="text-zinc-400">•</span>
              <a href="/academia-ingles-la-paz/" className="text-accent-blue hover:underline text-sm">La Paz</a>
              <span className="text-zinc-400">•</span>
              <a href="/academia-ingles-plaza-castilla/" className="text-accent-blue hover:underline text-sm">Plaza Castilla</a>
              <span className="text-zinc-400">•</span>
              <a href="/academia-ingles-tetuan/" className="text-accent-blue hover:underline text-sm">Tetuán</a>
            </div>
            <a href="/academias-ingles-madrid/por-barrios/" className="text-accent-blue hover:underline text-sm font-medium inline-flex items-center gap-1">
              Ver todas las ubicaciones en Madrid <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      {/* Local FAQs Section */}
      <section className="py-12 md:py-20 px-6 bg-white">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 mb-12 text-center">
            Preguntas frecuentes sobre clases de inglés cerca de Cuatro Torres
          </h2>
          <div className="space-y-6">
            {localFaqs.map((faq, index) => (
              <div key={index} className="bg-zinc-50 rounded-xl p-6">
                <h3 className="font-bold text-zinc-900 mb-3">{faq.question}</h3>
                <p className="text-zinc-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mapa */}
      <section className="py-16 px-6 bg-zinc-50">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold text-zinc-900 mb-8 text-center">
            Cómo Llegar desde Cuatro Torres Business Area
          </h2>
          <div className="bg-white rounded-xl overflow-hidden shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3035.0!2d-3.7084812!3d40.4743948!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd422909a0b6b11b%3A0xbe6ef3e2ba8bb87b!2sImpulse%20English%20Academy!5e0!3m2!1ses!2ses!4v1701964800000!5m2!1ses!2ses"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Cómo llegar a Impulse English Academy La Vaguada desde Cuatro Torres Business Area"
            ></iframe>
          </div>
          <div className="mt-4 text-center">
            <a href={NAP.gbpUrl} target="_blank" rel="noopener noreferrer" className="text-accent-blue font-semibold hover:underline">
              Ver en Google Maps →
            </a>
            <p className="text-zinc-500 text-sm mt-2">{NAP.name} — {NAP.fullAddress}</p>
          </div>
        </div>
      </section>

      {/* Final Local CTA */}
      <section className="py-12 md:py-16 px-6 bg-accent-blue">
        <div className="container mx-auto max-w-4xl text-center">
          <p className="text-xl md:text-2xl text-white mb-8">
            Si buscas una academia de inglés cerca de Cuatro Torres, solicita ahora tu prueba de nivel gratuita y empieza a aprender inglés cerca de casa.
          </p>
          <a
              href="/reservar-clase/"
            className="inline-flex items-center gap-2 bg-white text-accent-blue font-bold py-4 px-8 rounded-lg hover:bg-yellow-400 hover:text-blue-900 transition-colors"
          >
            Reserva tu prueba gratuita
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-6 bg-zinc-900">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            ¿Trabajas en Cuatro Torres?
          </h2>
          <p className="text-zinc-400 mb-8">
            Estamos a 20-25 minutos. Aprovecha tu hora de comer o después del trabajo.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="/reservar-clase/"
              className="bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-8 rounded-lg transition-colors"
            >
              Reservar Clase de Prueba
            </a>
            <a
              href="/contacto/"
              className="bg-white hover:bg-zinc-100 text-zinc-900 font-bold py-3 px-8 rounded-lg transition-colors"
            >
              Contactar
            </a>
          </div>
        </div>
      </section>

      <LeadForm />
      <Footer />

      {/* Schema.org Structured Data */}
</>
  );
}
