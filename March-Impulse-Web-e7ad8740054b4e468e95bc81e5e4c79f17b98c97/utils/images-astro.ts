// utils/images-astro.ts
// Astro static image imports — ImageMetadata for <Image>, <Picture>, getImage().
// DO NOT import from seo-system. Use utils/images.ts (URL strings) for seo-system.
// DO NOT use dynamic imports or variable paths — Astro requires static ESM imports.
// Only consumed by .astro files and Astro frontmatter. Never imported by React .tsx files.

// ====== FACILITY IMAGES — ORIGINALS (from public/images/original/) ======
import classroomLaVaguada from '../src/assets/images/academy/facilities/impulse-english-academy-classroom-la-vaguada.jpg';
import interiorBarrioPilar from '../src/assets/images/academy/facilities/academia-ingles-barrio-pilar-interior.jpg';
import exteriorLaVaguada from '../src/assets/images/academy/facilities/academia-ingles-la-vaguada-exterior.jpg';
import cambridgeClassroom from '../src/assets/images/academy/facilities/academia-cambridge-madrid-aula.jpg';
import madridNorte from '../src/assets/images/academy/facilities/clases-ingles-madrid-norte-instalaciones.jpg';
import recepcionEntrada from '../src/assets/images/academy/facilities/impulse-academy-recepcion-entrada.jpg';

// ====== FACILITY IMAGES — S3 / GALLERY ======
import facility6e08cd95 from '../src/assets/images/academy/facilities/6e08cd95-47b7-4d36-95c7-fecfb41e3883.jpeg';
import adultClasses from '../src/assets/images/academy/facilities/adult-one-to-one-classes.jpg';
import cambridgeSearch from '../src/assets/images/academy/facilities/cambridge-search.jpeg';
import classRoomFacilities from '../src/assets/images/academy/facilities/class-room-facilities.jpeg';
import classroomFacilitiesMain from '../src/assets/images/academy/facilities/classroom-facilities-main-classroom.jpg';
import crazyPeopleFollow2 from '../src/assets/images/academy/facilities/crazy-people-follow-2.jpeg';
import escuelaGonzalo18 from '../src/assets/images/academy/facilities/escuela-gonzalo-18.jpeg';
import escuelaGonzalo21 from '../src/assets/images/academy/facilities/escuela-gonzalo-21.jpeg';
import escuelaGonzalo4 from '../src/assets/images/academy/facilities/escuela-gonzalo-4.jpeg';
import escuelaGonzalo from '../src/assets/images/academy/facilities/escuela-gonzalo.jpeg';
import img8600 from '../src/assets/images/academy/facilities/img-8600.jpg';
import img8602 from '../src/assets/images/academy/facilities/img-8602.jpg';
import img8603 from '../src/assets/images/academy/facilities/img-8603.jpg';
import img8604 from '../src/assets/images/academy/facilities/img-8604.jpg';
import img8605 from '../src/assets/images/academy/facilities/img-8605.jpg';
import img8606 from '../src/assets/images/academy/facilities/img-8606.jpg';
import img8607 from '../src/assets/images/academy/facilities/img-8607.jpg';
import img8608 from '../src/assets/images/academy/facilities/img-8608.jpg';
import img8609 from '../src/assets/images/academy/facilities/img-8609.jpg';
import img8610 from '../src/assets/images/academy/facilities/img-8610.jpg';
import img8611 from '../src/assets/images/academy/facilities/img-8611.jpg';
import infantil3 from '../src/assets/images/academy/facilities/infantil-3.jpg';
import infantilClasses from '../src/assets/images/academy/facilities/infantil-classes.jpg';
import infantil from '../src/assets/images/academy/facilities/infantil.jpg';
import infantileClasses from '../src/assets/images/academy/facilities/infantile-classes.jpg';
import infantsClass from '../src/assets/images/academy/facilities/infants-class.jpg';
import nabscabdsc6774 from '../src/assets/images/academy/facilities/nabscabdsc-6774.jpeg';
import nabscabdsc6785 from '../src/assets/images/academy/facilities/nabscabdsc-6785.jpeg';
import nabscabdsc6786 from '../src/assets/images/academy/facilities/nabscabdsc-6786.jpeg';
import nabscabdsc6794 from '../src/assets/images/academy/facilities/nabscabdsc-6794.jpeg';
import photosOfFacilities from '../src/assets/images/academy/facilities/photos-of-facilities.jpg';
import priamry from '../src/assets/images/academy/facilities/priamry.jpg';
import primaryStudentsSmiling from '../src/assets/images/academy/facilities/primary-classes-students-smiling.jpg';
import primaryClasses from '../src/assets/images/academy/facilities/primary-classes.jpg';
import productiveSecondary from '../src/assets/images/academy/facilities/productive-secondary-school-students.jpg';
import secondaryStudentHappy from '../src/assets/images/academy/facilities/secondary-classes-student-happy.jpg';
import secondaryStudentsAnswering from '../src/assets/images/academy/facilities/secondary-classes-students-answering-questions.jpg';
import secondaryOff from '../src/assets/images/academy/facilities/secondary-off.jpg';
import stairs from '../src/assets/images/academy/facilities/stairs.jpg';
import techClassroom from '../src/assets/images/academy/facilities/technology-based-classroom-photo.jpg';
import toiletFacilities from '../src/assets/images/academy/facilities/toilet-facilities.jpg';

