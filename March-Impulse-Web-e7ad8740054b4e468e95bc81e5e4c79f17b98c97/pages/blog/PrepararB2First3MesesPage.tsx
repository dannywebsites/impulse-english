import React, { useState, useEffect } from 'react';
import { ChevronRight, Clock, Calendar, ChevronDown, ChevronUp, BookOpen, CheckCircle, Target, ArrowRight, Award } from 'lucide-react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import LeadForm from '../../components/LeadForm';
import Breadcrumb from '../../components/Breadcrumb';
import { generateArticleSchema, businessInfo } from '../../utils/schemaData';
import type { FAQItem } from '../../utils/schemaData';

export const articleSchema = generateArticleSchema({
    headline: "¿Puedo Preparar el B2 First en 3 Meses? Plan Realista",
    description: "Sí, puedes preparar el B2 First en 3 meses si tienes nivel B1+. Plan de estudio mes a mes, horas semanales necesarias y estrategias probadas.",
    url: `${businessInfo.url}/blog/preparar-b2-first-3-meses`,
    datePublished: "2025-03-01"
  });

export const faqItems: FAQItem[] = [
    {
      question: "¿Puedo preparar el B2 First en menos de 3 meses?",
      answer: "Es posible pero requiere condiciones muy específicas: necesitas un nivel B1+ muy consolidado (cercano al B2), disponibilidad para estudiar 15-20 horas semanales y, preferiblemente, un curso intensivo con profesor especializado. Con estas condiciones, algunos candidatos logran prepararse en 6-8 semanas. Sin embargo, no es lo recomendable para la mayoría, ya que la presión excesiva puede generar ansiedad que afecte al rendimiento en el examen."
    }

  ,
    {
      question: "¿Qué pasa si mi nivel es A2, puedo hacer el B2 en 3 meses?",
      answer: "No es realista preparar el B2 First en 3 meses desde un nivel A2. La distancia entre A2 y B2 es de aproximadamente 300-400 horas de aprendizaje, lo que requiere 9-12 meses de estudio constante. Si partes de A2, te recomendamos primero alcanzar un B1 sólido (4-6 meses) y luego preparar el B2 First en otros 3-4 meses adicionales. Intentar saltar niveles suele resultar en suspenso y frustración."
    },
    {
      question: "¿Cuántas horas al día necesito estudiar?",
      answer: "Para un plan de 3 meses efectivo, necesitas dedicar entre 10-15 horas semanales, lo que equivale a 1,5-2 horas diarias más sesiones más largas los fines de semana. Es más efectivo estudiar 1,5 horas cada día que hacer maratones de 5 horas un par de veces por semana. La consistencia diaria es clave para la retención y el progreso sostenido."
    },
    {
      question: "¿Necesito una academia para preparar el B2 en 3 meses?",
      answer: "No es estrictamente necesario, pero sí muy recomendable cuando el tiempo es limitado. Una academia especializada te proporciona un plan estructurado optimizado para el tiempo disponible, simulacros de examen corregidos, feedback en Writing y Speaking (las partes más difíciles de mejorar por tu cuenta) y la disciplina de un horario fijo. Los candidatos con preparación guiada alcanzan sus objetivos un 20-30% más rápido que los autodidactas."
    },
    {
      question: "¿Qué materiales son esenciales para la preparación en 3 meses?",
      answer: "Los materiales imprescindibles son: 1) Un libro de preparación oficial como 'Complete First' o 'Compact First' (diseñado para preparación intensiva), 2) Al menos 4 tests de práctica completos (Cambridge Practice Tests), 3) Una app de vocabulario como Quizlet con listas de phrasal verbs y collocations B2, 4) Acceso a Write & Improve de Cambridge para practicar Writing con feedback automático, 5) Podcasts en inglés para Listening diario (BBC 6 Minute English, TED Talks)."
    }
  ];

