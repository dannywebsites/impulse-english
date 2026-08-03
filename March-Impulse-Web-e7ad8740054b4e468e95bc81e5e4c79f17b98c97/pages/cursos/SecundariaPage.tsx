import React, { useEffect } from 'react';
import { GraduationCap, FileText, Target, TrendingUp, Clock, Award, Users, Phone, Calendar, CheckCircle } from 'lucide-react';
import QuickFacts from '../../components/QuickFacts';
import TeacherCard from '../../components/TeacherCard';
import GoogleReviews from '../../components/GoogleReviews';
import PriceLocationCards from '../../components/PriceLocationCards';
import CTABand from '../../components/CTABand';
import { NAP } from '../../utils/napData';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import LeadForm from '../../components/LeadForm';
import LazyVideo from '../../components/LazyVideo';
import OptimizedImage from '../../components/OptimizedImage';
import Breadcrumb from '../../components/Breadcrumb';
import FAQSection from '../../components/FAQSection';
import { generateCourseSchema, businessInfo } from '../../utils/schemaData';
import type { FAQItem } from '../../utils/schemaData';
import AcademyGallery from '../../components/AcademyGallery';
import { secundariaImages as galleryImages } from '../../src/data/academyImages';
import { studentImages } from '../../src/data/images';
import WhatsAppIcon from '../../components/icons/WhatsAppIcon';

export const courseSchema = generateCourseSchema({
  name: "Curso de Inglés Secundaria (13-17 años)",
  description: "Clases de inglés para secundaria en La Vaguada / Barrio del Pilar. Preparación EBAU y Cambridge B1, B2, C1 con grupos reducidos y seguimiento. 100% de aprobados Cambridge en el curso 2024/25 (alumnos presentados).",
  url: `${businessInfo.url}/cursos-ingles/secundaria`,
  courseCode: "SEC-CAM",
  educationalLevel: "Secondary",
  timeRequired: "PT2H",
  image: "/images/academy/img-4117.png"
});

