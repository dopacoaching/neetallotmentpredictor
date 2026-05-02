import { Request, Response } from 'express';
import { z } from 'zod';
import prisma from '../config/db';

const registerSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  mobile: z.string().regex(/^[0-9]{10}$/, "Invalid mobile number"),
  rank: z.preprocess((v) => (v === "" ? undefined : Number(v)), z.number().min(1, "Invalid rank").optional()),
  consent: z.boolean().default(false),
});

export const registerUser = async (req: Request, res: Response) => {
  try {
    const parsed = registerSchema.safeParse(req.body);
    if (!parsed.success) {
      return res.status(400).json({ 
        success: false, 
        error: "VALIDATION_ERROR", 
        details: parsed.error.format() 
      });
    }

    const { name, mobile, rank, consent } = parsed.data;

    // Prevent duplicate registrations by phone number
    const existingUser = await prisma.user.findFirst({
      where: { mobile }
    });

    if (existingUser) {
      // If user exists, we return their existing ID (effectively "not repeating" the data)
      return res.json({ success: true, userId: existingUser.id, message: "Welcome back!" });
    }

    const user = await prisma.user.create({
      data: { name, mobile, rank, consent },
    });

    res.json({ success: true, userId: user.id });
  } catch (error) {
    console.error("Registration error:", error);
    res.status(500).json({ success: false, error: "SERVER_ERROR" });
  }
};

export const getHealth = async (req: Request, res: Response) => {
  try {
    await prisma.$connect();
    res.json({ status: 'ok', database: 'connected' });
  } catch (error) {
    res.status(500).json({ status: 'error', message: 'Database connection failed' });
  }
};
