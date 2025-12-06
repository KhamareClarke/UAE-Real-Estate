'use client';

import { useState } from 'react';

interface FAQItem {
  question: string;
  answer: string;
  category: string;
}

export default function SearchableFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [searchQuery, setSearchQuery] = useState('');

  const faqs: FAQItem[] = [
    {
      question: "How long until I start earning rental income?",
      answer: "Most properties start generating rental income within 2-3 months of purchase completion. For off-plan properties, rental income typically begins once the property is handed over, which can range from 6 months to 2 years depending on the project timeline.",
      category: "Returns"
    },
    {
      question: "Can I invest from abroad?",
      answer: "Absolutely! We specialize in helping international investors. The entire process can be completed remotely - from property selection to purchase completion. We handle all documentation, provide virtual property tours, and coordinate with local authorities on your behalf.",
      category: "Process"
    },
    {
      question: "What is the minimum investment for a Golden Visa?",
      answer: "To qualify for a UAE Golden Visa through real estate, you need to invest a minimum of AED 2 million (approximately $545,000 USD) in property. This can be a single property or multiple properties combined.",
      category: "Golden Visa"
    },
    {
      question: "How long does the Golden Visa process take?",
      answer: "Once you've purchased a qualifying property, the Golden Visa application typically takes 2-4 weeks to process. We guide you through every step and handle all documentation to ensure a smooth, fast approval.",
      category: "Golden Visa"
    },
    {
      question: "What are the typical ROI rates in Dubai and Abu Dhabi?",
      answer: "Dubai and Abu Dhabi offer some of the highest rental yields globally. Typical ROI ranges from 6-10% annually, with some prime locations and off-plan properties offering 10-14% returns. Our portfolio focuses on properties with proven 8%+ ROI potential.",
      category: "Returns"
    },
    {
      question: "Are there any hidden costs or fees?",
      answer: "We believe in complete transparency. All costs are disclosed upfront including: property price, 4% DLD transfer fee, 2% agency commission, mortgage registration fees (if applicable), and service charges. There are no hidden fees - what you see is what you pay.",
      category: "Costs"
    },
    {
      question: "Can I get financing for my property purchase?",
      answer: "Yes! UAE banks offer mortgages to both residents and non-residents. Typically, you can finance up to 75% of the property value (for properties under AED 5M) with competitive interest rates starting from 3.5%. We work with multiple banks to secure the best rates for you.",
      category: "Financing"
    },
    {
      question: "What happens if I want to sell my property?",
      answer: "UAE real estate is highly liquid with strong demand. We provide free property management and resale services. Most properties can be sold within 30-90 days. There's no capital gains tax in the UAE, so you keep 100% of your profit (minus the 4% transfer fee).",
      category: "Process"
    },
    {
      question: "Do you provide property management services?",
      answer: "Yes! We offer comprehensive property management including tenant sourcing, rent collection, maintenance coordination, and annual renewals. Our management fee is competitive at 5% of annual rent, and we ensure your property generates maximum returns with minimal hassle.",
      category: "Services"
    },
    {
      question: "What areas do you recommend for investment?",
      answer: "Top ROI areas include Dubai Marina, Downtown Dubai, Business Bay, JBR, and Dubai Hills Estate in Dubai; and Al Reem Island, Yas Island, and Saadiyat Island in Abu Dhabi. We provide detailed market analysis to match your investment goals with the best locations.",
      category: "Investment"
    }
  ];

  const filteredFAQs = faqs.filter(faq =>
    faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
    faq.answer.toLowerCase().includes(searchQuery.toLowerCase()) ||
    faq.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const categories = Array.from(new Set(faqs.map(faq => faq.category)));

  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent/10 rounded-full text-accent font-semibold text-sm mb-4">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
            </svg>
            Got Questions? We Have Answers
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-navy mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
            Everything you need to know about investing in UAE real estate
          </p>

          {/* Search Bar */}
          <div className="max-w-2xl mx-auto mb-8">
            <div className="relative">
              <input
                type="text"
                placeholder="Search questions... (e.g., 'Golden Visa', 'rental income', 'costs')"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-6 py-4 pl-12 border-2 border-gray-300 rounded-xl focus:border-accent focus:outline-none text-navy font-medium shadow-md"
              />
              <svg className="w-5 h-5 text-gray-400 absolute left-4 top-1/2 transform -translate-y-1/2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
          </div>

          {/* Category Pills */}
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSearchQuery(category)}
                className="px-4 py-2 bg-gray-100 hover:bg-accent hover:text-white text-gray-700 rounded-full text-sm font-semibold transition-all"
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        <div className="max-w-4xl mx-auto">
          {filteredFAQs.length > 0 ? (
            <div className="space-y-4">
              {filteredFAQs.map((faq, index) => (
                <div
                  key={index}
                  className="bg-white border-2 border-gray-200 rounded-2xl overflow-hidden hover:border-accent transition-all duration-300 shadow-sm hover:shadow-md"
                >
                  <button
                    onClick={() => setOpenIndex(openIndex === index ? null : index)}
                    className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-gray-50 transition-colors"
                  >
                    <div className="flex items-start gap-4 flex-1">
                      <span className="px-3 py-1 bg-accent/10 text-accent text-xs font-bold rounded-full flex-shrink-0">
                        {faq.category}
                      </span>
                      <span className="font-bold text-navy text-lg flex-1">
                        {faq.question}
                      </span>
                    </div>
                    <svg
                      className={`w-6 h-6 text-accent transition-transform flex-shrink-0 ml-4 ${
                        openIndex === index ? 'transform rotate-180' : ''
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  {openIndex === index && (
                    <div className="px-6 pb-6 pt-2 text-gray-700 leading-relaxed bg-gray-50 border-t border-gray-200">
                      {faq.answer}
                    </div>
                  )}
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <svg className="w-16 h-16 text-gray-300 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <p className="text-gray-500 text-lg">No questions found matching "{searchQuery}"</p>
              <button
                onClick={() => setSearchQuery('')}
                className="mt-4 text-accent font-semibold hover:underline"
              >
                Clear search
              </button>
            </div>
          )}
        </div>

        {/* Subtle CTA */}
        <div className="mt-12 text-center bg-gradient-to-r from-gray-50 to-white rounded-2xl p-8 border border-gray-200">
          <p className="text-lg text-gray-700 mb-4">
            <span className="font-bold text-navy">Still have questions?</span> Our property specialists are here to help.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="https://wa.me/971529009133"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-6 rounded-lg transition-all"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              Chat on WhatsApp
            </a>
            <a
              href="tel:+971529009133"
              className="inline-flex items-center gap-2 border-2 border-accent hover:bg-accent hover:text-white text-accent font-semibold py-3 px-6 rounded-lg transition-all"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
              </svg>
              Call +971 52 900 9133
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
