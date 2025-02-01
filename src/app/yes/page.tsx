"use client";

import EmojiConfetti from '../../components/EmojiConfetti';
import TenorGif from '../../components/TenorGif';
import ToastNotification from '../../components/ToastNotification';

const messagesYes = [
  '¡Lo sabia :3! 🎉',
  '¡Gracias por decir que sí! 💖',
  '¡Todo es posible ahora! 😍',
  "¡Sí!",
    "¡Claro que sí! 💖",
    "¡Te amo! 😍",
    "¡Por supuesto! 😘  sabia que dirias que si xd",
];

export default function YesPage() {
  return (
    <div className="relative min-h-screen bg-pink-100 flex flex-col items-center justify-center p-4">
      <h1 className="text-5xl md:text-6xl font-extrabold text-pink-800 mb-8">
        ¡Gracias por decir que sí! 💖
      </h1>
      
      {/* Efecto de confeti */}
      <EmojiConfetti />
      
      {/* Inserción del gif de Tenor */}
      <TenorGif />

      {/* Aquí pasamos los mensajes diferentes al componente ToastNotification */}
      <ToastNotification messages={messagesYes} />
    </div>
  );
}
