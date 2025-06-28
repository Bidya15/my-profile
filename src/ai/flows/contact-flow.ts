'use server';
/**
 * @fileOverview Handles contact form submissions.
 *
 * - handleContactMessage - A function that processes the contact form data.
 * - ContactFormInput - The input type for the handleContactMessage function.
 * - ContactFormOutput - The return type for the handleContactMessage function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const ContactFormInputSchema = z.object({
  name: z.string().describe('The name of the person sending the message.'),
  email: z.string().email().describe('The email address of the person.'),
  message: z.string().describe('The content of the message.'),
});
export type ContactFormInput = z.infer<typeof ContactFormInputSchema>;

const ContactFormOutputSchema = z.object({
  reply: z.string().describe('A friendly confirmation reply to the user.'),
});
export type ContactFormOutput = z.infer<typeof ContactFormOutputSchema>;

export async function handleContactMessage(input: ContactFormInput): Promise<ContactFormOutput> {
  return contactFlow(input);
}

const prompt = ai.definePrompt({
  name: 'contactFormPrompt',
  input: {schema: ContactFormInputSchema},
  output: {schema: ContactFormOutputSchema},
  prompt: `A user named {{name}} has sent a message from your portfolio contact form.
  Their email is {{email}}.
  Their message is: "{{message}}"

  Generate a short, friendly, and professional confirmation reply. Assure them you have received their message and will get back to them soon. Address them by their name.`,
});

const contactFlow = ai.defineFlow(
  {
    name: 'contactFlow',
    inputSchema: ContactFormInputSchema,
    outputSchema: ContactFormOutputSchema,
  },
  async (input) => {
    // In a real application, you would add logic here to send an email or save to a database.
    // For this example, we will just generate a reply using the LLM.
    const { output } = await prompt(input);
    return output!;
  }
);
