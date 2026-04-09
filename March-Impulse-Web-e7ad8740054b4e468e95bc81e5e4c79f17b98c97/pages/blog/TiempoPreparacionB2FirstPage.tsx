import React, { useState, useEffect } from 'react';
import { ChevronRight, Clock, Calendar, ChevronDown, ChevronUp, BookOpen, CheckCircle, Target, ArrowRight, Award } from 'lucide-react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import LeadForm from '../../components/LeadForm';
import Breadcrumb from '../../components/Breadcrumb';
import { generateArticleSchema, businessInfo } from '../../utils/schemaData';
import type { FAQItem } from '../../utils/schemaData';
import { blogImages } from '@/utils/images';

export const articleSchema = generateArticleSchema({
    headline: "¿Cuánto Tiempo se Tarda en Preparar el B2 First?",
    description: "El tiempo para preparar el B2 First varía de 3 a 12 meses según tu nivel. Desde B1: 3-6 meses. Desde A2: 9-12 meses. Plan detallado por nivel.",
    url: `${businessInfo.url}/blog/tiempo-preparacion-b2-first`,
    datePublished: "2025-03-01"
  });

export const faqItems: FAQItem[] = [
    {
      question: "¿Cuántas horas de estudio en total necesito para el B2 First?",
      answer: "Cambridge estima que alcanzar el nivel B2 requiere un acumulado de 500-600 horas de aprendizaje desde cero. Si ya tienes nivel B1, necesitarás unas 150-200 horas adicionales de estudio específico. Si partes de A2, son aproximadamente 300-400 horas. Estas cifras incluyen tanto clases como estudio autónomo, práctica de examen y exposición general al inglés."
    }

  ,
    {
      question: "¿Puedo preparar el B2 First en solo 2 meses?",
      answer: "Es posible pero solo en circunstancias muy específicas: necesitas un nivel B1+ muy alto (cercano al B2), disponibilidad para estudiar 20+ horas semanales y, preferiblemente, apoyo de un profesor especializado. Para la mayoría de candidatos, 2 meses es un plazo demasiado justo que puede resultar en ansiedad excesiva y rendimiento subóptimo. Lo recomendable mínimo son 3 meses con nivel B1+."
    },
    {
      question: "¿El estudio por cuenta propia es suficiente para el B2 First?",
      answer: "El estudio autónomo puede ser suficiente si eres muy disciplinado, tienes buenos materiales y tu nivel de partida es B1+. Sin embargo, para Writing y Speaking es muy difícil mejorar sin feedback externo. Un profesor o compañero de estudio que pueda corregir tus textos y practicar conversación contigo acelera enormemente la preparación en estas áreas críticas."
    },
    {
      question: "¿Cuál es la forma más rápida de preparar el B2 First?",
      answer: "La preparación más rápida combina: 1) Un curso intensivo en academia especializada (4-6 horas/semana de clase), 2) Estudio autónomo diario de 1-2 horas centrado en tus debilidades, 3) Inmersión constante (cambiar idioma del móvil, ver series en inglés, escuchar podcasts), y 4) Simulacros de examen semanales. Con este enfoque y nivel B1+, puedes prepararte en 8-12 semanas."
    },
    {
      question: "¿Cómo sé si estoy preparado para presentarme al B2 First?",
      answer: "El mejor indicador es tu rendimiento en exámenes de práctica completos. Si en tus últimos 3 simulacros obtienes consistentemente 165+ puntos (5 por encima del mínimo para aprobar), estás preparado. Si fluctúas entre 155-165, necesitas más práctica. Además, deberías sentirte cómodo con el formato de todas las secciones y poder completar cada parte dentro del tiempo asignado sin agobio."
    }
  ];

