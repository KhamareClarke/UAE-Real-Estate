export default function CleanWhyChoose() {
  const features = [
    {
      icon: '🏆',
      title: 'RERA Licensed',
      description: 'Fully regulated brokerage with verified credentials',
      stat: 'License #1189',
      proof: '100% Compliant'
    },
    {
      icon: '💼',
      title: '15+ Years Experience',
      description: 'Expert guidance from first inquiry to handover',
      stat: '500+ Properties',
      proof: '98% Success Rate'
    },
    {
      icon: '🔑',
      title: 'Exclusive Access',
      description: 'Off-market properties and pre-launch projects',
      stat: '50+ Developers',
      proof: 'Pre-Launch Deals'
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-3xl sm:text-4xl font-bold text-navy mb-3">
            Why Choose City Plaza Real Estate
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Your trusted partner for secure, profitable UAE property investments
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-10">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 border-2 border-gray-200 hover:border-accent hover:shadow-xl transition-all text-center group animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-5xl mb-4 group-hover:scale-110 transition-transform">{feature.icon}</div>
              <h3 className="text-xl font-bold text-navy mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600 mb-4">
                {feature.description}
                <span className="block text-gray-500 text-sm">(Arabic Translation Placeholder)</span>
              </p>
              <div className="flex items-center justify-center gap-4 pt-4 border-t border-gray-200">
                <div className="text-center">
                  <p className="text-2xl font-bold text-accent">{feature.stat}</p>
                  <p className="text-xs text-gray-500">Verified</p>
                </div>
                <div className="text-center">
                  <p className="text-sm font-bold text-green-600">{feature.proof}</p>
                  <p className="text-xs text-gray-500">Guaranteed</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* CTA */}
        <div className="text-center">
          <a
            href="#quick-form"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-accent to-gold hover:from-accent-dark hover:to-gold-dark text-white font-bold py-4 px-8 rounded-xl transition-all shadow-lg hover:shadow-xl hover:scale-105"
          >
            <span>See Available Properties</span>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </a>
          <p className="mt-3 text-sm text-gray-600">
            <span className="font-bold text-accent">Limited availability</span> • Free consultation • No obligation
          </p>
        </div>
      </div>
    </section>
  );
}
