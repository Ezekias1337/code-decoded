// Library Imports
import { RequestHandler } from "express";
import { Session } from "express-session";
import createHttpError from "http-errors";
import { Resend } from "resend";
import bcrypt from "bcrypt";
// Models
import UserModel from "../models/user";
import PendingChangesModel from "../models/pendingChanges";
// Functions, Helpers, and Utils
import generateRandomNumber from "../../../shared/utils/strings/generateRandomNumbers";
// ENV
import env from "../util/validateEnv";

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

const sendVerificationCode = async (
  emailAddress: string,
  verificationCode: string,
  name: string
) => {
  const resend = new Resend(env.EMAIL_KEY);

  await resend.emails.send({
    from: "no-reply@codeddecoded.com",
    to: [`${emailAddress}`],
    subject: "Your Email Verification Code",
    html: `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
                <html dir="ltr" lang="en">
                  <body style="font-family:&quot;Times New Roman&quot;,Times,serif;background-color:#040a15;margin:0 auto;padding-left:40px;padding-right:40px;padding-top:80px;padding-bottom:80px">
                      <table align="center" width="100%" border="0" cellPadding="0" cellSpacing="0" role="presentation" style="max-width:37.5em;display:flex;justify-content:center;align-items:center">
                        <tbody>
                            <tr style="width:100%">
                              <td><img src="https://codeddecoded.com/assets/images/logo/logo.png" style="display:block;outline:none;border:none;text-decoration:none" width="300" /></td>
                            </tr>
                        </tbody>
                      </table>
                      <h1>
                        <p style="font-size:56.8px;line-height:40px;margin:16px 0;color:#d6e1f6;padding-bottom:40px">Dear ${name}, </p>
                      </h1>
                      <p style="font-size:31.1px;line-height:30px;margin:16px 0;color:#fcfcfd">You have requested a change to your registered email. Your verification code is:</p>
                      <table align="center" width="100%" border="0" cellPadding="0" cellSpacing="0" role="presentation" style="max-width:37.5em;border:1.5px solid;border-color:#4276cf;border-radius:5px;padding:40px;display:flex;justify-content:center;align-items:center;margin-top:80px;margin-bottom:80px">
                        <tbody>
                            <tr style="width:100%">
                              <td>
                                  <p style="font-size:44.79px;line-height:30px;margin:16px 0;color:#fcfcfd">${verificationCode}</p>
                              </td>
                            </tr>
                        </tbody>
                      </table>
                      <p style="font-size:31.1px;line-height:30px;margin:16px 0;color:#fcfcfd">If you did not request a verification code, please disregard this email.</p>
                  </body>
                </html>
                `,
  });
};

export const getAuthenticatedUser: RequestHandler = async (req, res, next) => {
  const authenticatedUserIdFromSession = (req.session as CustomSession).userId;

  try {
    if (!authenticatedUserIdFromSession) {
      throw createHttpError(401, "User not authenticated.");
    }

    const user = await UserModel.findById(
      authenticatedUserIdFromSession
    ).exec();
    res.status(200).json(user);
  } catch (error) {
    next(error);
  }
};

export const getUser: RequestHandler = async (req, res, next) => {
  try {
    const userId = req.query.userId as string;
    const userFromDB = await UserModel.findById(userId).exec();
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
    const { name, emailAddress, phoneNumber, role, userIdToEdit } = req.body;

    // Fetch the existing user data
    const existingUser = await UserModel.findById(userIdToEdit).exec();

    if (!existingUser) {
      return res.status(404).json({ message: "User not found" });
    }

    // Check if the new email address is different
    if (emailAddress !== existingUser.emailAddress) {
      const verificationCode = generateRandomNumber(6, "string");
      await sendVerificationCode(
        emailAddress,
        verificationCode as string,
        name
      );

      await PendingChangesModel.create({
        userId: userIdToEdit,
        changes: {
          ...(name && { name }),
          ...(emailAddress && { emailAddress }),
          ...(phoneNumber && { phoneNumber }),
          ...(role && { role }),
        },
        verificationCode,
      });

      return res.status(400).json({
        message:
          "Email Address on file is different than the one provided, verification code sent.",
      });
    }

    // Proceed with the update
    const update = {
      $set: {
        name,
        emailAddress,
        phoneNumber,
        role,
      },
    };

    const updatedUser = await UserModel.findOneAndUpdate(
      { _id: existingUser._id },
      update,
      { new: true } // This option ensures the updated document is returned
    ).exec();

    res.status(200).json(updatedUser);
  } catch (error) {
    next(error);
  }
};

export const verifyEmail: RequestHandler = async (req, res, next) => {
  const { userId, verificationCode } = req.body;

  try {
    const pendingChange = await PendingChangesModel.findOne({
      userId,
      verificationCode,
    });
    if (!pendingChange) {
      return res.status(400).send("Invalid verification code.");
    }

    const {
      name,
      emailAddress,
      phoneNumber,
      role,
      profilePicture,
      profilePictureType,
    } = pendingChange.changes;

    await UserModel.findByIdAndUpdate(userId, {
      ...(name && { name }),
      ...(emailAddress && { emailAddress }),
      ...(phoneNumber && { phoneNumber }),
      ...(role && { role }),
      ...(profilePicture && { profilePicture }),
      ...(profilePictureType && { profilePictureType }),
    });

    await pendingChange.deleteOne();

    res.status(200).send("Email verified and changes applied successfully.");
  } catch (error) {
    res.status(500).send("An error occurred while verifying the email.");
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
  const { name, emailAddress: email, password, role } = req.body;

  try {
    if (!name || !email || !password || !role) {
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

    const passwordHashed = await bcrypt.hash(password, 10);
    const newUser = await UserModel.create({
      name,
      emailAddress: email,
      password: passwordHashed,
      role,
      isVerified: false,
    });

    const verificationCode = generateRandomNumber(6, "string");
    await PendingChangesModel.create({
      userId: newUser._id,
      changes: {},
      verificationCode,
    });

    await sendVerificationCode(email, verificationCode as string, name);

    res.status(201).json({
      message: "User created. Please check your email to verify your account.",
    });
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
      .select("+password")
      .exec();

    if (!user) {
      throw createHttpError(401, "Invalid credentials");
    }

    const passwordMatch = await bcrypt.compare(password, user.password);
    if (!passwordMatch) {
      throw createHttpError(401, "Invalid credentials");
    }

    (req.session as CustomSession).userId = user._id.toString();

    // Set a cookie with the user's ID
    (res.cookie as any)("userId", user._id, {
      httpOnly: true, // This ensures that the cookie cannot be accessed by client-side scripts
      secure: true, // This requires HTTPS to send the cookie
      sameSite: "None", // This allows cross-origin requests
    });

    res.status(201).json(user);
  } catch (error) {
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
