export default function TrustSignals() {
  return (
    <section className="py-10 bg-white border-y-2 border-gray-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* RERA Verification */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-3 px-6 py-4 bg-gradient-to-r from-green-50 to-emerald-50 border-2 border-green-200 rounded-2xl">
            <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center">
              <svg className="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
            </div>
            <div className="text-left">
              <p className="font-bold text-navy text-lg">Verified by RERA</p>
              <p className="text-sm text-gray-600">
                License #: 1189 | 
                <button className="text-accent hover:underline ml-1 font-semibold">
                  What is RERA?
                </button>
              </p>
            </div>
          </div>
        </div>

        {/* Trust Stats */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {[
            { icon: '🏆', number: '15+', label: 'Years in Business' },
            { icon: '🌍', number: '45+', label: 'Countries Served' },
            { icon: '💰', number: 'AED 2B+', label: 'Properties Sold' },
            { icon: '⭐', number: '4.9/5', label: 'Client Rating' }
          ].map((stat, i) => (
            <div key={i} className="text-center p-6 bg-gradient-to-br from-gray-50 to-white rounded-2xl border border-gray-200 hover:border-accent transition-all hover:shadow-lg">
              <div className="text-4xl mb-3">{stat.icon}</div>
              <div className="text-3xl font-bold text-accent mb-2">{stat.number}</div>
              <div className="text-sm text-gray-600 font-semibold">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Certifications */}
        <div className="mt-12 flex flex-wrap justify-center gap-4">
          {[
            { icon: '🔒', text: 'SSL Secured' },
            { icon: '✓', text: 'GDPR Compliant' },
            { icon: '🛡️', text: 'Data Protected' },
            { icon: '📜', text: 'Licensed Broker' }
          ].map((cert, i) => (
            <div key={i} className="flex items-center gap-2 px-4 py-2 bg-gray-100 rounded-full text-sm font-semibold text-gray-700">
              <span>{cert.icon}</span>
              <span>{cert.text}</span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
