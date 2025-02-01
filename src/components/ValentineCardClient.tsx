"use client";
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import ValentineCard from './ValentineCard';

export default function ValentineCardClient() {
  const router = useRouter();
  const [buttonPosition, setButtonPosition] = useState({ x: 0, y: 0 });
  const buttonWidth = 150; // Ancho aproximado del botón "No"
  const buttonHeight = 50; // Alto aproximado del botón "No"

  // Establece la posición inicial al montar el componente (por ejemplo, centrada en la pantalla)
  useEffect(() => {
    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;
    setButtonPosition({
      x: (windowWidth - buttonWidth) / 2,
      y: (windowHeight - buttonHeight) / 2,
    });
  }, []);

  // Función para mover el botón "No" de manera aleatoria al pasar el cursor
  const moveButton = () => {
    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;
    const newX = Math.random() * (windowWidth - buttonWidth);
    const newY = Math.random() * (windowHeight - buttonHeight);
    setButtonPosition({ x: newX, y: newY });
  };

  // Función para manejar el clic en "Sí" (redirige a la página /yes)
  const handleYes = () => {
    router.push('/yes');
  };

  // Función para manejar el clic en "No" (redirige a la página /no)
  const handleNo = () => {
    router.push('/no');
  };

  return (
    <ValentineCard
      onYes={handleYes}
      onNo={handleNo}
      buttonPosition={buttonPosition}
      onMouseEnterNo={moveButton}
    />
  );
}
