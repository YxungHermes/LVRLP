"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import clsx from "clsx";

interface Package {
  id: string;
  name: string;
  price: number;
  duration: string;
  rank: number;
  isIdeal: boolean;
  isUltimate: boolean;
  deliverables: readonly string[];
  turnaround: string;
  coverage: string;
}

interface PackageComparisonProps {
  packages: readonly Package[];
  currentPackageId: string;
}

export function PackageComparison({ packages, currentPackageId }: PackageComparisonProps) {
  const shouldReduceMotion = useReducedMotion();
  const [isExpanded, setIsExpanded] = useState(true);

  const extractCrewInfo = (coverage: string) => {
    if (coverage.toLowerCase().includes('dual-camera') || coverage.toLowerCase().includes('two')) {
      return '2 videographers';
    }
    return '1 videographer';
  };

  const extractFilmCount = (deliverables: readonly string[]) => {
    return deliverables.filter(d =>
      d.toLowerCase().includes('film') ||
      d.toLowerCase().includes('footage') ||
      d.toLowerCase().includes('teaser')
    ).length;
  };

  return (
    <div className="border-t border-gray-200 mt-8 pt-6 max-w-5xl mx-auto">
      {/* Toggle Button */}
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="flex items-center justify-between w-full mb-4 text-left group"
      >
        <h4 className="text-sm font-semibold text-gray-900 tracking-wide">COMPARE PACKAGES</h4>
        <div className="flex items-center gap-2 text-gray-600 group-hover:text-gray-900 transition-colors">
          <span className="text-sm">{isExpanded ? 'Hide' : 'Show'}</span>
          {isExpanded ? (
            <ChevronUp className="w-5 h-5" />
          ) : (
            <ChevronDown className="w-5 h-5" />
          )}
        </div>
      </button>

      {/* Comparison Grid - Centered */}
      {isExpanded && (
        <motion.div
          initial={shouldReduceMotion ? {} : { opacity: 0, y: 10 }}
          animate={shouldReduceMotion ? {} : { opacity: 1, y: 0 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
        >
          {/* Desktop: Centered Grid */}
          <div className="hidden md:grid md:grid-cols-5 gap-3 pb-4">
            {packages.map((pkg) => {
              const isCurrent = pkg.id === currentPackageId;
              return (
                <div
                  key={pkg.id}
                  className={clsx(
                    "flex-shrink-0 w-56 rounded-xl border-2 p-4 transition-all",
                    isCurrent && "bg-brand-amethystSoft border-brand-amethyst shadow-lg",
                    !isCurrent && "bg-white border-gray-200 hover:border-gray-300"
                  )}
                >
                  {/* Package Name */}
                  <div className="mb-4 pb-4 border-b border-gray-200">
                    <h4 className={clsx(
                      "font-serif text-base font-bold leading-tight mb-1",
                      isCurrent ? "text-brand-amethyst" : "text-gray-900"
                    )}>
                      {pkg.name.replace('The ', '')}
                    </h4>
                    {pkg.isIdeal && (
                      <span className="inline-block text-xs font-bold text-brand-amethyst">
                        ★ Recommended
                      </span>
                    )}
                  </div>

                  {/* Stats */}
                  <div className="space-y-3 text-sm">
                    <div>
                      <div className="text-gray-500 text-xs mb-1">Coverage</div>
                      <div className="font-medium text-gray-900">{pkg.duration}</div>
                    </div>
                    <div>
                      <div className="text-gray-500 text-xs mb-1">Crew</div>
                      <div className="font-medium text-gray-900">{extractCrewInfo(pkg.coverage)}</div>
                    </div>
                    <div>
                      <div className="text-gray-500 text-xs mb-1">Film Deliverables</div>
                      <div className="font-medium text-gray-900">{extractFilmCount(pkg.deliverables)} films</div>
                    </div>
                    <div>
                      <div className="text-gray-500 text-xs mb-1">Turnaround</div>
                      <div className="font-medium text-gray-900">
                        {pkg.turnaround.split(',')[0].replace(' for highlight film', '').replace(' for highlight', '')}
                      </div>
                    </div>
                    <div className="pt-3 border-t border-gray-200">
                      <div className="flex items-baseline gap-0.5">
                        <span className="text-base font-medium text-gray-500 self-end" style={{ paddingBottom: '0.15rem' }}>$</span>
                        <span className="text-2xl font-serif text-gray-900 tabular-nums" style={{ fontWeight: 600, letterSpacing: '-0.02em' }}>
                          {pkg.price.toLocaleString('en-US')}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Mobile: Stacked Cards */}
          <div className="md:hidden space-y-3">
            {packages.map((pkg) => {
              const isCurrent = pkg.id === currentPackageId;
              return (
                <div
                  key={pkg.id}
                  className={clsx(
                    "rounded-xl border-2 p-4 transition-all",
                    isCurrent && "bg-brand-amethystSoft border-brand-amethyst",
                    !isCurrent && "bg-white border-gray-200"
                  )}
                >
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex-1">
                      <h4 className={clsx(
                        "font-serif text-base font-bold leading-tight mb-1",
                        isCurrent ? "text-brand-amethyst" : "text-gray-900"
                      )}>
                        {pkg.name.replace('The ', '')}
                      </h4>
                      {pkg.isIdeal && (
                        <span className="inline-block text-xs font-bold text-brand-amethyst">
                          ★ Recommended
                        </span>
                      )}
                    </div>
                    <div className="flex items-baseline gap-0.5">
                      <span className="text-sm font-medium text-gray-500 self-end">$</span>
                      <span className="text-xl font-serif text-gray-900 tabular-nums" style={{ fontWeight: 600, letterSpacing: '-0.02em' }}>
                        {pkg.price.toLocaleString('en-US')}
                      </span>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-2 text-sm">
                    <div>
                      <div className="text-gray-500 text-xs">Coverage</div>
                      <div className="font-medium text-gray-900">{pkg.duration}</div>
                    </div>
                    <div>
                      <div className="text-gray-500 text-xs">Crew</div>
                      <div className="font-medium text-gray-900">{extractCrewInfo(pkg.coverage)}</div>
                    </div>
                    <div>
                      <div className="text-gray-500 text-xs">Films</div>
                      <div className="font-medium text-gray-900">{extractFilmCount(pkg.deliverables)}</div>
                    </div>
                    <div>
                      <div className="text-gray-500 text-xs">Turnaround</div>
                      <div className="font-medium text-gray-900">
                        {pkg.turnaround.split(',')[0].replace(' for highlight film', '').replace(' for highlight', '')}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </motion.div>
      )}
    </div>
  );
}
