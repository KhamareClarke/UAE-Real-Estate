'use client';

import EliteHero from '@/components/EliteHero';
import Elite3DPropertyCards from '@/components/Elite3DPropertyCards';
import TestimonialCarousel from '@/components/TestimonialCarousel';
import ScrollActivatedVideo from '@/components/ScrollActivatedVideo';
import MobileFormSection from '@/components/MobileFormSection';
import { useFormModal } from '@/contexts/FormModalContext';

// Minimalist high-converting funnel
// 5 sections only, maximum clarity, zero clutter
// Metadata is handled in app/layout.tsx for better SEO consistency

export default function MinimalPage() {
  const { openFormModal } = useFormModal();
  
  return (
    <main className="min-h-screen bg-white">
      
      {/* 1. HERO - Lead capture above the fold */}
      <EliteHero />
      
      {/* 2. PROPERTIES - Just 2 cards, clear and simple */}
      <Elite3DPropertyCards />
      
      {/* 3. WHY UAE - 3 benefits only */}
      <section className="py-16 bg-gradient-to-b from-white via-gray-50 to-white relative overflow-hidden">
        {/* Background Mesh */}
        <div className="absolute inset-0 bg-gradient-mesh opacity-50" />
        
        <div className="container mx-auto px-4 sm:px-6 max-w-6xl relative z-10">
          <h1 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl font-black text-center mb-8 sm:mb-12 tracking-tight">
            <span className="text-navy-900">Why Investors Choose the </span>
            <span className="text-gradient-primary inline-block">UAE</span>
          </h1>
          
          <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 md:gap-12">
            <div className="text-center group card-premium bg-white rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-glow-primary">
              <div className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-gradient-primary mb-3 sm:mb-4 leading-none">0%</div>
              <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-navy-900 tracking-tight">Property & Capital Gains Tax</h3>
              <p className="text-base sm:text-lg text-navy-600 leading-relaxed font-medium">
                No property tax. No capital gains tax. Full rental income retained.
              </p>
            </div>
            
            <div className="text-center group card-premium bg-white rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-glow-gold">
              <div className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-gradient-gold mb-3 sm:mb-4 leading-none">10Y</div>
              <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-navy-900 tracking-tight">Golden Visa Residency</h3>
              <p className="text-base sm:text-lg text-navy-600 leading-relaxed font-medium">
                Renewable long-term residency for investor and immediate family members.
              </p>
            </div>
            
            <div className="text-center group card-premium bg-white rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-glow-primary">
              <div className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-gradient-luxury mb-3 sm:mb-4 leading-none">8%</div>
              <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-navy-900 tracking-tight">Annual Rental Yields</h3>
              <p className="text-base sm:text-lg text-navy-600 leading-relaxed font-medium">
                Regulated market with consistent tenant demand and transparent landlord protections.
              </p>
            </div>
          </div>
          
          {/* CTA for Why UAE Section */}
          <div className="text-center mt-12 space-y-2">
            <button onClick={openFormModal} className="btn-primary text-lg px-12 py-5 rounded-2xl">
              Request a Private Investment Review
              <svg className="w-5 h-5 inline-block ml-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </button>
            <p className="text-sm text-navy-600">
              Reviewed directly by a senior RERA-licensed advisor
            </p>
          </div>
        </div>
      </section>
      
      {/* 3.5 IMAGE SECTION - Showcase UAE */}
      <section className="py-20 bg-gradient-to-br from-navy-900 via-navy-800 to-black relative overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-dark-900/90 via-navy-900/80 to-black/90" />
          <div className="absolute inset-0 bg-noise opacity-[0.03]" />
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 max-w-6xl relative z-10">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-3xl xs:text-4xl sm:text-4xl md:text-5xl font-black mb-4 sm:mb-6 tracking-tight px-4 sm:px-0" style={{ background: 'linear-gradient(135deg, #FFFFFF 0%, #FFD700 50%, #FFFFFF 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
              Experience the UAE
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-white/80 max-w-3xl mx-auto leading-relaxed px-4 sm:px-0">
              Infrastructure-backed developments and regulatory transparency across the region's most stable residential markets.
            </p>
          </div>
          
          {/* Image Container - Static image display */}
          <ScrollActivatedVideo />
          
          {/* Video Section CTA */}
          <div className="text-center mt-12 space-y-2">
            <button onClick={openFormModal} className="bg-gradient-to-r from-primary-500 via-primary-600 to-primary-700 hover:from-primary-600 hover:via-primary-700 hover:to-primary-800 text-white font-bold py-4 sm:py-5 px-6 sm:px-8 md:px-12 rounded-2xl transition-all shadow-2xl hover:shadow-primary-500/40 flex items-center justify-center gap-3 mx-auto border border-primary-400/20 text-base sm:text-lg min-h-[44px] w-full sm:w-auto">
              Request Investment Breakdown
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
            </button>
            <p className="text-sm text-white/70">
              Handled confidentially
            </p>
          </div>
        </div>
      </section>
      
      {/* 4. SOCIAL PROOF - 1 testimonial + numbers */}
      <section className="py-16 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-gradient-radial-primary" />
        
        <div className="container mx-auto px-4 sm:px-6 max-w-4xl relative z-10">
          <div className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10 shadow-2xl border border-gray-100">
            <TestimonialCarousel />
            
            <div className="grid grid-cols-3 gap-2 sm:gap-3 md:gap-6 pt-6 sm:pt-8 border-t border-gray-200">
              <div className="text-center">
                <div className="text-xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-gradient-primary mb-1 sm:mb-2 leading-none">500+</div>
                <div className="text-[10px] xs:text-xs sm:text-sm text-navy-600 font-semibold">Private Investors</div>
              </div>
              <div className="text-center">
                <div className="text-xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-gradient-gold mb-1 sm:mb-2 leading-none">AED 2B+</div>
                <div className="text-[10px] xs:text-xs sm:text-sm text-navy-600 font-semibold">Transaction Volume</div>
              </div>
              <div className="text-center">
                <div className="text-xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-gradient-luxury mb-1 sm:mb-2 leading-none">15+</div>
                <div className="text-[10px] xs:text-xs sm:text-sm text-navy-600 font-semibold">Years RERA-Licensed</div>
              </div>
            </div>
          </div>
          
          {/* CTA for Social Proof Section */}
          <div className="text-center mt-12 space-y-2">
            <button onClick={openFormModal} className="btn-primary text-lg px-12 py-5 rounded-2xl">
              Request Private Access
              <svg className="w-5 h-5 inline-block ml-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </button>
            <a href="#elite-form" className="inline-flex items-center justify-center gap-2 text-navy-600 hover:text-primary-600 text-sm sm:text-base font-semibold underline decoration-2 underline-offset-4 transition-all hover:decoration-primary-500 mt-2 min-h-[44px] px-4 py-2 rounded-lg hover:bg-navy-50 active:bg-navy-100">
              <span>See Selected Residences</span>
              <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </a>
          </div>
        </div>
      </section>
      
      {/* 5. FAQ SECTION - Answers common questions */}
      <section className="py-16 bg-white relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 max-w-4xl relative z-10">
          <h2 className="text-3xl xs:text-4xl sm:text-5xl font-black text-center mb-8 sm:mb-12 tracking-tight">
            <span className="text-navy-900">Frequently Asked </span>
            <span className="text-gradient-primary inline-block">Questions</span>
          </h2>
          
          <div className="space-y-6">
            {/* FAQ 1 */}
            <details className="group bg-gradient-to-br from-white to-gray-50 rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all">
              <summary className="flex justify-between items-center cursor-pointer list-none font-bold text-lg text-navy-900 hover:text-primary-600 transition-colors">
                <span>What is the UAE Golden Visa?</span>
                <svg className="w-6 h-6 text-primary-500 group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <p className="mt-4 text-navy-600 leading-relaxed">
                The UAE Golden Visa is a long-term residency visa that allows investors and their families to live, work, and study in the UAE. Property investors can qualify by purchasing real estate worth AED 2 million or more.
              </p>
            </details>

            {/* FAQ 2 */}
            <details className="group bg-gradient-to-br from-white to-gray-50 rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all">
              <summary className="flex justify-between items-center cursor-pointer list-none font-bold text-lg text-navy-900 hover:text-primary-600 transition-colors">
                <span>Can foreigners buy property in UAE?</span>
                <svg className="w-6 h-6 text-primary-500 group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <p className="mt-4 text-navy-600 leading-relaxed">
                Yes, foreigners can buy freehold properties in designated areas of Dubai and Abu Dhabi with 100% ownership rights. No restrictions apply to nationality for freehold properties.
              </p>
            </details>

            {/* FAQ 3 */}
            <details className="group bg-gradient-to-br from-white to-gray-50 rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all">
              <summary className="flex justify-between items-center cursor-pointer list-none font-bold text-lg text-navy-900 hover:text-primary-600 transition-colors">
                <span>What are the benefits of investing in UAE real estate?</span>
                <svg className="w-6 h-6 text-primary-500 group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <p className="mt-4 text-navy-600 leading-relaxed">
                Benefits include: 0% property tax, 0% capital gains tax, high rental yields (5-8%), Golden Visa eligibility, 100% ownership, stable economy, and strategic location for international business.
              </p>
            </details>

            {/* FAQ 4 */}
            <details className="group bg-gradient-to-br from-white to-gray-50 rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all">
              <summary className="flex justify-between items-center cursor-pointer list-none font-bold text-lg text-navy-900 hover:text-primary-600 transition-colors">
                <span>What is the minimum investment for Golden Visa?</span>
                <svg className="w-6 h-6 text-primary-500 group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <p className="mt-4 text-navy-600 leading-relaxed">
                The minimum property investment for UAE Golden Visa eligibility is AED 2 million (approximately USD 545,000). This can be a single property or multiple properties totaling AED 2 million.
              </p>
            </details>

            {/* FAQ 5 */}
            <details className="group bg-gradient-to-br from-white to-gray-50 rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all">
              <summary className="flex justify-between items-center cursor-pointer list-none font-bold text-lg text-navy-900 hover:text-primary-600 transition-colors">
                <span>Are there property taxes in UAE?</span>
                <svg className="w-6 h-6 text-primary-500 group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <p className="mt-4 text-navy-600 leading-relaxed">
                No, the UAE has no property tax, no capital gains tax, and no inheritance tax. This makes it one of the most tax-efficient real estate markets globally.
              </p>
            </details>
          </div>

          {/* FAQ CTA */}
          <div className="text-center mt-12">
            <div className="space-y-3">
              <button onClick={openFormModal} className="btn-primary text-lg px-12 py-5 rounded-2xl">
                Get Expert Answers to Your Questions
                  <svg className="w-5 h-5 inline-block ml-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
              </button>
              <p className="text-sm text-navy-600">
                Free consultation • RERA licensed advisors • No obligation
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. FINAL CTA - Simple and clear */}
      <section className="py-16 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-mesh opacity-30" />
        
        <div className="container mx-auto px-4 sm:px-6 max-w-3xl text-center relative z-10">
          <h2 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl font-black mb-4 sm:mb-6 tracking-tight leading-tight">
            <span className="text-navy-900">Request a Private</span><br className="hidden md:block" />
            <span className="text-gradient-primary inline-block">Investment Review</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-navy-600 mb-6 sm:mb-8 leading-relaxed font-medium px-4 sm:px-0">
            Tailored investment overview, payment structures, and residency pathway assessment. Handled directly by a senior RERA-licensed advisor.
          </p>
          <div className="space-y-3">
            <button onClick={openFormModal} className="btn-primary text-base sm:text-lg md:text-xl px-6 sm:px-12 md:px-20 py-5 sm:py-6 md:py-7 rounded-2xl min-h-[44px] w-full sm:w-auto">
              Speak With a Senior Advisor
              <svg className="w-6 h-6 inline-block ml-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </button>
            <p className="text-sm text-navy-600">
              Private inquiry • No obligation • Fully confidential
            </p>
          </div>
        </div>
      </section>
      
      {/* MOBILE FORM SECTION - Shows only on mobile, above footer */}
      <MobileFormSection />
      
      {/* FOOTER - Enhanced Professional */}
      <footer className="bg-gradient-to-br from-navy-900 via-navy-800 to-black text-white py-12 sm:py-16 md:py-20 relative overflow-hidden">
        {/* Enhanced Background Pattern */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 opacity-[0.03]" style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(255,106,0,0.4) 1px, transparent 0)',
            backgroundSize: '48px 48px'
          }} />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 max-w-6xl relative z-10">
          {/* Main Footer Content */}
          <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-8 sm:gap-12 md:gap-16 mb-12 sm:mb-16">
            {/* Company Info */}
            <div className="md:col-span-1">
              <div className="mb-6">
                <h3 className="font-black text-2xl mb-3 tracking-tight">
                  <span className="bg-gradient-to-r from-primary-400 via-yellow-400 to-primary-500 bg-clip-text text-transparent">City Plaza</span>
                  <span className="text-white"> Real Estate</span>
                </h3>
                <div className="h-1 w-20 bg-gradient-to-r from-primary-500 to-yellow-400 rounded-full mb-6"></div>
              </div>
              <p className="text-white/90 leading-relaxed font-medium mb-4 sm:mb-6 text-xs sm:text-sm break-words">
                A RERA-licensed brokerage with over 15 years' experience advising private investors on prime UAE residential assets.
              </p>
              <div className="flex flex-wrap gap-2 text-[10px] sm:text-xs">
                <span className="text-white/70 break-words">Developer-direct access</span>
                <span className="text-white/40">•</span>
                <span className="text-white/70 break-words">RERA-Licensed</span>
              </div>
            </div>
            
            {/* Contact */}
            <div className="md:col-span-1">
              <h4 className="font-bold text-xs sm:text-sm mb-4 sm:mb-6 tracking-wide text-white uppercase">Contact</h4>
              <div className="space-y-3 sm:space-y-4">
                <a href="tel:+971529009133" className="flex items-center gap-2 sm:gap-3 text-white/90 hover:text-primary-400 transition-colors min-h-[44px]">
                  <svg className="w-5 h-5 text-primary-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <span className="font-semibold text-xs sm:text-sm break-words">+971 52 900 9133</span>
                </a>
                <a href="mailto:Khadijat.omosumi@cityplazare.com" className="flex items-start gap-2 sm:gap-3 text-white/90 hover:text-primary-400 transition-colors min-h-[44px]">
                  <svg className="w-5 h-5 text-primary-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <span className="text-[10px] sm:text-xs font-medium break-words leading-relaxed">Khadijat.omosumi@cityplazare.com</span>
                </a>
              </div>
            </div>
            
            {/* Office */}
            <div className="md:col-span-1">
              <h4 className="font-bold text-xs sm:text-sm mb-4 sm:mb-6 tracking-wide text-white uppercase">Office Location</h4>
              <div className="flex items-start gap-2 sm:gap-3">
                <svg className="w-5 h-5 text-primary-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <div>
                  <p className="text-white/90 leading-relaxed font-medium text-xs sm:text-sm break-words">
                    3rd Floor, Gate 25<br />
                    Aljazeera Stadium<br />
                    <span className="text-white font-bold">Abu Dhabi, UAE</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Legal & Compliance */}
          <div className="border-t border-white/10 pt-8 sm:pt-10 md:pt-12 mb-8 sm:mb-10 md:mb-12 text-center">
            <h4 className="font-bold text-xs sm:text-sm mb-4 sm:mb-6 tracking-wide text-white uppercase">Legal & Compliance</h4>
            <div className="flex flex-wrap justify-center gap-x-4 sm:gap-x-6 md:gap-x-8 gap-y-3 mb-4 sm:mb-6">
              <a href="/privacy" className="text-white/70 hover:text-primary-400 transition-colors text-[10px] sm:text-xs font-medium hover:underline underline-offset-4 break-words">Privacy Policy</a>
              <a href="/terms" className="text-white/70 hover:text-primary-400 transition-colors text-[10px] sm:text-xs font-medium hover:underline underline-offset-4 break-words">Terms & Conditions</a>
              <a href="/disclaimer" className="text-white/70 hover:text-primary-400 transition-colors text-[10px] sm:text-xs font-medium hover:underline underline-offset-4 break-words">Disclaimer</a>
              <a href="/cookie-policy" className="text-white/70 hover:text-primary-400 transition-colors text-[10px] sm:text-xs font-medium hover:underline underline-offset-4 break-words">Cookie Policy</a>
            </div>
            <p className="text-white/60 text-[10px] sm:text-xs leading-relaxed max-w-4xl mx-auto px-4 sm:px-0">
              All inquiries handled in accordance with UAE regulatory standards. No information on this site constitutes financial or investment advice.
            </p>
          </div>
          
          {/* Copyright */}
          <div className="text-center text-white/70 text-[10px] sm:text-xs border-t border-white/10 pt-6 sm:pt-8 md:pt-10 px-4 sm:px-0">
            <p className="font-medium leading-relaxed break-words">
              © 2025 <span className="text-white font-semibold">City Plaza Real Estate</span>
              <span className="mx-2 sm:mx-3 text-white/30">•</span>
              RERA License <span className="bg-gradient-to-r from-primary-400 to-yellow-400 bg-clip-text text-transparent font-bold">#1189</span>
              <span className="mx-2 sm:mx-3 text-white/30">•</span>
              All rights reserved.
            </p>
          </div>
        </div>
      </footer>
      
      {/* Floating WhatsApp - Hidden on mobile, visible on desktop */}
      <a
        href="https://wa.me/971529009133"
        target="_blank"
        rel="noopener noreferrer"
        className="hidden md:flex fixed bottom-6 right-6 lg:bottom-8 lg:right-8 w-16 h-16 bg-green-500 hover:bg-green-600 rounded-full items-center justify-center shadow-2xl hover:scale-110 transition-all z-50 animate-pulse"
      >
        <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
        </svg>
      </a>
      
    </main>
  );
}
