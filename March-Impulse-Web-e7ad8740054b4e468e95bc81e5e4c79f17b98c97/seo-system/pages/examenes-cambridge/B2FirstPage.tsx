import React from 'react';
import { BookOpen, PenTool, Headphones, Mic, Languages } from 'lucide-react';
import ExamPageLayout from '../../components/ExamPageLayout';
import SEOHead from '../../components/SEOHead';

export default function B2FirstPage() {
  return (
    <>
      <SEOHead
        title="Preparación Cambridge B2 First (FCE)"
        description="Preparación examen Cambridge B2 First (FCE) en Madrid. Centro oficial Cambridge con 100% aprobados. El certificado más demandado. La Vaguada, Barrio del Pilar."
        keywords="b2 first madrid, preparación fce cambridge, examen b2 cambridge, curso b2 inglés madrid, academia cambridge b2, first certificate"
        canonical="/examenes-cambridge/b2-first"
      />
      <ExamPageLayout
      examName="B2 First (FCE)"
      cefrLevel="Nivel B2"
      tagline="El certificado más demandado: demuestra que puedes trabajar y estudiar en inglés"
      description="El B2 First, antes conocido como FCE (First Certificate in English), es el examen Cambridge más popular. Certifica que tienes un nivel de inglés suficiente para trabajar en un entorno internacional, estudiar en universidades de habla inglesa, o vivir de forma independiente en un país angloparlante. Es el nivel mínimo exigido por muchas empresas y universidades."
      heroColor="from-purple-600 to-purple-800"
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
    />
    </>
  );
}
