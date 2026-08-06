import React, { useEffect } from 'react';
import { ArrowRight, Globe2, Home, ShieldCheck, Users } from 'lucide-react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import Breadcrumb from '../../components/Breadcrumb';
import LeadForm from '../../components/LeadForm';
import CTABand from '../../components/CTABand';
import TeacherCard from '../../components/TeacherCard';
import GoogleReviews from '../../components/GoogleReviews';
import FAQSection from '../../components/FAQSection';
import WhatsAppIcon from '../../components/icons/WhatsAppIcon';
import AcademyGallery from '../../components/AcademyGallery';
import { extranjeroImages } from '../../src/data/extranjeroImages';
import { businessInfo } from '../../utils/schemaData';
import { NAP } from '../../utils/napData';
import type { FAQItem } from '../../utils/schemaData';

/**
 * Pillar for the study-abroad cluster.
 *
 * Targets the destination-agnostic "…en el extranjero" family (~1.410/mo combined):
 * estudiar inglés en el extranjero (390) · cursos de inglés en el extranjero (170) ·
 * año escolar en el extranjero (170) · inmersión lingüística (170, competencia 24) ·
 * cursos de idiomas (140) · cursos en el extranjero (140) · cursos de verano (110).
 *
 * Every fact here is in geo-pages facts/impulse-english.facts.md. Note what is
 * deliberately absent: no ACELS claim (ELI publishes EAQUALS, not ACELS), no
 * description of what the monitores do as a first-party claim, and no photograph
 * presented as taken abroad — the repo has none.
 */

// Los cuatro destinos son reales y están aprobados como oferta viva. Sólo dos
// tienen página propia todavía: `href` se omite en los otros dos y la tarjeta se
// renderiza sin enlace, invitando a preguntar. Enlazar a una URL que no existe es
// un 404 en la cara del visitante y una señal muerta para Google — peor que no
// enlazar. Cuando Malta y Estados Unidos tengan página, se les añade el href.
const destinos = [
  {
    nombre: 'Irlanda',
    href: '/ingles-en-el-extranjero/irlanda/',
    resumen: 'Nuestro destino principal. Año escolar completo, trimestre, campamentos de verano y cursos para adultos, con familia de acogida en Dublín y alrededores.',
    para: 'Desde 4º de ESO y Bachillerato hasta adultos',
  },
  {
    nombre: 'Canadá',
    href: '/ingles-en-el-extranjero/canada/',
    resumen: 'Año escolar en colegio público canadiense e inmersión para adultos. Un destino seguro, con acento claro y una experiencia académica muy valorada.',
    para: 'Año escolar y adultos',
  },
  {
    nombre: 'Malta',
    resumen: 'Cursos intensivos de inglés en un país donde el inglés es lengua oficial, con clima mediterráneo. Funciona especialmente bien para adultos y para veranos cortos.',
    para: 'Adultos y jóvenes en verano',
  },
  {
    nombre: 'Estados Unidos',
    resumen: 'Año escolar y estancias en Estados Unidos, la opción clásica para quien quiere la experiencia del instituto americano.',
    para: 'Año escolar y estancias',
  },
];

const programas = [
  {
    icon: Globe2,
    titulo: 'Año escolar en el extranjero',
    desc: 'Un curso completo o un trimestre en un colegio del país, conviviendo con una familia de acogida. Es el programa que más nos piden y el que más cambia el nivel de inglés de un adolescente.',
  },
  {
    icon: Users,
    titulo: 'Campamentos y cursos de verano',
    desc: 'De una a cinco semanas en verano, combinando clases por la mañana con actividades y excursiones. La primera experiencia fuera de casa para muchos chavales.',
  },
  {
    icon: Home,
    titulo: 'Estancias en familia de acogida',
    desc: 'Inmersión real: la familia habla inglés en casa y el alumno deja de tener dónde refugiarse en español. Es la parte que de verdad mueve el nivel oral.',
  },
  {
    icon: ShieldCheck,
    titulo: 'Cursos de inglés para adultos',
    desc: 'Semanas intensivas para profesionales que necesitan el inglés para trabajar. Se organizan a medida, según el nivel y el motivo por el que lo necesitas.',
  },
];

