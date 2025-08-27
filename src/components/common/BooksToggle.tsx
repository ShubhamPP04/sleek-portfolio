'use client';

import React from 'react';
import { Link } from 'next-view-transitions';
import BookIcon from '../svgs/BookIcon';

export default function BooksToggle() {
  return (
    <div
      className="group fixed top-4 left-4 z-[60] w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16"
      style={{
        top: 'max(1rem, env(safe-area-inset-top) + 1rem)',
        left: 'max(1rem, env(safe-area-inset-left) + 1rem)',
      }}
    >
      <Link
        href="/books"
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
          focus:outline-none focus:ring-2 focus:ring-[#0077b6]/50
          opacity-0 -translate-x-2 scale-95 pointer-events-none
          group-hover:opacity-100 group-hover:translate-x-0 group-hover:scale-100 group-hover:pointer-events-auto
          group-active:opacity-100 group-active:translate-x-0 group-active:scale-100 group-active:pointer-events-auto
        `}
        aria-label="View Books Collection"
        title="Books Collection"
      >
        <BookIcon className="w-8 h-8 transition-all duration-300 group-hover:scale-110" />
      </Link>
    </div>
  );
}
