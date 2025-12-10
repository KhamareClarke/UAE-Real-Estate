'use client';

import { useState, useEffect } from 'react';

export default function ExitIntentPopup() {
  const [isVisible, setIsVisible] = useState(false);
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    let exitIntentTriggered = false;

    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 0 && !exitIntentTriggered && !isSubmitted) {
        exitIntentTriggered = true;
        setIsVisible(true);
      }
    };

    // Delay before activating exit intent
    const timer = setTimeout(() => {
      document.addEventListener('mouseleave', handleMouseLeave);
    }, 5000);

    return () => {
      clearTimeout(timer);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [isSubmitted]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return;

    console.log('Exit intent email captured:', email);
    setIsSubmitted(true);
    
    setTimeout(() => {
      setIsVisible(false);
    }, 3000);
  };

  const handleClose = () => {
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 animate-fade-in">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={handleClose}
      ></div>

      {/* Popup */}
      <div className="relative bg-white rounded-2xl shadow-2xl max-w-lg w-full p-8 animate-slide-up">
        {/* Close Button */}
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {!isSubmitted ? (
          <>
            {/* Content */}
            <div className="text-center mb-6">
              <div className="text-6xl mb-4">⏰</div>
              <h3 className="text-3xl font-bold text-navy mb-3">
                Wait! Don't Miss Out
              </h3>
              <p className="text-lg text-gray-700 mb-2">
                Before you go, grab your <span className="font-bold text-accent">FREE</span> UAE Property Investment Guide
              </p>
              <p className="text-sm text-gray-600">
                Discover the top 10 investment opportunities in Dubai & Abu Dhabi for 2024
              </p>
            </div>

            {/* Benefits */}
            <div className="bg-gradient-to-br from-accent-50 to-gold-50 rounded-xl p-4 mb-6">
              <p className="font-semibold text-navy mb-3 text-sm">📥 Instant Download Includes:</p>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Golden Visa property requirements & checklist</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>ROI calculator & market analysis tool</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Exclusive pre-launch project previews</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Step-by-step buying process guide</span>
                </li>
              </ul>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address"
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:ring-2 focus:ring-accent focus:border-accent outline-none transition"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-accent to-gold hover:from-accent-dark hover:to-gold-dark text-white font-bold py-4 px-6 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
              >
                📥 Send Me The FREE Guide
              </button>
              <p className="text-xs text-center text-gray-500">
                No spam. Unsubscribe anytime. Your data is secure.
              </p>
            </form>

            {/* Social Proof */}
            <div className="mt-6 pt-6 border-t border-gray-200 text-center">
              <div className="flex items-center justify-center gap-2 text-sm text-gray-600">
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <div key={i} className="w-8 h-8 rounded-full bg-gradient-to-br from-accent to-gold border-2 border-white"></div>
                  ))}
                </div>
                <span className="font-semibold">2,847 investors</span> downloaded this guide this month
              </div>
            </div>
          </>
        ) : (
          <div className="text-center py-8">
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-10 h-10 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-navy mb-2">Check Your Email! 📧</h3>
            <p className="text-gray-600">
              Your FREE investment guide is on its way. Check your inbox in the next 2 minutes.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
