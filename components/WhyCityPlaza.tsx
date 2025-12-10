export default function WhyCityPlaza() {
  const features = [
    {
      title: 'Licensed Brokerage',
      description:
        'Fully licensed UAE brokerage with verified credentials and regulatory oversight.',
    },
    {
      title: 'Expert Guidance',
      description:
        'From first enquiry to handover, our team supports you at every stage of the buying process.',
    },
    {
      title: 'Exclusive Access',
      description:
        'Access to pre-launch, off-market, and residency-aligned property options that are not widely advertised.',
    },
  ];

  const trustBadges = [
    'RERA Licensed',
    'Regulated',
    '500+ Investments',
    'Award-winning team',
  ];

  return (
    <section className="py-20 bg-navy">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-white mb-12">
          Why Choose City Plaza
        </h2>

        {/* Feature Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8"
            >
              <h3 className="text-xl font-semibold text-white mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-300 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Trust Badges */}
        <div className="flex flex-wrap justify-center items-center gap-6 sm:gap-8 pt-8 border-t border-white/10">
          {trustBadges.map((badge) => (
            <div
              key={badge}
              className="flex items-center gap-2 text-gray-300"
            >
              <svg
                className="w-5 h-5 text-accent-light"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="text-sm font-medium">{badge}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
