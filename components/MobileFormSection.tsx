'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

export default function MobileFormSection() {
  const [formData, setFormData] = useState({ 
    name: '', 
    whatsapp: '', 
    email: '', 
    investmentRange: '',
    preferredProject: ''
  });
  const [showSuccess, setShowSuccess] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) newErrors.name = 'Full name required';
    if (!formData.whatsapp.trim()) newErrors.whatsapp = 'WhatsApp required';
    if (!formData.email.trim()) newErrors.email = 'Email required';
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Invalid email format';
    if (!formData.investmentRange) newErrors.investmentRange = 'Investment capacity required';
    if (!formData.preferredProject) newErrors.preferredProject = 'Property interest required';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      setShowSuccess(true);
      setTimeout(() => setShowSuccess(false), 5000);
      setFormData({ name: '', whatsapp: '', email: '', investmentRange: '', preferredProject: '' });
    }
  };

  return (
    <section className="lg:hidden py-12 px-4 pb-24 bg-gradient-to-br from-navy-900 via-navy-800 to-black relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-navy-900/50 to-black/50" />
      <div className="absolute inset-0 bg-noise opacity-[0.03]" />
      
              <div className="relative z-10 max-w-lg mx-auto">
        <div className="bg-white/25 md:bg-white/10 backdrop-blur-xl border-2 md:border border-white/40 md:border-white/20 rounded-2xl shadow-2xl overflow-hidden">
          <div className="p-6">
            {!showSuccess ? (
              <>
                <div className="space-y-3 mb-6 text-center">
                  <h2 className="text-2xl md:text-2xl font-black text-white leading-tight tracking-tight" style={{ textShadow: '0 2px 8px rgba(0,0,0,0.8)' }}>
                    Private Investment Review
                  </h2>
                  <p className="text-sm md:text-sm text-white font-semibold leading-relaxed" style={{ textShadow: '0 2px 6px rgba(0,0,0,0.8)' }}>
                    A confidential review designed to assess:
                  </p>
                  <div className="text-xs md:text-xs text-white font-bold flex items-center justify-center flex-wrap gap-x-2 gap-y-1 px-3 py-2 bg-white/15 md:bg-white/5 rounded-lg border-2 md:border border-white/30 md:border-white/10" style={{ textShadow: '0 1px 4px rgba(0,0,0,0.8)' }}>
                    <span className="text-primary-400 font-bold">•</span>
                    <span className="font-bold">Capital range</span>
                    <span className="text-primary-400 font-bold">•</span>
                    <span className="font-bold">Residency objectives</span>
                    <span className="text-primary-400 font-bold">•</span>
                    <span className="font-bold">Preferred jurisdiction</span>
                  </div>
                  <p className="text-sm md:text-sm text-white font-bold pt-1" style={{ textShadow: '0 2px 6px rgba(0,0,0,0.8)' }}>
                    Handled directly by a senior RERA-licensed advisor.
                  </p>
                  <p className="text-xs md:text-xs text-white/90 italic font-semibold" style={{ textShadow: '0 1px 4px rgba(0,0,0,0.8)' }}>
                    No obligation. No pressure.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <input
                      type="text"
                      placeholder="Full Name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className={`w-full px-4 py-3 border-2 md:border ${errors.name ? 'border-red-400' : 'border-white/50 md:border-white/20 focus:border-primary-500'} rounded-lg bg-white/25 md:bg-white/10 backdrop-blur-sm focus:outline-none text-white font-bold text-base md:text-sm placeholder-white/90 md:placeholder-white/50 transition-all min-h-[44px]`}
                    />
                    {errors.name && <p className="text-red-400 text-xs mt-1 font-semibold">{errors.name}</p>}
                  </div>

                  <div>
                    <input
                      type="email"
                      placeholder="Email Address"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className={`w-full px-4 py-3 border-2 md:border ${errors.email ? 'border-red-400' : 'border-white/50 md:border-white/20 focus:border-primary-500'} rounded-lg bg-white/25 md:bg-white/10 backdrop-blur-sm focus:outline-none text-white font-bold text-base md:text-sm placeholder-white/90 md:placeholder-white/50 transition-all min-h-[44px]`}
                    />
                    {errors.email && <p className="text-red-400 text-xs mt-1 font-semibold">{errors.email}</p>}
                  </div>

                  <div>
                    <input
                      type="tel"
                      placeholder="WhatsApp Number (with country code)"
                      value={formData.whatsapp}
                      onChange={(e) => setFormData({ ...formData, whatsapp: e.target.value })}
                      className={`w-full px-4 py-3 border-2 md:border ${errors.whatsapp ? 'border-red-400' : 'border-white/50 md:border-white/20 focus:border-primary-500'} rounded-lg bg-white/25 md:bg-white/10 backdrop-blur-sm focus:outline-none text-white font-bold text-base md:text-sm placeholder-white/90 md:placeholder-white/50 transition-all min-h-[44px]`}
                    />
                    {errors.whatsapp && <p className="text-red-400 text-xs mt-1 font-semibold">{errors.whatsapp}</p>}
                  </div>

                  <div>
                    <select
                      value={formData.investmentRange}
                      onChange={(e) => setFormData({ ...formData, investmentRange: e.target.value })}
                      className={`w-full px-4 py-3 border-2 md:border ${errors.investmentRange ? 'border-red-400' : 'border-white/50 md:border-white/20 focus:border-primary-500'} rounded-lg bg-white/25 md:bg-white/10 backdrop-blur-sm focus:outline-none text-white font-bold text-base md:text-sm transition-all min-h-[44px]`}
                    >
                      <option value="" className="bg-navy-900">Indicative Investment Range</option>
                      <option value="500k-1m" className="bg-navy-900">AED 500K - 1M</option>
                      <option value="1m-2m" className="bg-navy-900">AED 1M - 2M</option>
                      <option value="2m-5m" className="bg-navy-900">AED 2M - 5M</option>
                      <option value="5m+" className="bg-navy-900">AED 5M+</option>
                    </select>
                    {errors.investmentRange && <p className="text-red-400 text-xs mt-1 font-semibold">{errors.investmentRange}</p>}
                  </div>

                  <div>
                    <select
                      value={formData.preferredProject}
                      onChange={(e) => setFormData({ ...formData, preferredProject: e.target.value })}
                      className={`w-full px-4 py-3 border-2 md:border ${errors.preferredProject ? 'border-red-400' : 'border-white/50 md:border-white/20 focus:border-primary-500'} rounded-lg bg-white/25 md:bg-white/10 backdrop-blur-sm focus:outline-none text-white font-bold text-base md:text-sm transition-all min-h-[44px]`}
                    >
                      <option value="" className="bg-navy-900">Jurisdiction Preference (Abu Dhabi • Dubai • Both)</option>
                      <option value="abu-dhabi" className="bg-navy-900">Abu Dhabi</option>
                      <option value="dubai" className="bg-navy-900">Dubai</option>
                      <option value="both" className="bg-navy-900">Both</option>
                    </select>
                    {errors.preferredProject && <p className="text-red-400 text-xs mt-1 font-semibold">{errors.preferredProject}</p>}
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-primary-500 via-primary-600 to-primary-700 hover:from-primary-600 hover:via-primary-700 hover:to-primary-800 text-white font-bold tracking-wide text-base py-4 rounded-xl transition-all duration-300 flex items-center justify-center gap-2 shadow-xl shadow-primary-500/30"
                  >
                    <span>Request Private Review</span>
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </button>
                  
                  <p className="text-xs text-white/90 md:text-white/60 text-center font-semibold" style={{ textShadow: '0 1px 4px rgba(0,0,0,0.8)' }}>
                    Private inquiry • Fully confidential
                  </p>
                </form>

                {/* Trust Badges */}
                <div className="mt-5 pt-4 border-t border-white/10">
                  <div className="flex items-center justify-center gap-4 text-xs text-white">
                    <div className="flex items-center gap-2 px-3 py-2 bg-white/15 md:bg-white/5 rounded-lg border-2 md:border border-white/30 md:border-white/10" style={{ textShadow: '0 1px 4px rgba(0,0,0,0.8)' }}>
                      <svg className="w-4 h-4 text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                      </svg>
                      <span className="font-bold">RERA Licensed</span>
                    </div>
                    <div className="flex items-center gap-2 px-3 py-2 bg-white/15 md:bg-white/5 rounded-lg border-2 md:border border-white/30 md:border-white/10" style={{ textShadow: '0 1px 4px rgba(0,0,0,0.8)' }}>
                      <svg className="w-4 h-4 text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8V7m-6 4h4" />
                      </svg>
                      <span className="font-bold">100% Confidential</span>
                    </div>
                  </div>
                </div>
              </>
            ) : (
              <div className="text-center py-8">
                <div className="w-14 h-14 bg-primary-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-7 h-7 text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-xl md:text-xl text-white font-bold tracking-wide mb-2" style={{ textShadow: '0 2px 8px rgba(0,0,0,0.8)' }}>Request Confirmed</h3>
                <p className="text-base md:text-sm text-white font-semibold leading-relaxed mb-4" style={{ textShadow: '0 2px 6px rgba(0,0,0,0.8)' }}>
                  Your investment portfolio is being prepared by a senior advisor. You will receive a confidential investment breakdown within 24 hours.
                </p>
                <p className="text-sm md:text-xs text-white/95 md:text-white/70 font-semibold" style={{ textShadow: '0 1px 4px rgba(0,0,0,0.8)' }}>
                  Check your email for secure access details.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
