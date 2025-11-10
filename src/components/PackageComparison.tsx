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
    <div className="border-t border-watercolor-coffee/10 mt-8 pt-6 max-w-5xl mx-auto">
      {/* Toggle Button */}
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="flex items-center justify-between w-full mb-4 text-left group"
      >
        <h4 className="text-sm font-semibold text-watercolor-espresso tracking-wide">COMPARE PACKAGES</h4>
        <div className="flex items-center gap-2 text-watercolor-coffee group-hover:text-watercolor-espresso transition-colors">
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
                    "rounded-xl border-2 p-4 transition-all",
                    isCurrent && "bg-watercolor-wash-light border-watercolor-rose-500 shadow-lg",
                    !isCurrent && "bg-watercolor-cream border-watercolor-coffee/15 hover:border-watercolor-coffee/30"
                  )}
                >
                  {/* Package Name */}
                  <div className="mb-4 pb-4 border-b border-watercolor-coffee/10">
                    <h4 className={clsx(
                      "font-serif text-base font-bold leading-tight mb-1",
                      isCurrent ? "text-watercolor-rose-600" : "text-watercolor-espresso"
                    )}>
                      {pkg.name.replace('The ', '')}
                    </h4>
                    {pkg.isIdeal && (
                      <span className="inline-block text-xs font-bold text-watercolor-rose-600">
                        ★ Recommended
                      </span>
                    )}
                  </div>

                  {/* Stats */}
                  <div className="space-y-3 text-sm">
                    <div>
                      <div className="text-watercolor-graphite text-xs mb-1">Coverage</div>
                      <div className="font-medium text-watercolor-espresso">{pkg.duration}</div>
                    </div>
                    <div>
                      <div className="text-watercolor-graphite text-xs mb-1">Crew</div>
                      <div className="font-medium text-watercolor-espresso">{extractCrewInfo(pkg.coverage)}</div>
                    </div>
                    <div>
                      <div className="text-watercolor-graphite text-xs mb-1">Film Deliverables</div>
                      <div className="font-medium text-watercolor-espresso">{extractFilmCount(pkg.deliverables)} films</div>
                    </div>
                    <div>
                      <div className="text-watercolor-graphite text-xs mb-1">Turnaround</div>
                      <div className="font-medium text-watercolor-espresso">
                        {pkg.turnaround.split(',')[0].replace(' for highlight film', '').replace(' for highlight', '')}
                      </div>
                    </div>
                    <div className="pt-3 border-t border-watercolor-coffee/10">
                      <div className="flex items-baseline gap-0.5">
                        <span className="text-base font-medium text-watercolor-coffee self-end" style={{ paddingBottom: '0.15rem' }}>$</span>
                        <span className="text-2xl font-serif text-watercolor-espresso tabular-nums" style={{ fontWeight: 600, letterSpacing: '-0.02em' }}>
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
                    isCurrent && "bg-watercolor-wash-light border-watercolor-rose-500",
                    !isCurrent && "bg-watercolor-cream border-watercolor-coffee/15"
                  )}
                >
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex-1">
                      <h4 className={clsx(
                        "font-serif text-base font-bold leading-tight mb-1",
                        isCurrent ? "text-watercolor-rose-600" : "text-watercolor-espresso"
                      )}>
                        {pkg.name.replace('The ', '')}
                      </h4>
                      {pkg.isIdeal && (
                        <span className="inline-block text-xs font-bold text-watercolor-rose-600">
                          ★ Recommended
                        </span>
                      )}
                    </div>
                    <div className="flex items-baseline gap-0.5">
                      <span className="text-sm font-medium text-watercolor-coffee self-end">$</span>
                      <span className="text-xl font-serif text-watercolor-espresso tabular-nums" style={{ fontWeight: 600, letterSpacing: '-0.02em' }}>
                        {pkg.price.toLocaleString('en-US')}
                      </span>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-2 text-sm">
                    <div>
                      <div className="text-watercolor-graphite text-xs">Coverage</div>
                      <div className="font-medium text-watercolor-espresso">{pkg.duration}</div>
                    </div>
                    <div>
                      <div className="text-watercolor-graphite text-xs">Crew</div>
                      <div className="font-medium text-watercolor-espresso">{extractCrewInfo(pkg.coverage)}</div>
                    </div>
                    <div>
                      <div className="text-watercolor-graphite text-xs">Films</div>
                      <div className="font-medium text-watercolor-espresso">{extractFilmCount(pkg.deliverables)}</div>
                    </div>
                    <div>
                      <div className="text-watercolor-graphite text-xs">Turnaround</div>
                      <div className="font-medium text-watercolor-espresso">
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
