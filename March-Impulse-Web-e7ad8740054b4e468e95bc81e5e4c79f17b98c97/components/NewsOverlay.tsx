import React from 'react';
import { ArrowUpRight } from 'lucide-react';

// This component is self-responsive: it renders the mobile sheet (xl:hidden) and the
// desktop grid (hidden xl:block) from a single mount, so it should be placed on the page
// exactly once. The optional `mobile` prop is retained only for backwards-compatibility
// with legacy callers and is intentionally ignored.
interface NewsOverlayProps {
    mobile?: boolean;
}

export default function NewsOverlay(_props: NewsOverlayProps = {}) {
  const items = [
    {
      label: "Cambridge",
      title: "100% de aprobados en exámenes Cambridge 2024-2025.",
      action: "Ver Exámenes",
      href: "/examenes-cambridge"
    },
    {
      label: "Linguaskill",
      title: "Certificado oficial en 48 horas. Centro autorizado.",
      action: "Más Info",
      href: "/linguaskill"
    },
    {
      label: "Prueba Gratis",
      title: "Reserva tu clase de prueba gratuita y sin compromiso.",
      action: "Reservar",
      href: "/reservar-clase"
    }
  ];

  return (
    <>
      {/* MOBILE & TABLET: condensed sheet (hidden on XL+) */}
      <div className="xl:hidden">
        <div className="bg-white rounded-t-3xl shadow-[0_-10px_40px_rgba(0,0,0,0.2)] pb-4 pt-2">
          <div className="w-12 h-1.5 bg-zinc-200 rounded-full mx-auto mt-3 mb-1"></div>
          <section className="w-full px-6 py-2">
            <div className="flex flex-col gap-6">
              {items.slice(0, 2).map((item, index) => (
                <a key={index} href={item.href} className="group cursor-pointer">
                  <div className="flex justify-between items-start mb-1">
                    <span className="text-accent-blue text-[10px] font-bold tracking-widest uppercase bg-blue-50 px-2 py-0.5 rounded-sm">
                      {item.label}
                    </span>
                    {index === 0 && <ArrowUpRight className="w-4 h-4 text-zinc-300" />}
                  </div>
                  <p className="text-zinc-900 text-lg font-bold leading-tight mb-1">
                    {item.title}
                  </p>
                </a>
              ))}
              <div className="text-center pt-2 border-t border-zinc-100">
                <span className="text-xs font-bold text-zinc-400 uppercase tracking-widest">Desliza para más</span>
              </div>
            </div>
          </section>
        </div>
      </div>

      {/* DESKTOP: grid layout (hidden below XL) */}
      <div className="hidden xl:block">
        <section className="w-full bg-white border-b border-zinc-100">
          <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-zinc-100 container mx-auto border-x border-zinc-100 max-w-7xl">
            {items.map((item, index) => (
              <a key={index} href={item.href} className="p-8 md:p-12 group cursor-pointer hover:bg-zinc-50 transition-colors">
                <div className="flex justify-between items-start mb-4">
                  <span className="text-accent-blue text-xs font-bold tracking-widest uppercase bg-blue-50 px-2 py-1 rounded-sm">
                    {item.label}
                  </span>
                  <ArrowUpRight className="w-5 h-5 text-zinc-300 group-hover:text-accent-blue transition-colors" />
                </div>
                <p className="text-zinc-900 text-xl font-medium leading-snug mb-2">
                  {item.title}
                </p>
                <span className="text-zinc-400 text-sm font-medium group-hover:text-zinc-900 transition-colors inline-block mt-4 border-b border-transparent group-hover:border-zinc-900 pb-0.5">
                  {item.action}
                </span>
              </a>
            ))}
          </div>
        </section>
      </div>
    </>
  );
}