export const faqs: FAQItem[] = [
  {
    question: "¿Dónde estáis y cómo llegan los chicos en metro?",
    answer: "Av. de El Ferrol, 22, junto al centro comercial La Vaguada. Metro Barrio del Pilar (Línea 9) está a 3 minutos andando, así que vienen solos sin problema."
  },
  {
    question: "¿Cuánto se tarda desde los institutos del barrio?",
    answer: "Desde los institutos de Barrio del Pilar y La Vaguada, unos 5 a 10 minutos andando, que es lo que permite encajar las clases justo después del instituto."
  },
  {
    question: "¿Desde qué barrios vienen los alumnos de secundaria?",
    answer: "Sobre todo de Barrio del Pilar, La Vaguada, Peñagrande, Mirasierra, Montecarmelo, Las Tablas y Chamartín."
  },
  {
    question: "¿Hay parada de bus cerca para volver a casa?",
    answer: "Los buses 147, 42 y 83 paran en Ginzo de Limia - Ferrol, a 1 minuto de la academia."
  },
  {
    question: "¿Qué nivel suele tener un alumno de 4º ESO?",
    answer: "Suele estar alrededor de B1, aunque varía mucho. Por eso hacemos prueba de nivel y observación, para no perder tiempo. Si el alumno está en B1, trazamos un plan para consolidar base y avanzar hacia B2, que es el estándar más solicitado."
  },
  {
    question: "¿B1 o B2 para Bachillerato y universidad?",
    answer: "Muchas universidades piden B1-B2, y en la práctica B2 abre más puertas. Recomendamos definir el objetivo según plazos: si hay urgencia, se planifica certificación; si hay margen, se construye nivel para que el examen no sea un \"milagro\", sino consecuencia."
  },
  {
    question: "¿Preparáis EBAU/Selectividad?",
    answer: "Integramos preparación EBAU dentro del programa: comprensión, writing, vocabulario y estructura. Cuando el alumno alcanza nivel real B2, la EBAU se vuelve mucho más manejable. Trabajamos técnica de examen y práctica guiada sin descuidar el idioma real."
  },
  {
    question: "¿Cuándo es buen momento para preparar B2 First?",
    answer: "Cuando el alumno ya opera con comodidad en B1 alto: entiende textos, participa oralmente y sostiene writing básico. Tras la prueba de nivel, marcamos un calendario realista y añadimos simulacros periódicos. El objetivo es llegar al examen con experiencia, no con nervios."
  },
  {
    question: "¿Los grupos son por edad o por nivel?",
    answer: "Por nivel real. Eso acelera el progreso y evita frustración. En secundaria hay mucha diferencia entre alumnos del mismo curso: algunos necesitan base, otros ya van a certificación. Al agrupar por nivel, cada alumno trabaja lo que le toca y avanza más rápido."
  },
  {
    question: "¿Cambridge ayuda con el instituto?",
    answer: "Mejorar nivel real (vocabulario, comprensión y gramática funcional) impacta directamente en exámenes y tareas del instituto. Además, la práctica de writing y reading para Cambridge fortalece habilidades que se usan en clase. No es \"extra\": es el mismo idioma, mejor trabajado."
  },
  {
    question: "¿Qué es mejor: Cambridge o Linguaskill?",
    answer: "Depende del objetivo y del plazo. Cambridge es una certificación muy reconocida y estable; Linguaskill es ideal cuando necesitas un resultado rápido para un requisito concreto. Te asesoramos según universidad/empresa y calendario, para que elijas lo más eficiente."
  },
  {
    question: "¿Hay prueba de nivel gratuita?",
    answer: "Hacemos prueba de nivel gratuita para ubicar al alumno en el grupo correcto y proponer el plan más realista. Sin compromiso."
  },
  // Kids Secondary PAAs (7)
  {
    question: "¿Adolescentes se aburren en clase de inglés?",
    answer: "Pueden, si el método es tradicional (gramática + libros). Por eso combinamos temas que interesan (viajes, redes sociales, películas), dinámicas interactivas y debates. A esta edad, el inglés es vehículo para conversar sobre lo que les importa, no la meta en sí."
  },
  {
    question: "¿Speaking es lo difícil en Secundaria?",
    answer: "Speaking genera nervios. Por eso empezamos con conversación grupal sobre temas seguros, después parejas, después presentaciones. La exposición repetida reduce ansiedad exponencialmente. En 8-12 semanas bien hechas, el miedo desaparece."
  },
  {
    question: "¿Preparar examen sin perder motivación?",
    answer: "Combinando: 70% idioma real (conversación, películas, libros interesantes) + 30% técnica examen (tareas tipo, simulacros). El inglés vivo mantiene motivación; la técnica asegura resultado. Sin balance, cansa o fracasa."
  },
  {
    question: "¿C1 es realista en Secundaria?",
    answer: "Para alumnos brillantes que empezaron en Primaria. Generalmente alcanzables B2 con constancia en 3-4 años, C1 en 5-6 años. No es imposible pero requiere dedicación especial y metodología intensiva. Algunos alumnos lo alcanzan, otros necesitan más tiempo."
  },
  {
    question: "¿Smartphones ayudan o distraen?",
    answer: "Ambas. Prohibir es contraproducente. Mejor integrar: WhatsApp en inglés con profesor, apps de vocabulario, Duolingo gaming, TikTok/Instagram en inglés. Adolescentes usan móvil de todas formas; enseñémosles a usarlo para inglés."
  },
  {
    question: "¿Cambios de voz en adolescentes afectan Speaking?",
    answer: "Un poco durante la pubertad, pero no es impedimento. El acento y entonación se trabajan igual. Algunos adolescentes temporalmente \"pierden\" confianza en voz; lo superan con práctica y ambiente seguro. Importa más la confianza psicológica que el cambio vocal."
  },
  {
    question: "¿Opciones después de Secundaria: viaje, intercambio?",
    answer: "Excelentes inversiones de valor educativo. Viaje 2-3 semanas a país anglófono: inmersión real, motivación explosiva. Intercambio 3-6 meses: bilingüismo funcional. Valor: equivale a 6-12 meses de academia intensiva. Mejor combinar: 1-2 años academia + verano viaje/intercambio."
  }
];

