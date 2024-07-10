// Library Imports
import { RequestHandler } from "express";
import createHttpError from "http-errors";
import { Resend } from "resend";
// Models
import WebsiteOrAppModel from "../models/websiteOrApp";
// ENV
import env from "../util/validateEnv";

interface websiteOrAppCreationBody {
  name: string;
  phoneNumber: string;
  emailAddress: string;
  productTier: string;
  describeYourDreamWebsiteOrApp: string;
  websiteStatus: string;
}

export const getWebsiteOrApp: RequestHandler = async (req, res, next) => {
  try {
    const websiteOrAppFromDB = await WebsiteOrAppModel.findById(
      req.params.websiteId
    ).exec();

    if (!websiteOrAppFromDB) {
      return res
        .status(404)
        .json({ error: "Website with the given ID doesn't exist" });
    }

    res.status(200).json(websiteOrAppFromDB);
  } catch (error) {
    next(error);
  }
};

export const getAllWebsitesOrApps: RequestHandler = async (req, res, next) => {
  try {
    const arrayOfWebsitesOrApps = await WebsiteOrAppModel.find().exec();

    if (!arrayOfWebsitesOrApps) {
      return res.status(404).json({
        error:
          "Unable to fetch websites from the Database, verify server is running properly.",
      });
    }

    res.status(200).json(arrayOfWebsitesOrApps);
  } catch (error) {
    next(error);
  }
};

export const getNotStartedWebsitesOrApps: RequestHandler = async (
  req,
  res,
  next
) => {
  try {
    const arrayOfNotStartedWebsitesOrApps = await WebsiteOrAppModel.find({
      websiteStatus: "Not Started",
    }).exec();
    res.status(200).json(arrayOfNotStartedWebsitesOrApps);
  } catch (error) {
    next(error);
  }
};

export const getInProgressWebsitesOrApps: RequestHandler = async (
  req,
  res,
  next
) => {
  try {
    const arrayOfInProgressWebsitesOrApps = await WebsiteOrAppModel.find({
      websiteStatus: "In Progress",
    }).exec();
    res.status(200).json(arrayOfInProgressWebsitesOrApps);
  } catch (error) {
    next(error);
  }
};

export const getCompletedWebsitesOrApps: RequestHandler = async (
  req,
  res,
  next
) => {
  try {
    const arrayOfCompletedWebsitesOrApps = await WebsiteOrAppModel.find({
      websiteStatus: "Completed",
    }).exec();
    res.status(200).json(arrayOfCompletedWebsitesOrApps);
  } catch (error) {
    next(error);
  }
};

export const getRejectedWebsitesOrApps: RequestHandler = async (
  req,
  res,
  next
) => {
  try {
    const arrayOfRejectedWebsitesOrApps = await WebsiteOrAppModel.find({
      websiteStatus: "Rejected",
    }).exec();
    res.status(200).json(arrayOfRejectedWebsitesOrApps);
  } catch (error) {
    next(error);
  }
};

export const approveWebsiteOrApp: RequestHandler = async (req, res, next) => {
  try {
    const approvedWebsiteOrApp = await WebsiteOrAppModel.findOneAndUpdate(
      { _id: req.body.websiteId },
      { $set: { websiteStatus: "In Progress" } },
      { new: true }
    ).exec();
    res.status(200).json(approvedWebsiteOrApp);
  } catch (error) {
    next(error);
  }
};

export const rejectWebsiteOrApp: RequestHandler = async (req, res, next) => {
  try {
    const rejectedWebsiteOrApp = await WebsiteOrAppModel.findOneAndUpdate(
      { _id: req.body.websiteId },
      { $set: { websiteStatus: "Rejected" } },
      { new: true }
    ).exec();
    res.status(200).json(rejectedWebsiteOrApp);
  } catch (error) {
    next(error);
  }
};

