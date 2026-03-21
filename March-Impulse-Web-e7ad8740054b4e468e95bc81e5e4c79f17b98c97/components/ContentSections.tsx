import React from 'react';

interface SectionIntroProps {
  title: string;
  text: string;
}

export function SectionIntro({ title, text }: SectionIntroProps) {
  return (
    <section className="w-full flex flex-col items-center text-center max-w-4xl mx-auto px-4">
      <h1 className="text-5xl md:text-7xl font-bold text-accent-blue tracking-tight mb-8">
        {title}
      </h1>
      <p className="text-lg md:text-xl text-zinc-600 leading-relaxed font-normal max-w-3xl">
        {text}
      </p>
    </section>
  );
}

interface SectionSplitProps {
  image: string;
  title: string;
  subtitle: string;
  text: string[];
  align?: 'left' | 'right';
}

export function SectionSplit({ image, title, subtitle, text, align = 'left' }: SectionSplitProps) {
  return (
    <section className="w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-center">
      {/* Image Column - Reduced size (5 cols) and constrained aspect ratio */}
      <div className={`w-full lg:col-span-5 aspect-[4/3] bg-zinc-100 rounded-lg overflow-hidden shadow-sm ${align === 'right' ? 'lg:order-2' : 'lg:order-1'}`}>
        <img
            src={image}
            alt={title}
            className="w-full h-full object-cover"
            loading="lazy"
        />
      </div>

      {/* Content Column - Increased width relative to image (7 cols) */}
      <div className={`flex flex-col lg:col-span-7 ${align === 'right' ? 'lg:order-1' : 'lg:order-2'}`}>
        <h2 className="text-4xl md:text-5xl font-bold text-accent-blue tracking-tight mb-8">
            {title}
        </h2>

        <h3 className="text-xl md:text-2xl font-bold text-accent-blue/90 mb-8 leading-snug">
            {subtitle}
        </h3>

        <div className="space-y-6 text-zinc-600 leading-relaxed text-base md:text-lg">
            {text.map((paragraph, idx) => (
                <p key={idx}>{paragraph}</p>
            ))}
        </div>
      </div>
    </section>
  );
}

interface SectionSimpleProps {
  title: string;
  text: string;
}

export function SectionSimple({ title, text }: SectionSimpleProps) {
  return (
    <section className="w-full max-w-4xl mx-auto px-4 text-center py-12 md:py-16">
        <h2 className="text-3xl md:text-4xl font-bold text-accent-blue tracking-tight mb-8">
            {title}
        </h2>
        <p className="text-lg md:text-xl text-zinc-600 leading-relaxed font-normal">
            {text}
        </p>
    </section>
  );
}
