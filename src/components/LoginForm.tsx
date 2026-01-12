"use client";

import { useState, FormEvent } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import Link from 'next/link';

const LoginForm = () => {
  const router = useRouter();
  const [error, setError] = useState<string>("");

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError("");

    const formData = new FormData(event.currentTarget);
    const username = formData.get("username") as string;
    const password = formData.get("password") as string;

    const result = await signIn("credentials", {
      username,
      password,
      redirect: false,
    });

    if (result?.error) {
      setError("Invalid username or password");
    } else {
      router.push("/");
      router.refresh(); 
    }
  };

  return (
    <form 
      className="flex flex-col text-center gap-7.5" 
      onSubmit={handleSubmit}
    >
      <input 
        type="text" 
        placeholder="username" 
        name="username" 
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
      
      <button 
        type="submit"
        className="p-5 cursor-pointer bg-(--btn) text-white font-bold border-none rounded-[15px] transition-opacity hover:opacity-90"
      >
        Login
      </button>

      {error && (
        <div className="text-red-500 text-sm font-medium">
          {error}
        </div>
      )}

      <Link href="/register" className="text-sm">
        {"Don't have an account?"} <b className="underline">Register</b>
      </Link>
    </form>
  );
};

export default LoginForm;