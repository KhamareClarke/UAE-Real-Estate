'use client';

import { useState } from 'react';

export default function ComparisonGuideDownload() {
  const [email, setEmail] = useState('');
  const [downloaded, setDownloaded] = useState(false);

  const handleDownload = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setDownloaded(true);
      // Trigger download
      setTimeout(() => {
        setDownloaded(false);
        setEmail('');
      }, 5000);
    }
  };

  return (
    <section className="py-16 bg-gradient-to-r from-accent to-gold">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          
          {!downloaded ? (
            <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                
                {/* Left - Guide Preview */}
                <div>
                  <div className="bg-gradient-to-br from-navy to-accent/80 rounded-2xl p-8 text-white shadow-xl">
                    <div className="text-5xl mb-4">📊</div>
                    <h3 className="text-2xl font-bold mb-4">
                      UAE Investment Comparison Guide
                    </h3>
                    <ul className="space-y-3 text-sm">
                      {[
                        'Dubai vs Abu Dhabi ROI comparison',
                        'Off-plan vs Ready properties',
                        'Freehold vs Leasehold areas',
                        'Golden Visa eligibility by property type',
                        'Investment timeline & costs breakdown',
                        'Tax implications & benefits'
                      ].map((item, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <svg className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="mt-6 pt-6 border-t border-white/20">
                      <p className="text-sm text-white/80">
                        <strong>24-page PDF guide</strong> • Updated for 2025
                      </p>
                    </div>
                  </div>
                </div>

                {/* Right - Download Form */}
                <div>
                  <div className="mb-6">
                    <h3 className="text-3xl font-bold text-navy mb-3">
                      Download FREE Comparison Guide
                    </h3>
                    <p className="text-gray-600">
                      Make informed investment decisions with our comprehensive comparison guide
                    </p>
                  </div>

                  <form onSubmit={handleDownload} className="space-y-4">
                    <div>
                      <input
                        type="email"
                        placeholder="Enter your email address"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        className="w-full px-6 py-4 border-2 border-gray-300 rounded-xl focus:border-accent focus:outline-none text-navy font-medium"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full bg-gradient-to-r from-accent to-gold hover:from-accent-dark hover:to-gold-dark text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 flex items-center justify-center gap-2"
                    >
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                      Download FREE Guide (PDF)
                    </button>

                    <div className="flex items-center justify-center gap-4 text-sm text-gray-600">
                      <div className="flex items-center gap-1">
                        <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span>Instant download</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span>No spam</span>
                      </div>
                    </div>
                  </form>

                  <div className="mt-6 text-center">
                    <p className="text-sm text-gray-500">
                      <span className="font-bold text-accent">2,847 investors</span> downloaded this guide
                    </p>
                  </div>
                </div>

              </div>
            </div>
          ) : (
            // Success State
            <div className="bg-white rounded-3xl shadow-2xl p-12 text-center">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-3xl font-bold text-navy mb-3">
                Check Your Email!
              </h3>
              <p className="text-lg text-gray-600 mb-2">
                Your comparison guide is on its way to <span className="font-semibold text-accent">{email}</span>
              </p>
              <p className="text-sm text-gray-500">
                (Check your spam folder if you don't see it in a few minutes)
              </p>
              <div className="mt-8 p-6 bg-accent/5 rounded-xl">
                <p className="text-sm text-gray-700">
                  💡 <strong>Pro Tip:</strong> Schedule a free consultation to discuss which investment option is best for your goals
                </p>
              </div>
            </div>
          )}

        </div>
      </div>
    </section>
  );
}
