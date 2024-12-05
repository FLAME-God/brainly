import { UserModel } from "../model/userModel";


export async function createUser (payload: object){
    const user = await UserModel.create(payload);
    return user;
}

export async function findUser (payload: object){
    const user = await UserModel.findOne(payload);
    return user;
}

