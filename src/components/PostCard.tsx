import Image from "next/image";
import Link from "next/link";
import { IPost } from "@/lib/models";

interface PostCardProps {
  post: IPost;
}

const PostCard = ({ post }: PostCardProps) => {
  const date = new Date(post.updatedAt).toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric"
  }).replace(/\//g, ".");

  return (
    <div className="flex flex-col gap-5 mb-5">
      <div className="flex">
        {post.img && (
          <div className="w-[90%] h-100 relative">
            <Image 
              src={post.img} 
              alt={post.title} 
              fill 
              className="object-cover" 
            />
          </div>
        )}
        <span className="text-xs rotate-270 m-auto">
          {date}
        </span>
      </div>


      <div className="flex flex-col">
        <h1 className="text-2xl mb-5 w-[90%] font-bold">
          {post.title}
        </h1>
        <p className="w-[90%] mb-5 font-light text-gray-500">
          {post.desc}
        </p>
        <Link 
          className="underline text-sm font-semibold" 
          href={`/blog/${post.slug}`}
        >
          READ MORE
        </Link>
      </div>
    </div>
  );
};

export default PostCard;