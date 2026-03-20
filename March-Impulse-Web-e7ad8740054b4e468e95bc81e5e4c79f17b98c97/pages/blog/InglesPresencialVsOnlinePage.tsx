import React, { useState, useEffect } from 'react';
import { ChevronRight, Clock, Calendar, ChevronDown, ChevronUp, BookOpen, CheckCircle, Target, ArrowRight, Award } from 'lucide-react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import LeadForm from '../../components/LeadForm';
import Breadcrumb from '../../components/Breadcrumb';
import { generateArticleSchema, businessInfo } from '../../utils/schemaData';

export const articleSchema = generateArticleSchema({
    headline: "Inglés Presencial vs Online: ¿Qué Modalidad es Mejor?",
    description: "Compara clases de inglés presenciales y online: efectividad, precio, flexibilidad y para quién es mejor cada modalidad. Guía completa con datos reales.",
    url: `${businessInfo.url}/blog/ingles-presencial-vs-online`,
    datePublished: "2025-03-01"
  });

export const faqItems = [
    {
      question: "¿El inglés online es tan efectivo como el presencial?",
      answer: "Los estudios muestran resultados similares cuando el alumno tiene autodisciplina. El presencial tiene ventaja en speaking y corrección inmediata, el online en flexibilidad y precio."
    }

  ,
    {
      question: "¿Cuánto más barato es el inglés online?",
      answer: "El inglés online suele ser un 20-40% más barato que el presencial, ahorrando también en desplazamientos. Sin embargo, requiere mayor autodisciplina."
    },
    {
      question: "¿Puedo combinar presencial y online?",
      answer: "Sí, el modelo híbrido es cada vez más popular: clases presenciales 1-2 veces por semana + práctica online complementaria."
    },
    {
      question: "¿Para qué nivel es mejor el presencial?",
      answer: "El presencial es especialmente valioso en niveles básicos (A1-A2) y para mejorar speaking, donde la interacción cara a cara marca diferencia."
    },
    {
      question: "¿El online sirve para preparar Cambridge?",
      answer: "Sí, muchos aprobados preparan Cambridge online. La clave es tener simulacros de speaking con profesor real, no solo apps."
    }
  ];

