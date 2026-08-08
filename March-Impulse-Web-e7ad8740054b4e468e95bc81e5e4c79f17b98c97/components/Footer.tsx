import React from 'react';
import { Instagram, Facebook, Mail, MapPin, Linkedin, Youtube } from 'lucide-react';
import { NAP, getAddressLines } from '../utils/napData';
import { BARRIOS_HUB_HREF } from '../utils/barrioAreas';
import WhatsAppIcon from './icons/WhatsAppIcon';

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
  { name: "Las Tablas", href: "/academia-ingles-las-tablas/" },
  { name: "Montecarmelo", href: "/academia-ingles-montecarmelo/" }
];
// This list is hand-maintained and does NOT read utils/barrioAreas.ts, so it
// drifts: it carries 11 of the 15 barrios that exist. Pre-existing, not fixed
// here — worth reconciling against BARRIO_AREAS in its own change.

/* Small uppercase headings set in Playfair are hard to read; the column titles
   stay in Inter. Colours are white-alpha rather than the zinc ramp, which was
   built for a neutral background and goes muddy on the brand navy. */
const COLUMN_HEADING = "font-sans text-xs font-semibold uppercase tracking-[0.18em] text-white mb-5";
const FOOTER_LINK = "text-white/65 transition-colors hover:text-white";

