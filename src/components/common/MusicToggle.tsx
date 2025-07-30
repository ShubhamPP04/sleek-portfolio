'use client';

import React, { useState, useRef, useEffect } from 'react';
import ModernMusicIcon from '../svgs/ModernMusicIcon';

export default function MusicToggle() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      // Create audio element
      audioRef.current = new Audio('/music/F1.mp3');
      audioRef.current.loop = true;
      audioRef.current.volume = 0.75; // 75% volume
      audioRef.current.preload = 'auto';

      // Handle audio events
      const handleCanPlay = () => {
        setIsLoading(false);
        // Try to auto-play when audio is ready
        attemptAutoPlay();
      };

      const handlePlay = () => setIsPlaying(true);
      const handlePause = () => setIsPlaying(false);

      audioRef.current.addEventListener('canplaythrough', handleCanPlay);
      audioRef.current.addEventListener('play', handlePlay);
      audioRef.current.addEventListener('pause', handlePause);

      // Auto-play function
      const attemptAutoPlay = async () => {
        if (!audioRef.current) return;

        try {
          // Try direct autoplay
          await audioRef.current.play();
          console.log('Music started automatically');
        } catch {
          console.log('Auto-play blocked by browser - user interaction required');
          
          // Set up one-time user interaction listener
          const startOnFirstInteraction = async () => {
            try {
              if (audioRef.current && audioRef.current.paused) {
                await audioRef.current.play();
                console.log('Music started on user interaction');
              }
            } catch {
              console.log('Failed to start music even after interaction');
            }
            
            // Remove listeners after first attempt
            document.removeEventListener('click', startOnFirstInteraction);
            document.removeEventListener('keydown', startOnFirstInteraction);
            document.removeEventListener('touchstart', startOnFirstInteraction);
          };

          // Listen for any user interaction
          document.addEventListener('click', startOnFirstInteraction, { once: true });
          document.addEventListener('keydown', startOnFirstInteraction, { once: true });
          document.addEventListener('touchstart', startOnFirstInteraction, { once: true });
        }
      };

      // Cleanup function
      return () => {
        if (audioRef.current) {
          audioRef.current.removeEventListener('canplaythrough', handleCanPlay);
          audioRef.current.removeEventListener('play', handlePlay);
          audioRef.current.removeEventListener('pause', handlePause);
          audioRef.current.pause();
          audioRef.current = null;
        }
      };
    }
  }, []);

  const toggleMusic = async () => {
    if (!audioRef.current || isLoading) return;

    try {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        await audioRef.current.play();
      }
    } catch (error) {
      console.error('Error toggling music:', error);
    }
  };

  return (
    <div className="fixed top-4 right-4 z-[60]" style={{ top: 'max(1rem, env(safe-area-inset-top) + 1rem)', right: 'max(1rem, env(safe-area-inset-right) + 1rem)' }}>
      <button
        onClick={toggleMusic}
        onTouchStart={(e) => e.preventDefault()}
        disabled={isLoading}
        className={`
          group relative flex items-center justify-center 
          w-16 h-16 sm:w-12 sm:h-12 
          min-w-[64px] min-h-[64px] sm:min-w-[48px] sm:min-h-[48px]
          rounded-full 
          backdrop-blur-xl bg-white/95 dark:bg-gray-900/95 
          border-2 border-white/30 dark:border-gray-700/60
          transition-all duration-200 ease-in-out
          active:scale-90 hover:scale-105
          text-gray-700 dark:text-gray-300 
          hover:text-gray-900 dark:hover:text-white
          touch-manipulation 
          cursor-pointer
          focus:outline-none focus:ring-2 focus:ring-blue-500/50
          ${isLoading ? 'animate-pulse' : ''}
        `}
        aria-label={isPlaying ? 'Pause background music' : 'Play background music'}
        title={isLoading ? 'Loading music...' : (isPlaying ? 'Pause Music' : 'Play Music')}
      >
        {isLoading ? (
          <div className="w-5 h-5 border-2 border-current border-t-transparent rounded-full animate-spin" />
        ) : (
          <ModernMusicIcon 
            className="w-8 h-8 transition-all duration-300 group-hover:scale-110" 
            isPlaying={isPlaying}
          />
        )}
      </button>
    </div>
  );
}
