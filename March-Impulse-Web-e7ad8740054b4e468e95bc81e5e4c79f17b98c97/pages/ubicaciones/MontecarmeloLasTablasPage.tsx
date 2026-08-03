import React, { useEffect } from 'react';
import { MapPin, Clock, Phone, Train, Bus, CheckCircle, Star, ArrowRight, Car } from 'lucide-react';
import { GoogleMark } from '../../components/GoogleReviews';
import NearbyAreas from '../../components/NearbyAreas';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import LeadForm from '../../components/LeadForm';
import LazyVideo from '../../components/LazyVideo';
import Breadcrumb from '../../components/Breadcrumb';
import { NAP } from '../../utils/napData';
import type { FAQItem } from '../../utils/schemaData';
import WhatsAppIcon from '../../components/icons/WhatsAppIcon';

const benefits = [
  { title: "A Solo 10-12 Minutos en Coche desde Montecarmelo", desc: "Acceso rápido por Av. de la Ilustración. Aparcamiento disponible." },
  { title: "Centro Oficial de Preparación Cambridge", desc: "Preparación y examen en el mismo lugar." },
  { title: "100% de Aprobados Cambridge 24/25", desc: "Metodología Impulse con resultados probados." },
  { title: "Grupos Reducidos (Máximo 7-10 Alumnos)", desc: "Atención personalizada garantizada." },
  { title: "Ideal para Familias Jóvenes", desc: "Programas desde 2 años. Horarios flexibles." },
  { title: "Metodología Probada", desc: "Conversación desde día 1. Resultados medibles." }
];

const courses = [
  { name: "Infantil (2-5 años)", method: "Great Little People", href: "/cursos-ingles/infantil/" },
  { name: "Primaria (6-12 años)", method: "Cambridge Young Learners", href: "/cursos-ingles/primaria/" },
  { name: "Secundaria (13-17 años)", method: "Cambridge B1/B2/C1 + EBAU", href: "/cursos-ingles/secundaria/" },
  { name: "Adultos", method: "Principiantes hasta avanzados", href: "/cursos-ingles/adultos/" },
  { name: "Clases Particulares", method: "Presencial u online", href: "/cursos-ingles/particulares/" }
];

