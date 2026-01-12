import Image from "next/image";
import PostUser from "@/components/PostUser";
import { Suspense } from "react";
import { getPost } from "@/lib/data";
import { Metadata } from "next";

interface PostParams {
  params: {
    slug: string;
  };
}

export const generateMetadata = async ({ params }: PostParams): Promise<Metadata> => {
  const { slug } = params;
  const post = await getPost(slug);

  if (!post) return { title: "Post Not Found" };

  return {
    title: post.title,
    description: post.desc,
  };
};

const SinglePostPage = async ({ params }: PostParams) => {
  const { slug } = params;
  const post = await getPost(slug);

  if (!post) return <div className="p-10 text-center">Post not found.</div>;

  return (
    <div className="flex gap-25 mb-12.5">
      {post.img && (
        <div className="hidden md:block flex-1 relative h-[calc(100vh-200px)]">
          <Image 
            src={post.img} 
            alt={post.title} 
            fill 
            className="object-cover" 
          />
        </div>
      )}

      <div className="flex-2 flex flex-col gap-12.5">
        <h1 className="text-[64px] font-bold leading-tight">
          {post.title}
        </h1>
        
        <div className="flex gap-5">
          <Suspense fallback={<div className="text-gray-400">Loading user...</div>}>
            <PostUser userId={post.userId} />
          </Suspense>
          
          <div className="flex flex-col gap-2.5">
            <span className="text-gray-500 font-bold">Published</span>
            <span className="font-medium text-gray-300">
              {post.createdAt.toString().slice(4, 16)}
            </span>
          </div>
        </div>

        <div className="text-xl leading-relaxed text-justify">
          {post.desc}
        </div>
      </div>
    </div>
  );
};

export default SinglePostPage;