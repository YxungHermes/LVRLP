"use client";

import { AnimateIn } from "@/components/AnimateIn";
import { motion, useReducedMotion } from "framer-motion";
import { Play } from "lucide-react";

export default function Hero() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900">
      {/* Video Background with Vignette */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Placeholder for video - would be replaced with actual reel */}
        <div className="absolute inset-0 bg-gradient-radial from-transparent via-black/20 to-black/60">
          <div className="absolute inset-0 bg-[url('/hero-poster.jpg')] bg-cover bg-center opacity-40 mix-blend-overlay"></div>
        </div>
        {/* Subtle film grain overlay */}
        <div
          className="absolute inset-0 opacity-[0.08] mix-blend-overlay pointer-events-none"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' /%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' /%3E%3C/svg%3E")`,
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
        <AnimateIn delay={0.1}>
          <motion.h1
            className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-white mb-6 leading-[1.1]"
            style={{
              textShadow: '0 2px 20px rgba(0, 0, 0, 0.5)',
              letterSpacing: '-0.02em'
            }}
          >
            Cinematic Wedding Films
            <br />
            <span className="text-brand-champagne">For Your Unique Love Story</span>
          </motion.h1>
        </AnimateIn>

        <AnimateIn delay={0.3}>
          <p className="text-xl sm:text-2xl text-gray-200 mb-12 max-w-3xl mx-auto leading-relaxed" style={{ textShadow: '0 1px 10px rgba(0, 0, 0, 0.5)' }}>
            Elegant, story-driven videography—crafted to be felt for decades
          </p>
        </AnimateIn>

        <AnimateIn delay={0.5}>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="#packages"
              className="px-8 py-4 bg-brand-amethyst text-white rounded-full font-medium hover:bg-brand-amethyst/90 transition-all shadow-lg hover:shadow-xl hover:scale-105 duration-200"
            >
              View Film Packages
            </a>
            <button
              className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white border-2 border-white/30 rounded-full font-medium hover:bg-white/20 hover:border-white/50 transition-all flex items-center gap-2 group"
            >
              <Play className="w-5 h-5 group-hover:scale-110 transition-transform" fill="currentColor" />
              Watch Our Films
            </button>
          </div>
        </AnimateIn>

        {/* Scroll indicator */}
        <AnimateIn delay={0.9}>
          <div className="mt-20 text-white/60">
            <motion.div
              className="flex flex-col items-center gap-2"
              animate={shouldReduceMotion ? {} : {
                y: [0, 10, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <span className="text-sm font-medium tracking-wider uppercase">Scroll</span>
              <svg
                className="w-6 h-6"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
              </svg>
            </motion.div>
          </div>
        </AnimateIn>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent"></div>
    </section>
  );
}
