import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, Target, TrendingUp } from "lucide-react";

export default function MissionSection() {
  return (
    <section className="py-20 md:py-24">
      <div className="container space-y-12">
        <div className="text-center space-y-4">
          <h2 className="text-3xl md:text-4xl font-headline font-bold">Forge a New Future</h2>
          <p className="max-w-3xl mx-auto text-foreground/70">
            Project S.H.E. is a catalyst for change, dedicated to shattering ceilings and building platforms for women's voices to be heard, valued, and amplified. We operate on three core principles.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          <Card className="bg-background border-2 border-border hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10 transition-all duration-300">
            <CardHeader>
              <Target className="h-10 w-10 text-primary mb-4" />
              <CardTitle className="font-headline text-2xl">Our Mission</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-foreground/80">To dismantle systemic barriers and empower young women through education, advocacy, and technology, fostering a global community of leaders and innovators.</p>
            </CardContent>
          </Card>
          <Card className="bg-background border-2 border-border hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10 transition-all duration-300">
            <CardHeader>
              <Users className="h-10 w-10 text-primary mb-4" />
              <CardTitle className="font-headline text-2xl">Key Initiatives</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-foreground/80">Digital literacy programs, leadership bootcamps, and policy advocacy campaigns designed to create tangible opportunities and lasting impact.</p>
            </CardContent>
          </Card>
          <Card className="bg-background border-2 border-border hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10 transition-all duration-300">
            <CardHeader>
              <TrendingUp className="h-10 w-10 text-primary mb-4" />
              <CardTitle className="font-headline text-2xl">Our Impact</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-foreground/80">Over 10,000 women empowered, 50+ policies influenced, and a 200% increase in digital literacy in our target communities since inception.</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
