import StarryBackground from "../starry-background";

export default function ThePlanSection() {
    return (
        <section className="py-20 md:py-32 bg-background relative overflow-hidden">
            <div className="absolute inset-0 opacity-50">
                <StarryBackground />
            </div>
            <div className="container relative z-10 text-center">
                <h2 className="text-4xl md:text-5xl font-headline font-bold text-primary mb-8 tracking-wider">
                    THE PLAN
                </h2>
                <div className="max-w-3xl mx-auto space-y-6 text-lg md:text-xl text-foreground/80 leading-relaxed">
                    <p>
                        We'll start simple with posts spreading awareness. Once we gather an audience, we'll start with bake sales and fundraisers and donate to women's help homes.
                    </p>
                    <p>
                        After this, we'll put posters all around Hyderabad and host events where we give speeches and people who are interested can listen to us and/or donate.
                    </p>
                </div>
            </div>
        </section>
    );
}
