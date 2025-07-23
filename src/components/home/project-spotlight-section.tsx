import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function ProjectSpotlightSection() {
    return (
        <section className="py-20 md:py-24 bg-card">
            <div className="container">
                <div className="text-center space-y-4 mb-12">
                    <h2 className="text-3xl md:text-4xl font-headline font-bold">Project Spotlight: Code Empress</h2>
                    <p className="max-w-3xl mx-auto text-foreground/70">
                        A deep dive into our flagship initiative that's transforming young women into tech leaders.
                    </p>
                </div>
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <div className="rounded-xl overflow-hidden shadow-2xl shadow-primary/10">
                         <Image
                            src="https://placehold.co/800x600.png"
                            alt="Women learning to code in a bootcamp"
                            width={800}
                            height={600}
                            className="w-full object-cover transition-transform duration-500 hover:scale-105"
                            data-ai-hint="women coding laptop"
                        />
                    </div>
                    <div className="space-y-6">
                        <h3 className="text-2xl font-headline font-bold">From Passion to Profession</h3>
                        <p className="text-foreground/80">
                            The Code Empress Bootcamp is more than just a coding course; it's a career launchpad. We provide an intensive, supportive environment where creativity and technical skills flourish, addressing the critical gender gap in the technology sector head-on.
                        </p>
                        <ul className="space-y-3">
                            <li className="flex items-start">
                                <Check className="h-6 w-6 text-primary mr-3 mt-1 flex-shrink-0" />
                                <span className="text-foreground/80">
                                    <span className="font-bold text-foreground">12-Week Intensive Curriculum:</span> Covering everything from front-end frameworks to backend databases.
                                </span>
                            </li>
                            <li className="flex items-start">
                                <Check className="h-6 w-6 text-primary mr-3 mt-1 flex-shrink-0" />
                                <span className="text-foreground/80">
                                    <span className="font-bold text-foreground">Career-Ready Skills:</span> Focus on real-world projects, portfolio building, and interview preparation.
                                </span>
                            </li>
                             <li className="flex items-start">
                                <Check className="h-6 w-6 text-primary mr-3 mt-1 flex-shrink-0" />
                                <span className="text-foreground/80">
                                    <span className="font-bold text-foreground">90% Job Placement Rate:</span> Graduates have gone on to work at leading tech companies.
                                </span>
                            </li>
                        </ul>
                        <Button size="lg" asChild>
                            <Link href="/donate">Support a Coder</Link>
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    )
}
