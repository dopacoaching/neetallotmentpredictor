import { z } from "zod";

export const registerSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters").max(100),
  mobile: z.string().regex(/^\d{10}$/, "Enter a valid 10-digit mobile number"),
  rank: z.number().int().positive("Rank must be a positive number"),
  consent: z
    .boolean()
    .refine((val) => val === true, {
      message: "You must give consent to continue",
    }),
});

export const predictSchema = z.object({
  userId: z.string(), // Changed from uuid() to string() to support CUIDs
  rank: z.number().int().positive(),
  counsellingBody: z.string(),
  specialty: z.string().optional(),
  category: z.string().optional(),
  collegeType: z.string().optional(),
  round: z.string().optional(),
});

export type RegisterInput = z.infer<typeof registerSchema>;
export type PredictInput = z.infer<typeof predictSchema>;
