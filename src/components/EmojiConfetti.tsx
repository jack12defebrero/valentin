import React from 'react';

interface EmojiConfettiProps {}

export default function EmojiConfetti({}: EmojiConfettiProps) {
  const totalEmojis = 40; // Número total de emojis generados

  const emojis = Array.from({ length: totalEmojis }).map((_, index) => {
    // Posición horizontal aleatoria (en porcentaje)
    const left = Math.random() * 100;
    // Retardo aleatorio (para darle variación al inicio de la animación)
    // Para los que rebotan, limitamos el delay para que no queden fuera demasiado tiempo.
    const delay = Math.random() * 2;
    // 70% de probabilidad para que el emoji se quede (rebote) y 30% para efecto infinito
    const isBounce = Math.random() < 0.7;
    // Tamaño: los que se quedan serán algo más grandes
    const fontSize = isBounce ? '3rem' : '2rem';
    // Rotación aleatoria para mayor variedad
    const rotation = Math.floor(Math.random() * 360);
    // Selecciona el nombre de la animación y la duración según el tipo
    const animationName = isBounce ? 'fallBounce' : 'fallInfinite';
    const animationDuration = isBounce ? '2s' : '4s';
    // El emoji a utilizar (puedes variar o incluso escoger de un listado)
    const emoji = '😍';

    return (
      <span
        key={index}
        style={
          {
            position: 'absolute',
            // Se inicia un poco arriba de la pantalla
            top: '-50px',
            left: `${left}%`,
            fontSize,
            // Definimos la rotación mediante una variable CSS
            '--rotation': `${rotation}deg`,
            // Para ambos tipos usamos fill-mode both, de modo que incluso durante el delay se aplica el keyframe inicial.
            animation: `${animationName} ${animationDuration} ${delay}s ${
              isBounce ? 'ease-out 1 both' : 'linear infinite both'
            }`,
          } as React.CSSProperties
        }
      >
        {emoji}
      </span>
    );
  });

  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        overflow: 'hidden',
        zIndex: 9999,
      }}
    >
      {emojis}
      <style jsx>{`
        /* Animación para los emojis que caen de forma infinita */
        @keyframes fallInfinite {
          0% {
            transform: translateY(0) rotate(var(--rotation));
            opacity: 1;
          }
          100% {
            transform: translateY(100vh) rotate(var(--rotation));
            opacity: 0.5;
          }
        }
        /* Animación para los emojis que caen, rebotan y se dispersan en la parte inferior */
        @keyframes fallBounce {
          0% {
            transform: translateY(0) rotate(var(--rotation));
            opacity: 1;
          }
          80% {
            transform: translateY(85vh) rotate(var(--rotation));
            opacity: 1;
          }
          90% {
            transform: translateY(92vh) rotate(calc(var(--rotation) + 10deg));
          }
          100% {
            transform: translateY(97vh) rotate(calc(var(--rotation) - 10deg));
          }
        }
      `}</style>
    </div>
  );
}
