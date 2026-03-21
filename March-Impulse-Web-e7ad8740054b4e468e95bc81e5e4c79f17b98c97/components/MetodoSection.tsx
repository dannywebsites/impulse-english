import React from 'react';
import { CheckCircle, ArrowRight } from 'lucide-react';

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

export default function MetodoSection() {
  return (
    <section className="w-full bg-white py-16 md:py-24 px-6 border-t border-zinc-100">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-red-500 font-bold tracking-widest text-xs uppercase mb-4 block">
            Nuestra Metodología
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-zinc-900 tracking-tight mb-6">
            El Método Impulse
          </h2>
          <p className="text-lg text-zinc-600 max-w-2xl mx-auto leading-relaxed">
            Nuestro método propio se basa en una enseñanza estructurada, cercana y eficaz, adaptada a cada alumno y a sus objetivos.
          </p>
        </div>

        {/* Method Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {metodoItems.map((item, index) => (
            <div
              key={index}
              className="bg-zinc-50 p-6 rounded-lg border border-zinc-100 hover:shadow-lg transition-shadow duration-300"
            >
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-accent-blue/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <CheckCircle className="w-5 h-5 text-accent-blue" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-zinc-900 mb-2 leading-tight">
                    {item.title}
                  </h3>
                  <p className="text-sm text-zinc-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Exam Hub Links — crawl path from home page */}
        <div className="mt-16 text-center border-t border-zinc-100 pt-12">
          <p className="text-lg text-zinc-600 mb-6">
            Nuestro método te prepara para obtener las certificaciones más reconocidas a nivel mundial.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="/examenes-cambridge"
              className="inline-flex items-center gap-2 bg-zinc-50 border border-zinc-200 text-zinc-800 font-medium py-3 px-6 rounded-lg hover:bg-accent-blue hover:text-white hover:border-accent-blue transition-colors"
            >
              Exámenes Cambridge
              <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="/linguaskill"
              className="inline-flex items-center gap-2 bg-zinc-50 border border-zinc-200 text-zinc-800 font-medium py-3 px-6 rounded-lg hover:bg-accent-blue hover:text-white hover:border-accent-blue transition-colors"
            >
              Linguaskill
              <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="/examenes-cambridge/fechas-precios"
              className="inline-flex items-center gap-2 bg-zinc-50 border border-zinc-200 text-zinc-800 font-medium py-3 px-6 rounded-lg hover:bg-accent-blue hover:text-white hover:border-accent-blue transition-colors"
            >
              Fechas y Precios
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
