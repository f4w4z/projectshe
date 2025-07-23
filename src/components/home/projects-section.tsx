import Image from "next/image";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const projects = [
    {
        title: "Code Empress Bootcamp",
        description: "An intensive 12-week coding bootcamp for young women from underserved communities, focusing on full-stack web development and career readiness.",
        image: "https://placehold.co/600x400.png",
        hint: "education technology",
        status: "Completed",
        statusVariant: "secondary"
    },
    {
        title: "Future Leaders Initiative",
        description: "A mentorship program connecting aspiring female leaders with established professionals in tech, business, and arts.",
        image: "https://placehold.co/600x400.png",
        hint: "women leadership",
        status: "Ongoing",
        statusVariant: "default"
    },
    {
        title: "Digital Rights Advocacy",
        description: "Campaigning for policies that ensure safe and equal access to the internet and digital tools for all women.",
        image: "https://placehold.co/600x400.png",
        hint: "community empowerment",
        status: "Upcoming",
        statusVariant: "outline"
    }
];

export default function ProjectsSection() {
  return (
    <section className="py-20 md:py-24">
        <div className="container space-y-12">
            <div className="text-center space-y-4">
                <h2 className="text-3xl md:text-4xl font-headline font-bold">Our Initiatives</h2>
                <p className="max-w-3xl mx-auto text-foreground/70">
                    From coding bootcamps to policy advocacy, we are actively building a more equitable future. Explore our key projects.
                </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.map((project) => (
                    <Card key={project.title} className="overflow-hidden hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10 transition-all duration-300 group">
                        <CardHeader className="p-0 relative">
                             <Image
                                src={project.image}
                                alt={project.title}
                                width={600}
                                height={400}
                                className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                                data-ai-hint={project.hint}
                            />
                             <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                        </CardHeader>
                        <CardContent className="p-6 space-y-4">
                            <div className="flex justify-between items-start">
                                <CardTitle className="font-headline text-xl">{project.title}</CardTitle>
                                <Badge variant={project.statusVariant as any}>{project.status}</Badge>
                            </div>
                            <CardDescription className="text-foreground/80">{project.description}</CardDescription>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </div>
    </section>
  );
}
