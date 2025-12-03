import React from "react";
import Link from "next/link";

export default function NavBar() {
  return (
    <header className="sticky top-0 z-40 bg-white/80 backdrop-blur border-b border-neutral-200">
      <div className="mx-auto max-w-7xl px-4 py-3 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          <div className="h-9 w-9 rounded-xl bg-amber-900 text-amber-50 grid place-items-center font-bold">
            HB
          </div>
          <span className="font-semibold tracking-tight">
            Hearth & Bean Coffee Co.
          </span>
        </Link>
        <nav className="hidden md:flex items-center gap-6 text-sm">
          <Link href="/menu" className="hover:text-neutral-600">
            Menu
          </Link>
          <Link href="/takeaway" className="hover:text-neutral-600">
            Takeaway
          </Link>
          <Link href="/contact" className="hover:text-neutral-600">
            Contact
          </Link>
          <Link
            href="/takeaway"
            className="px-3 py-2 rounded-xl bg-amber-900 text-amber-50 font-medium"
          >
            Order online
          </Link>
        </nav>
      </div>
    </header>
  );
}
