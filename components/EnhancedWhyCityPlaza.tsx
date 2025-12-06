export default function EnhancedWhyCityPlaza() {
  const features = [
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      title: 'RERA Licensed & Regulated',
      description: 'Fully licensed UAE brokerage with verified credentials, regulatory oversight, and transparent operations.',
      badge: 'Licensed',
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      ),
      title: 'Expert Guidance & Support',
      description: 'Dedicated property consultants with 15+ years of UAE market expertise guide you from first inquiry to handover.',
      badge: '15+ Years',
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z" />
        </svg>
      ),
      title: 'Exclusive Pre-Launch Access',
      description: 'First access to off-market properties, pre-launch projects, and Golden Visa-eligible units before public release.',
      badge: 'VIP Access',
    },
  ];

  const trustBadges = [
    { icon: '✓', label: 'RERA Licensed', color: 'text-green-600' },
    { icon: '✓', label: 'Regulated Brokerage', color: 'text-green-600' },
    { icon: '✓', label: '500+ Successful Deals', color: 'text-accent' },
    { icon: '✓', label: 'Award-Winning Service', color: 'text-gold' },
  ];

  return (
    <section className="py-12 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-3xl sm:text-4xl font-bold text-navy mb-4">
            Why Choose City Plaza Real Estate
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Your trusted partner for secure, profitable UAE property investments with full regulatory compliance
          </p>
        </div>

        {/* Feature Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group bg-white border-2 border-gray-200 rounded-2xl p-8 hover:border-accent hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className="flex items-start justify-between mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-accent to-gold rounded-xl flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform">
                  {feature.icon}
                </div>
                <span className="px-3 py-1 bg-accent/20 text-accent text-xs font-bold rounded-full">
                  {feature.badge}
                </span>
              </div>
              <h3 className="text-xl font-bold text-navy mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Trust Badges */}
        <div className="bg-gradient-to-r from-accent/5 to-gold/5 border-2 border-accent/20 rounded-2xl p-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {trustBadges.map((badge, index) => (
              <div
                key={index}
                className="flex items-center gap-3 justify-center"
              >
                <div className={`w-8 h-8 rounded-full bg-white flex items-center justify-center ${badge.color} text-xl font-bold shadow-md`}>
                  {badge.icon}
                </div>
                <span className="text-navy font-semibold text-sm">
                  {badge.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Stats */}
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { number: '98%', label: 'Client Satisfaction' },
            { number: '500+', label: 'Properties Sold' },
            { number: '15+', label: 'Years Experience' },
            { number: 'AED 2B+', label: 'Total Value Transacted' },
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl sm:text-4xl font-bold text-accent mb-2">
                {stat.number}
              </div>
              <div className="text-sm text-gray-400">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
