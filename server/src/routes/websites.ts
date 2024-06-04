import express from "express";
import * as WebsiteController from "../controllers/websites";

const router = express.Router();

// GET requests
router.get("/get-website/:websiteId", WebsiteController.getWebsite);
router.get("/get-all-websites", WebsiteController.getAllWebsites);
router.get(
  "/get-not-started-websites",
  WebsiteController.getNotStartedWebsites
);
router.get(
  "./get-in-progress-websites",
  WebsiteController.getInProgressWebsites
);
router.get("./get-completed-websites", WebsiteController.getCompletedWebsites);
router.get("./get-rejected-websites", WebsiteController.getRejectedWebsites);
// POST requests
router.post("/create-website", WebsiteController.createWebsite);
// PATCH requests
router.patch("/approve-website", WebsiteController.approveWebsite);
/* router.patch("/mark-in-progress-website", WebsiteController.markInProgressWebsite);
router.patch("/mark-completed-website", WebsiteController.markCompletedWebsite); */
router.patch("/reject-website", WebsiteController.rejectWebsite);
// DELETE requests
router.delete("/delete-website", WebsiteController.deleteWebsite);

export default router;
