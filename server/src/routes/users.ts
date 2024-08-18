import express from "express";
import * as UserController from "../controllers/users";

const router = express.Router();

// GET requests
router.get("/get-authenticated-user", UserController.getAuthenticatedUser);
router.get("/get-all-users", UserController.getAllUsers);
router.get("/get-user/:userId", UserController.getUser);

// POST requests
router.post("/login", UserController.login);
router.post("/logout", UserController.logout);
router.post("/get-user", UserController.getUser);
router.post("/create-user", UserController.createUser);
router.post("/verify-email", UserController.verifyEmail);

// PATCH requests
router.patch("/update-user", UserController.updateUser);

// DELETE requests
router.delete("/delete-user", UserController.deleteUser);

export default router;
