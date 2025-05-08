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

// Auth-related
router.post("/login", validateRequest(loginSchema), UserController.login);
router.post("/logout", UserController.logout);
router.post("/verify-email", validateRequest(verifyEmailSchema), UserController.verifyEmail);

// Users
router.get("/me", UserController.getAuthenticatedUser);
router.get("/", UserController.getAllUsers);
router.get("/:userId", validateRequest(getUserSchema, "params"), UserController.getUser);
router.post("/", validateRequest(createUserSchema), UserController.createUser);
router.patch("/:userId", validateRequest(updateUserSchema), UserController.updateUser);
router.delete("/:userId", validateRequest(deleteUserSchema), UserController.deleteUser);

export default router;
