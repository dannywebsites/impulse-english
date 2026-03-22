import React, { useEffect, useState } from 'react';
import { ChevronDown, MessageCircle, Phone, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import FAQSection from '../components/FAQSection';
import Breadcrumb from '../components/Breadcrumb';
import SEOHead from '../components/SEOHead';

import type { FAQItem } from '../../utils/schemaData';

interface FAQSection {
  title: string;
  items: FAQItem[];
}

// SEO-focused FAQs for the top of the page - Based on CSV PAAs for SEO optimization
const seoFAQs: FAQItem[] = [
  {
    question: "¿Cuál es el mejor curso para aprender inglés?",
    answer: "El mejor curso para aprender inglés varía según necesidades: That's English (Ministerio Educación español, certificación internacional), Babbel (conversación práctica, clases en vivo), British Council Madrid/Impulse English(inglés británico, exámenes certificados), Udemy (155.000 cursos variados), Duolingo (lecciones diarias cortas). Libros destacados: \"English Grammar in Use\" (Raymond Murphy), \"English for Everyone\" (DK, autoaprendizaje visual), \"Activate Advanced C1\" (preparación exámenes oficiales). Métodos complementarios: intercambio lingüístico (Tandem, HelloTalk), inmersión extranjera, audiolibros."
  },
  {
    question: "¿Cómo saber si un curso de inglés es bueno?",
    answer: "Un curso de inglés bueno se identifica mediante acreditación MCER (<a href='https://www.coe.int/es/web/common-european-framework-reference-languages' target='_blank' rel='noopener noreferrer' class='text-accent-blue hover:underline'>Marco Común Europeo de Referencia</a>), profesores experimentados cualificados, metodología interactiva práctica con situaciones reales, materiales actualizados innovadores, evaluaciones periódicas personalizadas, grupos reducidos con atención individualizada, flexibilidad horaria (acceso 24/7), certificaciones reconocidas empresarialmente, retroalimentación continua personalizada, contenido adicional complementario y ambiente participativo motivador. Debe adaptarse a niveles específicos (principiante-avanzado) y objetivos concretos (conversación, gramática, preparación exámenes oficiales)."
  },
  {
    question: "¿Cuál es el mejor método para aprender inglés rápidamente?",
    answer: "El mejor método para aprender inglés rápidamente combina inmersión total (cambiar idioma dispositivos, películas sin subtítulos, música, lectura), práctica diaria cuatro habilidades (escuchar, hablar, leer, escribir), metodología SMART (estudio estructurado, motivación, objetivos claros, repetición, tecnología), intercambio idiomas Tandem/HelloTalk con nativos, escribir diario inglés experiencias diarias, podcasts temas interesantes trayectos, metas realistas (conversación básica tres meses, películas sin subtítulos seis meses), apps Duolingo/Babbel, audiolibros, cursos online interactivos profesores particulares, actividades gratificantes, aceptar errores oportunidad aprendizaje."
  },
  {
    question: "¿Qué debe tener un buen curso de inglés?",
    answer: "Un buen curso de inglés debe tener profesores experimentados, horarios flexibles, grupos reducidos para atención personalizada, metodología estructurada con evaluaciones periódicas, materiales actualizados con técnicas innovadoras, recursos didácticos variados (vídeos, audios, ejercicios interactivos), práctica con hablantes nativos, ejercicios pronunciación específicos, retroalimentación personalizada, clases apoyo gratuitas, contenido adicional complementario, ambiente interactivo participativo, certificaciones reconocidas internacionalmente, acceso online flexible, aplicaciones móviles recomendadas y enfoque comunicativo práctico que permita \"vivir\" el inglés diariamente."
  },
  {
    question: "¿Cuántas horas al día estudiar inglés?",
    answer: "Estudiar inglés entre 20 y 60 minutos diarios con regularidad es más efectivo que largas sesiones esporádicas. Para niveles intermedios, se requieren 350-600 horas acumuladas, logrables con sesiones diarias que combinen comprensión auditiva, práctica oral, lectura y escritura, apoyadas por técnicas como la repetición espaciada."
  },
  {
    question: "¿Clases particulares o academia de inglés?",
    answer: "La elección entre clases particulares y academias de inglés en 2025/26 depende de necesidades, presupuesto y objetivos. Las clases particulares ofrecen personalización, flexibilidad y enfoque específico, ideales para dificultades o inseguridad. Las academias aportan entorno social, metodologías estandarizadas y evaluación continua, siendo más económicas y motivadoras en grupo."
  }
];

const faqSections: FAQSection[] = [
  {
    title: "Sobre Nuestra Academia",
    items: [
      {
        question: "¿Dónde está ubicada Impulse English Academy?",
        answer: "Av. de El Ferrol, 22, La Vaguada, Barrio del Pilar, 28029 Madrid. A 4 minutos caminando de Metro Barrio del Pilar (Línea 9) y entre 12-15 minutos desde Metro Peñagrande (Línea 7)."
      },
      {
        question: "¿Qué horario tiene la academia?",
        answer: "Lunes: 10:00-21:30 | Martes: 15:30-21:30 | Miércoles: 10:00-21:30 | Jueves: 15:30-21:30 | Viernes: 15:30-19:30"
      },
      {
        question: "¿Sois un Centro Oficial Cambridge?",
        answer: "Sí. Somos Centro Oficial de Preparación de Exámenes Cambridge. Puedes prepararte y hacer el examen oficial en el mismo lugar."
      },
      {
        question: "¿Cuántos estudiantes tenéis por clase?",
        answer: "Máximo 7 alumnos en infantil, máximo 10 alumnos en primaria/secundaria/adultos. Grupos realmente reducidos."
      }
    ]
  },
  {
    title: "Cursos Disponibles",
    items: [
      {
        question: "¿Qué cursos ofrecéis?",
        answer: "Infantil (2-5 años) con Great Little People, Primaria (6-12 años) con Young Learners + Cambridge, Secundaria (13-17 años) con Cambridge B1/B2/C1, Adultos con todos los niveles + Cambridge + Linguaskill, y Clases Particulares presenciales u online."
      },
      {
        question: "¿Tenéis clases para adultos principiantes absolutos?",
        answer: "Sí. Somos expertos en principiantes absolutos. \"¿Lo intentaste antes y no pudiste aprender?\" Te ayudamos."
      },
      {
        question: "¿Ofrecéis Business English?",
        answer: "No tenemos curso específico de Business English, pero preparamos adultos para Linguaskill Business y contextos laborales."
      },
      {
        question: "¿Las clases particulares son presenciales u online?",
        answer: "Ambas. Tú eliges según tu preferencia y disponibilidad."
      }
    ]
  },
  {
    title: "Cómo Empezar",
    items: [
      {
        question: "¿Cómo me inscribo?",
        answer: "1. Contáctanos por WhatsApp (+34 604 910 611), teléfono o formulario web. 2. Vienes para prueba de nivel gratuita (adultos/secundaria/primaria) o clase de prueba (infantil). 3. Recibimos plan personalizado y recomendación de grupo. 4. Comienzas tu curso."
      },
      {
        question: "¿Hay clase de prueba gratuita?",
        answer: "Solo para infantil (2-5 años), lunes a viernes a las 17:30. Para primaria, secundaria y adultos hacemos prueba de nivel de 25 minutos."
      },
      {
        question: "¿Qué es la prueba de nivel?",
        answer: "Evaluación gratuita de 15-20 minutos + plan de estudios personalizado + recomendación de grupo (duración total: 25 minutos). Sin compromiso."
      },
      {
        question: "¿Puedo cambiar de curso después de empezar?",
        answer: "No suele pasar, ya que hacemos el plan de estudios y prueba de nivel personalizados para colocarte en el grupo correcto desde el principio."
      }
    ]
  },
  {
    title: "Horarios y Tarifas",
    items: [
      {
        question: "¿Cuánto cuesta el curso de Infantil?",
        answer: "Infantil (2-5 años): Lunes-Viernes desde 16:30 | 1 hora/semana | 64€/mes"
      },
      {
        question: "¿Cuánto cuesta el curso de Primaria?",
        answer: "Primaria (6-12 años): Lun/Mié o Mar/Jue, 17:30-18:30 o 18:30-19:30 | 2 horas/semana | 71€/mes"
      },
      {
        question: "¿Cuánto cuesta el curso de Secundaria?",
        answer: "Secundaria (13-17 años): Lun/Mié o Mar/Jue, 16:30-17:30, 18:30-19:30, 19:30-20:30 | 2 horas/semana | Desde 75€/mes"
      },
      {
        question: "¿Cuánto cuesta el curso de Adultos?",
        answer: "Adultos: Lun/Mié o Mar/Jue, mañanas (10:00, 11:00) o tardes (19:30-20:30, 20:30-21:30) | 2 horas/semana | 79€/mes"
      },
      {
        question: "¿Hay descuentos?",
        answer: "Sí, ofrecemos descuento para pago trimestral."
      },
      {
        question: "¿Qué incluye el precio?",
        answer: "Clases, material didáctico en clase, simulacros (Cambridge), informes de progreso, acceso a plataforma (infantil Great Little People 50€/año adicional)."
      },
      {
        question: "¿Qué NO incluye el precio?",
        answer: "Libros oficiales (30-45€ según nivel) y tasa de examen Cambridge/Linguaskill."
      }
    ]
  },
  {
    title: "Certificaciones Cambridge",
    items: [
      {
        question: "¿Cuánto dura un certificado Cambridge?",
        answer: "Los certificados Cambridge son válidos de por vida sin fecha de caducidad. Algunas instituciones pueden requerir antigüedad máxima (típicamente 2-3 años)."
      },
      {
        question: "¿Qué niveles Cambridge preparáis?",
        answer: "Todos: Pre-A1 Starters, A1 Movers, A2 Flyers, A2 Key, B1 Preliminary, B2 First, C1 Advanced, C2 Proficiency."
      },
      {
        question: "¿B2 First sirve para la universidad?",
        answer: "Sí. La mayoría de universidades españolas aceptan B2 First como requisito de graduación y para Erasmus+."
      },
      {
        question: "¿Cuánto cuesta el examen B2 First?",
        answer: "Aproximadamente 160-180€ (tasa oficial Cambridge, adicional al coste de preparación)."
      },
      {
        question: "¿Cuánto tiempo tarda preparar B2 First?",
        answer: "Desde nivel B1 consolidado: 6-12 meses. Desde A2: 12-18 meses. Hacemos prueba de nivel para timeline preciso."
      },
      {
        question: "¿Puedo hacer el examen aquí?",
        answer: "Sí. Somos Centro Oficial. Preparas y examinas en el mismo lugar."
      },
      {
        question: "¿Qué nota necesito para aprobar B2 First?",
        answer: "Mínimo 160 puntos sobre 180. Grade C (160-172), Grade B (173-179), Grade A (180-190, acredita C1)."
      }
    ]
  },
  {
    title: "Certificación Linguaskill",
    items: [
      {
        question: "¿Qué es Linguaskill?",
        answer: "Examen de inglés online adaptativo de Cambridge Assessment English. Resultados en 48 horas. Reconocido en 60+ países."
      },
      {
        question: "¿Es Linguaskill un título oficial?",
        answer: "Sí. Reconocido oficialmente por <a href='https://www.crue.org/acreditacion-de-idiomas/' target='_blank' rel='noopener noreferrer' class='text-accent-blue hover:underline'>CRUE</a> en España para graduación universitaria, becas, posgrados y oposiciones."
      },
      {
        question: "¿Caduca el certificado Linguaskill?",
        answer: "No tiene fecha de caducidad establecida, pero instituciones pueden requerir antigüedad máxima."
      },
      {
        question: "¿Linguaskill o Cambridge tradicional (B2 First)?",
        answer: "Linguaskill si necesitas certificado urgente (48h resultados). Cambridge tradicional si quieres reconocimiento mundial más amplio."
      },
      {
        question: "¿Cuánto cuesta Linguaskill?",
        answer: "Aproximadamente 90-120€ (más económico que Cambridge tradicional)."
      }
    ]
  },
  {
    title: "Método de Enseñanza",
    items: [
      {
        question: "¿Qué es la Metodología Impulse?",
        answer: "Nuestro sistema propio con 7 pilares: Personalización, Motivación, Conversación desde día 1, Ambiente seguro, Repetición espaciada, Práctica comunicativa, Desarrollo sistemático."
      },
      {
        question: "¿Cómo son las clases?",
        answer: "70% del tiempo hablas TÚ en inglés. Conversación, role-plays, situaciones reales. No memorización pasiva."
      },
      {
        question: "¿Por qué tenéis 100% de aprobados?",
        answer: "Metodología probada + profesores certificados + grupos reducidos + simulacros mensuales + feedback personalizado."
      },
      {
        question: "¿Los profesores son nativos?",
        answer: "Son profesores certificados (TEFL, CELTA o equivalente) con formación pedagógica. Algunos nativos, otros bilingües. Todos expertos en enseñanza."
      },
      {
        question: "¿Hacéis informes de progreso?",
        answer: "Sí. Informes mensuales personalizados + reuniones trimestrales + simulacros regulares."
      }
    ]
  },
  {
    title: "Cursos para Niños",
    items: [
      {
        question: "¿Qué es Great Little People?",
        answer: "Metodología internacional para niños 2-5 años. 360° family involvement: música, movimiento, juegos, plataforma online para casa."
      },
      {
        question: "¿Los padres pueden quedarse en clase infantil?",
        answer: "Para 2-3 años recomendamos quedarse al principio hasta que el niño/a se sienta cómodo/a. Para 4-5 años generalmente no es necesario."
      },
      {
        question: "¿Cuánto cuesta la plataforma Great Little People?",
        answer: "50€/año (adicional a matrícula mensual). Acceso a canciones, juegos y actividades para practicar en casa."
      },
      {
        question: "¿Preparáis Young Learners (Starters, Movers, Flyers)?",
        answer: "Sí. En primaria preparamos todos los niveles Cambridge Young Learners."
      }
    ]
  }
];

function FAQAccordion({ section }: { section: FAQSection }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="mb-12">
      <h2 className="text-2xl font-bold text-zinc-900 mb-6">{section.title}</h2>
      <div className="space-y-3">
        {section.items.map((item, index) => (
          <div key={index} className="bg-white rounded-xl border border-zinc-100 overflow-hidden">
            <button
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
              className="w-full flex items-center justify-between p-5 text-left hover:bg-zinc-50 transition-colors"
            >
              <span className="font-semibold text-zinc-900 pr-4">{item.question}</span>
              <ChevronDown
                className={`w-5 h-5 text-zinc-400 flex-shrink-0 transition-transform ${
                  openIndex === index ? 'rotate-180' : ''
                }`}
              />
            </button>
            {openIndex === index && (
              <div className="px-5 pb-5">
                <p className="text-zinc-600">{item.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default function PreguntasFrecuentesPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <SEOHead
        title="Preguntas Frecuentes"
        description="Respuestas a las preguntas más frecuentes sobre clases de inglés, exámenes Cambridge, Linguaskill, precios y metodología en Impulse English Academy Madrid."
        keywords="preguntas frecuentes academia inglés, faq clases inglés madrid, dudas cambridge linguaskill, información cursos inglés"
        canonical="/preguntas-frecuentes"
      />
      <Navbar />

      {/* Hero Section */}
      <section className="pt-24 pb-12 md:pt-32 md:pb-16 bg-gradient-to-br from-accent-blue to-blue-900">
        <div className="container mx-auto px-6 md:px-12">
          <div className="mb-6">
            <Breadcrumb
              items={[
                { label: 'Preguntas Frecuentes' }
              ]}
              variant="light"
            />
          </div>
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-bold text-white tracking-tight mb-6">
              Preguntas Frecuentes
            </h1>
            <p className="text-xl text-white/90 font-light mb-4">
              Todo Lo Que Necesitas Saber
            </p>
            <p className="text-white/70">
              Horarios, precios, métodos, exámenes Cambridge, Linguaskill y más. Si no encuentras tu respuesta aquí, contáctanos por WhatsApp.
            </p>
          </div>
        </div>
      </section>

      {/* SEO-focused FAQ Section - High up for SEO/AI optimization */}
      <FAQSection
        faqs={seoFAQs}
        title="Preguntas Frecuentes sobre Elegir un Curso de Inglés"
        className="bg-white"
      />

      {/* FAQ Content */}
      <section className="py-12 md:py-20 px-6 bg-zinc-50">
        <div className="container mx-auto max-w-4xl">
          {faqSections.map((section, index) => (
            <FAQAccordion key={index} section={section} />
          ))}
        </div>
      </section>

      {/* External Authority Links */}
      <section className="py-12 px-6 bg-white border-t border-zinc-100">
        <div className="container mx-auto max-w-4xl">
          <h3 className="font-bold text-zinc-900 mb-4">Recursos oficiales y referencias</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
            <a
              href="https://www.cambridgeenglish.org/es/exams-and-tests/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-accent-blue hover:underline"
            >
              → Cambridge English - Exámenes oficiales
            </a>
            <a
              href="https://www.coe.int/es/web/common-european-framework-reference-languages"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-accent-blue hover:underline"
            >
              → Consejo de Europa - Marco Común Europeo (MCER)
            </a>
            <a
              href="https://www.crue.org/acreditacion-de-idiomas/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-accent-blue hover:underline"
            >
              → CRUE - Acreditación de idiomas en universidades
            </a>
            <a
              href="https://www.cambridgeenglish.org/es/exams-and-tests/linguaskill/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-accent-blue hover:underline"
            >
              → Cambridge English - Linguaskill oficial
            </a>
            <a
              href="https://educagob.educacionfpydeportes.gob.es/ensenanzas/idiomas/informacion-general/evaluacion-certificacion.html"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-accent-blue hover:underline"
            >
              → Ministerio de Educación - Acreditación de idiomas
            </a>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-6 bg-zinc-50">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold text-zinc-900 mb-4">
            ¿No encontraste tu respuesta?
          </h2>
          <p className="text-zinc-600 mb-8">
            Contáctanos directamente. Respondemos en menos de 24 horas.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-3xl mx-auto">
            <a
              href="https://wa.me/34604910611"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center gap-2 bg-green-500 hover:bg-green-600 text-white p-6 rounded-xl transition-colors"
            >
              <MessageCircle className="w-8 h-8" />
              <span className="font-bold">WhatsApp</span>
              <span className="text-green-100 text-sm">+34 604 910 611</span>
            </a>

            <a
              href="tel:+34604910611"
              className="flex flex-col items-center gap-2 bg-accent-blue hover:bg-blue-900 text-white p-6 rounded-xl transition-colors"
            >
              <Phone className="w-8 h-8" />
              <span className="font-bold">Llamar</span>
              <span className="text-blue-100 text-sm">+34 604 910 611</span>
            </a>

            <Link
              to="/reservar-clase"
              className="flex flex-col items-center gap-2 bg-red-600 hover:bg-red-700 text-white p-6 rounded-xl transition-colors"
            >
              <Mail className="w-8 h-8" />
              <span className="font-bold">Reservar</span>
              <span className="text-red-100 text-sm">Prueba de Nivel</span>
            </Link>
          </div>
        </div>
      </section>

      <Footer variant="simple" />
    </>
  );
}
