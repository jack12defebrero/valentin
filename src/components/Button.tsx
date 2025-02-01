import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  onClick: () => void;
  className?: string;
}

export default function Button({ children, onClick, className }: ButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`px-8 py-3 rounded-full text-xl font-semibold transition-all transform hover:scale-105 ${className}`}
    >
      {children}
    </button>
  );
}