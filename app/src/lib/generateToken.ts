import jwt, { JwtPayload } from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();

interface CustomJwtPayload extends JwtPayload {
    id: string;
}

const jwt_secret_key: string = process.env.JWT_PASSWORD || "defaultSecretKey";

export function createToken(payload: CustomJwtPayload) {
    return jwt.sign(payload, jwt_secret_key, { expiresIn: "1h" }); 
}

export function verifyToken(token: string): CustomJwtPayload {
    try {
        return jwt.verify(token, jwt_secret_key) as CustomJwtPayload;
    } catch (error) {
        throw new Error("Invalid or expired token");
    }
}
