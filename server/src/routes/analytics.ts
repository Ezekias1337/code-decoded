import express from "express";
import * as AnalyticsController from "../controllers/analytics";

const router = express.Router();

router.post("/", AnalyticsController.updateAnalytics);


export default router;
