import React, { useEffect } from 'react';
import { Calendar, Clock, ArrowRight, BookOpen, Star, FileText } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

// Direct S3 image URLs for reliability
const articleImageUrls: Record<string, { url: string; alt: string }> = {
  classroom: {
    url: "https://impulseenglish.s3.us-east-1.amazonaws.com/impulsephotos/NACHOS+photos.+/Classroom+Facilities+Main+Classroom.JPG",
    alt: "Aula principal academia inglés La Vaguada Madrid"
  },
  infantil: {
    url: "https://impulseenglish.s3.us-east-1.amazonaws.com/impulsephotos/NACHOS+photos.+/Infantil+classes.JPG",
    alt: "Clases inglés infantil La Vaguada Madrid"
  },
  certificate: {
    url: "https://impulseenglish.s3.us-east-1.amazonaws.com/impulsephotos/JP+WITH+STUDENTS.jpg",
    alt: "Estudiantes con certificados Cambridge La Vaguada Madrid"
  },
  adults: {
    url: "https://impulseenglish.s3.us-east-1.amazonaws.com/impulsephotos/NACHOS+photos.+/Adult+one-to-one+classes.JPG",
    alt: "Clases inglés adultos La Vaguada Madrid"
  },
  students: {
    url: "https://impulseenglish.s3.us-east-1.amazonaws.com/impulsephotos/NACHOS+photos.+/Primary+classes+students+smiling.JPG",
    alt: "Estudiantes primaria felices La Vaguada Madrid"
  },
  teenagers: {
    url: "https://impulseenglish.s3.us-east-1.amazonaws.com/impulsephotos/NACHOS+photos.+/Secondary+classes+student+happy.JPG",
    alt: "Estudiante secundaria La Vaguada Madrid"
  },
  reception: {
    url: "https://impulseenglish.s3.us-east-1.amazonaws.com/impulsephotos/NACHOS+photos.+/Photos+of+facilities.JPG",
    alt: "Instalaciones academia inglés La Vaguada Madrid"
  },
  cambridge: {
    url: "https://impulseenglish.s3.us-east-1.amazonaws.com/impulsephotos/6E08CD95-47B7-4D36-95C7-FECFB41E3883.JPEG",
    alt: "Certificado Cambridge oficial La Vaguada Madrid"
  },
  linguaskillLogo: {
    url: "https://impulseenglish.s3.us-east-1.amazonaws.com/NEW/linguaskill-logo-blanco.png",
    alt: "Logo Linguaskill centro oficial La Vaguada Madrid"
  },
  cambridgeLogo: {
    url: "https://impulseenglish.s3.us-east-1.amazonaws.com/NEW/Cambridge+logo+-+Edited.png",
    alt: "Logo Cambridge centro preparador oficial La Vaguada Madrid"
  },
  technology: {
    url: "https://impulseenglish.s3.us-east-1.amazonaws.com/impulsephotos/NACHOS+photos.+/Technology-based+classroom+photo.JPG",
    alt: "Aula tecnológica preparación Linguaskill La Vaguada Madrid"
  }
};

// Featured Hub Articles - Guías completas
const hubArticles = [
  {
    id: 'linguaskill-guia-completa',
    title: "Guía Completa del Examen Linguaskill 2026",
    excerpt: "Todo sobre estructura, ejemplos reales, sistema adaptativo y estrategias de preparación para certificar tu inglés con resultados en 48 horas.",
    category: "Linguaskill",
    readTime: "25 min",
    imageKey: "technology",
    href: "/linguaskill",
    featured: true,
  },
  {
    id: 'linguaskill-precios-sedes',
    title: "Linguaskill: Precios, Sedes y Servicios 2026",
    excerpt: "Precios exactos, sedes disponibles en España, modalidades presencial y online, y servicios de preparación para tu certificación.",
    category: "Linguaskill",
    readTime: "20 min",
    imageKey: "reception",
    href: "/linguaskill/precios-fechas",
    featured: false,
  },
  {
    id: 'examenes-cambridge-guia',
    title: "Guía Completa de Exámenes Cambridge 2026",
    excerpt: "Desde Young Learners hasta C2 Proficiency: qué examen necesitas, cómo prepararte y qué puertas te abrirá cada certificación.",
    category: "Exámenes Cambridge",
    readTime: "30 min",
    imageKey: "cambridgeLogo",
    href: "/blog/examenes-cambridge-guia",
    featured: true,
  },
  {
    id: 'fechas-examenes-cambridge',
    title: "Fechas Exámenes Cambridge 2026: Calendario Oficial",
    excerpt: "Calendario completo de convocatorias, plazos de inscripción y consejos para elegir la mejor fecha según tu preparación.",
    category: "Calendario",
    readTime: "15 min",
    imageKey: "cambridge",
    href: "/examenes-cambridge/fechas-precios",
    featured: false,
  },
  {
    id: 'libros-cambridge-recursos',
    title: "Libros Cambridge y Recursos: Guía 2026",
    excerpt: "Los mejores libros oficiales, apps gratuitas y materiales complementarios para preparar tu examen Cambridge con éxito.",
    category: "Recursos",
    readTime: "18 min",
    imageKey: "students",
    href: "/blog/libros-cambridge-recursos",
    featured: false,
  },
];

