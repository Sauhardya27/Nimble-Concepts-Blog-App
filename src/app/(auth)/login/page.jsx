"use client"
import { useSession, signIn } from "next-auth/react"
import LoginForm from "@/components/loginForm/loginForm";
import styles from "./login.module.css"
import { useEffect } from "react";
import { useRouter } from 'next/router';

export default function LoginPage() {
  const { data: session, status } = useSession()
  const router = useRouter();

  useEffect(() => {
    if (status === "authenticated") {
      router.reload();
    }
  }, [status, router, session]);

  if (status === "loading") {
    return <div>Loading...</div>
  }

  if (status === "authenticated") {
    return null;  // We'll redirect in useEffect, so no need to render anything here
  }

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <button className={styles.github} onClick={() => signIn("github")}>Login with Github</button>
        <LoginForm />
      </div>
    </div>
  )
}
