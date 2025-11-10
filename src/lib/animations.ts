/**
 * Framer Motion Animation Variants
 * Cinematic pricing section animations for Love, Violeta Rose
 */

import { Variants } from "framer-motion";

/**
 * Card entrance animation
 * Staggered reveal with subtle scale and fade
 */
export const cardEntrance: Variants = {
  hidden: {
    opacity: 0,
    y: 28,
    scale: 0.98
  },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      delay: i * 0.05,
      duration: 0.45,
      ease: [0.22, 1, 0.36, 1] // Custom easing for smooth acceleration
    }
  })
};

/**
 * Glow effect animation
 * Activates on hover and for the ideal package
 */
export const glowIdle: Variants = {
  off: {
    boxShadow: '0 0 0 0 rgba(0,0,0,0)'
  },
  on: {
    boxShadow: '0 10px 40px rgba(127, 110, 226, 0.28)'
  }
};

/**
 * Pulse ring animation
 * Outer ring that expands on hover for ultimate package
 */
export const pulseRing: Variants = {
  rest: {
    opacity: 0,
    scale: 0.95
  },
  hover: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1]
    }
  }
};

/**
 * Champagne shimmer effect
 * Sweeping light effect for ultimate package
 */
export const champagneShimmer: Variants = {
  rest: {
    background: 'linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(244,230,197,0) 50%, rgba(255,255,255,0) 100%)',
    x: '-100%',
  },
  hover: {
    background: 'linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(244,230,197,0.4) 50%, rgba(255,255,255,0) 100%)',
    x: '100%',
    transition: {
      duration: 1.2,
      ease: "easeInOut",
      repeat: Infinity,
      repeatDelay: 0.5
    }
  }
};

/**
 * Badge float animation
 * Subtle floating effect for the "Recommended" badge
 */
export const badgeFloat: Variants = {
  rest: {
    y: 0,
  },
  float: {
    y: [-2, 2, -2],
    transition: {
      duration: 3,
      ease: "easeInOut",
      repeat: Infinity,
    }
  }
};

/**
 * Gradient flow animation
 * Background gradient shift for cards approaching ideal
 */
export const gradientFlow = (rank: number, activeRank: number): string => {
  // Cards one rank below activeRank get a subtle gradient hint
  if (rank === activeRank - 1) {
    return 'linear-gradient(to right, rgba(127, 110, 226, 0.03) 0%, transparent 50%)';
  }
  return 'transparent';
};

/**
 * Price counter animation
 * Smooth number animation for price reveals
 */
export const priceReveal: Variants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: [0.22, 1, 0.36, 1]
    }
  }
};
