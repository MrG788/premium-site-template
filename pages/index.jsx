import React from "react";
import Link from "next/link";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

export default function Home() {
  const highlights = [
    {
      title: "Small batch coffee",
      text: "In house roasted beans, dialled in every morning for consistent espresso.",
    },
    {
      title: "Fresh pastries daily",
      text: "Croissants, buns and cakes baked locally and delivered each morning.",
    },
    {
      title: "Community space",
      text: "Events, open mic nights and quiet corners to work or study.",
    },
  ];

  const stats = [
    { label: "Seats", value: "80+" },
    { label: "Origins on rotation", value: "6" },
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
          <div className="absolute inset-0 bg-gradient-to-br from-neutral-900/80 via-neutral-900/60 to-neutral-900/40" />
        </div>
        <div className="relative mx-auto flex max-w-7xl flex-col gap-10 px-4 py-20 md:flex-row md:items-center md:py-28">
          <div className="max-w-xl">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-300">
              Skelmersdale coffee and bakehouse
            </p>
            <h1 className="mt-3 text-4xl font-extrabold tracking-tight text-white md:text-6xl">
              Small batch coffee,
              <br />
              baked on the same morning.
            </h1>
            <p className="mt-4 max-w-lg text-sm md:text-base text-white/85">
              Hearth and Bean is a neighbourhood coffee shop that roasts, bakes
              and serves everything under one roof. Order ahead for takeaway or
              stay for a slow morning.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link
                href="/takeaway"
                className="rounded-xl bg-amber-400 px-5 py-3 text-sm font-semibold text-neutral-900 shadow-sm transition hover:-translate-y-0.5 hover:bg-amber-300"
              >
                Order takeaway
              </Link>
              <Link
                href="/menu"
                className="rounded-xl border border-white/40 bg-white/10 px-5 py-3 text-sm font-medium text-white backdrop-blur transition hover:bg-white/20"
              >
                View full menu
              </Link>
            </div>
          </div>
          <div className="grid flex-1 gap-4 md:grid-cols-2">
            {stats.map((s) => (
              <div
                key={s.label}
                className="rounded-2xl border border-white/20 bg-white/10 p-5 text-white backdrop-blur shadow-sm"
              >
                <div className="text-2xl font-extrabold">{s.value}</div>
                <div className="mt-1 text-xs uppercase tracking-wide text-white/80">
                  {s.label}
                </div>
              </div>
            ))}
            <div className="rounded-2xl border border-white/20 bg-white/10 p-5 text-xs text-white/85 backdrop-blur shadow-sm md:col-span-2">
              Open from 7:30 on weekdays, 8:00 on Saturdays and 9:00 on Sundays,
              with free wifi, plugs at most tables and quiet zones for focused work.
            </div>
          </div>
        </div>
      </section>

      {/* Highlights */}
      <section className="mx-auto max-w-7xl px-4 py-16">
        <h2 className="text-2xl md:text-3xl font-bold tracking-tight">
          Why guests choose Hearth and Bean
        </h2>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {highlights.map((h) => (
            <article
              key={h.title}
              className="group rounded-2xl border border-neutral-200 bg-white/80 p-6 shadow-sm transition hover:-translate-y-1 hover:border-amber-300 hover:shadow-md"
            >
              <h3 className="text-base font-semibold tracking-tight">
                {h.title}
              </h3>
              <p className="mt-2 text-sm text-neutral-700">{h.text}</p>
              <div className="mt-4 h-[2px] w-12 rounded-full bg-amber-300 group-hover:w-16 group-hover:bg-amber-400 transition-all" />
            </article>
          ))}
        </div>
      </section>

      {/* Takeaway teaser */}
      <section className="mx-auto max-w-7xl px-4 pb-18 pb-16">
        <div className="grid gap-8 rounded-3xl border border-neutral-200 bg-white/80 p-6 shadow-sm md:grid-cols-2 md:p-10">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight">
              Order ahead so your coffee is waiting
            </h2>
            <p className="mt-3 text-sm text-neutral-700">
              Show clients that your site can do more than look pretty. The online
              takeaway page demonstrates a simple ecommerce flow with basket,
              running total and checkout experience.
            </p>
            <ul className="mt-4 space-y-2 text-sm text-neutral-700">
              <li>• Add hot drinks, extras and pastries to a basket</li>
              <li>• See clear pricing and total before confirming</li>
              <li>• Add notes for the barista like extra hot or no foam</li>
            </ul>
            <Link
              href="/takeaway"
              className="mt-6 inline-block rounded-xl bg-neutral-900 px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:-translate-y-0.5 hover:bg-neutral-800"
            >
              Try the takeaway demo
            </Link>
          </div>
          <div className="flex items-center justify-center">
            <div className="w-full max-w-sm rounded-2xl border border-neutral-200 bg-gradient-to-b from-neutral-900 to-neutral-800 p-4 text-xs text-white shadow-lg">
              <div className="flex items-center justify-between">
                <span className="font-semibold">Takeaway basket</span>
                <span className="rounded-full bg-amber-400 px-3 py-1 text-[10px] font-semibold text-neutral-900">
                  Demo mode
                </span>
              </div>
              <div className="mt-3 space-y-2 rounded-xl bg-neutral-900/60 p-3">
                <div className="flex items-center justify-between">
                  <span>Flat White</span>
                  <span>£3.40</span>
                </div>
                <div className="flex items-center justify-between text-white/80">
                  <span>Cinnamon Bun</span>
                  <span>£2.80</span>
                </div>
              </div>
              <div className="mt-3 flex items-center justify-between border-t border-white/10 pt-3">
                <span className="text-white/80">Total</span>
                <span className="font-semibold">£6.20</span>
              </div>
              <button className="mt-3 w-full rounded-xl bg-amber-400 px-4 py-2 text-xs font-semibold text-neutral-900">
                Confirm takeaway order
              </button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
