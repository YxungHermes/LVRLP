"use client";

import { motion, useReducedMotion } from "framer-motion";
import { cardEntrance, pulseRing, champagneShimmer, badgeFloat } from "@/lib/animations";
import clsx from "clsx";

interface Package {
  id: string;
  name: string;
  tagline: string;
  description: string;
  price: number;
  duration: string;
  rank: number;
  isIdeal: boolean;
  isUltimate: boolean;
  features: string[];
  highlights: string[];
}

interface PackageCardProps {
  pkg: Package;
  index: number;
  activeRank: number;
  onHoverStart: () => void;
  onHoverEnd: () => void;
}

export function PackageCard({
  pkg,
  index,
  activeRank,
  onHoverStart,
  onHoverEnd,
}: PackageCardProps) {
  const shouldReduceMotion = useReducedMotion();
  const isActive = pkg.rank === activeRank;
  const isApproaching = pkg.rank === activeRank - 1;

  // Determine glow intensity based on state
  const getGlowStyle = () => {
    if (pkg.isIdeal && !shouldReduceMotion) {
      // Ideal package always has amethyst glow
      return {
        boxShadow: isActive || !activeRank
          ? '0 10px 40px rgba(127, 110, 226, 0.28), 0 0 0 1px rgba(127, 110, 226, 0.1) inset'
          : '0 8px 30px rgba(127, 110, 226, 0.18)'
      };
    }
    if (pkg.isUltimate && isActive && !shouldReduceMotion) {
      // Ultimate package gets champagne glow on hover
      return {
        boxShadow: '0 18px 80px rgba(127, 110, 226, 0.35), 0 0 0 2px rgba(244, 230, 197, 0.8) inset'
      };
    }
    return {};
  };

  // Background gradient for ideal and approaching cards
  const getBackgroundStyle = () => {
    if (pkg.isIdeal) {
      return 'radial-gradient(100% 120% at 20% 0%, #ECE9FF 0%, white 60%)';
    }
    if (isApproaching && !shouldReduceMotion) {
      return 'linear-gradient(to right, rgba(127, 110, 226, 0.03) 0%, transparent 50%)';
    }
    return 'white';
  };

  return (
    <motion.div
      custom={index}
      variants={shouldReduceMotion ? {} : cardEntrance}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-50px" }}
      onHoverStart={onHoverStart}
      onFocus={onHoverStart}
      onHoverEnd={onHoverEnd}
      onBlur={onHoverEnd}
      tabIndex={0}
      role="article"
      aria-current={pkg.isIdeal ? "true" : undefined}
      className={clsx(
        "relative rounded-2xl border p-8 transition-all duration-300 ease-out",
        "focus:outline-none focus:ring-2 focus:ring-brand-amethyst focus:ring-offset-2",
        "cursor-pointer group",
        pkg.isIdeal && "border-[1.5px] border-brand-amethyst/30 shadow-lg",
        !pkg.isIdeal && "border-gray-200 shadow-sm hover:shadow-md",
        pkg.isUltimate && "hover:scale-[1.02]",
        !pkg.isUltimate && "hover:-translate-y-0.5"
      )}
      style={{
        ...getGlowStyle(),
        background: getBackgroundStyle(),
      }}
    >
      {/* Pulse ring for ultimate package */}
      {pkg.isUltimate && !shouldReduceMotion && (
        <motion.div
          variants={pulseRing}
          initial="rest"
          whileHover="hover"
          className="absolute inset-0 rounded-2xl"
          style={{
            border: '2px solid rgba(244, 230, 197, 0.5)',
            pointerEvents: 'none',
          }}
        />
      )}

      {/* Champagne shimmer effect for ultimate package */}
      {pkg.isUltimate && !shouldReduceMotion && (
        <motion.div
          variants={champagneShimmer}
          initial="rest"
          whileHover="hover"
          className="absolute inset-0 rounded-2xl overflow-hidden pointer-events-none"
          style={{
            background: 'linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(244,230,197,0.4) 50%, rgba(255,255,255,0) 100%)',
          }}
        />
      )}

      {/* Recommended badge */}
      {pkg.isIdeal && (
        <motion.span
          variants={shouldReduceMotion ? {} : badgeFloat}
          initial="rest"
          animate="float"
          className="absolute -top-3 left-6 rounded-full px-4 py-1.5 text-xs font-medium shadow-md"
          style={{
            background: '#7F6EE2',
            color: 'white',
          }}
        >
          Recommended
        </motion.span>
      )}

      {/* Package name and tagline */}
      <div className="mb-6">
        <h3 className="font-serif text-2xl md:text-3xl font-bold text-gray-900 mb-2 leading-tight">
          {pkg.name}
        </h3>
        <p className={clsx(
          "font-medium mb-3 text-sm",
          pkg.isIdeal ? "text-brand-amethyst" : "text-primary-600"
        )}>
          {pkg.tagline}
        </p>
        <p className="text-gray-600 text-sm leading-relaxed">
          {pkg.description}
        </p>
      </div>

      {/* Price */}
      <div className="mb-6 pb-6 border-b border-gray-200">
        <div className="flex items-baseline gap-1">
          <span className="text-5xl md:text-6xl font-bold text-gray-900">
            ${pkg.price.toLocaleString()}
          </span>
        </div>
        <p className="text-gray-500 text-sm mt-2">
          {pkg.duration} of coverage
        </p>
      </div>

      {/* Features */}
      <ul className="space-y-3 mb-6">
        {pkg.features.map((feature, idx) => (
          <li key={idx} className="flex items-start gap-3 text-sm">
            <svg
              className={clsx(
                "w-5 h-5 flex-shrink-0 mt-0.5",
                pkg.isIdeal ? "text-brand-amethyst" : "text-primary-600"
              )}
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clipRule="evenodd"
              />
            </svg>
            <span className="text-gray-700 leading-relaxed">{feature}</span>
          </li>
        ))}
      </ul>

      {/* Highlights (for ideal and ultimate packages) */}
      {(pkg.isIdeal || pkg.isUltimate) && pkg.highlights.length > 0 && (
        <div className="mt-6 pt-6 border-t border-gray-200">
          <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-3">
            Why This Package
          </p>
          <ul className="space-y-2">
            {pkg.highlights.slice(0, 3).map((highlight, idx) => (
              <li key={idx} className="text-sm text-gray-600 flex items-start gap-2">
                <span className={clsx(
                  "w-1.5 h-1.5 rounded-full flex-shrink-0 mt-1.5",
                  pkg.isIdeal ? "bg-brand-amethyst" : "bg-brand-champagne"
                )} />
                {highlight}
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* CTA Button */}
      <a
        href="#contact"
        className={clsx(
          "block text-center py-3.5 px-6 rounded-full font-medium transition-all mt-8",
          pkg.isIdeal && "bg-brand-amethyst text-white hover:bg-brand-amethyst/90 shadow-md hover:shadow-lg",
          pkg.isUltimate && !pkg.isIdeal && "bg-gray-900 text-white hover:bg-gray-800 shadow-md hover:shadow-lg",
          !pkg.isIdeal && !pkg.isUltimate && "bg-gray-100 text-gray-900 hover:bg-gray-200"
        )}
      >
        Book This Package
      </a>
    </motion.div>
  );
}
