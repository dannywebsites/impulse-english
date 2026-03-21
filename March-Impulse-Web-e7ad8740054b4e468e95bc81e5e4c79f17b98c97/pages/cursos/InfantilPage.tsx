import React, { useEffect } from 'react';
import { Baby, Music, Gamepad2, Heart, Users, Sparkles, Clock, CheckCircle, Star, Phone, Calendar } from 'lucide-react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import LeadForm from '../../components/LeadForm';
import LazyVideo from '../../components/LazyVideo';
import OptimizedImage from '../../components/OptimizedImage';
import AcademyGallery from '../../components/AcademyGallery';
import Breadcrumb from '../../components/Breadcrumb';
import FAQSection from '../../components/FAQSection';
import { generateCourseSchema, businessInfo } from '../../utils/schemaData';
import { infantilImages as galleryImages } from '../../src/data/academyImages';
import { infantilImages as heroImages } from '../../src/data/images';

export const courseSchema = generateCourseSchema({
  name: "Curso de Inglés Infantil (2-5 años)",
  description: "Clases de inglés para niños de 2 a 5 años con metodología Great Little People. Aprenden jugando, cantando y divirtiéndose. Grupos reducidos de máximo 7 alumnos.",
  url: `${businessInfo.url}/cursos-ingles/infantil`,
  courseCode: "INF-GLP",
  educationalLevel: "Preschool",
  timeRequired: "PT1H",
  image: "https://impulseenglish.s3.us-east-1.amazonaws.com/impulsephotos/IMG_4117.PNG"
});


