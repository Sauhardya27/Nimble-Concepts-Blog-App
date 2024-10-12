"use client"
import Link from "next/link"
import Links from "./links/Links"
import styles from "./navbar.module.css"
import { useSession } from "next-auth/react"
import Image from "next/image"

const Navbar = () => {
  const { data: session, status } = useSession()

  return (
    <div className={styles.container}>
      <Link href="/" className={styles.logo}>
        <div className={styles.imgContainer}>
          <Image
            src="/logo.png"
            alt="Logo"
            fill
            className={styles.img}
          />
        </div>
      </Link>
      <div>
        <Links session={session} />
      </div>
    </div>
  )
}

export default Navbar
