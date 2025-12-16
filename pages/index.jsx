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

  const reviews = [
    {
      name: "Amira",
      role: "Regular guest",
      text: "Best flat white in town. Friendly staff and a calm atmosphere.",
    },
    {
      name: "Lewis",
      role: "Weekend brunch",
      text: "Pastries are amazing and ordering ahead saves so much time.",
    },
    {
      name: "Noah",
      role: "Coffee enthusiast",
      text: "Great rotating beans and a proper community feel.",
    },
  ];

  const gallery = [
    "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1600&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1493770348161-369560ae357d?q=80&w=1600&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1464306076886-da185f6a9d05?q=80&w=1600&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=1600&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1521017432531-fbd92d090162?q=80&w=1600&auto=format&fit=crop",
    "",
  ];

  return (
    <main className="min-h-screen bg-gradient-to-b from-amber-50 via-amber-50 to-amber-100">
      <NavBar />

      {/* Hero */}
      <section className="relative">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=2000&auto=format&fit=crop"
            alt="Coffee shop interior"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-black/60" />
        </div>

        <div className="relative mx-auto max-w-7xl px-4 py-28">
          <h1
            data-aos="fade-up"
            className="text-4xl md:text-6xl font-extrabold tracking-tight text-white"
          >
            Hearth and Bean Coffee Co.
          </h1>

          <p
            data-aos="fade-up"
            data-aos-delay="150"
            className="mt-4 max-w-xl text-white/85 text-sm md:text-base"
          >
            Coffee roasted in house, pastries baked the same morning, a place to
            slow down and enjoy quality.
          </p>

          <div
            data-aos="fade-up"
            data-aos-delay="300"
            className="mt-6 flex gap-4 flex-wrap"
          >
            <Link
              href="/takeaway"
              className="bg-amber-400 text-neutral-900 px-5 py-3 rounded-xl text-sm font-semibold transition hover:bg-amber-300 hover:-translate-y-0.5"
            >
              Order takeaway
            </Link>

            <Link
              href="/shop"
              className="border border-white/50 text-white px-5 py-3 rounded-xl text-sm font-medium transition hover:bg-white/10"
            >
              Shop mugs and beans
            </Link>
          </div>
        </div>
      </section>

      {/* Highlights */}
      <section className="mx-auto max-w-7xl px-4 py-16">
        <h2
          data-aos="fade-up"
          className="text-2xl md:text-3xl font-bold tracking-tight"
        >
          Why guests choose us
        </h2>

        <div className="mt-8 grid md:grid-cols-3 gap-6">
          {highlights.map((h, i) => (
            <div
              key={h.title}
              data-aos="fade-up"
              data-aos-delay={i * 120}
              className="bg-white p-6 rounded-2xl border border-neutral-200 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
            >
              <h3 className="font-semibold">{h.title}</h3>
              <p className="mt-2 text-sm text-neutral-700">{h.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Reviews */}
      <section className="mx-auto max-w-7xl px-4 pb-16">
        <h2
          data-aos="fade-up"
          className="text-2xl md:text-3xl font-bold tracking-tight"
        >
          What guests say
        </h2>

        <div className="mt-6 grid md:grid-cols-3 gap-6">
          {reviews.map((r, i) => (
            <figure
              key={r.name}
              data-aos="zoom-in"
              data-aos-delay={i * 120}
              className="bg-white p-6 border border-neutral-200 rounded-2xl shadow-sm"
            >
              <div className="text-amber-500 text-xs">★★★★★</div>
              <blockquote className="mt-3 text-sm text-neutral-800">
                “{r.text}”
              </blockquote>
              <figcaption className="mt-3 text-sm font-semibold">
                {r.name}
                <span className="block text-xs text-neutral-500">
                  {r.role}
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      {/* Gallery */}
      <section className="mx-auto max-w-7xl px-4 pb-20">
        <h2
          data-aos="fade-up"
          className="text-2xl md:text-3xl font-bold tracking-tight"
        >
          Inside our cafe
        </h2>

        <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {gallery.map((src, i) => (
            <div
              key={i}
              data-aos="fade-up"
              data-aos-delay={i * 80}
              className="overflow-hidden rounded-2xl border border-neutral-200 bg-neutral-100"
            >
              {src ? (
                <img
                  src={src}
                  alt={`Cafe photo ${i + 1}`}
                  className="h-52 w-full object-cover transition-transform duration-500 hover:scale-105"
                />
              ) : (
                <div className="grid h-52 place-items-center text-xs text-neutral-500">
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
