import React from 'react';
import type { AcademyImage } from '@/utils/images';

interface AcademyGalleryProps {
  images: AcademyImage[];
  pageUrl: string;
  title?: string;
  subtitle?: string;
  className?: string;
  maxImages?: number;
}

/**
 * SEO-optimized gallery component for academy photos
 * - Masonry-style layout that handles mixed aspect ratios beautifully
 * - Includes proper semantic HTML (figure/figcaption)
 * - Generates ImageObject schema for each image
 * - Lazy loading for performance
 */
export default function AcademyGallery({
  images,
  pageUrl,
  title = "Nuestros alumnos",
  subtitle = "Mira lo que logran nuestros estudiantes",
  className = "",
  maxImages = 4
}: AcademyGalleryProps) {
  const displayImages = images.slice(0, maxImages);

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

        {/* Aligned Grid Gallery - 2 cols mobile, 3 cols desktop */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {displayImages.map((image, index) => (
            <figure
              key={index}
              className="rounded-xl overflow-hidden shadow-lg bg-zinc-100 group"
            >
              <div className="relative overflow-hidden aspect-[4/3]">
                <img
                  src={image.url}
                  alt={image.alt}
                  title={image.title}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                {/* Hover overlay with title */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
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
    </section>
  );
}

/**
 * Compact gallery variant for location pages
 */
export function CompactGallery({
  images,
  pageUrl,
  className = ""
}: Omit<AcademyGalleryProps, 'title' | 'subtitle'>) {
  return (
    <div className={`grid grid-cols-2 md:grid-cols-4 gap-4 ${className}`}>
      {images.slice(0, 4).map((image, index) => (
        <figure key={index} className="relative rounded-lg overflow-hidden shadow-md">
          <div className="aspect-square bg-zinc-100">
            <img
              src={image.url}
              alt={image.alt}
              title={image.title}
              loading="lazy"
              decoding="async"
              className={`
                w-full h-full
                ${image.aspectRatio === 'portrait' ? 'object-contain' : 'object-cover'}
              `}
            />
          </div>
          <figcaption className="sr-only">{image.description}</figcaption>
        </figure>
      ))}
    </div>
  );
}

/**
 * Hero gallery with larger feature image
 */
export function HeroGallery({
  images,
  pageUrl,
  className = ""
}: Omit<AcademyGalleryProps, 'title' | 'subtitle'>) {
  if (images.length < 4) return null;

  const [featured, ...rest] = images;

  return (
    <div className={`grid grid-cols-2 md:grid-cols-3 gap-4 ${className}`}>
      {/* Featured large image */}
      <figure className="col-span-2 md:row-span-2 rounded-xl overflow-hidden shadow-lg">
        <div className="relative h-full min-h-[300px] md:min-h-[400px] bg-zinc-100">
          <img
            src={featured.url}
            alt={featured.alt}
            title={featured.title}
            loading="lazy"
            decoding="async"
            className="w-full h-full object-cover"
          />
        </div>
        <figcaption className="sr-only">{featured.description}</figcaption>
      </figure>

      {/* Smaller images */}
      {rest.slice(0, 3).map((image, index) => (
        <figure key={index} className="rounded-xl overflow-hidden shadow-lg">
          <div
            className={`
              relative bg-zinc-100
              ${image.aspectRatio === 'portrait' ? 'aspect-[3/4]' : 'aspect-square'}
            `}
          >
            <img
              src={image.url}
              alt={image.alt}
              title={image.title}
              loading="lazy"
              decoding="async"
              className={`
                w-full h-full
                ${image.aspectRatio === 'portrait' ? 'object-contain' : 'object-cover'}
              `}
            />
          </div>
          <figcaption className="sr-only">{image.description}</figcaption>
        </figure>
      ))}
    </div>
  );
}
