import React from "react";

export default function CoffeeShopSite() {
  const shop = {
    name: "Hearth & Bean Coffee Co.",
    tagline: "Small batch coffee, fresh pastries, warm community",
    phone: "+44 7857 480130",
    email: "hello@hearthbean.co.uk",
    address: "14 Market Street, Skelmersdale, WN8 8DU",
    hours: [
      { d: "Mon", h: "07:30–18:00" },
      { d: "Tue", h: "07:30–18:00" },
      { d: "Wed", h: "07:30–18:00" },
      { d: "Thu", h: "07:30–20:00" },
      { d: "Fri", h: "07:30–20:00" },
      { d: "Sat", h: "08:00–20:00" },
      { d: "Sun", h: "09:00–16:00" },
    ],
    socials: [
      { label: "Instagram", href: "https://instagram.com/yourcoffee" },
      { label: "Facebook", href: "https://facebook.com/yourcoffee" },
      { label: "TikTok", href: "https://tiktok.com/@yourcoffee" },
    ],
  };

  const menu = {
    signatures: [
      { title: "Hearth Flat White", desc: "Velvety microfoam over a double shot of our house blend", price: "£3.40", img: "https://images.unsplash.com/photo-1503481766315-7a586b20f66d?q=80&w=1400&auto=format&fit=crop" },
      { title: "Vanilla Cold Brew", desc: "Slow steeped for 16 hours, served over ice with vanilla", price: "£3.80", img: "https://images.unsplash.com/photo-1511920170033-f8396924c348?q=80&w=1400&auto=format&fit=crop" },
      { title: "Spiced Mocha", desc: "Cocoa, espresso, warm spices, finished with cream", price: "£4.10", img: "https://images.unsplash.com/photo-1494314671902-399b18174975?q=80&w=1400&auto=format&fit=crop" },
    ],
    coffee: [
      { title: "Espresso", price: "£2.20" },
      { title: "Americano", price: "£2.60" },
      { title: "Latte", price: "£3.20" },
      { title: "Cappuccino", price: "£3.20" },
      { title: "Flat White", price: "£3.40" },
      { title: "Mocha", price: "£3.80" },
      { title: "Affogato", price: "£4.20" },
    ],
    tea: [
      { title: "Breakfast Tea", price: "£2.20" },
      { title: "Earl Grey", price: "£2.40" },
      { title: "Peppermint", price: "£2.40" },
      { title: "Green Tea", price: "£2.40" },
      { title: "Chai Latte", price: "£3.60" },
    ],
    pastries: [
      { title: "Butter Croissant", price: "£2.30" },
      { title: "Pain au Chocolat", price: "£2.50" },
      { title: "Cinnamon Bun", price: "£2.80" },
      { title: "Banana Bread Slice", price: "£2.70" },
      { title: "Gluten Free Brownie", price: "£2.90" },
    ],
    brunch: [
      { title: "Sourdough Avo Toast", desc: "Crushed avocado, cherry tomato, chilli, lemon", price: "£6.50" },
      { title: "Breakfast Roll", desc: "Free range egg, bacon or halloumi, house relish", price: "£5.90" },
      { title: "Granola Bowl", desc: "Greek yogurt, honey, berries, toasted oats", price: "£5.20" },
    ],
  };

  const events = [
    { title: "Open Mic Night", date: "Every Thursday 18:30", desc: "Acoustic sets, poetry, friendly vibes" },
    { title: "Latte Art Basics", date: "First Saturday 10:00", desc: "Learn steaming, pouring patterns, hands on practice" },
    { title: "Cupping Session", date: "Last Sunday 11:00", desc: "Taste seasonal origins with our head roaster" },
  ];

  return (
    <main className="min-h-screen bg-amber-50 text-neutral-900">
      {/* Top bar */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b border-neutral-200">
        <div className="mx-auto max-w-7xl px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-xl bg-amber-900 text-amber-50 grid place-items-center font-bold">HB</div>
            <span className="font-semibold tracking-tight">{shop.name}</span>
          </div>
          <nav className="hidden md:flex items-center gap-6 text-sm">
            <a href="#menu" className="hover:text-neutral-600">Menu</a>
            <a href="#about" className="hover:text-neutral-600">About</a>
            <a href="#events" className="hover:text-neutral-600">Events</a>
            <a href="#gallery" className="hover:text-neutral-600">Gallery</a>
            <a href="#visit" className="hover:text-neutral-600">Visit</a>
            <a href={`tel:${shop.phone}`} className="px-3 py-2 rounded-xl bg-amber-900 text-amber-50">Call us</a>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="relative">
        <div className="absolute inset-0">
          <img src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=2000&auto=format&fit=crop" alt="Coffee bar with espresso machine" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-neutral-900/50" />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 py-24 md:py-32">
          <h1 className="text-4xl md:text-6xl font-extrabold text-white tracking-tight">{shop.name}</h1>
          <p className="mt-3 max-w-2xl text-lg md:text-xl text-white/90">{shop.tagline}</p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a href="#menu" className="px-5 py-3 rounded-xl bg-amber-400 text-neutral-900 font-medium">See the menu</a>
            <a href="#visit" className="px-5 py-3 rounded-xl bg-white/10 border border-white/30 text-white font-medium">Plan your visit</a>
          </div>
        </div>
      </section>

      {/* Signatures */}
      <section id="menu" className="mx-auto max-w-7xl px-4 py-16">
        <div className="flex items-end justify-between gap-6">
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight">Signature drinks</h2>
          <a href="#full-menu" className="text-sm px-4 py-2 rounded-xl bg-neutral-900 text-white">Full menu</a>
        </div>
        <div className="mt-8 grid md:grid-cols-3 gap-6">
          {menu.signatures.map((s, i) => (
            <article key={i} className="rounded-2xl overflow-hidden border border-neutral-200 bg-white shadow-sm">
              <img src={s.img} alt={s.title} className="h-56 w-full object-cover" />
              <div className="p-6">
                <div className="flex items-center justify-between">
                  <h3 className="font-semibold tracking-tight">{s.title}</h3>
                  <div className="text-sm font-medium">{s.price}</div>
                </div>
                <p className="mt-1 text-sm text-neutral-600">{s.desc}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Full menu grid */}
      <section id="full-menu" className="mx-auto max-w-7xl px-4 pb-16">
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="rounded-2xl border border-neutral-200 bg-white p-6">
            <h3 className="text-lg font-semibold tracking-tight">Coffee</h3>
            <ul className="mt-4 space-y-3">
              {menu.coffee.map((i, idx) => (
                <li key={idx} className="flex items-center justify-between text-sm">
                  <span>{i.title}</span>
                  <span className="font-medium">{i.price}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl border border-neutral-200 bg-white p-6">
            <h3 className="text-lg font-semibold tracking-tight">Tea and more</h3>
            <ul className="mt-4 space-y-3">
              {menu.tea.map((i, idx) => (
                <li key={idx} className="flex items-center justify-between text-sm">
                  <span>{i.title}</span>
                  <span className="font-medium">{i.price}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl border border-neutral-200 bg-white p-6">
            <h3 className="text-lg font-semibold tracking-tight">Pastries</h3>
            <ul className="mt-4 space-y-3">
              {menu.pastries.map((i, idx) => (
                <li key={idx} className="flex items-center justify-between text-sm">
                  <span>{i.title}</span>
                  <span className="font-medium">{i.price}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="mt-8 rounded-2xl border border-amber-200 bg-amber-100 p-6 text-sm">
          <p>Add oat, soy or almond milk: 50p. Decaf available. Ask about seasonal syrups and limited bakes.</p>
        </div>
        <div className="mt-8 rounded-2xl border border-neutral-200 bg-white p-6">
          <h3 className="text-lg font-semibold tracking-tight">Brunch plates</h3>
          <ul className="mt-4 grid md:grid-cols-3 gap-4">
            {menu.brunch.map((b, i) => (
              <li key={i} className="rounded-xl border border-neutral-200 p-4">
                <div className="flex items-center justify-between">
                  <span className="font-medium">{b.title}</span>
                  <span className="text-sm">{b.price}</span>
                </div>
                <p className="text-sm text-neutral-600 mt-1">{b.desc}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* About */}
      <section id="about" className="mx-auto max-w-7xl px-4 pb-16">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          <div className="rounded-2xl overflow-hidden border border-neutral-200">
            <img src="https://images.unsplash.com/photo-1521017432531-fbd92d090162?q=80&w=1600&auto=format&fit=crop" alt="Barista pouring latte art" className="w-full h-full object-cover" />
          </div>
          <div>
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight">Our story</h2>
            <p className="mt-3 text-neutral-700">We started as a tiny pop up cart serving filter coffee at the Saturday market. Today Hearth & Bean is a full service cafe with a small roastery in the back. We source in season beans, we roast in small batches, and we dial in each espresso daily.</p>
            <p className="mt-3 text-neutral-700">Our bakers deliver fresh pastries every morning. Come early for croissants, come later for warm buns. Stay for the community, live music, and workshops.</p>
            <div className="mt-6 grid sm:grid-cols-3 gap-4 text-sm">
              <div className="rounded-xl border border-neutral-200 bg-white p-4"><div className="text-xl font-extrabold">2019</div><div className="text-neutral-600">Founded</div></div>
              <div className="rounded-xl border border-neutral-200 bg-white p-4"><div className="text-xl font-extrabold">12</div><div className="text-neutral-600">Staff</div></div>
              <div className="rounded-xl border border-neutral-200 bg-white p-4"><div className="text-xl font-extrabold">150+</div><div className="text-neutral-600">Seats</div></div>
            </div>
          </div>
        </div>
      </section>

      {/* Events */}
      <section id="events" className="mx-auto max-w-7xl px-4 pb-16">
        <div className="rounded-3xl bg-neutral-900 text-white p-8 md:p-10 grid md:grid-cols-3 gap-8 items-center">
          <div className="md:col-span-2">
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight">Happenings at the cafe</h2>
            <p className="mt-2 text-white/85">Join our weekly community nights, beginner friendly classes, and tasting sessions. Everyone is welcome.</p>
            <ul className="mt-4 grid sm:grid-cols-2 gap-2 text-sm text-white/90 list-disc list-inside">
              {events.map((e, i) => (
                <li key={i}><span className="font-medium">{e.title}</span> · {e.date} · {e.desc}</li>
              ))}
            </ul>
          </div>
          <div className="bg-white text-neutral-900 rounded-2xl p-6">
            <div className="text-xl font-bold">Book a table</div>
            <p className="text-sm text-neutral-600 mt-1">Reserve for brunch or groups of 6 or more</p>
            <a href="#reserve" className="mt-4 inline-block w-full text-center px-4 py-3 rounded-xl bg-neutral-900 text-white">Reserve now</a>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section id="gallery" className="mx-auto max-w-7xl px-4 pb-16">
        <h2 className="text-2xl md:text-3xl font-bold tracking-tight">Gallery</h2>
        <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            "https://images.unsplash.com/photo-1498804103079-a6351b050096?q=80&w=1200&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=1200&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1453614512568-c4024d13c247?q=80&w=1200&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1493770348161-369560ae357d?q=80&w=1200&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1511920170033-f8396924c348?q=80&w=1200&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1521017432531-fbd92d090162?q=80&w=1200&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1464306076886-da185f6a9d05?q=80&w=1200&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1200&auto=format&fit=crop",
          ].map((src, i) => (
            <img key={i} src={src} alt={`Cafe photo ${i + 1}`} className="h-48 w-full object-cover rounded-xl border border-neutral-200" />
          ))}
        </div>
      </section>

      {/* Reserve */}
      <section id="reserve" className="mx-auto max-w-7xl px-4 pb-16">
        <div className="grid lg:grid-cols-2 gap-10 items-start">
          <div className="rounded-2xl border border-neutral-200 bg-white p-6">
            <h2 className="text-2xl font-bold tracking-tight">Reserve a table</h2>
            <form className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input className="w-full rounded-xl border border-neutral-300 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500" placeholder="Your name" />
              <input className="w-full rounded-xl border border-neutral-300 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500" placeholder="Email or phone" />
              <input className="w-full rounded-xl border border-neutral-300 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500" placeholder="Date" />
              <input className="w-full rounded-xl border border-neutral-300 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500" placeholder="Time" />
              <select className="w-full rounded-xl border border-neutral-300 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500">
                <option>2 guests</option>
                <option>3 guests</option>
                <option>4 guests</option>
                <option>5 guests</option>
                <option>6 guests</option>
                <option>7 guests</option>
                <option>8 guests</option>
              </select>
              <textarea className="w-full sm:col-span-2 rounded-xl border border-neutral-300 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500" rows={4} placeholder="Notes or dietary needs" />
              <button type="button" className="sm:col-span-2 px-5 py-3 rounded-xl bg-amber-900 text-amber-50">Request booking</button>
            </form>
          </div>
          <div className="rounded-2xl overflow-hidden border border-neutral-200 bg-white">
            <div className="h-72 w-full bg-amber-100 grid place-items-center text-neutral-600">Map placeholder</div>
            <div className="p-6">
              <h3 className="font-semibold">Visit us</h3>
              <p className="text-sm text-neutral-600 mt-1">{shop.address}</p>
              <div className="mt-3 grid grid-cols-2 gap-3 text-sm">
                {shop.hours.map((row, i) => (
                  <div key={i} className="flex items-center justify-between rounded-xl border border-neutral-200 p-3">
                    <span className="font-medium">{row.d}</span>
                    <span className="text-neutral-600">{row.h}</span>
                  </div>
                ))}
              </div>
              <div className="mt-3 text-sm">
                <p><span className="font-medium">Phone:</span> <a href={`tel:${shop.phone}`} className="underline">{shop.phone}</a></p>
                <p className="mt-1"><span className="font-medium">Email:</span> <a href={`mailto:${shop.email}`} className="underline">{shop.email}</a></p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section id="reviews" className="mx-auto max-w-7xl px-4 pb-16">
        <h2 className="text-2xl md:text-3xl font-bold tracking-tight">What guests say</h2>
        <div className="mt-6 grid md:grid-cols-3 gap-6">
          {[
            { name: "Amira", text: "Best flat white in town, friendly team and cozy space" },
            { name: "Lewis", text: "Pastries are amazing, the cinnamon bun is a winner" },
            { name: "Noah", text: "Love the events calendar and the cupping session" },
          ].map((r, i) => (
            <figure key={i} className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm">
              <blockquote className="text-neutral-700">“{r.text}”</blockquote>
              <figcaption className="mt-3 text-sm font-medium">{r.name}</figcaption>
            </figure>
          ))}
        </div>
      </section>

      {/* Visit */}
      <section id="visit" className="mx-auto max-w-7xl px-4 pb-24">
        <div className="rounded-2xl border border-neutral-200 bg-white p-6 md:p-8">
          <div className="grid lg:grid-cols-3 gap-8">
            <div>
              <h2 className="text-2xl font-bold tracking-tight">Find us</h2>
              <p className="mt-2 text-sm text-neutral-700">We are in the old market building next to the bookshop. Parking is available on Oak Street. Buses stop on Market Street every 10 minutes.</p>
              <div className="mt-4 text-sm">
                <p><span className="font-medium">Address:</span> {shop.address}</p>
                <p className="mt-1"><span className="font-medium">Phone:</span> <a href={`tel:${shop.phone}`} className="underline">{shop.phone}</a></p>
                <p className="mt-1"><span className="font-medium">Email:</span> <a href={`mailto:${shop.email}`} className="underline">{shop.email}</a></p>
              </div>
              <div className="mt-4 flex items-center gap-3">
                {shop.socials.map((s, i) => (
                  <a key={i} href={s.href} className="text-sm px-4 py-2 rounded-xl bg-neutral-900 text-white">{s.label}</a>
                ))}
              </div>
            </div>
            <div className="lg:col-span-2 rounded-xl overflow-hidden border border-neutral-200">
              <img src="https://images.unsplash.com/photo-1543269865-cbf427effbad?q=80&w=1600&auto=format&fit=crop" alt="Interior seating area with plants" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-neutral-200 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-10 text-sm text-neutral-600 flex flex-col md:flex-row items-center justify-between gap-4">
          <p>© {new Date().getFullYear()} {shop.name}. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-neutral-900">Privacy</a>
            <a href="#" className="hover:text-neutral-900">Terms</a>
          </div>
        </div>
      </footer>
    </main>
  );
}