export default function TiempoPreparacionB2FirstPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [openFaq, setOpenFaq] = useState<number | null>(null);


  const preparationTimeline = [
    { level: "B1+ consolidado", months: "3-4 meses", hours: "150-200 h", weekly: "10-12 h/semana", color: "emerald" },
    { level: "B1 medio", months: "5-7 meses", hours: "250-350 h", weekly: "10-12 h/semana", color: "emerald" },
    { level: "A2 avanzado", months: "9-12 meses", hours: "350-450 h", weekly: "8-12 h/semana", color: "amber" },
    { level: "A2 básico", months: "12-18 meses", hours: "450-600 h", weekly: "8-10 h/semana", color: "red" }
  ];

  return (
    <>
<div className="min-h-screen flex flex-col bg-white">
        <Navbar />

        <main className="flex-grow">
          {/* Hero Section */}
          <header className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden">
            <div className="absolute inset-0">
              <img src={blogImages.cambridgeCertificate.url} alt="Tiempo de preparación para el B2 First de Cambridge" className="w-full h-full object-cover" loading="eager" />
              <div className="absolute inset-0 bg-gradient-to-br from-accent-blue/95 via-accent-blue/85 to-[#0a3560]/75"></div>
            </div>
            <div className="absolute inset-0 hero-grain opacity-[0.03]"></div>
            <div className="absolute -top-32 -right-32 w-[420px] h-[420px] rounded-full bg-brand-red/[0.04]"></div>
            <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
              <Breadcrumb
                items={[
                  { label: 'Blog', href: '/blog' },
                  { label: 'Tiempo Preparación B2 First' }
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
                  ¿Cuánto Tiempo se Tarda en Preparar el B2 First?
                </h1>
                <div className="w-16 h-0.5 bg-brand-red mb-6 animate-hero-fade-up animation-delay-150"></div>
                <p className="font-display text-lg md:text-xl text-white/80 font-light leading-relaxed max-w-3xl animate-hero-fade-up animation-delay-200">
                  El tiempo de preparación depende de tu nivel actual: desde 3 meses con B1+ hasta 12-18 meses desde A2. Descubre tu plan personalizado.
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
                <li><a href="#tiempo-por-nivel" className="text-emerald-600 hover:text-emerald-700 transition-colors">→ Tiempo de Preparación por Nivel de Partida</a></li>
                <li><a href="#horas-estudio" className="text-emerald-600 hover:text-emerald-700 transition-colors">→ Horas de Estudio Necesarias</a></li>
                <li><a href="#intensivo-extensivo" className="text-emerald-600 hover:text-emerald-700 transition-colors">→ Preparación Intensiva vs Extensiva</a></li>
                <li><a href="#factores" className="text-emerald-600 hover:text-emerald-700 transition-colors">→ Factores que Afectan al Tiempo</a></li>
                <li><a href="#expectativas" className="text-emerald-600 hover:text-emerald-700 transition-colors">→ Expectativas Realistas</a></li>
                <li><a href="#faq" className="text-emerald-600 hover:text-emerald-700 transition-colors">→ Preguntas Frecuentes</a></li>
              </ul>
            </div>

            {/* Introduction */}
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              "¿Cuánto tiempo necesito para preparar el B2 First?" es la pregunta más práctica que puedes hacerte antes de embarcarte en la preparación de este examen de Cambridge. La respuesta varía enormemente según tu nivel actual de inglés: desde <strong>3-4 meses con un B1+ sólido</strong> hasta <strong>12-18 meses si partes de un A2 básico</strong>. En total, Cambridge estima que se necesitan entre 500 y 600 horas de aprendizaje acumulado para alcanzar el nivel B2, pero si ya tienes parte del camino recorrido, el esfuerzo restante es mucho menor. En este artículo te damos las cifras reales y un plan adaptado a tu situación.
            </p>

            {/* Section 1 - Tiempo por nivel */}
            <section id="tiempo-por-nivel" className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                Tiempo de Preparación Según tu Nivel Actual
              </h2>

              <p className="text-gray-700 mb-6 leading-relaxed">
                Tu nivel de partida es el factor más determinante en el tiempo que necesitarás. Aquí tienes una estimación realista basada en datos de Cambridge y la experiencia de cientos de candidatos:
              </p>

              <div className="overflow-x-auto mb-8">
                <table className="w-full border-collapse bg-white rounded-xl overflow-hidden shadow-lg">
                  <thead>
                    <tr className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white">
                      <th className="text-left p-4 font-semibold">Nivel actual</th>
                      <th className="text-left p-4 font-semibold">Meses</th>
                      <th className="text-left p-4 font-semibold">Horas totales</th>
                      <th className="text-left p-4 font-semibold">Dedicación semanal</th>
                    </tr>
                  </thead>
                  <tbody>
                    {preparationTimeline.map((item, index) => (
                      <tr key={index} className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                        <td className="p-4 font-medium text-gray-900">{item.level}</td>
                        <td className="p-4 text-gray-700 font-bold">{item.months}</td>
                        <td className="p-4 text-gray-700">{item.hours}</td>
                        <td className="p-4 text-gray-700">{item.weekly}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="space-y-6 mb-8">
                <div className="bg-emerald-50 border-l-4 border-emerald-500 rounded-r-xl p-6">
                  <h3 className="font-bold text-gray-900 mb-2">Desde B1+ consolidado: 3-4 meses</h3>
                  <p className="text-gray-700">Si ya manejas tiempos verbales principales, puedes mantener conversaciones fluidas y leer textos de nivel intermedio sin grandes dificultades, estás en la mejor posición. Tu preparación se centrará en familiarizarte con el formato del examen, reforzar Use of English (phrasal verbs, word formation) y practicar con simulacros. Con 10-12 horas semanales de dedicación, 3-4 meses son suficientes.</p>
                </div>

                <div className="bg-emerald-50 border-l-4 border-emerald-500 rounded-r-xl p-6">
                  <h3 className="font-bold text-gray-900 mb-2">Desde B1 medio: 5-7 meses</h3>
                  <p className="text-gray-700">Con un B1 medio necesitas reforzar gramática (condicionales, pasiva, reported speech), ampliar vocabulario significativamente y desarrollar las habilidades de Writing y Speaking al nivel B2. Los primeros 2-3 meses se centran en subir tu nivel general de inglés, y los últimos 2-3 meses en preparación específica del formato de examen.</p>
                </div>

                <div className="bg-amber-50 border-l-4 border-amber-500 rounded-r-xl p-6">
                  <h3 className="font-bold text-gray-900 mb-2">Desde A2 avanzado: 9-12 meses</h3>
                  <p className="text-gray-700">Desde A2 tienes un camino considerable por delante. Los primeros 4-6 meses deben centrarse en alcanzar un nivel B1 sólido, y los siguientes 3-6 meses en la transición al B2 y la preparación específica del examen. Es un compromiso a largo plazo pero completamente factible con constancia. Considera obtener el B1 Preliminary como hito intermedio.</p>
                </div>

                <div className="bg-red-50 border-l-4 border-red-500 rounded-r-xl p-6">
                  <h3 className="font-bold text-gray-900 mb-2">Desde A2 básico o inferior: 12-18 meses</h3>
                  <p className="text-gray-700">Si tu nivel está por debajo de un A2 sólido, el <a href="/examenes-cambridge/b2-first/" className="text-emerald-600 hover:underline">B2 First</a> es un objetivo a medio-largo plazo. Planifica en etapas: primero A2 → B1 (6-9 meses), luego B1 → B2 (3-6 meses más). Intentar saltar directamente a B2 desde este nivel suele resultar en frustración y abandono.</p>
                </div>
              </div>
            </section>

            {/* Section 2 - Horas de estudio */}
            <section id="horas-estudio" className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                Horas de Estudio Necesarias: Las Cifras Reales
              </h2>

              <p className="text-gray-700 mb-6 leading-relaxed">
                Cambridge Assessment English proporciona estimaciones oficiales del número de horas de aprendizaje guiado necesarias para cada nivel. Estas cifras son acumulativas desde cero:
              </p>

              <div className="grid md:grid-cols-2 gap-4 mb-6">
                <div className="bg-white border border-gray-200 rounded-xl p-5">
                  <h3 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                    <Clock className="w-5 h-5 text-emerald-600" />
                    Horas acumuladas por nivel
                  </h3>
                  <ul className="space-y-3 text-gray-700 text-sm">
                    <li className="flex justify-between"><span>A1 Beginner</span><span className="font-mono">~100 h</span></li>
                    <li className="flex justify-between"><span>A2 Elementary</span><span className="font-mono">~200 h</span></li>
                    <li className="flex justify-between"><span>B1 Intermediate</span><span className="font-mono">~350 h</span></li>
                    <li className="flex justify-between border-t border-gray-200 pt-3"><span className="font-bold">B2 Upper-Intermediate</span><span className="font-mono font-bold">~500-600 h</span></li>
                    <li className="flex justify-between"><span>C1 Advanced</span><span className="font-mono">~700-800 h</span></li>
                  </ul>
                </div>
                <div className="bg-white border border-gray-200 rounded-xl p-5">
                  <h3 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                    <Target className="w-5 h-5 text-emerald-600" />
                    Distribución recomendada
                  </h3>
                  <ul className="space-y-3 text-gray-700 text-sm">
                    <li className="flex justify-between"><span>Gramática y vocabulario</span><span className="font-mono">25%</span></li>
                    <li className="flex justify-between"><span>Reading y Use of English</span><span className="font-mono">25%</span></li>
                    <li className="flex justify-between"><span>Writing (práctica + revisión)</span><span className="font-mono">20%</span></li>
                    <li className="flex justify-between"><span>Listening (activo + pasivo)</span><span className="font-mono">15%</span></li>
                    <li className="flex justify-between"><span>Speaking (conversación)</span><span className="font-mono">15%</span></li>
                  </ul>
                </div>
              </div>

              <div className="bg-emerald-50 border-l-4 border-emerald-500 p-6 rounded-r-xl">
                <p className="text-gray-800 font-medium">
                  <strong>Dato clave:</strong> Estas horas incluyen todo tipo de aprendizaje, no solo estudio formal. Ver series en inglés, escuchar podcasts, leer artículos y mantener conversaciones en inglés también cuentan. La inmersión diaria puede representar el 30-40% de tus horas totales.
                </p>
              </div>
            </section>

            {/* Section 3 - Intensivo vs extensivo */}
            <section id="intensivo-extensivo" className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                Preparación Intensiva vs Extensiva: ¿Cuál es Mejor?
              </h2>

              <p className="text-gray-700 mb-6 leading-relaxed">
                No solo importa cuántas horas estudias, sino cómo las distribuyes. Hay dos enfoques principales, cada uno con ventajas e inconvenientes:
              </p>

              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="bg-white border-2 border-emerald-200 rounded-xl p-6">
                  <h3 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                    <Award className="w-5 h-5 text-emerald-600" />
                    Preparación Intensiva
                  </h3>
                  <p className="text-gray-700 text-sm mb-4">15-20 horas/semana durante 2-4 meses</p>
                  <div className="space-y-2 mb-4">
                    <p className="text-emerald-700 text-sm flex items-start gap-2"><CheckCircle className="w-4 h-4 mt-0.5 flex-shrink-0" /> Resultados más rápidos</p>
                    <p className="text-emerald-700 text-sm flex items-start gap-2"><CheckCircle className="w-4 h-4 mt-0.5 flex-shrink-0" /> Mayor inmersión y retención</p>
                    <p className="text-emerald-700 text-sm flex items-start gap-2"><CheckCircle className="w-4 h-4 mt-0.5 flex-shrink-0" /> Momentum y motivación sostenida</p>
                    <p className="text-emerald-700 text-sm flex items-start gap-2"><CheckCircle className="w-4 h-4 mt-0.5 flex-shrink-0" /> Ideal para deadlines cercanos</p>
                  </div>
                  <div className="bg-amber-50 rounded-lg p-3">
                    <p className="text-amber-800 text-xs"><strong>Riesgo:</strong> Burnout si no se gestiona bien. Puede ser incompatible con trabajo o estudios a tiempo completo.</p>
                  </div>
                </div>

                <div className="bg-white border-2 border-blue-200 rounded-xl p-6">
                  <h3 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                    <BookOpen className="w-5 h-5 text-blue-600" />
                    Preparación Extensiva
                  </h3>
                  <p className="text-gray-700 text-sm mb-4">6-10 horas/semana durante 5-9 meses</p>
                  <div className="space-y-2 mb-4">
                    <p className="text-blue-700 text-sm flex items-start gap-2"><CheckCircle className="w-4 h-4 mt-0.5 flex-shrink-0" /> Compatible con trabajo y vida diaria</p>
                    <p className="text-blue-700 text-sm flex items-start gap-2"><CheckCircle className="w-4 h-4 mt-0.5 flex-shrink-0" /> Aprendizaje más profundo y consolidado</p>
                    <p className="text-blue-700 text-sm flex items-start gap-2"><CheckCircle className="w-4 h-4 mt-0.5 flex-shrink-0" /> Menor riesgo de agotamiento</p>
                    <p className="text-blue-700 text-sm flex items-start gap-2"><CheckCircle className="w-4 h-4 mt-0.5 flex-shrink-0" /> Más tiempo para asimilar conceptos</p>
                  </div>
                  <div className="bg-amber-50 rounded-lg p-3">
                    <p className="text-amber-800 text-xs"><strong>Riesgo:</strong> Pérdida de motivación por la duración. Requiere más disciplina para mantener la constancia.</p>
                  </div>
                </div>
              </div>

              <div className="bg-emerald-50 border-l-4 border-emerald-500 p-6 rounded-r-xl">
                <p className="text-gray-800 font-medium">
                  <strong>Nuestra recomendación:</strong> El enfoque óptimo para la mayoría es un modelo <strong>híbrido</strong>: preparación extensiva (8-10 h/semana) durante los primeros meses para construir nivel, seguida de un período intensivo (15+ h/semana) durante las últimas 4-6 semanas antes del examen para afinar estrategias y hacer simulacros.
                </p>
              </div>
            </section>

            {/* Section 4 - Factores */}
            <section id="factores" className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                Factores que Aceleran o Ralentizan la Preparación
              </h2>

              <p className="text-gray-700 mb-6 leading-relaxed">
                El tiempo de preparación puede variar significativamente según varios factores personales. Aquí tienes los más relevantes y cómo influyen:
              </p>

              <div className="grid md:grid-cols-2 gap-4 mb-6">
                <div className="bg-emerald-50 rounded-xl p-5">
                  <h3 className="font-bold text-emerald-900 mb-3 flex items-center gap-2">
                    <CheckCircle className="w-5 h-5" />
                    Factores que aceleran
                  </h3>
                  <ul className="space-y-2 text-gray-700 text-sm">
                    <li>• <strong>Exposición diaria al inglés</strong> (trabajo, viajes, media)</li>
                    <li>• <strong>Curso con profesor especializado</strong> en Cambridge</li>
                    <li>• <strong>Experiencia previa</strong> con exámenes similares</li>
                    <li>• <strong>Hábito de lectura</strong> en inglés ya establecido</li>
                    <li>• <strong>Conocimiento de otros idiomas</strong> germánicos</li>
                    <li>• <strong>Edad entre 18-35</strong> (mayor capacidad de aprendizaje)</li>
                  </ul>
                </div>
                <div className="bg-red-50 rounded-xl p-5">
                  <h3 className="font-bold text-red-900 mb-3 flex items-center gap-2">
                    <Target className="w-5 h-5" />
                    Factores que ralentizan
                  </h3>
                  <ul className="space-y-2 text-gray-700 text-sm">
                    <li>• <strong>Estudio irregular</strong> (solo los fines de semana)</li>
                    <li>• <strong>Nula exposición</strong> al inglés fuera del estudio</li>
                    <li>• <strong>Fosilización de errores</strong> sin corrección</li>
                    <li>• <strong>Falta de práctica oral</strong> (solo gramática)</li>
                    <li>• <strong>Materiales inadecuados</strong> (no específicos de Cambridge)</li>
                    <li>• <strong>Ansiedad ante exámenes</strong> que afecta al estudio</li>
                  </ul>
                </div>
              </div>

              <div className="bg-amber-50 border-l-4 border-amber-500 p-6 rounded-r-xl">
                <p className="text-gray-800">
                  <strong>El factor más subestimado:</strong> La exposición pasiva al inglés. Estudiantes que ven series en inglés, escuchan podcasts durante desplazamientos y leen noticias en inglés diariamente progresan hasta un 40% más rápido que quienes solo estudian formalmente. Cambia el idioma de tu teléfono y redes sociales a inglés: son horas de exposición "gratuitas" cada día.
                </p>
              </div>
            </section>

            {/* Section 5 - Expectativas realistas */}
            <section id="expectativas" className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                Expectativas Realistas: Planifica sin Engañarte
              </h2>

              <p className="text-gray-700 mb-6 leading-relaxed">
                Uno de los errores más comunes es subestimar el tiempo necesario y presentarse antes de estar preparado, desperdiciando el coste de la inscripción. Aquí tienes una guía para establecer expectativas realistas:
              </p>

              <div className="space-y-4 mb-8">
                <div className="bg-white border border-gray-200 rounded-xl p-6">
                  <h3 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
                    <Target className="w-5 h-5 text-emerald-600" />
                    Haz un test de nivel real
                  </h3>
                  <p className="text-gray-700">No confíes en tu percepción subjetiva. Realiza un test de nivel objetivo (un examen de práctica del B2 First completo y cronometrado). Tu puntuación real puede sorprenderte, tanto positiva como negativamente. Muchos candidatos se autoperciben en B2 cuando realmente están en B1, y otros se infravaloran pensando que están en A2 cuando ya tienen un B1 funcional.</p>
                </div>

                <div className="bg-white border border-gray-200 rounded-xl p-6">
                  <h3 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
                    <Target className="w-5 h-5 text-emerald-600" />
                    Planifica con margen
                  </h3>
                  <p className="text-gray-700">Añade un 20-30% de tiempo extra al estimado inicial. Si crees que necesitas 4 meses, planifica para 5. Imprevistos (enfermedad, trabajo extra, vacaciones, pérdida de motivación) son inevitables. Tener margen te permite absorber estos contratiempos sin comprometer tu fecha de examen.</p>
                </div>

                <div className="bg-white border border-gray-200 rounded-xl p-6">
                  <h3 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
                    <Target className="w-5 h-5 text-emerald-600" />
                    Establece hitos intermedios
                  </h3>
                  <p className="text-gray-700">Divide la preparación en fases con objetivos medibles. Por ejemplo: "En 4 semanas, obtener 145+ en un simulacro de Reading", "En 8 semanas, escribir un essay sin errores gramaticales graves". Estos hitos te permiten evaluar tu progreso y ajustar el plan si vas demasiado lento o demasiado rápido.</p>
                </div>

                <div className="bg-white border border-gray-200 rounded-xl p-6">
                  <h3 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
                    <Target className="w-5 h-5 text-emerald-600" />
                    Inscríbete cuando estés preparado, no antes
                  </h3>
                  <p className="text-gray-700">No te inscribas al examen el primer día de preparación "para darte presión". La presión de una fecha fija puede ser motivadora, pero si resulta ser demasiado pronto, habrás gastado 210-230 EUR en un intento prematuro. Inscríbete cuando tus simulacros muestren consistentemente puntuaciones por encima de 160 puntos.</p>
                </div>
              </div>

              <div className="bg-emerald-50 border-l-4 border-emerald-500 p-6 rounded-r-xl">
                <p className="text-gray-800 font-medium">
                  <strong>Regla de oro:</strong> Si en tus últimos 3 simulacros completos obtienes 165+ puntos de media (5 puntos por encima del mínimo), estás preparado para inscribirte. Este margen de seguridad absorbe la variabilidad del día del examen y los nervios.
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
                  El tiempo para preparar el <a href="/examenes-cambridge/b2-first/" className="text-emerald-600 hover:underline font-medium">B2 First</a> varía significativamente según tu nivel de partida, dedicación y método de estudio. Desde 3-4 meses con un B1+ sólido hasta 12-18 meses desde niveles más bajos, lo importante es ser realista con tus expectativas y mantener la constancia. Las 200-600 horas de estudio necesarias son una inversión que rinde frutos permanentes, ya que el certificado B2 First no caduca nunca.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Si quieres optimizar tu tiempo de preparación, nuestros <a href="/cursos-ingles/adultos/" className="text-emerald-600 hover:underline font-medium">cursos para adultos</a> combinan la eficacia de clases presenciales con nuestra <a href="/metodologia/" className="text-emerald-600 hover:underline font-medium">metodología probada</a> para que alcances tu objetivo en el menor tiempo posible. Realizamos un test de nivel inicial gratuito para recomendarte el plan de preparación más adecuado a tu situación.
                </p>
              </div>
            </section>

            {/* CTA */}
            <div className="bg-gradient-to-r from-emerald-600 to-teal-600 rounded-2xl p-8 text-center text-white">
              <h3 className="text-2xl font-bold mb-4">¿Quieres saber cuánto tiempo necesitas?</h3>
              <p className="text-emerald-100 mb-6 max-w-2xl mx-auto">
                Realizamos un test de nivel gratuito para recomendarte el plan de preparación más eficiente según tu nivel actual y tus objetivos.
              </p>
              <a
              href="/contacto/"
                className="inline-flex items-center gap-2 bg-white text-emerald-600 px-8 py-4 rounded-xl font-semibold hover:bg-emerald-50 transition-colors"
              >
                Solicitar test de nivel gratuito
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
                <a href="/cursos-ingles/adultos/" className="group bg-gray-50 rounded-xl p-6 hover:bg-emerald-50 transition-colors">
                  <h3 className="font-semibold text-gray-900 group-hover:text-emerald-600 transition-colors mb-2">
                    Cursos de Inglés para Adultos
                  </h3>
                  <p className="text-gray-600 text-sm">Programas de preparación Cambridge adaptados a tu nivel y disponibilidad.</p>
                </a>
                <a href="/metodologia/" className="group bg-gray-50 rounded-xl p-6 hover:bg-emerald-50 transition-colors">
                  <h3 className="font-semibold text-gray-900 group-hover:text-emerald-600 transition-colors mb-2">
                    Nuestra Metodología
                  </h3>
                  <p className="text-gray-600 text-sm">Descubre cómo optimizamos la preparación Cambridge de cada alumno.</p>
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
              href="https://www.cambridgeenglish.org/es/exams-and-tests/first/preparation/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-blue-600 hover:underline"
            >
              → Recursos de preparación en Cambridge English - B2 First oficial
            </a>
          </div>
        </section>

        <Footer />
      </div>

      {/* Schema.org Structured Data */}
</>
  );
}