import React from 'react';
import { ArrowUpRight } from 'lucide-react';

interface NewsOverlayProps {
    mobile?: boolean;
}

export default function NewsOverlay({ mobile = false }: NewsOverlayProps) {
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

  // Mobile View: Condensed list, stack vertically without borders to look clean in sheet
  if (mobile) {
      return (
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
                        <h3 className="text-zinc-900 text-lg font-bold leading-tight mb-1">
                            {item.title}
                        </h3>
                    </a>
                ))}
                <div className="text-center pt-2 border-t border-zinc-100">
                    <span className="text-xs font-bold text-zinc-400 uppercase tracking-widest">Desliza para más</span>
                </div>
            </div>
        </section>
      );
  }

  // Desktop View: Grid Layout
  return (
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
            <h3 className="text-zinc-900 text-xl font-medium leading-snug mb-2">
              {item.title}
            </h3>
            <span className="text-zinc-400 text-sm font-medium group-hover:text-zinc-900 transition-colors inline-block mt-4 border-b border-transparent group-hover:border-zinc-900 pb-0.5">
                {item.action}
            </span>
          </a>
        ))}
      </div>
    </section>
  );
}
