import { Post } from "@/lib/models";
import { connectToDb } from "@/lib/utils";
import { NextRequest, NextResponse } from "next/server";
import { IPost } from "@/lib/models";

export const GET = async (_request: NextRequest) => {
  try {
    await connectToDb();
	
    const posts: IPost[] = await Post.find();
    return NextResponse.json(posts);
  } catch (err) {
    console.error(err);
    return NextResponse.json(
      { message: "Failed to fetch posts!" }, 
      { status: 500 }
    );
  }
};