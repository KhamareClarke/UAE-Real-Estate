'use client';

import Image from 'next/image';

export default function WhyInvestUAE() {
  const benefits = [
    {
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: '0% Property Tax',
      description: 'Zero income tax, capital gains tax, or property tax. Keep 100% of your rental income and appreciation.'
    },
    {
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
        </svg>
      ),
      title: 'Residency With Investment',
      description: 'Secure 5 or 10-year Golden Visa residency for you and your family through qualifying property investments.'
    },
    {
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      title: '100% Foreign Ownership',
      description: 'Full freehold ownership rights for international investors in designated zones. No local partner required.'
    },
    {
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
        </svg>
      ),
      title: 'High ROI Potential',
      description: 'Average rental yields of 6-10% annually with strong capital appreciation in prime locations.'
    },
    {
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
        </svg>
      ),
      title: 'Transparent Legal Framework',
      description: 'RERA-regulated market with clear property laws, investor protection, and secure title deeds.'
    },
    {
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
      title: 'Strategic Global Hub',
      description: 'World-class infrastructure, tax-free business environment, and gateway to emerging markets.'
    }
  ];

  return (
    <section className="relative py-24 overflow-hidden bg-gradient-to-b from-gray-50 via-white to-gray-50">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-black text-navy-900 mb-6">
              Investment Structure & Market Position
            </h2>
            <p className="text-xl text-navy-700 max-w-4xl mx-auto font-medium leading-relaxed">
              These allocations represent institutional-grade opportunities with structured payment plans, regulatory protection, and clear exit strategies. Each benefit below addresses specific investor requirements.
            </p>
          </div>

          {/* Benefits Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {benefits.map((benefit, index) => (
              <div 
                key={index}
                className="group bg-white rounded-2xl p-6 md:p-8 border-2 border-gray-200 hover:border-[#FF6A00] transition-all duration-300 hover:shadow-2xl hover:shadow-[#FF6A00]/10"
              >
                <div className="text-[#FF6A00] mb-5 transform group-hover:scale-110 transition-transform duration-300">
                  {benefit.icon}
                </div>
                <h3 className="text-lg md:text-xl font-black text-navy-900 mb-3">
                  {benefit.title}
                </h3>
                <p className="text-navy-700 leading-relaxed font-medium text-sm md:text-base">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>

          {/* Bottom CTA */}
          <div className="mt-16 text-center">
            <a href="#quick-form">
              <button className="bg-[#FF6A00] hover:bg-[#FF8534] text-white font-bold px-12 py-5 rounded-xl transition-all duration-300 shadow-xl shadow-[#FF6A00]/30 hover:shadow-2xl hover:scale-105 inline-flex items-center gap-3">
                Request Private Consultation
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </button>
            </a>
            <p className="mt-4 text-sm text-navy-600 font-medium">
              Senior advisor consultation • Confidential investment analysis • RERA-licensed
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
