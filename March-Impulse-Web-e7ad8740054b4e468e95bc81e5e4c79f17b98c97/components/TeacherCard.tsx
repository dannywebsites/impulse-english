import React from 'react';

/**
 * "Quién da las clases" — a named person with a face, not a paragraph.
 *
 * Same shape as the block already shipped on the barrio pages
 * (pages/ubicaciones/MirasierraPage.tsx): 300px portrait beside the prose,
 * eyebrow + h2 + rule above it. E-E-A-T signal and the thing that makes the
 * section feel like part of the site rather than a text dump.
 *
 * Prose comes in as children so the copy stays in the page source, where
 * geo-audit.py's score_team() reads it.
 */

interface Props {
  heading: string;
  eyebrow?: string;
  /** Alt text must describe this page's context, not be reused verbatim. */
  imageAlt: string;
  /**
   * Portrait to show. Defaults to JP so every existing caller is unchanged.
   * The study-abroad pages front Daniel, not JP — the Ireland credential is his.
   */
  imageSrc?: string;
  children: React.ReactNode;
}

export default function TeacherCard({
  heading,
  eyebrow = 'Quién da las clases',
  imageAlt,
  imageSrc = '/images/academy/jp-director-estudios.webp',
  children,
}: Props) {
  return (
    <section className="section bg-white px-6">
      <div className="container-narrow">
        <div className="mb-10 max-w-2xl">
          <span className="eyebrow mb-4">{eyebrow}</span>
          <h2 className="t-h2 mb-5 text-zinc-900">{heading}</h2>
          <span className="rule"></span>
        </div>

        <div className="grid items-start gap-10 md:grid-cols-[280px_1fr]">
          <div className="aspect-[3/4] overflow-hidden rounded-2xl shadow-panel">
            <img
              src={imageSrc}
              alt={imageAlt}
              className="h-full w-full object-cover"
              loading="lazy"
              width={900}
              height={1200}
            />
          </div>
          <div className="t-body space-y-4 text-zinc-600">{children}</div>
        </div>
      </div>
    </section>
  );
}
