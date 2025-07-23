import React from 'react';
import { Vortex } from '@/components/ui/vortex';
import { Button } from '../ui/button';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { RainbowButton } from '../ui/rainbow-button';

export default function HeroSection() {
  return (
    <div className="w-full mx-auto h-screen overflow-hidden">
      <Vortex
        backgroundColor="black"
        rangeY={800}
        particleCount={500}
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
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <RainbowButton asChild>
              <Link href="/donate" className="font-bold">
                Donate Now
              </Link>
            </RainbowButton>
            <Button size="lg" variant="outline" asChild className="font-bold">
              <Link href="/projects">
                Our Work <ArrowRight className="ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </Vortex>
    </div>
  );
}
