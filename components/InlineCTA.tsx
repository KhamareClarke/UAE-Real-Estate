'use client';

export default function InlineCTA({ variant = 'default' }: { variant?: 'default' | 'urgent' | 'bonus' }) {
  const scrollToForm = () => {
    const formElement = document.getElementById('quick-form');
    if (formElement) {
      formElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  if (variant === 'urgent') {
    return (
      <div className="my-8 bg-gradient-to-r from-red-600 via-orange-600 to-gold rounded-2xl p-8 text-center shadow-2xl border-4 border-white">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-md rounded-full text-white font-bold text-sm mb-4">
          <span className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-white"></span>
          </span>
          ⚡ LIMITED TIME OFFER
        </div>
        <h3 className="text-3xl sm:text-4xl font-bold text-white mb-3">
          Get Your FREE Property Investment Package!
        </h3>
        <p className="text-xl text-white/90 mb-6">
          Off-market properties + Golden Visa guide + Expert consultation
        </p>
        <button
          onClick={scrollToForm}
          className="bg-white hover:bg-gray-100 text-accent font-bold py-5 px-10 rounded-xl transition-all duration-300 shadow-lg hover:scale-105 text-lg inline-flex items-center gap-3"
        >
          🎯 YES! GET MY FREE PACKAGE
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M13 7l5 5m0 0l-5 5m5-5H6" />
          </svg>
        </button>
        <p className="text-white/80 text-sm mt-4">
          ⚡ Instant access • No credit card required • 100% Free
        </p>
      </div>
    );
  }

  if (variant === 'bonus') {
    return (
      <div className="my-8 bg-gradient-to-br from-accent/10 to-gold/10 rounded-2xl p-8 border-2 border-accent/30">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-3">
              <span className="text-3xl">🎁</span>
              <h3 className="text-2xl font-bold text-navy">
                Ready to Start Your Investment Journey?
              </h3>
            </div>
            <p className="text-gray-700 text-lg">
              Get instant access to exclusive off-market properties + FREE Golden Visa consultation
            </p>
          </div>
          <button
            onClick={scrollToForm}
            className="bg-gradient-to-r from-accent to-gold hover:from-accent-dark hover:to-gold-dark text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 shadow-lg hover:scale-105 whitespace-nowrap flex items-center gap-2"
          >
            GET STARTED NOW →
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="my-8 text-center bg-white rounded-2xl p-8 shadow-lg border-2 border-gray-200">
      <h3 className="text-2xl font-bold text-navy mb-3">
        Want to See Properties That Match Your Goals?
      </h3>
      <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
        Fill out the quick form and get personalized property recommendations within 24 hours
      </p>
      <button
        onClick={scrollToForm}
        className="bg-gradient-to-r from-accent to-gold hover:from-accent-dark hover:to-gold-dark text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 shadow-lg hover:scale-105 inline-flex items-center gap-2"
      >
        Show Me Properties Now
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
        </svg>
      </button>
    </div>
  );
}
