import mongoose, { Schema, Document, Model } from "mongoose";

export interface IUser extends Document {
    username: string;
    email: string;
    password?: string;
    img?: string;
    isAdmin: boolean;
    createdAt: Date;
    updatedAt: Date;
}

export interface IPost extends Document {
    title: string;
    desc: string;
    img?: string;
    userId: string;
    slug: string;
    createdAt: Date;
    updatedAt: Date;
}

const userSchema = new Schema<IUser>({
    username: { type: String, required: true, unique: true, min: 3, max: 20 },
    email: { type: String, required: true, unique: true, max: 50 },
    password: { type: String },
    img: { type: String },
    isAdmin: { type: Boolean, default: false },
}, { timestamps: true });

const postSchema = new Schema<IPost>({
    title: { type: String, required: true },
    desc: { type: String, required: true },
    img: { type: String },
    userId: { type: String, required: true },
    slug: { type: String, required: true, unique: true },
}, { timestamps: true });

export const User: Model<IUser> = mongoose.models?.User || mongoose.model<IUser>("User", userSchema);
export const Post: Model<IPost> = mongoose.models?.Post || mongoose.model<IPost>("Post", postSchema);