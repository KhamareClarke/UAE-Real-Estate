'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

// Testimonial data structure with realistic profiles
const testimonials = [
  {
    id: 1,
    quote: "City Plaza facilitated my Golden Visa property acquisition with full transparency. Clear documentation, accurate timelines, and regulatory guidance throughout the process.",
    author: "Daniel K.",
    photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=faces",
    location: "London",
    country: "UK",
    countryFlag: (
      <svg className="w-5 h-5" viewBox="0 0 60 30" xmlns="http://www.w3.org/2000/svg">
        <clipPath id="uk-flag"><path d="M0,0 v30 h60 v-30 z"/></clipPath>
        <clipPath id="uk-cross"><path d="M30,15 h30 v15 z v-30 h-30 z h-30 v15 z v-30 h30 z"/></clipPath>
        <g clipPath="url(#uk-flag)">
          <path d="M0,0 v30 h60 v-30 z" fill="#012169"/>
          <path d="M0,0 L60,30 M60,0 L0,30" stroke="#fff" strokeWidth="6"/>
          <path d="M0,0 L60,30 M60,0 L0,30" clipPath="url(#uk-cross)" stroke="#C8102E" strokeWidth="4"/>
          <path d="M30,0 v30 M0,15 h60" stroke="#fff" strokeWidth="10"/>
          <path d="M30,0 v30 M0,15 h60" stroke="#C8102E" strokeWidth="6"/>
        </g>
      </svg>
    ),
    rating: 5
  },
  {
    id: 2,
    quote: "Comprehensive knowledge of the Abu Dhabi residential market. The team coordinated property selection, developer liaison, and final handover efficiently.",
    author: "Sarah Mitchell",
    photo: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop&crop=faces",
    location: "Dubai",
    country: "UAE",
    countryFlag: (
      <svg className="w-5 h-5" viewBox="0 0 60 30" xmlns="http://www.w3.org/2000/svg">
        <rect width="60" height="10" fill="#00732F"/>
        <rect width="60" height="10" y="10" fill="#FFFFFF"/>
        <rect width="60" height="10" y="20" fill="#000000"/>
        <rect width="20" height="30" fill="#FF0000"/>
      </svg>
    ),
    rating: 5
  },
  {
    id: 3,
    quote: "Professional and discreet handling of the investment process. They coordinated all regulatory requirements and provided clear investment breakdowns at each stage.",
    author: "James Anderson",
    photo: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop&crop=faces",
    location: "Singapore",
    country: "SG",
    countryFlag: (
      <svg className="w-5 h-5" viewBox="0 0 60 30" xmlns="http://www.w3.org/2000/svg">
        <rect width="60" height="15" fill="#ED2939"/>
        <rect width="60" height="15" y="15" fill="#FFFFFF"/>
        <circle cx="15" cy="7.5" r="5" fill="#FFFFFF"/>
        <circle cx="17" cy="7.5" r="4.5" fill="#ED2939"/>
        <path d="M15,3 L16,5.5 L18.5,5.5 L16.5,7 L17.5,9.5 L15,8 L12.5,9.5 L13.5,7 L11.5,5.5 L14,5.5 Z" fill="#FFFFFF"/>
      </svg>
    ),
    rating: 5
  },
  {
    id: 4,
    quote: "City Plaza's understanding of Golden Visa-eligible property structures was evident throughout. Clear guidance, transparent pricing, and efficient coordination.",
    author: "Priya Sharma",
    photo: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop&crop=faces",
    location: "Mumbai",
    country: "IN",
    countryFlag: (
      <svg className="w-5 h-5" viewBox="0 0 60 30" xmlns="http://www.w3.org/2000/svg">
        <rect width="60" height="10" fill="#FF9933"/>
        <rect width="60" height="10" y="10" fill="#FFFFFF"/>
        <rect width="60" height="10" y="20" fill="#138808"/>
        <circle cx="30" cy="15" r="4" fill="#000080" stroke="#000080" strokeWidth="0.5"/>
      </svg>
    ),
    rating: 5
  }
];

export default function TestimonialCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  // Automatic cycling logic - rotates every 6 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 6000); // 6 second interval for calm, natural rotation
    
    return () => clearInterval(interval);
  }, []);
  
  const currentTestimonial = testimonials[currentIndex];

  return (
    <div className="text-center mb-8">
      {/* Existing large stars at top */}
      <div className="flex justify-center gap-2 mb-6">
        {[...Array(5)].map((_, i) => (
          <svg key={i} className="w-8 h-8 text-primary-500" fill="currentColor" viewBox="0 0 20 20">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
      </div>

      {/* Testimonial Quote */}
      <p className="text-2xl text-navy-700 leading-relaxed mb-6 italic font-medium">
        "{currentTestimonial.quote.includes('Golden Visa') ? (
          <>
            {currentTestimonial.quote.split('Golden Visa')[0]}
            <span className="text-gradient-gold font-bold not-italic">Golden Visa</span>
            {currentTestimonial.quote.split('Golden Visa')[1]}
          </>
        ) : (
          currentTestimonial.quote
        )}"
      </p>
      
      {/* Author Info with Photo, Stars, and Flag */}
      <div className="flex items-center justify-center gap-2 sm:gap-3 mb-2">
        {/* Circular Profile Photo */}
        <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full overflow-hidden flex-shrink-0">
          <Image
            src={currentTestimonial.photo}
            alt={currentTestimonial.author}
            width={48}
            height={48}
            quality={95}
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="text-left min-w-0 flex-1">
          <div className="flex items-center gap-1.5 sm:gap-2 flex-wrap">
            <p className="text-base sm:text-lg md:text-xl font-bold text-navy-900 tracking-tight break-words">{currentTestimonial.author}</p>
            {/* Country Flag Icon */}
            <div className="flex-shrink-0">{currentTestimonial.countryFlag}</div>
          </div>
          
          {/* Five Yellow Stars - Author Rating */}
          <div className="flex gap-0.5 mt-1">
            {[...Array(currentTestimonial.rating)].map((_, i) => (
              <svg key={i} className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
          </div>
        </div>
      </div>
      
      <p className="text-sm sm:text-base text-navy-600 font-medium break-words px-2 sm:px-0">{currentTestimonial.location}, {currentTestimonial.country}</p>
    </div>
  );
}
