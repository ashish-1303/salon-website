import { z } from "zod";

export const enquirySchema = z.object({
  name: z.string().trim().min(2, "Please enter your name").max(60, "That name is too long"),
  phone: z
    .string()
    .trim()
    .min(7, "Please enter a valid phone number")
    .max(20, "That number is too long")
    .regex(/^[0-9+()\-\s]+$/, "Only digits, spaces and + ( ) - are allowed"),
  message: z
    .string()
    .trim()
    .min(10, "Tell us a little more (10 characters minimum)")
    .max(500, "Please keep it under 500 characters"),
});

export type EnquiryFormValues = z.infer<typeof enquirySchema>;
