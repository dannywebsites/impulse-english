import React, { useEffect } from 'react';
import { BookOpen, Award, Target, Users, Zap, GraduationCap, Clock, CheckCircle, Star, Phone, Calendar } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import LeadForm from '../../components/LeadForm';
import LazyVideo from '../../components/LazyVideo';
import OptimizedImage from '../../components/OptimizedImage';
import SchemaMarkup from '../../components/SchemaMarkup';
import Breadcrumb from '../../components/Breadcrumb';
import FAQSection from '../../components/FAQSection';
import SEOHead from '../../components/SEOHead';
import { generateCourseSchema, businessInfo } from '../../utils/schemaData';
import FullPhotoGallery from '../../components/FullPhotoGallery';
import { primariaImages as galleryImages } from '../../src/data/academyImages';
import { studentImages } from '../../src/data/images';

const courseSchema = generateCourseSchema({
  name: "Curso de Inglés Primaria (6-12 años)",
  description: "Clases de inglés para primaria en La Vaguada / Barrio del Pilar. Cambridge Young Learners, grupos reducidos, profesores cualificados y seguimiento. Impulse English Academy.",
  url: `${businessInfo.url}/ingles-la-vaguada/primaria`,
  courseCode: "PRIM-CAM",
  educationalLevel: "Primary",
  timeRequired: "PT2H",
  price: "71",
  image: "https://impulseenglish.s3.us-east-1.amazonaws.com/impulsephotos/IMG_4117.PNG"
});


const faqs = [
  {
    question: "¿Cómo sé qué nivel tiene mi hijo?",
    answer: "Con una prueba de nivel sencilla y observación en clase. Evaluamos comprensión, vocabulario, lectura y expresión oral según su edad. Así evitamos grupos descompensados y conseguimos progreso real. Te explicamos el punto de partida y el plan de mejora de forma clara."
  },
  {
    question: "¿Se puede preparar Cambridge en primaria?",
    answer: "Sí, con un enfoque adecuado. No se trata de \"examen\" desde el primer día, sino de construir base y familiaridad con el formato. Cuando el alumno está listo, trabajamos tareas tipo, vocabulario y simulacros. El objetivo es seguridad y progreso, no presión."
  },
  {
    question: "¿Qué es más importante: gramática o hablar?",
    answer: "Ambas, pero en el orden correcto. Primero comprensión y vocabulario útil, después estructura y finalmente producción oral cada vez más fluida. En primaria la clave es que el alumno participe y se acostumbre a usar el idioma de forma natural, con corrección progresiva."
  },
  {
    question: "¿Qué pasa si le cuesta hablar en inglés?",
    answer: "Es normal. Creamos un entorno de confianza y usamos dinámicas guiadas: preguntas cortas, juegos de rol y rutinas repetibles. La participación aumenta cuando el niño entiende y se siente seguro. Corregimos sin cortar la comunicación, para mantener motivación."
  },
  {
    question: "¿Cómo reforzar en casa sin agobiar?",
    answer: "Con rutinas cortas: 10 minutos de lectura sencilla, canciones, vídeos apropiados y repetir frases útiles. No hace falta traducir todo ni hacer \"deberes\" largos. Te daremos recomendaciones según edad y nivel para acompañar el aprendizaje con calma y constancia."
  },
  {
    question: "¿Qué tamaño de grupo es ideal?",
    answer: "Grupos reducidos ayudan a que cada alumno hable y reciba atención. Además permiten detectar errores a tiempo y reforzar hábitos buenos. En primaria, la participación es clave: cuanto más interactúa, más retiene. Por eso cuidamos el tamaño y el equilibrio del grupo."
  },
  {
    question: "¿Cómo medís el progreso?",
    answer: "Con evaluación continua: pequeñas pruebas, tareas de comprensión, lectura y participación oral. También observación en clase y objetivos por trimestre. Así evitamos \"sorpresas\" y se ve el avance real. Si el alumno prepara Cambridge, añadimos simulacros específicos."
  },
  {
    question: "¿Hay clase de prueba?",
    answer: "Sí. Ofrecemos clase/prueba de nivel para ubicar al alumno en su grupo ideal. Así puedes ver el ambiente, el método y cómo trabajamos. Sin compromiso."
  }
];

