'use client';

import { useState } from 'react';

export default function ExplainerVideo() {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <section className="py-16 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          
          {/* Header */}
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent/10 rounded-full text-accent font-semibold text-sm mb-4">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z" />
              </svg>
              Watch Video
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-navy mb-3">
              How UAE Property Investment Works
            </h2>
            <p className="text-lg text-gray-600">
              Watch our 90-second guide to investing in Dubai & Abu Dhabi real estate
            </p>
          </div>

          {/* Video Container */}
          <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
            {!isPlaying ? (
              // Thumbnail with Play Button
              <div className="relative aspect-video bg-gradient-to-br from-navy to-accent/80">
                {/* Placeholder Background */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center text-white p-8">
                    <div className="text-6xl mb-4">🏙️</div>
                    <h3 className="text-2xl font-bold mb-2">UAE Real Estate Investment Guide</h3>
                    <p className="text-white/80">Learn about Golden Visa, ROI, and the investment process</p>
                  </div>
                </div>
                
                {/* Play Button Overlay */}
                <button
                  onClick={() => setIsPlaying(true)}
                  className="absolute inset-0 flex items-center justify-center group cursor-pointer"
                >
                  <div className="w-24 h-24 bg-white/90 hover:bg-white rounded-full flex items-center justify-center shadow-2xl transition-all group-hover:scale-110">
                    <svg className="w-12 h-12 text-accent ml-1" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
                    </svg>
                  </div>
                  <div className="absolute bottom-8 left-0 right-0 text-center">
                    <p className="text-white font-semibold text-lg">▶ Play Video (1:30)</p>
                  </div>
                </button>
              </div>
            ) : (
              // Video Player (YouTube embed placeholder)
              <div className="aspect-video bg-black">
                <iframe
                  className="w-full h-full"
                  src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1"
                  title="UAE Property Investment Guide"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            )}
          </div>

          {/* Video Benefits */}
          <div className="mt-8 grid sm:grid-cols-3 gap-6">
            {[
              { icon: '⏱️', text: 'Just 90 seconds', subtext: 'Quick & easy to understand' },
              { icon: '🎯', text: 'Step-by-step process', subtext: 'From inquiry to handover' },
              { icon: '✅', text: 'Golden Visa explained', subtext: 'Eligibility & timeline' }
            ].map((item, i) => (
              <div key={i} className="text-center p-4 bg-white rounded-xl border border-gray-200">
                <div className="text-3xl mb-2">{item.icon}</div>
                <p className="font-bold text-navy text-sm">{item.text}</p>
                <p className="text-xs text-gray-600">{item.subtext}</p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
