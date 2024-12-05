import { RequestHandler } from "express";
import { verifyInput } from "../lib/checkInput";
import { comparePassword, hashPassword } from "../lib/hashPassword";
import { createUser, findUser } from "../service/user";
import { createToken } from "../lib/generateToken";

// register handler
const register: RequestHandler = async (req, res, next) => {
    const verifyInputWithSuccess = verifyInput.safeParse(req.body);
    if (!verifyInputWithSuccess.success) {
        res.status(400).json({ message: "Incorrect format" });
        return; 
    }

    const { username, email, password } = verifyInputWithSuccess.data;

    try {
        const hashedPassword: string = await hashPassword(password);
        await createUser({
            username,
            email,
            password: hashedPassword,
        });
        res.status(201).json({ message: "User registered successfully" });
    } catch (error) {
        console.error(error); // For development purposes
        next(error); // Pass error to Express error handling middleware
    }
};

// login handler
const login: RequestHandler = async (req, res, next) => {
    const { email, password } = req.body;

    try {
        const foundUser = await findUser({ email });
        if (!foundUser) {
            res.status(404).json({ message: "User not found" });
            return;
        }

        const hashPassword = foundUser.password as string;
        const passwordMatch = await comparePassword(password, hashPassword);

        if (!passwordMatch) {
            res.status(404).json({ message: "Invalid email or password" });
            return; 
        }

        const token = createToken({ id: foundUser._id as string });
        if(!token){
            res.status(500).json({
                message:"Token not created"
            })
            return;
        }

        res.status(200).json({
            message: "Login successful",
            token: token,
        });
    } catch (error) {
        console.error(`Error while finding user: ${error}`);
        next(error); // Pass error to Express error handling middleware
    }
};

export default { register, login };

