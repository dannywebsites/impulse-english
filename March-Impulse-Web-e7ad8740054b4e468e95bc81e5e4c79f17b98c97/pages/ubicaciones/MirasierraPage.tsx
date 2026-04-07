import React, { useEffect } from 'react';
import { MapPin, Clock, Phone, Train, Bus, Car, CheckCircle, Star, ArrowRight, MessageCircle } from 'lucide-react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import LeadForm from '../../components/LeadForm';
import LazyVideo from '../../components/LazyVideo';
import Breadcrumb from '../../components/Breadcrumb';
import { NAP } from '../../utils/napData';
import type { FAQItem } from '../../utils/schemaData';

const benefits = [
  { title: "A Solo 4 Minutos en Metro desde Mirasierra (Línea 9)", desc: "Mirasierra → Barrio del Pilar, directo sin transbordos." },
  { title: "Centro Oficial de Preparación Cambridge", desc: "Preparación y examen en el mismo lugar." },
  { title: "100% de Aprobados Cambridge 24/25", desc: "Metodología Impulse con resultados probados." },
  { title: "Grupos Reducidos (Máximo 7-10 Alumnos)", desc: "Atención personalizada garantizada." },
  { title: "Familias de Mirasierra Confían en Nosotros", desc: "150+ reseñas de 5 estrellas en Google." },
  { title: "Metodología Probada", desc: "Conversación desde día 1. Resultados medibles." }
];

const courses = [
  { name: "Infantil (2-5 años)", method: "Great Little People", href: "/cursos-ingles/infantil" },
  { name: "Primaria (6-12 años)", method: "Cambridge Young Learners", href: "/cursos-ingles/primaria" },
  { name: "Secundaria (13-17 años)", method: "Cambridge B1/B2/C1 + EBAU", href: "/cursos-ingles/secundaria" },
  { name: "Adultos", method: "Principiantes hasta avanzados", href: "/cursos-ingles/adultos" },
  { name: "Clases Particulares", method: "Presencial u online", href: "/cursos-ingles/particulares" }
];

export const localFaqs: FAQItem[] = [
  {
    question: "¿Qué niveles de inglés ofrecéis cerca de Mirasierra?",
    answer: "Ofrecemos todos los niveles desde principiante (A1) hasta avanzado (C2). Realizamos una prueba de nivel gratuita para ubicarte en el grupo adecuado. Preparamos exámenes Cambridge (Pre-A1 Starters hasta C2 Proficiency) y Linguaskill."
  },
  {
    question: "¿Hay clase de prueba gratuita en vuestra academia cerca de Mirasierra?",
    answer: "Sí, ofrecemos una prueba de nivel gratuita de 25 minutos donde evaluamos tu nivel actual y te recomendamos el curso más adecuado. Puedes reservarla por WhatsApp o a través de nuestra web."
  },
  {
    question: "¿Cuántos alumnos hay por grupo en las clases de inglés?",
    answer: "Nuestros grupos son reducidos: máximo 7-10 alumnos por clase. Esto garantiza atención personalizada real, no como otras academias que dicen tener grupos reducidos con 15-20 estudiantes."
  },
  {
    question: "¿Qué horarios hay disponibles para clases de inglés cerca de Mirasierra?",
    answer: "Tenemos horarios de mañana y tarde: lunes y miércoles de 10:00 a 21:30, martes y jueves de 15:30 a 21:30, y viernes de 13:30 a 19:30. Adaptamos los horarios a familias y profesionales de la zona."
  },
  {
    question: "¿Cómo llego a la academia desde Mirasierra?",
    answer: "Estamos a solo 4 minutos en metro desde Mirasierra (Línea 9, directo hasta Barrio del Pilar). También puedes llegar en autobús (líneas 147, 42, 83, parada Ginzo de Limia - Ferrol) o en coche (5-8 minutos por Fermín Caballero). Nuestra dirección es Avenida de El Ferrol, 22."
  },
  {
    question: "¿Clases inglés Mirasierra zona Fuencarral?",
    answer: "Academia Impulse es accesible desde Mirasierra y Fuencarral: Metro Mirasierra (Línea 9) a solo 4 minutos de Barrio del Pilar, directo sin transbordos. Centro Oficial Cambridge, 100% aprobados, grupos máximo 10. Adultos, niños, Cambridge y Linguaskill."
  },
  {
    question: "¿Academia inglés Mirasierra con buena relación calidad-precio?",
    answer: "Impulse English ofrece excelente relación de valor cerca de Mirasierra. Incluimos material didáctico, simulacros de examen, seguimiento personalizado y garantía 100% aprobados Cambridge sin matrícula inicial. Prueba de nivel gratuita para evaluar tu caso. Contacta para conocer opciones."
  },
  {
    question: "¿Hay academias de inglés para niños cerca de Mirasierra?",
    answer: "Sí. Al elegir academia de inglés para niños cerca de Mirasierra, valora el método (si es lúdico y adaptado a la edad), el tamaño de los grupos, y si preparan exámenes oficiales como Cambridge Young Learners. Impulse English Academy es accesible desde Metro Mirasierra (Línea 9) en solo 4 minutos, ideal para familias del barrio con colegios cercanos y el Parque Norte."
  },
  {
    question: "¿Hay academias de inglés con horario de mañana en zona norte de Madrid?",
    answer: "Algunas academias en zona norte de Madrid ofrecen clases por la mañana para adultos con horarios flexibles. Es ideal para profesionales con turnos, autónomos o personas que prefieren estudiar antes del mediodía. Consulta horarios concretos con cada centro para encontrar el que mejor se adapte a tu disponibilidad."
  },
  {
    question: "¿Es fácil aparcar cerca de la academia desde Mirasierra?",
    answer: "Sí, hay aparcamiento en superficie disponible en la propia Av. de El Ferrol y en las calles adyacentes. El acceso desde Mirasierra es directo por Fermín Caballero."
  }
];


