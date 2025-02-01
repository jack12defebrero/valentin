import React from 'react';

// Define la interfaz para las propiedades del botón
interface ButtonProps {
  children: React.ReactNode;
  onClick: () => void;
  onMouseEnter?: () => void;
  style?: React.CSSProperties;
  className?: string;
}

export default function Button({
  children,
  onClick,
  onMouseEnter,
  style,
  className,
}: ButtonProps) {
  return (
    <button
      onClick={onClick}
      onMouseEnter={onMouseEnter}
      style={style}
      className={`px-8 py-3 rounded-full text-xl font-semibold transition-all transform hover:scale-105 ${className}`}
    >
      {children}
    </button>
  );
}
