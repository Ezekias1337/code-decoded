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
  doYouNeedALogo: string;
  describeYourDreamWebsite: string;
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

export const getNotStartedWebsitesOrApps: RequestHandler = async (req, res, next) => {
  try {
    const arrayOfNotStartedWebsitesOrApps = await WebsiteOrAppModel.find({
      websiteStatus: "Not Started",
    }).exec();
    res.status(200).json(arrayOfNotStartedWebsitesOrApps);
  } catch (error) {
    next(error);
  }
};

export const getInProgressWebsitesOrApps: RequestHandler = async (req, res, next) => {
  try {
    const arrayOfInProgressWebsitesOrApps = await WebsiteOrAppModel.find({
      websiteStatus: "In Progress",
    }).exec();
    res.status(200).json(arrayOfInProgressWebsitesOrApps);
  } catch (error) {
    next(error);
  }
};

export const getCompletedWebsitesOrApps: RequestHandler = async (req, res, next) => {
  try {
    const arrayOfCompletedWebsitesOrApps = await WebsiteOrAppModel.find({
      websiteStatus: "Completed",
    }).exec();
    res.status(200).json(arrayOfCompletedWebsitesOrApps);
  } catch (error) {
    next(error);
  }
};

export const getRejectedWebsitesOrApps: RequestHandler = async (req, res, next) => {
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
  const needLogo = req.body.doYouNeedALogo;
  const websiteDescription = req.body.describeYourDreamWebsite;
  const websiteStatus = "Not Started";

  try {
    if (
      !name ||
      !phoneNumber ||
      !emailAddress ||
      !needLogo ||
      !websiteDescription
    ) {
      throw createHttpError(
        400,
        "You didn't fill out all of the required fields, try again."
      );
    }

    const newWebsiteOrApp = await WebsiteOrAppModel.create({
      name: name,
      phoneNumber: phoneNumber,
      emailAddress: emailAddress,
      needLogo: needLogo,
      websiteDescription: websiteDescription,
      websiteStatus: websiteStatus,
    });

    res.status(201).json(newWebsiteOrApp);
    const resend = new Resend(env.EMAIL_KEY);

    await resend.emails.send({
      from: "no-reply@codedecoded.com",
      to: ["overlord@codedecoded.com"],
      subject: "New Website Submitted",
      html: `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
      <html dir="ltr" lang="en">
      
        <body style="font-family:&quot;Times New Roman&quot;,Times,serif;background-color:#e6e6e6;margin:0 auto;padding:40px;color:#264166"><img src="https://www.osa-law.com/assets/Full_Logo-0c350564.png" style="display:block;outline:none;border:none;text-decoration:none" width="300" />
          <h1>
            <p style="font-size:56.8px;line-height:60px;margin:16px 0;background-color:#264166;color:#e6e6e6;padding-top:40px;padding-bottom:40px;padding-left:40px;padding-right:40px">We have received a new potential customer:</p>
          </h1>
          <p style="font-size:32px;line-height:30px;margin:16px 0;color:#264166"><strong>Customer Name:</strong> ${name}</p>
          <p style="font-size:32px;line-height:30px;margin:16px 0;color:#264166"><strong>Phone Number:</strong> ${phoneNumber}</p>
          <p style="font-size:32px;line-height:30px;margin:16px 0;color:#264166"><strong>Email Address:</strong> ${emailAddress}</p>
          <p style="font-size:32px;line-height:30px;margin:16px 0;color:#264166"><strong>Need Logo:</strong> ${needLogo}</p>
          <p style="font-size:32px;line-height:30px;margin:16px 0;color:#264166"><strong>Website Description:</strong> ${websiteDescription}</p>
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
