import React, { useEffect } from 'react';
import { Baby, Music, Gamepad2, Heart, Users, Sparkles, Clock, CheckCircle, Star, Phone, Calendar } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import LeadForm from '../../components/LeadForm';
import LazyVideo from '../../components/LazyVideo';
import OptimizedImage from '../../components/OptimizedImage';
import AcademyGallery from '../../components/AcademyGallery';
import SchemaMarkup from '../../components/SchemaMarkup';
import Breadcrumb from '../../components/Breadcrumb';
import FAQSection from '../../components/FAQSection';
import SEOHead from '../../components/SEOHead';
import { generateCourseSchema, businessInfo } from '../../utils/schemaData';
import { infantilGalleryImages as galleryImages, infantilImages as heroImages } from '../../../utils/images';

const courseSchema = generateCourseSchema({
  name: "Curso de Inglés Infantil (2-5 años)",
  description: "Clases de inglés para niños de 2 a 5 años con metodología Great Little People. Aprenden jugando, cantando y divirtiéndose. Grupos reducidos de máximo 7 alumnos.",
  url: `${businessInfo.url}/ingles-la-vaguada/infantil`,
  courseCode: "INF-GLP",
  educationalLevel: "Preschool",
  timeRequired: "PT1H",
  price: "64",
  image: "/images/academy/logos/img-4117.png"
});


// FAQs for Infantil page
const faqs = [
  {
    question: "¿Es buena idea empezar inglés a los 2 años?",
    answer: "Sí, a esta edad el aprendizaje es natural y sin bloqueo. En clase trabajamos rutinas, canciones, juego guiado y comprensión oral para que el niño se familiarice con el idioma con confianza. El objetivo no es \"memorizar\", sino crear una relación positiva y constante con el inglés."
  },
  {
    question: "¿Mi hijo es tímido, funcionará?",
    answer: "Sí. En grupos reducidos y con una metodología lúdica, los niños se sueltan poco a poco. No forzamos a \"hablar\" desde el minuto uno: primero escuchan, imitan y participan con gestos y juego. La confianza aparece cuando el entorno es seguro y repetible."
  },
  {
    question: "¿Necesito quedarme en clase?",
    answer: "Depende del niño y de vuestra adaptación. En las primeras sesiones puede ser útil una transición suave, pero buscamos que el niño gane autonomía y se sienta cómodo con el grupo y el profesor. Te orientamos caso por caso para que la experiencia sea positiva."
  },
  {
    question: "¿Cuántas horas a la semana son recomendables?",
    answer: "En infantil funciona mejor la constancia. Por eso proponemos sesiones cortas y repetidas: 1 hora diaria de lunes a jueves. Así se refuerzan rutinas, vocabulario y comprensión sin saturación. La frecuencia regular crea hábito y acelera la familiaridad con el idioma."
  },
  {
    question: "¿Qué se aprende realmente si \"solo juegan\"?",
    answer: "Aprenden comprensión auditiva, vocabulario funcional, instrucciones, rutinas y pronunciación básica de forma natural. El juego es la herramienta, pero hay objetivos claros: repetición, exposición al idioma y participación activa. Lo importante es que el inglés se integra como parte normal de la vida."
  },
  {
    question: "¿Hay material para practicar en casa?",
    answer: "Sí. Usamos canciones y recursos que también pueden repetirse en casa sin convertirlo en deberes. La idea es reforzar lo visto en clase con un enfoque ligero: música, frases cortas y rutinas. Te damos pautas para acompañar el proceso sin presión."
  },
  {
    question: "¿Qué pasa si un niño no se adapta rápido?",
    answer: "Es normal que cada niño tenga su ritmo. Ajustamos dinámicas, reforzamos rutinas y cuidamos el vínculo emocional con el idioma. Al trabajar en grupos reducidos, el profesor puede observar y apoyar de forma personalizada. La clave es continuidad y un entorno estable."
  },
  {
    question: "¿Puedo probar antes de apuntarme?",
    answer: "Sí. Ofrecemos clase de prueba gratuita para que tu hijo viva una sesión real y tú veas el método en acción. Te explicamos el grupo adecuado por edad y nivel de exposición previa. Sin compromiso."
  }
];

