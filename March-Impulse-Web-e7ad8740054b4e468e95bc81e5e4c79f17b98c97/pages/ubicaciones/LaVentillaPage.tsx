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
  { title: "Una parada de metro desde Ventilla", desc: "Ventilla → Barrio del Pilar, línea 9, sin transbordos. Unos 2 minutos de trayecto y 500 m a pie hasta la puerta." },
  { title: "Centro oficial Cambridge y Linguaskill", desc: "Te preparas y te examinas en el mismo sitio. No tienes que cruzar Madrid el día del examen." },
  { title: "100 alumnos aprobados en Cambridge", desc: "100% de aprobados en B2 First en 2024/25 y 2025/26. Casi todos empezaron desde un nivel muy básico." },
  { title: "Grupos de 7 a 10 alumnos", desc: "Máximo 10 en adultos. Suficientemente pequeño para que hables en todas las clases, no una vez al mes." },
  { title: "5,0 sobre 180 reseñas en Google", desc: "Las 180 son de 5 estrellas. Ninguna academia de la zona norte tiene esa combinación de nota y volumen." },
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
// Cada página de barrio usa dos distintas: ninguna reseña se repite en el sitio.
const localReviews = [
  {
    name: "Lucia Salmerón",
    role: "Alumna desde los 8 años",
    text: "Yo he tenido a dos de los profesores que están en la academia, JP y Dani desde que era pequeña y estoy encantada con ellos. Los tengo desde que tenía 8 años y ahora tengo 17 y mi evolución en inglés ha sido gracias a ellos totalmente. Preparan genial para los exámenes de Cambridge."
  },
  {
    name: "Gonzalo Tarascón",
    role: "Alumno adulto · certificado C1",
    text: "Gracias a Impulse logré obtener mi certificado C1 de inglés. Esto me ha abierto muchas puertas en el mercado laboral. El ambiente es familiar y cercano, y siempre me sentí apoyado en todo el proceso."
  }
];

export const localFaqs: FAQItem[] = [
  {
    question: "¿Cuánto se tarda desde La Ventilla hasta la academia?",
    answer: "Una parada de metro. Coges la línea 9 en Ventilla dirección Paco de Lucía y te bajas en Barrio del Pilar: son unos 2 minutos de trayecto y 500 metros a pie hasta Av. de El Ferrol, 22. Puerta a puerta, unos 12 minutos."
  },
  {
    question: "¿Cuánto cuestan las clases de inglés cerca de La Ventilla?",
    answer: "Infantil desde 64 €/mes, Primaria 83 €/mes, Secundaria desde 87 €/mes y Adultos 94 €/mes. Las clases particulares cuestan 29 €/hora, presenciales u online. La matrícula son 45 € y el libro un máximo de 40 €. No hay más costes."
  },
  {
    question: "¿La prueba de nivel es gratis y quién la hace?",
    answer: "Es gratuita y dura 25 minutos. La hace JP, el director de estudios, que también es quien contesta el WhatsApp: escribes al 604 910 611 y hablas directamente con él, no con un formulario. Salís con tu nivel MCER y el grupo recomendado."
  },
  {
    question: "Vivo en La Ventilla pero mi hijo estudia en un colegio de Tetuán. ¿Os da tiempo?",
    answer: "Sí. La Ventilla pertenece al distrito de Tetuán y muchas familias vienen desde colegios como el CP Juan Ramón Jiménez o el IES Jaime Vera. Abrimos hasta las 21:30 de lunes a jueves, así que hay margen de sobra después de clase."
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
    question: "¿Por qué elegiros y no otra academia de la zona norte?",
    answer: "Por tres cosas comprobables: 5,0 sobre 180 reseñas en Google, todas de 5 estrellas; precios publicados desde 64 €/mes sin letra pequeña; y que los dos fundadores, JP y Danny, dan clase en persona. Puedes verificar las tres antes de venir."
  }
];

export const locationMeta = {locationName: "La Ventilla",
        pageUrl: "https://impulse-english.es/academia-ingles-la-ventilla"};

