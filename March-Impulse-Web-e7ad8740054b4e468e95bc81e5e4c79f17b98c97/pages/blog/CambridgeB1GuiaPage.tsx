import React, { useState, useEffect } from 'react';
import { ChevronRight, Clock, Calendar, ChevronDown, ChevronUp, BookOpen, CheckCircle, Target, ArrowRight, Award } from 'lucide-react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import LeadForm from '../../components/LeadForm';
import FAQSection from '../../components/FAQSection';
import Breadcrumb from '../../components/Breadcrumb';
import { generateArticleSchema, businessInfo } from '../../utils/schemaData';
import { blogImages } from '@/utils/images';

export const articleSchema = generateArticleSchema({
    headline: "Examen Cambridge B1 Preliminary: Guía Completa 2026",
    description: "Guía completa del B1 Preliminary: estructura, formato del examen, precio, preparación y estrategias para aprobar con éxito.",
    url: `${businessInfo.url}/blog/cambridge-b1-guia`,
    datePublished: "2025-01-01"
  });

export default function CambridgeB1GuiaPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const newFaqItems = [
    {
      question: "¿Cuánto cuesta inscribirse al examen Cambridge B1 en España?",
      answer: "El precio del examen Cambridge B1 Preliminary varía entre €165-185 según el centro examinador y la modalidad elegida. La versión digital suele costar aproximadamente €170, mientras la versión papel puede alcanzar €180. Inscripciones tardías tienen recargo adicional de €55, por lo que conviene registrarse 3-4 semanas antes de la fecha deseada."
    },
    {
      question: "¿Cuánto tiempo necesito para prepararme adecuadamente?",
      answer: "Con nivel A2 consolidado, la preparación óptima requiere 10-12 semanas de estudio regular (6-8 horas semanales). Estudiantes con nivel previo más bajo pueden necesitar 16-20 semanas adicionales para alcanzar primero competencia A2. Cursos intensivos acortan este periodo a 8 semanas estudiando 12-15 horas semanales con práctica diaria."
    },
    {
      question: "¿Cuándo se publican las fechas de examen disponibles?",
      answer: "Los centros autorizados publican calendarios con 6-12 meses de anticipación. Generalmente hay sesiones mensuales en ciudades principales y bimensuales en localidades menores. La modalidad digital ofrece mayor flexibilidad con sesiones semanales en muchos centros. Consulta el centro más cercano en la web oficial cambridgeenglish.org para fechas específicas."
    },
    {
      question: "¿Puedo presentar sólo las partes del examen que suspendí?",
      answer: "No, el Cambridge B1 Preliminary debe realizarse completo en cada convocatoria. No existe modalidad de examen parcial o reválida de secciones específicas. Si suspendes, debes volver a realizar las cuatro partes íntegras en nuevo intento. Sin embargo, tu preparación previa facilita significativamente el segundo intento enfocándote en debilidades identificadas."
    },
    {
      question: "¿El certificado B1 sirve para estudiar en universidades extranjeras?",
      answer: "El B1 Preliminary satisface requisitos de inglés para programas de formación profesional y algunos grados asociados, pero la mayoría de universidades anglófonas exigen nivel B2 (FCE) o superior para admisión a grados completos. Es excelente como paso intermedio antes de preparar B2 First, demostrando progreso documentado."
    }
  ];

  const examStructure = [
    {
      part: "Reading",
      duration: "45 min",
      questions: 32,
      percentage: "25%",
      description: "Comprensión de carteles, artículos, textos con huecos"
    },
    {
      part: "Writing",
      duration: "45 min",
      questions: 2,
      percentage: "25%",
      description: "Email de 100 palabras + artículo o historia"
    },
    {
      part: "Listening",
      duration: "30 min",
      questions: 25,
      percentage: "25%",
      description: "Anuncios, diálogos, conversaciones (se reproduce 2 veces)"
    },
    {
      part: "Speaking",
      duration: "10-12 min",
      questions: 4,
      percentage: "25%",
      description: "Entrevista, descripción foto, tarea colaborativa, conversación"
    }
  ];

  return (
    <>
<div className="min-h-screen flex flex-col bg-white">
        <Navbar />

        <main className="flex-grow">
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
              { label: 'Cambridge B1 Guía' }
              ]}
              variant="light"
              />

              <div className="mt-12 md:mt-16">
                <div className="flex items-center gap-4 mb-6 animate-hero-fade-up">
                  <div className="w-8 h-px bg-white/40"></div>
                  <span className="text-white/50 text-xs font-display flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5" />
                    Actualizado: Diciembre 2025
                  </span>
                </div>

                <h1 className="font-serif text-3xl md:text-5xl lg:text-6xl text-white tracking-tight leading-[1.1] mb-6 animate-hero-fade-up animation-delay-100">
                  Examen Cambridge B1 Preliminary: Guía Completa 2025
                </h1>
                <div className="w-16 h-0.5 bg-brand-red mb-6 animate-hero-fade-up animation-delay-150"></div>
                <p className="font-display text-lg md:text-xl text-white/80 font-light leading-relaxed max-w-3xl animate-hero-fade-up animation-delay-200">
                  Todo lo que necesitas saber para obtener tu certificado de inglés intermedio: formato, preparación y estrategias de éxito.
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
                <li><a href="#que-nivel" className="text-emerald-600 hover:text-emerald-700 transition-colors">→ ¿Qué Nivel Certifica el B1?</a></li>
                <li><a href="#estructura" className="text-emerald-600 hover:text-emerald-700 transition-colors">→ Estructura y Formato del Examen</a></li>
                <li><a href="#puntuacion" className="text-emerald-600 hover:text-emerald-700 transition-colors">→ Puntuación y Certificación</a></li>
                <li><a href="#preparacion" className="text-emerald-600 hover:text-emerald-700 transition-colors">→ Cómo Prepararte Eficazmente</a></li>
                <li><a href="#faq" className="text-emerald-600 hover:text-emerald-700 transition-colors">→ Preguntas Frecuentes</a></li>
              </ul>
            </div>

            {/* FAQ Section - HIGH UP on page */}
            <FAQSection
              faqs={newFaqItems}
              title="Preguntas Frecuentes sobre Cambridge B1"
              className="mb-12"
            />

            {/* Introduction */}
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              El examen Cambridge B1 Preliminary representa un hito crucial para demostrar tu dominio del inglés a nivel intermedio. Esta certificación evalúa tu capacidad para comunicarte en situaciones cotidianas mediante cuatro competencias lingüísticas fundamentales. Con una estructura clara de <strong>140 minutos totales</strong> y un sistema de puntuación transparente, el B1 Preliminary abre puertas laborales y académicas a nivel internacional. El certificado tiene <strong>validez permanente</strong> y es reconocido por más de 20,000 organizaciones en todo el mundo.
            </p>

            {/* Section 1 */}
            <section id="que-nivel" className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                ¿Qué Nivel Certifica el Examen Cambridge B1?
              </h2>

              <p className="text-gray-700 mb-4 leading-relaxed">
                El <a href="https://www.cambridgeenglish.org/es/exams-and-tests/preliminary/" target="_blank" rel="noopener noreferrer" className="text-emerald-600 hover:underline">Cambridge B1 Preliminary</a> certifica el nivel B1 del Marco Común Europeo de Referencia (MCER), lo que significa que dominas el inglés para situaciones prácticas cotidianas. Este nivel intermedio demuestra que puedes:
              </p>

              <div className="grid md:grid-cols-2 gap-4 mb-6">
                <div className="bg-emerald-50 rounded-xl p-5">
                  <h3 className="font-bold text-emerald-900 mb-3 flex items-center gap-2">
                    <CheckCircle className="w-5 h-5" />
                    Comprensión
                  </h3>
                  <ul className="space-y-2 text-gray-700 text-sm">
                    <li>• Entender puntos principales de mensajes claros</li>
                    <li>• Comprender temas familiares: trabajo, estudios, ocio</li>
                    <li>• Seguir conversaciones en viajes a países anglófonos</li>
                  </ul>
                </div>
                <div className="bg-emerald-50 rounded-xl p-5">
                  <h3 className="font-bold text-emerald-900 mb-3 flex items-center gap-2">
                    <CheckCircle className="w-5 h-5" />
                    Producción
                  </h3>
                  <ul className="space-y-2 text-gray-700 text-sm">
                    <li>• Producir textos simples sobre temas familiares</li>
                    <li>• Describir experiencias y acontecimientos</li>
                    <li>• Expresar opiniones y justificarlas brevemente</li>
                  </ul>
                </div>

              </div>

              <p className="text-gray-700 mb-4 leading-relaxed">
                La puntuación mínima para aprobar es <strong>140 sobre 170 puntos</strong>, equivalente al 82% de acierto. Si obtienes entre 160-170 puntos, recibirás certificación de nivel B2, mientras que 120-139 puntos te otorgan certificado A2.
              </p>

              <div className="bg-emerald-50 border-l-4 border-emerald-500 p-6 rounded-r-xl">
                <p className="text-gray-800 font-medium">
                  Para profesionales, el B1 Preliminary satisface requisitos de inglés funcional en sectores como turismo, atención al cliente y administración. Para estudiantes, representa el nivel mínimo recomendado para cursos universitarios en inglés.
                </p>
              </div>
            </section>

            {/* Section 2 - Exam Structure */}
            <section id="estructura" className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                Estructura y Formato del Examen Cambridge B1
              </h2>

              <p className="text-gray-700 mb-6 leading-relaxed">
                El examen consta de cuatro componentes claramente diferenciados. Cada parte representa el <strong>25% de la calificación final</strong>, con formato idéntico en modalidad papel o digital:
              </p>

              <div className="overflow-x-auto mb-8">
                <table className="w-full border-collapse bg-white rounded-xl overflow-hidden shadow-lg">
                  <thead>
                    <tr className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white">
                      <th className="text-left p-4 font-semibold">Parte</th>
                      <th className="text-left p-4 font-semibold">Duración</th>
                      <th className="text-left p-4 font-semibold">Preguntas</th>
                      <th className="text-left p-4 font-semibold">Descripción</th>
                    </tr>
                  </thead>
                  <tbody>
                    {examStructure.map((item, index) => (
                      <tr key={index} className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                        <td className="p-4 font-medium text-gray-900">{item.part}</td>
                        <td className="p-4 text-gray-700">{item.duration}</td>
                        <td className="p-4 text-gray-700">{item.questions}</td>
                        <td className="p-4 text-gray-700 text-sm">{item.description}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-xl p-6">
                  <h3 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                    <BookOpen className="w-5 h-5 text-emerald-600" />
                    Reading
                  </h3>
                  <p className="text-gray-700 text-sm">32 preguntas en 6 partes: opción múltiple, emparejamiento, textos con huecos y ejercicios cloze. Evalúa identificación de información específica, comprensión de actitud del autor y deducción de significados.</p>
                </div>

                <div className="bg-white border border-gray-200 rounded-xl p-6">
                  <h3 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                    <BookOpen className="w-5 h-5 text-emerald-600" />
                    Writing
                  </h3>
                  <p className="text-gray-700 text-sm">Dos tareas obligatorias: Parte 1 es siempre un email de 100 palabras. Parte 2 ofrece elegir entre escribir un artículo o una historia de unas 100 palabras.</p>
                </div>

              </div>
            </section>

            {/* Section 3 */}
            <section id="puntuacion" className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                Puntuación, Resultados y Certificación
              </h2>

              <div className="bg-gradient-to-r from-emerald-50 to-teal-50 rounded-xl p-6 mb-6">
                <h3 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <Award className="w-5 h-5 text-emerald-600" />
                  Sistema de Calificación
                </h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="bg-white rounded-lg p-4 text-center">
                    <div className="text-red-600 font-bold text-lg">120-139</div>
                    <div className="text-gray-600 text-sm">Nivel A2</div>
                  </div>
                  <div className="bg-white rounded-lg p-4 text-center border-2 border-emerald-500">
                    <div className="text-emerald-600 font-bold text-lg">140-149</div>
                    <div className="text-gray-600 text-sm">Pass</div>
                  </div>
                  <div className="bg-white rounded-lg p-4 text-center">
                    <div className="text-emerald-600 font-bold text-lg">150-159</div>
                    <div className="text-gray-600 text-sm">Pass with Merit</div>
                  </div>
                  <div className="bg-white rounded-lg p-4 text-center">
                    <div className="text-blue-600 font-bold text-lg">160-170</div>
                    <div className="text-gray-600 text-sm">Distinction (B2)</div>
                  </div>

                </div>
              </div>

              <p className="text-gray-700 mb-4 leading-relaxed">
                Los resultados aparecen online aproximadamente 2-3 semanas después del examen (digital) o 4-6 semanas (papel). Recibes puntuación individual para cada competencia además de la puntuación total combinada.
              </p>

              <div className="bg-emerald-50 border-l-4 border-emerald-500 p-6 rounded-r-xl">
                <p className="text-gray-800 font-medium">
                  <strong>El certificado B1 Preliminary no caduca nunca.</strong> A diferencia de TOEFL o IELTS (válidos 2 años), tu certificación Cambridge permanece vigente indefinidamente, convirtiéndola en activo permanente para tu CV.
                </p>
              </div>
            </section>

            {/* Section 4 */}
            <section id="preparacion" className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                Cómo Prepararte Eficazmente para el Cambridge B1
              </h2>

              <p className="text-gray-700 mb-6 leading-relaxed">
                La preparación efectiva requiere familiarizarte con el formato específico del examen, no solo mejorar tu inglés general. Cambridge English proporciona tests de muestra gratuitos en formato PDF descargable y tutoriales interactivos digitales.
              </p>

              <div className="space-y-4 mb-8">
                <div className="bg-white border border-gray-200 rounded-xl p-6">
                  <h3 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
                    <Target className="w-5 h-5 text-emerald-600" />
                    Materiales de estudio
                  </h3>
                  <p className="text-gray-700">Los libros oficiales "<a href="https://www.cambridge.es/en/catalogue/exams" target="_blank" rel="noopener noreferrer" className="text-emerald-600 hover:underline">B1 Preliminary Trainer</a>" y "<a href="https://www.cambridge.es/en/catalogue/exams/courses" target="_blank" rel="noopener noreferrer" className="text-emerald-600 hover:underline">Complete Preliminary</a>" incluyen 6-8 exámenes completos con claves de respuesta y archivos de audio. "Write & Improve" de Cambridge proporciona retroalimentación automática instantánea sobre tus redacciones.</p>
                </div>

                <div className="bg-white border border-gray-200 rounded-xl p-6">
                  <h3 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
                    <Target className="w-5 h-5 text-emerald-600" />
                    Cursos preparatorios
                  </h3>
                  <p className="text-gray-700">Centros autorizados Cambridge ofrecen programas intensivos de 8-12 semanas (2 sesiones semanales de 90 minutos) con simulacros cronometrados. Coste típico: €250-450 según tamaño del grupo.</p>
                </div>

                <div className="bg-white border border-gray-200 rounded-xl p-6">
                  <h3 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
                    <Target className="w-5 h-5 text-emerald-600" />
                    Autoaprendizaje
                  </h3>
                  <p className="text-gray-700">Dedica 30 minutos diarios a materiales auténticos: podcasts como "6 Minute English" de BBC, series con subtítulos en inglés, artículos de nivel intermedio. Practica Writing 2-3 veces por semana.</p>
                </div>

              </div>

              <div className="bg-amber-50 border-l-4 border-amber-500 p-6 rounded-r-xl">
                <p className="text-gray-800">
                  <strong>Error común:</strong> Estudiar inglés general sin practicar el formato específico del examen. Dedica al menos 30% de tu tiempo de preparación a exámenes completos cronometrados para dominar la gestión temporal.
                </p>
              </div>
            </section>

            {/* FAQ Section */}
            <section id="faq" className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8">
                Preguntas Frecuentes
              </h2>

              <div className="space-y-4">
                {newFaqItems.map((faq, index) => (
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
                  El <a href="/examenes-cambridge/b1-preliminary/" className="text-emerald-600 hover:underline font-medium">examen Cambridge B1 Preliminary</a> representa una certificación accesible y valiosa que demuestra tu capacidad para comunicarte efectivamente en inglés cotidiano. Con estructura clara de 140 minutos distribuidos equitativamente entre cuatro competencias, preparación estratégica de 10-12 semanas y validez permanente, es inversión inteligente para desarrollo profesional y académico.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  <a href="/academia-ingles-barrio-del-pilar/" className="text-emerald-600 hover:underline font-medium">Nuestra academia en Barrio del Pilar</a>, <a href="/academia-ingles-la-vaguada/" className="text-emerald-600 hover:underline font-medium">junto a La Vaguada</a>, ofrece <a href="/cursos-ingles/adultos/" className="text-emerald-600 hover:underline font-medium">cursos de inglés para adultos</a> y programas de <a href="/cursos-ingles/secundaria/" className="text-emerald-600 hover:underline font-medium">cursos de secundaria</a> especializados con excelentes tasas de aprobación para candidatos comprometidos.
                </p>
              </div>
            </section>

            {/* CTA */}
            <div className="bg-gradient-to-r from-emerald-600 to-teal-600 rounded-2xl p-8 text-center text-white">
              <h3 className="text-2xl font-bold mb-4">¿Listo para obtener tu B1?</h3>
              <p className="text-emerald-100 mb-6 max-w-2xl mx-auto">
                En Impulse English Academy te preparamos con metodología probada para aprobar el B1 Preliminary con la mejor puntuación.
              </p>
              <a
              href="/contacto/"
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
                <a href="/examenes-cambridge/" className="group bg-gray-50 rounded-xl p-6 hover:bg-emerald-50 transition-colors">
                  <h3 className="font-semibold text-gray-900 group-hover:text-emerald-600 transition-colors mb-2">
                    Guía de Exámenes Cambridge 2025
                  </h3>
                  <p className="text-gray-600 text-sm">Comparativa completa de todos los niveles Cambridge.</p>
                </a>
                <a href="/examenes-cambridge/b2-first/" className="group bg-gray-50 rounded-xl p-6 hover:bg-emerald-50 transition-colors">
                  <h3 className="font-semibold text-gray-900 group-hover:text-emerald-600 transition-colors mb-2">
                    Cambridge B2 First: Beneficios
                  </h3>
                  <p className="text-gray-600 text-sm">El siguiente paso después del B1 Preliminary.</p>
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
              href="https://www.cambridgeenglish.org/es/exams-and-tests/preliminary/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-blue-600 hover:underline"
            >
              → Más información en Cambridge English - B1 Preliminary oficial
            </a>
          </div>
        </section>

        <Footer />
      </div>

      {/* Schema.org Structured Data */}
</>
  );
}
