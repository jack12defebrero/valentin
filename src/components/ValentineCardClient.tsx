"use client";

import { useRouter } from 'next/navigation';
import ValentineCard from './ValentineCard';

export default function ValentineCardClient() {
  const router = useRouter();

  const handleYes = () => {
    router.push('/yes'); // Redirige a la página "Sí"
  };

  const handleNo = () => {
    router.push('/no'); // Redirige a la página "No"
  };

  return <ValentineCard onYes={handleYes} onNo={handleNo} />;
}