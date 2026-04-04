"use client";

import { useFormState } from "react-dom";
import { addPost } from "@/lib/action";

interface AdminPostFormProps {
  userId: string;
}

const AdminPostForm = ({ userId }: AdminPostFormProps) => {
  const [state, formAction] = useFormState(addPost, undefined);

  return (
    <form action={formAction} className="flex flex-col gap-5">
      <h1 className="text-2xl font-bold">Add New Post</h1>
      
      <input type="hidden" name="userId" value={userId} />
      
      <input 
        type="text" 
        placeholder="Title" 
        name="title" 
        className="p-5 bg-(--bgSoft) text-(--textColor) border-none rounded-[15px] outline-none"
      />
      <input 
        type="text" 
        placeholder="Slug" 
        name="slug" 
        className="p-5 bg-(--bgSoft) text-(--textColor) border-none rounded-[15px] outline-none"
      />
      <input 
        type="text" 
        placeholder="Img" 
        name="img" 
        className="p-5 bg-(--bgSoft) text-(--textColor) border-none rounded-[15px] outline-none"
      />
      <textarea 
        placeholder="Desc" 
        name="desc" 
        rows={10} 
        className="p-5 bg-(--bgSoft) text-(--textColor) border-none rounded-[15px] outline-none resize-none"
      />
      
      <button className="p-4 bg-(--btn) text-(--textColor) font-bold text-xl border-none rounded-[15px] cursor-pointer hover:opacity-90 transition-opacity">
        Add
      </button>

      {state?.error && (
        <p className="text-red-500 font-medium">{state.error}</p>
      )}
    </form>
  );
};

export default AdminPostForm;