import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Award, Clock, ChevronDown, ChevronUp, CheckCircle, MapPin, Star, Building, Euro } from 'lucide-react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import LeadForm from '../../components/LeadForm';
import Breadcrumb from '../../components/Breadcrumb';
import SchemaMarkup from '../../components/SchemaMarkup';
import { generateArticleSchema, businessInfo } from '../../utils/schemaData';
import SEOHead from '../../components/SEOHead';

export default function CertificacionesInglesMadridPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = 'Certificaciones de Inglés en Madrid: Academias Oficiales 2026 | Impulse English Academy La Vaguada – Barrio del Pilar';
  }, []);

  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const articleSchema = generateArticleSchema({
    headline: "Certificaciones de Inglés en Madrid: Academias Oficiales 2026",
    description: "Guía completa de certificaciones de inglés en Madrid: Cambridge, Linguaskill, IELTS y TOEFL. Academias oficiales, precios y comparativa.",
    url: `${businessInfo.url}/blog/certificaciones-ingles-madrid`,
    datePublished: "2025-01-01"
  });

  const faqs = [
    {
      question: "¿Cuál es el certificado de inglés más reconocido?",
      answer: "Los certificados de inglés más reconocidos internacionalmente son Cambridge English y IELTS. Cambridge English cuenta con la confianza de más de 25.000 universidades, empleadores y gobiernos mundialmente, incluyendo empresas como Adidas, HSBC y Microsoft. IELTS es especialmente reconocido en Reino Unido, Australia, Canadá y Estados Unidos. Ambas certificaciones se basan en el MCER, no caducan y permiten verificación online de autenticidad para instituciones académicas y empleadores."
    },
    {
      question: "¿Qué certificaciones de inglés son oficiales en España?",
      answer: "Las certificaciones de inglés oficiales en España están alineadas con el MCER y reconocidas por CRUE y ACLES. Cambridge English (B1 Preliminary, B2 First, C1 Advanced, C2 Proficiency), Linguaskill y IELTS son aceptadas en universidades (exigen B1-B2 para títulos de Grado), oposiciones, empleo público y Policía Nacional (A2-B1 según escala). Cambridge English cuenta con reconocimiento de más de 25.000 instituciones globales y sus certificados no caducan."
    },
    {
      question: "¿Qué certificados de inglés son válidos para oposiciones?",
      answer: "Los certificados de inglés válidos para oposiciones en España según el MCER incluyen Cambridge English (A2 Key, B1 Preliminary, B2 First), IELTS (puntuaciones 3.5-5.5) y TOEFL iBT (42-94 puntos). Cambridge English está ampliamente reconocido por la administración pública para oposiciones, concursos de traslados, másteres de profesorado y habilitación lingüística."
    },
    {
      question: "¿Cuánto cuesta certificar el nivel de inglés en Madrid?",
      answer: "El coste promedio de una academia de inglés en Madrid varía entre 50€ y 300€ al mes según zona, metodología y servicios. Cambridge B2 First cuesta 180-210€, C1 Advanced 195-225€. Linguaskill ronda los 150€. Impulse English Academy ofrece preparación desde 79€/mes con profesores titulados y grupos reducidos."
    },
    {
      question: "¿Cambridge o Linguaskill cuál es mejor?",
      answer: "Cambridge ofrece evaluación integral y fija por niveles, ideal para estudios formales con certificación permanente. Linguaskill destaca por rapidez, flexibilidad, modalidad online y adaptabilidad al nivel real, con resultados en 48 horas y módulos repetibles. Ambos, de Cambridge English, difieren en formato y objetivos de certificación."
    },
    {
      question: "¿Cuánto tiempo se tarda en preparar una certificación?",
      answer: "Pasar del nivel B2 al C1 en inglés requiere entre 200 y 300 horas de estudio guiado y práctica intensiva. Desde B1 a B2 requiere 3-6 meses con dedicación regular. La preparación específica del examen (formato, estrategias) requiere mínimo 8-12 semanas adicionales."
    }
  ];

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
      <SEOHead
        title="Certificaciones de Inglés en Madrid 2026: Cambridge, Linguaskill, IELTS, TOEFL | Guía Completa"
        description="Comparativa de certificaciones de inglés en Madrid: Cambridge, Linguaskill, IELTS y TOEFL. Precios, centros oficiales, fechas y cómo elegir la certificación ideal."
        keywords="certificaciones inglés madrid, cambridge madrid, linguaskill madrid, ielts madrid, toefl madrid, academias oficiales cambridge, exámenes oficiales inglés"
        canonical="/academias-ingles-madrid/certificaciones"
        ogType="article"
      />
      <Navbar />

      {/* Hero Section */}
      <section className="pt-24 pb-12 md:pt-32 md:pb-16 bg-gradient-to-br from-emerald-600 to-teal-700">
        <div className="container mx-auto px-6 md:px-12">
          <div className="max-w-4xl">
            <Breadcrumb
              items={[
                { label: 'Blog', href: '/blogs-impulse' },
                { label: 'Certificaciones Madrid' }
              ]}
              variant="light"
            />
            <div className="flex items-center gap-2 mb-4">
              <span className="bg-white/20 text-white px-3 py-1 rounded-full text-sm font-medium">
                Academias Madrid
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-6">
              Certificaciones de Inglés en Madrid: Guía de Academias Oficiales 2026
            </h1>
            <p className="text-xl text-white/90 font-light mb-6">
              Comparativa de certificaciones Cambridge, Linguaskill, IELTS y TOEFL. Dónde prepararte y examinarte en Madrid.
            </p>
            <div className="flex items-center gap-4 text-white/80 text-sm">
              <span className="flex items-center gap-1">
                <Clock className="w-4 h-4" />
                12 min de lectura
              </span>
              <span className="flex items-center gap-1">
                <MapPin className="w-4 h-4" />
                Madrid
              </span>
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
                Madrid ofrece múltiples opciones para certificar tu nivel de inglés, desde los prestigiosos <Link to="/examenes-cambridge" className="text-emerald-600 hover:underline">exámenes Cambridge</Link> hasta el rápido <Link to="/examenes-cambridge/linguaskill" className="text-emerald-600 hover:underline">Linguaskill</Link>. Elegir la certificación adecuada y la academia correcta para
                prepararte puede marcar la diferencia entre aprobar a la primera o tener que repetir. Esta guía
                compara todas las opciones disponibles en la capital para que tomes la mejor decisión. Si buscas preparación en zonas como <Link to="/academia-ingles-barrio-del-pilar" className="text-emerald-600 hover:underline">Barrio del Pilar</Link>, <Link to="/academia-ingles-tetuan" className="text-emerald-600 hover:underline">Tetuán</Link> o <Link to="/academia-ingles-plaza-castilla" className="text-emerald-600 hover:underline">Plaza Castilla</Link>, disponemos de centros especializados.
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
                        <Link to="/examenes-cambridge" className="text-white hover:underline">Cambridge B2 First, C1 Advanced, C2 Proficiency</Link>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4" />
                        <Link to="/examenes-cambridge/linguaskill" className="text-white hover:underline">Linguaskill General y Business</Link>
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
                    <span className="text-lg">Precios competitivos desde <strong>64€</strong>/mes - <Link to="/academia-ingles-la-vaguada" className="text-white underline hover:text-teal-200">junto a La Vaguada</Link></span>
                  </div>
                  <Link
                    to="/contacto"
                    className="bg-white text-emerald-600 font-bold py-3 px-8 rounded-lg hover:bg-zinc-100 transition-colors"
                  >
                    Solicitar información
                  </Link>
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
                    {openFaq === index && (
                      <div className="px-6 py-4 bg-white">
                        <p className="text-zinc-600">{faq.answer}</p>
                      </div>
                    )}
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
                  específico. Ya sea que necesites <Link to="/ingles-la-vaguada/adultos" className="text-white underline hover:text-teal-200">cursos de inglés para adultos</Link>, <Link to="/ingles-la-vaguada/particulares" className="text-white underline hover:text-teal-200">clases particulares</Link> o preparación para <Link to="/examenes-cambridge/linguaskill" className="text-white underline hover:text-teal-200">Linguaskill</Link>, no te conformes con aprobar: prepárate para conseguir la mejor puntuación posible.
                </p>
                <p className="text-white/90">
                  En <strong>Impulse English Academy</strong>, con sedes en <Link to="/academia-ingles-barrio-del-pilar" className="text-white underline hover:text-teal-200">Barrio del Pilar</Link>, <Link to="/academia-ingles-penagrande" className="text-white underline hover:text-teal-200">Peñagrande</Link> y <Link to="/academia-ingles-la-ventilla" className="text-white underline hover:text-teal-200">La Ventilla</Link>, te preparamos para cualquier certificación
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
                  <Link
                    to="/contacto"
                    className="bg-emerald-500 hover:bg-emerald-600 text-white font-bold py-3 px-8 rounded-lg transition-colors whitespace-nowrap"
                  >
                    Solicitar información
                  </Link>
                </div>
              </div>
            </section>

            {/* Related Articles */}
            <section>
              <h3 className="text-xl font-bold text-zinc-900 mb-4">Artículos relacionados</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <Link to="/academias-ingles-madrid" className="bg-zinc-50 rounded-xl p-4 hover:bg-zinc-100 transition-colors">
                  <span className="text-xs font-bold text-emerald-600">MADRID</span>
                  <h4 className="font-bold text-zinc-900 mt-1">Academias Baratas de Inglés en Madrid</h4>
                </Link>
                <Link to="/examenes-cambridge/guia-completa" className="bg-zinc-50 rounded-xl p-4 hover:bg-zinc-100 transition-colors">
                  <span className="text-xs font-bold text-emerald-600">CAMBRIDGE</span>
                  <h4 className="font-bold text-zinc-900 mt-1">Guía Completa de Exámenes Cambridge 2026</h4>
                </Link>
                <Link to="/linguaskill" className="bg-zinc-50 rounded-xl p-4 hover:bg-zinc-100 transition-colors">
                  <span className="text-xs font-bold text-emerald-600">LINGUASKILL</span>
                  <h4 className="font-bold text-zinc-900 mt-1">Guía Completa de Linguaskill 2026</h4>
                </Link>
                <Link to="/examenes-cambridge/b2-first" className="bg-zinc-50 rounded-xl p-4 hover:bg-zinc-100 transition-colors">
                  <span className="text-xs font-bold text-emerald-600">B2 FIRST</span>
                  <h4 className="font-bold text-zinc-900 mt-1">Preparación B2 First (FCE)</h4>
                </Link>
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

      <Footer />

      {/* Schema.org Structured Data */}
      <SchemaMarkup schema={articleSchema} />
    </>
  );
}