export const localFaqs: FAQItem[] = [
  {
    question: "¿Qué niveles de inglés ofrecéis cerca de Montecarmelo y Las Tablas?",
    answer: "Ofrecemos todos los niveles desde principiante (A1) hasta avanzado (C2). Realizamos una prueba de nivel gratuita para ubicarte en el grupo adecuado. Preparamos exámenes Cambridge (Pre-A1 Starters hasta C2 Proficiency) y Linguaskill."
  },
  {
    question: "¿Hay prueba de nivel gratuita en vuestra academia?",
    answer: "Sí, ofrecemos una prueba de nivel gratuita de 25 minutos donde evaluamos tu nivel actual y te recomendamos el curso más adecuado. Puedes reservarla por WhatsApp o a través de nuestra web."
  },
  {
    question: "¿Cuántos alumnos hay por grupo en las clases de inglés?",
    answer: "Nuestros grupos son reducidos: máximo 7-10 alumnos por clase. Esto garantiza atención personalizada real, no como otras academias que dicen tener grupos reducidos con 15-20 estudiantes."
  },
  {
    question: "¿Qué horarios hay disponibles para clases de inglés cerca de Montecarmelo?",
    answer: "Tenemos horarios de mañana y tarde: lunes y miércoles de 10:00 a 21:30, martes y jueves de 15:30 a 21:30, y viernes de 13:30 a 19:30. Adaptamos los horarios a familias y profesionales de la zona."
  },
  {
    question: "¿Cómo llego a la academia desde Montecarmelo o Las Tablas?",
    answer: "La forma más rápida es en coche: 10 a 12 minutos por la Av. de la Ilustración hasta la Av. de El Ferrol. En transporte público, puedes tomar la Línea 9 de metro desde Montecarmelo en dirección sur y bajar en metro Barrio del Pilar (unos 8 minutos más 3 andando), o el autobús 147 con parada en Ginzo de Limia - Ferrol, a 1 minuto de la academia. Nuestra dirección es Avenida de El Ferrol, 22."
  },
  {
    question: "¿Clases inglés Montecarmelo Las Tablas zona norte?",
    answer: "Academia Impulse es accesible desde Montecarmelo y Las Tablas: en coche son 10 a 12 minutos, y en metro por la Línea 9 unos 8 minutos hasta Barrio del Pilar. Centro Oficial Cambridge, 100% aprobados, grupos máximo 10. Adultos, niños, Cambridge y Linguaskill."
  },
  {
    question: "¿Tenéis programas de inglés para niños pequeños?",
    answer: "Sí, ofrecemos programas de inglés desde los 2 años con la metodología Great Little People. Es ideal para las familias jóvenes de los desarrollos PAU de Montecarmelo y Las Tablas. Los grupos son reducidos y los horarios flexibles, pensados para conciliar con la vida familiar."
  },
  {
    question: "¿Hay academias de inglés para niños cerca de Montecarmelo?",
    answer: "Sí. Al elegir academia de inglés para niños cerca de Montecarmelo, valora el método (si es lúdico y adaptado a la edad), el tamaño de los grupos, y si preparan exámenes oficiales como Cambridge Young Learners. Impulse English Academy está a 10 a 12 minutos en coche o a unos 8 minutos en metro por la Línea 9 desde Montecarmelo, ideal para familias de los colegios del PAU."
  },
  {
    question: "¿Hay academias de inglés con horario de mañana en zona norte de Madrid?",
    answer: "Algunas academias en zona norte de Madrid ofrecen clases por la mañana para adultos con horarios flexibles. Es ideal para profesionales con turnos, autónomos o personas que prefieren estudiar antes del mediodía. Consulta horarios concretos con cada centro para encontrar el que mejor se adapte a tu disponibilidad."
  },
  {
    question: "¿Es fácil llegar en coche desde Las Tablas?",
    answer: "Sí, desde Las Tablas se llega en 10 a 12 minutos en coche por la Av. de la Ilustración hasta Av. de El Ferrol. Hay aparcamiento en superficie disponible."
  }
];

export const locationMeta = {locationName: "Montecarmelo y Las Tablas",
        pageUrl: "https://impulse-english.es/academia-ingles-montecarmelo-las-tablas"};

export default function MontecarmeloLasTablasPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
<Navbar />

      {/* Hero Section */}
      <section className="relative pt-28 pb-20 md:pt-36 md:pb-32 overflow-hidden">
        <div className="absolute inset-0">
          <img src="/images/academy/outside-academy.jpg" alt="Impulse English Academy fachada exterior Montecarmelo Las Tablas Madrid" className="w-full h-full object-cover" loading="eager" />
          <div className="absolute inset-0 bg-accent-blue/90"></div>
        </div>
        <div className="absolute inset-0 hero-grain opacity-[0.03]"></div>
        <div className="absolute -top-32 -right-32 w-[420px] h-[420px] rounded-full bg-brand-red/[0.05]"></div>
        <div className="absolute -bottom-24 -left-24 w-80 h-80 rounded-full bg-white/[0.03]"></div>

        <div className="relative z-10 container mx-auto px-6 md:px-12">
          <Breadcrumb
            items={[
              { label: 'Ubicaciones', href: '/academias-ingles-madrid/por-barrios/' },
              { label: 'Montecarmelo y Las Tablas' }
            ]}
            variant="light"
          />

          <div className="max-w-4xl mt-12 md:mt-16">
            <div className="flex items-center gap-4 mb-6 animate-hero-fade-up">
              <div className="w-8 h-px bg-white/40"></div>
              <MapPin className="w-4 h-4 text-brand-red" />
              <span className="font-display text-white/70 text-xs uppercase tracking-[0.2em]">
                Montecarmelo y Las Tablas
              </span>
            </div>
            <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl text-white tracking-tight leading-[1.1] mb-6 animate-hero-fade-up animation-delay-100">
              Inglés a 8 minutos de Montecarmelo y Las Tablas
            </h1>
            <div className="w-16 h-0.5 bg-brand-red mb-6 animate-hero-fade-up animation-delay-150"></div>
            <p className="font-display text-lg md:text-xl text-white/80 font-light leading-relaxed mb-4 animate-hero-fade-up animation-delay-200">
              Centro Oficial Cambridge
            </p>
            <div className="flex items-center gap-2 text-white/60 font-display text-sm mb-2 animate-hero-fade-up animation-delay-200">
              <Train className="w-4 h-4" />
              <span>A 10-12 min en coche · Línea 9 de metro desde Montecarmelo</span>
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
              href="/prueba-de-nivel-ingles/"
                className="bg-brand-red hover:bg-brand-red-600 text-white font-display font-semibold py-3 px-6 rounded-lg flex items-center gap-2 transition-all duration-300"
              >
                Reservar Prueba de Nivel Gratuita
                <ArrowRight className="w-5 h-5" />
              </a>
              <a
                href={`${NAP.whatsappUrl}?text=Hola,%20vivo%20en%20Montecarmelo%20/%20Las%20Tablas%20y%20me%20gustaría%20información%20sobre%20los%20cursos`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 backdrop-blur-sm border border-white/20 text-white font-display font-medium py-3 px-6 rounded-lg flex items-center gap-2 hover:bg-white/15 transition-all duration-300"
              >
                <WhatsAppIcon className="w-4 h-4" />
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Local Intro Section */}
      <section className="section-tight px-6 bg-white">
        <div className="container mx-auto max-w-4xl">
          <p className="text-lg text-zinc-700 leading-relaxed mb-4">
            ¿Academia de inglés cerca de Montecarmelo o Las Tablas? La línea 9 baja directa hasta Barrio del Pilar en unos 8 minutos, más 3 andando hasta Av. de El Ferrol 22. En coche son 10 a 12 minutos por la Av. de la Ilustración. Grupos de 7 a 10 alumnos, desde 64 €/mes, matrícula de 45 € y prueba de nivel gratuita de 25 minutos.
          </p>
          <p className="text-lg text-zinc-700 leading-relaxed">
            Montecarmelo y Las Tablas, en los nuevos desarrollos PAU del norte de Madrid, son barrios jóvenes con una gran cantidad de familias con niños en edad escolar. El barrio cuenta con referencias como Metro Montecarmelo, el Parque de Las Tablas y numerosos colegios. Desde Montecarmelo, llegar a nuestra academia es sencillo: 10 a 12 minutos en coche por la Av. de la Ilustración, o la Línea 9 de metro en dirección sur hasta Barrio del Pilar (unos 8 minutos más 3 andando). Muchas familias de estos desarrollos buscan una academia de inglés de calidad cerca de casa, con métodos adaptados a cada edad.
          </p>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="section px-6 surface-alt">
        <div className="container mx-auto max-w-6xl">
          <h2 className="t-h2 text-zinc-900 mb-12 text-center">
            Tu Academia de Inglés Cerca de Montecarmelo y Las Tablas
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, i) => (
              <div key={i} className="p-6 bg-zinc-50 rounded-xl">
                <CheckCircle className="w-8 h-8 text-emerald-600 mb-4" />
                <h3 className="font-bold text-zinc-900 mb-2">{benefit.title}</h3>
                <p className="text-zinc-600 text-sm">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Section - Above Courses */}
      <section className="section px-6 bg-white">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-8">
            <h2 className="t-h3 text-zinc-900 mb-4">
              Conoce nuestra academia
            </h2>
            <p className="text-zinc-600">
              Descubre por qué somos la mejor opción en Montecarmelo y Las Tablas
            </p>
          </div>
          <LazyVideo
            videoId="Fdso-d9_F20"
            title="Impulse English Academy - Tu academia de inglés cerca de Montecarmelo y Las Tablas"
            className="shadow-panel"
          />
        </div>
      </section>

      {/* Courses Section */}
      <section className="section px-6 bg-white">
        <div className="container mx-auto max-w-6xl">
          <h2 className="t-h2 text-zinc-900 mb-4 text-center">
            Cursos en Montecarmelo y Las Tablas
          </h2>
          <p className="text-zinc-600 text-center mb-12">Descuento trimestral disponible</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {courses.map((course, i) => (
              <a
                key={i}
                href={course.href}
                className="card-interactive p-6 group"
              >
                <h3 className="font-bold text-zinc-900 mb-2 group-hover:text-accent-blue transition-colors">{course.name}</h3>
                <p className="text-zinc-600 text-sm mb-3">{course.method}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Inglés para niños en Montecarmelo y Las Tablas */}
      <section className="section-tight px-6 surface-alt">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="t-h2 text-zinc-900 mb-6">
                Inglés para niños en Montecarmelo y Las Tablas
              </h2>
              <p className="text-zinc-600 mb-6">
                Ofrecemos clases de inglés para niños de 2 a 12 años cerca de Montecarmelo y Las Tablas, con metodologías adaptadas a cada edad y horarios flexibles pensados para las familias jóvenes de los desarrollos PAU.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span className="text-zinc-700"><strong>Apoyo escolar</strong> para colegios de la zona: refuerzo del inglés curricular</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span className="text-zinc-700"><strong>Aprendizaje progresivo:</strong> metodología Great Little People para infantil, Cambridge Young Learners para primaria</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span className="text-zinc-700"><strong>Horarios flexibles</strong> adaptados a familias de Montecarmelo y Las Tablas: tardes después del colegio</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-emerald-600 flex-shrink-0 mt-0.5" />
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
            <div className="overflow-hidden rounded-2xl shadow-lift">
              <img
                src="/images/academy/primary-classes-students-smiling.jpg"
                alt="Clases de inglés para niños cerca de Montecarmelo Las Tablas Madrid"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Clases de inglés para adultos en Montecarmelo y Las Tablas */}
      <section className="section-tight px-6 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1 overflow-hidden rounded-2xl shadow-lift">
              <img
                src="/images/academy/adult-one-to-one-classes.jpg"
                alt="Clases de inglés para adultos cerca de Montecarmelo Las Tablas Madrid"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="t-h2 text-zinc-900 mb-6">
                Clases de inglés para adultos en Montecarmelo y Las Tablas
              </h2>
              <p className="text-zinc-600 mb-6">
                Aprende inglés cerca de casa con clases diseñadas para profesionales y adultos de Montecarmelo y Las Tablas. Todos los niveles, desde principiante hasta C2.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span className="text-zinc-700"><strong>Clases de conversación:</strong> practica speaking desde el primer día con profesores altamente cualificados</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span className="text-zinc-700"><strong>Inglés para trabajo o viajes:</strong> enfoque práctico y comunicativo</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span className="text-zinc-700"><strong>Grupos reducidos</strong> cerca de casa: máximo 7-10 alumnos</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-emerald-600 flex-shrink-0 mt-0.5" />
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
      <section className="section-lead px-6 bg-accent-blue">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="t-h2 text-white mb-6">
            Preparación Cambridge Todos los Niveles
          </h2>
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            <span className="px-4 py-2 rounded-full text-sm font-medium bg-white/20 text-white">Pre-A1 Starters</span>
            <span className="px-4 py-2 rounded-full text-sm font-medium bg-white/20 text-white">A1 Movers</span>
            <span className="px-4 py-2 rounded-full text-sm font-medium bg-white/20 text-white">A2 Flyers</span>
            <span className="px-4 py-2 rounded-full text-sm font-medium bg-white/20 text-white">A2 Key</span>
            <a href="/examenes-cambridge/b1-preliminary/" className="px-4 py-2 rounded-full text-sm font-medium bg-white/20 text-white hover:bg-white/30 transition-colors">B1 Preliminary</a>
            <a href="/examenes-cambridge/b2-first/" className="px-4 py-2 rounded-full text-sm font-medium bg-white text-accent-blue hover:bg-amber-400 hover:text-accent-blue-900 transition-colors">B2 First</a>
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
              className="bg-white text-accent-blue font-bold py-3 px-6 rounded-lg hover:bg-amber-400 hover:text-accent-blue-900 transition-colors"
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
      <section className="section px-6 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="t-h2 text-zinc-900 mb-8">
                Cómo Llegar desde Montecarmelo y Las Tablas
              </h2>
              <div className="space-y-4">
                <div className="flex items-start gap-4 p-4 bg-zinc-50 rounded-xl">
                  <Car className="w-6 h-6 text-accent-blue flex-shrink-0" />
                  <div>
                    <p className="font-bold text-zinc-900">En coche - 10 a 12 minutos</p>
                    <p className="text-zinc-600">Por la Av. de la Ilustración hasta la Av. de El Ferrol. Aparcamiento en superficie disponible.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-4 bg-zinc-50 rounded-xl">
                  <Bus className="w-6 h-6 text-accent-blue flex-shrink-0" />
                  <div>
                    <p className="font-bold text-zinc-900">Autobús 147 (con metro Línea 7)</p>
                    <p className="text-zinc-600">Línea 7 de metro hasta Av. de la Ilustración (unos 10 minutos) y después el autobús 147, que para en Ginzo de Limia - Ferrol, a 1 minuto de la academia.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-4 bg-zinc-50 rounded-xl">
                  <Train className="w-6 h-6 text-accent-blue flex-shrink-0" />
                  <div>
                    <p className="font-bold text-zinc-900">Metro - Línea 9</p>
                    <p className="text-zinc-600">Línea 9 desde Montecarmelo en dirección sur, baja en la parada de metro Barrio del Pilar. Unos 8 minutos en metro más 3 minutos andando hasta la academia.</p>
                  </div>
                </div>
              </div>
              <NearbyAreas currentHref="/academia-ingles-montecarmelo-las-tablas/" variant="accent" />
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
      <section className="section-lead px-6 surface-alt">
        <div className="container mx-auto max-w-4xl">
          <h2 className="t-h2 text-zinc-900 mb-12 text-center">
            Lo Que Dicen las Familias de Montecarmelo y Las Tablas
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            {[
              { name: "Débora Azevedo", text: "Muy contenta con las clases impartidas a mi hijo. Todo los profisionales son muy comprometidos, siempre muy amables y con una gran sonrisa. Hay que decir que esa academia ha sido la unica que mi hijo entró sin llorar y aceptó finalmente asistir, eso porque han tenido todo el cuidado en conectarse con él, además son muy divertidos y veo que me hijo esta aprendiendo." },
              { name: "Lorena Jiménez", text: "Fantástica academia donde realmente se aprende inglés. La atención de los profesores es increible y son todos encantadores. Especial gracias a Jp por la atención personalizada a mi hijo. Es una gran academia, no dudéis en apuntaros." },
              { name: "Antonio Pérez Blázquez", text: "Danny se ha encargado de gestionar la estancia de mi hija con una familia durante tres semanas en un campamento de verano en Irlanda. Ha identificado a las familias, ha acompañados a los chavales, ha estado pendiente de ellos durante su estancia. Ni un sólo pero. Perfecto. Totalmente recomendable." }
            ].map((testimonial, idx) => (
              <div key={idx} className="card p-6">
                <div className="mb-3 flex items-center justify-between">
                  <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                  <GoogleMark className="h-4 w-4 opacity-70" />
                </div>
                <p className="text-zinc-700 mb-4 italic">"{testimonial.text}"</p>
                <p className="text-zinc-900 font-semibold">- {testimonial.name}</p>
              </div>
            ))}
          </div>
          <div className="text-center">
            <a
              href={NAP.gbpUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-accent-blue hover:bg-accent-blue-800 text-white font-bold py-3 px-8 rounded-lg transition-colors"
            >
              <Star className="w-5 h-5 fill-amber-400 text-amber-400" />
              Ver todas las reseñas en Google
            </a>
          </div>
        </div>
      </section>

      {/* Quien da la clase. Senal E-E-A-T: persona con nombre, no "nuestro equipo". */}
      <section className="section px-6 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="max-w-2xl mb-10">
            <span className="eyebrow mb-4">Quién te la da</span>
            <h2 className="t-h2 text-zinc-900 mb-5">Si vas a hacer el trayecto, mereces saber quién enseña</h2>
            <div className="rule"></div>
          </div>
          <div className="grid md:grid-cols-[300px_1fr] gap-10 items-start">
            <div className="aspect-[3/4] overflow-hidden rounded-2xl shadow-panel">
              <img
                src="/images/academy/jp-director-estudios.webp"
                alt="JP, director de estudios de Impulse English Academy, a 8 minutos de Montecarmelo por la línea 9"
                className="w-full h-full object-cover"
                loading="lazy"
                width={900}
                height={1200}
              />
            </div>
            <div className="space-y-4 text-zinc-600 leading-relaxed">
              <p>Desde Montecarmelo y Las Tablas hay que bajar hasta Barrio del Pilar. Ocho minutos no son nada, pero solo si al llegar hay alguien que sabe lo que hace.</p>
              <p>
                Ese alguien es <strong className="text-zinc-900">JP</strong>, cofundador y director
                de estudios, con <strong className="text-zinc-900">más de 10 años</strong> dando
                clase de inglés y 10 años de vida en Irlanda a la espalda.
              </p>
              <p>
                Lleva la parte académica del centro, hace personalmente las pruebas de nivel de 25
                minutos y responde el WhatsApp del 604 910 611. Escribes y te contesta él, no un
                comercial.
              </p>
              <p>
                Se ha especializado en exámenes Cambridge y en adquisición temprana del idioma
                (útil en dos barrios llenos de familias con niños pequeños). Su nombre aparece
                repetido en las 180 reseñas de Google. Danny Fitzpatrick, cofundador, lleva adultos
                e inglés de negocios.
              </p>
              <a href="/nuestro-equipo/" className="text-accent-blue font-semibold hover:underline inline-flex items-center gap-1">
                Conoce al equipo completo <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Caso real: resultado concreto, con nombre y desenlace verificable. */}
      <section className="section px-6 surface-alt">
        <div className="container mx-auto max-w-4xl">
          <div className="max-w-2xl mb-10">
            <span className="eyebrow mb-4">Un caso real</span>
            <h2 className="t-h2 text-zinc-900 mb-5">Sergio</h2>
            <div className="rule"></div>
          </div>
          <p className="text-zinc-600 leading-relaxed mb-6 max-w-3xl">Los PAU del norte están llenos de gente joven con la carrera por delante. La historia de Sergio va exactamente de eso: del inglés como requisito de trabajo, no como asignatura.</p>
          <div className="card p-8">
            <div className="grid sm:grid-cols-3 gap-6 mb-6 text-center">
              <div><p className="t-h3 text-accent-blue">30 años</p><p className="t-small text-zinc-600">al empezar</p></div>
              <div><p className="t-h3 text-accent-blue">4 entrevistas</p><p className="t-small text-zinc-600">en sus primeros meses en Dublín</p></div>
              <div><p className="t-h3 text-emerald-600">2 años después</p><p className="t-small text-zinc-600">analista de pólizas en una empresa irlandesa</p></div>
            </div>
            <p className="text-zinc-600 leading-relaxed mb-4">Sergio tenía el inglés de cualquiera que ha pasado por el sistema educativo español y no lo ha usado nunca en serio: <em>"siempre he tenido una gran carencia de confianza para hablar en inglés"</em>. No era falta de gramática. Era no atreverse.</p>
            <p className="text-zinc-600 leading-relaxed mb-4">Y le estaba costando una decisión: <em>"la barrera del idioma siempre me había impedido dar este paso"</em>, el de irse a trabajar fuera. Sobre cómo se desbloqueó: <em>"tanto Dani como JP han sido un gran apoyo para mí, guiándome y asesorándome en cada momento. Gracias a ellos, he podido ganar la confianza que realmente necesitaba"</em>.</p>
            <p className="text-zinc-600 leading-relaxed mb-6">Hoy vive en Dublín y trabaja de analista de pólizas y administrativo. Lo cuenta así: <em>"ha sido una de las mejores decisiones de mi vida y realmente ha cambiado mi vida"</em>.</p>
            <a href="/testimonios/" className="text-accent-blue font-semibold hover:underline inline-flex items-center gap-1">
              Ver el vídeo y otros casos <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      {/* Precios visibles en pagina, no solo en schema. */}
      <section className="section px-6 bg-white">
        <div className="container mx-auto max-w-4xl">
          <div className="max-w-2xl mb-10">
            <span className="eyebrow mb-4">Precios</span>
            <h2 className="t-h2 text-zinc-900 mb-5">Cuánto vale cada curso, en una tabla</h2>
            <div className="rule"></div>
          </div>
          <p className="text-zinc-600 mb-8">En barrios nuevos casi todo se cotiza a la carta. Esto no: la tarifa es pública, idéntica para Montecarmelo, para Las Tablas y para quien vive enfrente de la academia.</p>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b-2 border-zinc-200">
                  <th className="py-3 pr-4 font-display text-xs uppercase tracking-wider text-zinc-500">Curso</th>
                  <th className="py-3 pr-4 font-display text-xs uppercase tracking-wider text-zinc-500">Edad</th>
                  <th className="py-3 font-display text-xs uppercase tracking-wider text-zinc-500">Precio</th>
                </tr>
              </thead>
              <tbody className="text-zinc-700">
                <tr className="border-b border-zinc-100"><td className="py-3 pr-4 font-medium">Infantil</td><td className="py-3 pr-4">2-5 años</td><td className="py-3">desde 64 €/mes</td></tr>
                <tr className="border-b border-zinc-100"><td className="py-3 pr-4 font-medium">Primaria</td><td className="py-3 pr-4">6-12 años</td><td className="py-3">83 €/mes · 239 €/trimestre</td></tr>
                <tr className="border-b border-zinc-100"><td className="py-3 pr-4 font-medium">Secundaria</td><td className="py-3 pr-4">13-17 años</td><td className="py-3">desde 87 €/mes</td></tr>
                <tr className="border-b border-zinc-100"><td className="py-3 pr-4 font-medium">Adultos</td><td className="py-3 pr-4">todos los niveles</td><td className="py-3">94 €/mes</td></tr>
                <tr className="border-b border-zinc-100"><td className="py-3 pr-4 font-medium">Clases particulares</td><td className="py-3 pr-4">todas las edades</td><td className="py-3">29 €/hora</td></tr>
                <tr><td className="py-3 pr-4 font-medium">Clases online</td><td className="py-3 pr-4">todas las edades</td><td className="py-3">29 €/hora</td></tr>
              </tbody>
            </table>
          </div>
          <p className="t-small text-zinc-500 mt-6">
            A eso se suman <strong>45 € de matrícula</strong> y un <strong>libro de 40 € como
            máximo</strong>, ambos de una sola vez. Ejemplo con todo incluido: un niño de Primaria
            son 168 € el primer mes y 83 € a partir del segundo. La cuota cubre las clases
            semanales, los simulacros de Cambridge, el seguimiento y los recursos online, con
            descuento por trimestre y por hermanos matriculados. Las tasas oficiales del examen las
            cobra Cambridge, no la academia.
          </p>
        </div>
      </section>

      {/* Gallery Section - Photos at Bottom */}
      <section className="section px-6 surface-alt">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="t-h2 text-zinc-900 mb-4">
              Nuestras Instalaciones
            </h2>
            <p className="text-zinc-600 text-lg">
              Un espacio diseñado para el aprendizaje
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {[
              { url: "/images/academy/outside-academy.jpg", alt: "Fachada exterior Impulse English Academy cerca Montecarmelo Las Tablas Madrid" },
              { url: "/images/academy/classroom-facilities-main-classroom.jpg", alt: "Aula principal academia inglés cerca Montecarmelo Las Tablas Madrid" },
              { url: "/images/academy/technology-based-classroom-photo.jpg", alt: "Aula tecnológica academia inglés cerca Montecarmelo Las Tablas Madrid" },
              { url: "/images/academy/stairs.jpg", alt: "Interior academia dos plantas cerca Montecarmelo Las Tablas Madrid" },
              { url: "/images/academy/infantil-classes.jpg", alt: "Clases inglés infantil cerca Montecarmelo Las Tablas Madrid" },
              { url: "/images/academy/primary-classes-students-smiling.jpg", alt: "Estudiantes primaria felices cerca Montecarmelo Las Tablas Madrid" },
              { url: "/images/academy/daniel-helping-secondary-school-students.jpg", alt: "Profesor Daniel ayudando estudiantes cerca Montecarmelo Las Tablas Madrid" },
              { url: "/images/academy/secondary-classes-student-happy.jpg", alt: "Estudiante secundaria feliz cerca Montecarmelo Las Tablas Madrid" },
              { url: "/images/academy/adult-one-to-one-classes.jpg", alt: "Clases particulares adultos cerca Montecarmelo Las Tablas Madrid" },
              { url: "/images/academy/jp-with-students.jpg", alt: "Estudiantes certificados Cambridge cerca Montecarmelo Las Tablas Madrid" },
              { url: "/images/academy/photos-of-facilities.jpg", alt: "Instalaciones academia inglés cerca Montecarmelo Las Tablas Madrid" },
              { url: "/images/academy/cambridge-logo-edited.png", alt: "Centro Preparador Cambridge cerca Montecarmelo Las Tablas Madrid" }
            ].map((img, idx) => (
              <div key={idx} className="aspect-[4/3] overflow-hidden rounded-2xl shadow-lift">
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
      <section className="section px-6 bg-white">
        <div className="container mx-auto max-w-4xl">
          <h2 className="t-h2 text-zinc-900 mb-12 text-center">
            Preguntas frecuentes sobre clases de inglés cerca de Montecarmelo y Las Tablas
          </h2>
          <div className="space-y-6">
            {localFaqs.map((faq, index) => (
              <div key={index} className="card p-6">
                <h3 className="font-bold text-zinc-900 mb-3">{faq.question}</h3>
                <p className="text-zinc-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final Local CTA */}
      <section className="section-tight px-6 bg-accent-blue">
        <div className="container mx-auto max-w-4xl text-center">
          <p className="text-xl md:text-2xl text-white mb-8">
            Si buscas una academia de inglés cerca de Montecarmelo y Las Tablas, solicita ahora tu prueba de nivel gratuita y empieza a aprender inglés cerca de casa.
          </p>
          <a
              href="/prueba-de-nivel-ingles/"
            className="inline-flex items-center gap-2 bg-white text-accent-blue font-bold py-4 px-8 rounded-lg hover:bg-amber-400 hover:text-accent-blue-900 transition-colors"
          >
            Pide tu prueba de nivel gratuita
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-lead px-6 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="t-h2 text-zinc-900 mb-6">
                Reserva Tu Prueba de Nivel
              </h2>
              <p className="text-zinc-600 mb-8">
                Academia cerca de Montecarmelo y Las Tablas. Profesores certificados. Resultados reales.
              </p>
              <div className="flex flex-wrap gap-4">
                <a
                  href={NAP.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-whatsapp hover:bg-whatsapp-dark text-white font-bold py-3 px-6 rounded-lg flex items-center gap-2 transition-colors"
                >
                  <WhatsAppIcon className="w-5 h-5" />
                  WhatsApp {NAP.phone}
                </a>
                <a
                  href={NAP.phoneTel}
                  className="bg-accent-blue hover:bg-accent-blue-800 text-white font-bold py-3 px-6 rounded-lg flex items-center gap-2 transition-colors"
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
                source="montecarmelo-las-tablas"
                showPhone={true}
                showAge={true}
                showLevel={true}
                variant="refresh"
              />
            </div>
          </div>
        </div>
      </section>


      {/* Downline: el hub de barrios reparte hacia cada curso */}
      <section className="section-lead px-6 surface-alt border-t border-zinc-100">
        <div className="container mx-auto max-w-4xl">
          <p className="text-zinc-500 text-sm text-center leading-relaxed">
            <strong className="text-zinc-600">Cursos disponibles:</strong>{' '}
            <a href="/cursos-ingles/" className="text-indigo-600 hover:underline">Todos los cursos</a>
            {' · '}
            <a href="/cursos-ingles/infantil/" className="text-indigo-600 hover:underline">Inglés infantil (2-5 años)</a>
            {' · '}
            <a href="/cursos-ingles/primaria/" className="text-indigo-600 hover:underline">Inglés para primaria (6-12)</a>
            {' · '}
            <a href="/cursos-ingles/secundaria/" className="text-indigo-600 hover:underline">Inglés para secundaria y EBAU</a>
            {' · '}
            <a href="/cursos-ingles/adultos/" className="text-indigo-600 hover:underline">Clases de inglés para adultos</a>
            {' · '}
            <a href="/cursos-ingles/particulares/" className="text-indigo-600 hover:underline">Clases particulares de inglés</a>
            {' · '}
            <a href="/cursos-ingles/online/" className="text-indigo-600 hover:underline">Clases de inglés online</a>
          </p>
        </div>
      </section>

      <Footer />

      {/* Schema.org Structured Data */}
</>
  );
}
