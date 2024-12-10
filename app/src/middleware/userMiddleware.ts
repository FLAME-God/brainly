import { Request, Response, NextFunction, RequestHandler } from "express";
import { verifyToken } from "../lib/generateToken";

interface AuthenticatedRequest extends Request {
    userId?: string;
}

type AuthenticatedRequestHandler = (req: AuthenticatedRequest, res: Response, next: NextFunction) => void;

export const userAuth: AuthenticatedRequestHandler = (req, res, next) => {
    const authHeader = req.headers.authorization;

    if (!authHeader) {
        return res.status(403).json({
            message: "Token is required",
        });
    }

    const token = authHeader.startsWith("Bearer ") ? authHeader.split(" ")[1] : authHeader;

    try {
        const decoded = verifyToken(token);
        req.userId = decoded.id;

        next();
    } catch (error) {
        console.error(`Error while verifying the token: ${error}`);
        return res.status(403).json({
            message: "You are not signed in",
        });
    }
};
