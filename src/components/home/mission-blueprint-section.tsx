import Image from "next/image";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Users, Target, TrendingUp } from "lucide-react";
import AnimatedSection from "../animated-section";

const blueprintItems = [
    {
        value: "item-1",
        icon: Target,
        title: "Our Mission",
        description: "To dismantle systemic barriers and empower young women through education, advocacy, and technology, fostering a global community of leaders and innovators.",
    },
    {
        value: "item-2",
        icon: Users,
        title: "Key Initiatives",
        description: "Digital literacy programs, leadership bootcamps, and policy advocacy campaigns designed to create tangible opportunities and lasting impact.",
    },
    {
        value: "item-3",
        icon: TrendingUp,
        title: "Our Impact",
        description: "Over 10,000 women empowered, 50+ policies influenced, and a 200% increase in digital literacy in our target communities since inception.",
    }
];

export default function MissionBlueprintSection() {
  return (
    <AnimatedSection>
        <section className="py-20 md:py-32 bg-background">
            <div className="container grid lg:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                    <h2 className="text-3xl md:text-4xl font-headline font-bold text-primary">The Revolution's Blueprint</h2>
                    <p className="text-foreground/70 text-lg">
                        We are architects of change, meticulously crafting a future where every woman's potential is unleashed. Our strategy is built on three foundational pillars.
                    </p>
                    <Accordion type="single" collapsible defaultValue="item-1" className="w-full">
                        {blueprintItems.map((item) => (
                            <AccordionItem value={item.value} key={item.value}>
                                <AccordionTrigger className="text-xl font-headline hover:no-underline">
                                    <div className="flex items-center gap-4">
                                        <item.icon className="h-6 w-6 text-primary" />
                                        <span>{item.title}</span>
                                    </div>
                                </AccordionTrigger>
                                <AccordionContent className="text-base text-foreground/80 pl-14">
                                    {item.description}
                                </AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </div>
                <div className="flex justify-center">
                    <Image
                        src="https://placehold.co/600x700.png"
                        alt="Blueprint for empowerment"
                        width={600}
                        height={700}
                        className="rounded-xl shadow-2xl shadow-primary/20 aspect-[6/7] object-cover"
                        data-ai-hint="futuristic blueprint"
                    />
                </div>
            </div>
        </section>
    </AnimatedSection>
  );
}
