import React, { useEffect } from 'react';
import { Building2, Train, CheckCircle, Star, ArrowRight, Phone, FileText } from 'lucide-react';
import { GoogleMark } from '../../components/GoogleReviews';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import LeadForm from '../../components/LeadForm';
import Breadcrumb from '../../components/Breadcrumb';
import QuickFacts from '../../components/QuickFacts';
import CTABand from '../../components/CTABand';
import { NAP } from '../../utils/napData';
import { generateServiceSchema } from '../../utils/schemaData';
import type { FAQItem } from '../../utils/schemaData';
import WhatsAppIcon from '../../components/icons/WhatsAppIcon';

// Por qué existe esta página.
//
// En Search Console, la HOME está en la posición 1,11 para "clases de ingles
// empresas" y en la 1,19 para "academias de ingles para empresas", y saca CERO
// clics. La palabra "empresas" no aparece ni una sola vez en la home. No es un
// problema de posicionamiento: es que en el resultado no hay nada que se parezca
// a lo que la persona ha buscado, así que nadie entra. Esta página existe sobre
// todo para que exista un título que responda a esa búsqueda.
//
// ────────────────────────────────────────────────────────────────────────────
// PENDIENTE DE APROBACIÓN DE DANNY — no publicar sin cerrar esto.
// Están deliberadamente FUERA de la página, no inventados. Cuando lleguen, se
// añaden; mientras tanto la página no afirma nada que no esté confirmado.
//
// FUNDAE      · ¿entidad organizadora propia o lo bonifica la gestoría del cliente?
//             · ¿quién hace la tramitación y qué pasos asumimos nosotros?
//             · ¿la modalidad online/teleformación es bonificable en nuestro caso?
//             · mínimo de personas para que una acción bonificada salga a cuenta
// In company  · mínimo y máximo de personas por grupo
//             · radio de desplazamiento y qué zonas entran
//             · ¿hay recargo por desplazamiento? ¿desde dónde?
//             · duración mínima de contrato
// Comercial   · plazo real de respuesta al presupuesto (la página no da número)
//             · IVA: ¿exento por el art. 20.1.9 LIVA o 21 %? — el dato más
//               preguntado por RR. HH. y el más caro de equivocar
//             · ¿la matrícula de 45 € aplica o no a contratos de empresa?
// Producto    · ¿Linguaskill BUSINESS, además del General? ¿48 h también?
//             · informes de progreso a RR. HH.: ¿los emitimos y cada cuánto?
// ────────────────────────────────────────────────────────────────────────────

const formatos = [
  {
    title: "En vuestras oficinas",
    body: "Vamos nosotros. Es lo que eligen las empresas que tienen sala y prefieren no perder los desplazamientos del equipo, sobre todo cuando la clase va justo antes o justo después de la jornada.",
    detail: "El número mínimo de personas y la zona se cierran en el presupuesto."
  },
  {
    title: "En la academia",
    body: "En Av. de El Ferrol 22, en Barrio del Pilar, a cuatro minutos andando del metro de la línea 9. Dos aulas, London y Manchester. Funciona bien cuando el equipo está repartido y a nadie le sirve la sede de otro.",
    detail: "Abrimos hasta las 21:30 de lunes a jueves."
  },
  {
    title: "Online, en directo",
    body: "Clase en vivo con el mismo profesor, no un campus con vídeos grabados. Es lo único que aguanta un equipo con viajes, turnos o gente en dos ciudades.",
    detail: "Misma tarifa que la clase particular presencial: 29 €/hora."
  }
];

