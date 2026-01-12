"use client";

import { useEffect, useRef } from "react";
import { useFormState } from "react-dom";
import { addUser } from "@/lib/action";

const AdminUserForm = () => {
  const formRef = useRef(null);
  const [state, formAction, isPending] = useFormState(addUser, undefined);

  useEffect(() => {
    if (state?.success) {
      formRef.current?.reset();
    }
  }, [state?.success]);

  return (
    <form 
      ref={formRef} 
      action={formAction} 
      className="flex flex-col gap-5"
    >
      <h1 className="text-2xl font-bold">Add New User</h1>
      
      <input 
        type="text" 
        placeholder="Username" 
        name="username" 
        className="p-5 bg-(--bgSoft) text-(--text) border-none rounded-[15px] outline-none"
        required
      />
      <input 
        type="email" 
        placeholder="Email" 
        name="email" 
        className="p-5 bg-(--bgSoft) text-(--text) border-none rounded-[15px] outline-none"
        required
      />
      <input 
        type="password" 
        placeholder="Password" 
        name="password" 
        className="p-5 bg-(--bgSoft) text-(--text) border-none rounded-[15px] outline-none"
        required
      />
      <input 
        type="text" 
        placeholder="Image URL" 
        name="img" 
        className="p-5 bg-(--bgSoft) text-(--text) border-none rounded-[15px] outline-none"
      />
      
      <select 
        name="isAdmin" 
        className="p-5 bg-(--bgSoft) text-(--text) border-none rounded-[15px] outline-none cursor-pointer"
      >
        <option value="false">Is Admin?</option>
        <option value="false">No</option>
        <option value="true">Yes</option>
      </select>
      
      <button 
        disabled={isPending}
        className="p-4 bg-(--btn) text-(--text) font-bold text-xl border-none rounded-[15px] cursor-pointer hover:opacity-90 transition-opacity disabled:bg-gray-500 disabled:cursor-not-allowed"
      >
        {isPending ? "Adding..." : "Add"}
      </button>

      {state?.error && (
        <p className="text-red-500 font-medium">{state.error}</p>
      )}
      {state?.success && (
        <p className="text-green-500 font-medium">User added successfully!</p>
      )}
    </form>
  );
};

export default AdminUserForm;