import React, { useState, useEffect } from 'react';
import { Award, Clock, ChevronDown, ChevronUp, CheckCircle, Target, FileText, Headphones, MessageSquare } from 'lucide-react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import LeadForm from '../../components/LeadForm';
import Breadcrumb from '../../components/Breadcrumb';
import { generateArticleSchema, businessInfo } from '../../utils/schemaData';
import type { FAQItem } from '../../utils/schemaData';
export const articleSchema = generateArticleSchema({
    headline: "Examen CAE Cambridge C1 Advanced: Guía Completa 2026",
    description: "Guía completa del examen CAE C1 Advanced de Cambridge: estructura, partes, puntuación, precio y cómo prepararte.",
    url: `${businessInfo.url}/blog/examen-cae-cambridge`,
    datePublished: "2025-01-06"
  });

export const faqs: FAQItem[] = [
    {
      question: "¿Cuánto tiempo se tarda en preparar el examen CAE desde un nivel B2?",
      answer: "Con dedicación de 8-10 horas semanales, necesitas aproximadamente 4-6 meses de preparación intensiva desde un nivel B2 sólido. Este período permite desarrollar el vocabulario académico avanzado requerido, dominar estructuras gramaticales complejas y familiarizarte completamente con el formato específico del examen. Candidatos con menos tiempo disponible pueden extender la preparación a 8-9 meses con estudio de 4-5 horas semanales."
    }

  ,
    {
      question: "¿Cuál es la diferencia entre el examen CAE papel y digital?",
      answer: "Ambos formatos tienen contenido idéntico, misma duración y validez equivalente del certificado obtenido. La diferencia principal radica en la interfaz: el digital usa ordenador para Reading, Use of English, Listening y Writing, ofreciendo procesador de texto, cronómetro visible y audífonos individuales. Los resultados digitales están disponibles en 2-3 semanas versus 4-6 para papel. El Speaking mantiene formato presencial en ambas modalidades."
    },
    {
      question: "¿Qué puntuación necesito para aprobar el examen CAE?",
      answer: "Necesitas mínimo 180 puntos en la Cambridge English Scale para obtener el certificado C1 Advanced con grado C. Puntuaciones de 193-199 otorgan grado B, y 200 o superior grado A (nivel C2 competente). Si obtienes 160-179 puntos, recibes certificado nivel B2 en lugar del C1. No existe \"suspenso\" oficial; toda puntuación superior a 160 certifica algún nivel."
    },
    {
      question: "¿El certificado CAE caduca o tiene validez indefinida?",
      answer: "El certificado Cambridge C1 Advanced no caduca y mantiene validez oficial permanente. Sin embargo, muchas universidades y empleadores solicitan certificados expedidos en los últimos 2-3 años como prueba de competencia lingüística actual. Esto responde a que las habilidades idiomáticas pueden deteriorarse sin uso regular. Consulta siempre requisitos específicos de la institución que te interesa para determinar antigüedad máxima aceptada del certificado."
    },
    {
      question: "¿Puedo presentarme al examen CAE sin hacer un curso de preparación?",
      answer: "Sí, Cambridge English permite inscripción directa sin requisito de curso previo. Sin embargo, aprobar sin preparación específica resulta extremadamente difícil incluso para hablantes con nivel B2+ consolidado. El 92% de candidatos exitosos realiza preparación estructurada de 3-6 meses, ya que el formato específico, tipos de ejercicio y criterios de evaluación requieren familiarización práctica detallada que no se adquiere únicamente con buen nivel general de inglés."
    }
  ];

export default function ExamenCaeCambridgePage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [openFaq, setOpenFaq] = useState<number | null>(null);


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
          { label: 'Examen CAE Cambridge' }
          ]}
          variant="light"
          />

          <div className="mt-12 md:mt-16">
            <div className="flex items-center gap-4 mb-6 animate-hero-fade-up">
              <div className="w-8 h-px bg-white/40"></div>
              <span className="font-display text-white/70 text-xs uppercase tracking-[0.2em]">
                C1 Advanced (CAE)
              </span>
            </div>

            <h1 className="font-serif text-3xl md:text-5xl lg:text-6xl text-white tracking-tight leading-[1.1] mb-6 animate-hero-fade-up animation-delay-100">
              Examen CAE Cambridge C1 Advanced: Todo lo que Necesitas Saber
            </h1>
            <div className="w-16 h-0.5 bg-brand-red mb-6 animate-hero-fade-up animation-delay-150"></div>
            <p className="font-display text-lg md:text-xl text-white/80 font-light leading-relaxed max-w-3xl animate-hero-fade-up animation-delay-200">
              Guía completa del Certificate in Advanced English: estructura, puntuación, preparación y consejos para aprobar.
            </p>
          </div>
        </div>
      </header>

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
                    <a
              href="/contacto"
                      className="inline-block bg-white text-rose-600 font-bold py-2 px-6 rounded-lg hover:bg-zinc-100 transition-colors"
                    >
                      Solicitar información
                    </a>
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
              <div className="bg-gradient-to-r from-rose-600 to-pink-600 rounded-2xl p-8 text-white">
                <h2 className="text-2xl font-bold mb-4">Conclusión</h2>
                <p className="text-white/90 mb-6">
                  El CAE/C1 Advanced es una inversión en tu futuro profesional y académico. Con el certificado
                  adecuado, abrirás puertas a oportunidades internacionales que requieren un nivel avanzado
                  demostrable de inglés. La preparación específica es esencial: no basta con tener buen nivel,
                  necesitas conocer el formato y las estrategias para cada sección.
                </p>
                <p className="text-white/90">
                  En nuestra <a href="/academia-ingles-barrio-del-pilar" className="text-white hover:underline font-bold">academia en Barrio del Pilar</a>, <a href="/academia-ingles-la-vaguada" className="text-white hover:underline font-bold">junto a La Vaguada</a>, te preparamos con metodología probada y profesores
                  expertos por solo <strong>79€/mes</strong>. Ofrecemos <a href="/cursos-ingles/adultos" className="text-white hover:underline font-bold">cursos de inglés para adultos</a> y <a href="/cursos-ingles/particulares" className="text-white hover:underline font-bold">clases particulares</a> para preparar todos los <a href="/examenes-cambridge" className="text-white hover:underline font-bold">exámenes Cambridge</a>. ¡Da el paso hacia tu certificación C1!
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
                  <a
              href="/contacto"
                    className="bg-rose-500 hover:bg-rose-600 text-white font-bold py-3 px-8 rounded-lg transition-colors whitespace-nowrap"
                  >
                    Empezar ahora
                  </a>
                </div>

              </div>
            </section>

            {/* Related Articles */}
            <section>
              <h3 className="text-xl font-bold text-zinc-900 mb-4">Artículos relacionados</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <a href="/examenes-cambridge" className="bg-zinc-50 rounded-xl p-4 hover:bg-zinc-100 transition-colors">
                  <span className="text-xs font-bold text-rose-600">GUÍA COMPLETA</span>
                  <h4 className="font-bold text-zinc-900 mt-1">Guía Completa de Exámenes Cambridge 2026</h4>
                </a>
                <a href="/examenes-cambridge/c1-advanced" className="bg-zinc-50 rounded-xl p-4 hover:bg-zinc-100 transition-colors">
                  <span className="text-xs font-bold text-rose-600">RECURSOS</span>
                  <h4 className="font-bold text-zinc-900 mt-1">PDFs Cambridge Advanced: Recursos Oficiales</h4>
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

</>
  );
}
