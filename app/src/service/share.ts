import { LinkModel } from "../model/linkSchema";

async function createLink (payload: object){
    const link = await LinkModel.create(payload);
    return link;
}

async function getLink (payload: object){
    const link = await LinkModel.findOne(payload);
    return link;
}

async function deleteLink (payload: object){
    await LinkModel.deleteOne(payload);
}
export default {createLink, getLink, deleteLink};