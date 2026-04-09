import React, { useState, useEffect } from 'react';
import { BarChart3, Clock, ChevronDown, ChevronUp, CheckCircle, ArrowRight, Award, TrendingUp } from 'lucide-react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import LeadForm from '../../components/LeadForm';
import FAQSection from '../../components/FAQSection';
import Breadcrumb from '../../components/Breadcrumb';
import { generateArticleSchema, businessInfo } from '../../utils/schemaData';
import type { FAQItem } from '../../utils/schemaData';
import { blogImages } from '@/utils/images';

const escalaFaqs = [
  {
    question: "¿Cuáles son los niveles de idioma A1, A2, B1, B2, C1 y C2?",
    answer: "Los niveles de idioma según el MCER son: A1 (Principiante) para expresiones básicas y presentaciones; A2 (Básico) para tareas rutinarias y frases frecuentes; B1 (Intermedio) para situaciones cotidianas y textos estándar; B2 (Intermedio Alto) para textos complejos y conversaciones fluidas; C1 (Avanzado) para uso efectivo en contextos sociales, académicos y profesionales; C2 (Maestría) para comprensión casi total con fluidez y precisión nativa."
  },
  {
    question: "¿Qué es A1, A2, B1, B2, C1, C2 en inglés?",
    answer: "Los niveles A1, A2, B1, B2, C1, C2 en inglés son los seis niveles del Marco Común Europeo de Referencia (MCER) que describen competencia lingüística: A1 (Principiante) para expresiones básicas; A2 (Elemental) para tareas rutinarias; B1 (Intermedio) para situaciones familiares; B2 (Intermedio Alto) para textos complejos y comunicación fluida; C1 (Avanzado) para uso flexible académico-profesional; C2 (Maestría) para comprensión total con precisión nativa."
  },
  {
    question: "¿Qué significa A1, A2, B1, B2, C1, C2 en inglés?",
    answer: "Los niveles A1, A2, B1, B2, C1, C2 en inglés representan la escala del Marco Común Europeo de Referencia (MCER) que mide competencia lingüística. A1 (Principiante) domina expresiones básicas; A2 (Básico) maneja conversaciones rutinarias; B1 (Intermedio) comprende textos claros familiares; B2 (Intermedio Alto) interactúa fluidamente con nativos; C1 (Avanzado) usa el idioma efectivamente en contextos profesionales; C2 (Maestría) comprende prácticamente todo con precisión nativa."
  },
  {
    question: "¿Cuáles son los 7 tipos de inglés?",
    answer: "Los 7 tipos de inglés principales son: inglés norteamericano (estadounidense), británico, australiano, canadiense, sudafricano, neozelandés e indio. Existen aproximadamente 100 variedades regionales y locales sin un \"inglés estándar\" único. Las diferencias incluyen vocabulario (\"holiday\" vs \"vacation\"), ortografía (\"centre\" vs \"center\") y pronunciación. El inglés escocés, irlandés y singapurense también constituyen variedades reconocidas con características fonéticas y léxicas distintivas."
  },
  {
    question: "¿Qué diferencia hay entre A1 y A2 en inglés?",
    answer: "La diferencia entre A1 y A2 en inglés radica en la amplitud comunicativa: A1 (Principiante) permite usar expresiones básicas, presentarse, responder preguntas sobre detalles personales y interactuar de forma muy sencilla con ayuda. A2 (Básico) comprende expresiones frecuentes sobre áreas inmediatas (familia, compras, empleo), participa en conversaciones informales, describe su pasado y entorno, e intercambia información en tareas rutinarias con lenguaje simple y directo."
  },
  {
    question: "¿Qué significa que soy A1 en inglés?",
    answer: "Ser A1 en inglés significa poseer el nivel principiante del MCER, el más básico de los seis niveles (A1-C2). Permite comprender expresiones cotidianas muy comunes, presentarse, hacer preguntas sobre detalles personales (dónde vive, qué posee, a quién conoce), pedir en tiendas con frases simples, entender correspondencia sencilla y redactar mensajes breves. Requiere que el interlocutor hable despacio y con claridad para comunicarse eficazmente en situaciones inmediatas."
  },
  {
    question: "¿Qué debe dominar un A1 en inglés?",
    answer: "Un A1 en inglés debe dominar expresiones cotidianas muy comunes y frases sencillas para necesidades inmediatas, presentarse a sí mismo y a otros, hacer y responder preguntas sobre detalles personales (dónde vive, qué posee, a quién conoce), pedir artículos en tiendas, comprender correspondencia elemental, redactar mensajes simples y comunicarse de forma básica cuando el interlocutor habla despacio y con claridad, desarrollando habilidades de escucha, lectura, escritura y conversación."
  },
  {
    question: "¿Cuando alguien te llama A1?",
    answer: "Cuando alguien te llama A1 se refiere al nivel principiante del MCER, el primer grado de competencia lingüística de seis niveles (A1-C2). Esto indica que comprendes y usas expresiones cotidianas muy frecuentes y frases sencillas para necesidades inmediatas, te presentas a ti mismo y a otros, haces y respondes preguntas sobre detalles personales básicos (domicilio, pertenencias, conocidos) y te comunicas de forma elemental si el interlocutor habla despacio y con claridad."
  },
  {
    question: "¿Cuál es el nivel más fácil de inglés?",
    answer: "El nivel más fácil de inglés es el A1 (principiante) del MCER, utilizado globalmente para organizar lecciones y exámenes. Los estudiantes comienzan con conceptos básicos como números y colores, avanzando a vocabulario cotidiano (animales, familia, comida, deportes). Permite comprender expresiones muy comunes, presentarse, hacer preguntas sobre detalles personales (domicilio, pertenencias, conocidos) y comunicarse de forma simple si el interlocutor habla despacio y con claridad."
  }
];

