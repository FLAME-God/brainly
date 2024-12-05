import { ContentModel } from "../model/contentSchema";


export async function createContent (payload: object){
    const content = await ContentModel.create(payload);
    return content;
}

export async function findContent (payload: object){
    const content = await ContentModel.findOne(payload).populate("userId", "username");
    return content;
}

export async function deleteContent (payload: object){
    await ContentModel.deleteOne(payload);
}