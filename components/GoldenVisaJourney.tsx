'use client';

import { useFormModal } from '@/contexts/FormModalContext';

export default function GoldenVisaJourney() {
  const { openFormModal } = useFormModal();
  const steps = [
    {
      number: '01',
      title: 'Initial Consultation',
      description: 'Private consultation with a senior investment advisor to assess investment objectives, timeline, and allocation requirements. Full documentation provided with pricing structures and payment schedules.',
      duration: '30-45 minutes',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
        </svg>
      )
    },
    {
      number: '02',
      title: 'Unit Selection & Reservation',
      description: 'Review available inventory with floor plans and specifications. Units are reserved with a AED 50,000 refundable reservation deposit, deductible from the first payment.',
      duration: '3-5 business days',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      )
    },
    {
      number: '03',
      title: 'Legal Documentation & Completion',
      description: 'Our legal team prepares and reviews all Sale & Purchase Agreements (SPA), payment schedules, and developer guarantees. All documentation is RERA-compliant with escrow protection.',
      duration: '30-60 days',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-black text-navy mb-6">
              Private Acquisition Process
            </h2>
            <p className="text-xl text-navy/70 max-w-3xl mx-auto font-medium">
              Structured process with senior advisor support, legal documentation, and full regulatory compliance
            </p>
          </div>

          {/* Journey Steps */}
          <div className="relative">
            {/* Connection Line - Desktop */}
            <div className="hidden lg:block absolute top-24 left-0 right-0 h-0.5 bg-gradient-to-r from-gold via-gold to-gold opacity-30" style={{ top: '120px' }}></div>

            <div className="grid lg:grid-cols-3 gap-12 lg:gap-8">
              {steps.map((step, index) => (
                <div key={index} className="relative">
                  {/* Step Card */}
                  <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-gold/30 relative z-10">
                    {/* Step Number */}
                    <div className="absolute -top-6 left-8 bg-accent text-white font-bold text-2xl w-16 h-16 rounded-full flex items-center justify-center shadow-lg">
                      {step.number}
                    </div>

                    {/* Icon */}
                    <div className="text-accent mb-6 mt-8">
                      {step.icon}
                    </div>

                    {/* Content */}
                    <h3 className="text-2xl font-black text-navy mb-4">
                      {step.title}
                    </h3>
                    <p className="text-navy/70 leading-relaxed mb-6">
                      {step.description}
                    </p>

                    {/* Duration Badge */}
                    <div className="inline-flex items-center gap-2 bg-accent/10 px-4 py-2 rounded-lg">
                      <svg className="w-4 h-4 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span className="text-sm font-semibold text-navy">{step.duration}</span>
                    </div>
                  </div>

                  {/* Arrow - Desktop */}
                  {index < steps.length - 1 && (
                    <div className="hidden lg:block absolute top-24 -right-4 z-20">
                      <svg className="w-8 h-8 text-accent" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M13.025 1l-2.847 2.828 6.176 6.176h-16.354v3.992h16.354l-6.176 6.176 2.847 2.828 10.975-11z"/>
                      </svg>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Value Proposition */}
          <div className="mt-20 bg-gradient-to-r from-navy to-navy-900 rounded-3xl p-12 text-center shadow-2xl">
            <h3 className="text-3xl font-black text-white mb-4">
              Structured Allocations. Regulated Developers. Transparent Process.
            </h3>
            <p className="text-white/80 text-lg mb-8 max-w-3xl mx-auto font-medium">
              Access to developer-direct allocations with transparent pricing. Returns and performance vary based on location, property type, and holding duration.
            </p>
            <div className="space-y-2">
              <button onClick={openFormModal} className="bg-gradient-to-r from-accent to-accent-light hover:from-accent-dark hover:to-accent text-white font-bold px-12 py-5 rounded-xl transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105 inline-flex items-center gap-3">
                Request Private Access
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </button>
              <p className="text-white/70 text-sm">
                Private inquiry — no obligation
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
