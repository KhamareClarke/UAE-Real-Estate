'use client';

import { useState, useEffect } from 'react';

export default function ScarcityBanner() {
  const [timeRemaining, setTimeRemaining] = useState({
    hours: 23,
    minutes: 59,
    seconds: 59
  });
  
  const [spotsRemaining, setSpotsRemaining] = useState(3);
  
  // Timer countdown effect
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeRemaining(prev => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { hours: prev.hours - 1, minutes: 59, seconds: 59 };
        }
        return { hours: 23, minutes: 59, seconds: 59 }; // Reset to 24 hours
      });
    }, 1000);
    
    return () => clearInterval(timer);
  }, []);
  
  // Format time with leading zeros
  const formatTime = (value: number) => value.toString().padStart(2, '0');
  
  return (
    <div className="fixed top-0 left-0 right-0 z-40 animate-slide-down">
      <div className="bg-gradient-to-r from-red-600 to-red-700 text-white py-3 px-4 shadow-xl border-b-2 border-white/20">
        <div className="container mx-auto flex flex-col sm:flex-row items-center justify-between">
          <div className="flex items-center gap-3 mb-3 sm:mb-0">
            <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center animate-pulse">
              <svg className="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
              </svg>
            </div>
            <div>
              <p className="font-bold text-xl">LIMITED TIME OFFER ENDS IN:</p>
              <div className="flex items-center gap-1">
                <span className="bg-white/20 px-3 py-2 rounded-lg font-mono font-bold text-xl">{formatTime(timeRemaining.hours)}</span>
                <span className="text-xl font-bold">:</span>
                <span className="bg-white/20 px-3 py-2 rounded-lg font-mono font-bold text-xl">{formatTime(timeRemaining.minutes)}</span>
                <span className="text-xl font-bold">:</span>
                <span className="bg-white/20 px-3 py-2 rounded-lg font-mono font-bold text-xl">{formatTime(timeRemaining.seconds)}</span>
              </div>
            </div>
          </div>
          
          <div className="flex items-center gap-3">
            <div className="bg-yellow-500 text-navy px-4 py-2 rounded-lg animate-bounce shadow-lg">
              <span className="font-bold text-lg">ONLY {spotsRemaining} SPOTS LEFT TODAY!</span>
            </div>
            <a 
              href="#quick-form" 
              className="bg-white text-red-600 hover:bg-gray-100 font-bold py-3 px-8 rounded-lg transition-transform hover:scale-105 animate-pulse shadow-lg flex items-center gap-2"
            >
              <span>CLAIM NOW</span>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
