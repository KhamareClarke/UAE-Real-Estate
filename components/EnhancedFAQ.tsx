'use client';

import { useState } from 'react';

interface FAQItem {
  question: string;
  answer: string;
  category: string;
}

export default function EnhancedFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs: FAQItem[] = [
    {
      category: 'Residency',
      question: 'Can UAE property help me get residency or a Golden Visa?',
      answer: 'Yes. Properties valued at AED 750,000+ may qualify you for a 2-year renewable residency visa. Properties valued at AED 2 million+ may qualify for the 10-year Golden Visa. Requirements include property ownership, no mortgage restrictions for Golden Visa, and meeting UAE immigration criteria. We provide full guidance on residency pathways and connect you with immigration specialists.',
    },
    {
      category: 'Process',
      question: 'Do I need to visit the UAE to purchase property?',
      answer: 'Not necessarily. Many investors complete purchases remotely through Power of Attorney (POA). However, we recommend visiting to view properties in person when possible. We can arrange virtual tours, video walkthroughs, and detailed property reports. For final signing, you can either visit Dubai/Abu Dhabi or use a notarized POA from your home country.',
    },
    {
      category: 'Investment',
      question: 'What is the minimum budget to invest in UAE property?',
      answer: 'Entry-level properties start around AED 500,000. However, for Golden Visa eligibility, the minimum is AED 750,000. For optimal ROI and premium locations, we recommend budgets of AED 1 million+. Off-plan properties often have flexible payment plans (20-30% down, rest over 2-3 years), making them accessible to more investors.',
    },
    {
      category: 'Coverage',
      question: 'Which cities and areas do you cover?',
      answer: 'We specialize in Abu Dhabi and Dubai, covering all major areas including Dubai Marina, Downtown Dubai, Business Bay, Palm Jumeirah, Yas Island, Saadiyat Island, and Al Reem Island. We also have access to select projects in Sharjah, Ajman, and Ras Al Khaimah. Our focus is on areas with strong rental yields, capital appreciation potential, and Golden Visa eligibility.',
    },
    {
      category: 'Financing',
      question: 'Can you help with mortgages or property financing?',
      answer: 'Yes. We work with leading UAE banks and mortgage brokers who specialize in financing for both residents and non-residents. Typical mortgages offer 75-80% LTV for residents and 50-60% for non-residents. We can connect you with pre-approved lenders, help with documentation, and guide you through the mortgage process to secure competitive rates.',
    },
    {
      category: 'Commitment',
      question: 'Is there any obligation if I request property options?',
      answer: 'Absolutely none. Our consultation is completely free with zero obligation. We provide curated property options, market insights, ROI projections, and expert advice at no cost. You only work with us if you find the perfect property. Our goal is to build long-term relationships, not pressure you into quick decisions.',
    },
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-navy mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-gray-600">
            Everything you need to know about investing in UAE property
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white border-2 border-gray-200 rounded-2xl overflow-hidden hover:border-accent transition-all"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-5 text-left flex items-center justify-between hover:bg-gray-50 transition"
              >
                <div className="flex-1 pr-4">
                  <span className="inline-block px-3 py-1 bg-accent/10 text-accent text-xs font-bold rounded-full mb-2">
                    {faq.category}
                  </span>
                  <p className="font-bold text-navy text-lg">
                    {faq.question}
                  </p>
                </div>
                <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all ${
                  openIndex === index ? 'bg-accent text-white rotate-180' : 'bg-gray-200 text-gray-600'
                }`}>
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </button>
              {openIndex === index && (
                <div className="px-6 pb-6 text-gray-700 leading-relaxed border-t border-gray-200 pt-4 animate-fade-in">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12 text-center bg-gradient-to-r from-accent/10 to-gold/10 rounded-2xl p-8 border-2 border-accent/20">
          <h3 className="text-2xl font-bold text-navy mb-3">
            Still Have Questions?
          </h3>
          <p className="text-gray-700 mb-6">
            Speak with our property experts for personalized answers
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+971529009133"
              className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-accent to-gold hover:from-accent-dark hover:to-gold-dark text-white font-bold py-3 px-6 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
              </svg>
              Call +971 52 900 9133
            </a>
            <a
              href="https://wa.me/971529009133?text=Hi%20City%20Plaza%2C%20I%20have%20questions%20about%20UAE%20property%20investment"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 border-2 border-accent hover:bg-accent hover:text-white text-accent font-bold py-3 px-6 rounded-xl transition-all duration-300"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
              </svg>
              WhatsApp Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
