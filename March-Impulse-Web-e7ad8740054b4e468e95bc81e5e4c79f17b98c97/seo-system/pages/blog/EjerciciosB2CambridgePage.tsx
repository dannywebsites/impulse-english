import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { PenTool, Clock, ChevronDown, ChevronUp, CheckCircle, BookOpen, Target, FileText, Headphones } from 'lucide-react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import LeadForm from '../../components/LeadForm';
import Breadcrumb from '../../components/Breadcrumb';
import SchemaMarkup from '../../components/SchemaMarkup';
import { generateArticleSchema, businessInfo } from '../../utils/schemaData';
import SEOHead from '../../components/SEOHead';

export default function EjerciciosB2CambridgePage() {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = 'Ejercicios B2 Cambridge: Guía Práctica First 2026 | Impulse English Academy La Vaguada – Barrio del Pilar';
  }, []);

  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const articleSchema = generateArticleSchema({
    headline: "Ejercicios B2 Cambridge: Guía Práctica First 2026",
    description: "Ejercicios prácticos para preparar el B2 First de Cambridge. Reading, Writing, Listening y Speaking con recursos gratuitos.",
    url: `${businessInfo.url}/examenes-cambridge/ejercicios-b2-cambridge`,
    datePublished: "2025-01-08"
  });

  const faqs = [
    {
      question: "¿Puedo preparar el B2 First en 3 meses?",
      answer: "Preparar el B2 First en 3 meses es viable partiendo de un nivel B1 sólido mediante estudio intensivo diario de 2-3 horas. La estrategia requiere enfoque en las cuatro destrezas evaluadas: Reading & Use of English (75 minutos, 40%), Writing (80 minutos, 20%), Listening (40 minutos, 20%) y Speaking (14 minutos, 20%). El éxito demanda práctica con materiales oficiales, simulacros cronometrados y dominio de gramática B2, phrasal verbs y collocations para alcanzar la puntuación mínima de 160 puntos."
    },
    {
      question: "¿Qué parte del B2 First es más difícil?",
      answer: "La parte más difícil del B2 First es Use of English, integrada en Reading & Use of English (75 minutos, 40% puntuación total). Las secciones de transformación de frases (key word transformations) y formación de palabras (word formation) resultan especialmente exigentes por requerir precisión gramatical, vocabulario avanzado y ortografía exacta sin opciones múltiples. Los candidatos pierden puntos frecuentemente en phrasal verbs, collocations y derivaciones morfológicas, donde errores ortográficos anulan respuestas correctas estructuralmente."
    },
    {
      question: "¿Cómo es el Speaking del B2 First?",
      answer: "El Speaking del B2 First dura 14 minutos por pareja de candidatos y representa el 20% de la puntuación total. Se estructura en cuatro partes: entrevista personal (2 minutos), turno largo individual con descripción de fotografías (4 minutos), tarea colaborativa de negociación (4 minutos) y discusión conjunta (4 minutos). Dos examinadores evalúan fluidez, gramática, vocabulario, pronunciación e interacción comunicativa, utilizando la Cambridge English Scale para certificar competencia oral nivel B2 del MCER."
    },
    {
      question: "¿Qué libros usar para preparar B2 First?",
      answer: "Los libros recomendados para preparar el examen Cambridge B2 First en 2025/26 incluyen First Expert Coursebook y First Masterclass para competencias B2, FCE Result y Compact First adaptados al formato actual, First Trainer Second Edition con simulacros oficiales, y Oxford Practice Grammar para gramática práctica. Combínelos con recursos digitales para optimizar la preparación."
    },
    {
      question: "¿B2 First papel o ordenador?",
      answer: "El examen Cambridge B2 First se ofrece en formato papel y digital, con idéntico contenido, estructura y certificado. La modalidad digital destaca por resultados en 5-10 días y escritura con teclado, mientras el papel ofrece experiencia tradicional y familiaridad, con resultados en 4-6 semanas."
    },
    {
      question: "¿Cuánto tiempo se tarda en preparar el B2 First?",
      answer: "La preparación para el examen Cambridge B2 First dura entre 3 y 9 meses según el nivel inicial y dedicación. Estudiantes con base B1 pueden alcanzar el nivel en 3-6 meses con estudio regular, mientras principiantes tardan hasta 12-18 meses. Clave: planificación estructurada y práctica constante."
    },
    {
      question: "¿Qué nota necesito para aprobar el B2 First?",
      answer: "La nota mínima para aprobar el B2 First es 160 puntos en la Cambridge English Scale (rango 140-190). Las calificaciones se dividen en: Grade A (180-190, nivel C1), Grade B (173-179, nivel B2), Grade C (160-172, nivel B2). Puntuaciones entre 140-159 otorgan certificado B1. La nota final promedia las cuatro destrezas evaluadas: Reading and Use of English, Writing, Listening y Speaking, ponderadas equitativamente."
    },
    {
      question: "¿Es difícil el B2 First?",
      answer: "El B2 First presenta dificultad moderada-alta para candidatos con nivel intermedio-alto de inglés. Requiere dominio de gramática compleja, vocabulario amplio (phrasal verbs, collocations) y competencia comunicativa en las cuatro destrezas. La presión temporal (3 horas 29 minutos totales) y variedad de formatos (Reading & Use of English 75 minutos, Writing 80 minutos, Listening 40 minutos, Speaking 14 minutos) aumentan el desafío. La preparación estructurada y familiarización con el formato reducen significativamente la dificultad percibida."
    },
    {
      question: "¿Cuánto dura el certificado B2 de Cambridge?",
      answer: "El certificado Cambridge B2 First tiene validez permanente sin fecha de caducidad. Una vez obtenido, el certificado no caduca y puede utilizarse de por vida como acreditación del nivel B2 del MCER. El examen para obtenerlo dura aproximadamente 3 horas y 29 minutos: Reading & Use of English (75 minutos), Writing (80 minutos), Listening (40 minutos) y Speaking (14 minutos). Los resultados digitales están disponibles 5-10 días laborables después del examen."
    },
    {
      question: "¿Qué pasa si suspendo el B2 First?",
      answer: "Al suspender el B2 First con puntuación inferior a 160 en la Cambridge English Scale, no se obtiene certificado B2. Puntuaciones entre 140-159 reciben certificado nivel B1, mientras que 122-139 solo aparecen en el Statement of Results sin certificación. Los candidatos pueden repetir el examen pagando nuevamente la tasa completa. Algunos centros autorizados ofrecen garantías de reexamen gratuito dentro de 12 meses tras el primer intento fallido, condicionado a inscripción inicial en programas específicos."
    }
  ];

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
      <SEOHead
        title="Ejercicios B2 Cambridge First 2026: Guía Práctica por Secciones | Reading, Writing, Listening, Speaking"
        description="Tipos de ejercicios del B2 First Cambridge: Reading, Use of English, Writing, Listening y Speaking. Estrategias, ejemplos y recursos gratuitos para practicar."
        keywords="ejercicios b2 cambridge, b2 first ejercicios, use of english b2, writing b2 first, listening b2 cambridge, speaking first certificate, práctica b2"
        canonical="/examenes-cambridge/ejercicios-b2"
        ogType="article"
      />
      <Navbar />

      {/* Hero Section */}
      <section className="pt-24 pb-12 md:pt-32 md:pb-16 bg-gradient-to-br from-blue-600 to-cyan-600">
        <div className="container mx-auto px-6 md:px-12">
          <div className="max-w-4xl">
            <Breadcrumb
              items={[
                { label: 'Blog', href: '/blogs-impulse' },
                { label: 'Ejercicios B2 Cambridge' }
              ]}
              variant="light"
              className="mb-4"
            />
            <div className="flex items-center gap-2 mb-4">
              <span className="bg-white/20 text-white px-3 py-1 rounded-full text-sm font-medium">
                B2 First Cambridge
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-6">
              Ejercicios B2 Cambridge: Guía Práctica para el First 2026
            </h1>
            <p className="text-xl text-white/90 font-light mb-6">
              Tipos de ejercicios, estrategias por sección y recursos gratuitos para practicar el B2 First Certificate.
            </p>
            <div className="flex items-center gap-4 text-white/80 text-sm">
              <span className="flex items-center gap-1">
                <Clock className="w-4 h-4" />
                15 min de lectura
              </span>
              <span className="flex items-center gap-1">
                <PenTool className="w-4 h-4" />
                Ejercicios prácticos
              </span>
            </div>
          </div>
        </div>
      </section>

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
                  En nuestra <Link to="/academia-ingles-barrio-del-pilar" className="text-blue-600 hover:underline font-bold">academia en Barrio del Pilar</Link> complementamos estos recursos con práctica guiada,
                  corrección personalizada de Writing y Speaking en vivo con feedback inmediato. Ofrecemos <Link to="/examenes-cambridge/b2-first" className="text-blue-600 hover:underline font-bold">preparación B2 First</Link> con <Link to="/ingles-la-vaguada/particulares" className="text-blue-600 hover:underline font-bold">clases particulares</Link> o grupales desde <strong>79€/mes</strong>. También preparamos <Link to="/examenes-cambridge/b1-preliminary" className="text-blue-600 hover:underline font-bold">B1 Preliminary</Link> y otros <Link to="/examenes-cambridge" className="text-blue-600 hover:underline font-bold">exámenes Cambridge</Link>.
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
                  <Link
                    to="/contacto"
                    className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-8 rounded-lg transition-colors whitespace-nowrap"
                  >
                    Solicitar información
                  </Link>
                </div>
              </div>
            </section>

            {/* Related Articles */}
            <section>
              <h3 className="text-xl font-bold text-zinc-900 mb-4">Artículos relacionados</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <Link to="/examenes-cambridge/b2-beneficios" className="bg-zinc-50 rounded-xl p-4 hover:bg-zinc-100 transition-colors">
                  <span className="text-xs font-bold text-blue-600">B2 FIRST</span>
                  <h4 className="font-bold text-zinc-900 mt-1">Cambridge B2: 7 Beneficios del Examen First</h4>
                </Link>
                <Link to="/examenes-cambridge/escala" className="bg-zinc-50 rounded-xl p-4 hover:bg-zinc-100 transition-colors">
                  <span className="text-xs font-bold text-blue-600">PUNTUACIÓN</span>
                  <h4 className="font-bold text-zinc-900 mt-1">Escala Cambridge Explicada: Niveles y Grades</h4>
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

      <SchemaMarkup schema={articleSchema} />
    </>
  );
}
