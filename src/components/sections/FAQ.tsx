"use client";

import { AnimateIn } from "@/components/AnimateIn";
import { useState } from "react";
import faqData from "../../../content/faq.json";

export default function FAQ() {
  const { faqs } = faqData;
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimateIn className="text-center mb-16">
          <h2 className="font-serif text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-600">
            Everything you need to know about working with me
          </p>
        </AnimateIn>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <AnimateIn key={faq.id} delay={index * 0.05}>
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full px-6 py-5 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
                >
                  <span className="font-medium text-gray-900 pr-8">
                    {faq.question}
                  </span>
                  <svg
                    className={`w-5 h-5 text-primary-600 flex-shrink-0 transition-transform ${
                      openIndex === index ? "transform rotate-180" : ""
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
                {openIndex === index && (
                  <div className="px-6 pb-5 text-gray-600">
                    {faq.answer}
                  </div>
                )}
              </div>
            </AnimateIn>
          ))}
        </div>

        <AnimateIn delay={0.6} className="mt-12 text-center">
          <p className="text-gray-600 mb-4">Still have questions?</p>
          <a
            href="#contact"
            className="inline-block px-8 py-3 bg-primary-600 text-white rounded-full font-medium hover:bg-primary-700 transition-colors"
          >
            Get in Touch
          </a>
        </AnimateIn>
      </div>
    </section>
  );
}
