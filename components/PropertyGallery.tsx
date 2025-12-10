'use client';

import { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import { useFormModal } from '@/contexts/FormModalContext';

export default function PropertyGallery() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);
  const { openFormModal } = useFormModal();

  const properties = [
    {
      name: 'The District',
      location: 'Al Reem Island, Abu Dhabi',
      type: '1BR',
      price: 'AED 860,000',
      image: '/images/dubai-skyline.jpg',
      tag: 'Developer-Direct',
      tagColor: 'bg-primary-600',
      features: [
        'Golden Visa Eligible',
        '702 sq ft',
        'Swimming Pool View',
        'Gymnasium & Tennis Court',
        'Expected Q2 2029'
      ],
      payment: 'Flexible Payment Plan'
    },
    {
      name: 'Binghatti Pinnacle',
      location: 'Al Jaddaf, Dubai',
      type: '2BR',
      price: 'AED 2,724,999',
      image: '/images/dubai-skyline.jpg',
      tag: 'Established Developer',
      tagColor: 'bg-primary-500',
      features: [
        'Golden Visa Eligible',
        '1,068.10 sq ft',
        'Private Terrace (233 sq ft)',
        'Premium Interiors',
        'Expected 2026'
      ],
      payment: 'Post-Handover Plan'
    }
  ];

  const nextSlide = () => {
    setActiveIndex((prev) => (prev + 1) % properties.length);
  };

  const prevSlide = () => {
    setActiveIndex((prev) => (prev - 1 + properties.length) % properties.length);
  };

  // Touch handlers for swipe
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (touchStart - touchEnd > 75) {
      nextSlide();
    }
    if (touchStart - touchEnd < -75) {
      prevSlide();
    }
  };

  // Auto-scroll carousel
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(interval);
  }, [activeIndex]);

  return (
    <section className="py-24 bg-gradient-to-b from-white via-gray-50 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-10 sm:mb-12 md:mb-16">
            <h2 className="text-3xl xs:text-4xl sm:text-5xl font-black text-navy-900 mb-4 sm:mb-6">
              Selected UAE Allocations
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-navy-700 max-w-4xl mx-auto font-medium leading-relaxed px-4 sm:px-0">
              Developer-direct allocations structured for Golden Visa qualification and capital preservation. Subject to availability.
            </p>
          </div>

          {/* Swipeable Carousel - Mobile */}
          <div className="lg:hidden relative">
            <div 
              ref={carouselRef}
              className="overflow-hidden"
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
            >
              <div 
                className="flex transition-transform duration-500 ease-out"
                style={{ transform: `translateX(-${activeIndex * 100}%)` }}
              >
                {properties.map((property, index) => (
                  <div key={index} className="min-w-full px-4">
                    <div className="group relative overflow-hidden rounded-2xl shadow-2xl bg-white">
                      <div className="relative h-80">
                        <Image
                          src={property.image}
                          alt={`${property.name} - ${property.location} luxury property for sale in UAE`}
                          fill
                          className="object-cover"
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
                        <div className={`absolute top-4 right-4 ${property.tagColor} text-white px-4 py-2 rounded-lg text-xs font-bold shadow-lg`}>
                          {property.tag}
                        </div>
                      </div>
                      <div className="p-8 space-y-4">
                        <div className="absolute top-72 left-8">
                          <h3 className="text-3xl font-black text-white">{property.name}</h3>
                          <p className="text-white/90 text-sm flex items-center gap-2 mt-2">
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                            </svg>
                            {property.location}
                          </p>
                        </div>
                        <div className="pt-16 space-y-4">
                          <div className="flex items-baseline justify-between">
                            <p className="text-[#FF6A00] text-sm font-bold uppercase tracking-wide">{property.type}</p>
                            <p className="text-3xl font-black text-navy-900">{property.price}</p>
                          </div>
                          <div className="space-y-2">
                            {property.features.map((feature, idx) => (
                              <div key={idx} className="flex items-center gap-2 text-navy-700 text-sm">
                                <svg className="w-4 h-4 text-[#FF6A00]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                </svg>
                                {feature}
                              </div>
                            ))}
                          </div>
                          <div className="pt-4 border-t border-gray-200">
                            <p className="text-sm text-navy-600 font-semibold">{property.payment}</p>
                          </div>
                          <button onClick={openFormModal} className="w-full bg-[#FF6A00] hover:bg-[#FF8534] text-white font-bold py-4 px-6 rounded-xl transition-all shadow-lg hover:shadow-xl hover:scale-105 min-h-[44px] text-base sm:text-base">
                            Request Investment Breakdown
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Carousel Controls */}
            <button 
              onClick={prevSlide}
              className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-md text-white p-3 rounded-full transition-all"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button 
              onClick={nextSlide}
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-md text-white p-3 rounded-full transition-all"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
              </svg>
            </button>
            
            {/* Dots Indicator */}
            <div className="flex justify-center gap-2 mt-6">
              {properties.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`h-2 rounded-full transition-all ${
                    index === activeIndex ? 'w-8 bg-accent' : 'w-2 bg-gray-300'
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Desktop Grid */}
          <div className="hidden lg:grid lg:grid-cols-2 gap-8">
            {properties.map((property, index) => (
              <div 
                key={index}
                className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 bg-white"
              >
                <div className="relative h-80 overflow-hidden bg-gradient-to-br from-navy-800 to-navy-900">
                  <Image
                    src={property.image}
                    alt={property.name}
                    fill
                    quality={100}
                    loading="eager"
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                    sizes="50vw"
                    priority
                    style={{ objectFit: 'cover', objectPosition: 'center' }}
                    onError={(e) => {
                      // Fallback to dubai-skyline if image fails
                      const target = e.target as HTMLImageElement;
                      if (target.src !== '/images/dubai-skyline.jpg') {
                        target.src = '/images/dubai-skyline.jpg';
                      }
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
                  <div className={`absolute top-4 right-4 ${property.tagColor} text-white px-4 py-2 rounded-lg text-xs font-bold tracking-wide shadow-lg`}>
                    {property.tag}
                  </div>
                </div>
                <div className="p-8 space-y-4">
                  <div className="absolute top-72 left-8">
                    <h3 className="text-3xl font-black text-white">{property.name}</h3>
                    <p className="text-white/90 text-sm flex items-center gap-2 mt-2">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      {property.location}
                    </p>
                  </div>
                  <div className="pt-16 space-y-4">
                    <div className="flex items-baseline justify-between">
                      <p className="text-[#FF6A00] text-sm font-bold uppercase tracking-wide">{property.type}</p>
                      <p className="text-3xl font-black text-navy-900">{property.price}</p>
                    </div>
                    <div className="space-y-2">
                      {property.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-navy-700 text-sm">
                          <svg className="w-4 h-4 text-[#FF6A00]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          {feature}
                        </div>
                      ))}
                    </div>
                    <div className="pt-4 border-t border-gray-200">
                      <p className="text-sm text-navy-600 font-semibold">{property.payment}</p>
                    </div>
                    <button onClick={openFormModal} className="w-full bg-[#FF6A00] hover:bg-[#FF8534] text-white font-bold py-4 px-6 rounded-xl transition-all shadow-lg hover:shadow-xl hover:scale-105 group-hover:shadow-[#FF6A00]/30 min-h-[44px] text-base sm:text-base">
                      Request Investment Breakdown
                    </button>
                  </div>
                </div>
                <div className="absolute inset-0 bg-[#FF6A00]/0 group-hover:bg-[#FF6A00]/5 transition-all duration-300 pointer-events-none"></div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center mt-16 space-y-3">
            <button onClick={openFormModal} className="bg-[#FF6A00] hover:bg-[#FF8534] text-white font-bold px-6 sm:px-8 md:px-12 py-4 sm:py-5 rounded-xl transition-all duration-300 shadow-xl shadow-[#FF6A00]/30 hover:shadow-2xl hover:scale-105 inline-flex items-center gap-3 min-h-[44px] text-base sm:text-lg w-full sm:w-auto justify-center">
              Request a Private Investment Review
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </button>
            <p className="text-sm text-navy-600">
              RERA-licensed advisor review
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
