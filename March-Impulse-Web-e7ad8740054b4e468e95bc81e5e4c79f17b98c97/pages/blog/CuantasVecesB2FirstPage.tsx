import React, { useState, useEffect } from 'react';
import { ChevronRight, Clock, Calendar, ChevronDown, ChevronUp, BookOpen, CheckCircle, Target, ArrowRight, Award } from 'lucide-react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import LeadForm from '../../components/LeadForm';
import Breadcrumb from '../../components/Breadcrumb';
import { generateArticleSchema, businessInfo } from '../../utils/schemaData';

export const articleSchema = generateArticleSchema({
    headline: "¿Cuántas Veces Puedo Presentarme al B2 First?",
    description: "No hay límite de intentos para el B2 First. Puedes presentarte tantas veces como quieras. Conoce los plazos, costes y estrategias para el segundo intento.",
    url: `${businessInfo.url}/blog/cuantas-veces-b2-first`,
    datePublished: "2025-03-01"
  });

export const faqItems = [
    {
      question: "¿Hay un período de espera entre intentos del B2 First?",
      answer: "No, Cambridge no establece ningún período de espera obligatorio entre intentos. Técnicamente puedes inscribirte en la siguiente convocatoria disponible, aunque sea al mes siguiente. Sin embargo, la recomendación de expertos es esperar al menos 2-3 meses para tener tiempo de trabajar las áreas débiles y mejorar realmente tu nivel antes de volver a presentarte."
    }

  ,
    {
      question: "¿Puedo repetir solo la parte de Speaking si es donde he fallado?",
      answer: "No, el B2 First no permite retomar partes individuales del examen. Si no alcanzas los 160 puntos necesarios, debes volver a realizar las cuatro partes completas: Reading and Use of English, Writing, Listening y Speaking. No existe modalidad de examen parcial ni reválida de secciones específicas en los exámenes Cambridge de este tipo."
    },
    {
      question: "¿Cuánto cuesta cada intento del B2 First?",
      answer: "El precio del B2 First en España oscila entre 210 y 230 euros por intento, dependiendo del centro examinador y la modalidad (papel o digital). Cada intento se paga completo; no hay descuentos para repetidores. Además, las inscripciones tardías pueden tener un recargo de 50-60 euros adicionales, así que planifica con antelación para evitar costes extra."
    },
    {
      question: "¿Las puntuaciones de intentos anteriores caducan o se eliminan?",
      answer: "No, Cambridge conserva el registro de todos tus intentos y resultados indefinidamente. Cada examen genera su propio Statement of Results con puntuación detallada. Si apruebas en el segundo o tercer intento, tu certificado es exactamente igual de válido que si hubieras aprobado a la primera. Las instituciones no ven el historial de intentos, solo el certificado que presentes."
    },
    {
      question: "¿Debería considerar presentarme al B1 Preliminary en lugar de repetir el B2?",
      answer: "Si tu puntuación fue muy baja (por debajo de 140), puede ser buena idea considerar el B1 Preliminary primero. Un B1 te dará un certificado válido, experiencia con el formato Cambridge y una base sólida para preparar el B2 con más confianza. Si obtuviste entre 140-159 (certificado B1), la decisión depende de tus necesidades: si necesitas específicamente un B2, sigue preparándote para el First."
    }
  ];