export default function LaVentillaPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = 'Academia de Inglés cerca de La Ventilla | Impulse English Academy La Vaguada, Barrio del Pilar';
  }, []);

  return (
    <>
<Navbar />

      {/* Hero Section */}
      <section className="relative pt-28 pb-20 md:pt-36 md:pb-32 overflow-hidden">
        <div className="absolute inset-0">
          <img src="/images/academy/outside-academy.jpg" alt="Fachada de Impulse English Academy en Av. de El Ferrol 22, a una parada de metro de La Ventilla" className="w-full h-full object-cover" loading="eager" />
          <div className="absolute inset-0 bg-accent-blue/90"></div>
        </div>
        <div className="absolute inset-0 hero-grain opacity-[0.03]"></div>
        <div className="absolute -top-32 -right-32 w-[420px] h-[420px] rounded-full bg-brand-red/[0.05]"></div>
        <div className="absolute -bottom-24 -left-24 w-80 h-80 rounded-full bg-white/[0.03]"></div>

        <div className="relative z-10 container mx-auto px-6 md:px-12">
          <Breadcrumb
            items={[
              { label: 'Ubicaciones', href: '/academias-ingles-madrid/por-barrios/' },
              { label: 'La Ventilla' }
            ]}
            variant="light"
          />

          <div className="max-w-4xl mt-12 md:mt-16">
            <div className="flex items-center gap-4 mb-6 animate-hero-fade-up">
              <div className="w-8 h-px bg-white/40"></div>
              <MapPin className="w-4 h-4 text-brand-red" />
              <span className="font-display text-white/70 text-xs uppercase tracking-[0.2em]">
                La Ventilla
              </span>
            </div>
            <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl text-white tracking-tight leading-[1.1] mb-6 animate-hero-fade-up animation-delay-100">
              Academia de inglés a una parada de La Ventilla
            </h1>
            <div className="w-16 h-0.5 bg-brand-red mb-6 animate-hero-fade-up animation-delay-150"></div>
            <p className="font-display text-lg md:text-xl text-white/80 font-light leading-relaxed mb-4 animate-hero-fade-up animation-delay-200">
              Centro oficial Cambridge en Barrio del Pilar, desde 64 €/mes
            </p>
            <div className="flex items-center gap-2 text-white/60 font-display text-sm mb-2 animate-hero-fade-up animation-delay-200">
              <Train className="w-4 h-4" />
              <span>Línea 9: Ventilla → Barrio del Pilar, 1 parada · 500 m a pie</span>
            </div>
            <p className="font-display text-white/50 text-sm mb-8 animate-hero-fade-up animation-delay-200">
              {NAP.fullAddress} · <a href={NAP.phoneTel} className="underline hover:text-white/80">{NAP.phone}</a>
            </p>
            <div className="flex flex-wrap gap-3 mb-8 animate-hero-fade-up animation-delay-300">
              <span className="border border-white/15 px-4 py-2 rounded-full text-white/80 font-display text-sm">Centro oficial Cambridge</span>
              <span className="border border-white/15 px-4 py-2 rounded-full text-white/80 font-display text-sm">100 aprobados en Cambridge</span>
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
                href={`${NAP.whatsappUrl}?text=Hola,%20vivo%20en%20La%20Ventilla%20y%20me%20gustaría%20información%20sobre%20los%20cursos`}
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
          {/* Answer capsule: 53 palabras, autocontenida, con cifra, lugar y CTA.
              Va en párrafo normal, sin caja ni lista: es el bloque que extraen
              los buscadores generativos y tiene que poder leerse en voz alta. */}
          <p className="text-xl md:text-2xl text-zinc-800 leading-relaxed font-light">
            ¿Buscas academia de inglés cerca de La Ventilla? Impulse English Academy está{' '}
            <strong className="font-semibold text-zinc-900">a una parada en la línea 9</strong>: Ventilla a Barrio del Pilar, unos 2 minutos.
            Centro oficial Cambridge desde 2022, grupos de 7 a 10 alumnos y clases desde 64 €/mes.
            Reserva tu prueba de nivel gratuita con JP:{' '}
            <a href={NAP.phoneTel} className="text-accent-blue font-semibold hover:underline whitespace-nowrap">604 910 611</a>.
          </p>

          <hr className="my-10 border-zinc-200" />

          <div className="grid md:grid-cols-2 gap-10">
            {/* Ruta */}
            <div>
              <h3 className="font-display text-xs uppercase tracking-[0.18em] text-zinc-500 mb-4">
                La ruta, parada a parada
              </h3>
              <ol className="space-y-3 mb-5">
                {[
                  { stop: "Herrera Oria", note: null },
                  { stop: "Barrio del Pilar", note: "aquí te bajas" },
                  { stop: "Ventilla", note: "tu parada" }
                ].map((s, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className={`mt-1.5 w-2.5 h-2.5 rounded-full shrink-0 ${s.note ? 'bg-accent-blue' : 'bg-zinc-300'}`} />
                    <span className="text-zinc-700">
                      <strong className="font-semibold">{s.stop}</strong>
                      {s.note && <span className="text-accent-blue text-sm"> · {s.note}</span>}
                    </span>
                  </li>
                ))}
              </ol>
              <p className="text-zinc-600 leading-relaxed">
                Son estaciones vecinas en la <strong>línea 9</strong>. Sin transbordos y sin rodeos:
                bajas al andén en <strong>Calle Mártires de la Ventilla</strong>, una parada, y
                500 metros a pie por <strong>Av. de El Ferrol</strong> hasta el número 22.
              </p>
            </div>

            {/* Quién viene */}
            <div>
              <h3 className="font-display text-xs uppercase tracking-[0.18em] text-zinc-500 mb-4">
                Quién viene desde La Ventilla
              </h3>
              <p className="text-zinc-600 leading-relaxed mb-4">
                La Ventilla pertenece al distrito de <strong>Tetuán</strong>. Damos clase a familias
                de toda la zona, y estos alumnos llegan andando o en una parada de metro:
              </p>
              <ul className="space-y-2 mb-5">
                {["CP Juan Ramón Jiménez", "IES Jaime Vera", "CP Doctor Federico Rubio"].map((c, i) => (
                  <li key={i} className="flex items-center gap-2.5 text-zinc-700">
                    <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0" />
                    {c}
                  </li>
                ))}
              </ul>
              <p className="text-zinc-600 leading-relaxed">
                Abrimos hasta las <strong>21:30</strong> de lunes a jueves, precisamente para que
                entre después del colegio o del trabajo.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="section px-6 surface-alt">
        <div className="container mx-auto max-w-6xl">
          <h2 className="t-h2 text-zinc-900 mb-12 text-center">
            Por Qué Vecinos de La Ventilla Nos Eligen
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
            Cómo Llegar desde La Ventilla
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="card p-6">
              <div className="flex items-center gap-3 mb-4">
                <MapPin className="w-8 h-8 text-accent-blue" />
                <h3 className="font-bold text-zinc-900">Caminando</h3>
              </div>
              <p className="text-zinc-600 mb-3">
                Desde <strong>Calle Mártires de la Ventilla</strong>:
              </p>
              <ul className="text-zinc-600 text-sm space-y-2">
                <li>• Dirección norte hacia Barrio del Pilar</li>
                <li>• Cruzas hacia Av. de El Ferrol</li>
                <li>• Hasta el número 22, junto a La Vaguada</li>
              </ul>
              <p className="text-accent-blue font-medium mt-4">Unos 25 minutos andando</p>
            </div>
            <div className="card p-6">
              <div className="flex items-center gap-3 mb-4">
                <Train className="w-8 h-8 text-emerald-600" />
                <h3 className="font-bold text-zinc-900">En Metro</h3>
              </div>
              <p className="text-zinc-600 mb-3">
                Desde <strong>Metro Ventilla (línea 9)</strong>:
              </p>
              <ul className="text-zinc-600 text-sm space-y-2">
                <li>• Línea 9 dirección Paco de Lucía</li>
                <li>• Bajas en Barrio del Pilar: <strong>1 parada, unos 2 minutos</strong></li>
                <li>• 500 metros a pie por Av. de El Ferrol</li>
              </ul>
              <p className="text-emerald-600 font-medium mt-4">Puerta a puerta: unos 12 minutos</p>
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
              Descubre por qué somos la mejor opción cerca de La Ventilla
            </p>
          </div>
          <LazyVideo
            videoId="Fdso-d9_F20"
            title="Impulse English Academy - Tu academia de inglés cerca de La Ventilla"
            className="shadow-panel"
          />
        </div>
      </section>

      {/* Courses Section */}
      <section className="section px-6 surface-alt">
        <div className="container mx-auto max-w-6xl">
          <h2 className="t-h2 text-zinc-900 mb-4 text-center">
            Cursos Disponibles para Residentes de La Ventilla
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

      {/* Inglés para niños cerca de La Ventilla */}
      <section className="section-tight px-6 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="t-h2 text-zinc-900 mb-6">
                Inglés para niños cerca de La Ventilla
              </h2>
              <p className="text-zinc-600 mb-6">
                Ofrecemos clases de inglés para niños de 2 a 12 años cerca de La Ventilla, con metodologías adaptadas a cada edad y horarios pensados para las familias de la zona.
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
                  <span className="text-zinc-700"><strong>Horarios adaptados</strong> a familias cerca de La Ventilla: tardes después del colegio</span>
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
                alt="Clases de inglés para niños cerca de La Ventilla La Vaguada Madrid"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Clases de inglés para adultos cerca de La Ventilla */}
      <section className="section-tight px-6 surface-alt">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1 overflow-hidden rounded-2xl shadow-lift">
              <img
                src="/images/academy/adult-one-to-one-classes.jpg"
                alt="Clases de inglés para adultos cerca de La Ventilla La Vaguada Madrid"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="t-h2 text-zinc-900 mb-6">
                Clases de inglés para adultos cerca de La Ventilla
              </h2>
              <p className="text-zinc-600 mb-6">
                Aprende inglés cerca de casa con clases diseñadas para profesionales y adultos cerca de La Ventilla. Todos los niveles, desde principiante hasta C2.
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
            Lo que dicen nuestros estudiantes...
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
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
            <p className="text-zinc-600 mb-6">
              Son dos de las <strong>180 reseñas</strong> que tenemos en Google. Las 180 son de 5 estrellas: ni una sola de 4, 3, 2 o 1. Puedes leerlas todas antes de escribirnos.
            </p>
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
      <section className="section px-6 bg-white">
        <div className="container mx-auto max-w-5xl">
          <h2 className="t-h2 text-zinc-900 mb-8">
            Quién te va a dar clase
          </h2>
          <div className="grid md:grid-cols-[320px_1fr] gap-8 items-start">
            {/* Contenedor vertical: la foto es retrato, así que va en caja retrato. */}
            <div className="aspect-[3/4] overflow-hidden rounded-xl bg-zinc-100">
              <img
                src="/images/academy/jp-director-estudios.webp"
                alt="JP, director de estudios de Impulse English Academy, en el aula London de la academia de Barrio del Pilar"
                className="w-full h-full object-cover"
                loading="lazy"
                width={600}
                height={800}
              />
            </div>
            <div>
              <h3 className="font-bold text-xl text-zinc-900 mb-1">JP</h3>
              <p className="text-accent-blue font-medium mb-4">Director de estudios y cofundador</p>
              <p className="text-zinc-700 leading-relaxed mb-4">
                JP lleva <strong>más de 10 años enseñando inglés</strong> y vivió 10 años en Irlanda antes de instalarse en Madrid. Es quien dirige el día a día académico del centro, quien hace tu <strong>prueba de nivel gratuita de 25 minutos</strong> y quien contesta el WhatsApp: cuando escribes al 604 910 611, te responde él.
              </p>
              <p className="text-zinc-700 leading-relaxed mb-4">
                Está especializado en <strong>exámenes Cambridge</strong> y en adquisición temprana del idioma, y aparece por su nombre en buena parte de nuestras 180 reseñas. Junto a Danny Fitzpatrick, cofundador, dan clase en persona: no somos una franquicia con profesores rotatorios.
              </p>
              <a href="/nuestro-equipo/" className="text-accent-blue font-semibold hover:underline inline-flex items-center gap-1">
                Conoce al equipo completo <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Caso real: resultado concreto, con nombre, duracion y desenlace verificable. */}
      <section className="section px-6 surface-alt">
        <div className="container mx-auto max-w-4xl">
          <h2 className="t-h2 text-zinc-900 mb-8">
            Un caso real: Daniel de la Peña
          </h2>
          <div className="card p-8">
            <div className="grid sm:grid-cols-3 gap-6 mb-6 text-center">
              <div>
                <p className="text-3xl font-bold text-accent-blue">18 meses</p>
                <p className="text-zinc-600 text-sm">con nosotros</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-accent-blue">Su objetivo</p>
                <p className="text-zinc-600 text-sm">trabajar en un país de habla inglesa</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-emerald-600">Conseguido</p>
                <p className="text-zinc-600 text-sm">hoy es profesor y da inglés en primaria a jornada completa</p>
              </div>
            </div>
            <p className="text-zinc-700 leading-relaxed mb-4">
              Daniel llegó con un objetivo concreto: acceder a oportunidades laborales en el extranjero, en países de habla inglesa. Estuvo con nosotros cerca de año y medio. En sus palabras, <em>"es algo que conseguí, así que desde ese punto de vista cumplió con mis expectativas"</em>.
            </p>
            <p className="text-zinc-700 leading-relaxed mb-6">
              Lo que más valoró no fue el temario: <em>"cuando acudimos a una academia es encontrar un trato personalizado y sobre todo profesionalidad y compromiso para con tu proceso de aprendizaje y tu situación de partida"</em>. Hoy es profesor cualificado y enseña inglés en primaria a jornada completa.
            </p>
            <a
              href="/testimonios/"
              className="text-accent-blue font-semibold hover:underline inline-flex items-center gap-1"
            >
              Ver el vídeo de Daniel y otros casos <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      {/* Precios visibles en pagina, no solo en schema. */}
      <section className="section px-6 bg-white">
        <div className="container mx-auto max-w-4xl">
          <h2 className="t-h2 text-zinc-900 mb-4">
            Cuánto cuesta, sin letra pequeña
          </h2>
          <p className="text-zinc-600 mb-8">
            Estos son los precios reales. No hay cuota de mantenimiento, ni permanencia, ni coste de examen escondido.
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b-2 border-zinc-200">
                  <th className="py-3 pr-4 font-display text-sm uppercase tracking-wider text-zinc-500">Curso</th>
                  <th className="py-3 pr-4 font-display text-sm uppercase tracking-wider text-zinc-500">Edad</th>
                  <th className="py-3 font-display text-sm uppercase tracking-wider text-zinc-500">Precio</th>
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
          <p className="text-zinc-600 text-sm mt-6">
            Aparte: <strong>matrícula 45 €</strong> y <strong>libro hasta 40 €</strong>, una sola vez. La cuota incluye las clases semanales, los simulacros de examen Cambridge, el seguimiento personalizado y los recursos online. Hay descuento por pago trimestral y por familias con más de un hijo matriculado. Las tasas del examen oficial de Cambridge o Linguaskill van aparte y las fija Cambridge, no nosotros.
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
              { url: "/images/academy/outside-academy.jpg", alt: "Fachada exterior Impulse English Academy cerca La Ventilla La Vaguada Madrid" },
              { url: "/images/academy/classroom-facilities-main-classroom.jpg", alt: "Aula principal academia inglés cerca La Ventilla La Vaguada Madrid" },
              { url: "/images/academy/technology-based-classroom-photo.jpg", alt: "Aula tecnológica academia inglés cerca La Ventilla La Vaguada Madrid" },
              { url: "/images/academy/stairs.jpg", alt: "Interior academia dos plantas cerca La Ventilla La Vaguada Madrid" },
              { url: "/images/academy/infantil-classes.jpg", alt: "Clases inglés infantil cerca La Ventilla La Vaguada Madrid" },
              { url: "/images/academy/primary-classes-students-smiling.jpg", alt: "Estudiantes primaria felices cerca La Ventilla La Vaguada Madrid" },
              { url: "/images/academy/daniel-helping-secondary-school-students.jpg", alt: "Profesor Daniel ayudando estudiantes cerca La Ventilla La Vaguada Madrid" },
              { url: "/images/academy/secondary-classes-student-happy.jpg", alt: "Estudiante secundaria feliz cerca La Ventilla La Vaguada Madrid" },
              { url: "/images/academy/adult-one-to-one-classes.jpg", alt: "Clases particulares adultos cerca La Ventilla La Vaguada Madrid" },
              { url: "/images/academy/jp-with-students.jpg", alt: "Estudiantes certificados Cambridge cerca La Ventilla La Vaguada Madrid" },
              { url: "/images/academy/photos-of-facilities.jpg", alt: "Instalaciones academia inglés cerca La Ventilla La Vaguada Madrid" },
              { url: "/images/academy/cambridge-logo-edited.png", alt: "Centro Preparador Cambridge cerca La Ventilla La Vaguada Madrid" }
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
          <NearbyAreas currentHref="/academia-ingles-la-ventilla/" variant="plain" />
        </div>
      </section>

      {/* Local FAQs Section */}
      <section className="section px-6 bg-white">
        <div className="container mx-auto max-w-4xl">
          <h2 className="t-h2 text-zinc-900 mb-12 text-center">
            Preguntas frecuentes sobre clases de inglés cerca de La Ventilla
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
            Cómo Llegar desde La Ventilla
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
              title="Cómo llegar a Impulse English Academy La Vaguada desde La Ventilla"
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
            Si buscas una academia de inglés cerca de La Ventilla, solicita ahora tu prueba de nivel gratuita y empieza a aprender inglés cerca de casa.
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
            ¿Vives en La Ventilla?
          </h2>
          <p className="text-white/70 mb-8">
            Estamos a una parada de metro. Reserva tu prueba de nivel gratuita de 25 minutos con JP y sal sabiendo tu nivel exacto y qué grupo te toca.
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

      {/* CTA Section: mismo patron de conversion que Barrio del Pilar.
          3 pasos a la izquierda, formulario configurado a la derecha.
          El prop `source` alimenta GHL y va por barrio, no generico. */}
      <section className="section-lead px-6 surface-alt">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="t-h2 text-zinc-900 mb-6">
                Pide Tu Prueba de Nivel
              </h2>
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
              <p className="text-zinc-900 font-bold text-lg mb-4">
                A una parada de metro desde Ventilla. Sin excusas.
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
                source="la-ventilla"
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

</>
  );
}
