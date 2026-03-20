import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Zap, Clock, ChevronDown, ChevronUp, CheckCircle, Calendar, Target, Users, BookOpen } from 'lucide-react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import LeadForm from '../../components/LeadForm';
import Breadcrumb from '../../components/Breadcrumb';
import SchemaMarkup from '../../components/SchemaMarkup';
import SEOHead from '../../components/SEOHead';
import { generateArticleSchema, businessInfo } from '../../utils/schemaData';

export default function CursoIntensivoLinguaskillPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = 'Curso Intensivo Linguaskill Online 2026: Preparación Rápida | Impulse English Academy La Vaguada – Barrio del Pilar';
  }, []);

  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const articleSchema = generateArticleSchema({
    headline: "Curso Intensivo Linguaskill Online 2026: Preparación Rápida",
    description: "Guía completa sobre cursos intensivos de Linguaskill online. Duración, modalidades, qué nivel puedes alcanzar y cómo prepararte rápidamente.",
    url: `${businessInfo.url}/linguaskill/curso-intensivo-linguaskill`,
    datePublished: "2025-01-12"
  });

  const faqs = [
    {
      question: "¿Cuánto dura el examen Linguaskill?",
      answer: "El examen Linguaskill dura aproximadamente entre 2 horas y media y 3 horas, distribuidas en tres módulos: Reading & Listening (60-85 minutos), Writing (45 minutos) y Speaking (15-16 minutos). Se realiza en sesión única y ofrece resultados rápidos en 48 horas, con formato adaptativo y modular."
    },
    {
      question: "¿Se puede suspender Linguaskill?",
      answer: "Linguaskill no se puede suspender ni aprobar; es un examen adaptativo que certifica el nivel real de inglés del candidato, desde A1 hasta C1/C2, ajustando las preguntas según sus respuestas. Esto permite una evaluación precisa y justa basada en competencias, sin calificaciones tradicionales de aprobado o suspenso."
    },
    {
      question: "¿Linguaskill desde casa es fiable?",
      answer: "Linguaskill desde casa es fiable gracias a su formato 100 % online, supervisión remota y tecnología adaptativa que ajusta la dificultad en tiempo real. Utiliza inteligencia artificial para evaluar Speaking y Writing con precisión, ofrece resultados en 48 horas y cuenta con reconocimiento oficial internacional."
    },
    {
      question: "¿Qué tan difícil es la prueba Linguaskill?",
      answer: "La dificultad de Linguaskill se ajusta adaptativamente al nivel del candidato, evaluando desde B1 hasta C2 del MCER. La prueba no tiene número fijo de preguntas; aumenta la dificultad con respuestas correctas y la reduce con errores hasta identificar el nivel preciso. Linguaskill General evalúa inglés cotidiano mientras Linguaskill Business examina contextos empresariales, personalizando la experiencia según el desempeño individual del examinado."
    },
    {
      question: "¿Linguaskill General o Business?",
      answer: "Linguaskill General evalúa inglés para contextos cotidianos, académicos y sociales, ideal para estudiantes y procesos migratorios. Linguaskill Business se centra en inglés profesional en entornos laborales, destacando comunicación empresarial. Ambos miden niveles A1-C2 según el MCER y ofrecen resultados rápidos y fiables."
    },
    {
      question: "¿Cuántas veces puedo hacer Linguaskill?",
      answer: "Linguaskill puede realizarse múltiples veces sin límite, permitiendo repetir módulos individuales (Reading, Listening, Writing y Speaking) para mejorar la puntuación sin hacer el examen completo. Esta flexibilidad, junto con resultados en 48 horas, facilita certificaciones adaptadas a objetivos académicos y profesionales."
    }
  ];

  const courseFeatures = [
    { icon: Clock, title: "Formato flexible", description: "Clases online en directo o grabadas para estudiar a tu ritmo" },
    { icon: Target, title: "Enfoque al examen", description: "Práctica específica de los 4 módulos: Reading, Listening, Writing, Speaking" },
    { icon: Users, title: "Grupos reducidos", description: "Máximo 8-10 estudiantes para atención personalizada" },
    { icon: BookOpen, title: "Material incluido", description: "Acceso a plataforma con ejercicios, simulacros y recursos oficiales" }
  ];

  const weeklyPlan = [
    { week: "Semana 1-2", focus: "Reading & Listening", activities: "Familiarización con formato adaptativo, estrategias de comprensión, vocabulario clave" },
    { week: "Semana 3-4", focus: "Writing", activities: "Estructura de emails y ensayos, conectores, práctica con corrección automática y humana" },
    { week: "Semana 5-6", focus: "Speaking", activities: "Práctica de las 5 partes, fluidez, pronunciación, grabaciones con feedback" },
    { week: "Semana 7-8", focus: "Simulacros completos", activities: "Exámenes de práctica cronometrados, análisis de errores, estrategias finales" }
  ];

  return (
    <>
      <SEOHead
        title="Curso Intensivo Linguaskill Online 2026: Preparación Rápida y Efectiva"
        description="Prepárate para el examen Linguaskill en 4-8 semanas con cursos intensivos online. Estrategias, práctica y feedback personalizado desde 79€/mes en Madrid."
        keywords="curso intensivo linguaskill, linguaskill online, preparación linguaskill rápida, curso linguaskill madrid, linguaskill 4 semanas"
        canonical="/linguaskill/curso-intensivo"
        ogType="article"
      />
      <Navbar />

      {/* Hero Section */}
      <section className="pt-24 pb-12 md:pt-32 md:pb-16 bg-gradient-to-br from-orange-500 to-red-600">
        <div className="container mx-auto px-6 md:px-12">
          <div className="max-w-4xl">
            <Breadcrumb
              items={[
                { label: 'Blog', href: '/blogs-impulse' },
                { label: 'Curso Intensivo Linguaskill' }
              ]}
              variant="light"
            />
            <div className="flex items-center gap-2 mb-4 mt-6">
              <span className="bg-white/20 text-white px-3 py-1 rounded-full text-sm font-medium">
                Preparación Linguaskill
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-6">
              Curso Intensivo Linguaskill Online: Preparación Rápida y Efectiva
            </h1>
            <p className="text-xl text-white/90 font-light mb-6">
              Prepárate para el examen Linguaskill en pocas semanas con cursos intensivos online. Estrategias, práctica y feedback personalizado.
            </p>
            <div className="flex items-center gap-4 text-white/80 text-sm">
              <span className="flex items-center gap-1">
                <Clock className="w-4 h-4" />
                10 min de lectura
              </span>
              <span className="flex items-center gap-1">
                <Zap className="w-4 h-4" />
                Intensivo 4-8 semanas
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Info */}
      <section className="py-8 bg-orange-50">
        <div className="container mx-auto px-6 md:px-12">
          <div className="max-w-4xl">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="bg-white rounded-xl p-4 text-center">
                <p className="text-3xl font-bold text-orange-600">4-8</p>
                <p className="text-sm text-zinc-600">semanas</p>
              </div>
              <div className="bg-white rounded-xl p-4 text-center">
                <p className="text-3xl font-bold text-orange-600">10-20h</p>
                <p className="text-sm text-zinc-600">semanales</p>
              </div>
              <div className="bg-white rounded-xl p-4 text-center">
                <p className="text-3xl font-bold text-orange-600">+1</p>
                <p className="text-sm text-zinc-600">nivel CEFR</p>
              </div>
              <div className="bg-white rounded-xl p-4 text-center">
                <p className="text-3xl font-bold text-orange-600">79€</p>
                <p className="text-sm text-zinc-600">desde/mes</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <article className="py-12 bg-white">
        <div className="container mx-auto px-6 md:px-12">
          <div className="max-w-4xl">

            {/* Introduction */}
            <div className="prose prose-lg max-w-none mb-12">
              <p className="text-xl text-zinc-600 leading-relaxed">
                ¿Necesitas certificar tu nivel de inglés con Linguaskill en poco tiempo? Los cursos intensivos online te permiten
                prepararte eficazmente en 4-8 semanas, combinando clases en directo, práctica autónoma y simulacros del formato
                adaptativo. Esta guía te explica qué buscar en un curso intensivo, cómo estructurar tu preparación y qué resultados
                puedes esperar según tu dedicación.
              </p>
            </div>

            {/* Section 1 */}
            <section className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-zinc-900 mb-6">
                ¿Qué incluye un buen curso intensivo de Linguaskill?
              </h2>
              <p className="text-zinc-600 mb-6">
                Un curso intensivo efectivo debe cubrir los 4 módulos del examen con práctica específica del formato adaptativo.
                No basta con mejorar tu inglés general; necesitas familiarizarte con los tipos de preguntas, la gestión del tiempo
                y las estrategias específicas de cada sección. Puedes consultar información oficial sobre el examen en la <a href="https://www.cambridgeenglish.org/es/exams-and-tests/linguaskill/" target="_blank" rel="noopener noreferrer" className="text-orange-600 hover:underline">página oficial de Cambridge Linguaskill</a> para entender mejor su estructura.
              </p>

              <div className="grid md:grid-cols-2 gap-4 mb-6">
                {courseFeatures.map((feature, index) => (
                  <div key={index} className="bg-zinc-50 rounded-xl p-5 flex items-start gap-4">
                    <div className="bg-orange-100 rounded-lg p-2">
                      <feature.icon className="w-6 h-6 text-orange-600" />
                    </div>
                    <div>
                      <h4 className="font-bold text-zinc-900">{feature.title}</h4>
                      <p className="text-sm text-zinc-600">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="bg-orange-50 border-l-4 border-orange-400 p-4">
                <p className="text-orange-800">
                  <strong>Elemento clave:</strong> Asegúrate de que el curso incluye práctica de Speaking con feedback real,
                  ya que es el módulo donde más diferencia marca la preparación guiada frente al autoaprendizaje.
                </p>
              </div>
            </section>

            {/* Section 2 - Weekly Plan */}
            <section className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-zinc-900 mb-6">
                Plan de estudio intensivo de 8 semanas
              </h2>
              <p className="text-zinc-600 mb-6">
                Esta es una estructura típica de un curso intensivo efectivo. Adapta las horas según tu disponibilidad,
                pero mantén el equilibrio entre los 4 módulos.
              </p>

              <div className="space-y-4 mb-6">
                {weeklyPlan.map((item, index) => (
                  <div key={index} className="bg-zinc-50 rounded-xl p-5 border-l-4 border-orange-400">
                    <div className="flex flex-col md:flex-row md:items-center gap-2 mb-2">
                      <span className="bg-orange-100 text-orange-700 px-3 py-1 rounded-full text-sm font-bold w-fit">
                        {item.week}
                      </span>
                      <span className="font-bold text-zinc-900">{item.focus}</span>
                    </div>
                    <p className="text-zinc-600 text-sm">{item.activities}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Section 3 - Online vs Presencial */}
            <section className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-zinc-900 mb-6">
                Cursos online vs presenciales: ¿Qué elegir?
              </h2>

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div className="bg-blue-50 rounded-xl p-6">
                  <h3 className="font-bold text-zinc-900 mb-4 flex items-center gap-2">
                    <span className="bg-blue-200 text-blue-700 px-2 py-1 rounded text-sm">Online</span>
                  </h3>
                  <ul className="space-y-2">
                    {[
                      "Flexibilidad horaria total",
                      "Acceso a grabaciones 24/7",
                      "Práctica con herramientas digitales",
                      "Simulacros similares al examen real",
                      "Ideal para autodisciplinados"
                    ].map((item, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm text-zinc-600">
                        <CheckCircle className="w-4 h-4 text-blue-500" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-green-50 rounded-xl p-6">
                  <h3 className="font-bold text-zinc-900 mb-4 flex items-center gap-2">
                    <span className="bg-green-200 text-green-700 px-2 py-1 rounded text-sm">Presencial</span>
                  </h3>
                  <ul className="space-y-2">
                    {[
                      "Interacción directa con profesor",
                      "Práctica de Speaking en vivo",
                      "Rutina de estudio estructurada",
                      "Corrección inmediata de errores",
                      "Motivación del grupo"
                    ].map((item, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm text-zinc-600">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="bg-zinc-100 rounded-xl p-6">
                <p className="text-zinc-700">
                  <strong>Nuestra recomendación:</strong> En <Link to="/academia-ingles-barrio-del-pilar" className="text-orange-600 hover:underline font-medium">nuestra academia en Barrio del Pilar</Link>, <Link to="/academia-ingles-la-vaguada" className="text-orange-600 hover:underline font-medium">junto a La Vaguada</Link>, ofrecemos un formato híbrido que combina
                  clases presenciales para Speaking con recursos online para práctica autónoma en nuestros <Link to="/ingles-la-vaguada/adultos" className="text-orange-600 hover:underline font-medium">cursos de inglés para adultos</Link>. Esto te da lo mejor de ambos mundos
                  por solo 79€/mes.
                </p>
              </div>
            </section>

            {/* Section 4 - Impulse Highlight */}
            <section className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-zinc-900 mb-6">
                Preparación Linguaskill en Impulse English Academy
              </h2>

              <div className="bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl p-8 text-white mb-6">
                <h3 className="text-2xl font-bold mb-4">Curso Intensivo Linguaskill - 79€/mes</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-bold mb-2">Incluye:</h4>
                    <ul className="space-y-2">
                      {[
                        "Clases en grupos reducidos (máx. 8)",
                        "Material de preparación oficial",
                        "Simulacros cronometrados",
                        "Práctica de Speaking con feedback",
                        "Corrección personalizada de Writing",
                        "Acceso a plataforma online"
                      ].map((item, i) => (
                        <li key={i} className="flex items-center gap-2 text-sm">
                          <CheckCircle className="w-4 h-4" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold mb-2">Horarios flexibles:</h4>
                    <p className="text-sm text-white/90 mb-4">
                      Mañana, tarde y fines de semana. Adaptamos los grupos a tu disponibilidad para que puedas compaginar
                      la preparación con trabajo o estudios.
                    </p>
                    <Link
                      to="/contacto"
                      className="inline-block bg-white text-orange-600 font-bold py-2 px-6 rounded-lg hover:bg-zinc-100 transition-colors"
                    >
                      Solicitar información
                    </Link>
                  </div>
                </div>
              </div>
            </section>

            {/* FAQ Section */}
            <section className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-zinc-900 mb-6">
                Preguntas Frecuentes sobre Cursos Intensivos Linguaskill
              </h2>
              <div className="space-y-4">
                {faqs.map((faq, index) => (
                  <div key={index} className="border border-zinc-200 rounded-xl overflow-hidden">
                    <button
                      onClick={() => setOpenFaq(openFaq === index ? null : index)}
                      className="w-full px-6 py-4 text-left flex items-center justify-between bg-zinc-50 hover:bg-zinc-100 transition-colors"
                    >
                      <span className="font-semibold text-zinc-900">{faq.question}</span>
                      {openFaq === index ? (
                        <ChevronUp className="w-5 h-5 text-zinc-500" />
                      ) : (
                        <ChevronDown className="w-5 h-5 text-zinc-500" />
                      )}
                    </button>
                    {openFaq === index && (
                      <div className="px-6 py-4 bg-white">
                        <p className="text-zinc-600">{faq.answer}</p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </section>

            {/* Conclusion */}
            <section className="mb-12">
              <div className="bg-gradient-to-r from-orange-600 to-red-600 rounded-2xl p-8 text-white">
                <h2 className="text-2xl font-bold mb-4">Conclusión</h2>
                <p className="text-white/90 mb-6">
                  Un curso intensivo de Linguaskill online es la forma más eficiente de prepararte para el examen en poco tiempo.
                  La clave está en elegir un programa que combine teoría, práctica de los 4 módulos y feedback personalizado,
                  especialmente en Speaking y Writing donde más diferencia marca la preparación guiada.
                </p>
                <p className="text-white/90">
                  En <strong>Impulse English Academy</strong> ofrecemos preparación intensiva de <Link to="/examenes-cambridge/linguaskill" className="text-white hover:underline font-medium">Linguaskill</Link> y otros <Link to="/examenes-cambridge" className="text-white hover:underline font-medium">exámenes Cambridge</Link> desde <strong>79€/mes</strong>,
                  con profesores especializados en certificaciones Cambridge, <Link to="/ingles-la-vaguada/particulares" className="text-white hover:underline font-medium">clases particulares</Link> disponibles y grupos reducidos para máxima atención.
                </p>
              </div>
            </section>

            {/* CTA */}
            <section className="mb-12">
              <div className="bg-zinc-900 rounded-2xl p-8">
                <div className="flex flex-col md:flex-row items-center gap-6">
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-white mb-2">
                      ¿Listo para prepararte para Linguaskill?
                    </h3>
                    <p className="text-zinc-400">
                      Empieza tu curso intensivo y certifica tu nivel en pocas semanas.
                    </p>
                  </div>
                  <Link
                    to="/contacto"
                    className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-lg transition-colors whitespace-nowrap"
                  >
                    Empezar ahora
                  </Link>
                </div>
              </div>
            </section>

            {/* Related Articles */}
            <section>
              <h3 className="text-xl font-bold text-zinc-900 mb-4">Artículos relacionados</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <Link to="/linguaskill" className="bg-zinc-50 rounded-xl p-4 hover:bg-zinc-100 transition-colors">
                  <span className="text-xs font-bold text-orange-600">GUÍA COMPLETA</span>
                  <h4 className="font-bold text-zinc-900 mt-1">Guía Completa del Examen Linguaskill 2026</h4>
                </Link>
                <Link to="/linguaskill/precio-online" className="bg-zinc-50 rounded-xl p-4 hover:bg-zinc-100 transition-colors">
                  <span className="text-xs font-bold text-orange-600">PRECIOS</span>
                  <h4 className="font-bold text-zinc-900 mt-1">Precio del Test Linguaskill Online 2026</h4>
                </Link>
              </div>
            </section>
          </div>
        </div>
      </article>

      <LeadForm />

      {/* External Authority Link */}
      <section className="py-8 px-6 bg-white border-t border-zinc-100">
        <div className="max-w-4xl mx-auto text-center">
          <a
            href="https://www.cambridgeenglish.org/es/exams-and-tests/linguaskill/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-orange-600 hover:underline"
          >
            → Más información en Cambridge English - Linguaskill oficial
          </a>
        </div>
      </section>

      <Footer />

      <SchemaMarkup schema={articleSchema} />
    </>
  );
}
