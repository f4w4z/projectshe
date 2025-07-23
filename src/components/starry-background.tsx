"use client";

import { useEffect, useState } from 'react';

const NUM_STARS = 100;

export default function StarryBackground() {
  const [stars, setStars] = useState<Array<{ top: string; left: string; animationDelay: string; animationDuration: string }>>([]);

  useEffect(() => {
    const newStars = Array.from({ length: NUM_STARS }).map(() => ({
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
      animationDelay: `${Math.random() * 5}s`,
      animationDuration: `${2 + Math.random() * 3}s`
    }));
    setStars(newStars);
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full h-full -z-10 pointer-events-none overflow-hidden">
      {stars.map((star, i) => (
        <span key={i} className="star" style={{...star, animationName: 'twinkle' }} />
      ))}
    </div>
  );
}
