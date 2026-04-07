import React, { useState, useEffect } from 'react';
import { ChevronRight, Clock, Calendar, ChevronDown, ChevronUp, BookOpen, CheckCircle, Target, ArrowRight, Award } from 'lucide-react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import LeadForm from '../../components/LeadForm';
import Breadcrumb from '../../components/Breadcrumb';
import { generateArticleSchema, businessInfo } from '../../utils/schemaData';

export const articleSchema = generateArticleSchema({
    headline: "¿Linguaskill es Más Fácil que Cambridge? Comparativa Real",
    description: "Linguaskill no es más fácil que Cambridge, sino diferente. Compara dificultad, formato, duración y reconocimiento de ambos exámenes.",
    url: `${businessInfo.url}/blog/linguaskill-vs-cambridge-dificultad`,
    datePublished: "2025-03-01"
  });

export const faqItems = [
    {
      question: "¿Linguaskill es más fácil que el B2 First de Cambridge?",
      answer: "No es más fácil, sino diferente. Linguaskill es un test adaptativo multinivel que ajusta su dificultad según tus respuestas en tiempo real. El B2 First tiene un formato fijo diseñado para evaluar el nivel B2 específicamente. Ambos requieren preparación seria, pero Linguaskill evalúa tu nivel real sin aprobar o suspender."
    }

  ,
    {
      question: "¿Se puede suspender Linguaskill?",
      answer: "Técnicamente no. Linguaskill no tiene aprobado ni suspenso: te asigna un nivel del MCER (A1 a C1+) según tu rendimiento. Sin embargo, si necesitas acreditar un nivel específico (por ejemplo B2 para la universidad), deberás alcanzar la puntuación mínima correspondiente a ese nivel. Si no la alcanzas, obtendrás certificación de un nivel inferior."
    },
    {
      question: "¿Cuánto dura Linguaskill comparado con Cambridge tradicional?",
      answer: "Linguaskill dura aproximadamente 60-85 minutos para Reading & Listening (adaptativo), más 15 minutos de Writing y 15 de Speaking. En total, unas 2 horas. Los exámenes Cambridge tradicionales duran entre 2 y 4 horas según el nivel: B1 Preliminary dura 2h20min, B2 First 3h30min y C1 Advanced casi 4 horas."
    },
    {
      question: "¿Las universidades valoran igual Linguaskill que Cambridge?",
      answer: "Depende de la institución. La mayoría de universidades españolas aceptan ambos gracias al acuerdo CRUE. A nivel internacional, los certificados Cambridge tradicionales tienen mayor reconocimiento histórico. Para oposiciones y procesos selectivos en España, Linguaskill está ganando aceptación rápidamente por su rapidez de resultados (48 horas)."
    },
    {
      question: "¿Puedo prepararme solo para Linguaskill o necesito academia?",
      answer: "Puedes prepararte por tu cuenta con recursos oficiales de Cambridge, pero una academia especializada te ayuda a familiarizarte con el formato adaptativo y optimizar tu puntuación. En Impulse English Academy ofrecemos preparación específica para Linguaskill con simulacros reales y estrategias personalizadas."
    }
  ];

