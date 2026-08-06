import React, { useEffect } from 'react';
import { MapPin, Clock, Train, Bus, CheckCircle, Star, ArrowRight } from 'lucide-react';
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
  { title: "El bus 147 te deja en la puerta", desc: "Directo desde Tetuán y Valdeacederas, unos 8 minutos y sin transbordos. En metro son dos líneas; en bus, ninguna." },
  { title: "Centro oficial Cambridge y Linguaskill", desc: "Te preparas y te examinas en el mismo sitio. No tienes que cruzar Madrid el día del examen." },
  { title: "100 alumnos aprobados en Cambridge", desc: "100% de aprobados en B2 First en 2024/25 y 2025/26. Casi todos empezaron desde un nivel muy básico." },
  { title: "Grupos de 7 a 10 alumnos", desc: "Máximo 10 en adultos. Suficientemente pequeño para que hables en todas las clases, no una vez al mes." },
  { title: "5,0 sobre 183 reseñas en Google", desc: "Las 183 son de 5 estrellas. Ninguna academia de la zona norte tiene esa combinación de nota y volumen." },
  { title: "Precios publicados, sin letra pequeña", desc: "Desde 64 €/mes en grupo o 29 €/hora en clase particular. Matrícula 45 € y libro hasta 40 €. Eso es todo." }
];

const courses = [
  { name: "Infantil (2-5 años)", method: "Great Little People · desde 64 €/mes", href: "/cursos-ingles/infantil/" },
  { name: "Primaria (6-12 años)", method: "Young Learners + Cambridge · 83 €/mes", href: "/cursos-ingles/primaria/" },
  { name: "Secundaria (13-17 años)", method: "EBAU + Cambridge B1/B2/C1 · desde 87 €/mes", href: "/cursos-ingles/secundaria/" },
  { name: "Adultos", method: "Todos los niveles + Cambridge + Linguaskill · 94 €/mes", href: "/cursos-ingles/adultos/" },
  { name: "Clases particulares", method: "Presencial u online · desde 29 €/hora", href: "/cursos-ingles/particulares/" }
];

// Reseñas reales de Google, verificadas contra el perfil el 02/08/2026.
// Asignacion en GEO-Content-Project/review-allocation.md: ninguna se repite en el sitio.
const localReviews = [
  {
    name: "Eva Liarte",
    role: "Reseña verificada en Google",
    text: "El director de la academia es un gran profesional. Además de ser muy amable y atento, te brinda su ayuda de forma muy dinámica para que tengas más confianza en ti mismo a la hora de aprender y expresarte en inglés. Gracias JP. ✨"
  },
  {
    name: "Laura García Lomas",
    role: "Alumno/a · preparación B2",
    text: "Una suerte encontrar esta academia con tan grandes profesionales. Gracias a ellos he conseguido el B2, la metodología hace que aprendas rápido y no olvides"
  }
];

