// Library Imports
import { RequestHandler } from "express";
import createHttpError from "http-errors";
import { prisma } from "../constants/prisma"; // Assuming this is where your Prisma instance is
import { Resend } from "resend";
// ENV
import env from "../util/validateEnv";

// Types
interface WebsiteOrAppCreationBody {
  name: string;
  phoneNumber: string;
  emailAddress: string;
  productTier: string;
  describeYourDreamWebsiteOrApp: string;
  websiteStatus: string;
}

export const getWebsiteOrApp: RequestHandler = async (req, res, next) => {
  try {
    const websiteOrAppFromDB = await prisma.websiteOrApp.findUnique({
      where: { id: parseInt(req.params.websiteId) },
    });

    if (!websiteOrAppFromDB) {
      return res.status(404).json({ error: "Website with the given ID doesn't exist" });
    }

    res.status(200).json(websiteOrAppFromDB);
  } catch (error) {
    next(error);
  }
};

export const getAllWebsitesOrApps: RequestHandler = async (req, res, next) => {
  try {
    const arrayOfWebsitesOrApps = await prisma.websiteOrApp.findMany();

    if (!arrayOfWebsitesOrApps.length) {
      return res.status(404).json({
        error: "Unable to fetch websites from the Database, verify server is running properly.",
      });
    }

    res.status(200).json(arrayOfWebsitesOrApps);
  } catch (error) {
    next(error);
  }
};

export const getNotStartedWebsitesOrApps: RequestHandler = async (req, res, next) => {
  try {
    const arrayOfNotStartedWebsitesOrApps = await prisma.websiteOrApp.findMany({
      where: { websiteStatus: "Not Started" },
    });
    res.status(200).json(arrayOfNotStartedWebsitesOrApps);
  } catch (error) {
    next(error);
  }
};

export const getInProgressWebsitesOrApps: RequestHandler = async (req, res, next) => {
  try {
    const arrayOfInProgressWebsitesOrApps = await prisma.websiteOrApp.findMany({
      where: { websiteStatus: "In Progress" },
    });
    res.status(200).json(arrayOfInProgressWebsitesOrApps);
  } catch (error) {
    next(error);
  }
};

export const getCompletedWebsitesOrApps: RequestHandler = async (req, res, next) => {
  try {
    const arrayOfCompletedWebsitesOrApps = await prisma.websiteOrApp.findMany({
      where: { websiteStatus: "Completed" },
    });
    res.status(200).json(arrayOfCompletedWebsitesOrApps);
  } catch (error) {
    next(error);
  }
};

export const getRejectedWebsitesOrApps: RequestHandler = async (req, res, next) => {
  try {
    const arrayOfRejectedWebsitesOrApps = await prisma.websiteOrApp.findMany({
      where: { websiteStatus: "Rejected" },
    });
    res.status(200).json(arrayOfRejectedWebsitesOrApps);
  } catch (error) {
    next(error);
  }
};

export const approveWebsiteOrApp: RequestHandler = async (req, res, next) => {
  try {
    const approvedWebsiteOrApp = await prisma.websiteOrApp.update({
      where: { id: req.body.websiteId },
      data: { websiteStatus: "In Progress" },
    });

    res.status(200).json(approvedWebsiteOrApp);
  } catch (error) {
    next(error);
  }
};

export const rejectWebsiteOrApp: RequestHandler = async (req, res, next) => {
  try {
    const rejectedWebsiteOrApp = await prisma.websiteOrApp.update({
      where: { id: req.body.websiteId },
      data: { websiteStatus: "Rejected" },
    });

    res.status(200).json(rejectedWebsiteOrApp);
  } catch (error) {
    next(error);
  }
};

export const createWebsiteOrApp: RequestHandler = async (req, res, next) => {
  const { name, phoneNumber, emailAddress, productTier, describeYourDreamWebsiteOrApp } = req.body;

  try {
    if (!name || !phoneNumber || !emailAddress || !productTier || !describeYourDreamWebsiteOrApp) {
      throw createHttpError(400, "Missing required fields.");
    }

    const newWebsiteOrApp = await prisma.websiteOrApp.create({
      data: {
        name,
        phoneNumber,
        emailAddress,
        productTier,
        describeYourDreamWebsiteOrApp,
        websiteStatus: "Not Started",
      },
    });

    res.status(201).json(newWebsiteOrApp);
  } catch (error) {
    next(error);
  }
};

export const deleteWebsiteOrApp: RequestHandler = async (req, res, next) => {
  const { websiteOrAppId } = req.params;

  try {
    const deletedWebsiteOrApp = await prisma.websiteOrApp.delete({
      where: { id: parseInt(websiteOrAppId) },
    });

    res.status(200).json({ message: "Website or app deleted successfully", deletedWebsiteOrApp });
  } catch (error) {

    console.error(error);
    next(error);
  }
};
