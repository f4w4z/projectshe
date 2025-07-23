import { Star } from "lucide-react";
import StarryBackground from "../starry-background";

export default function FoundersNoteSection() {
    return (
        <section className="py-20 md:py-32 bg-background relative overflow-hidden">
            <div className="absolute inset-0 opacity-50">
                <StarryBackground />
            </div>
            <div className="container relative z-10 text-center">
                <h2 className="text-3xl md:text-4xl font-headline font-bold text-primary mb-8">
                    Founder's Note
                </h2>
                <div className="max-w-3xl mx-auto space-y-6 text-lg text-foreground/80 leading-relaxed">
                    <p>
                        "Hi, I'm Sanskriti, and I started Project S.H.E. because I couldn't stay quiet anymore. I came across a video where a guy was interviewing people across India about rape and whose fault it is. The way people responded was honestly so messed up — almost everyone, even women, were blaming the girl. And it wasn't just people in villages; it was people in cities — so-called “normal” people — saying things like that."
                    </p>
                    <p className="font-headline text-primary not-italic">
                        - Sanskriti, Founder
                    </p>
                </div>
            </div>
        </section>
    );
}
