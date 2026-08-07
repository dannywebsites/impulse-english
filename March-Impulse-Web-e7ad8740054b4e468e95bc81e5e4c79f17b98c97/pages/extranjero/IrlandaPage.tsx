import React, { useEffect } from 'react';
import { ArrowRight, Clock, GraduationCap, Home, Plane, ShieldCheck } from 'lucide-react';
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
 * Ireland destination hub. ~1.070/mo combined:
 * curso de inglés en irlanda (260) · estudiar inglés en irlanda (260) ·
 * estudiar en irlanda (210) · colegios en irlanda (170, competencia 20) ·
 * internado en irlanda (170).
 *
 * The año escolar term (480) has its own child page — this hub routes to it
 * rather than competing with it.
 */

const programas = [
  {
    icon: GraduationCap,
    titulo: 'Año escolar y trimestre',
    desc: 'Un curso completo o un trimestre en un colegio irlandés, con familia de acogida. El programa más pedido y el que más nivel da.',
    href: '/ingles-en-el-extranjero/irlanda/ano-escolar/',
    cta: 'Ver el año escolar en Irlanda',
  },
  {
    icon: Plane,
    titulo: 'Campamentos de verano',
    desc: 'De una a cinco semanas en verano: clases por la mañana, actividades y excursiones por la tarde, convivencia con chavales de otros países.',
  },
  {
    icon: Home,
    titulo: 'Cursos para adultos',
    desc: 'Semanas intensivas en Dublín para profesionales. Se organizan según tu nivel y el motivo por el que necesitas el inglés.',
  },
  {
    icon: ShieldCheck,
    titulo: 'Grupos y viajes acompañados',
    desc: 'Salidas de grupo con monitores de Impulse desde Madrid, pensadas para quien prefiere que su hijo viaje con gente conocida.',
  },
];

// Reseña real de Google, verbatim, verificada contra el perfil.
// No estaba asignada a ninguna otra página (reviews/allocation.json).
const reviews = [
  {
    name: 'jorge vila prieto',
    text: 'Una experiencia inigualable . La tranquilidad q transmite Danny Fitzpatrick no tiene precio . Las familias de acogida son encantadoras . El ambiente no puede ser más sano . No habla nadie español y éramos los únicos en el campamento . Mi hija quiere repetir el año q viene . Enhorabuena y gracias',
  },
  {
    // Sobre el miedo a hablar, que es justo la barrera que rompe una inmersión.
    // Reseña general de la academia: no dice ni insinúa que viajara.
    name: 'Begoña Carnicero',
    text: 'Gracias a la gran experiencia y paciencia de Danny y JP he mejorado muchísimo en muy poco tiempo.  Sobre todo a la hora de lanzarme para hablar, me han quitado por completo el miedo. Agradecidisima',
  },
];

export const faqs: FAQItem[] = [
  {
    question: '¿Por qué Irlanda y no Inglaterra o Estados Unidos?',
    answer: 'Está a dos horas de avión, es un país pequeño y seguro, y el sistema escolar acoge alumnos extranjeros con normalidad. Además el acento irlandés es claro y la gente es paciente con quien está aprendiendo, que para un adolescente que llega con miedo a hablar importa más de lo que parece.',
  },
  {
    question: '¿Cómo son los colegios irlandeses que utilizáis?',
    answer: 'Trabajamos con colegios de secundaria y con escuelas de idiomas, según el programa. Uno de nuestros colaboradores en Irlanda es ELI Schools, con centros en Dublín y Drogheda, acreditada por EAQUALS y miembro de English Education Ireland.',
  },
  {
    question: '¿Mi hijo se aloja en un internado o con una familia?',
    answer: 'Lo habitual es familia de acogida, porque es donde de verdad se aprende: en casa se habla inglés y no hay dónde refugiarse en español. Hay también opción de residencia o internado en algunos programas. Lo hablamos según la edad y el carácter del alumno.',
  },
  {
    question: '¿Quién elige la familia de acogida?',
    answer: 'Las familias las seleccionamos con nuestros colaboradores en Irlanda y las conocemos. No es un reparto automático: se tiene en cuenta la edad, si hay hermanos, alergias, si el alumno es más tímido o más lanzado, y la distancia al colegio.',
  },
  {
    question: '¿Va alguien de Impulse con los alumnos?',
    answer: 'Sí. Nuestros monitores viajan con los alumnos y están allí con ellos, disponibles 24 horas al día durante toda la estancia. No dejamos a un chaval en el aeropuerto y nos despedimos.',
  },
  {
    question: '¿Qué nivel de inglés hace falta para irse a Irlanda?',
    answer: 'No hay un mínimo cerrado, pero conviene medirlo antes de elegir duración y programa. Si ya estudias con nosotros lo sabemos; si no, la prueba de nivel es gratuita, dura 25 minutos y sales sabiendo tu nivel MCER.',
  },
  {
    question: '¿Cuánto cuesta estudiar inglés en Irlanda?',
    answer: 'Depende del programa, de las semanas, del alojamiento y de la época. Por eso no publicamos una cifra: preferimos pasarte el desglose real de lo que entra y lo que no. Escríbenos por WhatsApp con la edad y las fechas.',
  },
  {
    question: '¿Qué pasa si mi hijo lo pasa mal o quiere volverse?',
    answer: 'Nos enteramos pronto, porque hay un monitor con ellos y contacto constante con la familia de acogida y con vosotros. La mayoría de los agobios de los primeros días se resuelven hablando; si algo no funciona de verdad, se cambia la familia o se busca solución.',
  },
];

