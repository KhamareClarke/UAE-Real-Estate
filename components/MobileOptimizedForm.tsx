'use client';

import { useState } from 'react';

export default function MobileOptimizedForm() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    whatsapp: '',
    email: '',
    budget: '',
    purpose: ''
  });
  const [showSuccess, setShowSuccess] = useState(false);

  const handleNext = () => {
    if (step < 3) setStep(step + 1);
  };

  const handleBack = () => {
    if (step > 1) setStep(step - 1);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setShowSuccess(true);
  };

  return (
    <div className="lg:hidden fixed bottom-0 left-0 right-0 z-40 bg-white border-t-4 border-accent shadow-2xl">
      {!showSuccess ? (
        <div className="p-4">
          {/* Progress Bar */}
          <div className="mb-4">
            <div className="flex justify-between mb-2">
              <span className="text-xs font-bold text-navy">Step {step} of 3</span>
              <span className="text-xs font-semibold text-navy/60">{Math.round((step / 3) * 100)}% Complete</span>
            </div>
            <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
              <div 
                className="h-full bg-gradient-to-r from-accent to-accent-light transition-all duration-300"
                style={{ width: `${(step / 3) * 100}%` }}
              ></div>
            </div>
          </div>

          <form onSubmit={handleSubmit}>
            {/* Step 1: Name */}
            {step === 1 && (
              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-black text-navy mb-2">What's your name?</h3>
                  <p className="text-sm text-navy/60 font-semibold mb-4">Let's start with the basics</p>
                  <input
                    type="text"
                    placeholder="Your Full Name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-4 border-2 border-gray-300 focus:border-accent rounded-xl bg-white focus:outline-none text-navy font-semibold text-base placeholder-navy/40"
                    required
                  />
                </div>
                <button
                  type="button"
                  onClick={handleNext}
                  disabled={!formData.name}
                  className="w-full bg-gradient-to-r from-accent to-accent-light text-white font-bold py-4 rounded-xl transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  Continue
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </button>
              </div>
            )}

            {/* Step 2: Contact */}
            {step === 2 && (
              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-black text-navy mb-2">How can we reach you?</h3>
                  <p className="text-sm text-navy/60 font-semibold mb-4">We'll send your property portfolio here</p>
                  <div className="space-y-3">
                    <input
                      type="tel"
                      placeholder="WhatsApp Number (with country code)"
                      value={formData.whatsapp}
                      onChange={(e) => setFormData({ ...formData, whatsapp: e.target.value })}
                      className="w-full px-4 py-4 border-2 border-gray-300 focus:border-accent rounded-xl bg-white focus:outline-none text-navy font-semibold text-base placeholder-navy/40"
                      required
                    />
                    <input
                      type="email"
                      placeholder="Email Address"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-4 border-2 border-gray-300 focus:border-accent rounded-xl bg-white focus:outline-none text-navy font-semibold text-base placeholder-navy/40"
                      required
                    />
                  </div>
                </div>
                <div className="flex gap-3">
                  <button
                    type="button"
                    onClick={handleBack}
                    className="flex-1 bg-gray-200 text-navy font-bold py-4 rounded-xl"
                  >
                    Back
                  </button>
                  <button
                    type="button"
                    onClick={handleNext}
                    disabled={!formData.whatsapp || !formData.email}
                    className="flex-2 bg-gradient-to-r from-accent to-accent-light text-white font-bold py-4 rounded-xl transition-all disabled:opacity-50 flex items-center justify-center gap-2 flex-grow"
                  >
                    Continue
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </button>
                </div>
              </div>
            )}

            {/* Step 3: Preferences */}
            {step === 3 && (
              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-black text-navy mb-2">Investment details</h3>
                  <p className="text-sm text-navy/60 font-semibold mb-4">Help us find your perfect property</p>
                  <div className="space-y-3">
                    <select
                      value={formData.budget}
                      onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                      className="w-full px-4 py-4 border-2 border-gray-300 focus:border-accent rounded-xl bg-white focus:outline-none text-navy font-semibold text-base"
                      required
                    >
                      <option value="">Select Budget Range</option>
                      <option value="500k-1m">AED 500K - 1M</option>
                      <option value="1m-2m">AED 1M - 2M</option>
                      <option value="2m-5m">AED 2M - 5M</option>
                      <option value="5m+">AED 5M+</option>
                    </select>
                    <select
                      value={formData.purpose}
                      onChange={(e) => setFormData({ ...formData, purpose: e.target.value })}
                      className="w-full px-4 py-4 border-2 border-gray-300 focus:border-accent rounded-xl bg-white focus:outline-none text-navy font-semibold text-base"
                      required
                    >
                      <option value="">Investment Purpose</option>
                      <option value="rental">Rental Income</option>
                      <option value="golden-visa">Golden Visa</option>
                      <option value="capital-growth">Capital Growth</option>
                      <option value="personal-use">Personal Use</option>
                    </select>
                  </div>
                </div>
                <div className="flex gap-3">
                  <button
                    type="button"
                    onClick={handleBack}
                    className="flex-1 bg-gray-200 text-navy font-bold py-4 rounded-xl"
                  >
                    Back
                  </button>
                  <button
                    type="submit"
                    disabled={!formData.budget || !formData.purpose}
                    className="flex-2 bg-gradient-to-r from-accent to-accent-light text-white font-bold py-4 rounded-xl transition-all disabled:opacity-50 flex items-center justify-center gap-2 flex-grow shadow-xl"
                  >
                    Get My Portfolio
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                  </button>
                </div>
                <p className="text-xs text-center text-navy/50 font-semibold">
                  🔒 100% Private. No spam. Response within 24 hours.
                </p>
              </div>
            )}
          </form>
        </div>
      ) : (
        <div className="p-6 text-center">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h3 className="text-xl font-black text-navy mb-2">Portfolio On Its Way!</h3>
          <p className="text-sm text-navy/70 font-semibold mb-4">
            We'll send your curated property selection within 24 hours
          </p>
          <a
            href="https://wa.me/971529009133"
            className="inline-flex items-center gap-2 bg-green-600 text-white font-bold px-6 py-3 rounded-xl"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
            </svg>
            Chat on WhatsApp Now
          </a>
        </div>
      )}
    </div>
  );
}
