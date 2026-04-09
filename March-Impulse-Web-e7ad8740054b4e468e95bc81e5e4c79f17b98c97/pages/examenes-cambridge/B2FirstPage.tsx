import React from 'react';
import { BookOpen, PenTool, Headphones, Mic, Languages } from 'lucide-react';
import ExamPageLayout from '../../components/ExamPageLayout';
import { generateCourseSchema, businessInfo } from '../../utils/schemaData';
import type { FAQItem } from '../../utils/schemaData';

export const b2Faqs: FAQItem[] = [
  {
    question: "¿Cuántas veces puedo presentarme al B2 First?",
    answer: "Puedes presentarte al B2 First tantas veces como desees sin límite establecido por Cambridge English, pero solo una vez por convocatoria oficial. Cada intento permite mejorar la puntuación (escala 160-190 para certificación B2). Los resultados se publican en 5-10 días laborables para el formato digital."
  },
  {
    question: "¿Cuánto tiempo se necesita para preparar el B2 First desde cero?",
    answer: "Desde un nivel A2, necesitas entre 200-300 horas de estudio para alcanzar el B2 First. Esto equivale a 3-4 meses de curso intensivo (3-4 horas diarias) o 6-9 meses con 1-2 horas diarias. Si partes de un B1 básico, puedes prepararte en 6-10 semanas de clases intensivas."
  },
  {
    question: "¿Es difícil el B2 First? ¿Qué porcentaje de aprobados hay?",
    answer: "El B2 First tiene una tasa de aprobados del 50-60% a nivel mundial. La dificultad radica principalmente en el Use of English (gramática avanzada) y el Writing (redacción de ensayos). Con preparación adecuada en una academia, la tasa de aprobados mejora significativamente hasta el 95-100%."
  },
  {
    question: "¿Qué puntuación necesito para aprobar el B2 First?",
    answer: "La puntuación mínima para obtener el certificado B2 First es 160 puntos sobre 190 (escala Cambridge). La puntuación 180-190 se considera nivel C1. Para una persona que prepara el examen, el objetivo es alcanzar mínimo 160, aunque un score de 170+ asegura una buena calificación."
  },
  {
    question: "¿Cuántos ejercicios de 'Use of English' hay en el B2 First?",
    answer: "El Use of English en el B2 First consta de 6-7 partes dentro de la sección Reading & Use of English (75 minutos totales). Incluye: multiple choice cloze, open cloze, word formation, phrasal verbs, gapped sentences y key word transformations. Esta sección es la más desafiante para muchos candidatos."
  },
  {
    question: "¿Puedo hacer el B2 First online desde casa?",
    answer: "Sí. Cambridge ofrece B2 First Digital (computer-delivered), que puedes realizar en un centro oficial bajo supervisión invigilada. No puedes hacerlo completamente desde casa sin supervisión oficial, pero el formato digital reduce el tiempo de espera para resultados (5-10 días vs 4-6 semanas)."
  },
  {
    question: "¿Vale la pena certificarse en B2 First en 2025?",
    answer: "Sí, el B2 First sigue siendo el certificado Cambridge más valorado por empresas y universidades. Es requisito para muchos másters, oposiciones, becas Erasmus+ y trabajos en multinacionales. La inversión de 3-4 meses compensa con oportunidades profesionales académicas a largo plazo."
  },
  {
    question: "¿Cuál es la nota para aprobado en B2 First en cada destreza?",
    answer: "El B2 First evalúa 4 destrezas (Reading, Writing, Listening, Speaking) con 50 puntos cada una = 200 puntos totales. Debes obtener 160 puntos en total para certificado B2. No hay nota mínima por destreza, pero las universidades valoran mucho que las 4 destrezas estén equilibradas (40+ puntos en cada una)."
  },
  {
    question: "¿Cuál es el diferencia entre B2 First y Advanced (CAE)?",
    answer: "B2 First (nivel B2) es más accesible; CAE/C1 Advanced (nivel C1) es significativamente más difícil. B2 First es ideal para trabajar y estudiar en inglés. C1 Advanced es para profesionales que necesitan discernir sutilezas del idioma. B2 First requiere ~300 horas desde A2; C1 Advanced requiere 350-400 horas adicionales desde B2."
  },
  {
    question: "¿Necesito hacer examen oficial o me sirve un curso sin certificación?",
    answer: "Depende de tus objetivos. Si buscas trabajar en empresas multinacionales, estudiar en universidades UK, o acceder a becas, el certificado oficial B2 First es obligatorio. Si solo quieres mejorar tu inglés para comunicarte, un curso sin examen es suficiente y más económico."
  },
  {
    question: "¿Cuánto cuesta el B2 First en Madrid 2025?",
    answer: "El examen oficial B2 First cuesta entre 120-150€. El curso de preparación en una academia intensiva: 500-1000€ (8-12 semanas). Libros y materiales: 50-100€. Total estimado: 700-1250€. En Impulse English Academy, preparación incluida + examen = presupuesto personalizado según necesidades."
  },
  {
    question: "¿Qué pasa si saco menos de 160 en el B2 First?",
    answer: "Si obtienes entre 140 y 159 puntos en la Cambridge English Scale, no recibes el certificado B2 First, pero Cambridge te otorga un certificado de nivel B1. Es decir, no sales con las manos vacías: acreditas un nivel intermedio. Si quieres el B2, puedes volver a presentarte sin límite de intentos."
  },
  {
    question: "¿Puedo usar diccionario en el B2 First?",
    answer: "No. Durante el examen B2 First no se permite el uso de diccionarios, teléfonos móviles ni ningún material de apoyo. Todo el examen se realiza sin ayudas externas. Por eso es fundamental preparar vocabulario y estructuras con antelación, practicando en condiciones reales de examen."
  },
  {
    question: "¿Cuánto dura el examen B2 First completo?",
    answer: "El examen completo dura aproximadamente 3 horas y 29 minutos, repartidas en cuatro pruebas: Reading & Use of English (75 minutos), Writing (80 minutos), Listening (40 minutos) y Speaking (14 minutos). El Speaking se realiza en pareja con otro candidato y puede ser en un día diferente."
  },
  {
    question: "¿Qué diferencia hay entre B2 First en papel y por ordenador?",
    answer: "El contenido y la dificultad son idénticos en ambos formatos. La diferencia principal está en la velocidad de resultados: el formato digital (computer-based) entrega resultados en 2-3 semanas, mientras que el formato en papel tarda 4-6 semanas. El Speaking se realiza igual en ambos casos, cara a cara con examinadores."
  },
  {
    question: "¿Se puede repetir solo una parte del B2 First?",
    answer: "No. A diferencia de Linguaskill, el B2 First no permite repetir módulos individuales. Si no alcanzas la puntuación deseada, debes repetir el examen completo (las cuatro pruebas). No hay límite en el número de intentos y puedes presentarte en la siguiente convocatoria disponible."
  },
  {
    question: "¿El B2 First sirve para oposiciones en España?",
    answer: "Sí. El certificado B2 First de Cambridge es ampliamente reconocido por las administraciones públicas españolas para acreditar nivel B2 de inglés en oposiciones. Al no tener fecha de caducidad, es una opción muy práctica frente a otros certificados que expiran. Consulta siempre las bases específicas de tu convocatoria."
  },
  {
    question: "¿Necesito nota mínima en cada parte del B2 First?",
    answer: "No hay una nota mínima obligatoria por destreza. Lo que cuenta es la puntuación global: necesitas 160 puntos en total en la Cambridge English Scale para obtener el certificado B2. Sin embargo, Cambridge informa tu puntuación por cada destreza (Reading, Writing, Listening, Speaking) en el Statement of Results."
  },
  {
    question: "¿Cuándo caduca el certificado B2 First?",
    answer: "El certificado B2 First de Cambridge no caduca. Una vez obtenido, es válido de por vida. Sin embargo, algunas universidades o empresas pueden pedir que la certificación tenga menos de 2-3 años de antigüedad. El certificado en sí no tiene fecha de expiración impresa."
  }
];

