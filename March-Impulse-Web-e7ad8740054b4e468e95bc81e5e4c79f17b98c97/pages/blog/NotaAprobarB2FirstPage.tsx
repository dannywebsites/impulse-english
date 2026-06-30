import React, { useState, useEffect } from 'react';
import { ChevronRight, Clock, Calendar, ChevronDown, ChevronUp, BookOpen, CheckCircle, Target, ArrowRight, Award } from 'lucide-react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import LeadForm from '../../components/LeadForm';
import Breadcrumb from '../../components/Breadcrumb';
import { generateArticleSchema, businessInfo } from '../../utils/schemaData';
import type { FAQItem } from '../../utils/schemaData';

export const articleSchema = generateArticleSchema({
    headline: "¿Qué Nota Necesito para Aprobar el B2 First? Puntuación y Grades",
    description: "Para aprobar el B2 First necesitas 160 puntos en la Cambridge English Scale. Conoce las calificaciones Grade A, B y C, y cómo se evalúa cada parte.",
    url: `${businessInfo.url}/blog/nota-aprobar-b2-first`,
    datePublished: "2025-03-01",
    dateModified: "2026-06-30"
  });

export const faqItems: FAQItem[] = [
    {
      question: "¿Cuál es la puntuación mínima para aprobar el B2 First?",
      answer: "La puntuación mínima para aprobar el B2 First es de 160 puntos en la Cambridge English Scale. Esta puntuación corresponde al Grade C y certifica oficialmente el nivel B2 del Marco Común Europeo de Referencia (MCER). Cualquier puntuación entre 160 y 190 significa que has aprobado el examen, aunque con diferentes calificaciones (Grade C, B o A)."
    }

  ,
    {
      question: "¿Qué pasa si obtengo 159 puntos o menos?",
      answer: "Si obtienes entre 140 y 159 puntos, no apruebas el B2 First pero recibes un certificado de nivel B1 como reconocimiento parcial de tu competencia lingüística. Si la puntuación es inferior a 140, no recibes ningún certificado. En ambos casos, puedes volver a presentarte al examen sin restricción de intentos ni período de espera obligatorio."
    },
    {
      question: "¿Puedo repetir solo una parte del examen si suspendo?",
      answer: "No, el B2 First no permite repetir partes individuales. Si no alcanzas la puntuación mínima de 160, debes volver a realizar las cuatro partes completas del examen (Reading and Use of English, Writing, Listening y Speaking) en una nueva convocatoria. Por eso es importante preparar todas las secciones de forma equilibrada."
    },
    {
      question: "¿Cómo se evalúa la parte de Speaking del B2 First?",
      answer: "El Speaking se evalúa por dos examinadores: un interlocutor que conduce la entrevista y un evaluador que observa y puntúa. Se valoran cuatro criterios: gramática y vocabulario, manejo del discurso, pronunciación y comunicación interactiva. Cada criterio se puntúa en una escala de 0 a 5, y la puntuación final se convierte a la Cambridge English Scale."
    },
    {
      question: "¿A qué equivale un Grade A en el B2 First?",
      answer: "Un Grade A en el B2 First (180-190 puntos) equivale al nivel C1 del MCER. Esto significa que, aunque te has presentado a un examen de nivel B2, tu puntuación demuestra competencia de nivel C1 Advanced. Recibes tanto la certificación B2 First como la acreditación de nivel C1, lo que es especialmente valioso para universidades y empleadores que requieren este nivel superior."
    },
    {
      question: "¿Cuándo salen los resultados del B2 First?",
      answer: "El Statement of Results suele estar disponible online entre 2 y 3 semanas después del examen en la versión por ordenador, y entre 4 y 6 semanas en la versión en papel. El certificado físico llega unas semanas más tarde. Accedes a tus resultados con tu número de candidato y tu Secret Number en el portal oficial de resultados de Cambridge."
    },
    {
      question: "¿Caduca el certificado del B2 First?",
      answer: "No. El certificado del B2 First no tiene fecha de caducidad: una vez aprobado, acredita tu nivel de forma permanente. A diferencia del IELTS o el TOEFL, que son válidos dos años, tu certificado Cambridge no expira. Otra cosa es que algunas instituciones prefieran una acreditación reciente, pero el título en sí sigue siendo válido siempre."
    },
    {
      question: "¿Necesito una nota mínima en cada parte para aprobar el B2 First?",
      answer: "No. El B2 First no exige una puntuación mínima por sección: lo que cuenta es la media de las cuatro partes. Puedes compensar una sección floja con otra más fuerte, siempre que la media global alcance los 160 puntos. Aun así, conviene llegar con un nivel equilibrado, porque una parte muy baja es difícil de compensar con el resto."
    }
  ];

