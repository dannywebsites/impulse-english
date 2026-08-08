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

// Las Tablas y Montecarmelo tenían una sola página hasta 2026-08-08. La compartían
// mal: el título y el H1 hablaban de Montecarmelo, y "academia ingles las tablas"
// se quedaba en la página dos con 296 impresiones y cero clics. Esta página existe
// para responder a Las Tablas y a nadie más. Nada de lo que hay aquí describe
// Montecarmelo, y es deliberado: si las dos vuelven a contar la misma historia,
// el auditor las mide como duplicados y las dos pierden.
const benefits = [
  { title: "Abrimos hasta las 21:30", desc: "De lunes a jueves. Si sales de la oficina a las siete, todavía llegas a una clase entera sin salir corriendo." },
  { title: "Certificado Linguaskill en 48 horas", desc: "Somos centro oficial. Cuando en el trabajo te piden acreditar el nivel para ayer, es la vía rápida: examen y certificado de Cambridge en dos días." },
  { title: "Adultos en grupos de 8", desc: "Ocho como tope, no como media. En una clase de ocho hablas todas las semanas; en una de veinte, hablas una vez al mes." },
  { title: "La tarifa está publicada", desc: "94 €/mes en adultos, 29 €/hora en particulares. El precio está en esta misma página, no detrás de un formulario." },
  { title: "Online al mismo precio", desc: "29 €/hora, los mismos dos profesores y el mismo temario. Las semanas de viajes o de entregas no te cuestan el curso." },
  { title: "Sin permanencia", desc: "Matrícula de 45 €, libro de 40 € como máximo y nada más. Ni cuota de mantenimiento ni penalización por irte." }
];

const courses = [
  { name: "Adultos", method: "Todos los niveles · grupos de 8 · Cambridge y Linguaskill · 94 €/mes", href: "/cursos-ingles/adultos/" },
  { name: "Clases particulares", method: "Uno a uno, presencial u online · 29 €/hora", href: "/cursos-ingles/particulares/" },
  { name: "Secundaria (13-17 años)", method: "EBAU y Cambridge B1, B2 y C1 · grupos de 10 · desde 87 €/mes", href: "/cursos-ingles/secundaria/" },
  { name: "Primaria (6-12 años)", method: "Cambridge Young Learners · grupos de 10 · 83 €/mes", href: "/cursos-ingles/primaria/" },
  { name: "Infantil (2-5 años)", method: "Great Little People · grupos de 7 · desde 64 €/mes", href: "/cursos-ingles/infantil/" }
];

// Reseñas reales de Google, verbatim. Asignación en GEO-Content-Project/review-allocation.md.
// Ninguna de estas tres aparece en otra página del sitio.
const localReviews = [
  {
    name: "Paloma Aranda",
    role: "Alumno/a · preparación C1",
    text: "Advanced aprobado a la primera gracias a Dani y JP.  Trato y metodología inmejorables. 100% recomendable."
  },
  {
    name: "Stefany Jiménez Espitia",
    role: "Curso intensivo",
    text: "Es genial, profesores amables y clases divertidas,e estado en el curso intensivo de verano y valió total la pena. (Además J.P hace las clases super fácil de entender 🫂✨)"
  },
  {
    name: "Daniela Janet Luna Rodriguez",
    role: "Reseña verificada en Google",
    text: "Es una buena academia para aprender y mejorar tu inglés."
  }
];