export default function PrimariaPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <SEOHead
        title="Inglés Primaria (6–12) Cambridge Young Learners | La Vaguada – Barrio del Pilar"
        description="Clases de inglés para primaria en La Vaguada / Barrio del Pilar. Cambridge Young Learners, grupos reducidos, profesores cualificados y seguimiento. Impulse English Academy."
        keywords="clases inglés primaria la vaguada, cambridge young learners, inglés niños 6-12 años, academia inglés primaria barrio del pilar"
        canonical="/ingles-la-vaguada/primaria"
      />
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-24 pb-16 md:pt-32 md:pb-24 bg-gradient-to-br from-blue-500 to-cyan-600 overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <OptimizedImage
            image={studentImages.primarySecondary}
            className="w-full h-full object-cover"
            sizes="100vw"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/80 to-cyan-600/80"></div>
        <div className="relative z-10 container mx-auto px-6 md:px-12 mb-6">
          <Breadcrumb
            items={[
              { label: 'Cursos', href: '/ingles-la-vaguada/infantil' },
              { label: 'Primaria (6-12 años)' }
            ]}
            variant="light"
          />
        </div>

        <div className="relative container mx-auto px-6 md:px-12">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-6">
              <span className="bg-white/20 text-white text-sm font-bold px-4 py-2 rounded-full">
                6-12 años
              </span>
              <span className="bg-yellow-400 text-yellow-900 text-sm font-bold px-4 py-2 rounded-full">
                Cambridge Young Learners
              </span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white tracking-tight mb-6">
              Inglés para Primaria (6–12 años) | Cambridge Young Learners
            </h1>
            <p className="text-xl md:text-2xl text-white/90 font-light mb-8">
              En Impulse English Academy, academia de inglés en La Vaguada (Barrio del Pilar, Madrid norte), ayudamos a niños de primaria a construir una base sólida con clases dinámicas y estructuradas. Trabajamos comprensión, vocabulario, lectura y comunicación con un enfoque motivador y progresivo.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/reservar-clase"
                className="bg-white text-blue-600 font-bold py-4 px-8 rounded-lg hover:bg-yellow-400 hover:text-blue-900 transition-colors text-center"
              >
                Prueba de nivel GRATIS
              </Link>
              <a
                href="tel:+34604910611"
                className="bg-white/10 backdrop-blur-sm text-white border border-white/30 font-bold py-4 px-8 rounded-lg hover:bg-white hover:text-blue-600 transition-colors text-center flex items-center justify-center gap-2"
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
              <Users className="w-5 h-5 text-blue-500" />
              <span className="text-zinc-700 font-medium">Máx. 10 alumnos</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-5 h-5 text-blue-500" />
              <span className="text-zinc-700 font-medium">2 horas/semana</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="w-5 h-5 text-blue-500" />
              <span className="text-zinc-700 font-medium">L/M o M/J</span>
            </div>
            <div className="flex items-center gap-2">
              <Award className="w-5 h-5 text-yellow-500" />
              <span className="text-zinc-700 font-medium">100% aprobados Cambridge</span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 md:py-20 px-6 bg-zinc-50">
        <div className="container mx-auto max-w-4xl">
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 mb-6">
              Cambridge Young Learners
            </h2>

            <div className="prose prose-lg text-zinc-600">
              <p className="mb-4">
                Preparamos el camino con objetivos claros y actividades que refuerzan el idioma de forma práctica. Si el alumno lo necesita, orientamos hacia Cambridge Young Learners con planificación y simulacros adaptados.
              </p>
            </div>

            <h3 className="text-2xl md:text-3xl font-bold text-zinc-900 mt-8 mb-4">
              Grupos por nivel real
            </h3>

            <div className="prose prose-lg text-zinc-600">
              <p className="mb-4">
                No agrupamos solo por edad: hacemos prueba de nivel y ubicamos al alumno en el grupo donde más avance con confianza.
              </p>
            </div>

            <h3 className="text-2xl md:text-3xl font-bold text-zinc-900 mt-8 mb-4">
              Seguimiento y comunicación con familias
            </h3>

            <div className="prose prose-lg text-zinc-600">
              <p className="mb-4">
                Incluimos evaluación continua y feedback para que familias y alumnos sepan qué se está trabajando y cómo mejorar.
              </p>
            </div>

            {/* Cambridge Badge */}
            <div className="mt-8 p-6 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl border border-blue-200">
              <div className="flex items-start gap-4">
                <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <Award className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-zinc-900 text-lg mb-2">100% Aprobados Cambridge 24/25</h3>
                  <p className="text-zinc-600 text-sm">
                    Todos nuestros alumnos que se presentaron a exámenes Cambridge Young Learners en 24/25 aprobaron. Preparamos con material oficial y simulacros de examen.
                  </p>
                </div>
              </div>
            </div>

            {/* Location and Progression Links */}
            <div className="mt-6 p-4 bg-blue-50 rounded-xl border border-blue-100">
              <p className="text-zinc-700 text-sm mb-3">
                <strong>¿Dónde estamos?</strong> Nuestra <Link to="/academia-ingles-barrio-del-pilar" className="text-blue-600 hover:underline font-medium">academia en Barrio del Pilar</Link>, junto a <Link to="/academia-ingles-la-vaguada" className="text-blue-600 hover:underline font-medium">La Vaguada</Link>, está perfectamente comunicada en metro y autobús.
              </p>
              <p className="text-zinc-600 text-sm">
                Si tu hijo es más pequeño, consulta nuestros <Link to="/ingles-la-vaguada/infantil" className="text-blue-600 hover:underline font-medium">cursos de infantil</Link>. Si ya está en el instituto, prepárale para el futuro con <Link to="/ingles-la-vaguada/secundaria" className="text-blue-600 hover:underline font-medium">inglés para secundaria</Link> y preparación para <Link to="/examenes-cambridge" className="text-blue-600 hover:underline font-medium">exámenes Cambridge</Link>.
              </p>
            </div>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              {
                icon: <BookOpen className="w-6 h-6" />,
                title: "Enfoque comunicativo",
                description: "Las clases son dinámicas y participativas. Menos gramática en la pizarra, más hablar y usar el idioma."
              },
              {
                icon: <Award className="w-6 h-6" />,
                title: "Preparación Cambridge",
                description: "Starters, Movers, Flyers, A2 Key... preparamos para todos los niveles con material oficial."
              },
              {
                icon: <Target className="w-6 h-6" />,
                title: "Seguimiento personalizado",
                description: "Evaluación continua e informes de progreso para que sepas cómo avanza tu hijo."
              },
              {
                icon: <Users className="w-6 h-6" />,
                title: "Grupos reducidos",
                description: "Máximo 10 alumnos por grupo, agrupados por nivel real (no por edad del colegio)."
              },
              {
                icon: <Zap className="w-6 h-6" />,
                title: "Metodología activa",
                description: "Proyectos, juegos, debates adaptados a su edad. Aprender haciendo."
              },
              {
                icon: <GraduationCap className="w-6 h-6" />,
                title: "Profesores expertos",
                description: "Docentes con experiencia en educación primaria y certificados Cambridge."
              }
            ].map((feature, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-sm border border-zinc-100 flex items-start gap-4">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600 flex-shrink-0">
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
              Preparación Cambridge para Primaria
            </h2>
            <p className="text-zinc-600">
              Descubre cómo preparamos a los alumnos para sus exámenes Cambridge
            </p>
          </div>
          <LazyVideo
            videoId="G_fFoyb8sdc"
            title="Cambridge Young Learners - Starters, Movers y Flyers"
            className="shadow-xl"
          />
        </div>
      </section>

      {/* Cambridge Young Learners Section */}
      <section className="py-16 px-6 bg-blue-600">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Certificaciones Cambridge Young Learners
          </h2>
          <p className="text-white/80 mb-8">
            Los primeros certificados oficiales de inglés de tu hijo/a
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {["Pre-A1 Starters", "A1 Movers", "A2 Flyers", "A2 Key"].map((level, i) => (
              <span key={i} className="bg-white/20 text-white px-4 py-2 rounded-full text-sm font-medium">
                {level}
              </span>
            ))}
          </div>
          <Link
            to="/examenes-cambridge"
            className="inline-block bg-white text-blue-600 font-bold py-3 px-6 rounded-lg hover:bg-yellow-400 hover:text-blue-900 transition-colors"
          >
            Ver todos los exámenes Cambridge
          </Link>
        </div>
      </section>

      {/* Schedule & Levels Section */}
      <section className="py-16 px-6 bg-white">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 mb-4">
              Niveles y horarios
            </h2>
            <p className="text-zinc-500 text-lg">
              2 clases semanales de 1 hora. Elige lunes/miércoles o martes/jueves.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-8 rounded-2xl border border-blue-100">
              <h3 className="text-xl font-bold text-zinc-900 mb-4">Niveles disponibles</h3>
              <ul className="space-y-3">
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span className="text-zinc-700"><strong>Pre-A1 Starters:</strong> Primeros pasos</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span className="text-zinc-700"><strong>A1 Movers:</strong> Base sólida</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span className="text-zinc-700"><strong>A2 Flyers:</strong> Comunicación fluida</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span className="text-zinc-700"><strong>A2 Key:</strong> Primera certificación oficial</span>
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-8 rounded-2xl border border-green-100">
              <h3 className="text-xl font-bold text-zinc-900 mb-4">¿Qué incluye?</h3>
              <ul className="space-y-3">
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span className="text-zinc-700">2 horas semanales (L/M o M/J)</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span className="text-zinc-700">Material Cambridge incluido</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span className="text-zinc-700">Simulacros de examen</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span className="text-zinc-700">Informes de progreso</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span className="text-zinc-700">Plataforma online complementaria</span>
                </li>
              </ul>
            </div>
          </div>

          {/* CTA */}
          <div className="mt-12 text-center">
            <div className="inline-block bg-green-100 text-green-800 font-bold px-6 py-3 rounded-full mb-6">
              Prueba de nivel gratuita
            </div>
            <p className="text-zinc-600 mb-6">
              Evaluamos el nivel real de tu hijo para ubicarlo en el grupo adecuado. Sin compromiso.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/reservar-clase"
                className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-8 rounded-lg transition-colors"
              >
                Solicitar prueba de nivel
              </Link>
              <a
                href="https://wa.me/34604910611?text=Hola,%20me%20gustaría%20información%20sobre%20inglés%20para%20primaria"
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
      <FullPhotoGallery
        images={galleryImages}
        pageUrl={`${businessInfo.url}/ingles-la-vaguada/primaria`}
        title="Nuestros alumnos de primaria"
        subtitle="Aprenden inglés mientras se preparan para certificaciones Cambridge"
      />

      {/* FAQ Section - With Schema Markup */}
      <FAQSection
        faqs={faqs}
        title="Preguntas frecuentes sobre inglés para primaria"
      />

      {/* Lead Form */}
      <section className="py-16 px-6 bg-white">
        <div className="container mx-auto max-w-3xl">
          <LeadForm
            title="¿Quieres más información?"
            subtitle="Déjanos tus datos y te contactamos para resolver todas tus dudas"
            ctaText="Solicitar información"
            source="curso-primaria"
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