// Reseñas reales de Google, verbatim. Asignación en review-allocation.md.
// Conviene decirlo sin adornos: ninguna es de una empresa cliente. Nadie nos ha
// reseñado nunca como contratante corporativo, así que la prueba social de esta
// página es un profesional que necesitaba inglés para trabajar y dos reseñas
// cortas de adultos. Es el techo honesto hasta que una empresa escriba una.
const localReviews = [
  {
    name: "Raul San Segundo",
    role: "Reseña verificada en Google",
    text: "Me ayudó muchísimo a mejorar mi inglés y poder dar un curso en Canadá. Gracias a Danny pude estar dos semanas hablando en inglés para Osteópatas canadienses con excelentes resultados. Totalmente recomendable y sigo manteniendo mi inglés gracias a él. 👏👏👏👏"
  },
  {
    name: "Fernando Garcia",
    role: "Reseña verificada en Google",
    text: "Buenos profesores, me han ayudado mucho. Gracias."
  },
  {
    name: "Inés I",
    role: "Reseña verificada en Google",
    text: "Con ellos es facilísimo aprender inglés...."
  }
];

export const faqs: FAQItem[] = [
  {
    question: "¿Dais clases de inglés en empresas de la zona norte de Madrid?",
    answer: "Sí. En vuestras oficinas, en la academia de Av. de El Ferrol 22 o en directo online, y se puede combinar. La formación es bonificable a través de FUNDAE. El precio va por presupuesto, porque depende de cuántas personas sois, en qué formato y en qué horario."
  },
  {
    question: "¿Cuánto cuesta el inglés para empresas y por qué no está el precio en la web?",
    answer: "Porque un grupo de cinco personas en vuestra oficina a las ocho de la mañana y una persona sola en clase particular online no se parecen en nada, y poner una cifra única sería mentir en uno de los dos casos. Lo que sí está publicado, y no cambia, es la tarifa de particulares: 29 €/hora presencial u online, y 94 €/mes en el grupo de adultos. El presupuesto de empresa se construye sobre esas cifras."
  },
  {
    question: "¿Desde qué datos podéis pasarnos un presupuesto?",
    answer: "Tres datos: cuántas personas, en qué formato (oficina, academia u online) y en qué franja horaria. Con eso ya se puede cerrar. Si además nos decís para qué necesitáis el inglés (reuniones, cliente internacional, un certificado que os piden), el plan cambia bastante."
  },
  {
    question: "¿Cómo sabéis en qué nivel está cada persona del equipo?",
    answer: "Empezamos por la prueba de nivel: 25 minutos por persona, gratuita, presencial o en línea, y la hace JP, el director de estudios. Al terminar sabéis en qué nivel del MCER está cada uno, que es lo que hace falta para decidir cuántos grupos se abren y quién va en cada uno."
  },
  {
    question: "La empresa nos pide acreditar el nivel. ¿Qué certificado sirve y cuánto se tarda?",
    answer: "Linguaskill, de Cambridge. Somos centro oficial, se puede hacer presencial o desde casa con supervisión remota, y el certificado tarda 48 horas en llegar. Para quien prefiera un título sin caducidad, preparamos también B2 First y C1 Advanced, que son varios meses de preparación en lugar de dos días."
  },
  {
    question: "¿La formación es bonificable por FUNDAE?",
    answer: "Sí, es bonificable. Conviene aclarar una cosa que se malinterpreta a menudo: bonificable no quiere decir gratis. La empresa dispone de un crédito anual de formación y lo aplica en el seguro social; lo que no cubra ese crédito lo paga la empresa. En el presupuesto os decimos qué parte de la gestión llevamos nosotros y qué parte va por vuestra gestoría."
  },
  {
    question: "¿Qué pasa si alguien falta a clase por un viaje o una reunión?",
    answer: "Es la razón por la que existe la modalidad online: quien esté fuera se conecta y no pierde la sesión. En grupos pequeños una ausencia se nota, y preferimos que se conecte desde un hotel a que arrastre el temario dos semanas."
  },
  {
    question: "¿Quién da las clases de inglés de negocios?",
    answer: "Danny Fitzpatrick, cofundador, licenciado en Marketing por ESIC University e irlandés, cuya especialidad es precisamente el inglés de negocios y los adultos. La otra mitad del centro es JP, cofundador y director de estudios, con más de 10 años de docencia. No hay una bolsa de profesores rotando: son ellos dos."
  },
  {
    question: "¿Cómo se llega a la academia desde la zona de oficinas del norte?",
    answer: "Estamos en Av. de El Ferrol 22, a 4 minutos andando del metro de Barrio del Pilar. La línea 9 llega directa desde Plaza de Castilla, Peñagrande, Mirasierra y Montecarmelo, sin transbordo. El autobús 147 recorre el eje de la Castellana y para en Ginzo de Limia - Ferrol, en la propia calle de la academia. No publicamos minutos de trayecto porque dependen de la parada de salida."
  },
  {
    question: "¿Se puede empezar en cualquier momento del año?",
    answer: "Sí. Los grupos de empresa no siguen el calendario escolar, se abren cuando el equipo está listo. Septiembre y enero son los meses en los que más nos escriben, así que si la idea es empezar en septiembre conviene tener la prueba de nivel hecha antes."
  }
];

