import { Request, Response } from "express";
import { getDashboardStats } from "../services/dashboardService";

export const stats = async (_req: Request, res: Response) => {
  try {
    const data = await getDashboardStats();
    return res.status(200).json(data);
  } catch (error) {
    const message = error instanceof Error ? error.message : "Failed to fetch dashboard stats";
    return res.status(500).json({ message });
  }
};
