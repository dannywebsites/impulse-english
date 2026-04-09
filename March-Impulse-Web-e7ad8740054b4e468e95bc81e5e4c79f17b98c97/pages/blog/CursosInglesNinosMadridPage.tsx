import React, { useState, useEffect } from 'react';
import { Baby, Clock, ChevronDown, ChevronUp, CheckCircle, Star, Euro, Gamepad2, BookOpen, Users, Sparkles } from 'lucide-react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import LeadForm from '../../components/LeadForm';
import { generateArticleSchema, businessInfo } from '../../utils/schemaData';
import type { FAQItem } from '../../utils/schemaData';
import Breadcrumb from '../../components/Breadcrumb';
import { blogImages } from '@/utils/images';
export const articleSchema = generateArticleSchema({
  headline: "Cursos de Inglés para Niños en Madrid: Guía Completa 2026",
  description: "Guía completa de cursos de inglés para niños en Madrid. Metodologías por edad, preparación Cambridge Young Learners y consejos para elegir la mejor academia.",
  url: `${businessInfo.url}/academias-ingles-madrid/ninos`,
  image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=1600",
  datePublished: "2025-01-01",
  dateModified: "2025-01-01"
});

export const faqs: FAQItem[] = [
    {
      question: "¿A qué edad deben comenzar los niños cursos de inglés en Madrid?",
      answer: "La edad óptima para iniciar cursos estructurados es 3-4 años, cuando los niños han consolidado suficiente lenguaje materno. Programas infantiles de 2-5 años utilizan metodologías lúdicas con sesiones de 45-50 minutos semanales, priorizando exposición natural mediante canciones, juegos y cuentos. El cerebro retiene fonética nativa con mayor facilidad antes de los 7 años, haciendo este período ideal para iniciar."
    }

  ,
    {
      question: "¿Cuántas horas semanales necesitan los niños para progresar efectivamente?",
      answer: "Para avance consistente, los niños de 6-12 años requieren mínimo 2 horas semanales de clase presencial (dos sesiones de 60 minutos) más 15-20 minutos diarios de exposición en casa mediante apps, vídeos o lectura. Este formato permite completar un nivel del Marco Común Europeo cada 9-12 meses. Programas con solo 1 hora semanal alargan el progreso a 18-24 meses por nivel, reduciendo motivación y efectividad."
    },
    {
      question: "¿Qué diferencia hay entre cursos extensivos e intensivos para niños?",
      answer: "Los cursos extensivos operan durante el año académico con 2-3 sesiones semanales de 60 minutos, diseñados para progreso sostenido y consolidación profunda. Los intensivos concentran 10-15 horas semanales en períodos vacacionales (verano, Navidad), ideales para avance rápido o preparación de exámenes Cambridge. Los intensivos cuestan 280-450€ por dos semanas, mientras extensivos promedian 70-85€ mensuales durante 9 meses en Madrid."
    },
    {
      question: "¿Cuándo pueden obtener certificaciones Cambridge los niños en Madrid?",
      answer: "Los niños pueden certificar desde los 7 años con Cambridge English Young Learners (Starters, Movers, Flyers), progresando a KET/PET (A2/B1) desde los 10-12 años. Las academias preparadoras ofrecen cursos específicos de 3-4 meses previos al examen, con tasas de aprobación del 90-100% cuando los estudiantes cumplen requisitos de nivel previo. Los exámenes se realizan 3-4 veces anuales en centros autorizados, con tasas de 70-95€ según nivel."
    },
    {
      question: "¿Qué hacer si mi hijo muestra resistencia a las clases de inglés?",
      answer: "La resistencia inicial es común en 30-40% de los niños, generalmente por ansiedad ante lo desconocido o metodologías poco lúdicas. Soluciona esto eligiendo programas con clases trial gratuitas, grupos homogéneos de edad (máximo 2 años de diferencia), y metodología 80% juego-actividades versus 20% trabajo formal. Comunica la situación al profesor para adaptación individualizada. Si persiste tras 4-6 sesiones, evalúa cambiar de grupo o academia con enfoque más dinámico."
    }
  ];

export default function CursosInglesNinosMadridPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [openFaq, setOpenFaq] = useState<number | null>(null);


  const ageGroups = [
    {
      age: "2-5 años",
      name: "Early Years",
      methodology: "Great Little People",
      focus: "Inmersión lúdica",
      activities: ["Canciones y rimas", "Juegos sensoriales", "Cuentos interactivos", "Manualidades en inglés"],
      hours: "2-3h/semana",
      color: "pink"
    },
    {
      age: "6-8 años",
      name: "Kids",
      methodology: "Communicative + Phonics",
      focus: "Lectura y comunicación básica",
      activities: ["Phonics (método fonético)", "Lectura graduada", "Role-plays simples", "Proyectos creativos"],
      hours: "3-4h/semana",
      color: "orange"
    },
    {
      age: "9-12 años",
      name: "Juniors",
      methodology: "Task-Based Learning",
      focus: "Preparación Cambridge YLE/KET",
      activities: ["Proyectos por equipos", "Preparación exámenes", "Debates adaptados", "Tecnología educativa"],
      hours: "4-5h/semana",
      color: "blue"
    },
    {
      age: "13-17 años",
      name: "Teens",
      methodology: "Cambridge Prep + Conversation",
      focus: "B1/B2 y expresión fluida",
      activities: ["Preparación PET/First", "Debates y presentaciones", "Contenido multimedia", "Inglés académico"],
      hours: "4-6h/semana",
      color: "purple"
    }
  ];

  const methodologies = [
    {
      name: "Great Little People",
      ages: "2-6 años",
      description: "Metodología exclusiva de inmersión para los más pequeños. Aprendizaje 100% en inglés a través del juego, música y actividades multisensoriales.",
      pros: ["Aprendizaje natural sin traducción", "Desarrollo de oído musical", "Asociación positiva con el idioma"],
      available: true
    },
    {
      name: "Phonics",
      ages: "4-8 años",
      description: "Sistema de aprendizaje de lectura basado en sonidos. Los niños aprenden a decodificar palabras asociando letras con sonidos.",
      pros: ["Base sólida para lectura", "Mejora pronunciación", "Método probado en UK"],
      available: true
    },
    {
      name: "Cambridge Young Learners",
      ages: "7-12 años",
      description: "Preparación específica para exámenes Starters, Movers y Flyers. Motiva a los niños con objetivos concretos y certificados oficiales.",
      pros: ["Certificación internacional", "Sin suspensos (escudos)", "Motivación por logros"],
      available: true
    },
    {
      name: "CLIL (Content and Language)",
      ages: "8-16 años",
      description: "Aprender otras materias (ciencias, arte, historia) en inglés. Integra contenido curricular con adquisición del idioma.",
      pros: ["Aprendizaje contextualizado", "Preparación para colegios bilingües", "Mayor retención"],
      available: false
    }
  ];

  return (
    <>
<Navbar />

      {/* Hero Section */}
      <header className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden">
        <div className="absolute inset-0">
          <img src={blogImages.mainClassroom.url} alt="Aula principal academia inglés Impulse English Academy Madrid" className="w-full h-full object-cover" loading="eager" />
          <div className="absolute inset-0 bg-gradient-to-br from-accent-blue/95 via-accent-blue/85 to-[#0a3560]/75"></div>
        </div>
        <div className="absolute inset-0 hero-grain opacity-[0.03]"></div>
        <div className="absolute -top-32 -right-32 w-[420px] h-[420px] rounded-full bg-brand-red/[0.04]"></div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb
          items={[
          { label: 'Blog', href: '/blog' },
          { label: 'Cursos Niños Madrid' }
          ]}
          variant="light"
          />

          <div className="mt-12 md:mt-16">
            <div className="flex items-center gap-4 mb-6 animate-hero-fade-up">
              <div className="w-8 h-px bg-white/40"></div>
              <span className="font-display text-white/70 text-xs uppercase tracking-[0.2em]">
                Inglés para Niños
              </span>
            </div>

            <h1 className="font-serif text-3xl md:text-5xl lg:text-6xl text-white tracking-tight leading-[1.1] mb-6 animate-hero-fade-up animation-delay-100">
              Cursos de Inglés para Niños en Madrid: Metodologías y Academias 2026
            </h1>
            <div className="w-16 h-0.5 bg-brand-red mb-6 animate-hero-fade-up animation-delay-150"></div>
            <p className="font-display text-lg md:text-xl text-white/80 font-light leading-relaxed max-w-3xl animate-hero-fade-up animation-delay-200">
              Guía completa de metodologías, edades y academias para que tus hijos aprendan inglés de forma natural y divertida.
            </p>
          </div>
        </div>
      </header>

      {/* Age Groups Quick View */}
      <section className="py-8 bg-pink-50">
        <div className="container mx-auto px-6 md:px-12">
          <div className="max-w-4xl">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {ageGroups.map((group, index) => (
                <div key={index} className="bg-white rounded-xl p-4 text-center">
                  <p className={`text-2xl font-bold text-${group.color}-600`}>{group.age}</p>
                  <p className="text-sm font-medium text-zinc-900">{group.name}</p>
                  <p className="text-xs text-zinc-500">{group.hours}</p>
                </div>
              ))}
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
                El inglés se ha convertido en una habilidad esencial para el futuro de nuestros hijos. Madrid ofrece
                una amplia variedad de academias y metodologías adaptadas a cada edad, desde programas de inmersión
                para bebés hasta preparación de <a href="/examenes-cambridge/" className="text-pink-600 hover:underline">exámenes Cambridge</a> para adolescentes. Esta guía te ayuda a entender
                las diferentes opciones y elegir la más adecuada para tu hijo. Si buscas <a href="/cursos-ingles/infantil/" className="text-pink-600 hover:underline">cursos infantil</a> o academias en zonas como <a href="/academia-ingles-barrio-del-pilar/" className="text-pink-600 hover:underline">Barrio del Pilar</a>, <a href="/academia-ingles-tetuan/" className="text-pink-600 hover:underline">Tetuán</a> o <a href="/academia-ingles-plaza-castilla/" className="text-pink-600 hover:underline">Plaza Castilla</a>, disponemos de centros en el norte de Madrid.
              </p>
            </div>

            {/* Impulse Featured */}
            <section className="mb-12">
              <div className="bg-gradient-to-r from-pink-500 to-rose-500 rounded-2xl p-8 text-white">
                <div className="flex items-center gap-2 mb-4">
                  <Sparkles className="w-6 h-6 text-yellow-300" />
                  <span className="font-bold">Método exclusivo Great Little People</span>
                </div>

                <h3 className="text-2xl font-bold mb-4">Impulse English Academy - Inglés para Niños</h3>

                <p className="text-white/90 mb-4">
                  Somos centro oficial del método <strong>Great Little People</strong>, diseñado específicamente para
                  que los niños de 2 a 6 años aprendan inglés de forma natural, como si fuera su lengua materna. Ubicados <a href="/academia-ingles-la-vaguada/" className="text-white underline hover:text-pink-200">junto a La Vaguada</a> en <a href="/academia-ingles-barrio-del-pilar/" className="text-white underline hover:text-pink-200">nuestra academia en Barrio del Pilar</a>.
                </p>

                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <h4 className="font-bold mb-3">Nuestros programas:</h4>
                    <ul className="space-y-2 text-sm">
                      {[
                        "Great Little People (2-6 años)",
                        "Kids English (6-9 años)",
                        "Junior Cambridge (9-12 años)",
                        "Teen Preparation (13-17 años)"
                      ].map((item, i) => (
                        <li key={i} className="flex items-center gap-2">
                          <CheckCircle className="w-4 h-4" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold mb-3">Por qué elegirnos:</h4>
                    <ul className="space-y-2 text-sm">
                      {[
                        "Grupos de máximo 8 niños",
                        "Profesores cualificados especializados en infantil",
                        "Metodología 100% inmersiva",
                        "Seguimiento personalizado a padres",
                        "Preparación Cambridge Young Learners"
                      ].map((item, i) => (
                        <li key={i} className="flex items-center gap-2">
                          <CheckCircle className="w-4 h-4" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                </div>

                <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-6 border-t border-white/20">
                  <div className="flex items-center gap-2">
                    <Euro className="w-5 h-5" />
                    <span className="text-lg">Precios competitivos para todas las edades</span>
                  </div>
                  <a
              href="/contacto/"
                    className="bg-white text-pink-600 font-bold py-3 px-8 rounded-lg hover:bg-zinc-100 transition-colors"
                  >
                    Reservar clase de prueba
                  </a>
                </div>

              </div>
            </section>

            {/* Age Groups Detailed */}
            <section className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-zinc-900 mb-6">
                Programas por edad: ¿Qué necesita tu hijo?
              </h2>

              <div className="space-y-6">
                {ageGroups.map((group, index) => (
                  <div key={index} className={`bg-${group.color}-50 rounded-xl p-6 border-l-4 border-${group.color}-400`}>
                    <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-4">
                      <div>
                        <h3 className="text-xl font-bold text-zinc-900">{group.name} ({group.age})</h3>
                        <p className="text-sm text-zinc-500">{group.methodology}</p>
                      </div>
                      <div className="text-right">
                        <p className={`font-bold text-${group.color}-600`}>{group.hours}</p>
                        <p className="text-xs text-zinc-500">recomendadas</p>
                      </div>

                    </div>
                    <p className={`font-medium text-${group.color}-700 mb-3`}>{group.focus}</p>
                    <div className="flex flex-wrap gap-2">
                      {group.activities.map((activity, i) => (
                        <span key={i} className="bg-white px-3 py-1 rounded-full text-sm text-zinc-600">
                          {activity}
                        </span>
                      ))}
                    </div>

                  </div>
                ))}
              </div>
            </section>

            {/* Methodologies */}
            <section className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-zinc-900 mb-6">
                Metodologías de enseñanza para niños
              </h2>

              <div className="space-y-4">
                {methodologies.map((method, index) => (
                  <div key={index} className="bg-zinc-50 rounded-xl p-6">
                    <div className="flex items-start justify-between gap-4 mb-3">
                      <div>
                        <h3 className="font-bold text-zinc-900 flex items-center gap-2">
                          {method.name}
                          {method.available && (
                            <span className="bg-green-100 text-green-700 text-xs px-2 py-0.5 rounded-full">
                              Disponible en Impulse
                            </span>
                          )}
                        </h3>
                        <p className="text-sm text-pink-600">{method.ages}</p>
                      </div>

                    </div>
                    <p className="text-zinc-600 text-sm mb-3">{method.description}</p>
                    <ul className="flex flex-wrap gap-2">
                      {method.pros.map((pro, i) => (
                        <li key={i} className="flex items-center gap-1 text-xs text-zinc-500 bg-white px-2 py-1 rounded-full">
                          <CheckCircle className="w-3 h-3 text-green-500" />
                          {pro}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </section>

            {/* What to Look For */}
            <section className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-zinc-900 mb-6">
                Qué buscar en una academia de inglés para niños
              </h2>

              <div className="grid md:grid-cols-2 gap-4 mb-6">
                <div className="bg-green-50 rounded-xl p-5">
                  <h4 className="font-bold text-zinc-900 mb-3 flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    Imprescindible
                  </h4>
                  <ul className="space-y-2 text-sm text-zinc-600">
                    <li>• Grupos reducidos (máx. 8-10 niños)</li>
                    <li>• Profesores con experiencia infantil</li>
                    <li>• Metodología adaptada a la edad</li>
                    <li>• Comunicación regular con padres</li>
                    <li>• Ambiente seguro y motivador</li>
                  </ul>
                </div>
                <div className="bg-amber-50 rounded-xl p-5">
                  <h4 className="font-bold text-zinc-900 mb-3 flex items-center gap-2">
                    <Star className="w-5 h-5 text-amber-500" />
                    Muy recomendable
                  </h4>
                  <ul className="space-y-2 text-sm text-zinc-600">
                    <li>• Profesores cualificados y certificados</li>
                    <li>• Material didáctico actualizado</li>
                    <li>• Tecnología educativa</li>
                    <li>• Preparación exámenes Cambridge YLE</li>
                    <li>• Actividades extraescolares en inglés</li>
                  </ul>
                </div>

              </div>

              <div className="bg-red-50 rounded-xl p-5">
                <h4 className="font-bold text-zinc-900 mb-3 flex items-center gap-2">
                  <span className="text-red-500">⚠</span>
                  Señales de alarma
                </h4>
                <ul className="space-y-2 text-sm text-zinc-600">
                  <li>• Grupos de más de 12 niños</li>
                  <li>• Metodología basada solo en gramática y traducción</li>
                  <li>• No permiten ver una clase de prueba</li>
                  <li>• Profesores sin formación específica infantil</li>
                  <li>• Precios muy por debajo del mercado (posible baja calidad)</li>
                </ul>
              </div>
            </section>

            {/* Price Guide */}
            <section className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-zinc-900 mb-6">
                Guía de precios en Madrid
              </h2>

              <div className="bg-zinc-50 rounded-xl overflow-hidden mb-6">
                <table className="w-full text-sm">
                  <thead className="bg-zinc-100">
                    <tr>
                      <th className="text-left p-4 font-bold">Tipo de academia</th>
                      <th className="text-center p-4 font-bold">Precio/mes</th>
                      <th className="text-left p-4 font-bold">Características</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="p-4">Franquicias premium</td>
                      <td className="p-4 text-center font-bold">150-250€</td>
                      <td className="p-4 text-zinc-500">Método propio, instalaciones modernas</td>
                    </tr>
                    <tr className="bg-pink-50">
                      <td className="p-4 font-bold text-pink-700"><a href="/cursos-ingles/infantil/" className="text-pink-700 hover:underline">Impulse English Academy</a></td>
                      <td className="p-4 text-center font-bold text-pink-700">Desde 64€</td>
                      <td className="p-4 text-pink-600">Great Little People, grupos reducidos, <a href="/academia-ingles-penagrande/" className="text-pink-700 hover:underline">Peñagrande</a></td>
                    </tr>
                    <tr>
                      <td className="p-4">Academias de barrio</td>
                      <td className="p-4 text-center">60-100€</td>
                      <td className="p-4 text-zinc-500">Calidad variable, cercanía</td>
                    </tr>
                    <tr>
                      <td className="p-4">Clases particulares</td>
                      <td className="p-4 text-center">120-200€</td>
                      <td className="p-4 text-zinc-500">Atención 100% personalizada</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* FAQ Section */}
            <section className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-zinc-900 mb-6">
                Preguntas Frecuentes
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
              <div className="bg-gradient-to-r from-pink-500 to-rose-500 rounded-2xl p-8 text-white">
                <h2 className="text-2xl font-bold mb-4">Conclusión</h2>
                <p className="text-white/90 mb-6">
                  Elegir la academia de <a href="/cursos-ingles/infantil/" className="text-white underline hover:text-pink-200">inglés para niños</a> adecuada para tu hijo es una inversión en su futuro. Busca una
                  metodología adaptada a su edad, grupos reducidos y profesores con experiencia infantil. Lo más
                  importante es que tu hijo asocie el inglés con experiencias positivas y divertidas. Para adolescentes, considera la preparación para <a href="/examenes-cambridge/" className="text-white underline hover:text-pink-200">exámenes Cambridge</a> oficiales.
                </p>
                <p className="text-white/90">
                  En <strong>Impulse English Academy</strong>, con sede <a href="/academia-ingles-la-vaguada/" className="text-white underline hover:text-pink-200">junto a La Vaguada</a> en <a href="/academia-ingles-la-ventilla/" className="text-white underline hover:text-pink-200">La Ventilla</a>, ofrecemos el método <strong>Great Little People</strong>
                  para los más pequeños, con preparación Cambridge para todas las edades. ¡Reserva una clase de prueba gratuita!
                </p>
              </div>
            </section>

            {/* CTA */}
            <section className="mb-12">
              <div className="bg-zinc-900 rounded-2xl p-8">
                <div className="flex flex-col md:flex-row items-center gap-6">
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-white mb-2">
                      ¿Quieres que tu hijo aprenda inglés?
                    </h3>
                    <p className="text-zinc-400">
                      Reserva una clase de prueba gratuita y descubre nuestra metodología.
                    </p>
                  </div>
                  <a
              href="/contacto/"
                    className="bg-pink-500 hover:bg-pink-600 text-white font-bold py-3 px-8 rounded-lg transition-colors whitespace-nowrap"
                  >
                    Clase de prueba gratis
                  </a>
                </div>

              </div>
            </section>

            {/* Related Articles */}
            <section>
              <h3 className="text-xl font-bold text-zinc-900 mb-4">Artículos relacionados</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <a href="/academias-ingles-madrid/" className="bg-zinc-50 rounded-xl p-4 hover:bg-zinc-100 transition-colors">
                  <span className="text-xs font-bold text-pink-600">MADRID</span>
                  <h4 className="font-bold text-zinc-900 mt-1">Academias Baratas de Inglés en Madrid</h4>
                </a>
                <a href="/examenes-cambridge/" className="bg-zinc-50 rounded-xl p-4 hover:bg-zinc-100 transition-colors">
                  <span className="text-xs font-bold text-pink-600">CAMBRIDGE</span>
                  <h4 className="font-bold text-zinc-900 mt-1">Guía Completa de Exámenes Cambridge</h4>
                </a>
                <a href="/cursos-ingles/infantil/" className="bg-zinc-50 rounded-xl p-4 hover:bg-zinc-100 transition-colors">
                  <span className="text-xs font-bold text-pink-600">CURSOS</span>
                  <h4 className="font-bold text-zinc-900 mt-1">Curso de Inglés Infantil (2-5 años)</h4>
                </a>
                <a href="/cursos-ingles/primaria/" className="bg-zinc-50 rounded-xl p-4 hover:bg-zinc-100 transition-colors">
                  <span className="text-xs font-bold text-pink-600">CURSOS</span>
                  <h4 className="font-bold text-zinc-900 mt-1">Curso de Inglés Primaria (6-12 años)</h4>
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
            href="https://www.britishcouncil.es/ingles/ninos-adolescentes"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-pink-600 hover:underline"
          >
            → Más información en British Council - Inglés para niños
          </a>
        </div>
      </section>

      <Footer />

      {/* Schema.org Structured Data */}
</>
  );
}
