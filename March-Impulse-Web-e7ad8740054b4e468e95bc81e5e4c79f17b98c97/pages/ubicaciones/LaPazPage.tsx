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
  { title: "Tu mismo código postal: 28029", desc: "La Paz y la academia estamos en el mismo distrito, Fuencarral-El Pardo, y en el mismo código postal. No cruzas Madrid: cruzas el barrio." },
  { title: "Ginzo de Limia va directa a la puerta", desc: "La calle del CP Breogán desemboca en Av. de El Ferrol. Muchas familias vienen andando desde el colegio." },
  { title: "Centro oficial Cambridge y Linguaskill", desc: "Te preparas y te examinas en el mismo sitio. No tienes que cruzar Madrid el día del examen." },
  { title: "100 alumnos aprobados en Cambridge", desc: "100% de aprobados en B2 First en 2024/25 y 2025/26. Casi todos empezaron desde un nivel muy básico." },
  { title: "Horario que encaja con turnos", desc: "Abrimos hasta las 21:30 de lunes a jueves. Trabajamos con familias del entorno del Hospital La Paz que hacen turnos." },
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
    name: "Sandra Dos Anjos Costa",
    role: "Madre/padre de alumno",
    text: "Mis hijos van a la academia Impulse y están encantados. Los profesores son muy profesionales y hacen que los niños se sientan como en casa."
  },
  {
    name: "Marina Penerbosa",
    role: "Madre/padre de alumno",
    text: "Muy contenta con haber encontrado esta academia para mi hijo. Todo el staff es MUY amable, dedicado y profesional. Mi hijo ha progresado muchísimo en su comprensión y desempeño en ingles. La metodología que usan mezcla el juego con los contenidos académicos y eso hace que las clases sean divertidas y loe niños se animen a participar. Recomiendo sinceramente Impulse English Academy"
  }
];

