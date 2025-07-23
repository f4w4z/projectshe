"use client";

import React from 'react';
import { Vortex } from '@/components/ui/vortex';
import { Button } from '../ui/button';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { RainbowButton } from '../ui/rainbow-button';

// Utility hook to detect desktop
function useIsDesktop() {
  const [isDesktop, setIsDesktop] = React.useState(false);
  React.useEffect(() => {
    const check = () => setIsDesktop(window.innerWidth >= 1024);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);
  return isDesktop;
}

export default function HeroSection() {
  const isDesktop = useIsDesktop();
  return (
    <div className="w-full mx-auto h-screen overflow-hidden">
      {isDesktop ? (
        <Vortex
          backgroundColor="black"
          rangeY={800}
          particleCount={80} // Reduced from 500 to 80 for performance
          baseHue={0}
          rangeHue={15}
          baseSpeed={0.05}
          rangeSpeed={0.1}
          className="flex items-center flex-col justify-center px-2 md:px-10 py-4 w-full h-full"
        >
          <div className="text-center space-y-6 z-10">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-headline font-bold tracking-tighter text-white">
              PROJECT S.H.E.: <br />
              <span className="text-primary">STEEL REVOLUTION</span>
            </h1>
            <p className="font-headline tracking-widest text-lg md:text-2xl text-primary">
              SUPPORT. HELP. EMPOWER.
            </p>
            <p className="max-w-[600px] text-foreground/80 md:text-xl mx-auto lg:mx-0">
              A new era of empowerment. Forging a future where every woman is a
              force of nature. Join the revolution.
            </p>
          </div>
        </Vortex>
      ) : (
        <div className="flex items-center flex-col justify-center px-2 md:px-10 py-4 w-full h-full bg-black">
          <div className="text-center space-y-6 z-10">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-headline font-bold tracking-tighter text-white">
              PROJECT S.H.E.: <br />
              <span className="text-primary">STEEL REVOLUTION</span>
            </h1>
            <p className="font-headline tracking-widest text-lg md:text-2xl text-primary">
              SUPPORT. HELP. EMPOWER.
            </p>
            <p className="max-w-[600px] text-foreground/80 md:text-xl mx-auto lg:mx-0">
              A new era of empowerment. Forging a future where every woman is a
              force of nature. Join the revolution.
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
