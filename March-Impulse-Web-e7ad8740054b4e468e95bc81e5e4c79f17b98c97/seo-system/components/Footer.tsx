import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Facebook, Phone, Mail, MapPin, Linkedin, Youtube } from 'lucide-react';
import { brandingImages, brandingGalleryImages } from '../../utils/images';

const LOGO_URL = brandingImages.logoS3.url;
const CAMBRIDGE_LOGO_URL = brandingGalleryImages[1].url;
const LINGUASKILL_LOGO_URL = '/images/academy/logos/linguaskill-logo-blanco.png';
const GLP_LOGO_URL = brandingGalleryImages[2].url;
const ESIC_LOGO_URL = brandingGalleryImages[3].url;

interface FooterProps {
  variant?: 'simple' | 'full';
}

const serviceAreas = [
  { name: "Barrio del Pilar", href: "/academia-ingles-barrio-del-pilar" },
  { name: "La Vaguada", href: "/academia-ingles-la-vaguada" },
  { name: "Peñagrande", href: "/academia-ingles-penagrande" },
  { name: "La Ventilla", href: "/academia-ingles-la-ventilla" },
  { name: "La Paz", href: "/academia-ingles-la-paz" },
  { name: "Plaza Castilla", href: "/academia-ingles-plaza-castilla" },
  { name: "Tetuán", href: "/academia-ingles-tetuan" },
  { name: "Cuatro Torres", href: "/academia-ingles-cuatro-torres" }
];

