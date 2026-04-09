import React, { useState, useEffect } from 'react';
import { ChevronRight, Clock, Calendar, ChevronDown, ChevronUp, BookOpen, CheckCircle, Target, ArrowRight, Award } from 'lucide-react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import LeadForm from '../../components/LeadForm';
import Breadcrumb from '../../components/Breadcrumb';
import { generateArticleSchema, businessInfo } from '../../utils/schemaData';

export const articleSchema = generateArticleSchema({
    headline: 'Inglés Online vs Presencial para Niños: ¿Qué es Mejor?',
    description: 'Para niños, el inglés presencial es más efectivo por la interacción real. Descubre cuándo el online puede complementar y qué edades se adaptan mejor a cada formato.',
    url: `${businessInfo.url}/blog/ingles-online-vs-presencial`,
    datePublished: '2025-03-01'
  });

export const faqItems = [
    {
      question: '¿Pueden los niños pequeños aprender inglés online?',
      answer: 'Los menores de 7 años aprenden mejor en presencial: necesitan interacción física, movimiento y presencia real del profesor. A partir de 10-12 años, el online puede ser efectivo con buena estructura.'
    }

  ,
    {
      question: '¿El online es más barato para niños?',
      answer: 'Generalmente sí, un 15-30% más económico. Sin embargo, para niños pequeños, el presencial ofrece mejor calidad-precio dado el mayor impacto pedagógico.'
    },
    {
      question: '¿Cómo mantener a un niño motivado en clase online?',
      answer: 'Sesiones cortas (30-45 min), mucha interacción, recursos visuales atractivos, juegos digitales integrados, y profesor con experiencia específica en inglés online para niños.'
    },
    {
      question: '¿El online puede sustituir completamente al presencial?',
      answer: 'Para adultos y adolescentes, posiblemente. Para niños en etapa de adquisición (hasta 10 años), no recomendamos el online como única modalidad. La interacción física es parte del aprendizaje.'
    }
  ];

