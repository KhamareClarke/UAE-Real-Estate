'use client';

import { useState } from 'react';

interface FormData {
  fullName: string;
  email: string;
  phone: string;
  budget: string;
  city: string;
  purpose: string;
  timeline: string;
}

export default function TwoStepLeadForm() {
  const [step, setStep] = useState<1 | 2>(1);
  const [formData, setFormData] = useState<FormData>({
    fullName: '',
    email: '',
    phone: '',
    budget: '',
    city: '',
    purpose: '',
    timeline: '',
  });
  const [errors, setErrors] = useState<Partial<FormData>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const validateStep1 = (): boolean => {
    const newErrors: Partial<FormData> = {};
    
    if (!formData.fullName.trim() || formData.fullName.trim().length < 2) {
      newErrors.fullName = 'Please enter your full name';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (!/^[\d\s\+\-\(\)]{8,}$/.test(formData.phone)) {
      newErrors.phone = 'Please enter a valid phone number';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const validateStep2 = (): boolean => {
    const newErrors: Partial<FormData> = {};
    
    if (!formData.budget) newErrors.budget = 'Please select your investment budget';
    if (!formData.city) newErrors.city = 'Please select your preferred location';
    if (!formData.purpose) newErrors.purpose = 'Please select your investment goal';
    if (!formData.timeline) newErrors.timeline = 'Please select your timeline';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleContinue = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateStep1()) {
      setStep(2);
      const formElement = document.getElementById('lead-form');
      if (formElement) {
        formElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateStep2()) return;

    setIsSubmitting(true);
    console.log('Lead captured:', formData);
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    setShowSuccess(true);
    
    setTimeout(() => {
      setFormData({
        fullName: '',
        email: '',
        phone: '',
        budget: '',
        city: '',
        purpose: '',
        timeline: '',
      });
      setStep(1);
      setShowSuccess(false);
    }, 5000);
  };

  const handleChange = (field: keyof FormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: undefined }));
    }
  };

  if (showSuccess) {
    return (
      <div id="lead-form" className="bg-white rounded-2xl shadow-2xl p-8 text-center">
        <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <svg className="w-10 h-10 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-3xl font-bold text-navy mb-3">Thank You!</h3>
        <p className="text-lg text-gray-700 mb-2">Your investment portfolio is being prepared.</p>
        <p className="text-sm text-gray-600 mb-6">
          Our senior property consultant will contact you within 2 hours with curated options.
        </p>
        <div className="bg-accent-50 border-l-4 border-accent rounded-lg p-4">
          <p className="text-sm text-gray-700">
            <strong className="text-accent">Next Steps:</strong> Check your email for your FREE UAE Property Investment Guide.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div id="lead-form" className="bg-white rounded-2xl shadow-2xl p-8 border border-gray-100">
      {/* Header */}
      <div className="text-center mb-8">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-accent to-gold text-white text-sm font-bold mb-4">
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
          VIP Property Consultation
        </div>
        <h3 className="text-2xl md:text-3xl font-bold text-navy mb-2">
          Get Your Personalized Portfolio
        </h3>
        <p className="text-gray-600">
          Receive curated property options within 24 hours
        </p>
      </div>

      {/* Progress Indicator */}
      <div className="mb-8">
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-3">
            <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold transition-all ${
              step === 1 ? 'bg-gradient-to-r from-accent to-gold text-white scale-110 shadow-lg' : 'bg-green-500 text-white'
            }`}>
              {step === 1 ? '1' : '✓'}
            </div>
            <div>
              <p className={`text-sm font-semibold ${step === 1 ? 'text-navy' : 'text-green-600'}`}>
                Contact Details
              </p>
              <p className="text-xs text-gray-500">Your information</p>
            </div>
          </div>
          
          <div className="flex-1 mx-4 h-1 bg-gray-200 rounded-full overflow-hidden">
            <div className={`h-full bg-gradient-to-r from-accent to-gold transition-all duration-500 ${
              step === 2 ? 'w-full' : 'w-0'
            }`}></div>
          </div>
          
          <div className="flex items-center gap-3">
            <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold transition-all ${
              step === 2 ? 'bg-gradient-to-r from-accent to-gold text-white scale-110 shadow-lg' : 'bg-gray-200 text-gray-500'
            }`}>
              2
            </div>
            <div>
              <p className={`text-sm font-semibold ${step === 2 ? 'text-navy' : 'text-gray-500'}`}>
                Investment Preferences
              </p>
              <p className="text-xs text-gray-500">Your requirements</p>
            </div>
          </div>
        </div>
      </div>

      {/* Step 1: Contact Details */}
      {step === 1 && (
        <form onSubmit={handleContinue} className="space-y-5">
          <div>
            <label htmlFor="fullName" className="block text-sm font-semibold text-gray-700 mb-2">
              Full Name <span className="text-accent">*</span>
            </label>
            <input
              type="text"
              id="fullName"
              value={formData.fullName}
              onChange={(e) => handleChange('fullName', e.target.value)}
              className={`w-full px-4 py-3 border-2 rounded-xl focus:ring-2 focus:ring-accent focus:border-accent outline-none transition ${
                errors.fullName ? 'border-red-500' : 'border-gray-300'
              }`}
              placeholder="John Smith"
            />
            {errors.fullName && (
              <p className="mt-1 text-sm text-red-500">{errors.fullName}</p>
            )}
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
              Email Address <span className="text-accent">*</span>
            </label>
            <input
              type="email"
              id="email"
              value={formData.email}
              onChange={(e) => handleChange('email', e.target.value)}
              className={`w-full px-4 py-3 border-2 rounded-xl focus:ring-2 focus:ring-accent focus:border-accent outline-none transition ${
                errors.email ? 'border-red-500' : 'border-gray-300'
              }`}
              placeholder="john@example.com"
            />
            {errors.email && (
              <p className="mt-1 text-sm text-red-500">{errors.email}</p>
            )}
          </div>

          <div>
            <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
              Phone / WhatsApp <span className="text-accent">*</span>
            </label>
            <input
              type="tel"
              id="phone"
              value={formData.phone}
              onChange={(e) => handleChange('phone', e.target.value)}
              className={`w-full px-4 py-3 border-2 rounded-xl focus:ring-2 focus:ring-accent focus:border-accent outline-none transition ${
                errors.phone ? 'border-red-500' : 'border-gray-300'
              }`}
              placeholder="+971 50 123 4567"
            />
            {errors.phone && (
              <p className="mt-1 text-sm text-red-500">{errors.phone}</p>
            )}
          </div>

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-accent to-gold hover:from-accent-dark hover:to-gold-dark text-white font-bold py-4 px-6 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 flex items-center justify-center gap-2"
          >
            Continue to Investment Preferences
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </button>

          <p className="text-xs text-center text-gray-500">
            🔒 Your information is secure and will never be shared
          </p>
        </form>
      )}

      {/* Step 2: Investment Preferences */}
      {step === 2 && (
        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label htmlFor="budget" className="block text-sm font-semibold text-gray-700 mb-2">
              Investment Budget <span className="text-accent">*</span>
            </label>
            <select
              id="budget"
              value={formData.budget}
              onChange={(e) => handleChange('budget', e.target.value)}
              className={`w-full px-4 py-3 border-2 rounded-xl focus:ring-2 focus:ring-accent focus:border-accent outline-none transition ${
                errors.budget ? 'border-red-500' : 'border-gray-300'
              }`}
            >
              <option value="">Select your budget</option>
              <option value="under-750k">Under AED 750,000</option>
              <option value="750k-1.5m">AED 750,000 - 1.5M (Golden Visa)</option>
              <option value="1.5m-3m">AED 1.5M - 3M</option>
              <option value="3m-5m">AED 3M - 5M</option>
              <option value="5m-plus">AED 5M+ (Premium)</option>
            </select>
            {errors.budget && (
              <p className="mt-1 text-sm text-red-500">{errors.budget}</p>
            )}
          </div>

          <div>
            <label htmlFor="city" className="block text-sm font-semibold text-gray-700 mb-2">
              Preferred Location <span className="text-accent">*</span>
            </label>
            <select
              id="city"
              value={formData.city}
              onChange={(e) => handleChange('city', e.target.value)}
              className={`w-full px-4 py-3 border-2 rounded-xl focus:ring-2 focus:ring-accent focus:border-accent outline-none transition ${
                errors.city ? 'border-red-500' : 'border-gray-300'
              }`}
            >
              <option value="">Select location</option>
              <option value="abu-dhabi">Abu Dhabi</option>
              <option value="dubai">Dubai</option>
              <option value="both">Both Cities</option>
              <option value="other">Other Emirates</option>
            </select>
            {errors.city && (
              <p className="mt-1 text-sm text-red-500">{errors.city}</p>
            )}
          </div>

          <div>
            <label htmlFor="purpose" className="block text-sm font-semibold text-gray-700 mb-2">
              Investment Goal <span className="text-accent">*</span>
            </label>
            <select
              id="purpose"
              value={formData.purpose}
              onChange={(e) => handleChange('purpose', e.target.value)}
              className={`w-full px-4 py-3 border-2 rounded-xl focus:ring-2 focus:ring-accent focus:border-accent outline-none transition ${
                errors.purpose ? 'border-red-500' : 'border-gray-300'
              }`}
            >
              <option value="">Select your goal</option>
              <option value="golden-visa">Golden Visa / Residency</option>
              <option value="roi">Rental Income (ROI)</option>
              <option value="appreciation">Capital Appreciation</option>
              <option value="personal">Personal Use</option>
              <option value="mixed">Multiple Goals</option>
            </select>
            {errors.purpose && (
              <p className="mt-1 text-sm text-red-500">{errors.purpose}</p>
            )}
          </div>

          <div>
            <label htmlFor="timeline" className="block text-sm font-semibold text-gray-700 mb-2">
              Investment Timeline <span className="text-accent">*</span>
            </label>
            <select
              id="timeline"
              value={formData.timeline}
              onChange={(e) => handleChange('timeline', e.target.value)}
              className={`w-full px-4 py-3 border-2 rounded-xl focus:ring-2 focus:ring-accent focus:border-accent outline-none transition ${
                errors.timeline ? 'border-red-500' : 'border-gray-300'
              }`}
            >
              <option value="">When are you looking to invest?</option>
              <option value="immediate">Immediately (This week)</option>
              <option value="1-month">Within 1 month</option>
              <option value="3-months">Within 3 months</option>
              <option value="6-months">Within 6 months</option>
              <option value="exploring">Just exploring options</option>
            </select>
            {errors.timeline && (
              <p className="mt-1 text-sm text-red-500">{errors.timeline}</p>
            )}
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-gradient-to-r from-accent to-gold hover:from-accent-dark hover:to-gold-dark text-white font-bold py-4 px-6 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 flex items-center justify-center gap-2"
          >
            {isSubmitting ? (
              <>
                <svg className="animate-spin h-5 w-5" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Processing...
              </>
            ) : (
              <>
                Get My Investment Portfolio
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </>
            )}
          </button>

          <button
            type="button"
            onClick={() => setStep(1)}
            className="w-full text-sm text-gray-600 hover:text-navy font-medium py-2 flex items-center justify-center gap-2"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Contact Details
          </button>

          <div className="text-center pt-4 border-t border-gray-200">
            <p className="text-sm font-semibold text-navy mb-1">✓ No Obligation • Free Consultation</p>
            <p className="text-xs text-gray-500">Your information is secure and will never be shared. GDPR compliant.</p>
          </div>
        </form>
      )}
    </div>
  );
}