// ====== LOCATION IMAGES ======
import outsideAcademy from '../src/assets/images/academy/locations/outside-academy.jpg';

// ====== LOGO IMAGES ======
import cambridgeLogoCentro from '../src/assets/images/academy/logos/cambridge-logo-centro-oficial.png';
import cambridgeLogoEdited from '../src/assets/images/academy/logos/cambridge-logo-edited.png';
import cambridgeLogo from '../src/assets/images/academy/logos/cambridge-logo.png';
import esicIdiomas from '../src/assets/images/academy/logos/esic-idiomas.jpg';
import glpLogoBlack from '../src/assets/images/academy/logos/great-little-people-black.png';
import glpLogoWhite from '../src/assets/images/academy/logos/great-little-people-white.png';
import glpLogoOld from '../src/assets/images/academy/logos/great-liyyle-peopel-logo.png';
import img41171 from '../src/assets/images/academy/logos/img-4117-1.png';
import img4117 from '../src/assets/images/academy/logos/img-4117.png';
import impulseLogoOficial from '../src/assets/images/academy/logos/impulse-english-academy-logo-oficial.png';
import linguaskillBlanco from '../src/assets/images/academy/logos/linguaskill-logo-blanco.png';
import linguaskillExamen from '../src/assets/images/academy/logos/linguaskill-logo-examen-cambridge.png';
import linguaskillLogo from '../src/assets/images/academy/logos/linguaskill.png';
import logoLinguaskillWhite from '../src/assets/images/academy/logos/logo-linguaskill-white.png';
import logoWhiteBg from '../src/assets/images/academy/logos/logo-white-background.jpg';

// ====== STUDENT IMAGES — ORIGINALS (from public/images/original/) ======
import alumnaCertC1 from '../src/assets/images/academy/students/alumna-certificado-c1-cambridge.jpg';
import certificadoCambridge from '../src/assets/images/academy/students/certificado-oficial-cambridge-impulse.jpg';
import clasesJovenes from '../src/assets/images/academy/students/clases-ingles-jovenes-madrid.jpg';
import cursoSecundaria from '../src/assets/images/academy/students/curso-extensivo-secundaria.jpg';
import cursoInfantil from '../src/assets/images/academy/students/curso-ingles-general-infantil.jpg';
import cursoKet from '../src/assets/images/academy/students/curso-preparacion-ket.jpg';
import cursoMovers from '../src/assets/images/academy/students/curso-preparacion-movers-primaria.jpg';
import estudiantesPrimariaSecundaria from '../src/assets/images/academy/students/estudiantes-ingles-primaria-secundaria.jpg';
import estudiantesSonriendo from '../src/assets/images/academy/students/estudiantes-primaria-sonriendo.jpg';
import inglesInfantilGLP from '../src/assets/images/academy/students/ingles-infantil-great-little-people-madrid.jpg';
import ninosJugando from '../src/assets/images/academy/students/ninos-aprendiendo-ingles-jugando.jpg';
import patrickPanda from '../src/assets/images/academy/students/patrick-panda-mascota-ingles-ninos.jpg';

// ====== STUDENT IMAGES — S3 / GALLERY ======
import studentImg8597 from '../src/assets/images/academy/students/img-8597.jpg';
import studentImg8598 from '../src/assets/images/academy/students/img-8598.jpg';
import studentImg8599 from '../src/assets/images/academy/students/img-8599.jpg';
import studentImg8636 from '../src/assets/images/academy/students/img-8636.jpg';
import studentImg8639 from '../src/assets/images/academy/students/img-8639.jpg';
import studentImg8640 from '../src/assets/images/academy/students/img-8640.jpg';
import studentImg8642 from '../src/assets/images/academy/students/img-8642.jpg';
import studentImg8643 from '../src/assets/images/academy/students/img-8643.jpg';
import laraC1Cert from '../src/assets/images/academy/students/lara-c1-cert.jpeg';
import luciaSecundary from '../src/assets/images/academy/students/lucia-secundary.jpeg';

