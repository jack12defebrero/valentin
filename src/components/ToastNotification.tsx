// src/components/ToastNotification.tsx
import React, { useRef, useEffect } from 'react';
import { Toast } from 'primereact/toast';

interface ToastNotificationProps {
  messages: string[]; // Recibe un array de mensajes
}

const ToastNotification: React.FC<ToastNotificationProps> = ({ messages }) => {
  const toast = useRef<any>(null);

  // Función para mostrar el Toast con un mensaje aleatorio
  const showToast = () => {
    const randomMessage = messages[Math.floor(Math.random() * messages.length)];

    toast.current?.show({
      severity: 'info',
      summary: 'mUAHHHH',
      detail: randomMessage,
      life: 3000, // 3 segundos para cada notificación
    });
  };

  useEffect(() => {
    // Mostrar las notificaciones automáticamente cada 2 segundos
    const interval = setInterval(() => {
      showToast();
    }, 2000);

    // Limpiar el intervalo cuando el componente se desmonte
    return () => clearInterval(interval);
  }, [messages]);

  return (
    <>
      {/* Toast que muestra el mensaje */}
      <Toast ref={toast} />
    </>
  );
};

export default ToastNotification;
