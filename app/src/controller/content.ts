import { Request, Response, NextFunction } from "express"
import { createContent, findContent } from "../service/content";

//Creating content
interface AuthenticatedRequest extends Request{
    userId?: string
}


const createContentCtlr = async (req: AuthenticatedRequest, res:Response, next: NextFunction)=>{
    const {WebLink, type, title} = req.body;
    try {
        const payload ={
            WebLink: WebLink,
            type: type,
            title: title,
            tag: [],
            userId: req.userId
        }
        const content = await createContent(payload);
        res.status(200).json({
            message: "content created successfully",
            content: content
        })
    } catch (error) {
        console.log(`Error while creating content: ${error}`); // for devlopment purpose
        res.status(403).json({
            message: "content not created"
        })
        next(error);
    }
}

// get content
const getContent = async (req: AuthenticatedRequest, res: Response, next: NextFunction) =>{
    const userId = req.userId;
    try {
        const contents = await findContent({userId:userId});
        res.status(200).json({
            message: "content get sucessfully",
            contents: contents
        })
    } catch (error) {
        console.log(`Error while get content: ${error}`);
        res.status(403).json({
            message: "faild the faitch the contents"
        })
    }
}

//delete content 


export default {createContentCtlr, getContent}