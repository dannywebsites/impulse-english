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

export default function InglesColegioSuficientePage() {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = '¿El Inglés del Colegio es Suficiente? Realidad y Datos 2026 | Impulse English Academy La Vaguada – Barrio del Pilar';
  }, []);

  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const articleSchema = generateArticleSchema({
    headline: '¿El Inglés del Colegio es Suficiente? Lo que los Padres Deben Saber',
    description: 'El inglés del colegio suele ser insuficiente: solo 2-3 horas semanales con grupos de 25 alumnos. Descubre por qué y cómo complementar la formación de tu hijo.',
    url: `${businessInfo.url}/blog/ingles-colegio-suficiente`,
    datePublished: '2025-03-01'
  });

  const faqItems = [
    {
      question: '¿Cuántas horas de inglés tienen los niños en el colegio?',
      answer: 'En la mayoría de colegios españoles, 2-3 horas semanales. En colegios bilingües, 4-8 horas. El Consejo de Europa recomienda mínimo 5 horas semanales para adquisición efectiva.'
    },
    {
      question: '¿Los colegios bilingües resuelven el problema?',
      answer: 'Parcialmente. Los bilingües mejoran vocabulario y comprensión, pero el speaking e interacción real suelen ser limitados. Muchos alumnos de colegios bilingües tienen dificultad para mantener conversaciones fluidas.'
    },
    {
      question: '¿A qué edad es más importante complementar el inglés del colegio?',
      answer: 'Entre los 6 y los 10 años es la ventana más importante. Lo que se aprende en esta etapa se retiene mejor y sienta la base para los niveles posteriores.'
    },
    {
      question: '¿Qué diferencia hacen 2 horas extras a la semana?',
      answer: 'La diferencia es enorme a largo plazo. Un niño con 2 horas extra semanales desde los 8 años suele alcanzar B2 al terminar el instituto. Sin extras, raramente supera el B1.'
    }
  ];

  return (
    <>
      <SEOHead
        title="¿El Inglés del Colegio es Suficiente? Realidad y Datos 2026"
        description="El inglés del colegio suele ser insuficiente: solo 2-3 horas semanales con grupos de 25 alumnos. Descubre por qué y cómo complementar la formación de tu hijo."
        keywords="inglés colegio suficiente, refuerzo inglés niños, horas inglés colegio, inglés extraescolar necesario"
        canonical="/blog/ingles-colegio-suficiente"
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
                alt="Comparativa inglés del colegio vs academia"
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
                  { label: '¿El Inglés del Colegio es Suficiente?' }
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
                  ¿El Inglés del Colegio es Suficiente? Lo que los Padres Deben Saber
                </h1>
                <div className="w-16 h-0.5 bg-brand-red mb-6 animate-hero-fade-up animation-delay-150"></div>
                <p className="font-display text-lg md:text-xl text-white/80 font-light leading-relaxed max-w-3xl animate-hero-fade-up animation-delay-200">
                  Datos reales sobre el inglés escolar en España y por qué la mayoría de los estudiantes necesitan complementar su formación.
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
                <li><a href="#realidad-escolar" className="text-purple-600 hover:text-purple-700 transition-colors">→ La realidad del inglés escolar en España</a></li>
                <li><a href="#nivel-real" className="text-purple-600 hover:text-purple-700 transition-colors">→ Horas y nivel real de los alumnos</a></li>
                <li><a href="#por-que-no" className="text-purple-600 hover:text-purple-700 transition-colors">→ Por qué no es suficiente</a></li>
                <li><a href="#opciones" className="text-purple-600 hover:text-purple-700 transition-colors">→ Opciones para complementar</a></li>
                <li><a href="#elegir" className="text-purple-600 hover:text-purple-700 transition-colors">→ Cómo elegir la mejor opción</a></li>
                <li><a href="#faq" className="text-purple-600 hover:text-purple-700 transition-colors">→ Preguntas Frecuentes</a></li>
              </ul>
            </div>

            {/* Introduction */}
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              La pregunta que más nos hacen los padres al inscribir a sus hijos es: "¿No es suficiente con el inglés del colegio?" La respuesta honesta es que, en la gran mayoría de los casos, no. No porque el colegio lo haga mal, sino porque las condiciones estructurales del sistema educativo español hacen imposible alcanzar un nivel comunicativo real solo con las horas de inglés escolar.
            </p>

            {/* Section 1 - Realidad escolar */}
            <section id="realidad-escolar" className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                La Realidad del Inglés Escolar en España
              </h2>

              <div className="grid md:grid-cols-3 gap-4 mb-8">
                <div className="bg-purple-50 rounded-xl p-5 text-center">
                  <div className="text-3xl font-bold text-purple-600 mb-2">2-3h</div>
                  <p className="text-gray-700 text-sm">Horas semanales de inglés en la mayoría de colegios no bilingües</p>
                </div>
                <div className="bg-purple-50 rounded-xl p-5 text-center">
                  <div className="text-3xl font-bold text-purple-600 mb-2">25+</div>
                  <p className="text-gray-700 text-sm">Alumnos por aula de media en la educación pública española</p>
                </div>
                <div className="bg-amber-50 rounded-xl p-5 text-center">
                  <div className="text-3xl font-bold text-amber-600 mb-2">A2-B1</div>
                  <p className="text-gray-700 text-sm">Nivel medio al terminar el bachillerato sin clases complementarias</p>
                </div>
              </div>

              <p className="text-gray-700 mb-4 leading-relaxed">
                El sistema educativo español dedica, en promedio, entre 2 y 3 horas semanales al inglés en primaria y secundaria. En colegios bilingües, esta cifra sube a 4-8 horas, pero la calidad varía enormemente según el centro. El Consejo de Europa recomienda un mínimo de 5 horas semanales para que la adquisición del idioma sea efectiva.
              </p>

              <div className="bg-purple-50 border-l-4 border-purple-500 p-6 rounded-r-xl">
                <p className="text-gray-800">
                  <strong>Dato clave:</strong> Con 2-3 horas semanales de inglés, se acumulan aproximadamente 100-150 horas anuales. Cambridge estima que se necesitan 500-600 horas para alcanzar un B2. Haciendo el cálculo, un alumno que empieza inglés en primero de primaria llegaría al B2 cuando tenga alrededor de 22 años. La mayoría lo necesita antes.
                </p>
              </div>
            </section>

            {/* Section 2 - Nivel real */}
            <section id="nivel-real" className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                El Nivel Real de los Estudiantes Españoles
              </h2>

              <p className="text-gray-700 mb-6 leading-relaxed">
                Los datos del índice EF EPI (English Proficiency Index) sitúan a España consistentemente por debajo de la media europea en competencia en inglés. La razón estructural es clara: pocas horas, grupos grandes y un enfoque centrado en la gramática más que en la comunicación real.
              </p>

              <div className="overflow-x-auto mb-8">
                <table className="w-full border-collapse bg-white rounded-xl overflow-hidden shadow-lg">
                  <thead>
                    <tr className="bg-gradient-to-r from-purple-600 to-purple-800 text-white">
                      <th className="text-left p-4 font-semibold">Nivel educativo</th>
                      <th className="text-left p-4 font-semibold">Nivel MCER típico (sin extras)</th>
                      <th className="text-left p-4 font-semibold">Nivel MCER con academia</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="bg-gray-50">
                      <td className="p-4 font-medium text-gray-900">Al terminar primaria (12 años)</td>
                      <td className="p-4 text-gray-700">A1-A2</td>
                      <td className="p-4 text-purple-600 font-medium">A2-B1</td>
                    </tr>
                    <tr className="bg-white">
                      <td className="p-4 font-medium text-gray-900">Al terminar la ESO (16 años)</td>
                      <td className="p-4 text-gray-700">A2-B1</td>
                      <td className="p-4 text-purple-600 font-medium">B1-B2</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="p-4 font-medium text-gray-900">Al terminar bachillerato (18 años)</td>
                      <td className="p-4 text-gray-700">B1 (raramente B2)</td>
                      <td className="p-4 text-purple-600 font-medium">B2-C1</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* Section 3 - Por qué no es suficiente */}
            <section id="por-que-no" className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                Por Qué el Inglés del Colegio no es Suficiente
              </h2>

              <div className="space-y-4 mb-8">
                <div className="bg-white border border-gray-200 rounded-xl p-6">
                  <h3 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
                    <Target className="w-5 h-5 text-purple-600" />
                    Tiempo de speaking mínimo por alumno
                  </h3>
                  <p className="text-gray-700">En una clase de 25 alumnos con 50 minutos de inglés, cada alumno tiene de media 2 minutos de tiempo de producción oral. La adquisición del idioma requiere práctica activa, no escucha pasiva.</p>
                </div>

                <div className="bg-white border border-gray-200 rounded-xl p-6">
                  <h3 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
                    <Target className="w-5 h-5 text-purple-600" />
                    Enfoque gramatical vs comunicativo
                  </h3>
                  <p className="text-gray-700">El currículo escolar tiende a priorizar la gramática y la expresión escrita frente a la comunicación oral. El resultado son alumnos que saben las reglas pero no pueden mantener una conversación básica.</p>
                </div>

                <div className="bg-white border border-gray-200 rounded-xl p-6">
                  <h3 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
                    <Target className="w-5 h-5 text-purple-600" />
                    Sin preparación específica de exámenes
                  </h3>
                  <p className="text-gray-700">El colegio no prepara para los exámenes Cambridge, que son los más valorados en el mercado laboral y académico. Esta preparación requiere un trabajo específico de formato y estrategia que la academia ofrece.</p>
                </div>
              </div>
            </section>

            {/* Section 4 - Opciones */}
            <section id="opciones" className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                Opciones para Complementar el Inglés del Colegio
              </h2>

              <div className="grid md:grid-cols-2 gap-4 mb-8">
                <div className="bg-white border border-gray-200 rounded-xl p-5">
                  <h3 className="font-bold text-gray-900 mb-3">Academia de inglés</h3>
                  <p className="text-gray-700 text-sm mb-3">La opción más completa. Grupos reducidos, metodología específica, preparación Cambridge y seguimiento del progreso. 2-4 horas semanales de inglés de calidad.</p>
                  <p className="text-sm text-purple-600 font-medium">Coste: 60-90€/mes | Impacto: muy alto</p>
                </div>

                <div className="bg-white border border-gray-200 rounded-xl p-5">
                  <h3 className="font-bold text-gray-900 mb-3">Clases particulares</h3>
                  <p className="text-gray-700 text-sm mb-3">Máxima personalización. Ideal si hay necesidades específicas o dificultades concretas. Puede combinarse con academia.</p>
                  <p className="text-sm text-purple-600 font-medium">Coste: 20-35€/hora | Impacto: alto (personalizado)</p>
                </div>

                <div className="bg-white border border-gray-200 rounded-xl p-5">
                  <h3 className="font-bold text-gray-900 mb-3">Clases online</h3>
                  <p className="text-gray-700 text-sm mb-3">Más flexible y accesible. Menor impacto para niños pequeños. Buena opción complementaria para adolescentes.</p>
                  <p className="text-sm text-purple-600 font-medium">Coste: 40-70€/mes | Impacto: medio-alto</p>
                </div>

                <div className="bg-white border border-gray-200 rounded-xl p-5">
                  <h3 className="font-bold text-gray-900 mb-3">Estancias lingüísticas</h3>
                  <p className="text-gray-700 text-sm mb-3">Inmersión total de 2-4 semanas. Impacto transformador en motivación y fluidez. Complemento perfecto a la academia.</p>
                  <p className="text-sm text-purple-600 font-medium">Coste: 800-2000€ | Impacto: transformador</p>
                </div>
              </div>
            </section>

            {/* Section 5 - Cómo elegir */}
            <section id="elegir" className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                Cómo Elegir la Mejor Opción para tu Hijo
              </h2>

              <p className="text-gray-700 mb-6 leading-relaxed">
                No todas las academias son iguales. Estos son los criterios que más impactan en la calidad del aprendizaje:
              </p>

              <div className="space-y-3 mb-8">
                {[
                  { criterio: 'Tamaño del grupo', desc: 'Máximo 6-8 alumnos para primaria. Grupos mayores limitan el tiempo de speaking y la atención individualizada.' },
                  { criterio: 'Metodología', desc: '¿Cómo enseñan? ¿Hay inmersión en inglés? ¿Se prepara para Cambridge? Pide explicaciones concretas, no solo "método comunicativo".' },
                  { criterio: 'Preparación Cambridge', desc: 'Si tu objetivo es la certificación, asegúrate de que el centro tiene experiencia real con exámenes Cambridge y tasas de aprobados documentadas.' },
                  { criterio: 'Seguimiento y comunicación', desc: '¿Te informan regularmente del progreso de tu hijo? ¿Hay informes periódicos? El seguimiento activo es señal de un centro comprometido.' },
                  { criterio: 'Cualificación del profesorado', desc: '¿Los profesores tienen titulación específica en enseñanza de idiomas? ¿Son nativos o bilingües certificados? La cualificación del profesor es el factor individual más importante.' }
                ].map((item, i) => (
                  <div key={i} className="bg-white border border-gray-200 rounded-xl p-5 flex gap-4">
                    <CheckCircle className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <h3 className="font-bold text-gray-900 mb-1">{item.criterio}</h3>
                      <p className="text-gray-700 text-sm">{item.desc}</p>
                    </div>
                  </div>
                ))}
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
              <h3 className="text-2xl font-bold mb-4">Complementamos el inglés del colegio con resultados reales</h3>
              <p className="text-purple-100 mb-6 max-w-2xl mx-auto">
                Metodología que genera resultados medibles. Grupos reducidos, preparación Cambridge y profesores especializados.
              </p>
              <Link
                to="/cursos-ingles/primaria"
                className="inline-flex items-center gap-2 bg-white text-purple-600 px-8 py-4 rounded-xl font-semibold hover:bg-purple-50 transition-colors"
              >
                Ver cursos de primaria
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>

            {/* Related Articles */}
            <section className="mt-16">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Artículos Relacionados</h2>
              <div className="grid md:grid-cols-3 gap-6">
                <Link to="/cursos-ingles/primaria" className="group bg-gray-50 rounded-xl p-6 hover:bg-purple-50 transition-colors">
                  <h3 className="font-semibold text-gray-900 group-hover:text-purple-600 transition-colors mb-2">
                    Cursos de Inglés Primaria
                  </h3>
                  <p className="text-gray-600 text-sm">Inglés para niños de 6 a 12 años en Madrid.</p>
                </Link>
                <Link to="/cursos-ingles/secundaria" className="group bg-gray-50 rounded-xl p-6 hover:bg-purple-50 transition-colors">
                  <h3 className="font-semibold text-gray-900 group-hover:text-purple-600 transition-colors mb-2">
                    Cursos de Inglés Secundaria
                  </h3>
                  <p className="text-gray-600 text-sm">Inglés para adolescentes de 12 a 18 años.</p>
                </Link>
                <Link to="/cursos-ingles/infantil" className="group bg-gray-50 rounded-xl p-6 hover:bg-purple-50 transition-colors">
                  <h3 className="font-semibold text-gray-900 group-hover:text-purple-600 transition-colors mb-2">
                    Cursos de Inglés Infantil
                  </h3>
                  <p className="text-gray-600 text-sm">Inglés para los más pequeños antes del colegio.</p>
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
              href="https://www.cambridgeenglish.org/es/learning-english/parents-and-children/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-blue-600 hover:underline"
            >
              → Recursos Cambridge English para padres e hijos
            </a>
          </div>
        </section>

        <Footer />
      </div>

      <SchemaMarkup schema={articleSchema} />
    </>
  );
}
