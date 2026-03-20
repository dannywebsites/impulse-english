import React, { useEffect, useState } from 'react';
import { Star, Quote, Play, ChevronLeft, ChevronRight } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import LeadForm from '../components/LeadForm';
import LazyVideo from '../components/LazyVideo';
import OptimizedImage from '../components/OptimizedImage';
import Breadcrumb from '../components/Breadcrumb';
import SEOHead from '../components/SEOHead';
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

const googleReviews = [
  {
    quote: "Luego de pasar por varias academias en toda Madrid esta fue la única que dio con el método y el contenido perfecto para aprender, tengo un C1 y es todo gracias a ellos.",
    name: "Cesar Seneca Tellechea Corral",
    role: "Local Guide"
  },
  {
    quote: "Excelente academia!!! No he podido elegir mejor. Desde que llevo a mis hijos están aprobando inglés y sobre todo que van encantados. Hay varios niveles. El trato es excepcional. Son profesionales que les gusta su trabajo, cercanos y hay muy bien ambiente.",
    name: "Lidia Ramirez",
    role: "Madre de alumnos"
  },
  {
    quote: "Yo he tenido a dos de los profesores que están en la academia, JP y Dani desde que era pequeña y estoy encantada con ellos. Los tengo desde que tenía 8 años y ahora tengo 17 y mi evolución en inglés ha sido gracias a ellos totalmente.",
    name: "Lucia Salmerón",
    role: "Alumna desde los 8 años"
  },
  {
    quote: "Hacer el intensivo de inglés con JP ha sido un acierto total. Tiene una forma de enseñar súper original, mezcla las explicaciones con historias que te atrapan y hacen que te rías mientras aprendes.",
    name: "María Comas",
    role: "Local Guide"
  },
  {
    quote: "Impulse Academy es y será la mejor academia para aprender inglés! Los mejores maestros, atención de la mejor calidad y la disponibilidad de horarios que tienen son muy buenos!",
    name: "Jorge Martinez",
    role: "Padre de alumna"
  },
  {
    quote: "Mi hija estudia en Impulse English Academy y estoy muy contenta con los resultados. JP no solo enseña inglés, también ha acompañado a mi hija en un momento difícil de adaptación como emigrante.",
    name: "Yurisbeth Rivero Chirinos",
    role: "Madre de alumna"
  },
  {
    quote: "Gracias a Impulse logré obtener mi certificado C1 de inglés. Esto me ha abierto muchas puertas en el mercado laboral. El ambiente es familiar y cercano.",
    name: "Gonzalo Tarascón",
    role: "Local Guide"
  },
  {
    quote: "Después de pasar por otros centros con poco éxito, he encontrado la academia ideal para mi. Estoy muy satisfecha con el método, mi profesor y mi progreso con el idioma.",
    name: "Aurora Jimenez Solano",
    role: "Local Guide"
  },
  {
    quote: "Fue una suerte encontrar esta academia con tan grandes profesionales. Gracias a ellos he conseguido el B2, la metodología hace que aprendas rápido y no olvides.",
    name: "Laura García Lomas",
    role: "Alumna"
  },
  {
    quote: "Muy recomendable. Se adaptan al perfil de cada alumno adaptando las clases según las necesidades. Tras probar varias academias, éste es el único lugar en el que han conseguido que mi hijo acuda contento y motivado.",
    name: "Rosa E.",
    role: "Madre de alumno"
  },
  {
    quote: "Es una academia de inglés excepcional donde la calidad de la enseñanza y la atención personalizada se combinan para ofrecer una experiencia educativa única.",
    name: "Felix Maria",
    role: "Alumno"
  },
  {
    quote: "Estoy muy contenta con las clases de inglés con la profesora Ahu. Es una excelente profesional: explica con claridad, tiene mucha paciencia y hace que las clases sean dinámicas.",
    name: "Khadija Ziyati",
    role: "Alumna adulta"
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
      <SEOHead
        title="Opiniones y Testimonios"
        description="Opiniones reales de alumnos de Impulse English Academy. 145+ reseñas 5 estrellas en Google. Testimonios de éxito con Cambridge y Linguaskill."
        keywords="opiniones academia inglés madrid, reseñas impulse english, testimonios alumnos cambridge, valoraciones clases inglés"
        canonical="/testimonios"
      />
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-24 pb-16 md:pt-32 md:pb-24 bg-gradient-to-br from-accent-blue to-blue-900 overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <OptimizedImage
            image={certificationImages.studentC1}
            className="w-full h-full object-cover"
            sizes="100vw"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-accent-blue/90 to-accent-blue/70"></div>
        <div className="relative container mx-auto px-6 md:px-12 mb-6">
          <Breadcrumb
            items={[
              { label: 'Testimonios' }
            ]}
            variant="light"
          />
        </div>

        <div className="relative container mx-auto px-6 md:px-12">
          <div className="max-w-4xl">
            <span className="inline-block bg-white/20 text-white text-sm font-bold px-4 py-2 rounded-full mb-6">
              145+ Reseñas 5 Estrellas
            </span>
            <h1 className="text-4xl md:text-6xl font-bold text-white tracking-tight mb-6">
              Historias Reales de Transformación
            </h1>
            <p className="text-xl md:text-2xl text-white/90 font-light leading-relaxed">
              No nos creas a nosotros. Escucha a las personas cuyas vidas hemos ayudado a cambiar.
            </p>
          </div>
        </div>
      </section>

      {/* Our Philosophy Section */}
      <section className="py-12 md:py-16 px-6 bg-white">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 mb-8">
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
      <section className="py-12 md:py-16 px-6 bg-zinc-50">
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
              <div key={index} className="bg-white rounded-2xl overflow-hidden shadow-lg flex flex-col">
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
        </div>
      </section>

      {/* Google Reviews Grid */}
      <section className="py-12 md:py-16 px-6 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <div className="flex justify-center items-center gap-2 mb-4">
              <svg className="w-8 h-8" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
              </svg>
              <span className="text-2xl font-bold text-zinc-900">Google Reviews</span>
            </div>
            <div className="flex justify-center gap-1 mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-6 h-6 text-yellow-400 fill-yellow-400" />
              ))}
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-zinc-900 mb-4">
              145+ Familias Nos Dan 5 Estrellas
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
                className="bg-zinc-50 p-6 rounded-xl border border-zinc-100 hover:shadow-lg transition-shadow"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
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
              href="https://www.google.com/maps/place/Impulse+English+Academy/@40.4743948,-3.7084812,17z/data=!3m1!4b1!4m15!1m8!3m7!1s0xd422909a0b6b11b:0xbe6ef3e2ba8bb87b!2sImpulse+English+Academy!8m2!3d40.4743948!4d-3.7059009!10e1!16s%2Fg%2F11strq74y1!3m5!1s0xd422909a0b6b11b:0xbe6ef3e2ba8bb87b!8m2!3d40.4743948!4d-3.7059009!16s%2Fg%2F11strq74y1?entry=ttu"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-accent-blue text-white font-bold py-4 px-8 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Ver Todas las Reseñas en Google
            </a>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-12 md:py-16 px-6 bg-gradient-to-br from-accent-blue to-blue-900 text-white">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Tu Historia Puede Ser la Siguiente
          </h2>
          <p className="text-xl text-white/80 mb-10 max-w-2xl mx-auto">
            No te quedes con nuestras palabras. Escucha a nuestros alumnos. Y cuando estés listo, únete a nuestra comunidad de más de 145 familias que confían en nosotros.
          </p>
        </div>
      </section>

      {/* Lead Form */}
      <section className="py-12 md:py-16 px-6 bg-white">
        <div className="container mx-auto max-w-3xl">
          <LeadForm
            title="Empieza Tu Transformación"
            subtitle="Reserva una clase de prueba gratuita y descubre cómo podemos ayudarte"
            ctaText="Reservar clase gratuita"
            source="testimonials"
            showPhone={true}
          />
        </div>
      </section>

      <Footer />
    </>
  );
}
