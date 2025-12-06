'use client';

import { useState, useRef, useEffect } from 'react';
import { motion, useMotionValue, useSpring, useTransform, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

export default function Elite3DPropertyCards() {
  const [activeIndex, setActiveIndex] = useState(0);

  const properties = [
    {
      id: 1,
      name: 'The District',
      location: 'Al Reem Island, Abu Dhabi',
      type: '1BR',
      price: 'AED 860,000',
      priceUSD: '702 sq ft',
      images: [
        '/images/district-front.png',
        '/images/district-over.png',
        '/images/district-view.png',
        '/images/district-floor.png'
      ],
      badge: {
        text: 'Developer-Direct',
        color: 'bg-primary-600',
        pulse: false
      },
      tags: ['Golden Visa Eligible', 'Developer-Direct', 'Limited Allocation'],
      features: [
        { icon: '', text: 'Swimming Pool View' },
        { icon: '', text: 'Gymnasium' },
        { icon: '', text: 'Tennis Court' },
        { icon: '', text: 'Private Balcony' },
      ],
      payment: 'Flexible Payment Plan',
      roi: 'Q2 2029',
      completion: 'Q2 2029',
      unitsSold: 0,
      developer: 'Reportage Properties',
      scarcityNote: 'Limited allocation available',
    },
    {
      id: 2,
      name: 'Binghatti Pinnacle',
      location: 'Al Jaddaf, Dubai',
      type: '2BR',
      price: 'AED 2,724,999',
      priceUSD: '1,068.10 sq ft',
      images: [
        '/images/binghatti-front.png',
        '/images/binghatti-view.png',
        '/images/binghatti-room.png',
        '/images/binghatti-pool.png',
        '/images/binghatti-poolview.png'
      ],
      badge: {
        text: 'Established Developer',
        color: 'bg-primary-500',
        pulse: false
      },
      tags: ['Golden Visa Eligible', 'Private Terrace', 'Developer-Direct'],
      features: [
        { icon: '', text: 'Private Terrace' },
        { icon: '', text: 'Premium Interiors' },
        { icon: '', text: 'Concierge Service' },
        { icon: '', text: 'Gymnasium & Spa' },
      ],
      payment: 'Post-Handover Plan',
      roi: '2026',
      completion: '2026',
      unitsSold: 0,
      developer: 'Binghatti Developers',
      scarcityNote: 'Allocation subject to developer release',
    },
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-navy-900 via-navy-800 to-black relative overflow-hidden vignette cinematic-overlay">
      {/* Video Background with Overlay - Lower Z-Index */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/dubai-skyline.jpg"
          alt="Abu Dhabi Skyline"
          fill
          quality={95}
          className="object-cover opacity-30"
          priority
        />
        
        {/* Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-br from-dark-900/90 via-navy-900/80 to-black/90" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
        
        {/* Noise Texture for Depth */}
        <div className="absolute inset-0 bg-noise opacity-[0.03]" />
        
        {/* Animated Gradient Mesh */}
        <motion.div
          className="absolute inset-0 opacity-15"
          style={{
            background: 'radial-gradient(circle at 50% 50%, rgba(255, 107, 0, 0.12) 0%, transparent 60%)'
          }}
          animate={{ 
            scale: [1, 1.1, 1],
            opacity: [0.1, 0.15, 0.1]
          }}
          transition={{ 
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      {/* Floating Particles - Lower Z-Index */}
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
              duration: Math.random() * 6 + 5,
              repeat: Infinity,
              delay: Math.random() * 4,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>

      <div className="w-full px-4 sm:px-6 md:px-8 lg:px-16 xl:px-24 relative z-10 pointer-events-auto">
        <div className="max-w-[1600px] mx-auto">
          
          {/* Section Header */}
          <motion.div
            className="text-center mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <motion.div
              className="inline-block mb-3 relative z-30"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <span className="px-6 py-3 bg-gradient-to-r from-primary-500 via-yellow-500 to-primary-600 text-white rounded-full text-xs font-bold uppercase tracking-wider shadow-xl shadow-primary-500/40 border border-yellow-400/30" style={{ textShadow: '0 1px 8px rgba(0,0,0,0.3)' }}>
                Selected UAE Allocations
              </span>
            </motion.div>
            <h2 className="text-2xl xs:text-3xl sm:text-4xl lg:text-5xl font-black mb-3 sm:mb-4 tracking-tight text-cinematic relative z-20 px-4 sm:px-0" style={{ wordSpacing: '0.25em', background: 'linear-gradient(135deg, #FFFFFF 0%, #FFD700 50%, #FFFFFF 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text', filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.5))' }}>
              Available Residences
            </h2>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-white font-light leading-relaxed max-w-3xl mx-auto tracking-wide mb-4 relative z-20 px-4 sm:px-0" style={{ fontFamily: 'Georgia, serif', wordSpacing: '0.1em' }}>
              Developer-direct allocations structured for Golden Visa qualification and capital preservation. Subject to availability.
            </p>
          </motion.div>

          {/* Property Cards Grid */}
          <div className="grid lg:grid-cols-2 gap-4 sm:gap-6 md:gap-8 xl:gap-10">
            {properties.map((property, index) => (
              <Property3DCard key={property.id} property={property} index={index} />
            ))}
          </div>

          {/* Bottom CTA */}
          <motion.div
            className="text-center mt-8 space-y-3"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <a href="#elite-form">
              <motion.button
                className="bg-gradient-to-r from-primary-500 via-primary-600 to-primary-700 hover:from-primary-600 hover:via-primary-700 hover:to-primary-800 text-white font-bold text-lg px-12 py-5 rounded-2xl shadow-2xl hover:shadow-primary-500/40 transition-all flex items-center gap-3 mx-auto group border border-primary-400/20 relative z-20"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Request a Private Investment Review
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </motion.button>
            </a>
            <p className="text-sm" style={{ color: 'rgba(255,255,255,0.7)' }}>
              Handled confidentially
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// 3D Tilt Card Component
function Property3DCard({ property, index }: { property: any; index: number }) {
  const [isHovered, setIsHovered] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);
  const [imagesLoaded, setImagesLoaded] = useState<Set<number>>(new Set());
  const [isTouchDevice, setIsTouchDevice] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);
  
  // Detect touch device
  useEffect(() => {
    setIsTouchDevice('ontouchstart' in window || navigator.maxTouchPoints > 0);
  }, []);

  // Preload all images
  useEffect(() => {
    property.images.forEach((imgSrc: string, idx: number) => {
      const img = new window.Image();
      img.onload = () => {
        setImagesLoaded(prev => new Set([...prev, idx]));
      };
      img.src = imgSrc;
    });
  }, [property.images]);
  
  // Auto-advance images
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % property.images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [property.images.length]);

  // Mouse position
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Spring animations for smooth movement - Very subtle tilt for better UX
  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [2, -2]), {
    stiffness: 150,
    damping: 50,
  });
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-2, 2]), {
    stiffness: 150,
    damping: 50,
  });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;

    const rect = cardRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    mouseX.set((e.clientX - centerX) / (rect.width / 2));
    mouseY.set((e.clientY - centerY) / (rect.height / 2));
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <motion.div
      ref={cardRef}
      className="group relative perspective-1000"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      onMouseMove={!isTouchDevice ? handleMouseMove : undefined}
      onMouseEnter={() => !isTouchDevice && setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      onTouchStart={(e) => {
        // Disable tilt on touch - just show subtle feedback
        setIsHovered(false);
        // Don't prevent button clicks
        if ((e.target as HTMLElement).closest('button')) {
          return;
        }
      }}
      onTouchEnd={() => {
        setIsHovered(false);
        mouseX.set(0);
        mouseY.set(0);
      }}
      onClick={(e) => {
        // Don't interfere with button or anchor clicks
        if ((e.target as HTMLElement).closest('button, a')) {
          return;
        }
      }}
      style={{
        transformStyle: 'preserve-3d',
        WebkitFontSmoothing: 'subpixel-antialiased',
        textRendering: 'optimizeLegibility',
        pointerEvents: 'auto'
      }}
    >
      <motion.div
        className="relative bg-white rounded-xl shadow-xl overflow-hidden"
        style={{
          rotateX: !isTouchDevice && isHovered ? rotateX : 0,
          rotateY: !isTouchDevice && isHovered ? rotateY : 0,
          transformStyle: 'preserve-3d',
          willChange: 'transform',
          backfaceVisibility: 'hidden'
        }}
        whileHover={{ scale: 1.005 }}
        whileTap={{ scale: 0.995 }}
        transition={{ duration: 0.15, ease: 'easeOut' }}
        onClick={(e) => {
          // Don't interfere with button clicks
          if ((e.target as HTMLElement).closest('a, button')) {
            return;
          }
        }}
      >
        {/* Glow Effect */}
        <div className="absolute -inset-1 bg-gradient-to-r from-primary-500 to-primary-600 rounded-2xl blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-300 pointer-events-none z-0" />

        {/* Cinematic Carousel */}
        <div className="relative h-56 sm:h-72 lg:h-96 overflow-hidden bg-gradient-to-br from-navy-800 to-navy-900">
          {/* Render all images, show current one on top - keep previous visible during transition */}
          {property.images.map((imgSrc: string, imgIndex: number) => {
            const isCurrent = imgIndex === currentImage;
            const isPrevious = imgIndex === (currentImage - 1 + property.images.length) % property.images.length;
            const shouldShow = isCurrent || (isPrevious && !imagesLoaded.has(currentImage));
            
            return (
              <div
                key={imgIndex}
                className={`absolute inset-0 transition-opacity duration-500 ${
                  shouldShow ? 'opacity-100 z-10' : 'opacity-0 z-0'
                }`}
              >
                <Image
                  src={imgSrc}
                  alt={`${property.name} - Image ${imgIndex + 1}`}
                  fill
                  quality={100}
                  loading={imgIndex <= 1 ? "eager" : "lazy"}
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  priority={imgIndex <= 1}
                  style={{ objectFit: 'cover', objectPosition: 'center' }}
                  onLoad={() => setImagesLoaded(prev => new Set([...prev, imgIndex]))}
                  onError={(e) => {
                    // Fallback to first image if any image fails
                    const target = e.target as HTMLImageElement;
                    if (target.src !== property.images[0]) {
                      target.src = property.images[0];
                    }
                  }}
                />
              </div>
            );
          })}
          
          {/* Cinematic Letterbox Bars */}
          <div className="absolute top-0 left-0 right-0 h-6 bg-gradient-to-b from-black to-transparent z-10"></div>
          <div className="absolute bottom-0 left-0 right-0 h-6 bg-gradient-to-t from-black to-transparent z-10"></div>
          
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
          
          {/* Carousel Indicators */}
          <div className="absolute bottom-3 left-0 right-0 flex justify-center gap-1 z-20">
            {property.images.map((_: string, i: number) => (
              <button 
                key={i}
                className={`w-2 h-2 rounded-full transition-all ${i === currentImage ? 'bg-white scale-110' : 'bg-white/40'}`}
                onClick={() => setCurrentImage(i)}
              />
            ))}
          </div>

          {/* Animated Badge */}
          <motion.div
            className={`absolute top-2 sm:top-4 left-2 sm:left-4 ${property.badge.color} text-white px-3 sm:px-4 py-1.5 sm:py-2 rounded-full font-bold text-xs sm:text-sm shadow-lg ${property.badge.pulse ? 'animate-pulse' : ''} z-20`}
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 + index * 0.1 }}
            style={{ textShadow: '0 1px 3px rgba(0,0,0,0.5)' }}
          >
            <span className="break-words">{property.badge.text}</span>
          </motion.div>

          {/* Tags */}
          <div className="absolute top-2 sm:top-4 right-2 sm:right-4 flex flex-col gap-1.5 sm:gap-2 z-20 max-w-[40%] sm:max-w-none">
            {property.tags.map((tag: string, i: number) => (
              <motion.span
                key={i}
                className="bg-white/90 backdrop-blur-sm text-navy-900 px-2 sm:px-3 py-1 rounded-full text-[10px] sm:text-xs font-bold shadow-lg break-words text-center"
                initial={{ x: 100, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 + i * 0.1 }}
              >
                {tag}
              </motion.span>
            ))}
          </div>

        </div>

        {/* Content Section */}
        <div className="p-3 sm:p-4 lg:p-6 relative z-20" style={{ transform: 'translateZ(20px)', WebkitFontSmoothing: 'subpixel-antialiased', pointerEvents: 'auto' }}>
          {/* Combined Property Info Line */}
          <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-1.5 mb-3 sm:mb-2">
            <div className="w-6 h-6 sm:w-7 sm:h-7 bg-gradient-to-br from-primary-500 to-primary-600 rounded-full flex items-center justify-center text-white text-sm sm:text-base font-bold flex-shrink-0">
              {property.developer.charAt(0)}
            </div>
            <div className="flex flex-wrap items-baseline gap-x-2 gap-y-1 text-sm sm:text-base">
              <span className="font-bold text-navy-900 text-xs sm:text-sm">{property.developer}</span>
              <span className="font-black text-lg sm:text-xl" style={{ color: '#FF6B00', textShadow: '0 1px 2px rgba(0,0,0,0.1)' }}>{property.name}</span>
              <span className="flex items-center gap-1 font-semibold text-navy-900 text-xs sm:text-sm">
                <svg className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-primary-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                </svg>
                <span className="break-words">{property.location}</span>
              </span>
              <span className="font-black text-xl sm:text-2xl" style={{ color: '#FF6B00', textShadow: '0 1px 2px rgba(0,0,0,0.1)' }}>{property.price}</span>
              <span className="font-bold text-navy-900 text-xs sm:text-sm">({property.priceUSD})</span>
              <span className="font-bold text-navy-900 text-xs sm:text-sm break-words">{property.type}</span>
            </div>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-2 gap-2 sm:gap-2 mb-3 sm:mb-3">
            {property.features.map((feature: any, i: number) => (
              <motion.div
                key={i}
                className="flex items-center gap-2 sm:gap-1.5 text-sm sm:text-xs text-navy-900 font-semibold bg-gray-50 rounded-md p-2.5 sm:p-2 hover:bg-primary-50 hover:text-primary-700 transition-colors"
                whileHover={{ scale: 1.02 }}
              >
                <svg className="w-4 h-4 sm:w-3.5 sm:h-3.5 text-primary-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                </svg>
                <span className="break-words leading-tight">{feature.text}</span>
              </motion.div>
            ))}
          </div>

          {/* Investment Details */}
          <div className="grid grid-cols-2 gap-3 sm:gap-2 mb-4 sm:mb-3 p-4 sm:p-3 bg-white rounded-lg border-2 border-gray-300 shadow-lg">
            <div>
              <p className="text-xs sm:text-[11px] text-navy-900 font-bold mb-1.5 sm:mb-1 uppercase tracking-wider">Total Area</p>
              <p className="text-base sm:text-lg font-black text-navy-900 tracking-tight break-words">{property.priceUSD}</p>
            </div>
            <div>
              <p className="text-xs sm:text-[11px] text-navy-900 font-bold mb-1.5 sm:mb-1 uppercase tracking-wider">Handover</p>
              <p className="text-base sm:text-lg font-black text-navy-900 tracking-tight break-words">{property.completion}</p>
            </div>
          </div>

          {/* Payment Plan - Prominent Highlight */}
          <div className="mb-4 sm:mb-3 p-4 sm:p-3 bg-gradient-to-r from-yellow-50 via-amber-50 to-yellow-50 rounded-lg border-2 border-yellow-400 shadow-lg relative overflow-hidden">
            {/* Animated Glow */}
            <div className="absolute inset-0 bg-gradient-to-r from-yellow-200/0 via-yellow-200/30 to-yellow-200/0" style={{ 
              backgroundSize: '200% 100%',
              animation: 'shimmer 4s linear infinite'
            }} />
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 sm:gap-1 relative z-10">
              <div className="flex items-center gap-2 sm:gap-1.5">
                <svg className="w-5 h-5 sm:w-4 sm:h-4 text-amber-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="text-sm sm:text-xs text-amber-900 font-bold uppercase tracking-wider">Payment Structure</span>
              </div>
              <span className="text-base sm:text-lg font-black text-amber-700 break-words" style={{ textShadow: '0 1px 2px rgba(0,0,0,0.2)' }}>{property.payment}</span>
            </div>
          </div>

          {/* Scarcity Note */}
          {property.scarcityNote && (
            <div className="mb-4 sm:mb-4 text-center">
              <p className="text-sm sm:text-xs text-navy-800 font-semibold italic break-words px-2">
                {property.scarcityNote}
              </p>
            </div>
          )}

          {/* CTA Button */}
          <motion.a 
            href="#elite-form"
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              const formElement = document.getElementById('elite-form');
              if (formElement) {
                formElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
              } else {
                // Fallback
                window.location.hash = '#elite-form';
              }
            }}
            className="block w-full bg-gradient-to-r from-primary-500 via-primary-600 to-primary-700 hover:from-primary-600 hover:via-primary-700 hover:to-primary-800 text-white font-bold py-4 sm:py-5 px-4 sm:px-6 md:px-8 rounded-2xl transition-all shadow-2xl hover:shadow-primary-500/40 flex items-center justify-center gap-3 group border border-primary-400/20 text-base sm:text-lg min-h-[44px] cursor-pointer relative z-[100] mt-2"
            style={{ pointerEvents: 'auto', textDecoration: 'none' }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Request Investment Breakdown
            <motion.svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </motion.svg>
          </motion.a>
        </div>

        {/* Hover Glow Effect */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary-500/0 via-primary-500/0 to-primary-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-10" />
      </motion.div>
    </motion.div>
  );
}
