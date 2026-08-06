import React, { useEffect } from 'react';
import { ArrowRight, CalendarDays, Clock, GraduationCap, Home, Plane, ShieldCheck } from 'lucide-react';
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
 * Canadá destination page. One page, not a hub + child like Irlanda.
 *
 * Targeting (Google Ads, España/es, pulled 2026-08-05):
 *   año escolar en canadá     140  CPC 12,90 €   <- H1 y title
 *   estudiar en canadá        260  CPC  5,78 €   (intención mixta: también
 *                                                 universidad e inmigración,
 *                                                 así que se acota a edad
 *                                                 escolar y adultos)
 *   estudiar inglés en canadá  90  CPC 12,61 €
 *   curso escolar en canadá    70  CPC 10,68 €
 *   año académico / bachillerato / intercambio  50 c/u
 *   colegios en canadá 40 · estudiar un año en canadá 30
 *   curso de inglés en canadá  10  <- NO liderar con esto
 *
 * Canadá es el inverso exacto de Malta: allí "curso de inglés" (210) aplasta a
 * "año escolar" (10) y aquí ocurre al revés (140 contra 10). Por eso esta
 * página es de año escolar y Malta nunca debe serlo.
 *
 * La estacionalidad tampoco es la de Irlanda: el pico es MARZO (320), no
 * septiembre. Las familias deciden Canadá con casi un curso de antelación.
 *
 * El conjunto (~700/mo, término principal 140) no da para hub + hija: dos
 * páginas competirían entre sí y ninguna tendría cuerpo suficiente.
 */

const programas = [
  {
    icon: GraduationCap,
    titulo: 'Año escolar completo',
    desc: 'Un curso entero en un colegio canadiense, conviviendo con una familia de acogida. Es el programa que más cambia el nivel, porque el inglés deja de ser una asignatura y pasa a ser el idioma en el que vives.',
  },
  {
    icon: CalendarDays,
    titulo: 'Trimestre o medio curso',
    desc: 'La opción para quien no quiere perder el año en España o prefiere probar antes de comprometerse a un curso completo. Da margen suficiente para pasar de sobrevivir a desenvolverse.',
  },
  {
    icon: Plane,
    titulo: 'Bachillerato y últimos cursos',
    desc: 'Para alumnos de 4º de la ESO y Bachillerato que quieren la experiencia académica canadiense. Aquí conviene hablarlo con calma: la edad y el momento del expediente cambian mucho qué encaja.',
  },
  {
    icon: Home,
    titulo: 'Inmersión para adultos',
    desc: 'Estancias para profesionales que necesitan el inglés para trabajar. Se organizan a medida, según tu nivel y para qué lo necesitas.',
  },
];

// Reseña real de Google, verbatim, verificada contra el perfil.
// No estaba publicada en ninguna otra página del sitio.
// Es una reseña general de familia: prueba de confianza, NO de un viaje a
// Canadá. Ninguna de las 183 reseñas describe una estancia escolar en Canadá.
const reviews = [
  {
    name: 'Jorge Martinez',
    text: 'Impulse Academy es y será la mejor academia para aprender inglés! Los mejores maestros, atención de la mejor calidad y la disponibilidad de horarios que tienen son muy buenos! Danny y JP son grandes profesionales mi hija está encantada con ellos y sus clases. Más que Recomendados al 100% Sigan asi.!💯👌🏻',
  },
  {
    name: 'Daniela janet Luna rodriguez',
    text: 'Es una buena academia para aprender y mejorar tu inglés.',
  },
];

// Reseña real de Google, verbatim. Va en el bloque de adultos y SÓLO ahí.
// Raúl preparó su inglés con nosotros en Madrid y después dio un curso
// profesional en Canadá: no viajó con un programa nuestro. Presentarla como
// prueba de una estancia escolar en Canadá sería atribuirnos un historial que
// no tenemos. El encabezado y la entradilla lo dicen explícitamente.
const reviewsAdultos = [
  {
    name: 'RAUL SAN SEGUNDO',
    text: 'Me ayudó muchísimo a mejorar mi inglés y poder dar un curso en Canadá. Gracias a Danny pude estar dos semanas hablando en inglés para Osteópatas canadienses con excelentes resultados. Totalmente recomendable y sigo manteniendo mi inglés gracias a él. 👏👏👏👏',
  },
];

