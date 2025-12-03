import React from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-amber-50 text-neutral-900">
      <NavBar />
      <section className="mx-auto max-w-7xl px-4 py-12 grid md:grid-cols-2 gap-10">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Contact and visit</h1>
          <p className="mt-2 text-sm text-neutral-700">
            Got a question about bookings, events or wholesale coffee supply?
            Reach out and we will get back to you.
          </p>

          <form className="mt-6 space-y-4 text-sm">
            <input
              className="w-full rounded-xl border border-neutral-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-amber-500"
              placeholder="Your name"
            />
            <input
              className="w-full rounded-xl border border-neutral-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-amber-500"
              placeholder="Email or phone"
            />
            <textarea
              rows={4}
              className="w-full rounded-xl border border-neutral-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-amber-500"
              placeholder="How can we help?"
            />
            <button
              type="button"
              className="px-5 py-3 rounded-xl bg-amber-900 text-amber-50 font-medium"
            >
              Send message
            </button>
          </form>
        </div>
        <div className="rounded-2xl overflow-hidden border border-neutral-200 bg-white">
          <div className="h-64 w-full bg-amber-100 grid place-items-center text-neutral-600 text-sm">
            Map embed placeholder - client can add Google Maps here.
          </div>
          <div className="p-6 text-sm">
            <p className="font-semibold">Hearth and Bean Coffee Co.</p>
            <p className="mt-1">14 Market Street, Skelmersdale, WN8 8DU</p>
            <p className="mt-2">Phone: +44 7857 480130</p>
            <p>Email: hello@hearthbean.co.uk</p>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
