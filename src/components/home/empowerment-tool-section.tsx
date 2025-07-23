import EmpowermentToolClient from "../empowerment-tool-client";

export default function EmpowermentToolSection() {
  return (
    <section className="py-20 md:py-24">
      <div className="container">
        <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl md:text-4xl font-headline font-bold">Amplify Our Voice</h2>
            <p className="max-w-3xl mx-auto text-foreground/70">
                Use our AI-powered Empowerment Tool to generate personalized content. Share it on your social media and help us spread the word about Project S.H.E.&apos;s mission.
            </p>
        </div>
        <EmpowermentToolClient />
      </div>
    </section>
  );
}
