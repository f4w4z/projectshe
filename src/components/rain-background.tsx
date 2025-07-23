"use client";

import { useEffect, useState } from 'react';

const NUM_DROPS = 150;

export default function RainBackground() {
  const [drops, setDrops] = useState<Array<{ left: string; animationDelay: string; animationDuration: string }>>([]);

  useEffect(() => {
    const newDrops = Array.from({ length: NUM_DROPS }).map(() => ({
      left: `${Math.random() * 100}%`,
      animationDelay: `${Math.random() * 5}s`,
      animationDuration: `${0.5 + Math.random() * 0.5}s`
    }));
    setDrops(newDrops);
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full h-full -z-10 pointer-events-none overflow-hidden">
      {drops.map((drop, i) => (
        <span key={i} className="raindrop" style={{ ...drop, animationName: 'rain-fall' }} />
      ))}
    </div>
  );
}
