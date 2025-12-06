import EliteHero from '@/components/EliteHero';
import Elite3DPropertyCards from '@/components/Elite3DPropertyCards';

// Minimalist high-converting funnel
// 5 sections only, maximum clarity, zero clutter

export const metadata = {
  title: 'Abu Dhabi Premium Investment Portfolio | City Plaza Real Estate',
  description: '40% below market. Golden Visa eligible. Limited allocation of prime Abu Dhabi properties.',
};

export default function MinimalPage() {
  return (
    <main className="min-h-screen bg-white">
      
      {/* 1. HERO - Lead capture above the fold */}
      <EliteHero />
      
      {/* 2. PROPERTIES - Just 2 cards, clear and simple */}
      <Elite3DPropertyCards />
      
      {/* 3. WHY UAE - 3 benefits only */}
      <section className="py-32 bg-white">
        <div className="container mx-auto px-6 max-w-6xl">
          <h2 className="text-5xl font-black text-center mb-20 text-navy-900">
            Why Abu Dhabi
          </h2>
          
          <div className="grid md:grid-cols-3 gap-16">
            <div className="text-center">
              <div className="text-6xl font-black text-primary-500 mb-4">0%</div>
              <h3 className="text-2xl font-bold mb-4 text-navy-900">Property Tax</h3>
              <p className="text-lg text-navy-600 leading-relaxed">
                Keep 100% of your rental income and capital gains
              </p>
            </div>
            
            <div className="text-center">
              <div className="text-6xl font-black text-primary-500 mb-4">10Y</div>
              <h3 className="text-2xl font-bold mb-4 text-navy-900">Golden Visa</h3>
              <p className="text-lg text-navy-600 leading-relaxed">
                Residency for you and your family with qualifying investment
              </p>
            </div>
            
            <div className="text-center">
              <div className="text-6xl font-black text-primary-500 mb-4">8%</div>
              <h3 className="text-2xl font-bold mb-4 text-navy-900">Annual ROI</h3>
              <p className="text-lg text-navy-600 leading-relaxed">
                Average rental yields in prime Abu Dhabi locations
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* 4. SOCIAL PROOF - 1 testimonial + numbers */}
      <section className="py-32 bg-gray-50">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="bg-white rounded-2xl p-16 shadow-xl">
            <div className="text-center mb-12">
              <div className="flex justify-center gap-2 mb-6">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-8 h-8 text-primary-500" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-2xl text-navy-700 leading-relaxed mb-8 italic">
                "City Plaza made my Golden Visa property purchase seamless. Professional guidance from start to finish, with complete transparency on costs and timelines."
              </p>
              <p className="text-lg font-bold text-navy-900">Daniel K.</p>
              <p className="text-navy-600">London, UK</p>
            </div>
            
            <div className="grid grid-cols-3 gap-8 pt-12 border-t border-gray-200">
              <div className="text-center">
                <div className="text-4xl font-black text-navy-900 mb-2">500+</div>
                <div className="text-sm text-navy-600">Investors</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-black text-navy-900 mb-2">AED 2B+</div>
                <div className="text-sm text-navy-600">Deals Closed</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-black text-navy-900 mb-2">15+</div>
                <div className="text-sm text-navy-600">Years Licensed</div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* 5. FINAL CTA - Simple and clear */}
      <section className="py-32 bg-white">
        <div className="container mx-auto px-6 max-w-3xl text-center">
          <h2 className="text-5xl font-black mb-8 text-navy-900">
            Request Your Investment Portfolio
          </h2>
          <p className="text-xl text-navy-600 mb-12 leading-relaxed">
            Receive detailed analysis, payment structures, and Golden Visa qualification assessment
          </p>
          <a href="#elite-form">
            <button className="bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-600 hover:to-primary-700 text-white font-bold text-xl px-16 py-6 rounded-xl shadow-2xl hover:shadow-primary-500/50 transition-all hover:scale-105">
              Get Started
            </button>
          </a>
          <p className="mt-6 text-sm text-navy-500">
            Private & Confidential • RERA-Licensed
          </p>
        </div>
      </section>
      
      {/* FOOTER - Minimal */}
      <footer className="bg-navy-900 text-white py-16">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="grid md:grid-cols-3 gap-12 mb-12">
            <div>
              <h3 className="font-bold text-xl mb-4">City Plaza Real Estate</h3>
              <p className="text-white/60 leading-relaxed">
                RERA-licensed brokerage with 15+ years expertise in Abu Dhabi real estate
              </p>
            </div>
            
            <div>
              <h4 className="font-bold mb-4">Contact</h4>
              <p className="text-white/80 mb-2">+971 52 900 9133</p>
              <p className="text-white/80">Khadijat.omosumi@cityplazare.com</p>
            </div>
            
            <div>
              <h4 className="font-bold mb-4">Office</h4>
              <p className="text-white/80 leading-relaxed">
                3rd Floor, Gate 25<br />
                Aljazeera Stadium<br />
                Abu Dhabi, UAE
              </p>
            </div>
          </div>
          
          <div className="pt-8 border-t border-white/10 text-center text-white/60 text-sm">
            <p>© 2025 City Plaza Real Estate. RERA License #1189. All rights reserved.</p>
          </div>
        </div>
      </footer>
      
      {/* Floating WhatsApp */}
      <a
        href="https://wa.me/971529009133"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-8 right-8 w-16 h-16 bg-green-500 hover:bg-green-600 rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-all z-50 animate-pulse"
      >
        <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
        </svg>
      </a>
      
    </main>
  );
}
