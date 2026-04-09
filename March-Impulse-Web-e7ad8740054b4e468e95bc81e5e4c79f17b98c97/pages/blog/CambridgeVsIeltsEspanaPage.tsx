import React, { useState, useEffect } from 'react';
import { ChevronRight, Clock, Calendar, ChevronDown, ChevronUp, BookOpen, CheckCircle, Target, ArrowRight, Award } from 'lucide-react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import LeadForm from '../../components/LeadForm';
import Breadcrumb from '../../components/Breadcrumb';
import { generateArticleSchema, businessInfo } from '../../utils/schemaData';
import { blogImages } from '@/utils/images';

export const articleSchema = generateArticleSchema({
    headline: "Cambridge vs IELTS en España: ¿Qué Examen Te Conviene?",
    description: "Compara Cambridge e IELTS para España: validez, reconocimiento laboral, precio y formato. Cambridge no caduca, IELTS sí. Guía para decidir.",
    url: `${businessInfo.url}/blog/cambridge-vs-ielts-espana`,
    datePublished: "2025-03-01"
  });

export const faqItems = [
    {
      question: "¿El IELTS caduca? ¿Y Cambridge?",
      answer: "Sí, el certificado IELTS tiene una validez de 2 años desde la fecha del examen. Después de ese periodo, necesitas volver a presentarte si la institución lo requiere. Los certificados Cambridge (PET, FCE, CAE, CPE) no caducan nunca y son válidos de forma permanente. Esta es una de las diferencias más significativas entre ambos."
    }

  ,
    {
      question: "¿Qué examen es más difícil, Cambridge o IELTS?",
      answer: "No se puede decir que uno sea más difícil que otro, ya que evalúan de forma diferente. IELTS mide tu nivel en una escala continua (1-9), mientras que Cambridge examina si alcanzas un nivel específico (B1, B2, C1, C2). Muchos candidatos encuentran el Speaking de Cambridge más natural (conversación con otro candidato) y el de IELTS más formal (entrevista individual)."
    },
    {
      question: "¿Las universidades españolas aceptan IELTS?",
      answer: "Sí, la mayoría de universidades españolas aceptan IELTS para acreditar el nivel de inglés, aunque Cambridge y Linguaskill son generalmente más populares en el contexto español. Para universidades anglófonas (Reino Unido, Australia), IELTS suele ser la opción preferida. Consulta siempre los requisitos específicos de tu universidad."
    },
    {
      question: "¿Puedo usar IELTS para oposiciones en España?",
      answer: "Depende de la convocatoria. Muchas oposiciones en España aceptan IELTS junto con Cambridge y otros certificados reconocidos. Sin embargo, al caducar a los 2 años, podrías necesitar presentar un IELTS vigente en el momento de la oposición. Cambridge, al no caducar, suele ser más práctico para este propósito."
    },
    {
      question: "¿Cuánto cuesta prepararse para cada examen?",
      answer: "Los cursos preparatorios tienen precios similares para ambos exámenes (250-500€ por 8-12 semanas en academia). La diferencia está en el coste del examen en sí: IELTS cuesta 200-250€ y caduca en 2 años; Cambridge B2 cuesta 190-215€ y no caduca nunca. A largo plazo, Cambridge es más económico si consideras que podrías necesitar renovar IELTS."
    }
  ];

export default function CambridgeVsIeltsEspanaPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [openFaq, setOpenFaq] = useState<number | null>(null);


  const comparisonData = [
    { feature: "Validez del certificado", cambridge: "No caduca nunca", ielts: "2 años" },
    { feature: "Precio del examen", cambridge: "115€-230€ según nivel", ielts: "200€-250€" },
    { feature: "Formato", cambridge: "Por nivel (B1, B2, C1, C2)", ielts: "Único (Academic o General)" },
    { feature: "Resultado", cambridge: "Pass/Fail + puntuación Cambridge", ielts: "Banda 1-9 (continua)" },
    { feature: "Tiempo de resultados", cambridge: "2-6 semanas", ielts: "13 días" },
    { feature: "Speaking", cambridge: "Con otro candidato (14 min)", ielts: "Entrevista individual (11-14 min)" },
    { feature: "Reconocimiento España", cambridge: "Muy alto (universidades, empresas)", ielts: "Alto (universidades, emigración)" },
    { feature: "Reconocimiento internacional", cambridge: "Global (especialmente Europa)", ielts: "Global (especialmente UK, Australia)" }
  ];

  return (
    <>
<div className="min-h-screen flex flex-col bg-white">
        <Navbar />

        <main className="flex-grow">
          {/* Hero Section */}
          <header className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden">
            <div className="absolute inset-0">
              <img src={blogImages.mainClassroom.url} alt="Comparativa Cambridge vs IELTS exámenes oficiales de inglés" className="w-full h-full object-cover" loading="eager" />
              <div className="absolute inset-0 bg-gradient-to-br from-accent-blue/95 via-accent-blue/85 to-[#0a3560]/75"></div>
            </div>
            <div className="absolute inset-0 hero-grain opacity-[0.03]"></div>
            <div className="absolute -top-32 -right-32 w-[420px] h-[420px] rounded-full bg-brand-red/[0.04]"></div>
            <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
              <Breadcrumb
                items={[
                  { label: 'Blog', href: '/blog' },
                  { label: 'Cambridge vs IELTS' }
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
                  Cambridge vs IELTS en España: ¿Qué Examen Te Conviene?
                </h1>
                <div className="w-16 h-0.5 bg-brand-red mb-6 animate-hero-fade-up animation-delay-150"></div>
                <p className="font-display text-lg md:text-xl text-white/80 font-light leading-relaxed max-w-3xl animate-hero-fade-up animation-delay-200">
                  Comparativa completa entre los dos exámenes de inglés más reconocidos: validez, formato, precio y para quién es mejor cada uno.
                </p>
              </div>
            </div>
          </header>

          {/* Content */}
          <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            {/* Table of Contents */}
            <div className="bg-blue-50 rounded-2xl p-6 mb-12">
              <h2 className="text-lg font-semibold text-gray-900 mb-4">Contenido del artículo</h2>
              <ul className="space-y-2">
                <li><a href="#panorama" className="text-blue-600 hover:text-blue-700 transition-colors">→ Cambridge vs IELTS: Panorama General</a></li>
                <li><a href="#validez" className="text-blue-600 hover:text-blue-700 transition-colors">→ Validez y Caducidad</a></li>
                <li><a href="#reconocimiento" className="text-blue-600 hover:text-blue-700 transition-colors">→ Reconocimiento en España</a></li>
                <li><a href="#formato" className="text-blue-600 hover:text-blue-700 transition-colors">→ Formato y Dificultad</a></li>
                <li><a href="#recomendacion" className="text-blue-600 hover:text-blue-700 transition-colors">→ Recomendación Según Perfil</a></li>
                <li><a href="#faq" className="text-blue-600 hover:text-blue-700 transition-colors">→ Preguntas Frecuentes</a></li>
              </ul>
            </div>

            {/* Introduction */}
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              Cambridge y IELTS son los dos exámenes de inglés más prestigiosos a nivel mundial. Ambos son reconocidos internacionalmente y aceptados por universidades, empresas y gobiernos. Pero tienen diferencias fundamentales que los hacen más adecuados según tu perfil y objetivos. En esta guía comparamos ambos en el contexto español para ayudarte a elegir <strong>el examen que realmente necesitas</strong>.
            </p>

            {/* Section 1 - Overview */}
            <section id="panorama" className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                Cambridge vs IELTS: Panorama General
              </h2>

              <p className="text-gray-700 mb-6 leading-relaxed">
                Antes de entrar en detalles, es importante entender que Cambridge e IELTS nacen de la misma organización. IELTS es copropiedad de Cambridge Assessment English, el British Council e IDP Australia. Los exámenes Cambridge (PET, FCE, CAE, CPE) son producidos exclusivamente por Cambridge Assessment English. Ambos evalúan las mismas competencias, pero con filosofías diferentes.
              </p>

              <div className="overflow-x-auto mb-8">
                <table className="w-full border-collapse bg-white rounded-xl overflow-hidden shadow-lg">
                  <thead>
                    <tr className="bg-gradient-to-r from-blue-600 to-blue-800 text-white">
                      <th className="text-left p-4 font-semibold">Aspecto</th>
                      <th className="text-left p-4 font-semibold">Cambridge</th>
                      <th className="text-left p-4 font-semibold">IELTS</th>
                    </tr>
                  </thead>
                  <tbody>
                    {comparisonData.map((item, index) => (
                      <tr key={index} className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                        <td className="p-4 font-medium text-gray-900">{item.feature}</td>
                        <td className="p-4 text-gray-700 text-sm">{item.cambridge}</td>
                        <td className="p-4 text-gray-700 text-sm">{item.ielts}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-xl">
                <p className="text-gray-800 font-medium">
                  <strong>La diferencia clave:</strong> Cambridge certifica que has alcanzado un nivel específico (B1, B2, C1, C2) con un certificado permanente. IELTS mide dónde estás en una escala continua con un resultado válido durante 2 años.
                </p>
              </div>
            </section>

            {/* Section 2 */}
            <section id="validez" className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                Validez y Caducidad: La Gran Diferencia
              </h2>

              <p className="text-gray-700 mb-6 leading-relaxed">
                Esta es probablemente la diferencia más importante para tomar tu decisión:
              </p>

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div className="bg-white border-2 border-green-200 rounded-xl p-6">
                  <h3 className="font-bold text-green-800 mb-3 flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                    Cambridge: Validez Permanente
                  </h3>
                  <p className="text-gray-700 text-sm mb-3">Tu certificado B2 First, por ejemplo, será válido dentro de 5, 10 o 20 años. Es una inversión de por vida.</p>
                  <ul className="space-y-1 text-gray-600 text-sm">
                    <li>• Pagas una vez, certificado para siempre</li>
                    <li>• Ideal para CV y desarrollo profesional a largo plazo</li>
                    <li>• Perfecto para oposiciones sin fecha fija</li>
                  </ul>
                </div>
                <div className="bg-white border-2 border-amber-200 rounded-xl p-6">
                  <h3 className="font-bold text-amber-800 mb-3 flex items-center gap-2">
                    <Clock className="w-5 h-5 text-amber-600" />
                    IELTS: Válido 2 Años
                  </h3>
                  <p className="text-gray-700 text-sm mb-3">Tras 2 años necesitas volver a examinarte. Esto puede sumar costes significativos a lo largo de tu carrera.</p>
                  <ul className="space-y-1 text-gray-600 text-sm">
                    <li>• Coste recurrente cada 2 años si lo necesitas</li>
                    <li>• Necesario para inmigración UK/Australia</li>
                    <li>• Resultados reflejan tu nivel actual</li>
                  </ul>
                </div>
              </div>

              <p className="text-gray-700 mb-4 leading-relaxed">
                Para la mayoría de personas en España, la validez permanente de Cambridge es una ventaja decisiva. Si consideras que podrías necesitar tu certificado de inglés durante los próximos 10 años, Cambridge te ahorrará dinero y tiempo en repetir exámenes. Consulta la <a href="/blog/escala-cambridge/" className="text-blue-600 hover:underline">escala de niveles Cambridge</a> para más detalles.
              </p>
            </section>

            {/* Section 3 */}
            <section id="reconocimiento" className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                Reconocimiento en España
              </h2>

              <p className="text-gray-700 mb-6 leading-relaxed">
                En el contexto español específico, hay diferencias de reconocimiento y uso que debes considerar:
              </p>

              <div className="space-y-4 mb-8">
                <div className="bg-white border border-gray-200 rounded-xl p-6">
                  <h3 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
                    <Award className="w-5 h-5 text-blue-600" />
                    Universidades españolas
                  </h3>
                  <p className="text-gray-700">Ambos son aceptados, pero Cambridge (y Linguaskill) son más populares en el sistema universitario español. Muchas universidades mencionan específicamente Cambridge en sus normativas de acreditación de idiomas.</p>
                </div>

                <div className="bg-white border border-gray-200 rounded-xl p-6">
                  <h3 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
                    <Award className="w-5 h-5 text-blue-600" />
                    Mercado laboral español
                  </h3>
                  <p className="text-gray-700">Cambridge tiene mayor penetración en el mercado laboral español. El "First Certificate" (B2) es un término reconocido incluso por personas ajenas al mundo de los idiomas. IELTS es más conocido en contextos internacionales y de emigración.</p>
                </div>

                <div className="bg-white border border-gray-200 rounded-xl p-6">
                  <h3 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
                    <Award className="w-5 h-5 text-blue-600" />
                    Oposiciones y administración pública
                  </h3>
                  <p className="text-gray-700">Las <a href="/academias-ingles-madrid/certificaciones/" className="text-blue-600 hover:underline">certificaciones Cambridge</a> son las más referenciadas en convocatorias de oposiciones españolas. IELTS también es aceptado, pero su caducidad puede ser un problema si la oposición se retrasa.</p>
                </div>
              </div>

              <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-xl">
                <p className="text-gray-800 font-medium">
                  <strong>Para España:</strong> Cambridge es la opción más práctica y reconocida. IELTS es mejor si planeas emigrar a Reino Unido, Australia, Nueva Zelanda o Canadá, donde es a menudo obligatorio para visados.
                </p>
              </div>
            </section>

            {/* Section 4 */}
            <section id="formato" className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                Formato y Dificultad Comparados
              </h2>

              <p className="text-gray-700 mb-6 leading-relaxed">
                Las diferencias de formato influyen en la experiencia del candidato y en la preparación necesaria:
              </p>

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div className="bg-white border border-gray-200 rounded-xl p-6">
                  <h3 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                    <BookOpen className="w-5 h-5 text-blue-600" />
                    Speaking: La mayor diferencia
                  </h3>
                  <p className="text-gray-700 text-sm mb-3"><strong>Cambridge:</strong> Hablas con otro candidato y dos examinadores. Incluye conversación espontánea, descripción de fotos y debate. Se siente más natural.</p>
                  <p className="text-gray-700 text-sm"><strong>IELTS:</strong> Entrevista individual con un examinador. Tres partes: presentación, monólogo sobre un tema y discusión. Más formal y estructurado.</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-xl p-6">
                  <h3 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                    <BookOpen className="w-5 h-5 text-blue-600" />
                    Writing: Diferencias clave
                  </h3>
                  <p className="text-gray-700 text-sm mb-3"><strong>Cambridge:</strong> Dos tareas con tipos de texto específicos (email, artículo, review, informe según nivel). Requiere conocer formatos.</p>
                  <p className="text-gray-700 text-sm"><strong>IELTS Academic:</strong> Tarea 1: describir un gráfico/diagrama. Tarea 2: ensayo argumentativo. Más académico y predecible.</p>
                </div>
              </div>

              <p className="text-gray-700 mb-4 leading-relaxed">
                En general, los candidatos que prefieren interacción natural y variedad de formatos se sienten más cómodos con Cambridge. Quienes prefieren un formato predecible y académico suelen preferir IELTS.
              </p>

              <div className="bg-amber-50 border-l-4 border-amber-500 p-6 rounded-r-xl">
                <p className="text-gray-800">
                  <strong>Consejo:</strong> Haz un test de práctica de cada examen antes de decidir. Tu comodidad con el formato puede ser más importante que cualquier otra consideración. Ambos exámenes evalúan las mismas competencias; la diferencia está en cómo las evalúan.
                </p>
              </div>
            </section>

            {/* Section 5 */}
            <section id="recomendacion" className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                Recomendación Según tu Perfil
              </h2>

              <p className="text-gray-700 mb-6 leading-relaxed">
                Basándonos en años de experiencia preparando candidatos para ambos exámenes, estas son nuestras recomendaciones:
              </p>

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div className="bg-white border-2 border-blue-200 rounded-xl p-6">
                  <h3 className="font-bold text-blue-800 mb-3">Elige Cambridge si...</h3>
                  <ul className="space-y-2 text-gray-700 text-sm">
                    <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" /> Vives y trabajas en España</li>
                    <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" /> Quieres un certificado que no caduque</li>
                    <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" /> Lo necesitas para universidad española</li>
                    <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" /> Preparas oposiciones</li>
                    <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" /> Quieres el máximo reconocimiento en tu CV</li>
                  </ul>
                </div>
                <div className="bg-white border-2 border-blue-200 rounded-xl p-6">
                  <h3 className="font-bold text-blue-800 mb-3">Elige IELTS si...</h3>
                  <ul className="space-y-2 text-gray-700 text-sm">
                    <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" /> Planeas emigrar a UK, Australia o Canadá</li>
                    <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" /> Lo necesitas para un visado específico</li>
                    <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" /> Tu universidad extranjera lo exige</li>
                    <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" /> Prefieres un formato académico predecible</li>
                    <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" /> Necesitas una puntuación numérica específica</li>
                  </ul>
                </div>
              </div>

              <p className="text-gray-700 mb-4 leading-relaxed">
                En <a href="/examenes-cambridge/" className="text-blue-600 hover:underline">Impulse English Academy</a> nos especializamos en preparación Cambridge, la opción más demandada en España. Si necesitas ayuda para decidir, nuestro equipo puede asesorarte según tu situación específica.
              </p>
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
                        <ChevronUp className="w-5 h-5 text-blue-600 flex-shrink-0" />
                      ) : (
                        <ChevronDown className="w-5 h-5 text-blue-600 flex-shrink-0" />
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

              <div className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-2xl p-8">
                <p className="text-gray-700 mb-4 leading-relaxed">
                  Para la mayoría de personas en España, <a href="/examenes-cambridge/" className="text-blue-600 hover:underline font-medium">Cambridge es la mejor opción</a>: no caduca, tiene el máximo reconocimiento en el contexto español y es más económico a largo plazo. IELTS es la elección correcta si planeas emigrar a países anglófonos o si una institución específica lo requiere.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  En <a href="/academias-ingles-madrid/certificaciones/" className="text-blue-600 hover:underline font-medium">Impulse English Academy</a> te preparamos para obtener la <a href="/blog/escala-cambridge/" className="text-blue-600 hover:underline font-medium">certificación Cambridge</a> que necesitas con metodología probada y profesores especializados en los exámenes oficiales.
                </p>
              </div>
            </section>

            {/* CTA */}
            <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl p-8 text-center text-white">
              <h3 className="text-2xl font-bold mb-4">¿Preparado para certificar tu inglés?</h3>
              <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
                En Impulse te preparamos para Cambridge con la mejor tasa de aprobados. Solicita información sin compromiso.
              </p>
              <a
              href="/contacto/"
                className="inline-flex items-center gap-2 bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold hover:bg-blue-50 transition-colors"
              >
                Solicitar información
                <ArrowRight className="w-5 h-5" />
              </a>
            </div>

            {/* Related Articles */}
            <section className="mt-16">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Artículos Relacionados</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <a href="/examenes-cambridge/" className="group bg-gray-50 rounded-xl p-6 hover:bg-blue-50 transition-colors">
                  <h3 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors mb-2">
                    Exámenes Cambridge: Guía Completa
                  </h3>
                  <p className="text-gray-600 text-sm">Todos los niveles Cambridge explicados: B1, B2, C1 y C2.</p>
                </a>
                <a href="/blog/escala-cambridge/" className="group bg-gray-50 rounded-xl p-6 hover:bg-blue-50 transition-colors">
                  <h3 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors mb-2">
                    Escala de Niveles Cambridge
                  </h3>
                  <p className="text-gray-600 text-sm">Entiende la puntuación y los niveles del sistema Cambridge.</p>
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
              href="https://www.cambridgeenglish.org/es/exams-and-tests/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-blue-600 hover:underline"
            >
              → Más información en Cambridge English - Exámenes oficiales
            </a>
          </div>
        </section>

        <Footer />
      </div>

</>
  );
}