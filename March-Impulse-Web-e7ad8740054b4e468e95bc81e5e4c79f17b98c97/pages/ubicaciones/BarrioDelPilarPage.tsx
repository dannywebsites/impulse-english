import React, { useEffect } from 'react';
import { MapPin, Clock, Phone, Train, Bus, CheckCircle, Star, ArrowRight, MessageCircle } from 'lucide-react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import LeadForm from '../../components/LeadForm';
import LazyVideo from '../../components/LazyVideo';
import Breadcrumb from '../../components/Breadcrumb';
import { NAP } from '../../utils/napData';
import type { FAQItem } from '../../utils/schemaData';

const benefits = [
  { title: "A 500 Metros de Metro Barrio del Pilar (Línea 9)", desc: "Ubicación perfecta para familias del barrio. Sin desplazamientos largos." },
  { title: "Centro Oficial de Preparación Cambridge", desc: "Prepárate y haz el examen donde estudias. Sin sorpresas." },
  { title: "100% de Aprobados Cambridge 24/25", desc: "Todos nuestros estudiantes aprobaron sus exámenes." },
  { title: "Grupos Reducidos (Máximo 7-10 Alumnos)", desc: "Atención personalizada real. No 15-20 como otras \"reducidas\"." },
  { title: "150+ Familias de Barrio del Pilar Nos Eligen", desc: "Más de 150 reseñas de 5 estrellas en Google." },
  { title: "Metodología Impulse Probada", desc: "Conversación desde día 1. Resultados medibles. Aprendizaje efectivo." }
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
    question: "¿Qué niveles de inglés ofrecéis en Barrio del Pilar?",
    answer: "Ofrecemos todos los niveles desde principiante (A1) hasta avanzado (C2). Realizamos una prueba de nivel gratuita para ubicarte en el grupo adecuado. Preparamos exámenes Cambridge (Pre-A1 Starters hasta C2 Proficiency) y Linguaskill."
  },
  {
    question: "¿Hay clase de prueba gratuita en vuestra academia de Barrio del Pilar?",
    answer: "Sí, ofrecemos una prueba de nivel gratuita de 25 minutos donde evaluamos tu nivel actual y te recomendamos el curso más adecuado. Puedes reservarla por WhatsApp o a través de nuestra web."
  },
  {
    question: "¿Cuántos alumnos hay por grupo en las clases de inglés?",
    answer: "Nuestros grupos son reducidos: máximo 7-10 alumnos por clase. Esto garantiza atención personalizada real, no como otras academias que dicen tener grupos reducidos con 15-20 estudiantes."
  },
  {
    question: "¿Qué horarios hay disponibles para clases de inglés en Barrio del Pilar?",
    answer: "Tenemos horarios de mañana y tarde: lunes y miércoles de 10:00 a 21:30, martes y jueves de 15:30 a 21:30, y viernes de 13:30 a 19:30. Adaptamos los horarios a familias y profesionales del barrio."
  },
  {
    question: "¿Cómo llego a la academia desde Metro Barrio del Pilar?",
    answer: "Estamos a solo 500 metros de la estación de Metro Barrio del Pilar (Línea 9). Son aproximadamente 5-6 minutos caminando por Avenida de El Ferrol hasta el número 22."
  },
  // Local Madrid PAAs (5)
  {
    question: "¿Es Barrio del Pilar una buena zona para aprender inglés?",
    answer: "Sí, Barrio del Pilar es zona residencial tranquila con fácil acceso al transporte público. Muchas familias del norte de Madrid (Peñagrande, La Paz, La Ventilla) nos eligen por ubicación y comodidad. Centro Comercial La Vaguada está a 8-10 minutos a pie."
  },
  {
    question: "¿Hay parking cerca de la academia en Barrio del Pilar?",
    answer: "Sí, hay parking en la calle Avenida de El Ferrol (gratuito la mayoría de horas) y en el Centro Comercial La Vaguada (pagado). La ubicación es cómoda para familias que vienen en coche desde toda la zona norte de Madrid."
  },
  {
    question: "¿Mejor academia inglés Madrid norte?",
    answer: "Impulse English Academy en Barrio del Pilar destaca por: Centro Oficial Cambridge, 100% aprobados, grupos máximo 10 alumnos, metodología conversacional, ubicación accesible (Metro Barrio del Pilar + parking). 150+ familias del norte nos recomiendan en Google con 5 estrellas."
  },
  {
    question: "¿Inglés para niños en Barrio del Pilar?",
    answer: "Ofrecemos infantil (Great Little People 2-5 años), primaria (Young Learners 6-12), secundaria (Cambridge B1/B2/C1). Clases lunes-viernes con máximo 7-10 alumnos. Todos niveles desde A1 hasta C2. Prueba de nivel gratuita sin compromiso."
  },
  {
    question: "¿Centro Cambridge oficial en Barrio del Pilar?",
    answer: "Sí, somos Centro Oficial de Preparación de Exámenes Cambridge. Puedes preparar y hacer el examen en el mismo lugar (Barrio del Pilar). 100% aprobados en 2024-2025. Todos los niveles: Pre-A1 Starters, A1 Movers, A2 Flyers, A2 Key, B1 Preliminary, B2 First, C1 Advanced, C2 Proficiency."
  },
  {
    question: "¿Dónde hacer Linguaskill en Madrid zona norte?",
    answer: "Impulse English Academy es Centro Oficial Linguaskill en Barrio del Pilar (Av. de El Ferrol, 22, 28029 Madrid). Puedes preparar y realizar el examen Linguaskill en nuestras instalaciones. Resultados en 48 horas. Accesible desde Metro Barrio del Pilar (Línea 9) y Metro Peñagrande (Línea 7)."
  },
  {
    question: "¿Qué opciones hay para aprender inglés en Barrio del Pilar?",
    answer: "En la zona de Barrio del Pilar hay varias opciones para aprender inglés. Al elegir academia, valora si es centro oficial de exámenes (Cambridge, Linguaskill), el tamaño de los grupos, los horarios disponibles, y las opiniones de otros alumnos en Google. Una prueba de nivel gratuita te ayuda a conocer el método antes de decidir."
  }
];


