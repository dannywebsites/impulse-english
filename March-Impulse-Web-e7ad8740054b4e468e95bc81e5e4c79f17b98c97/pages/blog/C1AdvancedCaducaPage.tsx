import React, { useState, useEffect } from 'react';
import { ChevronRight, Clock, Calendar, ChevronDown, ChevronUp, BookOpen, CheckCircle, Target, ArrowRight, Award } from 'lucide-react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import OneToOneCTA from '../../components/OneToOneCTA';
import InlineOneToOneCTA from '../../components/InlineOneToOneCTA';
import Breadcrumb from '../../components/Breadcrumb';
import { generateArticleSchema, businessInfo } from '../../utils/schemaData';
import type { FAQItem } from '../../utils/schemaData';

export const articleSchema = generateArticleSchema({
    headline: "¿El C1 Advanced Caduca? Validez del Certificado Cambridge",
    description: "El certificado C1 Advanced no caduca nunca. Descubre su validez permanente, cuándo las instituciones piden certificados recientes y diferencias con IELTS.",
    url: `${businessInfo.url}/blog/c1-advanced-caduca`,
    datePublished: "2025-03-01"
  });

export const faqItems: FAQItem[] = [
    {
      question: "¿Mi certificado C1 Advanced de hace 10 años sigue siendo válido?",
      answer: "Sí, oficialmente tu certificado C1 Advanced es válido independientemente de cuándo lo obtuviste. Cambridge Assessment no establece fecha de caducidad. Sin embargo, algunas instituciones (especialmente universidades anglófonas y ciertos empleadores) pueden preferir certificaciones obtenidas en los últimos 2-3 años, argumentando que el nivel puede deteriorarse con el tiempo si no se practica."
    }

  ,
    {
      question: "¿Las universidades aceptan un C1 Advanced antiguo?",
      answer: "Depende de la universidad. Universidades españolas y europeas generalmente aceptan el C1 sin límite temporal. Sin embargo, universidades británicas y australianas frecuentemente exigen que la certificación tenga menos de 2 años, por lo que podrían pedirte el IELTS como alternativa si tu C1 es anterior. Consulta siempre los requisitos específicos de admisión de cada universidad."
    },
    {
      question: "¿Si no uso el inglés, pierdo mi nivel C1?",
      answer: "El certificado sigue siendo válido, pero tu nivel real puede disminuir sin práctica regular. Estudios lingüísticos indican que las competencias receptivas (reading, listening) se mantienen mejor que las productivas (speaking, writing). Tras 2-3 años sin práctica significativa, muchos hablantes descienden al equivalente de B2 alto en producción oral. Mantener el contacto con el idioma es esencial."
    },
    {
      question: "¿Puedo verificar online la autenticidad de mi certificado antiguo?",
      answer: "Sí. Cambridge dispone de un sistema de verificación online en el que cualquier empleador o institución puede comprobar la autenticidad de tu certificado introduciendo tu número de candidato y documento de identidad. Este servicio está disponible para certificados emitidos desde 2005 en adelante. Para certificados anteriores, puedes solicitar una carta de verificación directamente a Cambridge Assessment."
    },
    {
      question: "¿Es mejor renovar mi C1 o presentarme al IELTS si necesito un certificado reciente?",
      answer: "Depende de tu objetivo. Si necesitas el certificado para una universidad que exige IELTS, no tienes opción. Si es para un empleador que pide 'C1 reciente', puedes volver a presentarte al C1 Advanced para obtener un certificado con fecha actualizada. Otra opción es el Linguaskill, un examen de Cambridge con resultados en 48 horas que certifica el mismo nivel y es más rápido y económico."
    }
  ];

