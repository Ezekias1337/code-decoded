import express from "express";
import * as WebsiteController from "../controllers/websitesOrApps";

const router = express.Router();

// GET requests
router.get(
  "/get-website-or-app/:websiteOrAppId",
  WebsiteController.getWebsiteOrApp
);
router.get("/get-all-websites-or-apps", WebsiteController.getAllWebsitesOrApps);
router.get(
  "/get-not-started-websites-or-apps",
  WebsiteController.getNotStartedWebsitesOrApps
);
router.get(
  "./get-in-progress-websites-or-apps",
  WebsiteController.getInProgressWebsitesOrApps
);
router.get(
  "./get-completed-websites-or-apps",
  WebsiteController.getCompletedWebsitesOrApps
);
router.get(
  "./get-rejected-websites-or-apps",
  WebsiteController.getRejectedWebsitesOrApps
);
// POST requests
router.post("/create-website-or-app", WebsiteController.createWebsiteOrApp);
// PATCH requests
router.patch("/approve-website-or-app", WebsiteController.approveWebsiteOrApp);
/* router.patch("/mark-in-progress-website", WebsiteController.markInProgressWebsite);
router.patch("/mark-completed-website", WebsiteController.markCompletedWebsite); */
router.patch("/reject-website-or-app", WebsiteController.rejectWebsiteOrApp);
// DELETE requests
router.delete("/delete-website-or-app", WebsiteController.deleteWebsiteOrApp);

export default router;
