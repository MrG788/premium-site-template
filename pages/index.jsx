import React from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import Link from "next/link";

export default function Home() {
  const highlights = [
    {
      title: "Small batch coffee",
      text: "In house roasted beans, dialed in every morning for consistent espresso.",
    },
    {
      title: "Fresh pastries daily",
      text: "Croissants, buns and cakes delivered every morning from local bakers.",
    },
    {
      title: "Community events",
      text: "Open mic nights, cupping sessions and latte art classes every month.",
    },
  ];

  return (
    <main className="min-h-screen bg-amber-50 text-neutral-900">
      <NavBar />

      {/* Hero */}
      <section className="relative">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=2000&auto=format&fit=crop"
            alt="Coffee bar with espresso machine"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-neutral-900/60" />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 py-24 md:py-32">
          <h1 className="text-4xl md:text-6xl font-extrabold text-white tracking-tight max-w-2xl">
            Small batch coffee, fresh pastries, warm community.
          </h1>
          <p className="mt-4 max-w-xl text-lg text-white/90">
            Hearth and Bean is your local coffee spot in Skelmersdale - great coffee,
            simple food, friendly faces and space to slow down.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              href="/takeaway"
              className="px-5 py-3 rounded-xl bg-amber-400 text-neutral-900 font-medium"
            >
              Order takeaway
            </Link>
            <Link
              href="/menu"
              className="px-5 py-3 rounded-xl bg-white/10 border border-white/40 text-white font-medium"
            >
              View full menu
            </Link>
          </div>
        </div>
      </section>

      {/* Highlights */}
      <section className="mx-auto max-w-7xl px-4 py-16">
        <h2 className="text-2xl md:text-3xl font-bold tracking-tight">
          Why guests love Hearth and Bean
        </h2>
        <div className="mt-8 grid md:grid-cols-3 gap-6">
          {highlights.map((h, i) => (
            <article
              key={i}
              className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm"
            >
              <h3 className="font-semibold tracking-tight">{h.title}</h3>
              <p className="mt-2 text-sm text-neutral-700">{h.text}</p>
            </article>
          ))}
        </div>
      </section>

      {/* Preview of takeaway */}
      <section className="mx-auto max-w-7xl px-4 pb-16">
        <div className="rounded-3xl bg-white border border-neutral-200 p-6 md:p-10 grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight">
              Order your coffee ahead
            </h2>
            <p className="mt-3 text-neutral-700 text-sm">
              Running between classes or meetings? Use our online takeaway page to
              order drinks and pastries ahead so your order is ready when you arrive.
            </p>
            <ul className="mt-4 text-sm text-neutral-700 space-y-1">
              <li>- Choose from popular drinks and add extras</li>
              <li>- See a running total and confirm in a couple of taps</li>
              <li>- Orders are sent straight to our barista screen</li>
            </ul>
            <Link
              href="/takeaway"
              className="inline-block mt-5 px-5 py-3 rounded-xl bg-amber-900 text-amber-50 text-sm font-medium"
            >
              Try the takeaway demo
            </Link>
          </div>
          <div className="rounded-2xl overflow-hidden border border-neutral-200 bg-amber-100 grid place-items-center text-sm text-neutral-600 h-64">
            Takeaway UI preview
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
