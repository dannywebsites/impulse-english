import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Baby, Clock, ChevronDown, ChevronUp, CheckCircle, Star, Euro, Gamepad2, BookOpen, Users, Sparkles } from 'lucide-react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import LeadForm from '../../components/LeadForm';
import SchemaMarkup from '../../components/SchemaMarkup';
import { generateArticleSchema, businessInfo } from '../../utils/schemaData';
import Breadcrumb from '../../components/Breadcrumb';
import SEOHead from '../../components/SEOHead';

const articleSchema = generateArticleSchema({
  headline: "Cursos de Inglés para Niños en Madrid: Guía Completa 2026",
  description: "Guía completa de cursos de inglés para niños en Madrid. Metodologías por edad, preparación Cambridge Young Learners y consejos para elegir la mejor academia.",
  url: `${businessInfo.url}/academias-ingles-madrid/ninos`,
  image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=1600",
  datePublished: "2025-01-01",
  dateModified: "2025-01-01"
});

export default function CursosInglesNinosMadridPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = 'Cursos de Inglés para Niños en Madrid 2026: Metodologías | Impulse English Academy La Vaguada – Barrio del Pilar';
  }, []);

  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const faqs = [
    {
      question: "¿Extraescolares de inglés o academia?",
      answer: "Elegir entre extraescolares y academia para niños en educación infantil depende del enfoque y metodología. Las extraescolares ofrecen un aprendizaje lúdico y social que motiva el uso natural del inglés, mientras que las academias proporcionan enseñanza formal y personalizada, mejorando gramática y fluidez académica."
    },
    {
      question: "¿A qué edad pueden empezar los niños a aprender inglés?",
      answer: "Los niños pueden empezar desde los 2-3 años con metodologías adaptadas como Great Little People. A esta edad el aprendizaje es principalmente a través del juego, canciones y actividades sensoriales. Los estudios demuestran que la exposición temprana al inglés facilita la adquisición natural del idioma."
    },
    {
      question: "¿Cuántas horas semanales de inglés necesita un niño?",
      answer: "Para niños de 3-6 años, 2-3 horas semanales son suficientes para una exposición significativa. De 7-12 años, 3-4 horas semanales permiten un progreso más rápido. Lo más importante es la regularidad: mejor 30 minutos diarios que 3 horas un solo día."
    },
    {
      question: "¿Qué metodología es mejor para niños: presencial u online?",
      answer: "Para niños menores de 8 años, las clases presenciales son más efectivas por la interacción física y social. A partir de 8-9 años, las clases online pueden funcionar bien si son interactivas y en grupos reducidos. Lo ideal es combinar ambas modalidades."
    },
    {
      question: "¿Los exámenes Cambridge para niños (YLE) merecen la pena?",
      answer: "Los Young Learners (Starters, Movers, Flyers) son útiles para motivar a los niños y darles un objetivo concreto. Son exámenes diseñados para que todos los niños 'aprueben' con diferentes niveles de escudos, evitando la frustración del suspenso. Consulta nuestra guía completa de exámenes Cambridge para más información."
    },
    {
      question: "¿Cuánto cuestan las clases de inglés para niños en Madrid?",
      answer: "Los precios varían mucho: desde 50€/mes en academias de barrio hasta 200€/mes en franquicias premium. En Impulse English Academy ofrecemos cursos para niños con metodología Great Little People y grupos reducidos de máximo 8 niños a precios muy competitivos."
    }
  ];

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
      <SEOHead
        title="Cursos de Inglés para Niños en Madrid 2026: Metodologías y Academias"
        description="Guía completa de cursos de inglés para niños en Madrid. Metodologías por edad, preparación Cambridge Young Learners, precios y academias especializadas desde 2 años."
        keywords="cursos inglés niños madrid, academia inglés infantil madrid, great little people madrid, cambridge young learners, inglés niños 2-17 años, metodología inglés niños"
        canonical="/academias-ingles-madrid/ninos"
        ogType="article"
      />
      <Navbar />

      {/* Hero Section */}
      <section className="pt-24 pb-12 md:pt-32 md:pb-16 bg-gradient-to-br from-pink-500 to-rose-600">
        <div className="container mx-auto px-6 md:px-12">
          <div className="max-w-4xl">
            <Breadcrumb
              items={[
                { label: 'Blog', href: '/blogs-impulse' },
                { label: 'Cursos Niños Madrid' }
              ]}
              variant="light"
            />
            <div className="flex items-center gap-2 mb-4">
              <span className="bg-white/20 text-white px-3 py-1 rounded-full text-sm font-medium">
                Inglés para Niños
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-6">
              Cursos de Inglés para Niños en Madrid: Metodologías y Academias 2026
            </h1>
            <p className="text-xl text-white/90 font-light mb-6">
              Guía completa de metodologías, edades y academias para que tus hijos aprendan inglés de forma natural y divertida.
            </p>
            <div className="flex items-center gap-4 text-white/80 text-sm">
              <span className="flex items-center gap-1">
                <Clock className="w-4 h-4" />
                15 min de lectura
              </span>
              <span className="flex items-center gap-1">
                <Baby className="w-4 h-4" />
                2-17 años
              </span>
            </div>
          </div>
        </div>
      </section>

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
                para bebés hasta preparación de <Link to="/examenes-cambridge" className="text-pink-600 hover:underline">exámenes Cambridge</Link> para adolescentes. Esta guía te ayuda a entender
                las diferentes opciones y elegir la más adecuada para tu hijo. Si buscas <Link to="/ingles-la-vaguada/infantil" className="text-pink-600 hover:underline">cursos infantil</Link> o academias en zonas como <Link to="/academia-ingles-barrio-del-pilar" className="text-pink-600 hover:underline">Barrio del Pilar</Link>, <Link to="/academia-ingles-tetuan" className="text-pink-600 hover:underline">Tetuán</Link> o <Link to="/academia-ingles-plaza-castilla" className="text-pink-600 hover:underline">Plaza Castilla</Link>, disponemos de centros en el norte de Madrid.
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
                  que los niños de 2 a 6 años aprendan inglés de forma natural, como si fuera su lengua materna. Ubicados <Link to="/academia-ingles-la-vaguada" className="text-white underline hover:text-pink-200">junto a La Vaguada</Link> en <Link to="/academia-ingles-barrio-del-pilar" className="text-white underline hover:text-pink-200">nuestra academia en Barrio del Pilar</Link>.
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
                  <Link
                    to="/contacto"
                    className="bg-white text-pink-600 font-bold py-3 px-8 rounded-lg hover:bg-zinc-100 transition-colors"
                  >
                    Reservar clase de prueba
                  </Link>
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
                      <td className="p-4 font-bold text-pink-700"><Link to="/ingles-la-vaguada/infantil" className="text-pink-700 hover:underline">Impulse English Academy</Link></td>
                      <td className="p-4 text-center font-bold text-pink-700">Desde 64€</td>
                      <td className="p-4 text-pink-600">Great Little People, grupos reducidos, <Link to="/academia-ingles-penagrande" className="text-pink-700 hover:underline">Peñagrande</Link></td>
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
              <div className="bg-gradient-to-r from-pink-500 to-rose-500 rounded-2xl p-8 text-white">
                <h2 className="text-2xl font-bold mb-4">Conclusión</h2>
                <p className="text-white/90 mb-6">
                  Elegir la academia de <Link to="/ingles-la-vaguada/infantil" className="text-white underline hover:text-pink-200">inglés para niños</Link> adecuada para tu hijo es una inversión en su futuro. Busca una
                  metodología adaptada a su edad, grupos reducidos y profesores con experiencia infantil. Lo más
                  importante es que tu hijo asocie el inglés con experiencias positivas y divertidas. Para adolescentes, considera la preparación para <Link to="/examenes-cambridge" className="text-white underline hover:text-pink-200">exámenes Cambridge</Link> oficiales.
                </p>
                <p className="text-white/90">
                  En <strong>Impulse English Academy</strong>, con sede <Link to="/academia-ingles-la-vaguada" className="text-white underline hover:text-pink-200">junto a La Vaguada</Link> en <Link to="/academia-ingles-la-ventilla" className="text-white underline hover:text-pink-200">La Ventilla</Link>, ofrecemos el método <strong>Great Little People</strong>
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
                  <Link
                    to="/contacto"
                    className="bg-pink-500 hover:bg-pink-600 text-white font-bold py-3 px-8 rounded-lg transition-colors whitespace-nowrap"
                  >
                    Clase de prueba gratis
                  </Link>
                </div>
              </div>
            </section>

            {/* Related Articles */}
            <section>
              <h3 className="text-xl font-bold text-zinc-900 mb-4">Artículos relacionados</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <Link to="/academias-ingles-madrid" className="bg-zinc-50 rounded-xl p-4 hover:bg-zinc-100 transition-colors">
                  <span className="text-xs font-bold text-pink-600">MADRID</span>
                  <h4 className="font-bold text-zinc-900 mt-1">Academias Baratas de Inglés en Madrid</h4>
                </Link>
                <Link to="/examenes-cambridge/guia-completa" className="bg-zinc-50 rounded-xl p-4 hover:bg-zinc-100 transition-colors">
                  <span className="text-xs font-bold text-pink-600">CAMBRIDGE</span>
                  <h4 className="font-bold text-zinc-900 mt-1">Guía Completa de Exámenes Cambridge</h4>
                </Link>
                <Link to="/ingles-la-vaguada/infantil" className="bg-zinc-50 rounded-xl p-4 hover:bg-zinc-100 transition-colors">
                  <span className="text-xs font-bold text-pink-600">CURSOS</span>
                  <h4 className="font-bold text-zinc-900 mt-1">Curso de Inglés Infantil (2-5 años)</h4>
                </Link>
                <Link to="/ingles-la-vaguada/primaria" className="bg-zinc-50 rounded-xl p-4 hover:bg-zinc-100 transition-colors">
                  <span className="text-xs font-bold text-pink-600">CURSOS</span>
                  <h4 className="font-bold text-zinc-900 mt-1">Curso de Inglés Primaria (6-12 años)</h4>
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
      <SchemaMarkup schema={articleSchema} />
    </>
  );
}
