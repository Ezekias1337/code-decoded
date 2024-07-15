import express from "express";
import * as AnalyticsController from "../controllers/analytics";

const router = express.Router();

// GET requests
/* router.get("/get-browser-analytics", AnalyticsController.getAuthenticatedUser);
router.get("/get-device-analytics", AnalyticsController.getAuthenticatedUser);
router.get("/get-os-analytics", AnalyticsController.getAuthenticatedUser); */

// POST requests
router.post("/update-analytics", AnalyticsController.updateAnalytics);

// DELETE requests
/* router.delete("/delete-user", AnalyticsController.deleteAnalytics); */

export default router;
