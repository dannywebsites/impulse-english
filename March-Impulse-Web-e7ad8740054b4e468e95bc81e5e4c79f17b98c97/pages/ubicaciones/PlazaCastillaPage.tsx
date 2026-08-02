import React, { useEffect } from 'react';
import { MapPin, Clock, Train, Bus, CheckCircle, Star, ArrowRight } from 'lucide-react';
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
  { title: "Línea 9 directa, sin transbordos", desc: "Plaza de Castilla y Barrio del Pilar están en la misma línea. Dos paradas, unos 12 minutos, y ya estás." },
  { title: "El intercambiador juega a tu favor", desc: "Si llegas en autobús interurbano o en la L1 o la L10, cambias a la 9 en el mismo vestíbulo. No sales a la calle." },
  { title: "Centro oficial Cambridge y Linguaskill", desc: "Te preparas y te examinas en el mismo sitio. No tienes que cruzar Madrid el día del examen." },
  { title: "100 alumnos aprobados en Cambridge", desc: "100% de aprobados en B2 First en 2024/25 y 2025/26. Casi todos empezaron desde un nivel muy básico." },
  { title: "Grupos de 7 a 10 alumnos", desc: "Máximo 10 en adultos. Suficientemente pequeño para que hables en todas las clases, no una vez al mes." },
  { title: "Desde 64 €/mes, matrícula 45 €", desc: "Precios publicados. Clase particular 29 €/hora. Libro hasta 40 €. Sin cuotas de mantenimiento ni permanencia." }
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
    name: "Mely Alferes",
    role: "Reseña verificada en Google",
    text: "Excelente experiencia en Impulse English Academy. Los profesores son muy profesionales, cercanos y hacen que las clases sean dinámicas y entretenidas. Me gustó mucho la metodología porque realmente te ayuda a ganar confianza y mejorar de forma natural. Las clases estan bien organizadas y se adaptan muy bien a las necesidades de cada alumno. Sin duda, recomendaría esta academia a cualquiera que quiera aprender o mejorar su inglés en un entorno profesional y motivador. Gracias a esta academia logré mi certificado!"
  },
  {
    name: "Brian Carey",
    role: "Reseña verificada en Google",
    text: "Una academia de barrio muy eficaz, buenos profesionales con una metodología dinámica. Preparación para exámenes oficiales."
  }
];

export const localFaqs: FAQItem[] = [
  {
    question: "¿Cuánto se tarda desde Plaza de Castilla a la academia?",
    answer: "Unos 12 minutos en metro y sin transbordos: Plaza de Castilla y Barrio del Pilar están las dos en la línea 9, con Ventilla en medio. Después, 500 metros a pie por Av. de El Ferrol hasta el número 22. En autobús, el 42 tarda unos 15 minutos."
  },
  {
    question: "Llego al intercambiador desde fuera de Madrid. ¿Me sirve?",
    answer: "Sí, y es de los accesos más cómodos que tenemos. Si vienes en autobús interurbano o en la línea 1 o la 10, cambias a la línea 9 dentro del propio intercambiador, sin salir a la calle. Dos paradas después estás en Barrio del Pilar."
  },
  {
    question: "¿Cuánto cuestan las clases de inglés cerca de Plaza de Castilla?",
    answer: "Infantil desde 64 €/mes, Primaria 83 €/mes, Secundaria desde 87 €/mes y Adultos 94 €/mes. Las clases particulares cuestan 29 €/hora, presenciales u online. La matrícula son 45 € y el libro un máximo de 40 €. No hay más costes."
  },
  {
    question: "¿La prueba de nivel es gratis y quién la hace?",
    answer: "Es gratuita y dura 25 minutos. La hace JP, el director de estudios, que también es quien contesta el WhatsApp: escribes al 604 910 611 y hablas directamente con él, no con un formulario. Sales con tu nivel MCER y el grupo recomendado."
  },
  {
    question: "Salgo tarde de trabajar por la zona. ¿Hay grupos de tarde?",
    answer: "Abrimos hasta las 21:30 de lunes a jueves, así que hay grupos que empiezan después de la jornada. Si tu horario cambia cada semana, la opción más flexible son las clases particulares a 29 €/hora, presenciales u online."
  },
  {
    question: "¿Cuántos alumnos hay por clase?",
    answer: "Entre 7 y 10, con un máximo de 10 en adultos. Tenemos dos aulas, London y Manchester, y ese aforo es deliberado: en un grupo de 10 hablas en todas las clases. En uno de 20, hablas una vez cada tres semanas."
  },
  {
    question: "¿Sois centro oficial de Cambridge o solo preparáis el examen?",
    answer: "Somos centro preparador oficial de Cambridge y centro oficial de Linguaskill. Te preparas y te examinas en el mismo sitio, sin cruzar Madrid el día del examen. Llevamos 100 alumnos aprobados y un 100% de aprobados en B2 First en 2024/25 y 2025/26."
  }
];

