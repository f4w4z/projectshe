import EmpowermentToolSection from '@/components/home/empowerment-tool-section';
import InteractiveQuizSection from '@/components/home/interactive-quiz-section';
import TestimonialsSection from '@/components/home/testimonials-section';
import AnimatedSection from '@/components/animated-section';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Empower | Project S.H.E.',
};

export default function EmpowerPage() {
  return (
    <>
      <AnimatedSection>
        <EmpowermentToolSection />
      </AnimatedSection>
      <AnimatedSection>
        <TestimonialsSection />
      </AnimatedSection>
      <AnimatedSection>
        <InteractiveQuizSection />
      </AnimatedSection>
    </>
  );
}