// FAQs for Infantil page
export const faqs = [
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
  },
  // Kids Early Childhood PAAs (10)
  {
    question: "¿Cuál es la edad ideal para empezar inglés?",
    answer: "A partir de los 2 años el cerebro está preparado para adquirir lenguaje de forma natural. Antes de los 2, la exposición es útil pero sin presión. Lo importante es que sea lúdico, constante y sin expectativas de \"hablar\" inmediatamente. A los 3-4 años, la adquisición es más rápida."
  },
  {
    question: "¿Mi hijo confunde dos idiomas si aprende inglés y español?",
    answer: "No. Los niños bilingües no se confunden; el cerebro maneja naturalmente dos códigos lingüísticos. Es normal una fase inicial de mezcla de palabras (code-switching), pero se resuelve naturalmente antes de los 4 años. Los bilingües tienen ventajas cognitivas: flexibilidad mental, creatividad, facilidad para aprender idiomas."
  },
  {
    question: "¿Los niños pequeños aprenden pronunciación mejor?",
    answer: "Sí. Hasta los 7-8 años, el sistema auditivo es plástico y capta sonidos nativos con facilidad. Después, es más costoso. Los niños en Infantil desarrollan acento nativo en inglés con exposición regular. Aprovecha esta ventana: 2-5 años es oro puro para pronunciación."
  },
  {
    question: "¿Mi hijo dirá palabras en inglés rápido?",
    answer: "Primer trimestre: comprensión, gestos, imitación de sonidos. Segundo trimestre: palabras sueltas (mama, agua en inglés). Tercer trimestre+: frases simples. Paciencia: el silencio no es falta de aprendizaje, es acumulación. Un día \"explota\" y hablan oraciones."
  },
  {
    question: "¿Canciones y juegos suficientes para aprender?",
    answer: "Sí, para Infantil (2-5) canciones y juegos son el vehículo perfecto. Los niños aprenden por imitación, repetición y asociación emocional. Una canción repetida 10 veces = vocabulario, ritmo, pronunciación. El juego = contexto donde las palabras cobran significado."
  },
  {
    question: "¿Debo hablar inglés en casa si no lo domino?",
    answer: "No necesario. Si no tienes nivel, lo más efectivo es crear entorno de exposición (canciones, videos cortos, aplicaciones interactivas) sin presión. El profesor en clase es el modelo nativo. Mejor que un padre con mal acento hable poco inglés a que hable con errores que el niño imite."
  },
  {
    question: "¿Infantil bilingüe es estresante?",
    answer: "No si se hace de forma lúdica sin presión. El estrés viene si los adultos esperan \"resultados\" rápidos o corrigen constantemente. Dejá que aprenda por absorción natural: juega, canta, escucha. A los 4-5 años, los resultados serán evidentes sin haber forzado nada."
  },
  {
    question: "¿Se olvida si dejamos de ir a clase?",
    answer: "Sí, el vocabulario pasivo se olvida sin práctica. Es como cualquier habilidad: discontinuidad = retroceso. Ideal: continuidad en clase + refuerzo mínimo en casa (una canción semanal). Pero una pausa de 2-3 meses no borra todo; vuelven rápido si retoman."
  },
  {
    question: "¿Great Little People mejor que otros métodos?",
    answer: "Great Little People es una metodología probada, con foco en lenguaje natural, narrativa y movimiento. Es excelente para Infantil (2-5). Otros métodos también funcionan. Lo importante es que sea lúdico, seguro y con profesor dedicado. Todos los métodos buenos dan resultados con constancia."
  },
  {
    question: "¿Niños 2 años vs 5 años en la misma clase?",
    answer: "No, dividimos por edad/nivel. 2-3 años: focus en rutinas, gestos, vocabulario pasivo. 4-5 años: frases, conversación simple, pre-lectoescritura en inglés. Aunque la metodología es la misma, el contenido y ritmo se adaptan. Grupos por edad = máxima efectividad."
  },
  {
    question: "¿A qué edad puede un niño empezar clases de inglés en academia?",
    answer: "A partir de los 2 años, un niño puede comenzar clases de inglés en academia si el método es adecuado: lúdico, basado en juego, canciones y rutinas, sin presión por resultados inmediatos. Antes de los 2, la exposición al idioma en casa (canciones, cuentos) es útil pero las clases estructuradas funcionan mejor a partir de esta edad."
  },
  {
    question: "¿Cuántas horas de inglés a la semana necesita un niño de 2-5 años?",
    answer: "Para niños de 2 a 5 años, la constancia importa más que la cantidad. Sesiones cortas y frecuentes (1 hora al día, 4 días a la semana) funcionan mejor que clases largas espaciadas. La repetición diaria de rutinas, canciones y vocabulario facilita la adquisición natural del idioma sin saturar al niño."
  },
  {
    question: "¿Mi hijo no quiere ir a inglés, qué puedo hacer?",
    answer: "Es habitual, especialmente al principio. Los niños necesitan tiempo para adaptarse a un entorno nuevo. Un método basado en juego y diversión reduce la resistencia. Grupos pequeños ayudan a que el niño se sienta seguro. La clave es no forzar y dar tiempo: la mayoría se adaptan en 2-4 sesiones cuando el ambiente es acogedor."
  },
  {
    question: "¿Las clases de inglés para bebés realmente funcionan?",
    answer: "Sí, la neurociencia confirma que entre los 0 y 6 años el cerebro está en su momento óptimo para adquirir idiomas. La exposición temprana al inglés a través de canciones, juegos y rutinas crea conexiones neuronales que facilitan el aprendizaje futuro. No se busca que el bebé hable, sino que absorba sonidos, ritmos y patrones del idioma."
  },
  {
    question: "¿Cómo saber si una academia de inglés es buena para mi hijo pequeño?",
    answer: "Fíjate en: método adaptado a la edad (no clases de adulto simplificadas), tamaño del grupo (máximo 7-8 niños), profesores con formación en educación infantil, un ambiente seguro y lúdico, y la posibilidad de hacer una clase de prueba antes de comprometerte. Las reseñas de otros padres en Google también son orientativas."
  }
];

