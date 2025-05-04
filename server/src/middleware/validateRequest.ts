// Library Imports
import { Request, Response, NextFunction } from "express";
import { ZodSchema } from "zod";

type Location = "body" | "query" | "params" | undefined;

const validateRequest = (schema: ZodSchema<any>, location: Location = "body") => {
    return (req: Request, res: Response, next: NextFunction) => {
        const data = req[location || "body"];
        const result = schema.safeParse(data);
        if (!result.success) {
            return res.status(400).json({ errors: result.error.flatten() });
        }
        next();
    };
};

export default validateRequest;
