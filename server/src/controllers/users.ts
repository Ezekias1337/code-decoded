// Library Imports
import { RequestHandler } from "express";
import { Session } from "express-session";
import createHttpError from "http-errors";
import bcrypt from "bcrypt";
// Models
import UserModel from "../models/user";

interface userCreationBody {
  name?: string;
  emailAddress?: string;
  password?: string;
  role?: string;
}

interface LoginBody {
  emailAddress?: string;
  password?: string;
}

interface CustomSession extends Session {
  userId?: string;
}

export const getAuthenticatedUser: RequestHandler = async (req, res, next) => {
  const authenticatedUserIdFromSession = (req.session as CustomSession).userId;

  try {
    if (!authenticatedUserIdFromSession) {
      throw createHttpError(401, "User not authenticated.");
    }

    const user = await UserModel.findById(authenticatedUserIdFromSession)
      .select("+emailAddress")
      .exec();
    res.status(200).json(user);
  } catch (error) {
    next(error);
  }
};

export const getUser: RequestHandler = async (req, res, next) => {
  try {
    const userFromDB = await UserModel.findById(req.body.userId)
      .select("+emailAddress")
      .exec();
    res.status(200).json(userFromDB);
  } catch (error) {
    next(error);
  }
};

export const getAllUsers: RequestHandler = async (req, res, next) => {
  try {
    const arrayOfUsers = await UserModel.find().exec();
    res.status(200).json(arrayOfUsers);
  } catch (error) {
    next(error);
  }
};

export const updateUser: RequestHandler = async (req, res, next) => {
  try {
    const update = {
      $set: {
        name: req.body.name,
        emailAddress: req.body.emailAddress,
        role: req.body.role,
      },
    };

    const userFromDB = await UserModel.findOneAndUpdate(
      { emailAddress: req.body.emailAddress },
      update
    ).exec();

    res.status(200).json(userFromDB);
  } catch (error) {
    next(error);
  }
};

export const deleteUser: RequestHandler = async (req, res, next) => {
  try {
    const userFromDB = await UserModel.findByIdAndDelete(
      req.body.userId
    ).exec();

    res.status(200).json(userFromDB);
  } catch (error) {
    next(error);
  }
};

export const createUser: RequestHandler<
  unknown,
  unknown,
  userCreationBody,
  unknown
> = async (req, res, next) => {
  const name = req.body.name;
  const email = req.body.emailAddress;
  const passwordRaw = req.body.password;
  const role = req.body.role;

  try {
    if (!name || !email || !passwordRaw || !role) {
      throw createHttpError(
        400,
        "You didn't fill out all of the required fields, try again."
      );
    }

    const existingEmail = await UserModel.findOne({
      emailAddress: email,
    }).exec();

    if (existingEmail) {
      throw createHttpError(
        409,
        "Email already taken. Please choose a different one or log in."
      );
    }

    const passwordHashed = await bcrypt.hash(passwordRaw, 10);
    const newUser = await UserModel.create({
      name: name,
      emailAddress: email,
      password: passwordHashed,
      role: role,
    });

    res.status(201).json(newUser);
  } catch (error) {
    next(error);
  }
};

export const login: RequestHandler<
  unknown,
  unknown,
  LoginBody,
  unknown
> = async (req, res, next) => {
  const email = req.body.emailAddress;
  const password = req.body.password;

  try {
    if (!email || !password) {
      throw createHttpError(
        400,
        "You didn't fill out all of the required fields, try again."
      );
    }

    const user = await UserModel.findOne({ emailAddress: email })
      .select("+password +emailAddress")
      .exec();

    if (!user) {
      throw createHttpError(401, "Invalid credentials");
    }

    const passwordMatch = await bcrypt.compare(password, user.password);
    if (!passwordMatch) {
      throw createHttpError(401, "Invalid credentials");
    }

    (req.session as CustomSession).userId = user._id.toString();
    console.log("Session after login: ", req.session);

    // Set a cookie with the user's ID
    (res.cookie as any)("userId", user._id, {
      httpOnly: true, // This ensures that the cookie cannot be accessed by client-side scripts
      secure: true, // This requires HTTPS to send the cookie
      sameSite: "None", // This allows cross-origin requests
    });
    console.log("Cookie set in response: ", res.getHeaders()["set-cookie"]);

    res.status(201).json(user);
  } catch (error) {
    console.log(error);
    next(error);
  }
};

export const logout: RequestHandler = (req, res, next) => {
  req.session.destroy((error) => {
    if (error) {
      next(error);
    } else {
      res.sendStatus(200);
    }
  });
};
