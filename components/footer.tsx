"use client";

import clsx from "clsx";

export default function Footer({ className }: { className?: string }) {
  const year = new Date().getFullYear();
  return (
    <footer
      className={clsx(
        "w-full p-4 bg-default-700 text-default-100 flex justify-center",
        className
      )}
    >
      <p>©{year} by arflee. All rights reserved.</p>
    </footer>
  );
}
