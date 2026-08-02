import React, { useEffect } from 'react';
import { MapPin, Clock, Train, Bus, CheckCircle, Star, ArrowRight, Briefcase } from 'lucide-react';
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
  { title: "Inglés de negocios con Danny", desc: "Danny Fitzpatrick es licenciado en Marketing por ESIC University y su especialidad es el inglés profesional. Irlandés, 12 años en Madrid." },
  { title: "A dos paradas y un cambio", desc: "Línea 10 desde Begoña hasta Plaza de Castilla, y línea 9 hasta Barrio del Pilar. El mismo corredor que ya haces cada día." },
  { title: "Linguaskill en 48 horas", desc: "Centro oficial. Si tu empresa o una oposición te pide acreditar el nivel ya, tienes el certificado en 48 horas." },
  { title: "Clases particulares a 29 €/hora", desc: "Presenciales u online, con horario adaptado. La opción que eligen los que tienen agenda de oficina y no pueden fijar un grupo." },
  { title: "Grupos de 7 a 10 alumnos", desc: "Máximo 10 en adultos. Hablas en todas las clases, que es lo que necesitas si el inglés te hace falta en reuniones." },
  { title: "5,0 sobre 180 reseñas en Google", desc: "Las 180 son de 5 estrellas. Puedes comprobarlo antes de reservar la prueba de nivel." }
];

const courses = [
  { name: "Infantil (2-5 años)", method: "Great Little People", href: "/cursos-ingles/infantil/" },
  { name: "Primaria (6-12 años)", method: "Young Learners + Cambridge", href: "/cursos-ingles/primaria/" },
  { name: "Secundaria (13-17 años)", method: "EBAU + Cambridge B1/B2/C1", href: "/cursos-ingles/secundaria/" },
  { name: "Adultos", method: "Todos niveles + Cambridge + Linguaskill", href: "/cursos-ingles/adultos/" },
  { name: "Clases Particulares", method: "Presencial u online", href: "/cursos-ingles/particulares/" }
];

// Reseñas reales de Google, verificadas contra el perfil el 02/08/2026.
// Asignacion en GEO-Content-Project/review-allocation.md: ninguna se repite en el sitio.
const localReviews = [
  {
    name: "Gonzalo Tarascón",
    role: "Alumno/a · preparación C1",
    text: "¡Recomiendo 100% esta academia! Gracias a sus clases y al excelente equipo de profesores, logré obtener mi certificado C1 de inglés. Esto me ha abierto muchas puertas en el mercado laboral. El ambiente es familiar y cercano, y siempre me sentí apoyado en todo el proceso. ¡Muchas gracias por todo!"
  },
  {
    name: "Hugo Antonio",
    role: "Alumno/a · preparación B2",
    text: "Grandes profesionales, acudí a ellos con la finalidad de sacarme el B2, con un nivel de inglés muy bajo y gracias a ellos he conseguido el título."
  }
];

