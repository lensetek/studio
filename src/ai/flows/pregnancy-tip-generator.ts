'use server';

/**
 * @fileOverview An AI agent that generates pregnancy tips tailored to the user's stage of pregnancy.
 *
 * - generatePregnancyTip - A function that generates a pregnancy tip.
 * - PregnancyTipInput - The input type for the generatePregnancyTip function.
 * - PregnancyTipOutput - The return type for the generatePregnancyTip function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const PregnancyTipInputSchema = z.object({
  pregnancyStage: z
    .string()
    .describe('The current stage of the pregnancy (e.g., first trimester, second trimester, third trimester).'),
});
export type PregnancyTipInput = z.infer<typeof PregnancyTipInputSchema>;

const PregnancyTipOutputSchema = z.object({
  tip: z.string().describe('A pregnancy tip tailored to the given stage of pregnancy.'),
});
export type PregnancyTipOutput = z.infer<typeof PregnancyTipOutputSchema>;

export async function generatePregnancyTip(input: PregnancyTipInput): Promise<PregnancyTipOutput> {
  return pregnancyTipFlow(input);
}

const prompt = ai.definePrompt({
  name: 'pregnancyTipPrompt',
  input: {schema: PregnancyTipInputSchema},
  output: {schema: PregnancyTipOutputSchema},
  prompt: `You are a helpful AI assistant providing pregnancy tips.

  Generate a tip tailored to a user in the {{{pregnancyStage}}} of their pregnancy.
  Make sure the tip is encouraging and supportive.

  Tip: `,
});

const pregnancyTipFlow = ai.defineFlow(
  {
    name: 'pregnancyTipFlow',
    inputSchema: PregnancyTipInputSchema,
    outputSchema: PregnancyTipOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
