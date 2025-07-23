"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { Heart } from "lucide-react";
import { useState } from "react";

export default function DonationSection() {
    const [amount, setAmount] = useState(50);
    const { toast } = useToast();

    const handleDonation = (e: React.FormEvent) => {
        e.preventDefault();
        toast({
            title: "Thank You!",
            description: `Your contribution of $${amount} is deeply appreciated.`,
        });
    }

  return (
    <section className="py-20 md:py-24">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center space-y-4">
            <h2 className="text-3xl md:text-4xl font-headline font-bold text-primary">Join the Revolution</h2>
            <p className="md:text-lg text-foreground/80">
                Your support fuels our mission. Every donation, big or small, makes a tangible difference in the lives of young women. Be a part of the change.
            </p>
        </div>
        <Card className="max-w-xl mx-auto mt-12 bg-background border-2 border-primary/20 shadow-xl shadow-primary/10">
          <form onSubmit={handleDonation}>
            <CardHeader>
                <CardTitle className="font-headline text-2xl">Make a Donation</CardTitle>
                <CardDescription>Your secure donation will empower women globally.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {[25, 50, 100, 250].map((presetAmount) => (
                        <Button
                            key={presetAmount}
                            type="button"
                            variant={amount === presetAmount ? 'default' : 'outline'}
                            onClick={() => setAmount(presetAmount)}
                            className="h-12 text-base md:h-14 md:text-lg font-bold"
                        >
                            ${presetAmount}
                        </Button>
                    ))}
                </div>
                <div className="flex items-center">
                    <span className="text-xl md:text-2xl font-bold px-4">$</span>
                    <Input 
                        type="number"
                        value={amount}
                        onChange={(e) => setAmount(Number(e.target.value))}
                        className="h-12 text-xl md:h-14 md:text-2xl font-bold"
                        placeholder="Custom Amount"
                    />
                </div>
            </CardContent>
            <CardFooter>
                <Button type="submit" size="lg" className="w-full text-lg">
                    <Heart className="mr-2 h-5 w-5"/>
                    Donate Securely
                </Button>
            </CardFooter>
          </form>
        </Card>
      </div>
    </section>
  );
}
