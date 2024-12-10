import { Request, Response, NextFunction, RequestHandler } from "express"
import linkDBOperation from "../service/share";
import contentDBOperation from "../service/content"
import { random } from "../utils/link";
import { findUser } from "../service/user";
import { hash } from "bcrypt";

interface AuthencatedRequest extends Request {
    userId: string
}

const createLinkCtlr: RequestHandler = async(req, res, next) =>{
    const share = req.body.share;

    try {
        if(share){
            const link = await linkDBOperation.createLink({
                hash: random(9),
                userId: (req as AuthencatedRequest).userId
            })
            res.status(200).json({
                message: "link is created",
                link
            })
        }else{
            await linkDBOperation.deleteLink({userId: (req as AuthencatedRequest).userId})
            return;
        }

        
        return;
    } catch (error) {
        console.log(error);
        res.status(403).json({
            message: "link not created"
        })
        next(error);  
    }
}

// get the link
const getLinkCtlr = async (req: Request, res: Response, next: NextFunction)=>{
    const hash = req.params.shareLink as string;
    try {
       const link = await linkDBOperation.getLink({hash});
            if(!link){
                res.status(404).json({
                    message: "link not found"
                })
                return;
            }

        const content = await contentDBOperation.findContent({
            userId: link.userId
        })
        const user = await findUser({
            userId: link.userId
        })

        res.status(200).json({
            username: user?.username,
            content: content
        })
    } catch (error) {
        console.log(error)// for development purpose
        res.status(403).json("Invalid link");
        next(error);
    }
}

export default {createLinkCtlr, getLinkCtlr} 