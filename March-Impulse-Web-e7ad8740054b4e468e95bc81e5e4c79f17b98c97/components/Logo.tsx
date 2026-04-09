import React from 'react';
import { NAP } from '../utils/napData';

interface LogoProps {
  className?: string;
  dark?: boolean;
}

export default function Logo({
  className = "",
  dark = false
}: LogoProps) {
  const mainColor = dark ? "white" : "#0F2C59"; // accent-blue
  const secondaryColor = dark ? "rgba(255,255,255,0.8)" : "#0F2C59";
  const [brandWord, ...rest] = NAP.shortName.split(' ');
  const secondWord = rest.join(' ');

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {/* Icon Graphic */}
      <div className="w-10 h-10 relative flex-shrink-0">
        <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
            {/* Main Box */}
            <rect x="5" y="5" width="90" height="90" rx="2" fill={mainColor} />

            {/* Simplified geometric pattern - Minimalist Flag/Structure */}
            <path d="M5 5 L95 95" stroke={dark ? "#0F2C59" : "white"} strokeWidth="4" />
            <path d="M95 5 L5 95" stroke={dark ? "#0F2C59" : "white"} strokeWidth="4" />

            {/* Center cutout */}
            <rect x="40" y="40" width="20" height="20" fill={dark ? "#0F2C59" : "white"} />
        </svg>
      </div>

      {/* Text Graphic */}
      <div className="flex flex-col leading-none justify-center">
        <span className={`font-bold text-xl tracking-tight uppercase ${dark ? "text-white" : "text-accent-blue"}`}>{brandWord}</span>
        <span className={`font-medium text-[0.6rem] tracking-[0.2em] uppercase ${dark ? "text-white/80" : "text-zinc-500"}`}>{secondWord}</span>
      </div>
    </div>
  );
}
