import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { GraduationCap, Laptop, Handshake, Megaphone } from "lucide-react";

const impactItems = [
    {
        icon: GraduationCap,
        title: "$25",
        description: "Funds a digital literacy starter kit for one young woman.",
    },
    {
        icon: Laptop,
        title: "$50",
        description: "Provides one hour of expert mentorship for an aspiring leader.",
    },
    {
        icon: Handshake,
        title: "$100",
        description: "Sponsors a seat in a leadership development workshop.",
    },
    {
        icon: Megaphone,
        title: "$250",
        description: "Supports our advocacy efforts for digital rights and equality.",
    }
]

export default function ImpactBreakdownSection() {
  return (
    <section className="py-20 md:py-24 bg-card">
        <div className="container">
            <div className="text-center space-y-4 mb-12">
                <h2 className="text-3xl md:text-4xl font-headline font-bold">Your Contribution in Action</h2>
                <p className="max-w-3xl mx-auto text-foreground/70">
                    Transparency is key. See exactly how your donation empowers, educates, and elevates.
                </p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {impactItems.map((item, index) => (
                    <Card key={index} className="text-center bg-background transform hover:-translate-y-2 transition-transform duration-300 ease-in-out shadow-md hover:shadow-primary/20">
                        <CardHeader className="items-center">
                            <div className="p-4 bg-primary/10 rounded-full mb-4">
                                <item.icon className="h-10 w-10 text-primary" />
                            </div>
                            <CardTitle className="font-headline text-3xl text-primary">{item.title}</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-foreground/80">{item.description}</p>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </div>
    </section>
  );
}
