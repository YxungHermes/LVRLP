import { AnimateIn } from "@/components/AnimateIn";
import { site } from "@/content/site";

export default function Packages() {
  const { packages, addOns } = site;

  return (
    <section id="packages" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimateIn className="text-center mb-16">
          <h2 className="font-serif text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Photography Packages
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Choose the perfect package for your special day
          </p>
        </AnimateIn>

        <div className="grid md:grid-cols-3 gap-8 mt-12">
          {packages.map((pkg, index) => (
            <AnimateIn key={pkg.id} delay={index * 0.1}>
              <div
                className={`relative rounded-2xl p-8 h-full flex flex-col ${
                  pkg.isIdeal
                    ? "bg-gradient-to-br from-primary-50 to-pink-50 border-2 border-primary-300 shadow-xl scale-105"
                    : "bg-white border-2 border-gray-200 shadow-lg"
                }`}
              >
                {pkg.isIdeal && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary-600 text-white px-4 py-1 rounded-full text-sm font-medium">
                    Most Booked
                  </div>
                )}

                <div className="mb-6">
                  <h3 className="font-serif text-3xl font-bold text-gray-900 mb-2">
                    {pkg.name}
                  </h3>
                  <p className="text-primary-600 font-medium mb-4">{pkg.tagline}</p>
                  <p className="text-gray-600 text-sm">{pkg.summary}</p>
                </div>

                <div className="mb-6">
                  <div className="flex items-baseline">
                    <span className="text-5xl font-bold text-gray-900">
                      ${pkg.price.toLocaleString()}
                    </span>
                  </div>
                  <p className="text-gray-500 text-sm mt-1">{pkg.duration} coverage</p>
                </div>

                <ul className="space-y-3 mb-8 flex-grow">
                  {pkg.deliverables.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <svg
                        className="w-5 h-5 text-primary-600 mr-2 mt-0.5 flex-shrink-0"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span className="text-gray-700 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href="#contact"
                  className={`block text-center py-3 px-6 rounded-full font-medium transition-colors ${
                    pkg.isIdeal
                      ? "bg-primary-600 text-white hover:bg-primary-700"
                      : "bg-gray-900 text-white hover:bg-gray-800"
                  }`}
                >
                  Book {pkg.name}
                </a>
              </div>
            </AnimateIn>
          ))}
        </div>

        {/* Add-ons */}
        <AnimateIn delay={0.4} className="mt-16">
          <div className="bg-gray-50 rounded-2xl p-8">
            <h3 className="font-serif text-2xl font-bold text-gray-900 mb-6 text-center">
              Available Add-Ons
            </h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {addOns.map((addon, index) => (
                <div key={index} className="bg-white rounded-lg p-4 border border-gray-200">
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="font-medium text-gray-900">{addon.name}</h4>
                    <span className="text-primary-600 font-bold">
                      +${addon.price}
                    </span>
                  </div>
                  <p className="text-sm text-gray-600">{addon.description}</p>
                </div>
              ))}
            </div>
          </div>
        </AnimateIn>
      </div>
    </section>
  );
}
