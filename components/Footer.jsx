import React from "react";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-neutral-200 bg-white">
      <div className="mx-auto max-w-7xl px-4 py-8 text-sm text-neutral-600 flex flex-col md:flex-row items-center justify-between gap-4">
        <p>© {year} Hearth & Bean Coffee Co. All rights reserved.</p>
        <div className="flex items-center gap-4">
          <a href="#" className="hover:text-neutral-900">
            Privacy
          </a>
          <a href="#" className="hover:text-neutral-900">
            Terms
          </a>
        </div>
      </div>
    </footer>
  );
}
