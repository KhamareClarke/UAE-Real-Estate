'use client';

import { useState } from 'react';

export default function ModernFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "How long until I start earning rental income?",
      answer: "Most properties start generating rental income within 2-3 months of purchase completion. For off-plan properties, rental income typically begins once the property is handed over, which can range from 6 months to 2 years depending on the project timeline."
    },
    {
      question: "Can I invest from abroad?",
      answer: "Absolutely! We specialize in helping international investors. The entire process can be completed remotely - from property selection to purchase completion. We handle all documentation, provide virtual property tours, and coordinate with local authorities on your behalf."
    },
    {
      question: "What is the minimum investment for a Golden Visa?",
      answer: "To qualify for a UAE Golden Visa through real estate, you need to invest a minimum of AED 2 million (approximately $545,000 USD) in property. This can be a single property or multiple properties combined."
    },
    {
      question: "How long does the Golden Visa process take?",
      answer: "Once you've purchased a qualifying property, the Golden Visa application typically takes 2-4 weeks to process. We guide you through every step and handle all documentation to ensure a smooth, fast approval."
    },
    {
      question: "What returns can I expect from UAE real estate?",
      answer: "UAE real estate offers competitive returns that vary based on location, property type, and market conditions. Historical performance data and detailed market analysis are available during your consultation. We focus on properties in prime locations with strong rental demand and appreciation potential."
    },
    {
      question: "Are there any hidden costs or fees?",
      answer: "We believe in complete transparency. All costs are disclosed upfront including: property price, 4% DLD transfer fee, 2% agency commission, mortgage registration fees (if applicable), and service charges. There are no hidden fees."
    },
    {
      question: "Can I get financing for my property purchase?",
      answer: "Yes! UAE banks offer mortgages to both residents and non-residents. Typically, you can finance up to 75% of the property value (for properties under AED 5M) with competitive interest rates. We work with multiple banks to secure the best rates for you."
    },
    {
      question: "Do you provide property management services?",
      answer: "Yes! We offer comprehensive property management including tenant sourcing, rent collection, maintenance coordination, and annual renewals. Our management services ensure your property generates optimal returns with minimal hassle."
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-6 py-3 bg-accent/10 rounded-full text-accent font-bold text-sm mb-6">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
              </svg>
              Got Questions? We Have Answers
            </div>
            <h2 className="text-4xl sm:text-5xl font-black text-navy mb-6">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-navy/70 font-medium">
              Everything you need to know about investing in UAE real estate
            </p>
          </div>

          {/* FAQ Accordion */}
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-lg border-2 border-gray-100 overflow-hidden hover:border-gold/50 transition-all"
              >
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full px-8 py-6 flex items-center justify-between text-left hover:bg-gray-50 transition-colors"
                >
                  <span className="text-lg font-black text-navy pr-8">
                    {faq.question}
                  </span>
                  <svg
                    className={`w-6 h-6 text-accent flex-shrink-0 transition-transform ${
                      openIndex === index ? 'rotate-180' : ''
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {openIndex === index && (
                  <div className="px-8 pb-6">
                    <p className="text-navy/70 leading-relaxed text-lg font-medium">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Contact CTA */}
          <div className="mt-16 text-center bg-gradient-to-r from-navy to-navy-900 rounded-3xl p-12">
            <h3 className="text-2xl font-black text-white mb-4">
              Still have questions?
            </h3>
            <p className="text-white/80 mb-8 font-medium">
              Our property specialists are here to help
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://wa.me/971529009133"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 bg-gradient-to-r from-accent to-accent-light hover:from-accent-dark hover:to-accent text-white font-bold px-8 py-4 rounded-xl transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                </svg>
                Chat on WhatsApp
              </a>
              <a
                href="tel:+971529009133"
                className="inline-flex items-center justify-center gap-3 bg-white/10 hover:bg-white/20 text-white font-bold px-8 py-4 rounded-xl transition-all duration-300 border-2 border-white/20"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                Call +971 52 900 9133
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