export default function InglesPresencialVsOnlinePage() {
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
              <img
                src="https://impulseenglish.s3.us-east-1.amazonaws.com/impulsephotos/NACHOS+photos.+/Classroom+Facilities+Main+Classroom.JPG"
                alt="Clases presenciales vs online de inglés"
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
                  { label: 'Presencial vs Online' }
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
                  Inglés Presencial vs Online: ¿Qué Modalidad es Mejor?
                </h1>
                <div className="w-16 h-0.5 bg-brand-red mb-6 animate-hero-fade-up animation-delay-150"></div>
                <p className="font-display text-lg md:text-xl text-white/80 font-light leading-relaxed max-w-3xl animate-hero-fade-up animation-delay-200">
                  Comparativa honesta entre clases presenciales y online: efectividad, precio, flexibilidad y cómo elegir según tu perfil y objetivos.
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
                <li><a href="#panorama-actual" className="text-blue-600 hover:text-blue-700 transition-colors">→ Panorama actual del aprendizaje de inglés</a></li>
                <li><a href="#ventajas-presencial" className="text-blue-600 hover:text-blue-700 transition-colors">→ Ventajas del inglés presencial</a></li>
                <li><a href="#ventajas-online" className="text-blue-600 hover:text-blue-700 transition-colors">→ Ventajas del inglés online</a></li>
                <li><a href="#efectividad-comparada" className="text-blue-600 hover:text-blue-700 transition-colors">→ Efectividad comparada: ¿qué dicen los datos?</a></li>
                <li><a href="#como-elegir" className="text-blue-600 hover:text-blue-700 transition-colors">→ Cómo elegir según tus circunstancias</a></li>
                <li><a href="#faq" className="text-blue-600 hover:text-blue-700 transition-colors">→ Preguntas Frecuentes</a></li>
              </ul>
            </div>

            {/* Introduction */}
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              La pregunta "¿presencial o online?" es hoy más relevante que nunca. La pandemia de 2020 transformó el panorama del aprendizaje de idiomas de forma irreversible, y muchos adultos se preguntan cuál es realmente la mejor opción para aprender inglés. <strong>No existe una respuesta única</strong>, pero sí hay factores claros que te ayudarán a tomar la mejor decisión según tu perfil, objetivos y estilo de vida.
            </p>

            {/* Section 1 - Panorama actual */}
            <section id="panorama-actual" className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                Panorama Actual del Aprendizaje de Inglés
              </h2>

              <p className="text-gray-700 mb-4 leading-relaxed">
                Según datos de 2024, el <strong>40% de adultos que estudian inglés en España</strong> prefiere un formato híbrido: presencial para las clases principales y online para la práctica complementaria. El 35% opta por presencial puro y el 25% por online exclusivo.
              </p>

              <div className="grid md:grid-cols-3 gap-4 mb-6">
                <div className="bg-blue-50 rounded-xl p-5 text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">40%</div>
                  <p className="text-gray-700 text-sm">Prefiere formato híbrido</p>
                </div>
                <div className="bg-blue-50 rounded-xl p-5 text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">35%</div>
                  <p className="text-gray-700 text-sm">Opta por presencial puro</p>
                </div>
                <div className="bg-blue-50 rounded-xl p-5 text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">25%</div>
                  <p className="text-gray-700 text-sm">Prefiere online exclusivo</p>
                </div>
              </div>

              <p className="text-gray-700 mb-4 leading-relaxed">
                El mercado ha respondido a esta demanda: hoy existen opciones de calidad en ambas modalidades. La clave no es cuál es mejor en abstracto, sino cuál se adapta mejor a tu situación concreta. Ambos formatos tienen un lugar legítimo en el aprendizaje moderno de idiomas.
              </p>

              <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-xl">
                <p className="text-gray-800 font-medium">
                  <strong>Realidad del mercado:</strong> La pregunta ya no es presencial vs online, sino cómo combinar ambos de forma inteligente. Las academias que ofrecen ambas opciones dan al alumno la flexibilidad de adaptar su aprendizaje a su vida real.
                </p>
              </div>
            </section>

            {/* Section 2 - Ventajas del presencial */}
            <section id="ventajas-presencial" className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                Ventajas del Inglés Presencial
              </h2>

              <p className="text-gray-700 mb-6 leading-relaxed">
                Las clases presenciales llevan décadas siendo el estándar del aprendizaje de idiomas por razones bien documentadas. Estas son sus ventajas principales:
              </p>

              <div className="space-y-4 mb-8">
                <div className="bg-white border border-gray-200 rounded-xl p-6">
                  <h3 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-blue-600" />
                    Corrección inmediata y personalizada
                  </h3>
                  <p className="text-gray-700">El profesor detecta y corrige errores de pronunciación, entonación y gramática en tiempo real. Esta retroalimentación inmediata es difícil de replicar en formato online, especialmente para errores fonéticos que requieren observar la posición de la boca y los labios.</p>
                </div>

                <div className="bg-white border border-gray-200 rounded-xl p-6">
                  <h3 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-blue-600" />
                    Interacción real entre alumnos
                  </h3>
                  <p className="text-gray-700">Las dinámicas de grupo en clase presencial crean situaciones comunicativas más naturales. Los juegos de rol, debates y actividades colaborativas generan una presión comunicativa real que acelera el aprendizaje del speaking.</p>
                </div>

                <div className="bg-white border border-gray-200 rounded-xl p-6">
                  <h3 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-blue-600" />
                    Ambiente de inmersión sin distracciones
                  </h3>
                  <p className="text-gray-700">Ir físicamente a una academia crea un ambiente dedicado al aprendizaje. Sin las distracciones del hogar (móvil, televisión, tareas domésticas), la concentración es notablemente mayor. El 70% de alumnos online admite haber consultado el móvil durante clase.</p>
                </div>

                <div className="bg-white border border-gray-200 rounded-xl p-6">
                  <h3 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-blue-600" />
                    Superior para speaking y pronunciación
                  </h3>
                  <p className="text-gray-700">La práctica del speaking en persona es más efectiva. El lenguaje corporal, el contacto visual y la proximidad física crean condiciones más parecidas a la comunicación real. Para exámenes como el Speaking del B2 First o C1 Advanced, la práctica presencial es especialmente valiosa.</p>
                </div>
              </div>
            </section>

            {/* Section 3 - Ventajas del online */}
            <section id="ventajas-online" className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                Ventajas del Inglés Online
              </h2>

              <p className="text-gray-700 mb-6 leading-relaxed">
                El inglés online ha madurado enormemente. Las plataformas actuales ofrecen una experiencia educativa de alta calidad con ventajas que el presencial no puede igualar:
              </p>

              <div className="space-y-4 mb-8">
                <div className="bg-white border border-gray-200 rounded-xl p-6">
                  <h3 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-blue-600" />
                    Flexibilidad horaria total
                  </h3>
                  <p className="text-gray-700">El online permite estudiar desde casa, desde el trabajo o en viaje. Para profesionales con horarios irregulares o padres con responsabilidades familiares, la flexibilidad del online puede ser la diferencia entre estudiar o no estudiar.</p>
                </div>

                <div className="bg-white border border-gray-200 rounded-xl p-6">
                  <h3 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-blue-600" />
                    Ahorro en tiempo y dinero de desplazamiento
                  </h3>
                  <p className="text-gray-700">Sin transporte, el online ahorra entre 30-60 minutos diarios y los costes asociados. Para alguien en zona periférica de Madrid, esto puede suponer 2+ horas semanales y 50-100€ al mes en transporte.</p>
                </div>

                <div className="bg-white border border-gray-200 rounded-xl p-6">
                  <h3 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-blue-600" />
                    Precio más económico
                  </h3>
                  <p className="text-gray-700">Las clases online suelen costar un 20-40% menos que las presenciales. Sin gastos de local, los proveedores online pueden ofrecer tarifas más competitivas sin sacrificar calidad del profesorado.</p>
                </div>

                <div className="bg-white border border-gray-200 rounded-xl p-6">
                  <h3 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-blue-600" />
                    Acceso a profesores globales y grabación de clases
                  </h3>
                  <p className="text-gray-700">Online puedes elegir profesores de cualquier país, accediendo a nativos y especialistas que no estarían disponibles localmente. Además, muchas plataformas permiten grabar las clases para repasar el contenido después.</p>
                </div>
              </div>
            </section>

            {/* Section 4 - Efectividad comparada */}
            <section id="efectividad-comparada" className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                Efectividad Comparada: ¿Qué Dicen los Datos?
              </h2>

              <p className="text-gray-700 mb-6 leading-relaxed">
                Los meta-análisis sobre aprendizaje de idiomas online vs presencial ofrecen conclusiones matizadas. No hay un ganador absoluto: cada modalidad destaca en habilidades específicas.
              </p>

              <div className="overflow-x-auto mb-8">
                <table className="w-full border-collapse bg-white rounded-xl overflow-hidden shadow-lg">
                  <thead>
                    <tr className="bg-gradient-to-r from-blue-600 to-blue-800 text-white">
                      <th className="text-left p-4 font-semibold">Habilidad</th>
                      <th className="text-left p-4 font-semibold">Presencial</th>
                      <th className="text-left p-4 font-semibold">Online</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="bg-gray-50">
                      <td className="p-4 font-medium text-gray-900">Speaking</td>
                      <td className="p-4 text-green-600 font-medium">Superior (15-20% más progreso)</td>
                      <td className="p-4 text-gray-600">Bueno con profesor real</td>
                    </tr>
                    <tr className="bg-white">
                      <td className="p-4 font-medium text-gray-900">Pronunciación</td>
                      <td className="p-4 text-green-600 font-medium">Muy superior</td>
                      <td className="p-4 text-gray-600">Limitado por audio/video</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="p-4 font-medium text-gray-900">Reading / Writing</td>
                      <td className="p-4 text-gray-600">Equivalente</td>
                      <td className="p-4 text-gray-600">Equivalente</td>
                    </tr>
                    <tr className="bg-white">
                      <td className="p-4 font-medium text-gray-900">Listening</td>
                      <td className="p-4 text-gray-600">Equivalente</td>
                      <td className="p-4 text-gray-600">Equivalente</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="p-4 font-medium text-gray-900">Mantenimiento de nivel</td>
                      <td className="p-4 text-gray-600">Bueno</td>
                      <td className="p-4 text-green-600 font-medium">Ideal (flexibilidad)</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-xl">
                <p className="text-gray-800">
                  <strong>Conclusión de la investigación:</strong> El presencial es claramente superior para speaking y pronunciación. Para el resto de habilidades, los resultados son equivalentes cuando el alumno tiene motivación y autodisciplina. La clave es la calidad del contenido y del profesor, no el formato.
                </p>
              </div>
            </section>

            {/* Section 5 - Cómo elegir */}
            <section id="como-elegir" className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                Cómo Elegir Según Tus Circunstancias
              </h2>

              <p className="text-gray-700 mb-6 leading-relaxed">
                La mejor modalidad es la que se adapta a tu vida real y la que puedes mantener de forma consistente. Usa esta guía para decidir:
              </p>

              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="bg-blue-50 rounded-xl p-6">
                  <h3 className="font-bold text-gray-900 mb-4">Elige presencial si...</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start gap-2"><ArrowRight className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />Eres principiante (A1-A2)</li>
                    <li className="flex items-start gap-2"><ArrowRight className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />Tu objetivo principal es mejorar el speaking</li>
                    <li className="flex items-start gap-2"><ArrowRight className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />Necesitas estructura y rutina para estudiar</li>
                    <li className="flex items-start gap-2"><ArrowRight className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />Te distraes fácilmente en casa</li>
                    <li className="flex items-start gap-2"><ArrowRight className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />Valoras el componente social del aprendizaje</li>
                  </ul>
                </div>
                <div className="bg-gray-50 rounded-xl p-6">
                  <h3 className="font-bold text-gray-900 mb-4">Elige online si...</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start gap-2"><ArrowRight className="w-4 h-4 text-gray-600 mt-0.5 flex-shrink-0" />Tienes horarios muy irregulares</li>
                    <li className="flex items-start gap-2"><ArrowRight className="w-4 h-4 text-gray-600 mt-0.5 flex-shrink-0" />Vives lejos de academias de calidad</li>
                    <li className="flex items-start gap-2"><ArrowRight className="w-4 h-4 text-gray-600 mt-0.5 flex-shrink-0" />Ya tienes nivel B1+ y quieres mantenerlo</li>
                    <li className="flex items-start gap-2"><ArrowRight className="w-4 h-4 text-gray-600 mt-0.5 flex-shrink-0" />Tienes alta autodisciplina</li>
                    <li className="flex items-start gap-2"><ArrowRight className="w-4 h-4 text-gray-600 mt-0.5 flex-shrink-0" />El presupuesto es un factor limitante</li>
                  </ul>
                </div>
              </div>

              <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-xl">
                <p className="text-gray-800 font-medium">
                  <strong>Recomendación:</strong> Si tienes dudas, empieza presencial para crear hábito y bases sólidas. Una vez con nivel B1 y rutina establecida, puedes complementar o transitar a un modelo híbrido que se ajuste mejor a tu vida.
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
                  No hay una respuesta universal: tanto el inglés presencial como el online pueden llevarte al mismo destino. Lo que marca la diferencia es la consistencia, la calidad del profesorado y que el formato sea compatible con tu vida real.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  En <a href="/metodologia" className="text-blue-600 hover:underline font-medium">Impulse English Academy</a> ofrecemos ambas modalidades para que puedas elegir —o combinar— según tus necesidades. Lo importante es que empieces y no pares.
                </p>
              </div>
            </section>

            {/* CTA */}
            <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl p-8 text-center text-white">
              <h3 className="text-2xl font-bold mb-4">¿Presencial o online? Ofrecemos ambas modalidades. Consúltanos.</h3>
              <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
                Cuéntanos tu horario, objetivos y nivel actual. Te orientamos hacia la modalidad que mejor encaja con tu vida real.
              </p>
              <a
              href="/contacto"
                className="inline-flex items-center gap-2 bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold hover:bg-blue-50 transition-colors"
              >
                Consúltanos gratis
                <ArrowRight className="w-5 h-5" />
              </a>
            </div>

            {/* Related Articles */}
            <section className="mt-16">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Artículos Relacionados</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <a href="/metodologia" className="group bg-gray-50 rounded-xl p-6 hover:bg-blue-50 transition-colors">
                  <h3 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors mb-2">
                    Nuestra Metodología
                  </h3>
                  <p className="text-gray-600 text-sm">Cómo estructuramos el aprendizaje para maximizar resultados.</p>
                </a>
                <a href="/cursos-ingles/online" className="group bg-gray-50 rounded-xl p-6 hover:bg-blue-50 transition-colors">
                  <h3 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors mb-2">
                    Cursos de Inglés Online
                  </h3>
                  <p className="text-gray-600 text-sm">Nuestros programas online con la misma calidad que el presencial.</p>
                </a>
                <a href="/cursos-ingles/adultos" className="group bg-gray-50 rounded-xl p-6 hover:bg-blue-50 transition-colors">
                  <h3 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors mb-2">
                    Cursos de Inglés para Adultos
                  </h3>
                  <p className="text-gray-600 text-sm">Programas presenciales adaptados al ritmo de vida adulto.</p>
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
              href="https://www.cambridgeenglish.org/es/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-blue-600 hover:underline"
            >
              → Más información en Cambridge English - Recursos oficiales de aprendizaje
            </a>
          </div>
        </section>

        <Footer />
      </div>

      {/* Schema.org Structured Data */}
</>
  );
}
