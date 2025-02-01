import React from 'react';
import Button from './Button';

interface ValentineCardProps {
  onYes: () => void;
  onNo: () => void;
}

export default function ValentineCard({ onYes, onNo }: ValentineCardProps) {
  return (
    <div className="text-center">
      {/* Título con animación de latido */}
      <h1 className="text-4xl md:text-5xl font-bold text-pink-800 animate-pulse">
        ¿Quieres ser mi San Valentín? 💖
      </h1>
      
      {/* Contenedor de botones con animación de entrada */}
      <div className="flex justify-center gap-4 mt-8 animate-fade-in-up">
        <Button
          onClick={onYes}
          className="bg-pink-500 hover:bg-pink-600 text-white transform transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-pink-500/50"
        >
          ¡Sí!
        </Button>
        
        <Button
          onClick={onNo}
          className="bg-gray-300 hover:bg-gray-400 text-gray-800 transform transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-gray-400/50"
        >
          No
        </Button>
      </div>

      {/* Efecto de corazones flotantes */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        {[...Array(10)].map((_, i) => (
          <div
            key={i}
            className="absolute text-2xl text-pink-500 animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 2}s`,
            }}
          >
            ❤️
          </div>
        ))}
      </div>
    </div>
  );
}