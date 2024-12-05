import { Request, Response, NextFunction } from "express";
import { verifyToken } from "../lib/generateToken";

interface AuthenticatedRequest extends Request{
    userId?: string
}

export const userAuth = (req: AuthenticatedRequest, res: Response, next: NextFunction)=>{
    const token = req.headers.authorization as string;

    if(!token){
        res.status(403).json({
            message: "Token is required"
        })
    }

    try {
        const decoded = verifyToken(token);
        req.userId = decoded.id;
        next();
    } catch (error) {
        console.log(`Error while verifying the token : ${error}`);
        res.status(403).json({
            message: " You are not signedin"
        })
    }
}