import React from 'react';

/**
 * The real WhatsApp mark.
 *
 * Every WhatsApp CTA on the site used to borrow a lucide icon — `MessageCircle`
 * (an empty speech bubble) or `Phone` (a handset). Neither is the WhatsApp logo,
 * which is why the buttons read as generic. This is the actual glyph: the bubble
 * with the notched tail and the handset inside it.
 *
 * Two variants:
 * - `glyph` (default) — monochrome, inherits `currentColor`. Use on the green
 *   `bg-whatsapp` buttons, where the mark should be white. This is what
 *   WhatsApp's own brand guidance specifies for a solid green button.
 * - `badge` — the full lock-up: white glyph inside a green (#25D366) circle.
 *   Use on white or light surfaces where there is no green button behind it.
 *
 * Drop-in compatible with the lucide icons it replaces: pass `className` for
 * sizing (`w-5 h-5`) exactly as before.
 */

interface WhatsAppIconProps {
  className?: string;
  variant?: 'glyph' | 'badge';
  /** Set a label to expose the icon to screen readers; decorative by default. */
  title?: string;
}

// Simple Icons' WhatsApp glyph (CC0), drawn for a 24×24 viewBox.
const GLYPH_PATH =
  'M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488';

export default function WhatsAppIcon({
  className = '',
  variant = 'glyph',
  title,
}: WhatsAppIconProps) {
  const a11y = title
    ? { role: 'img' as const, 'aria-label': title }
    : { 'aria-hidden': true as const, focusable: 'false' as const };

  if (variant === 'badge') {
    return (
      <svg
        viewBox="0 0 32 32"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
        {...a11y}
      >
        <circle cx="16" cy="16" r="16" fill="#25D366" />
        {/* 24×24 glyph scaled to 20px and centred inside the 32px circle. */}
        <g transform="translate(6 6) scale(0.8333)" fill="#FFFFFF">
          <path d={GLYPH_PATH} />
        </g>
      </svg>
    );
  }

  return (
    <svg
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      className={className}
      {...a11y}
    >
      <path d={GLYPH_PATH} />
    </svg>
  );
}
