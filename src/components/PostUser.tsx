import { getUser } from "@/lib/data";
import Image from "next/image";

interface PostUserProps {
  userId: string;
}

const PostUser = async ({ userId }: PostUserProps) => {
  const user = await getUser(userId);

  return (
    <div className="flex items-start gap-5">
      <Image
        src={user?.img ? user.img : "/noavatar.png"}
        alt="Author Avatar"
        width={50}
        height={50}
        className="object-cover rounded-full"
      />
      <div className="flex flex-col gap-2.5">
        <span className="text-gray-500 font-bold">Author</span>
        <span className="font-medium">{user?.username}</span>
      </div>
    </div>
  );
};

export default PostUser;