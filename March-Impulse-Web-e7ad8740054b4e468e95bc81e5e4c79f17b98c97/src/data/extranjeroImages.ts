import type { AcademyImage } from "./academyImages";

/**
 * Fotos reales de los viajes a Irlanda, cedidas por la academia.
 *
 * PROCEDENCIA Y CONSENTIMIENTO — leer antes de tocar nada:
 * - Origen: fotos publicadas por la academia en su propia página de Facebook,
 *   2018-2025. Recodificadas a webp; el reencodeado elimina todos los metadatos
 *   (verificado: sin EXIF y sin GPS en la salida).
 * - Aparecen MENORES identificables. Danny confirmó el 2026-08-06 que existe
 *   consentimiento de las familias para uso en la web comercial. Ver
 *   src/data/EXTRANJERO-PHOTO-CONSENT.md — deliberadamente FUERA de public/,
 *   porque todo lo que vive en public/ se copia tal cual a dist/ y se publica.
 * - NO reutilizar estas imágenes fuera de la sección de viajes sin volver a
 *   comprobar el alcance de ese consentimiento.
 * - Danny confirmó el 2026-08-06 que LAS 34 están tomadas en Irlanda, así que
 *   nombrar el país es exacto. Las actividades concretas sólo se describen
 *   cuando se ven en la foto.
 */
