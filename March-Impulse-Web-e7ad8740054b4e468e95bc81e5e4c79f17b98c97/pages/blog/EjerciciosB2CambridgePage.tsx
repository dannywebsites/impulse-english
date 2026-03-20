import React, { useState, useEffect } from 'react';
import { PenTool, Clock, ChevronDown, ChevronUp, CheckCircle, BookOpen, Target, FileText, Headphones } from 'lucide-react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import LeadForm from '../../components/LeadForm';
import Breadcrumb from '../../components/Breadcrumb';
import { generateArticleSchema, businessInfo } from '../../utils/schemaData';
export const articleSchema = generateArticleSchema({
    headline: "Ejercicios B2 Cambridge: Guía Práctica First 2026",
    description: "Ejercicios prácticos para preparar el B2 First de Cambridge. Reading, Writing, Listening y Speaking con recursos gratuitos.",
    url: `${businessInfo.url}/blog/ejercicios-b2-cambridge`,
    datePublished: "2025-01-08"
  });

export const faqs = [
    {
      question: "¿Cuántos ejercicios debo hacer para aprobar el B2 First de Cambridge?",
      answer: "No existe un número exacto, pero se recomienda practicar al menos 50 ejercicios de Use of English, escribir 30 textos diferentes, completar 20 readings y 20 listenings durante tres meses de preparación. La calidad de la práctica con análisis de errores importa más que la cantidad pura de ejercicios realizados."
    }

  ,
    {
      question: "¿Dónde encuentro ejercicios B2 Cambridge gratuitos con respuestas?",
      answer: "La web oficial de Cambridge English ofrece materiales gratuitos en Test & Train. Además, sitios como CLGranada.com, MundoEstudiante.com y Flo-Joe.co.uk proporcionan ejercicios resueltos descargables en PDF y tests interactivos online sin coste. ESL-Lounge también dispone de quizzes gratuitos específicos para cada sección del examen."
    },
    {
      question: "¿Cuál es la parte más difícil de los ejercicios B2 Cambridge?",
      answer: "La mayoría de estudiantes considera la Part 4 del Use of English (key word transformations) como la más complicada porque requiere dominio simultáneo de gramática avanzada, vocabulario preciso y capacidad de parafraseo. El Writing también resulta desafiante por requerir producción activa con tiempo limitado y estructura específica."
    },
    {
      question: "¿Cuánto tiempo necesito para preparar los ejercicios del B2 First?",
      answer: "Con nivel B1+ consolidado, la preparación efectiva requiere 3-4 meses dedicando 8-10 horas semanales a ejercicios específicos, simulacros y revisión de errores. Con nivel B1 inicial, necesitarás 6-8 meses. Estudiantes con B2 ya establecido pueden prepararse en 6-8 semanas enfocándose únicamente en familiarizarse con el formato."
    },
    {
      question: "¿Son suficientes los ejercicios gratuitos o necesito comprar material oficial?",
      answer: "Los recursos gratuitos disponibles online son amplios y suficientes para una preparación completa si se usan sistemáticamente. Sin embargo, los libros oficiales Cambridge (Cambridge English B2 First Trainer) garantizan ejercicios con el nivel exacto del examen real y proporcionan estructura de estudio organizada que facilita la planificación autónoma."
    }
  ];

