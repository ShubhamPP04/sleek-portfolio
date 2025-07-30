import React from 'react';

export default function MusicOff({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth="1.5"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M9 9l6.5-2m0 0v3.5M15.5 7v.5m0-.5a2.25 2.25 0 011.632 2.163l.277.79a1.803 1.803 0 01-.99 2.34l-2.31.66A2.25 2.25 0 0113.5 15.5v-8z"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3 3l18 18"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M9 15.553v-6m0 6v3.75a2.25 2.25 0 01-1.632 2.163l-1.32.377a1.803 1.803 0 01-.99-3.467l2.31-.66A2.25 2.25 0 009 15.553z"
        opacity="0.6"
      />
    </svg>
  );
}
