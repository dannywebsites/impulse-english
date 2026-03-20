import React, { useState, useEffect } from 'react';
import { ChevronRight, Clock, Calendar, ChevronDown, ChevronUp, BookOpen, CheckCircle, Target, ArrowRight, Award } from 'lucide-react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import LeadForm from '../../components/LeadForm';
import Breadcrumb from '../../components/Breadcrumb';
import { generateArticleSchema, businessInfo } from '../../utils/schemaData';

export const articleSchema = generateArticleSchema({
    headline: '¿Por Qué Mi Hijo No Avanza en Inglés? Causas y Soluciones',
    description: 'Si tu hijo no avanza en inglés puede ser por método inadecuado, falta de exposición o desmotivación. Descubre 7 causas y soluciones para cada una.',
    url: `${businessInfo.url}/blog/hijo-no-avanza-ingles`,
    datePublished: '2025-03-01'
  });

export const faqItems = [
    {
      question: '¿Es normal que un niño tarde en mostrar progreso en inglés?',
      answer: 'Los primeros 3-6 meses son de "periodo silencioso": el niño absorbe pero no produce aún. Es normal y necesario. Si a los 6 meses no hay comprensión básica, entonces hay que revisar el método.'
    }

  ,
    {
      question: '¿Puede mi hijo tener dificultades de aprendizaje que afecten al inglés?',
      answer: 'Posiblemente. Dislexia, TDAH y otras dificultades afectan el aprendizaje de idiomas. Un profesor especializado puede adaptar el método. Si los problemas con el inglés coinciden con dificultades en español, busca evaluación.'
    },
    {
      question: '¿Cambiar de academia ayudará?',
      answer: 'Depende de la causa. Si el problema es el método o el profesor, sí puede ayudar. Si es falta de práctica fuera del aula, el cambio de academia no resolverá nada sin trabajo en casa.'
    },
    {
      question: '¿Cuántas horas a la semana necesita un niño para avanzar?',
      answer: 'Mínimo 3-4 horas semanales de inglés: 2 en academia + 1-2 de exposición natural (series, juegos, lectura). Solo la academia, sin exposición complementaria, limita el progreso.'
    }
  ];

export default function HijoNoAvanzaInglesPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [openFaq, setOpenFaq] = useState<number | null>(null);


  const causas = [
    {
      num: 1,
      title: 'Método inadecuado para su edad',
      desc: 'Un método diseñado para adultos aplicado a niños, o un enfoque demasiado gramatical con niños pequeños, puede bloquear el progreso por completo.',
      solucion: 'Cambiar a una metodología adaptada a la edad: inmersión y juego para menores de 8 años, comunicativo con elementos lúdicos para 8-12 años.'
    },
    {
      num: 2,
      title: 'Exposición insuficiente fuera del aula',
      desc: '2 horas semanales de clase sin exposición complementaria son insuficientes para avanzar de forma significativa. El cerebro necesita input constante.',
      solucion: 'Añadir 1-2 horas semanales de exposición pasiva: series en inglés, música, juegos. No tiene que ser estudio formal.'
    },
    {
      num: 3,
      title: 'Nivel del grupo incorrecto',
      desc: 'Si el grupo es demasiado avanzado, el niño se frustra. Si es demasiado básico, se aburre y no progresa. El nivel óptimo debe ser ligeramente superior al actual.',
      solucion: 'Solicitar una evaluación de nivel y asegurarse de que el grupo se ajusta correctamente al nivel real del niño.'
    },
    {
      num: 4,
      title: 'Falta de motivación',
      desc: 'Sin motivación intrínseca, el aprendizaje es superficial y no se consolida. El niño puede ir a clase sin que el inglés "entre" realmente.',
      solucion: 'Identificar el interés del niño y conectarlo con el inglés. Ver la guía completa en nuestro artículo sobre cómo motivar a tu hijo.'
    },
    {
      num: 5,
      title: 'Dificultades de aprendizaje no detectadas',
      desc: 'La dislexia, el TDAH, los problemas de procesamiento auditivo u otras dificultades pueden dificultar significativamente el aprendizaje de idiomas.',
      solucion: 'Si los problemas persisten y se manifiestan también en otras áreas, busca evaluación psicopedagógica. Un profesor especializado puede adaptar el método.'
    },
    {
      num: 6,
      title: 'Asistencia irregular',
      desc: 'La regularidad es fundamental en el aprendizaje de idiomas. Faltar frecuentemente interrumpe la progresión y obliga a recuperar terreno constantemente.',
      solucion: 'Mantener una asistencia mínima del 85%. Si hay períodos de ausencia, complementar con material online para no perder el ritmo.'
    },
    {
      num: 7,
      title: 'Sin refuerzo en casa',
      desc: 'El aprendizaje en academia es la semilla; el entorno familiar es el terreno donde crece. Sin refuerzo en casa, el progreso se estanca.',
      solucion: 'Crear microhábitos diarios: 15 minutos de exposición al inglés en casa. No tiene que ser estudio: puede ser una canción, un capítulo de serie o un juego.'
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
              <img
                src="https://impulseenglish.s3.us-east-1.amazonaws.com/impulsephotos/NACHOS+photos.+/Infantil+classes.JPG"
                alt="Niño aprendiendo inglés en clase"
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
                  { label: 'Hijo No Avanza en Inglés' }
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
                  ¿Por Qué Mi Hijo No Avanza en Inglés? Causas y Soluciones
                </h1>
                <div className="w-16 h-0.5 bg-brand-red mb-6 animate-hero-fade-up animation-delay-150"></div>
                <p className="font-display text-lg md:text-xl text-white/80 font-light leading-relaxed max-w-3xl animate-hero-fade-up animation-delay-200">
                  Análisis honesto de las 7 causas más frecuentes por las que los niños se estancan en inglés y soluciones concretas para cada una.
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
                <li><a href="#causas" className="text-purple-600 hover:text-purple-700 transition-colors">→ Las 7 causas más comunes</a></li>
                <li><a href="#identificar" className="text-purple-600 hover:text-purple-700 transition-colors">→ Cómo identificar la causa</a></li>
                <li><a href="#soluciones" className="text-purple-600 hover:text-purple-700 transition-colors">→ Soluciones por causa</a></li>
                <li><a href="#cuando-cambiar" className="text-purple-600 hover:text-purple-700 transition-colors">→ Cuándo cambiar de enfoque</a></li>
                <li><a href="#apoyo-casa" className="text-purple-600 hover:text-purple-700 transition-colors">→ Apoyo desde casa</a></li>
                <li><a href="#faq" className="text-purple-600 hover:text-purple-700 transition-colors">→ Preguntas Frecuentes</a></li>
              </ul>
            </div>

            {/* Introduction */}
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              Si llevas meses viendo que tu hijo no avanza en inglés a pesar de ir regularmente a clases, el problema tiene solución. En el 90% de los casos, el estancamiento no es por falta de capacidad del niño, sino por una o varias causas identificables y solucionables. Este artículo te ayuda a diagnosticar y actuar.
            </p>

            {/* Section 1 - Las 7 causas */}
            <section id="causas" className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                Las 7 Causas Más Comunes del Estancamiento
              </h2>

              <div className="space-y-5 mb-8">
                {causas.map((causa) => (
                  <div key={causa.num} className="bg-white border border-gray-200 rounded-xl overflow-hidden">
                    <div className="bg-gradient-to-r from-purple-600 to-purple-800 text-white px-6 py-3 flex items-center gap-3">
                      <span className="text-lg font-bold">Causa {causa.num}</span>
                      <span className="text-purple-200">—</span>
                      <span className="font-medium">{causa.title}</span>
                    </div>
                    <div className="p-6">
                      <p className="text-gray-700 mb-3 text-sm leading-relaxed">{causa.desc}</p>
                      <div className="bg-purple-50 border-l-4 border-purple-500 p-3 rounded-r-lg">
                        <p className="text-gray-800 text-sm"><strong>Solución:</strong> {causa.solucion}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Section 2 - Identificar la causa */}
            <section id="identificar" className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                Cómo Identificar la Causa Real
              </h2>

              <p className="text-gray-700 mb-6 leading-relaxed">
                Antes de actuar, necesitas diagnosticar correctamente. Estas preguntas te ayudarán a identificar cuál de las 7 causas afecta más a tu hijo:
              </p>

              <div className="space-y-3 mb-8">
                {[
                  { pregunta: '¿Cuántas horas de inglés tiene a la semana en total (academia + casa)?', señal: 'Si menos de 3-4 horas: causa 2 o 7' },
                  { pregunta: '¿Le gusta ir a las clases de inglés?', señal: 'Si no le gusta: causa 1, 3 o 4' },
                  { pregunta: '¿Va a clase regularmente, con pocas ausencias?', señal: 'Si tiene muchas faltas: causa 6' },
                  { pregunta: '¿El profesor te explica en qué avanza y en qué no?', señal: 'Si no hay comunicación: puede ser causa 1 o 3' },
                  { pregunta: '¿Tiene dificultades también en otras asignaturas del colegio?', señal: 'Si sí: considerar causa 5' }
                ].map((item, i) => (
                  <div key={i} className="bg-white border border-gray-200 rounded-xl p-5">
                    <p className="text-gray-900 font-medium mb-2">{item.pregunta}</p>
                    <p className="text-purple-600 text-sm">{item.señal}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Section 3 - Cuando cambiar */}
            <section id="cuando-cambiar" className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                Cuándo Cambiar de Academia o Profesor
              </h2>

              <p className="text-gray-700 mb-4 leading-relaxed">
                Cambiar de academia no es siempre la solución, pero a veces es la correcta. Estas son las señales claras de que el cambio es necesario:
              </p>

              <div className="grid md:grid-cols-2 gap-4 mb-8">
                <div className="bg-red-50 border-l-4 border-red-400 p-5 rounded-r-xl">
                  <h3 className="font-bold text-gray-900 mb-3">Señales de que debes cambiar</h3>
                  <ul className="space-y-2 text-gray-700 text-sm">
                    <li>• El centro no te informa del progreso</li>
                    <li>• El método no se adapta a la edad del niño</li>
                    <li>• El niño lleva +6 meses sin avances visibles</li>
                    <li>• Tu hijo tiene rechazo activo hacia las clases</li>
                    <li>• Los grupos son de más de 10-12 alumnos</li>
                  </ul>
                </div>
                <div className="bg-purple-50 border-l-4 border-purple-500 p-5 rounded-r-xl">
                  <h3 className="font-bold text-gray-900 mb-3">Señales de que el problema es otro</h3>
                  <ul className="space-y-2 text-gray-700 text-sm">
                    <li>• Las clases le gustan pero no estudia en casa</li>
                    <li>• La exposición fuera de clase es mínima</li>
                    <li>• La asistencia es irregular</li>
                    <li>• El nivel del grupo es incorrecto (arriba o abajo)</li>
                    <li>• Hay dificultades en otras asignaturas</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Section 4 - Apoyo desde casa */}
            <section id="apoyo-casa" className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                Apoyo desde Casa: Lo Que los Padres Pueden Hacer
              </h2>

              <p className="text-gray-700 mb-6 leading-relaxed">
                La academia pone la estructura y el profesor. La familia pone el entorno. Estas son las acciones de mayor impacto que puedes hacer desde casa sin que sea una carga:
              </p>

              <div className="space-y-4 mb-8">
                <div className="bg-white border border-gray-200 rounded-xl p-6 flex gap-4">
                  <div className="bg-purple-100 rounded-lg p-2 flex-shrink-0 h-fit">
                    <Target className="w-5 h-5 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">15 minutos diarios de inglés pasivo</h3>
                    <p className="text-gray-700 text-sm">Una canción, un capítulo corto de una serie, un videojuego. No es estudio: es exposición. Suma 1-1,5 horas semanales sin esfuerzo aparente.</p>
                  </div>
                </div>

                <div className="bg-white border border-gray-200 rounded-xl p-6 flex gap-4">
                  <div className="bg-purple-100 rounded-lg p-2 flex-shrink-0 h-fit">
                    <Target className="w-5 h-5 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">Pide que te enseñe lo que aprendió</h3>
                    <p className="text-gray-700 text-sm">Pedirle que te explique lo de clase en inglés activa la memoria de recuperación, que es mucho más potente que la memoria de codificación. Además, se siente importante y valorado.</p>
                  </div>
                </div>

                <div className="bg-white border border-gray-200 rounded-xl p-6 flex gap-4">
                  <div className="bg-purple-100 rounded-lg p-2 flex-shrink-0 h-fit">
                    <Target className="w-5 h-5 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">Comunícate regularmente con el profesor</h3>
                    <p className="text-gray-700 text-sm">Un seguimiento trimestral con el profesor te permite detectar el estancamiento antes de que se cronifique. Pregunta específicamente en qué área no avanza y qué puedes hacer en casa para complementar.</p>
                  </div>
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
              <h3 className="text-2xl font-bold mb-4">Evaluamos el nivel de tu hijo y diseñamos un plan personalizado</h3>
              <p className="text-purple-100 mb-6 max-w-2xl mx-auto">
                Si tu hijo está estancado, contáctanos. Diagnosticamos la causa y proponemos una solución concreta sin compromiso.
              </p>
              <a
              href="/contacto"
                className="inline-flex items-center gap-2 bg-white text-purple-600 px-8 py-4 rounded-xl font-semibold hover:bg-purple-50 transition-colors"
              >
                Consulta gratuita
                <ArrowRight className="w-5 h-5" />
              </a>
            </div>

            {/* Related Articles */}
            <section className="mt-16">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Artículos Relacionados</h2>
              <div className="grid md:grid-cols-3 gap-6">
                <a href="/cursos-ingles/primaria" className="group bg-gray-50 rounded-xl p-6 hover:bg-purple-50 transition-colors">
                  <h3 className="font-semibold text-gray-900 group-hover:text-purple-600 transition-colors mb-2">
                    Cursos de Inglés Primaria
                  </h3>
                  <p className="text-gray-600 text-sm">Inglés para niños de 6 a 12 años en Madrid.</p>
                </a>
                <a href="/metodologia" className="group bg-gray-50 rounded-xl p-6 hover:bg-purple-50 transition-colors">
                  <h3 className="font-semibold text-gray-900 group-hover:text-purple-600 transition-colors mb-2">
                    Nuestra Metodología
                  </h3>
                  <p className="text-gray-600 text-sm">El enfoque que usamos para garantizar el progreso.</p>
                </a>
                <a href="/blog/motivar-hijo-ingles" className="group bg-gray-50 rounded-xl p-6 hover:bg-purple-50 transition-colors">
                  <h3 className="font-semibold text-gray-900 group-hover:text-purple-600 transition-colors mb-2">
                    Cómo Motivar a tu Hijo
                  </h3>
                  <p className="text-gray-600 text-sm">10 estrategias para que quiera aprender inglés.</p>
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
              → Recursos para padres sobre el aprendizaje de inglés - Cambridge English
            </a>
          </div>
        </section>

        <Footer />
      </div>

</>
  );
}
