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

const benefits = [
  { title: "Tres paradas contando el cambio", desc: "Una en la línea 10 hasta Plaza de Castilla y dos más en la línea 9 hasta Barrio del Pilar. Después, 500 metros y unos 3 min a pie." },
  { title: "El cambio se hace bajo techo", desc: "En el intercambiador de Plaza de Castilla se pasa de la 10 a la 9 sin salir a la calle. Grupos de 7 a 10 alumnos al llegar." },
  { title: "Pensado para quien sale tarde", desc: "Abrimos hasta las 21:30 de lunes a jueves, con grupos que arrancan después de la jornada." },
  { title: "Inglés de negocios con Danny", desc: "Danny Fitzpatrick es licenciado en Marketing por ESIC University y lleva la parte profesional. Irlandés, 12 años en Madrid." },
  { title: "Linguaskill en 48 horas", desc: "Centro oficial. Si tu empresa te pide acreditar el nivel con prisa, ese es el camino corto." },
  { title: "Clases particulares a 29 €/hora", desc: "Presenciales u online, encajadas en tu agenda. Lo que eligen los que no pueden fijar un grupo semanal." }
];

const courses = [
  { name: "Infantil (2-5 años)", method: "Great Little People · desde 64 €/mes", href: "/cursos-ingles/infantil/" },
  { name: "Primaria (6-12 años)", method: "Young Learners + Cambridge · 83 €/mes", href: "/cursos-ingles/primaria/" },
  { name: "Secundaria (13-17 años)", method: "EBAU + Cambridge B1/B2/C1 · desde 87 €/mes", href: "/cursos-ingles/secundaria/" },
  { name: "Adultos", method: "Todos los niveles + Cambridge + Linguaskill · 94 €/mes", href: "/cursos-ingles/adultos/" },
  { name: "Clases particulares", method: "Presencial u online · desde 29 €/hora", href: "/cursos-ingles/particulares/" }
];

// Reseñas reales de Google, verificadas contra el perfil. Asignación en
// GEO-Content-Project/review-allocation.md: ninguna se repite en el sitio.
const localReviews = [
  {
    name: "Enrique Villar Ropero",
    role: "Reseña verificada en Google",
    text: "Son muy buenos profesionales que te ayudan en todo"
  },
  {
    name: "Juan Sáenz De Buruaga García",
    role: "Reseña verificada en Google",
    text: "Profesionales desde el primer minuto. Increíble trato y desempeño!!"
  }
];

export const localFaqs: FAQItem[] = [
  {
    question: "¿Cómo llego desde Chamartín a la academia?",
    answer: "Una parada en la línea 10 hasta Plaza de Castilla, cambio a la línea 9 dentro del propio intercambiador y dos paradas más, Ventilla y Barrio del Pilar. Al salir, unos 3 minutos andando: son 500 metros por Av. de El Ferrol hasta el número 22."
  },
  {
    question: "¿Hay que salir a la calle para hacer el transbordo?",
    answer: "No. En Plaza de Castilla se pasa de la línea 10 a la línea 9 dentro del intercambiador, igual que hace quien llega en autobús interurbano o en la línea 1."
  },
  {
    question: "¿Cuánto cuestan las clases de inglés cerca de Chamartín?",
    answer: "Adultos 94 €/mes en grupo, Secundaria desde 87 €/mes, Primaria 83 €/mes e Infantil desde 64 €/mes. Las clases particulares cuestan 29 €/hora, presenciales u online. Matrícula 45 € y libro hasta 40 €."
  },
  {
    question: "Trabajo por la zona y salgo tarde. ¿Hay grupos compatibles?",
    answer: "Abrimos hasta las 21:30 de lunes a jueves, así que hay grupos que empiezan después de la jornada. Si tu agenda cambia semana a semana, lo más flexible son las particulares a 29 €/hora."
  },
  {
    question: "Mi empresa me pide acreditar el nivel de inglés. ¿Qué hago?",
    answer: "Linguaskill es la vía rápida: somos centro oficial y el certificado de Cambridge llega en 48 horas, presencial u online. Si prefieres un título permanente, preparamos B2 First y C1 Advanced."
  },
  {
    question: "¿Dais inglés de negocios?",
    answer: "Sí, y lo lleva Danny Fitzpatrick, cofundador y licenciado en Marketing por ESIC University. Es irlandés y lleva 12 años en Madrid, así que trabaja el inglés que de verdad se usa en una reunión."
  },
  {
    question: "¿Cuántos alumnos hay por clase?",
    answer: "Entre 7 y 10, con un máximo de 10 en adultos. Tenemos dos aulas, London y Manchester. Con ese aforo hablas en todas las clases, que es justo lo que hace falta si el inglés te toca usarlo en el trabajo."
  },
  {
    question: "¿La prueba de nivel es gratis y quién la hace?",
    answer: "Es gratuita y dura 25 minutos. La hace JP, el director de estudios, que es además quien contesta el WhatsApp del 604 910 611. Sales con tu nivel MCER y una recomendación de grupo."
  }
];

