import { Post } from "@/lib/models";
import { connectToDb } from "@/lib/utils";
import { NextRequest, NextResponse } from "next/server";
import { IPost } from "@/lib/models";

interface RouteParams {
  params: {
    slug: string;
  };
}

export const GET = async (
  request: NextRequest, 
  { params }: RouteParams
) => {
  const { slug } = params;

  try {
    await connectToDb();
    const post: IPost | null = await Post.findOne({ slug });
    
    if (!post) {
      return NextResponse.json({ message: "Post not found" }, { status: 404 });
    }

    return NextResponse.json(post);
  } catch (err) {
    console.error(err);
    return NextResponse.json(
      { message: "Failed to fetch post!" }, 
      { status: 500 }
    );
  }
};

export const DELETE = async (
  request: NextRequest, 
  { params }: RouteParams
) => {
  const { slug } = params;

  try {
    await connectToDb();
    const result = await Post.deleteOne({ slug });

    if (result.deletedCount === 0) {
      return NextResponse.json({ message: "Post not found" }, { status: 404 });
    }

    return NextResponse.json("Post deleted");
  } catch (err) {
    console.error(err);
    return NextResponse.json(
      { message: "Failed to delete post!" }, 
      { status: 500 }
    );
  }
};