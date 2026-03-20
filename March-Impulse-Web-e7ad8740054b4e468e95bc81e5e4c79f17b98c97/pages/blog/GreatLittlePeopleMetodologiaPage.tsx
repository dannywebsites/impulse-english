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

export default function GreatLittlePeopleMetodologiaPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = 'Great Little People: Metodología de Inglés Infantil 2026 | Impulse English Academy La Vaguada – Barrio del Pilar';
  }, []);

  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const articleSchema = generateArticleSchema({
    headline: 'Great Little People: El Método de Inglés para los Más Pequeños',
    description: 'Great Little People es el método de inglés para niños de 1-7 años basado en inmersión total, juego y tecnología. Descubre cómo funciona y sus resultados.',
    url: `${businessInfo.url}/blog/great-little-people-metodologia`,
    datePublished: '2025-03-01'
  });

  const faqItems = [
    {
      question: '¿Para qué edades es Great Little People?',
      answer: 'Great Little People está diseñado para niños de 1 a 7 años, dividido en niveles: Babies (1-2), Toddlers (2-3), Little People (3-5) y Big Little People (5-7).'
    },
    {
      question: '¿Cómo son las clases Great Little People?',
      answer: 'Son sesiones de 45-60 minutos con máximo 6 niños, 100% en inglés, basadas en juego dirigido, canciones, cuentos, manualidades y rutinas que simulan un entorno anglófono natural.'
    },
    {
      question: '¿En cuánto tiempo se ven resultados?',
      answer: 'Los padres suelen notar primeras palabras y frases en inglés en 8-12 semanas. A los 6-8 meses, la mayoría de niños mantiene comprensión básica y vocabulario activo de 100-200 palabras.'
    },
    {
      question: '¿Great Little People tiene certificación?',
      answer: 'Sí, los centros Great Little People son centros autorizados con formación específica de los profesores. Impulse English Academy es centro oficial Great Little People en Madrid.'
    }
  ];

  return (
    <>
      <SEOHead
        title="Great Little People: Metodología de Inglés Infantil 2026"
        description="Great Little People es el método de inglés para niños de 1-7 años basado en inmersión total, juego y tecnología. Descubre cómo funciona y sus resultados."
        keywords="great little people, metodología inglés infantil, great little people opiniones, inglés niños método"
        canonical="/blog/great-little-people-metodologia"
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
                alt="Clase Great Little People de inglés infantil"
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
                  { label: 'Great Little People' }
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
                  Great Little People: El Método de Inglés para los Más Pequeños
                </h1>
                <div className="w-16 h-0.5 bg-brand-red mb-6 animate-hero-fade-up animation-delay-150"></div>
                <p className="font-display text-lg md:text-xl text-white/80 font-light leading-relaxed max-w-3xl animate-hero-fade-up animation-delay-200">
                  Descubre el método de inmersión total para niños de 1 a 7 años que transforma el inglés en el idioma natural de la clase desde el primer día.
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
                <li><a href="#que-es" className="text-purple-600 hover:text-purple-700 transition-colors">→ Qué es Great Little People</a></li>
                <li><a href="#pilares" className="text-purple-600 hover:text-purple-700 transition-colors">→ Los pilares del método</a></li>
                <li><a href="#clase-tipica" className="text-purple-600 hover:text-purple-700 transition-colors">→ Cómo es una clase típica</a></li>
                <li><a href="#edades" className="text-purple-600 hover:text-purple-700 transition-colors">→ Para qué edades</a></li>
                <li><a href="#resultados" className="text-purple-600 hover:text-purple-700 transition-colors">→ Resultados y opiniones</a></li>
                <li><a href="#faq" className="text-purple-600 hover:text-purple-700 transition-colors">→ Preguntas Frecuentes</a></li>
              </ul>
            </div>

            {/* Introduction */}
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              <a href="https://www.greatlittlepeople.com/" target="_blank" rel="noopener noreferrer" className="text-purple-600 hover:underline font-medium">Great Little People</a> es mucho más que un método de inglés: es un enfoque completo de adquisición natural del lenguaje para los primeros años de vida. Diseñado para niños de 1 a 7 años, combina la neurociencia del aprendizaje infantil con el rigor curricular respaldado por Cambridge Assessment English.
            </p>

            {/* Section 1 - Qué es */}
            <section id="que-es" className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                Qué es Great Little People
              </h2>

              <p className="text-gray-700 mb-4 leading-relaxed">
                Great Little People es un programa curricular de inglés para la primera infancia desarrollado por expertos en adquisición del lenguaje y avalado por Cambridge Assessment English. Su filosofía central es la adquisición natural: los niños aprenden inglés de la misma forma en que aprenden su lengua materna, a través de la experiencia, la interacción y la inmersión en un entorno lingüístico real.
              </p>

              <div className="grid md:grid-cols-3 gap-4 mb-6">
                <div className="bg-purple-50 rounded-xl p-5 text-center">
                  <div className="text-3xl font-bold text-purple-600 mb-2">1-7</div>
                  <p className="text-gray-700 text-sm">Años de edad para los que está diseñado el método</p>
                </div>
                <div className="bg-purple-50 rounded-xl p-5 text-center">
                  <div className="text-3xl font-bold text-purple-600 mb-2">100%</div>
                  <p className="text-gray-700 text-sm">Inmersión en inglés durante toda la sesión</p>
                </div>
                <div className="bg-purple-50 rounded-xl p-5 text-center">
                  <div className="text-3xl font-bold text-purple-600 mb-2">Máx. 6</div>
                  <p className="text-gray-700 text-sm">Niños por grupo para atención individualizada</p>
                </div>
              </div>

              <div className="bg-purple-50 border-l-4 border-purple-500 p-6 rounded-r-xl">
                <p className="text-gray-800 font-medium">
                  <strong>Impulse English Academy</strong> es centro oficial Great Little People en Madrid. Nuestros profesores están formados específicamente en el método y actualizados regularmente por el equipo de Great Little People.
                </p>
              </div>
            </section>

            {/* Section 2 - Pilares */}
            <section id="pilares" className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                Los Pilares del Método Great Little People
              </h2>

              <div className="space-y-4 mb-8">
                <div className="bg-white border border-gray-200 rounded-xl p-6">
                  <h3 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
                    <Target className="w-5 h-5 text-purple-600" />
                    Juego dirigido
                  </h3>
                  <p className="text-gray-700">Cada actividad tiene un objetivo lingüístico concreto, pero el niño lo vive como puro juego. El profesor diseña la sesión para que cada momento de diversión sea también un momento de adquisición lingüística.</p>
                </div>

                <div className="bg-white border border-gray-200 rounded-xl p-6">
                  <h3 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
                    <Target className="w-5 h-5 text-purple-600" />
                    Música integrada
                  </h3>
                  <p className="text-gray-700">Las canciones no son un complemento: son el vehículo principal de adquisición de vocabulario y estructuras. La memoria musical del niño retiene las canciones durante años, creando un banco léxico de acceso rápido.</p>
                </div>

                <div className="bg-white border border-gray-200 rounded-xl p-6">
                  <h3 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
                    <Target className="w-5 h-5 text-purple-600" />
                    Narrativa y cuentos
                  </h3>
                  <p className="text-gray-700">Los cuentos en inglés, contados con expresividad y apoyos visuales, desarrollan la comprensión auditiva y la predicción lingüística. Los niños aprenden a anticipar vocabulario y estructuras por el contexto de la historia.</p>
                </div>

                <div className="bg-white border border-gray-200 rounded-xl p-6">
                  <h3 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
                    <Target className="w-5 h-5 text-purple-600" />
                    Rutinas en inglés
                  </h3>
                  <p className="text-gray-700">Cada clase empieza y termina con las mismas rutinas en inglés: saludos, el tiempo, el nombre de cada niño. Estas rutinas predecibles dan seguridad al niño y crean automatismos lingüísticos sólidos.</p>
                </div>

                <div className="bg-white border border-gray-200 rounded-xl p-6">
                  <h3 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
                    <Target className="w-5 h-5 text-purple-600" />
                    Grupos ultrareducidos
                  </h3>
                  <p className="text-gray-700">Máximo 6 niños por grupo garantiza que cada niño recibe atención individual, que el profesor puede ajustar el ritmo a cada pequeño y que la interacción entre niños sea de calidad, no caótica.</p>
                </div>
              </div>
            </section>

            {/* Section 3 - Clase típica */}
            <section id="clase-tipica" className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                Cómo es una Clase Típica Great Little People
              </h2>

              <p className="text-gray-700 mb-6 leading-relaxed">
                Cada sesión de 45-60 minutos sigue una estructura diseñada para mantener la atención del niño y maximizar el input lingüístico:
              </p>

              <div className="space-y-3 mb-8">
                {[
                  { step: '1', title: 'Ritual de apertura (5 min)', desc: 'Saludo en inglés, canción de bienvenida, repaso del tiempo y el día. El niño entra en "modo inglés" desde el primer segundo.' },
                  { step: '2', title: 'Actividad temática (15 min)', desc: 'Juego, manualidad o actividad centrada en el vocabulario y estructuras del tema de la semana. El inglés es el único idioma de instrucción.' },
                  { step: '3', title: 'Canción del tema (8 min)', desc: 'Canción específicamente seleccionada para reforzar el vocabulario del día. Movimiento, repetición y diversión en un solo bloque.' },
                  { step: '4', title: 'Cuento en inglés (10 min)', desc: 'Narración de un cuento con apoyos visuales. Vocabulario en contexto, comprensión global, anticipación y expresividad.' },
                  { step: '5', title: 'Actividad creativa (10 min)', desc: 'Manualidad, dibujo o juego simbólico en inglés. El niño produce en inglés de forma natural para comunicar su creación.' },
                  { step: '6', title: 'Ritual de cierre (5 min)', desc: 'Canción de despedida, repaso del vocabulario del día y refuerzo positivo. El niño se va con la sensación de logro.' }
                ].map((item) => (
                  <div key={item.step} className="flex gap-4 bg-white border border-gray-200 rounded-xl p-5">
                    <div className="bg-purple-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold flex-shrink-0">
                      {item.step}
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 mb-1">{item.title}</h3>
                      <p className="text-gray-700 text-sm">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Section 4 - Edades */}
            <section id="edades" className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                Niveles por Edad
              </h2>

              <div className="overflow-x-auto mb-8">
                <table className="w-full border-collapse bg-white rounded-xl overflow-hidden shadow-lg">
                  <thead>
                    <tr className="bg-gradient-to-r from-purple-600 to-purple-800 text-white">
                      <th className="text-left p-4 font-semibold">Nivel</th>
                      <th className="text-left p-4 font-semibold">Edad</th>
                      <th className="text-left p-4 font-semibold">Enfoque principal</th>
                      <th className="text-left p-4 font-semibold">Objetivo</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="bg-gray-50">
                      <td className="p-4 font-medium text-gray-900">Babies</td>
                      <td className="p-4 text-gray-700">1-2 años</td>
                      <td className="p-4 text-gray-700">Música + movimiento</td>
                      <td className="p-4 text-gray-700">Exposición y relación positiva</td>
                    </tr>
                    <tr className="bg-white">
                      <td className="p-4 font-medium text-gray-900">Toddlers</td>
                      <td className="p-4 text-gray-700">2-3 años</td>
                      <td className="p-4 text-gray-700">Canciones + rutinas + TPR</td>
                      <td className="p-4 text-gray-700">Primeras palabras activas</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="p-4 font-medium text-gray-900">Little People</td>
                      <td className="p-4 text-gray-700">3-5 años</td>
                      <td className="p-4 text-gray-700">Cuentos + juego + vocabulario</td>
                      <td className="p-4 text-gray-700">Frases y comprensión oral</td>
                    </tr>
                    <tr className="bg-white">
                      <td className="p-4 font-medium text-gray-900">Big Little People</td>
                      <td className="p-4 text-gray-700">5-7 años</td>
                      <td className="p-4 text-gray-700">Producción oral + lectura inicial</td>
                      <td className="p-4 text-gray-700">Nivel A1-A2, listo para Cambridge</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* Section 5 - Resultados */}
            <section id="resultados" className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                Resultados y Opiniones de los Padres
              </h2>

              <p className="text-gray-700 mb-6 leading-relaxed">
                Los resultados de Great Little People son consistentes y medibles. Estos son los hitos típicos que experimentan los niños en Impulse English Academy:
              </p>

              <div className="space-y-4 mb-8">
                <div className="bg-white border border-gray-200 rounded-xl p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="bg-purple-100 rounded-full p-2">
                      <Award className="w-5 h-5 text-purple-600" />
                    </div>
                    <h3 className="font-bold text-gray-900">8-12 semanas</h3>
                  </div>
                  <p className="text-gray-700">Los padres empiezan a notar las primeras palabras en inglés en casa: "more", "again", "hello", "bye". El niño replica canciones y saludos de clase de forma espontánea.</p>
                </div>

                <div className="bg-white border border-gray-200 rounded-xl p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="bg-purple-100 rounded-full p-2">
                      <Award className="w-5 h-5 text-purple-600" />
                    </div>
                    <h3 className="font-bold text-gray-900">6-8 meses</h3>
                  </div>
                  <p className="text-gray-700">Vocabulario activo de 100-200 palabras. El niño comprende instrucciones simples en inglés y empieza a producir frases cortas. Entiende los cuentos sin traducción.</p>
                </div>

                <div className="bg-white border border-gray-200 rounded-xl p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="bg-purple-100 rounded-full p-2">
                      <Award className="w-5 h-5 text-purple-600" />
                    </div>
                    <h3 className="font-bold text-gray-900">Al terminar Big Little People (6-7 años)</h3>
                  </div>
                  <p className="text-gray-700">Nivel A1-A2 del MCER. El niño puede mantener conversaciones simples, cuenta historias en inglés, lee palabras sueltas y está listo para empezar la preparación de los exámenes Young Learners de Cambridge.</p>
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
              <h3 className="text-2xl font-bold mb-4">Somos centro oficial Great Little People en Madrid</h3>
              <p className="text-purple-100 mb-6 max-w-2xl mx-auto">
                Primera sesión gratuita. Ven a conocer cómo funciona el método en la práctica con tu hijo.
              </p>
              <Link
                to="/cursos-ingles/infantil"
                className="inline-flex items-center gap-2 bg-white text-purple-600 px-8 py-4 rounded-xl font-semibold hover:bg-purple-50 transition-colors"
              >
                Reservar sesión gratuita
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
                  <p className="text-gray-600 text-sm">Toda la información sobre nuestras clases para los más pequeños.</p>
                </Link>
                <Link to="/blog/mejor-metodo-ingles-ninos" className="group bg-gray-50 rounded-xl p-6 hover:bg-purple-50 transition-colors">
                  <h3 className="font-semibold text-gray-900 group-hover:text-purple-600 transition-colors mb-2">
                    Mejor Método Inglés Niños
                  </h3>
                  <p className="text-gray-600 text-sm">Comparativa de los mejores métodos para niños.</p>
                </Link>
                <Link to="/metodologia" className="group bg-gray-50 rounded-xl p-6 hover:bg-purple-50 transition-colors">
                  <h3 className="font-semibold text-gray-900 group-hover:text-purple-600 transition-colors mb-2">
                    Nuestra Metodología
                  </h3>
                  <p className="text-gray-600 text-sm">El enfoque completo de Impulse English Academy.</p>
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
              → Más información sobre Great Little People - sitio oficial del método
            </a>
          </div>
        </section>

        <Footer />
      </div>

      <SchemaMarkup schema={articleSchema} />
    </>
  );
}