export const courseSchema = generateCourseSchema({
      name: "Curso de Preparación Cambridge B2 First (FCE)",
      description: "Prepara el examen Cambridge B2 First (FCE) con clases en Madrid en grupos reducidos. Centro oficial Cambridge con 100% de aprobados. Perfecto para estudiantes hispanohablantes que necesitan el B2 para la universidad, oposiciones o trabajo.",
      url: `${businessInfo.url}/examenes-cambridge/b2-first`,
      courseCode: "CAM-B2-FCE",
      educationalLevel: "B2 — Nivel Intermedio Alto",
      timeRequired: "P9M",
      price: "75"
    });

export default function B2FirstPage() {
  return (
    <>
<ExamPageLayout
      examName="B2 First (FCE)"
      cefrLevel="Nivel B2"
      tagline="El certificado más demandado: demuestra que puedes trabajar y estudiar en inglés"
      description="El B2 First, antes conocido como FCE (First Certificate in English), es el examen Cambridge más popular. Certifica que tienes un nivel de inglés suficiente para trabajar en un entorno internacional, estudiar en universidades de habla inglesa, o vivir de forma independiente en un país angloparlante. Es el nivel mínimo exigido por muchas empresas y universidades."
      heroColor="from-purple-600 to-purple-800"
      faqs={b2Faqs}
      examParts={[
        {
          name: "Reading & Use of English",
          duration: "75 min",
          description: "7 partes que evalúan comprensión lectora y dominio de gramática y vocabulario en contexto.",
          icon: <BookOpen className="w-6 h-6" />
        },
        {
          name: "Writing",
          duration: "80 min",
          description: "2 partes: un ensayo obligatorio y una elección entre email, artículo, informe o reseña.",
          icon: <PenTool className="w-6 h-6" />
        },
        {
          name: "Listening",
          duration: "40 min",
          description: "4 partes con entrevistas, conferencias, conversaciones y monólogos de diferentes acentos.",
          icon: <Headphones className="w-6 h-6" />
        },
        {
          name: "Speaking",
          duration: "14 min",
          description: "4 partes en pareja: entrevista, turno largo, tarea colaborativa y discusión.",
          icon: <Mic className="w-6 h-6" />
        }
      ]}
      whoIsItFor={[
        "Estudiantes de Bachillerato y universidad",
        "Profesionales que necesitan certificar su nivel para el CV",
        "Personas que quieren estudiar en universidades extranjeras",
        "Trabajadores en empresas multinacionales",
        "Requisito para muchos másters y becas",
        "Emigrantes que necesitan demostrar nivel de inglés"
      ]}
      whatYouGet={[
        "Curso intensivo de preparación (12-16 semanas)",
        "Material oficial Cambridge B2 First incluido",
        "Exámenes de práctica completos cada 2 semanas",
        "Feedback individual en cada Writing",
        "Práctica de Speaking con examinadores certificados",
        "Técnicas de examen para Use of English",
        "Plataforma online con cientos de ejercicios",
        "100% tasa de aprobados garantizada"
      ]}
      preparationApproach="El B2 First requiere un dominio sólido de gramática y vocabulario, además de habilidades comunicativas avanzadas. Nuestro curso intensivo trabaja todas las áreas con especial énfasis en Use of English (la parte más técnica) y Writing (donde más puntos se pierden). Realizamos simulacros completos regularmente y damos feedback detallado para que llegues al examen sin sorpresas."
      formSource="cambridge-b2-first"
      heroImage="/images/academy/team/jp-with-students.jpg"
      heroImageMobile="/images/optimized/heroes-mobile/jp-with-students-mobile"
    />
</>
  );
}
