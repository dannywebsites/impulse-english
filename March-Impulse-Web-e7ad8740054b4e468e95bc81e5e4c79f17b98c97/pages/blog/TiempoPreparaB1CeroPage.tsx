import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Clock, Calendar, ChevronDown, ChevronUp, BookOpen, CheckCircle, Target, ArrowRight, Award } from 'lucide-react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import LeadForm from '../../components/LeadForm';
import Breadcrumb from '../../components/Breadcrumb';
import SchemaMarkup from '../../components/SchemaMarkup';
import SEOHead from '../../components/SEOHead';
import { generateArticleSchema, businessInfo } from '../../utils/schemaData';

export default function TiempoPreparaB1CeroPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = 'Preparar B1 Cambridge desde Cero: Tiempo y Plan de Estudio 2026 | Impulse English Academy La Vaguada – Barrio del Pilar';
  }, []);

  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const articleSchema = generateArticleSchema({
    headline: "¿Cuánto Tiempo se Tarda en Preparar el B1 desde Cero?",
    description: "Preparar el B1 desde cero lleva 12-18 meses con estudio regular. Desde nivel A2: 10-12 semanas. Plan detallado y horas necesarias por nivel.",
    url: `${businessInfo.url}/blog/tiempo-preparar-b1-cero`,
    datePublished: "2025-03-01"
  });

  const faqItems = [
    {
      question: "¿Puedo preparar el B1 en 3 meses desde cero?",
      answer: "Desde cero absoluto, 3 meses es prácticamente imposible para alcanzar un B1 sólido. Necesitarías dedicar más de 6 horas diarias, lo cual no es sostenible ni efectivo para el aprendizaje. Desde un A2 consolidado, sí es posible en 3 meses con estudio intensivo (10-12 horas semanales)."
    },
    {
      question: "¿Cuántas horas al día debo estudiar?",
      answer: "La clave no es la cantidad sino la constancia. Estudiar 1-2 horas diarias de forma consistente es más efectivo que sesiones intensivas esporádicas. Para progreso óptimo, combina 45 minutos de estudio formal (gramática, ejercicios) con 30-45 minutos de exposición natural (podcasts, series, lectura)."
    },
    {
      question: "¿Es mejor estudiar por mi cuenta o en academia?",
      answer: "La combinación es lo más efectivo. Una academia proporciona estructura, corrección profesional del speaking y writing, y simulacros de examen. El estudio autónomo complementa con inmersión diaria. Desde cero, una academia es especialmente importante para construir bases sólidas de gramática y pronunciación."
    },
    {
      question: "¿Qué pasa si ya tengo algo de inglés pero no sé mi nivel?",
      answer: "Realiza un test de nivel gratuito online (Cambridge ofrece uno en su web). Esto te dará una estimación realista de tu punto de partida. Muchas personas descubren que tienen un nivel A2 funcional sin saberlo, lo que reduce significativamente el tiempo necesario para preparar el B1."
    },
    {
      question: "¿A qué edad es más difícil preparar el B1 desde cero?",
      answer: "No existe una edad límite para aprender inglés. Los adultos tienen ventajas como la capacidad analítica y la motivación clara. Si bien los niños aprenden pronunciación más naturalmente, los adultos compensan con estrategias de estudio más eficientes. Estudiantes de 40, 50 y 60 años obtienen su B1 regularmente."
    }
  ];

  const timelineData = [
    { level: "Desde cero (A0)", time: "12-18 meses", hours: "350-500 horas", intensity: "6-8 h/semana" },
    { level: "Desde A1", time: "8-12 meses", hours: "250-350 horas", intensity: "6-8 h/semana" },
    { level: "Desde A2", time: "10-16 semanas", hours: "100-200 horas", intensity: "8-12 h/semana" },
    { level: "Desde A2+ (alto)", time: "6-10 semanas", hours: "60-100 horas", intensity: "10-12 h/semana" }
  ];

  return (
    <>
      <SEOHead
        title="Preparar B1 Cambridge desde Cero: Tiempo y Plan de Estudio 2026"
        description="Preparar el B1 desde cero lleva 12-18 meses con estudio regular. Desde nivel A2: 10-12 semanas. Plan detallado y horas necesarias por nivel."
        keywords="tiempo preparar b1, b1 desde cero, cuánto tardar b1 cambridge, preparar b1 cambridge"
        canonical="/blog/tiempo-preparar-b1-cero"
        ogType="article"
      />
      <div className="min-h-screen flex flex-col bg-white">
        <Navbar />

        <main className="flex-grow">
          {/* Hero Section */}
          <header className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden">
            <div className="absolute inset-0">
              <img src="https://impulseenglish.s3.us-east-1.amazonaws.com/impulsephotos/6E08CD95-47B7-4D36-95C7-FECFB41E3883.JPEG" alt="Estudiante preparándose para el B1 Cambridge" className="w-full h-full object-cover" loading="eager" />
              <div className="absolute inset-0 bg-gradient-to-br from-accent-blue/95 via-accent-blue/85 to-[#0a3560]/75"></div>
            </div>
            <div className="absolute inset-0 hero-grain opacity-[0.03]"></div>
            <div className="absolute -top-32 -right-32 w-[420px] h-[420px] rounded-full bg-brand-red/[0.04]"></div>
            <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
              <Breadcrumb
                items={[
                  { label: 'Blog', href: '/blog' },
                  { label: 'Tiempo Preparar B1 desde Cero' }
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
                  ¿Cuánto Tiempo se Tarda en Preparar el B1 desde Cero?
                </h1>
                <div className="w-16 h-0.5 bg-brand-red mb-6 animate-hero-fade-up animation-delay-150"></div>
                <p className="font-display text-lg md:text-xl text-white/80 font-light leading-relaxed max-w-3xl animate-hero-fade-up animation-delay-200">
                  Plan detallado con horas necesarias según tu nivel de partida para alcanzar el B1 Preliminary de Cambridge.
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
                <li><a href="#segun-nivel" className="text-emerald-600 hover:text-emerald-700 transition-colors">→ Tiempo Según Nivel de Partida</a></li>
                <li><a href="#desde-cero" className="text-emerald-600 hover:text-emerald-700 transition-colors">→ Plan desde Cero (A0-A1)</a></li>
                <li><a href="#desde-a2" className="text-emerald-600 hover:text-emerald-700 transition-colors">→ Plan desde A2</a></li>
                <li><a href="#horas" className="text-emerald-600 hover:text-emerald-700 transition-colors">→ Horas de Estudio Necesarias</a></li>
                <li><a href="#acelerar" className="text-emerald-600 hover:text-emerald-700 transition-colors">→ Acelerar la Preparación</a></li>
                <li><a href="#faq" className="text-emerald-600 hover:text-emerald-700 transition-colors">→ Preguntas Frecuentes</a></li>
              </ul>
            </div>

            {/* Introduction */}
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              La pregunta sobre cuánto tiempo se necesita para preparar el <Link to="/examenes-cambridge/b1-preliminary" className="text-emerald-600 hover:underline">B1 Preliminary de Cambridge</Link> es probablemente la más frecuente entre quienes se plantean obtener esta certificación. La respuesta varía enormemente según tu punto de partida, dedicación y método de estudio. En este artículo te damos <strong>estimaciones realistas basadas en datos</strong> y un plan concreto para cada situación.
            </p>

            {/* Section 1 */}
            <section id="segun-nivel" className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                Tiempo Según tu Nivel de Partida
              </h2>

              <p className="text-gray-700 mb-6 leading-relaxed">
                El Marco Común Europeo de Referencia (MCER) establece guías orientativas sobre las horas de estudio necesarias entre niveles. Estas cifras, combinadas con la experiencia de centros preparadores, nos dan las siguientes estimaciones:
              </p>

              <div className="overflow-x-auto mb-8">
                <table className="w-full border-collapse bg-white rounded-xl overflow-hidden shadow-lg">
                  <thead>
                    <tr className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white">
                      <th className="text-left p-4 font-semibold">Nivel de partida</th>
                      <th className="text-left p-4 font-semibold">Tiempo estimado</th>
                      <th className="text-left p-4 font-semibold">Horas totales</th>
                      <th className="text-left p-4 font-semibold">Dedicación semanal</th>
                    </tr>
                  </thead>
                  <tbody>
                    {timelineData.map((item, index) => (
                      <tr key={index} className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                        <td className="p-4 font-medium text-gray-900">{item.level}</td>
                        <td className="p-4 text-emerald-600 font-semibold">{item.time}</td>
                        <td className="p-4 text-gray-700">{item.hours}</td>
                        <td className="p-4 text-gray-700 text-sm">{item.intensity}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="bg-emerald-50 border-l-4 border-emerald-500 p-6 rounded-r-xl">
                <p className="text-gray-800 font-medium">
                  <strong>Importante:</strong> Estas son estimaciones medias. Factores como tu lengua materna, exposición previa al inglés, edad y motivación pueden acelerar o ralentizar el proceso. Un hispanohablante tiene ventaja sobre otras lenguas por las raíces latinas compartidas con el vocabulario inglés.
                </p>
              </div>
            </section>

            {/* Section 2 */}
            <section id="desde-cero" className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                Plan desde Cero: De A0 a B1
              </h2>

              <p className="text-gray-700 mb-6 leading-relaxed">
                Si partes absolutamente de cero, el camino al B1 es un viaje que merece la pena pero requiere planificación. Aquí tienes un plan dividido en fases:
              </p>

              <div className="space-y-4 mb-8">
                <div className="bg-white border border-gray-200 rounded-xl p-6">
                  <h3 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
                    <Target className="w-5 h-5 text-emerald-600" />
                    Fase 1: Bases (Meses 1-4) - Nivel A1
                  </h3>
                  <p className="text-gray-700 mb-3">Objetivo: construir los cimientos del idioma.</p>
                  <ul className="space-y-1 text-gray-600 text-sm">
                    <li>• Alfabeto, fonética básica y pronunciación</li>
                    <li>• Vocabulario esencial: 500-800 palabras</li>
                    <li>• Gramática básica: present simple, present continuous, artículos</li>
                    <li>• Frases de supervivencia y presentación personal</li>
                    <li>• Números, fechas, colores, familia, profesiones</li>
                  </ul>
                </div>

                <div className="bg-white border border-gray-200 rounded-xl p-6">
                  <h3 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
                    <Target className="w-5 h-5 text-emerald-600" />
                    Fase 2: Desarrollo (Meses 5-10) - Nivel A2
                  </h3>
                  <p className="text-gray-700 mb-3">Objetivo: comunicación funcional básica.</p>
                  <ul className="space-y-1 text-gray-600 text-sm">
                    <li>• Vocabulario ampliado: 1.500-2.000 palabras</li>
                    <li>• Tiempos pasados (past simple, past continuous)</li>
                    <li>• Futuro (will, going to), condicionales básicos</li>
                    <li>• Comparativos y superlativos</li>
                    <li>• Comprensión de textos simples y diálogos cotidianos</li>
                  </ul>
                </div>

                <div className="bg-white border border-gray-200 rounded-xl p-6">
                  <h3 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
                    <Target className="w-5 h-5 text-emerald-600" />
                    Fase 3: Preparación B1 (Meses 11-15) - Nivel B1
                  </h3>
                  <p className="text-gray-700 mb-3">Objetivo: alcanzar nivel intermedio y preparar el examen.</p>
                  <ul className="space-y-1 text-gray-600 text-sm">
                    <li>• Vocabulario: 2.500-3.500 palabras activas</li>
                    <li>• Present perfect, passive voice, reported speech</li>
                    <li>• Conectores y cohesión textual</li>
                    <li>• Práctica específica de formato de examen</li>
                    <li>• Simulacros completos cronometrados</li>
                  </ul>
                </div>
              </div>

              <div className="bg-amber-50 border-l-4 border-amber-500 p-6 rounded-r-xl">
                <p className="text-gray-800">
                  <strong>Consejo:</strong> No intentes saltarte fases. Cada nivel construye sobre el anterior y los huecos de conocimiento se convierten en obstáculos cada vez mayores conforme avanzas. Es mejor avanzar sólidamente que rápido.
                </p>
              </div>
            </section>

            {/* Section 3 */}
            <section id="desde-a2" className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                Plan desde A2: El Camino Más Rápido al B1
              </h2>

              <p className="text-gray-700 mb-6 leading-relaxed">
                Si ya tienes un nivel A2 consolidado (puedes mantener conversaciones sencillas, entiendes textos básicos y conoces los tiempos verbales principales), estás en una posición excelente. El salto a B1 es el más alcanzable de todos los niveles del MCER.
              </p>

              <div className="bg-gradient-to-r from-emerald-50 to-teal-50 rounded-xl p-6 mb-6">
                <h3 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <Award className="w-5 h-5 text-emerald-600" />
                  Plan de 12 Semanas: A2 → B1
                </h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="bg-white rounded-lg p-4 text-center">
                    <div className="text-emerald-600 font-bold text-lg">Sem 1-3</div>
                    <div className="text-gray-600 text-sm">Gramática B1 y vocabulario temático</div>
                  </div>
                  <div className="bg-white rounded-lg p-4 text-center">
                    <div className="text-emerald-600 font-bold text-lg">Sem 4-6</div>
                    <div className="text-gray-600 text-sm">Reading y Listening intensivo</div>
                  </div>
                  <div className="bg-white rounded-lg p-4 text-center">
                    <div className="text-emerald-600 font-bold text-lg">Sem 7-9</div>
                    <div className="text-gray-600 text-sm">Writing y Speaking con feedback</div>
                  </div>
                  <div className="bg-white rounded-lg p-4 text-center">
                    <div className="text-emerald-600 font-bold text-lg">Sem 10-12</div>
                    <div className="text-gray-600 text-sm">Simulacros y revisión final</div>
                  </div>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-xl p-6">
                  <h3 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                    <BookOpen className="w-5 h-5 text-emerald-600" />
                    Estudio diario recomendado
                  </h3>
                  <ul className="space-y-2 text-gray-700 text-sm">
                    <li>• 30 min gramática/ejercicios</li>
                    <li>• 20 min listening (podcasts B1)</li>
                    <li>• 15 min reading (artículos adaptados)</li>
                    <li>• 15 min vocabulario (flashcards)</li>
                    <li>• 2-3 writings semanales</li>
                  </ul>
                </div>
                <div className="bg-white border border-gray-200 rounded-xl p-6">
                  <h3 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                    <BookOpen className="w-5 h-5 text-emerald-600" />
                    Recursos recomendados
                  </h3>
                  <ul className="space-y-2 text-gray-700 text-sm">
                    <li>• B1 Preliminary Trainer (Cambridge)</li>
                    <li>• BBC 6 Minute English</li>
                    <li>• Cambridge Write & Improve</li>
                    <li>• Apps: Quizlet para vocabulario</li>
                    <li>• Series con subtítulos en inglés</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Section 4 */}
            <section id="horas" className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                Horas de Estudio Necesarias: Datos Reales
              </h2>

              <p className="text-gray-700 mb-6 leading-relaxed">
                Según el MCER y la experiencia de centros Cambridge, estas son las horas de estudio guiado (no incluye exposición informal) necesarias para cada transición de nivel:
              </p>

              <div className="grid md:grid-cols-2 gap-4 mb-6">
                <div className="bg-emerald-50 rounded-xl p-5">
                  <h3 className="font-bold text-emerald-900 mb-3 flex items-center gap-2">
                    <CheckCircle className="w-5 h-5" />
                    Horas de estudio guiado
                  </h3>
                  <ul className="space-y-2 text-gray-700 text-sm">
                    <li>• A0 → A1: 90-100 horas</li>
                    <li>• A1 → A2: 100-120 horas</li>
                    <li>• A2 → B1: 150-200 horas</li>
                    <li>• <strong>Total A0 → B1: 350-420 horas</strong></li>
                  </ul>
                </div>
                <div className="bg-emerald-50 rounded-xl p-5">
                  <h3 className="font-bold text-emerald-900 mb-3 flex items-center gap-2">
                    <CheckCircle className="w-5 h-5" />
                    Exposición adicional recomendada
                  </h3>
                  <ul className="space-y-2 text-gray-700 text-sm">
                    <li>• Podcasts y audio: 30 min/día</li>
                    <li>• Lectura informal: 20 min/día</li>
                    <li>• Series/películas: 3-4 h/semana</li>
                    <li>• Conversación: 1-2 h/semana</li>
                  </ul>
                </div>
              </div>

              <p className="text-gray-700 mb-4 leading-relaxed">
                La calidad del estudio importa tanto como la cantidad. Una hora con un <Link to="/metodologia" className="text-emerald-600 hover:underline">profesor especializado</Link> equivale a 2-3 horas de autoestudio, especialmente para las destrezas de speaking y writing que requieren feedback profesional.
              </p>
            </section>

            {/* Section 5 */}
            <section id="acelerar" className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                Cómo Acelerar tu Preparación
              </h2>

              <p className="text-gray-700 mb-6 leading-relaxed">
                Si necesitas obtener tu B1 lo antes posible, estas estrategias pueden recortar significativamente el tiempo de preparación:
              </p>

              <div className="space-y-4 mb-8">
                <div className="bg-white border border-gray-200 rounded-xl p-6">
                  <h3 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
                    <Target className="w-5 h-5 text-emerald-600" />
                    Inmersión total
                  </h3>
                  <p className="text-gray-700">Cambia el idioma de tu móvil, redes sociales y dispositivos al inglés. Escucha música en inglés, ve series sin subtítulos en español. Cada minuto de exposición cuenta.</p>
                </div>

                <div className="bg-white border border-gray-200 rounded-xl p-6">
                  <h3 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
                    <Target className="w-5 h-5 text-emerald-600" />
                    Curso intensivo en academia
                  </h3>
                  <p className="text-gray-700">Los <Link to="/cursos-ingles/adultos" className="text-emerald-600 hover:underline">cursos intensivos</Link> con 3-4 clases semanales multiplican la velocidad de aprendizaje. La estructura, los compañeros y la corrección profesional son insustituibles.</p>
                </div>

                <div className="bg-white border border-gray-200 rounded-xl p-6">
                  <h3 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
                    <Target className="w-5 h-5 text-emerald-600" />
                    Practica el formato del examen desde el inicio
                  </h3>
                  <p className="text-gray-700">No esperes a las últimas semanas para conocer el formato. Familiarizarte con las partes del examen desde el principio hace que tu estudio sea más eficiente y dirigido.</p>
                </div>
              </div>

              <div className="bg-emerald-50 border-l-4 border-emerald-500 p-6 rounded-r-xl">
                <p className="text-gray-800 font-medium">
                  <strong>El factor más importante:</strong> La constancia supera a la intensidad. Estudiar 1 hora cada día durante 6 meses es más efectivo que estudiar 6 horas los fines de semana. El cerebro necesita procesar y consolidar la información entre sesiones.
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
                    {openFaq === index && (
                      <div className="px-6 pb-6 bg-white">
                        <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                      </div>
                    )}
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
                  Preparar el <Link to="/examenes-cambridge/b1-preliminary" className="text-emerald-600 hover:underline font-medium">B1 Preliminary</Link> desde cero requiere entre 12 y 18 meses con dedicación regular. Desde un A2 consolidado, el plazo se reduce a 10-16 semanas. La clave está en la constancia, un buen plan de estudio y la combinación de clases en academia con práctica autónoma.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  En <Link to="/cursos-ingles/adultos" className="text-emerald-600 hover:underline font-medium">Impulse English Academy</Link> diseñamos planes de preparación personalizados según tu nivel de partida y tu fecha objetivo. Nuestra <Link to="/metodologia" className="text-emerald-600 hover:underline font-medium">metodología</Link> ha ayudado a cientos de estudiantes a alcanzar su B1 en los plazos marcados.
                </p>
              </div>
            </section>

            {/* CTA */}
            <div className="bg-gradient-to-r from-emerald-600 to-teal-600 rounded-2xl p-8 text-center text-white">
              <h3 className="text-2xl font-bold mb-4">¿Quieres saber tu nivel actual?</h3>
              <p className="text-emerald-100 mb-6 max-w-2xl mx-auto">
                Realiza una prueba de nivel gratuita y te diseñamos un plan personalizado para alcanzar tu B1 en el menor tiempo posible.
              </p>
              <Link
                to="/contacto"
                className="inline-flex items-center gap-2 bg-white text-emerald-600 px-8 py-4 rounded-xl font-semibold hover:bg-emerald-50 transition-colors"
              >
                Prueba de nivel gratis
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>

            {/* Related Articles */}
            <section className="mt-16">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Artículos Relacionados</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <Link to="/examenes-cambridge/b1-preliminary" className="group bg-gray-50 rounded-xl p-6 hover:bg-emerald-50 transition-colors">
                  <h3 className="font-semibold text-gray-900 group-hover:text-emerald-600 transition-colors mb-2">
                    Guía Completa del B1 Preliminary
                  </h3>
                  <p className="text-gray-600 text-sm">Todo sobre el examen Cambridge B1: formato, precio y estructura.</p>
                </Link>
                <Link to="/cursos-ingles/adultos" className="group bg-gray-50 rounded-xl p-6 hover:bg-emerald-50 transition-colors">
                  <h3 className="font-semibold text-gray-900 group-hover:text-emerald-600 transition-colors mb-2">
                    Cursos de Inglés para Adultos
                  </h3>
                  <p className="text-gray-600 text-sm">Cursos adaptados a tu nivel y horario para progresar rápidamente.</p>
                </Link>
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
              href="https://www.cambridgeenglish.org/es/exams-and-tests/preliminary/preparation/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-blue-600 hover:underline"
            >
              → Recursos de preparación oficiales en Cambridge English - B1 Preliminary
            </a>
          </div>
        </section>

        <Footer />
      </div>

      <SchemaMarkup schema={articleSchema} />
    </>
  );
}