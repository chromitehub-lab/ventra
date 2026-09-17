import React from 'react';

interface VentraLogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  showWordmark?: boolean;
  lightMode?: boolean;
}

export default function VentraLogo({
  className = '',
  size = 'md',
  showWordmark = true,
  lightMode = false,
}: VentraLogoProps) {
  const iconDimensions = {
    sm: { width: 28, height: 28 },
    md: { width: 36, height: 36 },
    lg: { width: 44, height: 44 },
  }[size];

  const textStyles = {
    sm: 'text-lg tracking-[0.08em]',
    md: 'text-2xl tracking-[0.08em]',
    lg: 'text-3xl tracking-[0.1em]',
  }[size];

  return (
    <div className={`inline-flex items-center gap-2.5 sm:gap-3 select-none group cursor-pointer ${className}`}>
      {/* Sleek, Iconic Geometric "V" Monogram */}
      <div 
        className="shrink-0 relative flex items-center justify-center transition-transform duration-300 group-hover:scale-105"
        style={{ width: iconDimensions.width, height: iconDimensions.height }}
      >
        <svg
          viewBox="0 0 48 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full drop-shadow-sm"
        >
          <defs>
            {/* Left Stem: Deep Royal to Sapphire Blue */}
            <linearGradient id="ventra-v-left" x1="6" y1="4" x2="24" y2="44" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#1E40AF" />
              <stop offset="50%" stopColor="#2563EB" />
              <stop offset="100%" stopColor="#071B41" />
            </linearGradient>

            {/* Right Wing: Luminous Emerald to Cyan Accent */}
            <linearGradient id="ventra-v-right" x1="20" y1="44" x2="44" y2="4" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#0D9488" />
              <stop offset="45%" stopColor="#08B878" />
              <stop offset="100%" stopColor="#38BDF8" />
            </linearGradient>

            {/* Facet Sheen Gradient */}
            <linearGradient id="ventra-v-sheen" x1="10" y1="6" x2="38" y2="38" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.45" />
              <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0" />
            </linearGradient>
          </defs>

          {/* Left Wing / Apex */}
          <path
            d="M 6 6 L 15.5 6 L 24 32.5 L 17.5 42 L 6 6 Z"
            fill="url(#ventra-v-left)"
          />

          {/* Right Ascending Wing with Geometric Fold */}
          <path
            d="M 42 6 L 32.5 6 L 21 34.5 L 26.5 42 L 42 6 Z"
            fill="url(#ventra-v-right)"
          />

          {/* Dynamic Center Vertex Joint */}
          <path
            d="M 17.5 42 L 24 32.5 L 26.5 42 L 22 45 Z"
            fill="#065F46"
          />

          {/* Geometric Top Light Refraction */}
          <path
            d="M 6 6 L 15.5 6 L 11 18 L 6 6 Z"
            fill="url(#ventra-v-sheen)"
          />
        </svg>
      </div>

      {showWordmark && (
        <span
          className={`font-black uppercase font-sans ${textStyles} ${
            lightMode ? 'text-white' : 'text-[#071B41]'
          }`}
          style={{ letterSpacing: '0.08em' }}
        >
          VENTRA
        </span>
      )}
    </div>
  );
}
