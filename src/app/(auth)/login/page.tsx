"use client";

import { useSession, signIn } from "next-auth/react";
import LoginForm from "@/components/LoginForm";
import { useEffect } from "react";
import { useRouter } from 'next/navigation';
import Loading from "@/app/loading";

export default function LoginPage() {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === "authenticated") {
      router.push("/");
    }
  }, [status, router]);

  if (status === "loading") {
    return <Loading />;
  }

  if (status === "authenticated") {
    return null;
  }

  return (
    <div className="flex items-center justify-center pb-25 -mt-1">
      <div className="w-125 bg-(--bgSoft) p-12.5 flex flex-col text-center gap-7.5 rounded-[15px]">
        
        <button 
          className="w-full p-5 rounded-[15px] cursor-pointer bg-black text-white font-bold border-none transition-opacity hover:opacity-90" 
          onClick={() => signIn("github")}
        >
          Login with Github
        </button>
        
        
        <div className="flex items-center gap-2 -my-2">
          <hr className="flex-1 border-(--bg)" />
          <span className="text-xs text-gray-400">or</span>
          <hr className="flex-1 border-(--bg)" />
        </div>

        <LoginForm />
      </div>
    </div>
  );
}