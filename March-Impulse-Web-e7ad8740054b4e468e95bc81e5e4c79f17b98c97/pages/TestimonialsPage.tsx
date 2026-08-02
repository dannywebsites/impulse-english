import React, { useEffect, useState } from 'react';
import { Star, Quote, Play, ChevronLeft, ChevronRight } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import LeadForm from '../components/LeadForm';
import LazyVideo from '../components/LazyVideo';
import OptimizedImage from '../components/OptimizedImage';
import Breadcrumb from '../components/Breadcrumb';
import { facilityImages, certificationImages } from '../src/data/images';

const videoTestimonials = [
  {
    videoId: "yMLWvuW5hOQ",
    name: "Sergio",
    title: "De estudiante a trabajar en inglés",
    description: "Sergio llegó a nosotros queriendo mejorar su inglés para su carrera profesional. Hoy trabaja en un entorno completamente en inglés."
  },
  {
    videoId: "ZiEizGt2DkI",
    name: "Daniel de la Peña",
    title: "Profesor cualificado gracias al inglés",
    description: "Daniel necesitaba certificar su nivel de inglés para su carrera docente. Hoy es un profesor cualificado que usa el inglés día a día."
  }
];

// Vertical testimonials (YouTube Shorts). Kept apart from the 16:9 list because a 9:16
// clip pillarboxes inside the landscape cards — these get their own portrait layout.
const shortTestimonials = [
  {
    videoId: "ZK1UjWaghu0",
    name: "Josh Mary",
    title: "De la inseguridad a la confianza",
    description: "Josh Mary llegó en septiembre hablando algo de inglés, pero con muchos vacíos de gramática y vocabulario y sin saber en qué punto estaba. En las clases nocturnas de B1 con JP ha encontrado un plan claro, las herramientas para mejorar y, sobre todo, la confianza para equivocarse y aprender."
  }
];

const googleReviews = [
  {
    name: "Ylich Layana",
    role: "Reseña verificada en Google",
    quote: "Es una académica con la que estoy muy a gusto siento que mi nivel de ingles va mejorando con cada clase."
  },
  {
    name: "Javier Sanz Lázaro",
    role: "Madre/padre de alumno",
    quote: "Es una academia muy buena. Mis hijas van muy contentas a la clase de inglés."
  },
  {
    name: "Maru Teran",
    role: "Madre/padre de alumno",
    quote: "Recomiendo la  Academia, mi hijo ha aprendido mucho, les agradezco la atención y la dedicación.  Muchas gracias!"
  },
  {
    name: "Samuel Bryan",
    role: "Reseña verificada en Google",
    quote: "¡La mejor academia de inglés! Los profesores son super divertidos y amables. Lo recomiendo 100%"
  },
  {
    name: "Roberto Herrero",
    role: "Reseña verificada en Google",
    quote: "Solo tengo palabras de agradecimiento para Impulse English Academy y muy en particular a mi profesor Daniel. Gracias de nuevo por que este aprendizaje haya sido tan fácil y rápido. Os deseo lo mejor."
  },
  {
    name: "Toña Agüero",
    role: "Reseña verificada en Google",
    quote: "Los profesores son todos muy agradables y muy atentos, se adaptan rápido y siempre sacan una sonrisa mientras que aprendes con facilidad y eficacia el inglés. Saludos"
  },
  {
    name: "Maria Jose Navarredonda",
    role: "Reseña verificada en Google",
    quote: "Los profes son fantástico y con gran experiencia. Aprender inglés adquiere otro sentido, os lo dice alguien para la que aprender inglés era difícil.  Se aprende con ganas e ilusión. Gracias"
  },
  {
    name: "Marco Garcia",
    role: "Reseña verificada en Google",
    quote: "Buscaba una escuela con quien conectará y entendieran mi necesidades de aprendizaje y siento que en Impulse estoy muy contento."
  },
  {
    name: "Alicia Fernandez",
    role: "Reseña verificada en Google",
    quote: "Una gran academia con buenos profesores y la implicación de JP es maravillosa (es uno de los dueños) Recomiendo la academia 100%"
  },
  {
    name: "Isabella Giron Iglesias",
    role: "Reseña verificada en Google",
    quote: "Jp es mi profesor..el mejor profesor y la mejor academia en el barrio!! Muchas gracias por todo"
  },
  {
    name: "Mariela Ruiz",
    role: "Reseña verificada en Google",
    quote: "Muy contenta por recibirme en vuestra academia y muy contenta con lo que voy aprendiendo 😊"
  },
  {
    name: "Mariana Arias",
    role: "Reseña verificada en Google",
    quote: "Excelente atención, el profe JP es muy majo, siempre dispuesto a enseñarnos.!"
  }
];