export default function Footer({ variant = 'full' }: FooterProps) {
  if (variant === 'simple') {
    return (
      <footer className="surface-ink border-t border-white/10 py-14">
        <div className="container-page">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="flex flex-wrap justify-center gap-6 md:gap-10">
              <a href="/" className={`${FOOTER_LINK} text-sm font-medium`}>Inicio</a>
              <a href="/cursos-ingles/infantil/" className={`${FOOTER_LINK} text-sm font-medium`}>Cursos</a>
              <a href="/examenes-cambridge/" className={`${FOOTER_LINK} text-sm font-medium`}>Cambridge</a>
              <a href="/sobre-nosotros/" className={`${FOOTER_LINK} text-sm font-medium`}>Nosotros</a>
              <a href="/blog/todos/" className={`${FOOTER_LINK} text-sm font-medium`}>Artículos</a>
              <a href="/contacto/" className={`${FOOTER_LINK} text-sm font-medium`}>Contacto</a>
            </div>

            <div className="flex items-center gap-6">
              <SocialIcons />
            </div>
          </div>

          {/* Service Areas */}
          <div className="mt-10 pt-8 border-t border-white/10">
            <p className="t-small text-white/55">
              <strong className="font-semibold text-white/80">Servimos:</strong>{' '}
              {serviceAreas.map((area, i) => (
                <span key={area.name}>
                  {area.href ? (
                    <a href={area.href} className="transition-colors hover:text-white">{area.name}</a>
                  ) : (
                    <span>{area.name}</span>
                  )}
                  {i < serviceAreas.length - 1 && ' · '}
                </span>
              ))}
              {' · '}
              <a href={BARRIOS_HUB_HREF} className="font-medium text-white/80 transition-colors hover:text-white">Ver todas las zonas</a>
            </p>
          </div>

          <div className="mt-8 flex flex-col gap-4 border-t border-white/10 pt-6 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-xs uppercase tracking-[0.14em] text-white/40">&copy; {new Date().getFullYear()} {NAP.name}. Todos los derechos reservados.</p>
            <div className="flex flex-wrap gap-4 md:gap-7">
              <a href="/aviso-legal/" className="text-xs uppercase tracking-[0.14em] text-white/40 transition-colors hover:text-white/80">Aviso Legal</a>
              <a href="/politica-privacidad/" className="text-xs uppercase tracking-[0.14em] text-white/40 transition-colors hover:text-white/80">Política de Privacidad</a>
              <a href="/politica-cookies/" className="text-xs uppercase tracking-[0.14em] text-white/40 transition-colors hover:text-white/80">Política de Cookies</a>
            </div>
          </div>
        </div>
      </footer>
    );
  }

  return (
    <footer className="surface-ink border-t border-white/10 pt-20 pb-12">
      <div className="container-page">
        {/* Brand rail + partners. Left-aligned on desktop rather than a centred
            stack, which is the default every template arrives with. */}
        <div className="flex flex-col gap-10 border-b border-white/10 pb-12 lg:flex-row lg:items-end lg:justify-between">
          <a href="/" className="shrink-0">
            <img
              src={LOGO_URL}
              alt="Impulse English Academy"
              className="h-20 md:h-24 w-auto"
              width="80"
              height="80"
            />
          </a>

          {/* Partner Logos */}
          <div className="lg:text-right">
            <p className="mb-5 text-xs uppercase tracking-[0.18em] text-white/45">Colaboradores Oficiales</p>
            <div className="flex flex-wrap items-center gap-8 md:gap-10 lg:justify-end">
              <a href="https://www.cambridgeenglish.org" target="_blank" rel="noopener noreferrer" className="opacity-80 transition-opacity hover:opacity-100">
                <img
                  src="/images/academy/cambridge-logo-edited.png"
                  alt="Cambridge English"
                  className="h-10 md:h-12 w-auto"
                  loading="lazy"
                />
              </a>
              <a href="https://www.cambridgeenglish.org/es/exams-and-tests/linguaskill/" target="_blank" rel="noopener noreferrer" className="opacity-80 transition-opacity hover:opacity-100">
                <img
                  src="/images/academy/linguaskill-logo-blanco.png"
                  alt="Linguaskill"
                  className="h-10 md:h-12 w-auto"
                  loading="lazy"
                />
              </a>
              <a href="https://www.greatlittlepeople.com/en" target="_blank" rel="noopener noreferrer" className="opacity-80 transition-opacity hover:opacity-100">
                <img
                  src="/images/academy/great-little-people-white.png"
                  alt="Great Little People"
                  className="h-10 md:h-12 w-auto"
                  loading="lazy"
                />
              </a>
              <a href="https://www.esic.edu/idiomas" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center opacity-80 transition-opacity hover:opacity-100">
                <img
                  src="/images/academy/esic-idiomas.jpg"
                  alt="ESIC Idiomas - Cambridge English Exam Centre ES278"
                  className="h-10 md:h-12 w-auto"
                  loading="lazy"
                />
                <span className="mt-1 text-[10px] text-white/45">Cambridge Exam Centre ES278</span>
              </a>
            </div>
          </div>
        </div>

        {/* Link columns. Deliberately uneven: Contacto carries an address block
            and six social buttons, so it gets the room it actually needs. */}
        <div className="grid grid-cols-1 gap-10 py-14 sm:grid-cols-2 lg:grid-cols-12 lg:gap-8">
          {/* Column 1: Cursos */}
          <div className="lg:col-span-2">
            <h3 className={COLUMN_HEADING}>Cursos</h3>
            <ul className="space-y-3.5 text-sm">
              <li><a href="/cursos-ingles/infantil/" className={FOOTER_LINK}>Infantil (2-5 años)</a></li>
              <li><a href="/cursos-ingles/primaria/" className={FOOTER_LINK}>Primaria (6-12 años)</a></li>
              <li><a href="/cursos-ingles/secundaria/" className={FOOTER_LINK}>Secundaria (13-17 años)</a></li>
              <li><a href="/cursos-ingles/adultos/" className={FOOTER_LINK}>Adultos</a></li>
              <li><a href="/cursos-ingles/particulares/" className={FOOTER_LINK}>Clases Particulares</a></li>
              <li><a href="/ingles-para-empresas/" className={FOOTER_LINK}>Inglés para Empresas</a></li>
              <li><a href="/ingles-en-el-extranjero/" className={FOOTER_LINK}>Inglés en el extranjero</a></li>
            </ul>
          </div>

          {/* Column 2: Exámenes */}
          <div className="lg:col-span-3">
            <h3 className={COLUMN_HEADING}>Exámenes</h3>
            <ul className="space-y-3.5 text-sm">
              <li><a href="/examenes-cambridge/" className={FOOTER_LINK}>Exámenes Cambridge</a></li>
              <li><a href="/examenes-cambridge/b2-first/" className={FOOTER_LINK}>B2 First</a></li>
              <li><a href="/examenes-cambridge/b1-preliminary/" className={FOOTER_LINK}>B1 Preliminary</a></li>
              <li><a href="/linguaskill/" className={FOOTER_LINK}>Linguaskill</a></li>
              <li>
                <a
                  href="https://www.cambridgeenglish.org/exams-and-tests/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={FOOTER_LINK}
                >
                  Cambridge English (Oficial)
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Academia */}
          <div className="lg:col-span-3">
            <h3 className={COLUMN_HEADING}>Academia</h3>
            <ul className="space-y-3.5 text-sm">
              <li><a href="/sobre-nosotros/" className={FOOTER_LINK}>Sobre Nosotros</a></li>
              <li><a href="/nuestro-equipo/" className={FOOTER_LINK}>Nuestro Equipo</a></li>
              <li><a href="/metodologia/" className={FOOTER_LINK}>Metodología</a></li>
              <li><a href="/preguntas-frecuentes/" className={FOOTER_LINK}>Preguntas Frecuentes</a></li>
              <li><a href="/blog/" className={FOOTER_LINK}>Blog</a></li>
              <li><a href="/blog/todos/" className={FOOTER_LINK}>Todos los artículos</a></li>
              <li><a href="/aprende-ingles/" className={FOOTER_LINK}>Aprender inglés gratis</a></li>
            </ul>
          </div>

          {/* Column 4: Contacto */}
          <div className="lg:col-span-4">
            <h3 className={COLUMN_HEADING}>Contacto</h3>
            <ul className="space-y-3.5 text-sm">
              <li>
                <a
                  href={NAP.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center gap-2.5 ${FOOTER_LINK}`}
                >
                  <WhatsAppIcon className="w-4 h-4 shrink-0 text-white/40" />
                  {NAP.phone}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${NAP.email}`}
                  className={`flex items-center gap-2.5 ${FOOTER_LINK}`}
                >
                  <Mail className="w-4 h-4 shrink-0 text-white/40" />
                  {NAP.email}
                </a>
              </li>
              <li className="flex items-start gap-2.5 text-white/65">
                <MapPin className="w-4 h-4 mt-1 shrink-0 text-white/40" />
                <div className="not-italic leading-relaxed">
                  {getAddressLines().map((line, i) => (
                    <p key={i}>{line}</p>
                  ))}
                </div>
              </li>
            </ul>
            <div className="mt-7 flex flex-wrap gap-2.5">
              <SocialIconButton
                icon={<Instagram size={18} />}
                href={NAP.social.instagram}
                label="Instagram"
              />
              <SocialIconButton
                icon={<Facebook size={18} />}
                href={NAP.social.facebook}
                label="Facebook"
              />
              <SocialIconButton
                icon={<TikTokIcon />}
                href={NAP.social.tiktok}
                label="TikTok"
              />
              <SocialIconButton
                icon={<XIcon />}
                href={NAP.social.x}
                label="X"
              />
              <SocialIconButton
                icon={<Linkedin size={18} />}
                href={NAP.social.linkedin}
                label="LinkedIn"
              />
              <SocialIconButton
                icon={<Youtube size={18} />}
                href={NAP.social.youtube}
                label="YouTube"
              />
            </div>
          </div>
        </div>

        {/* Service Areas Row */}
        <div className="border-t border-white/10 py-7">
          <p className="t-small text-white/55">
            <strong className="font-semibold text-white/80">Servimos:</strong>{' '}
            {serviceAreas.map((area, i) => (
              <span key={area.name}>
                {area.href ? (
                  <a href={area.href} className="transition-colors hover:text-white">{area.name}</a>
                ) : (
                  <span>{area.name}</span>
                )}
                {i < serviceAreas.length - 1 && ' · '}
              </span>
            ))}
            {' · '}
            <a href={BARRIOS_HUB_HREF} className="font-medium text-white/80 transition-colors hover:text-white">Ver todas las zonas</a>
          </p>
        </div>

        {/* Copyright */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 border-t border-white/10 pt-8">
          <p className="text-xs uppercase tracking-[0.14em] text-white/40">&copy; {new Date().getFullYear()} {NAP.name}. Todos los derechos reservados.</p>
          <div className="flex flex-wrap justify-center gap-4 md:gap-7">
            <a href="/aviso-legal/" className="text-xs uppercase tracking-[0.14em] text-white/40 transition-colors hover:text-white/80">Aviso Legal</a>
            <a href="/politica-privacidad/" className="text-xs uppercase tracking-[0.14em] text-white/40 transition-colors hover:text-white/80">Política de Privacidad</a>
            <a href="/politica-cookies/" className="text-xs uppercase tracking-[0.14em] text-white/40 transition-colors hover:text-white/80">Política de Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

function SocialIcons() {
  return (
    <>
      <a href={NAP.social.instagram} target="_blank" rel="noopener noreferrer" className="text-white/50 transition-colors hover:text-white" aria-label="Instagram">
        <Instagram size={20} />
      </a>
      <a href={NAP.social.facebook} target="_blank" rel="noopener noreferrer" className="text-white/50 transition-colors hover:text-white" aria-label="Facebook">
        <Facebook size={20} />
      </a>
      <a href={NAP.social.tiktok} target="_blank" rel="noopener noreferrer" className="text-white/50 transition-colors hover:text-white" aria-label="TikTok">
        <TikTokIcon />
      </a>
      <a href={NAP.social.x} target="_blank" rel="noopener noreferrer" className="text-white/50 transition-colors hover:text-white" aria-label="X">
        <XIcon />
      </a>
      <a href={NAP.social.linkedin} target="_blank" rel="noopener noreferrer" className="text-white/50 transition-colors hover:text-white" aria-label="LinkedIn">
        <Linkedin size={20} />
      </a>
      <a href={NAP.social.youtube} target="_blank" rel="noopener noreferrer" className="text-white/50 transition-colors hover:text-white" aria-label="YouTube">
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

function SocialIconButton({ icon, href, label }: { icon: React.ReactNode; href: string; label?: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/5 text-white/70
                 transition-colors hover:border-white hover:bg-white hover:text-accent-blue-950"
    >
      {icon}
    </a>
  );
}
