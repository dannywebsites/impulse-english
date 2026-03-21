import React, { useEffect } from 'react';
import { User, Video, MapPin, Calendar, Target, Clock, CheckCircle, Phone, Briefcase, FileText, Award } from 'lucide-react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import LeadForm from '../../components/LeadForm';
import LazyVideo from '../../components/LazyVideo';
import OptimizedImage from '../../components/OptimizedImage';
import Breadcrumb from '../../components/Breadcrumb';
import { generateCourseSchema, businessInfo } from '../../utils/schemaData';
import { facilityImages, brandingImages, s3CambridgeImages, s3SecondaryImages } from '../../src/data/images';

export const courseSchema = generateCourseSchema({
  name: "Clases Particulares de Inglés (1:1)",
  description: "Clases particulares de inglés 1:1 en La Vaguada / Barrio del Pilar. 100% personalizadas, horarios flexibles, online o presencial. Preparación Cambridge y centro oficial Linguaskill.",
  url: `${businessInfo.url}/cursos-ingles/particulares`,
  courseCode: "PRIV-IND",
  educationalLevel: "All Levels",
  timeRequired: "PT1H",
  image: "https://impulseenglish.s3.us-east-1.amazonaws.com/impulsephotos/IMG_4117.PNG"
});

// S3 images for bottom gallery section - focused on adults and one-to-one
const courseGalleryImages = [
  {
    url: "https://impulseenglish.s3.us-east-1.amazonaws.com/impulsephotos/NACHOS+photos.+/Adult+one-to-one+classes.JPG",
    alt: "Clases particulares one-to-one inglés La Vaguada Barrio del Pilar Madrid"
  },
  {
    url: "https://impulseenglish.s3.us-east-1.amazonaws.com/impulsephotos/JP+WITH+STUDENTS.jpg",
    alt: "Profesor JP con estudiantes adultos y certificados Cambridge La Vaguada Madrid"
  },
  {
    url: "https://impulseenglish.s3.us-east-1.amazonaws.com/LARA+C1+CERT.JPEG",
    alt: "Lara con certificado Cambridge C1 Advanced academia La Vaguada Madrid"
  },
  {
    url: "https://impulseenglish.s3.us-east-1.amazonaws.com/impulsephotos/Cambridge+search.JPEG",
    alt: "Búsqueda centro Cambridge oficial Impulse English Academy verificado"
  },
  {
    url: "https://impulseenglish.s3.us-east-1.amazonaws.com/NEW/Cambridge+logo+-+Edited.png",
    alt: "Centro Preparador Oficial Cambridge English La Vaguada Madrid"
  },
  {
    url: "https://impulseenglish.s3.us-east-1.amazonaws.com/impulsephotos/NACHOS+photos.+/Daniel+helping+secondary+school+students.JPG",
    alt: "Profesor Daniel ayudando estudiantes academia La Vaguada Barrio del Pilar"
  },
];

export const faqs = [
  {
    q: "¿Qué es mejor: clases particulares o grupo reducido?",
    a: "Depende de tu objetivo. Si necesitas rapidez, un plan muy específico o tienes horarios variables, 1:1 suele ser más eficiente. Si buscas constancia y practicar con más interacción social, un grupo reducido funciona muy bien. Te recomendamos lo mejor tras conocerte y evaluarte."
  },
  {
    q: "¿Puedo hacer clases online y presencial combinadas?",
    a: "Sí. Mucha gente combina ambas modalidades: presencial para speaking y dinámica, online para flexibilidad. Diseñamos un plan único para que el progreso sea continuo independientemente del formato. Lo importante es mantener consistencia y trabajar exactamente lo que necesitas mejorar."
  },
  {
    q: "¿Preparáis entrevistas de trabajo en inglés?",
    a: "Sí. Trabajamos respuestas, vocabulario por sector, estructura, fluidez y seguridad. Simulamos entrevistas reales, corregimos puntos clave y preparamos preguntas típicas. También trabajamos presentaciones y reuniones si lo necesitas. El objetivo es que llegues con guion, control y soltura."
  },
  {
    q: "¿También preparáis IELTS / TOEFL?",
    a: "Podemos preparar distintos exámenes según tu objetivo, pero nuestro foco principal es Cambridge y Linguaskill. Si tu meta es IELTS/TOEFL, te orientamos con un plan específico y práctica por habilidades. Lo definimos en la primera evaluación para ajustar estrategia."
  },
  {
    q: "¿Cuánto dura una clase particular?",
    a: "Lo habitual es 60 minutos, aunque se puede adaptar a 90 o 120 minutos según disponibilidad y objetivo. Si estás preparando examen, a veces sesiones más largas permiten simular tareas completas y trabajar writing/speaking con feedback profundo. Te proponemos la mejor opción según tu caso."
  },
  {
    q: "¿Puedo cambiar de horario?",
    a: "Sí, con aviso previo. Buscamos flexibilidad real, pero siempre sujeto a disponibilidad de agenda. Si necesitas cambios frecuentes, lo estructuramos desde el principio para evitar interrupciones. Lo importante es sostener el ritmo de aprendizaje sin perder continuidad."
  },
  {
    q: "¿Qué material usáis?",
    a: "Usamos material adaptado a tu objetivo y nivel: recursos propios, materiales oficiales cuando preparas Cambridge y práctica específica si vas a Linguaskill. También trabajamos con textos, audios y tareas reales para que el inglés te sirva fuera de clase, no solo en ejercicios."
  },
  {
    q: "¿Cómo empiezo?",
    a: "Lo mejor es una primera toma de contacto para entender tu objetivo y tu nivel actual. Con eso diseñamos un plan y te proponemos horarios. Puedes escribir por WhatsApp o llamar, y te guiamos paso a paso."
  }
];