export default function SecundariaPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
<Navbar />

      {/* Hero Section */}
      <section className="relative pt-28 pb-20 md:pt-36 md:pb-32 overflow-hidden">
        <div className="absolute inset-0">
          <OptimizedImage
            image={studentImages.teenagers}
            className="w-full h-full object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-indigo-950/70"></div>
        </div>
        <div className="absolute inset-0 hero-grain opacity-[0.03]"></div>
        <div className="absolute -top-36 -right-36 w-[460px] h-[460px] rounded-full bg-indigo-400/[0.05]"></div>
        <div className="absolute -bottom-24 -left-16 w-72 h-72 rounded-full bg-purple-400/[0.06]"></div>

        <div className="relative z-10 container mx-auto px-6 md:px-12">
          <Breadcrumb
            items={[
              { label: 'Cursos', href: '/cursos-ingles/infantil/' },
              { label: 'Secundaria (13-17 años)' }
            ]}
            variant="light"
          />

          <div className="max-w-3xl mt-12 md:mt-16">
            <div className="flex items-center gap-4 mb-6 animate-hero-fade-up">
              <div className="w-8 h-px bg-white/40"></div>
              <span className="font-display text-white/70 text-xs uppercase tracking-[0.2em]">
                13-17 años · EBAU + Cambridge B1-C1
              </span>
            </div>
            <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl text-white tracking-tight leading-[1.1] mb-6 animate-hero-fade-up animation-delay-100">
              Inglés para secundaria y EBAU en La Vaguada, de 13 a 17 años
            </h1>
            <div className="w-16 h-0.5 bg-brand-red mb-6 animate-hero-fade-up animation-delay-150"></div>
            <p className="font-display text-lg md:text-xl text-white/80 font-light leading-relaxed max-w-2xl mb-10 animate-hero-fade-up animation-delay-200">
              Preparamos el inglés de la ESO, Bachillerato y EBAU para alumnos de 13 a 17 años en Av. de El Ferrol, 22, junto al centro comercial La Vaguada, en Barrio del Pilar. Grupos por nivel real y preparación Cambridge B1, B2 y C1 desde 87 €/mes.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 animate-hero-fade-up animation-delay-300">
              <a
              href="/prueba-de-nivel-ingles/"
                className="bg-white text-indigo-950 font-display font-semibold py-4 px-8 rounded-lg hover:bg-amber-50 transition-all duration-300 text-center"
              >
                Prueba de nivel GRATIS
              </a>
              <a
                href="tel:+34604910611"
                className="backdrop-blur-sm text-white border border-white/25 font-display font-medium py-4 px-8 rounded-lg hover:bg-white/10 transition-all duration-300 text-center flex items-center justify-center gap-2"
              >
                <Phone className="w-4 h-4" />
                Llamar ahora
              </a>
            </div>
          </div>
        </div>
      </section>

      <QuickFacts
        price="Desde 87 €/mes"
        facts={[
          "Máx. 10 alumnos",
          "2 horas/semana",
          "Grupos por nivel real, no por curso",
          "100% aprobados Cambridge 24/25 (presentados)",
        ]}
        whatsappText="Hola, me gustaría información sobre las clases de secundaria y EBAU"
      />

      {/* Main Content */}
      <section className="section px-6 surface-alt">
        <div className="container mx-auto max-w-4xl">
          <div className="mb-12">
            <h2 className="t-h2 text-zinc-900 mb-6">
              Preparados para todo
            </h2>

            <div className="prose prose-lg text-zinc-600">
              <p className="mb-4">
                No elegimos entre instituto y certificación: integramos ambos. Cuando el nivel sube, el rendimiento académico mejora "por defecto", y la certificación llega con método, práctica y simulacros.
              </p>
            </div>

            {/* Cambridge Badge */}
            <div className="mt-8 p-6 bg-indigo-50 rounded-xl border border-indigo-200">
              <div className="flex items-start gap-4">
                <div className="w-16 h-16 bg-indigo-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <Award className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-zinc-900 text-lg mb-2">Centro Oficial de Preparación Cambridge y Centro Oficial de Preparación Linguaskill</h3>
                  <p className="text-zinc-600 text-sm">
                    Preparamos con enfoque oficial y planificación por objetivos. Si necesitas certificar rápido para universidad, Linguaskill permite resultados en 48h (según convocatoria).
                  </p>
                </div>
              </div>
            </div>

            {/* Location and Certification Links */}
            <div className="mt-6 p-4 bg-indigo-50 rounded-xl border border-indigo-100">
              <p className="text-zinc-700 text-sm mb-3">
                <strong>¿Dónde estamos?</strong> Nuestra <a href="/academia-ingles-barrio-del-pilar/" className="text-indigo-600 hover:underline font-medium">academia en Barrio del Pilar</a>, junto a <a href="/academia-ingles-la-vaguada/" className="text-indigo-600 hover:underline font-medium">La Vaguada</a>, está a solo 2 minutos del metro.
              </p>
              <p className="text-zinc-600 text-sm">
                Prepara tu <a href="/examenes-cambridge/b1-preliminary/" className="text-indigo-600 hover:underline font-medium">B1 Preliminary</a>, <a href="/examenes-cambridge/b2-first/" className="text-indigo-600 hover:underline font-medium">B2 First</a> o C1 Advanced. Si necesitas certificar rápido para la universidad, <a href="/linguaskill/" className="text-indigo-600 hover:underline font-medium">Linguaskill</a> te da resultados en 48h.
              </p>
            </div>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              {
                icon: <GraduationCap className="w-6 h-6" />,
                title: "Preparación EBAU",
                description: "Dominar el inglés para la selectividad es automático cuando tu nivel real es B2 o superior."
              },
              {
                icon: <Award className="w-6 h-6" />,
                title: "Cambridge B1-C1",
                description: "B1 Preliminary, B2 First, C1 Advanced. Certificados que abren puertas."
              },
              {
                icon: <FileText className="w-6 h-6" />,
                title: "Apoyo académico",
                description: "Si tienes dudas del instituto, te echamos una mano. Pero nuestro enfoque va más allá."
              },
              {
                icon: <Target className="w-6 h-6" />,
                title: "Objetivos claros",
                description: "Evaluación continua para que sepas exactamente dónde estás y hacia dónde vas."
              },
              {
                icon: <TrendingUp className="w-6 h-6" />,
                title: "Grupos por nivel",
                description: "No importa tu curso escolar: te ubicamos según tu nivel real de inglés."
              },
              {
                icon: <Clock className="w-6 h-6" />,
                title: "Horarios de tarde",
                description: "Adaptados al horario escolar. Grupos de tarde y posibilidad de intensivos."
              }
            ].map((feature, index) => (
              <div key={index} className="card p-6 flex items-start gap-4">
                <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center text-indigo-600 flex-shrink-0">
                  {feature.icon}
                </div>
                <div>
                  <h3 className="font-bold text-zinc-900 mb-1">{feature.title}</h3>
                  <p className="text-zinc-600 text-sm">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Section - Above Levels */}
      <section className="section px-6 surface-alt">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-8">
            <h2 className="t-h3 text-zinc-900 mb-4">
              Preparación EBAU y Cambridge B1-C1
            </h2>
            <p className="text-zinc-600">
              Cómo ayudamos a los estudiantes de secundaria a alcanzar sus objetivos
            </p>
          </div>
          <LazyVideo
            videoId="yYf0hsBtd14"
            title="Inglés para ESO y Bachillerato - EBAU y Cambridge"
            className="shadow-panel"
          />
        </div>
      </section>

      {/* Certifications Section */}
      <section className="section-lead px-6 bg-indigo-600">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="t-h2 text-white mb-4">
            Certifica tu nivel antes de la universidad
          </h2>
          <p className="text-white/80 mb-8">
            Las universidades piden B1-B2. Nosotros te preparamos para certificarlo con Cambridge o Linguaskill
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="bg-white/10 p-6 rounded-xl">
              <h3 className="font-bold text-white mb-2">Exámenes Cambridge</h3>
              <p className="text-white/70 text-sm mb-4">B1 Preliminary, B2 First, C1 Advanced</p>
              <a
              href="/examenes-cambridge/"
                className="inline-block bg-white text-indigo-600 font-bold py-2 px-4 rounded-lg hover:bg-amber-400 hover:text-indigo-900 transition-colors text-sm"
              >
                Ver exámenes Cambridge
              </a>
            </div>
            <div className="bg-white/10 p-6 rounded-xl">
              <h3 className="font-bold text-white mb-2">Linguaskill</h3>
              <p className="text-white/70 text-sm mb-4">Certificado en 48h. Ideal para requisitos universitarios urgentes</p>
              <a
              href="/linguaskill/"
                className="inline-block bg-white text-indigo-600 font-bold py-2 px-4 rounded-lg hover:bg-amber-400 hover:text-indigo-900 transition-colors text-sm"
              >
                Conocer Linguaskill
              </a>
            </div>
          </div>
          <p className="text-white/90 font-medium">
            100% de aprobados Cambridge en el curso 2024/25 (alumnos presentados)
          </p>
        </div>
      </section>

      {/* Levels & Pricing Section */}
      <section className="section px-6 bg-white">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="t-h2 text-zinc-900 mb-4">
              Niveles disponibles
            </h2>
            <p className="text-zinc-500 text-lg">
              Grupos de 2 horas semanales
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-indigo-50 p-8 rounded-2xl border border-indigo-100">
              <h3 className="text-xl font-bold text-zinc-900 mb-4">Niveles disponibles</h3>
              <ul className="space-y-3">
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-emerald-600" />
                  <span className="text-zinc-700"><strong>A2-B1:</strong> Base sólida para ESO</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-emerald-600" />
                  <span className="text-zinc-700"><strong>B1 Preliminary:</strong> Nivel intermedio certificado</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-emerald-600" />
                  <span className="text-zinc-700"><strong>B2 First:</strong> El estándar universitario</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-emerald-600" />
                  <span className="text-zinc-700"><strong>C1 Advanced:</strong> Nivel profesional</span>
                </li>
              </ul>
            </div>

            <div className="bg-green-50 p-8 rounded-2xl border border-green-100">
              <h3 className="text-xl font-bold text-zinc-900 mb-4">¿Qué incluye?</h3>
              <ul className="space-y-3">
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-emerald-600" />
                  <span className="text-zinc-700">2 horas semanales en grupo</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-emerald-600" />
                  <span className="text-zinc-700">Material Cambridge oficial</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-emerald-600" />
                  <span className="text-zinc-700">Simulacros de examen periódicos</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-emerald-600" />
                  <span className="text-zinc-700">Seguimiento personalizado</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-emerald-600" />
                  <span className="text-zinc-700">Preparación EBAU incluida</span>
                </li>
              </ul>
            </div>
          </div>

          {/* CTA */}
          <div className="mt-12 text-center">
            <div className="inline-block bg-green-100 text-green-800 font-bold px-6 py-3 rounded-full mb-6">
              Prueba de nivel gratuita
            </div>
            <p className="text-zinc-600 mb-6">
              Te ubicamos en el grupo adecuado según tu nivel real. Sin compromiso.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
              href="/prueba-de-nivel-ingles/"
                className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-4 px-8 rounded-lg transition-colors"
              >
                Solicitar prueba de nivel
              </a>
              <a
                href="https://wa.me/34604910611?text=Hola,%20me%20gustaría%20información%20sobre%20inglés%20para%20secundaria"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-whatsapp hover:bg-whatsapp-dark text-white font-bold py-4 px-8 rounded-lg transition-colors flex items-center justify-center gap-2"
              >
                <WhatsAppIcon className="w-5 h-5" />
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section - Photos above FAQs */}
      <AcademyGallery
        images={galleryImages}
        pageUrl={`${businessInfo.url}/cursos-ingles/secundaria`}
        title="Nuestros alumnos de secundaria"
        subtitle="Preparación para EBAU y certificaciones Cambridge B1, B2 y C1"
        maxImages={12}
      />

      {/* FAQ Section - With Schema Markup */}
      <FAQSection
        faqs={faqs}
        title="Preguntas frecuentes sobre inglés para secundaria"
        variant="refresh"
      />

      {/* Lead Form */}
      <section className="section-lead px-6 bg-white">
        <div className="container mx-auto max-w-3xl">
          <LeadForm
            title="Pide la prueba de nivel de tu hijo/a"
            subtitle="Evaluamos su nivel y le ubicamos en el grupo adecuado. Sin compromiso"
            ctaText="Pedir prueba de nivel"
            source="curso-secundaria"
            showPhone={true}
            showAge={true}
            showLevel={true}
            variant="refresh"
          />
        </div>
      </section>


      <TeacherCard
        heading="Quién prepara los exámenes"
        imageAlt="JP, director de estudios de Impulse English Academy, responsable de la preparación Cambridge y EBAU en La Vaguada"
      >
            <p>La preparación de B1, B2, C1 y EBAU la lleva JP, director de estudios y cofundador, con más de 10 años enseñando inglés. Danny, cofundador, es irlandés y trabaja en Madrid desde hace 12 años.</p>
      </TeacherCard>

      {/* CASE STUDY: Antonio Pérez Blázquez */}
      {/* Un caso real contado por la propia familia — cita verbatim de Google */}
      <section className="section bg-white px-6">
        <div className="container-narrow">
          <span className="eyebrow mb-4">Un caso real</span>
          <h2 className="t-h2 text-zinc-900 mb-5">Antonio Pérez Blázquez</h2>
          <div className="rule"></div>
          <p className="t-body my-6 max-w-3xl text-zinc-600">
            Con adolescentes, el salto suele darse fuera del aula. Antonio cuenta cómo fue el verano de su hija en Irlanda, organizado por Danny.
          </p>
          <div className="card p-8">
            <div className="grid sm:grid-cols-3 gap-6 mb-6 text-center">
              <div><p className="t-h3 text-accent-blue">3 semanas</p><p className="t-small text-zinc-600">en Irlanda</p></div>
              <div><p className="t-h3 text-accent-blue">Familia anfitriona</p><p className="t-small text-zinc-600">seleccionada por Danny</p></div>
              <div><p className="t-h3 text-accent-blue">Acompañados</p><p className="t-small text-zinc-600">durante toda la estancia</p></div>
            </div>
            {[
              { name: "Antonio Pérez Blázquez", text: "Danny se ha encargado de gestionar la estancia de mi hija con una familia durante tres semanas en un campamento de verano en Irlanda. Ha identificado a las familias, ha acompañados a los chavales, ha estado pendiente de ellos durante su estancia. Ni un sólo pero. Perfecto. Totalmente recomendable." }
            ].map((r) => (
              <blockquote key={r.name}>
                <p className="t-body mb-3 text-zinc-600">&laquo;{r.text}&raquo;</p>
                <cite className="t-small text-zinc-900 not-italic font-semibold">{r.name}, reseña en Google</cite>
              </blockquote>
            ))}
          </div>
        </div>
      </section>

      <CTABand
        title="Prueba de nivel gratuita antes de elegir grupo"
        subtitle="25 minutos con JP para situar el nivel real y decidir si toca B1, B2 o C1."
        whatsappText="Hola, me gustaría reservar una prueba de nivel para secundaria"
      />

      <PriceLocationCards heading="Cuánto cuesta el curso de secundaria">
        <p>Secundaria va por cursos: S1-S3 <strong>87 €/mes</strong> o <strong>251 €/trimestre</strong>; S4-S6 <strong>91 €/mes</strong> o <strong>263 €/trimestre</strong>; S7-S8 <strong>93 €/mes</strong> o <strong>269 €/trimestre</strong>. Desde <strong>87 €/mes</strong>.</p>
        <p>Aparte quedan la matrícula (<strong>45 €</strong>), el libro (<strong>máximo 40 €</strong>) y las tasas del examen Cambridge, que se pagan solo si te presentas. Hay descuento por pago trimestral y descuento familiar.</p>
      </PriceLocationCards>

      <GoogleReviews
        heading="Lo que dicen las familias de secundaria"
        intro="Reseñas de madres y padres publicadas en nuestro perfil de Google, sin editar."
        reviews={[
              { name: "Luis Martin Gonzalez", text: "100% recomendable, merece la pena. De echo mi hijo ahora sigue con JP, para prestarse sus exámenes de titulación Gran persona JP y su método" },
              { name: "Rodrigo Sanz", text: "Muy buen profesor, muy cercano y asequible. Realmente contento con esta academia del barrio. Los chicos van felices a clase. Gran tranquilidad para los padres." },
              { name: "Laura García Lomas", text: "Una suerte encontrar esta academia con tan grandes profesionales. Gracias a ellos he conseguido el B2, la metodología hace que aprendas rápido y no olvides" }
            ,
              { name: "Manuel Casas Herrero", text: "Danny es un excelente profesional que vive con pasion su labor didactica. Nuestros hijos son biligues gracias a sus enseñazas en Madrid e Irlanda." },
              { name: "Lorena Jiménez", text: "Fantástica academia donde realmente se aprende inglés. La atención de los profesores es increible y son todos encantadores. Especial gracias a Jp por la atención personalizada a mi hijo." }
            ]}
      />

      <CTABand
        title="Preparación de EBAU y Cambridge"
        subtitle="Grupos de máximo 10 alumnos por nivel. Escríbenos y te contamos cómo va el curso."
        whatsappText="Hola, me gustaría información sobre las clases de secundaria y EBAU"
      />

      {/* Interlinking: sube al hub, cruza a los hermanos y vuelve a la home */}
      <section className="section-tight surface-alt px-6 border-t border-zinc-200/70">
        <div className="container-narrow">
          <p className="t-small text-center text-zinc-500">
            <strong className="text-zinc-600">Otros cursos:</strong>{' '}
            <a href="/cursos-ingles/" className="font-medium text-accent-blue hover:underline">Todos los cursos de inglés</a>
            {' · '}
            <a href="/cursos-ingles/infantil/" className="font-medium text-accent-blue hover:underline">Inglés infantil (2-5 años)</a>
            {' · '}
            <a href="/cursos-ingles/primaria/" className="font-medium text-accent-blue hover:underline">Inglés para primaria (6-12)</a>
            {' · '}
            <a href="/cursos-ingles/adultos/" className="font-medium text-accent-blue hover:underline">Clases de inglés para adultos</a>
            {' · '}
            <a href="/cursos-ingles/particulares/" className="font-medium text-accent-blue hover:underline">Clases particulares de inglés</a>
            {' · '}
            <a href="/cursos-ingles/online/" className="font-medium text-accent-blue hover:underline">Clases de inglés online</a>
          </p>
          <p className="t-small text-center text-zinc-500 mt-4">
            <a href="/" className="font-medium text-accent-blue hover:underline">Academia de inglés en La Vaguada y Barrio del Pilar</a>
          </p>
        </div>
      </section>


      <Footer />

      {/* Schema.org Structured Data */}
</>
  );
}
