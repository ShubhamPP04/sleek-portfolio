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
        // Music is ready but won't auto-play
      };

      const handlePlay = () => setIsPlaying(true);
      const handlePause = () => setIsPlaying(false);

      audioRef.current.addEventListener('canplaythrough', handleCanPlay);
      audioRef.current.addEventListener('play', handlePlay);
      audioRef.current.addEventListener('pause', handlePause);

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
    <div
      className="group fixed top-4 right-4 z-[60] w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16"
      style={{
        top: 'max(1rem, env(safe-area-inset-top) + 1rem)',
        right: 'max(1rem, env(safe-area-inset-right) + 1rem)',
      }}
    >
      <button
        onClick={toggleMusic}
        onTouchStart={(e) => e.preventDefault()}
        disabled={isLoading}
        className={`
          group relative flex items-center justify-center 
          w-full h-full
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
          opacity-0 translate-x-2 scale-95 pointer-events-none
          group-hover:opacity-100 group-hover:translate-x-0 group-hover:scale-100 group-hover:pointer-events-auto
          group-active:opacity-100 group-active:translate-x-0 group-active:scale-100 group-active:pointer-events-auto
          focus-visible:opacity-100 focus-visible:translate-x-0 focus-visible:scale-100 focus-visible:pointer-events-auto
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
