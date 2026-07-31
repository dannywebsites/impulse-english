import React, { useState, useRef, useEffect } from 'react';
import { Play } from 'lucide-react';

interface LazyVideoProps {
  videoId: string;
  title: string;
  thumbnailUrl?: string;
  className?: string;
  /** 9:16 framing for YouTube Shorts — a vertical clip letterboxes badly in a 16:9 box. */
  vertical?: boolean;
}

/**
 * LazyVideo Component - Performance-optimized YouTube video embedding
 *
 * Best Practices Implemented:
 * 1. Lazy loading - Video iframe only loads when user clicks play
 * 2. Intersection Observer - Component only becomes interactive when visible
 * 3. Thumbnail placeholder - Shows static image until user interaction
 * 4. Below the fold optimization - Ideal for content lower on the page
 * 5. Reduced initial page weight - No iframe loaded on page load
 *
 * Usage: Place videos below the fold (after first viewport) for best performance
 */
export default function LazyVideo({ videoId, title, thumbnailUrl, className = '', vertical = false }: LazyVideoProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // Use custom thumbnail or YouTube's default high-quality thumbnail. Shorts need
  // oardefault (the 1080x1920 original-aspect frame) — maxresdefault is a 16:9
  // centre-crop of the vertical frame and cuts heads off inside a 9:16 box.
  const thumbnail =
    thumbnailUrl ||
    `https://img.youtube.com/vi/${videoId}/${vertical ? 'oardefault' : 'maxresdefault'}.jpg`;

  // Intersection Observer for lazy initialization
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.disconnect();
          }
        });
      },
      {
        rootMargin: '100px', // Start loading slightly before entering viewport
        threshold: 0.1
      }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleClick = () => {
    setIsLoaded(true);
  };

  return (
    <div
      ref={containerRef}
      className={`relative ${vertical ? 'aspect-[9/16]' : 'aspect-video'} bg-zinc-900 rounded-xl overflow-hidden ${className}`}
    >
      {!isLoaded ? (
        // Thumbnail placeholder with play button
        <button
          onClick={handleClick}
          className="w-full h-full group cursor-pointer relative"
          aria-label={`Play video: ${title}`}
        >
          {isVisible && (
            <img
              src={thumbnail}
              alt={title}
              className="w-full h-full object-cover"
              loading="lazy"
            />
          )}

          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-accent-blue-950/35" />

          {/* Play button */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-16 h-16 md:w-20 md:h-20 bg-brand-red rounded-full flex items-center justify-center group-hover:bg-brand-red-600 group-hover:scale-110 transition-all duration-300 shadow-panel">
              <Play className="w-8 h-8 md:w-10 md:h-10 text-white fill-white ml-1" />
            </div>
          </div>

          {/* Video title */}
          <div className="absolute bottom-4 left-4 right-4">
            <p className="text-white font-medium text-sm md:text-base line-clamp-2">{title}</p>
          </div>
        </button>
      ) : (
        // Actual YouTube iframe - only loaded after user clicks
        <iframe
          src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="w-full h-full"
          loading="lazy"
        />
      )}
    </div>
  );
}
