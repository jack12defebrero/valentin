import React from 'react';

// Define la interfaz para las propiedades del botón
interface ButtonProps {
  children: React.ReactNode;
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void; // Aseguramos que el tipo de onClick sea correcto
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