const services = [
  {
    icon: <Award className="w-6 h-6" />,
    title: "Preparación de exámenes",
    description: "Cambridge (B1, B2, C1), Linguaskill, IELTS... Preparación intensiva y personalizada."
  },
  {
    icon: <Briefcase className="w-6 h-6" />,
    title: "Inglés profesional",
    description: "Preparación de entrevistas, presentaciones, reuniones, emails corporativos."
  },
  {
    icon: <FileText className="w-6 h-6" />,
    title: "Apoyo académico",
    description: "Refuerzo escolar, ayuda con trabajos universitarios, preparación de TFG/TFM."
  },
  {
    icon: <Target className="w-6 h-6" />,
    title: "Objetivos específicos",
    description: "Viajes, oposiciones, requisitos laborales... Diseñamos el curso a tu medida."
  }
];

export default function ParticularesPage() {
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
            <source media="(max-width: 640px)" srcSet="/images/optimized/heroes-mobile/daniel-helping-mobile.webp" type="image/webp" />
            <source media="(max-width: 640px)" srcSet="/images/optimized/heroes-mobile/daniel-helping-mobile.jpg" type="image/jpeg" />
            <img
              src="https://impulseenglish.s3.us-east-1.amazonaws.com/impulsephotos/NACHOS+photos.+/Daniel+helping+secondary+school+students.JPG"
              alt="Clases particulares inglés Madrid - profesor nativo Impulse English Academy"
              className="w-full h-full object-cover object-top"
              loading="eager"
              fetchPriority="high"
            />
          </picture>
          <div className="absolute inset-0 bg-gradient-to-br from-accent-blue/80 via-accent-blue/70 to-[#0a3560]/60"></div>
        </div>
        <div className="absolute inset-0 hero-grain opacity-[0.03]"></div>
        <div className="absolute -top-36 -right-36 w-[480px] h-[480px] rounded-full bg-brand-red/[0.06]"></div>
        <div className="absolute -bottom-20 -left-20 w-72 h-72 rounded-full bg-white/[0.03]"></div>

        <div className="relative z-10 container mx-auto px-6 md:px-12">
          <Breadcrumb
            items={[
              { label: 'Cursos', href: '/cursos-ingles/infantil' },
              { label: 'Clases Particulares' }
            ]}
            variant="light"
          />

          <div className="max-w-3xl mt-12 md:mt-16">
            <div className="flex items-center gap-4 mb-6 animate-hero-fade-up">
              <div className="w-8 h-px bg-white/40"></div>
              <span className="font-display text-white/70 text-xs uppercase tracking-[0.2em]">
                One-to-one · Online y Presencial
              </span>
            </div>
            <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl text-white tracking-tight leading-[1.1] mb-6 animate-hero-fade-up animation-delay-100">
              Clases Particulares de Inglés
            </h1>
            <div className="w-16 h-0.5 bg-brand-red mb-6 animate-hero-fade-up animation-delay-150"></div>
            <p className="font-display text-lg md:text-xl text-white/80 font-light leading-relaxed max-w-2xl mb-10 animate-hero-fade-up animation-delay-200">
              Un profesor dedicado a ti, a tu ritmo y con un plan diseñado para tu meta. Online o presencial en La Vaguada, Barrio del Pilar.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 animate-hero-fade-up animation-delay-300">
              <a
                href="https://wa.me/34604910611?text=Hola,%20me%20gustaría%20información%20sobre%20clases%20particulares"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-accent-blue font-display font-semibold py-4 px-8 rounded-lg hover:bg-zinc-100 transition-all duration-300 text-center flex items-center justify-center gap-2"
              >
                <Phone className="w-4 h-4" />
                Contactar por WhatsApp
              </a>
              <a
                href="tel:+34604910611"
                className="backdrop-blur-sm text-white border border-white/25 font-display font-medium py-4 px-8 rounded-lg hover:bg-white/10 transition-all duration-300 text-center"
              >
                Llamar ahora
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Video Section - Moved to Top */}
      <section className="py-16 md:py-20 px-6 bg-zinc-50">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-zinc-900 mb-4">
              Clases particulares 100% personalizadas
            </h2>
            <p className="text-zinc-600">
              Tu profesor dedicado, tu ritmo, tus objetivos
            </p>
          </div>
          <LazyVideo
            videoId="Fdso-d9_F20"
            title="Clases particulares de inglés - Online y presencial"
            className="shadow-xl"
          />
        </div>
      </section>

      {/* Quick Info Bar */}
      <section className="bg-white py-6 border-b border-zinc-100">
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap justify-center gap-6 md:gap-12 text-center">
            <div className="flex items-center gap-2">
              <User className="w-5 h-5 text-orange-500" />
              <span className="text-zinc-700 font-medium">1:1, online o presencial</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="w-5 h-5 text-orange-500" />
              <span className="text-zinc-700 font-medium">Horarios flexibles (según disponibilidad)</span>
            </div>
            <div className="flex items-center gap-2">
              <Award className="w-5 h-5 text-orange-500" />
              <span className="text-zinc-700 font-medium">Preparación Cambridge y Linguaskill</span>
            </div>
            <div className="flex items-center gap-2">
              <Target className="w-5 h-5 text-orange-500" />
              <span className="text-zinc-700 font-medium">Speaking, entrevistas, presentaciones, writing, Business English</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-orange-500" />
              <span className="text-zinc-700 font-medium">Apoyo académico y objetivos específicos</span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 md:py-20 px-6 bg-zinc-50">
        <div className="container mx-auto max-w-4xl">
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 mb-6">
              Centro Oficial de Preparación Cambridge y Centro Oficial de Preparación Linguaskill
            </h2>

            <div className="prose prose-lg text-zinc-600">
              <p className="mb-4">
                Planificamos por resultados: diagnóstico, objetivos, sesiones enfocadas y seguimiento.
              </p>
            </div>

            {/* Location and Course Links */}
            <div className="mt-6 p-4 bg-orange-50 rounded-xl border border-orange-100">
              <p className="text-zinc-700 text-sm mb-3">
                <strong>¿Dónde estamos?</strong> Clases presenciales en nuestra <a href="/academia-ingles-barrio-del-pilar" className="text-orange-600 hover:underline font-medium">academia en Barrio del Pilar</a>, junto a <a href="/academia-ingles-la-vaguada" className="text-orange-600 hover:underline font-medium">La Vaguada</a>. También accesible desde <a href="/academia-ingles-cuatro-torres" className="text-orange-600 hover:underline font-medium">Cuatro Torres</a> y <a href="/academia-ingles-plaza-castilla" className="text-orange-600 hover:underline font-medium">Plaza Castilla</a>.
              </p>
              <p className="text-zinc-600 text-sm">
                Preparamos <a href="/examenes-cambridge" className="text-orange-600 hover:underline font-medium">exámenes Cambridge</a> (<a href="/examenes-cambridge/b2-first" className="text-orange-600 hover:underline font-medium">B2 First</a>, <a href="/examenes-cambridge/c1-advanced" className="text-orange-600 hover:underline font-medium">C1 Advanced</a>) y <a href="/linguaskill" className="text-orange-600 hover:underline font-medium">Linguaskill</a>. Si prefieres grupos reducidos, consulta nuestros <a href="/cursos-ingles/adultos" className="text-orange-600 hover:underline font-medium">cursos para adultos</a>.
              </p>
            </div>

            {/* Services Grid */}
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {services.map((service, index) => (
                <div key={index} className="bg-white p-4 rounded-xl border border-zinc-100">
                  <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center text-orange-600 mb-3">
                    {service.icon}
                  </div>
                  <h3 className="font-bold text-zinc-900 text-sm mb-1">{service.title}</h3>
                  <p className="text-zinc-500 text-xs">{service.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              {
                icon: <User className="w-6 h-6" />,
                title: "Atención exclusiva",
                description: "El profesor se centra 100% en ti. Cada minuto cuenta y no hay distracciones."
              },
              {
                icon: <Video className="w-6 h-6" />,
                title: "Online o presencial",
                description: "Elige el formato que mejor te vaya cada semana. Puedes combinar ambos."
              },
              {
                icon: <Calendar className="w-6 h-6" />,
                title: "Horarios a tu medida",
                description: "Mañanas, tardes, noches, fines de semana... Nos adaptamos a tu agenda."
              },
              {
                icon: <Target className="w-6 h-6" />,
                title: "Programa personalizado",
                description: "Definimos tus objetivos y diseñamos el plan de estudios perfecto para ti."
              },
              {
                icon: <Clock className="w-6 h-6" />,
                title: "Flexibilidad total",
                description: "Cambia o cancela con 24h de antelación. Sin penalizaciones."
              },
              {
                icon: <MapPin className="w-6 h-6" />,
                title: "Academia o tu casa",
                description: "Clases presenciales en nuestra academia o desde cualquier lugar online."
              }
            ].map((feature, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-sm border border-zinc-100 flex items-start gap-4">
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center text-orange-600 flex-shrink-0">
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

      {/* What We Offer Section */}
      <section className="py-16 px-6 bg-white">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 mb-4">
              ¿Qué podemos trabajar?
            </h2>
            <p className="text-zinc-500 text-lg">
              Nos adaptamos a tus necesidades específicas
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gradient-to-br from-orange-50 to-red-50 p-8 rounded-2xl border border-orange-100">
              <h3 className="text-xl font-bold text-zinc-900 mb-4">Preparación de exámenes</h3>
              <ul className="space-y-3">
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span className="text-zinc-700">Cambridge: B1, B2, C1, C2</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span className="text-zinc-700">Linguaskill (empresas)</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span className="text-zinc-700">IELTS / TOEFL</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span className="text-zinc-700">EBAU / Selectividad</span>
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-8 rounded-2xl border border-green-100">
              <h3 className="text-xl font-bold text-zinc-900 mb-4">Objetivos profesionales</h3>
              <ul className="space-y-3">
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span className="text-zinc-700">Entrevistas de trabajo</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span className="text-zinc-700">Presentaciones en inglés</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span className="text-zinc-700">Reuniones y negociaciones</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span className="text-zinc-700">Emails y comunicación escrita</span>
                </li>
              </ul>
            </div>
          </div>

          {/* CTA */}
          <div className="mt-12 text-center">
            <p className="text-zinc-600 mb-6">
              Cuéntanos tu objetivo y diseñamos el programa perfecto para ti.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://wa.me/34604910611?text=Hola,%20me%20gustaría%20información%20sobre%20clases%20particulares"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-500 hover:bg-green-600 text-white font-bold py-4 px-8 rounded-lg transition-colors flex items-center justify-center gap-2"
              >
                <Phone className="w-5 h-5" />
                Contactar por WhatsApp
              </a>
              <a
              href="/contacto"
                className="bg-orange-600 hover:bg-orange-700 text-white font-bold py-4 px-8 rounded-lg transition-colors"
              >
                Más formas de contacto
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section - Photos above FAQs */}
      <section className="py-16 md:py-20 px-6 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 mb-4">
              Nuestros alumnos
            </h2>
            <p className="text-zinc-600 text-lg">
              Mira lo que logran nuestros estudiantes
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {courseGalleryImages.map((image, index) => (
              <div key={index} className="rounded-xl overflow-hidden shadow-lg">
                <div className="aspect-[4/3]">
                  <img
                    src={image.url}
                    alt={image.alt}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section - At bottom */}
      <section className="py-16 px-6 bg-zinc-50">
        <div className="container mx-auto max-w-3xl">
          <h2 className="text-3xl font-bold text-zinc-900 mb-8 text-center">
            Preguntas frecuentes
          </h2>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-sm border border-zinc-100">
                <h3 className="font-bold text-zinc-900 mb-2">{faq.q}</h3>
                <p className="text-zinc-600">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lead Form */}
      <section className="py-16 px-6 bg-white">
        <div className="container mx-auto max-w-3xl">
          <LeadForm
            title="Reserva tu primera clase particular"
            subtitle="Cuéntanos tu objetivo y diseñamos un plan a tu medida"
            ctaText="Reservar primera clase"
            source="clases-particulares"
            showPhone={true}
            showAge={true}
            showLevel={true}
          />
        </div>
      </section>

      <Footer />

      {/* Schema.org Structured Data */}
</>
  );
}
