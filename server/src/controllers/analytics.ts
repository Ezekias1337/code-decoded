// Library Imports
import { RequestHandler } from "express";
import createHttpError from "http-errors";
import { Resend } from "resend";
// Models
import AnalyticsModel from "../models/analytics";

/* export const getAnalyticsByBrowser: RequestHandler = async (req, res, next) => {
  try {
    const browserAnalytics = await AnalyticsModel.findById(
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
    const arrayOfWebsitesOrApps = await AnalyticsModel.find().exec();

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
 */

export const updateAnalytics: RequestHandler = async (req, res, next) => {
  let currentDocumentExists;

  try {
    currentDocumentExists = await AnalyticsModel.findOne({
      userIdentifier: req.body.userIdentifier,
    });
  } catch (error) {
    next(error);
  }

  if (currentDocumentExists === null || undefined) {
    try {
      const analyticsData = new AnalyticsModel(req.body);
      await analyticsData.save();
      res.status(201).send(analyticsData);
    } catch (error) {
      next(error);
    }
  } else {
    try {
      let analyticsData = await AnalyticsModel.findOneAndUpdate(
        { userIdentifier: req.body.userIdentifier },
        req.body
      ).exec();

      res.status(201).send(analyticsData);
    } catch (error) {
      next(error);
    }
  }
};