export default function TestimonialsPage() {
  const [currentReview, setCurrentReview] = useState(0);

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = 'Testimonios | Impulse English Academy La Vaguada – Barrio del Pilar';
  }, []);

  const nextReview = () => {
    setCurrentReview((prev) => (prev + 1) % googleReviews.length);
  };

  const prevReview = () => {
    setCurrentReview((prev) => (prev - 1 + googleReviews.length) % googleReviews.length);
  };

  return (
    <>
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-28 pb-20 md:pt-36 md:pb-32 overflow-hidden">
        <div className="absolute inset-0">
          <OptimizedImage
            image={certificationImages.studentC1}
            className="w-full h-full object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-accent-blue/85"></div>
        </div>
        <div className="absolute inset-0 hero-grain opacity-[0.03]"></div>
        <div className="absolute -top-36 -right-36 w-[480px] h-[480px] rounded-full bg-brand-red/[0.05]"></div>
        <div className="absolute -bottom-20 -left-20 w-72 h-72 rounded-full bg-white/[0.03]"></div>

        <div className="relative z-10 container mx-auto px-6 md:px-12">
          <Breadcrumb
            items={[
              { label: 'Testimonios' }
            ]}
            variant="light"
          />

          <div className="max-w-4xl mt-12 md:mt-16">
            <div className="flex items-center gap-4 mb-6 animate-hero-fade-up">
              <div className="w-8 h-px bg-white/40"></div>
              <span className="font-display text-white/70 text-xs uppercase tracking-[0.2em]">
                155+ Reseñas 5 Estrellas
              </span>
            </div>
            <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl text-white tracking-tight leading-[1.1] mb-6 animate-hero-fade-up animation-delay-100">
              Historias Reales de Transformación
            </h1>
            <div className="w-16 h-0.5 bg-brand-red mb-6 animate-hero-fade-up animation-delay-150"></div>
            <p className="font-display text-lg md:text-xl text-white/80 font-light leading-relaxed max-w-2xl animate-hero-fade-up animation-delay-200">
              No nos creas a nosotros. Escucha a las personas cuyas vidas hemos ayudado a cambiar.
            </p>
          </div>
        </div>
      </section>

      {/* Our Philosophy Section */}
      <section className="section px-6 bg-white">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="t-h2 text-zinc-900 mb-8">
            El Inglés Puede Cambiar Tu Vida
          </h2>
          <div className="space-y-6 text-lg text-zinc-600 leading-relaxed">
            <p>
              Entendemos que el inglés puede ser un reto. Pero también sabemos que el inglés puede ser algo hermoso que abre infinitas oportunidades.
            </p>
            <p>
              <strong className="text-zinc-900">Hemos visto cómo transforma las vidas de nuestros alumnos.</strong> Los hemos visto mudarse al extranjero y trabajar en inglés. Los hemos visto conseguir mejores salarios. Los hemos visto pasar de suspender en la universidad o en el colegio, o de llegar recién a España sin ninguna base en el idioma, a transformarse completamente.
            </p>
            <p className="text-xl font-medium text-accent-blue">
              De luchar con el inglés a prosperar con él.
            </p>
            <p>
              Por eso existimos. Por eso estamos aquí. Para ayudarte a hacer ese viaje.
            </p>
          </div>
        </div>
      </section>

      {/* Video Testimonials Section */}
      <section className="section px-6 surface-alt">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <span className="text-red-500 font-bold tracking-widest text-xs uppercase mb-4 block">
              Testimonios en Video
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-zinc-900 mb-4">
              Escucha Sus Historias
            </h2>
            <p className="text-zinc-600 text-lg max-w-2xl mx-auto">
              Nuestros alumnos comparten cómo el inglés ha cambiado sus vidas profesionales y personales.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {videoTestimonials.map((testimonial, index) => (
              <div key={index} className="card flex flex-col overflow-hidden">
                <div className="aspect-video">
                  <LazyVideo
                    videoId={testimonial.videoId}
                    title={`Testimonio de ${testimonial.name}`}
                  />
                </div>
                <div className="p-6 flex-1 flex flex-col justify-center">
                  <h3 className="text-xl font-bold text-zinc-900 mb-2 text-left">
                    {testimonial.name}
                  </h3>
                  <p className="text-accent-blue font-medium text-sm mb-3 text-left">
                    {testimonial.title}
                  </p>
                  <p className="text-zinc-600 text-left leading-relaxed">
                    {testimonial.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Vertical (Shorts) testimonials */}
          {shortTestimonials.map((testimonial, index) => (
            <div
              key={index}
              className="card overflow-hidden mt-8 max-w-2xl mx-auto flex flex-col md:flex-row md:items-center"
            >
              <div className="w-full max-w-[280px] mx-auto p-6 md:mx-0 md:shrink-0">
                <LazyVideo
                  videoId={testimonial.videoId}
                  title={`Testimonio de ${testimonial.name}`}
                  vertical
                />
              </div>
              <div className="px-6 pb-6 md:px-2 md:py-8 md:pr-8 flex-1">
                <h3 className="text-xl font-bold text-zinc-900 mb-2 text-left">
                  {testimonial.name}
                </h3>
                <p className="text-accent-blue font-medium text-sm mb-3 text-left">
                  {testimonial.title}
                </p>
                <p className="text-zinc-600 text-left leading-relaxed">
                  {testimonial.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Google Reviews Grid */}
      <section className="section px-6 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <div className="flex justify-center items-center gap-2 mb-4">
              <svg className="w-8 h-8" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
              </svg>
              <span className="t-h3 text-zinc-900">Google Reviews</span>
            </div>
            <div className="flex justify-center gap-1 mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-6 h-6 text-amber-400 fill-amber-400" />
              ))}
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-zinc-900 mb-4">
              150+ Familias Nos Dan 5 Estrellas
            </h2>
            <p className="text-zinc-600 text-lg">
              Todas estas opiniones son de alumnos y familias reales verificadas en Google.
            </p>
          </div>

          {/* Reviews Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {googleReviews.map((review, index) => (
              <div
                key={index}
                className="card-interactive p-6"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-amber-400 fill-amber-400" />
                  ))}
                </div>
                <Quote className="w-8 h-8 text-accent-blue/20 mb-3" />
                <p className="text-zinc-700 mb-4 leading-relaxed">
                  "{review.quote}"
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-accent-blue flex items-center justify-center text-white font-bold">
                    {review.name.charAt(0)}
                  </div>
                  <div>
                    <p className="font-bold text-zinc-900 text-sm">{review.name}</p>
                    <p className="text-xs text-zinc-500">{review.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* See All Reviews Button */}
          <div className="mt-12 text-center">
            <a
              href="https://share.google/GuRfJ3TjrnIIUhrdk"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-accent-blue text-white font-bold py-4 px-8 rounded-lg hover:bg-accent-blue-800 transition-colors"
            >
              Ver Todas las Reseñas en Google
            </a>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="section-lead px-6 bg-accent-blue text-white">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Tu Historia Puede Ser la Siguiente
          </h2>
          <p className="text-xl text-white/80 mb-10 max-w-2xl mx-auto">
            No te quedes con nuestras palabras. Escucha a nuestros alumnos. Y cuando estés listo, únete a nuestra comunidad de más de 150 familias que confían en nosotros.
          </p>
        </div>
      </section>

      {/* Lead Form */}
      <section className="section-lead px-6 bg-white">
        <div className="container mx-auto max-w-3xl">
          <LeadForm
            title="Empieza Tu Transformación"
            subtitle="Pide tu prueba de nivel gratuita y descubre cómo podemos ayudarte"
            ctaText="Pedir prueba de nivel"
            source="testimonials"
            showPhone={true}
            variant="refresh"
          />
        </div>
      </section>

      <Footer />
    </>
  );
}
