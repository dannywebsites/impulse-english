import React from 'react';
import { Routes, Route } from 'react-router-dom';
import CookieBanner from './components/CookieBanner';
import SchemaMarkup from './components/SchemaMarkup';
import { generateOrganizationSchema, generateWebSiteSchema } from './utils/schemaData';

// Pages
import HomePage from './pages/HomePage';

// Cursos
import InfantilPage from './pages/cursos/InfantilPage';
import PrimariaPage from './pages/cursos/PrimariaPage';
import SecundariaPage from './pages/cursos/SecundariaPage';
import AdultosPage from './pages/cursos/AdultosPage';
import ParticularesPage from './pages/cursos/ParticularsPage';
import OnlinePage from './pages/cursos/OnlinePage';

// Cambridge Exams
import CambridgeHubPage from './pages/examenes-cambridge/CambridgeHubPage';
import B1PreliminaryPage from './pages/examenes-cambridge/B1PreliminaryPage';
import B2FirstPage from './pages/examenes-cambridge/B2FirstPage';

// Other Pages
import SobreNosotrosPage from './pages/SobreNosotrosPage';
import ContactoPage from './pages/ContactoPage';
import ReservarClasePage from './pages/ReservarClasePage';
import GraciasPage from './pages/GraciasPage';
import BlogPage from './pages/BlogPage';
import MetodologiaPage from './pages/MetodologiaPage';
import PreguntasFrecuentesPage from './pages/PreguntasFrecuentesPage';
import TestimonialsPage from './pages/TestimonialsPage';

// Linguaskill Hub & Spokes
import LinguaskillGuiaCompletaPage from './pages/blog/LinguaskillGuiaCompletaPage';
import LinguaskillPreciosSedesPage from './pages/blog/LinguaskillPreciosSedesPage';
import EjemploExamenLinguaskillPage from './pages/blog/EjemploExamenLinguaskillPage';
import CursoIntensivoLinguaskillPage from './pages/blog/CursoIntensivoLinguaskillPage';

// Cambridge Exams Hub & Spokes
import ExamenCambridgeC1Page from './pages/blog/ExamenCambridgeC1Page';
import CentrosCambridgeMadridPage from './pages/blog/CentrosCambridgeMadridPage';
import FechasExamenesCambridgePage from './pages/blog/FechasExamenesCambridgePage';

// Blog Spoke Pages - Cambridge
import CambridgeB1GuiaPage from './pages/blog/CambridgeB1GuiaPage';
import CambridgeB2BeneficiosPage from './pages/blog/CambridgeB2BeneficiosPage';
import EjerciciosB2CambridgePage from './pages/blog/EjerciciosB2CambridgePage';
import EscalaCambridgePage from './pages/blog/EscalaCambridgePage';
import ExamenesCambridgeGuiaPage from './pages/blog/ExamenesCambridgeGuiaPage';
import ExamenCaeCambridgePage from './pages/blog/ExamenCaeCambridgePage';
import LibrosCambridgeRecursosPage from './pages/blog/LibrosCambridgeRecursosPage';
import PdfsCambridgeAdvancedPage from './pages/blog/PdfsCambridgeAdvancedPage';
import PrecioCambridgeC1MadridPage from './pages/blog/PrecioCambridgeC1MadridPage';
import RegistroCambridgePage from './pages/blog/RegistroCambridgePage';

// Blog Spoke Pages - Linguaskill
import CentrosLinguaskillPage from './pages/blog/CentrosLinguaskillPage';
import CertificadoLinguaskillPage from './pages/blog/CertificadoLinguaskillPage';
import LinguaskillOnlineCasaPage from './pages/blog/LinguaskillOnlineCasaPage';
import LinguaskillVsAptisPage from './pages/blog/LinguaskillVsAptisPage';
import OpinionesLinguaskillPage from './pages/blog/OpinionesLinguaskillPage';
import PrecioLinguaskillOnlinePage from './pages/blog/PrecioLinguaskillOnlinePage';
import PrecioLinguaskillReservarPage from './pages/blog/PrecioLinguaskillReservarPage';
import RecursosPdfLinguaskillPage from './pages/blog/RecursosPdfLinguaskillPage';
import RegistroLinguaskillPage from './pages/blog/RegistroLinguaskillPage';

