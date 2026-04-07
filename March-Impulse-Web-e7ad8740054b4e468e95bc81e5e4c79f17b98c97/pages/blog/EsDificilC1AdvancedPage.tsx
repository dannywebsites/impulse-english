import React, { useState, useEffect } from 'react';
import { ChevronRight, Clock, Calendar, ChevronDown, ChevronUp, BookOpen, CheckCircle, Target, ArrowRight, Award } from 'lucide-react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import LeadForm from '../../components/LeadForm';
import Breadcrumb from '../../components/Breadcrumb';
import { generateArticleSchema, businessInfo } from '../../utils/schemaData';
import type { FAQItem } from '../../utils/schemaData';

export const articleSchema = generateArticleSchema({
    headline: "¿Es Muy Difícil el C1 Advanced? Dificultad Real del CAE",
    description: "El C1 Advanced tiene una tasa de aprobados del 55-60%. Descubre qué lo hace difícil, las partes más exigentes y cómo prepararte para aprobar.",
    url: `${businessInfo.url}/blog/es-dificil-c1-advanced`,
    datePublished: "2025-03-01"
  });

export const faqItems: FAQItem[] = [
    {
      question: "¿Cuál es la tasa de aprobados del C1 Advanced?",
      answer: "La tasa global de aprobados del C1 Advanced ronda el 55-60%, aunque varía significativamente según el país y centro de preparación. En España, la tasa se sitúa alrededor del 50-55%. Los candidatos que se preparan en academias especializadas con profesores experimentados alcanzan tasas del 70-80%, mientras que los autodidactas suelen situarse por debajo del 40%."
    }

  ,
    {
      question: "¿Qué parte del C1 Advanced es la más difícil?",
      answer: "Para la mayoría de hispanohablantes, el Use of English (integrado en Reading) es la parte más complicada, ya que exige un conocimiento muy profundo de collocations, phrasal verbs y formación de palabras. Le sigue el Listening, donde los audios son significativamente más rápidos que en B2 y los acentos más variados. Writing y Speaking dependen más de la práctica individual."
    },
    {
      question: "¿Cuántas veces puedo presentarme si suspendo?",
      answer: "No hay límite de intentos para el C1 Advanced. Puedes presentarte tantas veces como desees. Sin embargo, cada convocatoria tiene su coste (€200-230 en España), por lo que una preparación sólida antes de presentarte es la inversión más rentable. La mayoría de candidatos que suspenden la primera vez aprueban en el segundo intento tras reforzar sus debilidades específicas."
    },
    {
      question: "¿Es necesario tener el B2 First aprobado antes de presentarse al C1?",
      answer: "No, no es requisito obligatorio. Puedes presentarte directamente al C1 Advanced sin haber realizado ningún examen Cambridge previo. Sin embargo, se recomienda encarecidamente tener un nivel B2 consolidado (equivalente a Grade B o superior en el First) como base. Presentarse sin ese nivel suele resultar en fracaso y frustración innecesaria."
    },
    {
      question: "¿El C1 Advanced es más difícil que el IELTS banda 7?",
      answer: "Son comparables en nivel pero diferentes en formato. El C1 Advanced tiene un formato más estructurado y predecible, lo que permite una preparación más específica. El IELTS es más impredecible en contenido pero potencialmente más permisivo en puntuación. Muchos candidatos consideran el Use of English del CAE la parte más difícil de ambos exámenes combinados."
    }
  ];