export default function InfantilPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
<Navbar />

      {/* Hero Section */}
      <section className="relative pt-28 pb-20 md:pt-36 md:pb-32 overflow-hidden">
        <div className="absolute inset-0">
          <picture>
            <source media="(max-width: 640px)" srcSet="/images/optimized/heroes-mobile/infantil-classes-mobile.webp" type="image/webp" />
            <source media="(max-width: 640px)" srcSet="/images/optimized/heroes-mobile/infantil-classes-mobile.jpg" type="image/jpeg" />
            <img
              src="https://impulseenglish.s3.us-east-1.amazonaws.com/impulsephotos/NACHOS+photos.+/Infantil+classes.JPG"
              alt="Clases de inglés infantil Madrid - Great Little People Impulse English Academy"
              className="w-full h-full object-cover"
              loading="eager"
              fetchPriority="high"
            />
          </picture>
          <div className="absolute inset-0 bg-gradient-to-br from-fuchsia-900/80 via-purple-900/70 to-violet-800/55"></div>
        </div>
        <div className="absolute inset-0 hero-grain opacity-[0.03]"></div>
        <div className="absolute -top-32 -right-32 w-[500px] h-[500px] rounded-full bg-white/[0.04]"></div>
        <div className="absolute -bottom-24 -left-24 w-80 h-80 rounded-full bg-fuchsia-400/[0.06]"></div>

        <div className="relative z-10 container mx-auto px-6 md:px-12">
          <Breadcrumb
            items={[
              { label: 'Cursos', href: '/cursos-ingles/infantil' },
              { label: 'Infantil (2-5 años)' }
            ]}
            variant="light"
          />

          <div className="max-w-3xl mt-12 md:mt-16">
            <div className="flex items-center gap-4 mb-6 animate-hero-fade-up">
              <div className="w-8 h-px bg-white/40"></div>
              <span className="font-display text-white/70 text-xs uppercase tracking-[0.2em]">
                2–5 años · Great Little People
              </span>
            </div>
            <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl text-white tracking-tight leading-[1.1] mb-6 animate-hero-fade-up animation-delay-100">
              Inglés para Infantil
            </h1>
            <div className="w-16 h-0.5 bg-brand-red mb-6 animate-hero-fade-up animation-delay-150"></div>
            <p className="font-display text-lg md:text-xl text-white/80 font-light leading-relaxed max-w-2xl mb-10 animate-hero-fade-up animation-delay-200">
              Los más pequeños aprenden jugando, cantando y explorando en un entorno seguro y positivo. Metodología Great Little People en La Vaguada, Barrio del Pilar.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 animate-hero-fade-up animation-delay-300">
              <a
              href="/reservar-clase"
                className="bg-white text-fuchsia-900 font-display font-semibold py-4 px-8 rounded-lg hover:bg-amber-50 transition-all duration-300 text-center"
              >
                Clase de prueba GRATIS
              </a>
              <a
                href="tel:+34604910611"
                className="backdrop-blur-sm text-white border border-white/25 font-display font-medium py-4 px-8 rounded-lg hover:bg-white/10 transition-all duration-300 text-center flex items-center justify-center gap-2"
              >
                <Phone className="w-4 h-4" />
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
                Cuando crezcan, pueden continuar en <a href="/cursos-ingles/primaria" className="text-purple-600 hover:underline font-medium">Primaria (6–12)</a> y empezar con sus primeros <a href="/examenes-cambridge" className="text-purple-600 hover:underline font-medium">exámenes Cambridge Young Learners</a>.
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
              <a
              href="/reservar-clase"
                className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-4 px-8 rounded-lg transition-colors"
              >
                Reservar clase gratuita
              </a>
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
        pageUrl={`${businessInfo.url}/cursos-ingles/infantil`}
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
            title="Solicita información sobre nuestras clases infantiles"
            subtitle="Grupos reducidos de máximo 7 niños. Clase de prueba gratuita sin compromiso"
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
</>
  );
}
