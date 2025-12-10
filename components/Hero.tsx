'use client';

import LeadForm from './LeadForm';

export default function Hero() {
  const scrollToForm = () => {
    const formElement = document.getElementById('lead-form');
    if (formElement) {
      formElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleContactClick = () => {
    if (window.innerWidth < 768) {
      window.location.href = 'tel:+971529009133';
    } else {
      const footer = document.getElementById('footer');
      if (footer) {
        footer.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <section className="relative min-h-screen bg-navy overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-navy via-navy-dark/95 to-navy/90 z-10"></div>
        <div className="absolute inset-0 opacity-20">
          {/* Placeholder for skyline image - replace with actual image */}
          <div className="w-full h-full bg-gradient-to-t from-navy-dark to-navy-light"></div>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-20 container mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          {/* Left Side - Content (Mobile: comes after form) */}
          <div className="order-2 lg:order-1 text-white space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm text-white text-sm font-medium">
              Premium UAE Property
            </div>

            {/* Headline */}
            <div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-4">
                Premium UAE Property
                <br />
                <span className="text-accent-light">Investment Opportunities</span>
              </h1>
              <p className="text-lg sm:text-xl text-gray-300 mb-3">
                Curated Abu Dhabi & Dubai projects with expert guidance from licensed specialists.
              </p>
              <p className="text-sm text-gray-400">
                Licensed UAE brokerage • Trusted by international investors
              </p>
            </div>

            {/* Benefit Cards */}
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-5">
                <h3 className="font-semibold text-lg mb-2">Residency Pathways</h3>
                <p className="text-sm text-gray-300">
                  Properties aligned with UAE residency requirements.
                </p>
              </div>
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-5">
                <h3 className="font-semibold text-lg mb-2">Pre-Launch Access</h3>
                <p className="text-sm text-gray-300">
                  Early access to exclusive off-market projects.
                </p>
              </div>
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-5">
                <h3 className="font-semibold text-lg mb-2">Expert Guidance</h3>
                <p className="text-sm text-gray-300">
                  Professional support throughout the buying process.
                </p>
              </div>
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-5">
                <h3 className="font-semibold text-lg mb-2">Curated Portfolio</h3>
                <p className="text-sm text-gray-300">
                  Hand-selected developments with strong fundamentals.
                </p>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={scrollToForm}
                className="bg-accent hover:bg-accent-dark text-white font-semibold py-4 px-8 rounded-lg transition duration-200 text-center"
              >
                Unlock My UAE Investment Options
              </button>
              <button
                onClick={handleContactClick}
                className="border-2 border-white/30 hover:border-white text-white font-semibold py-4 px-8 rounded-lg transition duration-200 text-center"
              >
                Speak to an Expert Now
              </button>
            </div>
          </div>

          {/* Right Side - Form (Mobile: comes first) */}
          <div className="order-1 lg:order-2">
            <LeadForm />
          </div>
        </div>
      </div>
    </section>
  );
}