export const articleSchema = generateArticleSchema({
    headline: "Escala Cambridge Explicada: Niveles y Puntuaciones 2026",
    description: "Guía completa de la escala Cambridge: niveles A1-C2, puntuaciones, equivalencias MCER y qué significa cada Grade.",
    url: `${businessInfo.url}/blog/escala-cambridge`,
    datePublished: "2025-01-05"
  });

export const faqs: FAQItem[] = [
    {
      question: "¿Qué significa exactamente una puntuación de 160 en la escala Cambridge?",
      answer: "Una puntuación de 160 certifica nivel B2 del MCER, indicando usuario independiente capaz de desenvolverse en situaciones académicas y profesionales comunes. Específicamente, 160 es el mínimo para aprobar B2 First con Grade C, demostrando competencia sólida aunque con áreas mejorables en precisión o fluidez."
    }

  ,
    {
      question: "¿Por qué mi puntuación global difiere del promedio de mis habilidades individuales?",
      answer: "Cambridge calcula la puntuación global ponderando las habilidades según complejidad, no mediante simple promedio aritmético. Writing y Speaking suelen pesar más por requerir producción activa versus comprensión pasiva. Una diferencia de 2-3 puntos entre el promedio manual y la puntuación oficial es completamente normal."
    },
    {
      question: "¿Puedo aprobar un examen pero obtener certificación del nivel inferior?",
      answer: "No exactamente. En Cambridge, \"aprobar\" significa alcanzar el nivel objetivo del examen. Sin embargo, si realizas B2 First y obtienes 140-159 puntos, recibes certificado B1 en lugar de B2. Técnicamente no aprobaste First (que requiere 160+), pero sí demuestras competencia B1 certificable oficialmente."
    },
    {
      question: "¿Cuánto tiempo permanece válida mi certificación de la escala Cambridge?",
      answer: "Los certificados Cambridge no caducan formalmente; sin embargo, instituciones suelen considerar resultados con antigüedad máxima de 2 años, pues las habilidades lingüísticas pueden deteriorarse sin uso. Algunas universidades exigen explícitamente \"certificado emitido en los últimos 24 meses\" para garantizar que tu nivel reflejado sigue vigente."
    },
    {
      question: "¿Cómo puedo mejorar mi puntuación en áreas específicas identificadas?",
      answer: "Analiza tu Statement of Results detalladamente para identificar habilidades débiles. Si Writing puntúa bajo, practica redacción estructurada con feedback profesional sobre gramática y organización. Para Speaking, busca conversación regular con hablantes competentes. Cambridge ofrece materiales específicos por habilidad para práctica focalizada según tus necesidades."
    }
  ];

