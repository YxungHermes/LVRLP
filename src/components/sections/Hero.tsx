"use client";

import { AnimateIn } from "@/components/AnimateIn";
import { motion, useReducedMotion } from "framer-motion";

export default function Hero() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-pink-50 via-white to-white">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-1/2 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
        <AnimateIn delay={0.1}>
          <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-gray-900 mb-6">
            Love, Violeta Rose
          </h1>
        </AnimateIn>

        <AnimateIn delay={0.3}>
          <p className="text-xl sm:text-2xl md:text-3xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Capturing your most precious moments with artistry and elegance
          </p>
        </AnimateIn>

        <AnimateIn delay={0.5}>
          <p className="text-lg text-gray-500 mb-12 max-w-2xl mx-auto">
            Cinematic wedding films that tell your unique love story through timeless, romantic storytelling
          </p>
        </AnimateIn>

        <AnimateIn delay={0.7}>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="#packages"
              className="px-8 py-4 bg-primary-600 text-white rounded-full font-medium hover:bg-primary-700 transition-colors shadow-lg hover:shadow-xl"
            >
              View Packages
            </a>
            <a
              href="#contact"
              className="px-8 py-4 bg-white text-primary-600 border-2 border-primary-600 rounded-full font-medium hover:bg-primary-50 transition-colors"
            >
              Get in Touch
            </a>
          </div>
        </AnimateIn>

        <AnimateIn delay={0.9}>
          <div className="mt-16 text-gray-400">
            <motion.svg
              className="w-6 h-6 mx-auto"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
              animate={shouldReduceMotion ? {} : {
                y: [0, 10, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
            </motion.svg>
          </div>
        </AnimateIn>
      </div>

      <style jsx>{`
        @keyframes blob {
          0% {
            transform: translate(0px, 0px) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
          100% {
            transform: translate(0px, 0px) scale(1);
          }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </section>
  );
}