export const localFaqs: FAQItem[] = [
  {
    question: "¿Cuánto se tarda desde La Paz hasta la academia?",
    answer: "Menos de lo que parece: compartimos distrito y código postal, el 28029. Desde el entorno del Hospital La Paz son unos 12 minutos en coche por Ginzo de Limia hasta Av. de El Ferrol, 22. En metro, línea 10 desde Begoña hasta Plaza de Castilla y línea 9 hasta Barrio del Pilar."
  },
  {
    question: "¿Cuánto cuestan las clases de inglés cerca de La Paz?",
    answer: "Infantil desde 64 €/mes, Primaria 83 €/mes, Secundaria desde 87 €/mes y Adultos 94 €/mes. Las clases particulares cuestan 29 €/hora, presenciales u online. La matrícula son 45 € y el libro un máximo de 40 €. No hay más costes."
  },
  {
    question: "¿La prueba de nivel es gratis y quién la hace?",
    answer: "Es gratuita y dura 25 minutos. La hace JP, el director de estudios, que también es quien contesta el WhatsApp: escribes al 604 910 611 y hablas directamente con él, no con un formulario. Sales con tu nivel MCER y el grupo recomendado."
  },
  {
    question: "Mi hijo va al Breogán o al Tagore. ¿Le da tiempo a llegar desde el colegio?",
    answer: "Sí, y es de los trayectos más cómodos que tenemos. El CP Breogán está en Calle Ginzo de Limia, que desemboca en Av. de El Ferrol. Muchas familias de La Paz vienen andando desde el propio colegio. Abrimos hasta las 21:30 de lunes a jueves."
  },
  {
    question: "Trabajo por turnos en el Hospital La Paz. ¿Hay horarios compatibles?",
    answer: "Sí. Tenemos grupos de mañana y de tarde: lunes y miércoles desde las 10:00, martes y jueves desde las 15:30, y hasta las 21:30. Si tu turno rota, la opción más flexible son las clases particulares a 29 €/hora, presenciales u online."
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

export const locationMeta = {locationName: "La Paz",
        pageUrl: "https://impulse-english.es/academia-ingles-la-paz"};

export default function LaPazPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
<Navbar />

      {/* Hero Section */}
      <section className="relative pt-28 pb-20 md:pt-36 md:pb-32 overflow-hidden">
        <div className="absolute inset-0">
          <img src="/images/academy/outside-academy.jpg" alt="Fachada de Impulse English Academy en Av. de El Ferrol 22, en el mismo distrito que el barrio de La Paz" className="w-full h-full object-cover" loading="eager" />
          <div className="absolute inset-0 bg-accent-blue/90"></div>
        </div>
        <div className="absolute inset-0 hero-grain opacity-[0.03]"></div>
        <div className="absolute -top-32 -right-32 w-[420px] h-[420px] rounded-full bg-brand-red/[0.05]"></div>
        <div className="absolute -bottom-24 -left-24 w-80 h-80 rounded-full bg-white/[0.03]"></div>

        <div className="relative z-10 container mx-auto px-6 md:px-12">
          <Breadcrumb
            items={[
              { label: 'Ubicaciones', href: '/academias-ingles-madrid/por-barrios/' },
              { label: 'La Paz' }
            ]}
            variant="light"
          />

          <div className="max-w-4xl mt-12 md:mt-16">
            <div className="flex items-center gap-4 mb-6 animate-hero-fade-up">
              <div className="w-8 h-px bg-white/40"></div>
              <MapPin className="w-4 h-4 text-brand-red" />
              <span className="font-display text-white/70 text-xs uppercase tracking-[0.2em]">
                La Paz
              </span>
            </div>
            <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl text-white tracking-tight leading-[1.1] mb-6 animate-hero-fade-up animation-delay-100">
              Academia de inglés a un paseo de La Paz
            </h1>
            <div className="w-16 h-0.5 bg-brand-red mb-6 animate-hero-fade-up animation-delay-150"></div>
            <p className="font-display text-lg md:text-xl text-white/80 font-light leading-relaxed mb-4 animate-hero-fade-up animation-delay-200">
              Centro oficial Cambridge en el 28029, desde 64 €/mes
            </p>
            <div className="flex items-center gap-2 text-white/60 font-display text-sm mb-2 animate-hero-fade-up animation-delay-200">
              <MapPin className="w-4 h-4" />
              <span>20 minutos caminando o 20 minutos en autobús (líneas 147, 42 y 83)</span>
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
                href={`${NAP.whatsappUrl}?text=Hola,%20vivo%20en%20La%20Paz%20y%20me%20gustaría%20información%20sobre%20los%20cursos`}
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
            <span className="eyebrow mb-4">La Paz</span>
            <h2 className="t-h2 text-zinc-900 mb-5">El mismo barrio, no el otro lado de Madrid</h2>
            <div className="rule"></div>
          </div>

          <p className="t-lede text-zinc-700 max-w-3xl mb-12">
            ¿Buscas academia de inglés cerca de La Paz? Impulse English Academy está en{' '}
            <strong className="text-zinc-900 font-semibold">tu mismo código postal, el 28029</strong>,
            y en tu mismo distrito, Fuencarral-El Pardo. Centro oficial Cambridge desde 2022,
            grupos de 7 a 10 alumnos y clases desde 64 €/mes. Reserva tu prueba de nivel gratuita
            con JP:{' '}
            <a href={NAP.phoneTel} className="text-accent-blue font-semibold hover:underline whitespace-nowrap">604 910 611</a>.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { n: 1, title: "Andando por Ginzo de Limia", body: "La calle del CP Breogán desemboca en Av. de El Ferrol. Es el trayecto que hacen muchas familias de La Paz al salir del colegio." },
              { n: 2, title: "En coche, unos 12 minutos", body: "Desde el entorno del Hospital Universitario La Paz, por Ginzo de Limia hasta el número 22. Aparcamiento libre en la zona." },
              { n: 3, title: "En metro, con un cambio", body: "Línea 10 desde Begoña hasta Plaza de Castilla, y allí línea 9 hasta Barrio del Pilar. Dos paradas más y 500 metros a pie." }
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
            Vienen alumnos del CP Breogán, del CP Rabindranath Tagore y del CP Lorenzo Luzuriaga.
            Y bastantes familias que trabajan por turnos en el Hospital La Paz: por eso abrimos
            de 10:00 a 21:30 lunes y miércoles, y hasta las 21:30 martes y jueves.
          </p>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="section px-6 bg-white">
        <div className="container mx-auto max-w-6xl">
          <h2 className="t-h2 text-zinc-900 mb-12 text-center">
            Por Qué Vecinos de La Paz Nos Eligen
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
            Cómo Llegar desde La Paz
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="card p-6">
              <div className="flex items-center gap-3 mb-4">
                <MapPin className="w-8 h-8 text-accent-blue" />
                <h3 className="font-bold text-zinc-900">Caminando</h3>
              </div>
              <p className="text-zinc-600 mb-3">
                Desde <strong>La Paz</strong> (junto al Hospital Universitario La Paz y Calle Hnos. García Noblejas):
              </p>
              <ul className="text-zinc-600 text-sm space-y-2">
                <li>• Dirección Barrio del Pilar por Parque Norte</li>
                <li>• Camina 500 metros hasta nuestra academia (28029)</li>
              </ul>
              <p className="text-accent-blue font-medium mt-4">Tiempo total: 20 minutos</p>
            </div>
            <div className="card p-6">
              <div className="flex items-center gap-3 mb-4">
                <Bus className="w-8 h-8 text-emerald-600" />
                <h3 className="font-bold text-zinc-900">En Autobús</h3>
              </div>
              <p className="text-zinc-600 mb-3">
                Líneas que conectan La Paz con Barrio del Pilar (28029):
              </p>
              <ul className="text-zinc-600 text-sm space-y-2">
                <li>• Líneas 147, 42 y 83: parada Ginzo de Limia - Ferrol</li>
                <li>• A 1 minuto andando de la academia</li>
                <li>• Metro Barrio del Pilar (Línea 9), a 3 minutos de la academia</li>
              </ul>
              <p className="text-emerald-600 font-medium mt-4">Tiempo total bus: 20 minutos</p>
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
              Descubre por qué somos la mejor opción cerca de La Paz
            </p>
          </div>
          <LazyVideo
            videoId="Fdso-d9_F20"
            title="Impulse English Academy - Tu academia de inglés cerca de La Paz"
            className="shadow-panel"
          />
        </div>
      </section>

      {/* Courses Section */}
      <section className="section px-6 surface-alt">
        <div className="container mx-auto max-w-6xl">
          <h2 className="t-h2 text-zinc-900 mb-4 text-center">
            Cursos Disponibles para Residentes de La Paz
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

      {/* Inglés para niños cerca de La Paz */}
      <section className="section-tight px-6 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="t-h2 text-zinc-900 mb-6">
                Inglés para niños cerca de La Paz
              </h2>
              <p className="text-zinc-600 mb-6">
                Ofrecemos clases de inglés para niños de 2 a 12 años cerca de La Paz, con metodologías adaptadas a cada edad y horarios pensados para las familias de la zona.
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
                  <span className="text-zinc-700"><strong>Horarios adaptados</strong> a familias de La Paz: tardes después del colegio</span>
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
                alt="Clases de inglés para niños cerca de La Paz La Vaguada Madrid"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Clases de inglés para adultos cerca de La Paz */}
      <section className="section-tight px-6 surface-alt">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1 overflow-hidden rounded-2xl shadow-lift">
              <img
                src="/images/academy/adult-one-to-one-classes.jpg"
                alt="Clases de inglés para adultos cerca de La Paz La Vaguada Madrid"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="t-h2 text-zinc-900 mb-6">
                Clases de inglés para adultos cerca de La Paz
              </h2>
              <p className="text-zinc-600 mb-6">
                Aprende inglés cerca de casa con clases diseñadas para profesionales y adultos de La Paz. Todos los niveles, desde principiante hasta C2.
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
            Lo Que Dicen Nuestros Alumnos cerca de La Paz
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {localReviews.map((review, idx) => (
              <div key={idx} className="card p-6">
                <div className="mb-4 flex items-center justify-between">
                  <div className="flex gap-1">
                  {[1,2,3,4,5].map(star => (
                    <Star key={star} className="w-5 h-5 text-amber-400 fill-amber-400" />
                  ))}
                </div>
                  <GoogleMark className="h-4 w-4 opacity-70" />
                </div>
                <p className="text-zinc-600 italic mb-4">"{review.text}"</p>
                <p className="font-bold text-zinc-900">{review.name}</p>
                <p className="text-zinc-500 text-sm">Google Reviews</p>
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
              Ver todas las rese\u00f1as en Google
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
                alt="JP, director de estudios de Impulse English Academy, la academia de inglés más cercana a La Paz"
                className="w-full h-full object-cover"
                loading="lazy"
                width={900}
                height={1200}
              />
            </div>
            <div className="space-y-4 text-zinc-600 leading-relaxed">
              <p>Desde La Paz vienen sobre todo familias del Breogán y del Tagore, y adultos que trabajan por turnos en el hospital. A todos les hace la prueba de nivel la misma persona.</p>
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
                aparece por su nombre en buena parte de nuestras 183 reseñas. Junto a Danny
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
            <h2 className="t-h2 text-zinc-900 mb-5">Josmary</h2>
            <div className="rule"></div>
          </div>
          <p className="text-zinc-600 leading-relaxed mb-6 max-w-3xl">Josmary va a clase por la noche, que es justo lo que necesita quien sale tarde del hospital o del trabajo y quiere seguir avanzando.</p>
          <div className="card p-8">
            <div className="grid sm:grid-cols-3 gap-6 mb-6 text-center">
              <div><p className="t-h3 text-accent-blue">Desde septiembre</p><p className="t-small text-zinc-600">en clases de noche</p></div>
              <div><p className="t-h3 text-accent-blue">Nivel B1</p><p className="t-small text-zinc-600">con JP</p></div>
              <div><p className="t-h3 text-emerald-600">Un plan claro</p><p className="t-small text-zinc-600">y la confianza para equivocarse</p></div>
            </div>
            <p className="text-zinc-600 leading-relaxed mb-4">Josmary entró, en sus palabras, <em>"con una situación un poco cacao"</em>: hablaba y entendía algo de inglés, pero tenía <em>"muchísimos vacíos de gramática, de vocabulario y de no saber en qué punto estaba"</em>. Va a clase por la noche, en el grupo de B1 con JP.</p>
            <p className="text-zinc-600 leading-relaxed mb-6">Lo que más valora es la creatividad de su profesor y <em>"la confianza de equivocarnos"</em>. Lo que se lleva: <em>"he conseguido sentirme con más confianza, tener un plan claro de qué es lo que necesito mejorar, cómo hacerlo, las herramientas para hacerlo, y el apoyo de JP para ese camino"</em>.</p>
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
          <p className="text-zinc-600 mb-8">Estos son los precios reales, y no cambian por vivir a cinco minutos o a media hora. No hay cuota de mantenimiento, ni permanencia, ni coste de examen escondido.</p>
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
              { url: "/images/academy/outside-academy.jpg", alt: "Fachada exterior Impulse English Academy cerca La Paz La Vaguada Madrid" },
              { url: "/images/academy/classroom-facilities-main-classroom.jpg", alt: "Aula principal academia inglés cerca La Paz La Vaguada Madrid" },
              { url: "/images/academy/technology-based-classroom-photo.jpg", alt: "Aula tecnológica academia inglés cerca La Paz La Vaguada Madrid" },
              { url: "/images/academy/stairs.jpg", alt: "Interior academia dos plantas cerca La Paz La Vaguada Madrid" },
              { url: "/images/academy/infantil-classes.jpg", alt: "Clases inglés infantil cerca La Paz La Vaguada Madrid" },
              { url: "/images/academy/primary-classes-students-smiling.jpg", alt: "Estudiantes primaria felices cerca La Paz La Vaguada Madrid" },
              { url: "/images/academy/daniel-helping-secondary-school-students.jpg", alt: "Profesor Daniel ayudando estudiantes cerca La Paz La Vaguada Madrid" },
              { url: "/images/academy/secondary-classes-student-happy.jpg", alt: "Estudiante secundaria feliz cerca La Paz La Vaguada Madrid" },
              { url: "/images/academy/adult-one-to-one-classes.jpg", alt: "Clases particulares adultos cerca La Paz La Vaguada Madrid" },
              { url: "/images/academy/jp-with-students.jpg", alt: "Estudiantes certificados Cambridge cerca La Paz La Vaguada Madrid" },
              { url: "/images/academy/photos-of-facilities.jpg", alt: "Instalaciones academia inglés cerca La Paz La Vaguada Madrid" },
              { url: "/images/academy/cambridge-logo-edited.png", alt: "Centro Preparador Cambridge cerca La Paz La Vaguada Madrid" }
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
      <section className="section px-6 surface-alt">
        <div className="container mx-auto max-w-4xl">
          <h2 className="t-h2 text-zinc-900 mb-12 text-center">
            Preguntas frecuentes sobre clases de inglés cerca de La Paz
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
            Cómo Llegar desde La Paz
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
              title="Cómo llegar a Impulse English Academy La Vaguada desde La Paz"
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
            Si buscas una academia de inglés cerca de La Paz, solicita ahora tu prueba de nivel gratuita y empieza a aprender inglés cerca de casa.
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

      {/* Nearby Locations */}
      <section className="section-tight px-6 surface-alt">
        <div className="container mx-auto max-w-4xl">
          <NearbyAreas currentHref="/academia-ingles-la-paz/" variant="plain" />
        </div>
      </section>

      {/* CTA */}
      <section className="section-lead px-6 surface-ink">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="t-h2 text-white mb-6">
            ¿Vives en La Paz?
          </h2>
          <p className="text-white/70 mb-8">
            Estamos a solo 20 minutos. Ven a conocernos y reserva tu prueba de nivel gratuita de 25 minutos.
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
              <p className="text-zinc-900 font-bold text-lg mb-4">En tu mismo código postal, el 28029. Sin excusas.</p>
              <p className="text-zinc-600">{NAP.fullAddress}</p>
            </div>
            <div>
              <LeadForm
                title="Reserva Tu Prueba Gratuita"
                subtitle="Te contactamos en menos de 24h"
                ctaText="Reservar Ahora"
                source="la-paz"
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