export default function PrepararB2First3MesesPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [openFaq, setOpenFaq] = useState<number | null>(null);


  return (
    <>
<div className="min-h-screen flex flex-col bg-white">
        <Navbar />

        <main className="flex-grow">
          {/* Hero Section */}
          <header className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden">
            <div className="absolute inset-0">
              <img src="/images/academy/6e08cd95-47b7-4d36-95c7-fecfb41e3883.jpeg" alt="Plan de preparación B2 First en 3 meses" className="w-full h-full object-cover" loading="eager" />
              <div className="absolute inset-0 bg-gradient-to-br from-accent-blue/95 via-accent-blue/85 to-[#0a3560]/75"></div>
            </div>
            <div className="absolute inset-0 hero-grain opacity-[0.03]"></div>
            <div className="absolute -top-32 -right-32 w-[420px] h-[420px] rounded-full bg-brand-red/[0.04]"></div>
            <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
              <Breadcrumb
                items={[
                  { label: 'Blog', href: '/blog' },
                  { label: 'Preparar B2 First en 3 Meses' }
                ]}
                variant="light"
              />

              <div className="mt-12 md:mt-16">
                <div className="flex items-center gap-4 mb-6 animate-hero-fade-up">
                  <div className="w-8 h-px bg-white/40"></div>
                  <span className="text-white/50 text-xs font-display flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5" />
                    Actualizado: Marzo 2026
                  </span>
                </div>

                <h1 className="font-serif text-3xl md:text-5xl lg:text-6xl text-white tracking-tight leading-[1.1] mb-6 animate-hero-fade-up animation-delay-100">
                  ¿Puedo Preparar el B2 First en 3 Meses? Plan Realista
                </h1>
                <div className="w-16 h-0.5 bg-brand-red mb-6 animate-hero-fade-up animation-delay-150"></div>
                <p className="font-display text-lg md:text-xl text-white/80 font-light leading-relaxed max-w-3xl animate-hero-fade-up animation-delay-200">
                  Plan de estudio mes a mes para preparar el B2 First en 12 semanas: requisitos previos, rutina diaria y recursos imprescindibles.
                </p>
              </div>
            </div>
          </header>

          {/* Content */}
          <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            {/* Table of Contents */}
            <div className="bg-emerald-50 rounded-2xl p-6 mb-12">
              <h2 className="text-lg font-semibold text-gray-900 mb-4">Contenido del artículo</h2>
              <ul className="space-y-2">
                <li><a href="#requisitos" className="text-emerald-600 hover:text-emerald-700 transition-colors">→ Requisitos Previos: ¿Es Viable para Ti?</a></li>
                <li><a href="#mes-1" className="text-emerald-600 hover:text-emerald-700 transition-colors">→ Mes 1: Diagnóstico y Bases</a></li>
                <li><a href="#mes-2" className="text-emerald-600 hover:text-emerald-700 transition-colors">→ Mes 2: Práctica Intensiva por Habilidades</a></li>
                <li><a href="#mes-3" className="text-emerald-600 hover:text-emerald-700 transition-colors">→ Mes 3: Simulacros y Estrategia Final</a></li>
                <li><a href="#rutina" className="text-emerald-600 hover:text-emerald-700 transition-colors">→ Rutina Diaria Recomendada</a></li>
                <li><a href="#faq" className="text-emerald-600 hover:text-emerald-700 transition-colors">→ Preguntas Frecuentes</a></li>
              </ul>
            </div>

            {/* Introduction */}
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              Preparar el <a href="/examenes-cambridge/b2-first/" className="text-emerald-600 hover:underline font-medium">B2 First en 3 meses</a> es completamente posible, pero requiere un punto de partida adecuado y un plan de estudio estructurado. La clave está en organizar la preparación en tres fases claras: <strong>diagnóstico y refuerzo de bases</strong> (mes 1), <strong>práctica intensiva por habilidades</strong> (mes 2) y <strong>simulacros cronometrados con estrategia de examen</strong> (mes 3). Con dedicación de 10-15 horas semanales y un nivel de partida B1+, este plan te dará las herramientas para presentarte con confianza al examen.
            </p>

            {/* Section 1 - Requisitos */}
            <section id="requisitos" className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                Requisitos Previos: ¿Es Viable Preparar el B2 en 3 Meses?
              </h2>

              <p className="text-gray-700 mb-4 leading-relaxed">
                Antes de embarcarte en un plan de 3 meses, es fundamental verificar que cumples los requisitos mínimos. Preparar el B2 First en 12 semanas es viable si partes de un <strong>nivel B1+ consolidado</strong>. Esto significa que ya puedes:
              </p>

              <div className="grid md:grid-cols-2 gap-4 mb-6">
                <div className="bg-emerald-50 rounded-xl p-5">
                  <h3 className="font-bold text-emerald-900 mb-3 flex items-center gap-2">
                    <CheckCircle className="w-5 h-5" />
                    Comprensión necesaria
                  </h3>
                  <ul className="space-y-2 text-gray-700 text-sm">
                    <li>• Entender textos de nivel intermedio sin diccionario</li>
                    <li>• Seguir conversaciones en inglés a ritmo normal</li>
                    <li>• Comprender noticias y podcasts con tema conocido</li>
                    <li>• Leer artículos de prensa generalista en inglés</li>
                  </ul>
                </div>
                <div className="bg-emerald-50 rounded-xl p-5">
                  <h3 className="font-bold text-emerald-900 mb-3 flex items-center gap-2">
                    <CheckCircle className="w-5 h-5" />
                    Producción necesaria
                  </h3>
                  <ul className="space-y-2 text-gray-700 text-sm">
                    <li>• Mantener una conversación fluida sobre temas cotidianos</li>
                    <li>• Escribir textos de 150+ palabras con estructura clara</li>
                    <li>• Usar tiempos verbales básicos con corrección</li>
                    <li>• Expresar opiniones y argumentar de forma simple</li>
                  </ul>
                </div>
              </div>

              <div className="bg-amber-50 border-l-4 border-amber-500 p-6 rounded-r-xl mb-6">
                <p className="text-gray-800">
                  <strong>Test de viabilidad rápido:</strong> Haz un examen de práctica del B2 First completo. Si obtienes entre 140-155 puntos, 3 meses es un plazo realista. Si estás por debajo de 130, necesitarás más tiempo (5-7 meses recomendados). Si estás por encima de 155, podrías prepararte en menos de 3 meses.
                </p>
              </div>

              <div className="bg-emerald-50 border-l-4 border-emerald-500 p-6 rounded-r-xl">
                <p className="text-gray-800 font-medium">
                  <strong>Dedicación requerida:</strong> Un plan de 3 meses exige <strong>10-15 horas semanales</strong> de estudio, lo que equivale a 1,5-2 horas diarias más sesiones más extensas los fines de semana. Si no puedes dedicar este tiempo, considera un plan de 5-6 meses más relajado.
                </p>
              </div>
            </section>

            {/* Section 2 - Mes 1 */}
            <section id="mes-1" className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                Mes 1: Diagnóstico, Gramática y Vocabulario (Semanas 1-4)
              </h2>

              <p className="text-gray-700 mb-6 leading-relaxed">
                El primer mes es la fase de cimentación. El objetivo es identificar tus debilidades específicas, reforzar la gramática B2 y ampliar significativamente tu vocabulario. Este mes determina la eficacia de los dos siguientes.
              </p>

              <div className="space-y-4 mb-8">
                <div className="bg-white border border-gray-200 rounded-xl p-6">
                  <h3 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
                    <Target className="w-5 h-5 text-emerald-600" />
                    Semana 1: Diagnóstico completo
                  </h3>
                  <p className="text-gray-700">Realiza un examen de práctica completo del B2 First en condiciones reales (cronometrado, sin interrupciones). Analiza los resultados por sección e identifica tus 3 áreas más débiles. Este diagnóstico guiará toda tu preparación posterior. Anota los tipos de preguntas donde más fallos tienes y las áreas gramaticales que necesitas repasar.</p>
                </div>

                <div className="bg-white border border-gray-200 rounded-xl p-6">
                  <h3 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
                    <Target className="w-5 h-5 text-emerald-600" />
                    Semanas 2-3: Refuerzo gramatical intensivo
                  </h3>
                  <p className="text-gray-700">Trabaja las estructuras gramaticales clave del B2: condicionales mixtas, reported speech, voz pasiva avanzada, wish/if only, modales de deducción, relative clauses y participio. Dedica 45 minutos diarios a gramática con ejercicios de Cambridge B2 Trainer. No estudies toda la gramática: céntrate en lo que fallas en el diagnóstico.</p>
                </div>

                <div className="bg-white border border-gray-200 rounded-xl p-6">
                  <h3 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
                    <Target className="w-5 h-5 text-emerald-600" />
                    Semana 4: Vocabulario B2 y phrasal verbs
                  </h3>
                  <p className="text-gray-700">Aprende 15-20 palabras nuevas al día usando listas de vocabulario B2 específicas. Prioriza: los 100 phrasal verbs más comunes del B2 First, word formation (prefijos y sufijos), collocations frecuentes y falsos amigos español-inglés. Usa Quizlet o Anki con repetición espaciada para maximizar retención.</p>
                </div>
              </div>

              <div className="bg-emerald-50 rounded-xl p-5 mb-6">
                <h3 className="font-bold text-emerald-900 mb-3">Inmersión diaria (todo el mes):</h3>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li>• <strong>30 min Listening:</strong> Podcasts en inglés (6 Minute English BBC, TED Talks Daily)</li>
                  <li>• <strong>20 min Reading:</strong> Artículos de The Guardian, BBC News en inglés</li>
                  <li>• <strong>Cambia el idioma</strong> de tu teléfono, redes sociales y series a inglés</li>
                </ul>
              </div>
            </section>

            {/* Section 3 - Mes 2 */}
            <section id="mes-2" className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                Mes 2: Práctica Intensiva por Habilidades (Semanas 5-8)
              </h2>

              <p className="text-gray-700 mb-6 leading-relaxed">
                Con las bases gramaticales y léxicas reforzadas, el segundo mes se centra en practicar cada habilidad del examen de forma específica. El objetivo es dominar el formato de cada sección y desarrollar estrategias para cada tipo de pregunta.
              </p>

              <div className="space-y-4 mb-8">
                <div className="bg-white border border-gray-200 rounded-xl p-6">
                  <h3 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
                    <BookOpen className="w-5 h-5 text-emerald-600" />
                    Writing: 3 textos por semana
                  </h3>
                  <p className="text-gray-700">Practica los formatos del B2 First: essay (obligatorio en Parte 1), artículo, carta/email formal, review e informe. Escribe 3 textos por semana (140-190 palabras cada uno) y usa Write & Improve de Cambridge para obtener feedback automático. Aprende las convenciones de cada formato: registro, estructura, conectores adecuados y fórmulas de apertura/cierre.</p>
                </div>

                <div className="bg-white border border-gray-200 rounded-xl p-6">
                  <h3 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
                    <BookOpen className="w-5 h-5 text-emerald-600" />
                    Listening: Práctica diaria variada
                  </h3>
                  <p className="text-gray-700">Combina listening general (podcasts, series) con práctica específica del formato B2 First. Haz al menos 2 tests de Listening completos por semana. Practica especialmente la Parte 2 (sentence completion) donde debes escribir exactamente lo que oyes, y la Parte 4 (multiple matching) que requiere procesar información rápidamente.</p>
                </div>

                <div className="bg-white border border-gray-200 rounded-xl p-6">
                  <h3 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
                    <BookOpen className="w-5 h-5 text-emerald-600" />
                    Speaking: Intercambios y práctica en pareja
                  </h3>
                  <p className="text-gray-700">El Speaking del B2 First se hace en parejas, así que practica con un compañero siempre que sea posible. Si no tienes compañero, grábate respondiendo a preguntas de exámenes anteriores y analiza tu rendimiento. Practica especialmente la Parte 2 (long turn: hablar 1 minuto sobre fotos) y la Parte 3 (tarea colaborativa con tu compañero).</p>
                </div>

                <div className="bg-white border border-gray-200 rounded-xl p-6">
                  <h3 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
                    <BookOpen className="w-5 h-5 text-emerald-600" />
                    Use of English: Práctica diaria de 30 minutos
                  </h3>
                  <p className="text-gray-700">Dedica 30 minutos diarios a ejercicios de Use of English, rotando entre los 4 tipos: multiple-choice cloze (Parte 1), open cloze (Parte 2), word formation (Parte 3) y key word transformations (Parte 4). Esta práctica constante es la que más diferencia marca en la nota final de la mayoría de hispanohablantes.</p>
                </div>
              </div>
            </section>

            {/* Section 4 - Mes 3 */}
            <section id="mes-3" className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                Mes 3: Simulacros y Estrategia Final (Semanas 9-12)
              </h2>

              <p className="text-gray-700 mb-6 leading-relaxed">
                El tercer mes es decisivo: aquí integras todo lo aprendido y perfeccionas tu rendimiento bajo condiciones reales de examen. El enfoque pasa de aprender a optimizar y pulir estrategias.
              </p>

              <div className="space-y-4 mb-8">
                <div className="bg-white border border-gray-200 rounded-xl p-6">
                  <h3 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
                    <Target className="w-5 h-5 text-emerald-600" />
                    Semanas 9-10: Simulacros completos cronometrados
                  </h3>
                  <p className="text-gray-700">Realiza 2 exámenes completos por semana en condiciones exactas de examen: cronometrados, sin pausas, sin diccionario, sin distracciones. Después de cada simulacro, dedica 1-2 horas a analizar errores detalladamente. Identifica patrones: ¿siempre fallas en el mismo tipo de pregunta? ¿Te falta tiempo en alguna sección? Ajusta tu estrategia según los resultados.</p>
                </div>

                <div className="bg-white border border-gray-200 rounded-xl p-6">
                  <h3 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
                    <Target className="w-5 h-5 text-emerald-600" />
                    Semana 11: Revisión de errores recurrentes
                  </h3>
                  <p className="text-gray-700">Recopila todos los errores que has cometido durante los simulacros y categorízalos. Crea fichas de repaso con los 20-30 errores más frecuentes y revísalas diariamente. Trabaja específicamente las áreas donde sigues perdiendo puntos. Esta semana no es para aprender cosas nuevas, sino para eliminar los errores que ya conoces.</p>
                </div>

                <div className="bg-white border border-gray-200 rounded-xl p-6">
                  <h3 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
                    <Target className="w-5 h-5 text-emerald-600" />
                    Semana 12: Estrategia final y descanso
                  </h3>
                  <p className="text-gray-700">Haz un último simulacro completo al inicio de la semana. Los días previos al examen, reduce la intensidad: repasa fichas de errores, haz ejercicios ligeros de Use of English y practica Speaking. Duerme bien las noches anteriores y llega descansado al examen. La ansiedad de último momento es el mayor enemigo; la preparación ya está hecha.</p>
                </div>
              </div>

              <div className="bg-emerald-50 border-l-4 border-emerald-500 p-6 rounded-r-xl">
                <p className="text-gray-800 font-medium">
                  <strong>Estrategias clave para el día del examen:</strong> Lee todas las preguntas antes de leer el texto en Reading. En Listening, lee las preguntas durante la pausa inicial. En Writing, dedica 5 minutos a planificar antes de escribir. En Speaking, no memorices respuestas: suena artificial y los examinadores lo detectan.
                </p>
              </div>
            </section>

            {/* Section 5 - Rutina diaria */}
            <section id="rutina" className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                Rutina Diaria Recomendada
              </h2>

              <p className="text-gray-700 mb-6 leading-relaxed">
                Para aprovechar al máximo los 3 meses, necesitas una rutina diaria consistente. Aquí tienes un ejemplo de distribución para días laborables (1,5-2 horas) y fines de semana (3-4 horas):
              </p>

              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="bg-white border border-gray-200 rounded-xl p-6">
                  <h3 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                    <Clock className="w-5 h-5 text-emerald-600" />
                    Lunes a Viernes (1,5-2h)
                  </h3>
                  <ul className="space-y-2 text-gray-700 text-sm">
                    <li>• <strong>30 min:</strong> Use of English (ejercicios por tipo)</li>
                    <li>• <strong>20 min:</strong> Vocabulario (Quizlet/Anki + repaso)</li>
                    <li>• <strong>20 min:</strong> Listening (podcast + ejercicio Cambridge)</li>
                    <li>• <strong>20 min:</strong> Reading (artículo + comprensión)</li>
                    <li>• <strong>10 min:</strong> Gramática (repaso del tema del día)</li>
                  </ul>
                </div>

                <div className="bg-white border border-gray-200 rounded-xl p-6">
                  <h3 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                    <Clock className="w-5 h-5 text-emerald-600" />
                    Sábado y Domingo (3-4h)
                  </h3>
                  <ul className="space-y-2 text-gray-700 text-sm">
                    <li>• <strong>60 min:</strong> Simulacro de una sección completa</li>
                    <li>• <strong>45 min:</strong> Writing (un texto completo)</li>
                    <li>• <strong>30 min:</strong> Speaking (práctica con compañero/grabación)</li>
                    <li>• <strong>30 min:</strong> Revisión de errores de la semana</li>
                    <li>• <strong>15 min:</strong> Planificación de la semana siguiente</li>
                  </ul>
                </div>
              </div>

              <div className="bg-amber-50 border-l-4 border-amber-500 p-6 rounded-r-xl mb-6">
                <p className="text-gray-800">
                  <strong>Cuándo 3 meses no son suficientes:</strong> Si después de 4 semanas siguiendo este plan no ves progreso en tus simulacros (menos de 5 puntos de mejora), puede ser señal de que tu nivel de partida es inferior al B1+ necesario. En ese caso, es mejor replantear el calendario y dar más tiempo a la preparación en lugar de presentarte sin estar preparado y desperdiciar la inscripción.
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
                        <ChevronUp className="w-5 h-5 text-emerald-600 flex-shrink-0" />
                      ) : (
                        <ChevronDown className="w-5 h-5 text-emerald-600 flex-shrink-0" />
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

              <div className="bg-gradient-to-r from-emerald-50 to-teal-50 rounded-2xl p-8">
                <p className="text-gray-700 mb-4 leading-relaxed">
                  Preparar el <a href="/examenes-cambridge/b2-first/" className="text-emerald-600 hover:underline font-medium">B2 First en 3 meses</a> es un objetivo ambicioso pero alcanzable si partes de un nivel B1+ y sigues un plan estructurado de tres fases. La clave del éxito está en la constancia diaria, el enfoque en tus debilidades específicas y la práctica abundante con el formato real del examen.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Si quieres optimizar tu preparación al máximo, nuestros <a href="/cursos-ingles/adultos/" className="text-emerald-600 hover:underline font-medium">cursos intensivos para adultos</a> están diseñados exactamente para este tipo de preparación acelerada. Con nuestra <a href="/metodologia/" className="text-emerald-600 hover:underline font-medium">metodología probada</a>, feedback personalizado y simulacros reales, maximizamos tus posibilidades de éxito en el menor tiempo posible.
                </p>
              </div>
            </section>

            {/* CTA */}
            <div className="bg-gradient-to-r from-emerald-600 to-teal-600 rounded-2xl p-8 text-center text-white">
              <h3 className="text-2xl font-bold mb-4">¿Quieres preparar el B2 First en 3 meses?</h3>
              <p className="text-emerald-100 mb-6 max-w-2xl mx-auto">
                En Impulse English Academy tenemos cursos intensivos diseñados para prepararte en el menor tiempo posible con las mejores garantías de éxito.
              </p>
              <a
              href="/contacto/"
                className="inline-flex items-center gap-2 bg-white text-emerald-600 px-8 py-4 rounded-xl font-semibold hover:bg-emerald-50 transition-colors"
              >
                Solicitar información
                <ArrowRight className="w-5 h-5" />
              </a>
            </div>

            {/* Related Articles */}
            <section className="mt-16">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Artículos Relacionados</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <a href="/examenes-cambridge/b2-first/" className="group bg-gray-50 rounded-xl p-6 hover:bg-emerald-50 transition-colors">
                  <h3 className="font-semibold text-gray-900 group-hover:text-emerald-600 transition-colors mb-2">
                    Cambridge B2 First: Guía Completa
                  </h3>
                  <p className="text-gray-600 text-sm">Todo sobre el examen B2 First: estructura, formato y preparación.</p>
                </a>
                <a href="/cursos-ingles/adultos/" className="group bg-gray-50 rounded-xl p-6 hover:bg-emerald-50 transition-colors">
                  <h3 className="font-semibold text-gray-900 group-hover:text-emerald-600 transition-colors mb-2">
                    Cursos de Inglés para Adultos
                  </h3>
                  <p className="text-gray-600 text-sm">Programas intensivos de preparación Cambridge para adultos.</p>
                </a>
                <a href="/metodologia/" className="group bg-gray-50 rounded-xl p-6 hover:bg-emerald-50 transition-colors">
                  <h3 className="font-semibold text-gray-900 group-hover:text-emerald-600 transition-colors mb-2">
                    Nuestra Metodología
                  </h3>
                  <p className="text-gray-600 text-sm">Cómo preparamos a nuestros alumnos para obtener los mejores resultados.</p>
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
              href="https://www.cambridgeenglish.org/es/exams-and-tests/first/preparation/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-blue-600 hover:underline"
            >
              → Recursos de preparación en Cambridge English - B2 First oficial
            </a>
          </div>
        </section>

        <Footer />
      </div>

      {/* Schema.org Structured Data */}
</>
  );
}