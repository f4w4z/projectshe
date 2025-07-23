"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { useState } from 'react';
import { generateSocialMediaContent } from "@/ai/flows/generate-social-media-content";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Card, CardContent } from "./ui/card";
import { Textarea } from "./ui/textarea";
import { Loader2, Sparkles } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const formSchema = z.object({
  platform: z.enum(['Facebook', 'Twitter', 'Instagram', 'LinkedIn']),
  style: z.string().min(1, { message: 'Please select a style.' })
});

export default function EmpowermentToolClient() {
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState("");
  const { toast } = useToast();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: { platform: 'Twitter', style: 'encouraging' }
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setLoading(true);
    setResult("");
    try {
      const missionStatement = "To dismantle systemic barriers and empower young women through education, advocacy, and technology, fostering a global community of leaders and innovators.";
      const keyInitiatives = "Digital literacy programs, leadership bootcamps, and policy advocacy campaigns designed to create tangible opportunities and lasting impact.";
      
      const response = await generateSocialMediaContent({
        ...values,
        missionStatement,
        keyInitiatives
      });
      setResult(response.content);
    } catch (error) {
      console.error(error);
      toast({
        variant: "destructive",
        title: "Error",
        description: "Failed to generate content. Please try again.",
      });
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <FormField
            control={form.control}
            name="platform"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-lg">Social Media Platform</FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <FormControl>
                    <SelectTrigger className="h-12 text-base">
                      <SelectValue placeholder="Select a platform" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="Facebook">Facebook</SelectItem>
                    <SelectItem value="Twitter">Twitter</SelectItem>
                    <SelectItem value="Instagram">Instagram</SelectItem>
                    <SelectItem value="LinkedIn">LinkedIn</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="style"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-lg">Content Style</FormLabel>
                 <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <FormControl>
                    <SelectTrigger className="h-12 text-base">
                      <SelectValue placeholder="Select a style" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="encouraging">Encouraging</SelectItem>
                    <SelectItem value="informative">Informative</SelectItem>
                    <SelectItem value="urgent">Urgent</SelectItem>
                    <SelectItem value="bold">Bold &amp; Punchy</SelectItem>
                    <SelectItem value="professional">Professional</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit" size="lg" className="w-full" disabled={loading}>
            {loading ? (
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            ) : (
              <Sparkles className="mr-2 h-4 w-4" />
            )}
            Generate Content
          </Button>
        </form>
      </Form>
      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Generated Content</h3>
        <Card className="min-h-[250px] border-dashed border-2 bg-background">
          <CardContent className="p-4">
            {loading ? (
              <div className="flex items-center justify-center h-full pt-20">
                <Loader2 className="h-8 w-8 animate-spin text-primary" />
              </div>
            ) : (
              <Textarea
                readOnly
                value={result || "Your generated social media post will appear here..."}
                className="w-full h-full min-h-[220px] bg-transparent border-0 focus-visible:ring-0 focus-visible:ring-offset-0 text-base"
                placeholder="Your generated social media post will appear here..."
              />
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