// New SEO Pages
import PreparacionB2FirstMadridPage from './pages/blog/PreparacionB2FirstMadridPage';
import MejoresAcademiasMadridPage from './pages/blog/MejoresAcademiasMadridPage';

// Madrid Academias
import AcademiasBaratasMadridPage from './pages/blog/AcademiasBaratasMadridPage';
import AprendeInglesGuiaPage from './pages/blog/AprendeInglesGuiaPage';
import CursosInglesAdultosMadridPage from './pages/blog/CursosInglesAdultosMadridPage';
import CertificacionesInglesMadridPage from './pages/blog/CertificacionesInglesMadridPage';
import AcademiasPorBarriosMadridPage from './pages/blog/AcademiasPorBarriosMadridPage';
import CursosInglesNinosMadridPage from './pages/blog/CursosInglesNinosMadridPage';

// Location Pages
import BarrioDelPilarPage from './pages/ubicaciones/BarrioDelPilarPage';
import LaVaguadaPage from './pages/ubicaciones/LaVaguadaPage';
import PenagrandePage from './pages/ubicaciones/PenagrandePage';
import LaVentillaPage from './pages/ubicaciones/LaVentillaPage';
import LaPazPage from './pages/ubicaciones/LaPazPage';
import PlazaCastillaPage from './pages/ubicaciones/PlazaCastillaPage';
import TetuanPage from './pages/ubicaciones/TetuanPage';
import CuatroTorresPage from './pages/ubicaciones/CuatroTorresPage';

// Legal Pages
import AvisoLegalPage from './pages/legal/AvisoLegalPage';
import PoliticaCookiesPage from './pages/legal/PoliticaCookiesPage';
import PoliticaPrivacidadPage from './pages/legal/PoliticaPrivacidadPage';

// 404 Page
import NotFoundPage from './pages/NotFoundPage';

// PAA Blog Pages - Cambridge B2 First
import ValidezCertificadoB2CambridgePage from './pages/blog/ValidezCertificadoB2CambridgePage';
import NotaAprobarB2FirstPage from './pages/blog/NotaAprobarB2FirstPage';
import EsDificilB2FirstPage from './pages/blog/EsDificilB2FirstPage';
import PrepararB2First3MesesPage from './pages/blog/PrepararB2First3MesesPage';
import CuantasVecesB2FirstPage from './pages/blog/CuantasVecesB2FirstPage';
import TiempoPreparacionB2FirstPage from './pages/blog/TiempoPreparacionB2FirstPage';

// PAA Blog Pages - Cambridge C1 Advanced
import TiempoB2AC1Page from './pages/blog/TiempoB2AC1Page';
import EsDificilC1AdvancedPage from './pages/blog/EsDificilC1AdvancedPage';
import TrabajosPidenC1InglesPage from './pages/blog/TrabajosPidenC1InglesPage';
import C1AdvancedCaducaPage from './pages/blog/C1AdvancedCaducaPage';
import DiferenciaB2C1Page from './pages/blog/DiferenciaB2C1Page';
import ValePenaC1EspanaPage from './pages/blog/ValePenaC1EspanaPage';

// PAA Blog Pages - Linguaskill
import LinguaskillVsCambridgeDificultadPage from './pages/blog/LinguaskillVsCambridgeDificultadPage';
import LinguaskillCasaFiablePage from './pages/blog/LinguaskillCasaFiablePage';
import UniversidadesAceptanLinguaskillPage from './pages/blog/UniversidadesAceptanLinguaskillPage';
import LinguaskillReconocimientoInternacionalPage from './pages/blog/LinguaskillReconocimientoInternacionalPage';
import LinguaskillOposicionesValidezPage from './pages/blog/LinguaskillOposicionesValidezPage';

// PAA Blog Pages - Cambridge B1
import B1SuficienteTrabajarPage from './pages/blog/B1SuficienteTrabajarPage';
import PrecioB1CambridgePage from './pages/blog/PrecioB1CambridgePage';
import TiempoPreparaB1CeroPage from './pages/blog/TiempoPreparaB1CeroPage';
import B1UniversidadEspanaPage from './pages/blog/B1UniversidadEspanaPage';

