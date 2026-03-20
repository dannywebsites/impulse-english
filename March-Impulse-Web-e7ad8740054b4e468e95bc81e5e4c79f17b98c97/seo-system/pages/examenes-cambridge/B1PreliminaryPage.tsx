import React from 'react';
import { BookOpen, PenTool, Headphones, Mic } from 'lucide-react';
import ExamPageLayout from '../../components/ExamPageLayout';
import SEOHead from '../../components/SEOHead';

export default function B1PreliminaryPage() {
  return (
    <>
      <SEOHead
        title="Preparación Cambridge B1 Preliminary (PET)"
        description="Preparación examen Cambridge B1 Preliminary (PET) en Madrid. Centro oficial Cambridge con 100% aprobados. Grupos reducidos, material incluido. La Vaguada."
        keywords="b1 preliminary madrid, preparación pet cambridge, examen b1 cambridge, curso b1 inglés madrid, academia cambridge b1, pet inglés"
        canonical="/examenes-cambridge/b1-preliminary"
      />
      <ExamPageLayout
      examName="B1 Preliminary (PET)"
      cefrLevel="Nivel B1"
      tagline="Demuestra que dominas los fundamentos del inglés para situaciones cotidianas"
      description="El B1 Preliminary, antes conocido como PET (Preliminary English Test), es un examen de nivel intermedio que certifica que puedes comunicarte en inglés en situaciones cotidianas con hablantes nativos. Es el paso perfecto antes del B2 First y muy valorado para trabajos que requieren contacto con el público internacional."
      heroColor="from-blue-600 to-blue-800"
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
    />
    </>
  );
}
