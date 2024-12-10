import mongoose, { Document, Model, ObjectId, Schema, Types } from "mongoose"

interface IContent extends Document{
    webLink: string,
    type: string,
    title: string,
    tag: ObjectId,
    userId: ObjectId
}

const contentTypes = ["image", "video", "artical", "audio"];

const contentSchema = new Schema<IContent>({
    webLink:{
        type: String,
        required: true,
    },
    type:{
        type: String,
        enum: contentTypes,
        required: true,
    },
    title:{
        type: String,
        required: true
    },
    tag: [{
        type: mongoose.Types.ObjectId,
        ref: "Tag"
    }],
    userId: {
        type: mongoose.Types.ObjectId,
        ref: "User"
    }
})

const ContentModel: Model<IContent> = mongoose.model<IContent>("Content", contentSchema);

export {ContentModel};