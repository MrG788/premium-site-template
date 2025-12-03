import React, { useState } from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

const MUGS = [
  {
    id: "classic-mug",
    name: "Classic logo mug",
    price: 9.5,
    desc: "White ceramic mug with Hearth and Bean logo.",
  },
  {
    id: "black-mug",
    name: "Midnight roast mug",
    price: 11.0,
    desc: "Matte black mug with gold logo print.",
  },
  {
    id: "travel-mug",
    name: "Insulated travel cup",
    price: 16.0,
    desc: "Double walled stainless steel cup that keeps drinks hot.",
  },
];

const BEANS = [
  {
    id: "house-blend",
    name: "House blend 250g",
    price: 8.5,
    desc: "Balanced espresso blend with chocolate and hazelnut notes.",
  },
  {
    id: "single-origin",
    name: "Single origin 250g",
    price: 9.8,
    desc: "Seasonal single origin suited for filter and pour over.",
  },
  {
    id: "decaf",
    name: "Sugarcane decaf 250g",
    price: 9.2,
    desc: "Sweet decaf processed with sugarcane, ideal for evenings.",
  },
];

const ACCESSORIES = [
  {
    id: "tote",
    name: "Hearth and Bean tote bag",
    price: 7.0,
    desc: "Heavy cotton tote with screen printed logo.",
  },
  {
    id: "pin",
    name: "Enamel coffee pin",
    price: 4.5,
    desc: "Small enamel pin to add to bags and jackets.",
  },
];

export default function MerchShopPage() {
  const [basket, setBasket] = useState([]);
  const [note, setNote] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function addItem(item, group) {
    setBasket((prev) => [
      ...prev,
      {
        id: `${group}-${item.id}-${prev.length}`,
        name: item.name,
        price: item.price,
        group,
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
              Shop branded mugs and coffee
            </h1>
            <p className="mt-2 max-w-2xl text-sm text-neutral-700">
              This page demonstrates ecommerce capability. Guests add branded mugs,
              beans and accessories to a basket, see a total and confirm an order.
              In a real build this could connect to Stripe, PayPal or a full shop
              platform.
            </p>
          </div>
          <p className="text-xs text-neutral-500">
            Demo only, no real payments or orders are taken here.
          </p>
        </div>

        <div className="mt-8 grid gap-8 lg:grid-cols-3">
          {/* Products */}
          <div className="space-y-6 lg:col-span-2">
            <Card title="Branded mugs">
              <ProductGrid
                items={MUGS}
                onAdd={(item) => addItem(item, "mug")}
              />
            </Card>

            <Card title="Coffee beans">
              <ProductGrid
                items={BEANS}
                onAdd={(item) => addItem(item, "beans")}
              />
            </Card>

            <Card title="Accessories">
              <ProductGrid
                items={ACCESSORIES}
                onAdd={(item) => addItem(item, "accessory")}
                small
              />
            </Card>
          </div>

          {/* Basket */}
          <div className="space-y-4">
            <Card title="Your basket">
              {basket.length === 0 ? (
                <p className="text-sm text-neutral-600">
                  Basket is empty. Tap "Add" on any mug, beans or accessory to build
                  a simple merch order.
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
                          {item.group}
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

            <Card title="Delivery and notes">
              <label className="mb-1 block text-xs font-medium text-neutral-700">
                Notes for the shop
              </label>
              <textarea
                rows={3}
                className="w-full rounded-xl border border-neutral-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500"
                placeholder="Gift message, grind size for beans, delivery notes, etc."
                value={note}
                onChange={(e) => setNote(e.target.value)}
              />
              <button
                onClick={submitOrder}
                disabled={basket.length === 0}
                className="mt-4 w-full rounded-xl bg-neutral-900 px-4 py-3 text-sm font-medium text-white shadow-sm transition hover:bg-neutral-800 disabled:cursor-not-allowed disabled:bg-neutral-300 disabled:text-neutral-600"
              >
                Confirm merch order
              </button>
              {submitted && (
                <p className="mt-3 rounded-xl border border-emerald-200 bg-emerald-50 px-3 py-2 text-xs text-emerald-700">
                  Demo complete, in a live project this order would be sent to the
                  business or handled by a payment and order system.
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

function ProductGrid({ items, onAdd, small }) {
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
            {item.desc && (
              <p className="mt-1 text-xs text-neutral-600">{item.desc}</p>
            )}
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
