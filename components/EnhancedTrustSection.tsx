import Image from 'next/image';

export default function EnhancedTrustSection() {
  const developers = [
    { name: 'Aldar', logo: '/logos/aldar.png' },
    { name: 'Reportage', logo: '/logos/reportage.png' },
    { name: 'Bloom', logo: '/logos/bloom.png' },
    { name: 'Modon', logo: '/logos/modon.png' },
    { name: 'SAAS Properties', logo: '/logos/saas.png' },
    { name: 'Radiant Real Estate', logo: '/logos/radiant.png' },
  ];

  return (
    <section className="py-12 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Trusted Developers - Now First */}
        <div className="mb-12">
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent/10 rounded-full text-accent font-semibold text-sm mb-3">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              RERA-Approved Partners
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-navy mb-3">
              Partnered with UAE's Premier Developers
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Exclusive access to properties from the most trusted names in UAE real estate
            </p>
          </div>

          {/* Developer Logos Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mb-8">
            {developers.map((developer) => (
              <div
                key={developer.name}
                className="group flex flex-col items-center"
              >
                {/* Logo Circle */}
                <div className="relative w-24 h-24 bg-white border-2 border-gray-200 rounded-full p-4 hover:border-accent hover:shadow-xl transition-all duration-300 group-hover:scale-110 flex items-center justify-center overflow-hidden mb-3">
                  <Image
                    src={developer.logo}
                    alt={`${developer.name} logo`}
                    fill
                    quality={95}
                    className="object-contain p-3"
                    sizes="96px"
                  />
                </div>
                {/* Company Name */}
                <p className="text-sm font-semibold text-gray-700 text-center group-hover:text-accent transition-colors">
                  {developer.name}
                </p>
              </div>
            ))}
          </div>

          {/* Developer Stats */}
          <div className="bg-gradient-to-r from-accent/5 to-gold/5 rounded-2xl p-6 border border-accent/20">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
              <div>
                <div className="text-2xl font-bold text-accent mb-1">6+</div>
                <p className="text-xs text-gray-600">Premier Partners</p>
              </div>
              <div>
                <div className="text-2xl font-bold text-accent mb-1">100%</div>
                <p className="text-xs text-gray-600">RERA-Approved</p>
              </div>
              <div>
                <div className="text-2xl font-bold text-accent mb-1">50+</div>
                <p className="text-xs text-gray-600">Active Projects</p>
              </div>
              <div>
                <div className="text-2xl font-bold text-accent mb-1">98%</div>
                <p className="text-xs text-gray-600">On-Time Delivery</p>
              </div>
            </div>
          </div>
        </div>

        {/* Trust Credentials - Enhanced */}
        <div className="bg-white rounded-2xl shadow-lg border-2 border-gray-100 p-8">
          
          {/* RERA Badge - Prominent */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-8 pb-8 border-b border-gray-200">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center shadow-lg">
                <svg className="w-9 h-9 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              </div>
              <div>
                <p className="text-2xl font-bold text-navy mb-1">Verified by RERA</p>
                <p className="text-sm text-gray-600">
                  License #1189 • Dubai Real Estate Regulatory Agency
                </p>
              </div>
            </div>
            <button className="px-6 py-3 bg-green-50 hover:bg-green-100 border-2 border-green-200 rounded-xl text-green-700 font-semibold text-sm transition-all whitespace-nowrap">
              Verify License →
            </button>
          </div>

          {/* Trust Stats Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {[
              { icon: '🏆', number: '15+', label: 'Years in Business', color: 'from-yellow-400 to-orange-500' },
              { icon: '🌍', number: '45+', label: 'Countries Served', color: 'from-blue-400 to-cyan-500' },
              { icon: '💰', number: 'AED 2B+', label: 'Properties Sold', color: 'from-green-400 to-emerald-500' },
              { icon: '⭐', number: '4.9/5', label: 'Client Rating', color: 'from-purple-400 to-pink-500' }
            ].map((stat, i) => (
              <div key={i} className="group text-center p-6 bg-gradient-to-br from-gray-50 to-white rounded-xl border-2 border-gray-200 hover:border-accent transition-all hover:shadow-lg hover:-translate-y-1">
                <div className="text-4xl mb-3 group-hover:scale-110 transition-transform">{stat.icon}</div>
                <div className={`text-3xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-2`}>
                  {stat.number}
                </div>
                <div className="text-sm text-gray-600 font-semibold">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Security Badges */}
          <div className="flex flex-wrap justify-center gap-3">
            {[
              { icon: '🔒', text: 'SSL Secured', color: 'bg-blue-50 text-blue-700 border-blue-200' },
              { icon: '✓', text: 'GDPR Compliant', color: 'bg-green-50 text-green-700 border-green-200' },
              { icon: '🛡️', text: 'Data Protected', color: 'bg-purple-50 text-purple-700 border-purple-200' },
              { icon: '📜', text: 'Licensed Broker', color: 'bg-orange-50 text-orange-700 border-orange-200' }
            ].map((cert, i) => (
              <div key={i} className={`flex items-center gap-2 px-4 py-2 ${cert.color} border-2 rounded-full text-sm font-bold transition-all hover:scale-105 hover:shadow-md`}>
                <span className="text-lg">{cert.icon}</span>
                <span>{cert.text}</span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
