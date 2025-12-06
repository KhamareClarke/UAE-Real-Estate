'use client';

import { useState } from 'react';

interface MultiStepLeadPopupProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MultiStepLeadPopup({ isOpen, onClose }: MultiStepLeadPopupProps) {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    investorType: '',
    budget: '',
    name: '',
    whatsapp: '',
    email: ''
  });

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
    onClose();
  };

  const nextStep = () => {
    if (step < 3) setStep(step + 1);
  };

  const prevStep = () => {
    if (step > 1) setStep(step - 1);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-navy/80 backdrop-blur-sm animate-fade-in">
      <div className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="sticky top-0 bg-white border-b border-gray-200 p-6 flex items-center justify-between rounded-t-2xl">
          <div>
            <h3 className="font-serif text-2xl font-bold text-navy">Get Your Investor Portfolio</h3>
            <p className="text-sm text-navy/60 mt-1">Step {step} of 3</p>
          </div>
          <button
            onClick={onClose}
            className="text-navy/40 hover:text-navy transition-colors"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Progress Bar */}
        <div className="px-6 pt-4">
          <div className="flex gap-2">
            {[1, 2, 3].map((s) => (
              <div
                key={s}
                className={`h-1 flex-1 rounded-full transition-all ${
                  s <= step ? 'bg-gold' : 'bg-gray-200'
                }`}
              ></div>
            ))}
          </div>
        </div>

        {/* Form Content */}
        <form onSubmit={handleSubmit} className="p-6">
          {/* Step 1: Investor Type */}
          {step === 1 && (
            <div className="space-y-6 animate-fade-in">
              <div>
                <label className="block text-navy font-semibold mb-4">
                  What type of investor are you?
                </label>
                <div className="space-y-3">
                  {[
                    { value: 'long-term', label: 'Long-term Investment', desc: 'Capital appreciation over 5-10 years' },
                    { value: 'holiday', label: 'Holiday Home', desc: 'Personal use with rental income potential' },
                    { value: 'capital-growth', label: 'Capital Growth', desc: 'Short to medium-term appreciation' },
                    { value: 'residency', label: 'Residency (Golden Visa)', desc: 'Property investment for UAE residency' }
                  ].map((option) => (
                    <label
                      key={option.value}
                      className={`flex items-start gap-4 p-4 border-2 rounded-xl cursor-pointer transition-all ${
                        formData.investorType === option.value
                          ? 'border-gold bg-gold/5'
                          : 'border-gray-200 hover:border-gold/50'
                      }`}
                    >
                      <input
                        type="radio"
                        name="investorType"
                        value={option.value}
                        checked={formData.investorType === option.value}
                        onChange={(e) => setFormData({ ...formData, investorType: e.target.value })}
                        className="mt-1 w-5 h-5 text-gold focus:ring-gold"
                      />
                      <div className="flex-1">
                        <p className="font-semibold text-navy">{option.label}</p>
                        <p className="text-sm text-navy/60">{option.desc}</p>
                      </div>
                    </label>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Step 2: Budget */}
          {step === 2 && (
            <div className="space-y-6 animate-fade-in">
              <div>
                <label className="block text-navy font-semibold mb-4">
                  What is your investment budget?
                </label>
                <div className="space-y-3">
                  {[
                    { value: '500k-1m', label: 'AED 500,000 - 1,000,000' },
                    { value: '1m-2m', label: 'AED 1,000,000 - 2,000,000' },
                    { value: '2m-5m', label: 'AED 2,000,000 - 5,000,000' },
                    { value: '5m+', label: 'AED 5,000,000+' }
                  ].map((option) => (
                    <label
                      key={option.value}
                      className={`flex items-center gap-4 p-4 border-2 rounded-xl cursor-pointer transition-all ${
                        formData.budget === option.value
                          ? 'border-gold bg-gold/5'
                          : 'border-gray-200 hover:border-gold/50'
                      }`}
                    >
                      <input
                        type="radio"
                        name="budget"
                        value={option.value}
                        checked={formData.budget === option.value}
                        onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                        className="w-5 h-5 text-gold focus:ring-gold"
                      />
                      <p className="font-semibold text-navy">{option.label}</p>
                    </label>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Step 3: Contact Details */}
          {step === 3 && (
            <div className="space-y-6 animate-fade-in">
              <div>
                <label className="block text-navy font-semibold mb-4">
                  Your contact information
                </label>
                <div className="space-y-4">
                  <div>
                    <input
                      type="text"
                      placeholder="Full Name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-5 py-4 border border-gray-300 focus:border-gold rounded-lg bg-white focus:outline-none text-navy font-medium text-base placeholder-navy/40 transition-all"
                      required
                    />
                  </div>
                  <div>
                    <input
                      type="tel"
                      placeholder="WhatsApp Number (with country code)"
                      value={formData.whatsapp}
                      onChange={(e) => setFormData({ ...formData, whatsapp: e.target.value })}
                      className="w-full px-5 py-4 border border-gray-300 focus:border-gold rounded-lg bg-white focus:outline-none text-navy font-medium text-base placeholder-navy/40 transition-all"
                      required
                    />
                  </div>
                  <div>
                    <input
                      type="email"
                      placeholder="Email Address"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-5 py-4 border border-gray-300 focus:border-gold rounded-lg bg-white focus:outline-none text-navy font-medium text-base placeholder-navy/40 transition-all"
                      required
                    />
                  </div>
                </div>
              </div>

              {/* Privacy Notice */}
              <div className="bg-gold/5 border border-gold/20 rounded-lg p-4">
                <p className="text-xs text-navy/70 leading-relaxed">
                  Your information is confidential and will only be used to prepare your personalized property portfolio. We respect your privacy and will never share your details with third parties.
                </p>
              </div>
            </div>
          )}

          {/* Navigation Buttons */}
          <div className="flex gap-4 mt-8">
            {step > 1 && (
              <button
                type="button"
                onClick={prevStep}
                className="flex-1 border-2 border-gray-300 text-navy font-semibold py-4 rounded-lg hover:border-gold transition-all"
              >
                Back
              </button>
            )}
            {step < 3 ? (
              <button
                type="button"
                onClick={nextStep}
                disabled={
                  (step === 1 && !formData.investorType) ||
                  (step === 2 && !formData.budget)
                }
                className="flex-1 bg-gold hover:bg-gold-dark text-navy font-bold py-4 rounded-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                Continue
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </button>
            ) : (
              <button
                type="submit"
                className="flex-1 bg-gold hover:bg-gold-dark text-navy font-bold py-4 rounded-lg transition-all flex items-center justify-center gap-2"
              >
                Get My Portfolio
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                </svg>
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
}
