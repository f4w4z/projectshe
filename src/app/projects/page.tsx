import ProjectsSection from '@/components/home/projects-section';
import ProjectSpotlightSection from '@/components/home/project-spotlight-section';
import AnimatedSection from '@/components/animated-section';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Projects | Project S.H.E.',
};

export default function ProjectsPage() {
  return (
    <>
      <AnimatedSection>
        <ProjectsSection />
      </AnimatedSection>
      <AnimatedSection>
        <ProjectSpotlightSection />
      </AnimatedSection>
    </>
  );
}
