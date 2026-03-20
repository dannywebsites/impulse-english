import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

export default function FAQ() {
  const faqs = [
    {
      question: "¿Cuánto tiempo se tarda en aprender inglés?",
      answer: "Aprender inglés desde cero hasta nivel intermedio (B1/B2) requiere entre 600 y 750 horas, equivalentes a 1-3 años según constancia y método. La combinación de estudio diario, práctica activa y variedad de recursos como clases, apps e inmersión acelera el progreso y mejora la fluidez."
    },
    {
      question: "¿Cuántas horas al día estudiar inglés?",
      answer: "Estudiar inglés entre 20 y 60 minutos diarios con regularidad es más efectivo que largas sesiones esporádicas. Para niveles intermedios, se requieren 350-600 horas acumuladas, logrables con sesiones diarias que combinen comprensión auditiva, práctica oral, lectura y escritura, apoyadas por técnicas como la repetición espaciada."
    },
    {
      question: "¿Clases particulares o academia de inglés?",
      answer: "La elección entre clases particulares y academias de inglés en 2025/26 depende de necesidades, presupuesto y objetivos. Las clases particulares ofrecen personalización, flexibilidad y enfoque específico, ideales para dificultades o inseguridad. Las academias aportan entorno social, metodologías estandarizadas y evaluación continua, siendo más económicas y motivadoras en grupo."
    },
    {
      question: "¿Inglés online o presencial es mejor?",
      answer: "La elección entre inglés online y presencial en 2025/26 depende de la flexibilidad, costo, estilo y objetivos personales. El online ofrece acceso remoto y recursos digitales con menor costo, mientras el presencial aporta interacción directa y ambiente estructurado. Combinar ambos métodos potencia fluidez y motivación."
    },
    {
      question: "¿Cuántas clases de inglés a la semana?",
      answer: "El número ideal de clases de inglés a la semana en 2026 es de 2 a 5 sesiones de 20 a 60 minutos. Esta frecuencia equilibra eficiencia y sostenibilidad, favoreciendo el desarrollo equilibrado de habilidades y evitando el agotamiento, combinada con inmersión y estudio autónomo para maximizar resultados."
    }
  ];

  return (
    <section className="w-full bg-white rounded-3xl p-8 md:p-16 shadow-sm border border-zinc-100">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-accent-blue mb-12 tracking-tight text-center md:text-left">
            Preguntas Frecuentes
        </h2>

        <div className="grid grid-cols-1 gap-4">
            {faqs.map((faq, index) => (
                <FAQItem key={index} question={faq.question} answer={faq.answer} />
            ))}
        </div>
      </div>
    </section>
  );
}

function FAQItem({ question, answer }: { question: string, answer: string }) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="border-b border-zinc-100 last:border-0">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full flex justify-between items-center py-6 text-left group hover:bg-zinc-50/50 transition-colors rounded-lg px-2"
            >
                <span className="text-lg md:text-xl font-bold text-accent-blue/90 group-hover:text-accent-blue">
                    {question}
                </span>
                <div className={`p-2 rounded-full transition-colors ${isOpen ? 'bg-zinc-100 text-accent-blue' : 'text-zinc-400 group-hover:text-accent-blue'}`}>
                    {isOpen ? <Minus size={20} /> : <Plus size={20} />}
                </div>
            </button>
            <div
                className={`overflow-hidden transition-all duration-300 ease-in-out px-2 ${isOpen ? 'max-h-96 opacity-100 pb-6' : 'max-h-0 opacity-0'}`}
            >
                <p className="text-zinc-600 leading-relaxed text-base md:text-lg">
                    {answer}
                </p>
            </div>
        </div>
    );
}
