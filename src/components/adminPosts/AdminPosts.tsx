import { deletePost } from '@/lib/action';
import { getPosts } from '@/lib/data';
import Image from 'next/image';
import { IPost } from '@/lib/models';

const AdminPosts = async () => {
  const posts: IPost[] = await getPosts();

  return (
    <div className="flex flex-col">
      <h1 className="text-2xl font-bold mb-5">Posts</h1>
      {posts.map((post) => (
        <div 
          className="my-3 flex items-center justify-between gap-5" 
          key={post._id.toString()}
        >
          <div className="flex items-center gap-5">
            <Image 
              src={post.img || "/noavatar.png"} 
              alt={post.title} 
              width={50} 
              height={50} 
              className="rounded-full object-cover h-auto aspect-square"
            />
            <span className="font-medium">{post.title}</span>
          </div>
          <form action={deletePost}>
            <input type="hidden" name="id" value={post._id.toString()} />
            <button className="py-1 px-2.5 bg-[rgba(220,20,60,0.593)] text-(--textColor) rounded-md border-none cursor-pointer hover:opacity-80 transition-opacity">
              Delete
            </button>
          </form>
        </div>
      ))}
    </div>
  );
};

export default AdminPosts;