export default function IrlandaPage() {
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
              { label: 'Irlanda' },
            ]}
            variant="light"
          />

          <div className="mt-12 max-w-3xl md:mt-16">
            <span className="eyebrow-light mb-4">Irlanda · Dublín y alrededores</span>
            <h1 className="t-h1 mb-6 text-white">Estudiar inglés en Irlanda</h1>
            <span className="rule-light mb-6"></span>
            <p className="t-lede mb-6 text-white/80">
              Año escolar, trimestre, campamentos de verano y cursos para adultos, con familia de
              acogida y monitores de Impulse que viajan con los alumnos. Es nuestro destino
              principal y del que más experiencia tenemos.
            </p>
            <div className="mb-8 flex flex-wrap gap-3">
              {['Colegios y escuelas acreditadas', 'Monitores 24/7', '14 años de experiencia en el sector', 'Prueba de nivel gratis de 25 min'].map((b) => (
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
              <a href="/ingles-en-el-extranjero/irlanda/ano-escolar/" className="btn-on-dark btn-lg">
                Año escolar en Irlanda
                <ArrowRight className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container-narrow">
          <div className="mb-10 max-w-2xl">
            <span className="eyebrow mb-4">Por qué Irlanda</span>
            <h2 className="t-h2 mb-5 text-zinc-900">El destino que mejor conocemos</h2>
            <span className="rule"></span>
          </div>
          <div className="t-body measure space-y-4 text-zinc-600">
            <p>
              Irlanda está a dos horas de Madrid, es un país pequeño y tranquilo, y sus colegios
              llevan décadas acogiendo alumnos extranjeros. Para una familia que manda a su hijo
              fuera por primera vez, esas tres cosas pesan más que el folleto.
            </p>
            <p>
              También es donde tenemos más contactos. Daniel, cofundador de la academia, es
              irlandés, y buena parte de la red de colegios y familias con la que trabajamos se ha
              construido allí a lo largo de catorce años en el sector.
            </p>
            <p>
              Organizamos <strong>año escolar completo, trimestre, campamentos de verano y cursos
              para adultos</strong>. Lo que cambia entre uno y otro no es solo la duración: es la
              edad, el tipo de alojamiento y cuánto acompañamiento necesita el alumno.
            </p>
          </div>
        </div>
      </section>

      <section className="section surface-alt">
        <div className="container-page">
          <div className="mb-10 max-w-2xl">
            <span className="eyebrow mb-4">Programas</span>
            <h2 className="t-h2 mb-5 text-zinc-900">Qué se puede hacer en Irlanda</h2>
            <span className="rule"></span>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {programas.map((p) => (
              <div key={p.titulo} className="card p-7">
                <p.icon className="mb-4 h-6 w-6 text-brand-red" />
                <h3 className="t-h3 mb-3 text-zinc-900">{p.titulo}</h3>
                <p className="t-body mb-4 text-zinc-600">{p.desc}</p>
                {p.href && (
                  <a href={p.href} className="link-inline inline-flex items-center gap-1.5">
                    {p.cta}
                    <ArrowRight className="h-4 w-4" />
                  </a>
                )}
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
              Esta es la diferencia práctica entre nosotros y una agencia. Los monitores de Impulse{' '}
              <strong>viajan con los alumnos y están allí con ellos, disponibles 24 horas al día</strong>{' '}
              durante toda la estancia. No se trata de un teléfono de emergencia en Madrid.
            </p>
            <p>
              Significa que si un chaval lo está pasando mal la primera semana, alguien se entera
              esa misma tarde. Que si hay un problema con la familia de acogida, hay una persona
              sobre el terreno para resolverlo. Y que vosotros sabéis cómo va, sin tener que
              perseguir a nadie.
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
        title="¿Te cuadra Irlanda para tu hijo?"
        subtitle="Dinos la edad, el nivel y las fechas que barajáis y te decimos qué programa encaja, con el desglose de lo que cuesta."
        whatsappText="Hola, me gustaría información sobre los programas en Irlanda"
        whatsappUrl={NAP.whatsappDaniel}
        whatsappLabel="Escribir a Daniel"
      />

      {/* Colegios e internados — colegios en irlanda (170) / internado en irlanda (170) */}
      <section className="section surface-alt">
        <div className="container-narrow">
          <div className="mb-10 max-w-2xl">
            <span className="eyebrow mb-4">Colegios y alojamiento</span>
            <h2 className="t-h2 mb-5 text-zinc-900">Colegios, internados y familias de acogida</h2>
            <span className="rule"></span>
          </div>
          <div className="t-body measure space-y-4 text-zinc-600">
            <p>
              Los <strong>colegios de Irlanda</strong> con los que trabajamos son centros de
              secundaria que ya tienen alumnos internacionales, así que tu hijo no será una rareza
              en clase. Según el programa, las clases pueden ser en el propio colegio o en una
              escuela de idiomas acreditada.
            </p>
            <p>
              Sobre el alojamiento hay dos caminos. La <strong>familia de acogida</strong> es la
              opción habitual y la que más nivel de inglés da, porque en casa se sigue hablando
              inglés. El <strong>internado</strong> existe en algunos centros y encaja mejor con
              alumnos que prefieren la vida de campus y más estructura.
            </p>
            <p>
              Ninguna de las dos es mejor en abstracto. Depende de la edad, de lo independiente que
              sea el alumno y de cuánto tiempo se vaya. Es exactamente el tipo de decisión en la que
              conviene hablar con alguien que ha visto las dos funcionar y fallar.
            </p>
          </div>
        </div>
      </section>

      <TeacherCard
        heading="Quién organiza los programas en Irlanda"
        eyebrow="Quién está detrás"
        imageSrc="/images/academy/danny-director-extranjero.webp"
        imageAlt="Retrato de Daniel Fitzpatrick, cofundador irlandés de Impulse English Academy, que organiza los programas de inglés en Irlanda"
      >
        <p>
          <strong>Daniel Fitzpatrick</strong> es cofundador de Impulse English Academy y quien lleva
          los programas de Irlanda. Es <strong>irlandés</strong>, lleva doce años afincado en Madrid
          y catorce trabajando en este sector.
        </p>
        <p>
          Profesor titulado de educación física e idiomas y licenciado en Marketing por ESIC
          University, construyó la academia junto a JP desde cero en Barrio del Pilar.
        </p>
        <p>
          Cuando preguntas por un programa en Irlanda hablas con él, no con un comercial: es quien
          conoce los colegios, quien trata con las familias de acogida y quien ha acompañado a otros
          alumnos antes que al tuyo.
        </p>
      </TeacherCard>

      <GoogleReviews
        heading="Lo que cuenta un padre que ya mandó a su hija"
        intro="Reseña real publicada en nuestro perfil de Google, sin editar."
        reviews={reviews}
      />

      {/* Colaboradores */}
      <section className="section bg-white">
        <div className="container-narrow">
          <div className="mb-10 max-w-2xl">
            <span className="eyebrow mb-4">Con quién trabajamos en Irlanda</span>
            <h2 className="t-h2 mb-5 text-zinc-900">Centros acreditados, no intermediarios anónimos</h2>
            <span className="rule"></span>
          </div>
          <div className="t-body measure space-y-4 text-zinc-600">
            <p>
              Uno de nuestros colaboradores en Irlanda es <strong>ELI Schools</strong> (LT Education
              Abroad Limited), con centros en <strong>Dublín y Drogheda</strong>. Está acreditada por{' '}
              <strong>EAQUALS</strong>, la acreditación internacional de calidad en enseñanza de
              idiomas, concedida a sus tres centros en 2026. Es además miembro de{' '}
              <strong>English Education Ireland</strong> y figura en la lista <strong>ILEP</strong> del
              Gobierno irlandés.
            </p>
            <p>
              Decimos con quién trabajamos porque creemos que deberías poder comprobarlo. Una agencia
              que no nombra a sus centros te está pidiendo que confíes sin verificar.
            </p>
          </div>
        </div>
      </section>

      {/* Fotos reales de Irlanda. Hasta hoy la sección no tenía ninguna imagen de
          destino y los facts lo prohibían explícitamente. Cada página muestra un
          tramo distinto: galerías idénticas en un clúster son la misma señal de
          "esto es la misma página" que los testimonios repetidos. */}
      <AcademyGallery
        images={extranjeroImages.slice(8, 18)}
        pageUrl={`${businessInfo.url}/ingles-en-el-extranjero/irlanda/`}
        title="Irlanda, vista por nuestros alumnos"
        subtitle="Excursiones, deporte y convivencia durante las estancias en Irlanda"
        maxImages={8}
      />

      <FAQSection
        faqs={faqs}
        title="Preguntas frecuentes sobre estudiar inglés en Irlanda"
        eyebrow="Dudas habituales"
        variant="refresh"
        defaultOpen="all"
      />

      <CTABand
        title="Habla directamente con Daniel"
        subtitle="Daniel Fitzpatrick es cofundador de la academia, irlandés, y el experto en los viajes al extranjero. Te dice con franqueza qué programa encaja, qué no, y cuánto cuesta de verdad."
        whatsappText="Hola, me gustaría información sobre los programas en Irlanda"
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
