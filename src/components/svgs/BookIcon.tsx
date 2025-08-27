import React from 'react';

interface BookIconProps {
  className?: string;
}

export default function BookIcon({ className }: BookIconProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4 4.5C4 3.57193 4.89543 3 6 3H18C19.1046 3 20 3.57193 20 4.5V19.5C20 20.4281 19.1046 21 18 21H6C4.89543 21 4 20.4281 4 19.5V4.5Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8 7H16M8 11H16M8 15H12"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
