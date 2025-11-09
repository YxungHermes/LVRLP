import { AnimateIn } from "@/components/AnimateIn";
import packagesData from "../../../content/packages.json";

export default function Testimonials() {
  const { testimonials } = packagesData;

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimateIn className="text-center mb-16">
          <h2 className="font-serif text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Kind Words
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            What couples say about their experience
          </p>
        </AnimateIn>

        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <AnimateIn key={index} delay={index * 0.1}>
              <div className="bg-gradient-to-br from-primary-50 to-pink-50 rounded-2xl p-8 shadow-lg">
                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-5 h-5 text-yellow-400 fill-current"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>

                {/* Quote */}
                <blockquote className="text-gray-700 mb-6 italic">
                  "{testimonial.text}"
                </blockquote>

                {/* Author */}
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary-300 flex items-center justify-center text-primary-700 font-bold">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <div className="font-medium text-gray-900">{testimonial.name}</div>
                    <div className="text-sm text-gray-600">
                      {testimonial.package} Package • {testimonial.date}
                    </div>
                  </div>
                </div>
              </div>
            </AnimateIn>
          ))}
        </div>

        <AnimateIn delay={0.5} className="mt-12 text-center">
          <a
            href="#contact"
            className="inline-block px-8 py-3 bg-primary-600 text-white rounded-full font-medium hover:bg-primary-700 transition-colors"
          >
            Create Your Own Story
          </a>
        </AnimateIn>
      </div>
    </section>
  );
}
