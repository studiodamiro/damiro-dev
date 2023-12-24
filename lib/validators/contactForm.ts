import { z } from 'zod';

export const ContactFormValidator = z.object({
  name: z.string().min(1, { message: 'Name is required' }),
  email: z.string().email('Invalid email address'),
  message: z.string().min(1, { message: 'Message is required' }),
});

export type TContactFormValidator = z.infer<typeof ContactFormValidator>;
