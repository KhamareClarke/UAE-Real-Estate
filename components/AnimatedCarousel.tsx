'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

interface CarouselItem {
  id: number;
  image: string;
  title: string;
  description: string;
  badge?: string;
}

export default function AnimatedCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  
  const items: CarouselItem[] = [
    {
      id: 1,
      image: '/images/dubai-skyline.jpg',
      title: 'LAST CHANCE: Golden Visa Properties',
      description: 'Only 5 units left in our premium Golden Visa eligible properties. Prices increasing next week!',
      badge: 'HOT DEAL'
    },
    {
      id: 2,
      image: '/images/dubai-skyline.jpg',
      title: 'EXCLUSIVE: Off-Plan Project Launch',
      description: 'Be among the first 10 investors to secure pre-launch prices - 20% below market rate',
      badge: 'PRE-LAUNCH'
    },
    {
      id: 3,
      image: '/images/dubai-skyline.jpg',
      title: 'URGENT: Palm Jumeirah Opportunity',
      description: 'Distressed sale - 15% below market value. Owner needs to sell within 7 days',
      badge: 'URGENT'
    },
    {
      id: 4,
      image: '/images/dubai-skyline.jpg',
      title: 'FINAL PHASE: Luxury Villa Project',
      description: 'Last phase releasing this week. Previous phases sold out in 48 hours',
      badge: 'SELLING FAST'
    }
  ];
  
  // Auto-rotate carousel
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);
    
    return () => clearInterval(interval);
  }, [activeIndex]);
  
  const nextSlide = () => {
    if (isAnimating) return;
    
    setIsAnimating(true);
    setActiveIndex((prev) => (prev === items.length - 1 ? 0 : prev + 1));
    
    setTimeout(() => {
      setIsAnimating(false);
    }, 500);
  };
  
  const prevSlide = () => {
    if (isAnimating) return;
    
    setIsAnimating(true);
    setActiveIndex((prev) => (prev === 0 ? items.length - 1 : prev - 1));
    
    setTimeout(() => {
      setIsAnimating(false);
    }, 500);
  };
  
  return (
    <section className="py-8 sm:py-12 bg-navy overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="relative">
            {/* Carousel Items */}
            <div className="relative h-[250px] sm:h-[300px] md:h-[350px] lg:h-[400px] rounded-xl sm:rounded-2xl overflow-hidden shadow-2xl bg-gradient-to-br from-navy-800 to-navy-900">
              {items.map((item, index) => (
                <div
                  key={item.id}
                  className={`absolute inset-0 transition-opacity duration-500 ease-in-out ${
                    index === activeIndex
                      ? 'opacity-100 z-10'
                      : 'opacity-0 z-0'
                  }`}
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent z-10"></div>
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    quality={100}
                    loading="eager"
                    className="object-cover object-center"
                    priority={index === 0 || index === activeIndex}
                    style={{ objectFit: 'cover', objectPosition: 'center' }}
                    onError={(e) => {
                      // Fallback to dubai-skyline if image fails
                      const target = e.target as HTMLImageElement;
                      if (target.src !== '/images/dubai-skyline.jpg') {
                        target.src = '/images/dubai-skyline.jpg';
                      }
                    }}
                  />
                  <div className="absolute bottom-0 left-0 right-0 p-8 z-20">
                    {item.badge && (
                      <span className="inline-block bg-red-600 text-white text-xs font-bold px-3 py-1 rounded-full mb-4 animate-pulse">
                        {item.badge}
                      </span>
                    )}
                    <h3 className="text-3xl font-bold text-white mb-3">{item.title}</h3>
                    <p className="text-white/90 text-lg mb-4">{item.description}</p>
                    <a
                      href="#quick-form"
                      className="inline-flex items-center gap-2 bg-white hover:bg-gray-100 text-navy font-bold py-3 px-6 rounded-lg transition-transform hover:scale-105"
                    >
                      Claim This Offer
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                      </svg>
                    </a>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Navigation Arrows */}
            <button
              onClick={prevSlide}
              className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 bg-white/20 backdrop-blur-sm hover:bg-white/40 rounded-full flex items-center justify-center z-30 transition-all min-w-[40px] min-h-[40px]"
            >
              <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 bg-white/20 backdrop-blur-sm hover:bg-white/40 rounded-full flex items-center justify-center z-30 transition-all min-w-[40px] min-h-[40px]"
            >
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
            
            {/* Indicators */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-30">
              {items.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    index === activeIndex ? 'bg-white scale-125' : 'bg-white/50'
                  }`}
                ></button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
