"use client";

import { usePathname } from "next/navigation";
import { cx } from "../lib/cx";
import Link from "next/link";

import { navLinks } from "../constants";
import Image from "next/image";

export const Navbar = () => {
  const pathname = usePathname();
  const isHomePage = pathname === "/";

  return (
    <header
      aria-label="site header"
      className={cx(
        "flex h-[var(--top-nav-bar-height)] items-center border-b-2 border-gray-100 px-3 lg:px-12",
        isHomePage && "bg-dot"
      )}
    >
      <div className="flex h-10 w-full items-center justify-between">
        <Link href="/">
          <div className="flex items-center justify-center gap-1">
            <Image
              src="assets/heart.svg"
              width={12}
              height={12}
              alt="site logo"
              className="h-6 w-full"
              priority
            />
            <h1 className="text-xl whitespace-nowrap text-primary">
              Resume Builder & Parser
            </h1>
          </div>
        </Link>
        <nav
          aria-label="site navbar"
          className="flex items-center gap-2 text-sm font-medium"
        >
          {navLinks.map((navLink) => (
            <Link
              href={navLink.path}
              key={navLink.title}
              className="rounded-md px-1.5 py-2 text-gray-500 hover:bg-gray-100 focus-visible:bg-gray-100 lg:px-4"
            >
              {navLink.title}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
};
