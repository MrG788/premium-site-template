import React from "react";

export default function FloatingCta() {
  const phoneHref = "https://wa.me/447857480130"; // demo number, swap for client

  return (
    <button
      onClick={() => {
        window.open(phoneHref, "_blank");
      }}
      className="fixed bottom-5 right-5 z-50 flex items-center gap-2 rounded-full bg-emerald-500 px-4 py-3 text-xs font-semibold text-white shadow-lg hover:bg-emerald-600 md:text-sm"
    >
      <span className="inline-block h-2 w-2 rounded-full bg-emerald-200" />
      <span>Message us on WhatsApp</span>
    </button>
  );
}