export const localFaqs: FAQItem[] = [
  {
    question: "¿Cómo se llega desde Tetuán a la academia?",
    answer: "Lo más rápido es el autobús 147, que sale de Tetuán y Valdeacederas y tarda unos 8 minutos sin transbordos. En metro necesitas dos líneas: L1 hasta Plaza de Castilla y L9 hasta Barrio del Pilar. En coche, por Av. de la Paz, entre 8 y 12 minutos."
  },
  {
    question: "¿Cuánto cuestan las clases de inglés cerca de Tetuán?",
    answer: "Infantil desde 64 €/mes, Primaria 83 €/mes, Secundaria desde 87 €/mes y Adultos 94 €/mes. Las clases particulares cuestan 29 €/hora, presenciales u online. La matrícula son 45 € y el libro un máximo de 40 €. No hay más costes."
  },
  {
    question: "¿La prueba de nivel es gratis y quién la hace?",
    answer: "Es gratuita y dura 25 minutos. La hace JP, el director de estudios, que también es quien contesta el WhatsApp: escribes al 604 910 611 y hablas directamente con él, no con un formulario. Sales con tu nivel MCER y el grupo recomendado."
  },
  {
    question: "Mi hijo estudia en un instituto de Tetuán. ¿Le da tiempo a llegar?",
    answer: "Sí. Vienen alumnos del IES Tetuán de las Victorias, del CP Felipe II y del CP Doctor Federico Rubio, todos en Calle Vía Límite y alrededores. Abrimos hasta las 21:30 de lunes a jueves, así que hay margen de sobra después de clase."
  },
  {
    question: "¿Cuántos alumnos hay por clase?",
    answer: "Entre 7 y 10, con un máximo de 10 en adultos. Tenemos dos aulas, London y Manchester, y ese aforo es deliberado: en un grupo de 10 hablas en todas las clases. En uno de 20, hablas una vez cada tres semanas."
  },
  {
    question: "¿Sois centro oficial de Cambridge o solo preparáis el examen?",
    answer: "Somos centro preparador oficial de Cambridge y centro oficial de Linguaskill. Te preparas y te examinas en el mismo sitio, sin cruzar Madrid el día del examen. Llevamos 100 alumnos aprobados y un 100% de aprobados en B2 First en 2024/25 y 2025/26."
  },
  {
    // Valdeacederas se cubre aquí a propósito, en lugar de abrir una página que
    // competiría con esta por la misma intención de búsqueda.
    question: "Vivo en Valdeacederas. ¿El 147 sale también desde mi zona?",
    answer: "Sí. El autobús 147 sale de Tetuán y Valdeacederas y tarda unos 8 minutos hasta la parada de Ginzo de Limia - Ferrol, a un minuto andando de la academia. Es directo, sin transbordos, así que desde Valdeacederas se llega igual de rápido que desde el propio Tetuán. En coche, por la Av. de la Paz, entre 8 y 12 minutos."
  },
  {
    question: "¿Por qué elegiros y no una academia del propio Tetuán?",
    answer: "Por tres cosas comprobables: 5,0 sobre 183 reseñas en Google, todas de 5 estrellas; precios publicados desde 64 €/mes sin letra pequeña; y que los dos fundadores, JP y Danny, dan clase en persona. A 8 minutos en el 147, merece la pena el trayecto."
  }
];

export const locationMeta = {locationName: "Tetuán",
        pageUrl: "https://impulse-english.es/academia-ingles-tetuan"};