export default function EsDificilC1AdvancedPage() {
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
              <img src="https://impulseenglish.s3.us-east-1.amazonaws.com/impulsephotos/6E08CD95-47B7-4D36-95C7-FECFB41E3883.JPEG" alt="Dificultad del examen C1 Advanced Cambridge" className="w-full h-full object-cover" loading="eager" />
              <div className="absolute inset-0 bg-gradient-to-br from-accent-blue/95 via-accent-blue/85 to-[#0a3560]/75"></div>
            </div>
            <div className="absolute inset-0 hero-grain opacity-[0.03]"></div>
            <div className="absolute -top-32 -right-32 w-[420px] h-[420px] rounded-full bg-brand-red/[0.04]"></div>
            <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
              <Breadcrumb
                items={[
                  { label: 'Blog', href: '/blog' },
                  { label: '¿Es Difícil el C1 Advanced?' }
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
                  ¿Es Muy Difícil el C1 Advanced? Dificultad Real del CAE
                </h1>
                <div className="w-16 h-0.5 bg-brand-red mb-6 animate-hero-fade-up animation-delay-150"></div>
                <p className="font-display text-lg md:text-xl text-white/80 font-light leading-relaxed max-w-3xl animate-hero-fade-up animation-delay-200">
                  Con una tasa de aprobados del 55-60%, el C1 Advanced es un reto serio pero alcanzable con la preparación adecuada. Analizamos qué lo hace difícil y cómo superarlo.
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
                <li><a href="#nivel-real" className="text-emerald-600 hover:text-emerald-700 transition-colors">→ Nivel real del C1 Advanced</a></li>
                <li><a href="#estadisticas" className="text-emerald-600 hover:text-emerald-700 transition-colors">→ Tasa de aprobados y estadísticas</a></li>
                <li><a href="#partes-dificiles" className="text-emerald-600 hover:text-emerald-700 transition-colors">→ Partes más difíciles por destreza</a></li>
                <li><a href="#diferencia-b2" className="text-emerald-600 hover:text-emerald-700 transition-colors">→ Diferencia de dificultad con B2</a></li>
                <li><a href="#prepararse" className="text-emerald-600 hover:text-emerald-700 transition-colors">→ Cómo prepararse eficazmente</a></li>
                <li><a href="#faq" className="text-emerald-600 hover:text-emerald-700 transition-colors">→ Preguntas Frecuentes</a></li>
              </ul>
            </div>

            {/* Introduction */}
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              El <a href="/examenes-cambridge/c1-advanced/" className="text-emerald-600 hover:underline font-medium">Cambridge C1 Advanced</a> (anteriormente CAE) es uno de los exámenes de inglés más respetados y también uno de los más temidos. Con una tasa de aprobados global del <strong>55-60%</strong>, casi la mitad de los candidatos no consigue el certificado en su primer intento. Pero, ¿es realmente tan difícil? La respuesta depende de tu preparación, tu nivel de partida y tu conocimiento del formato del examen.
            </p>

            {/* Section 1 */}
            <section id="nivel-real" className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                Nivel Real del C1 Advanced
              </h2>

              <p className="text-gray-700 mb-4 leading-relaxed">
                El C1 se sitúa en el segundo nivel más alto del Marco Común Europeo de Referencia, solo por debajo del C2 Proficiency. Esto significa que el candidato debe demostrar un uso eficaz, flexible y preciso del inglés en contextos complejos.
              </p>

              <div className="grid md:grid-cols-2 gap-4 mb-6">
                <div className="bg-emerald-50 rounded-xl p-5">
                  <h3 className="font-bold text-emerald-900 mb-3 flex items-center gap-2">
                    <CheckCircle className="w-5 h-5" />
                    Lo que debes demostrar
                  </h3>
                  <ul className="space-y-2 text-gray-700 text-sm">
                    <li>• Comprensión de textos largos y complejos</li>
                    <li>• Expresión fluida y espontánea sin esfuerzo visible</li>
                    <li>• Uso flexible del idioma en contextos variados</li>
                    <li>• Producción de textos claros, bien estructurados y detallados</li>
                  </ul>
                </div>
                <div className="bg-emerald-50 rounded-xl p-5">
                  <h3 className="font-bold text-emerald-900 mb-3 flex items-center gap-2">
                    <Target className="w-5 h-5" />
                    Lo que NO basta
                  </h3>
                  <ul className="space-y-2 text-gray-700 text-sm">
                    <li>• Solo hablar con fluidez en temas cotidianos</li>
                    <li>• Conocer gramática sin aplicarla con precisión</li>
                    <li>• Entender inglés solo en contextos predecibles</li>
                    <li>• Escribir textos correctos pero sin estilo ni registro</li>
                  </ul>
                </div>
              </div>

              <div className="bg-emerald-50 border-l-4 border-emerald-500 p-6 rounded-r-xl">
                <p className="text-gray-800 font-medium">
                  El C1 Advanced no evalúa solo lo que sabes, sino cómo lo usas. La diferencia fundamental con el B2 es la sofisticación y precisión en el uso del idioma, no simplemente el volumen de conocimientos.
                </p>
              </div>
            </section>

            {/* Section 2 */}
            <section id="estadisticas" className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                Tasa de Aprobados y Estadísticas
              </h2>

              <p className="text-gray-700 mb-6 leading-relaxed">
                Las cifras oficiales de Cambridge Assessment revelan datos interesantes sobre la dificultad real del examen:
              </p>

              <div className="bg-gradient-to-r from-emerald-50 to-teal-50 rounded-xl p-6 mb-6">
                <h3 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <Award className="w-5 h-5 text-emerald-600" />
                  Datos clave del C1 Advanced
                </h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="bg-white rounded-lg p-4 text-center">
                    <div className="text-emerald-600 font-bold text-lg">55-60%</div>
                    <div className="text-gray-600 text-sm">Tasa aprobados global</div>
                  </div>
                  <div className="bg-white rounded-lg p-4 text-center">
                    <div className="text-emerald-600 font-bold text-lg">50-55%</div>
                    <div className="text-gray-600 text-sm">Tasa en España</div>
                  </div>
                  <div className="bg-white rounded-lg p-4 text-center">
                    <div className="text-emerald-600 font-bold text-lg">70-80%</div>
                    <div className="text-gray-600 text-sm">Con academia especializada</div>
                  </div>
                  <div className="bg-white rounded-lg p-4 text-center">
                    <div className="text-emerald-600 font-bold text-lg">~35%</div>
                    <div className="text-gray-600 text-sm">Autodidactas</div>
                  </div>
                </div>
              </div>

              <p className="text-gray-700 mb-4 leading-relaxed">
                Estas estadísticas muestran que la preparación marca una diferencia enorme. Un candidato bien preparado en una academia especializada tiene casi el doble de probabilidades de aprobar que un autodidacta. Esto no se debe solo al nivel de inglés, sino al conocimiento del formato, las estrategias de examen y la gestión del tiempo.
              </p>

              <p className="text-gray-700 mb-4 leading-relaxed">
                La puntuación mínima para aprobar es <strong>180 sobre 210 en la escala Cambridge</strong>. Si obtienes 200+, recibes el certificado con nota Grade A, equivalente a nivel C2. Entre 193-199 es Grade B, y 180-192 es Grade C (aprobado estándar).
              </p>
            </section>

            {/* Section 3 */}
            <section id="partes-dificiles" className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                Partes Más Difíciles por Destreza
              </h2>

              <p className="text-gray-700 mb-6 leading-relaxed">
                No todas las partes del <a href="/blog/examen-cae-cambridge/" className="text-emerald-600 hover:underline font-medium">examen CAE</a> presentan la misma dificultad. Analizamos cada sección según el rendimiento medio de los candidatos hispanohablantes:
              </p>

              <div className="space-y-4 mb-8">
                <div className="bg-white border border-gray-200 rounded-xl p-6">
                  <h3 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
                    <BookOpen className="w-5 h-5 text-emerald-600" />
                    Reading & Use of English (dificultad: alta)
                  </h3>
                  <p className="text-gray-700">Es la parte que más tiempo consume (90 minutos) y donde más candidatos pierden puntos. Las key word transformations (parte 4) y el open cloze (parte 2) son especialmente exigentes porque requieren conocimiento profundo de collocations, phrasal verbs y formación de palabras que solo se adquiere con exposición prolongada al idioma.</p>
                </div>

                <div className="bg-white border border-gray-200 rounded-xl p-6">
                  <h3 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
                    <BookOpen className="w-5 h-5 text-emerald-600" />
                    Listening (dificultad: media-alta)
                  </h3>
                  <p className="text-gray-700">Los audios son considerablemente más rápidos que en B2 y presentan mayor variedad de acentos (británico, americano, australiano). La parte 3 (multiple matching) resulta especialmente complicada porque requiere procesar información rápidamente y distinguir opiniones similares de diferentes hablantes.</p>
                </div>

                <div className="bg-white border border-gray-200 rounded-xl p-6">
                  <h3 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
                    <BookOpen className="w-5 h-5 text-emerald-600" />
                    Writing (dificultad: media)
                  </h3>
                  <p className="text-gray-700">Exige dominar diferentes registros (formal, semi-formal, neutro) y formatos (essay, report, proposal, review, letter). El reto principal es la precisión léxica y gramatical combinada con organización textual coherente. Los errores de registro son penalizados severamente.</p>
                </div>

                <div className="bg-white border border-gray-200 rounded-xl p-6">
                  <h3 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
                    <BookOpen className="w-5 h-5 text-emerald-600" />
                    Speaking (dificultad: media)
                  </h3>
                  <p className="text-gray-700">Paradójicamente, suele ser la parte donde mejor puntúan los hispanohablantes, gracias a la capacidad comunicativa natural. Sin embargo, el C1 exige vocabulario preciso, estructuras complejas espontáneas y gestión de turnos de palabra en la parte colaborativa.</p>
                </div>
              </div>
            </section>

            {/* Section 4 */}
            <section id="diferencia-b2" className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                Diferencia de Dificultad con el B2 First
              </h2>

              <p className="text-gray-700 mb-6 leading-relaxed">
                Muchos candidatos subestiman el salto de dificultad entre el <a href="/examenes-cambridge/b2-first/" className="text-emerald-600 hover:underline font-medium">B2 First</a> y el C1 Advanced. Estas son las diferencias clave:
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
                      <td className="p-4 font-medium text-gray-900">Textos</td>
                      <td className="p-4 text-gray-700">Artículos y textos adaptados</td>
                      <td className="p-4 text-gray-700">Textos auténticos complejos</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="p-4 font-medium text-gray-900">Gramática</td>
                      <td className="p-4 text-gray-700">Estructuras comunes avanzadas</td>
                      <td className="p-4 text-gray-700">Estructuras sofisticadas y matizadas</td>
                    </tr>
                    <tr className="bg-white">
                      <td className="p-4 font-medium text-gray-900">Velocidad Listening</td>
                      <td className="p-4 text-gray-700">Moderada, pausas claras</td>
                      <td className="p-4 text-gray-700">Natural, sin simplificar</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="p-4 font-medium text-gray-900">Duración total</td>
                      <td className="p-4 text-gray-700">~3h 30min</td>
                      <td className="p-4 text-gray-700">~4h</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="bg-emerald-50 border-l-4 border-emerald-500 p-6 rounded-r-xl">
                <p className="text-gray-800 font-medium">
                  <strong>Dato importante:</strong> Aprobar el B2 First con Grade C (160-172) no significa estar listo para el C1. Idealmente, necesitas un B2 alto (Grade A, 180+) como punto de partida sólido para la preparación del Advanced.
                </p>
              </div>
            </section>

            {/* Section 5 */}
            <section id="prepararse" className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                Cómo Prepararse Eficazmente para el C1
              </h2>

              <p className="text-gray-700 mb-6 leading-relaxed">
                La buena noticia es que, con la preparación correcta, el C1 Advanced es perfectamente alcanzable. Estas son las estrategias que marcan la diferencia:
              </p>

              <div className="grid md:grid-cols-2 gap-4 mb-6">
                <div className="bg-emerald-50 rounded-xl p-5">
                  <h3 className="font-bold text-emerald-900 mb-3 flex items-center gap-2">
                    <CheckCircle className="w-5 h-5" />
                    Preparación con academia
                  </h3>
                  <ul className="space-y-2 text-gray-700 text-sm">
                    <li>• Profesores especializados en formato CAE</li>
                    <li>• Simulacros regulares con corrección detallada</li>
                    <li>• Feedback personalizado en Writing y Speaking</li>
                    <li>• Materiales actualizados y técnicas de examen</li>
                  </ul>
                </div>
                <div className="bg-emerald-50 rounded-xl p-5">
                  <h3 className="font-bold text-emerald-900 mb-3 flex items-center gap-2">
                    <CheckCircle className="w-5 h-5" />
                    Estudio autónomo complementario
                  </h3>
                  <ul className="space-y-2 text-gray-700 text-sm">
                    <li>• Lectura diaria de prensa anglófona (The Guardian, BBC)</li>
                    <li>• Podcasts avanzados (TED Talks, BBC Radio 4)</li>
                    <li>• Practice tests oficiales de Cambridge</li>
                    <li>• Aplicaciones de vocabulary building avanzado</li>
                  </ul>
                </div>
              </div>

              <p className="text-gray-700 mb-4 leading-relaxed">
                En <a href="/metodologia/" className="text-emerald-600 hover:underline font-medium">Impulse English Academy</a>, nuestros programas de preparación C1 están diseñados para maximizar tu rendimiento en cada parte del examen. Combinamos inmersión comunicativa con técnicas específicas de examen que han demostrado tasas de aprobado superiores al 75%.
              </p>

              <div className="bg-emerald-50 border-l-4 border-emerald-500 p-6 rounded-r-xl">
                <p className="text-gray-800 font-medium">
                  <strong>Consejo clave:</strong> No te presentes sin haber realizado al menos 4-5 exámenes completos cronometrados. La gestión del tiempo es uno de los factores principales de fracaso en el C1 Advanced.
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
                  El C1 Advanced es un examen exigente pero no inalcanzable. Su dificultad reside tanto en el nivel de inglés requerido como en la complejidad del formato. Con una preparación estructurada de <strong>5-8 meses</strong>, profesores especializados y práctica constante, las probabilidades de éxito se multiplican significativamente.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  En <a href="/examenes-cambridge/c1-advanced/" className="text-emerald-600 hover:underline font-medium">Impulse English Academy</a> llevamos años preparando candidatos para el C1 con tasas de éxito muy por encima de la media. Si estás considerando presentarte, <a href="/contacto/" className="text-emerald-600 hover:underline font-medium">contáctanos</a> para una evaluación de nivel gratuita que te permitirá saber exactamente dónde estás y cuánto necesitas para alcanzar tu objetivo.
                </p>
              </div>
            </section>

            {/* CTA */}
            <div className="bg-gradient-to-r from-emerald-600 to-teal-600 rounded-2xl p-8 text-center text-white">
              <h3 className="text-2xl font-bold mb-4">¿Quieres aprobar el C1 Advanced?</h3>
              <p className="text-emerald-100 mb-6 max-w-2xl mx-auto">
                Nuestros programas de preparación C1 tienen una tasa de aprobados superior al 75%. Descubre cómo podemos ayudarte.
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
                <a href="/examenes-cambridge/c1-advanced/" className="group bg-gray-50 rounded-xl p-6 hover:bg-emerald-50 transition-colors">
                  <h3 className="font-semibold text-gray-900 group-hover:text-emerald-600 transition-colors mb-2">
                    C1 Advanced: Guía Completa
                  </h3>
                  <p className="text-gray-600 text-sm">Todo sobre estructura, preparación y certificación del C1.</p>
                </a>
                <a href="/metodologia/" className="group bg-gray-50 rounded-xl p-6 hover:bg-emerald-50 transition-colors">
                  <h3 className="font-semibold text-gray-900 group-hover:text-emerald-600 transition-colors mb-2">
                    Nuestra Metodología
                  </h3>
                  <p className="text-gray-600 text-sm">Cómo preparamos a nuestros alumnos para exámenes Cambridge.</p>
                </a>
                <a href="/blog/examen-cae-cambridge/" className="group bg-gray-50 rounded-xl p-6 hover:bg-emerald-50 transition-colors">
                  <h3 className="font-semibold text-gray-900 group-hover:text-emerald-600 transition-colors mb-2">
                    Examen CAE Cambridge
                  </h3>
                  <p className="text-gray-600 text-sm">Detalles del formato y estructura del examen CAE.</p>
                </a>
                <a href="/examenes-cambridge/c1-advanced/" className="group bg-gray-50 rounded-xl p-6 hover:bg-emerald-50 transition-colors">
                  <h3 className="font-semibold text-gray-900 group-hover:text-emerald-600 transition-colors mb-2">
                    Examen Cambridge C1: Guía de Preparación
                  </h3>
                  <p className="text-gray-600 text-sm">Estrategias y recursos para preparar el C1.</p>
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
              href="https://www.cambridgeenglish.org/es/exams-and-tests/advanced/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-blue-600 hover:underline"
            >
              → Más información en Cambridge English - C1 Advanced oficial
            </a>
          </div>
        </section>

        <Footer />
      </div>

      {/* Schema.org Structured Data */}
</>
  );
}
