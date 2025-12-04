import React from "react";
import Link from "next/link";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

export default function Home() {
  const highlights = [
    {
      title: "Small batch roasting",
      text: "Seasonal beans roasted on site in small batches for balanced espresso and filter.",
    },
    {
      title: "Fresh bakes every morning",
      text: "Croissants, buns and cakes from local bakers, delivered before doors open.",
    },
    {
      title: "Space to work and unwind",
      text: "Free wifi, power at most tables and quiet corners for reading or studying.",
    },
  ];

  const stats = [
    { label: "Origins on rotation", value: "6" },
    { label: "Seats in store", value: "80+" },
    { label: "Events per month", value: "4" },
  ];

  return (
    <main className="min-h-screen bg-gradient-to-b from-amber-50 via-amber-50 to-amber-100">
      <NavBar />

      {/* Hero */}
      <section className="relative">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=2000&auto=format&fit=crop"
            alt="Coffee bar with espresso machine"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-neutral-900/85 via-neutral-900/65 to-neutral-900/40" />
        </div>

        <div className="relative mx-auto flex max-w-7xl flex-col gap-10 px-4 py-20 md:flex-row md:items-center md:py-28">
          <div className="max-w-xl">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-amber-300">
              Skelmersdale coffee and bakehouse
            </p>
            <h1 className="font-display mt-3 text-4xl font-extrabold tracking-tight text-white md:text-6xl">
              Coffee roasted in house,
              <br />
              pastries baked the same morning.
            </h1>
            <p className="mt-4 max-w-lg text-sm text-white/85 md:text-base">
              Hearth and Bean is a neighbourhood coffee shop where beans, bakes and
              people come together. Order ahead on busy days, or stay for a slow
              morning with good coffee and a quiet corner.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link
                href="/takeaway"
                className="rounded-xl bg-amber-400 px-5 py-3 text-sm font-semibold text-neutral-900 shadow-sm transition hover:-translate-y-0.5 hover:bg-amber-300"
              >
                Order takeaway
              </Link>
              <Link
                href="/shop"
                className="rounded-xl border border-white/40 bg-white/10 px-5 py-3 text-sm font-medium text-white backdrop-blur transition hover:bg-white/20"
              >
                Shop mugs and beans
              </Link>
            </div>
          </div>

          {/* Hero side cards */}
          <div className="flex flex-1 flex-col gap-4 md:pl-4">
            <div className="grid gap-4 md:grid-cols-2">
              {stats.map((s) => (
                <div
                  key={s.label}
                  className="rounded-2xl border border-white/15 bg-white/8 p-5 text-white backdrop-blur shadow-sm"
                >
                  <div className="font-display text-2xl font-extrabold">
                    {s.value}
                  </div>
                  <div className="mt-1 text-xs uppercase tracking-wide text-white/80">
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
            <div className="grid gap-4 md:grid-cols-2">
              <div className="rounded-2xl border border-white/15 bg-white/8 p-4 text-xs text-white/85 backdrop-blur shadow-sm">
                Open from 7:30 on weekdays, 8:00 on Saturdays and 9:00 on Sundays.
                Free wifi, laptop friendly tables and plug sockets by most benches.
              </div>
              <div className="rounded-2xl border border-white/15 bg-white/8 p-4 text-xs text-white/85 backdrop-blur shadow-sm">
                Find us at 14 Market Street, just off the main square. Buses stop
                two minutes away and parking is available on Oak Street.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Highlights */}
      <section className="mx-auto max-w-7xl px-4 py-16">
        <h2 className="font-display text-2xl font-bold tracking-tight md:text-3xl">
          Why guests choose Hearth and Bean
        </h2>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {highlights.map((h) => (
            <article
              key={h.title}
              className="group rounded-2xl border border-neutral-200 bg-white/90 p-6 shadow-sm transition hover:-translate-y-1 hover:border-amber-300 hover:shadow-md"
            >
              <h3 className="text-base font-semibold tracking-tight">
                {h.title}
              </h3>
              <p className="mt-2 text-sm text-neutral-700">{h.text}</p>
              <div className="mt-4 h-[2px] w-12 rounded-full bg-amber-300 transition-all group-hover:w-16 group-hover:bg-amber-400" />
            </article>
          ))}
        </div>
      </section>

      {/* Two callouts: takeaway and merch */}
      <section className="mx-auto max-w-7xl px-4 pb-16">
        <div className="grid gap-8 md:grid-cols-2">
          <div className="rounded-3xl border border-neutral-200 bg-white/90 p-6 shadow-sm md:p-8">
            <h2 className="font-display text-2xl font-bold tracking-tight">
              Order ahead on busy mornings
            </h2>
            <p className="mt-3 text-sm text-neutral-700">
              Use the takeaway page to demonstrate how guests can build a simple
              coffee and pastry order, see a clear total and confirm pickup. In a
              real project you can connect this to payment or an in store ticket
              system.
            </p>
            <ul className="mt-4 space-y-2 text-sm text-neutral-700">
              <li>• Add drinks, pastries and extras to a basket</li>
              <li>• See prices and total update in real time</li>
              <li>• Add notes for the barista such as extra hot or no foam</li>
            </ul>
            <Link
              href="/takeaway"
              className="mt-5 inline-block rounded-xl bg-neutral-900 px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:-translate-y-0.5 hover:bg-neutral-800"
            >
              Try the takeaway demo
            </Link>
          </div>

          <div className="rounded-3xl border border-neutral-200 bg-white/90 p-6 shadow-sm md:p-8">
            <h2 className="font-display text-2xl font-bold tracking-tight">
              Show a simple online shop
            </h2>
            <p className="mt-3 text-sm text-neutral-700">
              The merch page demonstrates ecommerce capability with branded mugs,
              beans and accessories. It is a clean example you can point to when
              clients ask about selling products on their site.
            </p>
            <ul className="mt-4 space-y-2 text-sm text-neutral-700">
              <li>• Add mugs, beans and tote bags to a basket</li>
              <li>• See totals update as items are added and removed</li>
              <li>• In a full build this could link to Stripe or Shopify</li>
            </ul>
            <Link
              href="/shop"
              className="mt-5 inline-block rounded-xl border border-neutral-900 px-5 py-3 text-sm font-semibold text-neutral-900 shadow-sm transition hover:-translate-y-0.5 hover:bg-neutral-900 hover:text-white"
            >
              Visit the merch demo
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
