import React, { useEffect } from 'react';
import { User, Video, MapPin, Calendar, Target, Clock, CheckCircle, Phone, Briefcase, FileText, Award } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import LeadForm from '../../components/LeadForm';
import LazyVideo from '../../components/LazyVideo';
import OptimizedImage from '../../components/OptimizedImage';
import SchemaMarkup from '../../components/SchemaMarkup';
import Breadcrumb from '../../components/Breadcrumb';
import SEOHead from '../../components/SEOHead';
import { generateCourseSchema, businessInfo } from '../../utils/schemaData';
import { facilityImages, brandingImages, s3CambridgeImages, s3SecondaryImages } from '../../src/data/images';

const courseSchema = generateCourseSchema({
  name: "Clases Particulares de Inglés (1:1)",
  description: "Clases particulares de inglés 1:1 en La Vaguada / Barrio del Pilar. 100% personalizadas, horarios flexibles, online o presencial. Preparación Cambridge y centro oficial Linguaskill.",
  url: `${businessInfo.url}/ingles-la-vaguada/particulares`,
  courseCode: "PRIV-IND",
  educationalLevel: "All Levels",
  timeRequired: "PT1H",
  price: "495",
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

const faqs = [
  {
    question:"¿Qué es mejor: clases particulares o grupo reducido?",
    answer:"Depende de tu objetivo. Si necesitas rapidez, un plan muy específico o tienes horarios variables, 1:1 suele ser más eficiente. Si buscas constancia y practicar con más interacción social, un grupo reducido funciona muy bien. Te recomendamos lo mejor tras conocerte y evaluarte."
  },
  {
    question:"¿Puedo hacer clases online y presencial combinadas?",
    answer:"Sí. Mucha gente combina ambas modalidades: presencial para speaking y dinámica, online para flexibilidad. Diseñamos un plan único para que el progreso sea continuo independientemente del formato. Lo importante es mantener consistencia y trabajar exactamente lo que necesitas mejorar."
  },
  {
    question:"¿Preparáis entrevistas de trabajo en inglés?",
    answer:"Sí. Trabajamos respuestas, vocabulario por sector, estructura, fluidez y seguridad. Simulamos entrevistas reales, corregimos puntos clave y preparamos preguntas típicas. También trabajamos presentaciones y reuniones si lo necesitas. El objetivo es que llegues con guion, control y soltura."
  },
  {
    question:"¿También preparáis IELTS / TOEFL?",
    answer:"Podemos preparar distintos exámenes según tu objetivo, pero nuestro foco principal es Cambridge y Linguaskill. Si tu meta es IELTS/TOEFL, te orientamos con un plan específico y práctica por habilidades. Lo definimos en la primera evaluación para ajustar estrategia."
  },
  {
    question:"¿Cuánto dura una clase particular?",
    answer:"Lo habitual es 60 minutos, aunque se puede adaptar a 90 o 120 minutos según disponibilidad y objetivo. Si estás preparando examen, a veces sesiones más largas permiten simular tareas completas y trabajar writing/speaking con feedback profundo. Te proponemos la mejor opción según tu caso."
  },
  {
    question:"¿Puedo cambiar de horario?",
    answer:"Sí, con aviso previo. Buscamos flexibilidad real, pero siempre sujeto a disponibilidad de agenda. Si necesitas cambios frecuentes, lo estructuramos desde el principio para evitar interrupciones. Lo importante es sostener el ritmo de aprendizaje sin perder continuidad."
  },
  {
    question:"¿Qué material usáis?",
    answer:"Usamos material adaptado a tu objetivo y nivel: recursos propios, materiales oficiales cuando preparas Cambridge y práctica específica si vas a Linguaskill. También trabajamos con textos, audios y tareas reales para que el inglés te sirva fuera de clase, no solo en ejercicios."
  },
  {
    question:"¿Cómo empiezo?",
    answer:"Lo mejor es una primera toma de contacto para entender tu objetivo y tu nivel actual. Con eso diseñamos un plan y te proponemos horarios. Puedes escribir por WhatsApp o llamar, y te guiamos paso a paso."
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
      <SEOHead
        title="Clases Particulares de Inglés (1:1) | Online y Presencial | La Vaguada – Barrio del Pilar"
        description="Clases particulares de inglés 1:1 en La Vaguada / Barrio del Pilar. 100% personalizadas, horarios flexibles, online o presencial. Preparación Cambridge y centro oficial Linguaskill."
        keywords="clases particulares inglés la vaguada, profesor particular inglés barrio del pilar, clases privadas inglés madrid"
        canonical="/ingles-la-vaguada/particulares"
      />
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-24 pb-16 md:pt-32 md:pb-24 bg-gradient-to-br from-orange-500 to-red-600 overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <OptimizedImage
            image={brandingImages.teacher}
            className="w-full h-full object-cover"
            sizes="100vw"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-orange-600/80 to-red-600/80"></div>
        <div className="relative z-10 container mx-auto px-6 md:px-12 mb-6">
          <Breadcrumb
            items={[
              { label: 'Cursos', href: '/ingles-la-vaguada/infantil' },
              { label: 'Clases Particulares' }
            ]}
            variant="light"
          />
        </div>

        <div className="relative container mx-auto px-6 md:px-12">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-6">
              <span className="bg-white/20 text-white text-sm font-bold px-4 py-2 rounded-full">
                One-to-one
              </span>
              <span className="bg-yellow-400 text-yellow-900 text-sm font-bold px-4 py-2 rounded-full">
                Online y Presencial
              </span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white tracking-tight mb-6">
              Clases Particulares de Inglés | 100% Personalizadas
            </h1>
            <p className="text-xl md:text-2xl text-white/90 font-light mb-8">
              Si tienes poco tiempo y un objetivo claro, las clases particulares son la vía más directa. En Impulse English Academy (Barrio del Pilar, junto a La Vaguada) trabajas con un profesor cualificado dedicado a ti, a tu ritmo y con un plan diseñado para tu meta.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="https://wa.me/34604910611?text=Hola,%20me%20gustaría%20información%20sobre%20clases%20particulares"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-orange-600 font-bold py-4 px-8 rounded-lg hover:bg-yellow-400 hover:text-orange-900 transition-colors text-center flex items-center justify-center gap-2"
              >
                <Phone className="w-5 h-5" />
                Contactar por WhatsApp
              </a>
              <a
                href="tel:+34604910611"
                className="bg-white/10 backdrop-blur-sm text-white border border-white/30 font-bold py-4 px-8 rounded-lg hover:bg-white hover:text-orange-600 transition-colors text-center"
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
                <strong>¿Dónde estamos?</strong> Clases presenciales en nuestra <Link to="/academia-ingles-barrio-del-pilar" className="text-orange-600 hover:underline font-medium">academia en Barrio del Pilar</Link>, junto a <Link to="/academia-ingles-la-vaguada" className="text-orange-600 hover:underline font-medium">La Vaguada</Link>. También accesible desde <Link to="/academia-ingles-cuatro-torres" className="text-orange-600 hover:underline font-medium">Cuatro Torres</Link> y <Link to="/academia-ingles-plaza-castilla" className="text-orange-600 hover:underline font-medium">Plaza Castilla</Link>.
              </p>
              <p className="text-zinc-600 text-sm">
                Preparamos <Link to="/examenes-cambridge" className="text-orange-600 hover:underline font-medium">exámenes Cambridge</Link> (<Link to="/examenes-cambridge/b2-first" className="text-orange-600 hover:underline font-medium">B2 First</Link>, <Link to="/examenes-cambridge/c1-advanced-guia" className="text-orange-600 hover:underline font-medium">C1 Advanced</Link>) y <Link to="/linguaskill" className="text-orange-600 hover:underline font-medium">Linguaskill</Link>. Si prefieres grupos reducidos, consulta nuestros <Link to="/ingles-la-vaguada/adultos" className="text-orange-600 hover:underline font-medium">cursos para adultos</Link>.
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
              <Link
                to="/contacto"
                className="bg-orange-600 hover:bg-orange-700 text-white font-bold py-4 px-8 rounded-lg transition-colors"
              >
                Más formas de contacto
              </Link>
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
                <h3 className="font-bold text-zinc-900 mb-2">{faq.question}</h3>
                <p className="text-zinc-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lead Form */}
      <section className="py-16 px-6 bg-white">
        <div className="container mx-auto max-w-3xl">
          <LeadForm
            title="¿Interesado en clases particulares?"
            subtitle="Cuéntanos tu objetivo y te proponemos un plan personalizado"
            ctaText="Solicitar información"
            source="clases-particulares"
            showPhone={true}
            showAge={true}
            showLevel={true}
          />
        </div>
      </section>

      <Footer />

      {/* Schema.org Structured Data */}
      <SchemaMarkup schema={courseSchema} />
    </>
  );
}
