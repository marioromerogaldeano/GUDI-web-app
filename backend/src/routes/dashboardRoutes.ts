import { Router } from "express";
import { stats } from "../controllers/dashboardController";
import { authenticate } from "../middlewares/authMiddleware";

const router = Router();

router.get("/stats", authenticate, stats);

export default router;