export default function InglesOnlineVsPresencialPage() {
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
                src="/images/academy/facilities/infantil-classes.jpg"
                alt="Comparativa inglés online vs presencial para niños"
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
                  { label: 'Online vs Presencial Niños' }
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
                  Inglés Online vs Presencial para Niños: ¿Qué es Mejor?
                </h1>
                <div className="w-16 h-0.5 bg-brand-red mb-6 animate-hero-fade-up animation-delay-150"></div>
                <p className="font-display text-lg md:text-xl text-white/80 font-light leading-relaxed max-w-3xl animate-hero-fade-up animation-delay-200">
                  Guía basada en evidencia pedagógica: cuándo el presencial es imprescindible, cuándo el online funciona bien y cómo combinar ambos.
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
                <li><a href="#presencial-infantil" className="text-purple-600 hover:text-purple-700 transition-colors">→ Presencial vs online para niños</a></li>
                <li><a href="#por-que-presencial" className="text-purple-600 hover:text-purple-700 transition-colors">→ Por qué el presencial domina en infantil</a></li>
                <li><a href="#cuando-online" className="text-purple-600 hover:text-purple-700 transition-colors">→ Cuándo el online puede complementar</a></li>
                <li><a href="#modelo-hibrido" className="text-purple-600 hover:text-purple-700 transition-colors">→ Modelo híbrido recomendado</a></li>
                <li><a href="#por-edad" className="text-purple-600 hover:text-purple-700 transition-colors">→ Cómo elegir según la edad</a></li>
                <li><a href="#faq" className="text-purple-600 hover:text-purple-700 transition-colors">→ Preguntas Frecuentes</a></li>
              </ul>
            </div>

            {/* Introduction */}
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              La pandemia aceleró la adopción del inglés online para todas las edades. Hoy, muchos padres se preguntan si las clases online son una alternativa real al presencial para sus hijos. La respuesta no es simple: depende fundamentalmente de la edad del niño. Para los más pequeños, el presencial sigue siendo significativamente más efectivo. Para adolescentes, el online puede ser una opción válida. Para todos, el modelo híbrido es probablemente el mejor.
            </p>

            {/* Section 1 - Presencial vs online */}
            <section id="presencial-infantil" className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                Presencial vs Online para Niños: La Comparativa Honesta
              </h2>

              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="bg-white border-2 border-purple-500 rounded-xl p-6">
                  <h3 className="font-bold text-purple-700 text-lg mb-4">Presencial</h3>
                  <div className="space-y-3">
                    <div className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-purple-600 mt-1 flex-shrink-0" />
                      <p className="text-gray-700 text-sm">Interacción física: juego, movimiento, contacto visual real</p>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-purple-600 mt-1 flex-shrink-0" />
                      <p className="text-gray-700 text-sm">Mayor control del entorno y la atención del niño</p>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-purple-600 mt-1 flex-shrink-0" />
                      <p className="text-gray-700 text-sm">Dinámicas de grupo reales entre compañeros</p>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-purple-600 mt-1 flex-shrink-0" />
                      <p className="text-gray-700 text-sm">Actividades físicas y sensoriales (manualidades, juegos de mesa)</p>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-purple-600 mt-1 flex-shrink-0" />
                      <p className="text-gray-700 text-sm">Más efectivo para menores de 10 años</p>
                    </div>
                    <div className="flex items-start gap-2 mt-4 pt-4 border-t border-gray-200">
                      <span className="text-red-500 font-bold mt-0.5">—</span>
                      <p className="text-gray-600 text-sm">Menos flexible en horarios. Requiere desplazamiento.</p>
                    </div>
                  </div>
                </div>

                <div className="bg-white border-2 border-gray-200 rounded-xl p-6">
                  <h3 className="font-bold text-gray-700 text-lg mb-4">Online</h3>
                  <div className="space-y-3">
                    <div className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-gray-400 mt-1 flex-shrink-0" />
                      <p className="text-gray-700 text-sm">Flexibilidad horaria total</p>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-gray-400 mt-1 flex-shrink-0" />
                      <p className="text-gray-700 text-sm">Acceso a profesores cualificados de alto nivel</p>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-gray-400 mt-1 flex-shrink-0" />
                      <p className="text-gray-700 text-sm">Generalmente más económico (15-30% menos)</p>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-gray-400 mt-1 flex-shrink-0" />
                      <p className="text-gray-700 text-sm">Clases grabadas disponibles para repaso</p>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-gray-400 mt-1 flex-shrink-0" />
                      <p className="text-gray-700 text-sm">Efectivo para mayores de 10-12 años</p>
                    </div>
                    <div className="flex items-start gap-2 mt-4 pt-4 border-t border-gray-200">
                      <span className="text-red-500 font-bold mt-0.5">—</span>
                      <p className="text-gray-600 text-sm">Distracción digital. Menor engagement para niños pequeños.</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Section 2 - Por qué presencial domina */}
            <section id="por-que-presencial" className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                Por Qué el Presencial Domina en la Etapa Infantil
              </h2>

              <p className="text-gray-700 mb-6 leading-relaxed">
                Para niños menores de 10 años, el aprendizaje presencial no es simplemente "mejor": es cualitativamente diferente. Estas son las razones neurológicas y pedagógicas que explican por qué:
              </p>

              <div className="space-y-4 mb-8">
                <div className="bg-white border border-gray-200 rounded-xl p-6">
                  <h3 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
                    <BookOpen className="w-5 h-5 text-purple-600" />
                    El cuerpo como herramienta de aprendizaje
                  </h3>
                  <p className="text-gray-700">Los niños pequeños aprenden a través del movimiento físico, las manos, los gestos, el contacto con objetos reales. El TPR (Total Physical Response), los juegos de movimiento y las manualidades son componentes esenciales del aprendizaje infantil que no se pueden replicar completamente online.</p>
                </div>

                <div className="bg-white border border-gray-200 rounded-xl p-6">
                  <h3 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
                    <BookOpen className="w-5 h-5 text-purple-600" />
                    La pantalla como barrera emocional
                  </h3>
                  <p className="text-gray-700">Para un niño de 4-6 años, un profesor en pantalla no activa los mismos mecanismos de conexión emocional que un profesor en persona. La relación afectiva con el profesor es el principal motor del aprendizaje en la infancia temprana.</p>
                </div>

                <div className="bg-white border border-gray-200 rounded-xl p-6">
                  <h3 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
                    <BookOpen className="w-5 h-5 text-purple-600" />
                    Menor capacidad de atención sostenida
                  </h3>
                  <p className="text-gray-700">Los niños pequeños tienen una capacidad de atención muy limitada. En presencial, el profesor puede gestionar la energía del grupo, cambiar de actividad con fluidez e impedir distracciones. Online, el niño puede simplemente desconectar y el profesor tiene mucho menos control.</p>
                </div>
              </div>
            </section>

            {/* Section 3 - Cuando el online puede complementar */}
            <section id="cuando-online" className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                Cuándo el Online Puede Complementar
              </h2>

              <p className="text-gray-700 mb-6 leading-relaxed">
                El online no es el enemigo del presencial: bien integrado, puede añadir valor significativo a la formación de tu hijo. Estos son los escenarios en que el online funciona bien:
              </p>

              <div className="grid md:grid-cols-2 gap-4 mb-8">
                <div className="bg-purple-50 rounded-xl p-5">
                  <h3 className="font-bold text-gray-900 mb-3">Para mayores de 10 años</h3>
                  <p className="text-gray-700 text-sm">A partir de los 10-12 años, la capacidad de atención y la madurez digital permiten sacar partido real de las clases online. Para adolescentes, puede ser tan efectivo como el presencial.</p>
                </div>
                <div className="bg-purple-50 rounded-xl p-5">
                  <h3 className="font-bold text-gray-900 mb-3">Práctica de conversación</h3>
                  <p className="text-gray-700 text-sm">Las sesiones one-to-one con profesores titulados online son perfectas para practicar speaking fuera de las clases grupales presenciales. Complementan sin reemplazar.</p>
                </div>
                <div className="bg-purple-50 rounded-xl p-5">
                  <h3 className="font-bold text-gray-900 mb-3">Períodos de viaje o vacaciones</h3>
                  <p className="text-gray-700 text-sm">Mantener el ritmo durante las vacaciones de verano o cuando la familia está fuera de Madrid. El online permite continuidad sin perder el progreso acumulado.</p>
                </div>
                <div className="bg-purple-50 rounded-xl p-5">
                  <h3 className="font-bold text-gray-900 mb-3">Aplicaciones y plataformas</h3>
                  <p className="text-gray-700 text-sm">Apps como Duolingo, Reading Eggs o BBC Learning English son excelentes complementos online para niños de todas las edades, usados 15-20 minutos diarios.</p>
                </div>
              </div>
            </section>

            {/* Section 4 - Modelo híbrido */}
            <section id="modelo-hibrido" className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                El Modelo Híbrido Recomendado
              </h2>

              <p className="text-gray-700 mb-6 leading-relaxed">
                La solución óptima para la mayoría de los niños no es elegir entre online y presencial, sino combinar ambos de forma inteligente:
              </p>

              <div className="space-y-3 mb-8">
                {[
                  { titulo: 'Presencial como base', desc: '2 sesiones semanales de clase presencial en grupo reducido. Aquí se trabaja el speaking, las dinámicas de grupo y el aprendizaje experiencial.' },
                  { titulo: 'Apps como refuerzo diario', desc: '15-20 minutos diarios de app de inglés (Duolingo, Reading Eggs, Khan Academy). Mantiene el cerebro activo y refuerza vocabulario sin esfuerzo.' },
                  { titulo: 'Contenido en inglés en casa', desc: 'Series, canciones y juegos en inglés. Exposición pasiva que suma 1-2 horas semanales sin que el niño lo perciba como "estudio".' },
                  { titulo: 'Sesión online puntual de conversación', desc: 'Para niños de 10+: una sesión mensual con un nativo online para practicar speaking en un contexto diferente al de la academia.' }
                ].map((item, i) => (
                  <div key={i} className="bg-white border border-gray-200 rounded-xl p-5 flex gap-4">
                    <div className="bg-purple-600 text-white rounded-full w-7 h-7 flex items-center justify-center text-sm font-bold flex-shrink-0">
                      {i + 1}
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 mb-1">{item.titulo}</h3>
                      <p className="text-gray-700 text-sm">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Section 5 - Por edad */}
            <section id="por-edad" className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                Recomendación por Edad
              </h2>

              <div className="overflow-x-auto mb-8">
                <table className="w-full border-collapse bg-white rounded-xl overflow-hidden shadow-lg">
                  <thead>
                    <tr className="bg-gradient-to-r from-purple-600 to-purple-800 text-white">
                      <th className="text-left p-4 font-semibold">Edad</th>
                      <th className="text-left p-4 font-semibold">Formato recomendado</th>
                      <th className="text-left p-4 font-semibold">Online como</th>
                      <th className="text-left p-4 font-semibold">Formato a evitar</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="bg-gray-50">
                      <td className="p-4 font-medium text-gray-900">1-6 años</td>
                      <td className="p-4 text-purple-600 font-medium">100% presencial</td>
                      <td className="p-4 text-gray-700">Apps lúdicas (complemento)</td>
                      <td className="p-4 text-red-600">Online como base</td>
                    </tr>
                    <tr className="bg-white">
                      <td className="p-4 font-medium text-gray-900">7-10 años</td>
                      <td className="p-4 text-purple-600 font-medium">Presencial (principal)</td>
                      <td className="p-4 text-gray-700">Apps + contenido pasivo</td>
                      <td className="p-4 text-amber-600">Online exclusivo</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="p-4 font-medium text-gray-900">10-14 años</td>
                      <td className="p-4 text-purple-600 font-medium">Presencial o híbrido</td>
                      <td className="p-4 text-gray-700">Conversación + plataformas</td>
                      <td className="p-4 text-gray-500">—</td>
                    </tr>
                    <tr className="bg-white">
                      <td className="p-4 font-medium text-gray-900">14+ años</td>
                      <td className="p-4 text-purple-600 font-medium">Híbrido o online</td>
                      <td className="p-4 text-gray-700">Clases online válidas como base</td>
                      <td className="p-4 text-gray-500">—</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="bg-purple-50 border-l-4 border-purple-500 p-6 rounded-r-xl">
                <p className="text-gray-800">
                  <strong>Nuestra experiencia:</strong> En Impulse English Academy ofrecemos clases presenciales con recursos digitales integrados, creando el modelo híbrido más adecuado para cada edad. Para los más pequeños, nuestras clases Great Little People son 100% presenciales y diseñadas específicamente para la etapa infantil.
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
                        <ChevronUp className="w-5 h-5 text-purple-600 flex-shrink-0" />
                      ) : (
                        <ChevronDown className="w-5 h-5 text-purple-600 flex-shrink-0" />
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

              <div className="bg-gradient-to-r from-purple-50 to-purple-100 rounded-2xl p-8">
                <p className="text-gray-700 mb-4 leading-relaxed">
                  Para niños menores de 10 años, el presencial sigue siendo claramente superior al online. La interacción física, el movimiento, la relación con el profesor y la dinámica de grupo son elementos que el online no puede replicar completamente a estas edades.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  El modelo óptimo es el híbrido inteligente: <a href="/cursos-ingles/infantil/" className="text-purple-600 hover:underline font-medium">clases presenciales</a> como base, complementadas con apps, contenido digital y, para mayores de 10 años, sesiones online ocasionales con nativos. En Impulse, nuestras clases presenciales integran recursos digitales de forma que los niños disfrutan de lo mejor de ambos mundos.
                </p>
              </div>
            </section>

            {/* CTA */}
            <div className="bg-gradient-to-r from-purple-600 to-purple-800 rounded-2xl p-8 text-center text-white">
              <h3 className="text-2xl font-bold mb-4">Clases presenciales para niños en Madrid con opción híbrida disponible</h3>
              <p className="text-purple-100 mb-6 max-w-2xl mx-auto">
                El mejor de los dos mundos: presencial de calidad con recursos digitales integrados. Primera clase gratuita.
              </p>
              <a
              href="/cursos-ingles/infantil/"
                className="inline-flex items-center gap-2 bg-white text-purple-600 px-8 py-4 rounded-xl font-semibold hover:bg-purple-50 transition-colors"
              >
                Ver clases infantil
                <ArrowRight className="w-5 h-5" />
              </a>
            </div>

            {/* Related Articles */}
            <section className="mt-16">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Artículos Relacionados</h2>
              <div className="grid md:grid-cols-3 gap-6">
                <a href="/cursos-ingles/infantil/" className="group bg-gray-50 rounded-xl p-6 hover:bg-purple-50 transition-colors">
                  <h3 className="font-semibold text-gray-900 group-hover:text-purple-600 transition-colors mb-2">
                    Cursos de Inglés Infantil
                  </h3>
                  <p className="text-gray-600 text-sm">Inglés presencial para los más pequeños en Madrid.</p>
                </a>
                <a href="/cursos-ingles/primaria/" className="group bg-gray-50 rounded-xl p-6 hover:bg-purple-50 transition-colors">
                  <h3 className="font-semibold text-gray-900 group-hover:text-purple-600 transition-colors mb-2">
                    Cursos de Inglés Primaria
                  </h3>
                  <p className="text-gray-600 text-sm">Inglés para niños de 6 a 12 años con prep Cambridge.</p>
                </a>
                <a href="/metodologia/" className="group bg-gray-50 rounded-xl p-6 hover:bg-purple-50 transition-colors">
                  <h3 className="font-semibold text-gray-900 group-hover:text-purple-600 transition-colors mb-2">
                    Nuestra Metodología
                  </h3>
                  <p className="text-gray-600 text-sm">El enfoque híbrido que usamos en Impulse Academy.</p>
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
              href="https://www.cambridgeenglish.org/es/learning-english/parents-and-children/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-blue-600 hover:underline"
            >
              → Recursos para padres e hijos - Cambridge English oficial
            </a>
          </div>
        </section>

        <Footer />
      </div>

</>
  );
}