export const locationMeta = {
  locationName: "Chamartín",
  pageUrl: "https://impulse-english.es/academia-ingles-chamartin"
};

export default function ChamartinPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Navbar />

      {/* Hero */}
      <section className="relative pt-28 pb-20 md:pt-36 md:pb-32 overflow-hidden">
        <div className="absolute inset-0">
          <img src="/images/academy/outside-academy.jpg" alt="Fachada de Impulse English Academy en Av. de El Ferrol 22, a tres paradas de la estación de Chamartín" className="w-full h-full object-cover" loading="eager" />
          <div className="absolute inset-0 bg-accent-blue/90"></div>
        </div>
        <div className="absolute inset-0 hero-grain opacity-[0.03]"></div>
        <div className="absolute -top-32 -right-32 w-[420px] h-[420px] rounded-full bg-brand-red/[0.05]"></div>
        <div className="absolute -bottom-24 -left-24 w-80 h-80 rounded-full bg-white/[0.03]"></div>

        <div className="relative z-10 container mx-auto px-6 md:px-12">
          <Breadcrumb
            items={[
              { label: 'Ubicaciones', href: '/academias-ingles-madrid/por-barrios/' },
              { label: 'Chamartín' }
            ]}
            variant="light"
          />

          <div className="max-w-4xl mt-12 md:mt-16">
            <div className="flex items-center gap-4 mb-6 animate-hero-fade-up">
              <div className="w-8 h-px bg-white/40"></div>
              <MapPin className="w-4 h-4 text-brand-red" />
              <span className="font-display text-white/70 text-xs uppercase tracking-[0.2em]">
                Chamartín
              </span>
            </div>
            <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl text-white tracking-tight leading-[1.1] mb-6 animate-hero-fade-up animation-delay-100">
              Academia de inglés a 3 paradas de Chamartín
            </h1>
            <div className="w-16 h-0.5 bg-brand-red mb-6 animate-hero-fade-up animation-delay-150"></div>
            <p className="font-display text-lg md:text-xl text-white/80 font-light leading-relaxed mb-4 animate-hero-fade-up animation-delay-200">
              Centro oficial Cambridge en Barrio del Pilar, desde 64 €/mes
            </p>
            <div className="flex items-center gap-2 text-white/60 font-display text-sm mb-2 animate-hero-fade-up animation-delay-200">
              <Train className="w-4 h-4" />
              <span>Línea 10 hasta Plaza de Castilla y línea 9 · 3 paradas en total</span>
            </div>
            <p className="font-display text-white/50 text-sm mb-8 animate-hero-fade-up animation-delay-200">
              {NAP.fullAddress}
            </p>
            <div className="flex flex-wrap gap-3 mb-8 animate-hero-fade-up animation-delay-300">
              <span className="border border-white/15 px-4 py-2 rounded-full text-white/80 font-display text-sm">Centro oficial Cambridge</span>
              <span className="border border-white/15 px-4 py-2 rounded-full text-white/80 font-display text-sm">5,0 · 183 reseñas</span>
              <span className="border border-white/15 px-4 py-2 rounded-full text-white/80 font-display text-sm">Grupos de 7 a 10 alumnos</span>
            </div>
            <div className="flex flex-wrap gap-4 animate-hero-fade-up animation-delay-400">
              <a href="/prueba-de-nivel-ingles/" className="bg-brand-red hover:bg-brand-red-600 text-white font-display font-semibold py-3 px-6 rounded-lg flex items-center gap-2 transition-all duration-300">
                Reservar prueba de nivel gratuita
                <ArrowRight className="w-5 h-5" />
              </a>
              <a href={`${NAP.whatsappUrl}?text=Hola,%20vivo%20en%20Chamart%C3%ADn%20y%20me%20gustaría%20información%20sobre%20los%20cursos`} target="_blank" rel="noopener noreferrer" className="bg-white/10 backdrop-blur-sm border border-white/20 text-white font-display font-medium py-3 px-6 rounded-lg flex items-center gap-2 hover:bg-white/15 transition-all duration-300">
                <WhatsAppIcon className="w-4 h-4" />
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Capsula de respuesta */}
      <section className="section-tight px-6 bg-white">
        <div className="container mx-auto max-w-4xl">
          <p className="text-lg text-zinc-700 leading-relaxed mb-4">
            ¿Buscas clases de inglés cerca de Chamartín? Son tres paradas: una en la línea 10 hasta Plaza de Castilla y dos en la línea 9 hasta Barrio del Pilar, más 500 metros a pie. Grupos de 7 a 10 alumnos, desde 64 €/mes, y prueba de nivel gratuita de 25 minutos.
          </p>
          <p className="text-lg text-zinc-700 leading-relaxed">
            El cambio de línea se hace dentro del intercambiador de Plaza de Castilla, sin salir a la calle. Por aquí nos llegan sobre todo adultos que necesitan certificar su nivel para el trabajo: para eso somos centro oficial de Cambridge y de Linguaskill, con el certificado de Linguaskill en 48 horas.
          </p>
        </div>
      </section>

      {/* Por que aqui */}
      <section className="section px-6 surface-alt">
        <div className="container mx-auto max-w-6xl">
          <div className="max-w-2xl mb-10">
            <span className="eyebrow mb-4">Por qué desde Chamartín</span>
            <h2 className="t-h2 text-zinc-900 mb-5">Seis cosas que puedes comprobar antes de venir</h2>
            <div className="rule"></div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((item, i) => (
              <div key={i} className="card p-6">
                <CheckCircle className="w-6 h-6 text-emerald-600 mb-3" />
                <h3 className="font-bold text-zinc-900 mb-2">{item.title}</h3>
                <p className="text-zinc-600 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Como llegar */}
      <section className="section px-6 bg-white">
        <div className="container mx-auto max-w-4xl">
          <div className="max-w-2xl mb-10">
            <span className="eyebrow mb-4">Cómo llegar</span>
            <h2 className="t-h2 text-zinc-900 mb-5">De la estación de Chamartín a la academia</h2>
            <div className="rule"></div>
          </div>
          <p className="text-zinc-600 leading-relaxed mb-8">Chamartín es un nudo de transporte: líneas 1 y 10 de metro y Cercanías en el mismo edificio. Para llegar hasta nosotros se aprovecha ese mismo eje hacia el norte, con un único cambio.</p>
          <div className="grid sm:grid-cols-3 gap-6">
            {[
              { n: 1, title: "Línea 10 hasta Plaza de Castilla", body: "Una sola parada. Chamartín y Plaza de Castilla llevan unidas por esta línea desde que se inauguró el tramo." },
              { n: 2, title: "Cambio a la línea 9", body: "Dentro del intercambiador, sin pisar la calle. Es el mismo cambio que hace a diario mucha gente que viene en autobús interurbano." },
              { n: 3, title: "Dos paradas y 500 metros", body: "Ventilla y Barrio del Pilar. Al salir, unos 3 minutos andando por Av. de El Ferrol hasta el número 22." },
            ].map((step) => (
              <div key={step.n} className="card p-6">
                <p className="t-h3 text-accent-blue mb-2">{step.n}</p>
                <h3 className="font-bold text-zinc-900 mb-2">{step.title}</h3>
                <p className="text-zinc-600 text-sm leading-relaxed">{step.body}</p>
              </div>
            ))}
          </div>
          <div className="mt-10 grid md:grid-cols-2 gap-8 items-start">
            <div>
              <NearbyAreas currentHref="/academia-ingles-chamartin/" variant="accent" />
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
        <div className="container mx-auto max-w-4xl">
          <div className="max-w-2xl mb-10">
            <span className="eyebrow mb-4">Cursos</span>
            <h2 className="t-h2 text-zinc-900 mb-5">Qué cursos hay, y a qué precio cada uno</h2>
            <div className="rule"></div>
          </div>
          <div className="space-y-3">
            {courses.map((c, i) => (
              <a key={i} href={c.href} className="card p-5 flex items-center justify-between gap-4 hover:shadow-panel transition-shadow">
                <div>
                  <p className="font-bold text-zinc-900">{c.name}</p>
                  <p className="text-zinc-600 text-sm">{c.method}</p>
                </div>
                <ArrowRight className="w-5 h-5 text-accent-blue shrink-0" />
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Quien da la clase */}
      <section className="section px-6 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="max-w-2xl mb-10">
            <span className="eyebrow mb-4">Quién te la da</span>
            <h2 className="t-h2 text-zinc-900 mb-5">Los dos fundadores dan clase, y eso se nota</h2>
            <div className="rule"></div>
          </div>
          <div className="grid md:grid-cols-[300px_1fr] gap-10 items-start">
            <div className="aspect-[3/4] overflow-hidden rounded-2xl shadow-panel">
              <img
                src="/images/academy/jp-director-estudios.webp"
                alt="JP, director de estudios de Impulse English Academy, a tres paradas de Chamartín"
                className="w-full h-full object-cover"
                loading="lazy"
                width={900}
                height={1200}
              />
            </div>
            <div className="space-y-4 text-zinc-600 leading-relaxed">
              <p>En una zona de oficinas se ven muchas academias con logo grande y profesorado anónimo. Aquí puedes saber, de antemano, quién te va a dar clase.</p>
              <p><strong className="text-zinc-900">JP</strong> es cofundador y director de estudios: <strong className="text-zinc-900">más de 10 años</strong> enseñando inglés, precedidos de 10 años viviendo en Irlanda.</p>
              <p>Hace en persona la prueba de nivel gratuita de 25 minutos y responde el WhatsApp del 604 910 611. Escribes tú, contesta él.</p>
              <p>Se ocupa de la preparación Cambridge y de la adquisición temprana del idioma; Danny Fitzpatrick, el otro cofundador, del inglés de negocios y de los adultos, que es el perfil que más nos llega desde esta zona.</p>
              <a href="/nuestro-equipo/" className="text-accent-blue font-semibold hover:underline inline-flex items-center gap-1">
                Conoce al equipo completo <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Caso real */}
      <section className="section px-6 surface-alt">
        <div className="container mx-auto max-w-4xl">
          <div className="max-w-2xl mb-10">
            <span className="eyebrow mb-4">Un caso real</span>
            <h2 className="t-h2 text-zinc-900 mb-5">Sergio</h2>
            <div className="rule"></div>
          </div>
          <p className="text-zinc-600 leading-relaxed mb-6 max-w-3xl">Por Chamartín pasa cada día gente que se mueve por trabajo. El caso de Sergio va de eso: del inglés como requisito profesional, no como asignatura pendiente.</p>
          <div className="card p-8">
            <div className="grid sm:grid-cols-3 gap-6 mb-6 text-center">
              <div><p className="t-h3 text-accent-blue">30 años</p><p className="t-small text-zinc-600">cuando se puso en serio</p></div>
              <div><p className="t-h3 text-accent-blue">Su freno</p><p className="t-small text-zinc-600">no atreverse a hablar, no la gramática</p></div>
              <div><p className="t-h3 text-emerald-600">Hoy</p><p className="t-small text-zinc-600">dos años en Dublín, analista en una aseguradora</p></div>
            </div>
            <p className="text-zinc-600 leading-relaxed mb-4">Lo describe sin adornos: <em>"siempre he tenido una gran carencia de confianza para hablar en inglés"</em>. Años de clases detrás y aun así no se lanzaba.</p>
            <p className="text-zinc-600 leading-relaxed mb-4">Eso le bloqueó una decisión durante mucho tiempo: <em>"la barrera del idioma siempre me había impedido dar este paso"</em>, el de irse a trabajar fuera. Lo que lo desatascó, según él, fue el acompañamiento: <em>"tanto Dani como JP han sido un gran apoyo para mí, guiándome y asesorándome en cada momento"</em>.</p>
            <p className="text-zinc-600 leading-relaxed mb-4">Lleva dos años en Dublín como analista de pólizas y administrativo. En sus primeros meses allí encadenó <strong className="text-zinc-900">cuatro entrevistas</strong> con empresas distintas.</p>
            <a href="/testimonios/" className="text-accent-blue font-semibold hover:underline inline-flex items-center gap-1">
              Ver el vídeo y otros casos <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      {/* Precios */}
      <section className="section px-6 bg-white">
        <div className="container mx-auto max-w-4xl">
          <div className="max-w-2xl mb-10">
            <span className="eyebrow mb-4">Precios</span>
            <h2 className="t-h2 text-zinc-900 mb-5">Tarifas completas, publicadas</h2>
            <div className="rule"></div>
          </div>
          <p className="text-zinc-600 mb-8">No cotizamos a la carta ni damos un precio distinto según quién pregunte. Esta es la tabla entera, la misma para Chamartín que para el resto.</p>
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
          <p className="t-small text-zinc-500 mt-6">A la cuota se suman <strong>45 € de matrícula</strong> y un <strong>libro de 40 € como máximo</strong>, ambos una única vez. Un adulto en grupo son 94 €/mes. Dentro van las clases semanales, los simulacros de Cambridge, el seguimiento y los recursos online. Las tasas del examen oficial las cobra Cambridge, no la academia.</p>
        </div>
      </section>

      {/* Reseñas */}
      <section className="section-lead px-6 surface-alt">
        <div className="container mx-auto max-w-4xl">
          <h2 className="t-h2 text-zinc-900 mb-12 text-center">Reseñas verificadas de alumnos</h2>
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
                <p className="text-zinc-500 text-sm">{review.role}</p>
              </div>
            ))}
          </div>
          <div className="text-center">
            <a href={NAP.gbpUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-accent-blue hover:bg-accent-blue-800 text-white font-bold py-3 px-8 rounded-lg transition-colors">
              <Star className="w-5 h-5 fill-amber-400 text-amber-400" />
              Ver las 183 reseñas en Google
            </a>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="section px-6 bg-white">
        <div className="container mx-auto max-w-4xl">
          <h2 className="t-h2 text-zinc-900 mb-12 text-center">Preguntas frecuentes sobre clases de inglés cerca de Chamartín</h2>
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

      {/* CTA final */}
      <section className="section-tight px-6 bg-accent-blue">
        <div className="container mx-auto max-w-4xl text-center">
          <p className="text-xl md:text-2xl text-white mb-8">
            Si buscas academia de inglés cerca de Chamartín, son tres paradas con un solo cambio. Reserva tu prueba de nivel gratuita.
          </p>
          <a href="/prueba-de-nivel-ingles/" className="inline-flex items-center gap-2 bg-white text-accent-blue font-bold py-4 px-8 rounded-lg hover:bg-amber-400 hover:text-accent-blue-900 transition-colors">
            Pide tu prueba de nivel gratuita
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </section>

      {/* Formulario */}
      <section className="section-lead px-6 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="t-h2 text-zinc-900 mb-6">Reserva tu prueba de nivel</h2>
              <p className="text-zinc-600 mb-8">Tres paradas desde Chamartín, cambiando dentro del intercambiador de Plaza de Castilla. Te contamos nivel y grupo en 25 minutos.</p>
              <div className="flex flex-wrap gap-4">
                <a href={NAP.whatsappUrl} target="_blank" rel="noopener noreferrer" className="bg-whatsapp hover:bg-whatsapp-dark text-white font-bold py-3 px-6 rounded-lg flex items-center gap-2 transition-colors">
                  <WhatsAppIcon className="w-5 h-5" />
                  WhatsApp {NAP.phone}
                </a>
                <a href={NAP.phoneTel} className="bg-accent-blue hover:bg-accent-blue-800 text-white font-bold py-3 px-6 rounded-lg flex items-center gap-2 transition-colors">
                  <Phone className="w-5 h-5" />
                  Llamar ahora
                </a>
              </div>
              <p className="text-zinc-500 mt-6 text-sm">{NAP.fullAddress} · Abrimos hasta las 21:30 de lunes a jueves.</p>
            </div>
            <div>
              <LeadForm
                title="Reserva tu prueba gratuita"
                subtitle="Te contactamos en menos de 24h"
                ctaText="Reservar ahora"
                source="chamartin"
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
    </>
  );
}
