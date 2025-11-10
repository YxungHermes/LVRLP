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
  deliverables: readonly string[];
  turnaround: string;
  notes: readonly string[];
}

interface PackageCardProps {
  pkg: Package;
  allPackages: readonly Package[];
  index: number;
  activeRank: number;
  onHoverStart: () => void;
  onHoverEnd: () => void;
}

export function PackageCard({
  pkg,
  allPackages,
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
      return {
        boxShadow: isActive || !activeRank
          ? '0 10px 40px rgba(181, 139, 131, 0.3), 0 0 0 1.5px rgba(199, 157, 138, 0.2) inset'
          : '0 8px 30px rgba(181, 139, 131, 0.22), 0 0 0 1.5px rgba(199, 157, 138, 0.15) inset'
      };
    }
    if (pkg.isUltimate && isActive && !shouldReduceMotion) {
      return {
        boxShadow: '0 18px 80px rgba(181, 139, 131, 0.38), 0 0 0 2px rgba(228, 193, 176, 0.6) inset'
      };
    }
    return {};
  };

  // Background gradient for ideal card - watercolor wash
  const getBackgroundStyle = () => {
    if (pkg.isIdeal) {
      return 'radial-gradient(circle at 40% 40%, rgba(228, 193, 176, 0.25) 0%, rgba(250, 246, 240, 1) 60%), radial-gradient(circle at 70% 70%, rgba(199, 157, 138, 0.15) 0%, transparent 50%)';
    }
    return '#FAF6F0';
  };

  return (
    <>
      <motion.article
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
          "relative rounded-2xl border transition-all duration-300 ease-out group",
          "grid grid-rows-[auto_auto_auto_auto_var(--price-height)_auto] gap-3 p-6 md:p-8",
          pkg.isIdeal && "border-[2px] border-watercolor-rose-400/50 shadow-lg",
          !pkg.isIdeal && "border-watercolor-coffee/15 shadow-sm hover:shadow-md"
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
              border: '2px solid rgba(228, 193, 176, 0.5)',
              pointerEvents: 'none',
            }}
          />
        )}

        {/* Rose shimmer effect for ultimate package */}
        {pkg.isUltimate && !shouldReduceMotion && (
          <motion.div
            variants={champagneShimmer}
            initial="rest"
            whileHover="hover"
            className="absolute inset-0 rounded-2xl overflow-hidden pointer-events-none"
            style={{
              background: 'linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(228, 193, 176, 0.4) 50%, rgba(255,255,255,0) 100%)',
            }}
          />
        )}

        {/* Most Booked badge - rose gradient */}
        {pkg.isIdeal && (
          <motion.span
            className="absolute -top-3 left-6 rounded-full px-4 py-1.5 text-xs font-bold z-10 flex items-center gap-1.5"
            style={{
              background: 'linear-gradient(135deg, #B58B83 0%, #8B5C58 100%)',
              color: 'white',
              boxShadow: '0 4px 12px rgba(181, 139, 131, 0.4)',
            }}
            initial={shouldReduceMotion ? {} : { scale: 1 }}
            animate={shouldReduceMotion ? {} : {
              scale: [1, 1.05, 1],
              boxShadow: [
                '0 4px 12px rgba(181, 139, 131, 0.4)',
                '0 6px 20px rgba(181, 139, 131, 0.6)',
                '0 4px 12px rgba(181, 139, 131, 0.4)'
              ]
            }}
            transition={{
              duration: 2,
              times: [0, 0.5, 1],
              ease: "easeInOut",
            }}
          >
            <Star className="w-3.5 h-3.5 fill-current" />
            Most Booked
          </motion.span>
        )}

        {/* Row 1: Package name */}
        <h3 className="font-serif text-xl md:text-2xl font-bold text-watercolor-espresso leading-tight">
          {pkg.name}
        </h3>

        {/* Row 2: Tagline */}
        <p className={clsx(
          "font-medium text-sm italic",
          pkg.isIdeal ? "text-brand-amethyst" : "text-primary-600"
        )}>
          {pkg.tagline}
        </p>

        {/* Row 3: Summary (single sentence) */}
        <p className="text-gray-600 text-sm leading-relaxed">
          {pkg.summary}
        </p>

        {/* Row 4: IDEAL FOR */}
        <p className="text-xs text-gray-700 leading-relaxed">
          <span className="font-bold text-gray-900 tracking-wide">IDEAL FOR:</span>{" "}
          {pkg.idealFor}
        </p>

        {/* Row 5: Price block (fixed height via CSS variable) */}
        <div className="flex items-center">
          <div className="flex items-baseline gap-1">
            <span
              className="text-xl md:text-2xl font-medium text-gray-500 self-end"
              style={{ paddingBottom: '0.25rem' }}
            >
              $
            </span>
            <span
              className="text-5xl md:text-6xl font-serif text-gray-900 tabular-nums"
              style={{
                fontWeight: 600,
                letterSpacing: '-0.03em',
              }}
            >
              {pkg.price.toLocaleString('en-US')}
            </span>
          </div>
        </div>

        {/* Row 6: CTA button */}
        <button
          ref={triggerRef}
          onClick={() => setModalOpen(true)}
          className={clsx(
            "w-full py-3.5 px-6 rounded-full font-medium transition-all",
            "focus:outline-none focus:ring-2 focus:ring-offset-2",
            pkg.isIdeal && "bg-brand-amethyst text-white hover:bg-brand-amethyst/90 focus:ring-brand-amethyst shadow-md hover:shadow-lg",
            !pkg.isIdeal && "bg-gray-900 text-white hover:bg-gray-800 focus:ring-gray-600 shadow-sm hover:shadow-md"
          )}
          aria-haspopup="dialog"
        >
          <span className="text-sm font-medium">See everything included</span>
        </button>
      </motion.article>

      {/* Modal */}
      <PackageModal
        pkg={pkg}
        allPackages={allPackages}
        open={modalOpen}
        onOpenChange={setModalOpen}
        triggerRef={triggerRef}
      />
    </>
  );
}
