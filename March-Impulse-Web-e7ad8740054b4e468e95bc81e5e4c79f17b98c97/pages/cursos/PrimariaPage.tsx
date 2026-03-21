import React, { useEffect } from 'react';
import { BookOpen, Award, Target, Users, Zap, GraduationCap, Clock, CheckCircle, Star, Phone, Calendar } from 'lucide-react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import LeadForm from '../../components/LeadForm';
import LazyVideo from '../../components/LazyVideo';
import OptimizedImage from '../../components/OptimizedImage';
import Breadcrumb from '../../components/Breadcrumb';
import FAQSection from '../../components/FAQSection';
import { generateCourseSchema, businessInfo } from '../../utils/schemaData';
import FullPhotoGallery from '../../components/FullPhotoGallery';
import { primariaImages as galleryImages } from '../../src/data/academyImages';
import { studentImages } from '../../src/data/images';

export const courseSchema = generateCourseSchema({
  name: "Curso de Inglés Primaria (6-12 años)",
  description: "Clases de inglés para primaria en La Vaguada / Barrio del Pilar. Cambridge Young Learners, grupos reducidos, profesores cualificados y seguimiento. Impulse English Academy.",
  url: `${businessInfo.url}/cursos-ingles/primaria`,
  courseCode: "PRIM-CAM",
  educationalLevel: "Primary",
  timeRequired: "PT2H",
  image: "https://impulseenglish.s3.us-east-1.amazonaws.com/impulsephotos/IMG_4117.PNG"
});


export const faqs = [
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
  },
  // Kids Primary PAAs (8)
  {
    question: "¿A qué edad empieza Primaria el inglés?",
    answer: "A los 6 años (1º Primaria) es edad ideal para inglés estructurado. El cerebro está preparado para lectura, escritura y reglas. Cambridge Young Learners (A1 Key, A2 Movers) son exámenes específicos 6-11 años. Algunos empiezan antes (4-5 años Infantil) con base natural."
  },
  {
    question: "¿Cuándo empezar examen Cambridge en Primaria?",
    answer: "A2 Movers (PET Junior) a los 8-10 años es edad común. Algunos alumnos brillantes pueden intentar antes, otros necesitan más tiempo. No es sobre edad, es sobre dominio de vocabulario y estructuras. Nunca presionamos; esperamos que el alumno esté listo."
  },
  {
    question: "¿Mi hijo odia escribir, qué hago?",
    answer: "Normal a esta edad. Escritura requiere coordinación motora aún en desarrollo. Combinamos escritura corta con actividades lúdicas (dibujar y etiquetar, completar palabras sencillas). Con tiempo y apoyo, la resistencia desaparece. No forzamos; evolucionamos gradualmente."
  },
  {
    question: "¿El colegio inglés es suficiente?",
    answer: "Depende de la calidad del programa del colegio. Si es 1-2 horas/semana tradicional, difícilmente alcance B1 antes de 6º Primaria. Academia especializada: 3-4 horas/semana + método conversacional = progreso más rápido. Ideal combinar: colegio + academia."
  },
  {
    question: "¿Leer en inglés siendo niño?",
    answer: "Sí, a partir de 7-8 años con libros adaptados (Easy Readers A1-A2). Lectura tiene beneficios enormes: gramática, vocabulario, pronunciación mental. Usar libros con ilustraciones, historias atractivas, longitud adecuada. 15-20 min lectura semanal = mejora visible en 2-3 meses."
  },
  {
    question: "¿Videos en inglés para niños?",
    answer: "Excelente complemento: series educativas (Peppa Pig, Hey Duggee), YouTube canales (English with Lucy, TED-Ed Kids). 15-20 min 2-3 veces/semana = exposición auditiva natural. Primero con subtítulos español, después inglés, finalmente sin. Elige contenido apropiado para edad e intereses."
  },
  {
    question: "¿Ayuda llevarle al extranjero de vacaciones?",
    answer: "Sí enorme. Una semana en país anglófono = inmersión natural, motivación real, confianza. Aunque no entienda todo, expone al idioma en contexto vivo. Valor educativo: 1 semana viaje = 1-2 meses de academia. Combina: verano extranjero + academia año escolar."
  },
  {
    question: "¿Cuándo sé que está listo para examen?",
    answer: "Cuando ha cubierto 80% del vocabulario del examen, entiende instrucciones en inglés, puede escribir párrafos simples y habla con cierta fluidez. Realizamos simulacros: si puntúa 70%+ consistentemente, está listo. La confianza es clave; mejor esperar que fracasar."
  },
  {
    question: "¿A partir de qué edad puede un niño presentarse a Cambridge Young Learners?",
    answer: "Cambridge recomienda Pre-A1 Starters a partir de los 7 años aproximadamente, A1 Movers entre 8-11 años y A2 Flyers entre 9-12 años. No hay edad mínima oficial, pero el niño debe saber leer y escribir en su idioma. Lo importante es que esté preparado a nivel de vocabulario y comprensión, no solo por edad."
  },
  {
    question: "¿Qué nivel de inglés debería tener un niño de 10 años?",
    answer: "Depende de cuándo empezó y con qué intensidad. Un niño que estudia inglés desde los 4-5 años con constancia puede alcanzar nivel A2 a los 10 años. Si empezó más tarde (7-8 años), un nivel A1 sólido es un buen objetivo. Cada niño tiene su ritmo y lo importante es el progreso continuado, no comparar."
  },
  {
    question: "¿Es mejor academia de inglés o extraescolar del colegio para niños?",
    answer: "La academia especializada suele ofrecer grupos más reducidos, profesores dedicados exclusivamente al inglés, y un itinerario claro hacia certificaciones oficiales (Cambridge Young Learners). La extraescolar del colegio es cómoda logísticamente pero a menudo tiene grupos grandes y menos enfoque en progresión. Lo ideal depende de las prioridades de cada familia."
  }
];