export const createWebsiteOrApp: RequestHandler<
  unknown,
  unknown,
  websiteOrAppCreationBody,
  unknown
> = async (req, res, next) => {
  const name = req.body.name;
  const phoneNumber = req.body.phoneNumber;
  const emailAddress = req.body.emailAddress;
  const productTier = req.body.productTier;
  const websiteDescription = req.body.describeYourDreamWebsiteOrApp;
  const websiteStatus = "Not Started";

  try {
    if (
      !name ||
      !phoneNumber ||
      !emailAddress ||
      !productTier ||
      !websiteDescription
    ) {
      throw createHttpError(
        400,
        "You didn't fill out all of the required fields, try again."
      );
    }

    if (name.length > 100) {
      throw createHttpError(400, "Name is too long, try again.");
    } else if (phoneNumber.length > 20) {
      throw createHttpError(400, "Phone number is too long, try again.");
    } else if (emailAddress.length > 100) {
      throw createHttpError(400, "Email address is too long, try again.");
    } else if (websiteDescription.length > 5000) {
      throw createHttpError(400, "Description is too long, try again.");
    }

    const newWebsiteOrApp = await WebsiteOrAppModel.create({
      name: name,
      phoneNumber: phoneNumber,
      emailAddress: emailAddress,
      productTier: productTier,
      websiteOrAppDescription: websiteDescription,
      websiteStatus: websiteStatus,
    });

    res.status(201).json(newWebsiteOrApp);
    const resend = new Resend(env.EMAIL_KEY);

    await resend.emails.send({
      from: "no-reply@codeddecoded.com",
      to: ["codedecodedbiz@gmail.com"],
      subject: "New Website or App Request Submitted",
      html: `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
        <html dir="ltr" lang="en">
          <body style="font-family:&quot;Times New Roman&quot;,Times,serif;background-color:#040a15;margin:0 auto;padding-left:40px;padding-right:40px;padding-top:80px;padding-bottom:80px"><img src="https://codeddecoded.com/assets/images/logo/logo.png" style="display:block;outline:none;border:none;text-decoration:none" width="300" />
            <h1>
              <p style="font-size:56.8px;line-height:40px;margin:16px 0;color:#4276cf;padding-bottom:40px">We have received a new potential customer:</p>
            </h1>
            <p style="font-size:31.1px;line-height:30px;margin:16px 0;color:#fcfcfd"><strong style="font-size:31.1px;line-height:30px;color:#84a5e2">Name:</strong> ${name}</p>
            <p style="font-size:31.1px;line-height:30px;margin:16px 0;color:#fcfcfd"><strong style="font-size:31.1px;line-height:30px;color:#84a5e2">Phone Number:</strong> ${phoneNumber}</p>
            <p style="font-size:31.1px;line-height:30px;margin:16px 0;color:#fcfcfd"><strong style="font-size:31.1px;line-height:30px;color:#84a5e2">Email Address:</strong> <a style="color:#4276cf;text-decoration:none;font-size:31.1px;line-height:30px" target="_blank">${emailAddress}</a></p>
            <p style="font-size:31.1px;line-height:30px;margin:16px 0;color:#fcfcfd"><strong style="font-size:31.1px;line-height:30px;color:#84a5e2">Product Tier:</strong> ${productTier}</p>
            <p style="font-size:31.1px;line-height:30px;margin:16px 0;color:#fcfcfd"><strong style="font-size:31.1px;line-height:30px;color:#84a5e2">Website Description:</strong> ${websiteDescription}</p>
          </body>
        </html>`,
    });
  } catch (error) {
    console.log(error);
    next(error);
  }
};

export const deleteWebsiteOrApp: RequestHandler = async (req, res, next) => {
  try {
    const websiteOrAppFromDB = await WebsiteOrAppModel.findByIdAndDelete(
      req.body.websiteId
    ).exec();

    res.status(200).json(websiteOrAppFromDB);
  } catch (error) {
    next(error);
  }
};