export const localFaqs: FAQItem[] = [
  {
    question: "¿Cómo llego en metro desde Las Tablas hasta la academia?",
    answer: "Por la línea 10 hasta Plaza de Castilla y allí cambio a la línea 9 hasta Barrio del Pilar, más cuatro minutos andando hasta Av. de El Ferrol 22. Es un transbordo, no un trayecto directo. No publicamos los minutos exactos porque dependen de tu punto de partida dentro del barrio y de la espera en Plaza de Castilla: el planificador del Consorcio te lo calcula desde tu portal mejor que nosotros."
  },
  {
    question: "¿Se llega mejor en coche desde Las Tablas?",
    answer: "Para mucha gente sí. Se baja por la Av. de la Ilustración hasta la Av. de El Ferrol, sin cruzar el centro, y hay aparcamiento en superficie en la propia avenida y en las calles de alrededor. Es el trayecto que más usan los alumnos adultos que vienen después del trabajo."
  },
  {
    question: "¿Cuánto cuestan las clases de inglés cerca de Las Tablas?",
    answer: "Adultos en grupo, 94 €/mes. Particulares y online, 29 €/hora. Secundaria desde 87 €/mes, Primaria 83 €/mes e Infantil desde 64 €/mes. Aparte se paga una sola vez la matrícula de 45 € y un libro de 40 € como máximo. Vivir en Las Tablas no cambia ninguna de esas cifras."
  },
  {
    question: "Trabajo por la zona y salgo tarde. ¿Hay horarios que me sirvan?",
    answer: "Abrimos hasta las 21:30 de lunes a jueves, así que la última franja entra de sobra saliendo a las siete. Lunes y miércoles empezamos a las 10:00 y martes y jueves a las 15:30, por si tienes turnos o jornada intensiva. Los viernes, de 13:30 a 19:30."
  },
  {
    question: "Mi empresa me pide acreditar el nivel de inglés. ¿Qué hago?",
    answer: "Linguaskill. Somos centro oficial, el examen se puede hacer presencial o desde casa con supervisión remota, y el certificado de Cambridge llega en 48 horas. Es lo más rápido que existe cuando te lo piden con una fecha encima."
  },
  {
    question: "¿Cuántos alumnos hay por clase en adultos?",
    answer: "Ocho como máximo. Tenemos dos aulas, London y Manchester, y el aforo es una decisión que tomamos, no lo que salga. En Secundaria y Primaria el tope es 10 y en Infantil, 7."
  },
  {
    question: "Si no puedo venir algunas semanas, ¿pierdo el curso?",
    answer: "No. Las clases particulares online cuestan 29 €/hora, exactamente lo mismo que presenciales, con los mismos profesores y el mismo temario. Es la salida habitual para quien viaja por trabajo o tiene semanas imposibles."
  },
  {
    question: "Busco escuela infantil en inglés cerca de Las Tablas. ¿Sois eso?",
    answer: "No exactamente, y conviene decirlo claro: no somos escuela infantil ni guardería, no damos horario de mañana completo ni servicio de comedor. Lo que hacemos con niños de 2 a 5 años son clases de inglés de 60 minutos en grupos de 7 con la metodología Great Little People, desde 64 €/mes. Si lo que buscas es una escuela infantil bilingüe con jornada, no somos nosotros; si buscas que empiecen inglés en serio a esa edad, sí."
  },
  {
    question: "¿La prueba de nivel es gratis?",
    answer: "Sí, 25 minutos y sin compromiso, presencial o en línea, y la hace JP, el director de estudios. En Infantil funciona distinto: ahí mantenemos una clase de prueba de una hora, porque a los tres años no se evalúa a un niño con una entrevista."
  },
  {
    question: "¿Sois una academia de idiomas o solo de inglés?",
    answer: "Solo inglés, y a propósito. No damos francés, alemán ni chino: los dos fundadores son profesores de inglés y todo el centro, incluidos los exámenes oficiales de Cambridge y Linguaskill, está montado alrededor de un idioma."
  }
];

export const locationMeta = {
  locationName: "Las Tablas",
  pageUrl: "https://impulse-english.es/academia-ingles-las-tablas"
};