export default function EjerciciosB2CambridgePage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [openFaq, setOpenFaq] = useState<number | null>(null);


  const exerciseTypes = [
    {
      part: "Reading Part 1",
      name: "Multiple Choice",
      description: "8 preguntas sobre un texto. Practica identificar información específica y comprender implicaciones.",
      tips: "Lee las preguntas antes del texto para saber qué buscar"
    },
    {
      part: "Reading Part 5",
      name: "Multiple Choice Cloze",
      description: "6 gaps en un texto con 4 opciones cada uno. Evalúa vocabulario y collocations.",
      tips: "Fíjate en las palabras antes y después del gap para elegir la opción correcta"
    },
    {
      part: "Reading Part 6",
      name: "Gapped Text",
      description: "6 párrafos eliminados que debes recolocar en el texto. Evalúa coherencia y cohesión.",
      tips: "Busca conectores, pronombres y referencias que enlazan párrafos"
    },
    {
      part: "Reading Part 7",
      name: "Multiple Matching",
      description: "10 afirmaciones que emparejar con 4-6 textos cortos. Requiere lectura rápida y precisa.",
      tips: "Subraya palabras clave en cada afirmación antes de buscar en los textos"
    }
  ];

  const useOfEnglish = [
    {
      part: "Part 1",
      name: "Multiple Choice Cloze",
      focus: "Vocabulario, collocations, phrasal verbs",
      questions: "8 gaps"
    },
    {
      part: "Part 2",
      name: "Open Cloze",
      focus: "Gramática, preposiciones, conectores",
      questions: "8 gaps"
    },
    {
      part: "Part 3",
      name: "Word Formation",
      focus: "Prefijos, sufijos, derivación",
      questions: "8 gaps"
    },
    {
      part: "Part 4",
      name: "Key Word Transformation",
      focus: "Parafraseo, estructuras gramaticales",
      questions: "6 oraciones"
    }
  ];

  return (
    <>
<Navbar />

      {/* Hero Section */}
      <header className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden">
        <div className="absolute inset-0">
          <img src="https://impulseenglish.s3.us-east-1.amazonaws.com/impulsephotos/6E08CD95-47B7-4D36-95C7-FECFB41E3883.JPEG" alt="Certificado Cambridge English centro oficial Impulse Academy" className="w-full h-full object-cover" loading="eager" />
          <div className="absolute inset-0 bg-gradient-to-br from-accent-blue/95 via-accent-blue/85 to-[#0a3560]/75"></div>
        </div>
        <div className="absolute inset-0 hero-grain opacity-[0.03]"></div>
        <div className="absolute -top-32 -right-32 w-[420px] h-[420px] rounded-full bg-brand-red/[0.04]"></div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb
          items={[
          { label: 'Blog', href: '/blog' },
          { label: 'Ejercicios B2 Cambridge' }
          ]}
          variant="light"
          className="mb-4"
          />

          <div className="mt-12 md:mt-16">
            <div className="flex items-center gap-4 mb-6 animate-hero-fade-up">
              <div className="w-8 h-px bg-white/40"></div>
              <span className="font-display text-white/70 text-xs uppercase tracking-[0.2em]">
                B2 First Cambridge
              </span>
            </div>

            <h1 className="font-serif text-3xl md:text-5xl lg:text-6xl text-white tracking-tight leading-[1.1] mb-6 animate-hero-fade-up animation-delay-100">
              Ejercicios B2 Cambridge: Guía Práctica para el First 2026
            </h1>
            <div className="w-16 h-0.5 bg-brand-red mb-6 animate-hero-fade-up animation-delay-150"></div>
            <p className="font-display text-lg md:text-xl text-white/80 font-light leading-relaxed max-w-3xl animate-hero-fade-up animation-delay-200">
              Tipos de ejercicios, estrategias por sección y recursos gratuitos para practicar el B2 First Certificate.
            </p>
          </div>
        </div>
      </header>

      {/* Quick Stats */}
      <section className="py-8 bg-blue-50">
        <div className="container mx-auto px-6 md:px-12">
          <div className="max-w-4xl">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="bg-white rounded-xl p-4 text-center">
                <p className="text-3xl font-bold text-blue-600">7</p>
                <p className="text-sm text-zinc-600">Parts Reading</p>
              </div>
              <div className="bg-white rounded-xl p-4 text-center">
                <p className="text-3xl font-bold text-blue-600">4</p>
                <p className="text-sm text-zinc-600">Parts Use of English</p>
              </div>
              <div className="bg-white rounded-xl p-4 text-center">
                <p className="text-3xl font-bold text-blue-600">4</p>
                <p className="text-sm text-zinc-600">Parts Listening</p>
              </div>
              <div className="bg-white rounded-xl p-4 text-center">
                <p className="text-3xl font-bold text-blue-600">4</p>
                <p className="text-sm text-zinc-600">Parts Speaking</p>
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
                El <a href="https://www.cambridgeenglish.org/es/exams-and-tests/first/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">B2 First (FCE)</a> evalúa tu inglés mediante ejercicios específicos en cada sección. Conocer exactamente
                qué tipo de ejercicio encontrarás y practicar con estrategias específicas para cada uno es la clave
                para maximizar tu puntuación. Esta guía desglosa todos los tipos de ejercicios del examen con consejos
                prácticos para cada uno.
              </p>
            </div>

            {/* Section 1 - Use of English */}
            <section className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-zinc-900 mb-6 flex items-center gap-3">
                <FileText className="w-8 h-8 text-blue-600" />
                Ejercicios de Use of English
              </h2>
              <p className="text-zinc-600 mb-6">
                Esta sección evalúa tu dominio de gramática y vocabulario en contexto. Los 4 tipos de ejercicios
                requieren estrategias diferentes, aunque todos se basan en completar gaps o transformar oraciones.
              </p>

              <div className="space-y-4 mb-6">
                {useOfEnglish.map((item, index) => (
                  <div key={index} className="bg-zinc-50 rounded-xl p-5 border-l-4 border-blue-400">
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-2">
                      <div className="flex items-center gap-2">
                        <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-bold">
                          {item.part}
                        </span>
                        <span className="font-bold text-zinc-900">{item.name}</span>
                      </div>
                      <span className="text-sm text-zinc-500">{item.questions}</span>
                    </div>
                    <p className="text-zinc-600 text-sm">{item.focus}</p>
                  </div>
                ))}
              </div>

              <div className="bg-blue-50 rounded-xl p-6">
                <h3 className="font-bold text-zinc-900 mb-3">Estrategia para Key Word Transformation (Part 4)</h3>
                <p className="text-zinc-600 text-sm mb-3">
                  Este es el ejercicio más complejo. Debes reescribir una oración usando una palabra clave sin cambiarla.
                </p>
                <div className="bg-white rounded-lg p-4">
                  <p className="text-sm text-zinc-500 mb-2">Ejemplo:</p>
                  <p className="text-zinc-700 mb-1">Original: <em>"I haven't seen her for three years."</em></p>
                  <p className="text-zinc-700 mb-1">Keyword: <strong>LAST</strong></p>
                  <p className="text-zinc-700">Respuesta: <em>"The last time I saw her was three years ago."</em></p>
                </div>

              </div>
            </section>

            {/* Section 2 - Reading */}
            <section className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-zinc-900 mb-6 flex items-center gap-3">
                <BookOpen className="w-8 h-8 text-cyan-600" />
                Ejercicios de Reading
              </h2>
              <p className="text-zinc-600 mb-6">
                La sección de Reading tiene 7 partes (combinada con Use of English en el examen real).
                Aquí nos centramos en las 4 partes puramente de comprensión lectora.
              </p>

              <div className="grid gap-4 mb-6">
                {exerciseTypes.map((item, index) => (
                  <div key={index} className="bg-zinc-50 rounded-xl p-5">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="bg-cyan-100 text-cyan-700 px-3 py-1 rounded-full text-sm font-bold">
                        {item.part}
                      </span>
                      <span className="font-bold text-zinc-900">{item.name}</span>
                    </div>
                    <p className="text-zinc-600 text-sm mb-2">{item.description}</p>
                    <p className="text-cyan-600 text-sm">
                      <strong>Tip:</strong> {item.tips}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            {/* Section 3 - Listening */}
            <section className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-zinc-900 mb-6 flex items-center gap-3">
                <Headphones className="w-8 h-8 text-green-600" />
                Ejercicios de Listening
              </h2>
              <p className="text-zinc-600 mb-6">
                El Listening dura aproximadamente 40 minutos con 30 preguntas en 4 partes. Escucharás cada
                grabación DOS veces.
              </p>

              <div className="grid md:grid-cols-2 gap-4 mb-6">
                <div className="bg-green-50 rounded-xl p-5">
                  <h4 className="font-bold text-zinc-900 mb-2">Part 1: Multiple Choice</h4>
                  <p className="text-sm text-zinc-600 mb-2">8 extractos cortos independientes con 3 opciones cada uno.</p>
                  <p className="text-xs text-green-600">Tip: Lee las opciones antes de escuchar</p>
                </div>
                <div className="bg-green-50 rounded-xl p-5">
                  <h4 className="font-bold text-zinc-900 mb-2">Part 2: Sentence Completion</h4>
                  <p className="text-sm text-zinc-600 mb-2">10 gaps que completar con información del monólogo.</p>
                  <p className="text-xs text-green-600">Tip: Escribe exactamente lo que oyes, no parafrasees</p>
                </div>
                <div className="bg-green-50 rounded-xl p-5">
                  <h4 className="font-bold text-zinc-900 mb-2">Part 3: Multiple Matching</h4>
                  <p className="text-sm text-zinc-600 mb-2">5 monólogos cortos que emparejar con 8 opciones.</p>
                  <p className="text-xs text-green-600">Tip: Identifica la actitud/opinión del hablante</p>
                </div>
                <div className="bg-green-50 rounded-xl p-5">
                  <h4 className="font-bold text-zinc-900 mb-2">Part 4: Multiple Choice</h4>
                  <p className="text-sm text-zinc-600 mb-2">7 preguntas sobre una entrevista o conversación larga.</p>
                  <p className="text-xs text-green-600">Tip: Sigue la conversación; las respuestas van en orden</p>
                </div>

              </div>

              <div className="bg-amber-50 border-l-4 border-amber-400 p-4">
                <p className="text-amber-800">
                  <strong>Práctica recomendada:</strong> Escucha podcasts en inglés a velocidad 1.25x para acostumbrarte
                  a procesar información rápidamente. El audio del examen es más lento que conversaciones reales.
                </p>
              </div>
            </section>

            {/* Section 4 - Speaking */}
            <section className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-zinc-900 mb-6 flex items-center gap-3">
                <Target className="w-8 h-8 text-purple-600" />
                Ejercicios de Speaking
              </h2>
              <p className="text-zinc-600 mb-6">
                El Speaking dura 14 minutos y se realiza en parejas con dos examinadores. Hay 4 partes que
                evalúan diferentes habilidades comunicativas.
              </p>

              <div className="space-y-4 mb-6">
                <div className="bg-purple-50 rounded-xl p-5">
                  <h4 className="font-bold text-zinc-900 mb-2">Part 1: Interview (2 min)</h4>
                  <p className="text-sm text-zinc-600 mb-2">
                    Preguntas personales sobre trabajo, estudios, hobbies, planes futuros.
                  </p>
                  <p className="text-xs text-purple-600">Practica: Respuestas de 20-30 segundos, ni muy cortas ni demasiado largas</p>
                </div>
                <div className="bg-purple-50 rounded-xl p-5">
                  <h4 className="font-bold text-zinc-900 mb-2">Part 2: Long Turn (4 min)</h4>
                  <p className="text-sm text-zinc-600 mb-2">
                    Hablar 1 minuto comparando dos fotos y respondiendo una pregunta sobre ellas.
                  </p>
                  <p className="text-xs text-purple-600">Practica: Cronometra exactamente 1 minuto. Usa "whereas", "while", "on the other hand"</p>
                </div>
                <div className="bg-purple-50 rounded-xl p-5">
                  <h4 className="font-bold text-zinc-900 mb-2">Part 3: Collaborative Task (4 min)</h4>
                  <p className="text-sm text-zinc-600 mb-2">
                    Discutir con tu pareja usando material visual, llegar a una decisión conjunta.
                  </p>
                  <p className="text-xs text-purple-600">Practica: Interacción natural, hacer preguntas al compañero, negociar opiniones</p>
                </div>
                <div className="bg-purple-50 rounded-xl p-5">
                  <h4 className="font-bold text-zinc-900 mb-2">Part 4: Discussion (4 min)</h4>
                  <p className="text-sm text-zinc-600 mb-2">
                    Preguntas abstractas relacionadas con el tema de Part 3, discusión más profunda.
                  </p>
                  <p className="text-xs text-purple-600">Practica: Dar opiniones con justificación, usar ejemplos personales</p>
                </div>

              </div>
            </section>

            {/* Resources Section */}
            <section className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-zinc-900 mb-6">
                Recursos gratuitos para practicar
              </h2>

              <div className="grid md:grid-cols-2 gap-4 mb-6">
                <div className="bg-zinc-50 rounded-xl p-5">
                  <h4 className="font-bold text-zinc-900 mb-3">Oficiales Cambridge</h4>
                  <ul className="space-y-2 text-sm text-zinc-600">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      Sample papers en cambridgeenglish.org
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      Write & Improve (Writing gratis)
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      Speak & Improve (Speaking con IA)
                    </li>
                  </ul>
                </div>
                <div className="bg-zinc-50 rounded-xl p-5">
                  <h4 className="font-bold text-zinc-900 mb-3">Otros recursos</h4>
                  <ul className="space-y-2 text-sm text-zinc-600">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-blue-500" />
                      Flo-Joe.co.uk (Use of English)
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-blue-500" />
                      Exam English (Tests completos)
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-blue-500" />
                      British Council Learn English
                    </li>
                  </ul>
                </div>

              </div>

              <div className="bg-blue-100 rounded-xl p-6">
                <p className="text-blue-800">
                  En nuestra <a href="/academia-ingles-barrio-del-pilar" className="text-blue-600 hover:underline font-bold">academia en Barrio del Pilar</a> complementamos estos recursos con práctica guiada,
                  corrección personalizada de Writing y Speaking en vivo con feedback inmediato. Ofrecemos <a href="/examenes-cambridge/b2-first" className="text-blue-600 hover:underline font-bold">preparación B2 First</a> con <a href="/cursos-ingles/particulares" className="text-blue-600 hover:underline font-bold">clases particulares</a> o grupales desde <strong>79€/mes</strong>. También preparamos <a href="/examenes-cambridge/b1-preliminary" className="text-blue-600 hover:underline font-bold">B1 Preliminary</a> y otros <a href="/examenes-cambridge" className="text-blue-600 hover:underline font-bold">exámenes Cambridge</a>.
                </p>
              </div>
            </section>

            {/* FAQ Section */}
            <section className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-zinc-900 mb-6">
                Preguntas Frecuentes sobre Ejercicios B2
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
                    <div className={`overflow-hidden transition-all duration-300 ${openFaq === index ? 'max-h-[500px] opacity-100 py-4' : 'max-h-0 opacity-0'}`}>
                        <div className="px-6 bg-white">
                          <p className="text-zinc-600">{faq.answer}</p>
                        </div>
                      </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Conclusion */}
            <section className="mb-12">
              <div className="bg-gradient-to-r from-blue-600 to-cyan-600 rounded-2xl p-8 text-white">
                <h2 className="text-2xl font-bold mb-4">Conclusión</h2>
                <p className="text-white/90 mb-6">
                  Dominar los ejercicios del B2 First requiere práctica específica de cada tipo. No basta con mejorar
                  tu inglés general; necesitas familiarizarte con los formatos, gestionar el tiempo y aplicar
                  estrategias específicas para cada sección. Combina recursos gratuitos con práctica guiada para
                  maximizar tus resultados.
                </p>
                <p className="text-white/90">
                  En <strong>Impulse English Academy</strong> te preparamos con ejercicios reales, simulacros
                  cronometrados y feedback personalizado por solo <strong>79€/mes</strong>.
                </p>
              </div>
            </section>

            {/* CTA */}
            <section className="mb-12">
              <div className="bg-zinc-900 rounded-2xl p-8">
                <div className="flex flex-col md:flex-row items-center gap-6">
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-white mb-2">
                      ¿Quieres prepararte para el B2 First?
                    </h3>
                    <p className="text-zinc-400">
                      Práctica guiada con profesores expertos en exámenes Cambridge.
                    </p>
                  </div>
                  <a
              href="/contacto"
                    className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-8 rounded-lg transition-colors whitespace-nowrap"
                  >
                    Solicitar información
                  </a>
                </div>

              </div>
            </section>

            {/* Related Articles */}
            <section>
              <h3 className="text-xl font-bold text-zinc-900 mb-4">Artículos relacionados</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <a href="/examenes-cambridge/b2-first" className="bg-zinc-50 rounded-xl p-4 hover:bg-zinc-100 transition-colors">
                  <span className="text-xs font-bold text-blue-600">B2 FIRST</span>
                  <h4 className="font-bold text-zinc-900 mt-1">Cambridge B2: 7 Beneficios del Examen First</h4>
                </a>
                <a href="/examenes-cambridge" className="bg-zinc-50 rounded-xl p-4 hover:bg-zinc-100 transition-colors">
                  <span className="text-xs font-bold text-blue-600">PUNTUACIÓN</span>
                  <h4 className="font-bold text-zinc-900 mt-1">Escala Cambridge Explicada: Niveles y Grades</h4>
                </a>
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
            href="https://www.cambridgeenglish.org/es/exams-and-tests/first/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-blue-600 hover:underline"
          >
            → Más información en Cambridge English - B2 First oficial
          </a>
        </div>
      </section>

      <Footer />

</>
  );
}