export const faqs: FAQItem[] = [
  {
    question: '¿Qué es exactamente el año escolar en Canadá?',
    answer: 'Tu hijo cursa un año académico completo en un colegio canadiense y vive con una familia de acogida. Va a clase con alumnos canadienses, no a un aula aparte para extranjeros, y sigue el curso como uno más. Es inmersión de verdad: el inglés deja de ser la asignatura y pasa a ser el idioma en el que hace todo lo demás.',
  },
  {
    question: '¿Se puede hacer sólo un trimestre en vez del curso entero?',
    answer: 'Sí. El trimestre o el medio curso es una opción habitual, y es la que elegís muchas familias que no queréis que el alumno pierda el año en España. Da margen suficiente para que el salto ocurra: las primeras semanas se van en adaptarse, y el cambio real llega después.',
  },
  {
    question: '¿Puedo hacer 1º o 2º de Bachillerato en Canadá?',
    answer: 'Es una de las preguntas que más nos hacéis y no tiene una respuesta única: depende del curso, de las fechas y de qué quiera hacer el alumno después. Lo honesto es sentarnos a mirar tu caso concreto antes de decir que sí. Escríbenos con el curso en el que está y lo vemos.',
  },
  {
    question: '¿Por qué Canadá y no Irlanda?',
    answer: 'Irlanda está a dos horas de avión y es donde más experiencia tenemos, así que para una primera salida corta suele ser lo más sensato. Canadá encaja mejor cuando lo que se busca es la experiencia académica de un curso completo en un colegio público y no importa que esté lejos. Si dudas entre los dos, te lo decimos con franqueza según la edad y el carácter del alumno.',
  },
  {
    question: '¿Cómo son los colegios canadienses?',
    answer: 'Son colegios públicos que ya escolarizan alumnos internacionales, así que tu hijo no será una rareza en clase. El sistema es académicamente exigente pero menos memorístico que el español, con bastante peso del trabajo continuo y de las asignaturas optativas.',
  },
  {
    question: '¿Dónde se aloja mi hijo?',
    answer: 'Con una familia de acogida. Es lo que hace que el programa funcione: en casa se sigue hablando inglés y no hay dónde refugiarse en español. La familia se elige teniendo en cuenta la edad, si hay hermanos, alergias y la distancia al colegio, no por sorteo.',
  },
  {
    question: '¿Va alguien de Impulse con los alumnos?',
    answer: 'Sí. Nuestros monitores viajan con los alumnos y están con ellos, disponibles 24 horas al día durante la estancia. No dejamos a un chaval en el aeropuerto y nos despedimos, que es exactamente la diferencia entre una academia que envía a sus propios alumnos y una agencia que vende plazas.',
  },
  {
    question: '¿Con cuánta antelación hay que organizarlo?',
    answer: 'Con más de la que la gente cree. Las familias que se van a Canadá suelen empezar a mirarlo un curso antes, y las plazas y los trámites no son cosa de un mes. Si estás pensando en el curso que viene, este es un buen momento para hablarlo, no en verano.',
  },
  {
    question: '¿Qué nivel de inglés hace falta?',
    answer: 'No hay un mínimo cerrado, pero conviene medirlo antes de decidir la duración. Si ya estudias con nosotros lo sabemos; si no, la prueba de nivel es gratuita, dura 25 minutos con JP y sales sabiendo tu nivel MCER real.',
  },
  {
    question: '¿Cuánto cuesta el año escolar en Canadá?',
    answer: 'Depende del programa, de las semanas, del colegio y del alojamiento, así que no publicamos una cifra que luego no se parezca a tu caso. Preferimos pasarte el desglose real de lo que entra y lo que no entra en el precio. Escríbenos por WhatsApp con la edad y el curso.',
  },
];