export default function LinguaskillVsCambridgeDificultadPage() {
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
              <img src="https://impulseenglish.s3.us-east-1.amazonaws.com/impulsephotos/NACHOS+photos.+/Technology-based+classroom+photo.JPG" alt="Comparativa Linguaskill vs Cambridge dificultad Impulse Academy" className="w-full h-full object-cover" loading="eager" />
              <div className="absolute inset-0 bg-gradient-to-br from-accent-blue/95 via-accent-blue/85 to-[#0a3560]/75"></div>
            </div>
            <div className="absolute inset-0 hero-grain opacity-[0.03]"></div>
            <div className="absolute -top-32 -right-32 w-[420px] h-[420px] rounded-full bg-brand-red/[0.04]"></div>
            <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
              <Breadcrumb
                items={[
                  { label: 'Blog', href: '/blog' },
                  { label: 'Linguaskill vs Cambridge Dificultad' }
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
                  ¿Linguaskill es Más Fácil que Cambridge? Comparativa Real
                </h1>
                <div className="w-16 h-0.5 bg-brand-red mb-6 animate-hero-fade-up animation-delay-150"></div>
                <p className="font-display text-lg md:text-xl text-white/80 font-light leading-relaxed max-w-3xl animate-hero-fade-up animation-delay-200">
                  Linguaskill no es más fácil que los exámenes tradicionales de Cambridge; es un test multinivel adaptativo que ajusta la dificultad según las respuestas.
                </p>
              </div>
            </div>
          </header>

          {/* Content */}
          <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            {/* Table of Contents */}
            <div className="bg-amber-50 rounded-2xl p-6 mb-12">
              <h2 className="text-lg font-semibold text-gray-900 mb-4">Contenido del artículo</h2>
              <ul className="space-y-2">
                <li><a href="#conceptos" className="text-amber-600 hover:text-amber-700 transition-colors">→ Linguaskill vs Cambridge: Conceptos Diferentes</a></li>
                <li><a href="#dificultad" className="text-amber-600 hover:text-amber-700 transition-colors">→ Comparativa de Dificultad por Destreza</a></li>
                <li><a href="#formato" className="text-amber-600 hover:text-amber-700 transition-colors">→ Formato y Duración</a></li>
                <li><a href="#reconocimiento" className="text-amber-600 hover:text-amber-700 transition-colors">→ Reconocimiento y Validez</a></li>
                <li><a href="#elegir" className="text-amber-600 hover:text-amber-700 transition-colors">→ ¿Cuál Elegir Según Tu Objetivo?</a></li>
                <li><a href="#faq" className="text-amber-600 hover:text-amber-700 transition-colors">→ Preguntas Frecuentes</a></li>
              </ul>
            </div>

            {/* Introduction */}
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              Una de las preguntas más frecuentes entre estudiantes de inglés es si <strong>Linguaskill es más fácil que los exámenes Cambridge tradicionales</strong>. La respuesta corta es que no se trata de fácil o difícil, sino de dos enfoques completamente distintos para certificar tu nivel de inglés. Mientras los exámenes Cambridge (B1 Preliminary, B2 First, C1 Advanced) evalúan un nivel concreto con aprobado o suspenso, <a href="/linguaskill/" className="text-amber-600 hover:underline font-medium">Linguaskill</a> es un test adaptativo que determina tu nivel real en el MCER sin necesidad de elegir previamente qué nivel presentar.
            </p>

            {/* Section 1 */}
            <section id="conceptos" className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                Linguaskill vs Cambridge: Conceptos Diferentes
              </h2>

              <p className="text-gray-700 mb-4 leading-relaxed">
                La confusión entre ambos exámenes es comprensible: los dos los desarrolla <a href="https://www.cambridgeenglish.org/es/exams-and-tests/linguaskill/" target="_blank" rel="noopener noreferrer" className="text-amber-600 hover:underline">Cambridge Assessment English</a>. Sin embargo, su filosofía es radicalmente diferente:
              </p>

              <div className="grid md:grid-cols-2 gap-4 mb-6">
                <div className="bg-amber-50 rounded-xl p-5">
                  <h3 className="font-bold text-amber-900 mb-3 flex items-center gap-2">
                    <Target className="w-5 h-5" />
                    Exámenes Cambridge Tradicionales
                  </h3>
                  <ul className="space-y-2 text-gray-700 text-sm">
                    <li>• Evalúan un nivel específico (B1, B2, C1, C2)</li>
                    <li>• Formato fijo con aprobado/suspenso</li>
                    <li>• Certificado permanente sin caducidad</li>
                    <li>• Resultados en 4-8 semanas</li>
                    <li>• Requieren examinador presencial para Speaking</li>
                  </ul>
                </div>
                <div className="bg-amber-50 rounded-xl p-5">
                  <h3 className="font-bold text-amber-900 mb-3 flex items-center gap-2">
                    <Target className="w-5 h-5" />
                    Linguaskill
                  </h3>
                  <ul className="space-y-2 text-gray-700 text-sm">
                    <li>• Test multinivel adaptativo (A1 a C1+)</li>
                    <li>• No hay aprobado ni suspenso: certifica tu nivel real</li>
                    <li>• Resultados en 48 horas o menos</li>
                    <li>• Speaking evaluado por inteligencia artificial</li>
                    <li>• Disponible 100% online desde casa</li>
                  </ul>
                </div>
              </div>

              <p className="text-gray-700 mb-4 leading-relaxed">
                La tecnología adaptativa de Linguaskill significa que el examen ajusta la dificultad de cada pregunta según tus respuestas anteriores. Si respondes correctamente, las preguntas se vuelven más difíciles; si fallas, se simplifican. Este sistema permite determinar tu nivel con precisión en menos tiempo, pero <strong>no significa que sea más fácil</strong>: simplemente mide de forma diferente.
              </p>

              <div className="bg-amber-50 border-l-4 border-amber-500 p-6 rounded-r-xl">
                <p className="text-gray-800 font-medium">
                  <strong>Dato clave:</strong> Un estudiante de nivel B1 encontrará las preguntas de Linguaskill igual de desafiantes que las del B1 Preliminary. La diferencia es que Linguaskill no te obliga a elegir un nivel antes de presentarte: el algoritmo lo detecta automáticamente.
                </p>
              </div>
            </section>

            {/* Section 2 */}
            <section id="dificultad" className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                Comparativa de Dificultad por Destreza
              </h2>

              <p className="text-gray-700 mb-6 leading-relaxed">
                Para entender realmente la dificultad de cada examen, es necesario analizarla destreza por destreza. A continuación comparamos cómo evalúa cada formato las cuatro competencias lingüísticas:
              </p>

              <div className="overflow-x-auto mb-8">
                <table className="w-full border-collapse bg-white rounded-xl overflow-hidden shadow-lg">
                  <thead>
                    <tr className="bg-gradient-to-r from-amber-500 to-amber-700 text-white">
                      <th className="text-left p-4 font-semibold">Destreza</th>
                      <th className="text-left p-4 font-semibold">Linguaskill</th>
                      <th className="text-left p-4 font-semibold">Cambridge Tradicional</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="bg-gray-50">
                      <td className="p-4 font-medium text-gray-900">Reading</td>
                      <td className="p-4 text-gray-700 text-sm">Adaptativo: las preguntas se ajustan. Variedad de tipos de texto.</td>
                      <td className="p-4 text-gray-700 text-sm">Dificultad fija según nivel. Mayor número de preguntas.</td>
                    </tr>
                    <tr className="bg-white">
                      <td className="p-4 font-medium text-gray-900">Listening</td>
                      <td className="p-4 text-gray-700 text-sm">Adaptativo con audios de diversa dificultad. Solo se escucha una vez.</td>
                      <td className="p-4 text-gray-700 text-sm">Audios de dificultad fija. Se escucha dos veces en B1/B2.</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="p-4 font-medium text-gray-900">Writing</td>
                      <td className="p-4 text-gray-700 text-sm">Dos tareas breves evaluadas por IA. Respuesta más corta.</td>
                      <td className="p-4 text-gray-700 text-sm">Dos tareas extensas evaluadas por examinadores humanos.</td>
                    </tr>
                    <tr className="bg-white">
                      <td className="p-4 font-medium text-gray-900">Speaking</td>
                      <td className="p-4 text-gray-700 text-sm">15 min grabado ante ordenador. Evaluado por IA.</td>
                      <td className="p-4 text-gray-700 text-sm">10-15 min con examinador presencial y otro candidato.</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="space-y-4 mb-6">
                <div className="bg-white border border-gray-200 rounded-xl p-6">
                  <h3 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
                    <BookOpen className="w-5 h-5 text-amber-600" />
                    Reading y Listening: ventaja adaptativa
                  </h3>
                  <p className="text-gray-700">En Linguaskill, la tecnología adaptativa puede hacer que estas secciones parezcan más llevaderas al principio, ya que empiezan con preguntas de nivel medio. Sin embargo, conforme aciertas, la dificultad aumenta rápidamente. En Cambridge tradicional, la dificultad es constante y predecible, lo que permite una preparación más específica.</p>
                </div>

                <div className="bg-white border border-gray-200 rounded-xl p-6">
                  <h3 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
                    <BookOpen className="w-5 h-5 text-amber-600" />
                    Writing y Speaking: formatos distintos
                  </h3>
                  <p className="text-gray-700">El Speaking de Linguaskill puede resultar más cómodo para candidatos tímidos al no requerir interacción humana. Sin embargo, la evaluación por IA exige una pronunciación clara y estructura gramatical precisa. El Writing de Cambridge es más extenso pero permite demostrar mayor riqueza lingüística.</p>
                </div>
              </div>

              <div className="bg-amber-50 border-l-4 border-amber-500 p-6 rounded-r-xl">
                <p className="text-gray-800 font-medium">
                  <strong>Conclusión por destrezas:</strong> Ninguno es objetivamente más fácil. Linguaskill favorece a candidatos con buen nivel general que se adaptan rápido, mientras Cambridge premia la preparación específica del formato concreto.
                </p>
              </div>
            </section>

            {/* Section 3 */}
            <section id="formato" className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                Formato y Duración: Diferencias Clave
              </h2>

              <p className="text-gray-700 mb-6 leading-relaxed">
                El tiempo disponible y el formato del examen influyen directamente en la percepción de dificultad. Muchos candidatos consideran Linguaskill "más fácil" simplemente porque es más corto, pero esta brevedad implica menos margen de error:
              </p>

              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="bg-gradient-to-r from-amber-50 to-orange-50 rounded-xl p-6">
                  <h3 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                    <Clock className="w-5 h-5 text-amber-600" />
                    Linguaskill: ~2 horas
                  </h3>
                  <ul className="space-y-2 text-gray-700 text-sm">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-amber-600 mt-0.5 flex-shrink-0" />
                      <span>Reading & Listening combinado: 60-85 min (adaptativo)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-amber-600 mt-0.5 flex-shrink-0" />
                      <span>Writing: 45 min (2 tareas)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-amber-600 mt-0.5 flex-shrink-0" />
                      <span>Speaking: 15 min (grabado ante ordenador)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-amber-600 mt-0.5 flex-shrink-0" />
                      <span>Resultados: 48 horas o menos</span>
                    </li>
                  </ul>
                </div>
                <div className="bg-gradient-to-r from-amber-50 to-orange-50 rounded-xl p-6">
                  <h3 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                    <Clock className="w-5 h-5 text-amber-600" />
                    Cambridge B2 First: ~3.5 horas
                  </h3>
                  <ul className="space-y-2 text-gray-700 text-sm">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-amber-600 mt-0.5 flex-shrink-0" />
                      <span>Reading & Use of English: 75 min</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-amber-600 mt-0.5 flex-shrink-0" />
                      <span>Writing: 80 min (2 tareas extensas)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-amber-600 mt-0.5 flex-shrink-0" />
                      <span>Listening: 40 min</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-amber-600 mt-0.5 flex-shrink-0" />
                      <span>Speaking: 14 min (con examinador)</span>
                    </li>
                  </ul>
                </div>
              </div>

              <p className="text-gray-700 mb-4 leading-relaxed">
                La duración más corta de Linguaskill es una ventaja para quienes sufren fatiga en exámenes largos, pero también significa que cada respuesta tiene mayor peso relativo en la puntuación final. En un examen Cambridge de 3-4 horas, una mala respuesta se diluye entre muchas otras.
              </p>

              <div className="bg-amber-50 border-l-4 border-amber-500 p-6 rounded-r-xl">
                <p className="text-gray-800 font-medium">
                  <strong>Importante:</strong> En Linguaskill no puedes volver atrás para revisar respuestas en la sección adaptativa. Cada pregunta se presenta una sola vez y tu respuesta es definitiva. En Cambridge tradicional, puedes revisar y cambiar respuestas dentro del tiempo asignado.
                </p>
              </div>
            </section>

            {/* Section 4 */}
            <section id="reconocimiento" className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                Reconocimiento y Validez
              </h2>

              <p className="text-gray-700 mb-6 leading-relaxed">
                Otro factor que influye en la decisión entre ambos exámenes es su reconocimiento. Aunque ambos los emite Cambridge, su aceptación varía según el contexto:
              </p>

              <div className="space-y-4 mb-8">
                <div className="bg-white border border-gray-200 rounded-xl p-6">
                  <h3 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
                    <Award className="w-5 h-5 text-amber-600" />
                    Ámbito universitario en España
                  </h3>
                  <p className="text-gray-700">La CRUE (Conferencia de Rectores) reconoce tanto Linguaskill como los exámenes Cambridge tradicionales. La mayoría de universidades españolas aceptan ambos para acreditar nivel de idiomas. Linguaskill es preferido por muchos estudiantes universitarios por la rapidez en obtener resultados.</p>
                </div>

                <div className="bg-white border border-gray-200 rounded-xl p-6">
                  <h3 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
                    <Award className="w-5 h-5 text-amber-600" />
                    Ámbito laboral e internacional
                  </h3>
                  <p className="text-gray-700">Los certificados Cambridge tradicionales (B2 First, C1 Advanced) gozan de mayor reconocimiento internacional histórico, especialmente en el Reino Unido y países del Commonwealth. Linguaskill es ampliamente utilizado por departamentos de RRHH y empresas multinacionales para procesos de selección internos.</p>
                </div>

                <div className="bg-white border border-gray-200 rounded-xl p-6">
                  <h3 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
                    <Award className="w-5 h-5 text-amber-600" />
                    Oposiciones y función pública
                  </h3>
                  <p className="text-gray-700">Ambas certificaciones son aceptadas en la mayoría de convocatorias de oposiciones en España. Sin embargo, es fundamental verificar cada convocatoria específica, ya que algunas pueden especificar qué certificaciones aceptan exactamente.</p>
                </div>
              </div>

              <div className="bg-amber-50 border-l-4 border-amber-500 p-6 rounded-r-xl">
                <p className="text-gray-800 font-medium">
                  <strong>Certificado Cambridge: validez permanente.</strong> Los exámenes tradicionales de Cambridge no caducan nunca. Linguaskill, al ser una evaluación de nivel puntual, se recomienda actualizar cada 2 años, aunque el certificado no tiene fecha de caducidad oficial.
                </p>
              </div>
            </section>

            {/* Section 5 */}
            <section id="elegir" className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                ¿Cuál Elegir Según Tu Objetivo?
              </h2>

              <p className="text-gray-700 mb-6 leading-relaxed">
                La elección entre Linguaskill y Cambridge tradicional depende de tus necesidades específicas. Aquí te ofrecemos una guía práctica según los escenarios más comunes:
              </p>

              <div className="grid md:grid-cols-2 gap-4 mb-6">
                <div className="bg-amber-50 rounded-xl p-5">
                  <h3 className="font-bold text-amber-900 mb-3">Elige Linguaskill si...</h3>
                  <ul className="space-y-2 text-gray-700 text-sm">
                    <li className="flex items-start gap-2">
                      <ArrowRight className="w-4 h-4 text-amber-600 mt-0.5 flex-shrink-0" />
                      <span>Necesitas resultados rápidos (48 horas)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <ArrowRight className="w-4 h-4 text-amber-600 mt-0.5 flex-shrink-0" />
                      <span>Quieres hacer el examen desde casa</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <ArrowRight className="w-4 h-4 text-amber-600 mt-0.5 flex-shrink-0" />
                      <span>Lo necesitas para la universidad española</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <ArrowRight className="w-4 h-4 text-amber-600 mt-0.5 flex-shrink-0" />
                      <span>No estás seguro de tu nivel exacto</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <ArrowRight className="w-4 h-4 text-amber-600 mt-0.5 flex-shrink-0" />
                      <span>Lo necesitas para un proceso de selección laboral</span>
                    </li>
                  </ul>
                </div>
                <div className="bg-amber-50 rounded-xl p-5">
                  <h3 className="font-bold text-amber-900 mb-3">Elige Cambridge tradicional si...</h3>
                  <ul className="space-y-2 text-gray-700 text-sm">
                    <li className="flex items-start gap-2">
                      <ArrowRight className="w-4 h-4 text-amber-600 mt-0.5 flex-shrink-0" />
                      <span>Quieres un certificado con reconocimiento máximo</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <ArrowRight className="w-4 h-4 text-amber-600 mt-0.5 flex-shrink-0" />
                      <span>Necesitas acreditar nivel para universidades internacionales</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <ArrowRight className="w-4 h-4 text-amber-600 mt-0.5 flex-shrink-0" />
                      <span>Prefieres un formato de examen predecible</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <ArrowRight className="w-4 h-4 text-amber-600 mt-0.5 flex-shrink-0" />
                      <span>Buscas validez permanente sin recomendación de renovación</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <ArrowRight className="w-4 h-4 text-amber-600 mt-0.5 flex-shrink-0" />
                      <span>Necesitas certificación para visados o inmigración</span>
                    </li>
                  </ul>
                </div>
              </div>

              <p className="text-gray-700 mb-4 leading-relaxed">
                En <a href="/examenes-cambridge/" className="text-amber-600 hover:underline font-medium">Impulse English Academy</a> preparamos para ambos tipos de examen. Nuestros profesores te ayudarán a determinar cuál se adapta mejor a tus objetivos y diseñarán un plan de preparación personalizado.
              </p>
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
                        <ChevronUp className="w-5 h-5 text-amber-600 flex-shrink-0" />
                      ) : (
                        <ChevronDown className="w-5 h-5 text-amber-600 flex-shrink-0" />
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

              <div className="bg-gradient-to-r from-amber-50 to-orange-50 rounded-2xl p-8">
                <p className="text-gray-700 mb-4 leading-relaxed">
                  La pregunta "¿Linguaskill es más fácil que Cambridge?" tiene una respuesta clara: <strong>no es más fácil, es diferente</strong>. Ambos exámenes evalúan las mismas competencias lingüísticas con rigor, pero con metodologías distintas. Linguaskill ofrece rapidez, flexibilidad y tecnología adaptativa; los exámenes Cambridge tradicionales aportan reconocimiento histórico y validez permanente sin matices.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  En <a href="/linguaskill/" className="text-amber-600 hover:underline font-medium">nuestra sección de Linguaskill</a> encontrarás toda la información sobre precios, fechas y preparación. También puedes consultar nuestra <a href="/blog/linguaskill-vs-aptis/" className="text-amber-600 hover:underline font-medium">comparativa Linguaskill vs Aptis</a> si estás valorando otras alternativas. Visítanos en <a href="/academia-ingles-barrio-del-pilar/" className="text-amber-600 hover:underline font-medium">nuestra academia en Barrio del Pilar</a> para recibir orientación personalizada.
                </p>
              </div>
            </section>

            {/* CTA */}
            <div className="bg-gradient-to-r from-amber-500 to-amber-700 rounded-2xl p-8 text-center text-white">
              <h3 className="text-2xl font-bold mb-4">¿No sabes qué examen elegir?</h3>
              <p className="text-amber-100 mb-6 max-w-2xl mx-auto">
                En Impulse English Academy te asesoramos gratuitamente y te preparamos para Linguaskill o Cambridge según tus necesidades.
              </p>
              <a
              href="/contacto/"
                className="inline-flex items-center gap-2 bg-white text-amber-600 px-8 py-4 rounded-xl font-semibold hover:bg-amber-50 transition-colors"
              >
                Solicitar asesoramiento
                <ArrowRight className="w-5 h-5" />
              </a>
            </div>

            {/* Related Articles */}
            <section className="mt-16">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Artículos Relacionados</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <a href="/linguaskill/" className="group bg-gray-50 rounded-xl p-6 hover:bg-amber-50 transition-colors">
                  <h3 className="font-semibold text-gray-900 group-hover:text-amber-600 transition-colors mb-2">
                    Linguaskill: Toda la Información
                  </h3>
                  <p className="text-gray-600 text-sm">Guía completa del examen Linguaskill de Cambridge.</p>
                </a>
                <a href="/examenes-cambridge/" className="group bg-gray-50 rounded-xl p-6 hover:bg-amber-50 transition-colors">
                  <h3 className="font-semibold text-gray-900 group-hover:text-amber-600 transition-colors mb-2">
                    Exámenes Cambridge: Hub Completo
                  </h3>
                  <p className="text-gray-600 text-sm">Todos los exámenes Cambridge explicados y comparados.</p>
                </a>
                <a href="/blog/linguaskill-vs-aptis/" className="group bg-gray-50 rounded-xl p-6 hover:bg-amber-50 transition-colors">
                  <h3 className="font-semibold text-gray-900 group-hover:text-amber-600 transition-colors mb-2">
                    Linguaskill vs Aptis
                  </h3>
                  <p className="text-gray-600 text-sm">Otra comparativa clave para decidir tu certificación de inglés.</p>
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
              href="https://www.cambridgeenglish.org/es/exams-and-tests/linguaskill/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-blue-600 hover:underline"
            >
              → Más información en Cambridge English - Linguaskill oficial
            </a>
          </div>
        </section>

        <Footer />
      </div>

      {/* Schema.org Structured Data */}
</>
  );
}
