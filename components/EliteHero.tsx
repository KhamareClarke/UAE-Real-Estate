'use client';

import { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';

export default function EliteHero() {
  const [formData, setFormData] = useState({ 
    name: '', 
    whatsapp: '', 
    email: '', 
    investmentRange: '',
    preferredProject: ''
  });
  const [showSuccess, setShowSuccess] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [currentSlide, setCurrentSlide] = useState(0);

  // Carousel slides data
  const slides = [
    {
      title: "Private Access to Prime UAE Real Estate",
      subtitle: "Developer-direct. Golden Visa Eligible. Handled Discreetly."
    },
    {
      title: "Secure Lifetime UAE Residency Through Real Estate",
      subtitle: "Available to qualifying investors — fast-tracked, government-backed."
    },
    {
      title: "Investor-Ready Residences in Abu Dhabi & Dubai",
      subtitle: "Curated by licensed advisors. High ROI. Limited stock."
    },
    {
      title: "Up to 40% Developer Discount + Golden Visa Allocation",
      subtitle: "Act now. 2025 allocations closing."
    }
  ];

  const { scrollY } = useScroll();
  // Remove scroll-based animations to keep hero visible
  const y = 0;
  const opacity = 1;

  // Carousel auto-rotation
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev: number) => (prev + 1) % slides.length);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, [slides.length]);

  // Mouse tracking for parallax effect - slowed down
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX - window.innerWidth / 2) / 150, // Slowed down from 50 to 150
        y: (e.clientY - window.innerHeight / 2) / 150, // Slowed down from 50 to 150
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

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

  const scrollToForm = () => {
    const formElement = document.getElementById('elite-form');
    if (formElement) {
      formElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3,
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1]
      }
    }
  };

  const wordVariants = {
    hidden: { opacity: 0, y: 15 }, // Reduced movement
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.25, // Slowed down from 0.1 to 0.25
        duration: 1.2,  // Doubled from 0.6 to 1.2
        ease: [0.16, 1, 0.3, 1] // Gentler easing
      }
    })
  };

  return (
    <section id="elite-form" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-navy-900 via-navy-800 to-black">
      
      {/* Video Background with Overlay */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          className="absolute inset-0 w-full h-full"
          style={{ 
            objectFit: 'cover', 
            objectPosition: 'center',
            width: '100%',
            height: '100%',
            filter: 'none',
            WebkitFilter: 'none' as any,
            transform: 'none',
            imageRendering: 'crisp-edges' as any,
            opacity: 1
          } as React.CSSProperties}
        >
          <source src="/images/hero-background.mp4" type="video/mp4" />
        </video>
        
        {/* Light overlay for text readability - positioned above video */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/60 z-10" />
      </div>

      {/* Floating Particles - Reduced */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        {[...Array(10)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-primary-500/30 rounded-full"
            initial={{
              x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1920),
              y: Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 1080),
            }}
            animate={{
              y: [null, Math.random() * -100 - 50],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: Math.random() * 6 + 5, // Slowed down from 3+2 to 6+5
              repeat: Infinity,
              delay: Math.random() * 4, // Increased delay from 2 to 4
              ease: "easeInOut" // Added smoother easing
            }}
          />
        ))}
      </div>

      {/* Header Navigation */}
      <motion.div
        className="absolute top-0 left-0 right-0 z-50"
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-12 py-4 sm:py-6">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <motion.div
              className="flex items-center gap-3"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <div className="w-10 h-10 bg-gradient-to-br from-primary-500 to-primary-700 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">CP</span>
              </div>
              <div>
                <h1 className="text-white font-bold text-lg" style={{ textShadow: '0 2px 6px rgba(0,0,0,0.8)' }}>City Plaza</h1>
                <p className="text-white text-xs font-semibold" style={{ textShadow: '0 2px 6px rgba(0,0,0,0.8)' }}>Real Estate</p>
              </div>
            </motion.div>

            {/* Contact Buttons - Hidden on Mobile */}
            <div className="hidden lg:flex items-center gap-2 sm:gap-3">
              <motion.a
                href="tel:+971501234567"
                className="flex items-center gap-2 px-3 sm:px-4 py-2 bg-[#FF6A00] hover:bg-[#FF8534] backdrop-blur-md rounded-full transition-all group shadow-lg"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <svg className="w-4 h-4 sm:w-5 sm:h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span className="text-white font-medium text-xs sm:text-sm hidden lg:inline" style={{ textShadow: '0 2px 6px rgba(0,0,0,0.8)' }}>+971 50 123 4567</span>
              </motion.a>
              
              <motion.a
                href="mailto:info@cityplazarealestate.com?subject=Investment Inquiry&body=Phone: +971 50 123 4567"
                className="flex items-center gap-2 px-3 sm:px-4 py-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full hover:bg-white/20 transition-all group"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <svg className="w-4 h-4 sm:w-5 sm:h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span className="text-white font-medium text-xs sm:text-sm hidden lg:inline" style={{ textShadow: '0 2px 6px rgba(0,0,0,0.8)' }}>Email Us</span>
              </motion.a>
              
              <motion.a
                href="https://wa.me/971501234567"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-3 sm:px-4 py-2 bg-green-500 hover:bg-green-600 backdrop-blur-md rounded-full transition-all group shadow-lg"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <svg className="w-4 h-4 sm:w-5 sm:h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                <span className="text-white font-medium text-xs sm:text-sm hidden lg:inline" style={{ textShadow: '0 2px 6px rgba(0,0,0,0.8)' }}>WhatsApp</span>
              </motion.a>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Main Content */}
      <motion.div
        className="relative z-10 w-full px-4 sm:px-6 md:px-8 lg:px-16 xl:px-24 pt-20 sm:pt-24 md:pt-28 lg:pt-32 xl:pt-48 pb-16 sm:pb-20 md:pb-24 lg:pb-20"
        style={{ y, opacity }}
      >
        <div className="max-w-[1600px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 lg:gap-20 items-start">
            
            {/* Left Column - Content */}
            <motion.div
              className="space-y-5 sm:space-y-6 lg:space-y-8 text-center lg:text-left lg:-mt-16 xl:-mt-24"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              
              {/* Rotating Text Carousel */}
              <div className="space-y-3 sm:space-y-4 lg:space-y-5 min-h-[280px] sm:min-h-[320px] md:min-h-[360px] lg:min-h-[400px] flex flex-col justify-center">
                <motion.div 
                  variants={itemVariants}
                  className="relative overflow-hidden"
                >
                  {slides.map((slide, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 50 }}
                      animate={{
                        opacity: currentSlide === index ? 1 : 0,
                        y: currentSlide === index ? 0 : 50,
                        position: currentSlide === index ? 'relative' : 'absolute',
                        top: 0,
                        left: 0,
                        right: 0
                      }}
                      transition={{
                        duration: 0.8,
                        ease: [0.22, 1, 0.36, 1]
                      }}
                      className="space-y-4 sm:space-y-6"
                    >
                      <motion.h1 
                        className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black leading-tight tracking-tight text-cinematic" 
                        style={{ 
                          background: 'linear-gradient(135deg, #FFFFFF 0%, #FFD700 50%, #FFFFFF 100%)', 
                          WebkitBackgroundClip: 'text', 
                          WebkitTextFillColor: 'transparent', 
                          backgroundClip: 'text', 
                          filter: 'drop-shadow(0 2px 10px rgba(0,0,0,0.8)) drop-shadow(0 4px 20px rgba(0,0,0,0.6))' 
                        }}
                      >
                        {slide.title}
                      </motion.h1>

                      <motion.p
                        className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-light leading-relaxed max-w-2xl mx-auto lg:mx-0 tracking-wide text-white px-4 sm:px-0"
                        style={{ 
                          fontFamily: 'Georgia, serif', 
                          wordSpacing: '0.1em', 
                          textShadow: '0 2px 8px rgba(0,0,0,0.8), 0 1px 3px rgba(0,0,0,0.9)' 
                        }}
                      >
                        {slide.subtitle}
                      </motion.p>
                    </motion.div>
                  ))}
                </motion.div>

                {/* Carousel Indicators */}
                <motion.div 
                  variants={itemVariants}
                  className="flex items-center justify-center lg:justify-start gap-2 px-4 sm:px-0"
                >
                  {slides.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentSlide(index)}
                      className={`h-2 rounded-full transition-all duration-300 ${
                        currentSlide === index 
                          ? 'w-8 bg-primary-500' 
                          : 'w-2 bg-white/30 hover:bg-white/50'
                      }`}
                      aria-label={`Go to slide ${index + 1}`}
                    />
                  ))}
                </motion.div>
              </div>

              {/* Trust Markers Grid */}
              <motion.div
                variants={itemVariants}
                className="grid grid-cols-3 gap-2 sm:gap-3 lg:gap-4 px-4 sm:px-0"
              >
                {[
                  { number: '15+', label: 'Years Licensed Experience', icon: '◆' },
                  { number: 'AED 2B+', label: 'Transaction Volume', icon: '◆' },
                  { number: '98%', label: 'Client Satisfaction', icon: '◆' },
                ].map((stat, index) => (
                  <motion.div
                    key={index}
                    className="group relative bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-3 sm:p-4 text-center hover:bg-white/10 hover:border-primary-500/50 transition-all duration-300 overflow-hidden"
                    whileHover={{ scale: 1.05, y: -5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-primary-500/0 to-primary-500/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                    <div className="relative z-10 flex flex-col items-center justify-center text-center">
                      <div className="flex items-center justify-center gap-1.5 sm:gap-2 mb-1">
                        <span className="text-base sm:text-lg text-primary-400">{stat.icon}</span>
                        <span className="text-gradient-gold font-black text-xl sm:text-2xl md:text-3xl tracking-tight leading-none">{stat.number}</span>
                      </div>
                      <span className="text-white text-[10px] sm:text-[11px] font-semibold tracking-wide uppercase leading-tight" style={{ textShadow: '0 2px 6px rgba(0,0,0,0.8)' }}>{stat.label}</span>
                    </div>
                  </motion.div>
                ))}
              </motion.div>

              {/* Primary CTA */}
              <motion.div
                variants={itemVariants}
                className="space-y-4 flex flex-col items-center lg:items-start"
              >
                <div className="space-y-3">
                  <motion.button
                    onClick={scrollToForm}
                    className="group relative px-6 sm:px-8 md:px-12 py-4 sm:py-5 bg-gradient-to-r from-primary-500 via-primary-600 to-primary-700 text-white font-bold text-lg sm:text-xl rounded-2xl overflow-hidden shadow-2xl shadow-primary-500/40 border border-primary-400/20 w-full sm:w-auto min-h-[44px] flex items-center justify-center"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-primary-600 to-primary-700 opacity-0 group-hover:opacity-100 transition-opacity" />
                    <div className="relative flex items-center justify-center gap-3">
                      <span>Request Private Access</span>
                      <motion.svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        animate={{ x: [0, 5, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                      </motion.svg>
                    </div>
                  </motion.button>
                  
                  <p className="text-white text-base font-medium" style={{ textShadow: '0 2px 6px rgba(0,0,0,0.8)' }}>
                    Senior advisor response • Fully confidential
                  </p>
                </div>
                
                <a href="#elite-form" className="inline-flex items-center justify-center gap-2 text-white hover:text-primary-300 text-base sm:text-lg font-semibold underline decoration-2 underline-offset-4 transition-all hover:decoration-primary-400 mt-3 sm:mt-4 px-4 py-2 rounded-lg hover:bg-white/10 active:bg-white/5 min-h-[44px] w-full sm:w-auto justify-center sm:justify-start" style={{ textShadow: '0 2px 6px rgba(0,0,0,0.8)' }}>
                  <span>See Selected Residences</span>
                  <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </a>
              </motion.div>
            </motion.div>

            {/* Right Column - Glassmorphism Lead Form - Hidden on Mobile */}
            <motion.div
              className="relative lg:sticky lg:top-4 -mt-12 lg:-mt-28 hidden lg:block"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5, duration: 1.8 }}
            >
              {/* Glow Effect Behind Form - Slow Pulse */}
              <motion.div 
                className="absolute -inset-4 bg-gradient-to-r from-primary-500/15 to-primary-600/15 rounded-3xl blur-3xl"
                animate={{ 
                  opacity: [0.6, 0.8, 0.6],
                  scale: [1, 1.02, 1]
                }}
                transition={{ 
                  duration: 8, // Very slow 8-second cycle
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              
              <div className="relative bg-white/20 md:bg-white/10 backdrop-blur-xl border border-white/30 md:border-white/20 rounded-2xl shadow-2xl overflow-hidden">
                {/* Shimmer Effect - Slowed Down */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent" style={{ 
                  backgroundSize: '200% 100%',
                  animation: 'shimmer 8s linear infinite' // Slowed from default 2s to 8s
                }} />
                
                <div className="relative p-8">
                  {!showSuccess ? (
                    <>
                      <div className="space-y-3 mb-8">
                        <div className="space-y-3 text-center">
                          <motion.h3
                            className="text-4xl sm:text-3xl font-black leading-tight tracking-tight"
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.7, duration: 1.5 }}
                            style={{ background: 'linear-gradient(135deg, #FFFFFF 0%, #FFD700 50%, #FFFFFF 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text', filter: 'drop-shadow(0 2px 8px rgba(0,0,0,0.8))' }}
                          >
                            Private Investment Review
                          </motion.h3>
                          <motion.p
                            className="text-xl sm:text-lg font-semibold leading-relaxed tracking-wide text-white"
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.8, duration: 1.5 }}
                            style={{ fontFamily: 'Georgia, serif', textShadow: '0 2px 8px rgba(0,0,0,0.8)' }}
                          >
                            A confidential review designed to assess:
                          </motion.p>
                          <motion.div
                            className="text-lg sm:text-base text-white flex items-center justify-center flex-wrap gap-x-2 gap-y-1 px-4 py-2.5 bg-white/5 rounded-lg border border-white/10 mx-auto"
                            style={{ textShadow: '0 2px 6px rgba(0,0,0,0.8)' }}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.9, duration: 1.5 }}
                          >
                            <span className="text-primary-400 font-bold">•</span>
                            <span className="font-semibold">Capital range</span>
                            <span className="text-primary-400 font-bold">•</span>
                            <span className="font-semibold">Residency objectives</span>
                            <span className="text-primary-400 font-bold">•</span>
                            <span className="font-semibold">Preferred jurisdiction</span>
                          </motion.div>
                          <motion.div
                            className="space-y-1.5 pt-1"
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 1.0, duration: 1.5 }}
                          >
                            <p className="text-lg sm:text-base text-white font-semibold" style={{ fontFamily: 'Georgia, serif', textShadow: '0 2px 6px rgba(0,0,0,0.8)' }}>
                              Handled directly by a senior RERA-licensed advisor.
                            </p>
                            <p className="text-base sm:text-sm text-white italic font-medium" style={{ fontFamily: 'Georgia, serif', textShadow: '0 2px 6px rgba(0,0,0,0.8)' }}>
                              No obligation. No pressure.
                            </p>
                          </motion.div>
                        </div>
                      </div>

                      <form onSubmit={handleSubmit} className="space-y-4">
                        <div className="space-y-4">
                          <motion.div
                            initial={{ opacity: 0, y: 10 }} // Subtle movement
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 1.0, duration: 1.8, ease: "easeOut" }} // First field
                          >
                            <input
                              type="text"
                              placeholder="Full Name"
                              value={formData.name}
                              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                              className={`w-full px-4 sm:px-5 py-3 sm:py-4 border ${errors.name ? 'border-red-400' : 'border-white/40 md:border-white/30'} rounded-xl bg-white/20 md:bg-white/10 backdrop-blur-md focus:outline-none focus:border-primary-400 focus:bg-white/25 md:focus:bg-white/15 text-white font-semibold text-base placeholder-white/80 md:placeholder-white/60 transition-all shadow-lg min-h-[44px]`}
                            />
                            {errors.name && <p className="text-red-400 text-xs mt-2 font-semibold">{errors.name}</p>}
                          </motion.div>

                          <motion.div
                            initial={{ opacity: 0, y: 10 }} // Subtle movement
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 1.2, duration: 1.8, ease: "easeOut" }} // Second field
                          >
                            <input
                              type="email"
                              placeholder="Email Address"
                              value={formData.email}
                              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                              className={`w-full px-4 sm:px-5 py-3 sm:py-4 border ${errors.email ? 'border-red-400' : 'border-white/30'} rounded-xl bg-white/10 backdrop-blur-md focus:outline-none focus:border-primary-400 focus:bg-white/15 text-white font-medium text-base placeholder-white/60 transition-all shadow-lg min-h-[44px]`}
                            />
                            {errors.email && <p className="text-red-400 text-xs mt-2 font-semibold">{errors.email}</p>}
                          </motion.div>

                          <motion.div
                            initial={{ opacity: 0, y: 10 }} // Subtle movement
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 1.4, duration: 1.8, ease: "easeOut" }} // Third field
                          >
                            <input
                              type="tel"
                              placeholder="WhatsApp Number (with country code)"
                              value={formData.whatsapp}
                              onChange={(e) => setFormData({ ...formData, whatsapp: e.target.value })}
                              className={`w-full px-4 sm:px-5 py-3 sm:py-4 border ${errors.whatsapp ? 'border-red-400' : 'border-white/40 md:border-white/30'} rounded-xl bg-white/20 md:bg-white/10 backdrop-blur-md focus:outline-none focus:border-primary-400 focus:bg-white/25 md:focus:bg-white/15 text-white font-semibold text-base placeholder-white/80 md:placeholder-white/60 transition-all shadow-lg min-h-[44px]`}
                            />
                            {errors.whatsapp && <p className="text-red-400 text-xs mt-2 font-semibold">{errors.whatsapp}</p>}
                          </motion.div>

                          <motion.div
                            initial={{ opacity: 0, y: 10 }} // Subtle movement
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 1.6, duration: 1.8, ease: "easeOut" }} // Fourth field
                          >
                            <select
                              value={formData.investmentRange}
                              onChange={(e) => setFormData({ ...formData, investmentRange: e.target.value })}
                              className={`w-full px-4 sm:px-5 py-3 sm:py-4 border ${errors.investmentRange ? 'border-red-400' : 'border-white/40 md:border-white/30'} rounded-xl bg-white/20 md:bg-white/10 backdrop-blur-md focus:outline-none focus:border-primary-400 focus:bg-white/25 md:focus:bg-white/15 text-white font-semibold text-base transition-all shadow-lg min-h-[44px]`}
                            >
                              <option value="" className="bg-navy-900 text-white">Indicative Investment Range</option>
                              <option value="500k-1m" className="bg-navy-900 text-white">AED 500K - 1M</option>
                              <option value="1m-2m" className="bg-navy-900 text-white">AED 1M - 2M</option>
                              <option value="2m-5m" className="bg-navy-900 text-white">AED 2M - 5M</option>
                              <option value="5m+" className="bg-navy-900 text-white">AED 5M+</option>
                            </select>
                            {errors.investmentRange && <p className="text-red-400 text-xs mt-2 font-semibold">{errors.investmentRange}</p>}
                          </motion.div>

                          <motion.div
                            initial={{ opacity: 0, y: 10 }} // Subtle movement
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 1.8, duration: 1.8, ease: "easeOut" }} // Fifth field
                          >
                            <select
                              value={formData.preferredProject}
                              onChange={(e) => setFormData({ ...formData, preferredProject: e.target.value })}
                              className={`w-full px-4 sm:px-5 py-3 sm:py-4 border ${errors.preferredProject ? 'border-red-400' : 'border-white/40 md:border-white/30'} rounded-xl bg-white/20 md:bg-white/10 backdrop-blur-md focus:outline-none focus:border-primary-400 focus:bg-white/25 md:focus:bg-white/15 text-white font-semibold text-base transition-all shadow-lg min-h-[44px]`}
                            >
                              <option value="" className="bg-navy-900 text-white">Jurisdiction Preference (Abu Dhabi • Dubai • Both)</option>
                              <option value="abu-dhabi" className="bg-navy-900 text-white">Abu Dhabi</option>
                              <option value="dubai" className="bg-navy-900 text-white">Dubai</option>
                              <option value="both" className="bg-navy-900 text-white">Both</option>
                            </select>
                            {errors.preferredProject && <p className="text-red-400 text-xs mt-2 font-semibold">{errors.preferredProject}</p>}
                          </motion.div>
                        </div>

                        <motion.div
                          className="space-y-4 pt-2"
                          initial={{ opacity: 0, y: 15 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 2.0, duration: 1.8, ease: "easeOut" }}
                        >
                          <motion.button
                            type="submit"
                            className="w-full bg-gradient-to-r from-primary-500 via-primary-600 to-primary-700 hover:from-primary-600 hover:via-primary-700 hover:to-primary-800 text-white font-bold tracking-wide text-base sm:text-lg py-4 sm:py-5 rounded-2xl transition-all duration-300 flex items-center justify-center gap-3 shadow-2xl shadow-primary-500/40 border border-primary-400/20 min-h-[44px]"
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                          >
                            Request Private Review
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                          </motion.button>
                          
                          <div className="text-center">
                            <p className="text-sm text-white/70 font-medium">
                              Private inquiry • Fully confidential
                            </p>
                          </div>
                        </motion.div>
                      </form>

                      {/* Trust Badges */}
                      <div className="mt-6 pt-5 border-t border-white/10">
                        <div className="flex items-center justify-center gap-8 text-xs text-white/80">
                          <div className="flex items-center gap-2 px-3 py-2 bg-white/5 rounded-lg border border-white/10">
                            <svg className="w-4 h-4 text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                            </svg>
                            <span className="font-semibold text-white">RERA Licensed</span>
                          </div>
                          <div className="flex items-center gap-2 px-3 py-2 bg-white/5 rounded-lg border border-white/10">
                            <svg className="w-4 h-4 text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8V7m-6 4h4" />
                            </svg>
                            <span className="font-semibold text-white">100% Confidential</span>
                          </div>
                        </div>
                      </div>
                    </>
                  ) : (
                    <motion.div
                      className="text-center py-12"
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5 }}
                    >
                      <motion.div
                        className="w-16 h-16 bg-primary-500/20 rounded-full flex items-center justify-center mx-auto mb-6"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                      >
                        <svg className="w-8 h-8 text-primary-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </motion.div>
                      <h3 className="text-2xl text-white font-bold tracking-wide mb-3" style={{ textShadow: '0 2px 8px rgba(0,0,0,0.8)' }}>Request Confirmed</h3>
                      <p className="text-base text-white/80 font-medium leading-relaxed mb-6">
                        Your investment portfolio is being prepared by a senior advisor. You will receive a confidential investment breakdown within 24 hours.
                      </p>
                      <p className="text-sm text-white/70 font-medium">
                        Check your email for secure access details.
                      </p>
                    </motion.div>
                  )}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Removed Scroll Indicator */}

      {/* Mobile Sticky Contact Bar */}
      <div className="fixed bottom-0 left-0 right-0 z-50 lg:hidden bg-gradient-to-t from-navy-900 via-navy-900/95 to-navy-900/90 backdrop-blur-xl border-t border-white/10 px-3 sm:px-4 py-3 sm:py-4 shadow-2xl safe-area-inset-bottom">
        <div className="flex items-center justify-around gap-2 sm:gap-3 max-w-md mx-auto">
          <a
            href="tel:+971501234567"
            className="flex flex-col items-center gap-1 px-3 sm:px-4 py-2.5 sm:py-3 bg-[#FF6A00] hover:bg-[#FF8534] rounded-xl transition-all shadow-lg flex-1 min-h-[56px] min-w-[60px] justify-center"
          >
            <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            <span className="text-white text-xs sm:text-sm font-semibold">Call</span>
          </a>
          
          <a
            href="mailto:info@cityplazarealestate.com?subject=Investment Inquiry&body=Phone: +971 50 123 4567"
            className="flex flex-col items-center gap-1 px-3 sm:px-4 py-2.5 sm:py-3 bg-white/10 hover:bg-white/20 border border-white/20 rounded-xl transition-all backdrop-blur-sm shadow-lg flex-1 min-h-[56px] min-w-[60px] justify-center"
          >
            <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            <span className="text-white text-xs sm:text-sm font-semibold">Email</span>
          </a>
          
          <a
            href="https://wa.me/971501234567"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center gap-1 px-3 sm:px-4 py-2.5 sm:py-3 bg-green-500 hover:bg-green-600 rounded-xl transition-all shadow-lg flex-1 min-h-[56px] min-w-[60px] justify-center"
          >
            <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            <span className="text-white text-xs sm:text-sm font-semibold">WhatsApp</span>
          </a>
        </div>
      </div>
    </section>
  );
}
