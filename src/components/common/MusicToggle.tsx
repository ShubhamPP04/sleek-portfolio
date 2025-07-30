'use client';

import React, { useState, useRef, useEffect } from 'react';
import MusicOn from '../svgs/MusicOn';
import MusicOff from '../svgs/MusicOff';

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
    <div className="fixed top-4 right-4 z-50">
      <button
        onClick={toggleMusic}
        disabled={isLoading}
        className={`
          group relative flex items-center justify-center 
          w-12 h-12 rounded-full 
          backdrop-blur-xl bg-white/90 dark:bg-gray-900/90 
          border border-white/20 dark:border-gray-700/50
          shadow-lg hover:shadow-xl 
          transition-all duration-300 ease-in-out
          hover:scale-105 active:scale-95
          text-gray-700 dark:text-gray-300 
          hover:text-gray-900 dark:hover:text-white
          ${isLoading ? 'animate-pulse' : ''}
          ${!isPlaying && !isLoading ? 'ring-2 ring-blue-500/50 animate-pulse' : ''}
        `}
        aria-label={isPlaying ? 'Pause background music' : 'Play background music'}
        title={isLoading ? 'Loading music...' : (isPlaying ? 'Pause Music' : 'Play Music')}
      >
        {isLoading ? (
          <div className="w-5 h-5 border-2 border-current border-t-transparent rounded-full animate-spin" />
        ) : isPlaying ? (
          <MusicOn className="w-6 h-6 transition-transform group-hover:scale-110" />
        ) : (
          <MusicOff className="w-6 h-6 transition-transform group-hover:scale-110" />
        )}
        
        {/* Subtle pulsing ring when music is playing */}
        {isPlaying && (
          <div className="absolute inset-0 rounded-full ring-2 ring-green-500/30 animate-ping" />
        )}
      </button>
    </div>
  );
}
