import PostCard from "@/components/PostCard";
import { getPosts } from "@/lib/data";
import { Metadata } from "next";
import { IPost } from "@/lib/models";

export const metadata: Metadata = {
  title: 'Blog Page',
  description: 'Blog Description',
};

const BlogPage = async () => {
  const posts: IPost[] = await getPosts();

  return (
    <div className="flex flex-wrap gap-5">
      {posts.map((post) => (
        <div 
          className="w-full md:w-[45%] xl:w-[30%]" 
          key={post._id.toString()}
        >
          <PostCard post={post} />
        </div>
      ))}
    </div>
  );
};

export default BlogPage;