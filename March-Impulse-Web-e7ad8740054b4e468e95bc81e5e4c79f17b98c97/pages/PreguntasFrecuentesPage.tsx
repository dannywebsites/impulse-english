import React, { useEffect, useState } from 'react';
import { ChevronDown, MessageCircle, Phone, Mail } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import FAQSection from '../components/FAQSection';
import Breadcrumb from '../components/Breadcrumb';

import type { FAQItem } from '../utils/schemaData';

interface FAQSection {
  title: string;
  items: FAQItem[];
}

// SEO-focused FAQs for the top of the page - Based on CSV PAAs for SEO optimization
const seoFAQs: FAQItem[] = [
  {
    question: "¿Cómo saber si un curso de inglés es bueno?",
    answer: "Un curso de inglés bueno se identifica mediante acreditación MCER (<a href='https://www.coe.int/es/web/common-european-framework-reference-languages' target='_blank' rel='noopener noreferrer' class='text-accent-blue hover:underline'>Marco Común Europeo de Referencia</a>), profesores experimentados cualificados, metodología interactiva práctica con situaciones reales, materiales actualizados innovadores, evaluaciones periódicas personalizadas, grupos reducidos con atención individualizada, flexibilidad horaria (acceso 24/7), certificaciones reconocidas empresarialmente, retroalimentación continua personalizada, contenido adicional complementario y ambiente participativo motivador. Debe adaptarse a niveles específicos (principiante-avanzado) y objetivos concretos (conversación, gramática, preparación exámenes oficiales)."
  },
  {
    question: "¿Cuántas horas al día estudiar inglés?",
    answer: "Estudiar inglés entre 20 y 60 minutos diarios con regularidad es más efectivo que largas sesiones esporádicas. Para niveles intermedios, se requieren 350-600 horas acumuladas, logrables con sesiones diarias que combinen comprensión auditiva, práctica oral, lectura y escritura, apoyadas por técnicas como la repetición espaciada."
  },
  {
    question: "¿Clases particulares o academia de inglés?",
    answer: "La elección entre clases particulares y academias de inglés en 2025/26 depende de necesidades, presupuesto y objetivos. Las clases particulares ofrecen personalización, flexibilidad y enfoque específico, ideales para dificultades o inseguridad. Las academias aportan entorno social, metodologías estandarizadas y evaluación continua, siendo más económicas y motivadoras en grupo."
  },
  // Definitions PAAs (3)
  {
    question: "¿Qué significa MCER en inglés?",
    answer: "MCER (Marco Común Europeo de Referencia para las Lenguas) es el estándar internacional que define niveles de dominio lingüístico: A1-A2 (usuario elemental), B1-B2 (usuario independiente), C1-C2 (usuario competente). Todos los exámenes Cambridge se alinean con MCER, facilitando comparación internacional de niveles de inglés."
  },
  {
    question: "¿Qué es el CEFR?",
    answer: "CEFR (Common European Framework of Reference for Languages) es el equivalente en inglés del MCER. Define 6 niveles: A1, A2, B1, B2, C1, C2. Usado por Cambridge, IELTS, Duolingo y todas instituciones serias. Permite comparar títulos de idiomas entre países y certificadores distintos."
  },
  {
    question: "¿Qué significa B2 en inglés?",
    answer: "B2 (Nivel Intermedio-Alto, Independent User) significa comprensión profunda, expresión fluida y espontánea, capacidad para argumentar, discutir y defender posiciones. Es el nivel mínimo para trabajar en multinacional, estudiar universidad, obtener becas y demostrar solvencia profesional en inglés."
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
        question: "¿Cuánto tiempo lleváis operando?",
        answer: "Más de 4 años en La Vaguada, Barrio del Pilar, sirviendo a familias de toda la zona norte de Madrid."
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
        question: "¿Cuál es el horario de Infantil?",
        answer: "Infantil (2-5 años): Lunes-Viernes desde 16:30 | 1 hora/semana"
      },
      {
        question: "¿Cuál es el horario de Primaria?",
        answer: "Primaria (6-12 años): Lun/Mié o Mar/Jue, 17:30-18:30 o 18:30-19:30 | 2 horas/semana"
      },
      {
        question: "¿Cuál es el horario de Secundaria?",
        answer: "Secundaria (13-17 años): Lun/Mié o Mar/Jue, 16:30-17:30, 18:30-19:30, 19:30-20:30 | 2 horas/semana"
      },
      {
        question: "¿Cuál es el horario de Adultos?",
        answer: "Adultos: Lun/Mié o Mar/Jue, mañanas (10:00, 11:00) o tardes (19:30-20:30, 20:30-21:30) | 2 horas/semana"
      },
      {
        question: "¿Cuánto cuestan las clases particulares?",
        answer: "Horario: Flexible | Abono de 20 horas | Más información en academia"
      },
      {
        question: "¿Hay descuentos?",
        answer: "Sí, ofrecemos descuento para pago trimestral."
      },
      {
        question: "¿Qué incluye cada curso?",
        answer: "Clases, material didáctico en clase, simulacros (Cambridge), informes de progreso, acceso a plataforma."
      },
      {
        question: "¿Qué NO incluye?",
        answer: "Libros oficiales específicos del nivel y tasa de examen Cambridge/Linguaskill (estos son costos de la entidad examinadora)."
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
        answer: "El coste es la tasa oficial de Cambridge Assessment English. Te proporcionamos el desglose exacto cuando plantifiques tu preparación."
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
      },
      {
        question: "¿Cuál es el writing obligatorio de B2?",
        answer: "Un ensayo (essay) de 140-190 palabras. Es la Parte 1 del examen de Writing."
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
        question: "¿Qué países aceptan Linguaskill?",
        answer: "60+ países: España (CRUE), Canadá, Francia, Suiza, Reino Unido, Singapur, Vietnam, Arabia Saudita, Brasil, etc."
      },
      {
        question: "¿Linguaskill o Cambridge tradicional (B2 First)?",
        answer: "Linguaskill si necesitas certificado urgente (48h resultados). Cambridge tradicional si quieres reconocimiento mundial más amplio."
      },
      {
        question: "¿Cuánto cuesta Linguaskill?",
        answer: "El coste es la tasa oficial de Cambridge Assessment English para Linguaskill. Es una opción rápida con resultados en 48 horas."
      },
      {
        question: "¿Ofrecéis curso Linguaskill?",
        answer: "Sí. Próximo inicio: 26 enero. Plazas limitadas. Contacta para más información."
      }
    ]
  },
  {
    title: "Método de Enseñanza",
    items: [
      {
        question: "¿Qué es la Metodología Impulse™?",
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
        question: "¿Hay plataforma online para practicar en casa?",
        answer: "Sí. La plataforma Great Little People ofrece acceso a canciones, juegos y actividades para reforzar lo aprendido en clase. Contacta para detalles."
      },
      {
        question: "¿Ofrecéis clases de recuperación infantil?",
        answer: "Sí. Clases de recuperación los viernes para infantil."
      },
      {
        question: "¿Preparáis Young Learners (Starters, Movers, Flyers)?",
        answer: "Sí. En primaria preparamos todos los niveles Cambridge Young Learners."
      }
    ]
  },
  {
    title: "Niveles y Duración",
    items: [
      {
        question: "¿Cómo sé mi nivel de inglés?",
        answer: "Prueba de nivel gratuita de 25 minutos. Evaluamos speaking, listening, reading, writing, grammar."
      },
      {
        question: "¿Cuánto tiempo para llegar a B2?",
        answer: "Desde cero: 18-24 meses. Desde A2: 12-18 meses. Desde B1: 6-12 meses. Depende de dedicación y estudio en casa."
      },
      {
        question: "¿Cuántas horas necesito para B2?",
        answer: "Cambridge estima 500-600 horas acumuladas desde cero. Con nuestras 2 horas/semana + estudio en casa: 12-18 meses desde A2."
      },
      {
        question: "¿Puedo acelerar el proceso?",
        answer: "Sí. Clases particulares intensivas + estudio dedicado en casa pueden reducir timeline significativamente."
      }
    ]
  },
  {
    title: "Cómo Contactarnos",
    items: [
      {
        question: "¿Cómo os contacto?",
        answer: "WhatsApp: +34 604 910 611 (más rápido) / Teléfono: +34 604 910 611 / Email: info@impulse-english.es / Formulario web"
      },
      {
        question: "¿Cómo llego en metro?",
        answer: "Línea 9 - Barrio del Pilar (4 min caminando) / Línea 7 - Peñagrande (12-15 min caminando)"
      },
      {
        question: "¿Qué barrios servís?",
        answer: "La Vaguada, Barrio del Pilar, Peñagrande, La Ventilla, La Paz, Plaza Castilla, Tetuán."
      },
      {
        question: "¿Puedo visitaros sin cita?",
        answer: "Sí, pero recomendamos reservar antes para asegurar disponibilidad."
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
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-28 pb-20 md:pt-36 md:pb-28 overflow-hidden">
        <div className="absolute inset-0">
          <picture>
            <source media="(max-width: 640px)" srcSet="/images/optimized/heroes-mobile/facilities-mobile.webp" type="image/webp" />
            <source media="(max-width: 640px)" srcSet="/images/optimized/heroes-mobile/facilities-mobile.jpg" type="image/jpeg" />
            <img src="/images/academy/photos-of-facilities.jpg" alt="Instalaciones Impulse English Academy La Vaguada Madrid" className="w-full h-full object-cover" loading="eager" fetchPriority="high" />
          </picture>
          <div className="absolute inset-0 bg-gradient-to-br from-accent-blue/95 via-accent-blue/85 to-[#0a3560]/75"></div>
        </div>
        <div className="absolute inset-0 hero-grain opacity-[0.03]"></div>
        <div className="absolute -top-32 -right-32 w-[420px] h-[420px] rounded-full bg-white/[0.03]"></div>

        <div className="relative z-10 container mx-auto px-6 md:px-12">
          <Breadcrumb
            items={[
              { label: 'Preguntas Frecuentes' }
            ]}
            variant="light"
          />

          <div className="max-w-3xl mt-12 md:mt-16">
            <div className="flex items-center gap-4 mb-6 animate-hero-fade-up">
              <div className="w-8 h-px bg-white/40"></div>
              <span className="font-display text-white/70 text-xs uppercase tracking-[0.2em]">
                Todo lo que necesitas saber
              </span>
            </div>
            <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl text-white tracking-tight leading-[1.1] mb-6 animate-hero-fade-up animation-delay-100">
              Preguntas Frecuentes
            </h1>
            <div className="w-16 h-0.5 bg-brand-red mb-6 animate-hero-fade-up animation-delay-150"></div>
            <p className="font-display text-lg md:text-xl text-white/70 leading-relaxed max-w-2xl animate-hero-fade-up animation-delay-200">
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

            <a
              href="/reservar-clase/"
              className="flex flex-col items-center gap-2 bg-red-600 hover:bg-red-700 text-white p-6 rounded-xl transition-colors"
            >
              <Mail className="w-8 h-8" />
              <span className="font-bold">Reservar</span>
              <span className="text-red-100 text-sm">Prueba de Nivel</span>
            </a>
          </div>
        </div>
      </section>

      <Footer variant="simple" />
    </>
  );
}