// ====== TEAM IMAGES ======
import danielHelping from '../src/assets/images/academy/team/daniel-helping-secondary-school-students.jpg';
import dannyTour from '../src/assets/images/academy/team/dnny-tour-of-ireland.jpg';
import jpWithStudents from '../src/assets/images/academy/team/jp-with-students.jpg';
import luciaPhoto from '../src/assets/images/academy/team/lucia-photo-academy.jpeg';
import profesorNativo from '../src/assets/images/academy/team/profesor-ingles-nativo-madrid.jpg';
import secondaryDannyHelping from '../src/assets/images/academy/team/secondary-students-danny-helping-student.jpg';

// ============================================================
// EXPORTS BY CATEGORY
// ============================================================

/** Hero and facility images — used for page hero sections (loading="eager") */
export const astroHeroImages = {
  classroomLaVaguada,
  interiorBarrioPilar,
  madridNorte,
  cambridgeClassroom,
  exteriorLaVaguada,
  recepcionEntrada,
  estudiantesSonriendo,
  jpWithStudents,
  danielHelping,
  laraC1Cert,
  infantilClasses,
  adultClasses,
  techClassroom,
  primaryStudentsSmiling,
  outsideAcademy,
  primaryClasses,
} as const;

/** All facility / gallery images (loading="lazy") */
export const astroFacilityImages = {
  facility6e08cd95,
  adultClasses,
  cambridgeSearch,
  classRoomFacilities,
  classroomFacilitiesMain,
  classroomLaVaguada,
  interiorBarrioPilar,
  exteriorLaVaguada,
  cambridgeClassroom,
  madridNorte,
  recepcionEntrada,
  crazyPeopleFollow2,
  escuelaGonzalo18,
  escuelaGonzalo21,
  escuelaGonzalo4,
  escuelaGonzalo,
  img8600,
  img8602,
  img8603,
  img8604,
  img8605,
  img8606,
  img8607,
  img8608,
  img8609,
  img8610,
  img8611,
  infantil3,
  infantilClasses,
  infantil,
  infantileClasses,
  infantsClass,
  nabscabdsc6774,
  nabscabdsc6785,
  nabscabdsc6786,
  nabscabdsc6794,
  photosOfFacilities,
  priamry,
  primaryStudentsSmiling,
  primaryClasses,
  productiveSecondary,
  secondaryStudentHappy,
  secondaryStudentsAnswering,
  secondaryOff,
  stairs,
  techClassroom,
  toiletFacilities,
} as const;

/** Course images — for course page hero/thumbnails */
export const astroCourseImages = {
  generalInfantil: cursoInfantil,
  preparacionMovers: cursoMovers,
  extensivoSecundaria: cursoSecundaria,
  preparacionKet: cursoKet,
} as const;

/** Team member images */
export const astroTeamImages = {
  danielHelping,
  dannyTour,
  jpWithStudents,
  luciaPhoto,
  secondaryDannyHelping,
  profesorNativo,
} as const;

/** Student / certification images */
export const astroStudentImages = {
  estudiantesSonriendo,
  alumnaCertC1,
  certificadoCambridge,
  clasesJovenes,
  estudiantesPrimariaSecundaria,
  inglesInfantilGLP,
  ninosJugando,
  patrickPanda,
  laraC1Cert,
  luciaSecundary,
  studentImg8597,
  studentImg8598,
  studentImg8599,
  studentImg8636,
  studentImg8639,
  studentImg8640,
  studentImg8642,
  studentImg8643,
} as const;

/** Certification / award images */
export const astroCertImages = {
  alumnaCertC1,
  certificadoCambridge,
  cambridgeLogoCentro,
  laraC1Cert,
} as const;

/** Logo images — partner and brand logos */
export const astroLogoImages = {
  cambridgeLogo,
  cambridgeLogoEdited,
  cambridgeLogoCentro,
  esicIdiomas,
  glpLogoBlack,
  glpLogoWhite,
  glpLogoOld,
  img4117,
  img41171,
  impulseLogoOficial,
  linguaskillBlanco,
  linguaskillExamen,
  linguaskillLogo,
  logoLinguaskillWhite,
  logoWhiteBg,
} as const;

/** Location images — academy exterior/maps */
export const astroLocationImages = {
  outsideAcademy,
} as const;
