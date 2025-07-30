import React from 'react';

interface ModernMusicIconProps {
  className?: string;
  isPlaying?: boolean;
}

export default function ModernMusicIcon({ className = "w-6 h-6", isPlaying = false }: ModernMusicIconProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Background circle with black/white gradient */}
      <defs>
        <linearGradient id="musicGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#000000" />
          <stop offset="100%" stopColor="#374151" />
        </linearGradient>
        <linearGradient id="pauseGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#6B7280" />
          <stop offset="100%" stopColor="#9CA3AF" />
        </linearGradient>
      </defs>
      
      {/* Outer circle */}
      <circle 
        cx="12" 
        cy="12" 
        r="10" 
        fill={isPlaying ? "url(#musicGradient)" : "url(#pauseGradient)"}
        className="transition-all duration-300"
      />
      
      {/* Inner elements based on state */}
      {isPlaying ? (
        // Playing state - pause bars
        <g>
          <rect x="9" y="8" width="2.5" height="8" rx="1.25" fill="white" />
          <rect x="12.5" y="8" width="2.5" height="8" rx="1.25" fill="white" />
        </g>
      ) : (
        // Paused state - play triangle
        <path 
          d="M9 7.5L16.5 12L9 16.5V7.5Z" 
          fill="white"
          className="transition-all duration-300"
        />
      )}
      
      {/* Sound waves when playing */}
      {isPlaying && (
        <g className="animate-pulse">
          <path 
            d="M17.5 9.5C18 10 18 11 18 12C18 13 18 14 17.5 14.5" 
            stroke="white" 
            strokeWidth="1.5" 
            strokeLinecap="round"
            fill="none"
            opacity="0.8"
          />
          <path 
            d="M19 8C19.5 9 20 10.5 20 12C20 13.5 19.5 15 19 16" 
            stroke="white" 
            strokeWidth="1.5" 
            strokeLinecap="round"
            fill="none"
            opacity="0.6"
          />
        </g>
      )}
    </svg>
  );
}
