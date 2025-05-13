// Library Imports
import { RequestHandler } from "express";
import { Session } from "express-session";
import createHttpError from "http-errors";
import { Resend } from "resend";
import bcrypt from "bcrypt";
import { Role } from "@prisma/client";
import { prisma } from "../constants/prisma";
// Functions, Helpers, and Utils
import generateRandomNumber from "../../../shared/utils/strings/generateRandomNumbers";
// ENV
import env from "../util/validateEnv";

interface userCreationBody {
  name: string;
  phoneNumber: string;
  emailAddress: string;
  password: string;
  role: Role;
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
    html: `<!DOCTYPE html>
      <html dir="ltr" lang="en">
        <body style="font-family:'Times New Roman',Times,serif;background-color:#040a15;margin:0 auto;padding:80px 40px;">
            <table align="center" style="max-width:37.5em;margin:auto;">
              <tr><td><img src="https://codeddecoded.com/assets/images/logo/logo.png" width="300" /></td></tr>
            </table>
            <h1 style="font-size:56.8px;color:#d6e1f6;margin-top:40px;">Dear ${name},</h1>
            <p style="font-size:31.1px;color:#fcfcfd;">You have requested a change to your registered email. Your verification code is:</p>
            <table align="center" style="border:1.5px solid #4276cf;border-radius:5px;padding:40px;margin:80px auto;">
              <tr><td><p style="font-size:44.79px;color:#fcfcfd;">${verificationCode}</p></td></tr>
            </table>
            <p style="font-size:31.1px;color:#fcfcfd;">If you did not request a verification code, please disregard this email.</p>
        </body>
      </html>`,
  });
};

export const getAuthenticatedUser: RequestHandler = async (req, res, next) => {
  const authenticatedUserIdFromSession = (req.session as CustomSession).userId;

  try {
    if (!authenticatedUserIdFromSession) {
      throw createHttpError(401, "User not authenticated.");
    }

    const user = await prisma.user.findUnique({
      where: { id: authenticatedUserIdFromSession },
    });

    res.status(200).json(user);
  } catch (error) {
    next(error);
  }
};

export const getUser: RequestHandler = async (req, res, next) => {
  try {
    const userId = req.query.userId as string;

    const userFromDB = await prisma.user.findUnique({
      where: { id: userId },
    });

    res.status(200).json(userFromDB);
  } catch (error) {
    next(error);
  }
};

export const getAllUsers: RequestHandler = async (req, res, next) => {
  try {
    const arrayOfUsers = await prisma.user.findMany();
    res.status(200).json(arrayOfUsers);
  } catch (error) {
    next(error);
  }
};

export const updateUser: RequestHandler = async (req, res, next) => {
  try {
    const { name, emailAddress, phoneNumber, role, userIdToEdit } = req.body;

    const existingUser = await prisma.user.findUnique({
      where: { id: userIdToEdit },
    });

    if (!existingUser) {
      return res.status(404).json({ message: "User not found" });
    }

    if (emailAddress !== existingUser.emailAddress) {
      const verificationCode: string = generateRandomNumber(6).toString();

      await sendVerificationCode(emailAddress, verificationCode, name);

      await prisma.pendingChange.create({
        data: {
          userId: userIdToEdit,
          verificationCode,
          name,
          emailAddress,
          phoneNumber,
          role,
          profilePicture: existingUser.profilePicture,
          profilePictureType: existingUser.profilePictureType,
        },
      });

      return res.status(200).json({
        message:
          "Email Address on file is different than the one provided, verification code sent.",
      });
    }

    const updatedUser = await prisma.user.update({
      where: { id: userIdToEdit },
      data: {
        name,
        emailAddress,
        phoneNumber,
        role,
      },
    });

    res.status(200).json(updatedUser);
  } catch (error) {
    next(error);
  }
};

export const verifyEmail: RequestHandler = async (req, res, next) => {
  const { userId, verificationCode } = req.body;

  try {
    const pendingChange = await prisma.pendingChange.findFirst({
      where: {
        userId,
        verificationCode,
      },
    });

    if (!pendingChange) {
      return res.status(400).send("Invalid verification code.");
    }
    
    if(!pendingChange.emailAddress) {
      return res.status(400).send("Email address was not provided.");
    }

    await prisma.user.update({
      where: { id: userId },
      data: {
        isVerified: true,
        emailAddress: pendingChange.emailAddress,
      },
    });

    await prisma.pendingChange.delete({
      where: { id: pendingChange.id },
    });

    res.status(200).send("Email verified and changes applied successfully.");
  } catch (error) {
    res.status(500).send("An error occurred while verifying the email.");
  }
};

export const deleteUser: RequestHandler = async (req, res, next) => {
  try {
    const userFromDB = await prisma.user.delete({
      where: { id: req.body.userId },
    });

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
  const { name, phoneNumber, emailAddress, password, role } = req.body;

  try {
    if (!name || !phoneNumber || !emailAddress || !password || !role || !(role in Role)) {
      throw createHttpError(400, "Missing required fields.");
    }

    const existingEmail = await prisma.user.findUnique({
      where: { emailAddress },
    });

    if (existingEmail) {
      throw createHttpError(409, "Email already taken.");
    }

    const passwordHashed = await bcrypt.hash(password, 10);

    const newUser = await prisma.user.create({
      data: {
        name,
        phoneNumber,
        emailAddress,
        password: passwordHashed,
        role,
        isVerified: false,
      },
    });

    const verificationCode: string = generateRandomNumber(6).toString();

    await prisma.pendingChange.create({
      data: {
        userId: newUser.id,
        verificationCode,
      },
    });

    await sendVerificationCode(emailAddress, verificationCode, name);

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
      throw createHttpError(400, "Missing required fields.");
    }

    const user = await prisma.user.findUnique({
      where: { emailAddress: email },
    });

    if (!user || !user.password) {
      throw createHttpError(401, "Invalid credentials");
    }

    const passwordMatch = await bcrypt.compare(password, user.password);
    if (!passwordMatch) {
      throw createHttpError(401, "Invalid credentials");
    }

    (req.session as CustomSession).userId = user.id;

    res.status(200).json(user);
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
