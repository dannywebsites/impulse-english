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

export default function MejorMetodoInglesNinosPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = 'Mejor Método de Inglés para Niños: Comparativa 2026 | Impulse English Academy La Vaguada – Barrio del Pilar';
  }, []);

  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const articleSchema = generateArticleSchema({
    headline: '¿Cuál es el Mejor Método de Inglés para Niños? Comparativa',
    description: 'Compara los mejores métodos de inglés para niños: inmersión total, CLIL, TPR, juego y Great Little People. Descubre cuál es más efectivo según la edad.',
    url: `${businessInfo.url}/blog/mejor-metodo-ingles-ninos`,
    datePublished: '2025-03-01'
  });

  const faqItems = [
    {
      question: '¿Es mejor la inmersión total o el método bilingüe?',
      answer: 'Para niños hasta 6 años, la inmersión total (solo inglés en clase) da mejores resultados. Para primaria, el bilingüe CLIL (inglés como vehículo para otras materias) es muy efectivo.'
    },
    {
      question: '¿Los métodos con canciones y rimas funcionan?',
      answer: 'Sí, especialmente para 2-5 años. Las canciones aprovegan la memoria musical, más duradera que la semántica. Pero deben complementarse con interacción real, no ser el único método.'
    },
    {
      question: '¿Cuándo cambiar de método si no funciona?',
      answer: 'Si en 3 meses no hay progreso visible (nuevas palabras, mayor comprensión), considera cambiar. Puede ser el método, el profesor o el tamaño del grupo.'
    },
    {
      question: '¿Importa el ratio profesor-alumno?',
      answer: 'Mucho. Para 3-5 años: máximo 6 alumnos. Para 6-10 años: máximo 8-10. Con grupos más grandes, la interacción individual decrece y el progreso se ralentiza.'
    }
  ];

  return (
    <>
      <SEOHead
        title="Mejor Método de Inglés para Niños: Comparativa 2026"
        description="Compara los mejores métodos de inglés para niños: inmersión total, CLIL, TPR, juego y Great Little People. Descubre cuál es más efectivo según la edad."
        keywords="mejor método inglés niños, métodos inglés infantil, enseñar inglés niños, metodología inglés niños"
        canonical="/blog/mejor-metodo-ingles-ninos"
        ogType="article"
      />
      <div className="min-h-screen flex flex-col bg-white">
        <Navbar />

        <main className="flex-grow">
          {/* Hero Section */}
          <header className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden">
            <div className="absolute inset-0">
              <img
                src="https://impulseenglish.s3.us-east-1.amazonaws.com/impulsephotos/NACHOS+photos.+/Infantil+classes.JPG"
                alt="Niños en clase de inglés comparando métodos"
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
                  { label: 'Mejor Método Inglés Niños' }
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
                  ¿Cuál es el Mejor Método de Inglés para Niños? Comparativa
                </h1>
                <div className="w-16 h-0.5 bg-brand-red mb-6 animate-hero-fade-up animation-delay-150"></div>
                <p className="font-display text-lg md:text-xl text-white/80 font-light leading-relaxed max-w-3xl animate-hero-fade-up animation-delay-200">
                  Guía comparativa de los principales métodos de inglés para niños: cuál es más efectivo según la edad de tu hijo y cómo evaluar la calidad de un programa.
                </p>
              </div>
            </div>
          </header>

          {/* Content */}
          <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            {/* Table of Contents */}
            <div className="bg-purple-50 rounded-2xl p-6 mb-12">
              <h2 className="text-lg font-semibold text-gray-900 mb-4">Contenido del artículo</h2>
              <ul className="space-y-2">
                <li><a href="#metodos-principales" className="text-purple-600 hover:text-purple-700 transition-colors">→ Los principales métodos explicados</a></li>
                <li><a href="#comparativa" className="text-purple-600 hover:text-purple-700 transition-colors">→ Inmersión vs CLIL vs TPR</a></li>
                <li><a href="#por-edad" className="text-purple-600 hover:text-purple-700 transition-colors">→ Método recomendado por edad</a></li>
                <li><a href="#great-little-people" className="text-purple-600 hover:text-purple-700 transition-colors">→ Great Little People en detalle</a></li>
                <li><a href="#evaluar" className="text-purple-600 hover:text-purple-700 transition-colors">→ Cómo evaluar la calidad de un método</a></li>
                <li><a href="#faq" className="text-purple-600 hover:text-purple-700 transition-colors">→ Preguntas Frecuentes</a></li>
              </ul>
            </div>

            {/* Introduction */}
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              Elegir el método de inglés adecuado para tu hijo puede marcar la diferencia entre un niño que disfruta del idioma y uno que lo rechaza. No existe un único "mejor método" universal: la eficacia depende de la edad, el temperamento del niño, la calidad del profesor y el contexto familiar. Esta guía te ayudará a entender las opciones y tomar una decisión informada.
            </p>

            {/* Section 1 - Métodos principales */}
            <section id="metodos-principales" className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                Los Principales Métodos de Inglés para Niños
              </h2>

              <div className="space-y-4 mb-8">
                <div className="bg-white border border-gray-200 rounded-xl p-6">
                  <h3 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
                    <Target className="w-5 h-5 text-purple-600" />
                    TPR (Total Physical Response)
                  </h3>
                  <p className="text-gray-700 mb-2">Desarrollado por James Asher, el TPR conecta el lenguaje con el movimiento físico. El profesor da comandos en inglés ("jump!", "touch your nose") y los niños responden con acciones. Excelente para vocabulario y comprensión oral en edades tempranas.</p>
                  <p className="text-sm text-purple-600 font-medium">Mejor para: 2-8 años | Fortaleza: comprensión oral y vocabulario</p>
                </div>

                <div className="bg-white border border-gray-200 rounded-xl p-6">
                  <h3 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
                    <Target className="w-5 h-5 text-purple-600" />
                    Inmersión Total
                  </h3>
                  <p className="text-gray-700 mb-2">El inglés es el único idioma de comunicación en el aula. Sin traducciones al español. El niño adquiere el idioma de la misma forma que adquirió su lengua materna: por contexto, repetición y necesidad comunicativa real.</p>
                  <p className="text-sm text-purple-600 font-medium">Mejor para: 1-6 años | Fortaleza: adquisición natural y fluidez</p>
                </div>

                <div className="bg-white border border-gray-200 rounded-xl p-6">
                  <h3 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
                    <Target className="w-5 h-5 text-purple-600" />
                    CLIL (Content and Language Integrated Learning)
                  </h3>
                  <p className="text-gray-700 mb-2">El inglés se usa como vehículo para aprender otras materias (ciencias, arte, matemáticas). El niño aprende inglés mientras aprende contenido relevante, aumentando la motivación y la transferencia del aprendizaje.</p>
                  <p className="text-sm text-purple-600 font-medium">Mejor para: 6-12 años | Fortaleza: vocabulario académico y motivación</p>
                </div>

                <div className="bg-white border border-gray-200 rounded-xl p-6">
                  <h3 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
                    <Target className="w-5 h-5 text-purple-600" />
                    Comunicativo (CLT)
                  </h3>
                  <p className="text-gray-700 mb-2">Enfocado en la comunicación real más que en la gramática formal. Los niños practican situaciones de la vida cotidiana: presentarse, pedir algo, describir. Muy efectivo para el speaking y la confianza oral.</p>
                  <p className="text-sm text-purple-600 font-medium">Mejor para: 6-14 años | Fortaleza: comunicación oral y confianza</p>
                </div>
              </div>
            </section>

            {/* Section 2 - Comparativa por edad */}
            <section id="comparativa" className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                Comparativa por Grupos de Edad
              </h2>

              <div className="overflow-x-auto mb-8">
                <table className="w-full border-collapse bg-white rounded-xl overflow-hidden shadow-lg">
                  <thead>
                    <tr className="bg-gradient-to-r from-purple-600 to-purple-800 text-white">
                      <th className="text-left p-4 font-semibold">Edad</th>
                      <th className="text-left p-4 font-semibold">Método recomendado</th>
                      <th className="text-left p-4 font-semibold">Ratio máximo</th>
                      <th className="text-left p-4 font-semibold">Duración sesión</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="bg-gray-50">
                      <td className="p-4 font-medium text-gray-900">2-4 años</td>
                      <td className="p-4 text-gray-700">Inmersión + música + TPR</td>
                      <td className="p-4 text-gray-700">1:4</td>
                      <td className="p-4 text-gray-700">30-45 min</td>
                    </tr>
                    <tr className="bg-white">
                      <td className="p-4 font-medium text-gray-900">5-7 años</td>
                      <td className="p-4 text-gray-700">Great Little People / Inmersión lúdica</td>
                      <td className="p-4 text-gray-700">1:6</td>
                      <td className="p-4 text-gray-700">45-60 min</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="p-4 font-medium text-gray-900">8-12 años</td>
                      <td className="p-4 text-gray-700">CLIL + Comunicativo + Cambridge prep</td>
                      <td className="p-4 text-gray-700">1:8</td>
                      <td className="p-4 text-gray-700">60-90 min</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* Section 3 - Por edad */}
            <section id="por-edad" className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                Recomendación por Edad
              </h2>

              <div className="space-y-6 mb-8">
                <div className="bg-purple-50 border-l-4 border-purple-500 p-6 rounded-r-xl">
                  <h3 className="font-bold text-gray-900 mb-2">De 2 a 4 años: Inmersión sensorial</h3>
                  <p className="text-gray-700">A esta edad, el cerebro está en el pico de la plasticidad lingüística. Cualquier exposición al inglés en un entorno seguro y positivo produce resultados. Canciones, rutinas en inglés y juego físico son la clave. El objetivo no es "enseñar" sino crear una relación positiva con el idioma.</p>
                </div>

                <div className="bg-purple-50 border-l-4 border-purple-500 p-6 rounded-r-xl">
                  <h3 className="font-bold text-gray-900 mb-2">De 5 a 7 años: Inmersión estructurada</h3>
                  <p className="text-gray-700">Es el momento de estructurar el aprendizaje con un currículo claro. El método debe combinar inmersión total con objetivos lingüísticos progresivos. Los niños ya pueden mantener atención durante más tiempo y empiezan a producir en inglés de forma espontánea.</p>
                </div>

                <div className="bg-purple-50 border-l-4 border-purple-500 p-6 rounded-r-xl">
                  <h3 className="font-bold text-gray-900 mb-2">De 8 a 12 años: Preparación Cambridge</h3>
                  <p className="text-gray-700">A esta edad, los niños pueden empezar la preparación de los exámenes Young Learners de Cambridge. El método debe combinar comunicación real con práctica del formato de examen. La motivación mediante logros y certificaciones es especialmente efectiva.</p>
                </div>
              </div>
            </section>

            {/* Section 4 - Great Little People */}
            <section id="great-little-people" className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                Great Little People: El Método que Usamos
              </h2>

              <p className="text-gray-700 mb-4 leading-relaxed">
                El método <a href="https://www.greatlittlepeople.com/" target="_blank" rel="noopener noreferrer" className="text-purple-600 hover:underline font-medium">Great Little People</a> combina los puntos fuertes de la inmersión total, el TPR y el aprendizaje lúdico en un currículo estructurado para niños de 1 a 7 años. En Impulse English Academy somos centro oficial Great Little People en Madrid.
              </p>

              <div className="grid md:grid-cols-2 gap-4 mb-6">
                <div className="bg-white border border-gray-200 rounded-xl p-5">
                  <h3 className="font-bold text-gray-900 mb-3">Características clave</h3>
                  <ul className="space-y-2 text-gray-700 text-sm">
                    <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-purple-600 mt-0.5 flex-shrink-0" />100% inmersión en inglés</li>
                    <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-purple-600 mt-0.5 flex-shrink-0" />Máximo 6 niños por grupo</li>
                    <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-purple-600 mt-0.5 flex-shrink-0" />Profesores formados específicamente</li>
                    <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-purple-600 mt-0.5 flex-shrink-0" />Currículo progresivo por niveles</li>
                    <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-purple-600 mt-0.5 flex-shrink-0" />Canciones, cuentos y manualidades</li>
                  </ul>
                </div>
                <div className="bg-white border border-gray-200 rounded-xl p-5">
                  <h3 className="font-bold text-gray-900 mb-3">Resultados típicos</h3>
                  <ul className="space-y-2 text-gray-700 text-sm">
                    <li className="flex items-start gap-2"><Award className="w-4 h-4 text-purple-600 mt-0.5 flex-shrink-0" />Primeras palabras en 8-12 semanas</li>
                    <li className="flex items-start gap-2"><Award className="w-4 h-4 text-purple-600 mt-0.5 flex-shrink-0" />100-200 palabras activas en 6 meses</li>
                    <li className="flex items-start gap-2"><Award className="w-4 h-4 text-purple-600 mt-0.5 flex-shrink-0" />Nivel A1-A2 a los 6-7 años</li>
                    <li className="flex items-start gap-2"><Award className="w-4 h-4 text-purple-600 mt-0.5 flex-shrink-0" />Alta confianza oral</li>
                    <li className="flex items-start gap-2"><Award className="w-4 h-4 text-purple-600 mt-0.5 flex-shrink-0" />Transición fluida a primaria</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Section 5 - Evaluar */}
            <section id="evaluar" className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                Cómo Evaluar la Calidad de un Método
              </h2>

              <p className="text-gray-700 mb-6 leading-relaxed">
                Más allá del nombre del método, lo que determina la calidad del aprendizaje son estos indicadores observables:
              </p>

              <div className="space-y-4 mb-8">
                <div className="bg-white border border-gray-200 rounded-xl p-5 flex gap-4">
                  <div className="bg-purple-100 rounded-lg p-2 flex-shrink-0 h-fit">
                    <BookOpen className="w-5 h-5 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">Tu hijo habla en inglés fuera de clase</h3>
                    <p className="text-gray-700 text-sm">Si el método funciona, el niño empieza a usar palabras y frases en inglés espontáneamente en casa, durante el juego o viendo la televisión. Esto es la señal más clara de adquisición real.</p>
                  </div>
                </div>

                <div className="bg-white border border-gray-200 rounded-xl p-5 flex gap-4">
                  <div className="bg-purple-100 rounded-lg p-2 flex-shrink-0 h-fit">
                    <BookOpen className="w-5 h-5 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">Tu hijo quiere ir a clase</h3>
                    <p className="text-gray-700 text-sm">El método adecuado genera ilusión, no resistencia. Si tu hijo se alegra de ir a inglés, el método está funcionando a nivel motivacional, que es la base de todo lo demás.</p>
                  </div>
                </div>

                <div className="bg-white border border-gray-200 rounded-xl p-5 flex gap-4">
                  <div className="bg-purple-100 rounded-lg p-2 flex-shrink-0 h-fit">
                    <BookOpen className="w-5 h-5 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">El progreso es visible y medible</h3>
                    <p className="text-gray-700 text-sm">Cada trimestre, el centro debe poder mostrarte en qué ha avanzado tu hijo: nuevas estructuras, vocabulario adquirido, habilidades desarrolladas. Sin métricas claras, el progreso es difícil de evaluar.</p>
                  </div>
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
                        <ChevronUp className="w-5 h-5 text-purple-600 flex-shrink-0" />
                      ) : (
                        <ChevronDown className="w-5 h-5 text-purple-600 flex-shrink-0" />
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
            <div className="bg-gradient-to-r from-purple-600 to-purple-800 rounded-2xl p-8 text-center text-white">
              <h3 className="text-2xl font-bold mb-4">Usamos Great Little People, el método más efectivo para los más pequeños</h3>
              <p className="text-purple-100 mb-6 max-w-2xl mx-auto">
                Clases de inglés infantil con metodología probada, grupos reducidos y profesores especializados.
              </p>
              <Link
                to="/cursos-ingles/infantil"
                className="inline-flex items-center gap-2 bg-white text-purple-600 px-8 py-4 rounded-xl font-semibold hover:bg-purple-50 transition-colors"
              >
                Ver clases infantil
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>

            {/* Related Articles */}
            <section className="mt-16">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Artículos Relacionados</h2>
              <div className="grid md:grid-cols-3 gap-6">
                <Link to="/cursos-ingles/infantil" className="group bg-gray-50 rounded-xl p-6 hover:bg-purple-50 transition-colors">
                  <h3 className="font-semibold text-gray-900 group-hover:text-purple-600 transition-colors mb-2">
                    Cursos de Inglés Infantil
                  </h3>
                  <p className="text-gray-600 text-sm">Clases para bebés y niños pequeños en Madrid.</p>
                </Link>
                <Link to="/blog/ingles-jugando-funciona" className="group bg-gray-50 rounded-xl p-6 hover:bg-purple-50 transition-colors">
                  <h3 className="font-semibold text-gray-900 group-hover:text-purple-600 transition-colors mb-2">
                    ¿Inglés Jugando Funciona?
                  </h3>
                  <p className="text-gray-600 text-sm">La ciencia detrás del aprendizaje lúdico.</p>
                </Link>
                <Link to="/cursos-ingles/primaria" className="group bg-gray-50 rounded-xl p-6 hover:bg-purple-50 transition-colors">
                  <h3 className="font-semibold text-gray-900 group-hover:text-purple-600 transition-colors mb-2">
                    Cursos de Inglés Primaria
                  </h3>
                  <p className="text-gray-600 text-sm">Inglés para niños de 6 a 12 años con Cambridge prep.</p>
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
              href="https://www.greatlittlepeople.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-blue-600 hover:underline"
            >
              → Más información sobre Great Little People - metodología oficial de inglés infantil
            </a>
          </div>
        </section>

        <Footer />
      </div>

      <SchemaMarkup schema={articleSchema} />
    </>
  );
}