export const localFaqs: FAQItem[] = [
  {
    question: "¿Cómo llego desde las Cuatro Torres a la academia?",
    answer: "Por el mismo corredor que ya conoces: línea 10 desde Begoña hasta Plaza de Castilla, y allí línea 9 hasta Barrio del Pilar. Después, 500 metros a pie por Av. de El Ferrol hasta el número 22. En coche, por la Castellana, entre 10 y 15 minutos."
  },
  {
    question: "¿Dais inglés de negocios para profesionales?",
    answer: "Sí, y es la especialidad de Danny Fitzpatrick, cofundador y licenciado en Marketing por ESIC University. Irlandés afincado en Madrid desde hace 12 años, une su experiencia profesional con la enseñanza para que trabajes un inglés aplicable a tu carrera."
  },
  {
    question: "Trabajo en una de las torres y salgo tarde. ¿Hay horarios compatibles?",
    answer: "Abrimos hasta las 21:30 de lunes a jueves, así que hay grupos que empiezan después de la jornada. Si tu agenda cambia cada semana, la opción más flexible son las clases particulares a 29 €/hora, presenciales u online."
  },
  {
    question: "Mi empresa me pide acreditar el nivel de inglés. ¿Qué hago?",
    answer: "Linguaskill es la vía rápida: somos centro oficial y tienes el certificado de Cambridge en 48 horas, presencial u online desde casa. Si prefieres una titulación permanente, preparamos B2 First y C1 Advanced, con 100 alumnos aprobados hasta la fecha."
  },
  {
    question: "¿Cuánto cuestan las clases?",
    answer: "Adultos 94 €/mes en grupo. Clases particulares 29 €/hora, presenciales u online. La matrícula son 45 € y el libro un máximo de 40 €. No hay cuota de mantenimiento ni permanencia, y los precios están publicados."
  },
  {
    question: "¿Cuántos alumnos hay por clase?",
    answer: "Entre 7 y 10, con un máximo de 10 en adultos. Tenemos dos aulas, London y Manchester, y ese aforo es deliberado: en un grupo de 10 hablas en todas las clases. En uno de 20, hablas una vez cada tres semanas."
  },
  {
    question: "¿La prueba de nivel es gratis y quién la hace?",
    answer: "Es gratuita y dura 25 minutos. La hace JP, el director de estudios, que también es quien contesta el WhatsApp: escribes al 604 910 611 y hablas directamente con él, no con un formulario. Sales con tu nivel MCER y el grupo recomendado."
  }
];


export const locationMeta = {locationName: "Cuatro Torres Business Area",
        pageUrl: "https://impulse-english.es/academia-ingles-cuatro-torres"};