export const extranjeroImages: AcademyImage[] = [
  {
    url: "/images/extranjero/viaje-01.webp",
    alt: "Estudiantes de Impulse English en una actividad del programa de inmersión en Irlanda",
    title: "Actividad del programa en Irlanda",
    description: "Estudiantes de Impulse English en una actividad del programa de inmersión en Irlanda, organizado por Impulse English Academy de Madrid.",
    category: "extranjero",
    aspectRatio: "square",
    keywords: ["viaje a irlanda", "campamento de verano en irlanda", "inglés en el extranjero", "impulse english"]
  },
  {
    url: "/images/extranjero/viaje-02.webp",
    alt: "Grupo de alumnos de Impulse English en su estancia en Irlanda",
    title: "Estancia en Irlanda",
    description: "Grupo de alumnos de Impulse English en su estancia en Irlanda, organizado por Impulse English Academy de Madrid.",
    category: "extranjero",
    aspectRatio: "portrait",
    keywords: ["viaje a irlanda", "campamento de verano en irlanda", "inglés en el extranjero", "impulse english"]
  },
  {
    url: "/images/extranjero/viaje-03.webp",
    alt: "Grupo de alumnos de Impulse English en la Calzada del Gigante durante el viaje a Irlanda",
    title: "Excursión a la Calzada del Gigante",
    description: "Grupo de alumnos de Impulse English en la Calzada del Gigante durante el viaje a Irlanda, organizado por Impulse English Academy de Madrid.",
    category: "extranjero",
    aspectRatio: "landscape",
    keywords: ["viaje a irlanda", "campamento de verano en irlanda", "inglés en el extranjero", "impulse english"]
  },
  {
    url: "/images/extranjero/viaje-04.webp",
    alt: "Estudiantes españoles de Impulse English en Irlanda con sus monitores",
    title: "Alumnos y monitores en Irlanda",
    description: "Estudiantes españoles de Impulse English en Irlanda con sus monitores, organizado por Impulse English Academy de Madrid.",
    category: "extranjero",
    aspectRatio: "landscape",
    keywords: ["viaje a irlanda", "campamento de verano en irlanda", "inglés en el extranjero", "impulse english"]
  },
  {
    url: "/images/extranjero/viaje-05.webp",
    alt: "Dos alumnas con la bandera de Irlanda en el campo de deportes del campamento de verano",
    title: "Jornada de deportes con bandera irlandesa",
    description: "Dos alumnas con la bandera de Irlanda en el campo de deportes del campamento de verano, organizado por Impulse English Academy de Madrid.",
    category: "extranjero",
    aspectRatio: "landscape",
    keywords: ["viaje a irlanda", "campamento de verano en irlanda", "inglés en el extranjero", "impulse english"]
  },
  {
    url: "/images/extranjero/viaje-06.webp",
    alt: "Estudiantes de Impulse English en una actividad del programa de inmersión en Irlanda",
    title: "Actividad del programa en Irlanda",
    description: "Estudiantes de Impulse English en una actividad del programa de inmersión en Irlanda, organizado por Impulse English Academy de Madrid.",
    category: "extranjero",
    aspectRatio: "landscape",
    keywords: ["viaje a irlanda", "campamento de verano en irlanda", "inglés en el extranjero", "impulse english"]
  },
  {
    url: "/images/extranjero/viaje-07.webp",
    alt: "Grupo de alumnos de Impulse English en su estancia en Irlanda",
    title: "Estancia en Irlanda",
    description: "Grupo de alumnos de Impulse English en su estancia en Irlanda, organizado por Impulse English Academy de Madrid.",
    category: "extranjero",
    aspectRatio: "portrait",
    keywords: ["viaje a irlanda", "campamento de verano en irlanda", "inglés en el extranjero", "impulse english"]
  },
  {
    url: "/images/extranjero/viaje-08.webp",
    alt: "Alumnos de Impulse English conviviendo durante el viaje a Irlanda",
    title: "Convivencia durante el viaje a Irlanda",
    description: "Alumnos de Impulse English conviviendo durante el viaje a Irlanda, organizado por Impulse English Academy de Madrid.",
    category: "extranjero",
    aspectRatio: "portrait",
    keywords: ["viaje a irlanda", "campamento de verano en irlanda", "inglés en el extranjero", "impulse english"]
  },
  {
    url: "/images/extranjero/viaje-09.webp",
    alt: "Estudiantes españoles de Impulse English en Irlanda con sus monitores",
    title: "Alumnos y monitores en Irlanda",
    description: "Estudiantes españoles de Impulse English en Irlanda con sus monitores, organizado por Impulse English Academy de Madrid.",
    category: "extranjero",
    aspectRatio: "portrait",
    keywords: ["viaje a irlanda", "campamento de verano en irlanda", "inglés en el extranjero", "impulse english"]
  },
  {
    url: "/images/extranjero/viaje-10.webp",
    alt: "Alumnos de Impulse English durante el campamento de verano en Irlanda",
    title: "Campamento de verano en Irlanda",
    description: "Alumnos de Impulse English durante el campamento de verano en Irlanda, organizado por Impulse English Academy de Madrid.",
    category: "extranjero",
    aspectRatio: "landscape",
    keywords: ["viaje a irlanda", "campamento de verano en irlanda", "inglés en el extranjero", "impulse english"]
  },
  {
    url: "/images/extranjero/viaje-11.webp",
    alt: "Alumnas de Impulse English con neopreno y paddle surf en una playa de Irlanda",
    title: "Actividad de playa y paddle surf en Irlanda",
    description: "Alumnas de Impulse English con neopreno y paddle surf en una playa de Irlanda, organizado por Impulse English Academy de Madrid.",
    category: "extranjero",
    aspectRatio: "portrait",
    keywords: ["viaje a irlanda", "campamento de verano en irlanda", "inglés en el extranjero", "impulse english"]
  },
  {
    url: "/images/extranjero/viaje-12.webp",
    alt: "Grupo de alumnos de Impulse English en su estancia en Irlanda",
    title: "Estancia en Irlanda",
    description: "Grupo de alumnos de Impulse English en su estancia en Irlanda, organizado por Impulse English Academy de Madrid.",
    category: "extranjero",
    aspectRatio: "portrait",
    keywords: ["viaje a irlanda", "campamento de verano en irlanda", "inglés en el extranjero", "impulse english"]
  },
  {
    url: "/images/extranjero/viaje-13.webp",
    alt: "Alumnos de Impulse English conviviendo durante el viaje a Irlanda",
    title: "Convivencia durante el viaje a Irlanda",
    description: "Alumnos de Impulse English conviviendo durante el viaje a Irlanda, organizado por Impulse English Academy de Madrid.",
    category: "extranjero",
    aspectRatio: "landscape",
    keywords: ["viaje a irlanda", "campamento de verano en irlanda", "inglés en el extranjero", "impulse english"]
  },
  {
    url: "/images/extranjero/viaje-14.webp",
    alt: "Estudiantes españoles de Impulse English en Irlanda con sus monitores",
    title: "Alumnos y monitores en Irlanda",
    description: "Estudiantes españoles de Impulse English en Irlanda con sus monitores, organizado por Impulse English Academy de Madrid.",
    category: "extranjero",
    aspectRatio: "portrait",
    keywords: ["viaje a irlanda", "campamento de verano en irlanda", "inglés en el extranjero", "impulse english"]
  },
  {
    url: "/images/extranjero/viaje-15.webp",
    alt: "Alumnos de Impulse English durante el campamento de verano en Irlanda",
    title: "Campamento de verano en Irlanda",
    description: "Alumnos de Impulse English durante el campamento de verano en Irlanda, organizado por Impulse English Academy de Madrid.",
    category: "extranjero",
    aspectRatio: "landscape",
    keywords: ["viaje a irlanda", "campamento de verano en irlanda", "inglés en el extranjero", "impulse english"]
  },
  {
    url: "/images/extranjero/viaje-16.webp",
    alt: "Alumnos de Impulse English en las pistas deportivas del colegio en Irlanda",
    title: "Pistas deportivas del colegio irlandés",
    description: "Alumnos de Impulse English en las pistas deportivas del colegio en Irlanda, organizado por Impulse English Academy de Madrid.",
    category: "extranjero",
    aspectRatio: "landscape",
    keywords: ["viaje a irlanda", "campamento de verano en irlanda", "inglés en el extranjero", "impulse english"]
  },
  {
    url: "/images/extranjero/viaje-17.webp",
    alt: "Grupo de alumnos de Impulse English en su estancia en Irlanda",
    title: "Estancia en Irlanda",
    description: "Grupo de alumnos de Impulse English en su estancia en Irlanda, organizado por Impulse English Academy de Madrid.",
    category: "extranjero",
    aspectRatio: "portrait",
    keywords: ["viaje a irlanda", "campamento de verano en irlanda", "inglés en el extranjero", "impulse english"]
  },
  {
    url: "/images/extranjero/viaje-18.webp",
    alt: "Alumnos de Impulse English conviviendo durante el viaje a Irlanda",
    title: "Convivencia durante el viaje a Irlanda",
    description: "Alumnos de Impulse English conviviendo durante el viaje a Irlanda, organizado por Impulse English Academy de Madrid.",
    category: "extranjero",
    aspectRatio: "portrait",
    keywords: ["viaje a irlanda", "campamento de verano en irlanda", "inglés en el extranjero", "impulse english"]
  },
  {
    url: "/images/extranjero/viaje-19.webp",
    alt: "Estudiantes españoles de Impulse English en Irlanda con sus monitores",
    title: "Alumnos y monitores en Irlanda",
    description: "Estudiantes españoles de Impulse English en Irlanda con sus monitores, organizado por Impulse English Academy de Madrid.",
    category: "extranjero",
    aspectRatio: "landscape",
    keywords: ["viaje a irlanda", "campamento de verano en irlanda", "inglés en el extranjero", "impulse english"]
  },
  {
    url: "/images/extranjero/viaje-20.webp",
    alt: "Alumnos de Impulse English durante el campamento de verano en Irlanda",
    title: "Campamento de verano en Irlanda",
    description: "Alumnos de Impulse English durante el campamento de verano en Irlanda, organizado por Impulse English Academy de Madrid.",
    category: "extranjero",
    aspectRatio: "portrait",
    keywords: ["viaje a irlanda", "campamento de verano en irlanda", "inglés en el extranjero", "impulse english"]
  },
  {
    url: "/images/extranjero/viaje-21.webp",
    alt: "Estudiantes de Impulse English en una actividad del programa de inmersión en Irlanda",
    title: "Actividad del programa en Irlanda",
    description: "Estudiantes de Impulse English en una actividad del programa de inmersión en Irlanda, organizado por Impulse English Academy de Madrid.",
    category: "extranjero",
    aspectRatio: "landscape",
    keywords: ["viaje a irlanda", "campamento de verano en irlanda", "inglés en el extranjero", "impulse english"]
  },
  {
    url: "/images/extranjero/viaje-22.webp",
    alt: "Dos alumnas de Impulse English en los acantilados de la costa irlandesa",
    title: "Excursión a la costa irlandesa",
    description: "Dos alumnas de Impulse English en los acantilados de la costa irlandesa, organizado por Impulse English Academy de Madrid.",
    category: "extranjero",
    aspectRatio: "square",
    keywords: ["viaje a irlanda", "campamento de verano en irlanda", "inglés en el extranjero", "impulse english"]
  },
  {
    url: "/images/extranjero/viaje-23.webp",
    alt: "Alumnos de Impulse English conviviendo durante el viaje a Irlanda",
    title: "Convivencia durante el viaje a Irlanda",
    description: "Alumnos de Impulse English conviviendo durante el viaje a Irlanda, organizado por Impulse English Academy de Madrid.",
    category: "extranjero",
    aspectRatio: "portrait",
    keywords: ["viaje a irlanda", "campamento de verano en irlanda", "inglés en el extranjero", "impulse english"]
  },
  {
    url: "/images/extranjero/viaje-24.webp",
    alt: "Alumnos jugando con banderas de Irlanda en el campo de hierba del campamento",
    title: "Juegos de equipo en el campamento de verano",
    description: "Alumnos jugando con banderas de Irlanda en el campo de hierba del campamento, organizado por Impulse English Academy de Madrid.",
    category: "extranjero",
    aspectRatio: "landscape",
    keywords: ["viaje a irlanda", "campamento de verano en irlanda", "inglés en el extranjero", "impulse english"]
  },
  {
    url: "/images/extranjero/viaje-25.webp",
    alt: "Alumnos de Impulse English durante el campamento de verano en Irlanda",
    title: "Campamento de verano en Irlanda",
    description: "Alumnos de Impulse English durante el campamento de verano en Irlanda, organizado por Impulse English Academy de Madrid.",
    category: "extranjero",
    aspectRatio: "square",
    keywords: ["viaje a irlanda", "campamento de verano en irlanda", "inglés en el extranjero", "impulse english"]
  },
  {
    url: "/images/extranjero/viaje-26.webp",
    alt: "Estudiantes de Impulse English en una actividad del programa de inmersión en Irlanda",
    title: "Actividad del programa en Irlanda",
    description: "Estudiantes de Impulse English en una actividad del programa de inmersión en Irlanda, organizado por Impulse English Academy de Madrid.",
    category: "extranjero",
    aspectRatio: "landscape",
    keywords: ["viaje a irlanda", "campamento de verano en irlanda", "inglés en el extranjero", "impulse english"]
  },
  {
    url: "/images/extranjero/viaje-27.webp",
    alt: "Grupo de alumnos de Impulse English en su estancia en Irlanda",
    title: "Estancia en Irlanda",
    description: "Grupo de alumnos de Impulse English en su estancia en Irlanda, organizado por Impulse English Academy de Madrid.",
    category: "extranjero",
    aspectRatio: "square",
    keywords: ["viaje a irlanda", "campamento de verano en irlanda", "inglés en el extranjero", "impulse english"]
  },
  {
    url: "/images/extranjero/viaje-28.webp",
    alt: "Alumnos de Impulse English conviviendo durante el viaje a Irlanda",
    title: "Convivencia durante el viaje a Irlanda",
    description: "Alumnos de Impulse English conviviendo durante el viaje a Irlanda, organizado por Impulse English Academy de Madrid.",
    category: "extranjero",
    aspectRatio: "square",
    keywords: ["viaje a irlanda", "campamento de verano en irlanda", "inglés en el extranjero", "impulse english"]
  },
  {
    url: "/images/extranjero/viaje-29.webp",
    alt: "Estudiantes españoles de Impulse English en Irlanda con sus monitores",
    title: "Alumnos y monitores en Irlanda",
    description: "Estudiantes españoles de Impulse English en Irlanda con sus monitores, organizado por Impulse English Academy de Madrid.",
    category: "extranjero",
    aspectRatio: "portrait",
    keywords: ["viaje a irlanda", "campamento de verano en irlanda", "inglés en el extranjero", "impulse english"]
  },
  {
    url: "/images/extranjero/viaje-30.webp",
    alt: "Alumnos de Impulse English durante el campamento de verano en Irlanda",
    title: "Campamento de verano en Irlanda",
    description: "Alumnos de Impulse English durante el campamento de verano en Irlanda, organizado por Impulse English Academy de Madrid.",
    category: "extranjero",
    aspectRatio: "portrait",
    keywords: ["viaje a irlanda", "campamento de verano en irlanda", "inglés en el extranjero", "impulse english"]
  },
  {
    url: "/images/extranjero/viaje-31.webp",
    alt: "Estudiantes de Impulse English en una actividad del programa de inmersión en Irlanda",
    title: "Actividad del programa en Irlanda",
    description: "Estudiantes de Impulse English en una actividad del programa de inmersión en Irlanda, organizado por Impulse English Academy de Madrid.",
    category: "extranjero",
    aspectRatio: "landscape",
    keywords: ["viaje a irlanda", "campamento de verano en irlanda", "inglés en el extranjero", "impulse english"]
  },
  {
    url: "/images/extranjero/viaje-32.webp",
    alt: "Grupo de alumnos de Impulse English en su estancia en Irlanda",
    title: "Estancia en Irlanda",
    description: "Grupo de alumnos de Impulse English en su estancia en Irlanda, organizado por Impulse English Academy de Madrid.",
    category: "extranjero",
    aspectRatio: "square",
    keywords: ["viaje a irlanda", "campamento de verano en irlanda", "inglés en el extranjero", "impulse english"]
  },
  {
    url: "/images/extranjero/viaje-33.webp",
    alt: "Grupo de alumnas de Impulse English en la bolera durante una actividad de tarde en Irlanda",
    title: "Actividad de tarde en la bolera",
    description: "Grupo de alumnas de Impulse English en la bolera durante una actividad de tarde en Irlanda, organizado por Impulse English Academy de Madrid.",
    category: "extranjero",
    aspectRatio: "square",
    keywords: ["viaje a irlanda", "campamento de verano en irlanda", "inglés en el extranjero", "impulse english"]
  },
  {
    url: "/images/extranjero/viaje-34.webp",
    alt: "Estudiantes españoles de Impulse English en Irlanda con sus monitores",
    title: "Alumnos y monitores en Irlanda",
    description: "Estudiantes españoles de Impulse English en Irlanda con sus monitores, organizado por Impulse English Academy de Madrid.",
    category: "extranjero",
    aspectRatio: "landscape",
    keywords: ["viaje a irlanda", "campamento de verano en irlanda", "inglés en el extranjero", "impulse english"]
  },
];
