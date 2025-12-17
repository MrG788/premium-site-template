export default function Footer() {
  return (
    <footer className="border-t border-neutral-200 bg-white">
      <div className="mx-auto max-w-7xl px-4 py-8 text-sm text-neutral-600 flex flex-col md:flex-row gap-4 justify-between">
        <p>© {new Date().getFullYear()} Hearth and Bean Coffee Co.</p>
        <p>Roasted with care. Served with purpose.</p>
      </div>
    </footer>
  );
}
