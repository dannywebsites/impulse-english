import React, { useState, useEffect } from 'react';
import { ChevronRight, Clock, Calendar, ChevronDown, ChevronUp, BookOpen, CheckCircle, Target, ArrowRight, Award } from 'lucide-react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import LeadForm from '../../components/LeadForm';
import Breadcrumb from '../../components/Breadcrumb';
import { generateArticleSchema, businessInfo } from '../../utils/schemaData';
import type { FAQItem } from '../../utils/schemaData';

export const articleSchema = generateArticleSchema({
    headline: "¿Es Difícil el B2 First? Nivel Real y Cómo Prepararte",
    description: "El B2 First tiene una tasa de aprobados del 65-70%. Descubre qué lo hace difícil, qué parte es más complicada y cómo prepararte eficazmente.",
    url: `${businessInfo.url}/blog/es-dificil-b2-first`,
    datePublished: "2025-03-01"
  });

export const faqItems: FAQItem[] = [
    {
      question: "¿El B2 First es más difícil que el IELTS?",
      answer: "Son exámenes diferentes que no se comparan directamente en dificultad. El B2 First evalúa competencia a nivel B2 específicamente, mientras que IELTS ofrece una puntuación en toda la escala. Para un candidato de nivel B2, ambos exámenes tienen una dificultad similar. La diferencia está en el formato: el B2 First incluye Use of English (gramática y vocabulario), que muchos consideran más exigente, mientras que IELTS Academic tiene textos más densos en Reading."
    }

  ,
    {
      question: "¿Cuál es la parte del B2 First que más gente suspende?",
      answer: "Estadísticamente, la parte de Reading and Use of English es donde más candidatos hispanohablantes pierden puntos, especialmente en las secciones de Use of English (partes 1-4). Los phrasal verbs, las transformaciones de palabras (word formation) y las key word transformations son particularmente difíciles porque requieren conocimiento léxico-gramatical preciso que no se puede deducir del contexto."
    },
    {
      question: "¿Puedo aprobar el B2 First sin ir a una academia?",
      answer: "Sí, es posible aprobar por cuenta propia si tienes disciplina, buenos materiales y un nivel de partida B1+ consolidado. Sin embargo, las estadísticas muestran que los candidatos preparados en academias especializadas tienen una tasa de aprobados 15-20 puntos porcentuales superior. La preparación guiada es especialmente valiosa para Writing y Speaking, donde el feedback de un profesor experto es difícil de reemplazar."
    },
    {
      question: "¿Cuántas horas de estudio necesito para el B2 First?",
      answer: "Cambridge estima que se necesitan entre 500-600 horas de aprendizaje acumulado para alcanzar el nivel B2. Si ya tienes nivel B1 sólido, la preparación específica del examen requiere entre 150-200 horas adicionales (equivalente a 3-6 meses estudiando 8-12 horas semanales). Si partes de un nivel A2, necesitarás 300-400 horas más (9-12 meses)."
    },
    {
      question: "¿Qué nivel necesito tener para empezar a prepararme?",
      answer: "El nivel recomendado para empezar la preparación específica del B2 First es un B1 consolidado (equivalente a 120-140 puntos en la Cambridge Scale). Si tu nivel es inferior, conviene primero reforzar las bases antes de abordar material de nivel B2. Un test de nivel gratuito puede ayudarte a determinar tu punto de partida exacto."
    }
  ];

