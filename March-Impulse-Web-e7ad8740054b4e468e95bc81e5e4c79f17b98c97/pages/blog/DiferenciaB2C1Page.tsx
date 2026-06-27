import React, { useState, useEffect } from 'react';
import { ChevronRight, Clock, Calendar, ChevronDown, ChevronUp, BookOpen, CheckCircle, Target, ArrowRight, Award } from 'lucide-react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import LeadForm from '../../components/LeadForm';
import Breadcrumb from '../../components/Breadcrumb';
import { generateArticleSchema, businessInfo } from '../../utils/schemaData';
import type { FAQItem } from '../../utils/schemaData';

export const articleSchema = generateArticleSchema({
    headline: "Diferencia entre B2 y C1: ¿Qué Nivel Necesitas?",
    description: "La diferencia entre B2 y C1 radica en profundidad y fluidez. Compara ambos niveles en gramática, vocabulario, examen y valor profesional.",
    url: `${businessInfo.url}/blog/diferencia-b2-c1`,
    datePublished: "2025-03-01"
  });

export const faqItems: FAQItem[] = [
    {
      question: "¿Es muy grande la diferencia entre B2 y C1?",
      answer: "Sí, la diferencia es considerable. Mientras que el B2 certifica que puedes comunicarte con fluidez en la mayoría de situaciones cotidianas, el C1 implica un dominio sofisticado del idioma: comprensión de matices, uso flexible del registro, argumentación compleja y precisión léxica avanzada. El salto requiere 200-300 horas de estudio adicionales según Cambridge Assessment."
    }

  ,
    {
      question: "¿Puedo saltar directamente de B1 a C1?",
      answer: "Técnicamente sí, pero no es recomendable. El B2 consolida habilidades fundamentales que son la base del C1. Saltarse el B2 deja lagunas importantes en gramática intermedia-alta y vocabulario que hacen el C1 innecesariamente difícil. Lo ideal es tener un B2 sólido (Grade A o B en el First) antes de abordar el C1."
    },
    {
      question: "¿Para mi trabajo necesito B2 o C1?",
      answer: "Depende del sector y puesto. Para roles operativos en empresas españolas con contacto ocasional en inglés, el B2 suele bastar. Para puestos en multinacionales, consultoría, banca, docencia universitaria o roles directivos con equipos internacionales, el C1 es el estándar. En caso de duda, el C1 siempre te dará ventaja competitiva."
    },
    {
      question: "¿Las universidades piden B2 o C1?",
      answer: "Para grados universitarios en España, el B2 suele ser suficiente y a menudo es requisito de graduación. Para másteres, especialmente MBA y programas internacionales, el C1 es frecuentemente requerido. Universidades anglófonas (UK, USA, Australia) exigen entre B2 alto y C1 dependiendo del programa, siendo C1 el estándar para posgrados top."
    },
    {
      question: "¿Merece la pena preparar el C1 si ya tengo B2?",
      answer: "En la mayoría de casos, sí. El C1 amplía significativamente tus oportunidades profesionales y académicas, mejora tu salario medio un 15-25% y te da acceso a posiciones que el B2 no puede. La inversión de 5-8 meses de preparación se recupera rápidamente en términos de carrera profesional. La excepción serían perfiles profesionales donde el inglés tiene un papel marginal."
    }
  ];

