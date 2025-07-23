"use client";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Star } from "lucide-react";

const testimonials = [
    {
        quote: "Project S.H.E. didn't just teach me to code, it taught me to lead. I went from feeling lost to launching my own startup. It's a true revolution.",
        name: "Maya R.",
        title: "Code Empress Alumna & Founder",
    },
    {
        quote: "The mentorship I received was invaluable. I connected with a leader in my field who guided me through a critical career transition. I'm now in my dream role.",
        name: "Fatima K.",
        title: "Future Leaders Participant",
    },
    {
        quote: "Being part of this community is empowering. Knowing you have a network of strong, brilliant women supporting you is a game-changer.",
        name: "Chloe T.",
        title: "Community Member",
    },
];


export default function TestimonialsSection() {
  return (
    <section className="py-20 md:py-24">
        <div className="container">
            <div className="text-center space-y-4 mb-12">
                <h2 className="text-3xl md:text-4xl font-headline font-bold">Voices of Empowerment</h2>
                <p className="max-w-3xl mx-auto text-foreground/70">
                    Don't just take our word for it. Hear from the women whose lives we've impacted.
                </p>
            </div>
            <Carousel
                opts={{ align: "start", loop: true, }}
                className="w-full max-w-4xl mx-auto"
            >
                <CarouselContent>
                    {testimonials.map((testimonial, index) => (
                    <CarouselItem key={index} className="md:basis-1/2">
                        <div className="p-1">
                        <Card className="h-full bg-gradient-to-br from-card to-background border border-border/40 shadow-lg">
                            <CardContent className="flex flex-col items-center justify-center p-8 text-center space-y-4">
                               <div className="flex gap-1 text-primary mb-2">
                                    {[...Array(5)].map((_, i) => <Star key={i} className="h-5 w-5 fill-current" />)}
                               </div>
                               <blockquote className="text-lg font-medium text-foreground/90 italic">
                                    &ldquo;{testimonial.quote}&rdquo;
                               </blockquote>
                               <div className="mt-4">
                                    <p className="font-bold font-headline">{testimonial.name}</p>
                                    <p className="text-sm text-foreground/60">{testimonial.title}</p>
                               </div>
                            </CardContent>
                        </Card>
                        </div>
                    </CarouselItem>
                    ))}
                </CarouselContent>
                <CarouselPrevious className="hidden md:flex"/>
                <CarouselNext className="hidden md:flex"/>
            </Carousel>
        </div>
    </section>
  )
}
