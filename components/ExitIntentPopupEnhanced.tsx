'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

export default function ExitIntentPopupEnhanced() {
  const [isVisible, setIsVisible] = useState(false);
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 0 && !sessionStorage.getItem('exitIntentShown')) {
        setIsVisible(true);
        sessionStorage.setItem('exitIntentShown', 'true');
      }
    };

    document.addEventListener('mouseleave', handleMouseLeave);
    return () => document.removeEventListener('mouseleave', handleMouseLeave);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
      setTimeout(() => setIsVisible(false), 3000);
    }
  };

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-3 sm:p-4 animate-fade-in overflow-y-auto">
      <div className="bg-white rounded-2xl sm:rounded-3xl shadow-2xl max-w-2xl w-full p-4 sm:p-6 lg:p-8 relative animate-slide-up my-4">
        {/* Close Button */}
        <button
          onClick={() => setIsVisible(false)}
          className="absolute top-2 right-2 sm:top-4 sm:right-4 text-gray-400 hover:text-gray-600 transition-colors z-10"
        >
          <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {!submitted ? (
          <>
            {/* Icon */}
            <div className="text-center mb-4 sm:mb-6">
              <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-accent to-gold rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                <svg className="w-8 h-8 sm:w-10 sm:h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-navy mb-2 sm:mb-3">
                Wait! Before You Go...
              </h3>
              <p className="text-base sm:text-lg lg:text-xl text-gray-700 mb-2">
                Get a <span className="text-accent font-bold">FREE</span> Expert Property Consultation
              </p>
              <p className="text-sm sm:text-base text-gray-600">
                Schedule your personalized consultation worth AED 500 — absolutely free
              </p>
            </div>

            {/* Benefits */}
            <div className="bg-gradient-to-r from-accent/5 to-gold/5 rounded-xl sm:rounded-2xl p-3 sm:p-4 lg:p-6 mb-4 sm:mb-6">
              <div className="space-y-2 sm:space-y-3">
                {[
                  'Personalized property recommendations for your budget',
                  'Golden Visa eligibility assessment',
                  'ROI projections for shortlisted properties',
                  'Exclusive access to off-market deals',
                  'No obligation — just expert guidance'
                ].map((benefit, i) => (
                  <div key={i} className="flex items-start gap-2 sm:gap-3">
                    <svg className="w-5 h-5 sm:w-6 sm:h-6 text-green-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-sm sm:text-base text-gray-700 font-medium">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-4">
              <input
                type="email"
                placeholder="Enter your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full px-4 py-3 sm:px-6 sm:py-4 border-2 border-gray-300 rounded-xl focus:border-accent focus:outline-none text-navy font-medium text-base sm:text-lg"
              />
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-accent to-gold hover:from-accent-dark hover:to-gold-dark text-white font-bold py-4 px-6 sm:py-5 sm:px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 text-base sm:text-lg"
              >
                Schedule My Free Consultation →
              </button>
            </form>

            {/* Trust Signals */}
            <div className="mt-4 sm:mt-6 flex flex-wrap items-center justify-center gap-3 sm:gap-4 text-xs sm:text-sm text-gray-600">
              <div className="flex items-center gap-1.5 sm:gap-2">
                <svg className="w-4 h-4 sm:w-5 sm:h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>100% Secure</span>
              </div>
              <div className="flex items-center gap-1.5 sm:gap-2">
                <svg className="w-4 h-4 sm:w-5 sm:h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>No Spam Ever</span>
              </div>
              <div className="flex items-center gap-1.5 sm:gap-2">
                <svg className="w-4 h-4 sm:w-5 sm:h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Instant Access</span>
              </div>
            </div>

            {/* Social Proof with Real Images */}
            <div className="mt-4 sm:mt-6 text-center">
              <div className="flex justify-center -space-x-2 sm:-space-x-3 mb-2 sm:mb-3">
                {[1, 2, 3, 4, 5].map((num) => (
                  <div key={num} className="relative w-8 h-8 sm:w-10 sm:h-10 rounded-full border-2 sm:border-3 border-white overflow-hidden shadow-md">
                    <Image
                      src={`/avatars/person${num}.jpg`}
                      alt={`UAE Golden Visa property investor ${num}`}
                      width={40}
                      height={40}
                      quality={95}
                      className="object-cover w-full h-full"
                    />
                  </div>
                ))}
              </div>
              <p className="text-xs sm:text-sm text-gray-600">
                Join <span className="font-bold text-accent">500+ investors</span> who booked their consultation
              </p>
            </div>
          </>
        ) : (
          <div className="text-center py-6 sm:py-8">
            <div className="w-16 h-16 sm:w-20 sm:h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
              <svg className="w-8 h-8 sm:w-10 sm:h-10 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-navy mb-2">Consultation Booked!</h3>
            <p className="text-sm sm:text-base text-gray-600 mb-4">
              We'll contact you at <span className="font-semibold text-accent">{email}</span> within 2 hours to schedule your free consultation.
            </p>
            <p className="text-xs sm:text-sm text-gray-500">
              Check your email for confirmation details
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
