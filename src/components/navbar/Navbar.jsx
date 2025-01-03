"use client"
import Link from "next/link"
import Links from "./links/Links"
import styles from "./navbar.module.css"
import { useSession } from "next-auth/react"
import Image from "next/image"
import logoImage from '@/public/logo.png'

const Navbar = () => {
  const { data: session } = useSession()

  return (
    <div className={styles.container}>
      <Link href="/" className={styles.logo}>
        <div className={styles.imgContainer}>
          <Image
            src={logoImage}
            alt="Logo"
            width={100}
            height={50}
            className={styles.img}
            priority
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
