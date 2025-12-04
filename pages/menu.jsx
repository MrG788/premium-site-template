import React from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

export default function MenuPage() {
  const coffee = [
    { name: "Espresso", price: "£2.20" },
    { name: "Americano", price: "£2.60" },
    { name: "Latte", price: "£3.20" },
    { name: "Cappuccino", price: "£3.20" },
    { name: "Flat White", price: "£3.40" },
    { name: "Mocha", price: "£3.80" },
  ];

  const cold = [
    { name: "Iced Latte", price: "£3.60" },
    { name: "Iced Americano", price: "£3.10" },
    { name: "Vanilla Cold Brew", price: "£3.80" },
  ];

  const pastries = [
    { name: "Butter Croissant", price: "£2.30" },
    { name: "Pain au Chocolat", price: "£2.50" },
    { name: "Cinnamon Bun", price: "£2.80" },
    { name: "Banana Bread", price: "£2.70" },
  ];

  return (
    <main className="min-h-screen bg-gradient-to-b from-amber-50 to-amber-100">
      <NavBar />
      <section className="mx-auto max-w-7xl px-4 py-12">
        <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
          <div>
            <h1 className="font-display text-3xl font-bold tracking-tight md:text-4xl">
              Menu
            </h1>
            <p className="mt-2 max-w-xl text-sm text-neutral-700">
              All drinks are available with oat, almond or soy milk for an extra
              50p. Seasonal specials and guest beans rotate regularly, so the
              blackboard in store always has something new.
            </p>
          </div>
          <div className="rounded-2xl border border-amber-200 bg-amber-50 px-4 py-3 text-xs text-amber-900 max-w-xs">
            Prices and items shown here are for demo purposes. A live site would
            reflect the coffee shop menu and pricing exactly.
          </div>
        </div>

        <div className="mt-10 grid gap-8 md:grid-cols-3">
          <MenuSection title="Coffee" items={coffee} />
          <MenuSection title="Iced and cold" items={cold} />
          <MenuSection title="Pastries" items={pastries} />
        </div>
      </section>
      <Footer />
    </main>
  );
}

function MenuSection({ title, items }) {
  return (
    <div className="rounded-2xl border border-neutral-200 bg-white/95 p-6 shadow-sm">
      <h2 className="text-lg font-semibold tracking-tight">{title}</h2>
      <ul className="mt-4 space-y-3 text-sm">
        {items.map((item) => (
          <li
            key={item.name}
            className="flex items-center justify-between text-neutral-800"
          >
            <span>{item.name}</span>
            <span className="font-medium">{item.price}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
