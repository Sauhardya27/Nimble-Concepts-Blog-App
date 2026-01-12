"use client";

import { useFormState } from "react-dom";
import { register } from "@/lib/action";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from 'next/link';

const RegisterForm = () => {
  const [state, formAction] = useFormState(register, undefined);
  const router = useRouter();

  useEffect(() => {
    if (state?.success) {
      router.push("/login");
    }
  }, [state?.success, router]);

  return (
    <form 
      action={formAction} 
      className="flex flex-col gap-7.5 text-center"
    >
      <input 
        type="text" 
        placeholder="username" 
        name="username" 
        className="p-5 bg-(--bg) text-white border-none rounded-[15px] outline-none"
        required
      />
      <input 
        type="email" 
        placeholder="email" 
        name="email" 
        className="p-5 bg-(--bg) text-white border-none rounded-[15px] outline-none"
        required
      />
      <input 
        type="password" 
        placeholder="password" 
        name="password" 
        className="p-5 bg-(--bg) text-white border-none rounded-[15px] outline-none"
        required
      />
      <input 
        type="password" 
        placeholder="password again" 
        name="passwordRepeat" 
        className="p-5 bg-(--bg) text-white border-none rounded-[15px] outline-none"
        required
      />
      
      <button 
        type="submit"
        className="p-5 cursor-pointer bg-(--btn) text-white font-bold border-none rounded-[15px] hover:opacity-90 transition-opacity"
      >
        Register
      </button>

      {state?.error && (
        <p className="text-red-500 font-medium text-sm">
          {state.error}
        </p>
      )}

      <Link href="/login" className="text-white text-sm">
        Have an account? <b className="underline">Login</b>
      </Link>
    </form>
  );
};

export default RegisterForm;