// Spoke Articles - Related to Hubs
const spokeArticles = [
  // Linguaskill Spokes
  {
    id: 'ejemplo-linguaskill',
    title: "Ejemplo Examen Linguaskill: Formato del Test",
    excerpt: "Formato completo del examen con ejemplos de cada módulo: Reading, Listening, Writing y Speaking.",
    category: "Linguaskill",
    readTime: "7 min",
    href: "/linguaskill/ejemplo-examen",
    hub: "linguaskill-guia-completa",
  },
  {
    id: 'precio-linguaskill',
    title: "Precio Linguaskill y Cómo Reservar 2025",
    excerpt: "Tarifas actualizadas (130€), descuentos universitarios y proceso de inscripción paso a paso.",
    category: "Linguaskill",
    readTime: "6 min",
    href: "/linguaskill/precios-fechas",
    hub: "linguaskill-precios-sedes",
  },
  {
    id: 'linguaskill-online',
    title: "Linguaskill Online desde Casa",
    excerpt: "Requisitos técnicos, supervisión remota y cómo hacer el examen desde tu hogar.",
    category: "Linguaskill",
    readTime: "7 min",
    href: "/blog/linguaskill-online-casa",
    hub: "linguaskill-guia-completa",
  },
  {
    id: 'centros-linguaskill',
    title: "Centros Linguaskill Madrid, Valencia, Zaragoza",
    excerpt: "Centros autorizados, precios por ciudad y cómo reservar tu plaza.",
    category: "Linguaskill",
    readTime: "8 min",
    href: "/blog/centros-linguaskill",
    hub: "linguaskill-precios-sedes",
  },
  {
    id: 'opiniones-linguaskill',
    title: "Opiniones Linguaskill: Experiencias Reales",
    excerpt: "Qué opinan los usuarios sobre el formato, la corrección y la modalidad online.",
    category: "Linguaskill",
    readTime: "8 min",
    href: "/blog/opiniones-linguaskill",
    hub: "linguaskill-guia-completa",
  },
  // Cambridge Spokes
  {
    id: 'cambridge-b2-beneficios',
    title: "Cambridge B2: 7 Beneficios del Examen First",
    excerpt: "Reconocimiento internacional, validez ilimitada y ventajas profesionales del B2 First.",
    category: "Exámenes Cambridge",
    readTime: "7 min",
    href: "/blog/cambridge-b2-beneficios",
    hub: "examenes-cambridge-guia",
  },
  {
    id: 'cambridge-c1-advanced',
    title: "Examen Cambridge C1 Advanced: Guía Completa",
    excerpt: "Estructura, puntuación, calificaciones y estrategias de preparación para el C1.",
    category: "Exámenes Cambridge",
    readTime: "8 min",
    href: "/examenes-cambridge/c1-advanced",
    hub: "examenes-cambridge-guia",
  },
  // Linguaskill Spokes - Additional
  {
    id: 'linguaskill-vs-aptis',
    title: "Linguaskill vs Aptis: Comparativa Completa 2026",
    excerpt: "Análisis detallado de ambos exámenes: formato, precio, validez y cuál te conviene más según tus necesidades.",
    category: "Linguaskill",
    readTime: "12 min",
    href: "/blog/linguaskill-vs-aptis",
    hub: "linguaskill-guia-completa",
  },
  {
    id: 'registro-linguaskill',
    title: "Cómo Registrarse para el Examen Linguaskill",
    excerpt: "Guía paso a paso para registrarte al examen Linguaskill: requisitos, proceso de inscripción y documentación necesaria.",
    category: "Linguaskill",
    readTime: "8 min",
    href: "/blog/registro-linguaskill",
    hub: "linguaskill-precios-sedes",
  },
  {
    id: 'certificado-linguaskill',
    title: "Certificado Linguaskill: Validez y Reconocimiento",
    excerpt: "Todo sobre el certificado Linguaskill: validez internacional, reconocimiento oficial y dónde es aceptado.",
    category: "Linguaskill",
    readTime: "10 min",
    href: "/blog/certificado-linguaskill",
    hub: "linguaskill-guia-completa",
  },
  // Cambridge Spokes - Additional
  {
    id: 'cambridge-b1-guia',
    title: "Examen Cambridge B1 Preliminary: Guía Completa",
    excerpt: "Todo sobre el B1 Preliminary: estructura, partes del examen, puntuación y estrategias de preparación.",
    category: "Exámenes Cambridge",
    readTime: "15 min",
    href: "/blog/cambridge-b1-guia",
    hub: "examenes-cambridge-guia",
  },
  {
    id: 'centros-cambridge-madrid',
    title: "Centros Cambridge en Madrid y Barcelona 2026",
    excerpt: "Lista completa de centros autorizados Cambridge en Madrid y Barcelona: ubicaciones, horarios y contacto.",
    category: "Exámenes Cambridge",
    readTime: "10 min",
    href: "/examenes-cambridge/centros-madrid",
    hub: "examenes-cambridge-guia",
  },
  {
    id: 'precio-cambridge-c1',
    title: "Precio Cambridge C1 Advanced en Madrid 2026",
    excerpt: "Precios actualizados del C1 Advanced en Madrid: tasas de examen, fechas disponibles y proceso de registro.",
    category: "Exámenes Cambridge",
    readTime: "8 min",
    href: "/blog/precio-cambridge-c1-madrid",
    hub: "fechas-examenes-cambridge",
  },
  {
    id: 'registro-cambridge',
    title: "Cómo Registrarse a los Exámenes Cambridge",
    excerpt: "Guía completa de registro para exámenes Cambridge: pasos, documentación y plazos de inscripción.",
    category: "Exámenes Cambridge",
    readTime: "9 min",
    href: "/blog/registro-cambridge",
    hub: "fechas-examenes-cambridge",
  },
  // Linguaskill Spokes - More
  {
    id: 'recursos-pdf-linguaskill',
    title: "Recursos PDF Examen Linguaskill: Materiales Oficiales",
    excerpt: "Descarga gratuita de guías oficiales Cambridge, ejemplos de tareas y materiales de preparación en formato PDF.",
    category: "Linguaskill",
    readTime: "12 min",
    href: "/blog/recursos-pdf-linguaskill",
    hub: "linguaskill-guia-completa",
  },
  {
    id: 'precio-linguaskill-online',
    title: "Precio del Test Linguaskill Online 2026",
    excerpt: "Costes detallados del examen Linguaskill online: precio por módulo, descuentos y comparativa internacional.",
    category: "Linguaskill",
    readTime: "10 min",
    href: "/blog/precio-linguaskill-online",
    hub: "linguaskill-precios-sedes",
  },
  {
    id: 'curso-intensivo-linguaskill',
    title: "Curso Intensivo Linguaskill Online",
    excerpt: "Prepárate para el examen Linguaskill en pocas semanas con cursos intensivos online efectivos.",
    category: "Linguaskill",
    readTime: "10 min",
    href: "/linguaskill/curso-intensivo",
    hub: "linguaskill-guia-completa",
  },
  // Cambridge Spokes - More
  {
    id: 'escala-cambridge',
    title: "Escala Cambridge Explicada: Niveles y Grades",
    excerpt: "Entiende cómo funciona la Cambridge English Scale, qué significan los Grades A, B y C, y su relación con CEFR.",
    category: "Exámenes Cambridge",
    readTime: "10 min",
    href: "/blog/escala-cambridge",
    hub: "examenes-cambridge-guia",
  },
  {
    id: 'ejercicios-b2-cambridge',
    title: "Ejercicios B2 Cambridge: Guía Práctica First",
    excerpt: "Tipos de ejercicios, estrategias por sección y recursos gratuitos para practicar el B2 First Certificate.",
    category: "Exámenes Cambridge",
    readTime: "15 min",
    href: "/blog/ejercicios-b2-cambridge",
    hub: "examenes-cambridge-guia",
  },
  {
    id: 'pdfs-cambridge-advanced',
    title: "PDFs Cambridge Advanced C1: Recursos Oficiales",
    excerpt: "Descarga gratuita de sample papers, handbooks y materiales oficiales para preparar el C1 Advanced (CAE).",
    category: "Exámenes Cambridge",
    readTime: "12 min",
    href: "/blog/pdfs-cambridge-advanced",
    hub: "libros-cambridge-recursos",
  },
  {
    id: 'examen-cae-cambridge',
    title: "Examen CAE Cambridge C1 Advanced: Guía Completa",
    excerpt: "Todo sobre el Certificate in Advanced English: estructura, puntuación, preparación y consejos para aprobar.",
    category: "Exámenes Cambridge",
    readTime: "15 min",
    href: "/blog/examen-cae-cambridge",
    hub: "examenes-cambridge-guia",
  },
  // PAA - Cambridge B2 First
  {
    id: 'validez-certificado-b2',
    title: "¿Cuánto Dura el Certificado B2 de Cambridge?",
    excerpt: "El certificado B2 First no caduca nunca. Validez permanente, reconocimiento internacional y diferencias con IELTS.",
    category: "Exámenes Cambridge",
    readTime: "8 min",
    href: "/blog/validez-certificado-b2-cambridge",
    hub: "examenes-cambridge-guia",
  },
  {
    id: 'nota-aprobar-b2-first',
    title: "¿Qué Nota Necesito para Aprobar el B2 First?",
    excerpt: "Para aprobar necesitas 160 puntos. Conoce los Grades A, B y C y cómo se evalúa cada parte del examen.",
    category: "Exámenes Cambridge",
    readTime: "7 min",
    href: "/blog/nota-aprobar-b2-first",
    hub: "examenes-cambridge-guia",
  },
  {
    id: 'es-dificil-b2-first',
    title: "¿Es Difícil el B2 First? Nivel Real",
    excerpt: "Tasa de aprobados del 65-70%. Descubre qué lo hace difícil y cómo prepararte eficazmente.",
    category: "Exámenes Cambridge",
    readTime: "8 min",
    href: "/blog/es-dificil-b2-first",
    hub: "examenes-cambridge-guia",
  },
  {
    id: 'preparar-b2-first-3-meses',
    title: "¿Puedo Preparar el B2 First en 3 Meses?",
    excerpt: "Plan de estudio mes a mes para preparar el B2 First en 3 meses si tienes nivel B1+.",
    category: "Exámenes Cambridge",
    readTime: "9 min",
    href: "/blog/preparar-b2-first-3-meses",
    hub: "examenes-cambridge-guia",
  },
  {
    id: 'cuantas-veces-b2-first',
    title: "¿Cuántas Veces Puedo Presentarme al B2 First?",
    excerpt: "No hay límite de intentos. Costes, plazos y estrategias para el segundo intento.",
    category: "Exámenes Cambridge",
    readTime: "6 min",
    href: "/blog/cuantas-veces-b2-first",
    hub: "examenes-cambridge-guia",
  },
  {
    id: 'tiempo-preparacion-b2-first',
    title: "¿Cuánto Tiempo se Tarda en Preparar el B2 First?",
    excerpt: "De 3 a 12 meses según tu nivel actual. Plan detallado por nivel de partida.",
    category: "Exámenes Cambridge",
    readTime: "8 min",
    href: "/blog/tiempo-preparacion-b2-first",
    hub: "examenes-cambridge-guia",
  },
  // PAA - Cambridge C1 Advanced
  {
    id: 'tiempo-b2-a-c1',
    title: "¿Cuánto Tiempo se Tarda en Pasar de B2 a C1?",
    excerpt: "200-300 horas de estudio guiado. Plan de transición y estrategias para acelerar.",
    category: "Exámenes Cambridge",
    readTime: "8 min",
    href: "/blog/tiempo-b2-a-c1",
    hub: "examenes-cambridge-guia",
  },
  {
    id: 'es-dificil-c1-advanced',
    title: "¿Es Muy Difícil el C1 Advanced?",
    excerpt: "Tasa de aprobados del 55-60%. Partes más exigentes y cómo prepararse.",
    category: "Exámenes Cambridge",
    readTime: "8 min",
    href: "/blog/es-dificil-c1-advanced",
    hub: "examenes-cambridge-guia",
  },
  {
    id: 'trabajos-piden-c1',
    title: "¿Qué Trabajos Piden C1 de Inglés?",
    excerpt: "Sectores y puestos que exigen C1: consultoría, banca, IT, docencia y más.",
    category: "Carrera Profesional",
    readTime: "9 min",
    href: "/blog/trabajos-piden-c1-ingles",
    hub: "examenes-cambridge-guia",
  },
  {
    id: 'c1-advanced-caduca',
    title: "¿El C1 Advanced Caduca?",
    excerpt: "No caduca nunca. Validez permanente vs requisitos de instituciones específicas.",
    category: "Exámenes Cambridge",
    readTime: "7 min",
    href: "/blog/c1-advanced-caduca",
    hub: "examenes-cambridge-guia",
  },
  {
    id: 'diferencia-b2-c1',
    title: "Diferencia entre B2 y C1: ¿Qué Nivel Necesitas?",
    excerpt: "Compara gramática, vocabulario, examen y valor profesional de ambos niveles.",
    category: "Comparativas",
    readTime: "9 min",
    href: "/blog/diferencia-b2-c1",
    hub: "examenes-cambridge-guia",
  },
  {
    id: 'vale-pena-c1-espana',
    title: "¿Merece la Pena el C1 en España?",
    excerpt: "Beneficios laborales, académicos y para oposiciones del C1 en el mercado español.",
    category: "Carrera Profesional",
    readTime: "8 min",
    href: "/blog/vale-pena-c1-espana",
    hub: "examenes-cambridge-guia",
  },
  // PAA - Linguaskill
  {
    id: 'linguaskill-vs-cambridge-dificultad',
    title: "¿Linguaskill es Más Fácil que Cambridge?",
    excerpt: "No es más fácil, sino diferente. Comparativa real de dificultad y formato.",
    category: "Linguaskill",
    readTime: "8 min",
    href: "/blog/linguaskill-vs-cambridge-dificultad",
    hub: "linguaskill-guia-completa",
  },
  {
    id: 'linguaskill-casa-fiable',
    title: "¿Linguaskill desde Casa es Fiable?",
    excerpt: "100% fiable gracias a supervisión remota, IA y tecnología anti-fraude.",
    category: "Linguaskill",
    readTime: "7 min",
    href: "/blog/linguaskill-casa-fiable",
    hub: "linguaskill-guia-completa",
  },
  {
    id: 'universidades-aceptan-linguaskill',
    title: "¿Qué Universidades Aceptan Linguaskill?",
    excerpt: "Más de 80 universidades españolas incluidas UNED, UOC y universidades públicas.",
    category: "Linguaskill",
    readTime: "9 min",
    href: "/blog/universidades-aceptan-linguaskill",
    hub: "linguaskill-guia-completa",
  },
  {
    id: 'linguaskill-reconocimiento-internacional',
    title: "¿Linguaskill es Reconocido Internacionalmente?",
    excerpt: "Reconocido en más de 60 países por universidades, empresas y gobiernos.",
    category: "Linguaskill",
    readTime: "8 min",
    href: "/blog/linguaskill-reconocimiento-internacional",
    hub: "linguaskill-guia-completa",
  },
  {
    id: 'linguaskill-oposiciones-validez',
    title: "¿Linguaskill Tiene Validez para Oposiciones?",
    excerpt: "Aceptado en oposiciones públicas con reconocimiento creciente en España.",
    category: "Linguaskill",
    readTime: "8 min",
    href: "/blog/linguaskill-oposiciones-validez",
    hub: "linguaskill-guia-completa",
  },
  // PAA - Cambridge B1
  {
    id: 'b1-suficiente-trabajar',
    title: "¿Es Suficiente el B1 para Trabajar?",
    excerpt: "Suficiente para turismo, atención al cliente y administración. Cuándo necesitas más.",
    category: "Carrera Profesional",
    readTime: "7 min",
    href: "/blog/b1-suficiente-trabajar",
    hub: "examenes-cambridge-guia",
  },
  {
    id: 'precio-b1-cambridge',
    title: "¿Cuánto Cuesta el Examen B1 Cambridge?",
    excerpt: "Precios 2026: entre 115€ y 140€. Diferencias papel vs digital y dónde inscribirse.",
    category: "Exámenes Cambridge",
    readTime: "6 min",
    href: "/blog/precio-b1-cambridge",
    hub: "fechas-examenes-cambridge",
  },
  {
    id: 'tiempo-preparar-b1-cero',
    title: "Preparar B1 desde Cero: ¿Cuánto Tiempo?",
    excerpt: "12-18 meses desde cero, 10-12 semanas desde A2. Plan detallado por nivel.",
    category: "Exámenes Cambridge",
    readTime: "8 min",
    href: "/blog/tiempo-preparar-b1-cero",
    hub: "examenes-cambridge-guia",
  },
  {
    id: 'b1-universidad-espana',
    title: "¿El B1 Sirve para la Universidad en España?",
    excerpt: "B1 es el nivel mínimo exigido para graduación en muchas universidades españolas.",
    category: "Exámenes Cambridge",
    readTime: "7 min",
    href: "/blog/b1-universidad-espana",
    hub: "examenes-cambridge-guia",
  },
  // PAA - Comparisons
  {
    id: 'cambridge-vs-linguaskill-diferencias',
    title: "Cambridge vs Linguaskill: ¿Cuál Elegir?",
    excerpt: "Compara formato, precio, validez y dificultad. Guía para elegir tu examen.",
    category: "Comparativas",
    readTime: "10 min",
    href: "/blog/cambridge-vs-linguaskill-diferencias",
    hub: null,
  },
  {
    id: 'cambridge-vs-ielts-espana',
    title: "Cambridge vs IELTS en España",
    excerpt: "Cambridge no caduca, IELTS sí. Comparativa de validez, precio y reconocimiento.",
    category: "Comparativas",
    readTime: "9 min",
    href: "/blog/cambridge-vs-ielts-espana",
    hub: null,
  },
  {
    id: 'academia-vs-profesor-particular',
    title: "¿Academia o Profesor Particular de Inglés?",
    excerpt: "Pros y contras de cada opción: precio, método, resultados y flexibilidad.",
    category: "Comparativas",
    readTime: "8 min",
    href: "/blog/academia-vs-profesor-particular",
    hub: null,
  },
  {
    id: 'ingles-presencial-vs-online',
    title: "Inglés Presencial vs Online",
    excerpt: "Efectividad, precio y flexibilidad de cada modalidad. Cuál es mejor para ti.",
    category: "Comparativas",
    readTime: "8 min",
    href: "/blog/ingles-presencial-vs-online",
    hub: null,
  },
  {
    id: 'b1-vs-b2-que-nivel',
    title: "B1 vs B2: ¿Qué Nivel Necesito?",
    excerpt: "Diferencias en dificultad, reconocimiento laboral y uso académico de cada nivel.",
    category: "Comparativas",
    readTime: "8 min",
    href: "/blog/b1-vs-b2-que-nivel-necesito",
    hub: null,
  },
  // PAA - Learning Methods
  {
    id: 'cuanto-tiempo-aprender-ingles',
    title: "¿Cuánto Tiempo se Tarda en Aprender Inglés?",
    excerpt: "De 6 meses a 3 años según tu objetivo. Plazos reales por nivel MCER.",
    category: "Aprender Inglés",
    readTime: "9 min",
    href: "/blog/cuanto-tiempo-aprender-ingles",
    hub: null,
  },
  {
    id: 'entiendo-ingles-no-hablo',
    title: "Entiendo Inglés Pero No Puedo Hablarlo",
    excerpt: "Desequilibrio entre habilidades pasivas y activas. 5 estrategias para hablar.",
    category: "Aprender Inglés",
    readTime: "8 min",
    href: "/blog/entiendo-ingles-no-hablo",
    hub: null,
  },
  {
    id: 'verguenza-hablar-ingles',
    title: "¿Por Qué Me Da Vergüenza Hablar Inglés?",
    excerpt: "Afecta al 70% de adultos. Causas psicológicas y 6 técnicas para superarla.",
    category: "Aprender Inglés",
    readTime: "8 min",
    href: "/blog/verguenza-hablar-ingles",
    hub: null,
  },
  {
    id: 'perder-miedo-hablar-ingles',
    title: "Cómo Perder el Miedo a Hablar Inglés",
    excerpt: "7 estrategias probadas: exposición gradual, grupos pequeños y más.",
    category: "Aprender Inglés",
    readTime: "8 min",
    href: "/blog/perder-miedo-hablar-ingles",
    hub: null,
  },
  {
    id: 'clases-particulares-vs-academia',
    title: "Clases Particulares vs Academia de Inglés",
    excerpt: "Compara precio, método, resultados y flexibilidad de cada formato.",
    category: "Comparativas",
    readTime: "8 min",
    href: "/blog/clases-particulares-vs-academia",
    hub: null,
  },
  {
    id: 'ingles-online-vs-presencial',
    title: "Inglés Online vs Presencial: Ventajas y Desventajas",
    excerpt: "Datos reales de efectividad, precio y para quién es mejor cada formato.",
    category: "Comparativas",
    readTime: "8 min",
    href: "/blog/ingles-online-vs-presencial",
    hub: null,
  },
  {
    id: 'por-que-no-avanzo-ingles',
    title: "¿Por Qué No Avanzo en Inglés?",
    excerpt: "8 razones comunes y soluciones prácticas para superar el estancamiento.",
    category: "Aprender Inglés",
    readTime: "9 min",
    href: "/blog/por-que-no-avanzo-ingles",
    hub: null,
  },
  // PAA - Skills
  {
    id: 'mejorar-listening-ingles',
    title: "Cómo Mejorar el Listening en Inglés",
    excerpt: "10 técnicas efectivas: podcasts, dictados, shadowing y más. Por nivel.",
    category: "Habilidades",
    readTime: "9 min",
    href: "/blog/mejorar-listening-ingles",
    hub: null,
  },
  {
    id: 'mejorar-speaking-ingles',
    title: "Cómo Mejorar el Speaking en Inglés",
    excerpt: "Técnicas de fluidez, pronunciación y confianza. Ejercicios prácticos.",
    category: "Habilidades",
    readTime: "9 min",
    href: "/blog/mejorar-speaking-ingles",
    hub: null,
  },
  {
    id: 'pensar-ingles-no-traducir',
    title: "Cómo Pensar en Inglés sin Traducir",
    excerpt: "8 técnicas probadas para desarrollar el pensamiento directo en inglés.",
    category: "Habilidades",
    readTime: "8 min",
    href: "/blog/pensar-ingles-no-traducir",
    hub: null,
  },
  {
    id: 'no-entiendo-ingles-hablado',
    title: "¿Por Qué No Entiendo el Inglés Hablado?",
    excerpt: "Causas: velocidad, acentos y connected speech. Plan de mejora progresiva.",
    category: "Habilidades",
    readTime: "8 min",
    href: "/blog/no-entiendo-ingles-hablado",
    hub: null,
  },
  // PAA - Kids Early Childhood
  {
    id: 'ninos-aprender-ingles-pequenos',
    title: "¿Es Bueno Aprender Inglés desde Pequeños?",
    excerpt: "La ciencia confirma los beneficios del inglés antes de los 6 años.",
    category: "Inglés para Niños",
    readTime: "8 min",
    href: "/blog/ninos-aprender-ingles-pequenos",
    hub: null,
  },
  {
    id: 'edad-empezar-ingles-bebes',
    title: "¿A Qué Edad Empezar Inglés con Bebés?",
    excerpt: "Desde los 6 meses con exposición musical. Clases estructuradas desde 2-3 años.",
    category: "Inglés para Niños",
    readTime: "8 min",
    href: "/blog/edad-empezar-ingles-bebes",
    hub: null,
  },
  {
    id: 'ninos-confusion-dos-idiomas',
    title: "¿Se Confunden los Niños con Dos Idiomas?",
    excerpt: "No: el bilingüismo mejora la cognición. 5 mitos desmontados con ciencia.",
    category: "Inglés para Niños",
    readTime: "8 min",
    href: "/blog/ninos-confusion-dos-idiomas",
    hub: null,
  },
  {
    id: 'ingles-jugando-funciona',
    title: "¿Inglés Jugando Funciona?",
    excerpt: "Sí, respaldado por neurociencia. Cómo el juego acelera el aprendizaje.",
    category: "Inglés para Niños",
    readTime: "8 min",
    href: "/blog/ingles-jugando-funciona",
    hub: null,
  },
  {
    id: 'mejor-metodo-ingles-ninos',
    title: "¿Cuál es el Mejor Método de Inglés para Niños?",
    excerpt: "Compara inmersión, CLIL, TPR y Great Little People según la edad.",
    category: "Inglés para Niños",
    readTime: "9 min",
    href: "/blog/mejor-metodo-ingles-ninos",
    hub: null,
  },
  {
    id: 'great-little-people-metodologia',
    title: "Great Little People: Metodología Inglés Infantil",
    excerpt: "Método de inmersión total para niños de 1-7 años basado en juego y tecnología.",
    category: "Inglés para Niños",
    readTime: "8 min",
    href: "/blog/great-little-people-metodologia",
    hub: null,
  },
  {
    id: 'hijo-preparar-cambridge',
    title: "¿Mi Hijo Debería Preparar Cambridge?",
    excerpt: "Ventajas de Cambridge para niños: edad recomendada y cómo preparar sin presión.",
    category: "Inglés para Niños",
    readTime: "8 min",
    href: "/blog/hijo-preparar-cambridge",
    hub: null,
  },
  {
    id: 'motivar-hijo-ingles',
    title: "Cómo Motivar a tu Hijo con el Inglés",
    excerpt: "10 estrategias probadas: juegos, series, recompensas y rol de los padres.",
    category: "Inglés para Niños",
    readTime: "8 min",
    href: "/blog/motivar-hijo-ingles",
    hub: null,
  },
  {
    id: 'hijo-no-avanza-ingles',
    title: "¿Por Qué Mi Hijo No Avanza en Inglés?",
    excerpt: "7 causas comunes: método inadecuado, falta de exposición o desmotivación.",
    category: "Inglés para Niños",
    readTime: "8 min",
    href: "/blog/hijo-no-avanza-ingles",
    hub: null,
  },
  {
    id: 'ingles-colegio-suficiente',
    title: "¿El Inglés del Colegio es Suficiente?",
    excerpt: "Generalmente no: 2-3 horas semanales con grupos grandes. Cómo complementar.",
    category: "Inglés para Niños",
    readTime: "8 min",
    href: "/blog/ingles-colegio-suficiente",
    hub: null,
  },
  // PAA - Career
  {
    id: 'nivel-ingles-empresas',
    title: "¿Qué Nivel de Inglés Piden las Empresas?",
    excerpt: "El 85% de ofertas cualificadas piden inglés. Requisitos por sector y puesto.",
    category: "Carrera Profesional",
    readTime: "9 min",
    href: "/blog/nivel-ingles-empresas",
    hub: null,
  },
  {
    id: 'ingles-entrevistas-trabajo',
    title: "Inglés para Entrevistas de Trabajo",
    excerpt: "Frases clave, preguntas frecuentes y técnicas de confianza para tu entrevista.",
    category: "Carrera Profesional",
    readTime: "9 min",
    href: "/blog/ingles-entrevistas-trabajo",
    hub: null,
  },
  // Madrid Academias
  {
    id: 'academias-baratas',
    title: "Academias Baratas Madrid: desde 45€/mes",
    excerpt: "Las 7 academias más económicas de Madrid con profesores cualificados y preparación Cambridge.",
    category: "Academias Madrid",
    readTime: "8 min",
    href: "/academias-ingles-madrid",
    hub: null,
  },
  {
    id: 'cursos-ingles-adultos',
    title: "Cursos de Inglés para Adultos en Madrid 2026",
    excerpt: "Las mejores opciones de cursos de inglés para adultos en Madrid: horarios flexibles, metodologías y precios.",
    category: "Academias Madrid",
    readTime: "12 min",
    href: "/academias-ingles-madrid/adultos",
    hub: null,
  },
  {
    id: 'certificaciones-ingles-madrid',
    title: "Certificaciones de Inglés en Madrid: Academias Oficiales",
    excerpt: "Comparativa de certificaciones Cambridge, Linguaskill, IELTS y TOEFL. Dónde prepararte en Madrid.",
    category: "Academias Madrid",
    readTime: "12 min",
    href: "/academias-ingles-madrid/certificaciones",
    hub: null,
  },
  {
    id: 'academias-por-barrios',
    title: "Academias de Inglés por Barrios en Madrid 2026",
    excerpt: "Encuentra la mejor academia de inglés cerca de ti. Guía por zonas con precios y transporte.",
    category: "Academias Madrid",
    readTime: "12 min",
    href: "/academias-ingles-madrid/por-barrios",
    hub: null,
  },
  {
    id: 'cursos-ingles-ninos',
    title: "Cursos de Inglés para Niños en Madrid 2026",
    excerpt: "Guía completa de metodologías, edades y academias para que tus hijos aprendan inglés.",
    category: "Academias Madrid",
    readTime: "15 min",
    href: "/academias-ingles-madrid/ninos",
    hub: null,
  },
];

