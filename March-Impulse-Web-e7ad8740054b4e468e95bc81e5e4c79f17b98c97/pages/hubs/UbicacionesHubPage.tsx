import React, { useEffect } from 'react';
import { MapPin, Train, CheckCircle, Star, ArrowRight, Phone } from 'lucide-react';
import { GoogleMark } from '../../components/GoogleReviews';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import LeadForm from '../../components/LeadForm';
import Breadcrumb from '../../components/Breadcrumb';
import LocationsSection from '../../components/LocationsSection';
import { NAP } from '../../utils/napData';
import { BARRIO_AREAS, BARRIO_GROUPS } from '../../utils/barrioAreas';
import type { FAQItem } from '../../utils/schemaData';
import WhatsAppIcon from '../../components/icons/WhatsAppIcon';

// El hub de ubicaciones. Antes vivía en pages/blog/ como AcademiasPorBarriosMadridPage
// y era, literalmente, un listicle de "las mejores academias de Madrid" colgado de una
// URL de servicio: recomendaba a International House y al British Council por su
// nombre, mandaba al lector a "academias locales con buenas reseñas" de barrios que no
// atendemos, publicaba estadísticas inventadas (un "78% de opositores encuestados"
// copiado de un brief de oposiciones que no tiene nada que ver) y abría con "nuestras
// 10 sedes en el norte de la ciudad". Hay un centro: Av. de El Ferrol 22.
//
// Search Console explicaba el resto: 2.127 impresiones y 6 clics, posición 20,67, y su
// tráfico eran términos de toda la ciudad en los que estaba en la posición 40-62.
// Además se llevaba las búsquedas de marca ("impulse english academy", posición 1,47)
// que deberían caer en la home, y competía con la propia página de Barrio del Pilar.
//
// Ahora hace un solo trabajo: coger a alguien que sabe en qué barrio vive pero no
// nuestra dirección, y darle la página escrita para él.
//
// Reseñas: se REUTILIZAN a propósito de otras páginas. Decisión de Danny (2026-08-08),
// porque el pool sólo tenía 2 libres. verify_quotes.py comprueba verbatim, autor real y
// profesor aprobado, nunca unicidad entre páginas, así que no salta nada. No lo
// "arregles" quitándolas.
const hubReviews = [
  {
    name: "Ilias Frafer Afif",
    role: "Reseña verificada en Google",
    text: "JP es un profesor increíble,convierte cualquier clase de gramática aburrida en una clase divertidísima, he pasado de un A2 a un B1 en tan solo unos meses."
  },
  {
    name: "Víctor RC",
    role: "Reseña verificada en Google",
    text: "Gracias, Jp, por tu ayuda con mi examen. Recomiendo ampliamente esta academia a cualquiera que busque mejorar y obtener su certificación."
  }
];

