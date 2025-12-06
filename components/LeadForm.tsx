'use client';

import { useState } from 'react';

interface FormData {
  fullName: string;
  email: string;
  phone: string;
  budget: string;
  city: string;
  purpose: string;
  wantsConsultation: boolean;
}

export default function LeadForm() {
  const [step, setStep] = useState<1 | 2>(1);
  const [formData, setFormData] = useState<FormData>({
    fullName: '',
    email: '',
    phone: '',
    budget: '',
    city: '',
    purpose: '',
    wantsConsultation: false,
  });
  const [errors, setErrors] = useState<Partial<FormData>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateStep1 = (): boolean => {
    const newErrors: Partial<FormData> = {};
    
    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Full name is required';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }
    
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (!/^[\d\s\+\-\(\)]+$/.test(formData.phone)) {
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
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleContinue = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateStep1()) {
      setStep(2);
      // Scroll to top of form on mobile
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
    
    // Placeholder for API integration
    console.log('Form submitted:', formData);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    alert('Thank you! We\'ll be in touch shortly with your curated investment options.');
    
    // Reset form
    setFormData({
      fullName: '',
      email: '',
      phone: '',
      budget: '',
      city: '',
      purpose: '',
      wantsConsultation: false,
    });
    setStep(1);
    setIsSubmitting(false);
  };

  const handleInputChange = (field: keyof FormData, value: string | boolean) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    // Clear error for this field
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: undefined }));
    }
  };

  return (
    <div id="lead-form" className="bg-white rounded-2xl shadow-xl p-6 md:p-8">
      {/* Badge */}
      <div className="inline-flex items-center px-3 py-1 rounded-full bg-accent/10 text-accent text-sm font-medium mb-4">
        VIP Consultation
      </div>

      {/* Title */}
      <h3 className="text-2xl md:text-3xl font-bold text-navy mb-2">
        Get Your Investment Portfolio
      </h3>
      <p className="text-gray-600 mb-6">
        Speak with UAE property specialists and receive a curated selection of premium opportunities.
      </p>

      {/* Step Indicators */}
      <div className="flex items-center gap-4 mb-6">
        <div className="flex items-center gap-2">
          <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold ${
            step === 1 ? 'bg-accent text-white' : 'bg-gray-200 text-gray-600'
          }`}>
            1
          </div>
          <span className={`text-sm font-medium ${step === 1 ? 'text-navy' : 'text-gray-500'}`}>
            Contact Info
          </span>
        </div>
        <div className="flex-1 h-px bg-gray-300"></div>
        <div className="flex items-center gap-2">
          <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold ${
            step === 2 ? 'bg-accent text-white' : 'bg-gray-200 text-gray-600'
          }`}>
            2
          </div>
          <span className={`text-sm font-medium ${step === 2 ? 'text-navy' : 'text-gray-500'}`}>
            Investment Details
          </span>
        </div>
      </div>

      {/* Step 1 Form */}
      {step === 1 && (
        <form onSubmit={handleContinue} className="space-y-4">
          <div>
            <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-1">
              Full Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="fullName"
              value={formData.fullName}
              onChange={(e) => handleInputChange('fullName', e.target.value)}
              className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-accent focus:border-accent outline-none transition ${
                errors.fullName ? 'border-red-500' : 'border-gray-300'
              }`}
              placeholder="John Smith"
            />
            {errors.fullName && (
              <p className="mt-1 text-sm text-red-500">{errors.fullName}</p>
            )}
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
              Email Address <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              id="email"
              value={formData.email}
              onChange={(e) => handleInputChange('email', e.target.value)}
              className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-accent focus:border-accent outline-none transition ${
                errors.email ? 'border-red-500' : 'border-gray-300'
              }`}
              placeholder="john@example.com"
            />
            {errors.email && (
              <p className="mt-1 text-sm text-red-500">{errors.email}</p>
            )}
          </div>

          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
              WhatsApp / Phone Number <span className="text-red-500">*</span>
            </label>
            <input
              type="tel"
              id="phone"
              value={formData.phone}
              onChange={(e) => handleInputChange('phone', e.target.value)}
              className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-accent focus:border-accent outline-none transition ${
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
            className="w-full bg-accent hover:bg-accent-dark text-white font-semibold py-4 px-6 rounded-lg transition duration-200 flex items-center justify-center gap-2"
          >
            Continue to Investment Details
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </form>
      )}

      {/* Step 2 Form */}
      {step === 2 && (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="budget" className="block text-sm font-medium text-gray-700 mb-1">
              Investment Budget <span className="text-red-500">*</span>
            </label>
            <select
              id="budget"
              value={formData.budget}
              onChange={(e) => handleInputChange('budget', e.target.value)}
              className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-accent focus:border-accent outline-none transition ${
                errors.budget ? 'border-red-500' : 'border-gray-300'
              }`}
            >
              <option value="">Select your budget</option>
              <option value="under-750k">Under 750,000 AED</option>
              <option value="750k-1.5m">750,000 – 1.5M AED</option>
              <option value="1.5m-3m">1.5M – 3M AED</option>
              <option value="3m-plus">3M+ AED</option>
            </select>
            {errors.budget && (
              <p className="mt-1 text-sm text-red-500">{errors.budget}</p>
            )}
          </div>

          <div>
            <label htmlFor="city" className="block text-sm font-medium text-gray-700 mb-1">
              Preferred City <span className="text-red-500">*</span>
            </label>
            <select
              id="city"
              value={formData.city}
              onChange={(e) => handleInputChange('city', e.target.value)}
              className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-accent focus:border-accent outline-none transition ${
                errors.city ? 'border-red-500' : 'border-gray-300'
              }`}
            >
              <option value="">Select preferred city</option>
              <option value="abu-dhabi">Abu Dhabi</option>
              <option value="dubai">Dubai</option>
              <option value="other">Other / Not sure</option>
            </select>
            {errors.city && (
              <p className="mt-1 text-sm text-red-500">{errors.city}</p>
            )}
          </div>

          <div>
            <label htmlFor="purpose" className="block text-sm font-medium text-gray-700 mb-1">
              Investment Purpose <span className="text-red-500">*</span>
            </label>
            <select
              id="purpose"
              value={formData.purpose}
              onChange={(e) => handleInputChange('purpose', e.target.value)}
              className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-accent focus:border-accent outline-none transition ${
                errors.purpose ? 'border-red-500' : 'border-gray-300'
              }`}
            >
              <option value="">Select investment purpose</option>
              <option value="appreciation">Capital appreciation</option>
              <option value="rental">Rental income</option>
              <option value="residency">Residency alignment</option>
              <option value="mixed">Mixed / Not sure</option>
            </select>
            {errors.purpose && (
              <p className="mt-1 text-sm text-red-500">{errors.purpose}</p>
            )}
          </div>

          <div className="flex items-start gap-3">
            <input
              type="checkbox"
              id="consultation"
              checked={formData.wantsConsultation}
              onChange={(e) => handleInputChange('wantsConsultation', e.target.checked)}
              className="mt-1 w-4 h-4 text-accent border-gray-300 rounded focus:ring-accent"
            />
            <label htmlFor="consultation" className="text-sm text-gray-700">
              I'd like to schedule a consultation call.
            </label>
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-accent hover:bg-accent-dark text-white font-semibold py-4 px-6 rounded-lg transition duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? 'Sending...' : 'Send Me Investment Options'}
          </button>

          <div className="text-center space-y-1">
            <p className="text-sm text-gray-600">No pressure, no obligations.</p>
            <p className="text-xs text-gray-500">Secure & confidential. Your details are never shared.</p>
          </div>

          <button
            type="button"
            onClick={() => setStep(1)}
            className="w-full text-sm text-gray-600 hover:text-navy underline"
          >
            ← Back to Contact Info
          </button>
        </form>
      )}
    </div>
  );
}
