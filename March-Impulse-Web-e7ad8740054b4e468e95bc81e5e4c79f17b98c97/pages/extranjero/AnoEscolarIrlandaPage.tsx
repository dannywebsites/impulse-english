import React, { useEffect } from 'react';
import { ArrowRight, CalendarDays, GraduationCap } from 'lucide-react';
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
 * The money page. "año escolar en irlanda" — 480/mo, €13.33 CPC, competencia 40.
 * Season runs Sep 1.000 → Oct 880 → Nov 720, so this is not a September-only page.
 *
 * Narrow subsets stay as H2/H3 here until Search Console shows this page earning
 * impressions for them: curso escolar en irlanda (210), estudiar 4 ESO en irlanda
 * (110), año escolar en irlanda precios (90), estudiar bachillerato en irlanda (90),
 * trimestre en irlanda (70), transition year irlanda (50).
 *
 * NOTE: "año escolar", never "año académico" — the internal name gets 10 searches
 * a month, the search term gets 480.
 */

const duraciones = [
  {
    icon: CalendarDays,
    titulo: 'Curso escolar completo',
    desc: 'De septiembre a mayo o junio, siguiendo el calendario irlandés. Es la opción que más transforma el nivel: al volver, el inglés ha dejado de ser una asignatura.',
  },
  {
    icon: CalendarDays,
    titulo: 'Un trimestre en Irlanda',
    desc: 'Un term completo, normalmente el primero. Buena opción si os da vértigo el curso entero o si el alumno tiene que estar en España para algo concreto.',
  },
  {
    icon: GraduationCap,
    titulo: 'Medio curso',
    desc: 'Dos trimestres. Da margen para que el alumno pase de sobrevivir a desenvolverse, que es donde ocurre el salto real.',
  },
];

// Reseña real de Google, verbatim. También aparece en la página de Montecarmelo:
// duplicado deliberado, autorizado por Danny — es la prueba más directa que existe
// de lo que hacen los monitores, y esta es la página donde se decide.
const reviews = [
  {
    name: 'Antonio Pérez Blázquez',
    text: 'Danny se ha encargado de gestionar la estancia de mi hija con una familia durante tres semanas en un campamento de verano en Irlanda. Ha identificado a las familias, ha acompañados a los chavales, ha estado pendiente de ellos durante su estancia. Ni un sólo pero. Perfecto. Totalmente recomendable.',
  },
  {
    // Voz de padre, que es a quien se dirige esta página. Reseña general.
    name: 'Jose Hernandez',
    text: 'Muy profesionales, mis niños están muy contentos, sin dudas los recomiendo',
  },
];

export const faqs: FAQItem[] = [
  {
    question: '¿Qué es exactamente el año escolar en Irlanda?',
    answer: 'Es cursar un año académico completo en un colegio irlandés, conviviendo con una familia de acogida. El alumno hace las mismas asignaturas que sus compañeros irlandeses, en inglés, y al volver se tramita la convalidación del curso ante el Ministerio de Educación.',
  },
  {
    question: '¿En qué curso conviene irse, 4º de la ESO o Bachillerato?',
    answer: 'Lo más habitual es 4º de la ESO, porque no compromete la nota de acceso a la universidad y la edad suele ser la adecuada. Bachillerato también se hace, pero conviene mirar bien la convalidación y la EBAU antes de decidir.',
  },
  {
    question: '¿Qué es el Transition Year irlandés?',
    answer: 'Es un curso propio del sistema irlandés, entre la secundaria obligatoria y los dos últimos años, dedicado a proyectos, prácticas y actividades más que a exámenes. Encaja muy bien con alumnos españoles de 4º de la ESO porque es el año menos rígido del sistema.',
  },
  {
    question: '¿Se convalida el curso al volver a España?',
    answer: 'La convalidación se tramita ante el Ministerio de Educación y es él quien resuelve: no es automática y depende del curso y de la documentación. El colegio irlandés emite el expediente al terminar. Nosotros te explicamos los pasos antes de que el alumno salga, no cuando vuelve, para que nadie se lleve una sorpresa.',
  },
  {
    question: '¿Cuánto cuesta el año escolar en Irlanda?',
    answer: 'Cambia según la duración, el colegio, el tipo de alojamiento y si incluye vuelos, así que una cifra única sería engañosa. Te pasamos el desglose completo de lo que entra y lo que no, sin compromiso. Escríbenos por WhatsApp con el curso y las fechas.',
  },
  {
    question: '¿Con quién vive mi hijo durante el curso?',
    answer: 'Con una familia de acogida seleccionada por nosotros y nuestros colaboradores en Irlanda, teniendo en cuenta la edad, el carácter, las alergias y la distancia al colegio. No es un reparto automático.',
  },
  {
    question: '¿Hay alguien de Impulse pendiente del alumno allí?',
    answer: 'Sí. Nuestros monitores viajan con los alumnos y están disponibles 24 horas al día durante la estancia, en contacto con la familia de acogida, con el colegio y con vosotros.',
  },
  {
    question: '¿Y si mi hijo no tiene un nivel de inglés alto?',
    answer: 'Es más frecuente de lo que parece y no suele ser el problema. Lo que conviene es medir el nivel antes para elegir bien la duración y el colegio. La prueba de nivel es gratuita y dura 25 minutos.',
  },
  {
    question: '¿Cuándo hay que empezar a organizarlo?',
    answer: 'Cuanto antes mejor: las plazas en colegios y familias se cierran con meses de antelación, sobre todo para el curso que empieza en septiembre. Si estás pensando en el próximo curso, este es el momento de preguntar.',
  },
];

export default function AnoEscolarIrlandaPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Navbar />

      <section className="relative overflow-hidden pt-28 pb-20 md:pt-36 md:pb-28">
        <div className="absolute inset-0 surface-ink"></div>

        <div className="container-page relative z-10">
          <Breadcrumb
            items={[
              { label: 'Inglés en el extranjero', href: '/ingles-en-el-extranjero/' },
              { label: 'Irlanda', href: '/ingles-en-el-extranjero/irlanda/' },
              { label: 'Año escolar' },
            ]}
            variant="light"
          />

          <div className="mt-12 max-w-3xl md:mt-16">
            <span className="eyebrow-light mb-4">Curso escolar en Irlanda</span>
            <h1 className="t-h1 mb-6 text-white">Año escolar en Irlanda</h1>
            <span className="rule-light mb-6"></span>
            <p className="t-lede mb-6 text-white/80">
              Un curso completo o un trimestre en un colegio irlandés, con familia de acogida
              seleccionada y monitores de Impulse disponibles 24 horas al día. Lo organizamos desde
              tu academia de Madrid, no desde un catálogo.
            </p>
            <div className="mb-8 flex flex-wrap gap-3">
              {['4º de la ESO y Bachillerato', 'Curso completo o trimestre', '14 años de experiencia en el sector', 'Prueba de nivel gratis de 25 min'].map((b) => (
                <span key={b} className="t-small rounded-full border border-white/15 px-4 py-2 text-white/80">
                  {b}
                </span>
              ))}
            </div>
            <div className="flex flex-wrap gap-4">
              <a href={NAP.whatsappUrl} className="btn-primary btn-lg" target="_blank" rel="noopener noreferrer">
                <WhatsAppIcon className="h-5 w-5" />
                Pedir información
              </a>
              <a href="#precio" className="btn-on-dark btn-lg">
                Qué incluye y qué no
                <ArrowRight className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container-narrow">
          <div className="mb-10 max-w-2xl">
            <span className="eyebrow mb-4">En qué consiste</span>
            <h2 className="t-h2 mb-5 text-zinc-900">Un curso en un colegio irlandés, no un curso de idiomas</h2>
            <span className="rule"></span>
          </div>
          <div className="t-body measure space-y-4 text-zinc-600">
            <p>
              El año escolar en Irlanda no es un curso de inglés largo. El alumno se matricula en un{' '}
              <strong>colegio irlandés de secundaria</strong> y hace el curso con sus compañeros
              irlandeses: las mismas asignaturas, los mismos exámenes, en inglés. Vive con una{' '}
              <strong>familia de acogida</strong> y, al volver, se tramita la convalidación del curso
              ante el Ministerio de Educación.
            </p>
            <p>
              Esa es la razón por la que funciona. En una academia el inglés dura una hora; allí dura
              todo el día, incluida la cena y la discusión sobre a quién le toca fregar. El nivel
              sube porque no queda alternativa.
            </p>
            <p>
              Es una decisión seria, y no le conviene a todo el mundo ni a cualquier edad. Preferimos
              decírtelo antes que venderte un curso que no encaja.
            </p>
          </div>
        </div>
      </section>

      {/* Duración — curso escolar (210) + trimestre (70) */}
      <section className="section surface-alt">
        <div className="container-page">
          <div className="mb-10 max-w-2xl">
            <span className="eyebrow mb-4">Duración</span>
            <h2 className="t-h2 mb-5 text-zinc-900">Curso completo, medio curso o un trimestre</h2>
            <span className="rule"></span>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {duraciones.map((d) => (
              <div key={d.titulo} className="card p-7">
                <d.icon className="mb-4 h-6 w-6 text-brand-red" />
                <h3 className="t-h3 mb-3 text-zinc-900">{d.titulo}</h3>
                <p className="t-body text-zinc-600">{d.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4 ESO (110) + bachillerato (90) + transition year (50) */}
      <section className="section bg-white">
        <div className="container-narrow">
          <div className="mb-10 max-w-2xl">
            <span className="eyebrow mb-4">Para quién</span>
            <h2 className="t-h2 mb-5 text-zinc-900">Estudiar 4º de la ESO o Bachillerato en Irlanda</h2>
            <span className="rule"></span>
          </div>
          <div className="t-body measure space-y-4 text-zinc-600">
            <p>
              <strong>4º de la ESO</strong> es el curso que más se elige, y con motivo: la edad suele
              ser la adecuada para vivir fuera un año y el curso no entra en la nota de acceso a la
              universidad. El alumno vuelve con el inglés hecho y sin haberse jugado la EBAU.
            </p>
            <p>
              <strong>Bachillerato</strong> también se hace, pero pide más cuidado. Hay que mirar la
              convalidación y cómo encaja con la EBAU antes de decidir nada, y esa conversación es
              mejor tenerla con números delante.
            </p>
            <p>
              Si el alumno es más pequeño, muchas veces la respuesta honesta es esperar un año y
              hacer antes un campamento de verano. No cobramos por decir eso, pero lo decimos.
            </p>
          </div>

          <div className="card-quiet mt-8 p-7">
            <h3 className="t-h3 mb-3 text-zinc-900">Qué es el Transition Year</h3>
            <p className="t-body text-zinc-600">
              El <strong>Transition Year</strong> es un curso propio del sistema irlandés, entre la
              secundaria obligatoria y los dos últimos años. Se dedica a proyectos, prácticas en
              empresas, voluntariado y actividades, en lugar de a preparar exámenes. Encaja
              especialmente bien con un alumno español de 4º de la ESO: es el año más abierto del
              sistema irlandés y el que mejor absorbe a alguien que llega de fuera.
            </p>
          </div>
        </div>
      </section>

      <CTABand
        title="¿Estáis pensando en el curso que viene?"
        subtitle="Las plazas en colegios y familias se cierran con meses de antelación. Cuéntanos el curso y las fechas y te decimos qué hay disponible."
        whatsappText="Hola, me gustaría información sobre el año escolar en Irlanda"
      />

      {/* Monitores */}
      <section className="section surface-alt">
        <div className="container-narrow">
          <div className="mb-10 max-w-2xl">
            <span className="eyebrow mb-4">Acompañamiento</span>
            <h2 className="t-h2 mb-5 text-zinc-900">Quién está con tu hijo mientras está allí</h2>
            <span className="rule"></span>
          </div>
          <div className="t-body measure space-y-4 text-zinc-600">
            <p>
              Los monitores de Impulse <strong>viajan con los alumnos y están disponibles 24 horas al
              día</strong> durante la estancia. Mantienen contacto con la familia de acogida, con el
              colegio y con vosotros.
            </p>
            <p>
              Un año fuera tiene semanas malas: siempre las hay. La diferencia está en que alguien se
              entere el mismo día y pueda sentarse a hablar con el chaval, en lugar de que os
              enteréis vosotros dos semanas después por una llamada rara un domingo.
            </p>
          </div>
        </div>
      </section>

      {/* Precios — año escolar en irlanda precios (90) */}
      <section id="precio" className="section bg-white">
        <div className="container-narrow">
          <div className="mb-10 max-w-2xl">
            <span className="eyebrow mb-4">Precio</span>
            <h2 className="t-h2 mb-5 text-zinc-900">Cuánto cuesta el año escolar en Irlanda</h2>
            <span className="rule"></span>
          </div>
          <div className="t-body measure mb-8 space-y-4 text-zinc-600">
            <p>
              No publicamos una cifra porque no existe una que sea honesta. El precio de un año
              escolar en Irlanda depende del colegio, de si son uno, dos o tres trimestres, del tipo
              de alojamiento, de la zona y de si incluye vuelos. Dos familias pueden pagar cifras muy
              distintas por el mismo programa.
            </p>
            <p>
              Lo que sí hacemos es decirte exactamente qué entra y qué no antes de que te
              comprometas, y pasarte el desglose por escrito.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="card p-7">
              <h3 className="t-h3 mb-4 text-zinc-900">Suele ir incluido</h3>
              <ul className="t-body space-y-2.5 text-zinc-600">
                {[
                  'Plaza en el colegio irlandés',
                  'Alojamiento en familia de acogida',
                  'Manutención durante la estancia',
                  'Selección y seguimiento de la familia',
                  'Monitores de Impulse disponibles 24/7',
                  'Orientación previa y gestión de la convalidación',
                ].map((i) => (
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
                {[
                  'Vuelos y traslados, salvo en salidas de grupo',
                  'Uniforme y material escolar del colegio',
                  'Gastos personales y transporte local',
                  'Excursiones opcionales fuera del programa',
                  'Seguro ampliado, si lo queréis por encima del básico',
                ].map((i) => (
                  <li key={i} className="flex gap-2.5">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-zinc-400"></span>
                    {i}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="mt-8">
            <a href={NAP.whatsappUrl} className="btn-primary" target="_blank" rel="noopener noreferrer">
              <WhatsAppIcon className="h-5 w-5" />
              Pedir el desglose por WhatsApp
            </a>
          </div>
        </div>
      </section>

      <TeacherCard
        heading="Quién lo organiza"
        eyebrow="Quién está detrás"
        imageSrc="/images/academy/daniel-helping-secondary-school-students.jpg"
        imageAlt="Daniel Fitzpatrick dando clase a alumnos de secundaria en Impulse English Academy, Barrio del Pilar"
      >
        <p>
          <strong>Daniel Fitzpatrick</strong>, cofundador de la academia, es{' '}
          <strong>irlandés</strong> y lleva catorce años en este sector. Es quien trata con los
          colegios, quien conoce a las familias de acogida y quien responde cuando preguntas.
        </p>
        <p>
          Doce años afincado en Madrid, profesor titulado de educación física e idiomas y licenciado
          en Marketing por ESIC University. Junto a JP levantó Impulse desde cero en Barrio del
          Pilar.
        </p>
        <p>
          Antes de recomendarte un año escolar querrá saber cómo va tu hijo de inglés, de madurez y
          de ganas. Si la respuesta es que todavía no toca, te lo dirá.
        </p>
      </TeacherCard>

      <GoogleReviews
        heading="Lo que cuenta un padre que ya lo hizo"
        intro="Reseña real publicada en nuestro perfil de Google, sin editar."
        reviews={reviews}
      />

      {/* Fotos reales de Irlanda. Hasta hoy la sección no tenía ninguna imagen de
          destino y los facts lo prohibían explícitamente. Cada página muestra un
          tramo distinto: galerías idénticas en un clúster son la misma señal de
          "esto es la misma página" que los testimonios repetidos. */}
      <AcademyGallery
        images={extranjeroImages.slice(18, 26)}
        pageUrl={`${businessInfo.url}/ingles-en-el-extranjero/irlanda/ano-escolar/`}
        title="El día a día en Irlanda"
        subtitle="Alumnos de Impulse English durante sus estancias en Irlanda"
        maxImages={8}
      />

      <FAQSection
        faqs={faqs}
        title="Preguntas frecuentes sobre el año escolar en Irlanda"
        eyebrow="Dudas habituales"
        variant="refresh"
        defaultOpen="all"
      />

      <CTABand
        title="Cuéntanos el curso y las fechas"
        subtitle="Te decimos qué colegios hay disponibles, cómo va la convalidación y cuánto cuesta, con el desglose completo."
        whatsappText="Hola, me gustaría información sobre el año escolar en Irlanda"
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
