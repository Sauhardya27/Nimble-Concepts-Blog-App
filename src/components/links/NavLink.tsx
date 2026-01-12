"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";

interface NavLinkItem {
  title: string;
  path: string;
}

interface NavLinkProps {
  item: NavLinkItem;
}

const NavLink = ({ item }: NavLinkProps) => {
  const pathName = usePathname();

  const isActive = pathName === item.path;

  return (
    <Link
      href={item.path}
      className={`
        min-w-25 p-2.5 rounded-[20px] font-medium text-center transition-colors
        ${isActive 
          ? "bg-(--btn) text-(--bg)" 
          : "hover:bg-[rgba(255,255,255,0.05)]"
        }
      `}
    >
      {item.title}
    </Link>
  );
};

export default NavLink;