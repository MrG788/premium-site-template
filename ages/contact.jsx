import React from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-amber-50">
      <NavBar />

      <section className="mx-auto max-w-7xl grid gap-10 px-4 py-12 md:grid-cols-2">
        {/* Left side text and form */}
        <div>
          <h1 className="text-3xl font-bold tracking-tight">
            Contact and visit
          </h1>
          <p className="mt-2 text-sm text-neutral-700">
            Use this page to show how a contact and location layout would look.
            In a real project the form would send enquiries to the business via
            email or a CRM.
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
              className="rounded-xl bg-amber-900 px-5 py-3 text-sm font-medium text-amber-50 shadow-sm hover:bg-amber-800"
            >
              Send message
            </button>
            <p className="text-xs text-neutral-500">
              Demo only, this form does not send emails yet.
            </p>
          </form>
        </div>

        {/* Right side map and details */}
        <div className="overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow-sm">
          <div className="grid h-64 place-items-center bg-amber-100 text-sm text-neutral-600">
            Map embed placeholder  
            (Google Maps iframe would go here)
          </div>
          <div className="space-y-2 border-t border-neutral-100 p-6 text-sm text-neutral-800">
            <p className="font-semibold">Hearth and Bean Coffee Co.</p>
            <p>14 Market Street, Skelmersdale, WN8 8DU</p>
            <p className="mt-2">Phone: +44 7857 480130</p>
            <p>Email: hello@hearthbean.co.uk</p>
            <p className="mt-2 text-xs text-neutral-500">
              Opening times and more visit info can live here or on the homepage.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