export default function PrimariaPage() {
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
            <source media="(max-width: 640px)" srcSet="/images/optimized/heroes-mobile/primary-students-mobile.webp" type="image/webp" />
            <source media="(max-width: 640px)" srcSet="/images/optimized/heroes-mobile/primary-students-mobile.jpg" type="image/jpeg" />
            <img
              src="https://impulseenglish.s3.us-east-1.amazonaws.com/impulsephotos/NACHOS+photos.+/Primary+classes+students+smiling.JPG"
              alt="Clases de inglés primaria Madrid - estudiantes Impulse English Academy"
              className="w-full h-full object-cover object-top"
              loading="eager"
              fetchPriority="high"
            />
          </picture>
          <div className="absolute inset-0 bg-gradient-to-br from-blue-950/80 via-blue-900/70 to-cyan-900/55"></div>
        </div>
        <div className="absolute inset-0 hero-grain opacity-[0.03]"></div>
        <div className="absolute -top-40 -right-40 w-[480px] h-[480px] rounded-full bg-cyan-400/[0.05]"></div>
        <div className="absolute -bottom-20 -left-20 w-72 h-72 rounded-full bg-blue-400/[0.06]"></div>

        <div className="relative z-10 container mx-auto px-6 md:px-12">
          <Breadcrumb
            items={[
              { label: 'Cursos', href: '/cursos-ingles/infantil' },
              { label: 'Primaria (6-12 años)' }
            ]}
            variant="light"
          />

          <div className="max-w-3xl mt-12 md:mt-16">
            <div className="flex items-center gap-4 mb-6 animate-hero-fade-up">
              <div className="w-8 h-px bg-white/40"></div>
              <span className="font-display text-white/70 text-xs uppercase tracking-[0.2em]">
                6–12 años · Cambridge Young Learners
              </span>
            </div>
            <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl text-white tracking-tight leading-[1.1] mb-6 animate-hero-fade-up animation-delay-100">
              Inglés para Primaria
            </h1>
            <div className="w-16 h-0.5 bg-brand-red mb-6 animate-hero-fade-up animation-delay-150"></div>
            <p className="font-display text-lg md:text-xl text-white/80 font-light leading-relaxed max-w-2xl mb-10 animate-hero-fade-up animation-delay-200">
              Construimos una base sólida con clases dinámicas, grupos reducidos y seguimiento personalizado. Cambridge Young Learners en La Vaguada.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 animate-hero-fade-up animation-delay-300">
              <a
              href="/reservar-clase"
                className="bg-white text-blue-950 font-display font-semibold py-4 px-8 rounded-lg hover:bg-amber-50 transition-all duration-300 text-center"
              >
                Prueba de nivel GRATIS
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
                <strong>¿Dónde estamos?</strong> Nuestra <a href="/academia-ingles-barrio-del-pilar" className="text-blue-600 hover:underline font-medium">academia en Barrio del Pilar</a>, junto a <a href="/academia-ingles-la-vaguada" className="text-blue-600 hover:underline font-medium">La Vaguada</a>, está perfectamente comunicada en metro y autobús.
              </p>
              <p className="text-zinc-600 text-sm">
                Si tu hijo es más pequeño, consulta nuestros <a href="/cursos-ingles/infantil" className="text-blue-600 hover:underline font-medium">cursos de infantil</a>. Si ya está en el instituto, prepárale para el futuro con <a href="/cursos-ingles/secundaria" className="text-blue-600 hover:underline font-medium">inglés para secundaria</a> y preparación para <a href="/examenes-cambridge" className="text-blue-600 hover:underline font-medium">exámenes Cambridge</a>.
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
          <a
              href="/examenes-cambridge"
            className="inline-block bg-white text-blue-600 font-bold py-3 px-6 rounded-lg hover:bg-yellow-400 hover:text-blue-900 transition-colors"
          >
            Ver todos los exámenes Cambridge
          </a>
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
              <a
              href="/reservar-clase"
                className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-8 rounded-lg transition-colors"
              >
                Solicitar prueba de nivel
              </a>
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
        pageUrl={`${businessInfo.url}/cursos-ingles/primaria`}
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
            title="Consulta disponibilidad para tu hijo"
            subtitle="Prueba de nivel gratuita para ubicarle en el grupo adecuado"
            ctaText="Solicitar prueba de nivel"
            source="curso-primaria"
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
