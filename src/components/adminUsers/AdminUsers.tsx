import { getUsers } from "@/lib/data";
import { deleteUser } from "@/lib/action";
import Image from "next/image";
import { IUser } from "@/lib/models";

const AdminUsers = async () => {
  const users: IUser[] = await getUsers();

  return (
    <div className="flex flex-col gap-5">
      <h1 className="text-2xl font-light">Users</h1>

      <div className="h-112.5 overflow-y-auto pr-4 flex flex-col gap-5 custom-scrollbar">
        {users && users.length > 0 ? (
          users.map((user) => (
            <div
              className="flex items-center justify-between gap-5"
              key={user._id.toString()}
            >
              <div className="flex items-center gap-5">
                <Image
                  src={user.img || "/noavatar.png"}
                  alt="User Avatar"
                  width={50}
                  height={50}
                  className="rounded-full object-cover h-auto aspect-square"
                />
                <span className="font-medium text-(--text)">
                  {user.username}
                </span>
              </div>
              <form action={deleteUser}>
                <input type="hidden" name="id" value={user._id.toString()} />
                <button className="py-1 px-2.5 bg-[#dc143c97] text-(--text) rounded-md border-none cursor-pointer hover:opacity-80 transition-opacity">
                  Delete
                </button>
              </form>
            </div>
          ))
        ) : (
          <p className="text-gray-500 italic">No users found.</p>
        )}
      </div>
    </div>
  );
};

export default AdminUsers;
