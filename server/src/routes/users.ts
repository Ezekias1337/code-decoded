// Library Imports
import express from "express";
import * as UserController from "../controllers/users";

// Middleware
import validateRequest from "../middleware/validateRequest";

// Validators
import {
  createUserSchema,
  loginSchema,
  updateUserSchema,
  verifyEmailSchema,
  deleteUserSchema,
  getUserSchema,
} from "../validators/userValidators";

const router = express.Router();

// GET requests
router.get("/get-authenticated-user", UserController.getAuthenticatedUser);
router.get("/get-all-users", UserController.getAllUsers);
router.get("/get-user/:userId", validateRequest(getUserSchema, "params"), UserController.getUser);

// POST requests
router.post("/login", validateRequest(loginSchema), UserController.login);
router.post("/logout", UserController.logout);
router.post("/get-user", validateRequest(getUserSchema), UserController.getUser);
router.post("/create-user", validateRequest(createUserSchema), UserController.createUser);
router.post("/verify-email", validateRequest(verifyEmailSchema), UserController.verifyEmail);

// PATCH requests
router.patch("/update-user", validateRequest(updateUserSchema), UserController.updateUser);

// DELETE requests
router.delete("/delete-user", validateRequest(deleteUserSchema), UserController.deleteUser);

export default router;
