import React, { useState, useEffect } from 'react';
import { ChevronRight, Clock, Calendar, ChevronDown, ChevronUp, BookOpen, CheckCircle, Target, ArrowRight, Award } from 'lucide-react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import LeadForm from '../../components/LeadForm';
import Breadcrumb from '../../components/Breadcrumb';
import { generateArticleSchema, businessInfo } from '../../utils/schemaData';

export const articleSchema = generateArticleSchema({
    headline: "¿Academia o Profesor Particular de Inglés? Pros y Contras",
    description: "Compara academia y profesor particular de inglés: precios, metodología, resultados y flexibilidad. Descubre cuál se adapta mejor a tus necesidades.",
    url: `${businessInfo.url}/blog/academia-vs-profesor-particular`,
    datePublished: "2025-03-01"
  });

export const faqItems = [
    {
      question: "¿Qué es más barato, academia o profesor particular?",
      answer: "Generalmente, la academia es más económica por hora de clase (15-25€/h en grupo vs 25-45€/h particular). Sin embargo, el profesor particular puede ser más eficiente en tiempo total porque la atención es exclusiva. Si necesitas 100 horas de grupo, quizás con 60-70 horas de particular consigas el mismo resultado, equilibrando el coste total."
    }

  ,
    {
      question: "¿Se aprende más rápido con un profesor particular?",
      answer: "El progreso individual suele ser más rápido con un profesor particular porque la clase se centra 100% en tus necesidades. Sin embargo, la academia aporta algo que el particular no puede: interacción con otros estudiantes. Para el speaking y la confianza comunicativa, practicar con compañeros tiene un valor insustituible."
    },
    {
      question: "¿Puedo combinar academia y clases particulares?",
      answer: "Sí, y es una estrategia excelente. Muchos estudiantes asisten a academia para la estructura grupal y complementan con clases particulares para reforzar puntos débiles específicos. Es la combinación que mejores resultados da, especialmente para preparación de exámenes Cambridge."
    },
    {
      question: "¿Cómo sé si un profesor particular está cualificado?",
      answer: "Busca profesores con certificaciones de enseñanza (CELTA, DELTA, TEFL) y experiencia demostrable en preparación de exámenes si ese es tu objetivo. En academias, esta verificación ya está hecha: los centros autorizados Cambridge emplean profesores cualificados y con experiencia verificada."
    },
    {
      question: "¿Qué opción es mejor para niños?",
      answer: "Para niños, la academia suele ser mejor: la interacción con otros niños, el ambiente de grupo y las actividades colaborativas fomentan la motivación y el aprendizaje natural. Las clases particulares para niños funcionan bien como refuerzo puntual o para necesidades específicas (dificultades de aprendizaje, preparación de exámenes)."
    }
  ];

export default function AcademiaVsProfesorParticularPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [openFaq, setOpenFaq] = useState<number | null>(null);


  const comparisonData = [
    { feature: "Precio por hora", academia: "15€-25€/h (grupo)", particular: "25€-45€/h" },
    { feature: "Atención personalizada", academia: "Compartida (6-12 alumnos)", particular: "100% individual" },
    { feature: "Interacción grupal", academia: "Sí (speaking natural)", particular: "No" },
    { feature: "Flexibilidad horaria", academia: "Horarios fijos", particular: "Negociable" },
    { feature: "Material didáctico", academia: "Incluido/organizado", particular: "Variable" },
    { feature: "Seguimiento y evaluación", academia: "Sistemático", particular: "Depende del profesor" },
    { feature: "Preparación exámenes", academia: "Especializada (simulacros)", particular: "Variable" },
    { feature: "Motivación grupal", academia: "Alta (compañeros)", particular: "Depende del alumno" }
  ];

  return (
    <>
<div className="min-h-screen flex flex-col bg-white">
        <Navbar />

        <main className="flex-grow">
          {/* Hero Section */}
          <header className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden">
            <div className="absolute inset-0">
              <img src="https://impulseenglish.s3.us-east-1.amazonaws.com/impulsephotos/NACHOS+photos.+/Classroom+Facilities+Main+Classroom.JPG" alt="Clase de inglés en academia comparativa con profesor particular" className="w-full h-full object-cover" loading="eager" />
              <div className="absolute inset-0 bg-gradient-to-br from-accent-blue/95 via-accent-blue/85 to-[#0a3560]/75"></div>
            </div>
            <div className="absolute inset-0 hero-grain opacity-[0.03]"></div>
            <div className="absolute -top-32 -right-32 w-[420px] h-[420px] rounded-full bg-brand-red/[0.04]"></div>
            <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
              <Breadcrumb
                items={[
                  { label: 'Blog', href: '/blog' },
                  { label: 'Academia vs Profesor Particular' }
                ]}
                variant="light"
              />

              <div className="mt-12 md:mt-16">
                <div className="flex items-center gap-4 mb-6 animate-hero-fade-up">
                  <div className="w-8 h-px bg-white/40"></div>
                  <span className="text-white/50 text-xs font-display flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5" />
                    Marzo 2026
                  </span>
                </div>

                <h1 className="font-serif text-3xl md:text-5xl lg:text-6xl text-white tracking-tight leading-[1.1] mb-6 animate-hero-fade-up animation-delay-100">
                  ¿Academia o Profesor Particular de Inglés? Pros y Contras
                </h1>
                <div className="w-16 h-0.5 bg-brand-red mb-6 animate-hero-fade-up animation-delay-150"></div>
                <p className="font-display text-lg md:text-xl text-white/80 font-light leading-relaxed max-w-3xl animate-hero-fade-up animation-delay-200">
                  Analizamos precios, metodología, flexibilidad y resultados para ayudarte a elegir la opción que mejor se adapta a tu perfil.
                </p>
              </div>
            </div>
          </header>

          {/* Content */}
          <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            {/* Table of Contents */}
            <div className="bg-blue-50 rounded-2xl p-6 mb-12">
              <h2 className="text-lg font-semibold text-gray-900 mb-4">Contenido del artículo</h2>
              <ul className="space-y-2">
                <li><a href="#tabla" className="text-blue-600 hover:text-blue-700 transition-colors">→ Tabla Comparativa</a></li>
                <li><a href="#ventajas-academia" className="text-blue-600 hover:text-blue-700 transition-colors">→ Ventajas de la Academia</a></li>
                <li><a href="#ventajas-particular" className="text-blue-600 hover:text-blue-700 transition-colors">→ Ventajas del Profesor Particular</a></li>
                <li><a href="#precio" className="text-blue-600 hover:text-blue-700 transition-colors">→ Precio Comparativo</a></li>
                <li><a href="#recomendacion" className="text-blue-600 hover:text-blue-700 transition-colors">→ Recomendación Según Perfil</a></li>
                <li><a href="#faq" className="text-blue-600 hover:text-blue-700 transition-colors">→ Preguntas Frecuentes</a></li>
              </ul>
            </div>

            {/* Introduction */}
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              A la hora de aprender inglés, la elección entre academia y profesor particular es una de las decisiones más importantes. Ambas opciones tienen ventajas claras, y la mejor depende de tu perfil, presupuesto y objetivos. En esta guía comparamos ambas <strong>sin sesgo</strong>, para que tengas toda la información antes de decidir.
            </p>

            {/* Section 1 - Comparison Table */}
            <section id="tabla" className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                Tabla Comparativa: Academia vs Profesor Particular
              </h2>

              <div className="overflow-x-auto mb-8">
                <table className="w-full border-collapse bg-white rounded-xl overflow-hidden shadow-lg">
                  <thead>
                    <tr className="bg-gradient-to-r from-blue-600 to-blue-800 text-white">
                      <th className="text-left p-4 font-semibold">Aspecto</th>
                      <th className="text-left p-4 font-semibold">Academia</th>
                      <th className="text-left p-4 font-semibold">Profesor Particular</th>
                    </tr>
                  </thead>
                  <tbody>
                    {comparisonData.map((item, index) => (
                      <tr key={index} className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                        <td className="p-4 font-medium text-gray-900">{item.feature}</td>
                        <td className="p-4 text-gray-700 text-sm">{item.academia}</td>
                        <td className="p-4 text-gray-700 text-sm">{item.particular}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-xl">
                <p className="text-gray-800 font-medium">
                  <strong>Dato clave:</strong> Las academias especializadas en exámenes Cambridge suelen ofrecer simulacros de examen completos, algo que un profesor particular difícilmente puede replicar con la misma fidelidad.
                </p>
              </div>
            </section>

            {/* Section 2 */}
            <section id="ventajas-academia" className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                Ventajas de Aprender en Academia
              </h2>

              <p className="text-gray-700 mb-6 leading-relaxed">
                Las academias de inglés ofrecen un entorno de aprendizaje estructurado que muchos estudiantes necesitan para progresar consistentemente:
              </p>

              <div className="space-y-4 mb-8">
                <div className="bg-white border border-gray-200 rounded-xl p-6">
                  <h3 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-blue-600" />
                    Interacción grupal y speaking natural
                  </h3>
                  <p className="text-gray-700">Practicar speaking con compañeros de nivel similar simula situaciones comunicativas reales. Las dinámicas de grupo, debates y role-plays son imposibles de replicar en una clase individual. Esta interacción desarrolla confianza comunicativa de forma natural.</p>
                </div>

                <div className="bg-white border border-gray-200 rounded-xl p-6">
                  <h3 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-blue-600" />
                    Metodología estructurada y probada
                  </h3>
                  <p className="text-gray-700">Las academias siguen currículos diseñados profesionalmente con progresión lógica de contenidos. La <a href="/metodologia/" className="text-blue-600 hover:underline">metodología de enseñanza</a> está testada con cientos de estudiantes y optimizada para resultados. No dependes de la improvisación.</p>
                </div>

                <div className="bg-white border border-gray-200 rounded-xl p-6">
                  <h3 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-blue-600" />
                    Preparación especializada para exámenes
                  </h3>
                  <p className="text-gray-700">Las academias autorizadas Cambridge tienen acceso a materiales exclusivos, realizan simulacros en condiciones reales y sus profesores conocen las claves del examen. Las tasas de aprobado de academias especializadas son significativamente superiores a las de candidatos autodidactas.</p>
                </div>

                <div className="bg-white border border-gray-200 rounded-xl p-6">
                  <h3 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-blue-600" />
                    Compromiso y rutina
                  </h3>
                  <p className="text-gray-700">Tener un horario fijo y compañeros que esperan tu asistencia crea un compromiso difícil de mantener con un profesor particular. La regularidad es el factor más determinante en el aprendizaje de idiomas.</p>
                </div>
              </div>
            </section>

            {/* Section 3 */}
            <section id="ventajas-particular" className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                Ventajas del Profesor Particular
              </h2>

              <p className="text-gray-700 mb-6 leading-relaxed">
                Las clases particulares tienen fortalezas innegables que las hacen ideales para ciertos perfiles:
              </p>

              <div className="space-y-4 mb-8">
                <div className="bg-white border border-gray-200 rounded-xl p-6">
                  <h3 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-blue-600" />
                    Atención 100% personalizada
                  </h3>
                  <p className="text-gray-700">Todo el tiempo de clase se dedica a tus necesidades específicas. Si tu punto débil es el listening, toda la sesión puede centrarse en eso. No hay que adaptarse al ritmo ni a las necesidades de otros estudiantes.</p>
                </div>

                <div className="bg-white border border-gray-200 rounded-xl p-6">
                  <h3 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-blue-600" />
                    Flexibilidad máxima
                  </h3>
                  <p className="text-gray-700">Horarios negociables, posibilidad de clase a domicilio u online, cancelaciones más flexibles. Ideal para profesionales con agendas cambiantes o personas con horarios incompatibles con las academias.</p>
                </div>

                <div className="bg-white border border-gray-200 rounded-xl p-6">
                  <h3 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-blue-600" />
                    Ritmo adaptado al alumno
                  </h3>
                  <p className="text-gray-700">Si dominas la gramática pero necesitas más speaking, el profesor ajusta al instante. No hay que esperar a que el grupo complete un tema antes de avanzar. Esto puede acelerar significativamente el progreso.</p>
                </div>

                <div className="bg-white border border-gray-200 rounded-xl p-6">
                  <h3 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-blue-600" />
                    Contenido a medida
                  </h3>
                  <p className="text-gray-700">El profesor puede trabajar con materiales específicos de tu sector profesional, preparar vocabulario técnico relevante o enfocarse en habilidades concretas como negociación o presentaciones en inglés.</p>
                </div>
              </div>

              <div className="bg-amber-50 border-l-4 border-amber-500 p-6 rounded-r-xl">
                <p className="text-gray-800">
                  <strong>Cuidado:</strong> La calidad de un profesor particular varía enormemente. Sin las estructuras de control de una academia, depende totalmente de la formación y profesionalidad del profesor individual. Pide siempre referencias y credenciales antes de contratar.
                </p>
              </div>
            </section>

            {/* Section 4 */}
            <section id="precio" className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                Precio Comparativo: ¿Qué Sale Más Rentable?
              </h2>

              <p className="text-gray-700 mb-6 leading-relaxed">
                El precio es un factor decisivo para muchos estudiantes. Desglosamos los costes reales de cada opción:
              </p>

              <div className="grid md:grid-cols-2 gap-4 mb-6">
                <div className="bg-blue-50 rounded-xl p-5">
                  <h3 className="font-bold text-blue-900 mb-3 flex items-center gap-2">
                    <Award className="w-5 h-5" />
                    Coste en Academia
                  </h3>
                  <ul className="space-y-2 text-gray-700 text-sm">
                    <li>• Mensualidad: 80€-150€/mes</li>
                    <li>• Incluye: 2-3 clases/semana (90 min)</li>
                    <li>• Coste por hora: 15€-25€</li>
                    <li>• Material incluido o con descuento</li>
                    <li>• Coste anual aprox: 800€-1.500€</li>
                  </ul>
                </div>
                <div className="bg-blue-50 rounded-xl p-5">
                  <h3 className="font-bold text-blue-900 mb-3 flex items-center gap-2">
                    <Award className="w-5 h-5" />
                    Coste Profesor Particular
                  </h3>
                  <ul className="space-y-2 text-gray-700 text-sm">
                    <li>• Por sesión: 25€-45€/hora</li>
                    <li>• 2 clases/semana: 200€-360€/mes</li>
                    <li>• Material: coste adicional</li>
                    <li>• Sin gastos de matrícula</li>
                    <li>• Coste anual aprox: 2.000€-4.000€</li>
                  </ul>
                </div>
              </div>

              <div className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-xl p-6 mb-6">
                <h3 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <Target className="w-5 h-5 text-blue-600" />
                  Coste Real por Resultado
                </h3>
                <p className="text-gray-700 text-sm mb-3">Si medimos el coste por "nivel conseguido", la diferencia se reduce:</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-white rounded-lg p-4">
                    <div className="text-blue-600 font-bold">Academia: 800€-1.500€</div>
                    <div className="text-gray-600 text-sm">Para subir un nivel MCER en 9-12 meses</div>
                  </div>
                  <div className="bg-white rounded-lg p-4">
                    <div className="text-blue-600 font-bold">Particular: 1.200€-2.500€</div>
                    <div className="text-gray-600 text-sm">Para subir un nivel MCER en 6-9 meses</div>
                  </div>
                </div>
              </div>

              <p className="text-gray-700 mb-4 leading-relaxed">
                La academia es más económica en coste total, mientras que las clases particulares pueden ser más eficientes en tiempo. La mejor relación calidad-precio depende de cuánto valores el factor tiempo frente al factor económico.
              </p>
            </section>

            {/* Section 5 */}
            <section id="recomendacion" className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                Recomendación Según tu Perfil y Objetivo
              </h2>

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div className="bg-white border-2 border-blue-200 rounded-xl p-6">
                  <h3 className="font-bold text-blue-800 mb-3">Elige academia si...</h3>
                  <ul className="space-y-2 text-gray-700 text-sm">
                    <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" /> Necesitas estructura y compromiso</li>
                    <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" /> Quieres practicar speaking grupal</li>
                    <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" /> Preparas un examen Cambridge</li>
                    <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" /> Tienes un presupuesto ajustado</li>
                    <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" /> Aprendes mejor en grupo</li>
                  </ul>
                </div>
                <div className="bg-white border-2 border-blue-200 rounded-xl p-6">
                  <h3 className="font-bold text-blue-800 mb-3">Elige particular si...</h3>
                  <ul className="space-y-2 text-gray-700 text-sm">
                    <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" /> Tu horario es muy variable</li>
                    <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" /> Necesitas inglés muy específico</li>
                    <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" /> Tienes puntos débiles concretos</li>
                    <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" /> Prefieres ritmo totalmente personalizado</li>
                    <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" /> Te sientes incómodo en grupo</li>
                  </ul>
                </div>
              </div>

              <p className="text-gray-700 mb-4 leading-relaxed">
                En <a href="/contacto/" className="text-blue-600 hover:underline">Impulse English Academy</a> ofrecemos ambas opciones: <a href="/cursos-ingles/particulares/" className="text-blue-600 hover:underline">clases particulares</a> y cursos en grupo reducido. Así puedes encontrar la modalidad perfecta o combinar ambas para un progreso óptimo.
              </p>

              <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-xl">
                <p className="text-gray-800 font-medium">
                  <strong>La mejor opción:</strong> Para muchos estudiantes, la combinación de academia + refuerzo particular puntual ofrece los mejores resultados. La academia proporciona estructura e interacción; el profesor particular refuerza áreas específicas.
                </p>
              </div>
            </section>

            {/* FAQ Section */}
            <section id="faq" className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8">
                Preguntas Frecuentes
              </h2>

              <div className="space-y-4">
                {faqItems.map((faq, index) => (
                  <div key={index} className="border border-gray-200 rounded-xl overflow-hidden">
                    <button
                      onClick={() => setOpenFaq(openFaq === index ? null : index)}
                      className="w-full flex items-center justify-between p-6 text-left bg-white hover:bg-gray-50 transition-colors"
                    >
                      <span className="font-semibold text-gray-900 pr-4">{faq.question}</span>
                      {openFaq === index ? (
                        <ChevronUp className="w-5 h-5 text-blue-600 flex-shrink-0" />
                      ) : (
                        <ChevronDown className="w-5 h-5 text-blue-600 flex-shrink-0" />
                      )}
                    </button>
                    <div className={`overflow-hidden transition-all duration-300 ${openFaq === index ? 'max-h-[500px] opacity-100 pb-6' : 'max-h-0 opacity-0'}`}>
                        <div className="px-6 bg-white">
                          <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                        </div>
                      </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Conclusion */}
            <section className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                Conclusión
              </h2>

              <div className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-2xl p-8">
                <p className="text-gray-700 mb-4 leading-relaxed">
                  No hay una respuesta universal: la academia es mejor para quienes buscan estructura, interacción grupal y preparación de exámenes a precio asequible. El profesor particular es mejor para quienes necesitan flexibilidad total y contenido muy personalizado.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  En <a href="/metodologia/" className="text-blue-600 hover:underline font-medium">Impulse English Academy</a> ofrecemos lo mejor de ambos mundos con grupos reducidos que combinan la interacción grupal con atención personalizada, y <a href="/cursos-ingles/particulares/" className="text-blue-600 hover:underline font-medium">clases particulares</a> para quienes prefieren la opción individual.
                </p>
              </div>
            </section>

            {/* CTA */}
            <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl p-8 text-center text-white">
              <h3 className="text-2xl font-bold mb-4">¿Buscas la mejor opción para ti?</h3>
              <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
                Ven a conocernos y descubre cómo nuestros grupos reducidos te ofrecen lo mejor de la academia y del profesor particular.
              </p>
              <a
              href="/contacto/"
                className="inline-flex items-center gap-2 bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold hover:bg-blue-50 transition-colors"
              >
                Solicitar clase de prueba
                <ArrowRight className="w-5 h-5" />
              </a>
            </div>

            {/* Related Articles */}
            <section className="mt-16">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Artículos Relacionados</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <a href="/metodologia/" className="group bg-gray-50 rounded-xl p-6 hover:bg-blue-50 transition-colors">
                  <h3 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors mb-2">
                    Nuestra Metodología
                  </h3>
                  <p className="text-gray-600 text-sm">Descubre cómo enseñamos inglés con resultados probados.</p>
                </a>
                <a href="/cursos-ingles/particulares/" className="group bg-gray-50 rounded-xl p-6 hover:bg-blue-50 transition-colors">
                  <h3 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors mb-2">
                    Clases Particulares en Impulse
                  </h3>
                  <p className="text-gray-600 text-sm">Atención personalizada con profesores titulados cualificados.</p>
                </a>
              </div>
            </section>
          </article>

          {/* Lead Form */}
          <section className="bg-gray-50 py-16">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
              <LeadForm />
            </div>
          </section>
        </main>

        {/* External Authority Link */}
        <section className="py-8 px-6 bg-white border-t border-zinc-100">
          <div className="max-w-4xl mx-auto text-center">
            <a
              href="https://www.cambridgeenglish.org/es/find-a-centre/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-blue-600 hover:underline"
            >
              → Encuentra centros autorizados Cambridge en tu zona
            </a>
          </div>
        </section>

        <Footer />
      </div>

</>
  );
}