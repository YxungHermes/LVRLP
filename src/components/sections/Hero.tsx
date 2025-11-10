"use client";

import { motion, useReducedMotion } from "framer-motion";
import { hero } from "@/content/home";

export default function Hero() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="relative h-[92vh] min-h-[640px] bg-black overflow-hidden">
      {/* Full-bleed Video */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        src={hero.video}
        poster={hero.poster}
        autoPlay
        muted
        loop
        playsInline
      />

      {/* Gradient overlay for legibility */}
      <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-black/70 via-black/40 to-transparent" />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-6xl px-6 h-full flex items-center">
        <div className="max-w-3xl">
          <motion.h1
            className="font-serif text-ink tracking-wide leading-tight text-hero text-white mb-6"
            style={{ fontVariantLigatures: "common-ligatures" }}
            initial={shouldReduceMotion ? {} : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            {hero.title.split(" ").slice(0, 2).join(" ")}
            <br />
            {hero.title.split(" ").slice(2).join(" ")}
          </motion.h1>

          <motion.p
            className="text-subhero text-white/90 mb-8 max-w-xl"
            initial={shouldReduceMotion ? {} : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            {hero.subtitle}
          </motion.p>

          <motion.div
            className="flex flex-wrap gap-3"
            initial={shouldReduceMotion ? {} : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <a
              href={hero.ctas.secondary.href}
              className="px-8 py-4 rounded-full bg-rose-grad text-white hover-lift text-sm font-medium tracking-wide"
            >
              {hero.ctas.secondary.label}
            </a>
            <a
              href={hero.ctas.primary.href}
              className="px-8 py-4 rounded-full border border-white/60 text-white/90 backdrop-blur-sm hover:bg-white hover:text-[var(--espresso)] transition-all text-sm font-medium tracking-wide"
            >
              {hero.ctas.primary.label}
            </a>
          </motion.div>

          {/* Optional stats row */}
          <motion.div
            className="mt-12 flex gap-8 text-white/70 text-sm"
            initial={shouldReduceMotion ? {} : { opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <div>
              <span className="block text-2xl font-serif text-white mb-1">
                {hero.stats.weddings}
              </span>
              <span className="text-xs uppercase tracking-wider">Weddings</span>
            </div>
            <div>
              <span className="block text-2xl font-serif text-white mb-1">
                {hero.stats.rating}
              </span>
              <span className="text-xs uppercase tracking-wider">Rating</span>
            </div>
            <div>
              <span className="block text-2xl font-serif text-white mb-1">
                {hero.stats.experience}
              </span>
              <span className="text-xs uppercase tracking-wider">Experience</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
