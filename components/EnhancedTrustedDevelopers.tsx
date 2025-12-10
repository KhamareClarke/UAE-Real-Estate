export default function EnhancedTrustedDevelopers() {
  const developers = [
    { name: 'Aldar', description: 'Abu Dhabi\'s Leading Developer' },
    { name: 'Reportage', description: 'Award-Winning Projects' },
    { name: 'Bloom', description: 'Sustainable Communities' },
    { name: 'Modon', description: 'Premium Developments' },
    { name: 'Binghatti', description: 'Iconic Dubai Properties' },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-navy mb-4">
            Partnered with UAE's Premier Developers
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We work exclusively with RERA-approved developers known for quality, reliability, and on-time delivery
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {developers.map((developer) => (
            <div
              key={developer.name}
              className="group bg-white border-2 border-gray-200 hover:border-accent rounded-2xl p-6 text-center transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-accent/10 to-gold/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <span className="text-2xl font-bold text-accent">
                  {developer.name.charAt(0)}
                </span>
              </div>
              <h3 className="font-bold text-navy text-lg mb-2">{developer.name}</h3>
              <p className="text-xs text-gray-600">{developer.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-sm text-gray-600">
            <span className="font-semibold text-navy">Trusted by 500+ investors</span> • All developers are RERA-registered and verified
          </p>
        </div>
      </div>
    </section>
  );
}
