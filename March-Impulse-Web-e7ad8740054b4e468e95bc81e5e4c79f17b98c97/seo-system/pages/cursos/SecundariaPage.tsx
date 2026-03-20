import React, { useEffect } from 'react';
import { GraduationCap, FileText, Target, TrendingUp, Clock, Award, Users, Phone, Calendar, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import LeadForm from '../../components/LeadForm';
import LazyVideo from '../../components/LazyVideo';
import OptimizedImage from '../../components/OptimizedImage';
import SchemaMarkup from '../../components/SchemaMarkup';
import Breadcrumb from '../../components/Breadcrumb';
import FAQSection from '../../components/FAQSection';
import SEOHead from '../../components/SEOHead';
import { generateCourseSchema, businessInfo } from '../../utils/schemaData';
import AcademyGallery from '../../components/AcademyGallery';
import { secundariaImages as galleryImages } from '../../src/data/academyImages';
import { studentImages } from '../../src/data/images';

const courseSchema = generateCourseSchema({
  name: "Curso de Inglés Secundaria (13-17 años)",
  description: "Clases de inglés para secundaria en La Vaguada / Barrio del Pilar. Preparación EBAU y Cambridge B1, B2, C1 con grupos reducidos y seguimiento. 100% aprobados 2024/2025.",
  url: `${businessInfo.url}/ingles-la-vaguada/secundaria`,
  courseCode: "SEC-CAM",
  educationalLevel: "Secondary",
  timeRequired: "PT2H",
  price: "75",
  image: "https://impulseenglish.s3.us-east-1.amazonaws.com/impulsephotos/IMG_4117.PNG"
});


const faqs = [
  {
    question: "¿Qué nivel suele tener un alumno de 4º ESO?",
    answer: "Suele estar alrededor de B1, aunque varía mucho. Por eso hacemos prueba de nivel y observación, para no perder tiempo. Si el alumno está en B1, trazamos un plan para consolidar base y avanzar hacia B2, que es el estándar más solicitado."
  },
  {
    question: "¿B1 o B2 para Bachillerato y universidad?",
    answer: "Muchas universidades piden B1–B2, y en la práctica B2 abre más puertas. Recomendamos definir el objetivo según plazos: si hay urgencia, se planifica certificación; si hay margen, se construye nivel para que el examen no sea un \"milagro\", sino consecuencia."
  },
  {
    question: "¿Preparáis EBAU/Selectividad?",
    answer: "Sí. Integramos preparación EBAU dentro del programa: comprensión, writing, vocabulario y estructura. Cuando el alumno alcanza nivel real B2, la EBAU se vuelve mucho más manejable. Trabajamos técnica de examen y práctica guiada sin descuidar el idioma real."
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
    answer: "Sí. Mejorar nivel real (vocabulario, comprensión y gramática funcional) impacta directamente en exámenes y tareas del instituto. Además, la práctica de writing y reading para Cambridge fortalece habilidades que se usan en clase. No es \"extra\": es el mismo idioma, mejor trabajado."
  },
  {
    question: "¿Qué es mejor: Cambridge o Linguaskill?",
    answer: "Depende del objetivo y del plazo. Cambridge es una certificación muy reconocida y estable; Linguaskill es ideal cuando necesitas un resultado rápido para un requisito concreto. Te asesoramos según universidad/empresa y calendario, para que elijas lo más eficiente."
  },
  {
    question: "¿Hay prueba de nivel gratuita?",
    answer: "Sí. Hacemos prueba de nivel gratuita para ubicar al alumno en el grupo correcto y proponer el plan más realista. Sin compromiso."
  }
];

export default function SecundariaPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <SEOHead
        title="Inglés Secundaria (13–17) EBAU + Cambridge B1–C1 | La Vaguada – Barrio del Pilar"
        description="Clases de inglés para secundaria en La Vaguada / Barrio del Pilar. Preparación EBAU y Cambridge B1, B2, C1 con grupos reducidos y seguimiento. 100% aprobados 2024/2025."
        keywords="clases inglés secundaria la vaguada, preparación EBAU inglés, cambridge b1 b2 c1 adolescentes, inglés bachillerato barrio del pilar"
        canonical="/ingles-la-vaguada/secundaria"
      />
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-24 pb-16 md:pt-32 md:pb-24 bg-gradient-to-br from-indigo-600 to-purple-700 overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <OptimizedImage
            image={studentImages.teenagers}
            className="w-full h-full object-cover"
            sizes="100vw"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-700/80 to-purple-700/80"></div>
        <div className="relative z-10 container mx-auto px-6 md:px-12 mb-6">
          <Breadcrumb
            items={[
              { label: 'Cursos', href: '/ingles-la-vaguada/infantil' },
              { label: 'Secundaria (13-17 años)' }
            ]}
            variant="light"
          />
        </div>

        <div className="relative container mx-auto px-6 md:px-12">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-6">
              <span className="bg-white/20 text-white text-sm font-bold px-4 py-2 rounded-full">
                13-17 años
              </span>
              <span className="bg-yellow-400 text-yellow-900 text-sm font-bold px-4 py-2 rounded-full">
                Desde 75€/mes
              </span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white tracking-tight mb-6">
              Inglés para Secundaria (ESO y Bachillerato) | EBAU + Cambridge B1–C1
            </h1>
            <p className="text-xl md:text-2xl text-white/90 font-light mb-8">
              En Impulse English Academy (La Vaguada / Barrio del Pilar, Madrid norte) preparamos a estudiantes de 13–17 años para lo que de verdad importa: mejorar nivel real, rendir en EBAU y conseguir certificaciones Cambridge B1, B2 y C1.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/reservar-clase"
                className="bg-white text-indigo-600 font-bold py-4 px-8 rounded-lg hover:bg-yellow-400 hover:text-indigo-900 transition-colors text-center"
              >
                Prueba de nivel GRATIS
              </Link>
              <a
                href="tel:+34604910611"
                className="bg-white/10 backdrop-blur-sm text-white border border-white/30 font-bold py-4 px-8 rounded-lg hover:bg-white hover:text-indigo-600 transition-colors text-center flex items-center justify-center gap-2"
              >
                <Phone className="w-5 h-5" />
                Llamar ahora
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Info Bar */}
      <section className="bg-white py-6 border-b border-zinc-100">
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap justify-center gap-6 md:gap-12 text-center">
            <div className="flex items-center gap-2">
              <Users className="w-5 h-5 text-indigo-500" />
              <span className="text-zinc-700 font-medium">Máx. 10 alumnos</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-5 h-5 text-indigo-500" />
              <span className="text-zinc-700 font-medium">2 horas/semana desde 75€/mes</span>
            </div>
            <div className="flex items-center gap-2">
              <Target className="w-5 h-5 text-indigo-500" />
              <span className="text-zinc-700 font-medium">Grupos por nivel real, no por curso</span>
            </div>
            <div className="flex items-center gap-2">
              <Award className="w-5 h-5 text-yellow-500" />
              <span className="text-zinc-700 font-medium">100% aprobados Cambridge 2024/2025 (alumnos presentados)</span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 md:py-20 px-6 bg-zinc-50">
        <div className="container mx-auto max-w-4xl">
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 mb-6">
              Preparados para todo
            </h2>

            <div className="prose prose-lg text-zinc-600">
              <p className="mb-4">
                No elegimos entre instituto y certificación: integramos ambos. Cuando el nivel sube, el rendimiento académico mejora "por defecto", y la certificación llega con método, práctica y simulacros.
              </p>
            </div>

            {/* Cambridge Badge */}
            <div className="mt-8 p-6 bg-gradient-to-br from-indigo-50 to-purple-50 rounded-xl border border-indigo-200">
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
                <strong>¿Dónde estamos?</strong> Nuestra <Link to="/academia-ingles-barrio-del-pilar" className="text-indigo-600 hover:underline font-medium">academia en Barrio del Pilar</Link>, junto a <Link to="/academia-ingles-la-vaguada" className="text-indigo-600 hover:underline font-medium">La Vaguada</Link>, está a solo 2 minutos del metro.
              </p>
              <p className="text-zinc-600 text-sm">
                Prepara tu <Link to="/examenes-cambridge/b1-preliminary" className="text-indigo-600 hover:underline font-medium">B1 Preliminary</Link>, <Link to="/examenes-cambridge/b2-first" className="text-indigo-600 hover:underline font-medium">B2 First</Link> o C1 Advanced. Si necesitas certificar rápido para la universidad, <Link to="/linguaskill" className="text-indigo-600 hover:underline font-medium">Linguaskill</Link> te da resultados en 48h.
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
              <div key={index} className="bg-white p-6 rounded-xl shadow-sm border border-zinc-100 flex items-start gap-4">
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
      <section className="py-16 md:py-20 px-6 bg-zinc-50">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-zinc-900 mb-4">
              Preparación EBAU y Cambridge B1-C1
            </h2>
            <p className="text-zinc-600">
              Cómo ayudamos a los estudiantes de secundaria a alcanzar sus objetivos
            </p>
          </div>
          <LazyVideo
            videoId="yYf0hsBtd14"
            title="Inglés para ESO y Bachillerato - EBAU y Cambridge"
            className="shadow-xl"
          />
        </div>
      </section>

      {/* Certifications Section */}
      <section className="py-16 px-6 bg-indigo-600">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Certifica tu nivel antes de la universidad
          </h2>
          <p className="text-white/80 mb-8">
            Las universidades piden B1-B2. Nosotros te preparamos para certificarlo con Cambridge o Linguaskill
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="bg-white/10 p-6 rounded-xl">
              <h3 className="font-bold text-white mb-2">Exámenes Cambridge</h3>
              <p className="text-white/70 text-sm mb-4">B1 Preliminary, B2 First, C1 Advanced</p>
              <Link
                to="/examenes-cambridge"
                className="inline-block bg-white text-indigo-600 font-bold py-2 px-4 rounded-lg hover:bg-yellow-400 hover:text-indigo-900 transition-colors text-sm"
              >
                Ver exámenes Cambridge
              </Link>
            </div>
            <div className="bg-white/10 p-6 rounded-xl">
              <h3 className="font-bold text-white mb-2">Linguaskill</h3>
              <p className="text-white/70 text-sm mb-4">Certificado en 48h. Ideal para requisitos universitarios urgentes</p>
              <Link
                to="/linguaskill"
                className="inline-block bg-white text-indigo-600 font-bold py-2 px-4 rounded-lg hover:bg-yellow-400 hover:text-indigo-900 transition-colors text-sm"
              >
                Conocer Linguaskill
              </Link>
            </div>
          </div>
          <p className="text-white/90 font-medium">
            100% de aprobados en exámenes Cambridge 2024/2025
          </p>
        </div>
      </section>

      {/* Levels & Pricing Section */}
      <section className="py-16 px-6 bg-white">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 mb-4">
              Niveles y precios
            </h2>
            <p className="text-zinc-500 text-lg">
              Grupos de 2 horas semanales desde 75€/mes
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gradient-to-br from-indigo-50 to-purple-50 p-8 rounded-2xl border border-indigo-100">
              <h3 className="text-xl font-bold text-zinc-900 mb-4">Niveles disponibles</h3>
              <ul className="space-y-3">
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span className="text-zinc-700"><strong>A2-B1:</strong> Base sólida para ESO</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span className="text-zinc-700"><strong>B1 Preliminary:</strong> Nivel intermedio certificado</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span className="text-zinc-700"><strong>B2 First:</strong> El estándar universitario</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span className="text-zinc-700"><strong>C1 Advanced:</strong> Nivel profesional</span>
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-8 rounded-2xl border border-green-100">
              <h3 className="text-xl font-bold text-zinc-900 mb-4">¿Qué incluye?</h3>
              <ul className="space-y-3">
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span className="text-zinc-700">2 horas semanales en grupo</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span className="text-zinc-700">Material Cambridge oficial</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span className="text-zinc-700">Simulacros de examen periódicos</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span className="text-zinc-700">Seguimiento personalizado</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500" />
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
              <Link
                to="/reservar-clase"
                className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-4 px-8 rounded-lg transition-colors"
              >
                Solicitar prueba de nivel
              </Link>
              <a
                href="https://wa.me/34604910611?text=Hola,%20me%20gustaría%20información%20sobre%20inglés%20para%20secundaria"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-500 hover:bg-green-600 text-white font-bold py-4 px-8 rounded-lg transition-colors flex items-center justify-center gap-2"
              >
                <Phone className="w-5 h-5" />
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section - Photos above FAQs */}
      <AcademyGallery
        images={galleryImages}
        pageUrl={`${businessInfo.url}/ingles-la-vaguada/secundaria`}
        title="Nuestros alumnos de secundaria"
        subtitle="Preparación para EBAU y certificaciones Cambridge B1, B2 y C1"
        maxImages={12}
      />

      {/* FAQ Section - With Schema Markup */}
      <FAQSection
        faqs={faqs}
        title="Preguntas frecuentes sobre inglés para secundaria"
      />

      {/* Lead Form */}
      <section className="py-16 px-6 bg-white">
        <div className="container mx-auto max-w-3xl">
          <LeadForm
            title="¿Quieres más información?"
            subtitle="Déjanos tus datos y te contactamos para resolver todas tus dudas"
            ctaText="Solicitar información"
            source="curso-secundaria"
            showPhone={true}
            showAge={true}
            showLevel={true}
          />
        </div>
      </section>

      <Footer />

      {/* Schema.org Structured Data */}
      <SchemaMarkup schema={courseSchema} />
    </>
  );
}
