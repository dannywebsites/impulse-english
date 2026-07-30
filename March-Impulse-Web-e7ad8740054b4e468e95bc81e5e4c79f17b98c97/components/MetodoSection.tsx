import React from 'react';
import { ArrowRight } from 'lucide-react';

const metodoItems = [
  {
    title: "1. Enseñanza personalizada basada en el nivel de cada alumno.",
    description: "Evaluamos el punto de partida de cada estudiante para diseñar un plan de aprendizaje realista y eficaz."
  },
  {
    title: "2. Identificación de tus metas y la motivación para la consecución de aquellos logros.",
    description: "Definimos objetivos claros y medibles que guían el progreso y refuerzan la motivación."
  },
  {
    title: "3. Impulsar el esfuerzo y el compromiso para alcanzar el máximo potencial.",
    description: "Fomentamos la constancia y el compromiso como claves del aprendizaje a largo plazo."
  },
  {
    title: "4. Creación de un ambiente de confianza, donde cometer errores forma parte del aprendizaje.",
    description: "Creamos un entorno seguro donde el alumno se siente cómodo participando y practicando."
  },
  {
    title: "5. Spaced repetition method para aprender vocabulario nuevo.",
    description: "Aplicamos técnicas de repetición espaciada para consolidar el vocabulario de forma duradera."
  },
  {
    title: "6. Clases enfocadas en una comunicación constante.",
    description: "Priorizamos el uso práctico del idioma y la comunicación real en cada sesión."
  },
  {
    title: "7. Desarrollo de los 5 pasos fundamentales, en el orden adecuado: leer, escuchar, gramática, hablar y escribir.",
    description: "Trabajamos todas las destrezas de forma equilibrada y progresiva."
  },
  {
    title: "8. Evaluación continua del progreso del alumno a través de diversas pruebas y test.",
    description: "Realizamos un seguimiento constante para garantizar avances reales."
  },
  {
    title: "9. Informes personalizados del progreso de cada alumno mes a mes.",
    description: "Informamos periódicamente a alumnos y familias sobre la evolución y los logros alcanzados."
  }
];

/* The step number is rendered as a display numeral, so it is stripped from the
   heading text to avoid printing "1." twice. Wording is otherwise untouched. */
const stripOrdinal = (title: string) => title.replace(/^\d+\.\s*/, '');

export default function MetodoSection() {
  return (
    <section className="section-lead w-full bg-white px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 gap-x-16 gap-y-12 lg:grid-cols-12">

          {/* Header rail — stays with the reader while the nine steps scroll. */}
          <div className="lg:col-span-4">
            <div className="lg:sticky lg:top-32">
              <span className="eyebrow mb-4">
                Nuestra Metodología
              </span>
              <h2 className="t-h2 text-zinc-900 mb-5">
                El Método Impulse
              </h2>
              <div className="rule mb-6"></div>
              <p className="t-lede measure text-zinc-600">
                Nuestro método propio se basa en una enseñanza estructurada, cercana y eficaz, adaptada a cada alumno y a sus objetivos.
              </p>
            </div>
          </div>

          {/* Nine steps as a numbered editorial list. A 3x3 grid of identical
              cards flattened them into interchangeable tiles; a list keeps the
              sequence legible, which is the whole point of a method. */}
          <ol className="divide-y divide-zinc-200 border-t border-zinc-200 lg:col-span-8">
            {metodoItems.map((item, index) => (
              <li key={index} className="group flex gap-6 py-7 md:gap-8">
                <span
                  aria-hidden="true"
                  className="font-serif text-3xl leading-none text-accent-blue/25 transition-colors group-hover:text-accent-blue/50 md:text-4xl"
                >
                  {String(index + 1).padStart(2, '0')}
                </span>
                <div>
                  <h3 className="mb-2 text-lg font-semibold leading-snug text-zinc-900">
                    {stripOrdinal(item.title)}
                  </h3>
                  <p className="measure t-small text-zinc-600">
                    {item.description}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>

        {/* Exam Hub Links — crawl path from home page */}
        <div className="mt-16 border-t border-zinc-200 pt-12">
          <p className="t-lede measure text-zinc-600">
            Nuestro método te prepara para obtener las certificaciones más reconocidas a nivel mundial.
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            <a href="/examenes-cambridge/" className="btn-outline btn-sm group">
              Exámenes Cambridge
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
            </a>
            <a href="/linguaskill/" className="btn-outline btn-sm group">
              Linguaskill
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
            </a>
            <a href="/examenes-cambridge/fechas-precios/" className="btn-outline btn-sm group">
              Fechas y Precios
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
