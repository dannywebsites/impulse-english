import React from 'react';
import { BookOpen, PenTool, Headphones, Mic } from 'lucide-react';
import ExamPageLayout from '../../components/ExamPageLayout';
import { generateCourseSchema, businessInfo } from '../../utils/schemaData';
import type { FAQItem } from '../../utils/schemaData';

export const b1Faqs: FAQItem[] = [
  {
    question: "¿Es suficiente el B1 para trabajar en una empresa internacional?",
    answer: "El B1 es suficiente para trabajar en empresas con contacto internacional limitado o en puestos no especializados. Para roles que requieren negociación, presentaciones o interacción constante con clientes extranjeros, se recomienda B2. Muchas multinacionales piden mínimo B2, pero con B1 puedes acceder a empleos en startups, empresas pequeñas o contextos específicos donde se habla menos inglés."
  },
  {
    question: "¿Cuánto tiempo lleva preparar el B1 Preliminary desde A2?",
    answer: "Desde un nivel A2 consolidado, necesitas entre 100-150 horas de estudio para alcanzar el B1 Preliminary. Esto equivale a 4-6 semanas de curso intensivo (2-3 horas diarias) o 2-3 meses con 1 hora diaria. Si comienzas desde cero, el tiempo se alarga a 6-8 meses."
  },
  {
    question: "¿Qué nota se necesita para aprobar el B1 Preliminary?",
    answer: "La puntuación mínima para aprobar el B1 Preliminary es 120 puntos sobre 150 (escala Cambridge). El examen consta de 4 destrezas: Reading (50 puntos), Writing (50 puntos), Listening (50 puntos) y Speaking (50 puntos). No hay nota mínima por destreza, pero lo ideal es obtener al menos 30 puntos en cada una."
  },
  {
    question: "¿Es fácil o difícil el B1 Preliminary?",
    answer: "El B1 Preliminary es de dificultad moderada. Tiene una tasa de aprobados del 65-75% a nivel mundial. Lo más desafiante suele ser el Speaking (conversación con un examinador) y el Writing (redacción de emails y artículos cortos). Con preparación en una academia, la tasa de aprobados supera el 90%."
  },
  {
    question: "¿Puedo hacer el B1 Preliminary online?",
    answer: "Sí, Cambridge ofrece B1 Preliminary for Schools y B1 Preliminary Digital en formato computer-delivered. Debes realizarlo en un centro oficial bajo supervisión. Los resultados se publican en 5-10 días en formato digital, frente a 4-6 semanas del formato papel."
  },
  {
    question: "¿Cuál es la diferencia entre B1 Preliminary y B2 First?",
    answer: "B1 Preliminary es nivel intermedio básico (B1), B2 First es nivel intermedio-alto (B2). B1 Preliminary tiene 120 preguntas en 2.5 horas; B2 First tiene 190 preguntas en 3.5 horas. B2 First incluye 'Use of English' (gramática avanzada), mientras B1 no. B2 First es más exigente en Writing y Speaking. De B1 a B2 hay una diferencia de ~150 horas de estudio."
  },
  {
    question: "¿Vale la pena hacer el B1 Preliminary o es mejor ir directamente al B2 First?",
    answer: "Si tienes un nivel A2 claro y objetivo laboral/académico concreto, ve directo a B2. Si tienes dudas de tu nivel, el B1 Preliminary es una certificación intermedia valiosa que aumenta confianza y abre puertas. Muchos alumnos hacen ambos con gap de 6 meses, ganando solidez gramatical y fluidez entre exámenes."
  }
];

export const courseSchema = generateCourseSchema({
      name: "Curso de Preparación Cambridge B1 Preliminary (PET)",
      description: "Prepara el examen Cambridge B1 Preliminary (PET) con clases en Madrid en grupos reducidos. Centro oficial Cambridge con 100% de aprobados. Ideal para estudiantes hispanohablantes que quieren certificar su nivel de inglés.",
      url: `${businessInfo.url}/examenes-cambridge/b1-preliminary`,
      courseCode: "CAM-B1-PET",
      educationalLevel: "B1 — Nivel Intermedio",
      timeRequired: "P9M",
      price: "71"
    });

export default function B1PreliminaryPage() {
  return (
    <>
<ExamPageLayout
      examName="B1 Preliminary (PET)"
      cefrLevel="Nivel B1"
      tagline="Demuestra que dominas los fundamentos del inglés para situaciones cotidianas"
      description="El B1 Preliminary, antes conocido como PET (Preliminary English Test), es un examen de nivel intermedio que certifica que puedes comunicarte en inglés en situaciones cotidianas con hablantes nativos. Es el paso perfecto antes del B2 First y muy valorado para trabajos que requieren contacto con el público internacional."
      heroColor="from-blue-600 to-blue-800"
      faqs={b1Faqs}
      examParts={[
        {
          name: "Reading",
          duration: "45 min",
          description: "6 partes con diferentes tipos de textos: anuncios, artículos, emails... Demuestra tu comprensión lectora.",
          icon: <BookOpen className="w-6 h-6" />
        },
        {
          name: "Writing",
          duration: "45 min",
          description: "2 partes: un email/mensaje corto y un artículo o historia de unas 100 palabras.",
          icon: <PenTool className="w-6 h-6" />
        },
        {
          name: "Listening",
          duration: "30 min",
          description: "4 partes con conversaciones, anuncios y monólogos. Se escucha cada audio dos veces.",
          icon: <Headphones className="w-6 h-6" />
        },
        {
          name: "Speaking",
          duration: "12-17 min",
          description: "4 partes en pareja con otro candidato: presentación, discusión de fotos, conversación y diálogo.",
          icon: <Mic className="w-6 h-6" />
        }
      ]}
      whoIsItFor={[
        "Estudiantes de ESO que quieren certificar su nivel",
        "Adultos que necesitan un primer certificado oficial",
        "Profesionales en contacto con clientes internacionales",
        "Personas que planean viajar o trabajar en el extranjero",
        "Requisito para algunos puestos de trabajo en España"
      ]}
      whatYouGet={[
        "Clases en grupos reducidos (máx. 10 alumnos)",
        "Material oficial Cambridge incluido",
        "Simulacros de examen completos cada mes",
        "Práctica intensiva de Speaking en cada clase",
        "Corrección detallada de Writing con feedback",
        "Acceso a plataforma online con ejercicios",
        "Seguimiento personalizado del progreso",
        "Garantía: solo te presentas cuando estás listo"
      ]}
      preparationApproach="Nuestro método combina la práctica intensiva de las cuatro destrezas con técnicas específicas de examen. Cada semana trabajamos simulacros de las diferentes partes, con especial énfasis en Speaking y Writing donde los alumnos suelen tener más dificultades. El objetivo es que llegues al examen con confianza y familiarizado con el formato."
      formSource="cambridge-b1-preliminary"
      heroImage="/images/academy/technology-based-classroom-photo.jpg"
      heroImageMobile="/images/optimized/heroes-mobile/tech-classroom-mobile"
    />
</>
  );
}
