import React, { useState, useEffect } from 'react';
import { Award, Clock, ChevronDown, ChevronUp, CheckCircle, MapPin, Star, Building, Euro } from 'lucide-react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import LeadForm from '../../components/LeadForm';
import Breadcrumb from '../../components/Breadcrumb';
import { generateArticleSchema, businessInfo } from '../../utils/schemaData';
import type { FAQItem } from '../../utils/schemaData';
export const articleSchema = generateArticleSchema({
    headline: "Certificaciones de Inglés en Madrid: Academias Oficiales 2026",
    description: "Guía completa de certificaciones de inglés en Madrid: Cambridge, Linguaskill, IELTS y TOEFL. Academias oficiales, precios y comparativa.",
    url: `${businessInfo.url}/blog/certificaciones-ingles-madrid`,
    datePublished: "2025-01-01"
  });

export const faqs: FAQItem[] = [
    {
      question: "¿Cuánto tiempo se tarda en preparar el B2 First en Madrid?",
      answer: "La preparación estándar del B2 First requiere 6-9 meses con clases dos veces por semana (4 horas semanales) más estudio personal. Los cursos intensivos de verano reducen este periodo a 3-4 meses con inmersión de 12-15 horas semanales. Tu nivel inicial determina la duración: estudiantes con B1 sólido necesitan 6 meses, mientras que niveles A2 requieren 12-15 meses de preparación continuada."
    }

  ,
    {
      question: "¿Las certificaciones de inglés caducan en España?",
      answer: "Los certificados oficiales Cambridge, IELTS, TOEFL, LanguageCert y certificados de Escuelas Oficiales de Idiomas NO caducan nunca y mantienen validez permanente. Sin embargo, algunas universidades extranjeras y procesos de inmigración exigen certificados con antigüedad máxima de 2 años para garantizar nivel actual. Empleadores españoles aceptan certificados sin límite temporal según normativa CRUE para universidades y convenios colectivos sectoriales."
    },
    {
      question: "¿Qué certificación oficial es mejor para trabajar en Madrid?",
      answer: "Cambridge B2 First o C1 Advanced dominan el mercado laboral europeo con reconocimiento en 92% de multinacionales según estudio Randstad 2024. IELTS es preferido para sectores con proyección internacional (consultoría, ONG) mientras que LanguageCert gana popularidad por precio competitivo y disponibilidad continua de exámenes. Para empleos públicos en España, los certificados de Escuelas Oficiales tienen reconocimiento automático oficial."
    },
    {
      question: "¿Cuánto cuesta sacarse una certificación oficial en Madrid?",
      answer: "Los precios varían significativamente: Escuelas Oficiales cuestan 54€ matrícula anual más 50-80€ por examen de certificación (total aproximado 400€/año incluyendo curso). Academias privadas cobran 600-1.200€ por curso preparatorio B2-C1 (4-8 meses) sin incluir tasas de examen oficial (180-245€ adicionales según certificación). Programas bonificables FUNDAE reducen coste a 0€ para empleados en activo mediante bonificaciones empresariales."
    },
    {
      question: "¿Se puede preparar el examen oficial online desde Madrid?",
      answer: "Sí, el 89% de academias madrileñas ofrecen preparación 100% online con clases en directo por videoconferencia, plataformas interactivas y tutorías personalizadas. Cambridge, LanguageCert y Aptis permiten realizar exámenes oficiales en formato digital en centros autorizados de Madrid con resultados en 48-72 horas. IELTS y TOEFL exigen asistencia presencial para componentes orales aunque ofrecen versiones computarizadas que aceleran resultados a 3-5 días."
    }
  ];

export default function CertificacionesInglesMadridPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [openFaq, setOpenFaq] = useState<number | null>(null);


  const certifications = [
    {
      name: "Cambridge English",
      exams: ["B2 First", "C1 Advanced", "C2 Proficiency"],
      price: "200-260€",
      results: "4-6 semanas",
      validity: "No caduca",
      pros: ["Máximo prestigio internacional", "Certificado físico y digital", "Reconocido por +9,000 instituciones"],
      color: "blue"
    },
    {
      name: "Linguaskill",
      exams: ["General", "Business"],
      price: "130€",
      results: "48 horas",
      validity: "No caduca oficialmente",
      pros: ["Resultados rápidos", "Precio competitivo", "Examen adaptativo por ordenador"],
      color: "cyan"
    },
    {
      name: "IELTS",
      exams: ["Academic", "General Training"],
      price: "~220€",
      results: "13 días",
      validity: "2 años",
      pros: ["Ideal para emigrar/estudiar UK/AU", "Muy reconocido internacionalmente", "Versión papel o computer-based"],
      color: "red"
    },
    {
      name: "TOEFL",
      exams: ["iBT", "Essentials"],
      price: "~265€",
      results: "6-10 días",
      validity: "2 años",
      pros: ["Preferido por universidades USA", "100% online", "Aceptado globalmente"],
      color: "purple"
    }
  ];

  return (
    <>
<Navbar />

      {/* Hero Section */}
      <header className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden">
        <div className="absolute inset-0">
          <img src="/images/academy/6e08cd95-47b7-4d36-95c7-fecfb41e3883.jpeg" alt="Certificado Cambridge English centro oficial Impulse Academy" className="w-full h-full object-cover" loading="eager" />
          <div className="absolute inset-0 bg-gradient-to-br from-accent-blue/95 via-accent-blue/85 to-[#0a3560]/75"></div>
        </div>
        <div className="absolute inset-0 hero-grain opacity-[0.03]"></div>
        <div className="absolute -top-32 -right-32 w-[420px] h-[420px] rounded-full bg-brand-red/[0.04]"></div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb
          items={[
          { label: 'Academias Madrid', href: '/academias-ingles-madrid/' },
          { label: 'Certificaciones Madrid' }
          ]}
          variant="light"
          />

          <div className="mt-12 md:mt-16">
            <div className="flex items-center gap-4 mb-6 animate-hero-fade-up">
              <div className="w-8 h-px bg-white/40"></div>
              <span className="font-display text-white/70 text-xs uppercase tracking-[0.2em]">
                Academias Madrid
              </span>
            </div>

            <h1 className="font-serif text-3xl md:text-5xl lg:text-6xl text-white tracking-tight leading-[1.1] mb-6 animate-hero-fade-up animation-delay-100">
              Certificaciones de Inglés en Madrid: Guía de Academias Oficiales 2026
            </h1>
            <div className="w-16 h-0.5 bg-brand-red mb-6 animate-hero-fade-up animation-delay-150"></div>
            <p className="font-display text-lg md:text-xl text-white/80 font-light leading-relaxed max-w-3xl animate-hero-fade-up animation-delay-200">
              Comparativa de certificaciones Cambridge, Linguaskill, IELTS y TOEFL. Dónde prepararte y examinarte en Madrid.
            </p>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <article className="py-12 bg-white">
        <div className="container mx-auto px-6 md:px-12">
          <div className="max-w-4xl">

            {/* Introduction */}
            <div className="prose prose-lg max-w-none mb-12">
              <p className="text-xl text-zinc-600 leading-relaxed">
                Madrid ofrece múltiples opciones para certificar tu nivel de inglés, desde los prestigiosos <a href="/examenes-cambridge/" className="text-emerald-600 hover:underline">exámenes Cambridge</a> hasta el rápido <a href="/linguaskill/" className="text-emerald-600 hover:underline">Linguaskill</a>. Elegir la certificación adecuada y la academia correcta para
                prepararte puede marcar la diferencia entre aprobar a la primera o tener que repetir. Esta guía
                compara todas las opciones disponibles en la capital para que tomes la mejor decisión. Si buscas preparación en zonas como <a href="/academia-ingles-barrio-del-pilar/" className="text-emerald-600 hover:underline">Barrio del Pilar</a>, <a href="/academia-ingles-tetuan/" className="text-emerald-600 hover:underline">Tetuán</a> o <a href="/academia-ingles-plaza-castilla/" className="text-emerald-600 hover:underline">Plaza Castilla</a>, disponemos de centros especializados.
              </p>
            </div>

            {/* Certifications Comparison */}
            <section className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-zinc-900 mb-6">
                Comparativa de Certificaciones de Inglés
              </h2>

              <div className="space-y-6">
                {certifications.map((cert, index) => (
                  <div key={index} className={`bg-${cert.color}-50 rounded-xl p-6 border-l-4 border-${cert.color}-400`}>
                    <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-4">
                      <div>
                        <h3 className="text-xl font-bold text-zinc-900">{cert.name}</h3>
                        <p className="text-sm text-zinc-500">{cert.exams.join(" • ")}</p>
                      </div>
                      <div className="flex gap-4 text-sm">
                        <div className="text-center">
                          <p className="font-bold text-zinc-900">{cert.price}</p>
                          <p className="text-zinc-500">Precio</p>
                        </div>
                        <div className="text-center">
                          <p className="font-bold text-zinc-900">{cert.results}</p>
                          <p className="text-zinc-500">Resultados</p>
                        </div>
                        <div className="text-center">
                          <p className="font-bold text-zinc-900">{cert.validity}</p>
                          <p className="text-zinc-500">Validez</p>
                        </div>

                      </div>
                    </div>
                    <ul className="flex flex-wrap gap-2">
                      {cert.pros.map((pro, i) => (
                        <li key={i} className="flex items-center gap-1 text-sm text-zinc-600 bg-white px-3 py-1 rounded-full">
                          <CheckCircle className="w-3 h-3 text-green-500" />
                          {pro}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </section>

            {/* Impulse Academy Featured */}
            <section className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-zinc-900 mb-6">
                Impulse English Academy: Tu Centro de Preparación en Madrid
              </h2>

              <div className="bg-gradient-to-r from-emerald-600 to-teal-600 rounded-2xl p-8 text-white mb-6">
                <div className="flex items-center gap-2 mb-4">
                  <Star className="w-6 h-6 text-yellow-400 fill-yellow-400" />
                  <Star className="w-6 h-6 text-yellow-400 fill-yellow-400" />
                  <Star className="w-6 h-6 text-yellow-400 fill-yellow-400" />
                  <Star className="w-6 h-6 text-yellow-400 fill-yellow-400" />
                  <Star className="w-6 h-6 text-yellow-400 fill-yellow-400" />
                  <span className="text-white/80 text-sm ml-2">Centro preparador oficial Cambridge</span>
                </div>

                <h3 className="text-2xl font-bold mb-4">Preparación para todas las certificaciones</h3>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-bold mb-3">Certificaciones que preparamos:</h4>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4" />
                        <a href="/examenes-cambridge/" className="text-white hover:underline">Cambridge B2 First, C1 Advanced, C2 Proficiency</a>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4" />
                        <a href="/linguaskill/" className="text-white hover:underline">Linguaskill General y Business</a>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4" />
                        IELTS Academic y General
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4" />
                        TOEFL iBT
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold mb-3">Por qué elegirnos:</h4>
                    <ul className="space-y-2 text-sm">
                      {[
                        "Grupos reducidos (máximo 8 alumnos)",
                        "Profesores cualificados y certificados",
                        "Material oficial incluido",
                        "Simulacros de examen reales",
                        "Horarios flexibles: mañana, tarde, sábados"
                      ].map((item, i) => (
                        <li key={i} className="flex items-center gap-2">
                          <CheckCircle className="w-4 h-4" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                </div>

                <div className="mt-6 pt-6 border-t border-white/20 flex flex-col md:flex-row items-center justify-between gap-4">
                  <div className="flex items-center gap-2">
                    <Euro className="w-5 h-5" />
                    <span className="text-lg">Precios competitivos desde <strong>64€</strong>/mes - <a href="/academia-ingles-la-vaguada/" className="text-white underline hover:text-teal-200">junto a La Vaguada</a></span>
                  </div>
                  <a
              href="/contacto/"
                    className="bg-white text-emerald-600 font-bold py-3 px-8 rounded-lg hover:bg-zinc-100 transition-colors"
                  >
                    Solicitar información
                  </a>
                </div>

              </div>
            </section>

            {/* Where to Take Exams */}
            <section className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-zinc-900 mb-6">
                Dónde examinarte en Madrid
              </h2>

              <div className="grid md:grid-cols-2 gap-4 mb-6">
                <div className="bg-zinc-50 rounded-xl p-5">
                  <h4 className="font-bold text-zinc-900 mb-3 flex items-center gap-2">
                    <Building className="w-5 h-5 text-blue-600" />
                    Centros Cambridge
                  </h4>
                  <ul className="space-y-2 text-sm text-zinc-600">
                    <li>• British Council Madrid</li>
                    <li>• Exams Madrid</li>
                    <li>• Cambridge School</li>
                    <li>• Vaughan Systems</li>
                  </ul>
                  <p className="text-xs text-zinc-500 mt-3">Convocatorias mensuales, reserva con 4-6 semanas de antelación</p>
                </div>
                <div className="bg-zinc-50 rounded-xl p-5">
                  <h4 className="font-bold text-zinc-900 mb-3 flex items-center gap-2">
                    <Building className="w-5 h-5 text-cyan-600" />
                    Centros Linguaskill
                  </h4>
                  <ul className="space-y-2 text-sm text-zinc-600">
                    <li>• Universidades públicas madrileñas</li>
                    <li>• British Council</li>
                    <li>• Centros autorizados Cambridge</li>
                    <li>• Online supervisado desde casa</li>
                  </ul>
                  <p className="text-xs text-zinc-500 mt-3">Disponibilidad casi diaria, reserva con 1-2 semanas</p>
                </div>
                <div className="bg-zinc-50 rounded-xl p-5">
                  <h4 className="font-bold text-zinc-900 mb-3 flex items-center gap-2">
                    <Building className="w-5 h-5 text-red-600" />
                    Centros IELTS
                  </h4>
                  <ul className="space-y-2 text-sm text-zinc-600">
                    <li>• British Council Madrid</li>
                    <li>• IDP España</li>
                  </ul>
                  <p className="text-xs text-zinc-500 mt-3">2-4 convocatorias mensuales</p>
                </div>
                <div className="bg-zinc-50 rounded-xl p-5">
                  <h4 className="font-bold text-zinc-900 mb-3 flex items-center gap-2">
                    <Building className="w-5 h-5 text-purple-600" />
                    Centros TOEFL
                  </h4>
                  <ul className="space-y-2 text-sm text-zinc-600">
                    <li>• Prometric Test Centers</li>
                    <li>• ETS Home Edition (online)</li>
                  </ul>
                  <p className="text-xs text-zinc-500 mt-3">Disponibilidad semanal</p>
                </div>

              </div>
            </section>

            {/* Recommendation */}
            <section className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-zinc-900 mb-6">
                ¿Qué certificación elegir según tu objetivo?
              </h2>

              <div className="space-y-4 mb-6">
                <div className="bg-blue-50 rounded-xl p-5">
                  <h4 className="font-bold text-zinc-900 mb-2">Para la universidad en España</h4>
                  <p className="text-zinc-600 text-sm">
                    <strong>Recomendación:</strong> Cambridge B2/C1 o Linguaskill. Son los más aceptados por universidades españolas.
                    Si necesitas el certificado rápido para una matrícula, elige Linguaskill (48h de resultados).
                  </p>
                </div>
                <div className="bg-green-50 rounded-xl p-5">
                  <h4 className="font-bold text-zinc-900 mb-2">Para trabajar en empresas españolas</h4>
                  <p className="text-zinc-600 text-sm">
                    <strong>Recomendación:</strong> Cambridge B2 First o C1 Advanced. El certificado más reconocido en el
                    mercado laboral español. No caduca, ideal para el CV a largo plazo.
                  </p>
                </div>
                <div className="bg-amber-50 rounded-xl p-5">
                  <h4 className="font-bold text-zinc-900 mb-2">Para estudiar/trabajar en UK, Australia, Canadá</h4>
                  <p className="text-zinc-600 text-sm">
                    <strong>Recomendación:</strong> IELTS Academic. Requisito estándar para visados de trabajo y estudio
                    en países angloparlantes del Commonwealth.
                  </p>
                </div>
                <div className="bg-purple-50 rounded-xl p-5">
                  <h4 className="font-bold text-zinc-900 mb-2">Para estudiar en Estados Unidos</h4>
                  <p className="text-zinc-600 text-sm">
                    <strong>Recomendación:</strong> TOEFL iBT. El examen preferido por universidades americanas.
                    Algunas también aceptan IELTS, pero TOEFL sigue siendo el estándar.
                  </p>
                </div>

              </div>
            </section>

            {/* FAQ Section */}
            <section className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-zinc-900 mb-6">
                Preguntas Frecuentes sobre Certificaciones en Madrid
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
              <div className="bg-gradient-to-r from-emerald-600 to-teal-600 rounded-2xl p-8 text-white">
                <h2 className="text-2xl font-bold mb-4">Conclusión</h2>
                <p className="text-white/90 mb-6">
                  Madrid ofrece todas las opciones de certificación de inglés que puedas necesitar. La clave está
                  en elegir el examen adecuado para tu objetivo y prepararte en una academia que conozca el formato
                  específico. Ya sea que necesites <a href="/cursos-ingles/adultos/" className="text-white underline hover:text-teal-200">cursos de inglés para adultos</a>, <a href="/cursos-ingles/particulares/" className="text-white underline hover:text-teal-200">clases particulares</a> o preparación para <a href="/linguaskill/" className="text-white underline hover:text-teal-200">Linguaskill</a>, no te conformes con aprobar: prepárate para conseguir la mejor puntuación posible.
                </p>
                <p className="text-white/90">
                  En <strong>Impulse English Academy</strong>, con sedes en <a href="/academia-ingles-barrio-del-pilar/" className="text-white underline hover:text-teal-200">Barrio del Pilar</a>, <a href="/academia-ingles-penagrande/" className="text-white underline hover:text-teal-200">Peñagrande</a> y <a href="/academia-ingles-la-ventilla/" className="text-white underline hover:text-teal-200">La Ventilla</a>, te preparamos para cualquier certificación
                  con profesores especializados y material oficial. ¡Certifica tu inglés con confianza!
                </p>
              </div>
            </section>

            {/* CTA */}
            <section className="mb-12">
              <div className="bg-zinc-900 rounded-2xl p-8">
                <div className="flex flex-col md:flex-row items-center gap-6">
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-white mb-2">
                      ¿Quieres certificar tu inglés en Madrid?
                    </h3>
                    <p className="text-zinc-400">
                      Te ayudamos a elegir la certificación ideal y prepararte para el éxito.
                    </p>
                  </div>
                  <a
              href="/contacto/"
                    className="bg-emerald-500 hover:bg-emerald-600 text-white font-bold py-3 px-8 rounded-lg transition-colors whitespace-nowrap"
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
                <a href="/academias-ingles-madrid/" className="bg-zinc-50 rounded-xl p-4 hover:bg-zinc-100 transition-colors">
                  <span className="text-xs font-bold text-emerald-600">MADRID</span>
                  <h4 className="font-bold text-zinc-900 mt-1">Academias Baratas de Inglés en Madrid</h4>
                </a>
                <a href="/examenes-cambridge/" className="bg-zinc-50 rounded-xl p-4 hover:bg-zinc-100 transition-colors">
                  <span className="text-xs font-bold text-emerald-600">CAMBRIDGE</span>
                  <h4 className="font-bold text-zinc-900 mt-1">Guía Completa de Exámenes Cambridge 2026</h4>
                </a>
                <a href="/linguaskill/" className="bg-zinc-50 rounded-xl p-4 hover:bg-zinc-100 transition-colors">
                  <span className="text-xs font-bold text-emerald-600">LINGUASKILL</span>
                  <h4 className="font-bold text-zinc-900 mt-1">Guía Completa de Linguaskill 2026</h4>
                </a>
                <a href="/examenes-cambridge/b2-first/" className="bg-zinc-50 rounded-xl p-4 hover:bg-zinc-100 transition-colors">
                  <span className="text-xs font-bold text-emerald-600">B2 FIRST</span>
                  <h4 className="font-bold text-zinc-900 mt-1">Preparación B2 First (FCE)</h4>
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
            href="https://www.crue.org/acreditacion-de-idiomas/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-blue-600 hover:underline"
          >
            → Más información en CRUE - Acreditación de idiomas en universidades
          </a>
        </div>
      </section>

      {/* BOOKING-CTA */}
      <section className="py-16 px-6 bg-accent-blue">
        <div className="container mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Reserva tu clase de prueba gratuita</h2>
          <p className="text-white/90 mb-8">Sin compromiso. Conoce nuestra metodología y a nuestros profesores antes de decidir.</p>
          <a href="/reservar-clase/" className="inline-block bg-red-600 hover:bg-red-700 text-white font-bold uppercase tracking-wide px-8 py-4 rounded-lg transition-colors">Clase de prueba gratuita</a>
        </div>
      </section>
      <Footer />

      {/* Schema.org Structured Data */}
</>
  );
}
