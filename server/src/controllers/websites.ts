// Library Imports
import { RequestHandler } from "express";
import createHttpError from "http-errors";
import { Server } from "socket.io";
import { Resend } from "resend";
// Models
import WebsiteModel from "../models/website";
// ENV
import env from "../util/validateEnv";

interface websiteCreationBody {
  name: string;
  phoneNumber: string;
  emailAddress: string;
  doYouNeedALogo: string;
  describeYourDreamWebsite: string;
  websiteStatus: string;
}

export const getWebsite: RequestHandler = async (req, res, next) => {
  try {
    const websiteFromDB = await WebsiteModel.findById(
      req.params.websiteId
    ).exec();

    if (!websiteFromDB) {
      return res
        .status(404)
        .json({ error: "Website with the given ID doesn't exist" });
    }

    res.status(200).json(websiteFromDB);
  } catch (error) {
    next(error);
  }
};

export const getAllWebsites: RequestHandler = async (req, res, next) => {
  try {
    const arrayOfWebsites = await WebsiteModel.find().exec();

    if (!arrayOfWebsites) {
      return res.status(404).json({
        error:
          "Unable to fetch websites from the Database, verify server is running properly.",
      });
    }

    res.status(200).json(arrayOfWebsites);
  } catch (error) {
    next(error);
  }
};

export const getNotStartedWebsites: RequestHandler = async (req, res, next) => {
  try {
    const arrayOfNotStartedWebsites = await WebsiteModel.find({
      websiteStatus: "Not Started",
    }).exec();
    res.status(200).json(arrayOfNotStartedWebsites);
  } catch (error) {
    next(error);
  }
};

export const getInProgressWebsites: RequestHandler = async (req, res, next) => {
  try {
    const arrayOfInProgressWebsites = await WebsiteModel.find({
      websiteStatus: "In Progress",
    }).exec();
    res.status(200).json(arrayOfInProgressWebsites);
  } catch (error) {
    next(error);
  }
};

export const getCompletedWebsites: RequestHandler = async (req, res, next) => {
  try {
    const arrayOfCompletedWebsites = await WebsiteModel.find({
      websiteStatus: "Completed",
    }).exec();
    res.status(200).json(arrayOfCompletedWebsites);
  } catch (error) {
    next(error);
  }
};

export const getRejectedWebsites: RequestHandler = async (req, res, next) => {
  try {
    const arrayOfRejectedWebsites = await WebsiteModel.find({
      websiteStatus: "Rejected",
    }).exec();
    res.status(200).json(arrayOfRejectedWebsites);
  } catch (error) {
    next(error);
  }
};

export const approveWebsite: RequestHandler = async (req, res, next) => {
  try {
    const approvedWebsite = await WebsiteModel.findOneAndUpdate(
      { _id: req.body.websiteId },
      { $set: { websiteStatus: "In Progress" } },
      { new: true }
    ).exec();
    res.status(200).json(approvedWebsite);
  } catch (error) {
    next(error);
  }
};

export const rejectWebsite: RequestHandler = async (req, res, next) => {
  try {
    const rejectedWebsite = await WebsiteModel.findOneAndUpdate(
      { _id: req.body.websiteId },
      { $set: { websiteStatus: "Rejected" } },
      { new: true }
    ).exec();
    res.status(200).json(rejectedWebsite);
  } catch (error) {
    next(error);
  }
};

export const createWebsite: RequestHandler<
  unknown,
  unknown,
  websiteCreationBody,
  unknown
> = async (req, res, next) => {
  const name = req.body.name;
  const phoneNumber = req.body.phoneNumber;
  const emailAddress = req.body.emailAddress;
  const needLogo = req.body.doYouNeedALogo;
  const websiteDescription = req.body.describeYourDreamWebsite;
  const websiteStatus = "Not Started";

  const io: Server = req.app.get("io");

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

    const newWebsite = await WebsiteModel.create({
      name: name,
      phoneNumber: phoneNumber,
      emailAddress: emailAddress,
      needLogo: needLogo,
      websiteDescription: websiteDescription,
      websiteStatus: websiteStatus,
    });

    res.status(201).json(newWebsite);
    const resend = new Resend(env.EMAIL_KEY);

    await resend.emails.send({
      from: "no-reply@weblordshub.com",
      to: ["overlord@weblordshub.com"],
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

export const deleteWebsite: RequestHandler = async (req, res, next) => {
  try {
    const websiteFromDB = await WebsiteModel.findByIdAndDelete(
      req.body.websiteId
    ).exec();

    res.status(200).json(websiteFromDB);
  } catch (error) {
    next(error);
  }
};
