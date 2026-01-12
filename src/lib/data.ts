import { Post, User, IPost, IUser } from "./models";
import { connectToDb } from "./utils";
import { unstable_noStore as noStore } from "next/cache";

export const getPosts = async (): Promise<IPost[]> => {
  try {
    await connectToDb();
    const posts = await Post.find();
    return posts;
  } catch (err) {
    console.error(err);
    throw new Error("Failed to fetch posts!");
  }
};

export const getPost = async (slug: string): Promise<IPost | null> => {
  try {
    await connectToDb();
    const post = await Post.findOne({ slug });
    return post;
  } catch (err) {
    console.error(err);
    throw new Error("Failed to fetch post!");
  }
};

export const getUser = async (id: string): Promise<IUser | null> => {
  noStore();
  try {
    await connectToDb();
    const user = await User.findById(id);
    return user;
  } catch (err) {
    console.error(err);
    throw new Error("Failed to fetch user!");
  }
};

export const getUsers = async (): Promise<IUser[]> => {
  try {
    await connectToDb();
    const users = await User.find();
    return users || [];
  } catch (err) {
    console.error(err);
    throw new Error("Failed to fetch users!");
  }
};