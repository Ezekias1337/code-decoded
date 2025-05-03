import { InferSchemaType, model, Schema } from "mongoose";

const pageVisitSchema = new Schema(
  {
    path: { type: String, required: true },
    timestamp: { type: Date, required: true },
  },
  { _id: false } // Disable _id for subdocuments
);

const userAgentInfoSchema = new Schema(
  {
    browser: { type: String, required: true },
    device: { type: String, required: true },
    os: { type: String, required: true },
  },
  { _id: false } // Disable _id for subdocuments
);

const analyticsSchema = new Schema(
  {
    userIdentifier: { type: String, required: true, unique: true },
    baseUrl: { type: String, required: true, unique: true },
    userAgentInfo: { type: userAgentInfoSchema, required: true },
    pageVisits: { type: [pageVisitSchema], required: true },
  },
  { timestamps: true }
);

type Analytics = InferSchemaType<typeof analyticsSchema>;

export default model<Analytics>("Analytics", analyticsSchema);
