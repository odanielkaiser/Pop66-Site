"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const navLinks = [
  { label: "Serviços", href: "/servicos" },
  { label: "Como Funciona", href: "/como-funciona" },
  { label: "Recursos", href: "/recursos" },
  { label: "Sobre", href: "/sobre" },
  { label: "Contato", href: "/contato" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#040404]/90 backdrop-blur-md border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/logo.jpeg"
              alt="Pop66"
              width={36}
              height={36}
              className="rounded-xl"
            />
            <span className="text-xl font-bold text-white">Pop66</span>
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-gray-300 hover:text-primary transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/baixar"
              className="bg-primary hover:bg-primary-dark text-[#040404] text-sm font-bold px-5 py-2.5 rounded-full transition-all shadow-lg shadow-primary/20"
            >
              Baixar App
            </Link>
          </nav>

          <button
            className="md:hidden p-2 text-gray-300"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {menuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {menuOpen && (
          <div className="md:hidden pb-4 border-t border-white/5 pt-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block py-2 text-sm font-medium text-gray-300 hover:text-primary transition-colors"
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/baixar"
              className="mt-3 inline-block bg-primary hover:bg-primary-dark text-[#040404] text-sm font-bold px-5 py-2.5 rounded-full transition-all"
              onClick={() => setMenuOpen(false)}
            >
              Baixar App
            </Link>
          </div>
        )}
      </div>
    </header>
  );
}