export default function CuantasVecesB2FirstPage() {
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
              <img src="https://impulseenglish.s3.us-east-1.amazonaws.com/impulsephotos/6E08CD95-47B7-4D36-95C7-FECFB41E3883.JPEG" alt="Intentos y repeticiones del examen B2 First Cambridge" className="w-full h-full object-cover" loading="eager" />
              <div className="absolute inset-0 bg-gradient-to-br from-accent-blue/95 via-accent-blue/85 to-[#0a3560]/75"></div>
            </div>
            <div className="absolute inset-0 hero-grain opacity-[0.03]"></div>
            <div className="absolute -top-32 -right-32 w-[420px] h-[420px] rounded-full bg-brand-red/[0.04]"></div>
            <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
              <Breadcrumb
                items={[
                  { label: 'Blog', href: '/blog' },
                  { label: 'Cuántas Veces B2 First' }
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
                  ¿Cuántas Veces Puedo Presentarme al B2 First?
                </h1>
                <div className="w-16 h-0.5 bg-brand-red mb-6 animate-hero-fade-up animation-delay-150"></div>
                <p className="font-display text-lg md:text-xl text-white/80 font-light leading-relaxed max-w-3xl animate-hero-fade-up animation-delay-200">
                  No hay límite de intentos. Descubre los costes, plazos y las mejores estrategias para aprobar en tu segundo intento.
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
                <li><a href="#sin-limite" className="text-emerald-600 hover:text-emerald-700 transition-colors">→ Sin Límite de Intentos</a></li>
                <li><a href="#coste" className="text-emerald-600 hover:text-emerald-700 transition-colors">→ Coste por Intento</a></li>
                <li><a href="#estrategia-retake" className="text-emerald-600 hover:text-emerald-700 transition-colors">→ Estrategia para el Segundo Intento</a></li>
                <li><a href="#mejorar-entre-intentos" className="text-emerald-600 hover:text-emerald-700 transition-colors">→ Qué Mejorar Entre Intentos</a></li>
                <li><a href="#otro-examen" className="text-emerald-600 hover:text-emerald-700 transition-colors">→ ¿Considerar Otro Nivel de Examen?</a></li>
                <li><a href="#faq" className="text-emerald-600 hover:text-emerald-700 transition-colors">→ Preguntas Frecuentes</a></li>
              </ul>
            </div>

            {/* Introduction */}
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              Si estás pensando en presentarte al <a href="/examenes-cambridge/b2-first" className="text-emerald-600 hover:underline font-medium">B2 First de Cambridge</a> o si ya te has presentado y no has obtenido el resultado esperado, una de las primeras preguntas que surge es: ¿cuántas veces puedo intentarlo? La buena noticia es clara: <strong>no hay límite de intentos</strong>. Puedes presentarte tantas veces como desees, sin restricción alguna por parte de Cambridge. Cada intento es independiente y tu certificado final será igual de válido, independientemente de si es tu primer o quinto intento.
            </p>

            {/* Section 1 - Sin límite */}
            <section id="sin-limite" className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                Política de Cambridge: Sin Límite de Intentos
              </h2>

              <p className="text-gray-700 mb-4 leading-relaxed">
                Cambridge Assessment English no establece ningún límite en el número de veces que un candidato puede presentarse a cualquiera de sus exámenes, incluido el B2 First. Tampoco existe un período de espera obligatorio entre intentos. Puedes inscribirte en la siguiente convocatoria disponible si así lo deseas.
              </p>

              <div className="grid md:grid-cols-2 gap-4 mb-6">
                <div className="bg-emerald-50 rounded-xl p-5">
                  <h3 className="font-bold text-emerald-900 mb-3 flex items-center gap-2">
                    <CheckCircle className="w-5 h-5" />
                    Lo que permite Cambridge
                  </h3>
                  <ul className="space-y-2 text-gray-700 text-sm">
                    <li>• Presentarte sin límite de veces</li>
                    <li>• Inscribirte en convocatorias consecutivas</li>
                    <li>• Presentarte al mismo examen el mes siguiente</li>
                    <li>• Combinar con otros niveles Cambridge</li>
                    <li>• Conservar el mejor resultado de todos los intentos</li>
                  </ul>
                </div>
                <div className="bg-amber-50 rounded-xl p-5">
                  <h3 className="font-bold text-amber-900 mb-3 flex items-center gap-2">
                    <Award className="w-5 h-5" />
                    Lo que debes tener en cuenta
                  </h3>
                  <ul className="space-y-2 text-gray-700 text-sm">
                    <li>• Cada intento se paga completo (210-230 EUR)</li>
                    <li>• Debes realizar las 4 partes completas</li>
                    <li>• No hay retoma parcial de secciones</li>
                    <li>• Las plazas son limitadas por convocatoria</li>
                    <li>• Las inscripciones tardías tienen recargo</li>
                  </ul>
                </div>
              </div>

              <div className="bg-emerald-50 border-l-4 border-emerald-500 p-6 rounded-r-xl">
                <p className="text-gray-800 font-medium">
                  <strong>Dato tranquilizador:</strong> Nadie verá cuántas veces te has presentado. Tu certificado no indica si es tu primer o quinto intento. Las universidades y empresas reciben únicamente el certificado y la puntuación final, sin historial de intentos anteriores.
                </p>
              </div>
            </section>

            {/* Section 2 - Coste */}
            <section id="coste" className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                Coste por Intento: ¿Cuánto Cuesta Repetir?
              </h2>

              <p className="text-gray-700 mb-6 leading-relaxed">
                Cada intento del B2 First tiene el mismo coste que el primero. No existen descuentos para repetidores ni tarifas reducidas por intentos anteriores. Es importante planificarlo económicamente:
              </p>

              <div className="overflow-x-auto mb-8">
                <table className="w-full border-collapse bg-white rounded-xl overflow-hidden shadow-lg">
                  <thead>
                    <tr className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white">
                      <th className="text-left p-4 font-semibold">Concepto</th>
                      <th className="text-left p-4 font-semibold">Precio aproximado</th>
                      <th className="text-left p-4 font-semibold">Notas</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="bg-gray-50">
                      <td className="p-4 font-medium text-gray-900">Inscripción B2 First (papel)</td>
                      <td className="p-4 text-gray-700">220-230 EUR</td>
                      <td className="p-4 text-gray-700 text-sm">Resultados en 4-6 semanas</td>
                    </tr>
                    <tr className="bg-white">
                      <td className="p-4 font-medium text-gray-900">Inscripción B2 First (digital)</td>
                      <td className="p-4 text-gray-700">210-220 EUR</td>
                      <td className="p-4 text-gray-700 text-sm">Resultados en 2-3 semanas</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="p-4 font-medium text-gray-900">Recargo inscripción tardía</td>
                      <td className="p-4 text-gray-700">+50-60 EUR</td>
                      <td className="p-4 text-gray-700 text-sm">Evitable inscribiéndose con antelación</td>
                    </tr>
                    <tr className="bg-white">
                      <td className="p-4 font-medium text-gray-900">2 intentos (total)</td>
                      <td className="p-4 text-amber-600 font-bold">420-460 EUR</td>
                      <td className="p-4 text-gray-700 text-sm">Sin contar preparación adicional</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="p-4 font-medium text-gray-900">3 intentos (total)</td>
                      <td className="p-4 text-red-600 font-bold">630-690 EUR</td>
                      <td className="p-4 text-gray-700 text-sm">Considerar alternativas si llegas aquí</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="bg-amber-50 border-l-4 border-amber-500 p-6 rounded-r-xl">
                <p className="text-gray-800">
                  <strong>Consejo económico:</strong> Antes de pagar un segundo intento, invierte en preparación adicional. Un curso de refuerzo de 2-3 meses (250-400 EUR) puede ser más rentable que pagar 2-3 intentos adicionales sin mejorar las áreas débiles. La inversión en preparación tiene mucho mejor retorno que la repetición sin cambios.
                </p>
              </div>
            </section>

            {/* Section 3 - Estrategia retake */}
            <section id="estrategia-retake" className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                Estrategia para Aprobar en el Segundo Intento
              </h2>

              <p className="text-gray-700 mb-6 leading-relaxed">
                El segundo intento tiene una ventaja enorme sobre el primero: ya conoces el examen, ya sabes qué se siente, y tienes un diagnóstico detallado de tus debilidades gracias al Statement of Results del primer intento. Aprovéchalo al máximo con esta estrategia:
              </p>

              <div className="space-y-4 mb-8">
                <div className="bg-white border border-gray-200 rounded-xl p-6">
                  <h3 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
                    <Target className="w-5 h-5 text-emerald-600" />
                    1. Analiza tu Statement of Results
                  </h3>
                  <p className="text-gray-700">Tu informe de resultados muestra la puntuación detallada por habilidad (Reading, Writing, Listening, Speaking y Use of English). Identifica cuál de las cuatro competencias te ha bajado más la media. Si hay una diferencia de más de 10 puntos entre tu mejor y peor habilidad, esa habilidad débil es donde debes concentrar el 50% de tu esfuerzo.</p>
                </div>

                <div className="bg-white border border-gray-200 rounded-xl p-6">
                  <h3 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
                    <Target className="w-5 h-5 text-emerald-600" />
                    2. Espera el tiempo adecuado
                  </h3>
                  <p className="text-gray-700">La recomendación es esperar <strong>2-3 meses</strong> antes de presentarte de nuevo. Este tiempo es suficiente para trabajar las áreas débiles, hacer simulacros adicionales y ganar confianza. Presentarse demasiado pronto (menos de 1 mes) rara vez produce mejora suficiente, y esperar demasiado (más de 6 meses) puede hacer que pierdas la familiaridad con el formato.</p>
                </div>

                <div className="bg-white border border-gray-200 rounded-xl p-6">
                  <h3 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
                    <Target className="w-5 h-5 text-emerald-600" />
                    3. Cambia tu método de preparación
                  </h3>
                  <p className="text-gray-700">Si te preparaste solo la primera vez, considera unirte a un curso o contratar un tutor para el segundo intento. Si ya fuiste a una academia, complementa con práctica individual más intensiva en tus áreas débiles. El punto clave es: <strong>no repitas exactamente lo que hiciste la primera vez</strong> esperando resultados diferentes.</p>
                </div>

                <div className="bg-white border border-gray-200 rounded-xl p-6">
                  <h3 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
                    <Target className="w-5 h-5 text-emerald-600" />
                    4. Aprovecha la ventaja de la experiencia
                  </h3>
                  <p className="text-gray-700">Ya sabes cómo es el día del examen, la dinámica del Speaking en parejas, la presión del tiempo en Reading. Esa familiaridad reduce significativamente la ansiedad, que es uno de los factores que más afectan al rendimiento. Los candidatos en su segundo intento suelen rendir un 5-10% mejor solo por la reducción de nervios.</p>
                </div>
              </div>
            </section>

            {/* Section 4 - Mejorar entre intentos */}
            <section id="mejorar-entre-intentos" className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                Qué Mejorar Entre Intentos: Plan de Acción
              </h2>

              <p className="text-gray-700 mb-6 leading-relaxed">
                El período entre intentos es crucial. No se trata de estudiar más, sino de estudiar mejor. Aquí tienes un plan concreto según tu puntuación en el primer intento:
              </p>

              <div className="grid md:grid-cols-2 gap-4 mb-6">
                <div className="bg-emerald-50 rounded-xl p-5">
                  <h3 className="font-bold text-emerald-900 mb-3">Si obtuviste 150-159 puntos</h3>
                  <p className="text-gray-700 text-sm mb-3">Estás muy cerca. Necesitas un ajuste fino, no una revisión completa.</p>
                  <ul className="space-y-1 text-gray-700 text-sm">
                    <li>• Refuerza tu punto más débil (2-3 puntos extra bastan)</li>
                    <li>• Haz 2-3 simulacros completos más</li>
                    <li>• Trabaja gestión del tiempo si te faltó</li>
                    <li>• <strong>Tiempo recomendado: 6-8 semanas</strong></li>
                  </ul>
                </div>
                <div className="bg-amber-50 rounded-xl p-5">
                  <h3 className="font-bold text-amber-900 mb-3">Si obtuviste 140-149 puntos</h3>
                  <p className="text-gray-700 text-sm mb-3">Necesitas mejorar 10-20 puntos. Requiere trabajo más profundo.</p>
                  <ul className="space-y-1 text-gray-700 text-sm">
                    <li>• Identifica 2 habilidades débiles y trabájalas a fondo</li>
                    <li>• Amplía vocabulario B2 y phrasal verbs</li>
                    <li>• Practica Writing con feedback profesional</li>
                    <li>• <strong>Tiempo recomendado: 2-3 meses</strong></li>
                  </ul>
                </div>
                <div className="bg-red-50 rounded-xl p-5">
                  <h3 className="font-bold text-red-900 mb-3">Si obtuviste menos de 140 puntos</h3>
                  <p className="text-gray-700 text-sm mb-3">La distancia es significativa. Necesitas refuerzo general.</p>
                  <ul className="space-y-1 text-gray-700 text-sm">
                    <li>• Refuerza gramática y vocabulario desde la base</li>
                    <li>• Considera un curso intensivo de preparación</li>
                    <li>• Aumenta la exposición diaria al inglés</li>
                    <li>• <strong>Tiempo recomendado: 3-6 meses</strong></li>
                  </ul>
                </div>
                <div className="bg-blue-50 rounded-xl p-5">
                  <h3 className="font-bold text-blue-900 mb-3">Si quieres mejorar tu Grade</h3>
                  <p className="text-gray-700 text-sm mb-3">Ya aprobaste pero quieres Grade A (C1).</p>
                  <ul className="space-y-1 text-gray-700 text-sm">
                    <li>• Trabaja con material de nivel C1 Advanced</li>
                    <li>• Perfecciona Writing y Speaking</li>
                    <li>• Amplía vocabulario avanzado</li>
                    <li>• <strong>Tiempo recomendado: 2-4 meses</strong></li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Section 5 - Considerar otro nivel */}
            <section id="otro-examen" className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                ¿Cuándo Considerar un Nivel Diferente de Examen?
              </h2>

              <p className="text-gray-700 mb-4 leading-relaxed">
                Aunque puedes repetir el B2 First sin límite, a veces es más inteligente considerar un cambio de estrategia. Hay dos escenarios donde un examen diferente puede ser más adecuado:
              </p>

              <div className="space-y-4 mb-8">
                <div className="bg-white border border-gray-200 rounded-xl p-6">
                  <h3 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
                    <BookOpen className="w-5 h-5 text-emerald-600" />
                    Considerar el B1 Preliminary primero
                  </h3>
                  <p className="text-gray-700">Si has suspendido el B2 First dos veces con puntuaciones por debajo de 140, tu nivel real puede estar más cerca del B1 que del B2. Presentarte al B1 Preliminary te dará un certificado válido (que no caduca), experiencia con el formato Cambridge y motivación para seguir mejorando. Después podrás preparar el B2 First con bases mucho más sólidas.</p>
                </div>

                <div className="bg-white border border-gray-200 rounded-xl p-6">
                  <h3 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
                    <BookOpen className="w-5 h-5 text-emerald-600" />
                    Considerar Linguaskill como alternativa
                  </h3>
                  <p className="text-gray-700">Si necesitas acreditar tu nivel de inglés urgentemente y no puedes esperar a prepararte más para el B2 First, el <a href="/examenes-cambridge/linguaskill" className="text-emerald-600 hover:underline">Linguaskill</a> es una alternativa más flexible. Es más barato (~80-100 EUR), tiene resultados en 48 horas y se puede realizar con mucha más frecuencia. Sin embargo, el resultado caduca a los 2 años, a diferencia del certificado B2 First que es permanente.</p>
                </div>
              </div>

              <div className="bg-emerald-50 border-l-4 border-emerald-500 p-6 rounded-r-xl">
                <p className="text-gray-800 font-medium">
                  <strong>Nuestra recomendación:</strong> Si necesitas el B2 para un objetivo específico (oposiciones, universidad, trabajo), invierte en preparación de calidad antes de repetir. Un buen curso de 2-3 meses es más rentable que 2-3 intentos fallidos. Consulta nuestro <a href="/blog/registro-cambridge" className="text-emerald-600 hover:underline">proceso de registro</a> para planificar tu próximo intento.
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
                  No hay límite de intentos para el <a href="/examenes-cambridge/b2-first" className="text-emerald-600 hover:underline font-medium">B2 First</a>, y eso es una tranquilidad. Pero la clave no está en repetir mecánicamente, sino en utilizar cada intento como una oportunidad de aprendizaje. Analiza tus resultados, invierte en preparación específica para tus áreas débiles y espera el tiempo necesario para mejorar realmente antes de volver a presentarte.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Si necesitas apoyo para preparar tu próximo intento, nuestros <a href="/cursos-ingles/adultos" className="text-emerald-600 hover:underline font-medium">cursos para adultos</a> están diseñados para identificar y trabajar exactamente las áreas que necesitas mejorar. Consulta también el <a href="/blog/registro-cambridge" className="text-emerald-600 hover:underline font-medium">proceso de registro de Cambridge</a> para planificar las fechas de tu próxima convocatoria.
                </p>
              </div>
            </section>

            {/* CTA */}
            <div className="bg-gradient-to-r from-emerald-600 to-teal-600 rounded-2xl p-8 text-center text-white">
              <h3 className="text-2xl font-bold mb-4">¿Preparando tu segundo intento?</h3>
              <p className="text-emerald-100 mb-6 max-w-2xl mx-auto">
                En Impulse English Academy analizamos tus resultados anteriores y diseñamos un plan de preparación personalizado para que apruebes en tu próximo intento.
              </p>
              <a
              href="/contacto"
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
                <a href="/examenes-cambridge/b2-first" className="group bg-gray-50 rounded-xl p-6 hover:bg-emerald-50 transition-colors">
                  <h3 className="font-semibold text-gray-900 group-hover:text-emerald-600 transition-colors mb-2">
                    Cambridge B2 First: Guía Completa
                  </h3>
                  <p className="text-gray-600 text-sm">Todo sobre el examen B2 First: estructura, formato y preparación.</p>
                </a>
                <a href="/blog/registro-cambridge" className="group bg-gray-50 rounded-xl p-6 hover:bg-emerald-50 transition-colors">
                  <h3 className="font-semibold text-gray-900 group-hover:text-emerald-600 transition-colors mb-2">
                    Cómo Registrarse en Cambridge
                  </h3>
                  <p className="text-gray-600 text-sm">Guía paso a paso para inscribirte en tu examen Cambridge.</p>
                </a>
                <a href="/examenes-cambridge/linguaskill" className="group bg-gray-50 rounded-xl p-6 hover:bg-emerald-50 transition-colors">
                  <h3 className="font-semibold text-gray-900 group-hover:text-emerald-600 transition-colors mb-2">
                    Linguaskill: Alternativa Rápida
                  </h3>
                  <p className="text-gray-600 text-sm">Conoce esta alternativa de Cambridge con resultados en 48 horas.</p>
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