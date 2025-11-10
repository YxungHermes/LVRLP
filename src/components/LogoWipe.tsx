'use client';

import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';

interface LogoWipeProps {
  active: boolean;
}

export default function LogoWipe({ active }: LogoWipeProps) {
  const shouldReduceMotion = useReducedMotion();

  // If user prefers reduced motion, don't show the transition
  if (shouldReduceMotion) {
    return null;
  }

  return (
    <AnimatePresence mode="wait">
      {active && (
        <motion.div
          key="logo-wipe"
          initial={{ x: '100%' }}
          animate={{ x: 0 }}
          exit={{ x: '-100%' }}
          transition={{
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1], // Smooth easing curve
          }}
          className="fixed inset-0 z-[9999] bg-rose-gradient pointer-events-none"
          style={{
            background: 'linear-gradient(135deg, #B58B83 0%, #8B5C58 100%)',
          }}
        >
          {/* Paper grain texture overlay */}
          <div
            className="absolute inset-0 opacity-15 mix-blend-multiply pointer-events-none"
            style={{
              backgroundImage: 'var(--paper-grain)',
              backgroundRepeat: 'repeat',
            }}
          />

          {/* Centered masked logo */}
          <div className="absolute inset-0 flex items-center justify-center">
            <motion.div
              className="relative w-[60vw] max-w-[720px]"
              style={{ aspectRatio: '3 / 1' }}
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 1.1, opacity: 0 }}
              transition={{
                delay: 0.15,
                duration: 0.5,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              {/* Logo reveal using CSS mask */}
              <div
                className="absolute inset-0"
                style={{
                  backgroundColor: '#FAF6F0', // Cream color
                  WebkitMaskImage: 'url(/brand/lvr-logo-mask.svg)',
                  maskImage: 'url(/brand/lvr-logo-mask.svg)',
                  WebkitMaskRepeat: 'no-repeat',
                  maskRepeat: 'no-repeat',
                  WebkitMaskPosition: 'center',
                  maskPosition: 'center',
                  WebkitMaskSize: 'contain',
                  maskSize: 'contain',
                }}
              />
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