export default function CanadaPage() {
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
              { label: 'Canadá' },
            ]}
            variant="light"
          />

          <div className="mt-12 max-w-3xl md:mt-16">
            <span className="eyebrow-light mb-4">Canadá · colegio público y familia de acogida</span>
            <h1 className="t-h1 mb-6 text-white">Año escolar en Canadá</h1>
            <span className="rule-light mb-6"></span>
            <p className="t-lede mb-6 text-white/80">
              Un curso completo o un trimestre en un colegio canadiense, viviendo con una familia de
              acogida, con monitores de Impulse que viajan con los alumnos. Lo organiza tu academia
              de Madrid, no una agencia que te ve por primera vez.
            </p>
            <div className="mb-8 flex flex-wrap gap-3">
              {['Colegio público canadiense', 'Monitores 24/7', '14 años de experiencia en el sector', 'Prueba de nivel gratis de 25 min'].map((b) => (
                <span key={b} className="t-small rounded-full border border-white/15 px-4 py-2 text-white/80">
                  {b}
                </span>
              ))}
            </div>
            <div className="flex flex-wrap gap-4">
              <a href={NAP.whatsappUrl} className="btn-primary btn-lg" target="_blank" rel="noopener noreferrer">
                <WhatsAppIcon className="h-5 w-5" />
                Pregúntanos por WhatsApp
              </a>
              <a href="#programas" className="btn-on-dark btn-lg">
                Ver los programas
                <ArrowRight className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* estudiar en canadá (260) — se acota para no competir con la intención
          universitaria y de inmigración, que es otra búsqueda y otro negocio */}
      <section className="section bg-white">
        <div className="container-narrow">
          <div className="mb-10 max-w-2xl">
            <span className="eyebrow mb-4">Por qué Canadá</span>
            <h2 className="t-h2 mb-5 text-zinc-900">Estudiar en Canadá, con la escuela como centro</h2>
            <span className="rule"></span>
          </div>
          <div className="t-body measure space-y-4 text-zinc-600">
            <p>
              Canadá es un destino seguro, con un acento claro y una experiencia académica muy
              valorada. Los colegios públicos escolarizan alumnos internacionales con normalidad, y
              eso se nota: tu hijo entra en una clase, no en un programa aparte para extranjeros.
            </p>
            <p>
              Es un destino distinto de Irlanda y conviene decirlo. Está lejos, el viaje es largo y
              el compromiso suele ser de un curso o un trimestre, no de tres semanas. A cambio, el
              alumno vuelve con un año académico hecho en inglés, que es otra cosa que un verano.
            </p>
            <p>
              Organizamos <strong>año escolar completo, trimestre, cursos de Bachillerato e
              inmersión para adultos</strong>. Lo montamos nosotros, con nuestra red de contactos y
              colaboradores construida a lo largo de catorce años en el sector.
            </p>
          </div>
        </div>
      </section>

      <section id="programas" className="section surface-alt">
        <div className="container-page">
          <div className="mb-10 max-w-2xl">
            <span className="eyebrow mb-4">Programas</span>
            <h2 className="t-h2 mb-5 text-zinc-900">Qué se puede hacer en Canadá</h2>
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

      {/* Monitores — el diferenciador real frente a una agencia */}
      <section className="section bg-white">
        <div className="container-narrow">
          <div className="mb-10 max-w-2xl">
            <span className="eyebrow mb-4">Acompañamiento</span>
            <h2 className="t-h2 mb-5 text-zinc-900">Nuestros monitores viajan con los alumnos</h2>
            <span className="rule"></span>
          </div>
          <div className="t-body measure space-y-4 text-zinc-600">
            <p>
              Cuando el destino está a siete horas de avión, esto importa más, no menos. Los
              monitores de Impulse{' '}
              <strong>viajan con los alumnos y están con ellos, disponibles 24 horas al día</strong>{' '}
              durante la estancia. No es un teléfono de emergencia en Madrid con horario de oficina.
            </p>
            <p>
              Significa que si un chaval lo está pasando mal la primera semana, alguien se entera esa
              misma tarde. Que si algo no funciona con la familia de acogida, hay una persona sobre
              el terreno para resolverlo. Y que vosotros sabéis cómo va sin tener que perseguir a
              nadie desde otro huso horario.
            </p>
          </div>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {[
              { icon: Plane, t: 'Viajan con el grupo', d: 'Desde Madrid y de vuelta.' },
              { icon: Clock, t: 'Disponibles 24/7', d: 'Durante toda la estancia.' },
              { icon: Home, t: 'Contacto con la familia', d: 'Con la de acogida y con la vuestra.' },
            ].map((c) => (
              <div key={c.t} className="card-quiet p-6">
                <c.icon className="mb-3 h-5 w-5 text-brand-red" />
                <h3 className="t-h3 mb-2 text-zinc-900">{c.t}</h3>
                <p className="t-small text-zinc-600">{c.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABand
        title="¿Estás mirando Canadá para el curso que viene?"
        subtitle="Dinos la edad, el curso y las fechas que barajáis y te decimos con franqueza qué encaja, qué no y cuánto cuesta de verdad."
        whatsappText="Hola, me gustaría información sobre el año escolar en Canadá"
      />

      {/* colegios en canadá (40) · bachillerato en canadá (50) · curso escolar (70) */}
      <section className="section surface-alt">
        <div className="container-narrow">
          <div className="mb-10 max-w-2xl">
            <span className="eyebrow mb-4">Colegios y alojamiento</span>
            <h2 className="t-h2 mb-5 text-zinc-900">Colegios canadienses y familias de acogida</h2>
            <span className="rule"></span>
          </div>
          <div className="t-body measure space-y-4 text-zinc-600">
            <p>
              Los <strong>colegios de Canadá</strong> con los que trabajamos son centros públicos con
              alumnado internacional. El sistema es exigente, pero menos memorístico que el español:
              pesa mucho el trabajo continuo y hay margen para elegir optativas, lo que suele sentar
              bien a un alumno que en España va justo de motivación.
            </p>
            <p>
              El alojamiento es en <strong>familia de acogida</strong>, y no es un detalle logístico.
              Es la mitad del programa. Un alumno que sale de clase y vuelve a una casa donde se
              habla inglés está expuesto al idioma todo el día; uno que vuelve con compatriotas, no.
            </p>
            <p>
              Elegir bien el colegio y la familia es la parte en la que de verdad se nota tener a
              alguien que ha visto esto funcionar y fallar. Ahí es donde os asesoramos: no os
              enseñamos un catálogo, os decimos qué encaja con vuestro hijo.
            </p>
          </div>
        </div>
      </section>

      <TeacherCard
        heading="Quién organiza los programas en el extranjero"
        eyebrow="Quién está detrás"
        imageSrc="/images/academy/daniel-helping-secondary-school-students.jpg"
        imageAlt="Daniel Fitzpatrick, cofundador de Impulse English Academy, con alumnos de secundaria en clase en Madrid"
      >
        <p>
          <strong>Daniel Fitzpatrick</strong> es cofundador de Impulse English Academy y quien lleva
          los programas en el extranjero. Es <strong>irlandés</strong>, lleva doce años afincado en
          Madrid y catorce trabajando en este sector.
        </p>
        <p>
          Profesor titulado de educación física e idiomas y licenciado en Marketing por ESIC
          University, construyó la academia junto a JP desde cero en Barrio del Pilar.
        </p>
        <p>
          Cuando preguntas por Canadá hablas con él, no con un comercial. Y si cree que a tu hijo le
          conviene más Irlanda, o esperar un año, te lo va a decir.
        </p>
      </TeacherCard>

      <GoogleReviews
        heading="Lo que dicen las familias de la academia"
        intro="Reseña real publicada en nuestro perfil de Google, sin editar."
        reviews={reviews}
      />

      {/* Adultos — estudiar inglés en canadá (90) tiene intención adulta y
          profesional además de escolar. La reseña de Raúl va AQUÍ y sólo aquí,
          con el encabezado y la entradilla diciendo qué prueba y qué no. */}
      <section className="section bg-white">
        <div className="container-narrow">
          <div className="mb-10 max-w-2xl">
            <span className="eyebrow mb-4">Adultos y profesionales</span>
            <h2 className="t-h2 mb-5 text-zinc-900">Canadá para adultos: preparar el inglés que vas a usar allí</h2>
            <span className="rule"></span>
          </div>
          <div className="t-body measure space-y-4 text-zinc-600">
            <p>
              No todo el que busca inglés y Canadá tiene quince años. Muchos sois profesionales que
              vais a trabajar, a formaros o a dar un curso allí, y lo que necesitáis no es un año
              escolar: es llegar hablando.
            </p>
            <p>
              Eso se puede hacer de dos maneras, y las dos las cubrimos. Una es{' '}
              <strong>preparar el inglés aquí, en Madrid</strong>, enfocado a lo que vas a tener que
              hacer allí. La otra es una <strong>estancia de inmersión</strong>, organizada a medida
              según tu nivel y tus fechas.
            </p>
          </div>
        </div>
      </section>

      <GoogleReviews
        heading="Un alumno adulto que preparó su inglés aquí y lo usó en Canadá"
        intro="Reseña real de Google, sin editar. Raúl preparó su inglés con nosotros en Madrid antes de dar un curso profesional a osteópatas canadienses; no viajó con un programa nuestro."
        reviews={reviewsAdultos}
      />

      {/* Cómo trabajamos — sin nombrar centros concretos en Canadá, que es algo
          que no está verificado. ELI Schools es colaborador en IRLANDA y
          nombrarlo aquí sería trasladar una acreditación a otro país. */}
      <section className="section surface-alt">
        <div className="container-narrow">
          <div className="mb-10 max-w-2xl">
            <span className="eyebrow mb-4">Cómo trabajamos</span>
            <h2 className="t-h2 mb-5 text-zinc-900">Una academia que envía a sus propios alumnos</h2>
            <span className="rule"></span>
          </div>
          <div className="t-body measure space-y-4 text-zinc-600">
            <p>
              La diferencia entre nosotros y una agencia no es el folleto: es que a tu hijo ya lo
              conocemos. Sabemos su nivel real, cómo va en clase y si es de los que se lanza o de los
              que necesita dos semanas para abrir la boca. El programa se elige a partir de eso.
            </p>
            <p>
              Los montamos con <strong>nuestra red de contactos y colaboradores</strong>, construida
              a lo largo de catorce años en el sector. Y si algo no nos parece adecuado para un
              alumno concreto, lo decimos, aunque eso signifique no vender el viaje.
            </p>
            <p>
              Si estás comparando destinos, puedes ver también{' '}
              <a href="/ingles-en-el-extranjero/irlanda/" className="link-inline">
                los programas en Irlanda
              </a>{' '}
              o{' '}
              <a href="/ingles-en-el-extranjero/" className="link-inline">
                todos los destinos
              </a>
              .
            </p>
          </div>
        </div>
      </section>

      {/* Fotos reales de Irlanda. Hasta hoy la sección no tenía ninguna imagen de
          destino y los facts lo prohibían explícitamente. Cada página muestra un
          tramo distinto: galerías idénticas en un clúster son la misma señal de
          "esto es la misma página" que los testimonios repetidos. */}
      <AcademyGallery
        images={extranjeroImages.slice(26, 34)}
        pageUrl={`${businessInfo.url}/ingles-en-el-extranjero/canada/`}
        title="Nuestros viajes, por dentro"
        subtitle="Fotos de nuestras estancias en Irlanda, el destino del que más experiencia tenemos"
        maxImages={8}
      />

      <FAQSection
        faqs={faqs}
        title="Preguntas frecuentes sobre el año escolar en Canadá"
        eyebrow="Dudas habituales"
        variant="refresh"
        defaultOpen="all"
      />

      <CTABand
        title="Hablamos y te lo contamos sin compromiso"
        subtitle="Te decimos con franqueza qué programa encaja, qué no, y cuánto cuesta de verdad."
        whatsappText="Hola, me gustaría información sobre el año escolar en Canadá"
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
