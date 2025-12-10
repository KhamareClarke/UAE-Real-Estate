'use client';

import { useState } from 'react';

export default function ROICalculator() {
  const [investment, setInvestment] = useState(2000000);
  const [propertyType, setPropertyType] = useState('apartment');
  
  const calculateROI = () => {
    const rates: Record<string, number> = {
      apartment: 0.08,
      villa: 0.10,
      offplan: 0.12
    };
    
    const roi = rates[propertyType];
    const annualReturn = investment * roi;
    const monthlyReturn = annualReturn / 12;
    const goldenVisaEligible = investment >= 2000000;
    
    return { roi, annualReturn, monthlyReturn, goldenVisaEligible };
  };
  
  const results = calculateROI();

  return (
    <section className="py-16 bg-white relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, #F97316 1px, transparent 0)',
          backgroundSize: '40px 40px'
        }}></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto">
          
          <div className="text-center mb-8 animate-fade-in">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-red-600/10 rounded-full text-red-600 font-semibold text-sm mb-4">
              <span className="animate-pulse">⚠️</span>
              <span>PRICES INCREASING NEXT WEEK</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-navy mb-3">
              Calculate Your Investment Returns
            </h2>
            <p className="text-lg text-gray-600">
              See what your UAE property investment could earn you
            </p>
          </div>

          <div className="bg-gradient-to-br from-gray-50 to-white rounded-3xl shadow-xl border-2 border-gray-200 p-8 animate-slide-up">
            
            {/* Input Section */}
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              
              {/* Investment Amount */}
              <div>
                <label className="block text-sm font-bold text-navy mb-3">
                  Investment Amount (AED)
                </label>
                <input
                  type="range"
                  min="500000"
                  max="10000000"
                  step="100000"
                  value={investment}
                  onChange={(e) => setInvestment(Number(e.target.value))}
                  className="w-full h-3 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-accent"
                />
                <div className="mt-3 text-center">
                  <span className="text-3xl font-bold text-accent">
                    AED {(investment / 1000000).toFixed(1)}M
                  </span>
                </div>
              </div>

              {/* Property Type */}
              <div>
                <label className="block text-sm font-bold text-navy mb-3">
                  Property Type
                </label>
                <div className="space-y-2">
                  {[
                    { value: 'apartment', label: 'Apartment', roi: '8%' },
                    { value: 'villa', label: 'Villa', roi: '10%' },
                    { value: 'offplan', label: 'Off-Plan', roi: '12%' }
                  ].map((type) => (
                    <button
                      key={type.value}
                      onClick={() => setPropertyType(type.value)}
                      className={`w-full p-4 rounded-xl border-2 transition-all text-left ${
                        propertyType === type.value
                          ? 'border-accent bg-accent/5 font-bold'
                          : 'border-gray-200 hover:border-accent/50'
                      }`}
                    >
                      <div className="flex justify-between items-center">
                        <span className="text-navy">{type.label}</span>
                        <span className="text-accent font-bold">{type.roi} ROI</span>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Results Section */}
            <div className="bg-gradient-to-r from-accent to-accent-dark rounded-2xl p-8 text-white relative overflow-hidden">
              {/* Animated sparkles */}
              <div className="absolute top-0 right-0 w-20 h-20 bg-white/30 rounded-full -mr-10 -mt-10 animate-pulse"></div>
              <div className="absolute bottom-0 left-0 w-16 h-16 bg-white/20 rounded-full -ml-8 -mb-8 animate-pulse-slow"></div>
              
              <h3 className="text-2xl font-bold mb-6 text-center">Your Projected Returns</h3>
              
              <div className="grid sm:grid-cols-3 gap-6 mb-6">
                <div className="text-center">
                  <div className="text-4xl font-bold mb-2">
                    {(results.roi * 100).toFixed(1)}%
                  </div>
                  <div className="text-white/80 text-sm">Annual ROI</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold mb-2">
                    AED {(results.annualReturn / 1000).toFixed(0)}K
                  </div>
                  <div className="text-white/80 text-sm">Annual Return</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold mb-2">
                    AED {(results.monthlyReturn / 1000).toFixed(1)}K
                  </div>
                  <div className="text-white/80 text-sm">Monthly Income</div>
                </div>
              </div>

              {/* Golden Visa Badge */}
              {results.goldenVisaEligible && (
                <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4 flex items-center justify-center gap-3">
                  <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="font-bold text-lg">✅ Golden Visa Eligible!</span>
                </div>
              )}
            </div>

            {/* CTA */}
            <div className="mt-6 text-center">
              <div className="mb-4 bg-red-50 border border-red-200 rounded-lg p-3 animate-pulse-slow">
                <p className="text-red-600 font-semibold flex items-center gap-2">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                  </svg>
                  Only 7 Golden Visa eligible properties left at this price!
                </p>
              </div>
              
              <a
                href="#quick-form"
                className="inline-flex items-center gap-2 bg-navy hover:bg-navy/90 text-white font-bold py-4 px-8 rounded-xl transition-all shadow-lg hover:scale-105 animate-bounce-small relative overflow-hidden group"
              >
                <span className="relative z-10 flex items-center gap-2">
                  <span>Get Personalized Investment Plan</span>
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </span>
                <div className="absolute inset-0 bg-white/10 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
              </a>
              <p className="mt-3 text-sm text-gray-600">
                <span className="font-bold text-red-600">Act fast!</span> • Free consultation • Response within 2 hours
              </p>
              
              <div className="mt-4 flex items-center justify-center gap-2 text-sm text-gray-500">
                <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>23 investors calculated returns today</span>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
