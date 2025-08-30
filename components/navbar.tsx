"use client";

import { siteConfig } from "@/config/site";
import Link from "next/link";

export default function Navbar() {
  return (
    <header className="w-full max-w-3xs mt-4 h-16 p-4 bg-default-700/50 text-default-100 flex fixed z-1 justify-center items-center rounded-3xl">
      <nav className="flex gap-4 justify-around">
      {siteConfig.navItems.map((el, index) => (
        <Link key={index} href={el.href}>
          {el.label}
        </Link>
      ))}
      </nav>
    </header>
  );
}
