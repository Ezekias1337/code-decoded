import express from "express";
import * as AnalyticsController from "../controllers/analytics";

const router = express.Router();

// POST requests
router.post("/update-analytics", AnalyticsController.updateAnalytics);


export default router;