export default function DiferenciaB2C1Page() {
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
              <img src="/images/academy/6e08cd95-47b7-4d36-95c7-fecfb41e3883.jpeg" alt="Comparativa entre niveles B2 y C1 Cambridge" className="w-full h-full object-cover" loading="eager" />
              <div className="absolute inset-0 bg-gradient-to-br from-accent-blue/95 via-accent-blue/85 to-[#0a3560]/75"></div>
            </div>
            <div className="absolute inset-0 hero-grain opacity-[0.03]"></div>
            <div className="absolute -top-32 -right-32 w-[420px] h-[420px] rounded-full bg-brand-red/[0.04]"></div>
            <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
              <Breadcrumb
                items={[
                  { label: 'Blog', href: '/blog' },
                  { label: 'Diferencia entre B2 y C1' }
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
                  Diferencia entre B2 y C1: ¿Qué Nivel Necesitas?
                </h1>
                <div className="w-16 h-0.5 bg-brand-red mb-6 animate-hero-fade-up animation-delay-150"></div>
                <p className="font-display text-lg md:text-xl text-white/80 font-light leading-relaxed max-w-3xl animate-hero-fade-up animation-delay-200">
                  La diferencia principal entre B2 y C1 radica en el dominio y profundidad del inglés: B2 permite comunicarse con fluidez en temas cotidianos, mientras C1 implica uso avanzado, flexible y matizado.
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
                <li><a href="#vision-general" className="text-emerald-600 hover:text-emerald-700 transition-colors">→ B2 vs C1: visión general</a></li>
                <li><a href="#gramatica-vocabulario" className="text-emerald-600 hover:text-emerald-700 transition-colors">→ Diferencias en gramática y vocabulario</a></li>
                <li><a href="#examen" className="text-emerald-600 hover:text-emerald-700 transition-colors">→ Diferencias en el examen</a></li>
                <li><a href="#valor-profesional" className="text-emerald-600 hover:text-emerald-700 transition-colors">→ Valor profesional y académico</a></li>
                <li><a href="#cual-necesitas" className="text-emerald-600 hover:text-emerald-700 transition-colors">→ ¿Cuál necesitas según tu objetivo?</a></li>
                <li><a href="#faq" className="text-emerald-600 hover:text-emerald-700 transition-colors">→ Preguntas Frecuentes</a></li>
              </ul>
            </div>

            {/* Introduction */}
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              ¿Tienes el <a href="/examenes-cambridge/b2-first/" className="text-emerald-600 hover:underline font-medium">B2 First</a> y te planteas dar el salto al <a href="/examenes-cambridge/c1-advanced/" className="text-emerald-600 hover:underline font-medium">C1 Advanced</a>? ¿O estás decidiendo cuál de los dos preparar primero? Entender las diferencias reales entre estos dos niveles es fundamental para tomar la decisión correcta. En esta guía comparamos B2 y C1 en todas las dimensiones: lingüística, examen, valor profesional y académico.
            </p>

            {/* Section 1 */}
            <section id="vision-general" className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                B2 vs C1: Visión General
              </h2>

              <p className="text-gray-700 mb-4 leading-relaxed">
                El Marco Común Europeo de Referencia (MCER) define B2 como "usuario independiente avanzado" y C1 como "usuario competente". Aunque ambos representan niveles avanzados de inglés, la diferencia cualitativa es sustancial:
              </p>

              <div className="grid md:grid-cols-2 gap-4 mb-6">
                <div className="bg-white border border-gray-200 rounded-xl p-5">
                  <h3 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                    <BookOpen className="w-5 h-5 text-emerald-600" />
                    B2 - Usuario Independiente
                  </h3>
                  <ul className="space-y-2 text-gray-700 text-sm">
                    <li>• Comunica ideas principales con fluidez</li>
                    <li>• Entiende textos complejos sobre temas concretos</li>
                    <li>• Interactúa con hablantes nativos sin esfuerzo excesivo</li>
                    <li>• Produce textos claros sobre temas variados</li>
                    <li>• Expresa opiniones y argumenta con claridad</li>
                  </ul>
                </div>
                <div className="bg-emerald-50 rounded-xl p-5">
                  <h3 className="font-bold text-emerald-900 mb-3 flex items-center gap-2">
                    <Award className="w-5 h-5" />
                    C1 - Usuario Competente
                  </h3>
                  <ul className="space-y-2 text-gray-700 text-sm">
                    <li>• Comprende textos extensos y con significado implícito</li>
                    <li>• Se expresa con fluidez y espontaneidad sin búsqueda de palabras</li>
                    <li>• Usa el idioma de forma flexible en contextos variados</li>
                    <li>• Produce textos claros, detallados y bien estructurados</li>
                    <li>• Domina mecanismos de organización y cohesión textual</li>
                  </ul>
                </div>
              </div>

              <div className="bg-emerald-50 border-l-4 border-emerald-500 p-6 rounded-r-xl">
                <p className="text-gray-800 font-medium">
                  La diferencia clave entre B2 y C1 no es solo "saber más inglés", sino usarlo de forma más sofisticada, precisa y flexible. Un hablante C1 maneja matices, ironía, registro formal/informal con naturalidad y comprende significados implícitos.
                </p>
              </div>
            </section>

            {/* Section 2 */}
            <section id="gramatica-vocabulario" className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                Diferencias en Gramática y Vocabulario
              </h2>

              <p className="text-gray-700 mb-6 leading-relaxed">
                Las diferencias gramaticales y léxicas entre B2 y C1 son considerables y constituyen el núcleo del salto entre niveles:
              </p>

              <div className="overflow-x-auto mb-8">
                <table className="w-full border-collapse bg-white rounded-xl overflow-hidden shadow-lg">
                  <thead>
                    <tr className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white">
                      <th className="text-left p-4 font-semibold">Aspecto</th>
                      <th className="text-left p-4 font-semibold">B2 First</th>
                      <th className="text-left p-4 font-semibold">C1 Advanced</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="bg-gray-50">
                      <td className="p-4 font-medium text-gray-900">Vocabulario activo</td>
                      <td className="p-4 text-gray-700">4.000-5.000 palabras</td>
                      <td className="p-4 text-gray-700">6.500-8.000 palabras</td>
                    </tr>
                    <tr className="bg-white">
                      <td className="p-4 font-medium text-gray-900">Phrasal verbs</td>
                      <td className="p-4 text-gray-700">Los más comunes (~100)</td>
                      <td className="p-4 text-gray-700">Amplio repertorio (~250+)</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="p-4 font-medium text-gray-900">Condicionales</td>
                      <td className="p-4 text-gray-700">0, 1, 2, 3</td>
                      <td className="p-4 text-gray-700">Mixed conditionals, inversión</td>
                    </tr>
                    <tr className="bg-white">
                      <td className="p-4 font-medium text-gray-900">Pasiva</td>
                      <td className="p-4 text-gray-700">Formas básicas</td>
                      <td className="p-4 text-gray-700">Causative, reporting structures</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="p-4 font-medium text-gray-900">Collocations</td>
                      <td className="p-4 text-gray-700">Comunes y frecuentes</td>
                      <td className="p-4 text-gray-700">Avanzadas y menos predecibles</td>
                    </tr>
                    <tr className="bg-white">
                      <td className="p-4 font-medium text-gray-900">Registro</td>
                      <td className="p-4 text-gray-700">Formal vs informal básico</td>
                      <td className="p-4 text-gray-700">Múltiples registros con fluidez</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="space-y-4 mb-6">
                <div className="bg-white border border-gray-200 rounded-xl p-6">
                  <h3 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
                    <Target className="w-5 h-5 text-emerald-600" />
                    Gramática C1 que no aparece en B2
                  </h3>
                  <p className="text-gray-700">Inversión con adverbios negativos (Never have I seen...), cleft sentences (What I need is...), subjuntivo formal, participial clauses, ellipsis y substitution, mixed conditionals complejos, y uso avanzado de modales perfectos para deducción y especulación.</p>
                </div>

                <div className="bg-white border border-gray-200 rounded-xl p-6">
                  <h3 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
                    <Target className="w-5 h-5 text-emerald-600" />
                    Vocabulario C1: más allá de las palabras
                  </h3>
                  <p className="text-gray-700">El C1 no solo exige más palabras sino un uso más preciso: distinguir matices entre sinónimos (big/large/vast/enormous), dominar collocations avanzadas (stark contrast, sweeping changes) y manejar lenguaje figurativo e idiomático con naturalidad.</p>
                </div>
              </div>
            </section>

            {/* Section 3 */}
            <section id="examen" className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                Diferencias en el Examen
              </h2>

              <p className="text-gray-700 mb-6 leading-relaxed">
                Los exámenes <a href="/examenes-cambridge/b2-first/" className="text-emerald-600 hover:underline font-medium">B2 First</a> y C1 Advanced comparten estructura similar pero difieren significativamente en complejidad:
              </p>

              <div className="bg-gradient-to-r from-emerald-50 to-teal-50 rounded-xl p-6 mb-6">
                <h3 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <Award className="w-5 h-5 text-emerald-600" />
                  Comparativa de exámenes
                </h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="bg-white rounded-lg p-4 text-center">
                    <div className="text-gray-600 text-xs mb-1">Duración total</div>
                    <div className="text-sm"><span className="text-blue-600 font-bold">B2: 3h30</span></div>
                    <div className="text-sm"><span className="text-emerald-600 font-bold">C1: 4h</span></div>
                  </div>
                  <div className="bg-white rounded-lg p-4 text-center">
                    <div className="text-gray-600 text-xs mb-1">R&UoE</div>
                    <div className="text-sm"><span className="text-blue-600 font-bold">B2: 75 min</span></div>
                    <div className="text-sm"><span className="text-emerald-600 font-bold">C1: 90 min</span></div>
                  </div>
                  <div className="bg-white rounded-lg p-4 text-center">
                    <div className="text-gray-600 text-xs mb-1">Writing</div>
                    <div className="text-sm"><span className="text-blue-600 font-bold">B2: 80 min</span></div>
                    <div className="text-sm"><span className="text-emerald-600 font-bold">C1: 90 min</span></div>
                  </div>
                  <div className="bg-white rounded-lg p-4 text-center">
                    <div className="text-gray-600 text-xs mb-1">Precio</div>
                    <div className="text-sm"><span className="text-blue-600 font-bold">B2: €190-210</span></div>
                    <div className="text-sm"><span className="text-emerald-600 font-bold">C1: €200-230</span></div>
                  </div>
                </div>
              </div>

              <div className="space-y-4 mb-6">
                <div className="bg-white border border-gray-200 rounded-xl p-6">
                  <h3 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
                    <BookOpen className="w-5 h-5 text-emerald-600" />
                    Reading & Use of English
                  </h3>
                  <p className="text-gray-700">El B2 tiene 7 partes con 52 preguntas en 75 minutos. El C1 tiene 8 partes con 56 preguntas en 90 minutos. La diferencia principal está en la complejidad de los textos (auténticos sin adaptar en C1) y las key word transformations, que en C1 son significativamente más sofisticadas.</p>
                </div>

                <div className="bg-white border border-gray-200 rounded-xl p-6">
                  <h3 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
                    <BookOpen className="w-5 h-5 text-emerald-600" />
                    Writing
                  </h3>
                  <p className="text-gray-700">En B2, escribes 2 textos de 140-190 palabras (essay obligatorio + elección). En C1, los textos son de 220-260 palabras con mayor variedad de formatos (essay, proposal, report, review, letter) y se espera dominio de registro y organización textual avanzada.</p>
                </div>

                <div className="bg-white border border-gray-200 rounded-xl p-6">
                  <h3 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
                    <BookOpen className="w-5 h-5 text-emerald-600" />
                    Listening y Speaking
                  </h3>
                  <p className="text-gray-700">El Listening del C1 usa audios más rápidos, con mayor variedad de acentos y contenido más abstracto. El Speaking del C1 incluye tareas más complejas con mayor exigencia de profundidad argumentativa y riqueza léxica espontánea.</p>
                </div>
              </div>
            </section>

            {/* Section 4 */}
            <section id="valor-profesional" className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                Valor Profesional y Académico
              </h2>

              <p className="text-gray-700 mb-6 leading-relaxed">
                La diferencia de valor entre B2 y C1 en el mercado laboral y académico es significativa:
              </p>

              <div className="grid md:grid-cols-2 gap-4 mb-6">
                <div className="bg-white border border-gray-200 rounded-xl p-5">
                  <h3 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                    <BookOpen className="w-5 h-5 text-emerald-600" />
                    B2 First: suficiente para...
                  </h3>
                  <ul className="space-y-2 text-gray-700 text-sm">
                    <li>• Requisito de graduación universitaria en España</li>
                    <li>• Puestos operativos en empresas nacionales</li>
                    <li>• Erasmus y programas de intercambio</li>
                    <li>• Oposiciones: puntos de mérito básicos</li>
                    <li>• Empresas con inglés como idioma secundario</li>
                  </ul>
                </div>
                <div className="bg-emerald-50 rounded-xl p-5">
                  <h3 className="font-bold text-emerald-900 mb-3 flex items-center gap-2">
                    <CheckCircle className="w-5 h-5" />
                    C1 Advanced: necesario para...
                  </h3>
                  <ul className="space-y-2 text-gray-700 text-sm">
                    <li>• Másteres y MBA internacionales</li>
                    <li>• Puestos directivos en multinacionales</li>
                    <li>• Consultoría, banca, sector legal internacional</li>
                    <li>• Oposiciones: máxima puntuación por idiomas</li>
                    <li>• Docencia en programas bilingües</li>
                  </ul>
                </div>
              </div>

              <div className="bg-emerald-50 border-l-4 border-emerald-500 p-6 rounded-r-xl">
                <p className="text-gray-800 font-medium">
                  <strong>Dato clave:</strong> Los profesionales con C1 ganan de media un <strong>15-25% más</strong> que aquellos con B2 en el mismo puesto. En sectores como consultoría y tecnología, la diferencia puede alcanzar el 30-40% en posiciones senior.
                </p>
              </div>
            </section>

            {/* Section 5 */}
            <section id="cual-necesitas" className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                ¿Cuál Necesitas Según tu Objetivo?
              </h2>

              <p className="text-gray-700 mb-6 leading-relaxed">
                La elección entre B2 y C1 depende de tu situación personal y profesional. Aquí una guía práctica:
              </p>

              <div className="space-y-4 mb-8">
                <div className="bg-white border border-gray-200 rounded-xl p-6">
                  <h3 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
                    <Target className="w-5 h-5 text-emerald-600" />
                    Estudiante universitario
                  </h3>
                  <p className="text-gray-700">Si solo necesitas el requisito de graduación, el B2 es suficiente. Pero si planeas hacer un máster internacional, Erasmus Mundus o trabajar en multinacionales tras graduarte, invierte en el C1 desde ya: tendrás más tiempo para prepararlo y te diferenciará enormemente.</p>
                </div>

                <div className="bg-white border border-gray-200 rounded-xl p-6">
                  <h3 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
                    <Target className="w-5 h-5 text-emerald-600" />
                    Profesional en activo
                  </h3>
                  <p className="text-gray-700">Si tu trabajo actual requiere inglés ocasional, el B2 puede bastar. Si aspiras a promociones, cambio a multinacionales o movilidad internacional, el C1 es la inversión más rentable que puedes hacer en tu carrera. El retorno se materializa en meses.</p>
                </div>

                <div className="bg-white border border-gray-200 rounded-xl p-6">
                  <h3 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
                    <Target className="w-5 h-5 text-emerald-600" />
                    Opositor
                  </h3>
                  <p className="text-gray-700">El C1 otorga la máxima puntuación en idiomas en la mayoría de convocatorias (hasta 3 puntos extra frente a 1-2 del B2). Si tienes tiempo, el C1 puede ser el factor decisivo que marque la diferencia entre obtener o no la plaza.</p>
                </div>

                <div className="bg-white border border-gray-200 rounded-xl p-6">
                  <h3 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
                    <Target className="w-5 h-5 text-emerald-600" />
                    Docente
                  </h3>
                  <p className="text-gray-700">Para enseñar en programas bilingües o acceder a secciones bilingües en colegios públicos, el C1 es obligatorio en la mayoría de comunidades autónomas. El B2 se acepta para algunas posiciones, pero el C1 abre todas las puertas.</p>
                </div>
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
                  La diferencia entre B2 y C1 es sustancial en todos los aspectos: competencia lingüística, complejidad del examen y valor profesional. Mientras el <a href="/examenes-cambridge/b2-first/" className="text-emerald-600 hover:underline font-medium">B2 First</a> certifica una comunicación eficaz en contextos cotidianos, el <a href="/examenes-cambridge/c1-advanced/" className="text-emerald-600 hover:underline font-medium">C1 Advanced</a> acredita un dominio sofisticado que abre puertas significativamente más amplias.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  En <a href="/cursos-ingles/adultos/" className="text-emerald-600 hover:underline font-medium">Impulse English Academy</a> te ayudamos a decidir qué nivel preparar según tu perfil y te acompañamos hasta conseguir tu objetivo. Consulta nuestra guía de la <a href="/blog/escala-cambridge/" className="text-emerald-600 hover:underline font-medium">escala Cambridge</a> para una visión completa de todos los niveles.
                </p>
              </div>
            </section>

            {/* CTA */}
            <div className="bg-gradient-to-r from-emerald-600 to-teal-600 rounded-2xl p-8 text-center text-white">
              <h3 className="text-2xl font-bold mb-4">¿B2 o C1? Te ayudamos a decidir</h3>
              <p className="text-emerald-100 mb-6 max-w-2xl mx-auto">
                Realizamos una evaluación de nivel gratuita para recomendarte el camino más eficiente hacia tu objetivo.
              </p>
              <a
              href="/contacto/"
                className="inline-flex items-center gap-2 bg-white text-emerald-600 px-8 py-4 rounded-xl font-semibold hover:bg-emerald-50 transition-colors"
              >
                Solicitar evaluación gratuita
                <ArrowRight className="w-5 h-5" />
              </a>
            </div>

            {/* Related Articles */}
            <section className="mt-16">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Artículos Relacionados</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <a href="/examenes-cambridge/c1-advanced/" className="group bg-gray-50 rounded-xl p-6 hover:bg-emerald-50 transition-colors">
                  <h3 className="font-semibold text-gray-900 group-hover:text-emerald-600 transition-colors mb-2">
                    C1 Advanced: Guía Completa
                  </h3>
                  <p className="text-gray-600 text-sm">Todo sobre el examen Cambridge C1 Advanced.</p>
                </a>
                <a href="/examenes-cambridge/b2-first/" className="group bg-gray-50 rounded-xl p-6 hover:bg-emerald-50 transition-colors">
                  <h3 className="font-semibold text-gray-900 group-hover:text-emerald-600 transition-colors mb-2">
                    B2 First: Guía Completa
                  </h3>
                  <p className="text-gray-600 text-sm">Todo sobre el examen Cambridge B2 First.</p>
                </a>
                <a href="/blog/escala-cambridge/" className="group bg-gray-50 rounded-xl p-6 hover:bg-emerald-50 transition-colors">
                  <h3 className="font-semibold text-gray-900 group-hover:text-emerald-600 transition-colors mb-2">
                    Escala Cambridge: Todos los Niveles
                  </h3>
                  <p className="text-gray-600 text-sm">Entiende la escala completa de certificaciones.</p>
                </a>
                <a href="/blog/tiempo-b2-a-c1/" className="group bg-gray-50 rounded-xl p-6 hover:bg-emerald-50 transition-colors">
                  <h3 className="font-semibold text-gray-900 group-hover:text-emerald-600 transition-colors mb-2">
                    De B2 a C1: ¿Cuánto Tiempo?
                  </h3>
                  <p className="text-gray-600 text-sm">Plan realista para dar el salto de nivel.</p>
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
              href="https://www.cambridgeenglish.org/es/exams-and-tests/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-blue-600 hover:underline"
            >
              → Más información en Cambridge English - Exámenes y Tests oficiales
            </a>
          </div>
        </section>

        <Footer />
      </div>

      {/* Schema.org Structured Data */}
</>
  );
}
