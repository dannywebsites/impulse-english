import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Award, Clock, ChevronDown, ChevronUp, CheckCircle, Target, FileText, Headphones, MessageSquare } from 'lucide-react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import LeadForm from '../../components/LeadForm';
import Breadcrumb from '../../components/Breadcrumb';
import SchemaMarkup from '../../components/SchemaMarkup';
import { generateArticleSchema, businessInfo } from '../../utils/schemaData';
import SEOHead from '../../components/SEOHead';

export default function ExamenCaeCambridgePage() {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = 'Examen CAE Cambridge C1 Advanced: Guía Completa 2026 | Impulse English Academy La Vaguada – Barrio del Pilar';
  }, []);

  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const articleSchema = generateArticleSchema({
    headline: "Examen CAE Cambridge C1 Advanced: Guía Completa 2026",
    description: "Guía completa del examen CAE C1 Advanced de Cambridge: estructura, partes, puntuación, precio y cómo prepararte.",
    url: `${businessInfo.url}/examenes-cambridge/examen-cae-cambridge`,
    datePublished: "2025-01-06"
  });

  const faqs = [
    {
      question: "¿Cuánto tiempo se tarda en pasar de B2 a C1?",
      answer: "Pasar del nivel B2 al C1 en inglés requiere entre 200 y 300 horas de estudio guiado y práctica intensiva. El progreso depende de la frecuencia, método de aprendizaje y motivación. La certificación Cambridge C1 Advanced valida este nivel avanzado, esencial para contextos académicos y profesionales."
    },
    {
      question: "¿Es muy difícil el C1 Advanced?",
      answer: "El Cambridge C1 Advanced es un examen exigente que certifica un nivel alto de inglés (C1 MCER), evaluando reading, writing, listening y speaking con énfasis en comunicación efectiva. Su dificultad radica en la duración, variedad de tareas y dominio avanzado de vocabulario y gramática."
    },
    {
      question: "¿Qué trabajos piden C1 de inglés?",
      answer: "El nivel C1 de inglés, certificado por el Cambridge C1 Advanced, es esencial en puestos directivos, técnicos, académicos, turísticos y legales que requieren comunicación fluida y precisa en entornos internacionales. Es valorado para negociación, presentaciones, docencia, atención al cliente y trámites migratorios en 2025/26."
    },
    {
      question: "¿Cuántas horas de estudio para C1?",
      answer: "La preparación para el Cambridge C1 Advanced requiere unas 200 horas de estudio guiado. Este tiempo incluye práctica intensiva en comprensión lectora, gramática, vocabulario, escritura, escucha y expresión oral, distribuidas en cuatro secciones evaluadas en un examen de aproximadamente 4 horas."
    },
    {
      question: "¿El C1 caduca?",
      answer: "El certificado Cambridge C1 Advanced no caduca oficialmente y es válido de por vida. No obstante, muchas universidades y empleadores requieren que la certificación tenga menos de 2-3 años para considerarla vigente, garantizando así la actualización del nivel de inglés del candidato."
    },
    {
      question: "¿Qué diferencia hay entre B2 y C1?",
      answer: "La diferencia principal entre B2 y C1 radica en el dominio y profundidad del inglés: B2 permite comunicarse con fluidez en temas cotidianos y laborales, mientras C1 implica un uso avanzado, flexible y matizado, adecuado para contextos académicos y profesionales exigentes, con comprensión de expresiones idiomáticas y textos complejos."
    },
    {
      question: "¿Puedo hacer C1 sin haber hecho B2?",
      answer: "No es obligatorio haber superado el nivel B2 para presentarse al examen Cambridge C1 Advanced. Este certificado evalúa directamente competencias de nivel C1, aunque tener un nivel B2 sólido facilita la preparación y aumenta las probabilidades de éxito en la prueba avanzada."
    },
    {
      question: "¿Qué porcentaje aprueba el C1 Advanced?",
      answer: "El porcentaje de aprobación del Cambridge C1 Advanced es aproximadamente del 75%, donde el 64% obtiene grado B o C (nivel C1) y un 13% alcanza grado A (nivel C2). Cerca del 20% no logra el nivel C1 y alrededor del 5% reprueba el examen directamente."
    },
    {
      question: "¿Merece la pena el C1 en España?",
      answer: "El certificado Cambridge C1 Advanced es muy valorado en España en 2025/26 por certificar un nivel alto de inglés, reconocido en universidades, empresas multinacionales y para trámites oficiales. Facilita el acceso a estudios superiores, mejora la empleabilidad y aporta un valor estable sin caducidad."
    }
  ];

  const examParts = [
    {
      name: "Reading & Use of English",
      duration: "90 min",
      parts: "8 partes",
      questions: "56 preguntas",
      weight: "40%",
      icon: FileText,
      color: "blue"
    },
    {
      name: "Writing",
      duration: "90 min",
      parts: "2 tareas",
      questions: "Essay + elección",
      weight: "20%",
      icon: FileText,
      color: "green"
    },
    {
      name: "Listening",
      duration: "40 min",
      parts: "4 partes",
      questions: "30 preguntas",
      weight: "20%",
      icon: Headphones,
      color: "purple"
    },
    {
      name: "Speaking",
      duration: "15 min",
      parts: "4 partes",
      questions: "En parejas",
      weight: "20%",
      icon: MessageSquare,
      color: "orange"
    }
  ];

  return (
    <>
      <SEOHead
        title="Examen CAE Cambridge C1 Advanced 2026: Guía Completa | Estructura, Partes y Preparación"
        description="Guía completa del CAE C1 Advanced: estructura del examen, Reading, Writing, Listening, Speaking, puntuación, precio y cómo prepararte para aprobar en 2026."
        keywords="examen cae cambridge, c1 advanced cambridge, certificado cae, preparación c1 advanced, estructura cae, puntuación cambridge c1, precio cae madrid"
        canonical="/examenes-cambridge/cae"
        ogType="article"
      />
      <Navbar />

      {/* Hero Section */}
      <section className="pt-24 pb-12 md:pt-32 md:pb-16 bg-gradient-to-br from-rose-600 to-pink-700">
        <div className="container mx-auto px-6 md:px-12">
          <div className="max-w-4xl">
            <Breadcrumb
              items={[
                { label: 'Blog', href: '/blogs-impulse' },
                { label: 'Examen CAE Cambridge' }
              ]}
              variant="light"
            />
            <div className="flex items-center gap-2 mb-4 mt-6">
              <span className="bg-white/20 text-white px-3 py-1 rounded-full text-sm font-medium">
                C1 Advanced (CAE)
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-6">
              Examen CAE Cambridge C1 Advanced: Todo lo que Necesitas Saber
            </h1>
            <p className="text-xl text-white/90 font-light mb-6">
              Guía completa del Certificate in Advanced English: estructura, puntuación, preparación y consejos para aprobar.
            </p>
            <div className="flex items-center gap-4 text-white/80 text-sm">
              <span className="flex items-center gap-1">
                <Clock className="w-4 h-4" />
                15 min de lectura
              </span>
              <span className="flex items-center gap-1">
                <Award className="w-4 h-4" />
                Nivel C1 CEFR
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Exam Overview */}
      <section className="py-8 bg-rose-50">
        <div className="container mx-auto px-6 md:px-12">
          <div className="max-w-4xl">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {examParts.map((part, index) => (
                <div key={index} className="bg-white rounded-xl p-4 text-center">
                  <part.icon className={`w-8 h-8 mx-auto mb-2 text-${part.color}-600`} />
                  <p className="font-bold text-zinc-900 text-sm">{part.name}</p>
                  <p className="text-2xl font-bold text-rose-600">{part.duration}</p>
                  <p className="text-xs text-zinc-500">{part.weight} del total</p>
                </div>
              ))}
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
                El CAE (Certificate in Advanced English), ahora conocido como <a href="https://www.cambridgeenglish.org/es/exams-and-tests/advanced/" target="_blank" rel="noopener noreferrer" className="text-rose-600 hover:underline">C1 Advanced</a>, es uno de los exámenes
                de inglés más prestigiosos y reconocidos a nivel mundial. Certifica que puedes comunicarte con
                fluidez y precisión en entornos académicos y profesionales exigentes. Esta guía te explica todo
                sobre el examen: estructura, puntuación, cómo prepararte y qué esperar el día del test.
              </p>
            </div>

            {/* Section 1 - What is CAE */}
            <section className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-zinc-900 mb-6">
                ¿Qué es el CAE y por qué es tan valorado?
              </h2>
              <p className="text-zinc-600 mb-6">
                El C1 Advanced demuestra que tienes el nivel de inglés necesario para estudiar en universidades
                de habla inglesa, trabajar en empresas multinacionales y desenvolverte con confianza en cualquier
                situación profesional o académica compleja.
              </p>

              <div className="bg-rose-50 rounded-xl p-6 mb-6">
                <h3 className="font-bold text-zinc-900 mb-4 flex items-center gap-2">
                  <Award className="w-5 h-5 text-rose-600" />
                  Reconocimiento del C1 Advanced
                </h3>
                <ul className="space-y-2">
                  {[
                    "Aceptado por más de 9,000 instituciones en todo el mundo",
                    "Requisito de entrada en universidades como Oxford, Cambridge, MIT",
                    "Valorado por empresas como Google, Microsoft, KPMG",
                    "Válido para visados de trabajo en Reino Unido y Australia",
                    "Certificado sin fecha de caducidad"
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-zinc-600">
                      <CheckCircle className="w-4 h-4 text-rose-500 mt-1" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </section>

            {/* Section 2 - Reading & UoE */}
            <section className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-zinc-900 mb-6">
                Reading and Use of English (90 minutos)
              </h2>
              <p className="text-zinc-600 mb-6">
                Esta sección combinada evalúa tu comprensión lectora y dominio de gramática/vocabulario en contexto.
                Es la parte con más peso del examen (40% de la puntuación total).
              </p>

              <div className="space-y-4 mb-6">
                <div className="bg-zinc-50 rounded-xl p-5">
                  <h4 className="font-bold text-zinc-900 mb-2">Parts 1-4: Use of English</h4>
                  <ul className="text-sm text-zinc-600 space-y-1">
                    <li><strong>Part 1:</strong> Multiple Choice Cloze (8 gaps) - Vocabulario</li>
                    <li><strong>Part 2:</strong> Open Cloze (8 gaps) - Gramática</li>
                    <li><strong>Part 3:</strong> Word Formation (8 gaps) - Derivación</li>
                    <li><strong>Part 4:</strong> Key Word Transformation (6 oraciones) - Parafraseo</li>
                  </ul>
                </div>
                <div className="bg-zinc-50 rounded-xl p-5">
                  <h4 className="font-bold text-zinc-900 mb-2">Parts 5-8: Reading</h4>
                  <ul className="text-sm text-zinc-600 space-y-1">
                    <li><strong>Part 5:</strong> Multiple Choice (6 preguntas) - Comprensión detallada</li>
                    <li><strong>Part 6:</strong> Cross-text Multiple Matching (4 preguntas) - Comparar opiniones</li>
                    <li><strong>Part 7:</strong> Gapped Text (6 párrafos) - Coherencia textual</li>
                    <li><strong>Part 8:</strong> Multiple Matching (10 preguntas) - Localizar información</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Section 3 - Writing */}
            <section className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-zinc-900 mb-6">
                Writing (90 minutos)
              </h2>
              <p className="text-zinc-600 mb-6">
                Debes completar dos tareas de escritura que demuestren tu capacidad para producir textos
                bien estructurados, con vocabulario variado y gramática precisa.
              </p>

              <div className="grid md:grid-cols-2 gap-4 mb-6">
                <div className="bg-green-50 rounded-xl p-5">
                  <h4 className="font-bold text-zinc-900 mb-2">Part 1: Essay (obligatorio)</h4>
                  <p className="text-sm text-zinc-600 mb-2">
                    220-260 palabras. Debes desarrollar una argumentación basada en dos puntos dados
                    más tu propia idea, expresando y justificando opiniones.
                  </p>
                  <p className="text-xs text-green-600">Peso: 50% de Writing</p>
                </div>
                <div className="bg-green-50 rounded-xl p-5">
                  <h4 className="font-bold text-zinc-900 mb-2">Part 2: Elección</h4>
                  <p className="text-sm text-zinc-600 mb-2">
                    220-260 palabras. Elige entre: email/letter, proposal, report o review.
                    Cada tipo tiene convenciones específicas de formato y registro.
                  </p>
                  <p className="text-xs text-green-600">Peso: 50% de Writing</p>
                </div>
              </div>

              <div className="bg-amber-50 border-l-4 border-amber-400 p-4">
                <p className="text-amber-800">
                  <strong>Consejo clave:</strong> Practica los 4 tipos de texto de Part 2. El día del examen,
                  elige el que mejor domines o el tema que más te inspire. No improvises con un formato
                  que no hayas practicado.
                </p>
              </div>
            </section>

            {/* Section 4 - Listening */}
            <section className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-zinc-900 mb-6">
                Listening (40 minutos)
              </h2>
              <p className="text-zinc-600 mb-6">
                Escucharás grabaciones con diferentes acentos del inglés (británico, americano, australiano)
                y deberás responder preguntas que evalúan comprensión general y específica.
              </p>

              <div className="grid md:grid-cols-2 gap-4 mb-6">
                <div className="bg-purple-50 rounded-xl p-5">
                  <h4 className="font-bold text-zinc-900 mb-2">Part 1: Multiple Choice</h4>
                  <p className="text-sm text-zinc-600">3 extractos cortos, 2 preguntas cada uno. Evalúa actitud, opinión, propósito.</p>
                </div>
                <div className="bg-purple-50 rounded-xl p-5">
                  <h4 className="font-bold text-zinc-900 mb-2">Part 2: Sentence Completion</h4>
                  <p className="text-sm text-zinc-600">Monólogo de 3-4 minutos, 8 gaps que completar con información específica.</p>
                </div>
                <div className="bg-purple-50 rounded-xl p-5">
                  <h4 className="font-bold text-zinc-900 mb-2">Part 3: Multiple Choice</h4>
                  <p className="text-sm text-zinc-600">Conversación o entrevista, 6 preguntas de opción múltiple.</p>
                </div>
                <div className="bg-purple-50 rounded-xl p-5">
                  <h4 className="font-bold text-zinc-900 mb-2">Part 4: Multiple Matching</h4>
                  <p className="text-sm text-zinc-600">5 monólogos cortos que emparejar con 8 afirmaciones.</p>
                </div>
              </div>
            </section>

            {/* Section 5 - Speaking */}
            <section className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-zinc-900 mb-6">
                Speaking (15 minutos)
              </h2>
              <p className="text-zinc-600 mb-6">
                El examen oral se realiza en parejas con dos examinadores: uno conduce la entrevista
                y otro evalúa sin intervenir.
              </p>

              <div className="space-y-4 mb-6">
                <div className="bg-orange-50 rounded-xl p-5 border-l-4 border-orange-400">
                  <h4 className="font-bold text-zinc-900">Part 1: Interview (2 min)</h4>
                  <p className="text-sm text-zinc-600">Preguntas personales sobre trabajo, estudios, intereses, planes.</p>
                </div>
                <div className="bg-orange-50 rounded-xl p-5 border-l-4 border-orange-400">
                  <h4 className="font-bold text-zinc-900">Part 2: Long Turn (4 min)</h4>
                  <p className="text-sm text-zinc-600">Cada candidato habla 1 minuto sobre 3 imágenes, respondiendo una pregunta. Luego 30 segundos de respuesta corta sobre las imágenes del compañero.</p>
                </div>
                <div className="bg-orange-50 rounded-xl p-5 border-l-4 border-orange-400">
                  <h4 className="font-bold text-zinc-900">Part 3: Collaborative Task (4 min)</h4>
                  <p className="text-sm text-zinc-600">Discusión en pareja usando material visual. Debéis negociar y llegar a una decisión conjunta.</p>
                </div>
                <div className="bg-orange-50 rounded-xl p-5 border-l-4 border-orange-400">
                  <h4 className="font-bold text-zinc-900">Part 4: Discussion (5 min)</h4>
                  <p className="text-sm text-zinc-600">Preguntas más abstractas relacionadas con el tema de Part 3. Debate de ideas y opiniones.</p>
                </div>
              </div>
            </section>

            {/* Preparation Section */}
            <section className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-zinc-900 mb-6">
                Cómo prepararte para el CAE
              </h2>

              <div className="bg-gradient-to-r from-rose-500 to-pink-500 rounded-2xl p-8 text-white mb-6">
                <h3 className="text-xl font-bold mb-4">Preparación CAE en Impulse English Academy - 79€/mes</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-bold mb-2">Nuestro programa incluye:</h4>
                    <ul className="space-y-2 text-sm">
                      {[
                        "Clases en grupos reducidos (máx. 8)",
                        "Profesores especializados en Cambridge",
                        "Material oficial actualizado 2026",
                        "Simulacros completos cronometrados",
                        "Corrección detallada de Writing",
                        "Práctica intensiva de Speaking"
                      ].map((item, i) => (
                        <li key={i} className="flex items-center gap-2">
                          <CheckCircle className="w-4 h-4" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold mb-2">Resultados:</h4>
                    <p className="text-sm text-white/90 mb-4">
                      El 85% de nuestros estudiantes aprueban el C1 Advanced en su primer intento.
                      Seguimiento personalizado de tu progreso y plan de estudio adaptado a tus necesidades.
                    </p>
                    <Link
                      to="/contacto"
                      className="inline-block bg-white text-rose-600 font-bold py-2 px-6 rounded-lg hover:bg-zinc-100 transition-colors"
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
                Preguntas Frecuentes sobre el CAE
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
              <div className="bg-gradient-to-r from-rose-600 to-pink-600 rounded-2xl p-8 text-white">
                <h2 className="text-2xl font-bold mb-4">Conclusión</h2>
                <p className="text-white/90 mb-6">
                  El CAE/C1 Advanced es una inversión en tu futuro profesional y académico. Con el certificado
                  adecuado, abrirás puertas a oportunidades internacionales que requieren un nivel avanzado
                  demostrable de inglés. La preparación específica es esencial: no basta con tener buen nivel,
                  necesitas conocer el formato y las estrategias para cada sección.
                </p>
                <p className="text-white/90">
                  En nuestra <Link to="/academia-ingles-barrio-del-pilar" className="text-white hover:underline font-bold">academia en Barrio del Pilar</Link>, <Link to="/academia-ingles-la-vaguada" className="text-white hover:underline font-bold">junto a La Vaguada</Link>, te preparamos con metodología probada y profesores
                  expertos por solo <strong>79€/mes</strong>. Ofrecemos <Link to="/ingles-la-vaguada/adultos" className="text-white hover:underline font-bold">cursos de inglés para adultos</Link> y <Link to="/ingles-la-vaguada/particulares" className="text-white hover:underline font-bold">clases particulares</Link> para preparar todos los <Link to="/examenes-cambridge" className="text-white hover:underline font-bold">exámenes Cambridge</Link>. ¡Da el paso hacia tu certificación C1!
                </p>
              </div>
            </section>

            {/* CTA */}
            <section className="mb-12">
              <div className="bg-zinc-900 rounded-2xl p-8">
                <div className="flex flex-col md:flex-row items-center gap-6">
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-white mb-2">
                      ¿Listo para preparar tu CAE?
                    </h3>
                    <p className="text-zinc-400">
                      Consigue tu certificado C1 con nuestra preparación especializada.
                    </p>
                  </div>
                  <Link
                    to="/contacto"
                    className="bg-rose-500 hover:bg-rose-600 text-white font-bold py-3 px-8 rounded-lg transition-colors whitespace-nowrap"
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
                <Link to="/examenes-cambridge/guia-completa" className="bg-zinc-50 rounded-xl p-4 hover:bg-zinc-100 transition-colors">
                  <span className="text-xs font-bold text-rose-600">GUÍA COMPLETA</span>
                  <h4 className="font-bold text-zinc-900 mt-1">Guía Completa de Exámenes Cambridge 2026</h4>
                </Link>
                <Link to="/examenes-cambridge/pdfs-advanced" className="bg-zinc-50 rounded-xl p-4 hover:bg-zinc-100 transition-colors">
                  <span className="text-xs font-bold text-rose-600">RECURSOS</span>
                  <h4 className="font-bold text-zinc-900 mt-1">PDFs Cambridge Advanced: Recursos Oficiales</h4>
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
            href="https://www.cambridgeenglish.org/es/exams-and-tests/advanced/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-rose-600 hover:underline"
          >
            → Más información en Cambridge English - C1 Advanced oficial
          </a>
        </div>
      </section>

      <Footer />

      <SchemaMarkup schema={articleSchema} />
    </>
  );
}