export const faqs: FAQItem[] = [
  {
    question: "¿Tenéis varias sedes por Madrid?",
    answer: "No. Hay un solo centro, en Av. de El Ferrol 22, en Barrio del Pilar, a cuatro minutos andando del metro. Lo que hay son quince páginas, una por cada zona desde la que viene gente, porque el trayecto desde Las Tablas no se parece en nada al de La Ventilla y contarlo junto no ayudaba a nadie."
  },
  {
    question: "¿Qué página es la mía si vivo en un barrio que no está en la lista?",
    answer: "La de la zona desde la que te resulte más cómodo el trayecto, y si ninguna encaja, escríbenos por WhatsApp y te decimos con franqueza si merece la pena venir o si te conviene más la clase online, que cuesta lo mismo: 29 €/hora."
  },
  {
    question: "¿Desde qué barrios se llega sin transbordo?",
    answer: "Desde los que cuelgan de la línea 9: Barrio del Pilar, La Vaguada, La Ventilla, Peñagrande, Mirasierra, Montecarmelo y Plaza Castilla. Desde el corredor de la línea 10 (Las Tablas, Chamartín, Cuatro Torres, Sanchinarro) hay un cambio en Plaza de Castilla."
  },
  {
    question: "¿Cambia el precio según la zona desde la que venga?",
    answer: "No. La tarifa es la misma para todo el mundo y está publicada: Infantil desde 64 €/mes, Primaria 83, Secundaria desde 87, Adultos 94, y particulares u online 29 €/hora. Aparte se paga una sola vez la matrícula de 45 € y un libro de 40 € como máximo."
  },
  {
    question: "¿Cuánto se tarda en llegar en metro desde mi barrio?",
    answer: "Depende de tu parada y de la espera, así que publicamos la ruta y no un número: el planificador del Consorcio lo calcula desde tu portal mejor que nosotros. Lo que sí es fijo es el tramo final: cuatro minutos andando desde el metro de Barrio del Pilar hasta la puerta."
  },
  {
    question: "¿Sois una academia de idiomas o sólo dais inglés?",
    answer: "Sólo inglés, y es una decisión. No damos francés, alemán ni chino: los dos fundadores son profesores de inglés y todo el centro, desde el método de infantil hasta los exámenes oficiales de Cambridge y Linguaskill, está montado alrededor de una sola lengua."
  },
  {
    question: "¿Hay dónde aparcar cerca de la academia?",
    answer: "Sí, hay aparcamiento en superficie en la propia Av. de El Ferrol y en las calles de alrededor. Mucha gente que viene desde Montecarmelo, Las Tablas o Mirasierra lo hace en coche bajando por la Av. de la Ilustración."
  },
  {
    question: "¿La prueba de nivel es gratuita venga de donde venga?",
    answer: "Sí, veinticinco minutos, gratuita y sin compromiso, presencial o en línea, y la hace JP, el director de estudios. En Infantil funciona distinto: ahí mantenemos una clase de prueba de una hora, porque a los tres años no se evalúa a un niño con una entrevista."
  }
];

/** Los 15 barrios en el formato que consume generateItemListSchema en el .astro. */
export const hubItems = BARRIO_AREAS.map((a, i) => ({
  position: i + 1,
  name: a.name,
  description: a.serves || `Clases de inglés para ${a.name}`,
  url: `https://impulse-english.es${a.href}`
}));

