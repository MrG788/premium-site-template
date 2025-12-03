import React from "react";
import Link from "next/link";

export default function NavBar() {
  return (
    <header className="sticky top-0 z-40 border-b border-neutral-200 bg-white/80 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3">
        <Link href="/" className="flex items-center gap-3">
          <div className="grid h-9 w-9 place-items-center rounded-xl bg-gradient-to-tr from-amber-600 to-amber-900 text-amber-50 font-bold shadow-sm">
            HB
          </div>
          <div className="flex flex-col">
            <span className="text-sm font-semibold tracking-tight">
              Hearth & Bean
            </span>
            <span className="text-xs text-neutral-500">
              Coffee and pastry house
            </span>
          </div>
        </Link>
        <nav className="hidden items-center gap-6 text-sm md:flex">
          <NavLink href="/">Home</NavLink>
          <NavLink href="/menu">Menu</NavLink>
          <NavLink href="/takeaway">Takeaway</NavLink>
          <NavLink href="/contact">Contact</NavLink>
        <Link
  href="/takeaway"
  className="rounded-xl bg-neutral-900 px-3 py-2 text-xs font-medium text-white shadow-sm transition hover:-translate-y-0.5 hover:bg-neutral-800"
>
  Order online
</Link>

        </nav>
      </div>
    </header>
  );
}

function NavLink({ href, children }) {
  return (
    <Link
      href={href}
      className="relative text-neutral-600 transition hover:text-neutral-900"
    >
      <span>{children}</span>
      <span className="absolute inset-x-0 -bottom-1 h-[2px] scale-x-0 rounded-full bg-amber-500 transition group-hover:scale-x-100" />
    </Link>
  );
}
