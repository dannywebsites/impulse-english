import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Toaster } from 'sonner';

// Pages
import HomePage from './pages/HomePage';

// Cursos
import InfantilPage from './pages/cursos/InfantilPage';
import PrimariaPage from './pages/cursos/PrimariaPage';
import SecundariaPage from './pages/cursos/SecundariaPage';
import AdultosPage from './pages/cursos/AdultosPage';
import ParticularesPage from './pages/cursos/ParticularsPage';

// Cambridge Exams
import CambridgeHubPage from './pages/examenes-cambridge/CambridgeHubPage';
import B1PreliminaryPage from './pages/examenes-cambridge/B1PreliminaryPage';
import B2FirstPage from './pages/examenes-cambridge/B2FirstPage';
import LinguaskillPage from './pages/examenes-cambridge/LinguaskillPage';

// Other Pages
import SobreNosotrosPage from './pages/SobreNosotrosPage';
import ContactoPage from './pages/ContactoPage';
import ReservarClasePage from './pages/ReservarClasePage';
import GraciasPage from './pages/GraciasPage';
import BlogPage from './pages/BlogPage';
import MetodologiaPage from './pages/MetodologiaPage';
import PreguntasFrecuentesPage from './pages/PreguntasFrecuentesPage';
import TestimonialsPage from './pages/TestimonialsPage';

// Blog Article Pages - Hub Articles
import LinguaskillGuiaCompletaPage from './pages/blog/LinguaskillGuiaCompletaPage';
import LinguaskillPreciosSedesPage from './pages/blog/LinguaskillPreciosSedesPage';
import ExamenesCambridgeGuiaPage from './pages/blog/ExamenesCambridgeGuiaPage';
import FechasExamenesCambridgePage from './pages/blog/FechasExamenesCambridgePage';
import LibrosCambridgeRecursosPage from './pages/blog/LibrosCambridgeRecursosPage';

// Blog Article Pages - Spoke Articles (Linguaskill)
import EjemploExamenLinguaskillPage from './pages/blog/EjemploExamenLinguaskillPage';
import PrecioLinguaskillReservarPage from './pages/blog/PrecioLinguaskillReservarPage';
import LinguaskillOnlineCasaPage from './pages/blog/LinguaskillOnlineCasaPage';
import CentrosLinguaskillPage from './pages/blog/CentrosLinguaskillPage';
import OpinionesLinguaskillPage from './pages/blog/OpinionesLinguaskillPage';
import LinguaskillVsAptisPage from './pages/blog/LinguaskillVsAptisPage';
import RegistroLinguaskillPage from './pages/blog/RegistroLinguaskillPage';
import CertificadoLinguaskillPage from './pages/blog/CertificadoLinguaskillPage';
import RecursosPdfLinguaskillPage from './pages/blog/RecursosPdfLinguaskillPage';
import PrecioLinguaskillOnlinePage from './pages/blog/PrecioLinguaskillOnlinePage';
import CursoIntensivoLinguaskillPage from './pages/blog/CursoIntensivoLinguaskillPage';

// Blog Article Pages - Spoke Articles (Cambridge Exams)
import CambridgeB2BeneficiosPage from './pages/blog/CambridgeB2BeneficiosPage';
import ExamenCambridgeC1Page from './pages/blog/ExamenCambridgeC1Page';
import CambridgeB1GuiaPage from './pages/blog/CambridgeB1GuiaPage';
import CentrosCambridgeMadridPage from './pages/blog/CentrosCambridgeMadridPage';
import PrecioCambridgeC1MadridPage from './pages/blog/PrecioCambridgeC1MadridPage';
import RegistroCambridgePage from './pages/blog/RegistroCambridgePage';
import EscalaCambridgePage from './pages/blog/EscalaCambridgePage';
import EjerciciosB2CambridgePage from './pages/blog/EjerciciosB2CambridgePage';
import PdfsCambridgeAdvancedPage from './pages/blog/PdfsCambridgeAdvancedPage';
import ExamenCaeCambridgePage from './pages/blog/ExamenCaeCambridgePage';

// Blog Article Pages - Spoke Articles (Madrid Academias)
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

