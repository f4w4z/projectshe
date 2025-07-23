import HeroSection from '@/components/home/hero-section';
import TestimonialsSection from '@/components/home/testimonials-section';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { GridPattern } from '@/components/ui/grid-pattern';
import { cn } from '@/lib/utils';
import AnimatedSection from '@/components/animated-section';
import { FeaturesSectionWithBentoGrid } from '@/components/ui/feature-section-with-bento-grid';

export default function Home() {
  return (
    <>
      <HeroSection />

      <FeaturesSectionWithBentoGrid />

      <AnimatedSection>
        <TestimonialsSection />
      </AnimatedSection>
      
      <AnimatedSection>
        <section className="relative py-20 md:py-32 text-center overflow-hidden">
            <GridPattern
                width={50}
                height={50}
                x={-1}
                y={-1}
                className={cn(
                "-z-10 [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,white,transparent)]",
                )}
            />
            <div className="container relative z-10">
                <h2 className="text-3xl md:text-4xl font-headline font-bold mb-4">Ready to Join the Uprising?</h2>
                <p className="max-w-2xl mx-auto text-foreground/70 mb-8">
                    Your skills, your voice, your support—they are the fuel for this revolution. Step up.
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-4">
                    <Button size="lg" asChild>
                      <Link href="/empower">Get Empowered</Link>
                    </Button>
                    <Button size="lg" variant="outline" asChild>
                      <Link href="/donate">Donate Now <ArrowRight className="ml-2"/></Link>
                    </Button>
                </div>
            </div>
        </section>
      </AnimatedSection>
    </>
  );
}
