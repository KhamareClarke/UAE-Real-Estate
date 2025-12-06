'use client';

import { useState } from 'react';
import Image from 'next/image';

export default function UltimateLeadMagnet() {
  const [formData, setFormData] = useState({ name: '', whatsapp: '', email: '' });
  const [showSuccess, setShowSuccess] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) newErrors.name = 'Name required';
    if (!formData.whatsapp.trim()) newErrors.whatsapp = 'WhatsApp required';
    if (!formData.email.trim()) newErrors.email = 'Email required';
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Invalid email';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      setShowSuccess(true);
      setTimeout(() => {
        setShowSuccess(false);
        setFormData({ name: '', whatsapp: '', email: '' });
      }, 5000);
    }
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-gradient-to-r from-accent via-orange-600 to-gold shadow-2xl border-t-4 border-white animate-slide-up">
      <div className="container mx-auto px-4 py-4">
        {!showSuccess ? (
          <div className="flex flex-col lg:flex-row items-center justify-between gap-4">
            {/* Left - Compelling Copy */}
            <div className="flex-1 text-white">
              <div className="flex items-center gap-3 mb-2">
                <div className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-white"></span>
                </div>
                <p className="text-xl font-bold">🎯 Get Exclusive Off-Market Properties + FREE Consultation!</p>
              </div>
              <p className="text-sm text-white/90">
                Access properties before they hit the market + Golden Visa eligibility check + ROI calculator
              </p>
            </div>

            {/* Right - Quick Form */}
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-2 w-full lg:w-auto">
              <input
                type="text"
                placeholder="Your Name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="px-4 py-3 rounded-lg border-2 border-white/30 bg-white/10 backdrop-blur-md text-white placeholder-white/70 focus:outline-none focus:border-white font-medium"
              />
              <input
                type="tel"
                placeholder="WhatsApp"
                value={formData.whatsapp}
                onChange={(e) => setFormData({ ...formData, whatsapp: e.target.value })}
                className="px-4 py-3 rounded-lg border-2 border-white/30 bg-white/10 backdrop-blur-md text-white placeholder-white/70 focus:outline-none focus:border-white font-medium"
              />
              <input
                type="email"
                placeholder="Email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="px-4 py-3 rounded-lg border-2 border-white/30 bg-white/10 backdrop-blur-md text-white placeholder-white/70 focus:outline-none focus:border-white font-medium"
              />
              <button
                type="submit"
                className="bg-white hover:bg-gray-100 text-accent font-bold py-3 px-8 rounded-lg transition-all duration-300 shadow-lg hover:scale-105 whitespace-nowrap flex items-center justify-center gap-2"
              >
                GET MY FREE GUIDE →
              </button>
            </form>
          </div>
        ) : (
          <div className="text-center py-4 text-white">
            <div className="flex items-center justify-center gap-3">
              <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <p className="text-xl font-bold">🎉 SUCCESS! Check your email for instant access to your FREE investment guide!</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
