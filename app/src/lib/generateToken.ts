import jwt, { JwtPayload } from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

interface CustomJwtPayload extends JwtPayload {
    id: string;
}

const jwt_secret_key: string = process.env.JWT_PASSWORD || "defaultSecretKey";

export function createToken(payload: CustomJwtPayload) {
    return `Bearer ${jwt.sign(payload, jwt_secret_key, {expiresIn: "1d"})}`;
}

class TokenError extends Error {
    constructor(message: string) {
        super(message);
        this.name = "TokenError";
    }
}

export function verifyToken(token: string): CustomJwtPayload {
    try {
        return jwt.verify(token, jwt_secret_key) as CustomJwtPayload;
    } catch (error) {
        throw new TokenError("Invalid or expired token");
    }
}
