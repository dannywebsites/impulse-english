import React from 'react';
import { Instagram, Facebook, Phone, Mail, MapPin, Linkedin, Youtube } from 'lucide-react';
import { NAP, getAddressLines } from '../utils/napData';
import { s3CambridgeImages, s3LinguaskillImages } from '@/utils/images';

const LOGO_URL = NAP.logo;

interface FooterProps {
  variant?: 'simple' | 'full';
}

const serviceAreas = [
  { name: "Barrio del Pilar", href: "/academia-ingles-barrio-del-pilar/" },
  { name: "La Vaguada", href: "/academia-ingles-la-vaguada/" },
  { name: "Peñagrande", href: "/academia-ingles-penagrande/" },
  { name: "La Ventilla", href: "/academia-ingles-la-ventilla/" },
  { name: "La Paz", href: "/academia-ingles-la-paz/" },
  { name: "Plaza Castilla", href: "/academia-ingles-plaza-castilla/" },
  { name: "Tetuán", href: "/academia-ingles-tetuan/" },
  { name: "Cuatro Torres", href: "/academia-ingles-cuatro-torres/" },
  { name: "Mirasierra", href: "/academia-ingles-mirasierra/" },
  { name: "Montecarmelo / Las Tablas", href: "/academia-ingles-montecarmelo-las-tablas/" }
];

