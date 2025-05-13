// Library Imports
import { RequestHandler } from "express";
import createHttpError from "http-errors";
import { prisma } from "../constants/prisma";

export const updateAnalytics: RequestHandler = async (req, res, next) => {
  const { userIdentifier, userAgentInfo, pageVisits, baseUrl } = req.body;

  try {
    if (!userIdentifier) {
      throw createHttpError(400, "Missing required field: userIdentifier.");
    }

    if (!Array.isArray(pageVisits)) {
      throw createHttpError(400, "pageVisits must be an array.");
    }

    const formattedPageVisits = pageVisits.map((visit: any) => ({
      path: visit.path,
      timestamp: new Date(visit.timestamp),
    }));

    const existingEntry = await prisma.analytics.findUnique({
      where: { userIdentifier },
    });

    if (existingEntry) {
      // Optionally add new visits to the existing entry
      await prisma.pageVisit.createMany({
        data: formattedPageVisits.map((visit) => ({
          ...visit,
          analyticsId: userIdentifier,
        })),
        skipDuplicates: true, // Optional: avoids duplicate inserts if UUIDs were being used
      });

      const updatedAnalytics = await prisma.analytics.update({
        where: { userIdentifier },
        data: {
          userAgentInfo,
          baseUrl,
        },
        include: {
          pageVisits: true,
        },
      });

      res.status(200).json(updatedAnalytics);
    } else {
      // Create new analytics entry with nested pageVisits
      const newAnalytics = await prisma.analytics.create({
        data: {
          userIdentifier,
          userAgentInfo,
          baseUrl,
          pageVisits: {
            create: formattedPageVisits,
          },
        },
        include: {
          pageVisits: true,
        },
      });

      res.status(201).json(newAnalytics);
    }
  } catch (error) {
    next(error);
  }
};


export const getAnalyticsByUserIdentifier: RequestHandler = async (req, res, next) => {
  const userIdentifier = req.params.userIdentifier;

  try {
    if (!userIdentifier) {
      throw createHttpError(400, "Missing user identifier in request params.");
    }

    const analytics = await prisma.analytics.findUnique({
      where: { userIdentifier },
    });

    if (!analytics) {
      return res.status(404).json({
        error: "Analytics entry not found for the provided user identifier.",
      });
    }

    res.status(200).json(analytics);
  } catch (error) {
    next(error);
  }
};

export const getAllAnalytics: RequestHandler = async (req, res, next) => {
  try {
    const allAnalytics = await prisma.analytics.findMany();
    res.status(200).json(allAnalytics);
  } catch (error) {
    next(error);
  }
};
