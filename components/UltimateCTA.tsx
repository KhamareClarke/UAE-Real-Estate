'use client';

import { useState } from 'react';
import Image from 'next/image';

export default function UltimateCTA() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
      setTimeout(() => {
        window.location.href = `https://wa.me/971529009133?text=Hi! I just submitted my email (${email}) and I'm interested in UAE property investment.`;
      }, 1500);
    }
  };

  return (
    <section className="py-20 bg-gradient-to-br from-navy via-navy-800 to-accent relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC40Ij48cGF0aCBkPSJNMzYgMzRjMC0yLjIxLTEuNzktNC00LTRzLTQgMS43OS00IDQgMS43OSA0IDQgNCA0LTEuNzkgNC00em0wLTEwYzAtMi4yMS0xLjc5LTQtNC00cy00IDEuNzktNCA0IDEuNzkgNCA0IDQgNC0xLjc5IDQtNHptMC0xMGMwLTIuMjEtMS43OS00LTQtNHMtNCAxLjc5LTQgNCAxLjc5IDQgNCA0IDQtMS43OSA0LTR6Ii8+PC9nPjwvZz48L3N2Zz4=')] animate-pulse"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-5xl mx-auto">
          
          {!submitted ? (
            <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
              <div className="grid lg:grid-cols-2">
                
                {/* Left Side - Value Proposition */}
                <div className="bg-gradient-to-br from-accent to-accent-dark p-10 text-white relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-32 -mt-32"></div>
                  <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/10 rounded-full -ml-24 -mb-24"></div>
                  
                  <div className="relative z-10">
                    {/* Live Indicator */}
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-white font-semibold text-sm mb-6 animate-pulse">
                      <span className="relative flex h-3 w-3">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-3 w-3 bg-green-400"></span>
                      </span>
                      3 Experts Online Now
                    </div>

                    <h2 className="text-4xl sm:text-5xl font-bold mb-4 leading-tight">
                      Receive Your Exclusive Investment Portfolio
                    </h2>
                    
                    <p className="text-xl text-white/90 mb-8">
                      Curated opportunities from our private deal flow — complimentary for qualified investors
                    </p>

                    {/* Benefits */}
                    <div className="space-y-4 mb-8">
                      {[
                        { icon: '💎', text: 'Premium properties aligned with your investment thesis' },
                        { icon: '📊', text: 'Comprehensive financial analysis & ROI modeling' },
                        { icon: '🛡️', text: 'Golden Visa pathway assessment & structuring' },
                        { icon: '🔒', text: 'Off-market opportunities from our exclusive network' },
                        { icon: '⚡', text: 'Senior advisor response within 2 hours' }
                      ].map((benefit, i) => (
                        <div key={i} className="flex items-start gap-3">
                          <span className="text-2xl flex-shrink-0">{benefit.icon}</span>
                          <span className="text-white/90 font-medium">{benefit.text}</span>
                        </div>
                      ))}
                    </div>

                    {/* Social Proof */}
                    <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-4">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="flex -space-x-2">
                          {[1, 2, 3, 4, 5].map((num) => (
                            <div key={num} className="relative w-10 h-10 rounded-full border-2 border-white overflow-hidden">
                              <Image
                                src={`/avatars/person${num}.jpg`}
                                alt={`UAE property investor ${num} - City Plaza Real Estate client`}
                                width={40}
                                height={40}
                                quality={95}
                                className="object-cover"
                              />
                            </div>
                          ))}
                        </div>
                        <div>
                          <div className="flex items-center gap-1">
                            {[1, 2, 3, 4, 5].map((star) => (
                              <svg key={star} className="w-4 h-4 text-yellow-300 fill-current" viewBox="0 0 20 20">
                                <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                              </svg>
                            ))}
                          </div>
                          <p className="text-sm text-white/90 font-semibold">4.9/5 from 500+ global investors</p>
                        </div>
                      </div>
                      <p className="text-sm text-white/80">
                        <strong>AED 2B+</strong> in transactions facilitated • <strong>98% client retention</strong>
                      </p>
                    </div>
                  </div>
                </div>

                {/* Right Side - Action Form */}
                <div className="p-10">
                  <div className="mb-6">
                    <h3 className="text-3xl font-bold text-navy mb-2">
                      Request Your Portfolio
                    </h3>
                    <p className="text-gray-600">
                      Connect with our investment team for tailored opportunities
                    </p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-4 mb-6">
                    <div>
                      <input
                        type="email"
                        placeholder="Enter your email address"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        className="w-full px-6 py-4 border-2 border-gray-300 rounded-xl focus:border-accent focus:outline-none text-navy font-medium text-lg"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full bg-gradient-to-r from-accent to-accent-dark hover:from-accent-dark hover:to-accent text-white font-bold py-5 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 text-lg relative overflow-hidden group"
                    >
                      <span className="relative z-10 flex items-center justify-center gap-2">
                        <span className="text-xl">📊</span>
                        <span>Access Investment Portfolio</span>
                        <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                        </svg>
                      </span>
                      <div className="absolute inset-0 bg-white/20 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
                    </button>
                  </form>

                  <div className="text-center mb-6">
                    <p className="text-sm text-gray-500 mb-4">Or contact us directly:</p>
                    
                    <div className="grid grid-cols-2 gap-3">
                      <a
                        href="https://wa.me/971529009133"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex flex-col items-center gap-2 p-4 border-2 border-gray-200 hover:border-green-500 hover:bg-green-50 rounded-xl transition-all group"
                      >
                        <svg className="w-8 h-8 text-green-500" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                        </svg>
                        <span className="text-sm font-bold text-gray-700 group-hover:text-green-600">WhatsApp</span>
                      </a>

                      <a
                        href="tel:+971529009133"
                        className="flex flex-col items-center gap-2 p-4 border-2 border-gray-200 hover:border-accent hover:bg-accent/5 rounded-xl transition-all group"
                      >
                        <svg className="w-8 h-8 text-accent" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                        </svg>
                        <span className="text-sm font-bold text-gray-700 group-hover:text-accent">Call Now</span>
                      </a>
                    </div>
                  </div>

                  {/* Trust Badges */}
                  <div className="flex items-center justify-center gap-6 text-sm text-gray-600 border-t border-gray-200 pt-6">
                    <div className="flex items-center gap-2">
                      <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="font-semibold">Senior Advisors</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="font-semibold">Confidential</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="font-semibold">Complimentary</span>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          ) : (
            // Success State
            <div className="bg-white rounded-3xl shadow-2xl p-12 text-center">
              <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6 animate-bounce">
                <svg className="w-12 h-12 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-4xl font-bold text-navy mb-4">
                Thank You! We're Preparing Your Portfolio 🎉
              </h3>
              <p className="text-xl text-gray-600 mb-6">
                Our investment team is curating your personalized opportunities now.
              </p>
              <div className="bg-accent/10 rounded-2xl p-6 mb-6 max-w-2xl mx-auto">
                <p className="text-lg text-gray-700 mb-4">
                  <strong className="text-accent">What happens next:</strong>
                </p>
                <div className="text-left space-y-3">
                  <div className="flex items-start gap-3">
                    <span className="text-2xl">📧</span>
                    <p className="text-gray-700">Your portfolio will be sent to <strong className="text-accent">{email}</strong></p>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-2xl">📱</span>
                    <p className="text-gray-700">A senior advisor will contact you within 2 hours</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-2xl">💼</span>
                    <p className="text-gray-700">Receive comprehensive analysis and investment structuring options</p>
                  </div>
                </div>
              </div>
              <p className="text-gray-600 mb-6">
                Redirecting you to WhatsApp for instant support...
              </p>
              <div className="animate-spin w-8 h-8 border-4 border-accent border-t-transparent rounded-full mx-auto"></div>
            </div>
          )}

        </div>
      </div>
    </section>
  );
}
