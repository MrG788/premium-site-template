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
      text: "Best flat white in town. Staff always remember my order and there is always a quiet seat when I need to work.",
      rating: 5,
    },
    {
      name: "Lewis",
      role: "Weekend brunch guest",
      text: "Croissants are amazing. The cinnamon buns sell out fast. Love that I can order ahead when it is busy.",
      rating: 5,
    },
    {
      name: "Noah",
      role: "Coffee enthusiast",
      text: "Great rotating single origins and friendly cupping sessions. It feels like a tiny community roastery.",
      rating: 5,
    },
  ];

  // NEW curated gallery images
  const gallery = [
    "https://images.unsplash.com/photo-1511920170033-f8396924c348?q=80&w=1600&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1543269865-cbf427effbad?q=80&w=1600&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1470337458703-46ad1756a187?q=80&w=1600&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1453614512568-c4024d13c247?q=80&w=1600&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1464306076886-da185f6a9d05?q=80&w=1600&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1521017432531-fbd92d090162?q=80&w=1600&auto=format&fit=crop",
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
              Coffee roasted in house
              <br />
              pastries baked the same morning
            </h1>
            <p className="mt-4 max-w-lg text-sm text-white/85 md:text-base">
              Hearth and Bean is a neighbourhood coffee shop where beans, bakes and
              people come together. Order ahead or stay for a quiet morning with
              good company.
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
        </div>
      </section>

      {/* Why choose */}
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
              <h3 className="text-base font-semibold tracking-tight">{h.title}</h3>
              <p className="mt-2 text-sm text-neutral-700">{h.text}</p>
            </article>
          ))}
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
          Inside our cafe
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
