import React, { useEffect } from 'react';
import { Briefcase, BookOpen, Users, Target, Globe, Award, Clock, CheckCircle, Phone, Calendar, Coffee, Sun } from 'lucide-react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import LeadForm from '../../components/LeadForm';
import LazyVideo from '../../components/LazyVideo';
import OptimizedImage from '../../components/OptimizedImage';
import Breadcrumb from '../../components/Breadcrumb';
import FAQSection from '../../components/FAQSection';
import { generateCourseSchema, businessInfo } from '../../utils/schemaData';
import type { FAQItem } from '../../utils/schemaData';
import { facilityImages } from '@/utils/images';

export const courseSchema = generateCourseSchema({
  name: "Curso de Inglés para Adultos",
  description: "Inglés para adultos en La Vaguada / Barrio del Pilar. Grupos máx. 8, horarios mañana y tarde, preparación Cambridge y centro oficial Linguaskill. Prueba de nivel gratis.",
  url: `${businessInfo.url}/cursos-ingles/adultos`,
  courseCode: "ADULT-CAM",
  educationalLevel: "Adult Education",
  timeRequired: "PT2H",
  image: "/images/academy/logos/img-4117.png"
});


export const faqs: FAQItem[] = [
  {
    question: "¿Qué nivel de inglés piden en las empresas?",
    answer: "Depende del sector, pero B2 es el nivel más habitual para entornos profesionales y C1 se valora para roles internacionales o de liderazgo. Lo importante es que puedas comunicarte con seguridad. Te orientamos para elegir preparación Cambridge o Linguaskill según tu objetivo laboral."
  },
  {
    question: "¿B2 es suficiente para trabajar?",
    answer: "Para muchos puestos sí, especialmente si tu trabajo no es 100% en inglés. Si necesitas reuniones frecuentes, negociación o documentación compleja, C1 te dará más soltura. Tras la prueba de nivel, definimos el objetivo realista y el camino más eficiente para alcanzarlo."
  },
  {
    question: "¿Cuánto se tarda en preparar el B2?",
    answer: "Depende del punto de partida y la constancia. No es lo mismo B1 bajo que B1 alto. Tras evaluarte, te damos una estimación realista y una estrategia: base + práctica guiada + simulacros. La clave es trabajar habilidades del examen sin descuidar el inglés real."
  },
  {
    question: "¿Qué es mejor: Cambridge o Linguaskill?",
    answer: "Cambridge es una certificación muy conocida y estable. Linguaskill es ideal si necesitas un resultado rápido para un requisito específico. Te ayudamos a decidir según tu empresa/universidad, plazos y el tipo de certificación que te conviene para tu caso."
  },
  {
    question: "¿Hay grupos por la mañana?",
    answer: "Sí. Ofrecemos horarios de mañana y de tarde para adaptarnos a trabajo, turnos y disponibilidad. Te ubicamos según tu nivel real para que aproveches la clase desde el primer día. Si necesitas máxima flexibilidad, también puedes combinar con clases particulares."
  },
  {
    question: "¿Soy principiante total, me vale el curso?",
    answer: "Sí. Empezar desde A1 es totalmente viable si el grupo es correcto y el método es práctico. Trabajamos vocabulario funcional, comprensión y estructuras esenciales para que puedas comunicarte cuanto antes. La prioridad es que ganes confianza y avances sin bloquearte."
  },
  {
    question: "¿Trabajáis conversación o solo gramática?",
    answer: "Trabajamos conversación real, pero con estructura. Hablar sin base frustra; gramática sin uso aburre. Por eso combinamos comprensión, vocabulario y práctica guiada con correcciones útiles. El objetivo es que hables mejor, no que \"estudies\" sin aplicarlo."
  },
  {
    question: "¿Puedo probar antes de apuntarme?",
    answer: "Sí. Puedes hacer una prueba de nivel gratuita para ver tu punto de partida y conocer el enfoque de la academia. Sin compromiso."
  },
  // Career PAAs (10)
  {
    question: "¿Qué nivel de inglés necesito para trabajar en una multinacional?",
    answer: "Mínimo B1-B2 según el puesto. Para roles de cliente-facing o liderazgo, se pide C1. En multinacionales es común encontrar gente con C1/C2. Te evaluamos y definimos el nivel exacto que tu empresa necesita para avanzar profesionalmente."
  },
  {
    question: "¿Inglés para entrevistas de trabajo?",
    answer: "Preparamos inglés profesional específico: presentación personal, respuestas a preguntas difíciles, ejemplos STAR (Situation-Task-Action-Result), preguntas para el entrevistador, y pronunciación clara. Realizamos mock interviews en inglés para ganar confianza antes de tu entrevista real."
  },
  {
    question: "¿Business English o inglés general?",
    answer: "Business English se especializa en contextos laborales: emailes profesionales, reuniones, presentaciones, negociación. Inglés general cubre comunicación cotidiana. Para trabajar en empresa, Business English acelerará 3-6 meses tu efectividad profesional. Lo ideal: base sólida general + especialización Business."
  },
  {
    question: "¿Inglés para presentaciones?",
    answer: "Enseñamos estructura de presentación en inglés, lenguaje de transición, manejo de preguntas, timing, y pronunciación clara. Prácticas reales presentando en inglés dentro de clase. Ganás confianza para presentar ante clientes/directivos sin nervios. Material de apoyo incluido."
  },
  {
    question: "¿Cuánto tiempo necesito para trabajar en inglés?",
    answer: "Para funcionar en entorno empresarial (emails, reuniones básicas): B1-B2 en 6-12 meses de estudio serio. Para liderazgo o cliente-facing: C1 en 18-24 meses. Aceleradores: inmersión en empresa + academia + conversación regular con nativos = 30-40% más rápido."
  },
  {
    question: "¿Inglés mejora salario?",
    answer: "Sí. Estadísticas muestran 15-25% aumento salarial con B2/C1. En multinacionales, C1 es requisito para promoción. Inversión en inglés (1000-1500€) se recupera en aumento salarial en menos de 1 año. ROI clarísimo."
  },
  {
    question: "¿Email profesional en inglés?",
    answer: "Enseñamos estructura, formalidad según contexto, palabras clave, tone profesional sin sonar robótico, y errores comunes. Practicamos escribiendo emails reales (solicitud, queja, confirmación) y revisamos con retroalimentación personalizada. Una habilidad altamente demandada."
  },
  {
    question: "¿Pronunciación importante para el trabajo?",
    answer: "Sí. Pronunciación clara mejora credibilidad profesional 40%. No necesitas acento nativo, pero sí inteligibilidad en llamadas telefónicas y reuniones. Trabajamos entonación, ritmo y sonidos clave. Grabaciones de voz personalizadas como herramienta de autoevaluación."
  },
  {
    question: "¿Aprender inglés mientras trabajo?",
    answer: "Totalmente viable con 1-2 horas semanales en academia + 15 min diarios en app/podcast. Clave: consistencia. Grupos de tardes/noches adaptados a trabajadores. Algunos alumnos avanzan más rápido que estudiantes tiempo completo por motivación laboral clara."
  },
  {
    question: "¿Inglés técnico o sectorial?",
    answer: "Para profesiones específicas (IT, medicina, ingeniería), ofrecemos inglés especializado con vocabulario técnico relevante. Consulta con tu asesor si tu campo requiere terminología específica. Generalmente B2 general + 2-4 semanas de vocabulario técnico = flujo laboral."
  },
  {
    question: "¿Qué nivel de inglés necesito para trabajar en una multinacional?",
    answer: "El nivel mínimo habitual es B2 para puestos operativos. Para roles de gestión, liderazgo o contacto directo con clientes internacionales, se suele pedir C1. La tendencia en empresas multinacionales es exigir cada vez más nivel certificado (Cambridge o Linguaskill) en los procesos de selección."
  },
  {
    question: "¿Se puede aprender inglés de adulto empezando desde cero?",
    answer: "Sí. Los adultos tienen ventajas que los niños no tienen: capacidad de análisis gramatical, motivación clara y disciplina. El aprendizaje es diferente (más analítico, menos intuitivo), pero perfectamente viable. Con 2-4 horas semanales de clase y práctica regular, es posible alcanzar un A2 en 6 meses y un B1 en 12-18 meses."
  },
  {
    question: "¿Cuánto cuesta al mes una academia de inglés en Madrid?",
    answer: "Los precios en Madrid varían según el formato. Clases en grupo suelen costar entre 60 y 120 euros al mes. Clases particulares son más caras. Al comparar precios, valora qué incluye: material didáctico, pruebas de nivel, seguimiento, acceso a plataformas online y tamaño del grupo. El precio más bajo no siempre es la mejor inversión."
  },
  {
    question: "¿Clases de inglés en grupo o individual, qué es mejor para adultos?",
    answer: "Depende del objetivo. Las clases en grupo (máximo 8-10 personas) son mejores para practicar conversación, escuchar diferentes acentos y ganar soltura en situaciones reales. Las clases individuales son ideales para preparación intensiva de exámenes o necesidades muy específicas. Muchos alumnos combinan ambos formatos para mejores resultados."
  },
  {
    question: "¿Cuánto tiempo necesito para pasar de A2 a B2 en inglés?",
    answer: "Según el Marco Común Europeo, pasar de A2 a B2 requiere aproximadamente 350-400 horas de estudio guiado. Con 4-6 horas semanales de clase más práctica autónoma, esto supone entre 12 y 18 meses. La constancia es más importante que la intensidad: estudiar poco pero todos los días da mejores resultados que sesiones largas espaciadas."
  },
  {
    question: "¿Cómo preparar una entrevista de trabajo en inglés?",
    answer: "La preparación incluye: practicar tu presentación personal en inglés, preparar respuestas a preguntas habituales (Tell me about yourself, Why this company?), ensayar con simulacros de entrevista, y dominar vocabulario específico de tu sector. Grabar tus respuestas y escucharlas te ayuda a detectar errores y ganar confianza antes del día real."
  }
];