export default function EscalaCambridgePage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [openFaq, setOpenFaq] = useState<number | null>(null);


  const scaleData = [
    { level: "C2", range: "200-230", exam: "C2 Proficiency", color: "bg-purple-500" },
    { level: "C1", range: "180-199", exam: "C1 Advanced", color: "bg-indigo-500" },
    { level: "B2", range: "160-179", exam: "B2 First (Grade A)", color: "bg-blue-500" },
    { level: "B2", range: "140-159", exam: "B2 First", color: "bg-cyan-500" },
    { level: "B1", range: "120-139", exam: "B1 Preliminary", color: "bg-green-500" },
    { level: "A2", range: "100-119", exam: "A2 Key", color: "bg-yellow-500" }
  ];

  const grades = [
    { grade: "Grade A", description: "Rendimiento excepcional - Certifica nivel superior", color: "text-green-600", bg: "bg-green-50" },
    { grade: "Grade B", description: "Aprobado con buen rendimiento", color: "text-blue-600", bg: "bg-blue-50" },
    { grade: "Grade C", description: "Aprobado con nivel mínimo requerido", color: "text-amber-600", bg: "bg-amber-50" },
    { grade: "Level B1/B2", description: "No aprobado pero demuestra nivel inferior", color: "text-zinc-600", bg: "bg-zinc-100" }
  ];

  return (
    <>
<Navbar />

      {/* Hero Section */}
      <header className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden">
        <div className="absolute inset-0">
          <img src={blogImages.cambridgeCertificate.url} alt="Certificado Cambridge English centro oficial Impulse Academy" className="w-full h-full object-cover" loading="eager" />
          <div className="absolute inset-0 bg-gradient-to-br from-accent-blue/95 via-accent-blue/85 to-[#0a3560]/75"></div>
        </div>
        <div className="absolute inset-0 hero-grain opacity-[0.03]"></div>
        <div className="absolute -top-32 -right-32 w-[420px] h-[420px] rounded-full bg-brand-red/[0.04]"></div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb
          items={[
          { label: 'Blog', href: '/blog' },
          { label: 'Escala Cambridge' }
          ]}
          variant="light"
          />

          <div className="mt-12 md:mt-16">
            <div className="flex items-center gap-4 mb-6 animate-hero-fade-up">
              <div className="w-8 h-px bg-white/40"></div>
              <span className="font-display text-white/70 text-xs uppercase tracking-[0.2em]">
                Exámenes Cambridge
              </span>
            </div>

            <h1 className="font-serif text-3xl md:text-5xl lg:text-6xl text-white tracking-tight leading-[1.1] mb-6 animate-hero-fade-up animation-delay-100">
              Escala Cambridge: Puntuaciones, Niveles y Equivalencias
            </h1>
            <div className="w-16 h-0.5 bg-brand-red mb-6 animate-hero-fade-up animation-delay-150"></div>
            <p className="font-display text-lg md:text-xl text-white/80 font-light leading-relaxed max-w-3xl animate-hero-fade-up animation-delay-200">
              Entiende cómo funciona la Cambridge English Scale, qué significan los Grades A, B y C, y cómo se relaciona con los niveles CEFR.
            </p>
          </div>
        </div>
      </header>

      {/* FAQ Section */}
      <FAQSection faqs={escalaFaqs} title="Preguntas Frecuentes sobre los Niveles de Inglés" />

      {/* Visual Scale */}
      <section className="py-8 bg-indigo-50">
        <div className="container mx-auto px-6 md:px-12">
          <div className="max-w-4xl">
            <h2 className="text-lg font-bold text-zinc-900 mb-4">Tabla de puntuaciones por examen (A2 Key – C2 Proficiency)</h2>
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <div className="space-y-2">
                {scaleData.map((item, index) => (
                  <div key={index} className="flex items-center gap-4">
                    <div className={`${item.color} text-white font-bold py-2 px-4 rounded-lg w-16 text-center`}>
                      {item.level}
                    </div>
                    <div className="flex-1 bg-zinc-100 rounded-lg p-3">
                      <div className="flex justify-between items-center">
                        <span className="font-medium text-zinc-700">{item.exam}</span>
                        <span className="text-sm text-zinc-500">{item.range} puntos</span>
                      </div>

                    </div>
                  </div>
                ))}
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
                La Cambridge English Scale es el sistema de puntuación unificado que utiliza Cambridge Assessment English para
                todos sus exámenes. Esta escala numérica (de 80 a 230 puntos) permite comparar resultados entre diferentes
                exámenes y correlacionarlos directamente con los niveles del <a href="https://www.coe.int/es/web/common-european-framework-reference-languages" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:underline">Marco Común Europeo de Referencia (MCER)</a>.
                Entender esta escala te ayudará a interpretar tus resultados y planificar mejor tu preparación.
              </p>
            </div>

            {/* Section 1 */}
            <section className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-zinc-900 mb-6">
                ¿Qué es la escala Cambridge?
              </h2>
              <p className="text-zinc-600 mb-6">
                Introducida en 2015, la Cambridge English Scale reemplazó el antiguo sistema de porcentajes con una escala
                numérica estandarizada. Su principal ventaja es que permite ver exactamente en qué punto del espectro de
                competencia lingüística te encuentras, independientemente del examen que hayas realizado.
              </p>

              <div className="bg-indigo-50 rounded-xl p-6 mb-6">
                <h3 className="font-bold text-zinc-900 mb-4 flex items-center gap-2">
                  <TrendingUp className="w-5 h-5 text-indigo-600" />
                  Ventajas de la escala unificada
                </h3>
                <ul className="space-y-2">
                  {[
                    "Comparación directa entre diferentes exámenes Cambridge",
                    "Correspondencia exacta con niveles CEFR (A2-C2)",
                    "Identificación precisa de áreas fuertes y débiles por habilidad",
                    "Reconocimiento internacional estandarizado",
                    "Posibilidad de certificar nivel superior con puntuación alta"
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-zinc-600">
                      <CheckCircle className="w-4 h-4 text-indigo-500 mt-1" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </section>

            {/* Section 2 - Grades */}
            <section className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-zinc-900 mb-6">
                ¿Qué puntuación necesitas para aprobar cada nivel?
              </h2>
              <p className="text-zinc-600 mb-6">
                Además de la puntuación numérica, Cambridge asigna un Grade que indica tu nivel de rendimiento en el examen.
                Este sistema determina qué certificado recibes y qué nivel CEFR acreditas oficialmente.
              </p>

              <div className="grid gap-4 mb-6">
                {grades.map((item, index) => (
                  <div key={index} className={`${item.bg} rounded-xl p-5 border-l-4 ${item.color.replace('text', 'border')}`}>
                    <h4 className={`font-bold ${item.color}`}>{item.grade}</h4>
                    <p className="text-zinc-600 text-sm mt-1">{item.description}</p>
                  </div>
                ))}
              </div>

              <div className="bg-amber-50 border-l-4 border-amber-400 p-4">
                <p className="text-amber-800">
                  <strong>Ejemplo práctico:</strong> Si presentas el B2 First y obtienes 180 puntos, recibes Grade A y
                  tu certificado indicará nivel C1, no solo B2. Esto te permite "saltar" un nivel si tu rendimiento es excepcional.
                </p>
              </div>
            </section>

            {/* Section 3 - Detailed Scores */}
            <section className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-zinc-900 mb-6">
                Equivalencias con el Marco Europeo (MCER)
              </h2>

              <div className="space-y-6">
                <div className="bg-zinc-50 rounded-xl p-6">
                  <h3 className="font-bold text-zinc-900 mb-4 flex items-center gap-2">
                    <Award className="w-5 h-5 text-blue-600" />
                    Puntuaciones B2 First (FCE)
                  </h3>
                  <div className="grid md:grid-cols-3 gap-4 text-sm">
                    <div className="bg-white rounded-lg p-3">
                      <p className="font-bold text-green-600">Grade A (180-190)</p>
                      <p className="text-zinc-500">Certifica nivel C1</p>
                    </div>
                    <div className="bg-white rounded-lg p-3">
                      <p className="font-bold text-blue-600">Grade B (173-179)</p>
                      <p className="text-zinc-500">Certifica nivel B2</p>
                    </div>
                    <div className="bg-white rounded-lg p-3">
                      <p className="font-bold text-amber-600">Grade C (160-172)</p>
                      <p className="text-zinc-500">Certifica nivel B2</p>
                    </div>

                  </div>
                  <p className="text-sm text-zinc-500 mt-3">140-159 puntos: Certificado de nivel B1</p>
                </div>

                <div className="bg-zinc-50 rounded-xl p-6">
                  <h3 className="font-bold text-zinc-900 mb-4 flex items-center gap-2">
                    <Award className="w-5 h-5 text-indigo-600" />
                    Puntuaciones C1 Advanced (CAE)
                  </h3>
                  <div className="grid md:grid-cols-3 gap-4 text-sm">
                    <div className="bg-white rounded-lg p-3">
                      <p className="font-bold text-green-600">Grade A (200-210)</p>
                      <p className="text-zinc-500">Certifica nivel C2</p>
                    </div>
                    <div className="bg-white rounded-lg p-3">
                      <p className="font-bold text-blue-600">Grade B (193-199)</p>
                      <p className="text-zinc-500">Certifica nivel C1</p>
                    </div>
                    <div className="bg-white rounded-lg p-3">
                      <p className="font-bold text-amber-600">Grade C (180-192)</p>
                      <p className="text-zinc-500">Certifica nivel C1</p>
                    </div>

                  </div>
                  <p className="text-sm text-zinc-500 mt-3">160-179 puntos: Certificado de nivel B2</p>
                </div>

                <div className="bg-zinc-50 rounded-xl p-6">
                  <h3 className="font-bold text-zinc-900 mb-4 flex items-center gap-2">
                    <Award className="w-5 h-5 text-purple-600" />
                    Puntuaciones C2 Proficiency (CPE)
                  </h3>
                  <div className="grid md:grid-cols-3 gap-4 text-sm">
                    <div className="bg-white rounded-lg p-3">
                      <p className="font-bold text-green-600">Grade A (220-230)</p>
                      <p className="text-zinc-500">Certifica nivel C2</p>
                    </div>
                    <div className="bg-white rounded-lg p-3">
                      <p className="font-bold text-blue-600">Grade B (213-219)</p>
                      <p className="text-zinc-500">Certifica nivel C2</p>
                    </div>
                    <div className="bg-white rounded-lg p-3">
                      <p className="font-bold text-amber-600">Grade C (200-212)</p>
                      <p className="text-zinc-500">Certifica nivel C2</p>
                    </div>

                  </div>
                  <p className="text-sm text-zinc-500 mt-3">180-199 puntos: Certificado de nivel C1</p>
                </div>

              </div>
            </section>

            {/* Section 4 - How to Improve */}
            <section className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-zinc-900 mb-6">
                Cómo interpretar tu resultado Cambridge
              </h2>
              <p className="text-zinc-600 mb-6">
                Tu puntuación total es el promedio de las 4 habilidades evaluadas. Identificar tus áreas débiles y
                trabajarlas específicamente es la clave para subir en la escala.
              </p>

              <div className="grid md:grid-cols-2 gap-4 mb-6">
                <div className="bg-zinc-50 rounded-xl p-5">
                  <h4 className="font-bold text-zinc-900 mb-3">Reading & Use of English</h4>
                  <p className="text-sm text-zinc-600 mb-2">
                    Practica comprensión de textos complejos, vocabulario avanzado y estructuras gramaticales.
                  </p>
                  <p className="text-xs text-indigo-600">Peso: 40% del examen escrito</p>
                </div>
                <div className="bg-zinc-50 rounded-xl p-5">
                  <h4 className="font-bold text-zinc-900 mb-3">Writing</h4>
                  <p className="text-sm text-zinc-600 mb-2">
                    Domina diferentes formatos: ensayos, emails, informes y reviews con estructura clara.
                  </p>
                  <p className="text-xs text-indigo-600">Peso: 20% del examen</p>
                </div>
                <div className="bg-zinc-50 rounded-xl p-5">
                  <h4 className="font-bold text-zinc-900 mb-3">Listening</h4>
                  <p className="text-sm text-zinc-600 mb-2">
                    Entrena con acentos variados, velocidades naturales y extracción de información específica.
                  </p>
                  <p className="text-xs text-indigo-600">Peso: 20% del examen</p>
                </div>
                <div className="bg-zinc-50 rounded-xl p-5">
                  <h4 className="font-bold text-zinc-900 mb-3">Speaking</h4>
                  <p className="text-sm text-zinc-600 mb-2">
                    Practica fluidez, pronunciación, interacción y desarrollo de ideas en tiempo limitado.
                  </p>
                  <p className="text-xs text-indigo-600">Peso: 20% del examen</p>
                </div>

              </div>

              <div className="bg-indigo-100 rounded-xl p-6">
                <p className="text-indigo-800">
                  En <a href="/academia-ingles-barrio-del-pilar/" className="text-indigo-900 hover:underline font-semibold">nuestra academia en Barrio del Pilar</a>, <a href="/academia-ingles-la-vaguada/" className="text-indigo-900 hover:underline font-semibold">junto a La Vaguada</a>, analizamos tu puntuación por habilidad para crear un plan
                  de mejora personalizado. Nuestros <a href="/cursos-ingles/adultos/" className="text-indigo-900 hover:underline font-semibold">cursos de inglés para adultos</a> y preparación para <a href="/examenes-cambridge/b2-first/" className="text-indigo-900 hover:underline font-semibold">B2 First</a> desde <strong>79€/mes</strong> te ayudan
                  a subir en la escala de forma eficiente.
                </p>
              </div>
            </section>

            {/* FAQ Section */}
            <section className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-zinc-900 mb-6">
                Preguntas frecuentes sobre la escala Cambridge
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
              <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl p-8 text-white">
                <h2 className="text-2xl font-bold mb-4">Conclusión</h2>
                <p className="text-white/90 mb-6">
                  La Cambridge English Scale proporciona una visión clara y comparable de tu nivel de inglés. Entender
                  cómo funcionan los Grades y las puntuaciones te permite establecer objetivos realistas y medir tu
                  progreso de forma precisa. Recuerda que con puntuaciones excepcionales puedes certificar niveles
                  superiores al examen presentado. Ya sea que busques preparar el <a href="/examenes-cambridge/b1-preliminary/" className="text-white hover:underline font-semibold">B1 Preliminary</a> o el <a href="/examenes-cambridge/b2-first/" className="text-white hover:underline font-semibold">B2 First</a>, entender la escala es fundamental.
                </p>
                <p className="text-white/90">
                  En <a href="/academia-ingles-barrio-del-pilar/" className="text-white hover:underline font-semibold">nuestra academia</a> te preparamos para alcanzar tu puntuación objetivo con
                  metodología probada y seguimiento personalizado por solo <strong>79€/mes</strong>.
                </p>
              </div>
            </section>

            {/* CTA */}
            <section className="mb-12">
              <div className="bg-zinc-900 rounded-2xl p-8">
                <div className="flex flex-col md:flex-row items-center gap-6">
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-white mb-2">
                      ¿Quieres mejorar tu puntuación Cambridge?
                    </h3>
                    <p className="text-zinc-400">
                      Te ayudamos a subir en la escala con preparación específica para tu nivel objetivo.
                    </p>
                  </div>
                  <a
              href="/contacto/"
                    className="bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-3 px-8 rounded-lg transition-colors whitespace-nowrap"
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
                <a href="/examenes-cambridge/" className="bg-zinc-50 rounded-xl p-4 hover:bg-zinc-100 transition-colors">
                  <span className="text-xs font-bold text-indigo-600">GUÍA COMPLETA</span>
                  <h4 className="font-bold text-zinc-900 mt-1">Guía Completa de Exámenes Cambridge 2026</h4>
                </a>
                <a href="/examenes-cambridge/b2-first/" className="bg-zinc-50 rounded-xl p-4 hover:bg-zinc-100 transition-colors">
                  <span className="text-xs font-bold text-indigo-600">B2 FIRST</span>
                  <h4 className="font-bold text-zinc-900 mt-1">Cambridge B2: 7 Beneficios del Examen First</h4>
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
            href="https://www.coe.int/es/web/common-european-framework-reference-languages"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-indigo-600 hover:underline"
          >
            → Más información en Consejo de Europa - Marco Común Europeo (MCER)
          </a>
        </div>
      </section>

      <Footer />

</>
  );
}