export const locationMeta = {locationName: "Plaza Castilla",
        pageUrl: "https://impulse-english.es/academia-ingles-plaza-castilla"};

export default function PlazaCastillaPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = 'Academia de Inglés cerca de Plaza Castilla Madrid | Impulse English Academy La Vaguada - Barrio del Pilar';
  }, []);

  return (
    <>
<Navbar />

      {/* Hero Section */}
      <section className="relative pt-28 pb-20 md:pt-36 md:pb-32 overflow-hidden">
        <div className="absolute inset-0">
          <img src="/images/academy/outside-academy.jpg" alt="Fachada de Impulse English Academy en Av. de El Ferrol 22, a dos paradas de Plaza de Castilla por la línea 9" className="w-full h-full object-cover" loading="eager" />
          <div className="absolute inset-0 bg-accent-blue/90"></div>
        </div>
        <div className="absolute inset-0 hero-grain opacity-[0.03]"></div>
        <div className="absolute -top-32 -right-32 w-[420px] h-[420px] rounded-full bg-brand-red/[0.05]"></div>
        <div className="absolute -bottom-24 -left-24 w-80 h-80 rounded-full bg-white/[0.03]"></div>

        <div className="relative z-10 container mx-auto px-6 md:px-12">
          <Breadcrumb
            items={[
              { label: 'Ubicaciones', href: '/academias-ingles-madrid/por-barrios/' },
              { label: 'Plaza Castilla' }
            ]}
            variant="light"
          />

          <div className="max-w-4xl mt-12 md:mt-16">
            <div className="flex items-center gap-4 mb-6 animate-hero-fade-up">
              <div className="w-8 h-px bg-white/40"></div>
              <MapPin className="w-4 h-4 text-brand-red" />
              <span className="font-display text-white/70 text-xs uppercase tracking-[0.2em]">
                Plaza Castilla
              </span>
            </div>
            <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl text-white tracking-tight leading-[1.1] mb-6 animate-hero-fade-up animation-delay-100">
              Academia de inglés a dos paradas de Plaza de Castilla
            </h1>
            <div className="w-16 h-0.5 bg-brand-red mb-6 animate-hero-fade-up animation-delay-150"></div>
            <p className="font-display text-lg md:text-xl text-white/80 font-light leading-relaxed mb-4 animate-hero-fade-up animation-delay-200">
              Centro oficial Cambridge en Barrio del Pilar, desde 64 €/mes
            </p>
            <div className="flex items-center gap-2 text-white/60 font-display text-sm mb-2 animate-hero-fade-up animation-delay-200">
              <Train className="w-4 h-4" />
              <span>Línea 9 directa · 2 paradas · unos 12 minutos</span>
            </div>
            <p className="font-display text-white/50 text-sm mb-8 animate-hero-fade-up animation-delay-200">
              {NAP.fullAddress} · <a href={NAP.phoneTel} className="underline hover:text-white/80">{NAP.phone}</a>
            </p>
            <div className="flex flex-wrap gap-3 mb-8 animate-hero-fade-up animation-delay-300">
              <span className="border border-white/15 px-4 py-2 rounded-full text-white/80 font-display text-sm">Centro oficial Cambridge</span>
              <span className="border border-white/15 px-4 py-2 rounded-full text-white/80 font-display text-sm">Línea 9 sin transbordos</span>
              <span className="border border-white/15 px-4 py-2 rounded-full text-white/80 font-display text-sm">5,0 · 180 reseñas</span>
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
                href={`${NAP.whatsappUrl}?text=Hola,%20trabajo%20en%20Plaza%20Castilla%20y%20me%20gustaría%20información%20sobre%20los%20cursos`}
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
            <span className="eyebrow mb-4">Plaza de Castilla</span>
            <h2 className="t-h2 text-zinc-900 mb-5">La misma línea, dos paradas antes</h2>
            <div className="rule"></div>
          </div>

          <p className="t-lede text-zinc-700 max-w-3xl mb-12">
            ¿Buscas academia de inglés cerca de Plaza de Castilla? Impulse English Academy está a{' '}
            <strong className="text-zinc-900 font-semibold">dos paradas en la línea 9</strong>, sin
            transbordos: Plaza de Castilla, Ventilla, Barrio del Pilar. Centro oficial Cambridge
            desde 2022, grupos de 7 a 10 alumnos y clases desde 64 €/mes. Reserva tu prueba de
            nivel gratuita con JP:{' '}
            <a href={NAP.phoneTel} className="text-accent-blue font-semibold hover:underline whitespace-nowrap">604 910 611</a>.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { n: 1, title: "Coges la línea 9", body: "Dirección Paco de Lucía. Si llegas en la 1, en la 10 o en autobús interurbano, cambias dentro del propio intercambiador." },
              { n: 2, title: "Dos paradas", body: "Ventilla y Barrio del Pilar. Unos 12 minutos en total, sin salir a la calle hasta que llegas." },
              { n: 3, title: "500 metros a pie", body: "Por Av. de El Ferrol hasta el número 22, junto a La Vaguada. En autobús, el 42 tarda unos 15 minutos." }
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
            Plaza de Castilla es sobre todo un punto de paso: mucha gente que estudia con nosotros
            no vive aquí, hace transbordo aquí. Por eso abrimos hasta las 21:30 de lunes a jueves,
            para que la clase entre de camino a casa y no en un viaje aparte.
          </p>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="section px-6 surface-alt">
        <div className="container mx-auto max-w-6xl">
          <h2 className="t-h2 text-zinc-900 mb-12 text-center">
            Por Qué Profesionales de Plaza Castilla Nos Eligen
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
            Cómo Llegar desde Plaza Castilla
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="card p-6">
              <div className="flex items-center gap-3 mb-4">
                <Train className="w-8 h-8 text-accent-blue" />
                <h3 className="font-bold text-zinc-900">En Metro</h3>
              </div>
              <p className="text-zinc-600 mb-3">
                Desde <strong>Metro Plaza Castilla (Líneas 1, 9, 10)</strong>:
              </p>
              <ul className="text-zinc-600 text-sm space-y-2">
                <li>• Toma la Línea 9 dirección Herrera Oria</li>
                <li>• Baja en metro Barrio del Pilar (2 paradas: Ventilla y Barrio del Pilar)</li>
                <li>• Camina 3 minutos hasta nuestra academia</li>
              </ul>
              <p className="text-accent-blue font-medium mt-4">Tiempo total: unos 15 minutos (12 en metro más 3 andando)</p>
            </div>
            <div className="card p-6">
              <div className="flex items-center gap-3 mb-4">
                <Bus className="w-8 h-8 text-emerald-600" />
                <h3 className="font-bold text-zinc-900">En Autobús</h3>
              </div>
              <p className="text-zinc-600 mb-3">
                Desde el Intercambiador de Plaza Castilla:
              </p>
              <ul className="text-zinc-600 text-sm space-y-2">
                <li>• Línea 49: hacia la zona norte, parada Fernández Almagro - Ferrol (~12 min)</li>
                <li>• Línea 42: hacia Peñagrande, parada Ginzo de Limia - Ferrol (~15 min)</li>
              </ul>
              <p className="text-emerald-600 font-medium mt-4">Tiempo total: de 12 a 15 minutos según la línea</p>
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
              Descubre por qué somos la mejor opción cerca de Plaza Castilla
            </p>
          </div>
          <LazyVideo
            videoId="Fdso-d9_F20"
            title="Impulse English Academy - Tu academia de inglés cerca de Plaza Castilla"
            className="shadow-panel"
          />
        </div>
      </section>

      {/* Courses Section */}
      <section className="section px-6 surface-alt">
        <div className="container mx-auto max-w-6xl">
          <h2 className="t-h2 text-zinc-900 mb-4 text-center">
            Cursos para Profesionales de Plaza Castilla
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

      {/* Inglés para niños cerca de Plaza Castilla */}
      <section className="section-tight px-6 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="t-h2 text-zinc-900 mb-6">
                Inglés para niños cerca de Plaza Castilla
              </h2>
              <p className="text-zinc-600 mb-6">
                Ofrecemos clases de inglés para niños de 2 a 12 años cerca de Plaza Castilla, con metodologías adaptadas a cada edad y horarios pensados para las familias de la zona.
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
                  <span className="text-zinc-700"><strong>Horarios adaptados</strong> a familias cerca de Plaza Castilla: tardes después del colegio</span>
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
                alt="Clases de inglés para niños cerca de Plaza Castilla La Vaguada Madrid"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Clases de inglés para adultos cerca de Plaza Castilla */}
      <section className="section-tight px-6 surface-alt">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1 overflow-hidden rounded-2xl shadow-lift">
              <img
                src="/images/academy/adult-one-to-one-classes.jpg"
                alt="Clases de inglés para adultos cerca de Plaza Castilla La Vaguada Madrid"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="t-h2 text-zinc-900 mb-6">
                Clases de inglés para adultos cerca de Plaza Castilla
              </h2>
              <p className="text-zinc-600 mb-6">
                Aprende inglés cerca de Plaza Castilla con clases diseñadas para profesionales y adultos. Todos los niveles, desde principiante hasta C2.
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
                  <span className="text-zinc-700"><strong>Grupos reducidos</strong> cerca de Plaza Castilla: máximo 7-10 alumnos</span>
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
            Certificaciones Cambridge para tu CV
          </h2>
          <p className="text-white/80 mb-8">
            Impulsa tu carrera con una certificación oficial Cambridge:
          </p>
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            <span className="px-4 py-2 rounded-full text-sm font-medium bg-white/20 text-white">Pre-A1 Starters</span>
            <span className="px-4 py-2 rounded-full text-sm font-medium bg-white/20 text-white">A1 Movers</span>
            <span className="px-4 py-2 rounded-full text-sm font-medium bg-white/20 text-white">A2 Flyers</span>
            <span className="px-4 py-2 rounded-full text-sm font-medium bg-white/20 text-white">A2 Key</span>
            <a href="/examenes-cambridge/b1-preliminary/" className="px-4 py-2 rounded-full text-sm font-medium bg-white/20 text-white hover:bg-white/30 transition-colors">B1 Preliminary</a>
            <a href="/examenes-cambridge/b2-first/" className="px-4 py-2 rounded-full text-sm font-medium bg-white text-accent-blue hover:bg-amber-400 hover:text-accent-blue-900 transition-colors">B2 First</a>
            <a href="/examenes-cambridge/c1-advanced/" className="px-4 py-2 rounded-full text-sm font-medium bg-white text-accent-blue hover:bg-amber-400 hover:text-accent-blue-900 transition-colors">C1 Advanced</a>
            <span className="px-4 py-2 rounded-full text-sm font-medium bg-white/20 text-white">C2 Proficiency</span>
          </div>
          <p className="text-white/90 font-medium mb-8">
            B2 First y C1 Advanced: Los más demandados por empresas.
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
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {localReviews.map((review, idx) => (
              <div key={idx} className="card p-6">
                <div className="flex gap-1 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <p className="text-zinc-700 mb-4 italic">"{review.text}"</p>
                <p className="text-zinc-900 font-semibold">{review.name}</p>
                <p className="text-zinc-500 text-sm">{review.role}</p>
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
              Ver las 180 reseñas en Google
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
                alt="JP, director de estudios de Impulse English Academy, la academia de inglés más cercana a Plaza de Castilla"
                className="w-full h-full object-cover"
                loading="lazy"
                width={900}
                height={1200}
              />
            </div>
            <div className="space-y-4 text-zinc-600 leading-relaxed">
              <p>Mucha gente llega a nosotros desde Plaza de Castilla haciendo transbordo, no porque viva en la zona. Vengas de donde vengas, la prueba de nivel te la hace la misma persona.</p>
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
            <h2 className="t-h2 text-zinc-900 mb-5">Daniel de la Peña</h2>
            <div className="rule"></div>
          </div>
          <p className="text-zinc-600 leading-relaxed mb-6 max-w-3xl">Daniel quería lo mismo que buscan muchos de los que pasan cada día por el intercambiador: que el inglés le abriera una puerta profesional concreta.</p>
          <div className="card p-8">
            <div className="grid sm:grid-cols-3 gap-6 mb-6 text-center">
              <div><p className="t-h3 text-accent-blue">18 meses</p><p className="t-small text-zinc-600">con nosotros</p></div>
              <div><p className="t-h3 text-accent-blue">Su objetivo</p><p className="t-small text-zinc-600">trabajar en un país de habla inglesa</p></div>
              <div><p className="t-h3 text-emerald-600">Conseguido</p><p className="t-small text-zinc-600">hoy es profesor y da inglés en primaria a jornada completa</p></div>
            </div>
            <p className="text-zinc-600 leading-relaxed mb-4">Daniel llegó con un objetivo concreto: acceder a oportunidades laborales en el extranjero, en países de habla inglesa. Estuvo con nosotros cerca de año y medio. En sus palabras, <em>"es algo que conseguí, así que desde ese punto de vista cumplió con mis expectativas"</em>.</p>
            <p className="text-zinc-600 leading-relaxed mb-6">Lo que más valoró no fue el temario: <em>"cuando acudimos a una academia es encontrar un trato personalizado y sobre todo profesionalidad y compromiso para con tu proceso de aprendizaje y tu situación de partida"</em>. Hoy es profesor cualificado y enseña inglés en primaria a jornada completa.</p>
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
          <p className="text-zinc-600 mb-8">Estos son los precios reales y no dependen de dónde vivas ni de cuántas paradas hagas. No hay cuota de mantenimiento, ni permanencia, ni coste de examen escondido.</p>
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
              { url: "/images/academy/outside-academy.jpg", alt: "Fachada exterior Impulse English Academy cerca Plaza Castilla La Vaguada Madrid" },
              { url: "/images/academy/classroom-facilities-main-classroom.jpg", alt: "Aula principal academia inglés cerca Plaza Castilla La Vaguada Madrid" },
              { url: "/images/academy/technology-based-classroom-photo.jpg", alt: "Aula tecnológica academia inglés cerca Plaza Castilla La Vaguada Madrid" },
              { url: "/images/academy/stairs.jpg", alt: "Interior academia dos plantas cerca Plaza Castilla La Vaguada Madrid" },
              { url: "/images/academy/infantil-classes.jpg", alt: "Clases inglés infantil cerca Plaza Castilla La Vaguada Madrid" },
              { url: "/images/academy/primary-classes-students-smiling.jpg", alt: "Estudiantes primaria felices cerca Plaza Castilla La Vaguada Madrid" },
              { url: "/images/academy/daniel-helping-secondary-school-students.jpg", alt: "Profesor Daniel ayudando estudiantes cerca Plaza Castilla La Vaguada Madrid" },
              { url: "/images/academy/secondary-classes-student-happy.jpg", alt: "Estudiante secundaria feliz cerca Plaza Castilla La Vaguada Madrid" },
              { url: "/images/academy/adult-one-to-one-classes.jpg", alt: "Clases particulares adultos cerca Plaza Castilla La Vaguada Madrid" },
              { url: "/images/academy/jp-with-students.jpg", alt: "Estudiantes certificados Cambridge cerca Plaza Castilla La Vaguada Madrid" },
              { url: "/images/academy/photos-of-facilities.jpg", alt: "Instalaciones academia inglés cerca Plaza Castilla La Vaguada Madrid" },
              { url: "/images/academy/cambridge-logo-edited.png", alt: "Centro Preparador Cambridge cerca Plaza Castilla La Vaguada Madrid" }
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
          <NearbyAreas currentHref="/academia-ingles-plaza-castilla/" variant="plain" />
        </div>
      </section>

      {/* Local FAQs Section */}
      <section className="section px-6 bg-white">
        <div className="container mx-auto max-w-4xl">
          <h2 className="t-h2 text-zinc-900 mb-12 text-center">
            Preguntas frecuentes sobre clases de inglés cerca de Plaza Castilla
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
            Cómo Llegar desde Plaza Castilla
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
              title="Cómo llegar a Impulse English Academy La Vaguada desde Plaza Castilla"
            ></iframe>
          </div>
          <div className="mt-4 text-center">
            <a href={NAP.gbpUrl} target="_blank" rel="noopener noreferrer" className="text-accent-blue font-semibold hover:underline">
              Ver en Google Maps →
            </a>
            <p className="text-zinc-500 text-sm mt-2">{NAP.name}, {NAP.fullAddress}</p>
          </div>
        </div>
      </section>

      {/* Final Local CTA */}
      <section className="section-tight px-6 bg-accent-blue">
        <div className="container mx-auto max-w-4xl text-center">
          <p className="text-xl md:text-2xl text-white mb-8">
            Si buscas una academia de inglés cerca de Plaza Castilla, solicita ahora tu prueba de nivel gratuita y empieza a aprender inglés cerca de casa.
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
            ¿Trabajas en Plaza Castilla?
          </h2>
          <p className="text-white/70 mb-8">
            Estamos a solo 15 minutos en metro. Aprovecha tu hora de comer o después del trabajo.
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
              <p className="text-zinc-900 font-bold text-lg mb-4">A dos paradas en la línea 9 desde Plaza de Castilla. Sin excusas.</p>
              <p className="text-zinc-600">{NAP.fullAddress}</p>
            </div>
            <div>
              <LeadForm
                title="Reserva Tu Prueba Gratuita"
                subtitle="Te contactamos en menos de 24h"
                ctaText="Reservar Ahora"
                source="plaza-castilla"
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