// Additional linked articles (replaced unlinked ones)
const additionalArticles = [
  {
    id: 'aprende-ingles-guia',
    title: "Cómo Aprender Inglés de Forma Efectiva: Guía Completa",
    excerpt: "Estrategias probadas, recursos y metodologías para dominar el inglés según tu nivel y objetivos.",
    category: "Consejos",
    readTime: "15 min",
    href: "/aprende-ingles",
    image: "classroom" // Will use facilityImages.classroom
  },
  {
    id: 'infantil-great-little-people',
    title: "Inglés para Niños: Método Great Little People",
    excerpt: "Descubre cómo nuestro método exclusivo para niños de 2-5 años hace que aprender inglés sea una aventura divertida.",
    category: "Metodología",
    readTime: "8 min",
    href: "/cursos-ingles/infantil",
    image: "infantil" // Will use infantilImages.greatLittlePeople
  },
  {
    id: 'preparar-cambridge',
    title: "Cómo Preparar tu Examen Cambridge con Éxito",
    excerpt: "Consejos prácticos y recursos para superar tu examen Cambridge: B1, B2, C1 y C2.",
    category: "Exámenes Cambridge",
    readTime: "10 min",
    href: "/examenes-cambridge",
    image: "certificate" // Will use certificationImages.studentC1
  },
  {
    id: 'clases-adultos',
    title: "Inglés para Adultos: Nunca es Tarde para Aprender",
    excerpt: "Cursos adaptados a profesionales y adultos. Horarios flexibles y metodología práctica para resultados rápidos.",
    category: "Academias Madrid",
    readTime: "7 min",
    href: "/cursos-ingles/adultos",
    image: "adults" // Will use facilityImages.interiorBarrioPilar
  }
];

