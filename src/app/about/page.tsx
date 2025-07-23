import MissionSection from '@/components/home/mission-section';
import TeamSection from '@/components/home/team-section';
import type { Metadata } from 'next';
import AnimatedSection from '@/components/animated-section';
import FoundersNoteSection from '@/components/home/founders-note-section';
import ThePlanSection from '@/components/home/the-plan-section';

export const metadata: Metadata = {
  title: 'About | Project S.H.E.',
};

export default function AboutPage() {
  return (
    <>
      <AnimatedSection>
        <MissionSection />
      </AnimatedSection>
      <AnimatedSection>
        <FoundersNoteSection />
      </AnimatedSection>
      <AnimatedSection>
        <ThePlanSection />
      </AnimatedSection>
      <AnimatedSection>
        <TeamSection />
      </AnimatedSection>
    </>
  );
}
