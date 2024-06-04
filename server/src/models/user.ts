import { InferSchemaType, model, Schema } from "mongoose";

const userSchema = new Schema(
  {
    name: { type: String, required: true },
    emailAddress: { type: String, required: true, unique: true, select: false },
    password: { type: String, required: true, select: false },
    role: {
      type: ["Admin", "Admin Assistant", "Employee"],
      required: true,
    },
    profilePicture: {
      type: Buffer,
      required: false,
    },
    profilePictureType: {
      type: String,
      required: false,
    },
  },
  { timestamps: true, toJSON: { virtuals: true } }
);

userSchema.virtual("profilePicturePath").get(function () {
  if (this.profilePicture != null && this.profilePictureType != null) {
    return `data:${
      this.profilePictureType
    };charset=utf-8;base64,${this.profilePicture.toString("base64")}`;
  }
});

type User = InferSchemaType<typeof userSchema>;

export default model<User>("User", userSchema);
