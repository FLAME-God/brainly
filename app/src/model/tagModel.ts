import mongoose, { Schema, Document, Model } from "mongoose";


interface ITag extends Document{
    title: string
}

const tagSchema = new Schema<ITag>({
    title: {
        type: String,
        required: true,
        unique: true
    }
},{
    timestamps: true
})

const TagModel: Model<ITag> = mongoose.model<ITag>("Tag", tagSchema);

export {TagModel};

