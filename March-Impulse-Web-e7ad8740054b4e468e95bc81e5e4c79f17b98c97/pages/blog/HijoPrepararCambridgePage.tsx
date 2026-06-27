import React, { useState, useEffect } from 'react';
import { ChevronRight, Clock, Calendar, ChevronDown, ChevronUp, BookOpen, CheckCircle, Target, ArrowRight, Award } from 'lucide-react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import LeadForm from '../../components/LeadForm';
import Breadcrumb from '../../components/Breadcrumb';
import { generateArticleSchema, businessInfo } from '../../utils/schemaData';

export const articleSchema = generateArticleSchema({
    headline: '¿Mi Hijo Debería Preparar Cambridge? Guía para Padres',
    description: 'Preparar Cambridge da ventaja académica y motivación. Descubre a qué edad empezar, qué examen elegir (Young Learners, B1, B2) y cómo preparar sin presión.',
    url: `${businessInfo.url}/blog/hijo-preparar-cambridge`,
    datePublished: '2025-03-01'
  });

export const faqItems = [
    {
      question: '¿A qué edad puede hacer Cambridge mi hijo?',
      answer: 'Los Young Learners (Starters, Movers, Flyers) son para 7-12 años. El B1 Preliminary es habitual a los 14-15. El B2 First, a los 16-17. No hay edad mínima para los Young Learners.'
    }

  ,
    {
      question: '¿Es Cambridge obligatorio para los niños?',
      answer: 'No es obligatorio, pero tener certificación Cambridge antes del instituto da ventaja en acceso a programas bilingües, becas y motivación académica.'
    },
    {
      question: '¿Cómo se prepara un niño sin que sea estresante?',
      answer: 'Preparación integrada en el aprendizaje normal: juegos de examen, simulacros cortos, enfoque en habilidades no en "aprobar". La presión excesiva de los padres es el mayor factor de estrés.'
    },
    {
      question: '¿Cuánto cuesta preparar Cambridge para niños?',
      answer: 'La preparación en academia: 64-79€/mes. El examen Young Learners: 80-120€. B1: 120-140€. Es una inversión con retorno en motivación y certificación permanente.'
    },
    {
      question: '¿Qué examen hacer primero, Starters o Movers?',
      answer: 'Starters es el primer nivel (7-9 años). Movers es el segundo (9-11 años). Flyers el tercero (11-13 años). No es necesario hacerlos todos; muchos van directamente a Movers o Flyers.'
    }
  ];

