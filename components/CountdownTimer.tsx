'use client';

import { useState, useEffect } from 'react';

export default function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState({
    hours: 23,
    minutes: 59,
    seconds: 59,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { hours: prev.hours, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { hours: prev.hours - 1, minutes: 59, seconds: 59 };
        } else {
          return { hours: 23, minutes: 59, seconds: 59 };
        }
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="bg-gradient-to-r from-accent to-gold text-white py-3 px-4 text-center">
      <div className="container mx-auto flex flex-col sm:flex-row items-center justify-center gap-3">
        <span className="font-bold text-sm sm:text-base flex items-center gap-2">
          <svg className="w-5 h-5 animate-pulse" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
          </svg>
          ⚡ LIMITED OFFER: Pre-Launch Units Available
        </span>
        <div className="flex items-center gap-2">
          <span className="text-sm">Ends in:</span>
          <div className="flex gap-1">
            <div className="bg-white/20 backdrop-blur-sm rounded px-2 py-1 min-w-[2.5rem] text-center">
              <span className="font-bold text-lg">{String(timeLeft.hours).padStart(2, '0')}</span>
            </div>
            <span className="font-bold">:</span>
            <div className="bg-white/20 backdrop-blur-sm rounded px-2 py-1 min-w-[2.5rem] text-center">
              <span className="font-bold text-lg">{String(timeLeft.minutes).padStart(2, '0')}</span>
            </div>
            <span className="font-bold">:</span>
            <div className="bg-white/20 backdrop-blur-sm rounded px-2 py-1 min-w-[2.5rem] text-center">
              <span className="font-bold text-lg">{String(timeLeft.seconds).padStart(2, '0')}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
