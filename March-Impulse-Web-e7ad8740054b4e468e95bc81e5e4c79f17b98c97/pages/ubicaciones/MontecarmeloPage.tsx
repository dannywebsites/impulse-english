import React, { useEffect } from 'react';
import { MapPin, Train, CheckCircle, Star, ArrowRight, Phone } from 'lucide-react';
import { GoogleMark } from '../../components/GoogleReviews';
import NearbyAreas from '../../components/NearbyAreas';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import LeadForm from '../../components/LeadForm';
import Breadcrumb from '../../components/Breadcrumb';
import { NAP } from '../../utils/napData';
import type { FAQItem } from '../../utils/schemaData';
import WhatsAppIcon from '../../components/icons/WhatsAppIcon';

// Separada de Las Tablas el 2026-08-08. Montecarmelo cuelga de la línea 9, que es
// la misma que pasa por Barrio del Pilar: se llega directo, sin transbordo. Ese
// Ese dato es suyo y solo suyo, y durante dos años estuvo repartido entre dos
// barrios en una página que hablaba de los dos a la vez.
//
// La página está escrita para familias: es el barrio con más peso en las búsquedas
// de guardería e infantil de toda la zona norte. Las Tablas lleva la voz de adultos
// y oficinas. Ninguna frase se comparte entre las dos a propósito.
const benefits = [
  { title: "La línea 9, sin cambiar de tren", desc: "Montecarmelo y Barrio del Pilar están en la misma línea, así que se baja directo. Desde la boca del metro quedan cuatro minutos andando hasta la puerta." },
  { title: "Inglés desde los 2 años", desc: "Metodología Great Little People, en grupos de 7. A esa edad no se estudia un idioma: se adquiere jugando, y por eso las clases son de 60 minutos." },
  { title: "Cambridge Young Learners desde primaria", desc: "El mismo centro que prepara Starters, Movers y Flyers prepara después el B2 First. No hay que cambiar de academia a los quince años." },
  { title: "Grupos de 7 en infantil y 10 en primaria", desc: "Números que decidimos nosotros. Un grupo de siete niños de tres años es otra cosa que un grupo de veinte." },
  { title: "Descuento por hermanos", desc: "Si traes a dos, la segunda cuota baja. Lo aplicamos sin que haya que pedirlo ni negociarlo." },
  { title: "Horario de tarde, después del colegio", desc: "Las franjas de infantil y primaria están puestas para que quepan entre la salida del cole y la cena, no para que la familia reorganice la semana." }
];

const courses = [
  { name: "Infantil (2-5 años)", method: "Great Little People · grupos de 7 · desde 64 €/mes", href: "/cursos-ingles/infantil/" },
  { name: "Primaria (6-12 años)", method: "Cambridge Young Learners · grupos de 10 · 83 €/mes", href: "/cursos-ingles/primaria/" },
  { name: "Secundaria (13-17 años)", method: "Cambridge B1, B2 y C1 + EBAU · grupos de 10 · desde 87 €/mes", href: "/cursos-ingles/secundaria/" },
  { name: "Adultos", method: "Todos los niveles · grupos de 8 · 94 €/mes", href: "/cursos-ingles/adultos/" },
  { name: "Clases particulares", method: "Uno a uno, presencial u online · 29 €/hora", href: "/cursos-ingles/particulares/" }
];