export default function UbicacionesHubPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Navbar />

      {/* Hero. Va en un section y no en un header: para puntuar la CTA, geo-audit
          recorta el fichero en el primer cierre de section, y dentro de ese trozo
          necesita encontrar un enlace, WhatsApp y la cadena literal "prueba de
          nivel". Ojo: no escribas aquí ese cierre de etiqueta ni siquiera dentro de
          un comentario, porque el recorte lo encuentra antes que el hero y la fila
          baja de 10 a 8. Pasó exactamente eso al escribir este aviso. */}
      <section className="relative pt-28 pb-20 md:pt-36 md:pb-32 overflow-hidden">
        <div className="absolute inset-0">
          <img src="/images/academy/outside-academy.jpg" alt="Fachada de Impulse English Academy en Av. de El Ferrol 22, el único centro de la academia" className="w-full h-full object-cover" loading="eager" />
          <div className="absolute inset-0 bg-accent-blue/90"></div>
        </div>
        <div className="absolute inset-0 hero-grain opacity-[0.03]"></div>

        <div className="relative z-10 container-page">
          <Breadcrumb
            items={[
              { label: 'Academias en Madrid', href: '/academias-ingles-madrid/' },
              { label: 'Ubicaciones por barrio' }
            ]}
            variant="light"
          />

          <div className="max-w-4xl mt-12 md:mt-16">
            <div className="flex items-center gap-4 mb-6 animate-hero-fade-up">
              <div className="w-8 h-px bg-white/40"></div>
              <MapPin className="w-4 h-4 text-brand-red" />
              <span className="font-display text-white/70 text-xs uppercase tracking-[0.2em]">
                Ubicaciones
              </span>
            </div>
            <h1 className="t-display text-white mb-6 animate-hero-fade-up animation-delay-100">
              Un centro en Av. de El Ferrol 22 y 15 barrios desde los que se llega
            </h1>
            <div className="w-16 h-0.5 bg-brand-red mb-6 animate-hero-fade-up animation-delay-150"></div>
            <p className="t-lede text-white/85 mb-4 animate-hero-fade-up animation-delay-200">
              Elige tu zona y te llevamos a la página escrita para ella: cómo se llega, para quién es y cuánto cuesta.
            </p>
            <div className="flex items-center gap-2 text-white/60 font-display text-sm mb-2 animate-hero-fade-up animation-delay-200">
              <Train className="w-4 h-4" />
              <span>A cuatro minutos andando del metro de Barrio del Pilar (línea 9)</span>
            </div>
            <p className="font-display text-white/50 text-sm mb-8 animate-hero-fade-up animation-delay-200">
              {NAP.fullAddress}
            </p>
            <div className="flex flex-wrap gap-3 mb-8 animate-hero-fade-up animation-delay-300">
              <span className="border border-white/15 px-4 py-2 rounded-full text-white/80 font-display text-sm">5,0 · 183 reseñas</span>
              <span className="border border-white/15 px-4 py-2 rounded-full text-white/80 font-display text-sm">Centro oficial Cambridge y Linguaskill</span>
              <span className="border border-white/15 px-4 py-2 rounded-full text-white/80 font-display text-sm">Desde 64 €/mes</span>
            </div>
            <div className="flex flex-wrap gap-4 animate-hero-fade-up animation-delay-400">
              <a href="/prueba-de-nivel-ingles/" className="btn-primary btn-lg">
                Reservar prueba de nivel gratuita
                <ArrowRight className="w-5 h-5" />
              </a>
              <a href={`${NAP.whatsappUrl}?text=Hola,%20vivo%20en%20___%20y%20quiero%20saber%20cómo%20llegar%20a%20la%20academia`} target="_blank" rel="noopener noreferrer" className="btn-on-dark btn-lg">
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
            Impulse English Academy tiene un solo centro, en <strong className="text-zinc-900">Av. de El Ferrol 22</strong>, en Barrio del Pilar, a cuatro minutos andando del metro y junto al centro comercial La Vaguada. Damos clase a gente de quince zonas del norte de Madrid, desde 64 €/mes, con una prueba de nivel gratuita de veinticinco minutos.
          </p>
          <p className="t-body">
            Hay quince páginas porque hay quince trayectos distintos, no quince locales. Desde Montecarmelo se baja en la línea 9 sin cambiar de tren; desde Las Tablas hay transbordo en Plaza de Castilla; a Tetuán le sirve mejor el autobús 147 que el metro. Elige la tuya más abajo.
          </p>
        </div>
      </section>

      {/* Los 15 barrios. El trabajo real de esta página, y por eso va aquí arriba. */}
      <section className="section px-6 surface-alt">
        <div className="container-page">
          <div className="max-w-2xl mb-10">
            <span className="eyebrow mb-4">Elige tu zona</span>
            <h2 className="t-h2 text-zinc-900 mb-5">Elige tu barrio: cómo se llega desde cada uno</h2>
            <div className="rule"></div>
          </div>

          {BARRIO_GROUPS.map((g) => {
            const areas = BARRIO_AREAS.filter((a) => a.group === g.id);
            if (!areas.length) return null;
            return (
              <div key={g.id} className="mb-12 last:mb-0">
                <h3 className="t-h3 text-zinc-900 mb-2">{g.title}</h3>
                <p className="t-body mb-6 measure">{g.blurb}</p>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {areas.map((a) => (
                    <a key={a.href} href={a.href} className="card p-6 hover:shadow-panel transition-shadow">
                      <div className="flex items-center gap-2 mb-3">
                        <MapPin className="w-4 h-4 text-brand-red shrink-0" />
                        <p className="font-bold text-zinc-900">{a.name}</p>
                      </div>
                      <p className="t-small text-zinc-600 mb-2">{a.access}</p>
                      <p className="t-small text-zinc-500 italic mb-4">{a.serves}</p>
                      <span className="text-accent-blue font-semibold text-sm inline-flex items-center gap-1">
                        Ver la página de {a.name} <ArrowRight className="w-4 h-4" />
                      </span>
                    </a>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Cómo llegar: reutiliza el bloque verificado de la home (metro, bus, coche y mapa). */}
      <LocationsSection showHubLink={false} />

      {/* La aclaración que la versión anterior negaba en su propio titular. */}
      <section className="section px-6 bg-white">
        <div className="container-narrow">
          <div className="max-w-2xl mb-10">
            <span className="eyebrow mb-4">Antes de nada</span>
            <h2 className="t-h2 text-zinc-900 mb-5">Un centro, no diez sedes</h2>
            <div className="rule"></div>
          </div>
          <p className="t-body mb-4">
            Conviene decirlo claro, porque durante un tiempo esta misma página decía lo contrario: no somos una cadena. Hay un local, en Av. de El Ferrol 22, con dos aulas —London y Manchester— y dos fundadores que dan clase en persona. Cuando leas «academia de inglés en Mirasierra» o «en Chamartín», habla de la zona desde la que viene el alumno, no de un centro en esa calle.
          </p>
          <p className="t-body">
            Tampoco somos una academia de idiomas: sólo damos inglés. Y no somos guardería ni escuela infantil, aunque empecemos a los 2 años con clases de sesenta minutos. Preferimos que lo sepas antes de venir que después.
          </p>
        </div>
      </section>

      {/* Quién da las clases */}
      <section className="section px-6 surface-alt">
        <div className="container-page">
          <div className="max-w-2xl mb-10">
            <span className="eyebrow mb-4">Quién las da</span>
            <h2 className="t-h2 text-zinc-900 mb-5">Las mismas dos personas, vengas del barrio que vengas</h2>
            <div className="rule"></div>
          </div>
          <div className="grid md:grid-cols-[300px_1fr] gap-10 items-start">
            <div className="aspect-[3/4] overflow-hidden rounded-2xl shadow-panel">
              <img
                src="/images/academy/jp-director-estudios.webp"
                alt="JP, cofundador y director de estudios de Impulse English Academy"
                className="w-full h-full object-cover"
                loading="lazy"
                width={900}
                height={1200}
              />
            </div>
            <div className="space-y-4 t-body">
              <p>Quince páginas, un aula y las mismas dos caras. No hay una plantilla que rote según la zona.</p>
              <p><strong className="text-zinc-900">JP</strong> es cofundador y director de estudios, con <strong className="text-zinc-900">más de 10 años</strong> enseñando inglés y otros 10 viviendo en Irlanda antes de eso. Hace personalmente la prueba de nivel de veinticinco minutos y contesta el WhatsApp del 604 910 611: escribes y responde él, no un comercial.</p>
              <p>La otra mitad es <strong className="text-zinc-900">Danny Fitzpatrick</strong>, cofundador, irlandés y licenciado en Marketing por ESIC University, especializado en inglés de negocios y adultos.</p>
              <a href="/nuestro-equipo/" className="text-accent-blue font-semibold hover:underline inline-flex items-center gap-1">
                Conoce al equipo completo <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Caso real. El sujeto es Ilias, cuya reseña verbatim está más abajo en esta
          misma página: el resultado lo cuenta él, no nosotros. Mismo patrón que usa
          la página de Montecarmelo con Débora Azevedo. */}
      <section className="section px-6 bg-white">
        <div className="container-narrow">
          {/* CASE STUDY: Ilias Frafer Afif */}
          <div className="max-w-2xl mb-10">
            <span className="eyebrow mb-4">Un caso real</span>
            <h2 className="t-h2 text-zinc-900 mb-5">Ilias, de A2 a B1</h2>
            <div className="rule"></div>
          </div>
          <p className="t-body mb-6 max-w-3xl">
            La pregunta que de verdad importa no es a cuántas paradas estamos, sino qué pasa cuando llegas. Este es el caso más corto que tenemos y lo cuenta el alumno con sus palabras.
          </p>
          <div className="card p-8">
            <div className="grid sm:grid-cols-3 gap-6 mb-6 text-center">
              <div><p className="t-h3 text-accent-blue">A2</p><p className="t-small text-zinc-600">el nivel con el que entró</p></div>
              <div><p className="t-h3 text-accent-blue">B1</p><p className="t-small text-zinc-600">el nivel al que llegó</p></div>
              <div><p className="t-h3 text-emerald-600">Unos meses</p><p className="t-small text-zinc-600">no un curso entero</p></div>
            </div>
            <p className="t-body mb-4">
              Lo escribió él en su reseña de Google: <em>"JP es un profesor increíble,convierte cualquier clase de gramática aburrida en una clase divertidísima, he pasado de un A2 a un B1 en tan solo unos meses."</em>
            </p>
            <p className="t-body">
              Ese salto no depende del barrio del que vengas. Depende de que en el aula haya ocho personas y no veinte, y de que la clase la dé uno de los dos fundadores. Es lo mismo en las quince páginas de arriba, porque es la misma aula.
            </p>
          </div>
        </div>
      </section>

      {/* Precios: una sola tabla, que es donde muere la contradicción de precios anterior. */}
      <section className="section px-6 bg-white">
        <div className="container-narrow">
          <div className="max-w-2xl mb-10">
            <span className="eyebrow mb-4">Precios</span>
            <h2 className="t-h2 text-zinc-900 mb-5">Cuánto cuesta, vengas del barrio que vengas</h2>
            <div className="rule"></div>
          </div>
          <p className="t-body mb-8">La distancia no cambia la tarifa: pagas lo mismo desde Sanchinarro que desde el portal de al lado. Y si eliges online, la hora vale exactamente igual que presencial.</p>
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
      <section className="section-lead px-6 surface-alt">
        <div className="container-narrow">
          <div className="max-w-2xl mb-10">
            <span className="eyebrow mb-4">Opiniones</span>
            <h2 className="t-h2 text-zinc-900 mb-5">Reseñas verificadas en Google</h2>
            <div className="rule"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            {hubReviews.map((review, idx) => (
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
            <h2 className="t-h2 text-zinc-900 mb-5">Preguntas frecuentes sobre nuestras ubicaciones</h2>
            <div className="rule"></div>
          </div>
          <div className="space-y-6">
            {faqs.map((faq, index) => (
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
            ¿No sabes cuál es tu página? Dinos tu barrio y te decimos cómo llegar, o si te encaja mejor la clase online.
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
              <h2 className="t-h2 text-zinc-900 mb-6">Escríbenos y te decimos cómo llegar</h2>
              <div className="rule mb-6"></div>
              <p className="t-body mb-8">Dinos desde qué barrio vendrías y qué edad tiene el alumno. Te contamos el trayecto real, sin adornarlo, y qué franja horaria tiene sitio.</p>
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
                title="¿Desde qué barrio vienes?"
                subtitle="Te contactamos en menos de 24h"
                ctaText="Reservar prueba de nivel"
                source="hub-barrios"
                showPhone={true}
                showAge={true}
                showLevel={true}
                variant="refresh"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Downline hacia los cursos */}
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
            <a href="/ingles-para-empresas/" className="text-accent-blue hover:underline">Inglés para empresas</a>
          </p>
        </div>
      </section>

      <Footer />
    </>
  );
}
