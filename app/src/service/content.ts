import { ContentModel } from "../model/contentSchema";



 async function createContent (payload: object){
    const content = await ContentModel.create(payload);
    return content;
}

 async function findContent (payload: object){
    const content = await ContentModel.findOne(payload).populate("userId", "username");
    return content;
}

 async function deleteContent (payload: object){
    await ContentModel.findOneAndDelete(payload);
}

export default {createContent, findContent, deleteContent};