const scheduleOptions = [
  {
    icon: <Sun className="w-6 h-6" />,
    time: "Mañanas",
    slots: ["10:00 - 11:00", "11:00 - 12:00"],
    description: "Ideal para horarios flexibles"
  },
  {
    icon: <Coffee className="w-6 h-6" />,
    time: "Tardes",
    slots: ["19:30 - 20:30", "20:30 - 21:30"],
    description: "Después del trabajo"
  }
];

interface AdultosPageProps {
  heroImageSrc?: string;
}

export default function AdultosPage({ heroImageSrc }: AdultosPageProps) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
<Navbar />

      {/* Hero Section */}
      <section className="relative pt-28 pb-20 md:pt-36 md:pb-32 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroImageSrc || '/images/academy/facilities/adult-one-to-one-classes.jpg'}
            alt="Clases de inglés para adultos La Vaguada Madrid - Impulse English Academy"
            className="w-full h-full object-cover object-top"
            loading="eager"
            fetchPriority="high"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-teal-950/80 via-emerald-950/70 to-teal-900/55"></div>
        </div>
        <div className="absolute inset-0 hero-grain opacity-[0.03]"></div>
        <div className="absolute -top-36 -right-36 w-[480px] h-[480px] rounded-full bg-emerald-400/[0.05]"></div>
        <div className="absolute -bottom-20 -left-20 w-72 h-72 rounded-full bg-teal-400/[0.06]"></div>

        <div className="relative z-10 container mx-auto px-6 md:px-12">
          <Breadcrumb
            items={[
              { label: 'Cursos', href: '/cursos-ingles/infantil' },
              { label: 'Adultos (18+ años)' }
            ]}
            variant="light"
          />

          <div className="max-w-3xl mt-12 md:mt-16">
            <div className="flex items-center gap-4 mb-6 animate-hero-fade-up">
              <div className="w-8 h-px bg-white/40"></div>
              <span className="font-display text-white/70 text-xs uppercase tracking-[0.2em]">
                18+ años · Máx. 8 alumnos
              </span>
            </div>
            <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl text-white tracking-tight leading-[1.1] mb-6 animate-hero-fade-up animation-delay-100">
              Inglés para Adultos
            </h1>
            <div className="w-16 h-0.5 bg-brand-red mb-6 animate-hero-fade-up animation-delay-150"></div>
            <p className="font-display text-lg md:text-xl text-white/80 font-light leading-relaxed max-w-2xl mb-10 animate-hero-fade-up animation-delay-200">
              Grupos reducidos, enfoque práctico y objetivos claros. Desde A1 hasta C1/C2, con preparación Cambridge y Linguaskill en La Vaguada.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 animate-hero-fade-up animation-delay-300">
              <a
              href="/reservar-clase/"
                className="bg-white text-teal-950 font-display font-semibold py-4 px-8 rounded-lg hover:bg-zinc-100 transition-all duration-300 text-center"
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

      {/* Quick Info Bar */}
      <section className="bg-white py-6 border-b border-zinc-100">
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap justify-center gap-6 md:gap-12 text-center">
            <div className="flex items-center gap-2">
              <Users className="w-5 h-5 text-teal-500" />
              <span className="text-zinc-700 font-medium">Máx. 8 alumnos</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-5 h-5 text-teal-500" />
              <span className="text-zinc-700 font-medium">Horarios mañana y tarde</span>
            </div>
            <div className="flex items-center gap-2">
              <Briefcase className="w-5 h-5 text-teal-500" />
              <span className="text-zinc-700 font-medium">Enfoque práctico: trabajo, viajes y vida real</span>
            </div>
            <div className="flex items-center gap-2">
              <Award className="w-5 h-5 text-yellow-500" />
              <span className="text-zinc-700 font-medium">Centro Oficial Cambridge y Linguaskill</span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 md:py-20 px-6 bg-zinc-50">
        <div className="container mx-auto max-w-4xl">
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 mb-6">
              Nunca es tarde
            </h2>

            <div className="prose prose-lg text-zinc-600">
              <p className="mb-4">
                Sabemos que tienes poco tiempo y quieres resultados. Por eso priorizamos conversación guiada, comprensión real, vocabulario útil y progreso medible.
              </p>
            </div>

            {/* Location and Certification Links */}
            <div className="mt-6 p-4 bg-teal-50 rounded-xl border border-teal-100">
              <p className="text-zinc-700 text-sm mb-3">
                <strong>¿Dónde estamos?</strong> Nuestra <a href="/academia-ingles-barrio-del-pilar/" className="text-teal-600 hover:underline font-medium">academia en Barrio del Pilar</a>, junto a <a href="/academia-ingles-la-vaguada/" className="text-teal-600 hover:underline font-medium">La Vaguada</a>. Bien comunicada desde <a href="/academia-ingles-plaza-castilla/" className="text-teal-600 hover:underline font-medium">Plaza Castilla</a> y <a href="/academia-ingles-tetuan/" className="text-teal-600 hover:underline font-medium">Tetuán</a>.
              </p>
              <p className="text-zinc-600 text-sm">
                Prepara tus <a href="/examenes-cambridge/" className="text-teal-600 hover:underline font-medium">exámenes Cambridge</a> o certifica rápido con <a href="/linguaskill/" className="text-teal-600 hover:underline font-medium">Linguaskill</a>. Si prefieres atención individual, consulta nuestras <a href="/cursos-ingles/particulares/" className="text-teal-600 hover:underline font-medium">clases particulares</a>.
              </p>
            </div>

            {/* Schedule Options */}
            <div className="mt-8 space-y-4">
              <h3 className="font-bold text-zinc-900 text-lg">Horarios disponibles</h3>
              {scheduleOptions.map((option, index) => (
                <div key={index} className="bg-white p-4 rounded-xl border border-zinc-100 flex items-center gap-4">
                  <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center text-teal-600">
                    {option.icon}
                  </div>
                  <div className="flex-1">
                    <div className="font-bold text-zinc-900">{option.time}</div>
                    <div className="text-sm text-zinc-500">{option.description}</div>
                  </div>
                  <div className="text-right">
                    {option.slots.map((slot, i) => (
                      <div key={i} className="text-sm text-teal-600 font-medium">{slot}</div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              {
                icon: <BookOpen className="w-6 h-6" />,
                title: "Todos los niveles",
                description: "Desde A1 (principiante) hasta C1 Advanced. Te ubicamos según tu nivel real."
              },
              {
                icon: <Briefcase className="w-6 h-6" />,
                title: "Enfoque práctico",
                description: "Inglés que puedes usar en el trabajo, viajes o situaciones reales. Nada de teoría inútil."
              },
              {
                icon: <Award className="w-6 h-6" />,
                title: "Preparación Cambridge y Linguaskill",
                description: "B1 Preliminary, B2 First, C1 Advanced. También Linguaskill para certificar rápido."
              },
              {
                icon: <Users className="w-6 h-6" />,
                title: "Grupos muy reducidos",
                description: "Máximo 8 personas. Así todos hablan y participan activamente."
              },
              {
                icon: <Target className="w-6 h-6" />,
                title: "Objetivos claros",
                description: "Evaluación inicial y seguimiento del progreso. Sabrás exactamente dónde estás."
              },
              {
                icon: <Globe className="w-6 h-6" />,
                title: "Conversación real",
                description: "Debates, role-plays, situaciones cotidianas. El objetivo es que hables con confianza."
              }
            ].map((feature, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-sm border border-zinc-100 flex items-start gap-4">
                <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center text-teal-600 flex-shrink-0">
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
              Inglés para adultos que funciona
            </h2>
            <p className="text-zinc-600">
              Descubre nuestra metodología práctica y efectiva para adultos
            </p>
          </div>
          <LazyVideo
            videoId="Fdso-d9_F20"
            title="Cursos de inglés para adultos - Cambridge y Linguaskill"
            className="shadow-xl"
          />
        </div>
      </section>

      {/* Certifications Section */}
      <section className="py-16 px-6 bg-teal-600">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Certifica tu nivel de inglés
          </h2>
          <p className="text-white/80 mb-8">
            Preparamos Cambridge y Linguaskill para adultos que necesitan certificar su nivel
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="bg-white/10 p-6 rounded-xl">
              <h3 className="font-bold text-white mb-2">Exámenes Cambridge</h3>
              <p className="text-white/70 text-sm mb-4">B1 Preliminary, B2 First, C1 Advanced</p>
              <a
              href="/examenes-cambridge/"
                className="inline-block bg-white text-teal-600 font-bold py-2 px-4 rounded-lg hover:bg-yellow-400 hover:text-teal-900 transition-colors text-sm"
              >
                Ver exámenes Cambridge
              </a>
            </div>
            <div className="bg-white/10 p-6 rounded-xl">
              <h3 className="font-bold text-white mb-2">Linguaskill</h3>
              <p className="text-white/70 text-sm mb-4">Certificado en 48h. Ideal para requisitos laborales</p>
              <a
              href="/linguaskill/"
                className="inline-block bg-white text-teal-600 font-bold py-2 px-4 rounded-lg hover:bg-yellow-400 hover:text-teal-900 transition-colors text-sm"
              >
                Conocer Linguaskill
              </a>
            </div>
          </div>
          <p className="text-white/90 font-medium">
            100% de aprobados en exámenes Cambridge 2024/2025
          </p>
        </div>
      </section>

      {/* Levels Section */}
      <section className="py-16 px-6 bg-white">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 mb-4">
              Niveles disponibles
            </h2>
            <p className="text-zinc-500 text-lg">
              Desde principiante absoluto hasta nivel avanzado
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gradient-to-br from-teal-50 to-emerald-50 p-8 rounded-2xl border border-teal-100">
              <h3 className="text-xl font-bold text-zinc-900 mb-4">Niveles</h3>
              <ul className="space-y-3">
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span className="text-zinc-700"><strong>A1-A2:</strong> Principiante e inicial</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span className="text-zinc-700"><strong>B1:</strong> Intermedio (PET)</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span className="text-zinc-700"><strong>B2:</strong> Intermedio-alto (First)</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span className="text-zinc-700"><strong>C1:</strong> Avanzado (Advanced)</span>
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
                  <span className="text-zinc-700">Material didáctico incluido</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span className="text-zinc-700">Acceso a plataforma online</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span className="text-zinc-700">Seguimiento personalizado</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span className="text-zinc-700">Simulacros Cambridge si preparas examen</span>
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
              Te evaluamos sin compromiso y te ubicamos en el grupo adecuado para tu nivel.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
              href="/reservar-clase/"
                className="bg-teal-600 hover:bg-teal-700 text-white font-bold py-4 px-8 rounded-lg transition-colors"
              >
                Solicitar prueba de nivel
              </a>
              <a
                href="https://wa.me/34604910611?text=Hola,%20me%20gustaría%20información%20sobre%20inglés%20para%20adultos"
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
      <section className="py-16 md:py-20 px-6 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 mb-4">
              Nuestros alumnos adultos
            </h2>
            <p className="text-zinc-600 text-lg">Certificaciones Cambridge y Linguaskill con 100% de aprobados</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {/* Regular landscape photos */}
            {[
              { url: "/images/academy/facilities/adult-one-to-one-classes.jpg", alt: "Clases inglés adultos one-to-one La Vaguada Barrio del Pilar Madrid" },
              { url: "/images/academy/team/jp-with-students.jpg", alt: "Profesor JP con estudiantes adultos certificados Cambridge La Vaguada" },
            ].map((img, idx) => (
              <div key={idx} className="aspect-[4/3] rounded-xl overflow-hidden shadow-lg">
                <img src={img.url} alt={img.alt} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" loading="lazy" />
              </div>
            ))}

            {/* Lara C1 Certificate - Portrait image spanning 2 rows */}
            <div className="row-span-2 rounded-xl overflow-hidden shadow-lg">
              <img
                src="/images/academy/students/lara-c1-cert.jpeg"
                alt="Lara con certificado Cambridge C1 Advanced La Vaguada Madrid"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
            </div>

            {/* More landscape photos */}
            {[
              { url: "/images/academy/facilities/6e08cd95-47b7-4d36-95c7-fecfb41e3883.jpeg", alt: "Certificado oficial Cambridge English academia La Vaguada Madrid" },
              { url: "/images/academy/facilities/cambridge-search.jpeg", alt: "Centro Cambridge verificado Impulse English Academy Madrid" },
              { url: "/images/academy/facilities/classroom-facilities-main-classroom.jpg", alt: "Aula principal academia inglés La Vaguada Barrio del Pilar" },
              { url: "/images/academy/facilities/technology-based-classroom-photo.jpg", alt: "Aula tecnológica academia inglés La Vaguada Madrid" },
              { url: "/images/academy/locations/outside-academy.jpg", alt: "Fachada exterior Impulse English Academy La Vaguada Madrid" },
            ].map((img, idx) => (
              <div key={`landscape-${idx}`} className="aspect-[4/3] rounded-xl overflow-hidden shadow-lg">
                <img src={img.url} alt={img.alt} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" loading="lazy" />
              </div>
            ))}
          </div>

          {/* Cambridge and Linguaskill Logos */}
          <div className="mt-12 flex flex-wrap justify-center items-center gap-8">
            <div className="bg-zinc-100 rounded-xl p-6 flex items-center justify-center">
              <img
                src="/images/academy/logos/cambridge-logo-edited.png"
                alt="Centro Preparador Oficial Cambridge English La Vaguada Madrid"
                className="h-16 md:h-20 w-auto object-contain"
                loading="lazy"
              />
            </div>
            <div className="bg-teal-600 rounded-xl p-6 flex items-center justify-center">
              <img
                src="/images/academy/logos/linguaskill-logo-blanco.png"
                alt="Centro oficial Linguaskill La Vaguada Madrid"
                className="h-16 md:h-20 w-auto object-contain"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section - With Schema Markup */}
      <FAQSection
        faqs={faqs}
        title="Preguntas frecuentes sobre inglés para adultos"
      />

      {/* Lead Form */}
      <section className="py-16 px-6 bg-white">
        <div className="container mx-auto max-w-3xl">
          <LeadForm
            title="Empieza tu camino — solicita tu prueba de nivel"
            subtitle="Grupos reducidos de máximo 8 adultos. Horarios de mañana y tarde"
            ctaText="Solicitar prueba de nivel"
            source="curso-adultos"
            showPhone={true}
            showAge={false}
            showLevel={true}
          />
        </div>
      </section>

      <Footer />

      {/* Schema.org Structured Data */}
</>
  );
}