const categories = ["Todos", "Exámenes Cambridge", "Linguaskill", "Academias Madrid", "Comparativas", "Aprender Inglés", "Habilidades", "Inglés para Niños", "Carrera Profesional", "Consejos", "Metodología", "Recursos", "Calendario"];

export default function BlogPage() {
  const [selectedCategory, setSelectedCategory] = React.useState("Todos");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const filteredHubArticles = selectedCategory === "Todos"
    ? hubArticles
    : hubArticles.filter(article => article.category === selectedCategory);

  const filteredSpokeArticles = selectedCategory === "Todos"
    ? spokeArticles
    : spokeArticles.filter(article => article.category === selectedCategory);

  const filteredAdditionalArticles = selectedCategory === "Todos"
    ? additionalArticles
    : additionalArticles.filter(article => article.category === selectedCategory);

  // Get featured articles for hero section
  const featuredArticles = hubArticles.filter(a => a.featured);

  return (
    <>
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-28 pb-20 md:pt-36 md:pb-28 overflow-hidden">
        <div className="absolute inset-0">
          <img src="https://impulseenglish.s3.us-east-1.amazonaws.com/impulsephotos/NACHOS+photos.+/Classroom+Facilities+Main+Classroom.JPG" alt="Aula academia inglés Impulse English Academy La Vaguada Madrid" className="w-full h-full object-cover" loading="eager" />
          <div className="absolute inset-0 bg-gradient-to-br from-accent-blue/95 via-accent-blue/85 to-[#0a3560]/75"></div>
        </div>
        <div className="absolute inset-0 hero-grain opacity-[0.03]"></div>
        <div className="absolute -top-32 -right-32 w-[420px] h-[420px] rounded-full bg-brand-red/[0.04]"></div>
        <div className="absolute -bottom-24 -left-24 w-80 h-80 rounded-full bg-white/[0.03]"></div>

        <div className="relative z-10 container mx-auto px-6 md:px-12">
          <div className="max-w-3xl mt-12 md:mt-16">
            <div className="flex items-center gap-4 mb-6 animate-hero-fade-up">
              <div className="w-8 h-px bg-white/40"></div>
              <BookOpen className="w-4 h-4 text-white/60" />
              <span className="font-display text-white/70 text-xs uppercase tracking-[0.2em]">
                Nuestro Blog
              </span>
            </div>
            <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl text-white tracking-tight leading-[1.1] mb-6 animate-hero-fade-up animation-delay-100">
              Blog de Impulse
            </h1>
            <div className="w-16 h-0.5 bg-brand-red mb-6 animate-hero-fade-up animation-delay-150"></div>
            <p className="font-display text-lg md:text-xl text-white/80 font-light leading-relaxed max-w-2xl animate-hero-fade-up animation-delay-200">
              Guías completas, consejos y recursos para mejorar tu inglés y preparar tus exámenes Cambridge.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Hub Articles */}
      <section className="py-12 px-6 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="flex items-center gap-2 mb-8">
            <Star className="w-5 h-5 text-amber-500" />
            <h2 className="text-2xl font-bold text-zinc-900">Guías destacadas</h2>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {featuredArticles.map((article) => (
              <a
                key={article.id}
                href={article.href}
                className="group relative overflow-hidden rounded-2xl"
              >
                <div className="aspect-[16/9] overflow-hidden">
                  {articleImageUrls[article.imageKey] ? (
                    <img
                      src={articleImageUrls[article.imageKey].url}
                      alt={articleImageUrls[article.imageKey].alt}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                  ) : (
                    <div className="w-full h-full bg-accent-blue/20" />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <span className="inline-block bg-accent-blue text-white px-3 py-1 rounded-full text-xs font-medium mb-3">
                    {article.category}
                  </span>
                  <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-blue-200 transition-colors">
                    {article.title}
                  </h3>
                  <p className="text-white/80 text-sm mb-3 line-clamp-2">{article.excerpt}</p>
                  <span className="text-white/60 text-sm flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    {article.readTime} de lectura
                  </span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 px-6 bg-zinc-50 border-b border-zinc-200">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-wrap gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  selectedCategory === category
                    ? 'bg-accent-blue text-white'
                    : 'bg-white text-zinc-600 hover:bg-zinc-100 border border-zinc-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Hub Articles Grid */}
      {filteredHubArticles.length > 0 && (
        <section className="py-12 px-6 bg-zinc-50">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-xl font-bold text-zinc-900 mb-6">Guías completas</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredHubArticles.map((article) => (
                <a
                  key={article.id}
                  href={article.href}
                  className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow group"
                >
                  <div className="aspect-video overflow-hidden">
                    {articleImageUrls[article.imageKey] ? (
                      <img
                        src={articleImageUrls[article.imageKey].url}
                        alt={articleImageUrls[article.imageKey].alt}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        loading="lazy"
                      />
                    ) : (
                      <div className="w-full h-full bg-accent-blue/20" />
                    )}
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="text-xs font-bold text-accent-blue uppercase tracking-wider">
                        {article.category}
                      </span>
                      <span className="bg-amber-100 text-amber-700 text-xs px-2 py-0.5 rounded-full">
                        Guía completa
                      </span>
                    </div>
                    <h3 className="text-lg font-bold text-zinc-900 mb-2 group-hover:text-accent-blue transition-colors">
                      {article.title}
                    </h3>
                    <p className="text-zinc-600 text-sm mb-4 line-clamp-2">
                      {article.excerpt}
                    </p>
                    <div className="flex items-center gap-2 text-sm text-zinc-500">
                      <Clock className="w-4 h-4" />
                      {article.readTime} de lectura
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Spoke Articles Grid */}
      {filteredSpokeArticles.length > 0 && (
        <section className="py-12 px-6 bg-white">
          <div className="container mx-auto max-w-6xl">
            <div className="flex items-center gap-2 mb-6">
              <FileText className="w-5 h-5 text-accent-blue" />
              <h2 className="text-xl font-bold text-zinc-900">Artículos relacionados</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              {filteredSpokeArticles.map((article) => (
                <a
                  key={article.id}
                  href={article.href}
                  className="bg-zinc-50 rounded-lg overflow-hidden hover:bg-zinc-100 transition-colors group border border-zinc-100"
                >
                  <div className="p-5">
                    <span className="text-xs font-bold text-accent-blue uppercase tracking-wider">
                      {article.category}
                    </span>
                    <h3 className="text-base font-bold text-zinc-900 mt-2 mb-2 group-hover:text-accent-blue transition-colors line-clamp-2">
                      {article.title}
                    </h3>
                    <p className="text-zinc-500 text-sm mb-3 line-clamp-2">
                      {article.excerpt}
                    </p>
                    <div className="flex items-center gap-2 text-xs text-zinc-400">
                      <Clock className="w-3 h-3" />
                      {article.readTime}
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Additional Articles Grid */}
      {filteredAdditionalArticles.length > 0 && (
        <section className="py-12 px-6 bg-white">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-xl font-bold text-zinc-900 mb-6">Más artículos</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {filteredAdditionalArticles.map((article) => (
                <a
                  key={article.id}
                  href={article.href}
                  className="bg-zinc-50 rounded-xl overflow-hidden hover:bg-zinc-100 transition-colors group"
                >
                  <div className="aspect-video overflow-hidden">
                    {articleImageUrls[article.image] ? (
                      <img
                        src={articleImageUrls[article.image].url}
                        alt={articleImageUrls[article.image].alt}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        loading="lazy"
                      />
                    ) : (
                      <div className="w-full h-full bg-accent-blue/20" />
                    )}
                  </div>
                  <div className="p-4">
                    <span className="text-xs font-bold text-accent-blue uppercase tracking-wider">
                      {article.category}
                    </span>
                    <h3 className="text-base font-bold text-zinc-900 mt-2 mb-2 group-hover:text-accent-blue transition-colors line-clamp-2">
                      {article.title}
                    </h3>
                    <div className="flex items-center gap-2 text-xs text-zinc-500">
                      <Clock className="w-3 h-3" />
                      {article.readTime}
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>
      )}

      {filteredHubArticles.length === 0 && filteredSpokeArticles.length === 0 && filteredAdditionalArticles.length === 0 && (
        <section className="py-16 px-6 bg-zinc-50">
          <div className="container mx-auto max-w-6xl text-center">
            <p className="text-zinc-500 text-lg">No hay artículos en esta categoría todavía.</p>
          </div>
        </section>
      )}

      {/* Newsletter CTA */}
      <section className="py-16 px-6 bg-accent-blue">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Recibe nuestros mejores consejos
          </h2>
          <p className="text-white/80 mb-8 max-w-2xl mx-auto">
            Suscríbete a nuestra newsletter y recibe tips de inglés, noticias sobre exámenes Cambridge y ofertas exclusivas.
          </p>
          <a
              href="/contacto/"
            className="inline-flex items-center gap-2 bg-white text-accent-blue font-bold py-3 px-8 rounded-lg hover:bg-zinc-100 transition-colors"
          >
            Contactar
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </section>

      <Footer variant="simple" />
    </>
  );
}
