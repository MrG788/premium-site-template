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
      text: "Croissants, buns and cakes from local bakers delivered before doors open.",
    },
    {
      title: "Space to work and unwind",
      text: "Free wifi, power at most tables and quiet corners for reading or studying.",
    },
  ];

  const stats = [
    { label: "Origins on rotation", value: "6" },
    { label: "Seats in store", value: "80 plus" },
    { label: "Events per month", value: "4" },
  ];

  const reviews = [
    {
      name: "Amira",
      role: "Regular since 2020",
      text: "Best flat white in town. Staff remember my order and there is always a quiet table when I need to work.",
      rating: 5,
    },
    {
      name: "Lewis",
      role: "Weekend brunch guest",
      text: "Croissants are amazing and the cinnamon buns sell out fast. Love that I can order ahead when it is busy.",
      rating: 5,
    },
    {
      name: "Noah",
      role: "Coffee enthusiast",
      text: "Great rotating single origins and friendly cupping sessions. It feels more like a tiny community roastery.",
      rating: 5,
    },
  ];

  const gallery = [
    "https://images.unsplash.com/photo-1498804103079-a6351b050096?q=80&w=1200&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1200&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1464306076886-da185f6a9d05?q=80&w=1200&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1493770348161-369560ae357d?q=80&w=1200&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1521017432531-fbd92d090162?q=80&w=1200&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1453614512568-c4024d13c247?q=80&w=1200&auto=format&fit=crop",
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
              people come together. Order ahead on busy days or stay for a slow
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
                Open from seven thirty on weekdays, eight on Saturdays and nine on Sundays.
              </div>
              <div className="rounded-2xl border border-white/15 bg-white/8 p-4 text-xs text-white/85 backdrop-blur shadow-sm">
                Find us at fourteen Market Street near the main square.
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
            </article>
          ))}
        </div>
      </section>

      {/* Callouts */}
      <section className="mx-auto max-w-7xl px-4 pb-16">
        <div className="grid gap-8 md:grid-cols-2">
          <div className="rounded-3xl border border-neutral-200 bg-white/90 p-6 shadow-sm md:p-8">
            <h2 className="font-display text-2xl font-bold tracking-tight">
              Order ahead on busy mornings
            </h2>
            <p className="mt-3 text-sm text-neutral-700">
              The takeaway page shows how guests can build a simple coffee and pastry order.
            </p>
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
              The merch page demonstrates ecommerce capability.
            </p>
            <Link
              href="/shop"
              className="mt-5 inline-block rounded-xl border border-neutral-900 px-5 py-3 text-sm font-semibold text-neutral-900 shadow-sm transition hover:-translate-y-0.5 hover:bg-neutral-900 hover:text-white"
            >
              Visit the merch demo
            </Link>
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section className="mx-auto max-w-7xl px-4 pb-16">
        <h2 className="font-display text-2xl font-bold tracking-tight md:text-3xl">
          What guests say
        </h2>
        <div className="mt-6 grid gap-6 md:grid-cols-3">
          {reviews.map((r) => (
            <figure
              key={r.name}
              className="rounded-2xl border border-neutral-200 bg-white/95 p-6 shadow-sm"
            >
              <div className="flex items-center gap-2 text-amber-500 text-xs">
                {"★★★★★".slice(0, r.rating)}
              </div>
              <blockquote className="mt-3 text-sm text-neutral-800">
                “{r.text}”
              </blockquote>
              <figcaption className="mt-4 text-sm font-medium text-neutral-900">
                {r.name}
                <span className="block text-xs font-normal text-neutral-500">
                  {r.role}
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      {/* Gallery */}
      <section className="mx-auto max-w-7xl px-4 pb-20">
        <h2 className="font-display text-2xl font-bold tracking-tight md:text-3xl">
          Inside Hearth and Bean
        </h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {gallery.map((src, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-2xl border border-neutral-200 bg-neutral-100"
            >
              {src ? (
                <img
                  src={src}
                  alt={`Cafe photo ${index + 1}`}
                  className="h-52 w-full object-cover transition hover:scale-105"
                />
              ) : (
                <div className="grid h-52 w-full place-items-center text-xs text-neutral-500">
                  Photo coming soon
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
}
