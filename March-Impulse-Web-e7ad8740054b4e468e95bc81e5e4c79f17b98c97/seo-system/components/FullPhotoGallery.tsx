import React from 'react';
import { AcademyImage, generateImageSchema } from '../../utils/images';
import SchemaMarkup from './SchemaMarkup';

interface FullPhotoGalleryProps {
  images: AcademyImage[];
  pageUrl: string;
  title?: string;
  subtitle?: string;
  className?: string;
}

/**
 * Full Photo Gallery - displays images at their natural size without cropping
 * - Each image is displayed in full, fitted to container width
 * - No cropping or distortion
 * - Clean, organized grid layout
 * - Includes proper semantic HTML (figure/figcaption)
 * - Generates ImageObject schema for each image
 */
export default function FullPhotoGallery({
  images,
  pageUrl,
  title = "Nuestros alumnos",
  subtitle = "Mira lo que logran nuestros estudiantes",
  className = ""
}: FullPhotoGalleryProps) {
  const imageSchemas = images.map(img => generateImageSchema(img, pageUrl));

  return (
    <section className={`py-16 md:py-20 px-6 bg-white ${className}`}>
      <div className="container mx-auto max-w-6xl">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 mb-4">
            {title}
          </h2>
          {subtitle && (
            <p className="text-zinc-600 text-lg">{subtitle}</p>
          )}
        </div>

        {/* Photo Grid - organized layout with consistent heights */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-4">
          {images.map((image, index) => (
            <figure
              key={index}
              className="rounded-xl overflow-hidden shadow-lg bg-zinc-100 group"
            >
              {/* Image container - consistent height with cover */}
              <div className="relative w-full aspect-[4/3]">
                <img
                  src={image.url}
                  alt={image.alt}
                  title={image.title}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-500"
                />
                {/* Hover overlay with title */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end pointer-events-none">
                  <p className="text-white text-sm font-medium p-4 line-clamp-2">
                    {image.title}
                  </p>
                </div>
              </div>

              {/* Caption - Hidden visually but available for SEO */}
              <figcaption className="sr-only">
                {image.description}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>

      {/* ImageObject Schema for each image */}
      <SchemaMarkup schema={imageSchemas} />
    </section>
  );
}
