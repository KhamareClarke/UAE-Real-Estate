'use client';

import { useState, useEffect } from 'react';

interface FormData {
  fullName: string;
  email: string;
  phone: string;
  budget: string;
  city: string;
  purpose: string;
  wantsConsultation: boolean;
  timeline: string;
}

export default function EnhancedLeadForm() {
  const [step, setStep] = useState<1 | 2>(1);
  const [formData, setFormData] = useState<FormData>({
    fullName: '',
    email: '',
    phone: '',
    budget: '',
    city: '',
    purpose: '',
    wantsConsultation: false,
    timeline: '',
  });
  const [errors, setErrors] = useState<Partial<FormData>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [completionPercentage, setCompletionPercentage] = useState(0);

  // Calculate form completion percentage
  useEffect(() => {
    const fields = Object.entries(formData);
    const filledFields = fields.filter(([key, value]) => {
      if (key === 'wantsConsultation') return true;
      return value !== '';
    }).length;
    const percentage = Math.round((filledFields / fields.length) * 100);
    setCompletionPercentage(percentage);
  }, [formData]);

  const validateStep1 = (): boolean => {
    const newErrors: Partial<FormData> = {};
    
    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Full name is required';
    } else if (formData.fullName.trim().length < 2) {
      newErrors.fullName = 'Please enter your full name';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
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
    
    if (!formData.budget) {
      newErrors.budget = 'Please select your budget';
    }
    
    if (!formData.city) {
      newErrors.city = 'Please select your preferred city';
    }
    
    if (!formData.purpose) {
      newErrors.purpose = 'Please select your investment purpose';
    }

    if (!formData.timeline) {
      newErrors.timeline = 'Please select your timeline';
    }
    
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
    
    // Simulate API call
    console.log('Form submitted:', formData);
    
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    setShowSuccess(true);
    
    // Reset after 5 seconds
    setTimeout(() => {
      setFormData({
        fullName: '',
        email: '',
        phone: '',
        budget: '',
        city: '',
        purpose: '',
        wantsConsultation: false,
        timeline: '',
      });
      setStep(1);
      setShowSuccess(false);
    }, 5000);
  };

  const handleInputChange = (field: keyof FormData, value: string | boolean) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: undefined }));
    }
  };

  if (showSuccess) {
    return (
      <div id="lead-form" className="bg-gradient-to-br from-white to-accent-50 rounded-2xl shadow-2xl p-8 md:p-10 text-center animate-fade-in">
        <div className="mb-6">
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg className="w-10 h-10 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h3 className="text-3xl font-bold text-navy mb-3">🎉 Success!</h3>
          <p className="text-lg text-gray-700 mb-2">
            Your investment portfolio is being prepared!
          </p>
          <p className="text-sm text-gray-600">
            Check your email in the next 5 minutes for your FREE UAE Property Investment Guide (Worth AED 500)
          </p>
        </div>
        <div className="bg-accent-100 border-l-4 border-accent rounded-lg p-4 mb-6">
          <p className="text-sm text-gray-700">
            <strong className="text-accent">⚡ Priority Response:</strong> Our senior consultant will contact you within 2 hours with curated property options matching your criteria.
          </p>
        </div>
        <div className="flex items-center justify-center gap-4 text-sm text-gray-600">
          <div className="flex items-center gap-1">
            <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span>Email sent</span>
          </div>
          <div className="flex items-center gap-1">
            <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span>Priority queued</span>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div id="lead-form" className="bg-gradient-to-br from-white to-accent-50 rounded-2xl shadow-2xl p-6 md:p-8 border-2 border-accent/20 relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-accent/20 to-gold/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-gold/20 to-accent/20 rounded-full blur-3xl"></div>
      
      <div className="relative z-10">
        {/* Header */}
        <div className="text-center mb-6">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-accent to-gold text-white text-sm font-bold mb-4 shadow-lg">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            VIP ACCESS - Limited Time
          </div>
          <h3 className="text-2xl md:text-3xl font-bold text-navy mb-2">
            Get Your FREE Investment Guide
          </h3>
          <p className="text-gray-600 mb-3">
            Unlock exclusive off-market properties + Golden Visa consultation
          </p>
          
          {/* Progress Bar */}
          <div className="bg-gray-200 rounded-full h-2 mb-2 overflow-hidden">
            <div 
              className="bg-gradient-to-r from-accent to-gold h-full transition-all duration-500 ease-out"
              style={{ width: `${completionPercentage}%` }}
            ></div>
          </div>
          <p className="text-xs text-gray-500">{completionPercentage}% Complete - {step === 1 ? 'Almost there!' : 'Final step!'}</p>
        </div>

        {/* Bonus Callout */}
        <div className="bg-gradient-to-r from-accent-100 to-gold-100 border-l-4 border-accent rounded-lg p-4 mb-6">
          <div className="flex items-start gap-3">
            <span className="text-2xl">🎁</span>
            <div>
              <p className="font-bold text-navy text-sm mb-1">FREE BONUS: Complete this form to receive:</p>
              <ul className="text-xs text-gray-700 space-y-1">
                <li className="flex items-center gap-1">
                  <svg className="w-3 h-3 text-accent flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  UAE Property Investment Guide (Worth AED 500)
                </li>
                <li className="flex items-center gap-1">
                  <svg className="w-3 h-3 text-accent flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Golden Visa Eligibility Assessment
                </li>
                <li className="flex items-center gap-1">
                  <svg className="w-3 h-3 text-accent flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Priority access to pre-launch projects
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Step Indicators */}
        <div className="flex items-center gap-4 mb-6">
          <div className="flex items-center gap-2 flex-1">
            <div className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold transition-all ${
              step === 1 ? 'bg-gradient-to-r from-accent to-gold text-white shadow-lg scale-110' : 'bg-green-500 text-white'
            }`}>
              {step === 1 ? '1' : '✓'}
            </div>
            <span className={`text-sm font-semibold ${step === 1 ? 'text-navy' : 'text-green-600'}`}>
              Contact Info
            </span>
          </div>
          <div className="flex-1 h-1 bg-gray-300 rounded-full overflow-hidden">
            <div className={`h-full bg-gradient-to-r from-accent to-gold transition-all duration-500 ${step === 2 ? 'w-full' : 'w-0'}`}></div>
          </div>
          <div className="flex items-center gap-2 flex-1">
            <div className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold transition-all ${
              step === 2 ? 'bg-gradient-to-r from-accent to-gold text-white shadow-lg scale-110' : 'bg-gray-300 text-gray-600'
            }`}>
              2
            </div>
            <span className={`text-sm font-semibold ${step === 2 ? 'text-navy' : 'text-gray-500'}`}>
              Preferences
            </span>
          </div>
        </div>

        {/* Step 1 Form */}
        {step === 1 && (
          <form onSubmit={handleContinue} className="space-y-4">
            <div>
              <label htmlFor="fullName" className="block text-sm font-semibold text-gray-700 mb-2">
                Full Name <span className="text-accent">*</span>
              </label>
              <input
                type="text"
                id="fullName"
                value={formData.fullName}
                onChange={(e) => handleInputChange('fullName', e.target.value)}
                className={`w-full px-4 py-3 border-2 rounded-xl focus:ring-2 focus:ring-accent focus:border-accent outline-none transition ${
                  errors.fullName ? 'border-red-500' : 'border-gray-300'
                }`}
                placeholder="John Smith"
              />
              {errors.fullName && (
                <p className="mt-1 text-sm text-red-500 flex items-center gap-1">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                  </svg>
                  {errors.fullName}
                </p>
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
                onChange={(e) => handleInputChange('email', e.target.value)}
                className={`w-full px-4 py-3 border-2 rounded-xl focus:ring-2 focus:ring-accent focus:border-accent outline-none transition ${
                  errors.email ? 'border-red-500' : 'border-gray-300'
                }`}
                placeholder="john@example.com"
              />
              {errors.email && (
                <p className="mt-1 text-sm text-red-500 flex items-center gap-1">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                  </svg>
                  {errors.email}
                </p>
              )}
            </div>

            <div>
              <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                WhatsApp / Phone Number <span className="text-accent">*</span>
              </label>
              <input
                type="tel"
                id="phone"
                value={formData.phone}
                onChange={(e) => handleInputChange('phone', e.target.value)}
                className={`w-full px-4 py-3 border-2 rounded-xl focus:ring-2 focus:ring-accent focus:border-accent outline-none transition ${
                  errors.phone ? 'border-red-500' : 'border-gray-300'
                }`}
                placeholder="+971 50 123 4567"
              />
              {errors.phone && (
                <p className="mt-1 text-sm text-red-500 flex items-center gap-1">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                  </svg>
                  {errors.phone}
                </p>
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
              🔒 Your information is 100% secure and will never be shared
            </p>
          </form>
        )}

        {/* Step 2 Form */}
        {step === 2 && (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="budget" className="block text-sm font-semibold text-gray-700 mb-2">
                Investment Budget <span className="text-accent">*</span>
              </label>
              <select
                id="budget"
                value={formData.budget}
                onChange={(e) => handleInputChange('budget', e.target.value)}
                className={`w-full px-4 py-3 border-2 rounded-xl focus:ring-2 focus:ring-accent focus:border-accent outline-none transition ${
                  errors.budget ? 'border-red-500' : 'border-gray-300'
                }`}
              >
                <option value="">Select your budget</option>
                <option value="under-750k">Under 750,000 AED</option>
                <option value="750k-1.5m">750,000 – 1.5M AED (Golden Visa)</option>
                <option value="1.5m-3m">1.5M – 3M AED</option>
                <option value="3m-plus">3M+ AED (Premium)</option>
              </select>
              {errors.budget && (
                <p className="mt-1 text-sm text-red-500">{errors.budget}</p>
              )}
            </div>

            <div>
              <label htmlFor="city" className="block text-sm font-semibold text-gray-700 mb-2">
                Preferred City <span className="text-accent">*</span>
              </label>
              <select
                id="city"
                value={formData.city}
                onChange={(e) => handleInputChange('city', e.target.value)}
                className={`w-full px-4 py-3 border-2 rounded-xl focus:ring-2 focus:ring-accent focus:border-accent outline-none transition ${
                  errors.city ? 'border-red-500' : 'border-gray-300'
                }`}
              >
                <option value="">Select preferred city</option>
                <option value="abu-dhabi">Abu Dhabi</option>
                <option value="dubai">Dubai</option>
                <option value="both">Both Cities</option>
                <option value="other">Other / Not sure</option>
              </select>
              {errors.city && (
                <p className="mt-1 text-sm text-red-500">{errors.city}</p>
              )}
            </div>

            <div>
              <label htmlFor="purpose" className="block text-sm font-semibold text-gray-700 mb-2">
                Investment Purpose <span className="text-accent">*</span>
              </label>
              <select
                id="purpose"
                value={formData.purpose}
                onChange={(e) => handleInputChange('purpose', e.target.value)}
                className={`w-full px-4 py-3 border-2 rounded-xl focus:ring-2 focus:ring-accent focus:border-accent outline-none transition ${
                  errors.purpose ? 'border-red-500' : 'border-gray-300'
                }`}
              >
                <option value="">Select investment purpose</option>
                <option value="appreciation">Capital Appreciation</option>
                <option value="rental">Rental Income (ROI)</option>
                <option value="residency">Golden Visa / Residency</option>
                <option value="personal">Personal Use</option>
                <option value="mixed">Mixed / Not sure</option>
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
                onChange={(e) => handleInputChange('timeline', e.target.value)}
                className={`w-full px-4 py-3 border-2 rounded-xl focus:ring-2 focus:ring-accent focus:border-accent outline-none transition ${
                  errors.timeline ? 'border-red-500' : 'border-gray-300'
                }`}
              >
                <option value="">When are you looking to invest?</option>
                <option value="immediate">Immediately (This week)</option>
                <option value="1-month">Within 1 month</option>
                <option value="3-months">Within 3 months</option>
                <option value="6-months">Within 6 months</option>
                <option value="exploring">Just exploring</option>
              </select>
              {errors.timeline && (
                <p className="mt-1 text-sm text-red-500">{errors.timeline}</p>
              )}
            </div>

            <div className="bg-accent-50 border border-accent-200 rounded-xl p-4">
              <div className="flex items-start gap-3">
                <input
                  type="checkbox"
                  id="consultation"
                  checked={formData.wantsConsultation}
                  onChange={(e) => handleInputChange('wantsConsultation', e.target.checked)}
                  className="mt-1 w-5 h-5 text-accent border-gray-300 rounded focus:ring-accent"
                />
                <label htmlFor="consultation" className="text-sm text-gray-700 flex-1">
                  <span className="font-semibold text-navy">Yes! Schedule my FREE 30-minute consultation</span>
                  <span className="block text-xs text-gray-600 mt-1">Get personalized property recommendations from our senior advisors</span>
                </label>
              </div>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-gradient-to-r from-accent to-gold hover:from-accent-dark hover:to-gold-dark text-white font-bold py-5 px-6 rounded-xl transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 flex items-center justify-center gap-2"
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
                  🎁 Get My FREE Investment Guide Now
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </>
              )}
            </button>

            <button
              type="button"
              onClick={() => setStep(1)}
              className="w-full text-sm text-gray-600 hover:text-navy underline py-2"
            >
              ← Back to Contact Info
            </button>

            <div className="text-center space-y-2 pt-2">
              <p className="text-sm font-semibold text-navy">✅ No pressure, no obligations</p>
              <p className="text-xs text-gray-500">Secure & confidential. Your details are never shared. GDPR compliant.</p>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
