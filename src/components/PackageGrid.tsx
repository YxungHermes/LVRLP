"use client";

import { useState } from "react";
import { PackageCard } from "./PackageCard";
import { AnimateIn } from "./AnimateIn";
import packagesData from "../../content/packages.json";

export function PackageGrid() {
  // State to track which package is currently being hovered
  // Default to 4 (the ideal 10-hour package)
  const [activeRank, setActiveRank] = useState<number>(4);

  const { packages, addOns } = packagesData;

  return (
    <section id="packages" className="py-24 bg-gradient-to-b from-white via-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <AnimateIn className="text-center mb-16">
          <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-4 leading-tight">
            Wedding Film Packages
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Cinematic storytelling for your perfect day
          </p>
          <p className="text-sm text-gray-500 mt-4 max-w-xl mx-auto">
            Each package is thoughtfully designed to capture your unique love story with artistry and elegance
          </p>
        </AnimateIn>

        {/* Package Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 lg:gap-8 mt-12">
          {packages.map((pkg, index) => (
            <div
              key={pkg.id}
              className={
                pkg.isIdeal || pkg.isUltimate
                  ? "md:col-span-2 lg:col-span-1"
                  : ""
              }
            >
              <PackageCard
                pkg={pkg}
                allPackages={packages}
                index={index}
                activeRank={activeRank}
                onHoverStart={() => setActiveRank(pkg.rank)}
                onHoverEnd={() => setActiveRank(4)} // Return to ideal package
              />
            </div>
          ))}
        </div>

        {/* Add-ons Section */}
        <AnimateIn delay={0.4} className="mt-20">
          <div className="bg-white rounded-2xl p-8 lg:p-12 shadow-sm border border-gray-200">
            <div className="text-center mb-8">
              <h3 className="font-serif text-3xl font-bold text-gray-900 mb-3">
                Enhance Your Experience
              </h3>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Customize your package with these premium add-ons
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
              {addOns.map((addon, index) => (
                <div
                  key={index}
                  className="bg-gray-50 rounded-xl p-5 border border-gray-100 hover:border-brand-amethyst/30 hover:shadow-md transition-all duration-300"
                >
                  <div className="flex justify-between items-start mb-3">
                    <h4 className="font-semibold text-gray-900 leading-tight">
                      {addon.name}
                    </h4>
                    <span className="text-brand-amethyst font-bold text-lg whitespace-nowrap ml-3">
                      +${addon.price}
                    </span>
                  </div>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {addon.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </AnimateIn>

        {/* Call to Action */}
        <AnimateIn delay={0.6} className="mt-16 text-center">
          <p className="text-gray-600 mb-6 text-lg">
            Not sure which package is right for you?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="#contact"
              className="px-8 py-4 bg-brand-amethyst text-white rounded-full font-medium hover:bg-brand-amethyst/90 transition-all shadow-lg hover:shadow-xl"
            >
              Schedule a Consultation
            </a>
            <a
              href="#faq"
              className="px-8 py-4 bg-white text-gray-900 border-2 border-gray-300 rounded-full font-medium hover:bg-gray-50 transition-colors"
            >
              View FAQ
            </a>
          </div>
        </AnimateIn>

        {/* Trust Indicators */}
        <AnimateIn delay={0.8} className="mt-20">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-brand-amethyst mb-2">500+</div>
              <div className="text-sm text-gray-600">Weddings Captured</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-brand-amethyst mb-2">10+</div>
              <div className="text-sm text-gray-600">Years Experience</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-brand-amethyst mb-2">5★</div>
              <div className="text-sm text-gray-600">Average Rating</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-brand-amethyst mb-2">98%</div>
              <div className="text-sm text-gray-600">Client Satisfaction</div>
            </div>
          </div>
        </AnimateIn>
      </div>
    </section>
  );
}