export default function NotaAprobarB2FirstPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [openFaq, setOpenFaq] = useState<number | null>(null);


  const gradeData = [
    { grade: "Grade A", points: "180-190", level: "C1", color: "text-blue-600", bgColor: "bg-blue-50", borderColor: "border-blue-500", description: "Rendimiento excepcional. Equivale al nivel C1 Advanced." },
    { grade: "Grade B", points: "173-179", level: "B2", color: "text-emerald-600", bgColor: "bg-emerald-50", borderColor: "border-emerald-500", description: "Rendimiento muy bueno. Certificación B2 sólida." },
    { grade: "Grade C", points: "160-172", level: "B2", color: "text-emerald-600", bgColor: "bg-emerald-50", borderColor: "border-emerald-500", description: "Aprobado. Certificación B2 estándar." },
    { grade: "Nivel B1", points: "140-159", level: "B1", color: "text-amber-600", bgColor: "bg-amber-50", borderColor: "border-amber-500", description: "No aprueba B2, pero recibe certificado B1." },
    { grade: "No certifica", points: "< 140", level: "-", color: "text-red-600", bgColor: "bg-red-50", borderColor: "border-red-500", description: "No se emite ningún certificado." }
  ];

  return (
    <>
<div className="min-h-screen flex flex-col bg-white">
        <Navbar />

        <main className="flex-grow">
          {/* Hero Section */}
          <header className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden">
            <div className="absolute inset-0">
              <img src="/images/academy/6e08cd95-47b7-4d36-95c7-fecfb41e3883.jpeg" alt="Puntuación y calificaciones del B2 First Cambridge" className="w-full h-full object-cover" loading="eager" />
              <div className="absolute inset-0 bg-gradient-to-br from-accent-blue/95 via-accent-blue/85 to-[#0a3560]/75"></div>
            </div>
            <div className="absolute inset-0 hero-grain opacity-[0.03]"></div>
            <div className="absolute -top-32 -right-32 w-[420px] h-[420px] rounded-full bg-brand-red/[0.04]"></div>
            <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
              <Breadcrumb
                items={[
                  { label: 'Blog', href: '/blog' },
                  { label: 'Nota Aprobar B2 First' }
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
                  ¿Qué Nota Necesito para Aprobar el B2 First? Puntuación y Grades
                </h1>
                <div className="w-16 h-0.5 bg-brand-red mb-6 animate-hero-fade-up animation-delay-150"></div>
                <p className="font-display text-lg md:text-xl text-white/80 font-light leading-relaxed max-w-3xl animate-hero-fade-up animation-delay-200">
                  Entiende el sistema de puntuación del B2 First: la Cambridge English Scale, los Grades y cómo se evalúa cada parte del examen.
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
                <li><a href="#puntuacion-minima" className="text-emerald-600 hover:text-emerald-700 transition-colors">→ Puntuación Mínima para Aprobar</a></li>
                <li><a href="#grades" className="text-emerald-600 hover:text-emerald-700 transition-colors">→ Grades: A, B y C Explicados</a></li>
                <li><a href="#cambridge-scale" className="text-emerald-600 hover:text-emerald-700 transition-colors">→ La Cambridge English Scale</a></li>
                <li><a href="#evaluacion-partes" className="text-emerald-600 hover:text-emerald-700 transition-colors">→ Cómo se Evalúa Cada Parte</a></li>
                <li><a href="#maximizar-nota" className="text-emerald-600 hover:text-emerald-700 transition-colors">→ Consejos para Maximizar tu Nota</a></li>
                <li><a href="#faq" className="text-emerald-600 hover:text-emerald-700 transition-colors">→ Preguntas Frecuentes</a></li>
              </ul>
            </div>

            {/* Introduction */}
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              Entender el sistema de puntuación del <a href="/examenes-cambridge/b2-first/" className="text-emerald-600 hover:underline font-medium">B2 First de Cambridge</a> es fundamental para planificar tu preparación y establecer objetivos realistas. El examen utiliza la <strong>Cambridge English Scale</strong>, un sistema estandarizado donde necesitas un mínimo de <strong>160 puntos</strong> para aprobar. Pero las calificaciones van mucho más allá del simple aprobado: dependiendo de tu puntuación, puedes obtener un Grade C, B o incluso un Grade A que equivale al nivel C1.
            </p>

            {/* Section 1 - Puntuación Mínima */}
            <section id="puntuacion-minima" className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                Puntuación Mínima para Aprobar el B2 First
              </h2>

              <p className="text-gray-700 mb-4 leading-relaxed">
                Para aprobar el B2 First necesitas obtener un mínimo de <strong>160 puntos</strong> en la Cambridge English Scale. Esta escala unificada, introducida en 2015, permite comparar directamente los resultados de todos los exámenes Cambridge y correlacionarlos con los niveles del MCER (Marco Común Europeo de Referencia).
              </p>

              <div className="bg-gradient-to-r from-emerald-50 to-teal-50 rounded-xl p-6 mb-6">
                <h3 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <Award className="w-5 h-5 text-emerald-600" />
                  Rangos de Puntuación del B2 First
                </h3>
                <div className="space-y-3">
                  {gradeData.map((item, index) => (
                    <div key={index} className={`${item.bgColor} border-l-4 ${item.borderColor} rounded-r-lg p-4 flex flex-col md:flex-row md:items-center md:justify-between gap-2`}>
                      <div className="flex items-center gap-4">
                        <span className={`font-bold ${item.color} min-w-[100px]`}>{item.grade}</span>
                        <span className="font-mono text-gray-800 min-w-[80px]">{item.points}</span>
                        <span className="text-gray-600 text-sm">Nivel {item.level}</span>
                      </div>
                      <p className="text-gray-700 text-sm">{item.description}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-emerald-50 border-l-4 border-emerald-500 p-6 rounded-r-xl">
                <p className="text-gray-800 font-medium">
                  <strong>Punto clave:</strong> No existe una nota de "corte" por sección individual. Lo que cuenta es la <strong>puntuación media total</strong>. Puedes compensar una parte más débil con una más fuerte, siempre que la media global alcance los 160 puntos.
                </p>
              </div>
            </section>

            {/* Section 2 - Grades */}
            <section id="grades" className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                Grades: A, B y C Explicados en Detalle
              </h2>

              <p className="text-gray-700 mb-6 leading-relaxed">
                Las calificaciones (Grades) del B2 First no son simplemente categorías estéticas: cada una tiene implicaciones prácticas diferentes para tu CV, admisiones universitarias y reconocimiento profesional. Veamos qué significa cada una:
              </p>

              <div className="space-y-6 mb-8">
                <div className="bg-white border border-gray-200 rounded-xl p-6">
                  <h3 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                    <Award className="w-5 h-5 text-blue-600" />
                    Grade A (180-190 puntos) - Nivel C1
                  </h3>
                  <p className="text-gray-700 mb-3">El Grade A es la calificación más alta y equivale al nivel C1 del MCER. Esto significa que tu rendimiento en el B2 First ha demostrado competencia propia del nivel Advanced. En tu certificado aparecerá tanto el Grade A como la indicación de nivel C1.</p>
                  <div className="bg-blue-50 rounded-lg p-4">
                    <p className="text-gray-700 text-sm"><strong>Ventaja práctica:</strong> Muchas universidades y empresas que exigen C1 aceptan un Grade A del B2 First como acreditación válida de ese nivel. Es una forma de demostrar nivel C1 sin presentarte al C1 Advanced.</p>
                  </div>
                </div>

                <div className="bg-white border border-gray-200 rounded-xl p-6">
                  <h3 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                    <Award className="w-5 h-5 text-emerald-600" />
                    Grade B (173-179 puntos) - Nivel B2
                  </h3>
                  <p className="text-gray-700 mb-3">El Grade B indica un rendimiento muy sólido dentro del nivel B2. Demuestra que dominas con comodidad todas las competencias evaluadas y que tu nivel de inglés está bien establecido en el rango intermedio-alto.</p>
                  <div className="bg-emerald-50 rounded-lg p-4">
                    <p className="text-gray-700 text-sm"><strong>Ventaja práctica:</strong> Un Grade B transmite confianza a empleadores y universidades. Muestra que no te has quedado en el mínimo sino que tienes un margen considerable por encima del aprobado.</p>
                  </div>
                </div>

                <div className="bg-white border border-gray-200 rounded-xl p-6">
                  <h3 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                    <Award className="w-5 h-5 text-emerald-600" />
                    Grade C (160-172 puntos) - Nivel B2
                  </h3>
                  <p className="text-gray-700 mb-3">El Grade C es el aprobado estándar. Certifica el nivel B2 del MCER y es igualmente válido que los Grades superiores para cualquier propósito donde se requiera acreditar nivel B2. La diferencia con B y A es numérica, no en validez.</p>
                  <div className="bg-emerald-50 rounded-lg p-4">
                    <p className="text-gray-700 text-sm"><strong>Ventaja práctica:</strong> Para oposiciones, habilitación lingüística y la mayoría de requisitos laborales en España, un Grade C es perfectamente válido y suficiente. No hay distinción entre Grades para estos procesos.</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Section 3 - Cambridge English Scale */}
            <section id="cambridge-scale" className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                La Cambridge English Scale: Cómo Funciona
              </h2>

              <p className="text-gray-700 mb-6 leading-relaxed">
                La <a href="/blog/escala-cambridge/" className="text-emerald-600 hover:underline font-medium">Cambridge English Scale</a> es el sistema de puntuación unificado que Cambridge introdujo para estandarizar todos sus exámenes. Es una escala que va de 80 a 230 puntos, donde cada examen cubre un rango específico:
              </p>

              <div className="overflow-x-auto mb-8">
                <table className="w-full border-collapse bg-white rounded-xl overflow-hidden shadow-lg">
                  <thead>
                    <tr className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white">
                      <th className="text-left p-4 font-semibold">Examen</th>
                      <th className="text-left p-4 font-semibold">Rango de puntos</th>
                      <th className="text-left p-4 font-semibold">Nivel aprobado</th>
                      <th className="text-left p-4 font-semibold">Puntos para aprobar</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="bg-gray-50">
                      <td className="p-4 font-medium text-gray-900">A2 Key</td>
                      <td className="p-4 text-gray-700">100-150</td>
                      <td className="p-4 text-gray-700">A2</td>
                      <td className="p-4 text-gray-700">120</td>
                    </tr>
                    <tr className="bg-white">
                      <td className="p-4 font-medium text-gray-900">B1 Preliminary</td>
                      <td className="p-4 text-gray-700">120-170</td>
                      <td className="p-4 text-gray-700">B1</td>
                      <td className="p-4 text-gray-700">140</td>
                    </tr>
                    <tr className="bg-emerald-50 font-semibold">
                      <td className="p-4 text-emerald-900">B2 First</td>
                      <td className="p-4 text-emerald-800">140-190</td>
                      <td className="p-4 text-emerald-800">B2</td>
                      <td className="p-4 text-emerald-800">160</td>
                    </tr>
                    <tr className="bg-white">
                      <td className="p-4 font-medium text-gray-900">C1 Advanced</td>
                      <td className="p-4 text-gray-700">160-210</td>
                      <td className="p-4 text-gray-700">C1</td>
                      <td className="p-4 text-gray-700">180</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="p-4 font-medium text-gray-900">C2 Proficiency</td>
                      <td className="p-4 text-gray-700">180-230</td>
                      <td className="p-4 text-gray-700">C2</td>
                      <td className="p-4 text-gray-700">200</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p className="text-gray-700 mb-4 leading-relaxed">
                Como puedes observar, los rangos de puntuación se solapan entre exámenes. Por ejemplo, un Grade A del B2 First (180-190 puntos) coincide con la zona de aprobado del C1 Advanced (180 puntos), lo que demuestra que ambos miden competencias comparables en ese rango.
              </p>

              <div className="bg-emerald-50 border-l-4 border-emerald-500 p-6 rounded-r-xl">
                <p className="text-gray-800 font-medium">
                  <strong>Importante:</strong> La puntuación que recibes no es el porcentaje de respuestas correctas. Cambridge utiliza un proceso de estandarización estadística que garantiza que un 160 en cualquier convocatoria equivale exactamente al mismo nivel de competencia, independientemente de la dificultad del examen concreto.
                </p>
              </div>
            </section>

            {/* Section 4 - Evaluación por partes */}
            <section id="evaluacion-partes" className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                Cómo se Evalúa Cada Parte del Examen
              </h2>

              <p className="text-gray-700 mb-6 leading-relaxed">
                El B2 First evalúa cuatro competencias lingüísticas, cada una representando el <strong>25% de la nota final</strong>. Recibirás una puntuación individual para cada competencia además de la nota global:
              </p>

              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="bg-white border border-gray-200 rounded-xl p-6">
                  <h3 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                    <BookOpen className="w-5 h-5 text-emerald-600" />
                    Reading and Use of English (25%)
                  </h3>
                  <p className="text-gray-700 text-sm mb-3">7 partes con 52 preguntas en 75 minutos. Evalúa comprensión lectora y dominio gramatical/léxico. Las respuestas correctas se convierten a la Cambridge Scale.</p>
                  <div className="bg-gray-50 rounded-lg p-3">
                    <p className="text-gray-600 text-xs"><strong>Tip:</strong> Use of English (partes 1-4) suele ser lo más difícil para hispanohablantes. Practica phrasal verbs y word formation.</p>
                  </div>
                </div>

                <div className="bg-white border border-gray-200 rounded-xl p-6">
                  <h3 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                    <BookOpen className="w-5 h-5 text-emerald-600" />
                    Writing (25%)
                  </h3>
                  <p className="text-gray-700 text-sm mb-3">2 tareas en 80 minutos. Evaluadas por examinadores certificados en cuatro criterios: contenido, logro comunicativo, organización y lenguaje.</p>
                  <div className="bg-gray-50 rounded-lg p-3">
                    <p className="text-gray-600 text-xs"><strong>Tip:</strong> La Parte 1 (essay obligatorio) y la Parte 2 (elección entre artículo, carta, informe o review) puntúan por igual.</p>
                  </div>
                </div>

                <div className="bg-white border border-gray-200 rounded-xl p-6">
                  <h3 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                    <BookOpen className="w-5 h-5 text-emerald-600" />
                    Listening (25%)
                  </h3>
                  <p className="text-gray-700 text-sm mb-3">4 partes con 30 preguntas en 40 minutos. Se escucha cada grabación dos veces. Incluye monólogos, diálogos y conversaciones múltiples.</p>
                  <div className="bg-gray-50 rounded-lg p-3">
                    <p className="text-gray-600 text-xs"><strong>Tip:</strong> La Parte 2 (sentence completion) requiere escribir exactamente lo que oyes. Practica dictados para mejorar precisión.</p>
                  </div>
                </div>

                <div className="bg-white border border-gray-200 rounded-xl p-6">
                  <h3 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                    <BookOpen className="w-5 h-5 text-emerald-600" />
                    Speaking (25%)
                  </h3>
                  <p className="text-gray-700 text-sm mb-3">4 partes en 14 minutos, en parejas. Evaluado en tiempo real por dos examinadores en: gramática/vocabulario, discurso, pronunciación e interacción.</p>
                  <div className="bg-gray-50 rounded-lg p-3">
                    <p className="text-gray-600 text-xs"><strong>Tip:</strong> No compites con tu compañero. Colabora en la Parte 3 y demuestra capacidad de interacción natural.</p>
                  </div>
                </div>
              </div>

              <div className="bg-amber-50 border-l-4 border-amber-500 p-6 rounded-r-xl">
                <p className="text-gray-800">
                  <strong>Recuerda:</strong> Tu Statement of Results mostrará la puntuación individual de cada competencia en la Cambridge Scale. Si hay mucha diferencia entre tus puntuaciones por habilidad, los certificados lo reflejarán. Busca un desarrollo equilibrado para maximizar tu nota global.
                </p>
              </div>
            </section>

            {/* Section 5 - Maximizar nota */}
            <section id="maximizar-nota" className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                Consejos para Maximizar tu Puntuación
              </h2>

              <p className="text-gray-700 mb-6 leading-relaxed">
                Conocer el sistema de puntuación te permite diseñar una estrategia inteligente de preparación. Aquí tienes los consejos más efectivos para obtener la mejor nota posible en el B2 First:
              </p>

              <div className="space-y-4 mb-8">
                <div className="bg-white border border-gray-200 rounded-xl p-6">
                  <h3 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
                    <Target className="w-5 h-5 text-emerald-600" />
                    Identifica tu punto débil
                  </h3>
                  <p className="text-gray-700">Realiza un examen de práctica completo y analiza tus puntuaciones por sección. Dedica el 40% de tu tiempo de estudio a mejorar tu habilidad más débil y el 60% restante al mantenimiento de las demás. Un aumento de 5 puntos en tu peor sección impacta más que 5 puntos extra en la mejor.</p>
                </div>

                <div className="bg-white border border-gray-200 rounded-xl p-6">
                  <h3 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
                    <Target className="w-5 h-5 text-emerald-600" />
                    Domina Use of English
                  </h3>
                  <p className="text-gray-700">Para la mayoría de hispanohablantes, Use of English es la parte que más puntos puede ganar o perder. Memoriza los 100 phrasal verbs más frecuentes, practica word formation con prefijos y sufijos, y trabaja las key word transformations diariamente. Estas preguntas tienen respuestas exactas que se pueden preparar metódicamente.</p>
                </div>

                <div className="bg-white border border-gray-200 rounded-xl p-6">
                  <h3 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
                    <Target className="w-5 h-5 text-emerald-600" />
                    Gestiona el tiempo en el examen
                  </h3>
                  <p className="text-gray-700">En Reading and Use of English tienes 75 minutos para 52 preguntas. Asigna 1 minuto por pregunta en Use of English (partes 1-4) y el resto para Reading (partes 5-7). No te quedes atascado en una pregunta: marca tu mejor opción y sigue adelante. Puedes volver al final si sobra tiempo.</p>
                </div>

                <div className="bg-white border border-gray-200 rounded-xl p-6">
                  <h3 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
                    <Target className="w-5 h-5 text-emerald-600" />
                    Practica Writing con formato
                  </h3>
                  <p className="text-gray-700">En Writing, conocer el formato correcto de cada tipo de texto (essay, artículo, carta, review, informe) puede marcar hasta 15 puntos de diferencia. Aprende las convenciones de cada formato y practica al menos 2 textos semanales con retroalimentación.</p>
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
                  El sistema de puntuación del <a href="/examenes-cambridge/b2-first/" className="text-emerald-600 hover:underline font-medium">B2 First</a> está diseñado para ser justo y transparente. Con 160 puntos como mínimo, tres niveles de Grade y la posibilidad de obtener certificación C1 con un Grade A, el examen ofrece múltiples niveles de reconocimiento. La clave está en prepararse de forma equilibrada, conocer bien el formato de cada sección y gestionar estratégicamente el tiempo durante el examen.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Si quieres maximizar tu puntuación, una preparación estructurada como la que ofrecemos en nuestros <a href="/cursos-ingles/adultos/" className="text-emerald-600 hover:underline font-medium">cursos para adultos</a> marca la diferencia. Consulta también los <a href="/blog/ejercicios-b2-cambridge/" className="text-emerald-600 hover:underline font-medium">ejercicios de práctica B2</a> y nuestra guía sobre la <a href="/blog/escala-cambridge/" className="text-emerald-600 hover:underline font-medium">escala de Cambridge</a> para profundizar en el sistema.
                </p>
              </div>
            </section>

            {/* CTA */}
            <div className="bg-gradient-to-r from-emerald-600 to-teal-600 rounded-2xl p-8 text-center text-white">
              <h3 className="text-2xl font-bold mb-4">¿Quieres obtener la mejor nota en el B2 First?</h3>
              <p className="text-emerald-100 mb-6 max-w-2xl mx-auto">
                En Impulse English Academy te preparamos con simulacros reales y feedback personalizado para maximizar tu puntuación.
              </p>
              <a
              href="/reservar-clase"
                className="inline-flex items-center gap-2 bg-white text-emerald-600 px-8 py-4 rounded-xl font-semibold hover:bg-emerald-50 transition-colors"
              >
                Reserva tu clase gratis
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
                <a href="/blog/escala-cambridge/" className="group bg-gray-50 rounded-xl p-6 hover:bg-emerald-50 transition-colors">
                  <h3 className="font-semibold text-gray-900 group-hover:text-emerald-600 transition-colors mb-2">
                    Escala de Cambridge Explicada
                  </h3>
                  <p className="text-gray-600 text-sm">Entiende cómo funciona el sistema de puntuación de Cambridge English.</p>
                </a>
                <a href="/blog/ejercicios-b2-cambridge/" className="group bg-gray-50 rounded-xl p-6 hover:bg-emerald-50 transition-colors">
                  <h3 className="font-semibold text-gray-900 group-hover:text-emerald-600 transition-colors mb-2">
                    Ejercicios B2 Cambridge
                  </h3>
                  <p className="text-gray-600 text-sm">Practica con ejercicios reales del B2 First para mejorar tu nota.</p>
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
              href="https://www.cambridgeenglish.org/es/exams-and-tests/first/results/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-blue-600 hover:underline"
            >
              → Más información en Cambridge English - Resultados B2 First oficial
            </a>
          </div>
        </section>

        <Footer />
      </div>

      {/* Schema.org Structured Data */}
</>
  );
}