// PAA Blog Pages - Comparisons
import CambridgeVsLinguaskillDiferenciasPage from './pages/blog/CambridgeVsLinguaskillDiferenciasPage';
import CambridgeVsIeltsEspanaPage from './pages/blog/CambridgeVsIeltsEspanaPage';
import AcademiaVsProfesorParticularPage from './pages/blog/AcademiaVsProfesorParticularPage';
import InglesPresencialVsOnlinePage from './pages/blog/InglesPresencialVsOnlinePage';
import B1VsB2QueNivelNecesitoPage from './pages/blog/B1VsB2QueNivelNecesitoPage';

// PAA Blog Pages - Learning Methods
import CuantoTiempoAprenderInglesPage from './pages/blog/CuantoTiempoAprenderInglesPage';
import EntiendoInglesNoHabloPage from './pages/blog/EntiendoInglesNoHabloPage';
import VerguenzaHablarInglesPage from './pages/blog/VerguenzaHablarInglesPage';
import PerderMiedoHablarInglesPage from './pages/blog/PerderMiedoHablarInglesPage';
import ClasesParticularesVsAcademiaPage from './pages/blog/ClasesParticularesVsAcademiaPage';
import InglesOnlineVsPresencialPage from './pages/blog/InglesOnlineVsPresencialPage';
import PorQueNoAvanzoInglesPage from './pages/blog/PorQueNoAvanzoInglesPage';

// PAA Blog Pages - Skills
import MejorarListeningInglesPage from './pages/blog/MejorarListeningInglesPage';
import MejorarSpeakingInglesPage from './pages/blog/MejorarSpeakingInglesPage';
import PensarInglesNoTraducirPage from './pages/blog/PensarInglesNoTraducirPage';
import NoEntiendoInglesHabladoPage from './pages/blog/NoEntiendoInglesHabladoPage';

// PAA Blog Pages - Kids Early Childhood
import NinosAprenderInglesPequenosPage from './pages/blog/NinosAprenderInglesPequenosPage';
import EdadEmpezarInglesBebesPage from './pages/blog/EdadEmpezarInglesBebesPage';
import NinosConfusionDosIdiomasPage from './pages/blog/NinosConfusionDosIdiomasPage';
import InglesJugandoFuncionaPage from './pages/blog/InglesJugandoFuncionaPage';
import MejorMetodoInglesNinosPage from './pages/blog/MejorMetodoInglesNinosPage';
import GreatLittlePeopleMetodologiaPage from './pages/blog/GreatLittlePeopleMetodologiaPage';

// PAA Blog Pages - Kids Primary
import HijoPrepararCambridgePage from './pages/blog/HijoPrepararCambridgePage';
import MotivarHijoInglesPage from './pages/blog/MotivarHijoInglesPage';
import HijoNoAvanzaInglesPage from './pages/blog/HijoNoAvanzaInglesPage';
import InglesColegioSuficientePage from './pages/blog/InglesColegioSuficientePage';

// PAA Blog Pages - Career
import NivelInglesEmpresasPage from './pages/blog/NivelInglesEmpresasPage';
import InglesEntrevistasTrabajoPage from './pages/blog/InglesEntrevistasTrabajoPage';