// Reseñas reales de Google, verbatim, verificadas contra el perfil.
// Ninguna estaba asignada a otra página (GEO-Content-Project/reviews/allocation.json).
// Las dos reseñas que hablan de los viajes van en las páginas de destino que les
// corresponden — jorge vila prieto en Irlanda, RAUL SAN SEGUNDO en Canadá — para
// que la prueba esté donde se toma la decisión.
const reviews = [
  {
    name: 'Gaby s',
    text: 'Excelente academia para aprender o mejorar tu inglés gracias a Danny y JP',
  },
  {
    name: 'Lucía Fernández Casanova',
    text: 'Excelentes profesionales y un trato inmejorable. Recomendable 100%',
  },
  {
    name: 'Maria Dolores Muñoz',
    text: 'Un profesorado con un gran nivel y calidad humana',
  },
];

export const faqs: FAQItem[] = [
  {
    question: '¿Qué diferencia hay entre una academia y una agencia de cursos en el extranjero?',
    answer: 'Una agencia te vende un programa y no te había visto nunca. Nosotros somos la academia donde estudias durante el año, así que conocemos tu nivel real, tu carácter y qué necesitas reforzar antes de salir. El viaje se elige a partir de eso, no de un catálogo.',
  },
  {
    question: '¿A qué destinos organizáis programas de inglés?',
    answer: 'Irlanda, Malta, Canadá y Estados Unidos. Irlanda es el destino principal y del que más experiencia tenemos: es donde llevamos más años enviando alumnos y donde mejor conocemos las familias y los colegios.',
  },
  {
    question: '¿Cuánto cuesta un programa de inglés en el extranjero?',
    answer: 'Depende del destino, de la duración, del tipo de alojamiento y de la época del año, así que no publicamos un precio de escaparate que luego no se parece a la factura. Escríbenos por WhatsApp con la edad y las fechas y te pasamos el desglose completo.',
  },
  {
    question: '¿Con qué escuelas trabajáis fuera de España?',
    answer: 'Trabajamos con varios centros según el destino y el programa. En Irlanda, uno de nuestros colaboradores es ELI Schools, con centros en Dublín y Drogheda, acreditado por EAQUALS y miembro de English Education Ireland. En España colaboramos también con KBL Languages, miembro de ASEPROCE.',
  },
  {
    question: '¿Qué edad tiene que tener mi hijo para irse al extranjero?',
    answer: 'Para campamentos de verano solemos hablar de 12 años en adelante. Para un año escolar completo, lo habitual es 4º de ESO o 1º de Bachillerato. Más que la edad importa la madurez, y eso lo valoramos hablando con la familia antes de recomendar nada.',
  },
  {
    question: '¿Hace falta un nivel mínimo de inglés para irse fuera?',
    answer: 'No hay un nivel mínimo cerrado, pero conviene saber dónde estás antes de decidir el destino y la duración. Si ya estudias con nosotros lo sabemos; si no, la prueba de nivel es gratuita y dura 25 minutos.',
  },
  {
    question: '¿Podéis aconsejarme aunque no vaya a contratar el viaje con vosotros?',
    answer: 'Sí. Llevamos catorce años en el sector y nos gusta que las familias tomen la decisión con información real, aunque acaben yendo por otro camino. Pregunta lo que necesites y te orientamos.',
  },
  {
    question: '¿Qué es una inmersión lingüística y por qué funciona?',
    answer: 'Es pasar el día entero en inglés: clase, casa, compras y tiempo libre. Funciona porque elimina la posibilidad de cambiar al español cuando cuesta, que es exactamente el momento en el que se aprende. Un mes fuera mueve más el oral que un curso entero de clases sueltas.',
  },
];

