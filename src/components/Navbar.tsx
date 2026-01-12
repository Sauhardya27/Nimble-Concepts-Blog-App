"use client";

import Link from "next/link";
import Links from "./links/Links";
import { useSession } from "next-auth/react";
import Image from "next/image";

const Navbar = () => {
  const { data: session } = useSession();

  return (
    <nav className="h-25 flex items-center justify-between">
      <Link href="/" className="text-[30px] font-bold">
        <div className="relative w-25">
          <Image
            src="/logo.png"
            alt="Logo"
            width={100}
            height={50}
            className="w-full h-auto object-contain"
            priority
          />
        </div>
      </Link>
      <div>
        <Links session={session} />
      </div>
    </nav>
  );
};

export default Navbar;
