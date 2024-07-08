import { InferSchemaType, model, Schema } from "mongoose";

const websiteOrAppSchema = new Schema(
  {
    name: { type: String, required: true },
    phoneNumber: { type: String, required: true },
    emailAddress: { type: String, required: true },
    doYouNeedALogo: {
      type: ["I need a new logo", "I already have a logo"],
      required: true,
    },
    describeYourDreamWebsite: {
      type: String,
      required: true,
    },
    websiteStatus: {
      type: ["Not Started", "In Progress", "Completed", "Rejected"],
      required: true,
    },
  },
  { timestamps: true, toJSON: { virtuals: true } }
);

type WebsiteOrApp = InferSchemaType<typeof websiteOrAppSchema>;

export default model<WebsiteOrApp>("WebsiteOrApp", websiteOrAppSchema);