// Reseñas reales de Google, verbatim. Las tres venían ya de la página combinada y
// se quedan aquí: son de madres y padres, que es a quien habla esta página.
// Antonio Pérez Blázquez aparece además en la página de año escolar en Irlanda,
// duplicado deliberado y autorizado, documentado en ese archivo.
const localReviews = [
  {
    name: "Lorena Jiménez",
    role: "Madre/padre de alumno",
    text: "Fantástica academia donde realmente se aprende inglés. La atención de los profesores es increible y son todos encantadores. Especial gracias a Jp por la atención personalizada a mi hijo. Es una gran academia, no dudéis en apuntaros."
  },
  {
    name: "Débora Azevedo",
    role: "Madre/padre de alumno",
    text: "Muy contenta con las clases impartidas a mi hijo. Todo los profisionales son muy comprometidos, siempre muy amables y con una gran sonrisa. Hay que decir que esa academia ha sido la unica que mi hijo entró sin llorar y aceptó finalmente asistir, eso porque han tenido todo el cuidado en conectarse con él, además son muy divertidos y veo que me hijo esta aprendiendo."
  },
  {
    name: "Antonio Pérez Blázquez",
    role: "Madre/padre de alumno",
    text: "Danny se ha encargado de gestionar la estancia de mi hija con una familia durante tres semanas en un campamento de verano en Irlanda. Ha identificado a las familias, ha acompañados a los chavales, ha estado pendiente de ellos durante su estancia. Ni un sólo pero. Perfecto. Totalmente recomendable."
  }
];

export const localFaqs: FAQItem[] = [
  {
    question: "¿Cuánto se tarda desde Montecarmelo hasta la academia?",
    answer: "La línea 9 pasa por Montecarmelo y por Barrio del Pilar, así que se baja directo, sin transbordo, y desde la boca del metro hasta Av. de El Ferrol 22 quedan cuatro minutos a pie. En coche se baja por la Av. de la Ilustración sin cruzar el centro. No publicamos el tiempo del trayecto en metro porque depende de tu parada y de la frecuencia; el planificador del Consorcio lo calcula desde tu portal mejor que nosotros."
  },
  {
    question: "Busco guardería en inglés cerca de Montecarmelo. ¿Sois una guardería?",
    answer: "No, y es importante no confundirlo: no somos guardería ni escuela infantil, no tenemos horario de mañana completo, ni comedor, ni cuidamos niños mientras los padres trabajan. Lo que hacemos desde los 2 años son clases de inglés de 60 minutos, en grupos de 7, con la metodología Great Little People, desde 64 €/mes. Si lo que necesitas es una plaza de guardería, no somos la respuesta; si quieres que empiecen con el inglés a esa edad, sí."
  },
  {
    question: "¿Desde qué edad aceptáis niños?",
    answer: "Desde los 2 años. A esa edad el objetivo no es que aprendan reglas sino que el oído se acostumbre y que asocien el inglés con pasarlo bien: canciones, movimiento y rutinas repetidas. Es lo que hace la metodología Great Little People, y por eso el grupo es de siete y no de veinte."
  },
  {
    question: "¿Cuántos niños hay por clase?",
    answer: "Siete como máximo en Infantil y diez en Primaria y Secundaria. En adultos, ocho. No es una media que unos meses sube: es el tope que ponemos al abrir el grupo."
  },
  {
    question: "Mi hijo va a un colegio del PAU, cerca de casa. ¿Los horarios encajan con la salida?",
    answer: "Sí, las franjas de infantil y primaria están puestas por la tarde, después del colegio. Abrimos lunes y miércoles desde las 10:00, martes y jueves desde las 15:30, hasta las 21:30, y los viernes de 13:30 a 19:30."
  },
  {
    question: "¿Hay clase de prueba antes de apuntarse?",
    answer: "En Infantil sí, y dura una hora: a los tres años no se evalúa a un niño con una entrevista, se le mete en una clase y se ve cómo está. Para el resto de edades lo que hacemos es la prueba de nivel gratuita de 25 minutos con JP, el director de estudios."
  },
  {
    question: "¿Preparáis los exámenes de Cambridge para niños?",
    answer: "Sí, desde Pre-A1 Starters, Movers y Flyers en primaria hasta B1 Preliminary, B2 First y C1 Advanced después. Somos centro oficial de preparación, así que se preparan y se examinan en el mismo sitio y no hay que cruzar Madrid el día del examen."
  },
  {
    question: "Tengo dos hijos. ¿Hay descuento?",
    answer: "Sí, hay descuento por hermanos y también por pago trimestral. Primaria, por ejemplo, son 83 €/mes o 239 € el trimestre. Aparte se paga una sola vez la matrícula de 45 € y un libro de 40 € como máximo."
  },
  {
    question: "¿Cuánto cuestan las clases de inglés para niños cerca de Montecarmelo?",
    answer: "Infantil desde 64 €/mes, Primaria 83 €/mes y Secundaria desde 87 €/mes. Los adultos, 94 €/mes, y las particulares u online, 29 €/hora. Vivir en Montecarmelo no cambia la tarifa: los precios están publicados y son los mismos para todo el mundo."
  },
  {
    question: "¿Sois una academia de idiomas o solo dais inglés?",
    answer: "Solo inglés. No damos francés ni alemán ni ningún otro idioma, y es una decisión: los dos fundadores son profesores de inglés y todo el centro, desde el método de infantil hasta los exámenes oficiales, está montado alrededor de una sola lengua."
  }
];