export default function HijoPrepararCambridgePage() {
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
                src="/images/academy/infantil-classes.jpg"
                alt="Niños preparando exámenes Cambridge en academia"
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
                  { label: 'Cambridge para Niños' }
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
                  ¿Mi Hijo Debería Preparar Cambridge? Guía para Padres
                </h1>
                <div className="w-16 h-0.5 bg-brand-red mb-6 animate-hero-fade-up animation-delay-150"></div>
                <p className="font-display text-lg md:text-xl text-white/80 font-light leading-relaxed max-w-3xl animate-hero-fade-up animation-delay-200">
                  Todo lo que necesitas saber como padre para tomar la mejor decisión: qué examen, cuándo empezar y cómo preparar a tu hijo sin presión.
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
                <li><a href="#beneficios" className="text-purple-600 hover:text-purple-700 transition-colors">→ Beneficios de Cambridge para niños</a></li>
                <li><a href="#examenes-edad" className="text-purple-600 hover:text-purple-700 transition-colors">→ Los exámenes por edad</a></li>
                <li><a href="#sin-presion" className="text-purple-600 hover:text-purple-700 transition-colors">→ Cómo preparar sin presión</a></li>
                <li><a href="#senales" className="text-purple-600 hover:text-purple-700 transition-colors">→ Señales de que está listo</a></li>
                <li><a href="#nuestra-experiencia" className="text-purple-600 hover:text-purple-700 transition-colors">→ Nuestra experiencia</a></li>
                <li><a href="#faq" className="text-purple-600 hover:text-purple-700 transition-colors">→ Preguntas Frecuentes</a></li>
              </ul>
            </div>

            {/* Introduction */}
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              Cada vez más padres se preguntan si deben preparar a sus hijos para los exámenes de Cambridge. La respuesta depende de la edad, el nivel de inglés del niño y, sobre todo, de cómo se enfoque la preparación. Cuando se hace bien, Cambridge es una herramienta de motivación extraordinaria. Cuando se hace mal, puede generar rechazo hacia el idioma.
            </p>

            {/* Section 1 - Beneficios */}
            <section id="beneficios" className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                Beneficios de Cambridge para los Niños
              </h2>

              <div className="grid md:grid-cols-2 gap-4 mb-8">
                <div className="bg-white border border-gray-200 rounded-xl p-5">
                  <h3 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                    <Award className="w-5 h-5 text-purple-600" />
                    Certificación permanente
                  </h3>
                  <p className="text-gray-700 text-sm">Las certificaciones Cambridge no caducan. Un niño que obtiene el Movers a los 10 años tiene esa certificación de por vida, que puede incluir en su currículum académico y profesional.</p>
                </div>

                <div className="bg-white border border-gray-200 rounded-xl p-5">
                  <h3 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                    <Award className="w-5 h-5 text-purple-600" />
                    Motivación académica
                  </h3>
                  <p className="text-gray-700 text-sm">Tener un objetivo concreto como un examen aumenta la motivación y la constancia. Los niños que se preparan para Cambridge suelen mostrar mayor compromiso con el aprendizaje del idioma.</p>
                </div>

                <div className="bg-white border border-gray-200 rounded-xl p-5">
                  <h3 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                    <Award className="w-5 h-5 text-purple-600" />
                    Ventaja en programas bilingües
                  </h3>
                  <p className="text-gray-700 text-sm">Muchos colegios bilingües y programas de excelencia académica valoran positivamente las certificaciones Cambridge en el proceso de admisión, incluso a edades tempranas.</p>
                </div>

                <div className="bg-white border border-gray-200 rounded-xl p-5">
                  <h3 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                    <Award className="w-5 h-5 text-purple-600" />
                    Reconocimiento internacional
                  </h3>
                  <p className="text-gray-700 text-sm">Cambridge es reconocido por más de 25.000 instituciones educativas y empresas en todo el mundo. Empezar con Young Learners sienta las bases para futuras certificaciones B1, B2 o C1.</p>
                </div>
              </div>
            </section>

            {/* Section 2 - Exámenes por edad */}
            <section id="examenes-edad" className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                Los Exámenes Cambridge por Edad
              </h2>

              <div className="overflow-x-auto mb-8">
                <table className="w-full border-collapse bg-white rounded-xl overflow-hidden shadow-lg">
                  <thead>
                    <tr className="bg-gradient-to-r from-purple-600 to-purple-800 text-white">
                      <th className="text-left p-4 font-semibold">Examen</th>
                      <th className="text-left p-4 font-semibold">Edad típica</th>
                      <th className="text-left p-4 font-semibold">Nivel MCER</th>
                      <th className="text-left p-4 font-semibold">Coste examen</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="bg-gray-50">
                      <td className="p-4 font-medium text-gray-900">Starters (Pre-A1)</td>
                      <td className="p-4 text-gray-700">7-9 años</td>
                      <td className="p-4 text-gray-700">Pre-A1</td>
                      <td className="p-4 text-gray-700">80-100€</td>
                    </tr>
                    <tr className="bg-white">
                      <td className="p-4 font-medium text-gray-900">Movers (A1)</td>
                      <td className="p-4 text-gray-700">9-11 años</td>
                      <td className="p-4 text-gray-700">A1</td>
                      <td className="p-4 text-gray-700">90-110€</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="p-4 font-medium text-gray-900">Flyers (A2)</td>
                      <td className="p-4 text-gray-700">11-13 años</td>
                      <td className="p-4 text-gray-700">A2</td>
                      <td className="p-4 text-gray-700">100-120€</td>
                    </tr>
                    <tr className="bg-white">
                      <td className="p-4 font-medium text-gray-900">B1 Preliminary</td>
                      <td className="p-4 text-gray-700">14-15 años</td>
                      <td className="p-4 text-gray-700">B1</td>
                      <td className="p-4 text-gray-700">120-140€</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="p-4 font-medium text-gray-900">B2 First</td>
                      <td className="p-4 text-gray-700">16-17 años</td>
                      <td className="p-4 text-gray-700">B2</td>
                      <td className="p-4 text-gray-700">150-180€</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="bg-purple-50 border-l-4 border-purple-500 p-6 rounded-r-xl">
                <p className="text-gray-800">
                  <strong>Recomendación de Impulse:</strong> Para niños de primaria, los Young Learners son la opción ideal. El formato lúdico (dibujos, historias) hace que el examen sea una experiencia positiva. Muchos de nuestros alumnos lo viven como un juego especial, no como un examen estresante.
                </p>
              </div>
            </section>

            {/* Section 3 - Sin presión */}
            <section id="sin-presion" className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                Cómo Preparar a tu Hijo sin Generar Estrés
              </h2>

              <p className="text-gray-700 mb-6 leading-relaxed">
                El mayor riesgo de la preparación Cambridge con niños no es el examen en sí, sino la presión que los padres involuntariamente generan. Estas son las claves para una preparación positiva:
              </p>

              <div className="space-y-4 mb-8">
                <div className="bg-white border border-gray-200 rounded-xl p-6">
                  <h3 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-purple-600" />
                    Enfócate en las habilidades, no en "aprobar"
                  </h3>
                  <p className="text-gray-700">Habla con tu hijo sobre lo que aprende, no sobre si va a aprobar o suspender. Los Young Learners no tienen "aprobado" o "suspenso": se obtiene 1, 2 o 3 escudos. Cualquier resultado es positivo.</p>
                </div>

                <div className="bg-white border border-gray-200 rounded-xl p-6">
                  <h3 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-purple-600" />
                    Simulacros cortos y divertidos
                  </h3>
                  <p className="text-gray-700">La preparación debe integrarse en el aprendizaje normal. Juegos con el formato del examen, actividades similares a las del examen pero presentadas como juegos. Nunca: "este es el examen de práctica, es muy importante".</p>
                </div>

                <div className="bg-white border border-gray-200 rounded-xl p-6">
                  <h3 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-purple-600" />
                    Celebra el progreso, no solo el resultado
                  </h3>
                  <p className="text-gray-700">Reconoce cada pequeño avance: nuevas palabras aprendidas, mayor comprensión, más confianza al hablar. El resultado del examen es la consecuencia del progreso, no el objetivo en sí mismo.</p>
                </div>
              </div>
            </section>

            {/* Section 4 - Señales de que está listo */}
            <section id="senales" className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                Señales de que tu Hijo está Listo para Cambridge
              </h2>

              <p className="text-gray-700 mb-6 leading-relaxed">
                No todos los niños están listos para el examen al mismo tiempo. Estas son las señales que indican que tu hijo tiene la madurez lingüística y emocional para afrontar Cambridge positivamente:
              </p>

              <div className="grid md:grid-cols-2 gap-4 mb-8">
                <div className="bg-purple-50 rounded-xl p-5">
                  <h3 className="font-bold text-gray-900 mb-3">Señales lingüísticas</h3>
                  <ul className="space-y-2 text-gray-700 text-sm">
                    <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-purple-600 mt-0.5 flex-shrink-0" />Puede mantener una conversación básica en inglés</li>
                    <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-purple-600 mt-0.5 flex-shrink-0" />Lee textos simples en inglés con comprensión</li>
                    <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-purple-600 mt-0.5 flex-shrink-0" />Entiende vídeos infantiles en inglés sin subtítulos</li>
                    <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-purple-600 mt-0.5 flex-shrink-0" />Usa vocabulario en inglés espontáneamente</li>
                  </ul>
                </div>
                <div className="bg-purple-50 rounded-xl p-5">
                  <h3 className="font-bold text-gray-900 mb-3">Señales emocionales</h3>
                  <ul className="space-y-2 text-gray-700 text-sm">
                    <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-purple-600 mt-0.5 flex-shrink-0" />Disfruta de las clases de inglés</li>
                    <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-purple-600 mt-0.5 flex-shrink-0" />Muestra interés en los libros de inglés</li>
                    <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-purple-600 mt-0.5 flex-shrink-0" />No se bloquea cuando comete errores</li>
                    <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-purple-600 mt-0.5 flex-shrink-0" />Tiene madurez para sentarse 40-60 minutos</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Section 5 - Nuestra experiencia */}
            <section id="nuestra-experiencia" className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                Nuestra Experiencia con Niños Preparando Cambridge
              </h2>

              <p className="text-gray-700 mb-4 leading-relaxed">
                En Impulse English Academy llevamos años preparando a niños madrileños para los exámenes Young Learners y para los primeros niveles de Cambridge. Nuestra experiencia nos ha enseñado que la clave está en dos factores:
              </p>

              <div className="space-y-4 mb-8">
                <div className="bg-white border border-gray-200 rounded-xl p-6">
                  <h3 className="font-bold text-gray-900 mb-2">El timing correcto</h3>
                  <p className="text-gray-700">Empezar la preparación cuando el niño está listo, no cuando el padre lo decide. Hemos visto niños de 8 años que superan brillantemente el Movers y niños de 11 que aún no están preparados. Cada niño tiene su momento.</p>
                </div>

                <div className="bg-white border border-gray-200 rounded-xl p-6">
                  <h3 className="font-bold text-gray-900 mb-2">La actitud del profesor</h3>
                  <p className="text-gray-700">Nuestros profesores presentan el examen como una aventura, no como una prueba de evaluación. Los simulacros son juegos de rol donde los niños "juegan a hacer el examen". Este enfoque elimina la ansiedad y maximiza el rendimiento.</p>
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
                    <div className={`overflow-hidden transition-all duration-300 ${openFaq === index ? 'max-h-[500px] opacity-100 pb-6' : 'max-h-0 opacity-0'}`}>
                        <div className="px-6 bg-white">
                          <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                        </div>
                      </div>
                  </div>
                ))}
              </div>
            </section>

            {/* CTA */}
            <div className="bg-gradient-to-r from-purple-600 to-purple-800 rounded-2xl p-8 text-center text-white">
              <h3 className="text-2xl font-bold mb-4">Preparamos a tu hijo para Cambridge con metodología probada</h3>
              <p className="text-purple-100 mb-6 max-w-2xl mx-auto">
                Evaluamos el nivel de tu hijo y diseñamos el plan de preparación Cambridge más adecuado para su edad y momento.
              </p>
              <a
              href="/cursos-ingles/primaria/"
                className="inline-flex items-center gap-2 bg-white text-purple-600 px-8 py-4 rounded-xl font-semibold hover:bg-purple-50 transition-colors"
              >
                Ver cursos de primaria
                <ArrowRight className="w-5 h-5" />
              </a>
            </div>

            {/* Related Articles */}
            <section className="mt-16">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Artículos Relacionados</h2>
              <div className="grid md:grid-cols-3 gap-6">
                <a href="/cursos-ingles/primaria/" className="group bg-gray-50 rounded-xl p-6 hover:bg-purple-50 transition-colors">
                  <h3 className="font-semibold text-gray-900 group-hover:text-purple-600 transition-colors mb-2">
                    Cursos de Inglés Primaria
                  </h3>
                  <p className="text-gray-600 text-sm">Inglés para niños de 6 a 12 años con prep Cambridge.</p>
                </a>
                <a href="/examenes-cambridge/" className="group bg-gray-50 rounded-xl p-6 hover:bg-purple-50 transition-colors">
                  <h3 className="font-semibold text-gray-900 group-hover:text-purple-600 transition-colors mb-2">
                    Exámenes Cambridge
                  </h3>
                  <p className="text-gray-600 text-sm">Toda la información sobre los exámenes Cambridge.</p>
                </a>
                <a href="/examenes-cambridge/b1-preliminary/" className="group bg-gray-50 rounded-xl p-6 hover:bg-purple-50 transition-colors">
                  <h3 className="font-semibold text-gray-900 group-hover:text-purple-600 transition-colors mb-2">
                    Cambridge B1 Preliminary
                  </h3>
                  <p className="text-gray-600 text-sm">Guía completa del examen B1 Preliminary de Cambridge.</p>
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
              href="https://www.cambridgeenglish.org/es/exams-and-tests/young-learners/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-blue-600 hover:underline"
            >
              → Más información sobre Cambridge Young Learners - web oficial de Cambridge English
            </a>
          </div>
        </section>

        <Footer />
      </div>

</>
  );
}
