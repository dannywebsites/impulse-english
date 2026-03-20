import React, { useEffect } from 'react';
import { CheckCircle, XCircle, Brain, Target, MessageCircle, Heart, RefreshCw, Users, BarChart3, Star, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import LeadForm from '../components/LeadForm';
import FAQSection from '../components/FAQSection';
import Breadcrumb from '../components/Breadcrumb';
import SchemaMarkup from '../components/SchemaMarkup';
import SEOHead from '../components/SEOHead';
import { businessInfo } from '../utils/schemaData';

const pillars = [
  {
    number: "1",
    title: "Personalización Total del Aprendizaje",
    subtitle: "Tu Camino Es Único",
    icon: Target,
    description: "No hay dos estudiantes iguales. ¿Por qué enseñarles igual?",
    points: [
      "Evaluación inicial completa de nivel, estilo de aprendizaje y objetivos",
      "Plan de estudios 100% personalizado",
      "Adaptación continua según tu progreso mensual"
    ],
    result: "Aprendes más rápido porque el método se adapta a ti, no al revés."
  },
  {
    number: "2",
    title: "Identificación de Motivación y Objetivos",
    subtitle: "Tu \"Por Qué\" Es Tu Combustible",
    icon: Heart,
    description: "¿POR QUÉ quieres aprender inglés? Tu motivación determina todo.",
    points: [
      "Examen/Universidad: Enfoque en Cambridge/Linguaskill",
      "Trabajo/Profesional: Business English, presentaciones, emails",
      "Viajes/Experiencias: Conversación práctica, situaciones reales",
      "Conexión Familiar: Conversación informal, expresar emociones"
    ],
    result: "Sabes exactamente hacia dónde vas y por qué cada clase te acerca a tu objetivo."
  },
  {
    number: "3",
    title: "Conversación desde el Primer Día",
    subtitle: "Hablamos Inglés Desde el Minuto Uno",
    icon: MessageCircle,
    description: "El inglés es un idioma, no una asignatura. Los idiomas se HABLAN.",
    points: [
      "70% del tiempo de clase hablando TÚ",
      "Errores bienvenidos y corregidos constructivamente",
      "Role-plays, debates, presentaciones, conversación espontánea"
    ],
    result: "Pierdes el miedo a hablar. El inglés se vuelve natural."
  },
  {
    number: "4",
    title: "Ambiente Psicológicamente Seguro",
    subtitle: "Los Errores Son Bienvenidos Aquí",
    icon: Heart,
    description: "El mayor enemigo del aprendizaje de idiomas: EL MIEDO.",
    points: [
      "\"Los errores no son fracasos. Son el camino hacia la fluidez.\"",
      "Corrección constructiva: \"Entendí perfectamente. Una forma mejor sería...\"",
      "Celebración del progreso, no perfección"
    ],
    result: "Hablas sin miedo. Te atreves a intentar estructuras nuevas."
  },
  {
    number: "5",
    title: "Repetición Espaciada Científica",
    subtitle: "Vocabulario Que Se Queda (De Verdad)",
    icon: RefreshCw,
    description: "El cerebro olvida el 70% de información nueva en 24 horas. Pero hay ciencia que lo resuelve.",
    points: [
      "Día 1: Aprendes palabra nueva",
      "Día 3: La repasas en contexto",
      "Día 7: La usas en conversación",
      "Día 30: Ya está en tu memoria a largo plazo"
    ],
    result: "40-60% mejor retención que memorización tradicional."
  },
  {
    number: "6",
    title: "Práctica Comunicativa en Contextos Reales",
    subtitle: "Inglés Para Usar, No Para Pasar Examen",
    icon: Users,
    description: "¿De qué sirve saber gramática perfecta si no puedes pedir un café en Londres?",
    points: [
      "Situaciones cotidianas: restaurantes, hoteles, direcciones",
      "Situaciones laborales: reuniones, presentaciones, emails",
      "Acentos diversos: británico, americano, irlandés, australiano"
    ],
    result: "Cuando llegue la situación real, ya la viviste 10 veces en clase."
  },
  {
    number: "7",
    title: "Desarrollo Sistemático de las 5 Habilidades",
    subtitle: "La Secuencia Óptima de Aprendizaje",
    icon: BarChart3,
    description: "5 habilidades del inglés. ¿Sabías que el ORDEN importa?",
    points: [
      "1. Reading - Fundamento para patrones gramaticales",
      "2. Listening - Pronunciación, entonación, ritmo natural",
      "3. Writing - Producción controlada con tiempo para pensar",
      "4. Speaking - Producción en tiempo real",
      "5. Grammar - Explicación de PORQUÉ funcionan las estructuras"
    ],
    result: "Construcción sólida donde cada habilidad refuerza las demás."
  }
];

const stats = [
  { value: "100%", label: "Aprobados Cambridge 2024-2025" },
  { value: "40-60%", label: "Mejor retención de vocabulario" },
  { value: "70%", label: "Tiempo hablando en clase" },
  { value: "7-10", label: "Máximo alumnos por grupo" }
];

const metodologiaFAQs = [
  {
    question: "¿Cómo mejorar el listening en inglés?",
    answer: "Mejorar el listening en inglés en 2026 requiere técnicas activas como la escucha triple (audio sin subtítulos, con subtítulos en inglés y sin subtítulos nuevamente), shadowing para mejorar entonación y ritmo, y combinar escucha intensiva (detalle) con extensiva (exposición prolongada). La variedad de acentos y el contenido motivador aumentan la efectividad."
  },
  {
    question: "¿Cómo mejorar el Speaking en inglés?",
    answer: "Mejorar el speaking en inglés en 2026 requiere práctica activa diaria, uso de frases completas y pensamiento directo en inglés. La imitación de acento y ritmo nativos, junto con tecnologías de IA que ofrecen corrección en tiempo real y técnicas como shadowing, potencian fluidez y confianza oral."
  },
  {
    question: "¿Cómo ampliar vocabulario en inglés rápido?",
    answer: "Ampliar vocabulario en inglés rápido en 2025/26 requiere repetición espaciada con apps como Anki, aprendizaje contextual mediante podcasts y series, y práctica activa escribiendo y hablando. Técnicas emergentes incluyen shadowing y chunking, junto con inmersión digital para fijar y usar palabras eficazmente en comunicación real."
  },
  {
    question: "¿Cómo mejorar la pronunciación en inglés?",
    answer: "Mejorar la pronunciación en inglés en 2026 requiere escucha activa de audios naturales, repetición y shadowing para imitar ritmo y entonación, además de grabarse para autoevaluar. Enfocar en sonidos difíciles como 'th', vocales largas y clústeres consonánticos con ejercicios prácticos y lectura en voz alta."
  },
  {
    question: "¿Cómo practicar inglés sin profesor?",
    answer: "Practicar inglés sin profesor en 2026 implica crear un entorno de inmersión digital con contenido en inglés, usar inteligencia artificial para practicar conversación y corrección, y establecer rutinas diarias que combinen lectura, escucha, habla y escritura. Apps como Duolingo y ChatGPT potencian el aprendizaje autónomo y personalizado."
  },
  {
    question: "¿Cómo pensar en inglés y no traducir?",
    answer: "Pensar en inglés sin traducir es procesar ideas y frases directamente en inglés, creando asociaciones mentales automáticas. En 2026, esta habilidad mejora fluidez y comunicación natural, acelerando respuestas y comprensión. Se entrena etiquetando objetos, hablando consigo mismo y usando diccionarios en inglés con definiciones directas."
  },
  {
    question: "¿Por qué no entiendo inglés hablado?",
    answer: "No entender inglés hablado se debe a deficiencias en la comprensión auditiva, como falta de vocabulario, dificultad para reconocer sonidos, acentos y velocidad de habla. La limitada práctica activa y la ausencia de estrategias cognitivas para procesar información también dificultan la interpretación en contexto real."
  },
  {
    question: "¿Cómo entender películas en inglés sin subtítulos?",
    answer: "Entender películas en inglés sin subtítulos es una habilidad avanzada que mejora la comprensión auditiva y fluidez. Requiere un método progresivo: ver escenas repetidamente con subtítulos en español, luego en inglés, y finalmente sin ellos, combinando técnicas como el shadowing y la inmersión en diálogos claros y naturales."
  },
  {
    question: "¿Gramática o vocabulario primero?",
    answer: "El aprendizaje efectivo de un idioma prioriza el vocabulario contextual antes que la gramática formal, facilitando la comunicación real y la internalización natural de estructuras. El vocabulario, base para la expresión, se adquiere primero mediante exposición a contextos, y la gramática se integra después para consolidar fluidez y precisión."
  },
  {
    question: "¿Qué nivel de inglés se da en 4 de la ESO?",
    answer: "El nivel de inglés en 4º de la ESO se sitúa entre A2 y B1 del MCER. Los estudiantes que finalizan este curso generalmente alcanzan el nivel A2 (equivalente al A2 Key de Cambridge), aunque algunos programas persiguen el B1 (B1 Preliminary). El nivel B1 permite mantener conversaciones informales, comprender textos con opiniones diversas y demostrar dominio funcional del inglés cotidiano. El examen B1 Preliminary for Schools certifica este nivel intermedio."
  },
  {
    question: "¿Cuál es el método más efectivo para aprender inglés?",
    answer: "Clases presenciales con interacción directa profesor-estudiantes, cursos online flexibles con recursos multimedia, intercambio idiomas mediante Tandem/HelloTalk con nativos, apps móviles Duolingo/Babbel lecciones cortas, inmersión completa diaria (música, películas, series, dispositivos en inglés), viajes entornos anglófonos, práctica regular cuatro destrezas (escuchar, hablar, leer, escribir), metas realistas alcanzables, grupos reducidos atención personalizada, materiales actualizados herramientas digitales dinámicas."
  },
  {
    question: "¿Cuál es el mejor método para aprender inglés rápidamente?",
    answer: "El mejor método para aprender inglés rápidamente combina inmersión total (cambiar idioma dispositivos, películas sin subtítulos, música, lectura), práctica diaria cuatro habilidades (escuchar, hablar, leer, escribir), metodología SMART (estudio estructurado, motivación, objetivos claros, repetición, tecnología), intercambio idiomas Tandem/HelloTalk con nativos, escribir diario inglés experiencias diarias, podcasts temas interesantes trayectos, metas realistas (conversación básica tres meses, películas sin subtítulos seis meses), apps Duolingo/Babbel, audiolibros, cursos online interactivos profesores particulares, actividades gratificantes, aceptar errores oportunidad aprendizaje."
  },
  {
    question: "¿Cuál es el mejor método de estudio para inglés?",
    answer: "El mejor método de estudio para inglés combina metodología SMART (Study-Motivation-Aim-Repetition-Technology cubriendo comprensión lectora, auditiva, expresión oral, escrita), clases presenciales interacción directa profesor, cursos online flexibles vídeos/audios/ejercicios interactivos, intercambio idiomas Tandem/HelloTalk con nativos, apps Duolingo/Babbel lecciones diarias entretenidas, inmersión (dispositivos inglés, música, podcasts, películas subtítulos inglés, audiolibros), viajes entornos anglófonos, vocabulario/gramática libros estructurados, dedicación diaria 20 minutos mínimo, personalización nivel/necesidades, clases apoyo contenido adicional, innovación tecnológica continua."
  },
  {
    question: "¿Cuáles son los métodos de enseñanza más efectivos para aprender inglés?",
    answer: "Los métodos de enseñanza más efectivos para aprender inglés incluyen academias, grupos reducidos niveles homogéneos, cuatro habilidades lectura/escucha/habla/escritura, personalización metas específicas, clases apoyo sesiones extra), clases presenciales interacción directa profesor práctica compañeros contextos reales, cursos online flexibles recursos multimedia vídeos/audios/ejercicios interactivos, intercambio idiomas plataformas nativos mejora fluidez competencia cultural, apps Duolingo/Babbel lecciones cortas entretenidas audiolibros/libros comprensión auditiva/lectora, inmersión lingüística viajes/residir países anglosajones uso diario natural bilingüismo."
  },
  {
    question: "¿Qué es el método de Schechter?",
    answer: "El método de Schechter es un enfoque pedagógico para aprender idiomas basado en cómo los niños adquieren su lengua materna naturalmente. Combina aprendizaje con actividades recreativas, dinámicas, juegos y alta interacción, evitando la memorización tradicional. Popular entre adolescentes, integra clases de repetición con elementos lúdicos para lograr fluidez comunicativa sin enfocarse inicialmente en gramática formal, priorizando la comprensión contextual y el uso práctico del idioma en situaciones reales cotidianas."
  },
  {
    question: "¿Cuál es el método más eficaz para aprender inglés?",
    answer: "Clases presenciales interacción directa profesor dudas instantáneas práctica compañeros contextos reales, cursos online flexibles recursos multimedia vídeos/audios/ejercicios interactivos, intercambio idiomas Tandem/HelloTalk nativos fluidez comprensión cultural, apps Duolingo/Babbel lecciones cortas audiolibros/libros, viajes extranjero entornos angloparlantes situaciones cotidianas, inmersión música/películas/series/lecturas dispositivos inglés, metas realistas específicas, práctica regular cuatro habilidades, aceptar errores oportunidad aprendizaje."
  },
  // Comparison PAAs (11)
  {
    question: "¿Clases particulares o academia de inglés?",
    answer: "Las clases particulares ofrecen personalización total, flexibilidad y enfoque específico para superar dificultades. Las academias proporcionan entorno social, metodologías estandarizadas, evaluación continua y son más económicas en grupo. Elige academia para motivación grupal y estructura; particulares para necesidades específicas y ritmo personalizado."
  },
  {
    question: "¿Inglés presencial u online?",
    answer: "El inglés presencial permite interacción directa, feedback inmediato y ambiente motivador. Online ofrece flexibilidad horaria, comodidad y acceso global a docentes. El resultado final depende más de la metodología que del formato. Lo ideal es un híbrido: clases presenciales intensivas + refuerzo online asincrónico."
  },
  {
    question: "¿Academia vs profesor particular para Cambridge?",
    answer: "Academia: Simulacros regulares, metodología estructurada, ambiente competitivo, 100% aprobados garantizado. Profesor particular: Atención total, adaptación a tu ritmo, flexibilidad. Para Cambridge, academia ofrece mayor éxito estadístico (85-95%) vs particular (70-80%), pero un buen particular supera cualquier academia."
  },
  {
    question: "¿Curso intensivo o por semana?",
    answer: "Curso intensivo (3-4 horas/día, 4-6 semanas): máxima inmersión, resultados rápidos, ideal para exámenes cercanos. Curso por semana (2 horas/semana, 6-12 meses): mayor consolidación, menos estrés, ideal para niños. Combinar ambos acelera aprendizaje: intensivo para base + semanal para refuerzo."
  },
  {
    question: "¿App Duolingo o academia de inglés?",
    answer: "Duolingo: Entretenido, accesible, gratuito, hábito diario. Academia: Metodología avanzada, feedback humano, speaking práctico, garantía de resultados. Duolingo es complemento, no sustituto. Para aprender inglés real y fluido, academia o profesor particular son imprescindibles."
  },
  {
    question: "¿B2 First o Linguaskill?",
    answer: "B2 First: Presencial/digital, reconocimiento global máximo, formato fijo, resultados en 4-6 semanas. Linguaskill: Online, adaptativo, resultados 48 horas, modular. Para universidades tradicionales, B2 First. Para flexibilidad y rapidez, Linguaskill. Ambos son nivel B2 válidos; elige según objetivo y urgencia."
  },
  {
    question: "¿IELTS o Cambridge?",
    answer: "IELTS: Preferido en Reino Unido, Australia, inmigración. Cambridge: Más aceptado en empresas, universidades españolas, oposiciones. Ambos miden C1/C2. En España 2025, Cambridge es más reconocido. Elige Cambridge si postulas universidades/oposiciones españolas; IELTS si tu destino es UK/Australia."
  },
  {
    question: "¿Academia cara o barata?",
    answer: "Academia cara (800-1500€): Docentes nativos, métodos avanzados, grupos muy reducidos, instalaciones premium, 95%+ aprobados. Academia barata (200-400€): Docentes españoles, metodología tradicional, grupos grandes, recursos limitados, 60-70% aprobados. Invertir en buena academia cuesta menos que 2-3 intentos fallidos de examen."
  },
  {
    question: "¿Profesor nativo o español?",
    answer: "Nativo: Pronunciación natural, intuición idiomática, pero a veces no entiende errores típicos españoles. Profesor español: Entiende tus dificultades, explica gramática, pero limitaciones de pronunciación. Lo ideal: español para estructura + interacción con nativos. En academias buenas, ambos roles combinados."
  },
  {
    question: "¿Inglés en colegio o academia privada?",
    answer: "Colegio: Formación integral, grupos con edad similar, avalado educativamente. Academia privada: Especialización, metodología intensiva, grupos reducidos, flexibilidad. Colegio es obligatorio en España; academia es opción complementaria. Combinar colegio + academia acelera nivel 18-24 meses."
  },
  {
    question: "¿Auditivo, visual o cinestésico?",
    answer: "Auditivo: Escucha, podcasts, conversación. Visual: Videos, libros, infografías. Cinestésico: Role-plays, acciones, movimiento. La mayoría somos multimodales. Academia buena combina los tres: listening, videos/textos, conversación práctica. Descubre tu estilo y potencia ese canal."
  },
  // Learning Methods PAAs (14)
  {
    question: "¿Cuántas horas de estudio al día?",
    answer: "20-60 minutos diarios es más efectivo que largas sesiones esporádicas. Para nivel intermedio (B1-B2) necesitas 350-600 horas acumuladas, alcanzables en 6-12 meses con 1-2 horas diarias. La consistencia supera a la intensidad: mejor 30 min diarios que 5 horas el domingo."
  },
  {
    question: "¿Cómo crear rutina de estudio en inglés?",
    answer: "Establece horario fijo diario (mañana/tarde), incluye 4 destrezas (escuchar/hablar/leer/escribir), usa apps para hábito (Streaks, Habitica), crea ambiente sin distracciones, combina entretenimiento (series/podcasts) con ejercicios estructurados, celebra pequeños logros, ajusta según progreso. Rutina de 45 min diarios > 10 horas semanales."
  },
  {
    question: "¿Cuál es el mejor horario para estudiar inglés?",
    answer: "Mañana (7-9am): Mayor energía cerebral, retención 25-30% mejor. Tarde (15-17h): Secundaria opción. Noche: Menos retención (10-15%), ideal para repaso ligero. Tu cronotipo importa: si eres búho nocturno, diseña rutina según tu pico de energía. Consistencia en horario es clave, no importa si es madrugada o mediodía."
  },
  {
    question: "¿Inglés todos los días o descansar?",
    answer: "Todos los días, incluso 15 minutos, es superior a estudiar 2 horas y descansar 6 días. El cerebro fija información con repetición espaciada diaria. Descanso semanal está bien, pero vuelve al día siguiente. Vacaciones sin inglés un mes = retroceso 2 meses. Mantén exposición mínima incluso en vacaciones."
  },
  {
    question: "¿Libros de gramática o conversación primero?",
    answer: "Conversación primero: Motivación, retención, uso real del idioma. Gramática como herramienta explicativa después de la exposición natural. Libros de gramática son referencias cuando necesitas entender una estructura. Ideal: 80% conversación/input + 20% gramática sistemática."
  },
  {
    question: "¿Vale la pena viajar para aprender inglés?",
    answer: "Viaje corto (1-2 semanas): Motivación, experiencias, refuerzo. Viaje largo (3-6 meses): Inmersión real, fluidez natural, transformación. Vivir en país angloparlante (1+ año): Bilingüismo funcional. Valor: 1 mes inmersión = 6 meses academia. Presupuesto: budgets hostels + voluntariado reducen costo. Mejor combinación: 2-4 semanas viaje + 6 meses academia."
  },
  {
    question: "¿Cambiar idioma del teléfono ayuda?",
    answer: "Sí. Cambiar teléfono/computadora a inglés obliga contacto diario pasivo, ampliación vocabulario contextual (menús, notificaciones, configuración). Efectivo como complemento (5-10% mejora), no solución única. Combina con: películas, podcasts, libros, conversación activa."
  },
  {
    question: "¿Convivir con nativo acelera inglés?",
    answer: "Sí significativamente. Convivencia con nativo: inmersión 24/7, correcciones naturales, pronunciación, expresiones idiomáticas, comprensión auditiva. Acelera 6-12 meses vs academia. Plataformas: Airbnb (buscar roommates nativos), Tandem (intercambio idiomas), programas au-pair. Investir tiempo inicial en búsqueda compensa."
  },
  {
    question: "¿Cuándo ver películas sin subtítulos?",
    answer: "Nivel A2-B1: Películas con subtítulos en inglés + español. Nivel B1-B2: Subtítulos solo en inglés. Nivel B2+: Sin subtítulos. Estrategia: ver escena con subtítulos, luego sin, luego nuevamente. Series vs películas: series son mejor (episodios cortos, contexto repetido, lenguaje cotidiano). Duración: 20-30 min diarios."
  },
  {
    question: "¿Juegos en inglés aceleran aprendizaje?",
    answer: "Videojuegos en inglés: Listening natural, vocabulario contextual, motivación. Nivel B1+ disfrutan; menores (A1-A2) necesitan apoyo. Mejores juegos: RPGs (narrativa), juegos de estrategia (inglés funcional). Tiempo: máximo 1-2 horas diarias, complemento de academia. Valor: 15-25% mejora auditiva y vocabulario."
  },
  {
    question: "¿Cuál es el tiempo para alcanzar B2?",
    answer: "Desde A2 a B2: 200-300 horas de estudio intenso (3-4 meses) o 600-800 horas en curso semanal (12-18 meses). Desde A1 a B2: 1000+ horas (6-8 meses intenso / 2 años semanal). Realidad: combinar academia (estructura) + inmersión (práctica) acelera 30-40% vs un solo método."
  },
  {
    question: "¿Exámenes de práctica aceleran aprendizaje?",
    answer: "Sí. Exámenes simulados cada 2 semanas: identifica debilidades, aumenta confianza, familiariza formato oficial. Mejor que ejercicios sueltos. Frecuencia óptima: 1 simulacro completo mensual + ejercicios semanales por destreza. Feedback crítico: revisar errores 48h después, no inmediatamente."
  },
  // Skills PAAs (9)
  {
    question: "¿Es importante tener acento nativo?",
    answer: "Acento nativo no es objetivo realista ni necesario. Acento inteligible: que te entiendan sin esfuerzo, es meta real. 80% de hablantes de inglés mundial son NO-nativos. Enfócate en: pronunciación clara, entonación natural, ritmo. Acento español leve está bien si comunicas efectivamente."
  },
  {
    question: "¿Cómo mejorar confianza hablando inglés?",
    answer: "Preparación (conoce el tema), errores como herramientas (no vergüenza), conversación regular (pierde miedo exponencialmente), grabarte (autoevaluación reduce ansiedad), grupos reducidos seguros (máximo 10), celebrar intentos, visualización positiva. Psicología es 60% del speaking avanzado."
  },
  {
    question: "¿Vale la pena estudiar pronunciación específica?",
    answer: "Sonidos problemáticos sí (th, r, acentos): inversión 2-4 semanas = mejora 20-30% inteligibilidad. Acento completo: innecesario para comunicación. Enfócate en: sonidos difíciles para español (th, l vs r), entonación preguntas, ritmo natural. Herramienta: Google Translate audio, YouTube pronunciation, apps Forvo."
  },
  {
    question: "¿Diferencia entre B2 y C1?",
    answer: "B2 (Independent User): Comunica fluidez, nuances básicos, entiende discursos. C1 (Proficient User): Entiende sutilezas, expresa ideas complejas, domina acentos diversos. De B2 a C1: 200-300 horas adicionales, 6-12 meses. Diferencia principal: B2 entiende; C1 piensa y expresa EN inglés sin traducción."
  },
  {
    question: "¿Se puede aprender inglés sin salir de casa?",
    answer: "Sí, pero limitado. Online: clases por videollamada (90% efectivas), tutores IA, videos, apps, podcasts. Carencia: speaking natural = limitado sin conversación en vivo. Solución: combina academia online (2-3h/semana) + inmersión digital (películas, podcasts, escritura) + intercambio Tandem (speaking). Resultado: 70-80% de academia presencial."
  },
  {
    question: "¿Cómo mantener nivel de inglés?",
    answer: "Una vez alcanzado B2/C1, mantener requiere: 15-30 min exposición diaria (podcasts, lecturas, series), 1-2 conversaciones mensuales, lectura de artículos, 1 viaje anual. Sin actividad: 3-6 meses retroceso visible. Con exposición mínima: nivel estable indefinido. Truco: mete inglés en rutina diaria (configuración dispositivos, redes sociales)."
  }
];

// HowTo Schema for the 7 Pillars methodology
const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  "name": "Cómo Aprender Inglés de Verdad con la Metodología Impulse",
  "description": "El método de 7 pilares que llevó a 100% de nuestros estudiantes a aprobar Cambridge 2024-2025. Sistema basado en ciencia del aprendizaje.",
  "image": "https://impulseenglish.s3.us-east-1.amazonaws.com/impulsephotos/JP+WITH+STUDENTS.jpg",
  "totalTime": "PT6M",
  "estimatedCost": {
    "@type": "MonetaryAmount",
    "currency": "EUR",
    "value": "64-79"
  },
  "step": [
    {
      "@type": "HowToStep",
      "position": 1,
      "name": "Personalización Total del Aprendizaje",
      "text": "Evaluación inicial completa de nivel, estilo de aprendizaje y objetivos. Plan de estudios 100% personalizado con adaptación continua según tu progreso mensual.",
      "url": `${businessInfo.url}/metodologia#pilar-1`
    },
    {
      "@type": "HowToStep",
      "position": 2,
      "name": "Identificación de Motivación y Objetivos",
      "text": "Definimos tu 'Por Qué': examen/universidad, trabajo/profesional, viajes/experiencias, o conexión familiar. Tu motivación determina todo el enfoque.",
      "url": `${businessInfo.url}/metodologia#pilar-2`
    },
    {
      "@type": "HowToStep",
      "position": 3,
      "name": "Conversación desde el Primer Día",
      "text": "70% del tiempo de clase hablando TÚ. Errores bienvenidos y corregidos constructivamente con role-plays, debates y conversación espontánea.",
      "url": `${businessInfo.url}/metodologia#pilar-3`
    },
    {
      "@type": "HowToStep",
      "position": 4,
      "name": "Ambiente Psicológicamente Seguro",
      "text": "Los errores no son fracasos, son el camino hacia la fluidez. Corrección constructiva y celebración del progreso, no perfección.",
      "url": `${businessInfo.url}/metodologia#pilar-4`
    },
    {
      "@type": "HowToStep",
      "position": 5,
      "name": "Repetición Espaciada Científica",
      "text": "Sistema basado en la curva del olvido: Día 1 aprendes, Día 3 repasas, Día 7 usas en conversación, Día 30 está en memoria a largo plazo. 40-60% mejor retención.",
      "url": `${businessInfo.url}/metodologia#pilar-5`
    },
    {
      "@type": "HowToStep",
      "position": 6,
      "name": "Práctica Comunicativa en Contextos Reales",
      "text": "Situaciones cotidianas (restaurantes, hoteles), laborales (reuniones, presentaciones, emails) y exposición a acentos diversos.",
      "url": `${businessInfo.url}/metodologia#pilar-6`
    },
    {
      "@type": "HowToStep",
      "position": 7,
      "name": "Desarrollo Sistemático de las 5 Habilidades",
      "text": "Secuencia óptima: Reading (patrones gramaticales), Listening (pronunciación), Writing (producción controlada), Speaking (tiempo real), Grammar (explicación de porqué).",
      "url": `${businessInfo.url}/metodologia#pilar-7`
    }
  ]
};

