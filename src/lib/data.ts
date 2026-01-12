import { Post, User, IPost, IUser } from "./models";
import { connectToDb } from "./utils";
import { unstable_noStore as noStore } from "next/cache";

export const getPosts = async (): Promise<IPost[]> => {
    try {
        await connectToDb();
        return await Post.find();
    } catch (err) {
        throw new Error("Failed to fetch posts!");
    }
};

export const getUser = async (id: string): Promise<IUser | null> => {
    noStore();
    try {
        await connectToDb();
        return await User.findById(id);
    } catch (err) {
        throw new Error("Failed to fetch user!");
    }
};