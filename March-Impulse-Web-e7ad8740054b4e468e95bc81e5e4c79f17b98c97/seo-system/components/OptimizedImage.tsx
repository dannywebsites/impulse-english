import React from 'react';

interface ImageSize {
  webp: string;
  jpg: string;
  width: number;
}

interface ImageData {
  name: string;
  alt: string;
  altEn?: string;
  category: string;
  sizes: {
    sm: ImageSize;
    md: ImageSize;
    lg: ImageSize;
    xl: ImageSize;
  };
}

interface OptimizedImageProps {
  image: ImageData;
  className?: string;
  loading?: 'lazy' | 'eager';
  priority?: boolean;
  sizes?: string;
  aspectRatio?: string;
  objectFit?: 'cover' | 'contain' | 'fill' | 'none';
  onLoad?: () => void;
}

/**
 * OptimizedImage Component
 *
 * Renders responsive images with:
 * - WebP format with JPEG fallback
 * - Multiple sizes for responsive loading
 * - Proper SEO alt tags
 * - Lazy loading by default
 * - srcset for browser optimization
 *
 * WordPress Compatible: The same srcset/sizes pattern works in WordPress
 * with the wp_get_attachment_image_srcset() function
 */
export default function OptimizedImage({
  image,
  className = '',
  loading = 'lazy',
  priority = false,
  sizes = '(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw',
  aspectRatio,
  objectFit = 'cover',
  onLoad
}: OptimizedImageProps) {
  const { sm, md, lg, xl } = image.sizes;

  // Build srcset strings
  const webpSrcSet = `${sm.webp} 400w, ${md.webp} 800w, ${lg.webp} 1200w, ${xl.webp} 1920w`;
  const jpegSrcSet = `${sm.jpg} 400w, ${md.jpg} 800w, ${lg.jpg} 1200w, ${xl.jpg} 1920w`;

  const imgStyle: React.CSSProperties = {
    objectFit,
    ...(aspectRatio ? { aspectRatio } : {})
  };

  return (
    <picture>
      {/* WebP source - modern browsers */}
      <source
        type="image/webp"
        srcSet={webpSrcSet}
        sizes={sizes}
      />
      {/* JPEG fallback - older browsers */}
      <source
        type="image/jpeg"
        srcSet={jpegSrcSet}
        sizes={sizes}
      />
      {/* Fallback img element */}
      <img
        src={md.jpg}
        srcSet={jpegSrcSet}
        sizes={sizes}
        alt={image.alt}
        className={className}
        loading={priority ? 'eager' : loading}
        decoding={priority ? 'sync' : 'async'}
        fetchPriority={priority ? 'high' : 'auto'}
        style={imgStyle}
        onLoad={onLoad}
        // SEO attributes
        itemProp="image"
      />
    </picture>
  );
}

/**
 * Helper component for background images with WebP support
 * Useful for hero sections
 */
interface OptimizedBackgroundProps {
  image: ImageData;
  className?: string;
  children?: React.ReactNode;
  overlay?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
}

export function OptimizedBackground({
  image,
  className = '',
  children,
  overlay = 'bg-black/40',
  size = 'xl'
}: OptimizedBackgroundProps) {
  const imgSrc = image.sizes[size];

  return (
    <div className={`relative ${className}`}>
      {/* Background image container */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${imgSrc.webp}), url(${imgSrc.jpg})`
        }}
        role="img"
        aria-label={image.alt}
      />
      {/* Overlay */}
      {overlay && <div className={`absolute inset-0 ${overlay}`} />}
      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
}

/**
 * SEO-optimized figure component with caption
 * Good for article images
 */
interface OptimizedFigureProps extends OptimizedImageProps {
  caption?: string;
  captionClassName?: string;
}

export function OptimizedFigure({
  image,
  caption,
  captionClassName = 'text-sm text-zinc-500 mt-2',
  ...props
}: OptimizedFigureProps) {
  return (
    <figure itemScope itemType="https://schema.org/ImageObject">
      <OptimizedImage image={image} {...props} />
      {caption && (
        <figcaption className={captionClassName} itemProp="caption">
          {caption}
        </figcaption>
      )}
      {/* Hidden SEO metadata */}
      <meta itemProp="name" content={image.name} />
      <meta itemProp="description" content={image.alt} />
    </figure>
  );
}
