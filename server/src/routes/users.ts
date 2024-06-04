import express from "express";
import * as UserController from "../controllers/users";

const router = express.Router();

// GET requests
router.get("/get-authenticated-user", UserController.getAuthenticatedUser);
router.get("/get-all-users", UserController.getAllUsers);

// POST requests
router.post("/get-user", UserController.getUser);
router.post("/update-user", UserController.updateUser);
router.post("/create-user", UserController.createUser);
router.post("/login", UserController.login);
router.post("/logout", UserController.logout);

// DELETE requests
router.delete("/delete-user", UserController.deleteUser);

export default router;
