// src/ai/flows/generate-social-media-content.ts
'use server';
/**
 * @fileOverview AI-powered tool to generate personalized social media content for Project S.H.E.
 *
 * - generateSocialMediaContent - A function that generates social media content.
 * - GenerateSocialMediaContentInput - The input type for the generateSocialMediaContent function.
 * - GenerateSocialMediaContentOutput - The return type for the generateSocialMediaContent function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateSocialMediaContentInputSchema = z.object({
  platform: z
    .enum(['Facebook', 'Twitter', 'Instagram', 'LinkedIn'])
    .describe('The social media platform for which to generate content.'),
  missionStatement: z
    .string()
    .describe("Project S.H.E.'s mission statement to promote."),
  keyInitiatives: z
    .string()
    .describe("Project S.H.E.'s key initiatives to highlight."),
  style: z
    .string()
    .optional()
    .describe('The desired style of the social media content (e.g., encouraging, informative, urgent).'),
});
export type GenerateSocialMediaContentInput = z.infer<typeof GenerateSocialMediaContentInputSchema>;

const GenerateSocialMediaContentOutputSchema = z.object({
  content: z.string().describe('The generated social media content.'),
});
export type GenerateSocialMediaContentOutput = z.infer<typeof GenerateSocialMediaContentOutputSchema>;

export async function generateSocialMediaContent(
  input: GenerateSocialMediaContentInput
): Promise<GenerateSocialMediaContentOutput> {
  return generateSocialMediaContentFlow(input);
}

const prompt = ai.definePrompt({
  name: 'generateSocialMediaContentPrompt',
  input: {schema: GenerateSocialMediaContentInputSchema},
  output: {schema: GenerateSocialMediaContentOutputSchema},
  prompt: `You are an AI assistant designed to generate engaging social media content for Project S.H.E., an NGO with a Y2K aesthetic (scarlett red, black, steel colors, stars).

  Generate content for {{platform}} based on the following information:

  Mission Statement: {{{missionStatement}}}
  Key Initiatives: {{{keyInitiatives}}}

  The content should be in {{{style}}} style.

  Content:`,
});

const generateSocialMediaContentFlow = ai.defineFlow(
  {
    name: 'generateSocialMediaContentFlow',
    inputSchema: GenerateSocialMediaContentInputSchema,
    outputSchema: GenerateSocialMediaContentOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
