import Link from "next/link";

export default function NavBar() {
  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur border-b border-neutral-200">
      <nav className="mx-auto max-w-7xl px-4 py-4 flex items-center justify-between">
        <Link href="/" className="font-bold text-lg">
          Hearth and Bean
        </Link>

        <div className="flex gap-6 text-sm font-medium">
          <Link href="/takeaway" className="hover:text-amber-600">Takeaway</Link>
          <Link href="/shop" className="hover:text-amber-600">Shop</Link>
          <Link href="/contact" className="hover:text-amber-600">Contact</Link>
        </div>
      </nav>
    </header>
  );
}
