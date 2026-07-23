import React, { useState, useEffect } from 'react';
import { ChevronRight, Clock, Calendar, ChevronDown, ChevronUp, BookOpen, CheckCircle, Target, ArrowRight, Award } from 'lucide-react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import OneToOneCTA from '../../components/OneToOneCTA';
import InlineOneToOneCTA from '../../components/InlineOneToOneCTA';
import Breadcrumb from '../../components/Breadcrumb';
import { generateArticleSchema, businessInfo } from '../../utils/schemaData';

export const articleSchema = generateArticleSchema({
    headline: "¿Cuánto Tiempo se Tarda en Aprender Inglés? Plazos Reales",
    description: "Aprender inglés lleva de 6 meses a 3 años según tu nivel objetivo. De cero a B1: 6-12 meses. A B2: 18-24 meses. Plazos reales y factores clave.",
    url: `${businessInfo.url}/blog/cuanto-tiempo-aprender-ingles`,
    datePublished: "2025-03-01"
  });

export const faqItems = [
    {
      question: "¿Puedo aprender inglés en 3 meses?",
      answer: "En 3 meses de estudio intensivo (15-20 horas semanales) puedes avanzar un subnivel completo, por ejemplo de A1 a A2. Sin embargo, alcanzar fluidez conversacional requiere al menos 6-12 meses de práctica constante. Las promesas de 'inglés en 3 meses' suelen ser poco realistas para la mayoría de adultos."
    }

  ,
    {
      question: "¿Cuántas horas al día debo estudiar inglés?",
      answer: "Lo ideal es dedicar entre 1 y 2 horas diarias, combinando estudio formal (gramática, vocabulario) con exposición natural (podcasts, series, lectura). La consistencia diaria es más efectiva que sesiones largas esporádicas. 30 minutos diarios de práctica activa producen mejores resultados que 4 horas un solo día."
    },
    {
      question: "¿Es más rápido aprender inglés con clases presenciales o online?",
      answer: "Ambos formatos pueden ser igual de efectivos si la metodología es comunicativa. Las clases presenciales ofrecen ventajas en interacción natural y corrección inmediata, mientras las online aportan flexibilidad. Lo determinante es la frecuencia de práctica y la calidad del programa, no el formato en sí."
    },
    {
      question: "¿A partir de qué edad es más difícil aprender inglés?",
      answer: "Aunque los niños tienen ventaja en adquisición natural de pronunciación, los adultos aprenden gramática y vocabulario más rápido gracias a sus habilidades cognitivas desarrolladas. No hay edad límite para aprender inglés. La motivación y la constancia son más determinantes que la edad."
    },
    {
      question: "¿Cuánto tiempo tarda un hispanohablante en alcanzar nivel C1?",
      answer: "Según el Marco Común Europeo, un hispanohablante necesita aproximadamente 700-800 horas de instrucción para alcanzar C1 desde cero. Con estudio regular de 6-8 horas semanales, esto equivale a 3-4 años. Con inmersión intensiva, puede reducirse a 2-2.5 años."
    }
  ];