export const locationMeta = {
  locationName: "Mirasierra",
  pageUrl: "https://impulse-english.es/academia-ingles-mirasierra"
};

export default function MirasierraPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
<Navbar />

      {/* Hero Section */}
      <section className="relative pt-28 pb-20 md:pt-36 md:pb-32 overflow-hidden">
        <div className="absolute inset-0">
          <img src="https://impulseenglish.s3.us-east-1.amazonaws.com/impulsephotos/OUTSIDE+ACADEMY.jpg" alt="Impulse English Academy fachada exterior La Vaguada Madrid" className="w-full h-full object-cover" loading="eager" />
          <div className="absolute inset-0 bg-gradient-to-br from-accent-blue/95 via-accent-blue/85 to-[#0a3560]/75"></div>
        </div>
        <div className="absolute inset-0 hero-grain opacity-[0.03]"></div>
        <div className="absolute -top-32 -right-32 w-[420px] h-[420px] rounded-full bg-brand-red/[0.05]"></div>
        <div className="absolute -bottom-24 -left-24 w-80 h-80 rounded-full bg-white/[0.03]"></div>

        <div className="relative z-10 container mx-auto px-6 md:px-12">
          <Breadcrumb
            items={[
              { label: 'Ubicaciones', href: '/academia-ingles-barrio-del-pilar' },
              { label: 'Mirasierra' }
            ]}
            variant="light"
          />

          <div className="max-w-4xl mt-12 md:mt-16">
            <div className="flex items-center gap-4 mb-6 animate-hero-fade-up">
              <div className="w-8 h-px bg-white/40"></div>
              <MapPin className="w-4 h-4 text-brand-red" />
              <span className="font-display text-white/70 text-xs uppercase tracking-[0.2em]">
                Mirasierra
              </span>
            </div>
            <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl text-white tracking-tight leading-[1.1] mb-6 animate-hero-fade-up animation-delay-100">
              Academia de Inglés en Mirasierra
            </h1>
            <div className="w-16 h-0.5 bg-brand-red mb-6 animate-hero-fade-up animation-delay-150"></div>
            <p className="font-display text-lg md:text-xl text-white/80 font-light leading-relaxed mb-4 animate-hero-fade-up animation-delay-200">
              Centro Oficial Cambridge
            </p>
            <div className="flex items-center gap-2 text-white/60 font-display text-sm mb-2 animate-hero-fade-up animation-delay-200">
              <Train className="w-4 h-4" />
              <span>A 4 minutos en Metro desde Mirasierra (Línea 9)</span>
            </div>
            <p className="font-display text-white/50 text-sm mb-8 animate-hero-fade-up animation-delay-200">
              {NAP.fullAddress}
            </p>
            <div className="flex flex-wrap gap-3 mb-8 animate-hero-fade-up animation-delay-300">
              <span className="border border-white/15 px-4 py-2 rounded-full text-white/80 font-display text-sm">Centro Oficial Cambridge</span>
              <span className="border border-white/15 px-4 py-2 rounded-full text-white/80 font-display text-sm">100% Aprobados 24/25</span>
              <span className="border border-white/15 px-4 py-2 rounded-full text-white/80 font-display text-sm">Grupos Reducidos</span>
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
                href={`${NAP.whatsappUrl}?text=Hola,%20vivo%20en%20Mirasierra%20y%20me%20gustaría%20información%20sobre%20los%20cursos`}
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
          <p className="text-lg text-zinc-700 leading-relaxed mb-4">
            Nuestra academia ofrece clases de inglés cerca de Mirasierra (28035 Madrid), una zona residencial tranquila conocida por sus colegios y el Parque Norte. Desde Mirasierra puedes llegar en solo 4 minutos en metro (Línea 9, Mirasierra → Barrio del Pilar, directo sin transbordos). También hay conexión directa por autobús con las líneas 147, 42 y 83. Trabajamos con niños, adolescentes y adultos que buscan aprender inglés con grupos reducidos y atención personalizada. Somos centro oficial de preparación Cambridge con 100% de aprobados.
          </p>
          <p className="text-lg text-zinc-700 leading-relaxed">
            Mirasierra, en el distrito Fuencarral-El Pardo (28035), es una de las zonas más residenciales y familiares de Madrid Norte. El barrio cuenta con referencias como el Parque Norte, el Colegio Mirasierra y numerosas zonas verdes. Desde la estación de Metro Mirasierra (Línea 9), llegar a nuestra academia es directo y rápido: solo una parada hasta Herrera Oria y dos hasta Barrio del Pilar. Muchas familias del barrio combinan las actividades de sus hijos con las clases de inglés.
          </p>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-12 md:py-20 px-6 bg-zinc-50">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 mb-12 text-center">
            Tu Academia de Inglés Cerca de Mirasierra
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

      {/* Video Section - Above Courses */}
      <section className="py-16 md:py-20 px-6 bg-white">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-zinc-900 mb-4">
              Conoce nuestra academia
            </h2>
            <p className="text-zinc-600">
              Descubre por qué somos la mejor opción en Mirasierra
            </p>
          </div>
          <LazyVideo
            videoId="Fdso-d9_F20"
            title="Impulse English Academy - Tu academia de inglés cerca de Mirasierra"
            className="shadow-xl"
          />
        </div>
      </section>

      {/* Courses Section */}
      <section className="py-12 md:py-20 px-6 bg-white">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 mb-4 text-center">
            Cursos en Mirasierra
          </h2>
          <p className="text-zinc-600 text-center mb-12">Descuento trimestral disponible</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {courses.map((course, i) => (
              <a
                key={i}
                href={course.href}
                className="bg-white p-6 rounded-xl hover:shadow-lg transition-shadow group"
              >
                <h3 className="font-bold text-zinc-900 mb-2 group-hover:text-accent-blue transition-colors">{course.name}</h3>
                <p className="text-zinc-600 text-sm mb-3">{course.method}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Inglés para niños en Mirasierra */}
      <section className="py-12 md:py-16 px-6 bg-zinc-50">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 mb-6">
                Inglés para niños en Mirasierra
              </h2>
              <p className="text-zinc-600 mb-6">
                Ofrecemos clases de inglés para niños de 2 a 12 años en Mirasierra, con metodologías adaptadas a cada edad y horarios pensados para las familias del barrio.
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
                  <span className="text-zinc-700"><strong>Horarios adaptados</strong> a familias de Mirasierra: tardes después del colegio</span>
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
                src="https://impulseenglish.s3.us-east-1.amazonaws.com/impulsephotos/NACHOS+photos.+/Primary+classes+students+smiling.JPG"
                alt="Clases de inglés para niños cerca de Mirasierra Madrid"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Clases de inglés para adultos en Mirasierra */}
      <section className="py-12 md:py-16 px-6 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1 rounded-xl overflow-hidden shadow-lg">
              <img
                src="https://impulseenglish.s3.us-east-1.amazonaws.com/impulsephotos/NACHOS+photos.+/Adult+one-to-one+classes.JPG"
                alt="Clases de inglés para adultos cerca de Mirasierra Madrid"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 mb-6">
                Clases de inglés para adultos en Mirasierra
              </h2>
              <p className="text-zinc-600 mb-6">
                Aprende inglés cerca de casa con clases diseñadas para profesionales y adultos de Mirasierra. Todos los niveles, desde principiante hasta C2.
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
                  <span className="text-zinc-700"><strong>Grupos reducidos</strong> cerca de casa: máximo 7-10 alumnos</span>
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

      {/* Cambridge Exams */}
      <section className="py-16 px-6 bg-accent-blue">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Preparación Cambridge Todos los Niveles
          </h2>
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            <span className="px-4 py-2 rounded-full text-sm font-medium bg-white/20 text-white">Pre-A1 Starters</span>
            <span className="px-4 py-2 rounded-full text-sm font-medium bg-white/20 text-white">A1 Movers</span>
            <span className="px-4 py-2 rounded-full text-sm font-medium bg-white/20 text-white">A2 Flyers</span>
            <span className="px-4 py-2 rounded-full text-sm font-medium bg-white/20 text-white">A2 Key</span>
            <a href="/examenes-cambridge/b1-preliminary/" className="px-4 py-2 rounded-full text-sm font-medium bg-white/20 text-white hover:bg-white/30 transition-colors">B1 Preliminary</a>
            <a href="/examenes-cambridge/b2-first/" className="px-4 py-2 rounded-full text-sm font-medium bg-white text-accent-blue hover:bg-yellow-400 hover:text-blue-900 transition-colors">B2 First</a>
            <a href="/examenes-cambridge/c1-advanced/" className="px-4 py-2 rounded-full text-sm font-medium bg-white/20 text-white hover:bg-white/30 transition-colors">C1 Advanced</a>
            <span className="px-4 py-2 rounded-full text-sm font-medium bg-white/20 text-white">C2 Proficiency</span>
          </div>
          <div className="bg-white/10 p-4 rounded-xl inline-block mb-8">
            <p className="text-white/90 font-medium">
              Linguaskill también disponible - Certificado en 48 horas
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

      {/* How to Get There */}
      <section className="py-12 md:py-20 px-6 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-zinc-900 mb-8">
                Cómo Llegar desde Mirasierra
              </h2>
              <div className="space-y-4">
                <div className="flex items-start gap-4 p-4 bg-zinc-50 rounded-xl">
                  <Train className="w-6 h-6 text-accent-blue flex-shrink-0" />
                  <div>
                    <p className="font-bold text-zinc-900">Metro Mirasierra (Línea 9)</p>
                    <p className="text-zinc-600">4 minutos hasta Barrio del Pilar (directo, sin transbordos)</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-4 bg-zinc-50 rounded-xl">
                  <Train className="w-6 h-6 text-accent-blue flex-shrink-0" />
                  <div>
                    <p className="font-bold text-zinc-900">Metro Barrio del Pilar (Línea 9)</p>
                    <p className="text-zinc-600">500 metros caminando desde la academia</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-4 bg-zinc-50 rounded-xl">
                  <Bus className="w-6 h-6 text-accent-blue flex-shrink-0" />
                  <div>
                    <p className="font-bold text-zinc-900">Autobuses</p>
                    <p className="text-zinc-600">Líneas 147, 42, 83 — Parada Ginzo de Limia - Ferrol (1 min a pie)</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-4 bg-zinc-50 rounded-xl">
                  <Car className="w-6 h-6 text-accent-blue flex-shrink-0" />
                  <div>
                    <p className="font-bold text-zinc-900">En coche</p>
                    <p className="text-zinc-600">5-8 minutos por Fermín Caballero → Av. de El Ferrol. Aparcamiento disponible.</p>
                  </div>
                </div>
              </div>
              <div className="mt-8 p-4 bg-accent-blue/5 rounded-xl border border-accent-blue/10">
                <p className="text-accent-blue font-medium text-sm mb-3">
                  <strong>Servimos también zonas cercanas:</strong>
                </p>
                <div className="flex flex-wrap gap-2">
                  <a href="/academia-ingles-barrio-del-pilar/" className="text-accent-blue hover:underline text-sm">Barrio del Pilar</a>
                  <span className="text-accent-blue/50">•</span>
                  <a href="/academia-ingles-la-vaguada/" className="text-accent-blue hover:underline text-sm">La Vaguada</a>
                  <span className="text-accent-blue/50">•</span>
                  <a href="/academia-ingles-penagrande/" className="text-accent-blue hover:underline text-sm">Peñagrande</a>
                  <span className="text-accent-blue/50">•</span>
                  <a href="/academia-ingles-la-ventilla/" className="text-accent-blue hover:underline text-sm">La Ventilla</a>
                  <span className="text-accent-blue/50">•</span>
                  <a href="/academia-ingles-la-paz/" className="text-accent-blue hover:underline text-sm">La Paz</a>
                  <span className="text-accent-blue/50">•</span>
                  <a href="/academia-ingles-plaza-castilla/" className="text-accent-blue hover:underline text-sm">Plaza Castilla</a>
                  <span className="text-accent-blue/50">•</span>
                  <a href="/academia-ingles-tetuan/" className="text-accent-blue hover:underline text-sm">Tetuán</a>
                  <span className="text-accent-blue/50">•</span>
                  <a href="/academia-ingles-cuatro-torres/" className="text-accent-blue hover:underline text-sm">Cuatro Torres</a>
                  <span className="text-accent-blue/50">•</span>
                  <a href="/academia-ingles-montecarmelo-las-tablas/" className="text-accent-blue hover:underline text-sm">Montecarmelo / Las Tablas</a>
                </div>
                <div className="mt-4 pt-4 border-t border-accent-blue/10">
                  <a href="/academias-ingles-madrid/por-barrios/" className="text-accent-blue hover:underline text-sm font-medium inline-flex items-center gap-1">
                    Ver todas las ubicaciones en Madrid <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
            <div className="bg-zinc-100 rounded-xl overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3035.0!2d-3.7084812!3d40.4743948!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd422909a0b6b11b%3A0xbe6ef3e2ba8bb87b!2sImpulse%20English%20Academy!5e0!3m2!1ses!2ses!4v1701964800000!5m2!1ses!2ses"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: '400px' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Ubicación de Impulse English Academy"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 px-6 bg-zinc-50">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold text-zinc-900 mb-12 text-center">
            Lo Que Dicen las Familias de Mirasierra
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            {[
              { name: "Ana García R.", text: "Llegamos a Impulse porque un vecino de Mirasierra nos lo recomendó. El metro directo hace que sea super cómodo llevar a los niños." },
              { name: "Miguel Fernández", text: "Preparé el B2 First aquí y lo aprobé a la primera. Desde Mirasierra se llega en nada con la Línea 9." },
              { name: "Cristina López M.", text: "Muy contenta con la academia. Mis hijos van encantados y los grupos pequeños hacen que progresen rápido." }
            ].map((testimonial, idx) => (
              <div key={idx} className="bg-white p-6 rounded-xl border border-zinc-200">
                <div className="flex gap-1 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-zinc-700 mb-4 italic">"{testimonial.text}"</p>
                <p className="text-zinc-900 font-semibold">— {testimonial.name}</p>
              </div>
            ))}
          </div>
          <div className="text-center">
            <a
              href={NAP.gbpUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-accent-blue hover:bg-blue-900 text-white font-bold py-3 px-8 rounded-lg transition-colors"
            >
              <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
              Ver todas las reseñas en Google
            </a>
          </div>
        </div>
      </section>

      {/* Gallery Section - Photos at Bottom */}
      <section className="py-16 md:py-20 px-6 bg-zinc-50">
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
              { url: "https://impulseenglish.s3.us-east-1.amazonaws.com/impulsephotos/OUTSIDE+ACADEMY.jpg", alt: "Fachada exterior Impulse English Academy cerca Mirasierra Madrid" },
              { url: "https://impulseenglish.s3.us-east-1.amazonaws.com/impulsephotos/NACHOS+photos.+/Classroom+Facilities+Main+Classroom.JPG", alt: "Aula principal academia inglés cerca Mirasierra Madrid" },
              { url: "https://impulseenglish.s3.us-east-1.amazonaws.com/impulsephotos/NACHOS+photos.+/Technology-based+classroom+photo.JPG", alt: "Aula tecnológica academia inglés cerca Mirasierra Madrid" },
              { url: "https://impulseenglish.s3.us-east-1.amazonaws.com/impulsephotos/NACHOS+photos.+/Stairs.JPG", alt: "Interior academia dos plantas cerca Mirasierra Madrid" },
              { url: "https://impulseenglish.s3.us-east-1.amazonaws.com/impulsephotos/NACHOS+photos.+/Infantil+classes.JPG", alt: "Clases inglés infantil cerca Mirasierra Madrid" },
              { url: "https://impulseenglish.s3.us-east-1.amazonaws.com/impulsephotos/NACHOS+photos.+/Primary+classes+students+smiling.JPG", alt: "Estudiantes primaria felices cerca Mirasierra Madrid" },
              { url: "https://impulseenglish.s3.us-east-1.amazonaws.com/impulsephotos/NACHOS+photos.+/Daniel+helping+secondary+school+students.JPG", alt: "Profesor Daniel ayudando estudiantes cerca Mirasierra Madrid" },
              { url: "https://impulseenglish.s3.us-east-1.amazonaws.com/impulsephotos/NACHOS+photos.+/Secondary+classes+student+happy.JPG", alt: "Estudiante secundaria feliz cerca Mirasierra Madrid" },
              { url: "https://impulseenglish.s3.us-east-1.amazonaws.com/impulsephotos/NACHOS+photos.+/Adult+one-to-one+classes.JPG", alt: "Clases particulares adultos cerca Mirasierra Madrid" },
              { url: "https://impulseenglish.s3.us-east-1.amazonaws.com/impulsephotos/JP+WITH+STUDENTS.jpg", alt: "Estudiantes certificados Cambridge cerca Mirasierra Madrid" },
              { url: "https://impulseenglish.s3.us-east-1.amazonaws.com/impulsephotos/NACHOS+photos.+/Photos+of+facilities.JPG", alt: "Instalaciones academia inglés cerca Mirasierra Madrid" },
              { url: "https://impulseenglish.s3.us-east-1.amazonaws.com/NEW/Cambridge+logo+-+Edited.png", alt: "Centro Preparador Cambridge cerca Mirasierra Madrid" }
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

      {/* Local FAQs Section */}
      <section className="py-12 md:py-20 px-6 bg-white">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 mb-12 text-center">
            Preguntas frecuentes sobre clases de inglés cerca de Mirasierra
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

      {/* Final Local CTA */}
      <section className="py-12 md:py-16 px-6 bg-accent-blue">
        <div className="container mx-auto max-w-4xl text-center">
          <p className="text-xl md:text-2xl text-white mb-8">
            Si buscas una academia de inglés cerca de Mirasierra, solicita ahora tu prueba de nivel gratuita y empieza a aprender inglés cerca de casa.
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

      {/* CTA Section */}
      <section className="py-12 md:py-20 px-6 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 mb-6">
                Reserva Tu Prueba de Nivel
              </h2>
              <p className="text-zinc-600 mb-8">
                Academia cerca de Mirasierra. Profesores certificados. Resultados reales.
              </p>
              <div className="flex flex-wrap gap-4">
                <a
                  href={NAP.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-lg flex items-center gap-2 transition-colors"
                >
                  <MessageCircle className="w-5 h-5" />
                  WhatsApp {NAP.phone}
                </a>
                <a
                  href={NAP.phoneTel}
                  className="bg-accent-blue hover:bg-blue-900 text-white font-bold py-3 px-6 rounded-lg flex items-center gap-2 transition-colors"
                >
                  <Phone className="w-5 h-5" />
                  Llamar Ahora
                </a>
              </div>
              <p className="text-zinc-500 mt-6 text-sm">
                {NAP.fullAddress}
              </p>
            </div>
            <div>
              <LeadForm
                title="Reserva Tu Prueba Gratuita"
                subtitle="Te contactamos en menos de 24h"
                ctaText="Reservar Ahora"
                source="mirasierra"
                showPhone={true}
                showAge={true}
                showLevel={true}
              />
            </div>
          </div>
        </div>
      </section>

      <Footer />

      {/* Schema.org Structured Data */}
</>
  );
}