export default function InfantilPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <SEOHead
        title="Inglés Infantil (2–5 años) Great Little People | La Vaguada – Barrio del Pilar"
        description="Clases de inglés infantil (2–5) en La Vaguada / Barrio del Pilar. Metodología Great Little People 100% en inglés, grupos máx. 7 y clase de prueba gratis. Impulse English Academy."
        keywords="clases inglés niños la vaguada, inglés infantil barrio del pilar, inglés bebes 2 años, great little people, academia inglés niños madrid"
        canonical="/ingles-la-vaguada/infantil"
      />
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-24 pb-16 md:pt-32 md:pb-24 bg-gradient-to-br from-pink-500 to-purple-600 overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <OptimizedImage
            image={heroImages.greatLittlePeople}
            className="w-full h-full object-cover"
            sizes="100vw"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-pink-600/80 to-purple-600/80"></div>
        <div className="relative z-10 container mx-auto px-6 md:px-12 mb-6">
          <Breadcrumb
            items={[
              { label: 'Cursos', href: '/ingles-la-vaguada/infantil' },
              { label: 'Infantil (2-5 años)' }
            ]}
            variant="light"
          />
        </div>

        <div className="relative container mx-auto px-6 md:px-12">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-6">
              <span className="bg-white/20 text-white text-sm font-bold px-4 py-2 rounded-full">
                2-5 años
              </span>
              <span className="bg-yellow-400 text-yellow-900 text-sm font-bold px-4 py-2 rounded-full">
                Great Little People
              </span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white tracking-tight mb-6">
              Inglés para Infantil (2–5 años) | Great Little People
            </h1>
            <p className="text-xl md:text-2xl text-white/90 font-light mb-8">
              En Impulse English Academy, tu academia de inglés en La Vaguada (Barrio del Pilar, Madrid norte), ayudamos a los más pequeños a iniciarse en el idioma de forma natural. Con Great Little People, los niños aprenden jugando, cantando, moviéndose y explorando, en un entorno seguro y positivo.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/reservar-clase"
                className="bg-white text-purple-600 font-bold py-4 px-8 rounded-lg hover:bg-yellow-400 hover:text-purple-900 transition-colors text-center"
              >
                Clase de prueba GRATIS
              </Link>
              <a
                href="tel:+34604910611"
                className="bg-white/10 backdrop-blur-sm text-white border border-white/30 font-bold py-4 px-8 rounded-lg hover:bg-white hover:text-purple-600 transition-colors text-center flex items-center justify-center gap-2"
              >
                <Phone className="w-5 h-5" />
                Llamar ahora
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Info Bar */}
      <section className="bg-white py-6 border-b border-zinc-100">
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap justify-center gap-6 md:gap-12 text-center">
            <div className="flex items-center gap-2">
              <Users className="w-5 h-5 text-purple-500" />
              <span className="text-zinc-700 font-medium">Grupos muy reducidos (máx. 7)</span>
            </div>
            <div className="flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-purple-500" />
              <span className="text-zinc-700 font-medium">100% en inglés</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-5 h-5 text-purple-500" />
              <span className="text-zinc-700 font-medium">1 hora/día (L–J 17:30)</span>
            </div>
            <div className="flex items-center gap-2">
              <Star className="w-5 h-5 text-yellow-500" />
              <span className="text-zinc-700 font-medium">Clase de prueba GRATIS</span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 md:py-20 px-6 bg-zinc-50">
        <div className="container mx-auto max-w-4xl">
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 mb-6">
              ¿Por qué empezar tan pronto?
            </h2>

            <div className="prose prose-lg text-zinc-600">
              <p className="mb-4">
                Entre los 2 y 5 años el cerebro está especialmente preparado para incorporar sonidos y estructuras del idioma. Aquí no "estudian": viven el inglés con rutinas, música, juegos y actividades multisensoriales.
              </p>
            </div>

            {/* Great Little People Methodology Box */}
            <div className="mt-8 p-6 bg-gradient-to-br from-yellow-50 to-orange-50 rounded-xl border border-yellow-200">
              <div className="flex items-start gap-4">
                <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center flex-shrink-0">
                  <Sparkles className="w-8 h-8 text-yellow-900" />
                </div>
                <div>
                  <h3 className="font-bold text-zinc-900 text-lg mb-2">Centro Oficial Great Little People – Centre of Excellence</h3>
                  <p className="text-zinc-600 text-sm mb-3">
                    No es una clase tradicional: es una experiencia completa que combina música, movimiento, juego guiado y aprendizaje multisensorial, con participación familiar y seguimiento.
                  </p>
                  <a
                    href="https://www.greatlittlepeople.com/en"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-purple-600 hover:text-purple-800 text-sm font-medium hover:underline"
                  >
                    Conoce más sobre Great Little People →
                  </a>
                </div>
              </div>
            </div>

            {/* Location and Progression Links */}
            <div className="mt-6 p-4 bg-purple-50 rounded-xl border border-purple-100">
              <p className="text-zinc-700 text-sm mb-3">
                <strong>¿Dónde estamos?</strong> Estamos en Barrio del Pilar, junto a La Vaguada (Madrid 28029), con acceso cómodo desde metro y zonas cercanas.
              </p>
              <p className="text-zinc-600 text-sm">
                Cuando crezcan, pueden continuar en <Link to="/ingles-la-vaguada/primaria" className="text-purple-600 hover:underline font-medium">Primaria (6–12)</Link> y empezar con sus primeros <Link to="/examenes-cambridge" className="text-purple-600 hover:underline font-medium">exámenes Cambridge Young Learners</Link>.
              </p>
            </div>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                {
                  icon: <Music className="w-6 h-6" />,
                  title: "Música y canciones",
                  description: "Canciones originales que los niños cantan también en casa. La música es el vehículo perfecto para el aprendizaje."
                },
                {
                  icon: <Gamepad2 className="w-6 h-6" />,
                  title: "Juegos y diversión",
                  description: "Cada clase es una aventura. Juegos, cuentos, teatro, manualidades... todo en inglés y todo divertido."
                },
                {
                  icon: <Heart className="w-6 h-6" />,
                  title: "Vínculo emocional",
                  description: "Creamos una relación positiva con el idioma. Los niños asocian el inglés con momentos felices."
                },
                {
                  icon: <Users className="w-6 h-6" />,
                  title: "Grupos muy reducidos",
                  description: "Máximo 7 niños por grupo para garantizar atención individualizada y participación activa."
                },
                {
                  icon: <Baby className="w-6 h-6" />,
                  title: "Profesores especializados",
                  description: "Nuestros profesores tienen formación específica en educación infantil y la metodología Great Little People."
                },
                {
                  icon: <Sparkles className="w-6 h-6" />,
                  title: "100% en inglés",
                  description: "Inmersión total desde el primer día. Los niños se adaptan sorprendentemente rápido."
                }
              ].map((feature, index) => (
                <div key={index} className="bg-white p-6 rounded-xl shadow-sm border border-zinc-100 flex items-start gap-4">
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center text-purple-600 flex-shrink-0">
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="font-bold text-zinc-900 mb-1">{feature.title}</h3>
                    <p className="text-zinc-600 text-sm">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
        </div>
      </section>

      {/* Video Section - Above Levels */}
      <section className="py-16 md:py-20 px-6 bg-zinc-50">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-zinc-900 mb-4">
              Descubre Great Little People en acción
            </h2>
            <p className="text-zinc-600">
              Ve cómo los más pequeños aprenden inglés jugando y divirtiéndose
            </p>
          </div>
          <LazyVideo
            videoId="G_fFoyb8sdc"
            title="Great Little People - Metodología para niños de 2 a 5 años"
            className="shadow-xl"
          />
        </div>
      </section>

      {/* Schedule & Pricing Section */}
      <section className="py-16 px-6 bg-white">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 mb-4">
              Horarios y grupos
            </h2>
            <p className="text-zinc-500 text-lg">
              Clases de lunes a jueves a las 17:30h
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-8 rounded-2xl border border-purple-100">
              <h3 className="text-xl font-bold text-zinc-900 mb-4">Grupos por edad</h3>
              <ul className="space-y-3">
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span className="text-zinc-700">2-3 años: Iniciación al inglés</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span className="text-zinc-700">3-4 años: Desarrollo lingüístico</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span className="text-zinc-700">4-5 años: Preparación pre-primaria</span>
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-yellow-50 to-orange-50 p-8 rounded-2xl border border-yellow-100">
              <h3 className="text-xl font-bold text-zinc-900 mb-4">Lo que incluye</h3>
              <ul className="space-y-3">
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span className="text-zinc-700">Material Great Little People incluido</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span className="text-zinc-700">Seguimiento personalizado</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span className="text-zinc-700">Eventos especiales (Halloween, Navidad…)</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span className="text-zinc-700">Rutinas para reforzar en casa (sin presión)</span>
                </li>
              </ul>
            </div>
          </div>

          {/* CTA */}
          <div className="mt-12 text-center">
            <div className="inline-block bg-green-100 text-green-800 font-bold px-6 py-3 rounded-full mb-6">
              Primera clase de prueba GRATIS
            </div>
            <p className="text-zinc-600 mb-6">
              Ven a conocernos sin compromiso. Tu hijo/a probará una clase real y verás cómo disfruta aprendiendo.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/reservar-clase"
                className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-4 px-8 rounded-lg transition-colors"
              >
                Reservar clase gratuita
              </Link>
              <a
                href="https://wa.me/34604910611?text=Hola,%20me%20gustaría%20información%20sobre%20inglés%20para%20infantil"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-500 hover:bg-green-600 text-white font-bold py-4 px-8 rounded-lg transition-colors flex items-center justify-center gap-2"
              >
                <Phone className="w-5 h-5" />
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section - Photos above FAQs */}
      <AcademyGallery
        images={galleryImages}
        pageUrl={`${businessInfo.url}/ingles-la-vaguada/infantil`}
        title="Nuestros pequeños alumnos"
        subtitle="Descubre cómo aprenden inglés jugando con Great Little People"
        maxImages={9}
      />

      {/* FAQ Section - With Schema Markup */}
      <FAQSection
        faqs={faqs}
        title="Preguntas frecuentes sobre inglés infantil"
      />

      {/* Lead Form */}
      <section className="py-16 px-6 bg-white">
        <div className="container mx-auto max-w-3xl">
          <LeadForm
            title="¿Quieres más información?"
            subtitle="Déjanos tus datos y te contactamos para resolver todas tus dudas"
            ctaText="Solicitar información"
            source="curso-infantil"
            showPhone={true}
            showAge={true}
            showLevel={false}
          />
        </div>
      </section>

      <Footer />

      {/* Schema.org Structured Data */}
      <SchemaMarkup schema={courseSchema} />
    </>
  );
}
