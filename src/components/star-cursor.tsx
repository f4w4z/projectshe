"use client";

import { Star } from 'lucide-react';
import { useEffect, useState, useRef } from 'react';

const NUM_TRAIL_STARS = 8;
const TRAIL_LAG = 0.15; // Lower is less lag, higher is more lag/smoother

// Utility hook to detect desktop
function useIsDesktop() {
  const [isDesktop, setIsDesktop] = useState(false);
  useEffect(() => {
    const check = () => setIsDesktop(window.innerWidth >= 1024);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);
  return isDesktop;
}

export default function StarCursor() {
  const isDesktop = useIsDesktop();
  const mousePos = useRef({ x: -100, y: -100 });
  const [trail, setTrail] = useState(
    Array.from({ length: NUM_TRAIL_STARS }, () => ({ x: -100, y: -100 }))
  );
  const animationFrameId = useRef<number>();

  useEffect(() => {
    if (!isDesktop) return; // Don't run animation on mobile/tablet
    const handleMouseMove = (e: MouseEvent) => {
      mousePos.current = { x: e.clientX, y: e.clientY };
    };

    const handleMouseLeave = () => {
      mousePos.current = { x: -100, y: -100 };
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    document.documentElement.addEventListener('mouseleave', handleMouseLeave);
    document.documentElement.addEventListener('touchstart', handleMouseLeave, { passive: true });

    const animateTrail = () => {
      setTrail(prevTrail => {
        const newTrail = [...prevTrail];
        let leaderX = mousePos.current.x;
        let leaderY = mousePos.current.y;
        newTrail[0].x += (leaderX - newTrail[0].x) * TRAIL_LAG;
        newTrail[0].y += (leaderY - newTrail[0].y) * TRAIL_LAG;
        for (let i = 1; i < NUM_TRAIL_STARS; i++) {
          leaderX = newTrail[i-1].x;
          leaderY = newTrail[i-1].y;
          newTrail[i].x += (leaderX - newTrail[i].x) * TRAIL_LAG;
          newTrail[i].y += (leaderY - newTrail[i].y) * TRAIL_LAG;
        }
        return newTrail;
      });
      animationFrameId.current = requestAnimationFrame(animateTrail);
    };

    animationFrameId.current = requestAnimationFrame(animateTrail);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.documentElement.removeEventListener('mouseleave', handleMouseLeave);
      document.documentElement.removeEventListener('touchstart', handleMouseLeave);
      if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current);
      }
    };
  }, [isDesktop]);

  if (!isDesktop) return null;

  return (
    <>
      {trail.map((pos, index) => {
        const scale = (NUM_TRAIL_STARS - index) / NUM_TRAIL_STARS;
        return (
          <div
            key={index}
            className="custom-cursor"
            style={{
              left: `${pos.x}px`,
              top: `${pos.y}px`,
              transform: `translate(-50%, -50%) scale(${scale})`,
              opacity: scale,
              filter: `blur(${ (1 - scale) * 4 }px)`,
            }}
          >
            <Star
              className="fill-primary stroke-primary"
              style={{
                width: `${24 * scale}px`,
                height: `${24 * scale}px`,
              }}
            />
          </div>
        );
      })}
    </>
  );
}