export default function CuatroTorresPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = 'Academia de Inglés cerca de Cuatro Torres Business Area Madrid | Impulse English Academy La Vaguada, Barrio del Pilar';
  }, []);

  return (
    <>
<Navbar />

      {/* Hero Section */}
      <section className="relative pt-28 pb-20 md:pt-36 md:pb-32 overflow-hidden">
        <div className="absolute inset-0">
          <img src="/images/academy/outside-academy.jpg" alt="Fachada de Impulse English Academy en Av. de El Ferrol 22, a 15 minutos de las Cuatro Torres" className="w-full h-full object-cover" loading="eager" />
          <div className="absolute inset-0 bg-accent-blue/90"></div>
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
              Inglés de negocios a 15 minutos de las Cuatro Torres
            </h1>
            <div className="w-16 h-0.5 bg-brand-red mb-6 animate-hero-fade-up animation-delay-150"></div>
            <p className="font-display text-lg md:text-xl text-white/80 font-light leading-relaxed mb-4 animate-hero-fade-up animation-delay-200">
              Centro oficial Cambridge y Linguaskill · particulares desde 29 €/hora
            </p>
            <div className="flex items-center gap-2 text-white/60 font-display text-sm mb-2 animate-hero-fade-up animation-delay-200">
              <Train className="w-4 h-4" />
              <span>L10 Begoña a Plaza de Castilla, L9 a Barrio del Pilar</span>
            </div>
            <p className="font-display text-white/50 text-sm mb-8 animate-hero-fade-up animation-delay-200">
              {NAP.fullAddress} · <a href={NAP.phoneTel} className="underline hover:text-white/80">{NAP.phone}</a>
            </p>
            <div className="flex flex-wrap gap-3 mb-8 animate-hero-fade-up animation-delay-300">
              <span className="border border-white/15 px-4 py-2 rounded-full text-white/80 font-display text-sm">Inglés de negocios</span>
              <span className="border border-white/15 px-4 py-2 rounded-full text-white/80 font-display text-sm">Linguaskill en 48 h</span>
              <span className="border border-white/15 px-4 py-2 rounded-full text-white/80 font-display text-sm">5,0 · 180 reseñas</span>
              <span className="border border-white/15 px-4 py-2 rounded-full text-white/80 font-display text-sm">29 €/hora particular</span>
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
                href={`${NAP.whatsappUrl}?text=Hola,%20trabajo%20en%20Cuatro%20Torres%20y%20me%20gustaría%20información%20sobre%20los%20cursos`}
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

      {/* Local Intro Section. Sistema de /prueba-de-nivel-ingles/. Sin reveal-on-scroll. */}
      <section className="section px-6 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="max-w-2xl mb-10">
            <span className="eyebrow mb-4">Cuatro Torres</span>
            <h2 className="t-h2 text-zinc-900 mb-5">Para quien necesita el inglés en el trabajo</h2>
            <div className="rule"></div>
          </div>

          <p className="t-lede text-zinc-700 max-w-3xl mb-12">
            ¿Trabajas en la Torre de Cristal, la PwC, la Emperador Castellana o la Moeve y
            necesitas inglés? Impulse English Academy está a{' '}
            <strong className="text-zinc-900 font-semibold">unos 15 minutos por la línea 9</strong>.
            Centro oficial Cambridge y Linguaskill, clases particulares desde 29 €/hora y grupos de
            adultos a 94 €/mes. Reserva tu prueba de nivel gratuita con JP:{' '}
            <a href={NAP.phoneTel} className="text-accent-blue font-semibold hover:underline whitespace-nowrap">604 910 611</a>.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { n: 1, title: "Begoña, línea 10", body: "La parada de las torres. Cinco minutos a pie hacia el norte y ya estás en el andén." },
              { n: 2, title: "Cambio en Plaza de Castilla", body: "De la línea 10 a la 9, en el mismo intercambiador. Dos paradas más hasta Barrio del Pilar." },
              { n: 3, title: "500 metros a pie", body: "Por Av. de El Ferrol hasta el número 22, junto a La Vaguada. En coche por la Castellana, 10 a 15 minutos." }
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
            El perfil que más nos llega desde el CTBA es el de profesionales que necesitan
            acreditar su nivel para la empresa o para una oposición. Para eso está Linguaskill,
            del que somos centro oficial: certificado de Cambridge en 48 horas.
          </p>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="section px-6 surface-alt">
        <div className="container mx-auto max-w-6xl">
          <h2 className="t-h2 text-zinc-900 mb-12 text-center">
            Por Qué Profesionales de Cuatro Torres Nos Eligen
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
            Cómo Llegar desde Cuatro Torres
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="card p-6">
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
            <div className="card p-6">
              <div className="flex items-center gap-3 mb-4">
                <Bus className="w-8 h-8 text-emerald-600" />
                <h3 className="font-bold text-zinc-900">En Autobús</h3>
              </div>
              <p className="text-zinc-600 mb-3">
                Líneas desde CTBA (Torre de Cristal, Torre Espacio):
              </p>
              <ul className="text-zinc-600 text-sm space-y-2">
                <li>• Líneas 147, 42 y 83: parada Ginzo de Limia - Ferrol</li>
                <li>• A 1 minuto andando de la academia</li>
              </ul>
              <p className="text-emerald-600 font-medium mt-4">Tiempo total: 20-25 minutos</p>
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
              Descubre por qué somos la mejor opción cerca de Cuatro Torres
            </p>
          </div>
          <LazyVideo
            videoId="Fdso-d9_F20"
            title="Impulse English Academy - Tu academia de inglés cerca de Cuatro Torres"
            className="shadow-panel"
          />
        </div>
      </section>

      {/* Courses Section */}
      <section className="section px-6 surface-alt">
        <div className="container mx-auto max-w-6xl">
          <h2 className="t-h2 text-zinc-900 mb-4 text-center">
            Cursos para Profesionales de Cuatro Torres Business Area
          </h2>
          <p className="text-zinc-600 text-center mb-12">Horarios adaptados a tu jornada laboral</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {courses.map((course, i) => (
              <a
                key={i}
                href={course.href}
                className="card-interactive group p-6"
              >
                <h3 className="font-bold text-zinc-900 mb-2 group-hover:text-accent-blue transition-colors">{course.name}</h3>
                <p className="text-zinc-600 text-sm mb-3">{course.method}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Inglés para niños cerca de Cuatro Torres */}
      <section className="section-tight px-6 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="t-h2 text-zinc-900 mb-6">
                Inglés para niños cerca de Cuatro Torres
              </h2>
              <p className="text-zinc-600 mb-6">
                Ofrecemos clases de inglés para niños de 2 a 12 años cerca de Cuatro Torres Business Area, con metodologías adaptadas a cada edad y horarios pensados para las familias de la zona.
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
                  <span className="text-zinc-700"><strong>Horarios adaptados</strong> a familias cerca de Cuatro Torres: tardes después del colegio</span>
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
                alt="Clases de inglés para niños cerca de Cuatro Torres La Vaguada Madrid"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Clases de inglés para adultos cerca de Cuatro Torres */}
      <section className="section-tight px-6 surface-alt">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1 overflow-hidden rounded-2xl shadow-lift">
              <img
                src="/images/academy/adult-one-to-one-classes.jpg"
                alt="Clases de inglés para adultos cerca de Cuatro Torres La Vaguada Madrid"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="t-h2 text-zinc-900 mb-6">
                Clases de inglés para adultos cerca de Cuatro Torres
              </h2>
              <p className="text-zinc-600 mb-6">
                Aprende inglés cerca de Cuatro Torres Business Area con clases diseñadas para profesionales y adultos. Todos los niveles, desde principiante hasta C2.
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
                  <span className="text-zinc-700"><strong>Grupos reducidos</strong> cerca de Cuatro Torres: máximo 7-10 alumnos</span>
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

      {/* Cambridge & Linguaskill Section */}
      <section className="section-lead px-6 bg-accent-blue">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="t-h2 text-white mb-6">
            Certificaciones para tu Carrera Profesional
          </h2>
          <p className="text-white/80 mb-8">
            Preparamos Cambridge y Linguaskill - ideal para profesionales:
          </p>
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            <a href="/examenes-cambridge/b1-preliminary/" className="px-4 py-2 rounded-full text-sm font-medium bg-white/20 text-white hover:bg-white/30 transition-colors">B1 Preliminary</a>
            <a href="/examenes-cambridge/b2-first/" className="px-4 py-2 rounded-full text-sm font-medium bg-white text-accent-blue hover:bg-amber-400 hover:text-accent-blue-900 transition-colors">B2 First</a>
            <a href="/examenes-cambridge/c1-advanced/" className="px-4 py-2 rounded-full text-sm font-medium bg-white/20 text-white hover:bg-white/30 transition-colors">C1 Advanced</a>
            <a href="/linguaskill/" className="px-4 py-2 rounded-full text-sm font-medium bg-white text-accent-blue hover:bg-amber-400 hover:text-accent-blue-900 transition-colors">Linguaskill</a>
          </div>
          <div className="bg-white/10 p-4 rounded-xl inline-block mb-8">
            <p className="text-white/90 font-medium">
              Linguaskill: Certificado en 48 horas. Perfecto para requisitos laborales urgentes.
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

      {/* Testimonials */}
      <section className="section-lead px-6 surface-alt">
        <div className="container mx-auto max-w-4xl">
          <h2 className="t-h2 text-zinc-900 mb-12 text-center">
            Lo Que Dicen Nuestros Alumnos
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {localReviews.map((review, idx) => (
              <div key={idx} className="card p-6">
                <div className="flex gap-1 mb-4">
                  {[1,2,3,4,5].map(star => (
                    <Star key={star} className="w-5 h-5 text-amber-400 fill-amber-400" />
                  ))}
                </div>
                <p className="text-zinc-600 italic mb-4">"{review.text}"</p>
                <p className="font-bold text-zinc-900">{review.name}</p>
                <p className="text-zinc-500 text-sm">{review.role}</p>
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
                alt="JP, director de estudios de Impulse English Academy, la academia de inglés más cercana a Cuatro Torres"
                className="w-full h-full object-cover"
                loading="lazy"
                width={900}
                height={1200}
              />
            </div>
            <div className="space-y-4 text-zinc-600 leading-relaxed">
              <p>Desde el CTBA nos llega casi siempre el mismo perfil: profesionales que entienden inglés pero se bloquean en una reunión, y necesitan acreditar el nivel para la empresa. La prueba de nivel te la hace JP y en 25 minutos sabes exactamente dónde estás.</p>
              <p>
                <strong className="text-zinc-900">JP</strong> es director de estudios y cofundador.
                Lleva <strong className="text-zinc-900">más de 10 años enseñando inglés</strong> y
                vivió 10 años en Irlanda antes de instalarse en Madrid.
              </p>
              <p>
                Es quien dirige el día a día académico, quien hace tu prueba de nivel gratuita de
                25 minutos y quien contesta el WhatsApp: cuando escribes al 604 910 611, te
                responde él. No un formulario ni un centro de llamadas.
              </p>
              <p>
                Está especializado en exámenes Cambridge y en adquisición temprana del idioma, y
                aparece por su nombre en buena parte de nuestras 180 reseñas. Junto a Danny
                Fitzpatrick, cofundador, da clase en persona.
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
            <h2 className="t-h2 text-zinc-900 mb-5">Sergio</h2>
            <div className="rule"></div>
          </div>
          <p className="text-zinc-600 leading-relaxed mb-6 max-w-3xl">Sergio es el caso que más se parece a lo que buscan muchos profesionales de las torres: no aprobar un examen, sino poder trabajar en inglés de verdad. Hoy lo hace en Dublín.</p>
          <div className="card p-8">
            <div className="grid sm:grid-cols-3 gap-6 mb-6 text-center">
              <div><p className="t-h3 text-accent-blue">30 años</p><p className="t-small text-zinc-600">cuando dio el paso</p></div>
              <div><p className="t-h3 text-accent-blue">4 entrevistas</p><p className="t-small text-zinc-600">en sus primeros meses en Dublín</p></div>
              <div><p className="t-h3 text-emerald-600">2 años</p><p className="t-small text-zinc-600">viviendo y trabajando en Irlanda</p></div>
            </div>
            <p className="text-zinc-600 leading-relaxed mb-4">Sergio tenía el problema que tiene medio país: <em>"como todos los españoles, el inglés siempre ha sido una gran parte de nuestra educación. Sin embargo, siempre he tenido una gran carencia de confianza para hablar en inglés"</em>. La barrera del idioma le había impedido mudarse al extranjero durante años.</p>
            <p className="text-zinc-600 leading-relaxed mb-6">Hoy lleva dos años en Dublín trabajando como analista y administrador de pólizas de seguro. <em>"Tanto Dani como JP han sido un gran apoyo para mí… gracias a ellos he podido ganar la confianza que realmente necesitaba"</em>. En sus primeros meses allí tuvo cuatro entrevistas con empresas distintas.</p>
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
          <p className="text-zinc-600 mb-8">Estos son los precios reales, publicados. No hay tarifa de empresa distinta ni recargo por horario de tarde: pagas lo mismo que cualquier otro alumno.</p>
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
          <NearbyAreas currentHref="/academia-ingles-cuatro-torres/" variant="plain" />
        </div>
      </section>

      {/* Local FAQs Section */}
      <section className="section px-6 bg-white">
        <div className="container mx-auto max-w-4xl">
          <h2 className="t-h2 text-zinc-900 mb-12 text-center">
            Preguntas frecuentes sobre clases de inglés cerca de Cuatro Torres
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
            Cómo Llegar desde Cuatro Torres Business Area
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
              title="Cómo llegar a Impulse English Academy La Vaguada desde Cuatro Torres Business Area"
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
            Si buscas una academia de inglés cerca de Cuatro Torres, solicita ahora tu prueba de nivel gratuita y empieza a aprender inglés cerca de casa.
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
            ¿Trabajas en Cuatro Torres?
          </h2>
          <p className="text-white/70 mb-8">
            Estamos a 20-25 minutos. Aprovecha tu hora de comer o después del trabajo.
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
              <p className="text-zinc-900 font-bold text-lg mb-4">A 15 minutos por la línea 9 desde las Cuatro Torres. Sin excusas.</p>
              <p className="text-zinc-600">{NAP.fullAddress}</p>
            </div>
            <div>
              <LeadForm
                title="Reserva Tu Prueba Gratuita"
                subtitle="Te contactamos en menos de 24h"
                ctaText="Reservar Ahora"
                source="cuatro-torres"
                showPhone={true}
                showAge={true}
                showLevel={true}
                variant="refresh"
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
