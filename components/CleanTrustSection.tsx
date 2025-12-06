import Image from 'next/image';

export default function CleanTrustSection() {
  const developers = [
    { name: 'Aldar', logo: '/logos/aldar.png' },
    { name: 'Reportage', logo: '/logos/reportage.png' },
    { name: 'Bloom', logo: '/logos/bloom.png' },
    { name: 'Modon', logo: '/logos/modon.png' },
    { name: 'SAAS Properties', logo: '/logos/saas.png' },
    { name: 'Radiant Real Estate', logo: '/logos/radiant.png' },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* RERA Badge - Prominent */}
        <div className="max-w-4xl mx-auto mb-12">
          <div className="bg-gradient-to-r from-green-50 to-emerald-50 border-2 border-green-500 rounded-2xl p-8 shadow-2xl">
            <div className="flex flex-col items-center text-center justify-center gap-6">
              <div className="flex items-center gap-5">
                <div className="w-20 h-20 bg-green-500 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg">
                  <svg className="w-11 h-11 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <p className="text-3xl font-bold text-navy mb-1">✅ Government Verified</p>
                  <p className="text-gray-700 text-lg">RERA License #1189 • <span className="text-green-600 font-semibold">Fully Regulated</span></p>
                  <p className="text-sm text-gray-600 mt-1">Trusted by 500+ international investors since 2008</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Key Stats - Enhanced */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          {[
            { number: '15+', label: 'Years Experience', icon: '🏆', color: 'from-blue-500 to-blue-600' },
            { number: '500+', label: 'Properties Sold', icon: '🏢', color: 'from-accent to-orange-600' },
            { number: '45+', label: 'Countries Served', icon: '🌍', color: 'from-green-500 to-emerald-600' },
            { number: '4.9/5', label: 'Client Rating', icon: '⭐', color: 'from-gold to-yellow-600' }
          ].map((stat, i) => (
            <div key={i} className="group text-center p-6 bg-white rounded-2xl border-2 border-gray-200 hover:border-accent hover:shadow-xl transition-all cursor-pointer">
              <div className="text-4xl mb-2 group-hover:scale-110 transition-transform">{stat.icon}</div>
              <div className={`text-4xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-2`}>{stat.number}</div>
              <div className="text-sm font-semibold text-gray-700">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Developer Logos - Enhanced */}
        <div className="bg-gradient-to-r from-gray-50 to-white rounded-2xl p-8 border border-gray-200">
          <div className="text-center mb-6">
            <p className="text-2xl font-bold text-navy mb-2">
              Exclusive Partner Network
            </p>
            <p className="text-gray-600">
              Direct access to UAE's most trusted developers
            </p>
          </div>
          <div className="flex flex-wrap justify-center items-center gap-10">
            {developers.map((developer) => (
              <div key={developer.name} className="group relative">
                <div className="w-24 h-24 transition-all hover:scale-110">
                  <Image
                    src={developer.logo}
                    alt={developer.name}
                    fill
                    quality={95}
                    className="object-contain"
                    sizes="96px"
                  />
                </div>
                <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="text-xs font-semibold text-gray-700 whitespace-nowrap">{developer.name}</span>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-8 text-center">
            <p className="text-sm text-gray-600">
              <span className="font-bold text-accent">50+ active projects</span> • <span className="font-bold text-accent">98% on-time delivery</span>
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
