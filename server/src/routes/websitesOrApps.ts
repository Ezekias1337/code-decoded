import express from "express";
import * as WebsiteController from "../controllers/websitesOrApps";

const router = express.Router();

// GET requests
router.get("/", WebsiteController.getAllWebsitesOrApps); // Get all websites or apps
router.get("/not-started", WebsiteController.getNotStartedWebsitesOrApps); // Get not started websites or apps
router.get("/in-progress", WebsiteController.getInProgressWebsitesOrApps); // Get in-progress websites or apps
router.get("/completed", WebsiteController.getCompletedWebsitesOrApps); // Get completed websites or apps
router.get("/rejected", WebsiteController.getRejectedWebsitesOrApps); // Get rejected websites or apps
router.get("/:websiteOrAppId", WebsiteController.getWebsiteOrApp); // Get a specific website or app

// POST request
router.post("/", WebsiteController.createWebsiteOrApp); // Create a new website or app

// PATCH requests
router.patch("/:websiteOrAppId/approve", WebsiteController.approveWebsiteOrApp); // Approve a website or app
router.patch("/:websiteOrAppId/reject", WebsiteController.rejectWebsiteOrApp); // Reject a website or app
/* router.patch("//:websiteOrAppId/in-progress", WebsiteController.markInProgressWebsite); // Mark as in progress
router.patch("//:websiteOrAppId/completed", WebsiteController.markCompletedWebsite); // Mark as completed */

// DELETE request
router.delete("/:websiteOrAppId", WebsiteController.deleteWebsiteOrApp); // Delete a specific website or app

export default router;
