"use client";

import { motion, useReducedMotion } from "framer-motion";
import { cardEntrance, pulseRing, champagneShimmer } from "@/lib/animations";
import clsx from "clsx";
import { Star } from "lucide-react";
import { useState, useRef } from "react";
import { PackageModal } from "./PackageModal";

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
  const [modalOpen, setModalOpen] = useState(false);
  const triggerRef = useRef<HTMLButtonElement>(null);

  // Determine glow intensity based on state
  const getGlowStyle = () => {
    if (pkg.isIdeal && !shouldReduceMotion) {
      // Ideal package: persistent glow even when other cards are active
      return {
        boxShadow: isActive || !activeRank
          ? '0 10px 40px rgba(127, 110, 226, 0.28), 0 0 0 1.5px rgba(127, 110, 226, 0.15) inset'
          : '0 8px 30px rgba(127, 110, 226, 0.20), 0 0 0 1.5px rgba(127, 110, 226, 0.12) inset'
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
    <>
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
        whileHover={shouldReduceMotion ? {} : { y: -4 }}
        transition={{ duration: 0.2, ease: "easeOut" }}
        className={clsx(
          "relative rounded-2xl border transition-all duration-300 ease-out group h-full flex flex-col",
          pkg.isIdeal && "border-[2px] border-brand-amethyst/40 shadow-lg",
          !pkg.isIdeal && "border-gray-200 shadow-sm hover:shadow-md"
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

        {/* Card content */}
        <div className="p-6 md:p-8 flex-grow flex flex-col">
          {/* Recommended badge with star icon */}
          {pkg.isIdeal && (
            <span
              className="absolute -top-3 left-6 rounded-full px-4 py-1.5 text-xs font-bold shadow-lg z-10 flex items-center gap-1.5"
              style={{
                background: '#7F6EE2',
                color: 'white',
              }}
            >
              <Star className="w-3.5 h-3.5 fill-current" />
              Most Booked
            </span>
          )}

          {/* Package name and tagline */}
          <div className="mb-4">
            <h3 className="font-serif text-xl md:text-2xl font-bold text-gray-900 mb-2 leading-tight">
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

          {/* Ideal for - with bold label */}
          <div className="mb-6 pb-6 border-b border-gray-200">
            <p className="text-xs text-gray-700 leading-relaxed">
              <span className="font-bold text-gray-900">IDEAL FOR:</span>{" "}
              {pkg.idealFor}
            </p>
          </div>

          {/* Premium Price Typography */}
          <div className="mb-6">
            <div className="flex items-baseline gap-1 mb-2">
              {/* Small baseline-aligned dollar sign */}
              <span className="text-2xl md:text-3xl font-medium text-gray-600" style={{ lineHeight: 1 }}>
                $
              </span>
              {/* Large tabular numerals with tight tracking */}
              <span
                className="text-5xl md:text-6xl font-serif font-semibold text-gray-900"
                style={{
                  fontVariantNumeric: 'lining-nums tabular-nums',
                  letterSpacing: '-0.02em',
                  lineHeight: 1
                }}
              >
                {pkg.price.toLocaleString('en-US')}
              </span>
            </div>
            <p className="text-gray-500 text-sm">
              {pkg.duration} of coverage
            </p>
          </div>

          {/* Modal Trigger Button */}
          <button
            ref={triggerRef}
            onClick={() => setModalOpen(true)}
            className={clsx(
              "flex items-center justify-center gap-2 w-full py-3.5 px-6 rounded-full font-medium transition-all",
              "focus:outline-none focus:ring-2 focus:ring-offset-2",
              pkg.isIdeal && "bg-brand-amethyst text-white hover:bg-brand-amethyst/90 focus:ring-brand-amethyst shadow-md hover:shadow-lg",
              !pkg.isIdeal && "bg-gray-900 text-white hover:bg-gray-800 focus:ring-gray-600 shadow-sm hover:shadow-md"
            )}
          >
            <span className="text-sm font-medium">See everything included</span>
          </button>
        </div>
      </motion.div>

      {/* Modal */}
      <PackageModal
        pkg={pkg}
        open={modalOpen}
        onOpenChange={setModalOpen}
        triggerRef={triggerRef}
      />
    </>
  );
}