export default function CuantoTiempoAprenderInglesPage() {
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
              <img src="/images/academy/classroom-facilities-main-classroom.jpg" alt="Estudiantes aprendiendo inglés en academia Impulse" className="w-full h-full object-cover" loading="eager" />
              <div className="absolute inset-0 bg-gradient-to-br from-accent-blue/95 via-accent-blue/85 to-[#0a3560]/75"></div>
            </div>
            <div className="absolute inset-0 hero-grain opacity-[0.03]"></div>
            <div className="absolute -top-32 -right-32 w-[420px] h-[420px] rounded-full bg-brand-red/[0.04]"></div>
            <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
              <Breadcrumb
                items={[
                  { label: 'Blog', href: '/blog' },
                  { label: 'Cuánto Tiempo Aprender Inglés' }
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
                  ¿Cuánto Tiempo se Tarda en Aprender Inglés? Plazos Reales
                </h1>
                <div className="w-16 h-0.5 bg-brand-red mb-6 animate-hero-fade-up animation-delay-150"></div>
                <p className="font-display text-lg md:text-xl text-white/80 font-light leading-relaxed max-w-3xl animate-hero-fade-up animation-delay-200">
                  Plazos realistas según tu nivel objetivo, factores que influyen y cómo acelerar tu progreso de forma efectiva.
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
                <li><a href="#plazos" className="text-emerald-600 hover:text-emerald-700 transition-colors">→ Plazos Según Nivel Objetivo</a></li>
                <li><a href="#factores" className="text-emerald-600 hover:text-emerald-700 transition-colors">→ Factores que Influyen en el Aprendizaje</a></li>
                <li><a href="#horas" className="text-emerald-600 hover:text-emerald-700 transition-colors">→ Horas de Estudio por Nivel MCER</a></li>
                <li><a href="#acelerar" className="text-emerald-600 hover:text-emerald-700 transition-colors">→ Cómo Acelerar el Proceso</a></li>
                <li><a href="#expectativas" className="text-emerald-600 hover:text-emerald-700 transition-colors">→ Expectativas Realistas</a></li>
                <li><a href="#faq" className="text-emerald-600 hover:text-emerald-700 transition-colors">→ Preguntas Frecuentes</a></li>
              </ul>
            </div>

            {/* Introduction */}
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              Una de las preguntas más frecuentes entre quienes quieren aprender inglés es: <strong>¿cuánto tiempo me llevará?</strong> La respuesta depende de múltiples factores, desde tu nivel actual hasta la intensidad de estudio. Sin embargo, existen marcos de referencia basados en datos reales que permiten establecer plazos orientativos. En esta guía te ofrecemos expectativas realistas para que planifiques tu aprendizaje con información fiable y puedas medir tu progreso de forma objetiva.
            </p>

            {/* Section 1 - Plazos */}
            <section id="plazos" className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                Plazos Según Nivel Objetivo
              </h2>

              <p className="text-gray-700 mb-6 leading-relaxed">
                El <a href="https://www.cambridgeenglish.org/es/" target="_blank" rel="noopener noreferrer" className="text-emerald-600 hover:underline">Marco Común Europeo de Referencia (MCER)</a> establece niveles claros que nos permiten estimar plazos según tu punto de partida y tu meta. Estos datos se basan en estudiantes con dedicación regular de 4-6 horas semanales:
              </p>

              <div className="overflow-x-auto mb-8">
                <table className="w-full border-collapse bg-white rounded-xl overflow-hidden shadow-lg">
                  <thead>
                    <tr className="bg-gradient-to-r from-emerald-600 to-emerald-800 text-white">
                      <th className="text-left p-4 font-semibold">Objetivo</th>
                      <th className="text-left p-4 font-semibold">Desde cero</th>
                      <th className="text-left p-4 font-semibold">Horas totales</th>
                      <th className="text-left p-4 font-semibold">Qué puedes hacer</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="bg-gray-50">
                      <td className="p-4 font-medium text-gray-900">A2 Básico</td>
                      <td className="p-4 text-gray-700">3-6 meses</td>
                      <td className="p-4 text-gray-700">180-200h</td>
                      <td className="p-4 text-gray-700 text-sm">Conversaciones básicas, viajes simples</td>
                    </tr>
                    <tr className="bg-white">
                      <td className="p-4 font-medium text-gray-900">B1 Intermedio</td>
                      <td className="p-4 text-gray-700">6-12 meses</td>
                      <td className="p-4 text-gray-700">350-400h</td>
                      <td className="p-4 text-gray-700 text-sm">Comunicación cotidiana, trabajo básico</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="p-4 font-medium text-gray-900">B2 Intermedio Alto</td>
                      <td className="p-4 text-gray-700">18-24 meses</td>
                      <td className="p-4 text-gray-700">500-600h</td>
                      <td className="p-4 text-gray-700 text-sm">Fluidez profesional, universidad</td>
                    </tr>
                    <tr className="bg-white">
                      <td className="p-4 font-medium text-gray-900">C1 Avanzado</td>
                      <td className="p-4 text-gray-700">3-4 años</td>
                      <td className="p-4 text-gray-700">700-800h</td>
                      <td className="p-4 text-gray-700 text-sm">Uso sofisticado, académico y profesional</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="bg-emerald-50 border-l-4 border-emerald-500 p-6 rounded-r-xl">
                <p className="text-gray-800 font-medium">
                  Estos plazos son orientativos para estudiantes hispanohablantes con dedicación regular. La inmersión lingüística, clases con <a href="/metodologia/" className="text-emerald-600 hover:underline">metodología comunicativa</a> y la práctica diaria pueden reducirlos significativamente.
                </p>
              </div>
            </section>

            {/* Section 2 - Factores */}
            <section id="factores" className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                Factores que Influyen en el Tiempo de Aprendizaje
              </h2>

              <p className="text-gray-700 mb-6 leading-relaxed">
                No todos los estudiantes avanzan al mismo ritmo. Estos son los factores principales que determinan cuánto tardarás en alcanzar tu objetivo:
              </p>

              <div className="grid md:grid-cols-2 gap-4 mb-6">
                <div className="bg-emerald-50 rounded-xl p-5">
                  <h3 className="font-bold text-emerald-900 mb-3 flex items-center gap-2">
                    <CheckCircle className="w-5 h-5" />
                    Factores Aceleradores
                  </h3>
                  <ul className="space-y-2 text-gray-700 text-sm">
                    <li>• Exposición diaria al idioma (música, podcasts, series)</li>
                    <li>• Clases con profesor titulado y grupos reducidos</li>
                    <li>• Motivación clara: examen, trabajo, viaje</li>
                    <li>• Conocimientos previos de otros idiomas</li>
                    <li>• Práctica de las 4 destrezas de forma equilibrada</li>
                  </ul>
                </div>
                <div className="bg-emerald-50 rounded-xl p-5">
                  <h3 className="font-bold text-emerald-900 mb-3 flex items-center gap-2">
                    <CheckCircle className="w-5 h-5" />
                    Factores que Ralentizan
                  </h3>
                  <ul className="space-y-2 text-gray-700 text-sm">
                    <li>• Estudiar solo gramática sin practicar conversación</li>
                    <li>• Falta de constancia o largos periodos sin estudiar</li>
                    <li>• Miedo a cometer errores al hablar</li>
                    <li>• Métodos basados únicamente en traducción</li>
                    <li>• No tener objetivos claros ni plazos definidos</li>
                  </ul>
                </div>
              </div>

              <p className="text-gray-700 mb-4 leading-relaxed">
                La edad del estudiante influye menos de lo que se cree. Los adultos compensan la menor plasticidad cerebral con estrategias de aprendizaje más eficientes, mayor capacidad analítica y motivación intrínseca. Lo realmente determinante es la <strong>calidad y frecuencia de la práctica</strong>.
              </p>
            </section>

            {/* Section 3 - Horas */}
            <section id="horas" className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                Horas de Estudio por Nivel MCER
              </h2>

              <p className="text-gray-700 mb-6 leading-relaxed">
                El Cambridge Assessment establece horas orientativas de instrucción guiada necesarias para pasar de un nivel al siguiente. Estas cifras no incluyen la práctica autónoma, que puede duplicar las horas totales de exposición al idioma:
              </p>

              <div className="space-y-4 mb-8">
                <div className="bg-white border border-gray-200 rounded-xl p-6">
                  <h3 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
                    <Target className="w-5 h-5 text-emerald-600" />
                    De A1 a A2: 100-150 horas
                  </h3>
                  <p className="text-gray-700">Bases del idioma: presentaciones, compras, direcciones. Con 4 horas semanales, alcanzable en 6-9 meses. Es el nivel que permite sobrevivir en un viaje.</p>
                </div>

                <div className="bg-white border border-gray-200 rounded-xl p-6">
                  <h3 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
                    <Target className="w-5 h-5 text-emerald-600" />
                    De A2 a B1: 150-200 horas
                  </h3>
                  <p className="text-gray-700">Independencia comunicativa: conversaciones sobre temas familiares, escritura de emails, comprensión de textos sencillos. Es el nivel que más empresas exigen como mínimo.</p>
                </div>

                <div className="bg-white border border-gray-200 rounded-xl p-6">
                  <h3 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
                    <Target className="w-5 h-5 text-emerald-600" />
                    De B1 a B2: 200-250 horas
                  </h3>
                  <p className="text-gray-700">Fluidez profesional: reuniones, presentaciones, textos complejos. Este salto es considerado el más difícil por la cantidad de vocabulario y estructuras necesarias.</p>
                </div>

                <div className="bg-white border border-gray-200 rounded-xl p-6">
                  <h3 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
                    <Target className="w-5 h-5 text-emerald-600" />
                    De B2 a C1: 200-300 horas
                  </h3>
                  <p className="text-gray-700">Dominio avanzado: matices, humor, textos académicos, debates sofisticados. Requiere inmersión significativa y práctica constante con hablantes nativos.</p>
                </div>
              </div>

              <div className="bg-emerald-50 border-l-4 border-emerald-500 p-6 rounded-r-xl">
                <p className="text-gray-800 font-medium">
                  Estas horas se refieren a instrucción guiada de calidad. En <a href="/cursos-ingles/adultos/" className="text-emerald-600 hover:underline">nuestros cursos para adultos</a>, maximizamos cada hora con metodología comunicativa que prioriza la práctica activa sobre la teoría pasiva.
                </p>
              </div>
            </section>

            {/* Section 4 - Acelerar */}
            <section id="acelerar" className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                Cómo Acelerar el Proceso de Aprendizaje
              </h2>

              <p className="text-gray-700 mb-6 leading-relaxed">
                Aunque no existen atajos mágicos, hay estrategias probadas que pueden reducir el tiempo de aprendizaje entre un 20% y un 40%. La clave está en maximizar la exposición al idioma y practicar de forma inteligente:
              </p>

              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="bg-white border border-gray-200 rounded-xl p-6">
                  <h3 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                    <BookOpen className="w-5 h-5 text-emerald-600" />
                    Inmersión diaria
                  </h3>
                  <p className="text-gray-700 text-sm">Cambia el idioma de tu móvil a inglés, escucha podcasts durante desplazamientos, ve series en versión original. Cada minuto de exposición cuenta, incluso de forma pasiva.</p>
                </div>

                <div className="bg-white border border-gray-200 rounded-xl p-6">
                  <h3 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                    <BookOpen className="w-5 h-5 text-emerald-600" />
                    Práctica espaciada
                  </h3>
                  <p className="text-gray-700 text-sm">Estudia 30 minutos diarios en lugar de 3 horas el fin de semana. La repetición espaciada consolida la memoria a largo plazo de forma mucho más efectiva.</p>
                </div>

                <div className="bg-white border border-gray-200 rounded-xl p-6">
                  <h3 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                    <BookOpen className="w-5 h-5 text-emerald-600" />
                    Clases con metodología activa
                  </h3>
                  <p className="text-gray-700 text-sm">Elige <a href="/metodologia/" className="text-emerald-600 hover:underline">programas que prioricen la comunicación real</a> sobre la memorización de reglas. Las clases donde hablas el 70% del tiempo aceleran enormemente el progreso.</p>
                </div>

                <div className="bg-white border border-gray-200 rounded-xl p-6">
                  <h3 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                    <BookOpen className="w-5 h-5 text-emerald-600" />
                    Objetivos medibles
                  </h3>
                  <p className="text-gray-700 text-sm">Fija metas concretas: "Quiero aprobar el B2 en junio" funciona mejor que "Quiero mejorar mi inglés". Los exámenes oficiales proporcionan estructura y motivación.</p>
                </div>
              </div>
            </section>

            {/* Section 5 - Expectativas */}
            <section id="expectativas" className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                Expectativas Realistas: La Verdad sobre los Plazos
              </h2>

              <p className="text-gray-700 mb-4 leading-relaxed">
                Es importante tener expectativas ajustadas a la realidad. Muchos estudiantes abandonan por frustración al no ver resultados inmediatos. Comprender el proceso te ayudará a mantener la motivación:
              </p>

              <div className="bg-gradient-to-r from-emerald-50 to-teal-50 rounded-2xl p-8 mb-6">
                <h3 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <Award className="w-5 h-5 text-emerald-600" />
                  Lo que puedes esperar
                </h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                    <span><strong>Primeras 2-4 semanas:</strong> Sensación de progreso rápido con vocabulario básico y frases cotidianas.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                    <span><strong>Meses 2-4:</strong> Periodo de meseta donde sientes que no avanzas. Es normal y temporal.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                    <span><strong>Meses 5-8:</strong> Salto cualitativo en comprensión. Empiezas a entender contextos nuevos.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                    <span><strong>A partir del año:</strong> Automatización progresiva. Dejas de traducir mentalmente en situaciones familiares.</span>
                  </li>
                </ul>
              </div>

              <div className="bg-emerald-50 border-l-4 border-emerald-500 p-6 rounded-r-xl">
                <p className="text-gray-800 font-medium">
                  El aprendizaje del inglés no es lineal. Habrá semanas de avance rápido y otras de aparente estancamiento. La clave es la constancia: los estudiantes que mantienen una rutina regular siempre alcanzan sus objetivos, independientemente del ritmo.
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
                  Aprender inglés es una inversión a largo plazo que requiere constancia más que intensidad. Con expectativas realistas y un plan estructurado, puedes alcanzar nivel B1 en 6-12 meses y B2 en 18-24 meses desde cero. Lo más importante es elegir un <a href="/metodologia/" className="text-emerald-600 hover:underline font-medium">método que priorice la comunicación real</a> y mantener la práctica diaria.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  En <a href="/cursos-ingles/adultos/" className="text-emerald-600 hover:underline font-medium">Impulse English Academy</a> diseñamos itinerarios personalizados que maximizan tu progreso con clases comunicativas, grupos reducidos y seguimiento constante de tu evolución. <a href="/contacto/" className="text-emerald-600 hover:underline font-medium">Contáctanos</a> para una evaluación gratuita de tu nivel.
                </p>
              </div>
            </section>

            <InlineOneToOneCTA pathname="/blog/cuanto-tiempo-aprender-ingles" />

            {/* Related Articles */}
            <section className="mt-16">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Artículos Relacionados</h2>
              <div className="grid md:grid-cols-3 gap-6">
                <a href="/metodologia/" className="group bg-gray-50 rounded-xl p-6 hover:bg-emerald-50 transition-colors">
                  <h3 className="font-semibold text-gray-900 group-hover:text-emerald-600 transition-colors mb-2">
                    Nuestra Metodología
                  </h3>
                  <p className="text-gray-600 text-sm">Descubre cómo enseñamos inglés de forma efectiva y comunicativa.</p>
                </a>
                <a href="/cursos-ingles/adultos/" className="group bg-gray-50 rounded-xl p-6 hover:bg-emerald-50 transition-colors">
                  <h3 className="font-semibold text-gray-900 group-hover:text-emerald-600 transition-colors mb-2">
                    Cursos para Adultos
                  </h3>
                  <p className="text-gray-600 text-sm">Programas adaptados a tu ritmo y nivel con grupos reducidos.</p>
                </a>
                <a href="/contacto/" className="group bg-gray-50 rounded-xl p-6 hover:bg-emerald-50 transition-colors">
                  <h3 className="font-semibold text-gray-900 group-hover:text-emerald-600 transition-colors mb-2">
                    Contacto
                  </h3>
                  <p className="text-gray-600 text-sm">Solicita información y una prueba de nivel gratuita.</p>
                </a>
              </div>
            </section>
          </article>

          {/* Lead Form */}
          <section className="bg-gray-50 py-16">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
              <OneToOneCTA pathname="/blog/cuanto-tiempo-aprender-ingles" />
            </div>
          </section>
        </main>

        {/* External Authority Link */}
        <section className="py-8 px-6 bg-white border-t border-zinc-100">
          <div className="max-w-4xl mx-auto text-center">
            <a
              href="https://www.cambridgeenglish.org/es/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-blue-600 hover:underline"
            >
              → Más información en Cambridge English oficial
            </a>
          </div>
        </section>

        <Footer />
      </div>

</>
  );
}