import { Request, Response } from 'express';
import prisma from '../config/db';
import * as XLSX from 'xlsx';

// Hardcoded for now as requested
const ADMIN_USER = "itdopa";
const ADMIN_PASS = "dopa1234";

export const adminLogin = async (req: Request, res: Response) => {
  const { username, password } = req.body;
  if (username === ADMIN_USER && password === ADMIN_PASS) {
    res.json({ success: true, token: "admin-session-valid" }); // Simple mock token
  } else {
    res.status(401).json({ success: false, message: "Invalid credentials" });
  }
};

export const exportUsersExcel = async (req: Request, res: Response) => {
  try {
    const users = await prisma.user.findMany({
      orderBy: { createdAt: 'desc' }
    });

    const data = users.map(u => ({
      Name: u.name,
      Mobile: u.mobile,
      Rank: u.rank,
    }));

    const worksheet = XLSX.utils.json_to_sheet(data);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Registered Users");

    const buffer = XLSX.write(workbook, { type: 'buffer', bookType: 'xlsx' });

    res.setHeader('Content-Type', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet');
    res.setHeader('Content-Disposition', 'attachment; filename=Registered_Users.xlsx');
    res.send(buffer);
  } catch (error) {
    console.error("Export error:", error);
    res.status(500).json({ error: "Failed to export data" });
  }
};

export const getAllUsers = async (req: Request, res: Response) => {
    try {
        const users = await prisma.user.findMany({
            orderBy: { createdAt: 'desc' }
        });
        res.json({ success: true, users });
    } catch (error) {
        res.status(500).json({ success: false, error: "Failed to fetch users" });
    }
}
