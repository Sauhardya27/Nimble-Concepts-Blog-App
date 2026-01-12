"use client";

import { useFormState } from "react-dom";
import { addUser } from "@/lib/action";

const AdminUserForm = () => {
  const [state, formAction] = useFormState(addUser, undefined);

  return (
    <form action={formAction} className="flex flex-col gap-5">
      <h1 className="text-2xl font-bold">Add New User</h1>
      
      <input 
        type="text" 
        placeholder="Username" 
        name="username" 
        className="p-5 bg-(--bgSoft) text-(--textColor) border-none rounded-[15px] outline-none"
      />
      <input 
        type="text" 
        placeholder="Email" 
        name="email" 
        className="p-5 bg-(--bgSoft) text-(--textColor) border-none rounded-[15px] outline-none"
      />
      <input 
        type="password" 
        placeholder="Password" 
        name="password" 
        className="p-5 bg-(--bgSoft) text-(--textColor) border-none rounded-[15px] outline-none"
      />
      <input 
        type="text" 
        placeholder="Img" 
        name="img" 
        className="p-5 bg-(--bgSoft) text-(--textColor) border-none rounded-[15px] outline-none"
      />
      
      <select 
        name="isAdmin" 
        className="p-5 bg-(--bgSoft) text-(--textColor) border-none rounded-[15px] outline-none cursor-pointer"
      >
        <option value="false">Is Admin?</option>
        <option value="false">No</option>
        <option value="true">Yes</option>
      </select>
      
      <button className="p-4 bg-(--btn) text-(--textColor) font-bold text-xl border-none rounded-[15px] cursor-pointer hover:opacity-90 transition-opacity">
        Add
      </button>

      {state?.error && (
        <p className="text-red-500 font-medium">{state.error}</p>
      )}
    </form>
  );
};

export default AdminUserForm;