export const locationMeta = {
  locationName: "Montecarmelo",
  pageUrl: "https://impulse-english.es/academia-ingles-montecarmelo"
};

export default function MontecarmeloPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Navbar />

      {/* Hero */}
      <section className="relative pt-28 pb-20 md:pt-36 md:pb-32 overflow-hidden">
        <div className="absolute inset-0">
          <img src="/images/academy/outside-academy.jpg" alt="Entrada de Impulse English Academy en Av. de El Ferrol 22, en la línea 9 desde Montecarmelo" className="w-full h-full object-cover" loading="eager" />
          <div className="absolute inset-0 bg-accent-blue/90"></div>
        </div>
        <div className="absolute inset-0 hero-grain opacity-[0.03]"></div>
        <div className="absolute -bottom-24 -left-24 w-80 h-80 rounded-full bg-white/[0.03]"></div>

        <div className="relative z-10 container-page">
          <Breadcrumb
            items={[
              { label: 'Ubicaciones', href: '/academias-ingles-madrid/por-barrios/' },
              { label: 'Montecarmelo' }
            ]}
            variant="light"
          />

          <div className="max-w-4xl mt-12 md:mt-16">
            <div className="flex items-center gap-4 mb-6 animate-hero-fade-up">
              <div className="w-8 h-px bg-white/40"></div>
              <MapPin className="w-4 h-4 text-brand-red" />
              <span className="font-display text-white/70 text-xs uppercase tracking-[0.2em]">
                Montecarmelo
              </span>
            </div>
            <h1 className="t-display text-white mb-6 animate-hero-fade-up animation-delay-100">
              Inglés cerca de Montecarmelo: línea 9 directa y cuatro minutos andando
            </h1>
            <div className="w-16 h-0.5 bg-brand-red mb-6 animate-hero-fade-up animation-delay-150"></div>
            <p className="font-display text-lg md:text-xl text-white/80 font-light mb-4 animate-hero-fade-up animation-delay-200">
              Desde los 2 años · grupos de 7 en infantil · centro oficial Cambridge
            </p>
            <div className="flex items-center gap-2 text-white/60 font-display text-sm mb-2 animate-hero-fade-up animation-delay-200">
              <Train className="w-4 h-4" />
              <span>Línea 9 directa hasta Barrio del Pilar, sin transbordo</span>
            </div>
            <p className="font-display text-white/50 text-sm mb-8 animate-hero-fade-up animation-delay-200">
              {NAP.fullAddress}
            </p>
            <div className="flex flex-wrap gap-3 mb-8 animate-hero-fade-up animation-delay-300">
              <span className="border border-white/15 px-4 py-2 rounded-full text-white/80 font-display text-sm">Desde 64 €/mes</span>
              <span className="border border-white/15 px-4 py-2 rounded-full text-white/80 font-display text-sm">5,0 · 183 reseñas</span>
              <span className="border border-white/15 px-4 py-2 rounded-full text-white/80 font-display text-sm">Descuento por hermanos</span>
            </div>
            <div className="flex flex-wrap gap-4 animate-hero-fade-up animation-delay-400">
              <a href="/prueba-de-nivel-ingles/" className="btn-primary btn-lg">
                Reservar prueba de nivel gratuita
                <ArrowRight className="w-5 h-5" />
              </a>
              <a href={`${NAP.whatsappUrl}?text=Hola,%20vivo%20en%20Montecarmelo%20y%20quiero%20información%20sobre%20las%20clases%20de%20niños`} target="_blank" rel="noopener noreferrer" className="btn-on-dark btn-lg">
                <WhatsAppIcon className="w-4 h-4" />
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Cápsula de respuesta */}
      <section className="section-tight px-6 bg-white">
        <div className="container-narrow">
          <p className="t-lede mb-4">
            Montecarmelo está en la línea 9, la misma que Barrio del Pilar, así que se llega sin cambiar de tren y quedan cuatro minutos andando hasta Av. de El Ferrol 22. En coche se baja por la Av. de la Ilustración. Damos inglés desde los 2 años en grupos de 7, desde 64 €/mes, con matrícula de 45 €.
          </p>
          <p className="t-body">
            El PAU de Montecarmelo se llenó de familias jóvenes a la vez, y eso se nota en lo que nos preguntan desde aquí: a qué edad se puede empezar, cuántos niños hay en el aula y si los horarios caben después del colegio. Esta página responde a eso. Si lo que buscas es inglés para ti y no para tus hijos, está igual de cubierto, pero al final.
          </p>
        </div>
      </section>

      {/* Por qué desde Montecarmelo */}
      <section className="section px-6 surface-alt">
        <div className="container-page">
          <div className="max-w-2xl mb-10">
            <span className="eyebrow mb-4">Por qué desde Montecarmelo</span>
            <h2 className="t-h2 text-zinc-900 mb-5">Lo que suelen preguntar las familias del PAU</h2>
            <div className="rule"></div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((item, i) => (
              <div key={i} className="card p-6">
                <CheckCircle className="w-6 h-6 text-emerald-600 mb-3" />
                <h3 className="font-bold text-zinc-900 mb-2">{item.title}</h3>
                <p className="t-small text-zinc-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Guardería y escuela infantil: responder la búsqueda sin adoptar la categoría */}
      <section className="section px-6 bg-white">
        <div className="container-narrow">
          <div className="max-w-2xl mb-10">
            <span className="eyebrow mb-4">Antes de nada</span>
            <h2 className="t-h2 text-zinc-900 mb-5">No somos una guardería, y conviene saberlo</h2>
            <div className="rule"></div>
          </div>
          <p className="t-body mb-4">
            Mucha gente llega aquí buscando guardería o escuela infantil en inglés en Montecarmelo, así que lo aclaramos antes de que pierdas el tiempo: no lo somos. No hay jornada de mañana, ni comedor, ni cuidamos niños mientras los padres trabajan. No tenemos autorización de centro de educación infantil y no la pedimos.
          </p>
          <p className="t-body">
            Lo que sí hacemos desde los 2 años son clases de inglés de 60 minutos, una o dos veces por semana, en grupos de siete, con Great Little People. Desde 64 €/mes con una clase semanal. Es un complemento a la escuela infantil a la que vaya tu hijo, no un sustituto, y si lo que necesitas es la plaza, la respuesta honesta es que busques en otro sitio.
          </p>
        </div>
      </section>

      {/* Cómo llegar */}
      <section className="section px-6 surface-alt">
        <div className="container-narrow">
          <div className="max-w-2xl mb-10">
            <span className="eyebrow mb-4">Cómo llegar</span>
            <h2 className="t-h2 text-zinc-900 mb-5">Tres formas, y la primera es la que usa casi todo el mundo</h2>
            <div className="rule"></div>
          </div>
          <div className="grid sm:grid-cols-3 gap-6">
            {[
              { n: 1, title: "Línea 9, directa", body: "Metro Montecarmelo, dirección sur, y se baja en Barrio del Pilar. Sin transbordo. Desde la salida quedan cuatro minutos andando hasta Av. de El Ferrol 22." },
              { n: 2, title: "En coche", body: "Por la Av. de la Ilustración hasta la Av. de El Ferrol, sin cruzar el centro. Hay aparcamiento en superficie en la avenida y en las calles contiguas." },
              { n: 3, title: "Autobús 147", body: "Para en Ginzo de Limia - Ferrol, en la propia calle de la academia. Útil si ya estás bajando por el eje de la Castellana." },
            ].map((step) => (
              <div key={step.n} className="card p-6">
                <p className="t-h3 text-accent-blue mb-2">{step.n}</p>
                <h3 className="font-bold text-zinc-900 mb-2">{step.title}</h3>
                <p className="t-small text-zinc-600">{step.body}</p>
              </div>
            ))}
          </div>
          <div className="mt-10 grid md:grid-cols-2 gap-8 items-start">
            <div>
              <NearbyAreas currentHref="/academia-ingles-montecarmelo/" variant="accent" />
            </div>
            <div className="bg-zinc-100 rounded-xl overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3035.0!2d-3.7084812!3d40.4743948!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd422909a0b6b11b%3A0xbe6ef3e2ba8bb87b!2sImpulse%20English%20Academy!5e0!3m2!1ses!2ses!4v1701964800000!5m2!1ses!2ses"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: '360px' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Ubicación de Impulse English Academy"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* Cursos */}
      <section className="section px-6 bg-white">
        <div className="container-narrow">
          <div className="max-w-2xl mb-10">
            <span className="eyebrow mb-4">Cursos</span>
            <h2 className="t-h2 text-zinc-900 mb-5">De los 2 años al C1, sin cambiar de academia</h2>
            <div className="rule"></div>
          </div>
          <div className="space-y-3">
            {courses.map((c, i) => (
              <a key={i} href={c.href} className="card p-5 flex items-center justify-between gap-4 hover:shadow-panel transition-shadow">
                <div>
                  <p className="font-bold text-zinc-900">{c.name}</p>
                  <p className="t-small text-zinc-600">{c.method}</p>
                </div>
                <ArrowRight className="w-5 h-5 text-accent-blue shrink-0" />
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Quién da la clase */}
      <section className="section px-6 surface-alt">
        <div className="container-page">
          <div className="max-w-2xl mb-10">
            <span className="eyebrow mb-4">Quién te la da</span>
            <h2 className="t-h2 text-zinc-900 mb-5">A quién le vas a dejar a tu hijo</h2>
            <div className="rule"></div>
          </div>
          <div className="grid md:grid-cols-[300px_1fr] gap-10 items-start">
            <div className="aspect-[3/4] overflow-hidden rounded-2xl shadow-panel">
              <img
                src="/images/academy/jp-director-estudios.webp"
                alt="JP, cofundador y director de estudios, responsable del programa de infantil de Impulse English Academy"
                className="w-full h-full object-cover"
                loading="lazy"
                width={900}
                height={1200}
              />
            </div>
            <div className="space-y-4 t-body">
              <p>Con un niño de tres años la pregunta no es qué método usáis. Es quién va a estar en el aula con él.</p>
              <p><strong className="text-zinc-900">JP</strong> es cofundador y director de estudios, con <strong className="text-zinc-900">más de 10 años</strong> dando clase y otros 10 de vida en Irlanda antes de eso. Dirige el programa de Infantil, y su especialidad, además de los exámenes de Cambridge, es precisamente la adquisición temprana del idioma.</p>
              <p>Hace personalmente las pruebas de nivel y contesta el WhatsApp del 604 910 611. Su nombre sale repetido en las 183 reseñas de Google, casi siempre escrito por madres y padres. La otra mitad es <strong className="text-zinc-900">Danny Fitzpatrick</strong>, cofundador, que lleva adultos e inglés de negocios.</p>
              <a href="/nuestro-equipo/" className="text-accent-blue font-semibold hover:underline inline-flex items-center gap-1">
                Conoce al equipo completo <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Caso real */}
      <section className="section px-6 bg-white">
        <div className="container-narrow">
          {/* CASE STUDY: Débora Azevedo */}
          <div className="max-w-2xl mb-10">
            <span className="eyebrow mb-4">Un caso real</span>
            <h2 className="t-h2 text-zinc-900 mb-5">El hijo de Débora Azevedo</h2>
            <div className="rule"></div>
          </div>
          <p className="t-body mb-6 max-w-3xl">
            El caso más útil que podemos contar a una familia de Montecarmelo no es un aprobado. Es un niño que entraba llorando en todas partes.
          </p>
          <div className="card p-8">
            <div className="grid sm:grid-cols-3 gap-6 mb-6 text-center">
              <div><p className="t-h3 text-accent-blue">Infantil</p><p className="t-small text-zinc-600">grupos de 7, clases de 60 minutos</p></div>
              <div><p className="t-h3 text-accent-blue">El problema</p><p className="t-small text-zinc-600">rechazaba todas las academias que probaron</p></div>
              <div><p className="t-h3 text-emerald-600">Hoy</p><p className="t-small text-zinc-600">entra sin llorar y está aprendiendo</p></div>
            </div>
            <p className="t-body mb-4">
              Lo cuenta ella en su reseña de Google, y merece leerse entero antes que cualquier cosa que escribamos nosotros: <em>"Hay que decir que esa academia ha sido la unica que mi hijo entró sin llorar y aceptó finalmente asistir, eso porque han tenido todo el cuidado en conectarse con él, además son muy divertidos y veo que me hijo esta aprendiendo."</em>
            </p>
            <p className="t-body mb-6">
              No hay truco pedagógico detrás. Hay un grupo de siete en vez de veinte, una hora en vez de dos y tiempo para ocuparse de un niño concreto hasta que decide quedarse. Es exactamente para lo que sirve el tamaño de grupo del que hablamos más arriba.
            </p>
            <a href="/testimonios/" className="text-accent-blue font-semibold hover:underline inline-flex items-center gap-1">
              Ver más casos y los vídeos <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      {/* Precios */}
      <section className="section px-6 surface-alt">
        <div className="container-narrow">
          <div className="max-w-2xl mb-10">
            <span className="eyebrow mb-4">Precios</span>
            <h2 className="t-h2 text-zinc-900 mb-5">La tarifa es pública, no a la carta</h2>
            <div className="rule"></div>
          </div>
          <p className="t-body mb-8">Está aquí escrita, no detrás de una llamada. Es la misma para Montecarmelo que para cualquier otro barrio, y no cambia a mitad de curso.</p>
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
          <p className="t-small text-zinc-500 mt-6">Al margen de la cuota se pagan, una sola vez, <strong>45 € de matrícula</strong> y un <strong>libro de 40 € como máximo</strong>. Dentro entran las clases semanales, los simulacros de Cambridge, el seguimiento personalizado y los recursos online, con descuento por pago trimestral y por hermanos. El examen oficial se abona aparte, a la tarifa de Cambridge.</p>
        </div>
      </section>

      {/* Reseñas */}
      <section className="section-lead px-6 bg-white">
        <div className="container-narrow">
          <div className="max-w-2xl mb-10">
            <span className="eyebrow mb-4">Opiniones</span>
            <h2 className="t-h2 text-zinc-900 mb-5">Lo que escriben las madres y los padres</h2>
            <div className="rule"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            {localReviews.map((review, idx) => (
              <div key={idx} className="card p-6">
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
                <p className="t-small text-zinc-500">{review.role}</p>
              </div>
            ))}
          </div>
          <div className="text-center">
            <a href={NAP.gbpUrl} target="_blank" rel="noopener noreferrer" className="btn-secondary">
              <Star className="w-5 h-5 fill-amber-400 text-amber-400" />
              Ver las 183 reseñas en Google
            </a>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="section px-6 surface-alt">
        <div className="container-narrow">
          <div className="max-w-2xl mb-10">
            <span className="eyebrow mb-4">Dudas frecuentes</span>
            <h2 className="t-h2 text-zinc-900 mb-5">Preguntas frecuentes sobre inglés para niños en Montecarmelo</h2>
            <div className="rule"></div>
          </div>
          <div className="space-y-6">
            {localFaqs.map((faq, index) => (
              <div key={index} className="card p-6">
                <h3 className="font-bold text-zinc-900 mb-3">{faq.question}</h3>
                <p className="t-body">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA final */}
      <section className="section-tight px-6 bg-accent-blue">
        <div className="container-narrow text-center">
          <p className="text-xl md:text-2xl text-white mb-8">
            ¿Academia de inglés cerca de Montecarmelo? Empieza por la prueba de nivel gratuita, o por la clase de prueba de una hora si tu hijo va a Infantil.
          </p>
          <a href="/prueba-de-nivel-ingles/" className="btn-on-dark btn-lg">
            Reservar la prueba de nivel
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </section>

      {/* Formulario */}
      <section className="section-lead px-6 bg-white">
        <div className="container-page">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="t-h2 text-zinc-900 mb-6">Reserva la plaza de tu hijo</h2>
              <div className="rule mb-6"></div>
              <p className="t-body mb-8">Dinos la edad y te decimos qué grupo tiene sitio y en qué franja. Si es Infantil, lo que reservamos es la clase de prueba de una hora.</p>
              <div className="flex flex-wrap gap-4">
                <a href={NAP.whatsappUrl} target="_blank" rel="noopener noreferrer" className="btn-primary">
                  <WhatsAppIcon className="w-5 h-5" />
                  WhatsApp {NAP.phone}
                </a>
                <a href={NAP.phoneTel} className="btn-secondary">
                  <Phone className="w-5 h-5" />
                  Llamar ahora
                </a>
              </div>
              <p className="t-small text-zinc-500 mt-6">{NAP.fullAddress} · Abrimos hasta las 21:30 de lunes a jueves.</p>
            </div>
            <div>
              <LeadForm
                title="Reserva tu prueba gratuita"
                subtitle="Te contactamos en menos de 24h"
                ctaText="Reservar ahora"
                source="montecarmelo"
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
        <div className="container-narrow">
          <p className="t-small text-zinc-500 text-center">
            <strong className="text-zinc-600">Cursos disponibles:</strong>{' '}
            <a href="/cursos-ingles/" className="text-accent-blue hover:underline">Todos los cursos</a>
            {' · '}
            <a href="/cursos-ingles/infantil/" className="text-accent-blue hover:underline">Inglés infantil (2-5 años)</a>
            {' · '}
            <a href="/cursos-ingles/primaria/" className="text-accent-blue hover:underline">Inglés para primaria (6-12)</a>
            {' · '}
            <a href="/cursos-ingles/secundaria/" className="text-accent-blue hover:underline">Inglés para secundaria y EBAU</a>
            {' · '}
            <a href="/cursos-ingles/adultos/" className="text-accent-blue hover:underline">Clases de inglés para adultos</a>
            {' · '}
            <a href="/cursos-ingles/particulares/" className="text-accent-blue hover:underline">Clases particulares de inglés</a>
            {' · '}
            <a href="/cursos-ingles/online/" className="text-accent-blue hover:underline">Clases de inglés online</a>
          </p>
        </div>
      </section>

      <Footer />
    </>
  );
}
