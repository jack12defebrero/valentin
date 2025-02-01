import React, { useState, useEffect, useRef } from 'react';
import Button from './Button';
import Tenor from '../components/Tenor';
import ToastNotification from './ToastNotification';

interface ValentineCardProps {
  onYes: () => void;
  onNo: () => void;
  buttonPosition: { x: number; y: number };
  onMouseEnterNo: () => void;
}

export default function ValentineCard({
  onYes,
  onNo,
  buttonPosition,
  onMouseEnterNo,
}: ValentineCardProps) {
  const [yesButtonText, setYesButtonText] = useState("¡Sí!");
  const [isMoving, setIsMoving] = useState(false);
  const [timeoutTriggered, setTimeoutTriggered] = useState(false);
  const [textIndex, setTextIndex] = useState(0); // Para llevar el control del índice de texto
  const [fadeOut, setFadeOut] = useState(false); // Estado para controlar la opacidad del texto
  const [isMobile, setIsMobile] = useState(false); // Estado para detectar pantallas pequeñas
  const moveTimeout = useRef<any>(null);

  // Texto alternativo para el botón "Sí"
  const alternateTexts = [
    "¡diras que shi!",
    "¡sabes hoy te vees muy linda! 😘",
    "¡ vamoss! ",
    "¡Vamos porque sigues diciendo que no! 😅",
  ];

  // Función para cambiar el texto del botón "Sí" uno por uno
  const changeYesButtonText = () => {
    setFadeOut(true); // Activar la transición de desvanecimiento
    setTimeout(() => {
      setYesButtonText(alternateTexts[textIndex]);
      setFadeOut(false); // Desactivar la transición de desvanecimiento
      setTextIndex((prevIndex) => (prevIndex + 1) % alternateTexts.length); // Cambiar al siguiente texto
    }, 300); // Tiempo que tarda en desvanecerse el texto (300ms)
  };

  // Función para detectar cuando el botón "No" empieza a moverse
  const handleNoMovement = () => {
    setIsMoving(true);
    setTimeoutTriggered(false);
    changeYesButtonText(); // Cambiar el texto de "Sí" cuando "No" se mueve

    // Resetear el tiempo de espera cuando el botón "No" se mueve
    if (moveTimeout.current) {
      clearTimeout(moveTimeout.current);
    }

    moveTimeout.current = setTimeout(() => {
      // Si el botón "No" no se mueve en 7 segundos, cambiar automáticamente el texto
      setTimeoutTriggered(true);
      changeYesButtonText();
    }, 7000); // 7 segundos para que se active automáticamente
  };

  // Detectar el tamaño de la pantalla
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768); // Ajusta el valor según tu necesidad
    };

    window.addEventListener('resize', handleResize);
    handleResize(); // Llamar a la función al montar el componente

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // Manejar el clic en el botón "No", pero solo redirigir si no es móvil
  const handleNoClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!isMobile) {
      onNo(); // Ejecuta la acción "onNo" solo si no es móvil
    }
    // Si es móvil, no hace nada, pero mantiene la interacción visual
  };

  return (
    <div className="text-center">
      <h1 className="text-4xl md:text-5xl font-bold text-pink-800 animate-pulse">
        ¿Quieres ser mi San Valentín? 💖
      </h1>

      <Tenor />

      <ToastNotification messages={alternateTexts} />
      <div className="flex justify-center gap-4 mt-8">
        {/* Botón "Sí" (estático) */}
        <Button
          onClick={onYes}
          className="bg-pink-500 hover:bg-pink-600 text-white px-8 py-3 rounded-full text-xl font-semibold shadow-lg transform transition-all duration-300 hover:scale-105"
        >
          <span
            className={`transition-opacity duration-300 ${
              fadeOut ? 'opacity-0' : 'opacity-100'
            }`}
          >
            {yesButtonText}
          </span>
        </Button>

        {/* Botón "No" que se mueve y se puede presionar en móviles pero no ejecuta la acción */}
        <Button
          onClick={handleNoClick} // Maneja el clic, pero solo ejecuta onNo si no es móvil
          onMouseEnter={() => {
            if (!isMobile) { // Solo si no es móvil
              onMouseEnterNo();
              handleNoMovement(); // Cambiar el texto del botón "Sí" cuando el botón "No" empieza a moverse
            }
          }}
          style={{
            position: 'absolute',
            left: `${buttonPosition.x}px`,
            top: `${buttonPosition.y}px`,
            transition: 'left 0.3s ease-out, top 0.3s ease-out', // Transición suave
          }}
          className={`bg-gray-300 hover:bg-gray-400 text-gray-800 px-8 py-3 rounded-full text-xl font-semibold shadow-lg transform hover:scale-105`}
        >
          No
        </Button>
      </div>
    </div>
  );
}