export const locationMeta = {locationName: "Barrio del Pilar",
        pageUrl: "https://impulse-english.es/academia-ingles-barrio-del-pilar"};

export default function BarrioDelPilarPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
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
              { label: 'Ubicaciones', href: '/academia-ingles-barrio-del-pilar' },
              { label: 'Barrio del Pilar' }
            ]}
            variant="light"
          />

          <div className="max-w-4xl mt-12 md:mt-16">
            <div className="flex items-center gap-4 mb-6 animate-hero-fade-up">
              <div className="w-8 h-px bg-white/40"></div>
              <MapPin className="w-4 h-4 text-brand-red" />
              <span className="font-display text-white/70 text-xs uppercase tracking-[0.2em]">
                Barrio del Pilar
              </span>
            </div>
            <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl text-white tracking-tight leading-[1.1] mb-6 animate-hero-fade-up animation-delay-100">
              Academia de Inglés en Barrio del Pilar
            </h1>
            <div className="w-16 h-0.5 bg-brand-red mb-6 animate-hero-fade-up animation-delay-150"></div>
            <p className="font-display text-lg md:text-xl text-white/80 font-light leading-relaxed mb-4 animate-hero-fade-up animation-delay-200">
              Centro Oficial Cambridge
            </p>
            <div className="flex items-center gap-2 text-white/60 font-display text-sm mb-2 animate-hero-fade-up animation-delay-200">
              <Train className="w-4 h-4" />
              <span>A solo 500 metros de Metro Barrio del Pilar (Línea 9)</span>
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
                href={`${NAP.whatsappUrl}?text=Hola,%20vivo%20en%20Barrio%20del%20Pilar%20y%20me%20gustaría%20información%20sobre%20los%20cursos`}
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
            Nuestra academia ofrece clases de inglés en Barrio del Pilar (28029 Madrid), una zona bien comunicada y cercana al Centro Comercial La Vaguada y la estación de Metro Barrio del Pilar (Línea 9). Trabajamos con niños, adolescentes y adultos que buscan aprender inglés sin largos desplazamientos, con grupos reducidos y atención personalizada. Somos centro oficial de preparación Cambridge con 100% de aprobados.
          </p>
          <p className="text-lg text-zinc-700 leading-relaxed">
            Nos encontramos en el corazón del distrito Fuencarral-El Pardo, código postal 28029, a pocos minutos del Parque Huerta del Obispo y del Colegio San José. Familias que llevan a sus hijos a colegios de la zona combinan las clases extraescolares con las compras en el Centro Comercial La Vaguada. También recibimos alumnos de las inmediaciones del Hospital La Paz y de las paradas de Metro Barrio del Pilar (Línea 9) y Herrera Oria.
          </p>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-12 md:py-20 px-6 bg-zinc-50">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 mb-12 text-center">
            Por Qué Somos la Mejor Academia en Barrio del Pilar
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
              Descubre por qué somos la mejor opción en Barrio del Pilar
            </p>
          </div>
          <LazyVideo
            videoId="Fdso-d9_F20"
            title="Impulse English Academy - Tu academia de inglés en Barrio del Pilar"
            className="shadow-xl"
          />
        </div>
      </section>

      {/* Courses Section */}
      <section className="py-12 md:py-20 px-6 bg-zinc-50">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 mb-4 text-center">
            Cursos Disponibles en Barrio del Pilar
          </h2>
          <p className="text-zinc-600 text-center mb-12">Descuento disponible para pago trimestral</p>
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
          <div className="text-center mt-8">
            <a href="/cursos-ingles/adultos/" className="text-accent-blue font-semibold hover:underline inline-flex items-center gap-1">
              Ver Horarios Completos <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      {/* Inglés para niños en Barrio del Pilar */}
      <section className="py-12 md:py-16 px-6 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 mb-6">
                Inglés para niños en Barrio del Pilar
              </h2>
              <p className="text-zinc-600 mb-6">
                Ofrecemos clases de inglés para niños de 2 a 12 años en Barrio del Pilar, con metodologías adaptadas a cada edad y horarios pensados para las familias del barrio.
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
                  <span className="text-zinc-700"><strong>Horarios adaptados</strong> a familias de Barrio del Pilar: tardes después del colegio</span>
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
                alt="Clases de inglés para niños en Barrio del Pilar La Vaguada Madrid"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Clases de inglés para adultos en Barrio del Pilar */}
      <section className="py-12 md:py-16 px-6 bg-zinc-50">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1 rounded-xl overflow-hidden shadow-lg">
              <img
                src="/images/academy/adult-one-to-one-classes.jpg"
                alt="Clases de inglés para adultos en Barrio del Pilar La Vaguada Madrid"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 mb-6">
                Clases de inglés para adultos en Barrio del Pilar
              </h2>
              <p className="text-zinc-600 mb-6">
                Aprende inglés cerca de casa con clases diseñadas para profesionales y adultos de Barrio del Pilar. Todos los niveles, desde principiante hasta C2.
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
            Preparación Exámenes Cambridge
          </h2>
          <p className="text-white/80 mb-8">
            Preparamos todos los niveles Cambridge:
          </p>
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
          <p className="text-white/90 font-medium mb-8">
            Ventaja: Haces el examen en el mismo lugar donde te preparas.
          </p>
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
                Cómo Llegar desde Barrio del Pilar
              </h2>
              <div className="space-y-4">
                <div className="flex items-start gap-4 p-4 bg-zinc-50 rounded-xl">
                  <Train className="w-6 h-6 text-accent-blue flex-shrink-0" />
                  <div>
                    <p className="font-bold text-zinc-900">Metro Barrio del Pilar (Línea 9)</p>
                    <p className="text-zinc-600">500 metros caminando</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-4 bg-zinc-50 rounded-xl">
                  <Bus className="w-6 h-6 text-accent-blue flex-shrink-0" />
                  <div>
                    <p className="font-bold text-zinc-900">Autobuses</p>
                    <p className="text-zinc-600">Líneas 42, 132, 137, 147</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-4 bg-zinc-50 rounded-xl">
                  <MapPin className="w-6 h-6 text-accent-blue flex-shrink-0" />
                  <div>
                    <p className="font-bold text-zinc-900">Desde Plaza de Barrio del Pilar</p>
                    <p className="text-zinc-600">5-6 minutos caminando</p>
                  </div>
                </div>
              </div>
              <div className="mt-8 p-4 bg-accent-blue/5 rounded-xl border border-accent-blue/10">
                <p className="text-accent-blue font-medium text-sm mb-3">
                  <strong>Servimos también zonas cercanas:</strong>
                </p>
                <div className="flex flex-wrap gap-2">
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
            Lo Que Dicen las Familias del Barrio del Pilar
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            {[
              { name: "María José L.", text: "Mis dos hijos llevan tres años en Impulse y el progreso es increíble. Los profesores son muy profesionales y cariñosos." },
              { name: "Alejandro Ruiz", text: "Aprobé el B2 First con nota después de prepararme aquí. La metodología es excelente y los grupos pequeños marcan la diferencia." },
              { name: "Inmaculada Soto", text: "La mejor academia del Barrio del Pilar sin duda. Trato familiar, resultados reales y un equipo fantástico." },
              { name: "David Fernández", text: "Llevamos a nuestra hija desde los 3 años con Great Little People y ahora con 6 ya habla inglés de forma natural." }
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
              { url: "/images/academy/outside-academy.jpg", alt: "Fachada exterior Impulse English Academy Barrio del Pilar La Vaguada Madrid" },
              { url: "/images/academy/classroom-facilities-main-classroom.jpg", alt: "Aula principal academia inglés Barrio del Pilar La Vaguada Madrid" },
              { url: "/images/academy/technology-based-classroom-photo.jpg", alt: "Aula tecnológica academia inglés Barrio del Pilar La Vaguada Madrid" },
              { url: "/images/academy/stairs.jpg", alt: "Interior academia dos plantas Barrio del Pilar La Vaguada Madrid" },
              { url: "/images/academy/infantil-classes.jpg", alt: "Clases inglés infantil Barrio del Pilar La Vaguada Madrid" },
              { url: "/images/academy/primary-classes-students-smiling.jpg", alt: "Estudiantes primaria felices Barrio del Pilar La Vaguada Madrid" },
              { url: "/images/academy/daniel-helping-secondary-school-students.jpg", alt: "Profesor Daniel ayudando estudiantes Barrio del Pilar La Vaguada Madrid" },
              { url: "/images/academy/secondary-classes-student-happy.jpg", alt: "Estudiante secundaria feliz Barrio del Pilar La Vaguada Madrid" },
              { url: "/images/academy/adult-one-to-one-classes.jpg", alt: "Clases particulares adultos Barrio del Pilar La Vaguada Madrid" },
              { url: "/images/academy/jp-with-students.jpg", alt: "Estudiantes certificados Cambridge Barrio del Pilar La Vaguada Madrid" },
              { url: "/images/academy/photos-of-facilities.jpg", alt: "Instalaciones academia inglés Barrio del Pilar La Vaguada Madrid" },
              { url: "/images/academy/cambridge-logo-edited.png", alt: "Centro Preparador Cambridge Barrio del Pilar La Vaguada Madrid" }
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
            Preguntas frecuentes sobre clases de inglés en Barrio del Pilar
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
            Si buscas una academia de inglés en Barrio del Pilar, solicita ahora tu prueba de nivel gratuita y empieza a aprender inglés cerca de casa.
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
      <section className="py-12 md:py-20 px-6 bg-zinc-50">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 mb-6">
                Reserva Tu Clase de Prueba
              </h2>
              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-accent-blue text-white rounded-full flex items-center justify-center font-bold">1</div>
                  <span className="text-zinc-700">Contáctanos por WhatsApp o teléfono</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-accent-blue text-white rounded-full flex items-center justify-center font-bold">2</div>
                  <span className="text-zinc-700">Prueba de nivel gratuita (25 minutos)</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-accent-blue text-white rounded-full flex items-center justify-center font-bold">3</div>
                  <span className="text-zinc-700">Empieza tu transformación con el inglés</span>
                </div>
              </div>
              <p className="text-zinc-900 font-bold text-lg mb-4">
                Academia a 500 metros de Metro Barrio del Pilar. Sin excusas.
              </p>
              <p className="text-zinc-600">
                {NAP.fullAddress}
              </p>
            </div>
            <div>
              <LeadForm
                title="Reserva Tu Prueba Gratuita"
                subtitle="Te contactamos en menos de 24h"
                ctaText="Reservar Ahora"
                source="barrio-del-pilar"
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
