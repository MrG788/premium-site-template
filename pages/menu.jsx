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
    <main className="min-h-screen bg-amber-50 text-neutral-900">
      <NavBar />

      <section className="mx-auto max-w-7xl px-4 py-12">
        <h1 className="text-3xl font-bold tracking-tight">Menu</h1>
        <p className="mt-2 text-sm text-neutral-700">
          All drinks available with oat, almond and soy milk for an extra 50p. Ask
          about seasonal specials.
        </p>

        <div className="mt-8 grid md:grid-cols-3 gap-8">
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
    <div className="rounded-2xl border border-neutral-200 bg-white p-6">
      <h2 className="text-lg font-semibold tracking-tight">{title}</h2>
      <ul className="mt-4 space-y-3 text-sm">
        {items.map((item, i) => (
          <li key={i} className="flex items-center justify-between">
            <span>{item.name}</span>
            <span className="font-medium">{item.price}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
