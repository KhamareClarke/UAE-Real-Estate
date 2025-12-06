'use client';

import { useState, useEffect } from 'react';

export default function StickyMobileCTA() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToForm = () => {
    const formElement = document.getElementById('quick-form');
    if (formElement) {
      formElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 lg:hidden animate-slide-up">
      <div className="bg-gradient-to-r from-accent to-gold shadow-2xl">
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center justify-between gap-3">
            <div className="flex-1">
              <p className="text-white font-bold text-sm">Ready to Invest?</p>
              <p className="text-white/90 text-xs">Get exclusive property deals</p>
            </div>
            <button
              onClick={scrollToForm}
              className="bg-white hover:bg-gray-100 text-accent font-bold py-3 px-6 rounded-xl transition-all duration-300 shadow-lg hover:scale-105 flex items-center gap-2 whitespace-nowrap"
            >
              Book Free Call
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
