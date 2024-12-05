import {connect} from "mongoose";

import dotenv from "dotenv";
dotenv.config();

const connectDB = async () =>{
    try {
        const url = process.env.MONGO_URL as string;
        await connect(url);
        console.log("connected to MongoDB"); // for  devlopment purpose 
    } catch (error) {
        console.log(`error while connecting with db: ${error}`)
    }
}

export default connectDB;

