import { useState } from 'react';
import { Rocket, Menu, X } from 'lucide-react';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const navItems = [
    { name: 'Features', href: '#features' },
    { name: 'Showcase', href: '#showcase' },
    { name: 'Pricing', href: '#pricing' },
  ];

  return (
    <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/70 dark:bg-zinc-900/70 border-b border-zinc-200 dark:border-zinc-800">
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2">
          <span className="inline-flex h-9 w-9 rounded-lg bg-gradient-to-tr from-purple-500 via-fuchsia-500 to-blue-500 items-center justify-center text-white shadow-md">
            <Rocket className="h-5 w-5" />
          </span>
          <span className="text-lg font-semibold tracking-tight">Faceless Studio</span>
        </a>

        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a key={item.name} href={item.href} className="text-sm text-zinc-700 dark:text-zinc-300 hover:text-black dark:hover:text-white transition-colors">
              {item.name}
            </a>
          ))}
          <a href="#get-started" className="inline-flex items-center px-4 py-2 rounded-lg bg-black text-white dark:bg-white dark:text-black text-sm font-medium shadow hover:opacity-90 transition">
            Get Started
          </a>
        </div>

        <button
          className="md:hidden inline-flex items-center justify-center h-10 w-10 rounded-md border border-zinc-300 dark:border-zinc-700"
          onClick={() => setOpen((s) => !s)}
          aria-label="Toggle menu"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {open && (
        <div className="md:hidden border-t border-zinc-200 dark:border-zinc-800">
          <div className="px-4 py-3 space-y-2">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={() => setOpen(false)}
                className="block px-3 py-2 rounded-md text-zinc-700 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-800"
              >
                {item.name}
              </a>
            ))}
            <a
              href="#get-started"
              onClick={() => setOpen(false)}
              className="block px-3 py-2 rounded-md bg-black text-white dark:bg-white dark:text-black text-center"
            >
              Get Started
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