export default function ExtranjeroHubPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Navbar />

      {/* Hero */}
      <section className="relative overflow-hidden pt-28 pb-20 md:pt-36 md:pb-28">
        <div className="absolute inset-0">
          <img
            src="/images/academy/outside-academy.jpg"
            alt="Fachada de Impulse English Academy en Barrio del Pilar, la academia que organiza los programas de inglés en el extranjero"
            className="h-full w-full object-cover"
            loading="eager"
          />
          <div className="absolute inset-0 bg-accent-blue/90"></div>
        </div>

        <div className="container-page relative z-10">
          <Breadcrumb items={[{ label: 'Inglés en el extranjero' }]} variant="light" />

          <div className="mt-12 max-w-3xl md:mt-16">
            <span className="eyebrow-light mb-4">Programas en el extranjero</span>
            <h1 className="t-h1 mb-6 text-white">Estudiar inglés en el extranjero, desde tu academia de Madrid</h1>
            <span className="rule-light mb-6"></span>
            <p className="t-lede mb-6 text-white/80">
              Año escolar, trimestre, campamentos de verano y cursos para adultos en Irlanda, Malta,
              Canadá y Estados Unidos. Los organizamos nosotros, con catorce años en el sector y una
              red de colegios y familias que conocemos de primera mano.
            </p>
            <div className="mb-8 flex flex-wrap gap-3">
              {['Irlanda · Malta · Canadá · EE. UU.', '5,0 sobre 183 reseñas', '14 años de experiencia en el sector', 'Prueba de nivel gratis de 25 min'].map((b) => (
                <span key={b} className="t-small rounded-full border border-white/15 px-4 py-2 text-white/80">
                  {b}
                </span>
              ))}
            </div>
            <div className="flex flex-wrap gap-4">
              <a href={NAP.whatsappDaniel} className="btn-primary btn-lg" target="_blank" rel="noopener noreferrer">
                <WhatsAppIcon className="h-5 w-5" />
                Habla directamente con Daniel
              </a>
              <a href="#destinos" className="btn-on-dark btn-lg">
                Ver destinos
                <ArrowRight className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Answer capsule */}
      <section className="section bg-white">
        <div className="container-narrow">
          <div className="mb-10 max-w-2xl">
            <span className="eyebrow mb-4">Qué hacemos</span>
            <h2 className="t-h2 mb-5 text-zinc-900">Somos una academia que manda a sus propios alumnos fuera</h2>
            <span className="rule"></span>
          </div>
          <div className="t-body measure space-y-4 text-zinc-600">
            <p>
              Impulse English Academy es una academia de inglés en Barrio del Pilar. No somos una
              agencia de viajes: damos clase todo el año en Madrid y, cuando un alumno está listo
              para dar el salto, organizamos su estancia en el extranjero nosotros mismos.
            </p>
            <p>
              Esa es la diferencia práctica. Cuando una agencia te coloca en un programa, empieza de
              cero contigo. Nosotros ya sabemos qué nivel tienes, si te bloqueas al hablar, si vas
              justo de gramática o si lo que te falta es soltura. El destino, la duración y el tipo
              de alojamiento se eligen a partir de eso.
            </p>
            <p>
              Trabajamos con <strong>viajes propios</strong> y con una red de contactos y colegios
              construida a lo largo de <strong>catorce años en el sector</strong>. Y si solo quieres
              que alguien te oriente antes de decidir, también lo hacemos: preguntar no cuesta nada.
            </p>
          </div>
        </div>
      </section>

      {/* Destinos */}
      <section id="destinos" className="section surface-alt">
        <div className="container-page">
          <div className="mb-10 max-w-2xl">
            <span className="eyebrow mb-4">Destinos</span>
            <h2 className="t-h2 mb-5 text-zinc-900">Dónde enviamos alumnos</h2>
            <span className="rule"></span>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {destinos.map((d) =>
              d.href ? (
                <a key={d.nombre} href={d.href} className="card-interactive block p-7">
                  <span className="eyebrow mb-3">{d.para}</span>
                  <h3 className="t-h3 mb-3 text-zinc-900">{d.nombre}</h3>
                  <p className="t-body mb-4 text-zinc-600">{d.resumen}</p>
                  <span className="link-inline inline-flex items-center gap-1.5">
                    Ver programas en {d.nombre}
                    <ArrowRight className="h-4 w-4" />
                  </span>
                </a>
              ) : (
                <div key={d.nombre} className="card block p-7">
                  <span className="eyebrow mb-3">{d.para}</span>
                  <h3 className="t-h3 mb-3 text-zinc-900">{d.nombre}</h3>
                  <p className="t-body mb-4 text-zinc-600">{d.resumen}</p>
                  <span className="t-small text-zinc-500">
                    Pregúntanos por {d.nombre} y te contamos las fechas y las plazas disponibles.
                  </span>
                </div>
              )
            )}
          </div>
        </div>
      </section>

      <CTABand
        title="¿No sabes qué destino le conviene a tu hijo?"
        subtitle="Cuéntanos la edad, el nivel y las fechas que barajáis y te decimos con franqueza qué encaja y qué no."
        whatsappText="Hola, me gustaría información sobre los programas de inglés en el extranjero"
        whatsappUrl={NAP.whatsappDaniel}
        whatsappLabel="Escribir a Daniel"
      />

      {/* Programas */}
      <section className="section bg-white">
        <div className="container-page">
          <div className="mb-10 max-w-2xl">
            <span className="eyebrow mb-4">Tipos de programa</span>
            <h2 className="t-h2 mb-5 text-zinc-900">Qué se puede hacer fuera</h2>
            <span className="rule"></span>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {programas.map((p) => (
              <div key={p.titulo} className="card p-7">
                <p.icon className="mb-4 h-6 w-6 text-brand-red" />
                <h3 className="t-h3 mb-3 text-zinc-900">{p.titulo}</h3>
                <p className="t-body text-zinc-600">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quién lo organiza */}
      <TeacherCard
        heading="Quién organiza los programas"
        eyebrow="Quién está detrás"
        imageSrc="/images/academy/secondary-students-danny-helping-student.jpg"
        imageAlt="Daniel Fitzpatrick, cofundador irlandés de Impulse English Academy, con una alumna en clase en Barrio del Pilar"
      >
        <p>
          <strong>Daniel Fitzpatrick</strong> es cofundador de Impulse English Academy y quien lleva
          los programas en el extranjero. Es <strong>irlandés</strong>, lleva doce años afincado en
          Madrid y catorce trabajando en este sector, así que conoce los dos lados: el colegio de
          allí y la familia de aquí.
        </p>
        <p>
          Es profesor titulado de educación física e idiomas y licenciado en Marketing por ESIC
          University. Junto a JP construyó la academia desde cero en Barrio del Pilar.
        </p>
        <p>
          En la práctica significa que quien te atiende cuando preguntas por un año escolar es la
          misma persona que conoce a las familias de acogida y que ha acompañado a otros alumnos
          antes que al tuyo.
        </p>
      </TeacherCard>

      {/* Colaboradores */}
      <section className="section surface-alt">
        <div className="container-narrow">
          <div className="mb-10 max-w-2xl">
            <span className="eyebrow mb-4">Con quién trabajamos</span>
            <h2 className="t-h2 mb-5 text-zinc-900">Colegios y colaboradores acreditados</h2>
            <span className="rule"></span>
          </div>
          <div className="t-body measure space-y-4 text-zinc-600">
            <p>
              No improvisamos el destino. Según el programa trabajamos con distintos centros, y los
              elegimos por acreditación y por trato, no por comisión.
            </p>
            <p>
              En Irlanda, uno de nuestros colaboradores es <strong>ELI Schools</strong> (LT Education
              Abroad Limited), con centros en <strong>Dublín y Drogheda</strong>. Está acreditada por{' '}
              <strong>EAQUALS</strong> —la acreditación internacional de calidad en enseñanza de
              idiomas, concedida a sus tres centros en 2026—, es miembro de{' '}
              <strong>English Education Ireland</strong> y figura en la lista <strong>ILEP</strong> del
              Gobierno irlandés.
            </p>
            <p>
              En España colaboramos también con <strong>KBL Languages</strong>, con sede en Mataró y
              miembro de <strong>ASEPROCE</strong>, la asociación española de promotores de cursos en
              el extranjero.
            </p>
          </div>
        </div>
      </section>

      <GoogleReviews
        heading="Lo que dicen las familias que ya han ido"
        intro="Reseñas reales publicadas en nuestro perfil de Google, sin editar."
        reviews={reviews}
      />

      {/* Qué incluye */}
      <section className="section bg-white">
        <div className="container-narrow">
          <div className="mb-10 max-w-2xl">
            <span className="eyebrow mb-4">Presupuesto</span>
            <h2 className="t-h2 mb-5 text-zinc-900">Por qué no verás un precio en esta página</h2>
            <span className="rule"></span>
          </div>
          <div className="t-body measure mb-8 space-y-4 text-zinc-600">
            <p>
              Porque no existe un precio único honesto. Lo que pagas cambia según el destino, las
              semanas, el tipo de alojamiento, la época del año y si el vuelo va incluido. Publicar
              una cifra de escaparate y luego corregirla al alza nos parece una forma fea de empezar.
            </p>
            <p>
              Lo que sí podemos decirte es exactamente qué entra y qué no, antes de que te
              comprometas a nada.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="card p-7">
              <h3 className="t-h3 mb-4 text-zinc-900">Suele ir incluido</h3>
              <ul className="t-body space-y-2.5 text-zinc-600">
                {['Plaza en el colegio o la escuela de idiomas', 'Alojamiento en familia de acogida o residencia', 'Manutención según el programa', 'Seguimiento desde Madrid durante la estancia', 'Orientación previa sobre nivel y destino'].map((i) => (
                  <li key={i} className="flex gap-2.5">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-red"></span>
                    {i}
                  </li>
                ))}
              </ul>
            </div>
            <div className="card-quiet p-7">
              <h3 className="t-h3 mb-4 text-zinc-900">Suele ir aparte</h3>
              <ul className="t-body space-y-2.5 text-zinc-600">
                {['Vuelos, salvo que se contrate el grupo completo', 'Gastos personales y transporte local', 'Material escolar y uniforme, si el colegio lo exige', 'Excursiones opcionales fuera del programa', 'Trámites de visado, cuando el destino lo requiere'].map((i) => (
                  <li key={i} className="flex gap-2.5">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-zinc-400"></span>
                    {i}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Fotos reales de Irlanda. Hasta hoy la sección no tenía ninguna imagen de
          destino y los facts lo prohibían explícitamente. Cada página muestra un
          tramo distinto: galerías idénticas en un clúster son la misma señal de
          "esto es la misma página" que los testimonios repetidos. */}
      <AcademyGallery
        images={extranjeroImages.slice(0, 8)}
        pageUrl={`${businessInfo.url}/ingles-en-el-extranjero/`}
        title="Nuestros alumnos en Irlanda"
        subtitle="Fotos reales de los viajes que organizamos, no imágenes de catálogo"
        maxImages={8}
      />

      <FAQSection
        faqs={faqs}
        title="Preguntas frecuentes sobre estudiar inglés en el extranjero"
        eyebrow="Dudas habituales"
        variant="refresh"
        defaultOpen="all"
      />

      <CTABand
        title="Habla directamente con Daniel"
        subtitle="Edad, fechas aproximadas y qué esperáis del viaje. Daniel Fitzpatrick, cofundador irlandés y experto en los viajes al extranjero, te responde con una recomendación concreta y el desglose de lo que cuesta."
        whatsappText="Hola, me gustaría información sobre los programas de inglés en el extranjero"
        whatsappUrl={NAP.whatsappDaniel}
        whatsappLabel="Escribir a Daniel"
      />

      {/* Dónde estamos. Esta página vende una decisión que se toma hablando, y la
          conversación se puede tener en persona: la academia es un sitio real con
          una puerta. Dirección y horario salen de utils/napData.ts, fuente única,
          para que no se queden desactualizados aquí cuando cambien. */}
      <section className="section-tight surface-alt">
        <div className="container-narrow">
          <div className="mb-8 max-w-2xl">
            <span className="eyebrow mb-4">Dónde estamos</span>
            <h2 className="t-h2 mb-5 text-zinc-900">Ven a hablarlo en persona</h2>
            <span className="rule"></span>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="card-quiet p-6">
              <h3 className="t-h3 mb-2 text-zinc-900">La academia</h3>
              <p className="t-body text-zinc-600">{NAP.fullAddress}</p>
              <a href={NAP.phoneTel} className="link-inline mt-3 inline-block">
                {NAP.phone}
              </a>
            </div>
            <div className="card-quiet p-6">
              <h3 className="t-h3 mb-2 text-zinc-900">Horario</h3>
              <ul className="t-small space-y-1 text-zinc-600">
                {NAP.openingHoursText.map((h) => (
                  <li key={h}>{h}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <LeadForm />
      <Footer />
    </>
  );
}