export default function App() {
  return (
    <main className="min-h-screen w-full bg-white flex flex-col font-sans selection:bg-accent-blue selection:text-white">
      {/* Global Knowledge Graph schema — renders on every page */}
      <SchemaMarkup schema={[generateOrganizationSchema(), generateWebSiteSchema()]} />
      <Routes>
        {/* Home */}
        <Route path="/" element={<HomePage />} />

        {/* Cursos */}
        <Route path="/cursos-ingles/infantil" element={<InfantilPage />} />
        <Route path="/cursos-ingles/primaria" element={<PrimariaPage />} />
        <Route path="/cursos-ingles/secundaria" element={<SecundariaPage />} />
        <Route path="/cursos-ingles/adultos" element={<AdultosPage />} />
        <Route path="/cursos-ingles/particulares" element={<ParticularesPage />} />
        <Route path="/cursos-ingles/online" element={<OnlinePage />} />

        {/* Cambridge Exams (Consolidated Hub) */}
        <Route path="/examenes-cambridge" element={<CambridgeHubPage />} />
        <Route path="/examenes-cambridge/b1-preliminary" element={<B1PreliminaryPage />} />
        <Route path="/examenes-cambridge/b2-first" element={<B2FirstPage />} />
        <Route path="/examenes-cambridge/c1-advanced" element={<ExamenCambridgeC1Page />} />
        <Route path="/examenes-cambridge/fechas-precios" element={<FechasExamenesCambridgePage />} />
        <Route path="/examenes-cambridge/centros-madrid" element={<CentrosCambridgeMadridPage />} />

        {/* Linguaskill (Consolidated Hub) */}
        <Route path="/linguaskill" element={<LinguaskillGuiaCompletaPage />} />
        <Route path="/linguaskill/curso-intensivo" element={<CursoIntensivoLinguaskillPage />} />
        <Route path="/linguaskill/precios-fechas" element={<LinguaskillPreciosSedesPage />} />
        <Route path="/linguaskill/ejemplo-examen" element={<EjemploExamenLinguaskillPage />} />

        {/* About / Info */}
        <Route path="/sobre-nosotros" element={<SobreNosotrosPage />} />
        <Route path="/metodologia" element={<MetodologiaPage />} />
        <Route path="/preguntas-frecuentes" element={<PreguntasFrecuentesPage />} />
        <Route path="/testimonios" element={<TestimonialsPage />} />
        <Route path="/blog" element={<BlogPage />} />

        {/* Madrid City-Wide Pages */}
        <Route path="/academias-ingles-madrid" element={<AcademiasBaratasMadridPage />} />
        <Route path="/academias-ingles-madrid/adultos" element={<CursosInglesAdultosMadridPage />} />
        <Route path="/academias-ingles-madrid/certificaciones" element={<CertificacionesInglesMadridPage />} />
        <Route path="/academias-ingles-madrid/por-barrios" element={<AcademiasPorBarriosMadridPage />} />
        <Route path="/academias-ingles-madrid/ninos" element={<CursosInglesNinosMadridPage />} />

        {/* Location Pages (Local SEO Focus) */}
        <Route path="/academia-ingles-barrio-del-pilar" element={<BarrioDelPilarPage />} />
        <Route path="/academia-ingles-la-vaguada" element={<LaVaguadaPage />} />
        <Route path="/academia-ingles-penagrande" element={<PenagrandePage />} />
        <Route path="/academia-ingles-la-ventilla" element={<LaVentillaPage />} />
        <Route path="/academia-ingles-la-paz" element={<LaPazPage />} />
        <Route path="/academia-ingles-plaza-castilla" element={<PlazaCastillaPage />} />
        <Route path="/academia-ingles-tetuan" element={<TetuanPage />} />
        <Route path="/academia-ingles-cuatro-torres" element={<CuatroTorresPage />} />

        {/* Blog Spoke Pages - Cambridge */}
        <Route path="/blog/cambridge-b1-guia" element={<CambridgeB1GuiaPage />} />
        <Route path="/blog/cambridge-b2-beneficios" element={<CambridgeB2BeneficiosPage />} />
        <Route path="/blog/ejercicios-b2-cambridge" element={<EjerciciosB2CambridgePage />} />
        <Route path="/blog/escala-cambridge" element={<EscalaCambridgePage />} />
        <Route path="/blog/examenes-cambridge-guia" element={<ExamenesCambridgeGuiaPage />} />
        <Route path="/blog/examen-cae-cambridge" element={<ExamenCaeCambridgePage />} />
        <Route path="/blog/libros-cambridge-recursos" element={<LibrosCambridgeRecursosPage />} />
        <Route path="/blog/pdfs-cambridge-advanced" element={<PdfsCambridgeAdvancedPage />} />
        <Route path="/blog/precio-cambridge-c1-madrid" element={<PrecioCambridgeC1MadridPage />} />
        <Route path="/blog/registro-cambridge" element={<RegistroCambridgePage />} />

        {/* Blog Spoke Pages - Linguaskill */}
        <Route path="/blog/centros-linguaskill" element={<CentrosLinguaskillPage />} />
        <Route path="/blog/certificado-linguaskill" element={<CertificadoLinguaskillPage />} />
        <Route path="/blog/linguaskill-online-casa" element={<LinguaskillOnlineCasaPage />} />
        <Route path="/blog/linguaskill-vs-aptis" element={<LinguaskillVsAptisPage />} />
        <Route path="/blog/opiniones-linguaskill" element={<OpinionesLinguaskillPage />} />
        <Route path="/blog/precio-linguaskill-online" element={<PrecioLinguaskillOnlinePage />} />
        <Route path="/blog/precio-linguaskill-reservar" element={<PrecioLinguaskillReservarPage />} />
        <Route path="/blog/recursos-pdf-linguaskill" element={<RecursosPdfLinguaskillPage />} />
        <Route path="/blog/registro-linguaskill" element={<RegistroLinguaskillPage />} />

        {/* New SEO Pages */}
        <Route path="/preparacion-b2-first-madrid" element={<PreparacionB2FirstMadridPage />} />
        <Route path="/blog/mejores-academias-madrid" element={<MejoresAcademiasMadridPage />} />

        {/* Other */}
        <Route path="/aprende-ingles" element={<AprendeInglesGuiaPage />} />
        <Route path="/contacto" element={<ContactoPage />} />
        <Route path="/reservar-clase" element={<ReservarClasePage />} />
        <Route path="/gracias" element={<GraciasPage />} />

        {/* Legal */}
        <Route path="/aviso-legal" element={<AvisoLegalPage />} />
        <Route path="/politica-cookies" element={<PoliticaCookiesPage />} />
        <Route path="/politica-privacidad" element={<PoliticaPrivacidadPage />} />

        {/* PAA Blog Pages - Cambridge B2 First */}
        <Route path="/blog/validez-certificado-b2-cambridge" element={<ValidezCertificadoB2CambridgePage />} />
        <Route path="/blog/nota-aprobar-b2-first" element={<NotaAprobarB2FirstPage />} />
        <Route path="/blog/es-dificil-b2-first" element={<EsDificilB2FirstPage />} />
        <Route path="/blog/preparar-b2-first-3-meses" element={<PrepararB2First3MesesPage />} />
        <Route path="/blog/cuantas-veces-b2-first" element={<CuantasVecesB2FirstPage />} />
        <Route path="/blog/tiempo-preparacion-b2-first" element={<TiempoPreparacionB2FirstPage />} />

        {/* PAA Blog Pages - Cambridge C1 Advanced */}
        <Route path="/blog/tiempo-b2-a-c1" element={<TiempoB2AC1Page />} />
        <Route path="/blog/es-dificil-c1-advanced" element={<EsDificilC1AdvancedPage />} />
        <Route path="/blog/trabajos-piden-c1-ingles" element={<TrabajosPidenC1InglesPage />} />
        <Route path="/blog/c1-advanced-caduca" element={<C1AdvancedCaducaPage />} />
        <Route path="/blog/diferencia-b2-c1" element={<DiferenciaB2C1Page />} />
        <Route path="/blog/vale-pena-c1-espana" element={<ValePenaC1EspanaPage />} />

        {/* PAA Blog Pages - Linguaskill */}
        <Route path="/blog/linguaskill-vs-cambridge-dificultad" element={<LinguaskillVsCambridgeDificultadPage />} />
        <Route path="/blog/linguaskill-casa-fiable" element={<LinguaskillCasaFiablePage />} />
        <Route path="/blog/universidades-aceptan-linguaskill" element={<UniversidadesAceptanLinguaskillPage />} />
        <Route path="/blog/linguaskill-reconocimiento-internacional" element={<LinguaskillReconocimientoInternacionalPage />} />
        <Route path="/blog/linguaskill-oposiciones-validez" element={<LinguaskillOposicionesValidezPage />} />

        {/* PAA Blog Pages - Cambridge B1 */}
        <Route path="/blog/b1-suficiente-trabajar" element={<B1SuficienteTrabajarPage />} />
        <Route path="/blog/precio-b1-cambridge" element={<PrecioB1CambridgePage />} />
        <Route path="/blog/tiempo-preparar-b1-cero" element={<TiempoPreparaB1CeroPage />} />
        <Route path="/blog/b1-universidad-espana" element={<B1UniversidadEspanaPage />} />

        {/* PAA Blog Pages - Comparisons */}
        <Route path="/blog/cambridge-vs-linguaskill-diferencias" element={<CambridgeVsLinguaskillDiferenciasPage />} />
        <Route path="/blog/cambridge-vs-ielts-espana" element={<CambridgeVsIeltsEspanaPage />} />
        <Route path="/blog/academia-vs-profesor-particular" element={<AcademiaVsProfesorParticularPage />} />
        <Route path="/blog/ingles-presencial-vs-online" element={<InglesPresencialVsOnlinePage />} />
        <Route path="/blog/b1-vs-b2-que-nivel-necesito" element={<B1VsB2QueNivelNecesitoPage />} />

        {/* PAA Blog Pages - Learning Methods */}
        <Route path="/blog/cuanto-tiempo-aprender-ingles" element={<CuantoTiempoAprenderInglesPage />} />
        <Route path="/blog/entiendo-ingles-no-hablo" element={<EntiendoInglesNoHabloPage />} />
        <Route path="/blog/verguenza-hablar-ingles" element={<VerguenzaHablarInglesPage />} />
        <Route path="/blog/perder-miedo-hablar-ingles" element={<PerderMiedoHablarInglesPage />} />
        <Route path="/blog/clases-particulares-vs-academia" element={<ClasesParticularesVsAcademiaPage />} />
        <Route path="/blog/ingles-online-vs-presencial" element={<InglesOnlineVsPresencialPage />} />
        <Route path="/blog/por-que-no-avanzo-ingles" element={<PorQueNoAvanzoInglesPage />} />

        {/* PAA Blog Pages - Skills */}
        <Route path="/blog/mejorar-listening-ingles" element={<MejorarListeningInglesPage />} />
        <Route path="/blog/mejorar-speaking-ingles" element={<MejorarSpeakingInglesPage />} />
        <Route path="/blog/pensar-ingles-no-traducir" element={<PensarInglesNoTraducirPage />} />
        <Route path="/blog/no-entiendo-ingles-hablado" element={<NoEntiendoInglesHabladoPage />} />

        {/* PAA Blog Pages - Kids Early Childhood */}
        <Route path="/blog/ninos-aprender-ingles-pequenos" element={<NinosAprenderInglesPequenosPage />} />
        <Route path="/blog/edad-empezar-ingles-bebes" element={<EdadEmpezarInglesBebesPage />} />
        <Route path="/blog/ninos-confusion-dos-idiomas" element={<NinosConfusionDosIdiomasPage />} />
        <Route path="/blog/ingles-jugando-funciona" element={<InglesJugandoFuncionaPage />} />
        <Route path="/blog/mejor-metodo-ingles-ninos" element={<MejorMetodoInglesNinosPage />} />
        <Route path="/blog/great-little-people-metodologia" element={<GreatLittlePeopleMetodologiaPage />} />

        {/* PAA Blog Pages - Kids Primary */}
        <Route path="/blog/hijo-preparar-cambridge" element={<HijoPrepararCambridgePage />} />
        <Route path="/blog/motivar-hijo-ingles" element={<MotivarHijoInglesPage />} />
        <Route path="/blog/hijo-no-avanza-ingles" element={<HijoNoAvanzaInglesPage />} />
        <Route path="/blog/ingles-colegio-suficiente" element={<InglesColegioSuficientePage />} />

        {/* PAA Blog Pages - Career */}
        <Route path="/blog/nivel-ingles-empresas" element={<NivelInglesEmpresasPage />} />
        <Route path="/blog/ingles-entrevistas-trabajo" element={<InglesEntrevistasTrabajoPage />} />

        {/* 404 - Catch all unmatched routes */}
        <Route path="*" element={<NotFoundPage />} />
      </Routes>

      {/* GDPR Cookie Consent Banner — renders on every page */}
      <CookieBanner />
    </main>
  );
}
