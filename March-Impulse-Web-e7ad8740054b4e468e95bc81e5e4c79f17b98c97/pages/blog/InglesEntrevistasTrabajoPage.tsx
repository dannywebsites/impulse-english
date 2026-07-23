import React, { useState, useEffect } from 'react';
import { ChevronRight, Clock, Calendar, ChevronDown, ChevronUp, BookOpen, CheckCircle, Target, ArrowRight, Award } from 'lucide-react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import OneToOneCTA from '../../components/OneToOneCTA';
import InlineOneToOneCTA from '../../components/InlineOneToOneCTA';
import Breadcrumb from '../../components/Breadcrumb';
import { generateArticleSchema, businessInfo } from '../../utils/schemaData';

export const articleSchema = generateArticleSchema({
    headline: "Inglés para Entrevistas de Trabajo: Guía Completa",
    description: "Prepara tu entrevista de trabajo en inglés: frases clave, preguntas frecuentes, vocabulario específico y técnicas de confianza. Guía práctica.",
    url: `${businessInfo.url}/blog/ingles-entrevistas-trabajo`,
    datePublished: "2025-03-01"
  });

export const faqItems = [
    {
      question: "¿Qué nivel de inglés necesito para una entrevista en inglés?",
      answer: "El nivel mínimo recomendado es B2 (Upper-Intermediate). Con este nivel puedes mantener una conversación fluida sobre tu experiencia profesional, responder preguntas imprevistas y expresar opiniones con matices. Para puestos directivos o en empresas donde el inglés es la lengua vehicular, necesitarás C1. Un B1 puede ser suficiente solo si la entrevista incluye pocas preguntas en inglés dentro de un proceso principalmente en español."
    }

  ,
    {
      question: "¿Cómo puedo preparar una entrevista en inglés en 1 semana?",
      answer: "Con una semana tienes tiempo suficiente para una preparación intensiva. Día 1-2: Practica las 10 preguntas más comunes con respuestas estructuradas. Día 3-4: Investiga vocabulario específico de la empresa y el sector. Día 5-6: Realiza simulacros cronometrados con un compañero o profesor. Día 7: Repaso general y práctica de small talk. Dedica mínimo 2 horas diarias y graba tus respuestas para identificar errores."
    },
    {
      question: "¿Qué preguntas suelen hacer en una entrevista en inglés?",
      answer: "Las preguntas más frecuentes son: 'Tell me about yourself', 'Why are you interested in this role?', 'What are your strengths and weaknesses?', 'Where do you see yourself in 5 years?', 'Tell me about a challenge you faced at work' y 'Why should we hire you?'. Muchas empresas también incluyen preguntas situacionales tipo STAR (Situation, Task, Action, Result) para evaluar competencias específicas."
    },
    {
      question: "¿Importa el acento al hablar inglés en una entrevista?",
      answer: "No, el acento español no es un problema en absoluto. Los entrevistadores valoran la claridad, la fluidez y la capacidad de comunicar ideas complejas, no la pronunciación perfecta. Lo importante es hablar a un ritmo natural, articular bien las palabras y evitar errores graves de pronunciación que dificulten la comprensión. Un acento extranjero es completamente normal en entornos profesionales internacionales."
    },
    {
      question: "¿Cómo puedo manejar los nervios durante la entrevista en inglés?",
      answer: "Los nervios son normales y se reducen con preparación. Estrategias probadas: 1) Prepara y practica respuestas hasta que fluyan naturalmente, 2) Usa la técnica de respiración 4-7-8 antes de entrar, 3) Ten preparadas frases de transición como 'That's a great question, let me think...' para ganar tiempo, 4) Recuerda que una pausa breve para pensar es perfectamente aceptable, 5) Practica con simulacros reales con un profesor o amigo nativo."
    }
  ];

export default function InglesEntrevistasTrabajoPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const [openFaq, setOpenFaq] = useState<number | null>(null);


  const commonQuestions = [
    { english: "Tell me about yourself", spanish: "Cuéntame sobre ti", tip: "Estructura: presente (rol actual) → pasado (experiencia relevante) → futuro (por qué esta empresa)" },
    { english: "Why are you interested in this role?", spanish: "¿Por qué te interesa este puesto?", tip: "Conecta tus habilidades con las necesidades específicas del puesto" },
    { english: "What are your greatest strengths?", spanish: "¿Cuáles son tus fortalezas?", tip: "Elige 2-3 fortalezas con ejemplos concretos y cuantificables" },
    { english: "Tell me about a challenge you overcame", spanish: "Cuéntame un reto que superaste", tip: "Usa el método STAR: Situation, Task, Action, Result" },
    { english: "Where do you see yourself in 5 years?", spanish: "¿Dónde te ves en 5 años?", tip: "Muestra ambición realista alineada con la empresa" },
    { english: "Why should we hire you?", spanish: "¿Por qué deberíamos contratarte?", tip: "Resume tu propuesta de valor única en 3 puntos clave" },
    { english: "What's your biggest weakness?", spanish: "¿Cuál es tu mayor debilidad?", tip: "Menciona una debilidad real con tu plan de mejora activo" },
    { english: "Do you have any questions for us?", spanish: "¿Tienes preguntas para nosotros?", tip: "Siempre prepara 2-3 preguntas sobre la cultura y proyectos del equipo" },
    { english: "Describe your management style", spanish: "Describe tu estilo de gestión", tip: "Usa ejemplos específicos de liderazgo y resultados" },
    { english: "How do you handle pressure?", spanish: "¿Cómo manejas la presión?", tip: "Da un ejemplo concreto con deadline real y resultado positivo" }
  ];

  return (
    <>
<div className="min-h-screen flex flex-col bg-white">
        <Navbar />

        <main className="flex-grow">
          {/* Hero Section */}
          <header className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden">
            <div className="absolute inset-0">
              <img src="/images/academy/adult-one-to-one-classes.jpg" alt="Preparación de inglés para entrevistas de trabajo en Impulse Academy" className="w-full h-full object-cover" loading="eager" />
              <div className="absolute inset-0 bg-gradient-to-br from-accent-blue/95 via-accent-blue/85 to-[#0a3560]/75"></div>
            </div>
            <div className="absolute inset-0 hero-grain opacity-[0.03]"></div>
            <div className="absolute -top-32 -right-32 w-[420px] h-[420px] rounded-full bg-brand-red/[0.04]"></div>
            <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
              <Breadcrumb
                items={[
                  { label: 'Blog', href: '/blog' },
                  { label: 'Inglés Entrevistas Trabajo' }
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
                  Inglés para Entrevistas de Trabajo: Guía Completa
                </h1>
                <div className="w-16 h-0.5 bg-brand-red mb-6 animate-hero-fade-up animation-delay-150"></div>
                <p className="font-display text-lg md:text-xl text-white/80 font-light leading-relaxed max-w-3xl animate-hero-fade-up animation-delay-200">
                  Frases clave, preguntas frecuentes, vocabulario profesional y técnicas de confianza para superar tu próxima entrevista en inglés.
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
                <li><a href="#tipos-entrevista" className="text-emerald-600 hover:text-emerald-700 transition-colors">→ Tipos de Entrevista en Inglés</a></li>
                <li><a href="#preguntas-frecuentes" className="text-emerald-600 hover:text-emerald-700 transition-colors">→ 10 Preguntas Frecuentes con Respuestas Modelo</a></li>
                <li><a href="#vocabulario" className="text-emerald-600 hover:text-emerald-700 transition-colors">→ Vocabulario Profesional Esencial</a></li>
                <li><a href="#tecnicas" className="text-emerald-600 hover:text-emerald-700 transition-colors">→ Técnicas de Confianza y Fluidez</a></li>
                <li><a href="#plan-preparacion" className="text-emerald-600 hover:text-emerald-700 transition-colors">→ Plan de Preparación de 1 Semana</a></li>
                <li><a href="#faq" className="text-emerald-600 hover:text-emerald-700 transition-colors">→ Preguntas Frecuentes</a></li>
              </ul>
            </div>

            {/* Introduction */}
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              Cada vez más procesos de selección en España incluyen al menos una fase en inglés. Ya sea una entrevista completa con un manager internacional, una llamada telefónica con recursos humanos o una presentación técnica, <strong>dominar el inglés para entrevistas</strong> puede ser la diferencia entre conseguir o perder tu trabajo soñado. Esta guía te ofrece las herramientas prácticas que necesitas: desde las preguntas más habituales con respuestas modelo, hasta un plan de preparación intensiva de una semana.
            </p>

            {/* Section 1 - Tipos de Entrevista */}
            <section id="tipos-entrevista" className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                Tipos de Entrevista en Inglés
              </h2>

              <p className="text-gray-700 mb-6 leading-relaxed">
                No todas las entrevistas en inglés son iguales. Conocer el formato te ayudará a prepararte de forma específica y reducir la incertidumbre:
              </p>

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div className="bg-emerald-50 rounded-xl p-5">
                  <h3 className="font-bold text-emerald-900 mb-3 flex items-center gap-2">
                    <CheckCircle className="w-5 h-5" />
                    Entrevista telefónica (Phone screening)
                  </h3>
                  <p className="text-gray-700 text-sm mb-2">Primera toma de contacto, generalmente 15-20 minutos. Sin lenguaje corporal para apoyarte, la claridad verbal es crucial.</p>
                  <ul className="space-y-1 text-gray-700 text-sm">
                    <li>• Habla más despacio de lo normal</li>
                    <li>• Ten tu CV y notas delante</li>
                    <li>• Usa frases de confirmación: "If I understand correctly..."</li>
                  </ul>
                </div>
                <div className="bg-emerald-50 rounded-xl p-5">
                  <h3 className="font-bold text-emerald-900 mb-3 flex items-center gap-2">
                    <CheckCircle className="w-5 h-5" />
                    Videollamada (Video interview)
                  </h3>
                  <p className="text-gray-700 text-sm mb-2">Formato más común post-pandemia. Combina comunicación verbal con expresión facial y gestualidad.</p>
                  <ul className="space-y-1 text-gray-700 text-sm">
                    <li>• Mira a la cámara, no a la pantalla</li>
                    <li>• Fondo profesional y buena iluminación</li>
                    <li>• Puedes tener notas discretas fuera de cámara</li>
                  </ul>
                </div>
                <div className="bg-emerald-50 rounded-xl p-5">
                  <h3 className="font-bold text-emerald-900 mb-3 flex items-center gap-2">
                    <CheckCircle className="w-5 h-5" />
                    Entrevista presencial
                  </h3>
                  <p className="text-gray-700 text-sm mb-2">La más completa y exigente. El entrevistador evalúa todo: idioma, comunicación no verbal, confianza.</p>
                  <ul className="space-y-1 text-gray-700 text-sm">
                    <li>• Practica el small talk de entrada</li>
                    <li>• Mantén contacto visual natural</li>
                    <li>• Prepara un cierre profesional en inglés</li>
                  </ul>
                </div>
                <div className="bg-emerald-50 rounded-xl p-5">
                  <h3 className="font-bold text-emerald-900 mb-3 flex items-center gap-2">
                    <CheckCircle className="w-5 h-5" />
                    Assessment center / Case study
                  </h3>
                  <p className="text-gray-700 text-sm mb-2">Formato habitual en consultoría y banca. Incluye presentaciones, debates grupales y resolución de casos en inglés.</p>
                  <ul className="space-y-1 text-gray-700 text-sm">
                    <li>• Practica presentaciones de 5 minutos</li>
                    <li>• Domina vocabulario de análisis y datos</li>
                    <li>• Aprende a debatir con respeto: "I see your point, however..."</li>
                  </ul>
                </div>
              </div>

              <div className="bg-emerald-50 border-l-4 border-emerald-500 p-6 rounded-r-xl">
                <p className="text-gray-800 font-medium">
                  <strong>Consejo clave:</strong> Pregunta siempre al recruiter sobre el formato de la entrevista. Saber si será telefónica, por vídeo o presencial, y si incluirá case study, te permite prepararte de forma mucho más efectiva.
                </p>
              </div>
            </section>

            {/* Section 2 - 10 Preguntas Frecuentes */}
            <section id="preguntas-frecuentes" className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                10 Preguntas Frecuentes con Respuestas Modelo
              </h2>

              <p className="text-gray-700 mb-6 leading-relaxed">
                Estas son las preguntas que aparecen en el <strong>90% de las entrevistas en inglés</strong>. Prepara tu versión personalizada de cada una siguiendo los consejos de estructura:
              </p>

              <div className="overflow-x-auto mb-8">
                <table className="w-full border-collapse bg-white rounded-xl overflow-hidden shadow-lg">
                  <thead>
                    <tr className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white">
                      <th className="text-left p-4 font-semibold">Pregunta en Inglés</th>
                      <th className="text-left p-4 font-semibold">Traducción</th>
                      <th className="text-left p-4 font-semibold">Consejo</th>
                    </tr>
                  </thead>
                  <tbody>
                    {commonQuestions.map((item, index) => (
                      <tr key={index} className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                        <td className="p-4 font-medium text-gray-900 text-sm">{item.english}</td>
                        <td className="p-4 text-gray-700 text-sm">{item.spanish}</td>
                        <td className="p-4 text-gray-700 text-sm">{item.tip}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="bg-white border border-gray-200 rounded-xl p-6">
                <h3 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                  <Target className="w-5 h-5 text-emerald-600" />
                  Ejemplo de respuesta modelo: "Tell me about yourself"
                </h3>
                <div className="bg-gray-50 rounded-lg p-4 text-sm text-gray-700 italic">
                  "I'm a marketing specialist with 5 years of experience in digital campaigns. Currently, I lead the SEO strategy at [company], where I've increased organic traffic by 40% in the last year. Before that, I worked at [previous company] managing social media for international brands. I'm now looking for a senior role where I can combine my analytical skills with creative strategy, which is exactly what attracted me to this position."
                </div>
                <p className="text-gray-600 text-sm mt-3">Estructura: Presente (quién eres) → Pasado (experiencia relevante) → Futuro (por qué esta oportunidad).</p>
              </div>
            </section>

            {/* Section 3 - Vocabulario */}
            <section id="vocabulario" className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                Vocabulario Profesional Esencial
              </h2>

              <p className="text-gray-700 mb-6 leading-relaxed">
                Dominar el vocabulario correcto demuestra profesionalismo y te ayuda a expresar ideas complejas con naturalidad. Estos son los grupos de vocabulario más importantes para entrevistas:
              </p>

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div className="bg-white border border-gray-200 rounded-xl p-6">
                  <h3 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                    <BookOpen className="w-5 h-5 text-emerald-600" />
                    Describir Logros
                  </h3>
                  <ul className="space-y-2 text-gray-700 text-sm">
                    <li>• <strong>Achieved / Accomplished</strong> - Logré / Conseguí</li>
                    <li>• <strong>Increased / Improved</strong> - Aumenté / Mejoré</li>
                    <li>• <strong>Implemented / Launched</strong> - Implementé / Lancé</li>
                    <li>• <strong>Led / Managed</strong> - Lideré / Gestioné</li>
                    <li>• <strong>Streamlined / Optimized</strong> - Optimicé / Simplifiqué</li>
                  </ul>
                </div>

                <div className="bg-white border border-gray-200 rounded-xl p-6">
                  <h3 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                    <BookOpen className="w-5 h-5 text-emerald-600" />
                    Describir Habilidades
                  </h3>
                  <ul className="space-y-2 text-gray-700 text-sm">
                    <li>• <strong>Problem-solving skills</strong> - Resolución de problemas</li>
                    <li>• <strong>Team player</strong> - Trabajo en equipo</li>
                    <li>• <strong>Attention to detail</strong> - Atención al detalle</li>
                    <li>• <strong>Time management</strong> - Gestión del tiempo</li>
                    <li>• <strong>Adaptability</strong> - Capacidad de adaptación</li>
                  </ul>
                </div>

                <div className="bg-white border border-gray-200 rounded-xl p-6">
                  <h3 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                    <BookOpen className="w-5 h-5 text-emerald-600" />
                    Frases de Transición
                  </h3>
                  <ul className="space-y-2 text-gray-700 text-sm">
                    <li>• <strong>"That's a great question..."</strong> - Para ganar tiempo</li>
                    <li>• <strong>"To give you an example..."</strong> - Para ilustrar</li>
                    <li>• <strong>"In my previous role..."</strong> - Para contextualizar</li>
                    <li>• <strong>"What excites me about..."</strong> - Para mostrar entusiasmo</li>
                    <li>• <strong>"If I may add..."</strong> - Para complementar</li>
                  </ul>
                </div>

                <div className="bg-white border border-gray-200 rounded-xl p-6">
                  <h3 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                    <BookOpen className="w-5 h-5 text-emerald-600" />
                    Preguntas para el Entrevistador
                  </h3>
                  <ul className="space-y-2 text-gray-700 text-sm">
                    <li>• <strong>"What does a typical day look like?"</strong></li>
                    <li>• <strong>"What are the team's main goals this year?"</strong></li>
                    <li>• <strong>"How would you describe the company culture?"</strong></li>
                    <li>• <strong>"What opportunities for growth are there?"</strong></li>
                    <li>• <strong>"What are the next steps in the process?"</strong></li>
                  </ul>
                </div>
              </div>

              <div className="bg-emerald-50 border-l-4 border-emerald-500 p-6 rounded-r-xl">
                <p className="text-gray-800 font-medium">
                  <strong>Importante:</strong> Evita traducciones literales del español. Frases como "I am a very worker person" (literal de "soy muy trabajador") suenan incorrectas. La forma correcta es "I'm a hard-working professional". Preparar vocabulario específico evita estos errores comunes de hispanohablantes.
                </p>
              </div>
            </section>

            {/* Section 4 - Técnicas de Confianza */}
            <section id="tecnicas" className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                Técnicas de Confianza y Fluidez
              </h2>

              <p className="text-gray-700 mb-6 leading-relaxed">
                La confianza se construye con preparación, pero también hay técnicas específicas que pueden ayudarte a proyectar seguridad incluso cuando estás nervioso:
              </p>

              <div className="space-y-4 mb-8">
                <div className="bg-gradient-to-r from-emerald-50 to-teal-50 rounded-xl p-6">
                  <h3 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                    <Award className="w-5 h-5 text-emerald-600" />
                    Método STAR para respuestas estructuradas
                  </h3>
                  <p className="text-gray-700 mb-3">El método STAR te da una estructura clara para responder preguntas conductuales, evitando divagar o quedarte en blanco:</p>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                    <div className="bg-white rounded-lg p-3 text-center">
                      <div className="text-emerald-600 font-bold text-lg">S</div>
                      <div className="text-gray-600 text-xs">Situation</div>
                      <div className="text-gray-500 text-xs mt-1">Contexto</div>
                    </div>
                    <div className="bg-white rounded-lg p-3 text-center">
                      <div className="text-emerald-600 font-bold text-lg">T</div>
                      <div className="text-gray-600 text-xs">Task</div>
                      <div className="text-gray-500 text-xs mt-1">Tu rol</div>
                    </div>
                    <div className="bg-white rounded-lg p-3 text-center">
                      <div className="text-emerald-600 font-bold text-lg">A</div>
                      <div className="text-gray-600 text-xs">Action</div>
                      <div className="text-gray-500 text-xs mt-1">Qué hiciste</div>
                    </div>
                    <div className="bg-white rounded-lg p-3 text-center">
                      <div className="text-emerald-600 font-bold text-lg">R</div>
                      <div className="text-gray-600 text-xs">Result</div>
                      <div className="text-gray-500 text-xs mt-1">Resultado</div>
                    </div>
                  </div>
                </div>

                <div className="bg-white border border-gray-200 rounded-xl p-6">
                  <h3 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
                    <Target className="w-5 h-5 text-emerald-600" />
                    Técnica del "Power Posing"
                  </h3>
                  <p className="text-gray-700">2 minutos antes de la entrevista, adopta una postura expansiva (de pie, brazos en jarras o extendidos). Estudios de Harvard demuestran que reduce el cortisol un 25% y aumenta la testosterona un 20%, proyectando más confianza naturalmente. Funciona tanto para entrevistas presenciales como antes de encender la cámara.</p>
                </div>

                <div className="bg-white border border-gray-200 rounded-xl p-6">
                  <h3 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
                    <Target className="w-5 h-5 text-emerald-600" />
                    Frases "puente" para ganar tiempo
                  </h3>
                  <p className="text-gray-700">Cuando necesites pensar, usa frases naturales en lugar de quedarte en silencio: <em>"That's an interesting question, let me think about the best example..."</em>, <em>"I'd say there are several aspects to consider..."</em>, <em>"From my experience, I've found that..."</em>. Estas frases te dan 5-10 segundos extra para organizar tu respuesta.</p>
                </div>

                <div className="bg-white border border-gray-200 rounded-xl p-6">
                  <h3 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
                    <Target className="w-5 h-5 text-emerald-600" />
                    Graba y revisa tus simulacros
                  </h3>
                  <p className="text-gray-700">Grábate respondiendo las 10 preguntas principales y analiza: velocidad (ni muy rápido ni muy lento), muletillas (elimina "um", "like", "you know"), estructura de respuestas (inicio-desarrollo-cierre) y lenguaje corporal. Cada revisión mejora significativamente tu desempeño en la entrevista real.</p>
                </div>
              </div>

              <div className="bg-amber-50 border-l-4 border-amber-500 p-6 rounded-r-xl">
                <p className="text-gray-800">
                  <strong>Error frecuente:</strong> Memorizar respuestas palabra por palabra. Si olvidas una frase, puedes quedarte totalmente bloqueado. Es mejor memorizar la <strong>estructura y puntos clave</strong> de cada respuesta, permitiéndote formularla con naturalidad cada vez.
                </p>
              </div>
            </section>

            {/* Section 5 - Plan de Preparación */}
            <section id="plan-preparacion" className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                Plan de Preparación de 1 Semana
              </h2>

              <p className="text-gray-700 mb-6 leading-relaxed">
                Si tu entrevista es en 7 días, sigue este plan intensivo para maximizar tu preparación. Dedica <strong>mínimo 2 horas diarias</strong> para resultados óptimos:
              </p>

              <div className="space-y-4 mb-8">
                <div className="bg-gradient-to-r from-emerald-50 to-teal-50 rounded-xl p-6">
                  <h3 className="font-bold text-gray-900 mb-2">Días 1-2: Investigación y base</h3>
                  <ul className="space-y-2 text-gray-700 text-sm">
                    <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-emerald-600 mt-0.5 flex-shrink-0" /> Investiga la empresa en profundidad: web, LinkedIn, noticias recientes</li>
                    <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-emerald-600 mt-0.5 flex-shrink-0" /> Prepara tu "elevator pitch" de 60 segundos en inglés</li>
                    <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-emerald-600 mt-0.5 flex-shrink-0" /> Lista 5 logros profesionales cuantificables para usar como ejemplos</li>
                    <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-emerald-600 mt-0.5 flex-shrink-0" /> Aprende vocabulario específico del sector y la empresa</li>
                  </ul>
                </div>

                <div className="bg-white border border-gray-200 rounded-xl p-6">
                  <h3 className="font-bold text-gray-900 mb-2">Días 3-4: Práctica de preguntas</h3>
                  <ul className="space-y-2 text-gray-700 text-sm">
                    <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-emerald-600 mt-0.5 flex-shrink-0" /> Prepara respuestas estructuradas (STAR) para las 10 preguntas principales</li>
                    <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-emerald-600 mt-0.5 flex-shrink-0" /> Graba tus respuestas y analiza errores comunes</li>
                    <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-emerald-600 mt-0.5 flex-shrink-0" /> Practica preguntas técnicas específicas de tu sector</li>
                    <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-emerald-600 mt-0.5 flex-shrink-0" /> Escucha podcasts profesionales en inglés (mínimo 30 min/día)</li>
                  </ul>
                </div>

                <div className="bg-white border border-gray-200 rounded-xl p-6">
                  <h3 className="font-bold text-gray-900 mb-2">Días 5-6: Simulacros reales</h3>
                  <ul className="space-y-2 text-gray-700 text-sm">
                    <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-emerald-600 mt-0.5 flex-shrink-0" /> Realiza 2-3 simulacros completos con un compañero, profesor o <a href="/cursos-ingles/adultos/" className="text-emerald-600 hover:underline">tutor nativo</a></li>
                    <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-emerald-600 mt-0.5 flex-shrink-0" /> Simula el formato exacto (teléfono, vídeo o presencial)</li>
                    <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-emerald-600 mt-0.5 flex-shrink-0" /> Practica el small talk inicial y el cierre de la entrevista</li>
                    <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-emerald-600 mt-0.5 flex-shrink-0" /> Refina respuestas basándote en el feedback recibido</li>
                  </ul>
                </div>

                <div className="bg-gradient-to-r from-emerald-50 to-teal-50 rounded-xl p-6">
                  <h3 className="font-bold text-gray-900 mb-2">Día 7: Repaso y confianza</h3>
                  <ul className="space-y-2 text-gray-700 text-sm">
                    <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-emerald-600 mt-0.5 flex-shrink-0" /> Repaso ligero de tus mejores respuestas (no memorices, refuerza estructura)</li>
                    <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-emerald-600 mt-0.5 flex-shrink-0" /> Prepara tu ropa, documentos y logística con antelación</li>
                    <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-emerald-600 mt-0.5 flex-shrink-0" /> Revisa las 2-3 preguntas que harás al entrevistador</li>
                    <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-emerald-600 mt-0.5 flex-shrink-0" /> Descansa bien: dormir 8 horas mejora la fluidez verbal un 20%</li>
                  </ul>
                </div>
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
                  Superar una entrevista de trabajo en inglés es una <strong>habilidad que se entrena</strong>, no un talento innato. Con la preparación adecuada, vocabulario específico y práctica con simulacros reales, puedes proyectar confianza y profesionalismo incluso si el inglés no es tu lengua materna. La clave está en preparar estructura, no memorizar textos.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  En <a href="/cursos-ingles/adultos/" className="text-emerald-600 hover:underline font-medium">Impulse English Academy</a> ofrecemos preparación intensiva para entrevistas con profesores titulados que simulan entrevistas reales adaptadas a tu sector. Consulta también nuestra guía sobre <a href="/blog/nivel-ingles-empresas/" className="text-emerald-600 hover:underline font-medium">nivel de inglés que piden las empresas</a> para entender qué certificación necesitas, y explora nuestros <a href="/examenes-cambridge/" className="text-emerald-600 hover:underline font-medium">programas de certificación Cambridge</a> para respaldar tu nivel con un título oficial.
                </p>
              </div>
            </section>

            <InlineOneToOneCTA pathname="/blog/ingles-entrevistas-trabajo" />

            {/* Related Articles */}
            <section className="mt-16">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Artículos Relacionados</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <a href="/cursos-ingles/adultos/" className="group bg-gray-50 rounded-xl p-6 hover:bg-emerald-50 transition-colors">
                  <h3 className="font-semibold text-gray-900 group-hover:text-emerald-600 transition-colors mb-2">
                    Cursos de Inglés para Adultos
                  </h3>
                  <p className="text-gray-600 text-sm">Programas flexibles adaptados a profesionales en activo.</p>
                </a>
                <a href="/blog/nivel-ingles-empresas/" className="group bg-gray-50 rounded-xl p-6 hover:bg-emerald-50 transition-colors">
                  <h3 className="font-semibold text-gray-900 group-hover:text-emerald-600 transition-colors mb-2">
                    Nivel de Inglés en Empresas España
                  </h3>
                  <p className="text-gray-600 text-sm">Requisitos por sector y cómo certificarte para el mercado laboral.</p>
                </a>
                <a href="/blog/mejorar-speaking-ingles/" className="group bg-gray-50 rounded-xl p-6 hover:bg-emerald-50 transition-colors">
                  <h3 className="font-semibold text-gray-900 group-hover:text-emerald-600 transition-colors mb-2">
                    Cómo Mejorar tu Speaking en Inglés
                  </h3>
                  <p className="text-gray-600 text-sm">Técnicas prácticas para ganar fluidez y confianza al hablar.</p>
                </a>
                <a href="/examenes-cambridge/" className="group bg-gray-50 rounded-xl p-6 hover:bg-emerald-50 transition-colors">
                  <h3 className="font-semibold text-gray-900 group-hover:text-emerald-600 transition-colors mb-2">
                    Guía de Exámenes Cambridge
                  </h3>
                  <p className="text-gray-600 text-sm">Certifica tu nivel de inglés con la titulación más reconocida.</p>
                </a>
              </div>
            </section>
          </article>

          {/* Lead Form */}
          <section className="bg-gray-50 py-16">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
              <OneToOneCTA pathname="/blog/ingles-entrevistas-trabajo" />
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
              → Más información en Cambridge English - Certificaciones oficiales de inglés
            </a>
          </div>
        </section>

        <Footer />
      </div>

      {/* Schema.org Structured Data */}
</>
  );
}