export default function App() {
  return (
    <>
    <Toaster />
    <main className="min-h-screen w-full bg-white flex flex-col font-sans selection:bg-accent-blue selection:text-white">
      <Routes>
        {/* Home */}
        <Route path="/" element={<HomePage />} />

        {/* Cursos - La Vaguada */}
        <Route path="/ingles-la-vaguada/infantil" element={<InfantilPage />} />
        <Route path="/ingles-la-vaguada/primaria" element={<PrimariaPage />} />
        <Route path="/ingles-la-vaguada/secundaria" element={<SecundariaPage />} />
        <Route path="/ingles-la-vaguada/adultos" element={<AdultosPage />} />
        <Route path="/ingles-la-vaguada/particulares" element={<ParticularesPage />} />

        {/* Cambridge Exams */}
        <Route path="/examenes-cambridge" element={<CambridgeHubPage />} />
        <Route path="/examenes-cambridge/b1-preliminary" element={<B1PreliminaryPage />} />
        <Route path="/examenes-cambridge/b2-first" element={<B2FirstPage />} />
        <Route path="/examenes-cambridge/linguaskill" element={<LinguaskillPage />} />

        {/* Academia Pages */}
        <Route path="/sobre-nosotros" element={<SobreNosotrosPage />} />
        <Route path="/metodologia" element={<MetodologiaPage />} />
        <Route path="/preguntas-frecuentes" element={<PreguntasFrecuentesPage />} />
        <Route path="/testimonios" element={<TestimonialsPage />} />
        <Route path="/blogs-impulse" element={<BlogPage />} />

        {/* Linguaskill Hub & Spokes */}
        <Route path="/linguaskill" element={<LinguaskillGuiaCompletaPage />} />
        <Route path="/linguaskill/precios-sedes" element={<LinguaskillPreciosSedesPage />} />
        <Route path="/linguaskill/ejemplo-examen" element={<EjemploExamenLinguaskillPage />} />
        <Route path="/linguaskill/precio-reservar" element={<PrecioLinguaskillReservarPage />} />
        <Route path="/linguaskill/online-desde-casa" element={<LinguaskillOnlineCasaPage />} />
        <Route path="/linguaskill/centros" element={<CentrosLinguaskillPage />} />
        <Route path="/linguaskill/opiniones" element={<OpinionesLinguaskillPage />} />
        <Route path="/linguaskill/vs-aptis" element={<LinguaskillVsAptisPage />} />
        <Route path="/linguaskill/registro" element={<RegistroLinguaskillPage />} />
        <Route path="/linguaskill/certificado-validez" element={<CertificadoLinguaskillPage />} />
        <Route path="/linguaskill/recursos-pdf" element={<RecursosPdfLinguaskillPage />} />
        <Route path="/linguaskill/precio-online" element={<PrecioLinguaskillOnlinePage />} />
        <Route path="/linguaskill/curso-intensivo" element={<CursoIntensivoLinguaskillPage />} />

        {/* Cambridge Exams Hub & Spokes (blog articles under examenes-cambridge) */}
        <Route path="/examenes-cambridge/guia-completa" element={<ExamenesCambridgeGuiaPage />} />
        <Route path="/examenes-cambridge/fechas" element={<FechasExamenesCambridgePage />} />
        <Route path="/examenes-cambridge/libros-recursos" element={<LibrosCambridgeRecursosPage />} />
        <Route path="/examenes-cambridge/b2-beneficios" element={<CambridgeB2BeneficiosPage />} />
        <Route path="/examenes-cambridge/c1-advanced-guia" element={<ExamenCambridgeC1Page />} />
        <Route path="/examenes-cambridge/b1-guia" element={<CambridgeB1GuiaPage />} />
        <Route path="/examenes-cambridge/centros-madrid" element={<CentrosCambridgeMadridPage />} />
        <Route path="/examenes-cambridge/precio-c1" element={<PrecioCambridgeC1MadridPage />} />
        <Route path="/examenes-cambridge/registro" element={<RegistroCambridgePage />} />
        <Route path="/examenes-cambridge/escala" element={<EscalaCambridgePage />} />
        <Route path="/examenes-cambridge/ejercicios-b2" element={<EjerciciosB2CambridgePage />} />
        <Route path="/examenes-cambridge/pdfs-advanced" element={<PdfsCambridgeAdvancedPage />} />
        <Route path="/examenes-cambridge/cae" element={<ExamenCaeCambridgePage />} />

        {/* Aprende Inglés Hub */}
        <Route path="/aprende-ingles" element={<AprendeInglesGuiaPage />} />

        {/* Academias Ingles Madrid Hub & Spokes */}
        <Route path="/academias-ingles-madrid" element={<AcademiasBaratasMadridPage />} />
        <Route path="/academias-ingles-madrid/adultos" element={<CursosInglesAdultosMadridPage />} />
        <Route path="/academias-ingles-madrid/certificaciones" element={<CertificacionesInglesMadridPage />} />
        <Route path="/academias-ingles-madrid/por-barrios" element={<AcademiasPorBarriosMadridPage />} />
        <Route path="/academias-ingles-madrid/ninos" element={<CursosInglesNinosMadridPage />} />

        {/* Location Pages */}
        <Route path="/academia-ingles-barrio-del-pilar" element={<BarrioDelPilarPage />} />
        <Route path="/academia-ingles-la-vaguada" element={<LaVaguadaPage />} />
        <Route path="/academia-ingles-penagrande" element={<PenagrandePage />} />
        <Route path="/academia-ingles-la-ventilla" element={<LaVentillaPage />} />
        <Route path="/academia-ingles-la-paz" element={<LaPazPage />} />
        <Route path="/academia-ingles-plaza-castilla" element={<PlazaCastillaPage />} />
        <Route path="/academia-ingles-tetuan" element={<TetuanPage />} />
        <Route path="/academia-ingles-cuatro-torres" element={<CuatroTorresPage />} />

        {/* Contact & Booking */}
        <Route path="/contacto" element={<ContactoPage />} />
        <Route path="/reservar-clase" element={<ReservarClasePage />} />
        <Route path="/gracias" element={<GraciasPage />} />

        {/* Legal Pages */}
        <Route path="/aviso-legal" element={<AvisoLegalPage />} />
        <Route path="/politica-cookies" element={<PoliticaCookiesPage />} />
        <Route path="/politica-privacidad" element={<PoliticaPrivacidadPage />} />

        {/* Legacy routes - redirect old paths */}
        <Route path="/about" element={<SobreNosotrosPage />} />
      </Routes>
    </main>
    </>
  );
}
