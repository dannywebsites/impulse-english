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

export default function PorQueNoAvanzoInglesPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = 'No Avanzo en Inglés: 8 Razones y Cómo Solucionarlo 2026 | Impulse English Academy La Vaguada – Barrio del Pilar';
  }, []);

  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const articleSchema = generateArticleSchema({
    headline: "¿Por Qué No Avanzo en Inglés? 8 Razones y Soluciones",
    description: "Si llevas tiempo estudiando y no avanzas, probablemente cometes uno de estos 8 errores. Descubre las causas del estancamiento y soluciones prácticas.",
    url: `${businessInfo.url}/blog/por-que-no-avanzo-ingles`,
    datePublished: "2025-03-01"
  });

  const faqItems = [
    {
      question: "¿Es normal estancarse en inglés?",
      answer: "Muy normal. La 'meseta del aprendizaje' afecta a casi todos en torno al nivel B1-B2. El progreso se vuelve menos visible aunque sí ocurre."
    },
    {
      question: "¿Cuánto tiempo puedo estar estancado?",
      answer: "Sin cambios metodológicos, el estancamiento puede durar meses. Con cambios concretos (más speaking, exposición real, objetivos medibles), suele romperse en 4-8 semanas."
    },
    {
      question: "¿Cambiar de academia ayuda?",
      answer: "A veces sí. Si llevas más de 6 meses sin progresar, un cambio de metodología o contexto puede ser la clave. Pero el problema suele ser la falta de práctica fuera del aula."
    },
    {
      question: "¿Cómo sé si estoy avanzando?",
      answer: "Pon objetivos medibles: entender el 80% de una serie sin subtítulos, mantener conversación de 5 min, escribir un email sin errores. El progreso debe ser medible."
    }
  ];

  return (
    <>
      <SEOHead
        title="No Avanzo en Inglés: 8 Razones y Cómo Solucionarlo 2026"
        description="Si llevas tiempo estudiando y no avanzas, probablemente cometes uno de estos 8 errores. Descubre las causas del estancamiento y soluciones prácticas."
        keywords="no avanzo inglés, estancado inglés, meseta inglés, por qué no mejoro inglés"
        canonical="/blog/por-que-no-avanzo-ingles"
        ogType="article"
      />
      <div className="min-h-screen flex flex-col bg-white">
        <Navbar />

        <main className="flex-grow">
          {/* Hero Section */}
          <header className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden">
            <div className="absolute inset-0">
              <img
                src="https://impulseenglish.s3.us-east-1.amazonaws.com/impulsephotos/NACHOS+photos.+/Classroom+Facilities+Main+Classroom.JPG"
                alt="Por qué no avanzo en inglés, estancamiento"
                className="w-full h-full object-cover"
                loading="eager"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-accent-blue/95 via-accent-blue/85 to-[#0a3560]/75"></div>
            </div>
            <div className="absolute inset-0 hero-grain opacity-[0.03]"></div>
            <div className="absolute -top-32 -right-32 w-[420px] h-[420px] rounded-full bg-brand-red/[0.04]"></div>
            <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
              <Breadcrumb
                items={[
                  { label: 'Blog', href: '/blog' },
                  { label: 'No Avanzo en Inglés' }
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
                  ¿Por Qué No Avanzo en Inglés? 8 Razones y Soluciones
                </h1>
                <div className="w-16 h-0.5 bg-brand-red mb-6 animate-hero-fade-up animation-delay-150"></div>
                <p className="font-display text-lg md:text-xl text-white/80 font-light leading-relaxed max-w-3xl animate-hero-fade-up animation-delay-200">
                  Si llevas meses estudiando sin notar progreso real, probablemente estás cometiendo uno de estos 8 errores. Diagnóstico honesto y soluciones concretas.
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
                <li><a href="#meseta-aprendizaje" className="text-emerald-600 hover:text-emerald-700 transition-colors">→ La meseta del aprendizaje explicada</a></li>
                <li><a href="#8-razones" className="text-emerald-600 hover:text-emerald-700 transition-colors">→ Las 8 razones más comunes</a></li>
                <li><a href="#soluciones-causa" className="text-emerald-600 hover:text-emerald-700 transition-colors">→ Soluciones por cada causa</a></li>
                <li><a href="#cambiar-metodo" className="text-emerald-600 hover:text-emerald-700 transition-colors">→ Cuándo cambiar el método</a></li>
                <li><a href="#medir-progreso" className="text-emerald-600 hover:text-emerald-700 transition-colors">→ Cómo medir el progreso real</a></li>
                <li><a href="#faq" className="text-emerald-600 hover:text-emerald-700 transition-colors">→ Preguntas Frecuentes</a></li>
              </ul>
            </div>

            {/* Introduction */}
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              "Llevo años estudiando inglés y sigo sin poder mantener una conversación". Esta frustración es una de las más comunes entre adultos hispanohablantes. La buena noticia: el estancamiento en inglés casi siempre tiene causas identificables y solucionables. La mala noticia: nadie te las va a decir si no las buscas activamente. En este artículo hacemos el diagnóstico por ti.
            </p>

            {/* Section 1 - La meseta */}
            <section id="meseta-aprendizaje" className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                La Meseta del Aprendizaje: Qué Es y Por Qué Ocurre
              </h2>

              <p className="text-gray-700 mb-4 leading-relaxed">
                La "meseta del aprendizaje" (learning plateau) es una fase documentada en la adquisición de idiomas donde el progreso visible se ralentiza drásticamente aunque el aprendizaje sigue ocurriendo a nivel subconsciente. Afecta sobre todo a los niveles <strong>B1 y B2</strong>, donde el salto cualitativo es mayor y menos visible que en los niveles básicos.
              </p>

              <div className="grid md:grid-cols-3 gap-4 mb-6">
                <div className="bg-emerald-50 rounded-xl p-5 text-center">
                  <div className="text-3xl font-bold text-emerald-600 mb-2">B1-B2</div>
                  <p className="text-gray-700 text-sm">Niveles donde más se estanca la mayoría</p>
                </div>
                <div className="bg-emerald-50 rounded-xl p-5 text-center">
                  <div className="text-3xl font-bold text-emerald-600 mb-2">4-8</div>
                  <p className="text-gray-700 text-sm">Semanas para romper el estancamiento con cambios correctos</p>
                </div>
                <div className="bg-emerald-50 rounded-xl p-5 text-center">
                  <div className="text-3xl font-bold text-emerald-600 mb-2">8/8</div>
                  <p className="text-gray-700 text-sm">Razones de estancamiento tienen solución concreta</p>
                </div>
              </div>

              <div className="bg-emerald-50 border-l-4 border-emerald-500 p-6 rounded-r-xl">
                <p className="text-gray-800 font-medium">
                  <strong>Importante:</strong> La meseta no significa que hayas llegado a tu límite. Significa que el método que usabas para progresar de A1 a B1 ya no es suficiente para pasar de B1 a B2. Necesitas un método diferente, no más esfuerzo del mismo tipo.
                </p>
              </div>
            </section>

            {/* Section 2 - Las 8 razones */}
            <section id="8-razones" className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                Las 8 Razones Más Comunes del Estancamiento
              </h2>

              <div className="space-y-4 mb-8">
                {[
                  {
                    num: "1",
                    title: "Práctica de speaking insuficiente",
                    desc: "La mayoría estudia inglés leyendo, escuchando y haciendo ejercicios escritos. Pero el speaking requiere práctica de speaking. Sin hablar al menos 2-3 horas semanales, la fluidez oral no mejora."
                  },
                  {
                    num: "2",
                    title: "Sin exposición a inglés real fuera del aula",
                    desc: "Si tu único inglés es el de clase, el progreso será lento. La exposición diaria (series, podcasts, lecturas) es lo que consolida lo aprendido en clase."
                  },
                  {
                    num: "3",
                    title: "Materiales de nivel incorrecto",
                    desc: "Si siempre usas materiales fáciles (nivel A2 cuando ya eres B1), no hay progreso. Y si son demasiado difíciles, tampoco. La zona de desarrollo próximo —ligeramente por encima de tu nivel— es donde ocurre el aprendizaje real."
                  },
                  {
                    num: "4",
                    title: "Sin objetivos medibles",
                    desc: "\"Quiero mejorar mi inglés\" no es un objetivo, es un deseo. \"Quiero entender el 80% de un episodio de The Crown sin subtítulos en 3 meses\" sí lo es. Sin objetivos concretos, no hay manera de saber si estás avanzando."
                  },
                  {
                    num: "5",
                    title: "Aprendizaje exclusivamente pasivo",
                    desc: "Ver series en inglés está bien, pero si no produces inglés (hablas, escribes, practicas activamente), la comprensión mejora pero la producción no."
                  },
                  {
                    num: "6",
                    title: "Estudio irregular e inconsistente",
                    desc: "10 horas el fin de semana y cero entre semana es mucho menos efectivo que 1 hora diaria. El cerebro consolida el idioma durante el sueño y entre sesiones. La consistencia supera la intensidad."
                  },
                  {
                    num: "7",
                    title: "Falta de feedback específico",
                    desc: "Si nadie te corrige, repites los mismos errores durante años. El feedback de un profesor con formación lingüística que identifica tu patrón de errores es insustituible para ciertos tipos de progreso."
                  },
                  {
                    num: "8",
                    title: "Método inadecuado para tu estilo de aprendizaje",
                    desc: "Hay personas que aprenden mejor por inmersión, otras por reglas gramaticales explícitas, otras por interacción social. Un método que no se adapta a tu estilo cognitivo produce progreso más lento del necesario."
                  }
                ].map((item) => (
                  <div key={item.num} className="bg-white border border-gray-200 rounded-xl p-6">
                    <h3 className="font-bold text-gray-900 mb-2 flex items-center gap-3">
                      <span className="bg-emerald-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm flex-shrink-0">{item.num}</span>
                      {item.title}
                    </h3>
                    <p className="text-gray-700 ml-11">{item.desc}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Section 3 - Cuándo cambiar */}
            <section id="cambiar-metodo" className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                Cuándo Cambiar el Método
              </h2>

              <p className="text-gray-700 mb-6 leading-relaxed">
                No siempre cambiar de academia o profesor es la solución. A veces el cambio correcto está en lo que haces fuera del aula. Estos son los indicadores de que necesitas un cambio metodológico:
              </p>

              <div className="grid md:grid-cols-2 gap-4 mb-6">
                <div className="bg-red-50 rounded-xl p-5">
                  <h3 className="font-semibold text-gray-900 mb-3">Señales de que necesitas cambiar</h3>
                  <ul className="space-y-2 text-gray-700 text-sm">
                    <li>• Más de 6 meses sin notar progreso</li>
                    <li>• No puedes mantener conversaciones que antes sí</li>
                    <li>• Siempre estudias lo mismo de la misma manera</li>
                    <li>• Cero práctica de speaking fuera de clase</li>
                    <li>• Ningún objetivo concreto a corto plazo</li>
                  </ul>
                </div>
                <div className="bg-emerald-50 rounded-xl p-5">
                  <h3 className="font-semibold text-gray-900 mb-3">Cambios de alto impacto</h3>
                  <ul className="space-y-2 text-gray-700 text-sm">
                    <li>• Añadir 30 min de speaking activo diario</li>
                    <li>• Establecer 1 objetivo medible por mes</li>
                    <li>• Cambiar materiales a nivel ligeramente superior</li>
                    <li>• Conseguir feedback regular de un profesor</li>
                    <li>• Consumir inglés real (no solo materiales de clase)</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Section 4 - Medir el progreso */}
            <section id="medir-progreso" className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                Cómo Medir el Progreso Real
              </h2>

              <p className="text-gray-700 mb-6 leading-relaxed">
                El progreso en inglés es difícil de medir intuitivamente porque avanza de forma no lineal. Estos son indicadores objetivos y medibles:
              </p>

              <div className="space-y-4 mb-6">
                <div className="bg-white border border-gray-200 rounded-xl p-5">
                  <h3 className="font-semibold text-gray-900 mb-2">Comprensión oral</h3>
                  <p className="text-gray-700 text-sm">Pon un episodio de una serie anglófona sin subtítulos y anota qué porcentaje entiendes. Repite el mismo test cada mes. El objetivo de nivel B2: entender el 75-80%.</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-xl p-5">
                  <h3 className="font-semibold text-gray-900 mb-2">Fluidez oral</h3>
                  <p className="text-gray-700 text-sm">Grábate durante 2 minutos hablando sobre un tema. Mide: ¿cuántas veces te detienes más de 3 segundos? ¿Cuántas palabras por minuto? Repite mensualmente.</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-xl p-5">
                  <h3 className="font-semibold text-gray-900 mb-2">Lectura</h3>
                  <p className="text-gray-700 text-sm">Lee un artículo de The Guardian o BBC News y cuenta las palabras desconocidas por página. Si son menos de 5, el nivel es el adecuado. Si son más de 15, el material es demasiado difícil.</p>
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
                    {openFaq === index && (
                      <div className="px-6 pb-6 bg-white">
                        <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </section>

            {/* CTA */}
            <div className="bg-gradient-to-r from-emerald-600 to-emerald-800 rounded-2xl p-8 text-center text-white">
              <h3 className="text-2xl font-bold mb-4">Evaluamos por qué no avanzas y lo solucionamos</h3>
              <p className="text-emerald-100 mb-6 max-w-2xl mx-auto">
                Una evaluación de nivel y una sesión de diagnóstico nos permite identificar exactamente cuál de las 8 causas te afecta y cómo resolverla.
              </p>
              <Link
                to="/contacto"
                className="inline-flex items-center gap-2 bg-white text-emerald-600 px-8 py-4 rounded-xl font-semibold hover:bg-emerald-50 transition-colors"
              >
                Solicitar diagnóstico gratuito
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>

            {/* Related Articles */}
            <section className="mt-16">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Artículos Relacionados</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <Link to="/metodologia" className="group bg-gray-50 rounded-xl p-6 hover:bg-emerald-50 transition-colors">
                  <h3 className="font-semibold text-gray-900 group-hover:text-emerald-600 transition-colors mb-2">
                    Nuestra Metodología
                  </h3>
                  <p className="text-gray-600 text-sm">Cómo diseñamos el aprendizaje para evitar el estancamiento.</p>
                </Link>
                <Link to="/cursos-ingles/adultos" className="group bg-gray-50 rounded-xl p-6 hover:bg-emerald-50 transition-colors">
                  <h3 className="font-semibold text-gray-900 group-hover:text-emerald-600 transition-colors mb-2">
                    Cursos de Inglés para Adultos
                  </h3>
                  <p className="text-gray-600 text-sm">Programas con seguimiento individualizado de progreso.</p>
                </Link>
                <Link to="/blog/entiendo-ingles-no-hablo" className="group bg-gray-50 rounded-xl p-6 hover:bg-emerald-50 transition-colors">
                  <h3 className="font-semibold text-gray-900 group-hover:text-emerald-600 transition-colors mb-2">
                    Entiendo Inglés pero No Hablo
                  </h3>
                  <p className="text-gray-600 text-sm">Por qué hay gap entre comprensión y producción oral.</p>
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
              href="https://www.cambridgeenglish.org/es/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-blue-600 hover:underline"
            >
              → Más información en Cambridge English - Recursos y herramientas oficiales
            </a>
          </div>
        </section>

        <Footer />
      </div>

      {/* Schema.org Structured Data */}
      <SchemaMarkup schema={articleSchema} />
    </>
  );
}
