'use client';

export default function TrustLegitimacy() {
  const credentials = [
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      title: '15+ Years of Licensed Experience',
      description: 'Established real estate firm with proven track record in UAE property investment'
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      ),
      title: 'Government Verified',
      description: 'RERA License #1189 - Fully regulated and compliant with UAE real estate laws'
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: 'AED 2B+ Assets Under Management',
      description: 'Trusted by international investors to manage substantial property portfolios'
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      title: '50+ Developer Partnerships',
      description: 'Exclusive access to premium developments from leading UAE developers'
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
        </svg>
      ),
      title: '4.9/5 Client Rating',
      description: 'Consistently high satisfaction from discerning international investors'
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: 'Global Investor Network',
      description: 'Serving clients from over 40 countries seeking UAE property investment'
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-black text-navy mb-6">
              Trust & Credibility
            </h2>
            <p className="text-xl text-navy/90 max-w-3xl mx-auto font-semibold">
              Our commitment to excellence and regulatory compliance ensures your investment is in safe, experienced hands.
            </p>
          </div>

          {/* Credentials Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {credentials.map((credential, index) => (
              <div 
                key={index}
                className="bg-gradient-to-br from-white to-gray-50 rounded-2xl p-6 md:p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-gray-200 hover:border-accent"
              >
                <div className="text-accent mb-4">
                  {credential.icon}
                </div>
                <h3 className="text-lg md:text-xl font-black text-navy mb-3">
                  {credential.title}
                </h3>
                <p className="text-navy/90 leading-relaxed font-semibold text-sm md:text-base">
                  {credential.description}
                </p>
              </div>
            ))}
          </div>

          {/* Additional Trust Markers */}
          <div className="mt-12 md:mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 text-center">
            <div className="space-y-1 md:space-y-2">
              <p className="text-3xl md:text-5xl font-black text-accent">500+</p>
              <p className="text-xs md:text-sm text-navy font-bold">Global Investors</p>
            </div>
            <div className="space-y-1 md:space-y-2">
              <p className="text-3xl md:text-5xl font-black text-accent">98%</p>
              <p className="text-xs md:text-sm text-navy font-bold">Client Satisfaction</p>
            </div>
            <div className="space-y-1 md:space-y-2">
              <p className="text-3xl md:text-5xl font-black text-accent">AED 2B+</p>
              <p className="text-xs md:text-sm text-navy font-bold">Assets Managed</p>
            </div>
            <div className="space-y-1 md:space-y-2">
              <p className="text-3xl md:text-5xl font-black text-accent">15+</p>
              <p className="text-xs md:text-sm text-navy font-bold">Years Experience</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