export const serviceSchema = generateServiceSchema({
  name: "Clases de inglés para empresas en Madrid",
  description: "Formación de inglés para empresas en Madrid: en las oficinas del cliente, en la academia de Barrio del Pilar o en directo online. Bonificable a través de FUNDAE. Centro oficial Cambridge y Linguaskill.",
  url: "https://impulse-english.es/ingles-para-empresas/",
  serviceType: "Business English Training",
});

export default function EmpresasPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const waEmpresa = `${NAP.whatsappUrl}?text=Hola,%20escribo%20desde%20una%20empresa.%20Somos%20___%20personas%20y%20nos%20interesa%20___%20(en%20nuestra%20oficina%20/%20en%20la%20academia%20/%20online)`;

  return (
    <>
      <Navbar />

      {/* Hero */}
      <section className="relative pt-28 pb-20 md:pt-36 md:pb-32 overflow-hidden">
        <div className="absolute inset-0">
          <img src="/images/academy/adult-one-to-one-classes.jpg" alt="Clase de inglés para adultos en Impulse English Academy, el formato que se adapta a los equipos de empresa" className="w-full h-full object-cover" loading="eager" />
          <div className="absolute inset-0 bg-accent-blue/90"></div>
        </div>
        <div className="absolute inset-0 hero-grain opacity-[0.03]"></div>
        <div className="absolute -top-32 -right-32 w-[420px] h-[420px] rounded-full bg-brand-red/[0.05]"></div>

        <div className="relative z-10 container-page">
          <Breadcrumb
            items={[
              { label: 'Cursos de inglés', href: '/cursos-ingles/' },
              { label: 'Inglés para empresas' }
            ]}
            variant="light"
          />

          <div className="max-w-4xl mt-12 md:mt-16">
            <div className="flex items-center gap-4 mb-6 animate-hero-fade-up">
              <div className="w-8 h-px bg-white/40"></div>
              <Building2 className="w-4 h-4 text-brand-red" />
              <span className="font-display text-white/70 text-xs uppercase tracking-[0.2em]">
                Inglés para empresas
              </span>
            </div>
            <h1 className="t-display text-white mb-6 animate-hero-fade-up animation-delay-100">
              Inglés para empresas en Madrid: tres formatos, en vuestra oficina o en La Vaguada
            </h1>
            <div className="w-16 h-0.5 bg-brand-red mb-6 animate-hero-fade-up animation-delay-150"></div>
            <p className="t-lede text-white/85 mb-4 animate-hero-fade-up animation-delay-200">
              Sí, damos clases de inglés en empresas. Vamos a vuestras oficinas, os recibimos en la academia o lo hacemos en directo online, y se puede combinar. La formación es <strong className="text-white">bonificable a través de FUNDAE</strong> y el precio va por presupuesto a medida, porque cinco personas a las ocho de la mañana y una clase particular online no cuestan lo mismo. Empezamos por una <strong className="text-white">prueba de nivel gratuita de 25 minutos</strong> a cada persona del equipo, para saber cuántos grupos hacen falta antes de hablar de dinero.
            </p>
            <div className="flex items-center gap-2 text-white/60 font-display text-sm mb-2 animate-hero-fade-up animation-delay-200">
              <Train className="w-4 h-4" />
              <span>Av. de El Ferrol 22 · a 4 minutos andando del metro de la línea 9</span>
            </div>
            <p className="font-display text-white/50 text-sm mb-8 animate-hero-fade-up animation-delay-200">
              Centro oficial Cambridge y Linguaskill · adultos en grupos de 8
            </p>
            <div className="flex flex-wrap gap-4 animate-hero-fade-up animation-delay-400">
              <a href="#presupuesto" className="btn-primary btn-lg">
                Pedir presupuesto
                <ArrowRight className="w-5 h-5" />
              </a>
              <a href={waEmpresa} target="_blank" rel="noopener noreferrer" className="btn-on-dark btn-lg">
                <WhatsAppIcon className="w-4 h-4" />
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>

      <QuickFacts
        price="Presupuesto a medida"
        facts={[
          "Bonificable por FUNDAE",
          "En vuestra oficina, en la academia u online",
          "Adultos en grupos de 8",
          "Prueba de nivel del equipo, gratuita",
        ]}
        whatsappText="Hola, escribo desde una empresa y quiero información sobre la formación de inglés"
      />

      {/* Los tres formatos */}
      <section className="section px-6 bg-white">
        <div className="container-page">
          <div className="max-w-2xl mb-10">
            <span className="eyebrow mb-4">Los formatos</span>
            <h2 className="t-h2 text-zinc-900 mb-5">Tres maneras de hacerlo, y cuál conviene a cada empresa</h2>
            <div className="rule"></div>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {formatos.map((f, i) => (
              <div key={i} className="card p-6">
                <CheckCircle className="w-6 h-6 text-emerald-600 mb-3" />
                <h3 className="font-bold text-zinc-900 mb-2">{f.title}</h3>
                <p className="t-small text-zinc-600 mb-3">{f.body}</p>
                <p className="t-small text-zinc-500 italic">{f.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FUNDAE */}
      <section className="section px-6 surface-alt">
        <div className="container-narrow">
          <div className="max-w-2xl mb-10">
            <span className="eyebrow mb-4">FUNDAE</span>
            <h2 className="t-h2 text-zinc-900 mb-5">Formación bonificable, que no es lo mismo que gratis</h2>
            <div className="rule"></div>
          </div>
          <p className="t-body mb-6">
            La formación de idiomas para empresas es bonificable a través de FUNDAE, y la nuestra entra. Lo decimos con la matización que casi nunca se hace: <strong className="text-zinc-900">bonificable no quiere decir gratis</strong>. Toda empresa que cotiza por formación dispone de un crédito anual y lo aplica como una reducción en el seguro social. Si el curso cuesta más que el crédito disponible, la diferencia la paga la empresa.
          </p>
          <div className="card p-6">
            <div className="flex items-start gap-3">
              <FileText className="w-5 h-5 text-accent-blue shrink-0 mt-1" />
              <p className="t-small text-zinc-600">
                Cuánto crédito os queda este año, y qué parte de la tramitación llevamos nosotros y qué parte va por vuestra gestoría, lo concretamos en el presupuesto y por escrito. No lo publicamos en la web como si fuera igual para todos, porque no lo es.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Precio */}
      <section className="section px-6 bg-white">
        <div className="container-narrow">
          <div className="max-w-2xl mb-10">
            <span className="eyebrow mb-4">Precio</span>
            <h2 className="t-h2 text-zinc-900 mb-5">Cuánto cuesta el inglés para empresas</h2>
            <div className="rule"></div>
          </div>
          <p className="t-body mb-6">
            No hay una tarifa de empresa publicada, y preferimos explicar por qué antes que esconderlo detrás de un "consúltanos". Un grupo de seis en vuestra oficina a las 8:00 y una persona sola en particular online no se parecen en nada; una cifra única sería falsa en uno de los dos casos.
          </p>
          <p className="t-body mb-6">
            Lo que sí está publicado, y no cambia, es lo que paga un particular: desde 29 €/hora en clase individual. El presupuesto de empresa se construye sobre estas cifras, no sobre otras distintas:
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b-2 border-zinc-200">
                  <th className="py-3 pr-4 font-display text-xs uppercase tracking-wider text-zinc-500">Modalidad</th>
                  <th className="py-3 font-display text-xs uppercase tracking-wider text-zinc-500">Tarifa publicada</th>
                </tr>
              </thead>
              <tbody className="text-zinc-700">
                <tr className="border-b border-zinc-100"><td className="py-3 pr-4 font-medium">Clase particular, presencial u online</td><td className="py-3">29 €/hora</td></tr>
                <tr className="border-b border-zinc-100"><td className="py-3 pr-4 font-medium">Grupo de adultos en la academia</td><td className="py-3">94 €/mes</td></tr>
                <tr className="border-b border-zinc-100"><td className="py-3 pr-4 font-medium">Matrícula (particulares)</td><td className="py-3">45 €, una sola vez</td></tr>
                <tr><td className="py-3 pr-4 font-medium">Libro</td><td className="py-3">40 € como máximo</td></tr>
              </tbody>
            </table>
          </div>
          <p className="t-small text-zinc-500 mt-6">
            Sobre esa base, lo que mueve el presupuesto de una empresa es el número de personas, el formato, la franja horaria y si hay desplazamiento. Decidnos esas cuatro cosas y os lo pasamos por escrito.
          </p>
        </div>
      </section>

      <CTABand
        title="¿Cuántas personas sois y en qué horario?"
        subtitle="Con el número de personas, el formato y la franja ya se puede cerrar un presupuesto."
        ctaText="Pedir presupuesto"
        ctaHref="#presupuesto"
        whatsappText="Hola, escribo desde una empresa. Somos ___ personas y nos interesa ___ (en nuestra oficina / en la academia / online)"
      />

      {/* Prueba de nivel del equipo */}
      <section className="section px-6 surface-alt">
        <div className="container-narrow">
          <div className="max-w-2xl mb-10">
            <span className="eyebrow mb-4">El primer paso</span>
            <h2 className="t-h2 text-zinc-900 mb-5">Primero medimos el nivel de todo el equipo</h2>
            <div className="rule"></div>
          </div>
          <p className="t-body mb-6">
            Casi todas las empresas que nos escriben creen que su equipo tiene "un nivel medio". Casi nunca es así: suele haber dos o tres niveles distintos en la misma sala, y meterlos en un solo grupo es la forma más rápida de que la mitad se aburra y la otra mitad se descuelgue.
          </p>
          <p className="t-body mb-6">
            La prueba de nivel son 25 minutos por persona, gratuitos, presenciales o en línea, y la hace JP en persona. Al terminar tenéis el nivel del MCER de cada uno, que es lo que hace falta para decidir cuántos grupos se abren y quién va en cada uno.
          </p>
          <p className="t-body">
            Si lo que necesitáis es un certificado y no un curso, el camino corto es <a href="/linguaskill/" className="text-accent-blue font-semibold hover:underline">Linguaskill</a>: somos centro oficial, se puede hacer desde casa con supervisión remota y el certificado de Cambridge llega en 48 horas. Para un título sin caducidad, preparamos <a href="/examenes-cambridge/b2-first/" className="text-accent-blue font-semibold hover:underline">B2 First</a> y <a href="/examenes-cambridge/c1-advanced/" className="text-accent-blue font-semibold hover:underline">C1 Advanced</a>.
          </p>
        </div>
      </section>

      {/* Quién da la formación */}
      <section className="section px-6 bg-white">
        <div className="container-page">
          <div className="max-w-2xl mb-10">
            <span className="eyebrow mb-4">Quién la da</span>
            <h2 className="t-h2 text-zinc-900 mb-5">Quién va a estar delante de vuestro equipo</h2>
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
              <p>Una empresa que contrata formación quiere saber una cosa antes que ninguna otra: quién entra por la puerta. Aquí son dos personas, las dos fundadoras, y las dos dan clase.</p>
              <p><strong className="text-zinc-900">Danny Fitzpatrick</strong> es cofundador, irlandés y licenciado en Marketing por ESIC University, y su especialidad es exactamente esto: el inglés de negocios y los adultos. Si el motivo por el que llamáis es el trabajo, es con quien vais a acabar hablando.</p>
              <p><strong className="text-zinc-900">JP</strong> es cofundador y director de estudios, con <strong className="text-zinc-900">más de 10 años</strong> de docencia y otros 10 de vida en Irlanda antes de eso. Lleva la parte académica, hace personalmente las pruebas de nivel de 25 minutos y contesta el WhatsApp del 604 910 611.</p>
              <p>No hay una bolsa de profesores rotando por las cuentas de empresa. El que empieza el curso es el que lo termina.</p>
              <a href="/sobre-nosotros/" className="text-accent-blue font-semibold hover:underline inline-flex items-center gap-1">
                Más sobre Danny y JP <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Caso real */}
      <section className="section px-6 surface-alt">
        <div className="container-narrow">
          {/* CASE STUDY: Raul San Segundo */}
          <div className="max-w-2xl mb-10">
            <span className="eyebrow mb-4">Un caso real</span>
            <h2 className="t-h2 text-zinc-900 mb-5">Raul San Segundo</h2>
            <div className="rule"></div>
          </div>
          <p className="t-body mb-6 max-w-3xl">
            El inglés de trabajo no se mide en aprobados, se mide en si eres capaz de hacer delante de gente aquello para lo que te contrataron. Este es el caso más concreto que tenemos de eso.
          </p>
          <div className="card p-8">
            <div className="grid sm:grid-cols-3 gap-6 mb-6 text-center">
              <div><p className="t-h3 text-accent-blue">Su objetivo</p><p className="t-small text-zinc-600">dar formación profesional en inglés, fuera de España</p></div>
              <div><p className="t-h3 text-accent-blue">2 semanas</p><p className="t-small text-zinc-600">impartiendo en inglés a osteópatas en Canadá</p></div>
              <div><p className="t-h3 text-emerald-600">Después</p><p className="t-small text-zinc-600">sigue manteniendo el nivel</p></div>
            </div>
            <p className="t-body mb-4">
              Lo cuenta él en su reseña de Google: <em>"Me ayudó muchísimo a mejorar mi inglés y poder dar un curso en Canadá. Gracias a Danny pude estar dos semanas hablando en inglés para Osteópatas canadienses con excelentes resultados. Totalmente recomendable y sigo manteniendo mi inglés gracias a él."</em>
            </p>
            <p className="t-body">
              Raul vino por su cuenta, no enviado por su empresa, y conviene decirlo en lugar de vender un caso corporativo que no fue. Pero el trabajo es el mismo que hacemos con un equipo: un objetivo profesional con fecha, y un nivel que tiene que aguantar delante de una sala. Ese objetivo se puede plantear igual desde un B1 que desde un C1; lo que cambia es cuántos meses hacen falta.
            </p>
          </div>
        </div>
      </section>

      {/* Dónde damos las clases */}
      <section className="section px-6 bg-white">
        <div className="container-narrow">
          <div className="max-w-2xl mb-10">
            <span className="eyebrow mb-4">Dónde</span>
            <h2 className="t-h2 text-zinc-900 mb-5">Dónde se dan las clases</h2>
            <div className="rule"></div>
          </div>
          <p className="t-body mb-6">
            Si venís vosotros, la academia está en <strong className="text-zinc-900">Av. de El Ferrol 22</strong>, en Barrio del Pilar, junto al centro comercial La Vaguada, a <strong className="text-zinc-900">4 minutos</strong> andando del metro de la línea 9. La línea 9 llega directa, sin transbordo, desde las zonas de oficinas del norte:
          </p>
          <ul className="space-y-2 t-body mb-6">
            <li>· <strong className="text-zinc-900">Plaza de Castilla</strong>, línea 9 directa.</li>
            <li>· <strong className="text-zinc-900">Peñagrande</strong> y <strong className="text-zinc-900">Mirasierra</strong>, línea 9 directa.</li>
            <li>· <strong className="text-zinc-900">Montecarmelo</strong>, línea 9 directa; desde <strong className="text-zinc-900">Las Tablas</strong>, línea 10 con transbordo en Plaza de Castilla.</li>
            <li>· Autobús <strong className="text-zinc-900">147</strong> por el eje de la Castellana, parada Ginzo de Limia - Ferrol, en la propia calle de la academia.</li>
          </ul>
          <p className="t-body">
            Si vamos nosotros, la zona de desplazamiento se acuerda en el presupuesto. Preferimos concretarlo por escrito para una empresa concreta antes que publicar un radio genérico que después no se sostenga.
          </p>
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
            <span className="eyebrow mb-4">Dudas de RR. HH.</span>
            <h2 className="t-h2 text-zinc-900 mb-5">Preguntas frecuentes sobre inglés para empresas</h2>
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

      {/* Formulario */}
      <section id="presupuesto" className="section-lead px-6 surface-alt">
        <div className="container-page">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="t-h2 text-zinc-900 mb-6">Pedid presupuesto para vuestro equipo</h2>
              <div className="rule mb-6"></div>
              <p className="t-body mb-4">
                Escribidnos con tres datos y os lo pasamos por escrito: <strong className="text-zinc-900">cuántas personas sois</strong>, <strong className="text-zinc-900">en qué formato</strong> (vuestra oficina, la academia u online) y <strong className="text-zinc-900">en qué franja horaria</strong>.
              </p>
              <p className="t-body mb-8">
                Si preferís hablarlo antes, el WhatsApp lo contesta JP directamente y no un comercial.
              </p>
              <div className="flex flex-wrap gap-4">
                <a href={waEmpresa} target="_blank" rel="noopener noreferrer" className="btn-primary">
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
                title="Presupuesto para empresas"
                subtitle="Decidnos cuántas personas sois y en qué formato"
                ctaText="Pedir presupuesto"
                source="empresas"
                showPhone={true}
                showLevel={true}
                variant="refresh"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Enlaces */}
      <section className="section-lead px-6 bg-white border-t border-zinc-100">
        <div className="container-narrow">
          <p className="t-small text-zinc-500 text-center">
            <strong className="text-zinc-600">Relacionado:</strong>{' '}
            <a href="/cursos-ingles/" className="text-accent-blue hover:underline">Todos los cursos</a>
            {' · '}
            <a href="/cursos-ingles/adultos/" className="text-accent-blue hover:underline">Clases de inglés para adultos</a>
            {' · '}
            <a href="/cursos-ingles/particulares/" className="text-accent-blue hover:underline">Clases particulares</a>
            {' · '}
            <a href="/cursos-ingles/online/" className="text-accent-blue hover:underline">Clases online</a>
            {' · '}
            <a href="/linguaskill/" className="text-accent-blue hover:underline">Linguaskill</a>
            {' · '}
            <a href="/academia-ingles-cuatro-torres/" className="text-accent-blue hover:underline">Cuatro Torres</a>
            {' · '}
            <a href="/academia-ingles-chamartin/" className="text-accent-blue hover:underline">Chamartín</a>
            {' · '}
            <a href="/blog/nivel-ingles-empresas/" className="text-accent-blue hover:underline">Qué nivel de inglés piden las empresas</a>
          </p>
        </div>
      </section>

      <Footer />
    </>
  );
}
