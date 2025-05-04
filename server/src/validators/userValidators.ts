// Library Imports
import { z } from "zod";
// Shared validators
const userIdSchema = z.string().min(1, "User ID is required");

// Specific route validators
export const createUserSchema = z.object({
  name: z.string().min(1, "Name is required"),
  emailAddress: z.string().email("Invalid email address"),
  password: z.string().min(6, "Password must be at least 6 characters"),
  role: z.string().min(1, "Role is required"),
});

export const loginSchema = z.object({
  emailAddress: z.string().email("Invalid email"),
  password: z.string().min(1, "Password is required"),
});

export const updateUserSchema = z.object({
  name: z.string().optional(),
  emailAddress: z.string().email("Invalid email").optional(),
  phoneNumber: z.string().optional(),
  role: z.string().optional(),
  userIdToEdit: userIdSchema,
});

export const verifyEmailSchema = z.object({
  userId: userIdSchema,
  verificationCode: z.string().min(1, "Verification code is required"),
});

export const deleteUserSchema = z.object({
  userId: userIdSchema,
});

export const getUserSchema = z.object({
  userId: userIdSchema,
});
