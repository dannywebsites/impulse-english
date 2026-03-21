import React, { useState } from 'react';
import { Quote, ChevronLeft, ChevronRight, Star } from 'lucide-react';
import { NAP } from '../utils/napData';

const testimonials = [
  {
    quote: "Luego de pasar por varias academias en toda Madrid esta fue la única que dio con el método y el contenido perfecto para aprender, tengo un C1 y es todo gracias a ellos.",
    name: "Cesar Seneca Tellechea Corral",
    role: "Local Guide",
    stars: 5
  },
  {
    quote: "Excelente academia!!! No he podido elegir mejor. Desde que llevo a mis hijos están aprobando inglés y sobre todo que van encantados. Hay varios niveles. El trato es excepcional. Son profesionales que les gusta su trabajo, cercanos y hay muy bien ambiente. Gracias a todos los profes (Danny, J.P...).",
    name: "Lidia Ramirez",
    role: "Madre de alumnos",
    stars: 5
  },
  {
    quote: "Yo he tenido a dos de los profesores que están en la academia, JP y Dani desde que era pequeña y estoy encantada con ellos. Los tengo desde que tenía 8 años y ahora tengo 17 y mi evolución en inglés ha sido gracias a ellos totalmente. Las clases son muy didácticas, se hacen muy amenas y se aprende mucho. Preparan genial para los exámenes de Cambridge.",
    name: "Lucia Salmerón",
    role: "Alumna desde los 8 años",
    stars: 5
  },
  {
    quote: "Hacer el intensivo de inglés con JP ha sido un acierto total. Tiene una forma de enseñar súper original, mezcla las explicaciones con historias que te atrapan y hacen que te rías mientras aprendes. ¡Las clases se pasan volando! He mejorado muchísimo en mi relación con el inglés (tenía un poquito de trauma). ¡Ojalá todos los profes fueran así!",
    name: "María Comas",
    role: "Local Guide",
    stars: 5
  },
  {
    quote: "Impulse Academy es y será la mejor academia para aprender inglés! Los mejores maestros, atención de la mejor calidad y la disponibilidad de horarios que tienen son muy buenos! Danny y JP son grandes profesionales, mi hija está encantada con ellos y sus clases. Más que Recomendados al 100%.",
    name: "Jorge Martinez",
    role: "Padre de alumna",
    stars: 5
  },
  {
    quote: "Estoy muy contenta con las clases de inglés con la profesora Ahu. Es una excelente profesional: explica con claridad, tiene mucha paciencia y hace que las clases sean dinámicas y fáciles de seguir. Gracias a ella he notado una gran mejora en mi nivel. ¡Totalmente recomendable!",
    name: "Khadija Ziyati",
    role: "Alumna adulta",
    stars: 5
  },
  {
    quote: "He tenido el gusto de poder asistir a esta academia durante menos de un año y sin duda ha sido una de las mejores ayudas que he podido tener, sobretodo por JP. Me ha dado muchos consejos que sin duda me ayudaron para el examen final, y el trato que han tenido en todo momento es súper gratificante y acogedor.",
    name: "Clara Sánchez",
    role: "Alumna",
    stars: 5
  },
  {
    quote: "Mi hija estudia en Impulse English Academy y estoy muy contenta con los resultados. JP no solo enseña inglés, también ha acompañado a mi hija en un momento difícil de adaptación como emigrante, haciéndola sentir vista, apoyada y parte de una pequeña comunidad que se siente como familia.",
    name: "Yurisbeth Rivero Chirinos",
    role: "Madre de alumna",
    stars: 5
  },
  {
    quote: "If you are looking to learn English in a fun, innovative and effective way, then look no further! I couldn't recommend Daniel and his team highly enough!",
    name: "Anna Farney",
    role: "Alumna",
    stars: 5
  },
  {
    quote: "Completamente agradecida con las facilidades y la atención, tanto de Philippe como de Danny. La idea de ir a una academia siempre me había parecido aburrida, pero definitivamente JP, Danny y el resto del equipo han conseguido hacerlo muy ameno. No tengo dudas que es el mejor lugar donde pueden estudiar y aprender inglés.",
    name: "Karina Garcia",
    role: "Alumna adulta",
    stars: 5
  },
  {
    quote: "Solo puedo decir cosas positivas de la experiencia que tiene mi hija con sus profesores. Lo más importante es que le gusta mucho ir a las clases. Ha notado que su evolución, tanto en el lenguaje hablado como en el escrito, ha mejorado mucho. En resumen, son grandes profesionales. Lo recomiendo 100%.",
    name: "María Jesús Zuazo Sahagún",
    role: "Madre de alumna",
    stars: 5
  },
  {
    quote: "Muy recomendable. Se adaptan al perfil de cada alumno adaptando las clases según las necesidades. Tras probar varias academias, éste es el único lugar en el que han conseguido que mi hijo acuda contento y motivado a sus clases de apoyo. JP es un gran profesional que sabe ganarse a los niños.",
    name: "Rosa E.",
    role: "Madre de alumno",
    stars: 5
  },
  {
    quote: "Algo fundamental para mi, es que no miran el reloj en sus clases, priman la calidad y miran por el alumno. Danny es mi profesor ahora, estoy encantada con sus clases de conversación. Las clases son muy entretenidas, siempre se adaptan a ti y a tus necesidades. Recomendable 100%.",
    name: "Mª Del Espino Monedero García",
    role: "Local Guide",
    stars: 5
  },
  {
    quote: "Es una academia de inglés excepcional donde la calidad de la enseñanza y la atención personalizada se combinan para ofrecer una experiencia educativa única. Las clases son divertidas y dinámicas, diseñadas para mantener la motivación y el interés del alumno. Es el lugar ideal para aprender inglés con excelencia y apoyo.",
    name: "Felix Maria",
    role: "Alumno",
    stars: 5
  },
  {
    quote: "El ambiente, los profesores, una academia excelente para todos los públicos. Mis hijos están encantados de ir.",
    name: "Pepi Moral Ventura",
    role: "Madre de alumnos",
    stars: 5
  },
  {
    quote: "Si quieres tener resultados, este es el sitio ideal para mejorar tu inglés! Súper profesionales y a la vez un ambiente cercano. Consiguen mantenerte motivado y que ganes confianza y fluidez con clases dinámicas y variadas. Se adaptan a las necesidades de los estudiantes.",
    name: "Lorena AP",
    role: "Local Guide",
    stars: 5
  },
  {
    quote: "Gracias a Impulse logré obtener mi certificado C1 de inglés. Esto me ha abierto muchas puertas en el mercado laboral. El ambiente es familiar y cercano, y siempre me sentí apoyado en todo el proceso. ¡Muchas gracias por todo!",
    name: "Gonzalo Tarascón",
    role: "Local Guide",
    stars: 5
  },
  {
    quote: "Thanks JP for your help with my exam. I highly recommend this academy for anyone looking to improve and getting their certification.",
    name: "Víctor RC",
    role: "Local Guide",
    stars: 5
  },
  {
    quote: "Muy contenta con haber encontrado esta academia para mi hijo. Todo el staff es MUY amable, dedicado y profesional. Mi hijo ha progresado muchísimo en su comprensión y desempeño en inglés. La metodología que usan mezcla el juego con los contenidos académicos. Recomiendo sinceramente Impulse English Academy.",
    name: "Marina Penerbosa",
    role: "Local Guide",
    stars: 5
  },
  {
    quote: "Hace un año encontré por casualidad la academia en el barrio. La experiencia... Increíble! Desde el primer momento Philip y Dani transmiten una confianza que los niños y padres percibimos. El trato es personalizado y se adaptan a cada niño según sus necesidades. Los profesores son nativos y te reciben cada día con una sonrisa. Recomiendo 100%!",
    name: "Gloria RM",
    role: "Madre de alumnas",
    stars: 5
  },
  {
    quote: "Después de pasar por otros centros con poco éxito, he encontrado la academia ideal para mi. Estoy muy satisfecha con el método, mi profesor y mi progreso con el idioma.",
    name: "Aurora Jimenez Solano",
    role: "Local Guide",
    stars: 5
  },
  {
    quote: "Fue una suerte encontrar esta academia con tan grandes profesionales. Gracias a ellos he conseguido el B2, la metodología hace que aprendas rápido y no olvides.",
    name: "Laura García Lomas",
    role: "Alumna",
    stars: 5
  },
  {
    quote: "Mi inglés ha mejorado, son buenísimos profesionales, buen método, mucha paciencia por su parte. Volveré para seguir mejorando.",
    name: "Paula Cuadrado",
    role: "Alumna",
    stars: 5
  },
  {
    quote: "Estoy encantada con esta academia, los profesores excelentes, y muy buen trato y excelente ambiente. Desde luego si tienes pensado mejorar tu inglés, este es el mejor lugar!",
    name: "Laura Cid Moreno",
    role: "Alumna",
    stars: 5
  },
  {
    quote: "Es genial, profesores amables y clases divertidas. He estado en el curso intensivo de verano y valió total la pena. Además J.P hace las clases super fácil de entender.",
    name: "Stefany Jiménez Espitia",
    role: "Alumna intensivo",
    stars: 5
  },
  {
    quote: "Me ha gustado mucho el trato que brinda el director de esta academia, es muy amable y excelente profesional. Como profesor muy bueno en explicar y se deja entender. Mi hija Ainhoa está encantada con él, le ha brindado la confianza necesaria para que ella se sienta en confianza.",
    name: "Margarita Sánchez",
    role: "Madre de alumna",
    stars: 5
  }
];

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const current = testimonials[currentIndex];

  return (
    <section id="testimonios" className="w-full bg-white py-12 md:py-20 px-6 relative overflow-hidden border-t border-zinc-100 scroll-mt-20">

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

            {/* Left: Heading */}
            <div>
                <span className="text-red-500 font-bold tracking-widest text-xs uppercase mb-4 md:mb-6 block">
                    Opiniones reales de Google
                </span>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-zinc-900 tracking-tight leading-[1.1] mb-4">
                    Lo que dicen nuestros estudiantes…
                </h2>
                <div className="w-24 h-1 bg-accent-blue/20 mb-6 md:mb-8"></div>
                <p className="text-base md:text-lg text-zinc-600 max-w-md mb-8 leading-relaxed">
                    Nuestros alumnos y familias destacan la calidad del profesorado, el ambiente cercano y los resultados obtenidos a lo largo del curso. Sus testimonios reflejan nuestro compromiso con una enseñanza de calidad y un aprendizaje significativo.
                </p>
                <div className="flex gap-4 items-center">
                    <button
                      onClick={prevTestimonial}
                      className="w-10 h-10 md:w-12 md:h-12 rounded-full border border-zinc-200 text-zinc-900 flex items-center justify-center hover:bg-accent-blue hover:text-white hover:border-accent-blue transition-colors"
                    >
                        <ChevronLeft className="w-5 h-5" />
                    </button>
                    <button
                      onClick={nextTestimonial}
                      className="w-10 h-10 md:w-12 md:h-12 rounded-full border border-zinc-200 text-zinc-900 flex items-center justify-center hover:bg-accent-blue hover:text-white hover:border-accent-blue transition-colors"
                    >
                        <ChevronRight className="w-5 h-5" />
                    </button>
                    <span className="text-sm text-zinc-400 ml-2">
                      {currentIndex + 1} / {testimonials.length}
                    </span>
                </div>
            </div>

            {/* Right: Testimonial Card */}
            <div className="bg-zinc-50 p-8 md:p-12 rounded-sm border border-zinc-100 relative shadow-sm min-h-[320px] flex flex-col justify-between">
                <Quote className="absolute top-8 right-8 md:top-10 md:right-10 w-8 h-8 md:w-12 md:h-12 text-accent-blue/10" />

                <div>
                    <div className="mb-6">
                        <div className="flex gap-1 mb-2">
                            {[...Array(current.stars)].map((_, i) => (
                                <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                            ))}
                        </div>
                    </div>

                    <blockquote className="text-lg md:text-xl font-light leading-relaxed mb-8 text-zinc-800">
                        "{current.quote}"
                    </blockquote>
                </div>

                <div className="flex items-center gap-4">
                    <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-accent-blue flex items-center justify-center text-white font-bold text-lg">
                      {current.name.charAt(0)}
                    </div>
                    <div>
                        <div className="font-bold text-zinc-900 tracking-wide text-sm md:text-base">{current.name}</div>
                        <div className="text-[10px] md:text-xs text-zinc-500 uppercase tracking-widest">{current.role}</div>
                    </div>
                </div>
            </div>

        </div>

        {/* Google Reviews Badge */}
        <div className="mt-12 flex justify-center">
          <a
            href={NAP.gbpUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 bg-white px-6 py-3 rounded-full shadow-sm border border-zinc-100 hover:shadow-md transition-shadow"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
              <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
              <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
              <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
            </svg>
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
              ))}
            </div>
            <span className="text-zinc-600 text-sm font-medium">150+ reseñas reales</span>
          </a>
        </div>
      </div>
    </section>
  );
}
