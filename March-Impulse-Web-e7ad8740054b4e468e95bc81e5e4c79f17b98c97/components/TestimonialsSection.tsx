import React, { useState } from 'react';
import { Quote, ChevronLeft, ChevronRight, Star } from 'lucide-react';
import { NAP } from '../utils/napData';

const testimonials = [
  {
    name: "Alberto Rueda Rodriguez",
    role: "Clases de conversación",
    quote: "Las clases y los profesores son de 10. Me ayudaron a mejorar mi nivel de inglés muchísimo para superar mi examen de Cambridge. Te ayudan a soltarte en la conversación reconociendo donde tienes más dificultad y dándote los consejos necesarios para superarlos. Academia recomendada 100%",
    stars: 5
  },
  {
    name: "Ilias Frafer Afif",
    role: "Reseña verificada en Google",
    quote: "JP es un profesor increíble,convierte cualquier clase de gramática aburrida en una clase divertidísima, he pasado de un A2 a un B1 en tan solo unos meses.",
    stars: 5
  },
  {
    name: "Cesar Seneca Tellechea Corral",
    role: "Alumno/a · preparación C1",
    quote: "Luego de pasar por varias academias en toda Madrid está fue la única que dio con el método y el contenido perfecto para aprender, tengo un C1 y es todo gracias a ellos.",
    stars: 5
  },
  {
    name: "Paula Cuadrado",
    role: "Reseña verificada en Google",
    quote: "Mi inglés ha mejorado, son buenisimos profesionales, buen método, mucha paciencia por su parte. Volveré para seguir mejorando",
    stars: 5
  },
  {
    name: "CJ Martos",
    role: "Reseña verificada en Google",
    quote: "Muy profesionales. Se adaptan a tu nivel y están muy pendientes de tu progreso. Danny y JP tienen mucha experiencia y trabajan genial",
    stars: 5
  },
  {
    name: "Antonio Del Pozo",
    role: "Alumno/a · preparación C1",
    quote: "Clases perfectas, totalmente adaptadas a mi objetivo de conseguir el C1 de inglés. JP es un profesor extraordinario, siempre dispuesto para ayudarte en todo lo que necesites. Sabe como transmitir lo que necesitas aprender, además de hacer la clases divertidas. Es un motivador nato. No podría haber tenido un profesor mejor. Thanks for everything JP!",
    stars: 5
  },
  {
    name: "Clara Sánchez",
    role: "Reseña verificada en Google",
    quote: "He tenido el gusto de poder asistir a esta academia durante menos de un año y sin duda a sido una de las mejores ayudas que he podido tener, sobretodo por JP, me ha dado muchos consejos que sin duda me ayudaron para el examen final, y el trato que han tenido en todo  momento es súper gratificante y acogedor, muy atentos a las dudas personales y siempre con buenas intenciones. Gracias por todo el apoyo!",
    stars: 5
  },
  {
    name: "Laia Lubillo Solsona",
    role: "Reseña verificada en Google",
    quote: "Las clases en Impulse son muy entretenidas y divertidas, aprendes inglés sin darte cuenta. Los profesores se adaptan a ti, por lo que el trato es muy personalizado. Danny siempre está dispuesto a ayudarte y resolver cualquier duda.",
    stars: 5
  },
  {
    name: "Carmen Moreno",
    role: "Reseña verificada en Google",
    quote: "Grandes profesionales que facilitan el aprendizaje desde el primer día! Metodologías y dinámicas divertidas!",
    stars: 5
  },
  {
    name: "Leticia Ramos Setim",
    role: "Madre/padre de alumno",
    quote: "Una academia totalmente recomendable, mi hijo está encantado con las clases, son divertidas y variadas.",
    stars: 5
  },
  {
    name: "Dámaris Valentín-Fernández Gómez",
    role: "Reseña verificada en Google",
    quote: "Mi nivel de inglés ha mejorado muchísimo! La calidad del profesorado es excelente. Recomiendo sin duda esta gran academia de inglés.",
    stars: 5
  },
  {
    name: "Ana Torrado",
    role: "Reseña verificada en Google",
    quote: "Impulse English Academy ha sido la mejor academia en la que he estado. Gracias a JP aprobé la asignatura. Lo que más me gusta es que se adaptan a tus necesidades y se centran donde ven más dificultades. ¡Muchas gracias! 😊",
    stars: 5
  },
  {
    name: "Mª Del Espino Monedero García",
    role: "Clases de conversación",
    quote: "Es una buena academia, profesionales y con ganas de enseñar. Además,  algo fundamental para mi,  es que no miran el reloj en sus clases, priman la calidad y miran por el alumno. Danny es mi profesor ahora, estoy encantada con sus clases de conversación. Recomendable 100%.",
    stars: 5
  },
  {
    name: "Edixon Muñoz",
    role: "Alumno/a adulto",
    quote: "He tenido un par de clases particulares  con Jp para prepaprar  un curso para el trabajo. El curso fue adaptado  a lo que necesitaba  y Jp fue .... AMAZING 🥳",
    stars: 5
  },
  {
    name: "Javier Salmeron",
    role: "Reseña verificada en Google",
    quote: "Dani es encantador y muy profesional. Aprendes sin darte cuenta por lo ameno del sistema. Muchas gracias de verdad por vuestra ayuda y buen hacer. Un placer haberos conocido.",
    stars: 5
  },
  {
    name: "Manuel Casas Herrero",
    role: "Reseña verificada en Google",
    quote: "Danny es un excelente profesional que vive con pasion su labor didactica. Nuestros hijos son biligues gracias a sus enseñazas en Madrid e Irlanda. Sin lugar a duda Impulse English Academy sera nuestro centro de referencia en la capital",
    stars: 5
  },
  {
    name: "Paloma Canalda",
    role: "Alumno/a adulto",
    quote: "Profesores súper profesionales que son ,además, muy creativos y les gusta su trabajo porque buscan la manera de conseguir el objetivo con cada alumno .",
    stars: 5
  },
  {
    name: "Víctor RC",
    role: "Reseña verificada en Google",
    quote: "Gracias, Jp, por tu ayuda con mi examen. Recomiendo ampliamente esta academia a cualquiera que busque mejorar y obtener su certificación.",
    stars: 5
  },
  {
    name: "Ramon Pico",
    role: "Reseña verificada en Google",
    quote: "Profesores muy profesionales, trato excelente y me sirvió para mejorar mi nivel rápidamente",
    stars: 5
  },
  {
    name: "Patricia Gallardo",
    role: "Reseña verificada en Google",
    quote: "Muy majetes y muy flexibles. Yo he ido todo el año con mi bebé. Su método para aprender mediante app, el mejor que he visto (a parte de los libros).",
    stars: 5
  },
  {
    name: "Lucía Moreno Zubiaur",
    role: "Alumno/a · preparación C1",
    quote: "He estado solo un año en la academia, y puedo asegurar con certeza que es una experiencia increíble. Aprendes sin darte cuenta, llegué con un nivel B1-B2 y en menos de un año me había sacado el C1 alto. No se siente como una rutina, tenía ganas de ir todos los días porque los profesores hablaban contigo en vez de enseñar y copiar apuntes, practicaban y te sentías bien. Recomiendo esta academia para sacarte cualquier titulación sin duda. Especial gracias a JP, un excelente profesor y persona. Gracias sinceras.",
    stars: 5
  },
  {
    name: "David Garcia",
    role: "Reseña verificada en Google",
    quote: "DANI ES UN GRAN PROFESIONAL ME GUSTA MUCHO EL SER HUMANO Q ES LE ENCANTA AYUDAR ENSEÑAR",
    stars: 5
  },
  {
    name: "Anna Farney",
    role: "Reseña verificada en Google",
    quote: "Si buscas aprender inglés de una manera divertida, innovadora y eficaz, ¡no busques más! ¡Recomiendo encarecidamente a Daniel y a su equipo!",
    stars: 5
  },
  {
    name: "Alba Garrido Iglesias",
    role: "Reseña verificada en Google",
    quote: "¡¡ME ENCANTA LA ACADEMIA!! Las clases son muy divertidas y se esfuerzan en ayudarnos a aprender. Las clases a las que acudo son completamente en inglés, no obstante, si pides al profesor que explique en castellano alguna cosa que no haya quedado clara, lo hará y te ayudará a comprenderlo. JP es un gran profesor. Muy contenta y totalmente recomendado.👏",
    stars: 5
  },
  {
    name: "Gloria Ruiz García",
    role: "Reseña verificada en Google",
    quote: "Una absoluta maravilla! Danny es un gran profesional que cuenta con muchísimos años de experiencia. Serio, empático y trabajador.",
    stars: 5
  },
  {
    name: "Hugo G",
    role: "Reseña verificada en Google",
    quote: "Jp es muy majo y divertido además de aprender un montón es sus clases y no se hacen pesadas, la recomiendo mucho.",
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
    <section id="testimonios" className="section surface-alt w-full px-6 relative overflow-hidden scroll-mt-20">

      <div className="max-w-7xl mx-auto relative z-10">
        {/* 5/7 split — the quote card is the subject here, not the heading. */}
        <div className="grid grid-cols-1 items-center gap-x-16 gap-y-10 lg:grid-cols-12">

            {/* Left: Heading */}
            <div className="lg:col-span-5">
                <span className="eyebrow mb-4 md:mb-6">
                    Opiniones reales de Google
                </span>
                <h2 className="t-h2 text-zinc-900 mb-4">
                    Lo que dicen nuestros estudiantes…
                </h2>
                <div className="rule mb-6 md:mb-8"></div>
                <p className="t-lede text-zinc-600 max-w-md mb-8">
                    Nuestros alumnos y familias destacan la calidad del profesorado, el ambiente cercano y los resultados obtenidos a lo largo del curso. Sus testimonios reflejan nuestro compromiso con una enseñanza de calidad y un aprendizaje significativo.
                </p>
                <div className="flex gap-4 items-center">
                    <button
                      onClick={prevTestimonial}
                      aria-label="Testimonio anterior"
                      className="w-10 h-10 md:w-12 md:h-12 rounded-full border border-zinc-300 bg-white text-zinc-900 flex items-center justify-center hover:bg-accent-blue hover:text-white hover:border-accent-blue transition-colors"
                    >
                        <ChevronLeft className="w-5 h-5" />
                    </button>
                    <button
                      onClick={nextTestimonial}
                      aria-label="Siguiente testimonio"
                      className="w-10 h-10 md:w-12 md:h-12 rounded-full border border-zinc-300 bg-white text-zinc-900 flex items-center justify-center hover:bg-accent-blue hover:text-white hover:border-accent-blue transition-colors"
                    >
                        <ChevronRight className="w-5 h-5" />
                    </button>
                    <span className="text-sm text-zinc-400 ml-2">
                      {currentIndex + 1} / {testimonials.length}
                    </span>
                </div>
            </div>

            {/* Right: Testimonial Card */}
            <div className="card relative flex flex-col justify-between p-8 md:p-12 lg:col-span-7">
                <Quote className="absolute top-8 right-8 md:top-10 md:right-10 w-8 h-8 md:w-12 md:h-12 text-accent-blue/10" />

                <div>
                    <div className="mb-6">
                        <div className="flex gap-1 mb-2">
                            {[...Array(current.stars)].map((_, i) => (
                                <Star key={i} className="w-4 h-4 text-amber-400 fill-amber-400" />
                            ))}
                        </div>
                    </div>

                    <blockquote className="mb-8 font-serif text-xl leading-snug text-zinc-800 md:text-2xl">
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
            className="flex items-center gap-3 rounded-full border border-zinc-200/80 bg-white px-6 py-3 shadow-card transition-shadow hover:shadow-lift"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
              <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
              <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
              <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
            </svg>
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 text-amber-400 fill-amber-400" />
              ))}
            </div>
            <span className="text-zinc-600 text-sm font-medium">180 reseñas reales</span>
          </a>
        </div>
      </div>
    </section>
  );
}
