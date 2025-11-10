"use client";

import { AnimateIn } from "@/components/AnimateIn";
import { motion, useReducedMotion } from "framer-motion";
import { Play, ChevronDown } from "lucide-react";
import { site } from "@/content/site";

export default function Hero() {
  const shouldReduceMotion = useReducedMotion();
  const { hero } = site;

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-watercolor-cream">
      {/* Video Background */}
      <div className="absolute inset-0 overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover opacity-30 mix-blend-multiply"
          poster={hero.media.posterUrl}
        >
          <source src="https://www.dropbox.com/scl/fi/bqwj8361l710dzee6rmir/Love-Violeta-Rose-Loopt-H264.mov?rlkey=nd5271m0vximyafz1clheosnn&st=vfmymnin&raw=1" type="video/mp4" />
        </video>
      </div>

      {/* Watercolor wash overlay */}
      <div className="absolute inset-0 watercolor-wash-light pointer-events-none"></div>

      {/* Coffee stain accents */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 -left-20 w-96 h-96 bg-watercolor-rose-100/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 -right-20 w-96 h-96 bg-watercolor-rose-400/15 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-watercolor-paper/30 rounded-full blur-3xl"></div>
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
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-watercolor-cream/90 backdrop-blur-sm border border-watercolor-rose-500/30 text-watercolor-rose-600 text-sm font-medium shadow-sm">
                <span className="w-2 h-2 rounded-full bg-watercolor-rose-500 animate-pulse"></span>
                {hero.badge}
              </span>
            </motion.div>
          </AnimateIn>

          <AnimateIn delay={0.2}>
            <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-watercolor-espresso mb-6 leading-[1.1] px-4">
              {hero.headline.split(' ').slice(0, 3).join(' ')}
              <br />
              <span className="text-rose-gradient">
                {hero.headline.split(' ').slice(3).join(' ')}
              </span>
            </h1>
          </AnimateIn>

          <AnimateIn delay={0.3}>
            <p className="text-xl sm:text-2xl text-watercolor-coffee mb-4 max-w-3xl mx-auto leading-readable">
              {hero.subline}
            </p>
            <p className="text-base sm:text-lg text-watercolor-graphite mb-12 max-w-2xl mx-auto leading-readable">
              {hero.description}
            </p>
          </AnimateIn>

          <AnimateIn delay={0.5}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
              <a
                href={hero.ctas.primary.href}
                className="group px-8 py-4 bg-rose-gradient text-white rounded-full font-medium hover:shadow-2xl hover:-translate-y-0.5 transition-all duration-300 flex items-center gap-2 shadow-lg"
              >
                {hero.ctas.primary.label}
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
              <button
                className="group px-8 py-4 bg-watercolor-cream text-watercolor-espresso border-2 border-watercolor-rose-200 rounded-full font-medium hover:border-watercolor-rose-400 hover:bg-watercolor-rose-50 transition-all flex items-center gap-2"
              >
                <div className="w-8 h-8 rounded-full bg-watercolor-rose-100 flex items-center justify-center group-hover:bg-watercolor-rose-200 transition-colors">
                  <Play className="w-4 h-4 text-watercolor-rose-600 fill-current" />
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
                  {index > 0 && <div className="hidden sm:block w-px h-12 bg-watercolor-coffee/20"></div>}
                  <div key={stat.label}>
                    <div className="text-3xl font-bold text-watercolor-rose-600 mb-1">{stat.value}</div>
                    <div className="text-sm text-watercolor-coffee">{stat.label}</div>
                  </div>
                </>
              ))}
            </div>
          </AnimateIn>

          {/* Scroll indicator */}
          <AnimateIn delay={0.9}>
            <motion.div
              className="inline-flex flex-col items-center gap-2 text-watercolor-graphite/60 cursor-pointer hover:text-watercolor-rose-500 transition-colors"
              animate={shouldReduceMotion ? {} : {
                y: [0, 8, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <span className="text-xs font-medium tracking-airy uppercase">Explore</span>
              <ChevronDown className="w-5 h-5" />
            </motion.div>
          </AnimateIn>
        </div>
      </div>
    </section>
  );
}
