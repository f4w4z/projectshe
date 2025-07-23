import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";

const teamMembers = [
    {
        name: "Aria Steelheart",
        role: "Founder & Visionary",
        avatar: "https://placehold.co/400x400.png",
        hint: "portrait woman"
    },
    {
        name: "Jax Ryder",
        role: "Head of Technology",
        avatar: "https://placehold.co/400x400.png",
        hint: "portrait man"
    },
    {
        name: "Lena Petrova",
        role: "Director of Operations",
        avatar: "https://placehold.co/400x400.png",
        hint: "portrait woman professional"
    }
];

export default function TeamSection() {
  return (
    <section className="py-20 md:py-24">
      <div className="container">
        <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl md:text-4xl font-headline font-bold">Architects of Change</h2>
            <p className="max-w-3xl mx-auto text-foreground/70">
                Meet the passionate individuals driving the Steel Revolution forward.
            </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {teamMembers.map(member => (
            <Card key={member.name} className="overflow-hidden text-center group transition-all duration-300 hover:shadow-primary/20 hover:border-primary/50 hover:-translate-y-2">
                <CardHeader className="p-0">
                    <Image
                        src={member.avatar}
                        alt={`Portrait of ${member.name}`}
                        width={400}
                        height={400}
                        className="w-full h-auto object-cover grayscale group-hover:grayscale-0 transition-all duration-300"
                        data-ai-hint={member.hint}
                    />
                </CardHeader>
                <CardContent className="p-6">
                    <CardTitle className="font-headline text-2xl">{member.name}</CardTitle>
                    <CardDescription className="text-primary font-semibold mt-1">{member.role}</CardDescription>
                </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
