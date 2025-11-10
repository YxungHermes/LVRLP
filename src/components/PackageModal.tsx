"use client";

import { motion, useReducedMotion } from "framer-motion";
import * as Dialog from "@radix-ui/react-dialog";
import { X } from "lucide-react";

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

interface PackageModalProps {
  pkg: Package;
  open: boolean;
  onOpenChange: (open: boolean) => void;
  triggerRef?: React.RefObject<HTMLButtonElement>;
}

export function PackageModal({ pkg, open, onOpenChange, triggerRef }: PackageModalProps) {
  const shouldReduceMotion = useReducedMotion();

  const overlayVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  const contentVariants = {
    hidden: shouldReduceMotion
      ? { opacity: 0 }
      : { opacity: 0, y: 20, scale: 0.95 },
    visible: shouldReduceMotion
      ? { opacity: 1 }
      : { opacity: 1, y: 0, scale: 1 },
  };

  const mobileSheetVariants = {
    hidden: shouldReduceMotion
      ? { opacity: 0 }
      : { opacity: 0, y: "100%" },
    visible: shouldReduceMotion
      ? { opacity: 1 }
      : { opacity: 1, y: 0 },
  };

  return (
    <Dialog.Root open={open} onOpenChange={onOpenChange}>
      <Dialog.Portal>
        {/* Backdrop */}
        <Dialog.Overlay asChild>
          <motion.div
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
            variants={overlayVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            transition={{ duration: 0.2 }}
          />
        </Dialog.Overlay>

        {/* Modal Content */}
        <Dialog.Content asChild>
          {/* Desktop: Centered Modal, Mobile: Bottom Sheet */}
          <motion.div
            className="fixed z-50 w-full
              /* Mobile: Bottom sheet */
              bottom-0 left-0 right-0 md:bottom-auto
              /* Desktop: Centered modal */
              md:top-1/2 md:left-1/2 md:-translate-x-1/2 md:-translate-y-1/2
              md:max-w-3xl md:w-full
              bg-white rounded-t-3xl md:rounded-2xl shadow-2xl
              max-h-[90vh] overflow-hidden
              focus:outline-none focus:ring-2 focus:ring-primary-600 focus:ring-offset-2"
            variants={window.innerWidth < 768 ? mobileSheetVariants : contentVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            transition={{ duration: shouldReduceMotion ? 0 : 0.3, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* Header */}
            <div className="sticky top-0 bg-white border-b border-gray-200 px-6 py-4 md:px-8 md:py-6 flex items-start justify-between z-10">
              <div className="flex-1 pr-8">
                <Dialog.Title className="font-serif text-2xl md:text-3xl font-bold text-gray-900 mb-1">
                  {pkg.name}
                </Dialog.Title>
                <p className="text-sm md:text-base text-gray-600 italic">{pkg.tagline}</p>
              </div>
              <Dialog.Close asChild>
                <button
                  className="flex-shrink-0 w-10 h-10 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors focus:outline-none focus:ring-2 focus:ring-primary-600 focus:ring-offset-2"
                  aria-label="Close"
                  onClick={() => {
                    // Return focus to trigger button when closing
                    setTimeout(() => {
                      triggerRef?.current?.focus();
                    }, 100);
                  }}
                >
                  <X className="w-5 h-5 text-gray-600" />
                </button>
              </Dialog.Close>
            </div>

            {/* Scrollable Content */}
            <div className="overflow-y-auto px-6 py-6 md:px-8 md:py-8 space-y-8">
              {/* Coverage */}
              <section>
                <h3 className="text-lg font-bold text-gray-900 mb-3 flex items-center gap-2">
                  <span className="w-1.5 h-6 bg-primary-600 rounded-full"></span>
                  Coverage
                </h3>
                <p className="text-gray-700 leading-relaxed">{pkg.coverage}</p>
                <p className="text-sm text-gray-600 mt-2">{pkg.duration} of continuous filming</p>
              </section>

              {/* Films Included */}
              <section>
                <h3 className="text-lg font-bold text-gray-900 mb-3 flex items-center gap-2">
                  <span className="w-1.5 h-6 bg-primary-600 rounded-full"></span>
                  Films Included
                </h3>
                <ul className="space-y-2">
                  {pkg.deliverables.map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <svg className="w-5 h-5 text-primary-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-gray-700 leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </section>

              {/* Turnaround */}
              <section>
                <h3 className="text-lg font-bold text-gray-900 mb-3 flex items-center gap-2">
                  <span className="w-1.5 h-6 bg-primary-600 rounded-full"></span>
                  Delivery Timeline
                </h3>
                <p className="text-gray-700 leading-relaxed">{pkg.turnaround}</p>
              </section>

              {/* Add-on Eligibility & Notes */}
              {pkg.notes && pkg.notes.length > 0 && (
                <section>
                  <h3 className="text-lg font-bold text-gray-900 mb-3 flex items-center gap-2">
                    <span className="w-1.5 h-6 bg-primary-600 rounded-full"></span>
                    Good to Know
                  </h3>
                  <ul className="space-y-2">
                    {pkg.notes.map((note, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <svg className="w-5 h-5 text-gray-400 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                        </svg>
                        <span className="text-gray-700 leading-relaxed">{note}</span>
                      </li>
                    ))}
                  </ul>
                </section>
              )}

              {/* Travel & Taxes Note */}
              <section className="bg-gray-50 rounded-xl p-4 md:p-6 border border-gray-200">
                <p className="text-sm text-gray-600 leading-relaxed">
                  <strong className="text-gray-900">Additional notes:</strong> All prices are in USD. Travel within 50 miles is complimentary.
                  Destination travel (flight, hotel, meals) billed separately. Sales tax may apply based on location.
                </p>
              </section>

              {/* CTA */}
              <div className="pt-4">
                <a
                  href="#contact"
                  onClick={() => onOpenChange(false)}
                  className="block w-full text-center px-8 py-4 bg-primary-600 text-white rounded-full font-medium hover:bg-primary-700 transition-colors shadow-lg hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-primary-600 focus:ring-offset-2"
                >
                  Book This Package
                </a>
              </div>
            </div>
          </motion.div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
