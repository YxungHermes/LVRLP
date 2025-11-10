"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const { scrollY } = useScroll();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navigation = [
    { name: "Films", href: "#signature-work" },
    { name: "Packages", href: "#packages" },
    { name: "Stories", href: "#testimonials" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[var(--cream)] shadow-sm"
          : "bg-transparent"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="grid grid-cols-3 items-center">
          {/* Left: Navigation */}
          <nav className="hidden md:flex gap-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`text-sm font-medium tracking-wide transition-colors ${
                  scrolled
                    ? "text-[var(--espresso)] hover:text-[var(--rose-1)]"
                    : "text-white/90 hover:text-white"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Center: Logo */}
          <div className="flex justify-center">
            <Link href="/" className="group">
              <motion.div
                className="font-serif text-2xl tracking-wider"
                style={{
                  fontVariantLigatures: "common-ligatures",
                  color: scrolled ? "var(--ink)" : "white",
                }}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                LVR
              </motion.div>
            </Link>
          </div>

          {/* Right: CTA */}
          <div className="flex justify-end">
            <Link
              href="#contact"
              className={`px-6 py-2 rounded-full border transition-all hover-lift text-sm font-medium tracking-wide ${
                scrolled
                  ? "border-[var(--espresso)] text-[var(--espresso)] hover:bg-rose-grad hover:text-white hover:border-transparent"
                  : "border-white/60 text-white/90 hover:bg-white hover:text-[var(--espresso)]"
              }`}
            >
              Book a Call
            </Link>
          </div>
        </div>

        {/* Mobile Navigation */}
        <nav className="md:hidden mt-4 flex justify-center gap-6">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={`text-xs font-medium tracking-wide transition-colors ${
                scrolled
                  ? "text-[var(--espresso)] hover:text-[var(--rose-1)]"
                  : "text-white/90 hover:text-white"
              }`}
            >
              {item.name}
            </Link>
          ))}
        </nav>
      </div>
    </motion.header>
  );
}
