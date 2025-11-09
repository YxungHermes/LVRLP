import { AnimateIn } from "@/components/AnimateIn";
import packagesData from "../../../content/packages.json";

const icons = {
  calendar: (
    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
    </svg>
  ),
  document: (
    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
    </svg>
  ),
  camera: (
    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
  ),
  checklist: (
    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
    </svg>
  ),
  heart: (
    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
    </svg>
  ),
  gift: (
    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
    </svg>
  ),
};

export default function Workflow() {
  const { workflow } = packagesData;

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimateIn className="text-center mb-16">
          <h2 className="font-serif text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            How It Works
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            From our first conversation to delivering your stunning photos
          </p>
        </AnimateIn>

        <div className="relative">
          {/* Timeline line */}
          <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-primary-200 via-primary-400 to-primary-600"></div>

          <div className="space-y-12">
            {workflow.map((step, index) => (
              <AnimateIn key={step.step} delay={index * 0.1}>
                <div
                  className={`flex flex-col lg:flex-row gap-8 items-center ${
                    index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                  }`}
                >
                  {/* Content */}
                  <div className="flex-1 lg:text-right lg:pr-12" style={{ textAlign: index % 2 === 0 ? 'right' : 'left' }}>
                    <div className={index % 2 === 0 ? 'lg:ml-auto lg:mr-0' : 'lg:mr-auto lg:ml-0'} style={{ maxWidth: '500px' }}>
                      <div className="inline-block bg-primary-100 text-primary-700 px-3 py-1 rounded-full text-sm font-medium mb-3">
                        Step {step.step}
                      </div>
                      <h3 className="font-serif text-2xl font-bold text-gray-900 mb-2">
                        {step.title}
                      </h3>
                      <p className="text-gray-600 mb-2">{step.description}</p>
                      <p className="text-sm text-primary-600 font-medium">
                        {step.duration}
                      </p>
                    </div>
                  </div>

                  {/* Icon */}
                  <div className="relative flex-shrink-0 z-10">
                    <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-primary-600 rounded-full flex items-center justify-center text-white shadow-lg">
                      {icons[step.icon as keyof typeof icons]}
                    </div>
                  </div>

                  {/* Spacer for alternating layout */}
                  <div className="flex-1 lg:pl-12"></div>
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