export default function TetuanPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
<Navbar />

      {/* Hero Section */}
      <section className="relative pt-28 pb-20 md:pt-36 md:pb-32 overflow-hidden">
        <div className="absolute inset-0">
          <img src="/images/academy/outside-academy.jpg" alt="Fachada de Impulse English Academy en Av. de El Ferrol 22, a 8 minutos de Tetuán en el bus 147" className="w-full h-full object-cover" loading="eager" />
          <div className="absolute inset-0 bg-accent-blue/90"></div>
        </div>
        <div className="absolute inset-0 hero-grain opacity-[0.03]"></div>
        <div className="absolute -top-32 -right-32 w-[420px] h-[420px] rounded-full bg-brand-red/[0.05]"></div>
        <div className="absolute -bottom-24 -left-24 w-80 h-80 rounded-full bg-white/[0.03]"></div>

        <div className="relative z-10 container mx-auto px-6 md:px-12">
          <Breadcrumb
            items={[
              { label: 'Ubicaciones', href: '/academias-ingles-madrid/por-barrios/' },
              { label: 'Tetuán' }
            ]}
            variant="light"
          />

          <div className="max-w-4xl mt-12 md:mt-16">
            <div className="flex items-center gap-4 mb-6 animate-hero-fade-up">
              <div className="w-8 h-px bg-white/40"></div>
              <MapPin className="w-4 h-4 text-brand-red" />
              <span className="font-display text-white/70 text-xs uppercase tracking-[0.2em]">
                Tetuán
              </span>
            </div>
            <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl text-white tracking-tight leading-[1.1] mb-6 animate-hero-fade-up animation-delay-100">
              Academia de inglés a 8 minutos de Tetuán
            </h1>
            <div className="w-16 h-0.5 bg-brand-red mb-6 animate-hero-fade-up animation-delay-150"></div>
            <p className="font-display text-lg md:text-xl text-white/80 font-light leading-relaxed mb-4 animate-hero-fade-up animation-delay-200">
              Centro oficial Cambridge en Barrio del Pilar, desde 64 €/mes
            </p>
            <div className="flex items-center gap-2 text-white/60 font-display text-sm mb-2 animate-hero-fade-up animation-delay-200">
              <Train className="w-4 h-4" />
              <span>Bus 147 directo desde Tetuán · 8 min · sin transbordos</span>
            </div>
            <p className="font-display text-white/50 text-sm mb-8 animate-hero-fade-up animation-delay-200">
              {NAP.fullAddress} · <a href={NAP.phoneTel} className="underline hover:text-white/80">{NAP.phone}</a>
            </p>
            <div className="flex flex-wrap gap-3 mb-8 animate-hero-fade-up animation-delay-300">
              <span className="border border-white/15 px-4 py-2 rounded-full text-white/80 font-display text-sm">Centro oficial Cambridge</span>
              <span className="border border-white/15 px-4 py-2 rounded-full text-white/80 font-display text-sm">100 aprobados en Cambridge</span>
              <span className="border border-white/15 px-4 py-2 rounded-full text-white/80 font-display text-sm">5,0 · 183 reseñas</span>
              <span className="border border-white/15 px-4 py-2 rounded-full text-white/80 font-display text-sm">Grupos de 7 a 10</span>
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
                href={`${NAP.whatsappUrl}?text=Hola,%20vivo%20en%20Tetuán%20y%20me%20gustaría%20información%20sobre%20los%20cursos`}
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

      {/* Local Intro Section
          Sistema de /prueba-de-nivel-ingles/: cabecera eyebrow + t-h2 + .rule,
          lede en t-lede, tarjetas numeradas de "Como funciona". Sin reveal-on-scroll.
          El answer capsule es un <p> normal: es el bloque que extraen los
          buscadores generativos y tiene que poder leerse en voz alta. */}
      <section className="section px-6 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="max-w-2xl mb-10">
            <span className="eyebrow mb-4">Tetuán</span>
            <h2 className="t-h2 text-zinc-900 mb-5">Un autobús, ningún transbordo</h2>
            <div className="rule"></div>
          </div>

          <p className="t-lede text-zinc-700 max-w-3xl mb-12">
            ¿Buscas academia de inglés cerca de Tetuán? Impulse English Academy está a{' '}
            <strong className="text-zinc-900 font-semibold">8 minutos en el autobús 147</strong>,
            directo y sin transbordos. Centro oficial Cambridge desde 2022, grupos de 7 a 10
            alumnos y clases desde 64 €/mes. Reserva tu prueba de nivel gratuita con JP:{' '}
            <a href={NAP.phoneTel} className="text-accent-blue font-semibold hover:underline whitespace-nowrap">604 910 611</a>.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { n: 1, title: "Bus 147", body: "Sale de Tetuán y Valdeacederas y te deja en Av. de El Ferrol. Unos 8 minutos, sin cambiar de línea." },
              { n: 2, title: "O en metro, con un cambio", body: "L1 desde Tetuán hasta Plaza de Castilla, y allí L9 hasta Barrio del Pilar. Más pasos que el bus." },
              { n: 3, title: "En coche, 8 a 12 minutos", body: "Por Av. de la Paz hasta Av. de El Ferrol, 22. Hay aparcamiento libre en la calle y en el entorno de La Vaguada." }
            ].map((step) => (
              <div key={step.n} className="card p-7">
                <span className="inline-flex w-9 h-9 rounded-full bg-brand-red text-white items-center justify-center font-display font-bold mb-5">
                  {step.n}
                </span>
                <h3 className="t-h3 text-zinc-900 mb-2">{step.title}</h3>
                <p className="t-small text-zinc-600">{step.body}</p>
              </div>
            ))}
          </div>

          <p className="t-small text-zinc-500 mt-8 flex items-start gap-2">
            <MapPin className="w-4 h-4 text-accent-blue flex-shrink-0 mt-0.5" />
            Vienen alumnos del IES Tetuán de las Victorias, del CP Felipe II y del CP Doctor
            Federico Rubio, todos en Calle Vía Límite y alrededores. Abrimos hasta las 21:30 de
            lunes a jueves, para que entre después del instituto o del trabajo.
          </p>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="section px-6 surface-alt">
        <div className="container mx-auto max-w-6xl">
          <h2 className="t-h2 text-zinc-900 mb-12 text-center">
            Por Qué Vecinos de Tetuán Nos Eligen
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

      {/* How to Get There */}
      <section className="section px-6 surface-alt">
        <div className="container mx-auto max-w-4xl">
          <h2 className="t-h2 text-zinc-900 mb-8 text-center">
            Cómo Llegar desde Tetuán
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="card p-6">
              <div className="flex items-center gap-3 mb-4">
                <Train className="w-8 h-8 text-accent-blue" />
                <h3 className="font-bold text-zinc-900">En Metro</h3>
              </div>
              <p className="text-zinc-600 mb-3">
                Desde <strong>Metro Tetuán (Línea 1)</strong>:
              </p>
              <ul className="text-zinc-600 text-sm space-y-2">
                <li>• Toma la Línea 1 dirección Pinar de Chamartín</li>
                <li>• Baja en Plaza Castilla (3 paradas)</li>
                <li>• Transbordo a Línea 9 dirección Mirasierra</li>
                <li>• Baja en Barrio del Pilar (3 paradas)</li>
                <li>• Camina 500 metros hasta nuestra academia</li>
              </ul>
              <p className="text-accent-blue font-medium mt-4">Tiempo total: ~15 minutos</p>
            </div>
            <div className="card p-6">
              <div className="flex items-center gap-3 mb-4">
                <Bus className="w-8 h-8 text-emerald-600" />
                <h3 className="font-bold text-zinc-900">En Autobús</h3>
              </div>
              <p className="text-zinc-600 mb-3">
                Líneas que conectan Tetuán con Barrio del Pilar:
              </p>
              <ul className="text-zinc-600 text-sm space-y-2">
                <li>• Línea 149: Tetuán - Barrio del Pilar</li>
                <li>• Línea 83: Por Bravo Murillo hasta La Vaguada</li>
                <li>• Línea 128: Conexión por zona norte</li>
              </ul>
              <p className="text-emerald-600 font-medium mt-4">Tiempo total: ~20 minutos</p>
            </div>
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
              Descubre por qué somos la mejor opción cerca de Tetuán
            </p>
          </div>
          <LazyVideo
            videoId="Fdso-d9_F20"
            title="Impulse English Academy - Tu academia de inglés cerca de Tetuán"
            className="shadow-panel"
          />
        </div>
      </section>

      {/* Courses Section */}
      <section className="section px-6 surface-alt">
        <div className="container mx-auto max-w-6xl">
          <h2 className="t-h2 text-zinc-900 mb-4 text-center">
            Cursos Disponibles para Residentes de Tetuán
          </h2>
          <p className="text-zinc-600 text-center mb-12">Descuento disponible para pago trimestral</p>
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

      {/* Inglés para niños cerca de Tetuán */}
      <section className="section-tight px-6 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="t-h2 text-zinc-900 mb-6">
                Inglés para niños cerca de Tetuán
              </h2>
              <p className="text-zinc-600 mb-6">
                Ofrecemos clases de inglés para niños de 2 a 12 años cerca de Tetuán, con metodologías adaptadas a cada edad y horarios pensados para las familias de la zona.
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
                  <span className="text-zinc-700"><strong>Horarios adaptados</strong> a familias cerca de Tetuán: tardes después del colegio</span>
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
                alt="Clases de inglés para niños cerca de Tetuán La Vaguada Madrid"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Clases de inglés para adultos cerca de Tetuán */}
      <section className="section-tight px-6 surface-alt">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1 overflow-hidden rounded-2xl shadow-lift">
              <img
                src="/images/academy/adult-one-to-one-classes.jpg"
                alt="Clases de inglés para adultos cerca de Tetuán La Vaguada Madrid"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="t-h2 text-zinc-900 mb-6">
                Clases de inglés para adultos cerca de Tetuán
              </h2>
              <p className="text-zinc-600 mb-6">
                Aprende inglés cerca de Tetuán con clases diseñadas para profesionales y adultos de la zona. Todos los niveles, desde principiante hasta C2.
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
                  <span className="text-zinc-700"><strong>Grupos reducidos</strong> cerca de Tetuán: máximo 7-10 alumnos</span>
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
            <a href="/examenes-cambridge/b2-first/" className="px-4 py-2 rounded-full text-sm font-medium bg-white text-accent-blue hover:bg-amber-400 hover:text-accent-blue-900 transition-colors">B2 First</a>
            <a href="/examenes-cambridge/c1-advanced/" className="px-4 py-2 rounded-full text-sm font-medium bg-white/20 text-white hover:bg-white/30 transition-colors">C1 Advanced</a>
            <span className="px-4 py-2 rounded-full text-sm font-medium bg-white/20 text-white">C2 Proficiency</span>
          </div>
          <p className="text-white/90 font-medium mb-8">
            Ventaja: Haces el examen en el mismo lugar donde te preparas.
          </p>
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

      {/* Testimonials */}
      <section className="section-lead px-6 surface-alt">
        <div className="container mx-auto max-w-4xl">
          <h2 className="t-h2 text-zinc-900 mb-12 text-center">
            Lo que dicen nuestros estudiantes...
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            {localReviews.map((review, idx) => (
              <div key={idx} className="card p-7">
                <div className="mb-3 flex items-center justify-between">
                  <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                  <GoogleMark className="h-4 w-4 opacity-70" />
                </div>
                <p className="text-zinc-700 mb-4 italic">"{review.text}"</p>
                <p className="text-zinc-900 font-semibold">{review.name}</p>
                <p className="text-zinc-500 text-sm">{review.role}</p>
              </div>
            ))}
          </div>
          <div className="text-center">
            <p className="text-zinc-600 mb-6">
              Las dos son de alumnos adultos, que es el perfil que más nos llega desde Tetuán y
              Valdeacederas. Son dos de las <strong>183 reseñas</strong> que tenemos en Google, y
              las 183 son de 5 estrellas: ni una sola de 4, 3, 2 o 1.
            </p>
            <a
              href={NAP.gbpUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-accent-blue hover:bg-accent-blue-800 text-white font-bold py-3 px-8 rounded-lg transition-colors"
            >
              <Star className="w-5 h-5 fill-amber-400 text-amber-400" />
              Ver las 183 reseñas en Google
            </a>
          </div>
        </div>
      </section>


      {/* Quien da la clase. Senal E-E-A-T: persona con nombre, no "nuestro equipo". */}
      <section className="section px-6 surface-alt">
        <div className="container mx-auto max-w-6xl">
          <div className="max-w-2xl mb-10">
            <span className="eyebrow mb-4">Quién te la da</span>
            <h2 className="t-h2 text-zinc-900 mb-5">La clase te la da JP, no "nuestro equipo"</h2>
            <div className="rule"></div>
          </div>
          <div className="grid md:grid-cols-[300px_1fr] gap-10 items-start">
            <div className="aspect-[3/4] overflow-hidden rounded-2xl shadow-panel">
              <img
                src="/images/academy/jp-director-estudios.webp"
                alt="JP, director de estudios de Impulse English Academy, la academia de inglés más cercana a Tetuán"
                className="w-full h-full object-cover"
                loading="lazy"
                width={900}
                height={1200}
              />
            </div>
            <div className="space-y-4 text-zinc-600 leading-relaxed">
              <p>
                Desde Tetuán nos llegan sobre todo dos perfiles: adultos que necesitan acreditar
                su nivel para el trabajo o una oposición, y adolescentes de los institutos de
                Vía Límite que van a por el B1 o el B2. En los dos casos, quien evalúa el nivel
                de partida es la misma persona.
              </p>
              <p>
                Se llama <strong className="text-zinc-900">JP</strong>. Cofundador del centro y
                director de estudios, con <strong className="text-zinc-900">más de 10 años</strong>
                {' '}de docencia y una década previa viviendo en Irlanda.
              </p>
              <p>
                Además de llevar la parte académica, hace él mismo las pruebas de nivel de 25
                minutos y responde el WhatsApp del 604 910 611. Lo que recibas cuando escribas lo
                habrá escrito él.
              </p>
              <p>
                Trabaja sobre todo preparación Cambridge y adquisición temprana del idioma, y su
                nombre aparece citado en buena parte de las 183 reseñas de Google. La otra mitad
                del proyecto es Danny Fitzpatrick, cofundador, que lleva adultos y negocios.
              </p>
              <a href="/nuestro-equipo/" className="text-accent-blue font-semibold hover:underline inline-flex items-center gap-1">
                Conoce al equipo completo <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Caso real: resultado concreto, con nombre y desenlace verificable. */}
      <section className="section px-6 bg-white">
        <div className="container mx-auto max-w-4xl">
          <div className="max-w-2xl mb-10">
            <span className="eyebrow mb-4">Un caso real</span>
            <h2 className="t-h2 text-zinc-900 mb-5">Daniel de la Peña</h2>
            <div className="rule"></div>
          </div>
          <p className="text-zinc-600 leading-relaxed mb-6 max-w-3xl">
            Daniel buscaba exactamente lo que busca la mayoría de nuestros alumnos adultos de
            Tetuán: usar el inglés para cambiar de trabajo, no para aprobar una asignatura.
          </p>
          <div className="card p-8">
            <div className="grid sm:grid-cols-3 gap-6 mb-6 text-center">
              <div><p className="t-h3 text-accent-blue">18 meses</p><p className="t-small text-zinc-600">con nosotros</p></div>
              <div><p className="t-h3 text-accent-blue">Su objetivo</p><p className="t-small text-zinc-600">trabajar en un país de habla inglesa</p></div>
              <div><p className="t-h3 text-emerald-600">Conseguido</p><p className="t-small text-zinc-600">hoy es profesor y da inglés en primaria a jornada completa</p></div>
            </div>
            <p className="text-zinc-600 leading-relaxed mb-4">El objetivo con el que entró era laboral, no académico: quería <em>"acceder a oportunidades laborales en el extranjero y en países de habla inglesa"</em>. Se quedó cerca de año y medio. ¿Salió como esperaba? <em>"Es algo que conseguí… cumplió con mis expectativas"</em>.</p>
            <p className="text-zinc-600 leading-relaxed mb-6">Preguntado por qué se quedó tanto tiempo, no habla de método ni de libros, sino del <em>"trato personalizado y sobre todo profesionalidad y compromiso para con tu proceso de aprendizaje y tu situación de partida"</em>. El desenlace: hoy es profesor titulado y da clase de inglés en primaria a jornada completa.</p>
            <a href="/testimonios/" className="text-accent-blue font-semibold hover:underline inline-flex items-center gap-1">
              Ver el vídeo y otros casos <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      {/* Precios visibles en pagina, no solo en schema. */}
      <section className="section px-6 surface-alt">
        <div className="container mx-auto max-w-4xl">
          <div className="max-w-2xl mb-10">
            <span className="eyebrow mb-4">Precios</span>
            <h2 className="t-h2 text-zinc-900 mb-5">Cuánto cuesta, sin letra pequeña</h2>
            <div className="rule"></div>
          </div>
          <p className="text-zinc-600 mb-8">
            Estos son los precios reales, y son los mismos vengas desde Tetuán o vivas en la
            puerta. No hay recargo por zona, ni cuota de mantenimiento, ni permanencia, ni coste
            de examen escondido.
          </p>
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
            Aparte: <strong>matrícula 45 €</strong> y <strong>libro hasta 40 €</strong>, una sola
            vez. La cuota incluye las clases semanales, los simulacros Cambridge, el seguimiento
            personalizado y los recursos online. Hay descuento por pago trimestral y por familias
            con más de un hijo matriculado. Las tasas del examen oficial las fija Cambridge.
          </p>
        </div>
      </section>
      {/* Gallery Section - Photos at Bottom */}
      <section className="section px-6 bg-white">
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
              { url: "/images/academy/outside-academy.jpg", alt: "Fachada exterior Impulse English Academy cerca Tetuán La Vaguada Madrid" },
              { url: "/images/academy/classroom-facilities-main-classroom.jpg", alt: "Aula principal academia inglés cerca Tetuán La Vaguada Madrid" },
              { url: "/images/academy/technology-based-classroom-photo.jpg", alt: "Aula tecnológica academia inglés cerca Tetuán La Vaguada Madrid" },
              { url: "/images/academy/stairs.jpg", alt: "Interior academia dos plantas cerca Tetuán La Vaguada Madrid" },
              { url: "/images/academy/infantil-classes.jpg", alt: "Clases inglés infantil cerca Tetuán La Vaguada Madrid" },
              { url: "/images/academy/primary-classes-students-smiling.jpg", alt: "Estudiantes primaria felices cerca Tetuán La Vaguada Madrid" },
              { url: "/images/academy/daniel-helping-secondary-school-students.jpg", alt: "Profesor Daniel ayudando estudiantes cerca Tetuán La Vaguada Madrid" },
              { url: "/images/academy/secondary-classes-student-happy.jpg", alt: "Estudiante secundaria feliz cerca Tetuán La Vaguada Madrid" },
              { url: "/images/academy/adult-one-to-one-classes.jpg", alt: "Clases particulares adultos cerca Tetuán La Vaguada Madrid" },
              { url: "/images/academy/jp-with-students.jpg", alt: "Estudiantes certificados Cambridge cerca Tetuán La Vaguada Madrid" },
              { url: "/images/academy/photos-of-facilities.jpg", alt: "Instalaciones academia inglés cerca Tetuán La Vaguada Madrid" },
              { url: "/images/academy/cambridge-logo-edited.png", alt: "Centro Preparador Cambridge cerca Tetuán La Vaguada Madrid" }
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

      {/* Nearby Locations */}
      <section className="section-tight px-6 surface-alt">
        <div className="container mx-auto max-w-4xl">
          <NearbyAreas currentHref="/academia-ingles-tetuan/" variant="plain" />
        </div>
      </section>

      {/* Local FAQs Section */}
      <section className="section px-6 bg-white">
        <div className="container mx-auto max-w-4xl">
          <h2 className="t-h2 text-zinc-900 mb-12 text-center">
            Preguntas frecuentes sobre clases de inglés cerca de Tetuán
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

      {/* Mapa */}
      <section className="section px-6 surface-alt">
        <div className="container mx-auto max-w-4xl">
          <h2 className="t-h2 text-zinc-900 mb-8 text-center">
            Cómo Llegar desde Tetuán
          </h2>
          <div className="card overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3035.0!2d-3.7084812!3d40.4743948!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd422909a0b6b11b%3A0xbe6ef3e2ba8bb87b!2sImpulse%20English%20Academy!5e0!3m2!1ses!2ses!4v1701964800000!5m2!1ses!2ses"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Cómo llegar a Impulse English Academy La Vaguada desde Tetuán"
            ></iframe>
          </div>
          <div className="mt-4 text-center">
            <a href={NAP.gbpUrl} target="_blank" rel="noopener noreferrer" className="text-accent-blue font-semibold hover:underline">
              Ver en Google Maps →
            </a>
            <p className="text-zinc-500 text-sm mt-2">{NAP.name} - {NAP.fullAddress}</p>
          </div>
        </div>
      </section>

      {/* Final Local CTA */}
      <section className="section-tight px-6 bg-accent-blue">
        <div className="container mx-auto max-w-4xl text-center">
          <p className="text-xl md:text-2xl text-white mb-8">
            Si buscas una academia de inglés cerca de Tetuán, solicita ahora tu prueba de nivel gratuita y empieza a aprender inglés cerca de casa.
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

      {/* CTA */}
      <section className="section-lead px-6 surface-ink">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="t-h2 text-white mb-6">
            ¿Vives en Tetuán?
          </h2>
          <p className="text-white/70 mb-8">
            Estamos a solo 15 minutos en metro. Ven a conocernos y reserva tu prueba de nivel gratuita de 25 minutos.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="/prueba-de-nivel-ingles/"
              className="btn-primary btn-lg"
            >
              Pedir Prueba de Nivel
            </a>
            <a
              href="/contacto/"
              className="btn-on-dark btn-lg"
            >
              Contactar
            </a>
          </div>
        </div>
      </section>


      {/* CTA: patron de conversion de Barrio del Pilar. `source` por barrio para GHL. */}
      <section className="section-lead px-6 surface-alt">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="t-h2 text-zinc-900 mb-6">Pide Tu Prueba de Nivel</h2>
              <div className="space-y-4 mb-8">
                {[
                  "Contáctanos por WhatsApp o teléfono",
                  "Prueba de nivel gratuita (25 minutos) con JP",
                  "Empieza tu transformación con el inglés"
                ].map((step, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-accent-blue text-white rounded-full flex items-center justify-center font-bold shrink-0">{i + 1}</div>
                    <span className="text-zinc-700">{step}</span>
                  </div>
                ))}
              </div>
              <p className="text-zinc-900 font-bold text-lg mb-4">A 8 minutos en el bus 147 desde Tetuán. Sin excusas.</p>
              <p className="text-zinc-600">{NAP.fullAddress}</p>
            </div>
            <div>
              <LeadForm
                title="Reserva Tu Prueba Gratuita"
                subtitle="Te contactamos en menos de 24h"
                ctaText="Reservar Ahora"
                source="tetuan"
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
