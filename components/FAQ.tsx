'use client';

import { useState } from 'react';

interface FAQItem {
  question: string;
  answer: string;
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs: FAQItem[] = [
    {
      question: 'Can property in the UAE help with residency?',
      answer:
        'Yes, property ownership can support UAE residency applications under certain conditions. Properties meeting minimum value thresholds (typically 750,000 AED or 2 million AED depending on the visa type) may qualify you for a Golden Visa or investor visa. Residency pathways depend on current UAE regulations and qualifying property values. We can guide you through the requirements.',
    },
    {
      question: 'Do I need to visit the UAE to reserve a unit?',
      answer:
        'No, you can reserve a property remotely. Most developers accept digital reservations with online payment options. However, we recommend visiting the UAE to view properties in person when possible. Our team can arrange virtual tours and provide detailed property information to help you make informed decisions remotely.',
    },
    {
      question: 'What is the minimum budget to get started?',
      answer:
        'Entry-level investment opportunities in Abu Dhabi and Dubai typically start around 500,000 AED, though premium projects and residency-aligned properties often require budgets of 750,000 AED or higher. Your budget will determine the range of options available, including location, developer, and property type.',
    },
    {
      question: 'Which cities do you cover?',
      answer:
        'We primarily focus on Abu Dhabi and Dubai, the UAE\'s two largest property markets. These cities offer the most diverse range of investment opportunities, from luxury waterfront developments to family-oriented communities. We also have access to select projects in other emirates upon request.',
    },
    {
      question: 'Can you help with mortgages or finance?',
      answer:
        'Yes, we work with trusted mortgage brokers and financial institutions that specialize in UAE property finance for both residents and international investors. Financing options vary based on your residency status, income, and property type. We can connect you with the right partners to explore your financing options.',
    },
    {
      question: 'Is there any obligation if I request options?',
      answer:
        'Absolutely not. Requesting investment options is completely free and carries no obligation. Our goal is to provide you with curated property information that matches your criteria. You\'re under no pressure to proceed, and we respect your timeline and decision-making process.',
    },
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-navy mb-12">
          Frequently Asked Questions
        </h2>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-lg border border-gray-200 overflow-hidden"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-5 text-left flex items-center justify-between hover:bg-gray-50 transition"
              >
                <span className="font-semibold text-navy pr-4">
                  {faq.question}
                </span>
                <svg
                  className={`w-5 h-5 text-accent flex-shrink-0 transition-transform ${
                    openIndex === index ? 'transform rotate-180' : ''
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
                <div className="px-6 pb-5 text-gray-600 leading-relaxed">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
