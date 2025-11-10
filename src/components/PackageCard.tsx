"use client";

import { motion, useReducedMotion } from "framer-motion";
import * as Accordion from "@radix-ui/react-accordion";
import { cardEntrance, pulseRing, champagneShimmer } from "@/lib/animations";
import clsx from "clsx";
import { ChevronDown } from "lucide-react";

interface Package {
  id: string;
  name: string;
  tagline: string;
  summary: string;
  idealFor: string;
  price: number;
  duration: string;
  rank: number;
  isIdeal: boolean;
  isUltimate: boolean;
  coverage: string;
  deliverables: string[];
  turnaround: string;
  notes: string[];
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
      return {
        boxShadow: isActive || !activeRank
          ? '0 10px 40px rgba(127, 110, 226, 0.28), 0 0 0 1px rgba(127, 110, 226, 0.1) inset'
          : '0 8px 30px rgba(127, 110, 226, 0.18)'
      };
    }
    if (pkg.isUltimate && isActive && !shouldReduceMotion) {
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
      className={clsx(
        "relative rounded-2xl border transition-all duration-300 ease-out group h-full flex flex-col",
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

      <Accordion.Root type="single" collapsible className="flex flex-col h-full">
        <Accordion.Item value="details" className="flex flex-col h-full">
          {/* Always visible content */}
          <div className="p-8 pb-4 flex-grow flex flex-col">
            {/* Recommended badge */}
            {pkg.isIdeal && (
              <span
                className="absolute -top-3 left-6 rounded-full px-4 py-1.5 text-xs font-medium shadow-md z-10"
                style={{
                  background: '#7F6EE2',
                  color: 'white',
                }}
              >
                Recommended
              </span>
            )}

            {/* Package name and tagline */}
            <div className="mb-4">
              <h3 className="font-serif text-2xl md:text-3xl font-bold text-gray-900 mb-2 leading-tight">
                {pkg.name}
              </h3>
              <p className={clsx(
                "font-medium mb-3 text-sm",
                pkg.isIdeal ? "text-brand-amethyst" : "text-primary-600"
              )}>
                {pkg.tagline}
              </p>
              <p className="text-gray-600 text-sm leading-relaxed mb-4">
                {pkg.summary}
              </p>
            </div>

            {/* Ideal for */}
            <div className="mb-4 pb-4 border-b border-gray-200">
              <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2">
                Ideal For
              </p>
              <p className="text-sm text-gray-700">{pkg.idealFor}</p>
            </div>

            {/* Price */}
            <div className="mb-6">
              <div className="flex items-baseline gap-1">
                <span className="text-5xl md:text-6xl font-bold text-gray-900">
                  ${pkg.price.toLocaleString()}
                </span>
              </div>
              <p className="text-gray-500 text-sm mt-2">
                {pkg.duration} of coverage
              </p>
            </div>

            {/* Trigger */}
            <Accordion.Trigger
              className={clsx(
                "flex items-center justify-center gap-2 w-full py-3 px-6 rounded-full font-medium transition-all group/trigger",
                "focus:outline-none focus:ring-2 focus:ring-offset-2",
                pkg.isIdeal && "bg-brand-amethyst/10 text-brand-amethyst hover:bg-brand-amethyst/20 focus:ring-brand-amethyst",
                !pkg.isIdeal && "bg-gray-100 text-gray-700 hover:bg-gray-200 focus:ring-gray-400"
              )}
            >
              <span className="text-sm">See everything included</span>
              <ChevronDown className="w-4 h-4 transition-transform duration-300 group-data-[state=open]/trigger:rotate-180" />
            </Accordion.Trigger>
          </div>

          {/* Accordion content - reveals on click */}
          <Accordion.Content
            className={clsx(
              "overflow-hidden",
              "data-[state=open]:animate-accordion-down",
              "data-[state=closed]:animate-accordion-up"
            )}
          >
            <motion.div
              initial={shouldReduceMotion ? {} : { opacity: 0 }}
              animate={shouldReduceMotion ? {} : { opacity: 1 }}
              transition={{ duration: 0.3, delay: 0.1 }}
              className="px-8 pb-8 pt-4 border-t border-gray-200"
            >
              {/* Coverage */}
              <div className="mb-6">
                <h4 className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-3">
                  Coverage
                </h4>
                <p className="text-sm text-gray-700 leading-relaxed">{pkg.coverage}</p>
              </div>

              {/* Deliverables */}
              <div className="mb-6">
                <h4 className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-3">
                  What You'll Receive
                </h4>
                <ul className="space-y-2">
                  {pkg.deliverables.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-sm">
                      <svg
                        className={clsx(
                          "w-4 h-4 flex-shrink-0 mt-0.5",
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
                      <span className="text-gray-700 leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Turnaround */}
              <div className="mb-6">
                <h4 className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2">
                  Delivery Timeline
                </h4>
                <p className="text-sm text-gray-700">{pkg.turnaround}</p>
              </div>

              {/* Notes */}
              {pkg.notes.length > 0 && (
                <div className="mb-6">
                  <h4 className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-3">
                    Good to Know
                  </h4>
                  <ul className="space-y-2">
                    {pkg.notes.map((note, idx) => (
                      <li key={idx} className="text-sm text-gray-600 flex items-start gap-2">
                        <span className={clsx(
                          "w-1.5 h-1.5 rounded-full flex-shrink-0 mt-1.5",
                          pkg.isIdeal ? "bg-brand-amethyst" : pkg.isUltimate ? "bg-brand-champagne" : "bg-gray-400"
                        )} />
                        {note}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* CTA Button */}
              <a
                href="#contact"
                className={clsx(
                  "block text-center py-3.5 px-6 rounded-full font-medium transition-all",
                  pkg.isIdeal && "bg-brand-amethyst text-white hover:bg-brand-amethyst/90 shadow-md hover:shadow-lg",
                  pkg.isUltimate && !pkg.isIdeal && "bg-gray-900 text-white hover:bg-gray-800 shadow-md hover:shadow-lg",
                  !pkg.isIdeal && !pkg.isUltimate && "bg-gray-900 text-white hover:bg-gray-800"
                )}
              >
                Book This Package
              </a>
            </motion.div>
          </Accordion.Content>
        </Accordion.Item>
      </Accordion.Root>
    </motion.div>
  );
}