export default function MetodologiaPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <SEOHead
        title="Metodología Impulse - Cómo Enseñamos Inglés"
        description="Conoce la metodología Impulse: conversación desde día 1, grupos reducidos máx 10 alumnos, personalización total. 100% aprobados Cambridge. Academia Madrid."
        keywords="metodología inglés, como aprender inglés rápido, método conversacional inglés, clases inglés personalizadas madrid"
        canonical="/metodologia"
      />
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-28 pb-20 md:pt-36 md:pb-32 bg-accent-blue overflow-hidden">
        <div className="absolute inset-0 hero-grain opacity-[0.03]"></div>
        <div className="absolute -top-36 -right-36 w-[500px] h-[500px] rounded-full bg-brand-red/[0.06]"></div>
        <div className="absolute -bottom-20 -left-20 w-72 h-72 rounded-full bg-white/[0.03]"></div>

        <div className="relative z-10 container mx-auto px-6 md:px-12">
          <Breadcrumb
            items={[
              { label: 'Metodología' }
            ]}
            variant="light"
          />

          <div className="max-w-4xl mt-12 md:mt-16">
            <div className="flex items-center gap-4 mb-6 animate-hero-fade-up">
              <div className="w-8 h-px bg-white/40"></div>
              <span className="font-display text-white/70 text-xs uppercase tracking-[0.2em]">
                Metodología Impulse
              </span>
            </div>
            <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl text-white tracking-tight leading-[1.1] mb-6 animate-hero-fade-up animation-delay-100">
              Cómo Aprendes Inglés de Verdad
            </h1>
            <div className="w-16 h-0.5 bg-brand-red mb-6 animate-hero-fade-up animation-delay-150"></div>
            <p className="font-display text-xl text-white/80 font-light mb-4 animate-hero-fade-up animation-delay-200">
              El método que llevó a 100% de nuestros estudiantes a aprobar Cambridge 2024-2025.
            </p>
            <p className="font-display text-white/60 leading-relaxed max-w-2xl mb-10 animate-hero-fade-up animation-delay-200">
              No es magia. Es ciencia del aprendizaje aplicada con pasión. La Metodología Impulse es nuestro sistema propietario desarrollado en el aula con cientos de estudiantes.
            </p>
            <div className="flex flex-wrap gap-4 animate-hero-fade-up animation-delay-300">
              <Link
                to="/reservar-clase"
                className="bg-brand-red hover:bg-[#d4444e] text-white font-display font-semibold py-3 px-6 rounded-lg flex items-center gap-2 transition-all duration-300"
              >
                Experimenta la Metodología
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section - High up for SEO */}
      <FAQSection
        faqs={metodologiaFAQs}
        title="Preguntas Frecuentes sobre Metodología de Inglés"
      />

      {/* Problem Section */}
      <section className="py-12 md:py-20 px-6 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 mb-4">
              ¿Por Qué Tantos Estudiantes "No Pueden" con el Inglés?
            </h2>
            <p className="text-zinc-600 max-w-2xl mx-auto">
              La historia que escuchamos constantemente:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="bg-zinc-50 p-8 rounded-xl">
              <p className="text-zinc-600 italic mb-4">"Estudié inglés 10 años en el colegio y no puedo mantener una conversación."</p>
              <p className="text-zinc-600 italic mb-4">"Me da vergüenza hablar. Tengo miedo de equivocarme."</p>
              <p className="text-zinc-600 italic mb-4">"Memorizo vocabulario pero se me olvida en una semana."</p>
              <p className="text-zinc-600 italic">"Entiendo la gramática pero no me sale cuando hablo."</p>
              <p className="text-accent-blue font-bold mt-6">¿Te suena familiar?</p>
              <p className="text-zinc-900 font-bold text-lg mt-2">El problema NO eres tú. El problema es el método.</p>
            </div>

            <div className="grid grid-cols-1 gap-6">
              <div className="bg-red-50 p-6 rounded-xl border border-red-100">
                <h3 className="font-bold text-red-800 mb-4">Métodos Tradicionales</h3>
                <ul className="space-y-2">
                  {[
                    "Meses memorizando gramática antes de hablar",
                    "Corrección constante que genera miedo",
                    "Vocabulario sin contexto que se olvida",
                    "Grupos de 15-20 estudiantes",
                    "Enfoque en \"no equivocarse\""
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-red-700 text-sm">
                      <XCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-green-50 p-6 rounded-xl border border-green-100">
                <h3 className="font-bold text-green-800 mb-4">Metodología Impulse</h3>
                <ul className="space-y-2">
                  {[
                    "Conversación desde el primer día",
                    "Ambiente seguro donde errores = aprendizaje",
                    "Vocabulario con repetición espaciada",
                    "Grupos reducidos (máximo 7-10)",
                    "Enfoque en comunicación real"
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-green-700 text-sm">
                      <CheckCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7 Pillars Section */}
      <section className="py-12 md:py-20 px-6 bg-zinc-50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <span className="text-accent-blue font-bold tracking-widest text-xs uppercase mb-4 block">
              Los 7 Pilares
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 mb-4">
              Los 7 Pilares Que Transforman Tu Aprendizaje
            </h2>
          </div>

          <div className="space-y-8">
            {pillars.map((pillar, index) => (
              <div key={index} className="bg-white rounded-xl p-8 shadow-sm">
                <div className="flex flex-col lg:flex-row gap-6">
                  <div className="flex items-start gap-4">
                    <div className="w-14 h-14 bg-accent-blue text-white rounded-xl flex items-center justify-center font-bold text-2xl flex-shrink-0">
                      {pillar.number}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-zinc-900 mb-1">{pillar.title}</h3>
                      <p className="text-accent-blue font-medium text-sm mb-3">{pillar.subtitle}</p>
                      <p className="text-zinc-600 mb-4">{pillar.description}</p>
                      <ul className="space-y-2 mb-4">
                        {pillar.points.map((point, i) => (
                          <li key={i} className="flex items-start gap-2 text-zinc-600 text-sm">
                            <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                            {point}
                          </li>
                        ))}
                      </ul>
                      <div className="bg-accent-blue/5 p-4 rounded-lg border border-accent-blue/10">
                        <p className="text-accent-blue font-medium text-sm">
                          <strong>Resultado:</strong> {pillar.result}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Science Section */}
      <section className="py-12 md:py-20 px-6 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 mb-4">
              La Ciencia Detrás del Método
            </h2>
            <p className="text-zinc-600 max-w-2xl mx-auto">
              Nuestro método NO es "se nos ocurrió". Está basado en décadas de investigación pedagógica.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "Adquisición de Lenguas (Krashen)", desc: "Input comprensible + filtro afectivo bajo = adquisición natural" },
              { title: "Repetición Espaciada (Ebbinghaus)", desc: "Curva del olvido + intervalos óptimos = retención a largo plazo" },
              { title: "Zona de Desarrollo Próximo (Vygotsky)", desc: "Ni demasiado fácil ni imposible. Desafío justo = máximo aprendizaje" },
              { title: "Enfoque Comunicativo (Canale & Swain)", desc: "Competencia comunicativa > conocimiento gramatical abstracto" },
              { title: "Task-Based Learning", desc: "Aprender haciendo tareas reales, no ejercicios artificiales" },
              { title: "Growth Mindset (Dweck)", desc: "Inteligencia y habilidad son desarrollables, no fijas" }
            ].map((item, i) => (
              <div key={i} className="p-6 bg-zinc-50 rounded-xl">
                <Brain className="w-8 h-8 text-accent-blue mb-4" />
                <h3 className="font-bold text-zinc-900 mb-2">{item.title}</h3>
                <p className="text-zinc-600 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-6 bg-accent-blue">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Los Números No Mienten
          </h2>
          <dl className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, i) => (
              <div key={i} className="text-center">
                <dt className="text-4xl md:text-5xl font-bold text-white mb-2">{stat.value}</dt>
                <dd className="text-white/70 text-sm">{stat.label}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-12 md:py-20 px-6 bg-zinc-50">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold text-zinc-900 text-center mb-12">
            Lo Que Dicen Nuestros Estudiantes
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { quote: "El método de Impulse es diferente. No memorizas, aprendes de verdad. Ahora puedo mantener conversaciones que antes me daban pánico.", author: "Aurora Jiménez Solano", role: "Estudiante Adulta" },
              { quote: "Mi hija aprobó B2 First con distinción. El método funciona. Los profesores saben exactamente cómo enseñar.", author: "Carmen L.", role: "Madre de Alumna" },
              { quote: "Después de años intentando con otras academias, Impulse es donde finalmente 'click'. El ambiente sin miedo a equivocarse es clave.", author: "Alejandro M.", role: "Estudiante, 17 años" },
              { quote: "Las clases son divertidas y efectivas. Mi hijo va encantado y está aprobando todo.", author: "Lidia Ramirez", role: "Madre" }
            ].map((item, i) => (
              <div key={i} className="bg-white p-6 rounded-xl">
                <div className="flex gap-1 mb-4">
                  {[1,2,3,4,5].map(s => (
                    <Star key={s} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
                <p className="text-zinc-600 mb-4">"{item.quote}"</p>
                <div>
                  <p className="font-bold text-zinc-900">{item.author}</p>
                  <p className="text-zinc-500 text-sm">{item.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-20 px-6 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 mb-6">
                Prueba la Metodología Impulse Tú Mismo
              </h2>
              <p className="text-zinc-600 mb-6">
                Hemos trabajado con cientos de estudiantes como tú. Entendemos la brecha entre donde estás ahora y donde necesitas llegar. Somos expertos en inglés. Somos expertos en motivación, y te prometemos que te llevaremos a donde necesitas ir.
              </p>
              <div className="space-y-3 mb-8">
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span className="text-zinc-700">Evaluamos tu nivel actual</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span className="text-zinc-700">Identificamos tu estilo de aprendizaje</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span className="text-zinc-700">Creamos plan personalizado</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span className="text-zinc-700">Experimentas el método en acción</span>
                </div>
              </div>
            </div>
            <div>
              <LeadForm
                title="Prueba de Nivel Gratuita"
                subtitle="25 minutos. Sin compromiso."
                ctaText="Reservar Prueba Gratuita"
                source="metodologia"
                showPhone={true}
                showAge={true}
                showLevel={true}
              />
            </div>
          </div>
        </div>
      </section>

      <Footer />

      <SchemaMarkup schema={howToSchema} />
    </>
  );
}
