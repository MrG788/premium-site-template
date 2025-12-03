import React, { useState } from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

const DRINKS = [
  { id: "fw", name: "Flat White", price: 3.4 },
  { id: "latte", name: "Latte", price: 3.2 },
  { id: "cap", name: "Cappuccino", price: 3.2 },
  { id: "coldbrew", name: "Vanilla Cold Brew", price: 3.8 },
];

const EXTRAS = [
  { id: "oat", name: "Oat milk", price: 0.5 },
  { id: "syrup", name: "Flavour syrup", price: 0.5 },
  { id: "extra-shot", name: "Extra espresso shot", price: 0.7 },
];

const PASTRIES = [
  { id: "croissant", name: "Butter Croissant", price: 2.3 },
  { id: "cinnamon", name: "Cinnamon Bun", price: 2.8 },
  { id: "brownie", name: "Brownie", price: 2.9 },
];

export default function TakeawayPage() {
  const [basket, setBasket] = useState([]);
  const [note, setNote] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function addItem(item, type) {
    setBasket((prev) => [
      ...prev,
      {
        id: `${type}-${item.id}-${prev.length}`,
        name: item.name,
        price: item.price,
        type,
      },
    ]);
    setSubmitted(false);
  }

  function removeItem(id) {
    setBasket((prev) => prev.filter((item) => item.id !== id));
  }

  const total = basket.reduce((sum, item) => sum + item.price, 0);

  function submitOrder() {
    if (basket.length === 0) return;
    setSubmitted(true);
  }

  return (
    <main className="min-h-screen bg-amber-50">
      <NavBar />

      <section className="mx-auto max-w-7xl px-4 py-10">
        <div className="flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">
              Takeaway ordering demo
            </h1>
            <p className="mt-2 max-w-2xl text-sm text-neutral-700">
              This page shows how a coffee shop site can handle simple ecommerce; 
              customers pick drinks and pastries, see a running total and confirm an order,
              while a real project could connect this to payments or an in store ticket system.
            </p>
          </div>
          <p className="text-xs text-neutral-500">
            This is a demo, no real orders are placed.
          </p>
        </div>

        <div className="mt-8 grid gap-8 lg:grid-cols-3">
          {/* Left side menu */}
          <div className="space-y-6 lg:col-span-2">
            <Card title="Hot drinks">
              <ItemGrid
                items={DRINKS}
                onAdd={(item) => addItem(item, "drink")}
              />
            </Card>

            <Card title="Pastries and bakes">
              <ItemGrid
                items={PASTRIES}
                onAdd={(item) => addItem(item, "pastry")}
              />
            </Card>

            <Card title="Extras">
              <ItemGrid
                items={EXTRAS}
                onAdd={(item) => addItem(item, "extra")}
                small
              />
            </Card>
          </div>

          {/* Basket */}
          <div className="space-y-4">
            <Card title="Your basket">
              {basket.length === 0 ? (
                <p className="text-sm text-neutral-600">
                  No items yet. Tap "Add" on any drink or pastry to start building
                  a takeaway order.
                </p>
              ) : (
                <ul className="space-y-2 text-sm">
                  {basket.map((item) => (
                    <li
                      key={item.id}
                      className="flex items-center justify-between gap-2"
                    >
                      <div>
                        <p className="font-medium">{item.name}</p>
                        <p className="text-xs text-neutral-500 capitalize">
                          {item.type}
                        </p>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-sm font-medium">
                          £{item.price.toFixed(2)}
                        </span>
                        <button
                          onClick={() => removeItem(item.id)}
                          className="rounded-lg border border-neutral-300 px-2 py-1 text-xs hover:bg-neutral-100"
                        >
                          Remove
                        </button>
                      </div>
                    </li>
                  ))}
                </ul>
              )}

              <div className="mt-4 border-t border-neutral-200 pt-4 text-sm">
                <div className="flex items-center justify-between font-semibold">
                  <span>Total</span>
                  <span>£{total.toFixed(2)}</span>
                </div>
              </div>
            </Card>

            <Card title="Pickup details">
              <label className="mb-1 block text-xs font-medium text-neutral-700">
                Notes for barista
              </label>
              <textarea
                rows={3}
                className="w-full rounded-xl border border-neutral-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500"
                placeholder="Extra hot, no foam, call when ready, allergies, etc."
                value={note}
                onChange={(e) => setNote(e.target.value)}
              />
              <button
                onClick={submitOrder}
                disabled={basket.length === 0}
                className="mt-4 w-full rounded-xl bg-neutral-900 px-4 py-3 text-sm font-medium text-white shadow-sm transition hover:bg-neutral-800 disabled:cursor-not-allowed disabled:bg-neutral-300 disabled:text-neutral-600"
              >
                Confirm takeaway order
              </button>
              {submitted && (
                <p className="mt-3 rounded-xl border border-emerald-200 bg-emerald-50 px-3 py-2 text-xs text-emerald-700">
                  Demo complete, in a live build this order would be sent to the
                  coffee shop as an email, ticket or on screen dashboard.
                </p>
              )}
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

function Card({ title, children }) {
  return (
    <section className="rounded-2xl border border-neutral-200 bg-white p-5 shadow-sm">
      <h2 className="text-lg font-semibold tracking-tight">{title}</h2>
      <div className="mt-4">{children}</div>
    </section>
  );
}

function ItemGrid({ items, onAdd, small }) {
  return (
    <div
      className={
        "grid gap-3 " + (small ? "sm:grid-cols-2" : "sm:grid-cols-2 lg:grid-cols-3")
      }
    >
      {items.map((item) => (
        <div
          key={item.id}
          className="flex flex-col justify-between rounded-xl border border-neutral-200 bg-neutral-50 p-3 transition hover:-translate-y-0.5 hover:border-amber-300 hover:bg-white hover:shadow-sm"
        >
          <div>
            <p className="text-sm font-medium">{item.name}</p>
            <p className="mt-1 text-xs text-neutral-600">
              £{item.price.toFixed(2)}
            </p>
          </div>
          <button
            onClick={() => onAdd(item)}
            className="mt-3 rounded-xl bg-neutral-900 px-3 py-2 text-xs font-semibold text-white hover:bg-neutral-800"
          >
            Add
          </button>
        </div>
      ))}
    </div>
  );
}
