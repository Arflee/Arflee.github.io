"use client";

import { siteConfig } from "@/config/site";
import Link from "next/link";

export default function Navbar() {
  return (
    <header className="w-full h-16 p-4 bg-default-700 text-default-100 flex justify-between fixed z-1 items-center">
      <nav className="flex gap-4">

      {siteConfig.navItems.map((el, index) => (
        <Link key={index} href={el.href}>
          {el.label}
        </Link>
      ))}
      </nav>


    </header>
  );
}