export default function EsDificilB2FirstPage() {
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
              <img src="https://impulseenglish.s3.us-east-1.amazonaws.com/impulsephotos/6E08CD95-47B7-4D36-95C7-FECFB41E3883.JPEG" alt="Dificultad del examen B2 First Cambridge" className="w-full h-full object-cover" loading="eager" />
              <div className="absolute inset-0 bg-gradient-to-br from-accent-blue/95 via-accent-blue/85 to-[#0a3560]/75"></div>
            </div>
            <div className="absolute inset-0 hero-grain opacity-[0.03]"></div>
            <div className="absolute -top-32 -right-32 w-[420px] h-[420px] rounded-full bg-brand-red/[0.04]"></div>
            <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
              <Breadcrumb
                items={[
                  { label: 'Blog', href: '/blog' },
                  { label: '¿Es Difícil el B2 First?' }
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
                  ¿Es Difícil el B2 First? Nivel Real y Cómo Prepararte
                </h1>
                <div className="w-16 h-0.5 bg-brand-red mb-6 animate-hero-fade-up animation-delay-150"></div>
                <p className="font-display text-lg md:text-xl text-white/80 font-light leading-relaxed max-w-3xl animate-hero-fade-up animation-delay-200">
                  Análisis honesto de la dificultad del B2 First: tasas de aprobados, partes más complicadas y estrategias reales para superarlo.
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
                <li><a href="#dificultad-real" className="text-emerald-600 hover:text-emerald-700 transition-colors">→ Dificultad Real: Tasas de Aprobados</a></li>
                <li><a href="#partes-dificiles" className="text-emerald-600 hover:text-emerald-700 transition-colors">→ Las Partes Más Difíciles por Habilidad</a></li>
                <li><a href="#errores-hispanohablantes" className="text-emerald-600 hover:text-emerald-700 transition-colors">→ Errores Comunes de Hispanohablantes</a></li>
                <li><a href="#preparacion-reduce" className="text-emerald-600 hover:text-emerald-700 transition-colors">→ Cómo la Preparación Reduce la Dificultad</a></li>
                <li><a href="#timeline" className="text-emerald-600 hover:text-emerald-700 transition-colors">→ Tiempo Necesario Según tu Nivel</a></li>
                <li><a href="#faq" className="text-emerald-600 hover:text-emerald-700 transition-colors">→ Preguntas Frecuentes</a></li>
              </ul>
            </div>

            {/* Introduction */}
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              "¿Es difícil el B2 First?" es probablemente la pregunta más frecuente entre quienes se plantean obtener esta certificación de Cambridge. La respuesta honesta es: <strong>depende de tu nivel de partida y de cómo te prepares</strong>. Con una tasa de aprobados global del 65-70%, el B2 First no es un examen imposible, pero tampoco es trivial. En este artículo analizamos qué lo hace difícil, cuáles son las partes que más candidatos suspenden y, lo más importante, cómo prepararte para que la dificultad no sea un obstáculo.
            </p>

            {/* Section 1 - Dificultad Real */}
            <section id="dificultad-real" className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                Dificultad Real: ¿Qué Dicen las Estadísticas?
              </h2>

              <p className="text-gray-700 mb-4 leading-relaxed">
                Según datos de Cambridge Assessment English, la tasa de aprobados del B2 First se sitúa entre el <strong>65% y el 70%</strong> a nivel global. Esto significa que aproximadamente 3 de cada 10 candidatos no alcanzan los 160 puntos necesarios para obtener la certificación B2. Sin embargo, esta cifra incluye a candidatos con muy diferente grado de preparación.
              </p>

              <div className="grid md:grid-cols-3 gap-4 mb-6">
                <div className="bg-emerald-50 rounded-xl p-5 text-center">
                  <div className="text-3xl font-bold text-emerald-600 mb-2">65-70%</div>
                  <p className="text-gray-700 text-sm">Tasa de aprobados global del B2 First</p>
                </div>
                <div className="bg-emerald-50 rounded-xl p-5 text-center">
                  <div className="text-3xl font-bold text-emerald-600 mb-2">85-90%</div>
                  <p className="text-gray-700 text-sm">Tasa con preparación específica en academia</p>
                </div>
                <div className="bg-amber-50 rounded-xl p-5 text-center">
                  <div className="text-3xl font-bold text-amber-600 mb-2">40-50%</div>
                  <p className="text-gray-700 text-sm">Tasa sin preparación específica</p>
                </div>
              </div>

              <p className="text-gray-700 mb-4 leading-relaxed">
                La diferencia entre candidatos preparados y no preparados es abismal. Los estudiantes que realizan un curso de preparación específico en una academia, con simulacros de examen y feedback personalizado, alcanzan tasas de aprobados del <strong>85-90%</strong>. En cambio, quienes se presentan sin preparación específica del formato (aunque tengan buen nivel de inglés) se quedan en el 40-50%.
              </p>

              <div className="bg-emerald-50 border-l-4 border-emerald-500 p-6 rounded-r-xl">
                <p className="text-gray-800 font-medium">
                  <strong>Conclusión clave:</strong> El B2 First no es difícil por el nivel de inglés que exige (un B2 sólido es alcanzable), sino por su formato específico. Conocer el tipo de preguntas, los tiempos y las estrategias de cada sección marca la diferencia entre aprobar y suspender.
                </p>
              </div>
            </section>

            {/* Section 2 - Partes más difíciles */}
            <section id="partes-dificiles" className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                Las Partes Más Difíciles del B2 First
              </h2>

              <p className="text-gray-700 mb-6 leading-relaxed">
                No todas las secciones del <a href="/examenes-cambridge/b2-first/" className="text-emerald-600 hover:underline font-medium">B2 First</a> presentan la misma dificultad. Basándonos en las puntuaciones medias de los candidatos hispanohablantes, este es el ranking de dificultad:
              </p>

              <div className="space-y-4 mb-8">
                <div className="bg-red-50 border-l-4 border-red-500 rounded-r-xl p-6">
                  <h3 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
                    <span className="bg-red-500 text-white rounded-full w-7 h-7 flex items-center justify-center text-sm font-bold">1</span>
                    Use of English - La más difícil
                  </h3>
                  <p className="text-gray-700 mb-3">Las partes 1-4 de Reading and Use of English evalúan conocimiento gramatical y léxico preciso. Los phrasal verbs, las collocations y las transformaciones de palabras (word formation) son especialmente problemáticas para hispanohablantes porque no tienen equivalente directo en español.</p>
                  <p className="text-gray-600 text-sm"><strong>Ejemplo típico:</strong> Key word transformation: "I regret not studying harder" → "I wish I _____ harder" (had studied). Requiere dominio de estructuras que en español se expresan de forma muy diferente.</p>
                </div>

                <div className="bg-amber-50 border-l-4 border-amber-500 rounded-r-xl p-6">
                  <h3 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
                    <span className="bg-amber-500 text-white rounded-full w-7 h-7 flex items-center justify-center text-sm font-bold">2</span>
                    Writing - Formato específico
                  </h3>
                  <p className="text-gray-700 mb-3">El Writing no es difícil por el nivel de inglés requerido, sino porque exige conocer el formato exacto de cada tipo de texto. Un essay bien escrito pero que no sigue las convenciones del formato Cambridge perderá puntos significativos en "Communicative Achievement" y "Organisation".</p>
                  <p className="text-gray-600 text-sm"><strong>Error frecuente:</strong> Escribir un essay sin una estructura clara de introducción-argumentos-conclusión o mezclar registro formal e informal en la misma tarea.</p>
                </div>

                <div className="bg-emerald-50 border-l-4 border-emerald-500 rounded-r-xl p-6">
                  <h3 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
                    <span className="bg-emerald-500 text-white rounded-full w-7 h-7 flex items-center justify-center text-sm font-bold">3</span>
                    Speaking - Nervios y formato en parejas
                  </h3>
                  <p className="text-gray-700 mb-3">Muchos candidatos tienen buen nivel oral pero los nervios del examen y el formato en parejas les restan rendimiento. La Parte 3 (tarea colaborativa) requiere interactuar naturalmente con un compañero desconocido, algo que se puede practicar pero genera ansiedad si no se ha ensayado.</p>
                  <p className="text-gray-600 text-sm"><strong>Consejo:</strong> El Speaking es la parte donde más mejora se consigue con práctica específica. Practicar con un compañero usando material de exámenes reales reduce drásticamente la ansiedad.</p>
                </div>

                <div className="bg-blue-50 border-l-4 border-blue-500 rounded-r-xl p-6">
                  <h3 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
                    <span className="bg-blue-500 text-white rounded-full w-7 h-7 flex items-center justify-center text-sm font-bold">4</span>
                    Listening - La más asequible
                  </h3>
                  <p className="text-gray-700 mb-3">El Listening suele ser la sección con mejores resultados entre hispanohablantes, ya que las grabaciones se reproducen dos veces y el nivel de comprensión requerido es intermedio-alto. Los acentos son claros y el ritmo es moderado.</p>
                  <p className="text-gray-600 text-sm"><strong>Atención:</strong> La Parte 2 (completar frases) requiere escribir palabras exactas que oyes, lo que puede ser complicado si tu oído no está entrenado en grafía inglesa.</p>
                </div>
              </div>
            </section>

            {/* Section 3 - Errores hispanohablantes */}
            <section id="errores-hispanohablantes" className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                Errores Más Comunes de los Hispanohablantes
              </h2>

              <p className="text-gray-700 mb-6 leading-relaxed">
                Los candidatos españoles y latinoamericanos comparten patrones de error predecibles que, una vez identificados, se pueden corregir con práctica dirigida. Estos son los más frecuentes:
              </p>

              <div className="grid md:grid-cols-2 gap-4 mb-6">
                <div className="bg-white border border-gray-200 rounded-xl p-5">
                  <h3 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-red-500" />
                    Gramática
                  </h3>
                  <ul className="space-y-2 text-gray-700 text-sm">
                    <li>• Confusión presente perfecto vs pasado simple</li>
                    <li>• Mal uso de artículos (the/a/an/zero article)</li>
                    <li>• Orden incorrecto de adjetivos</li>
                    <li>• Errores con preposiciones dependientes</li>
                    <li>• Confusión entre "make" y "do"</li>
                  </ul>
                </div>
                <div className="bg-white border border-gray-200 rounded-xl p-5">
                  <h3 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-red-500" />
                    Vocabulario
                  </h3>
                  <ul className="space-y-2 text-gray-700 text-sm">
                    <li>• Falsos amigos (actually, eventually, sensible...)</li>
                    <li>• Desconocimiento de phrasal verbs comunes</li>
                    <li>• Vocabulario demasiado básico para nivel B2</li>
                    <li>• Calcos del español en expresiones idiomáticas</li>
                    <li>• Falta de collocations naturales</li>
                  </ul>
                </div>
                <div className="bg-white border border-gray-200 rounded-xl p-5">
                  <h3 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-red-500" />
                    Speaking
                  </h3>
                  <ul className="space-y-2 text-gray-700 text-sm">
                    <li>• Pronunciación de vocales (ship vs sheep)</li>
                    <li>• Ausencia de entonación natural</li>
                    <li>• Respuestas demasiado cortas o demasiado largas</li>
                    <li>• No interactuar con el compañero en Parte 3</li>
                  </ul>
                </div>
                <div className="bg-white border border-gray-200 rounded-xl p-5">
                  <h3 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-red-500" />
                    Writing
                  </h3>
                  <ul className="space-y-2 text-gray-700 text-sm">
                    <li>• Párrafos sin estructura clara</li>
                    <li>• Registro inapropiado para el tipo de texto</li>
                    <li>• Falta de conectores y cohesión</li>
                    <li>• No responder a todos los puntos del enunciado</li>
                  </ul>
                </div>
              </div>

              <div className="bg-amber-50 border-l-4 border-amber-500 p-6 rounded-r-xl">
                <p className="text-gray-800">
                  <strong>Dato útil:</strong> Los errores de Use of English causan más suspensos que los errores de Speaking. Si tienes tiempo limitado para prepararte, prioriza los phrasal verbs, word formation y key word transformations antes que cualquier otra habilidad.
                </p>
              </div>
            </section>

            {/* Section 4 - Preparación reduce dificultad */}
            <section id="preparacion-reduce" className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                Cómo la Preparación Adecuada Reduce la Dificultad
              </h2>

              <p className="text-gray-700 mb-6 leading-relaxed">
                La diferencia entre un candidato preparado y uno que no lo está no es el nivel de inglés: es el conocimiento del formato. Aquí tienes las estrategias que más impacto tienen en reducir la dificultad percibida del examen:
              </p>

              <div className="space-y-4 mb-8">
                <div className="bg-white border border-gray-200 rounded-xl p-6">
                  <h3 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
                    <Target className="w-5 h-5 text-emerald-600" />
                    Simulacros completos cronometrados
                  </h3>
                  <p className="text-gray-700">Realiza al menos 4-6 exámenes completos en condiciones reales antes del día del examen. La familiaridad con el formato elimina la incertidumbre y te permite concentrarte en las respuestas en lugar de en entender las instrucciones. Los candidatos que hacen simulacros reportan un 30% menos de ansiedad el día del examen.</p>
                </div>

                <div className="bg-white border border-gray-200 rounded-xl p-6">
                  <h3 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
                    <Target className="w-5 h-5 text-emerald-600" />
                    Preparación guiada con feedback
                  </h3>
                  <p className="text-gray-700">Un profesor especializado en Cambridge identifica tus errores específicos y te da estrategias personalizadas. En nuestra <a href="/metodologia/" className="text-emerald-600 hover:underline">metodología</a>, trabajamos con análisis individualizado de cada alumno para optimizar su preparación y maximizar puntuación en las áreas con más potencial de mejora.</p>
                </div>

                <div className="bg-white border border-gray-200 rounded-xl p-6">
                  <h3 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
                    <Target className="w-5 h-5 text-emerald-600" />
                    Estrategia de examen
                  </h3>
                  <p className="text-gray-700">Saber cómo distribuir el tiempo, cuándo adivinar, cómo abordar cada tipo de pregunta y qué técnicas usar para Reading vs Use of English. Estas estrategias se aprenden con práctica y orientación, no con solo estudiar gramática. Un buen curso de preparación dedica al menos el 30% del tiempo a técnicas de examen.</p>
                </div>
              </div>
            </section>

            {/* Section 5 - Timeline */}
            <section id="timeline" className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                Tiempo Necesario Según tu Nivel de Partida
              </h2>

              <p className="text-gray-700 mb-6 leading-relaxed">
                El tiempo que necesitas para preparar el B2 First depende fundamentalmente de tu nivel actual de inglés. Aquí tienes una estimación realista basada en la experiencia con cientos de candidatos:
              </p>

              <div className="overflow-x-auto mb-8">
                <table className="w-full border-collapse bg-white rounded-xl overflow-hidden shadow-lg">
                  <thead>
                    <tr className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white">
                      <th className="text-left p-4 font-semibold">Nivel de partida</th>
                      <th className="text-left p-4 font-semibold">Tiempo estimado</th>
                      <th className="text-left p-4 font-semibold">Horas semanales</th>
                      <th className="text-left p-4 font-semibold">Dificultad percibida</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="bg-gray-50">
                      <td className="p-4 font-medium text-gray-900">B1+ sólido</td>
                      <td className="p-4 text-gray-700">3-4 meses</td>
                      <td className="p-4 text-gray-700">8-10 horas</td>
                      <td className="p-4 text-emerald-600 font-medium">Moderada</td>
                    </tr>
                    <tr className="bg-white">
                      <td className="p-4 font-medium text-gray-900">B1 medio</td>
                      <td className="p-4 text-gray-700">5-7 meses</td>
                      <td className="p-4 text-gray-700">8-12 horas</td>
                      <td className="p-4 text-amber-600 font-medium">Media-alta</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="p-4 font-medium text-gray-900">A2 avanzado</td>
                      <td className="p-4 text-gray-700">9-12 meses</td>
                      <td className="p-4 text-gray-700">10-15 horas</td>
                      <td className="p-4 text-red-600 font-medium">Alta</td>
                    </tr>
                    <tr className="bg-white">
                      <td className="p-4 font-medium text-gray-900">A2 básico o inferior</td>
                      <td className="p-4 text-gray-700">12-18 meses</td>
                      <td className="p-4 text-gray-700">10-15 horas</td>
                      <td className="p-4 text-red-600 font-medium">Muy alta</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="bg-emerald-50 border-l-4 border-emerald-500 p-6 rounded-r-xl">
                <p className="text-gray-800 font-medium">
                  <strong>Recomendación:</strong> Si tu nivel actual es A2 o inferior, considera preparar primero el B1 Preliminary como paso intermedio. Obtener el B1 te dará confianza, experiencia con el formato Cambridge y una base sólida desde la que preparar el B2 con muchas más garantías de éxito.
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
                  El <a href="/examenes-cambridge/b2-first/" className="text-emerald-600 hover:underline font-medium">B2 First</a> no es un examen fácil, pero tampoco es inalcanzable. Con una tasa de aprobados del 65-70% global y del 85-90% entre candidatos bien preparados, la clave está claramente en la preparación. Los hispanohablantes tienen retos específicos, especialmente en Use of English, pero estos son completamente superables con práctica dirigida y constancia.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Si quieres prepararte con las mejores garantías, nuestros <a href="/cursos-ingles/adultos/" className="text-emerald-600 hover:underline font-medium">cursos para adultos</a> combinan nuestra <a href="/metodologia/" className="text-emerald-600 hover:underline font-medium">metodología probada</a> con simulacros reales y feedback personalizado. No dejes que el miedo a la dificultad te impida obtener un certificado que puede transformar tu carrera profesional.
                </p>
              </div>
            </section>

            {/* CTA */}
            <div className="bg-gradient-to-r from-emerald-600 to-teal-600 rounded-2xl p-8 text-center text-white">
              <h3 className="text-2xl font-bold mb-4">¿Preparado para superar el B2 First?</h3>
              <p className="text-emerald-100 mb-6 max-w-2xl mx-auto">
                En Impulse English Academy convertimos la dificultad del B2 First en una ventaja competitiva. Preparación intensiva con resultados comprobados.
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
                <a href="/metodologia/" className="group bg-gray-50 rounded-xl p-6 hover:bg-emerald-50 transition-colors">
                  <h3 className="font-semibold text-gray-900 group-hover:text-emerald-600 transition-colors mb-2">
                    Nuestra Metodología
                  </h3>
                  <p className="text-gray-600 text-sm">Descubre cómo preparamos a nuestros alumnos para aprobar Cambridge.</p>
                </a>
                <a href="/cursos-ingles/adultos/" className="group bg-gray-50 rounded-xl p-6 hover:bg-emerald-50 transition-colors">
                  <h3 className="font-semibold text-gray-900 group-hover:text-emerald-600 transition-colors mb-2">
                    Cursos de Inglés para Adultos
                  </h3>
                  <p className="text-gray-600 text-sm">Programas de preparación Cambridge adaptados a tu nivel y objetivos.</p>
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
      </div>

      {/* Schema.org Structured Data */}
</>
  );
}