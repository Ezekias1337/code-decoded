import { Schema, model, Document } from "mongoose";
import  User  from "./user"; // Adjust the path as necessary

interface PendingChanges extends Document {
  userId: Schema.Types.ObjectId;
  changes: {
    name?: string;
    emailAddress?: string;
    phoneNumber?: string;
    role?: "Admin" | "Admin Assistant" | "Employee" | "User";
    profilePicture?: Buffer;
    profilePictureType?: string;
  };
  verificationCode: string;
  createdAt: Date;
}

const pendingChangesSchema = new Schema<PendingChanges>(
  {
    userId: { type: Schema.Types.ObjectId, ref: "User", required: true },
    changes: {
      name: { type: String },
      emailAddress: { type: String },
      phoneNumber: { type: String },
      role: { type: String, enum: ["Admin", "Admin Assistant", "Employee", "User"] },
      profilePicture: { type: Buffer },
      profilePictureType: { type: String },
    },
    verificationCode: { type: String, required: true },
    createdAt: { type: Date, default: Date.now, expires: '1h' }, // expires after 1 hour
  },
  { timestamps: true }
);

export default model<PendingChanges>("PendingChanges", pendingChangesSchema);
