"use server"
import { revalidatePath } from "next/cache";
import { Post, User } from "./models";
import { connectToDb } from "./utils";
import bcrypt from 'bcryptjs';

type State = { error?: string; success?: boolean } | undefined;

export const addPost = async (prevState: State, formData: FormData) => {
    const { title, desc, slug, userId, img } = Object.fromEntries(formData);

    try {
        await connectToDb();
        const newPost = new Post({ title, desc, slug, userId, img });
        await newPost.save();
        revalidatePath("/blog");
        revalidatePath("/admin");
    } catch (err) {
        return { error: "Something went wrong!" };
    }
};

export const deletePost = async (formData: FormData) => {
    const { id } = Object.fromEntries(formData);
    try {
        await connectToDb();
        await Post.findByIdAndDelete(id);
        revalidatePath("/blog");
        revalidatePath("/admin");
    } catch (err) {
        return { error: "Something went wrong!" };
    }
};

export const register = async (prevState: State, formData: FormData) => {
    const { username, email, password, img, passwordRepeat } = Object.fromEntries(formData);

    if (password !== passwordRepeat) return { error: "Passwords don't match!" };

    try {
        await connectToDb();
        const user = await User.findOne({ username });
        if (user) return { error: "Username already exists!" };

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password as string, salt);

        const newUser = new User({ username, email, password: hashedPassword, img });
        await newUser.save();
        return { success: true };
    } catch (err) {
        return { error: "Something went wrong!" };
    }
};