export default function C1AdvancedCaducaPage() {
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
              <img src="/images/academy/6e08cd95-47b7-4d36-95c7-fecfb41e3883.jpeg" alt="Validez del certificado Cambridge C1 Advanced" className="w-full h-full object-cover" loading="eager" />
              <div className="absolute inset-0 bg-gradient-to-br from-accent-blue/95 via-accent-blue/85 to-[#0a3560]/75"></div>
            </div>
            <div className="absolute inset-0 hero-grain opacity-[0.03]"></div>
            <div className="absolute -top-32 -right-32 w-[420px] h-[420px] rounded-full bg-brand-red/[0.04]"></div>
            <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
              <Breadcrumb
                items={[
                  { label: 'Blog', href: '/blog' },
                  { label: '¿El C1 Advanced Caduca?' }
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
                  ¿El C1 Advanced Caduca? Validez del Certificado Cambridge
                </h1>
                <div className="w-16 h-0.5 bg-brand-red mb-6 animate-hero-fade-up animation-delay-150"></div>
                <p className="font-display text-lg md:text-xl text-white/80 font-light leading-relaxed max-w-3xl animate-hero-fade-up animation-delay-200">
                  El certificado Cambridge C1 Advanced no caduca oficialmente y es válido de por vida. No obstante, muchas universidades y empleadores requieren que la certificación tenga menos de 2-3 años.
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
                <li><a href="#validez" className="text-emerald-600 hover:text-emerald-700 transition-colors">→ Validez permanente explicada</a></li>
                <li><a href="#instituciones" className="text-emerald-600 hover:text-emerald-700 transition-colors">→ Por qué algunas instituciones piden certificados recientes</a></li>
                <li><a href="#comparativa" className="text-emerald-600 hover:text-emerald-700 transition-colors">→ Cambridge vs IELTS/TOEFL en caducidad</a></li>
                <li><a href="#recertificar" className="text-emerald-600 hover:text-emerald-700 transition-colors">→ Cuándo considerar recertificarte</a></li>
                <li><a href="#mantener-nivel" className="text-emerald-600 hover:text-emerald-700 transition-colors">→ Cómo mantener tu nivel después de certificar</a></li>
                <li><a href="#faq" className="text-emerald-600 hover:text-emerald-700 transition-colors">→ Preguntas Frecuentes</a></li>
              </ul>
            </div>

            {/* Introduction */}
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              Una de las preguntas más frecuentes entre quienes obtienen el <a href="/examenes-cambridge/c1-advanced/" className="text-emerald-600 hover:underline font-medium">Cambridge C1 Advanced</a> es si el certificado tiene fecha de caducidad. La respuesta corta es <strong>no: el certificado C1 Advanced no caduca nunca</strong>. Pero la realidad es más matizada de lo que parece, ya que algunas instituciones imponen sus propios límites temporales. Analizamos todos los escenarios.
            </p>

            {/* Section 1 */}
            <section id="validez" className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                Validez Permanente del C1 Advanced Explicada
              </h2>

              <p className="text-gray-700 mb-4 leading-relaxed">
                Cambridge Assessment English, organismo que administra los exámenes Cambridge, establece claramente que todos sus certificados (KET, PET, FCE, CAE, CPE) tienen <strong>validez permanente e ilimitada</strong>. Esto significa que un C1 Advanced obtenido en 2010 tiene exactamente la misma validez oficial que uno obtenido en 2026.
              </p>

              <div className="bg-gradient-to-r from-emerald-50 to-teal-50 rounded-xl p-6 mb-6">
                <h3 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <Award className="w-5 h-5 text-emerald-600" />
                  Ventajas de la validez permanente
                </h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="bg-white rounded-lg p-4 text-center">
                    <div className="text-emerald-600 font-bold text-lg">Sin fecha</div>
                    <div className="text-gray-600 text-sm">de caducidad</div>
                  </div>
                  <div className="bg-white rounded-lg p-4 text-center">
                    <div className="text-emerald-600 font-bold text-lg">Un solo</div>
                    <div className="text-gray-600 text-sm">pago y examen</div>
                  </div>
                  <div className="bg-white rounded-lg p-4 text-center">
                    <div className="text-emerald-600 font-bold text-lg">Verificable</div>
                    <div className="text-gray-600 text-sm">online siempre</div>
                  </div>
                  <div className="bg-white rounded-lg p-4 text-center">
                    <div className="text-emerald-600 font-bold text-lg">20.000+</div>
                    <div className="text-gray-600 text-sm">organizaciones lo reconocen</div>
                  </div>
                </div>
              </div>

              <p className="text-gray-700 mb-4 leading-relaxed">
                Esta política de validez permanente es una de las principales ventajas competitivas de los exámenes Cambridge frente a alternativas como IELTS o TOEFL, que caducan a los 2 años. Obtener el C1 Advanced es una inversión a largo plazo que no necesitas renovar.
              </p>

              <div className="bg-emerald-50 border-l-4 border-emerald-500 p-6 rounded-r-xl">
                <p className="text-gray-800 font-medium">
                  <strong>Importante:</strong> La validez permanente aplica al certificado como documento oficial. Esto no significa que tu nivel de inglés se mantenga automáticamente sin práctica. El documento certifica tu nivel en el momento del examen.
                </p>
              </div>
            </section>

            {/* Section 2 */}
            <section id="instituciones" className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                Por Qué Algunas Instituciones Piden Certificados Recientes
              </h2>

              <p className="text-gray-700 mb-6 leading-relaxed">
                Aunque Cambridge no impone caducidad, ciertas instituciones establecen sus propios límites temporales. Esto se debe a razones pragmáticas, no legales:
              </p>

              <div className="space-y-4 mb-8">
                <div className="bg-white border border-gray-200 rounded-xl p-6">
                  <h3 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
                    <BookOpen className="w-5 h-5 text-emerald-600" />
                    Universidades internacionales (2-3 años)
                  </h3>
                  <p className="text-gray-700">Muchas universidades británicas, australianas y canadienses exigen certificaciones de inglés obtenidas en los últimos 2 años. Su argumento: garantizar que el estudiante mantiene el nivel necesario para seguir el programa académico. Esto afecta más a universidades top-50 y programas de posgrado.</p>
                </div>

                <div className="bg-white border border-gray-200 rounded-xl p-6">
                  <h3 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
                    <BookOpen className="w-5 h-5 text-emerald-600" />
                    Empresas multinacionales (variable)
                  </h3>
                  <p className="text-gray-700">Algunas multinacionales, especialmente en consultoría y banca, prefieren certificados de menos de 3-5 años. No es una política universal sino una preferencia de ciertos departamentos de RRHH. En la mayoría de casos, demostrar fluidez en la entrevista compensa un certificado más antiguo.</p>
                </div>

                <div className="bg-white border border-gray-200 rounded-xl p-6">
                  <h3 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
                    <BookOpen className="w-5 h-5 text-emerald-600" />
                    Oposiciones y empleo público (sin límite generalmente)
                  </h3>
                  <p className="text-gray-700">En España, las oposiciones y procesos de empleo público generalmente aceptan el C1 Cambridge sin límite temporal. Es una de las certificaciones más valoradas en baremos de méritos, otorgando hasta 3 puntos adicionales independientemente de la fecha de obtención.</p>
                </div>
              </div>

              <div className="bg-emerald-50 border-l-4 border-emerald-500 p-6 rounded-r-xl">
                <p className="text-gray-800 font-medium">
                  <strong>Consejo práctico:</strong> Antes de presentar tu C1, verifica los requisitos específicos de la institución. Si piden un certificado reciente, considera el <a href="/examenes-cambridge/" className="text-emerald-600 hover:underline">Linguaskill de Cambridge</a>, que certifica el mismo nivel con resultados en 48 horas y a menor coste.
                </p>
              </div>
            </section>

            {/* Section 3 */}
            <section id="comparativa" className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                Cambridge vs IELTS vs TOEFL: Comparativa de Caducidad
              </h2>

              <p className="text-gray-700 mb-6 leading-relaxed">
                La política de validez es una diferencia fundamental entre las principales certificaciones de inglés:
              </p>

              <div className="overflow-x-auto mb-8">
                <table className="w-full border-collapse bg-white rounded-xl overflow-hidden shadow-lg">
                  <thead>
                    <tr className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white">
                      <th className="text-left p-4 font-semibold">Certificación</th>
                      <th className="text-left p-4 font-semibold">Validez</th>
                      <th className="text-left p-4 font-semibold">Coste aprox.</th>
                      <th className="text-left p-4 font-semibold">Coste a 10 años</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="bg-gray-50">
                      <td className="p-4 font-medium text-gray-900">C1 Advanced (Cambridge)</td>
                      <td className="p-4 text-gray-700">Permanente</td>
                      <td className="p-4 text-gray-700">€200-230</td>
                      <td className="p-4 text-gray-700 text-sm font-medium text-emerald-600">€200-230 (una vez)</td>
                    </tr>
                    <tr className="bg-white">
                      <td className="p-4 font-medium text-gray-900">IELTS Academic</td>
                      <td className="p-4 text-gray-700">2 años</td>
                      <td className="p-4 text-gray-700">€230-250</td>
                      <td className="p-4 text-gray-700 text-sm text-red-600">€1.150-1.250 (5 veces)</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="p-4 font-medium text-gray-900">TOEFL iBT</td>
                      <td className="p-4 text-gray-700">2 años</td>
                      <td className="p-4 text-gray-700">€200-220</td>
                      <td className="p-4 text-gray-700 text-sm text-red-600">€1.000-1.100 (5 veces)</td>
                    </tr>
                    <tr className="bg-white">
                      <td className="p-4 font-medium text-gray-900">Linguaskill (Cambridge)</td>
                      <td className="p-4 text-gray-700">Permanente*</td>
                      <td className="p-4 text-gray-700">€80-120</td>
                      <td className="p-4 text-gray-700 text-sm text-emerald-600">€80-120 (una vez)</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p className="text-gray-700 mb-4 leading-relaxed">
                Como muestra la tabla, la validez permanente del C1 Advanced supone un ahorro significativo a largo plazo. Un profesional que necesite mantener su certificación IELTS durante 10 años gastará entre €1.000 y €1.250, frente a los €200-230 únicos del C1 Advanced.
              </p>
            </section>

            {/* Section 4 */}
            <section id="recertificar" className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                Cuándo Considerar Recertificarte
              </h2>

              <p className="text-gray-700 mb-6 leading-relaxed">
                Aunque tu certificado no caduca, hay situaciones en las que puede merecer la pena volver a presentarse:
              </p>

              <div className="grid md:grid-cols-2 gap-4 mb-6">
                <div className="bg-emerald-50 rounded-xl p-5">
                  <h3 className="font-bold text-emerald-900 mb-3 flex items-center gap-2">
                    <CheckCircle className="w-5 h-5" />
                    Sí, recertifícate si...
                  </h3>
                  <ul className="space-y-2 text-gray-700 text-sm">
                    <li>• Una universidad exige certificado de menos de 2 años</li>
                    <li>• Llevas 5+ años sin practicar y necesitas demostrar nivel actual</li>
                    <li>• Obtuviste Grade C y ahora aspiras a Grade A (nivel C2)</li>
                    <li>• Un empleador específico lo requiere como condición contractual</li>
                  </ul>
                </div>
                <div className="bg-white border border-gray-200 rounded-xl p-5">
                  <h3 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                    <Target className="w-5 h-5 text-emerald-600" />
                    No es necesario si...
                  </h3>
                  <ul className="space-y-2 text-gray-700 text-sm">
                    <li>• Lo necesitas para oposiciones en España</li>
                    <li>• Tu empleador acepta cualquier certificado Cambridge</li>
                    <li>• Mantienes tu inglés activo y puedes demostrarlo</li>
                    <li>• Lo usas como mérito en baremos de puntos</li>
                  </ul>
                </div>
              </div>

              <div className="bg-emerald-50 border-l-4 border-emerald-500 p-6 rounded-r-xl">
                <p className="text-gray-800 font-medium">
                  Si necesitas un certificado reciente pero no quieres repetir el C1 Advanced completo, el <a href="/blog/escala-cambridge/" className="text-emerald-600 hover:underline">Linguaskill</a> es una alternativa eficiente: mismo reconocimiento Cambridge, resultados en 48 horas, formato digital y coste inferior.
                </p>
              </div>
            </section>

            {/* Section 5 */}
            <section id="mantener-nivel" className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                Cómo Mantener tu Nivel Después de Certificar
              </h2>

              <p className="text-gray-700 mb-6 leading-relaxed">
                Tu certificado no caduca, pero tu nivel sí puede deteriorarse sin práctica. Estas estrategias te ayudarán a mantener y mejorar tu C1:
              </p>

              <div className="space-y-4 mb-8">
                <div className="bg-white border border-gray-200 rounded-xl p-6">
                  <h3 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
                    <Target className="w-5 h-5 text-emerald-600" />
                    Inmersión diaria pasiva (30 min/día)
                  </h3>
                  <p className="text-gray-700">Escucha podcasts en inglés durante tus desplazamientos (BBC Radio 4, The Daily de NYT, TED Talks). Lee artículos de prensa anglófona. Cambia el idioma de tus dispositivos y redes sociales al inglés. Esta exposición constante mantiene tu comprensión activa.</p>
                </div>

                <div className="bg-white border border-gray-200 rounded-xl p-6">
                  <h3 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
                    <Target className="w-5 h-5 text-emerald-600" />
                    Práctica activa semanal (2-3 horas/semana)
                  </h3>
                  <p className="text-gray-700">Participa en grupos de conversación, escribe un diario en inglés, mantén correspondencia con contactos internacionales. La producción activa (hablar y escribir) es lo que más rápido se deteriora sin práctica.</p>
                </div>

                <div className="bg-white border border-gray-200 rounded-xl p-6">
                  <h3 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
                    <Target className="w-5 h-5 text-emerald-600" />
                    Clases de mantenimiento (mensual)
                  </h3>
                  <p className="text-gray-700">Una o dos sesiones mensuales con un profesor titulado te permiten mantener la fluidez oral, corregir errores que se van fosilizando y seguir ampliando vocabulario. Es la inversión más eficiente para no perder tu nivel.</p>
                </div>
              </div>

              <div className="bg-emerald-50 border-l-4 border-emerald-500 p-6 rounded-r-xl">
                <p className="text-gray-800 font-medium">
                  En <a href="/examenes-cambridge/" className="text-emerald-600 hover:underline">Impulse English Academy</a> ofrecemos programas de mantenimiento de nivel para profesionales que ya tienen su C1 y quieren seguir mejorando o mantener su inglés activo.
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
                  El <a href="/examenes-cambridge/c1-advanced/" className="text-emerald-600 hover:underline font-medium">certificado C1 Advanced de Cambridge</a> no caduca y es válido de por vida, lo que lo convierte en una inversión a largo plazo frente a alternativas como IELTS o TOEFL. Sin embargo, es importante mantener tu nivel de inglés activo para que el certificado refleje tu competencia real.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Si necesitas obtener tu C1 o recertificarte, en <a href="/examenes-cambridge/" className="text-emerald-600 hover:underline font-medium">Impulse English Academy</a> te preparamos con programas intensivos y regulares adaptados a tu disponibilidad. Consulta la <a href="/blog/escala-cambridge/" className="text-emerald-600 hover:underline font-medium">escala Cambridge</a> para entender los niveles y elige el que mejor se adapte a tus necesidades.
                </p>
              </div>
            </section>

            <InlineOneToOneCTA pathname="/blog/c1-advanced-caduca" />

            {/* Related Articles */}
            <section className="mt-16">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Artículos Relacionados</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <a href="/examenes-cambridge/c1-advanced/" className="group bg-gray-50 rounded-xl p-6 hover:bg-emerald-50 transition-colors">
                  <h3 className="font-semibold text-gray-900 group-hover:text-emerald-600 transition-colors mb-2">
                    C1 Advanced: Guía Completa
                  </h3>
                  <p className="text-gray-600 text-sm">Todo sobre el examen Cambridge C1 Advanced.</p>
                </a>
                <a href="/examenes-cambridge/" className="group bg-gray-50 rounded-xl p-6 hover:bg-emerald-50 transition-colors">
                  <h3 className="font-semibold text-gray-900 group-hover:text-emerald-600 transition-colors mb-2">
                    Exámenes Cambridge: Hub Completo
                  </h3>
                  <p className="text-gray-600 text-sm">Comparativa de todos los exámenes Cambridge disponibles.</p>
                </a>
                <a href="/blog/escala-cambridge/" className="group bg-gray-50 rounded-xl p-6 hover:bg-emerald-50 transition-colors">
                  <h3 className="font-semibold text-gray-900 group-hover:text-emerald-600 transition-colors mb-2">
                    Escala Cambridge: Niveles y Puntuaciones
                  </h3>
                  <p className="text-gray-600 text-sm">Entiende la escala completa de certificaciones Cambridge.</p>
                </a>
                <a href="/blog/examen-cae-cambridge/" className="group bg-gray-50 rounded-xl p-6 hover:bg-emerald-50 transition-colors">
                  <h3 className="font-semibold text-gray-900 group-hover:text-emerald-600 transition-colors mb-2">
                    Examen CAE Cambridge
                  </h3>
                  <p className="text-gray-600 text-sm">Formato y estructura detallada del CAE.</p>
                </a>
              </div>
            </section>
          </article>

          {/* Lead Form */}
          <section className="bg-gray-50 py-16">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
              <OneToOneCTA pathname="/blog/c1-advanced-caduca" />
            </div>
          </section>
        </main>

        {/* External Authority Link */}
        <section className="py-8 px-6 bg-white border-t border-zinc-100">
          <div className="max-w-4xl mx-auto text-center">
            <a
              href="https://www.cambridgeenglish.org/es/exams-and-tests/advanced/results/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-blue-600 hover:underline"
            >
              → Más información en Cambridge English - Resultados y validez C1 Advanced
            </a>
          </div>
        </section>

        <Footer />
      </div>

      {/* Schema.org Structured Data */}
</>
  );
}
