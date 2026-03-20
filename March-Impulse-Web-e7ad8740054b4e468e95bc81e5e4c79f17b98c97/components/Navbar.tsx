import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown, MessageCircle, Phone } from 'lucide-react';
import { NAP } from '../utils/napData';

const LOGO_URL = NAP.logo;

interface NavItem {
  label: string;
  href?: string;
  children?: { label: string; href: string; description?: string }[];
}

const navItems: NavItem[] = [
  { label: "Inicio", href: "/" },
  {
    label: "Cursos",
    children: [
      { label: "Infantil (2-5 años)", href: "/cursos-ingles/infantil", description: "Great Little People methodology" },
      { label: "Primaria (6-12 años)", href: "/cursos-ingles/primaria", description: "Cambridge Young Learners" },
      { label: "Secundaria (13-17 años)", href: "/cursos-ingles/secundaria", description: "EBAU & Cambridge B1-C1" },
      { label: "Adultos", href: "/cursos-ingles/adultos", description: "Desde principiante hasta C2" },
      { label: "Clases Particulares", href: "/cursos-ingles/particulares", description: "Presencial y online" },
      { label: "Online", href: "/cursos-ingles/online", description: "Clases en directo por videoconferencia" },
    ]
  },
  {
    label: "Exámenes",
    children: [
      { label: "Exámenes Cambridge", href: "/examenes-cambridge", description: "B1, B2 First, C1 Advanced" },
      { label: "Linguaskill", href: "/linguaskill", description: "Certificación rápida de Cambridge" },
    ]
  },
  { label: "Sobre Nosotros", href: "/sobre-nosotros" },
  { label: "Testimonios", href: "/testimonios" },
  { label: "Blog", href: "/blog" },
  { label: "Contacto", href: "/contacto" }
];

