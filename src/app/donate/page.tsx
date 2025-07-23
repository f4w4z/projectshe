import DonationSection from '@/components/home/donation-section';
import ImpactBreakdownSection from '@/components/home/impact-breakdown-section';
import AnimatedSection from '@/components/animated-section';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Donate | Project S.H.E.',
};

export default function DonatePage() {
  return (
    <>
      <AnimatedSection>
        <DonationSection />
      </AnimatedSection>
      <AnimatedSection>
        <ImpactBreakdownSection />
      </AnimatedSection>
    </>
  );
}
