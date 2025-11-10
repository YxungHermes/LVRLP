"use client";

import { AnimateIn } from "@/components/AnimateIn";
import { motion, useReducedMotion } from "framer-motion";
import { Play, ChevronDown } from "lucide-react";
import { site } from "@/content/site";

export default function Hero() {
  const shouldReduceMotion = useReducedMotion();
  const { hero } = site;

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-brand-roseSoft via-white to-brand-amethystSoft">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Soft gradient orbs */}
        <div className="absolute top-20 -left-20 w-96 h-96 bg-brand-amethyst/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 -right-20 w-96 h-96 bg-primary-300/20 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-champagne/10 rounded-full blur-3xl"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center">
          <AnimateIn delay={0.1}>
            <motion.div
              className="inline-block mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 backdrop-blur-sm border border-brand-amethyst/20 text-brand-amethyst text-sm font-medium shadow-sm">
                <span className="w-2 h-2 rounded-full bg-brand-amethyst animate-pulse"></span>
                {hero.badge}
              </span>
            </motion.div>
          </AnimateIn>

          <AnimateIn delay={0.2}>
            <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-gray-900 mb-6 leading-[1.1] px-4">
              {hero.headline.split(' ').slice(0, 3).join(' ')}
              <br />
              <span className="bg-gradient-to-r from-brand-amethyst to-primary-600 bg-clip-text text-transparent">
                {hero.headline.split(' ').slice(3).join(' ')}
              </span>
            </h1>
          </AnimateIn>

          <AnimateIn delay={0.3}>
            <p className="text-xl sm:text-2xl text-gray-600 mb-4 max-w-3xl mx-auto leading-relaxed">
              {hero.subline}
            </p>
            <p className="text-base sm:text-lg text-gray-500 mb-12 max-w-2xl mx-auto">
              {hero.description}
            </p>
          </AnimateIn>

          <AnimateIn delay={0.5}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
              <a
                href={hero.ctas.primary.href}
                className="group px-8 py-4 bg-brand-amethyst text-white rounded-full font-medium hover:bg-brand-amethyst/90 transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5 duration-200 flex items-center gap-2"
              >
                {hero.ctas.primary.label}
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
              <button
                className="group px-8 py-4 bg-white text-gray-900 border-2 border-gray-200 rounded-full font-medium hover:border-brand-amethyst/30 hover:bg-brand-amethystSoft/20 transition-all flex items-center gap-2"
              >
                <div className="w-8 h-8 rounded-full bg-brand-amethyst/10 flex items-center justify-center group-hover:bg-brand-amethyst/20 transition-colors">
                  <Play className="w-4 h-4 text-brand-amethyst fill-current" />
                </div>
                {hero.ctas.secondary.label}
              </button>
            </div>
          </AnimateIn>

          {/* Social proof */}
          <AnimateIn delay={0.7}>
            <div className="flex flex-wrap justify-center gap-8 text-center mb-16">
              {hero.stats.map((stat, index) => (
                <>
                  {index > 0 && <div className="hidden sm:block w-px h-12 bg-gray-200"></div>}
                  <div key={stat.label}>
                    <div className="text-3xl font-bold text-brand-amethyst mb-1">{stat.value}</div>
                    <div className="text-sm text-gray-600">{stat.label}</div>
                  </div>
                </>
              ))}
            </div>
          </AnimateIn>

          {/* Scroll indicator */}
          <AnimateIn delay={0.9}>
            <motion.div
              className="inline-flex flex-col items-center gap-2 text-gray-400 cursor-pointer"
              animate={shouldReduceMotion ? {} : {
                y: [0, 8, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <span className="text-xs font-medium tracking-wider uppercase">Explore</span>
              <ChevronDown className="w-5 h-5" />
            </motion.div>
          </AnimateIn>
        </div>
      </div>
    </section>
  );
}