export default function LasTablasPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Navbar />

      {/* Hero */}
      <section className="relative pt-28 pb-20 md:pt-36 md:pb-32 overflow-hidden">
        <div className="absolute inset-0">
          <img src="/images/academy/outside-academy.jpg" alt="Fachada de Impulse English Academy en Av. de El Ferrol 22, la academia de inglés a la que vienen los alumnos de Las Tablas" className="w-full h-full object-cover" loading="eager" />
          <div className="absolute inset-0 bg-accent-blue/90"></div>
        </div>
        <div className="absolute inset-0 hero-grain opacity-[0.03]"></div>
        <div className="absolute -top-32 -right-32 w-[420px] h-[420px] rounded-full bg-brand-red/[0.05]"></div>

        <div className="relative z-10 container-page">
          <Breadcrumb
            items={[
              { label: 'Ubicaciones', href: '/academias-ingles-madrid/por-barrios/' },
              { label: 'Las Tablas' }
            ]}
            variant="light"
          />

          <div className="max-w-4xl mt-12 md:mt-16">
            <div className="flex items-center gap-4 mb-6 animate-hero-fade-up">
              <div className="w-8 h-px bg-white/40"></div>
              <MapPin className="w-4 h-4 text-brand-red" />
              <span className="font-display text-white/70 text-xs uppercase tracking-[0.2em]">
                Las Tablas
              </span>
            </div>
            <h1 className="t-display text-white mb-6 animate-hero-fade-up animation-delay-100">
              Academia de inglés e idiomas en Las Tablas, desde 64 €/mes
            </h1>
            <div className="w-16 h-0.5 bg-brand-red mb-6 animate-hero-fade-up animation-delay-150"></div>
            <p className="font-display text-lg md:text-xl text-white/80 font-light mb-4 animate-hero-fade-up animation-delay-200">
              Centro oficial Cambridge y Linguaskill · adultos en grupos de 8 · abierto hasta las 21:30
            </p>
            <div className="flex items-center gap-2 text-white/60 font-display text-sm mb-2 animate-hero-fade-up animation-delay-200">
              <Train className="w-4 h-4" />
              <span>Línea 10 hasta Plaza de Castilla y cambio a la línea 9</span>
            </div>
            <p className="font-display text-white/50 text-sm mb-8 animate-hero-fade-up animation-delay-200">
              {NAP.fullAddress}
            </p>
            <div className="flex flex-wrap gap-3 mb-8 animate-hero-fade-up animation-delay-300">
              <span className="border border-white/15 px-4 py-2 rounded-full text-white/80 font-display text-sm">Certificado Linguaskill en 48 h</span>
              <span className="border border-white/15 px-4 py-2 rounded-full text-white/80 font-display text-sm">5,0 · 183 reseñas</span>
              <span className="border border-white/15 px-4 py-2 rounded-full text-white/80 font-display text-sm">Sin permanencia</span>
            </div>
            <div className="flex flex-wrap gap-4 animate-hero-fade-up animation-delay-400">
              <a href="/prueba-de-nivel-ingles/" className="btn-primary btn-lg">
                Reservar prueba de nivel gratuita
                <ArrowRight className="w-5 h-5" />
              </a>
              <a href={`${NAP.whatsappUrl}?text=Hola,%20vivo%20en%20Las%20Tablas%20y%20quiero%20información%20sobre%20las%20clases%20de%20adultos`} target="_blank" rel="noopener noreferrer" className="btn-on-dark btn-lg">
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
            Damos clase a gente de Las Tablas en Av. de El Ferrol 22, en Barrio del Pilar. En metro es la línea 10 hasta Plaza de Castilla y cambio a la línea 9; en coche se baja por la Av. de la Ilustración. Adultos en grupos de 8 por 94 €/mes, particulares y online a 29 €/hora, matrícula de 45 € y una prueba de nivel gratuita de 25 minutos.
          </p>
          <p className="t-body">
            Las Tablas es un barrio de oficinas y de gente que trabaja: por eso esta página está escrita para adultos, y no para familias con niños en el colegio. Aquí lo que suele apretar es el horario y la fecha en la que alguien te pide un certificado, no la ruta al colegio. Abrimos hasta las 21:30 de lunes a jueves y el certificado de Linguaskill sale en 48 horas.
          </p>
        </div>
      </section>

      {/* Por qué desde Las Tablas */}
      <section className="section px-6 surface-alt">
        <div className="container-page">
          <div className="max-w-2xl mb-10">
            <span className="eyebrow mb-4">Por qué desde Las Tablas</span>
            <h2 className="t-h2 text-zinc-900 mb-5">Pensado para quien sale de trabajar</h2>
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

      {/* Cómo llegar */}
      <section className="section px-6 bg-white">
        <div className="container-narrow">
          <div className="max-w-2xl mb-10">
            <span className="eyebrow mb-4">Cómo llegar</span>
            <h2 className="t-h2 text-zinc-900 mb-5">Desde Las Tablas hay transbordo, y lo decimos</h2>
            <div className="rule"></div>
          </div>
          <p className="t-body mb-8">
            Las Tablas no cuelga de la línea 9, así que no hay trayecto directo hasta Barrio del Pilar. Preferimos decirlo antes que vendas un "a cinco minutos" que no existe. Estas son las tres formas reales.
          </p>
          <div className="grid sm:grid-cols-3 gap-6">
            {[
              { n: 1, title: "Línea 10 y transbordo", body: "Desde Las Tablas, la 10 hasta Plaza de Castilla y allí cambio a la línea 9 hasta Barrio del Pilar. Tres minutos andando desde la salida del metro." },
              { n: 2, title: "En coche por la Ilustración", body: "Se baja por la Av. de la Ilustración hasta la Av. de El Ferrol sin cruzar el centro. Hay aparcamiento en superficie en la propia avenida." },
              { n: 3, title: "El metro ligero, si vienes de más arriba", body: "El ML1 termina en Las Tablas y enlaza allí con la línea 10, que es la ruta que usan también desde Sanchinarro." },
            ].map((step) => (
              <div key={step.n} className="card p-6">
                <p className="t-h3 text-accent-blue mb-2">{step.n}</p>
                <h3 className="font-bold text-zinc-900 mb-2">{step.title}</h3>
                <p className="t-small text-zinc-600">{step.body}</p>
              </div>
            ))}
          </div>
          <p className="t-small text-zinc-500 mt-6">
            No publicamos minutos para el trayecto en metro. Con un transbordo de por medio, el tiempo depende de dónde salgas dentro de Las Tablas y de lo que esperes en Plaza de Castilla, y una cifra inventada en una página no le sirve a nadie que tenga que llegar a las siete y media.
          </p>
          <div className="mt-10 grid md:grid-cols-2 gap-8 items-start">
            <div>
              <NearbyAreas currentHref="/academia-ingles-las-tablas/" variant="accent" />
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
      <section className="section px-6 surface-alt">
        <div className="container-narrow">
          <div className="max-w-2xl mb-10">
            <span className="eyebrow mb-4">Cursos</span>
            <h2 className="t-h2 text-zinc-900 mb-5">Empezando por los adultos, que es a quien atendemos más desde aquí</h2>
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
      <section className="section px-6 bg-white">
        <div className="container-page">
          <div className="max-w-2xl mb-10">
            <span className="eyebrow mb-4">Quién te la da</span>
            <h2 className="t-h2 text-zinc-900 mb-5">Si vas a hacer un transbordo, merece la pena saber a quién vienes a ver</h2>
            <div className="rule"></div>
          </div>
          <div className="grid md:grid-cols-[300px_1fr] gap-10 items-start">
            <div className="aspect-[3/4] overflow-hidden rounded-2xl shadow-panel">
              <img
                src="/images/academy/jp-director-estudios.webp"
                alt="JP, cofundador y director de estudios de Impulse English Academy, que hace personalmente la prueba de nivel"
                className="w-full h-full object-cover"
                loading="lazy"
                width={900}
                height={1200}
              />
            </div>
            <div className="space-y-4 t-body">
              <p>Cambiar de línea en Plaza de Castilla dos veces por semana solo compensa si al llegar hay alguien que sabe lo que hace. Aquí no hay plantilla rotatoria: hay dos personas, y las dos dan clase.</p>
              <p><strong className="text-zinc-900">JP</strong> es cofundador y director de estudios, con <strong className="text-zinc-900">más de 10 años</strong> enseñando inglés y otros 10 viviendo en Irlanda antes de eso. Lleva la parte académica, hace personalmente la prueba de nivel de 25 minutos y contesta el WhatsApp del 604 910 611: escribes y te responde él, no un comercial.</p>
              <p>La otra mitad es <strong className="text-zinc-900">Danny Fitzpatrick</strong>, cofundador, licenciado en Marketing por ESIC University y especializado en inglés de negocios y adultos. Si vienes por el inglés que necesitas en el trabajo, es con quien vas a acabar hablando.</p>
              <a href="/nuestro-equipo/" className="text-accent-blue font-semibold hover:underline inline-flex items-center gap-1">
                Conoce al equipo completo <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Caso real */}
      <section className="section px-6 surface-alt">
        <div className="container-narrow">
          <div className="max-w-2xl mb-10">
            <span className="eyebrow mb-4">Un caso real</span>
            <h2 className="t-h2 text-zinc-900 mb-5">Sergio</h2>
            <div className="rule"></div>
          </div>
          <p className="t-body mb-6 max-w-3xl">Si el inglés lo necesitas para trabajar y no para aprobar, este es el caso más concreto que tenemos documentado.</p>
          <div className="card p-8">
            <div className="grid sm:grid-cols-3 gap-6 mb-6 text-center">
              <div><p className="t-h3 text-accent-blue">30 años</p><p className="t-small text-zinc-600">al empezar</p></div>
              <div><p className="t-h3 text-accent-blue">4 entrevistas</p><p className="t-small text-zinc-600">en sus primeros meses en Dublín</p></div>
              <div><p className="t-h3 text-emerald-600">2 años después</p><p className="t-small text-zinc-600">analista de pólizas en una empresa irlandesa</p></div>
            </div>
            <p className="t-body mb-4">Sergio tenía el inglés de cualquiera que ha pasado por el sistema educativo español sin usarlo nunca en serio: <em>"siempre he tenido una gran carencia de confianza para hablar en inglés"</em>. No era gramática. Era no atreverse.</p>
            <p className="t-body mb-4">Y le estaba costando una decisión: <em>"la barrera del idioma siempre me había impedido dar este paso"</em>. Sobre cómo se desbloqueó: <em>"tanto Dani como JP han sido un gran apoyo para mí, guiándome y asesorándome en cada momento. Gracias a ellos, he podido ganar la confianza que realmente necesitaba"</em>.</p>
            <p className="t-body mb-6">Hoy vive en Dublín y trabaja de analista de pólizas. Lo resume así: <em>"ha sido una de las mejores decisiones de mi vida y realmente ha cambiado mi vida"</em>.</p>
            <a href="/testimonios/" className="text-accent-blue font-semibold hover:underline inline-flex items-center gap-1">
              Ver el vídeo y otros casos <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      {/* Precios */}
      <section className="section px-6 bg-white">
        <div className="container-narrow">
          <div className="max-w-2xl mb-10">
            <span className="eyebrow mb-4">Precios</span>
            <h2 className="t-h2 text-zinc-900 mb-5">Cuánto cuesta, en euros</h2>
            <div className="rule"></div>
          </div>
          <p className="t-body mb-8">El transbordo no lo pagas tú: desde Las Tablas cuesta lo mismo que desde el portal de al lado. Y si acabas eligiendo online, la hora vale exactamente igual que presencial.</p>
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
                <tr className="border-b border-zinc-100"><td className="py-3 pr-4 font-medium">Adultos</td><td className="py-3 pr-4">todos los niveles</td><td className="py-3">94 €/mes</td></tr>
                <tr className="border-b border-zinc-100"><td className="py-3 pr-4 font-medium">Clases particulares</td><td className="py-3 pr-4">todas las edades</td><td className="py-3">29 €/hora</td></tr>
                <tr className="border-b border-zinc-100"><td className="py-3 pr-4 font-medium">Clases online</td><td className="py-3 pr-4">todas las edades</td><td className="py-3">29 €/hora</td></tr>
                <tr className="border-b border-zinc-100"><td className="py-3 pr-4 font-medium">Secundaria</td><td className="py-3 pr-4">13-17 años</td><td className="py-3">desde 87 €/mes</td></tr>
                <tr className="border-b border-zinc-100"><td className="py-3 pr-4 font-medium">Primaria</td><td className="py-3 pr-4">6-12 años</td><td className="py-3">83 €/mes · 239 €/trimestre</td></tr>
                <tr><td className="py-3 pr-4 font-medium">Infantil</td><td className="py-3 pr-4">2-5 años</td><td className="py-3">desde 64 €/mes</td></tr>
              </tbody>
            </table>
          </div>
          <p className="t-small text-zinc-500 mt-6">Al margen de la cuota se pagan, una sola vez, <strong>45 € de matrícula</strong> y un <strong>libro de 40 € como máximo</strong>. Dentro entran las clases semanales, los simulacros de Cambridge, el seguimiento personalizado y los recursos online, con descuento por pago trimestral y por hermanos. El examen oficial se abona aparte, a la tarifa de Cambridge.</p>
        </div>
      </section>

      {/* Reseñas */}
      <section className="section-lead px-6 surface-alt">
        <div className="container-narrow">
          <div className="max-w-2xl mb-10">
            <span className="eyebrow mb-4">Opiniones</span>
            <h2 className="t-h2 text-zinc-900 mb-5">Reseñas verificadas en Google</h2>
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
      <section className="section px-6 bg-white">
        <div className="container-narrow">
          <div className="max-w-2xl mb-10">
            <span className="eyebrow mb-4">Dudas frecuentes</span>
            <h2 className="t-h2 text-zinc-900 mb-5">Preguntas frecuentes sobre clases de inglés en Las Tablas</h2>
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
            ¿Buscas academia de inglés desde Las Tablas? Empieza por la prueba de nivel: 25 minutos, gratuita, presencial o en línea.
          </p>
          <a href="/prueba-de-nivel-ingles/" className="btn-on-dark btn-lg">
            Pide tu prueba de nivel gratuita
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </section>

      {/* Formulario */}
      <section className="section-lead px-6 bg-white">
        <div className="container-page">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="t-h2 text-zinc-900 mb-6">Reserva tu prueba de nivel</h2>
              <div className="rule mb-6"></div>
              <p className="t-body mb-8">Presencial en Barrio del Pilar o en línea desde casa, a la misma tarifa. Te decimos qué franja te encaja mejor con el horario que tengas.</p>
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
                source="las-tablas"
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
            <a href="/cursos-ingles/adultos/" className="text-accent-blue hover:underline">Clases de inglés para adultos</a>
            {' · '}
            <a href="/cursos-ingles/particulares/" className="text-accent-blue hover:underline">Clases particulares de inglés</a>
            {' · '}
            <a href="/cursos-ingles/online/" className="text-accent-blue hover:underline">Clases de inglés online</a>
            {' · '}
            <a href="/cursos-ingles/secundaria/" className="text-accent-blue hover:underline">Inglés para secundaria y EBAU</a>
            {' · '}
            <a href="/cursos-ingles/primaria/" className="text-accent-blue hover:underline">Inglés para primaria (6-12)</a>
            {' · '}
            <a href="/cursos-ingles/infantil/" className="text-accent-blue hover:underline">Inglés infantil (2-5 años)</a>
          </p>
        </div>
      </section>

      <Footer />
    </>
  );
}
