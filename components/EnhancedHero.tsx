'use client';

import { useState } from 'react';
import EnhancedLeadForm from './EnhancedLeadForm';

export default function EnhancedHero() {
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  const scrollToForm = () => {
    const formElement = document.getElementById('lead-form');
    if (formElement) {
      formElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleContactClick = () => {
    if (window.innerWidth < 768) {
      window.location.href = 'tel:+971529009133';
    } else {
      const footer = document.getElementById('footer');
      if (footer) {
        footer.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const quickStats = [
    { number: '500+', label: 'Properties Sold' },
    { number: '98%', label: 'Client Satisfaction' },
    { number: '15+', label: 'Years Experience' },
    { number: '24/7', label: 'Support Available' },
  ];

  const miniTestimonials = [
    { name: 'Sarah M.', text: 'Secured my Golden Visa property in 2 weeks!' },
    { name: 'Ahmed K.', text: 'Best ROI in Dubai - 8% annual returns' },
    { name: 'James L.', text: 'Professional team, seamless process' },
  ];

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-navy via-navy-dark to-navy-light overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-10 w-72 h-72 bg-accent/10 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-gold/10 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '1s' }}></div>
      </div>

      {/* Trust Bar */}
      <div className="relative z-10 bg-white/95 backdrop-blur-sm border-b border-gray-200">
        <div className="container mx-auto px-4 py-3">
          <div className="flex flex-wrap items-center justify-center gap-6 text-sm">
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-accent" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="font-semibold text-navy">RERA Licensed</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-accent" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
              </svg>
              <span className="text-gray-700">500+ Happy Investors</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-accent" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M5 2a1 1 0 011 1v1h1a1 1 0 010 2H6v1a1 1 0 01-2 0V6H3a1 1 0 010-2h1V3a1 1 0 011-1zm0 10a1 1 0 011 1v1h1a1 1 0 110 2H6v1a1 1 0 11-2 0v-1H3a1 1 0 110-2h1v-1a1 1 0 011-1zM12 2a1 1 0 01.967.744L14.146 7.2 17.5 9.134a1 1 0 010 1.732l-3.354 1.935-1.18 4.455a1 1 0 01-1.933 0L9.854 12.8 6.5 10.866a1 1 0 010-1.732l3.354-1.935 1.18-4.455A1 1 0 0112 2z" clipRule="evenodd" />
              </svg>
              <span className="text-gray-700">Award-Winning Service</span>
            </div>
            <div className="flex items-center gap-2 text-accent font-semibold animate-pulse">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
              </svg>
              <span>Limited Pre-Launch Units Available</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-20 container mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-16">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          {/* Left Side - Content */}
          <div className="order-2 lg:order-1 space-y-6 animate-fade-in">
            {/* Urgency Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-accent to-gold text-white text-sm font-bold shadow-lg">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-white"></span>
              </span>
              🔥 HOT: New Off-Plan Projects Just Released
            </div>

            {/* Main Headline */}
            <div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight mb-4 text-white">
                Unlock Your
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent via-gold-light to-accent">
                  UAE Property Empire
                </span>
              </h1>
              <p className="text-xl sm:text-2xl text-gray-300 mb-4 font-medium">
                Premium Abu Dhabi & Dubai investments with guaranteed ROI potential
              </p>
              <div className="flex items-center gap-2 text-accent-light">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-sm font-semibold">Golden Visa Eligible Properties • 0% Commission on Select Units</span>
              </div>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {quickStats.map((stat, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-4 text-center hover:bg-white/15 transition-all duration-300 hover:scale-105">
                  <div className="text-2xl sm:text-3xl font-bold text-accent-light mb-1">{stat.number}</div>
                  <div className="text-xs text-gray-300">{stat.label}</div>
                </div>
              ))}
            </div>

            {/* Value Props */}
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                { icon: '🏆', title: 'Golden Visa Ready', desc: 'Properties from 750K AED' },
                { icon: '💰', title: 'High ROI Projects', desc: 'Up to 8-10% annual returns' },
                { icon: '🎯', title: 'Pre-Launch Access', desc: 'Exclusive off-market deals' },
                { icon: '⚡', title: 'Fast-Track Service', desc: 'Reserve in 24-48 hours' },
              ].map((item, index) => (
                <div key={index} className="flex items-start gap-3 bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-4 hover:bg-white/10 transition-all">
                  <span className="text-3xl">{item.icon}</span>
                  <div>
                    <h3 className="font-bold text-white mb-1">{item.title}</h3>
                    <p className="text-sm text-gray-400">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Social Proof Ticker */}
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-4">
              <div className="flex items-center gap-3 overflow-hidden">
                <div className="flex-shrink-0">
                  <div className="flex -space-x-2">
                    {[1, 2, 3, 4].map((i) => (
                      <div key={i} className="w-10 h-10 rounded-full bg-gradient-to-br from-accent to-gold border-2 border-white flex items-center justify-center text-white font-bold text-sm">
                        {String.fromCharCode(64 + i)}
                      </div>
                    ))}
                  </div>
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm text-gray-300 truncate">
                    <span className="font-semibold text-white">{miniTestimonials[activeTestimonial].name}:</span> "{miniTestimonials[activeTestimonial].text}"
                  </p>
                  <div className="flex gap-1 mt-1">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-4 h-4 text-gold-light" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <button
                onClick={scrollToForm}
                className="group relative bg-gradient-to-r from-accent to-gold hover:from-accent-dark hover:to-gold-dark text-white font-bold py-5 px-8 rounded-xl transition-all duration-300 shadow-2xl hover:shadow-accent/50 hover:scale-105 overflow-hidden"
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  🎁 Get FREE Investment Guide
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </span>
                <div className="absolute inset-0 bg-white/20 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
              </button>
              <button
                onClick={handleContactClick}
                className="border-2 border-accent hover:bg-accent text-white font-semibold py-5 px-8 rounded-xl transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                Call Expert Now
              </button>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap items-center gap-4 text-sm text-gray-400 pt-2">
              <div className="flex items-center gap-1">
                <svg className="w-4 h-4 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>SSL Secured</span>
              </div>
              <div className="flex items-center gap-1">
                <svg className="w-4 h-4 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                </svg>
                <span>Your data is 100% confidential</span>
              </div>
              <div className="flex items-center gap-1">
                <svg className="w-4 h-4 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>No spam, ever</span>
              </div>
            </div>
          </div>

          {/* Right Side - Enhanced Form */}
          <div className="order-1 lg:order-2 animate-slide-up">
            <EnhancedLeadForm />
          </div>
        </div>
      </div>
    </section>
  );
}