export default function Footer({ variant = 'full' }: FooterProps) {
  if (variant === 'simple') {
    return (
      <footer className="bg-zinc-900 text-white py-12 border-t border-zinc-800">
        <div className="container mx-auto px-6 md:px-12">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="flex flex-wrap justify-center gap-6 md:gap-12">
              <a href="/" className="text-zinc-400 hover:text-white text-sm font-medium transition-colors">Inicio</a>
              <a href="/cursos-ingles/infantil/" className="text-zinc-400 hover:text-white text-sm font-medium transition-colors">Cursos</a>
              <a href="/examenes-cambridge/" className="text-zinc-400 hover:text-white text-sm font-medium transition-colors">Cambridge</a>
              <a href="/sobre-nosotros/" className="text-zinc-400 hover:text-white text-sm font-medium transition-colors">Nosotros</a>
              <a href="/contacto/" className="text-zinc-400 hover:text-white text-sm font-medium transition-colors">Contacto</a>
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
                    <a href={area.href} className="hover:text-white transition-colors">{area.name}</a>
                  ) : (
                    <span>{area.name}</span>
                  )}
                  {i < serviceAreas.length - 1 && ' | '}
                </span>
              ))}
            </p>
          </div>

          <div className="mt-6 flex flex-wrap justify-center gap-4 md:gap-8">
            <a href="/aviso-legal/" className="text-zinc-600 hover:text-zinc-400 text-xs uppercase tracking-widest transition-colors">Aviso Legal</a>
            <a href="/politica-privacidad/" className="text-zinc-600 hover:text-zinc-400 text-xs uppercase tracking-widest transition-colors">Política de Privacidad</a>
            <a href="/politica-cookies/" className="text-zinc-600 hover:text-zinc-400 text-xs uppercase tracking-widest transition-colors">Política de Cookies</a>
          </div>

          <div className="mt-4 text-center">
            <p className="text-zinc-600 text-xs uppercase tracking-widest">&copy; 2025 {NAP.name}. Todos los derechos reservados.</p>
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
          <a href="/" className="mb-8">
            <img
              src={LOGO_URL}
              alt="Impulse English Academy"
              className="h-20 md:h-24 lg:h-28 w-auto"
              width="80"
              height="80"
            />
          </a>

          {/* Partner Logos */}
          <div className="flex flex-col items-center">
            <p className="text-zinc-500 text-xs uppercase tracking-widest mb-6">Colaboradores Oficiales</p>
            <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
              <a href="https://www.cambridgeenglish.org" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity">
                <img
                  src={s3CambridgeImages.cambridgeLogo.url}
                  alt="Cambridge English"
                  className="h-10 md:h-12 w-auto"
                  loading="lazy"
                />
              </a>
              <a href="https://www.cambridgeenglish.org/es/exams-and-tests/linguaskill/" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity">
                <img
                  src={s3LinguaskillImages.logoWhite.url}
                  alt="Linguaskill"
                  className="h-10 md:h-12 w-auto"
                  loading="lazy"
                />
              </a>
              <a href="https://www.greatlittlepeople.com/en" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity">
                <img
                  src="/images/academy/logos/great-little-people-white.png"
                  alt="Great Little People"
                  className="h-10 md:h-12 w-auto"
                  loading="lazy"
                />
              </a>
              <a href="https://www.esic.edu/idiomas" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity flex flex-col items-center">
                <img
                  src="/images/academy/logos/esic-idiomas.jpg"
                  alt="ESIC Idiomas - Cambridge English Exam Centre ES278"
                  className="h-10 md:h-12 w-auto"
                  loading="lazy"
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
              <li><a href="/cursos-ingles/infantil/" className="hover:text-white transition-colors">Infantil (2-5 años)</a></li>
              <li><a href="/cursos-ingles/primaria/" className="hover:text-white transition-colors">Primaria (6-12 años)</a></li>
              <li><a href="/cursos-ingles/secundaria/" className="hover:text-white transition-colors">Secundaria (13-17 años)</a></li>
              <li><a href="/cursos-ingles/adultos/" className="hover:text-white transition-colors">Adultos</a></li>
              <li><a href="/cursos-ingles/particulares/" className="hover:text-white transition-colors">Clases Particulares</a></li>
            </ul>
          </div>

          {/* Column 2: Exámenes */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-widest text-white mb-6">Exámenes</h3>
            <ul className="space-y-4 text-zinc-400 text-sm">
              <li><a href="/examenes-cambridge/" className="hover:text-white transition-colors">Exámenes Cambridge</a></li>
              <li><a href="/examenes-cambridge/b2-first/" className="hover:text-white transition-colors">B2 First</a></li>
              <li><a href="/examenes-cambridge/b1-preliminary/" className="hover:text-white transition-colors">B1 Preliminary</a></li>
              <li><a href="/linguaskill/" className="hover:text-white transition-colors">Linguaskill</a></li>
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
              <li><a href="/sobre-nosotros/" className="hover:text-white transition-colors">Sobre Nosotros</a></li>
              <li><a href="/metodologia/" className="hover:text-white transition-colors">Metodología</a></li>
              <li><a href="/preguntas-frecuentes/" className="hover:text-white transition-colors">Preguntas Frecuentes</a></li>
              <li><a href="/blog/" className="hover:text-white transition-colors">Blog</a></li>
            </ul>
          </div>

          {/* Column 4: Contacto */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-widest text-white mb-6">Contacto</h3>
            <ul className="space-y-4 text-zinc-400 text-sm">
              <li>
                <a
                  href={NAP.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:text-white transition-colors"
                >
                  <Phone className="w-4 h-4" />
                  {NAP.phone}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${NAP.email}`}
                  className="flex items-center gap-2 hover:text-white transition-colors"
                >
                  <Mail className="w-4 h-4" />
                  {NAP.email}
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <div>
                  {getAddressLines().map((line, i) => (
                    <p key={i}>{line}</p>
                  ))}
                </div>
              </li>
            </ul>
            <div className="flex flex-wrap gap-3 mt-6">
              <SocialIconButton
                icon={<Instagram size={18} />}
                href={NAP.social.instagram}
              />
              <SocialIconButton
                icon={<Facebook size={18} />}
                href={NAP.social.facebook}
              />
              <SocialIconButton
                icon={<TikTokIcon />}
                href={NAP.social.tiktok}
              />
              <SocialIconButton
                icon={<XIcon />}
                href={NAP.social.x}
              />
              <SocialIconButton
                icon={<Linkedin size={18} />}
                href={NAP.social.linkedin}
              />
              <SocialIconButton
                icon={<Youtube size={18} />}
                href={NAP.social.youtube}
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
                  <a href={area.href} className="hover:text-white transition-colors">{area.name}</a>
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
          <p className="text-zinc-600 text-xs uppercase tracking-widest">&copy; 2025 {NAP.name}. Todos los derechos reservados.</p>
          <div className="flex flex-wrap justify-center gap-4 md:gap-8">
            <a href="/aviso-legal/" className="text-zinc-600 hover:text-zinc-400 text-xs uppercase tracking-widest transition-colors">Aviso Legal</a>
            <a href="/politica-privacidad/" className="text-zinc-600 hover:text-zinc-400 text-xs uppercase tracking-widest transition-colors">Política de Privacidad</a>
            <a href="/politica-cookies/" className="text-zinc-600 hover:text-zinc-400 text-xs uppercase tracking-widest transition-colors">Política de Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

function SocialIcons() {
  return (
    <>
      <a href={NAP.social.instagram} target="_blank" rel="noopener noreferrer" className="text-zinc-500 hover:text-white transition-colors" aria-label="Instagram">
        <Instagram size={20} />
      </a>
      <a href={NAP.social.facebook} target="_blank" rel="noopener noreferrer" className="text-zinc-500 hover:text-white transition-colors" aria-label="Facebook">
        <Facebook size={20} />
      </a>
      <a href={NAP.social.tiktok} target="_blank" rel="noopener noreferrer" className="text-zinc-500 hover:text-white transition-colors" aria-label="TikTok">
        <TikTokIcon />
      </a>
      <a href={NAP.social.x} target="_blank" rel="noopener noreferrer" className="text-zinc-500 hover:text-white transition-colors" aria-label="X">
        <XIcon />
      </a>
      <a href={NAP.social.linkedin} target="_blank" rel="noopener noreferrer" className="text-zinc-500 hover:text-white transition-colors" aria-label="LinkedIn">
        <Linkedin size={20} />
      </a>
      <a href={NAP.social.youtube} target="_blank" rel="noopener noreferrer" className="text-zinc-500 hover:text-white transition-colors" aria-label="YouTube">
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