export default function Footer({ variant = 'full' }: FooterProps) {
  if (variant === 'simple') {
    return (
      <footer className="bg-zinc-900 text-white py-12 border-t border-zinc-800">
        <div className="container mx-auto px-6 md:px-12">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="flex flex-wrap justify-center gap-6 md:gap-12">
              <Link to="/" className="text-zinc-400 hover:text-white text-sm font-medium transition-colors">Inicio</Link>
              <Link to="/ingles-la-vaguada/infantil" className="text-zinc-400 hover:text-white text-sm font-medium transition-colors">Cursos</Link>
              <Link to="/examenes-cambridge" className="text-zinc-400 hover:text-white text-sm font-medium transition-colors">Cambridge</Link>
              <Link to="/sobre-nosotros" className="text-zinc-400 hover:text-white text-sm font-medium transition-colors">Nosotros</Link>
              <Link to="/contacto" className="text-zinc-400 hover:text-white text-sm font-medium transition-colors">Contacto</Link>
            </div>

            <div className="flex items-center gap-6">
              <SocialIcons />
            </div>
          </div>

          {/* Service Areas */}
          <div className="mt-8 pt-8 border-t border-white/5 text-center">
            <p className="text-zinc-500 text-sm mb-4">
              <strong className="text-zinc-400">Servimos:</strong>{' '}
              {serviceAreas.map((area, i) => (
                <span key={area.name}>
                  {area.href ? (
                    <Link to={area.href} className="hover:text-white transition-colors">{area.name}</Link>
                  ) : (
                    <span>{area.name}</span>
                  )}
                  {i < serviceAreas.length - 1 && ' | '}
                </span>
              ))}
            </p>
          </div>

          <div className="mt-6 flex flex-wrap justify-center gap-4 md:gap-8">
            <Link to="/aviso-legal" className="text-zinc-600 hover:text-zinc-400 text-xs uppercase tracking-widest transition-colors">Aviso Legal</Link>
            <Link to="/politica-privacidad" className="text-zinc-600 hover:text-zinc-400 text-xs uppercase tracking-widest transition-colors">Política de Privacidad</Link>
            <Link to="/politica-cookies" className="text-zinc-600 hover:text-zinc-400 text-xs uppercase tracking-widest transition-colors">Política de Cookies</Link>
          </div>

          <div className="mt-4 text-center">
            <p className="text-zinc-600 text-xs uppercase tracking-widest">&copy; 2025 Impulse English Academy. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    );
  }

  return (
    <footer className="bg-zinc-900 text-white pt-16 pb-12 border-t border-zinc-800">
      <div className="container mx-auto px-6 md:px-12">
        {/* Logo and Partner Logos Section */}
        <div className="flex flex-col items-center mb-12">
          <Link to="/" className="mb-8">
            <img
              src={LOGO_URL}
              alt="Impulse English Academy"
              className="h-20 md:h-24 lg:h-28 w-auto"
            />
          </Link>

          {/* Partner Logos */}
          <div className="flex flex-col items-center">
            <p className="text-zinc-500 text-xs uppercase tracking-widest mb-6">Colaboradores Oficiales</p>
            <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
              <a href="https://www.cambridgeenglish.org" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity">
                <img
                  src={CAMBRIDGE_LOGO_URL}
                  alt="Cambridge English"
                  className="h-10 md:h-12 w-auto"
                />
              </a>
              <a href="https://www.cambridgeenglish.org/es/exams-and-tests/linguaskill/" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity">
                <img
                  src={LINGUASKILL_LOGO_URL}
                  alt="Linguaskill"
                  className="h-10 md:h-12 w-auto"
                />
              </a>
              <a href="https://www.greatlittlepeople.com/en" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity">
                <img
                  src={GLP_LOGO_URL}
                  alt="Great Little People"
                  className="h-10 md:h-12 w-auto"
                />
              </a>
              <a href="https://www.esic.edu/idiomas" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity flex flex-col items-center">
                <img
                  src={ESIC_LOGO_URL}
                  alt="ESIC Idiomas - Cambridge English Exam Centre ES278"
                  className="h-10 md:h-12 w-auto"
                />
                <span className="text-[10px] text-zinc-500 mt-1">Cambridge Exam Centre ES278</span>
              </a>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Column 1: Cursos */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-widest text-white mb-6">Cursos</h3>
            <ul className="space-y-4 text-zinc-400 text-sm">
              <li><Link to="/ingles-la-vaguada/infantil" className="hover:text-white transition-colors">Infantil (2-5 años)</Link></li>
              <li><Link to="/ingles-la-vaguada/primaria" className="hover:text-white transition-colors">Primaria (6-12 años)</Link></li>
              <li><Link to="/ingles-la-vaguada/secundaria" className="hover:text-white transition-colors">Secundaria (13-17 años)</Link></li>
              <li><Link to="/ingles-la-vaguada/adultos" className="hover:text-white transition-colors">Adultos</Link></li>
              <li><Link to="/ingles-la-vaguada/particulares" className="hover:text-white transition-colors">Clases Particulares</Link></li>
            </ul>
          </div>

          {/* Column 2: Exámenes */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-widest text-white mb-6">Exámenes</h3>
            <ul className="space-y-4 text-zinc-400 text-sm">
              <li><Link to="/examenes-cambridge" className="hover:text-white transition-colors">Exámenes Cambridge</Link></li>
              <li><Link to="/examenes-cambridge/b2-first" className="hover:text-white transition-colors">B2 First</Link></li>
              <li><Link to="/examenes-cambridge/b1-preliminary" className="hover:text-white transition-colors">B1 Preliminary</Link></li>
              <li><Link to="/examenes-cambridge/linguaskill" className="hover:text-white transition-colors">Linguaskill</Link></li>
              <li>
                <a
                  href="https://www.cambridgeenglish.org/exams-and-tests/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  Cambridge English (Oficial)
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Academia */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-widest text-white mb-6">Academia</h3>
            <ul className="space-y-4 text-zinc-400 text-sm">
              <li><Link to="/sobre-nosotros" className="hover:text-white transition-colors">Sobre Nosotros</Link></li>
              <li><Link to="/metodologia" className="hover:text-white transition-colors">Metodología</Link></li>
              <li><Link to="/preguntas-frecuentes" className="hover:text-white transition-colors">Preguntas Frecuentes</Link></li>
              <li><Link to="/blogs-impulse" className="hover:text-white transition-colors">Blog</Link></li>
            </ul>
          </div>

          {/* Column 4: Contacto */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-widest text-white mb-6">Contacto</h3>
            <ul className="space-y-4 text-zinc-400 text-sm">
              <li>
                <a
                  href="https://wa.me/34604910611"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:text-white transition-colors"
                >
                  <Phone className="w-4 h-4" />
                  +34 604 910 611
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@impulse-english.es"
                  className="flex items-center gap-2 hover:text-white transition-colors"
                >
                  <Mail className="w-4 h-4" />
                  info@impulse-english.es
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <div>
                  <p>Av. de El Ferrol, 22</p>
                  <p>Barrio del Pilar, 28029 Madrid</p>
                </div>
              </li>
            </ul>
            <div className="flex flex-wrap gap-3 mt-6">
              <SocialIconButton
                icon={<Instagram size={18} />}
                href="https://www.instagram.com/impulse_english_academy/"
              />
              <SocialIconButton
                icon={<Facebook size={18} />}
                href="https://www.facebook.com/impulseenglish.es"
              />
              <SocialIconButton
                icon={<TikTokIcon />}
                href="https://www.tiktok.com/@impulse_english"
              />
              <SocialIconButton
                icon={<XIcon />}
                href="https://x.com/impulse_vaguada"
              />
              <SocialIconButton
                icon={<Linkedin size={18} />}
                href="https://www.linkedin.com/company/101859096/"
              />
              <SocialIconButton
                icon={<Youtube size={18} />}
                href="https://www.youtube.com/@Impulse-English"
              />
            </div>
          </div>
        </div>

        {/* Service Areas Row */}
        <div className="border-t border-zinc-800 pt-6 pb-6">
          <p className="text-zinc-500 text-sm text-center">
            <strong className="text-zinc-400">Servimos:</strong>{' '}
            {serviceAreas.map((area, i) => (
              <span key={area.name}>
                {area.href ? (
                  <Link to={area.href} className="hover:text-white transition-colors">{area.name}</Link>
                ) : (
                  <span>{area.name}</span>
                )}
                {i < serviceAreas.length - 1 && ' | '}
              </span>
            ))}
          </p>
        </div>

        {/* Copyright */}
        <div className="border-t border-zinc-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-zinc-600 text-xs uppercase tracking-widest">&copy; 2025 Impulse English Academy. Todos los derechos reservados.</p>
          <div className="flex flex-wrap justify-center gap-4 md:gap-8">
            <Link to="/aviso-legal" className="text-zinc-600 hover:text-zinc-400 text-xs uppercase tracking-widest transition-colors">Aviso Legal</Link>
            <Link to="/politica-privacidad" className="text-zinc-600 hover:text-zinc-400 text-xs uppercase tracking-widest transition-colors">Política de Privacidad</Link>
            <Link to="/politica-cookies" className="text-zinc-600 hover:text-zinc-400 text-xs uppercase tracking-widest transition-colors">Política de Cookies</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

function SocialIcons() {
  return (
    <>
      <a href="https://www.instagram.com/impulse_english_academy/" target="_blank" rel="noopener noreferrer" className="text-zinc-500 hover:text-white transition-colors" aria-label="Instagram">
        <Instagram size={20} />
      </a>
      <a href="https://www.facebook.com/impulseenglish.es" target="_blank" rel="noopener noreferrer" className="text-zinc-500 hover:text-white transition-colors" aria-label="Facebook">
        <Facebook size={20} />
      </a>
      <a href="https://www.tiktok.com/@impulse_english" target="_blank" rel="noopener noreferrer" className="text-zinc-500 hover:text-white transition-colors" aria-label="TikTok">
        <TikTokIcon />
      </a>
      <a href="https://x.com/impulse_vaguada" target="_blank" rel="noopener noreferrer" className="text-zinc-500 hover:text-white transition-colors" aria-label="X">
        <XIcon />
      </a>
      <a href="https://www.linkedin.com/company/101859096/" target="_blank" rel="noopener noreferrer" className="text-zinc-500 hover:text-white transition-colors" aria-label="LinkedIn">
        <Linkedin size={20} />
      </a>
      <a href="https://www.youtube.com/@Impulse-English" target="_blank" rel="noopener noreferrer" className="text-zinc-500 hover:text-white transition-colors" aria-label="YouTube">
        <Youtube size={20} />
      </a>
    </>
  );
}

function TikTokIcon() {
  return (
    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
    </svg>
  );
}

function XIcon() {
  return (
    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
    </svg>
  );
}

function SocialIconButton({ icon, href }: { icon: React.ReactNode; href: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="w-10 h-10 rounded-full bg-zinc-800 flex items-center justify-center text-zinc-400 hover:bg-white hover:text-zinc-900 transition-all"
    >
      {icon}
    </a>
  );
}