export default function Navbar({ currentPath = '/' }: { currentPath?: string }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const isHomePage = currentPath === '/';

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
    setOpenDropdown(null);
  }, [currentPath]);

  // Homepage transparent navbar
  if (isHomePage) {
    return (
      <>
        <nav
          className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 border-b ${
            scrolled
              ? 'bg-zinc-900/95 backdrop-blur-md py-3 border-white/10'
              : 'bg-transparent py-5 border-transparent'
          }`}
        >
          <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">
            {/* Logo */}
            <a href="/" className="flex items-center">
              <img
                src={LOGO_URL}
                alt="Impulse English Academy"
                className="h-[70px] md:h-20 lg:h-[100px] w-auto"
              />
            </a>

            {/* Mobile CTA Buttons + Menu Toggle */}
            <div className="xl:hidden flex items-center gap-2">
              <a
                href={NAP.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 bg-green-500 hover:bg-green-600 text-white font-semibold text-xs px-2.5 py-1.5 rounded-md transition-all"
                aria-label="WhatsApp"
              >
                <MessageCircle className="w-4 h-4" />
                <span className="hidden sm:inline">WhatsApp</span>
              </a>
              <a
                href={NAP.phoneTel}
                className="flex items-center gap-1 bg-white/10 hover:bg-white/20 border border-white/30 text-white font-semibold text-xs px-2.5 py-1.5 rounded-md transition-all"
                aria-label="Llamar"
              >
                <Phone className="w-4 h-4" />
                <span className="hidden sm:inline">Llamar</span>
              </a>
              <button
                className="text-white p-2"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden xl:flex items-center space-x-1">
              {navItems.map((item) => (
                <div key={item.label} className="relative group">
                  {item.children ? (
                    <button
                      className="text-white/90 font-medium text-sm tracking-wide hover:text-white transition-colors px-4 py-2 flex items-center gap-1"
                      onMouseEnter={() => setOpenDropdown(item.label)}
                      onMouseLeave={() => setOpenDropdown(null)}
                    >
                      {item.label}
                      <ChevronDown className="w-4 h-4" />
                    </button>
                  ) : (
                    <a
                      href={item.href!}
                      className="text-white/90 font-medium text-sm tracking-wide hover:text-white transition-colors px-4 py-2"
                    >
                      {item.label}
                    </a>
                  )}

                  {/* Dropdown */}
                  {item.children && (
                    <div
                      className={`absolute top-full left-0 w-72 bg-white rounded-lg shadow-2xl border border-zinc-100 py-2 transition-all duration-200 ${
                        openDropdown === item.label ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'
                      }`}
                      onMouseEnter={() => setOpenDropdown(item.label)}
                      onMouseLeave={() => setOpenDropdown(null)}
                    >
                      {item.children.map((child) => (
                        <a
                          key={child.href}
                          href={child.href}
                          className="block px-4 py-3 hover:bg-zinc-50 transition-colors"
                        >
                          <span className="block text-zinc-900 font-semibold text-sm">{child.label}</span>
                          {child.description && (
                            <span className="block text-zinc-500 text-xs mt-0.5">{child.description}</span>
                          )}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="hidden xl:flex items-center gap-4">
              <a
                href={NAP.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-500 hover:bg-green-600 border border-green-500 text-white font-semibold py-2.5 px-4 rounded-md flex items-center gap-2 transition-all text-sm"
              >
                <MessageCircle className="w-4 h-4" />
                WhatsApp
              </a>
              <a
                href={NAP.phoneTel}
                className="bg-transparent border border-white/30 hover:bg-white/10 text-white font-semibold py-2.5 px-4 rounded-md flex items-center gap-2 transition-all text-sm"
              >
                <Phone className="w-4 h-4" />
                604 910 611
              </a>
            </div>
          </div>
        </nav>

        {/* Mobile Menu */}
        <MobileMenu isOpen={mobileMenuOpen} onClose={() => setMobileMenuOpen(false)} isHomePage={true} />
      </>
    );
  }

  // Content pages - white navbar
  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 border-b ${
          scrolled
            ? 'bg-white/98 backdrop-blur-md py-3 border-zinc-200 shadow-sm'
            : 'bg-white py-4 border-zinc-100'
        }`}
      >
        <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">
          {/* Logo */}
          <a href="/" className="flex items-center">
            <img
              src={LOGO_URL}
              alt="Impulse English Academy"
              className="h-[70px] md:h-20 lg:h-[100px] w-auto"
            />
          </a>

          {/* Mobile CTA Buttons + Menu Toggle */}
          <div className="xl:hidden flex items-center gap-2">
            <a
              href={NAP.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 bg-green-500 hover:bg-green-600 text-white font-semibold text-xs px-2.5 py-1.5 rounded-md transition-all"
              aria-label="WhatsApp"
            >
              <MessageCircle className="w-4 h-4" />
              <span className="hidden sm:inline">WhatsApp</span>
            </a>
            <a
              href={NAP.phoneTel}
              className="flex items-center gap-1 bg-transparent hover:bg-zinc-100 border border-zinc-300 text-zinc-700 font-semibold text-xs px-2.5 py-1.5 rounded-md transition-all"
              aria-label="Llamar"
            >
              <Phone className="w-4 h-4" />
              <span className="hidden sm:inline">Llamar</span>
            </a>
            <button
              className="text-accent-blue p-2"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden xl:flex items-center space-x-1">
            {navItems.map((item) => (
              <div key={item.label} className="relative group">
                {item.children ? (
                  <button
                    className="text-zinc-700 font-medium text-sm tracking-wide hover:text-accent-blue transition-colors px-4 py-2 flex items-center gap-1"
                    onMouseEnter={() => setOpenDropdown(item.label)}
                    onMouseLeave={() => setOpenDropdown(null)}
                  >
                    {item.label}
                    <ChevronDown className="w-4 h-4" />
                  </button>
                ) : (
                  <a
                    href={item.href!}
                    className={`font-medium text-sm tracking-wide transition-colors px-4 py-2 ${
                      currentPath === item.href
                        ? 'text-accent-blue'
                        : 'text-zinc-700 hover:text-accent-blue'
                    }`}
                  >
                    {item.label}
                  </a>
                )}

                {/* Dropdown */}
                {item.children && (
                  <div
                    className={`absolute top-full left-0 w-72 bg-white rounded-lg shadow-2xl border border-zinc-100 py-2 transition-all duration-200 ${
                      openDropdown === item.label ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'
                    }`}
                    onMouseEnter={() => setOpenDropdown(item.label)}
                    onMouseLeave={() => setOpenDropdown(null)}
                  >
                    {item.children.map((child) => (
                      <a
                        key={child.href}
                        href={child.href}
                        className="block px-4 py-3 hover:bg-zinc-50 transition-colors"
                      >
                        <span className="block text-zinc-900 font-semibold text-sm">{child.label}</span>
                        {child.description && (
                          <span className="block text-zinc-500 text-xs mt-0.5">{child.description}</span>
                        )}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="hidden xl:flex items-center gap-4">
            <a
              href={NAP.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 hover:bg-green-600 border border-green-500 text-white font-semibold py-2.5 px-4 rounded-md flex items-center gap-2 transition-all text-sm"
            >
              <MessageCircle className="w-4 h-4" />
              WhatsApp
            </a>
            <a
              href={NAP.phoneTel}
              className="bg-transparent border border-zinc-300 hover:bg-zinc-100 text-zinc-700 font-semibold py-2.5 px-4 rounded-md flex items-center gap-2 transition-all text-sm"
            >
              <Phone className="w-4 h-4" />
              604 910 611
            </a>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <MobileMenu isOpen={mobileMenuOpen} onClose={() => setMobileMenuOpen(false)} isHomePage={false} />
    </>
  );
}

function MobileMenu({ isOpen, onClose, isHomePage }: { isOpen: boolean; onClose: () => void; isHomePage: boolean }) {
  const [expandedItem, setExpandedItem] = useState<string | null>(null);

  if (!isOpen) return null;

  return (
    <div className={`fixed inset-0 z-40 ${isHomePage ? 'bg-zinc-900' : 'bg-white'}`}>
      <div className="pt-20 px-6 pb-6 h-full overflow-y-auto">
        <div className="space-y-2">
          {navItems.map((item) => (
            <div key={item.label}>
              {item.children ? (
                <>
                  <button
                    onClick={() => setExpandedItem(expandedItem === item.label ? null : item.label)}
                    className={`w-full flex items-center justify-between py-3 text-lg font-semibold ${
                      isHomePage ? 'text-white' : 'text-zinc-900'
                    }`}
                  >
                    {item.label}
                    <ChevronDown className={`w-5 h-5 transition-transform ${expandedItem === item.label ? 'rotate-180' : ''}`} />
                  </button>
                  {expandedItem === item.label && (
                    <div className="pl-4 space-y-2 pb-2">
                      {item.children.map((child) => (
                        <a
                          key={child.href}
                          href={child.href}
                          onClick={onClose}
                          className={`block py-2 ${isHomePage ? 'text-white/70 hover:text-white' : 'text-zinc-600 hover:text-accent-blue'}`}
                        >
                          {child.label}
                        </a>
                      ))}
                    </div>
                  )}
                </>
              ) : (
                <a
                  href={item.href!}
                  onClick={onClose}
                  className={`block py-3 text-lg font-semibold ${
                    isHomePage ? 'text-white' : 'text-zinc-900'
                  }`}
                >
                  {item.label}
                </a>
              )}
            </div>
          ))}
        </div>

        <div className="mt-8 space-y-4">
          <a
            href={NAP.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 w-full bg-green-500 hover:bg-green-600 text-white font-bold py-4 rounded-lg transition-colors"
          >
            <MessageCircle className="w-5 h-5" />
            WhatsApp
          </a>
          <a
            href={NAP.phoneTel}
            className={`flex items-center justify-center gap-2 w-full font-bold py-4 rounded-lg transition-colors ${
              isHomePage
                ? 'bg-white/10 hover:bg-white/20 text-white border border-white/30'
                : 'bg-zinc-100 hover:bg-zinc-200 text-zinc-900'
            }`}
          >
            <Phone className="w-5 h-5" />
            604 910 611
          </a>
        </div>
      </div>
    </div>
  );
}
