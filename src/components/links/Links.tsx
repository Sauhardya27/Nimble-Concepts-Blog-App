"use client";

import { useState } from "react";
import NavLink from "./NavLink";
import Image from "next/image";
import { signOut } from "next-auth/react";
import { Session } from "next-auth";

interface LinkItem {
  title: string;
  path: string;
}

const links: LinkItem[] = [
  { title: "Homepage", path: "/" },
  { title: "About", path: "/about" },
  { title: "Contact", path: "/contact" },
  { title: "Blog", path: "/blog" },
];

const Links = ({ session }: { session: Session | null }) => {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <div className="hidden md:flex items-center gap-2.5">
        {links.map((link) => (
          <NavLink item={link} key={link.title} />
        ))}
        {session?.user ? (
          <>
            {(session.user as any).isAdmin && (
              <NavLink item={{ title: "Admin", path: "/admin" }} />
            )}
            <button
              className="py-2.5 px-5 cursor-pointer font-bold rounded-[20px] bg-cornflowerblue text-white border-none text-base transition-opacity hover:opacity-90"
              onClick={() => signOut()}
            >
              Logout
            </button>
          </>
        ) : (
          <NavLink item={{ title: "Login", path: "/login" }} />
        )}
      </div>

      <Image
        className="block md:hidden cursor-pointer w-full h-auto "
        src="/menu.png"
        alt="menu"
        width={30}
        height={30}
        onClick={() => setOpen((prev) => !prev)}
      />

      {open && (
        <div className="absolute top-25 right-0 w-1/2 h-[calc(100vh-100px)] bg-(--bg) flex flex-col items-center justify-center gap-2.5 md:hidden z-50">
          {links.map((link) => (
            <NavLink item={link} key={link.title} />
          ))}
          {session?.user ? (
            <>
              {(session.user as any).isAdmin && (
                <NavLink item={{ title: "Admin", path: "/admin" }} />
              )}
              <button
                className="py-2.5 px-5 cursor-pointer font-bold rounded-[20px] bg-cornflowerblue text-white border-none text-base"
                onClick={() => signOut()}
              >
                Logout
              </button>
            </>
          ) : (
            <NavLink item={{ title: "Login", path: "/login" }} />
          )}
        </div>
      )}
    </div>
  );
};

export default Links;
