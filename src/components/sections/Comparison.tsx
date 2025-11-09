import { AnimateIn } from "@/components/AnimateIn";
import packagesData from "../../../content/packages.json";

export default function Comparison() {
  const { packages } = packagesData;

  // Extract unique features across all packages
  const allFeatures = Array.from(
    new Set(packages.flatMap((pkg) => pkg.features))
  );

  const hasFeature = (pkg: typeof packages[0], feature: string) => {
    return pkg.features.includes(feature);
  };

  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimateIn className="text-center mb-16">
          <h2 className="font-serif text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Package Comparison
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Compare features across all packages to find your perfect match
          </p>
        </AnimateIn>

        <AnimateIn delay={0.2}>
          <div className="overflow-x-auto">
            <table className="w-full bg-white rounded-2xl shadow-lg overflow-hidden">
              <thead>
                <tr className="bg-gray-900 text-white">
                  <th className="px-6 py-4 text-left font-serif text-lg">Features</th>
                  {packages.map((pkg) => (
                    <th key={pkg.id} className="px-6 py-4 text-center font-serif text-lg">
                      <div>{pkg.name}</div>
                      <div className="text-sm font-normal text-gray-300 mt-1">
                        ${pkg.price.toLocaleString()}
                      </div>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-200 bg-primary-50">
                  <td className="px-6 py-4 font-medium text-gray-900">Coverage Duration</td>
                  {packages.map((pkg) => (
                    <td key={pkg.id} className="px-6 py-4 text-center text-gray-700">
                      {pkg.duration}
                    </td>
                  ))}
                </tr>
                {allFeatures.map((feature, index) => (
                  <tr
                    key={index}
                    className={index % 2 === 0 ? "bg-gray-50" : "bg-white"}
                  >
                    <td className="px-6 py-4 text-gray-700 border-b border-gray-200">
                      {feature}
                    </td>
                    {packages.map((pkg) => (
                      <td
                        key={pkg.id}
                        className="px-6 py-4 text-center border-b border-gray-200"
                      >
                        {hasFeature(pkg, feature) ? (
                          <svg
                            className="w-6 h-6 text-primary-600 mx-auto"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path
                              fillRule="evenodd"
                              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                              clipRule="evenodd"
                            />
                          </svg>
                        ) : (
                          <svg
                            className="w-6 h-6 text-gray-300 mx-auto"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path
                              fillRule="evenodd"
                              d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                              clipRule="evenodd"
                            />
                          </svg>
                        )}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </AnimateIn>

        <AnimateIn delay={0.4} className="mt-12 text-center">
          <p className="text-gray-600 mb-6">
            Not sure which package is right for you?
          </p>
          <a
            href="#contact"
            className="inline-block px-8 py-3 bg-primary-600 text-white rounded-full font-medium hover:bg-primary-700 transition-colors"
          >
            Schedule a Consultation
          </a>
        </AnimateIn>
      </div>
    </section>
  );
}
