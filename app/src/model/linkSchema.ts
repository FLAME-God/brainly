import mongoose, { ObjectId, Schema, Document, Model } from "mongoose";


interface ILink extends Document{
    hash: string,
    userId: ObjectId
}

const linkSchema = new Schema<ILink>({
    hash:{
        type: String,
        required: true
    },
    userId:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    }
})

const LinkModel: Model<ILink> = mongoose.model<ILink>("Link", linkSchema);

export {LinkModel};