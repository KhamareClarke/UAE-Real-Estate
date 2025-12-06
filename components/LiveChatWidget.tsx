'use client';

import { useState } from 'react';

export default function LiveChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState('');

  const handleSend = () => {
    if (!message.trim()) return;
    
    // Redirect to WhatsApp with message
    const whatsappUrl = `https://wa.me/971529009133?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
    setMessage('');
    setIsOpen(false);
  };

  const quickMessages = [
    'I want to know about Golden Visa properties',
    'What are the best ROI projects?',
    'Show me off-plan opportunities',
    'I need help choosing a property',
  ];

  return (
    <>
      {/* Chat Button - Hidden on mobile */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`hidden md:flex fixed bottom-24 right-6 z-50 transition-all duration-300 ${
          isOpen ? 'scale-0' : 'scale-100'
        }`}
        aria-label="Open live chat"
      >
        <div className="relative">
          <div className="w-16 h-16 bg-gradient-to-br from-accent to-gold rounded-full shadow-2xl flex items-center justify-center hover:scale-110 transition-transform">
            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
            </svg>
          </div>
          <span className="absolute -top-1 -right-1 flex h-4 w-4">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
            <span className="relative inline-flex rounded-full h-4 w-4 bg-accent border-2 border-white"></span>
          </span>
          <div className="absolute -top-2 -left-32 bg-white text-navy px-3 py-2 rounded-lg shadow-lg text-sm font-semibold whitespace-nowrap animate-pulse">
            💬 Chat with us!
          </div>
        </div>
      </button>

      {/* Chat Window - Hidden on mobile */}
      {isOpen && (
        <div className="hidden md:block fixed bottom-6 right-6 z-50 w-[380px] max-w-[calc(100vw-3rem)] animate-slide-up">
          <div className="bg-white rounded-2xl shadow-2xl overflow-hidden border-2 border-accent/20">
            {/* Header */}
            <div className="bg-gradient-to-r from-accent to-gold text-white p-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="relative">
                    <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                      <span className="text-2xl">👨‍💼</span>
                    </div>
                    <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-400 border-2 border-white rounded-full"></span>
                  </div>
                  <div>
                    <h4 className="font-bold">Property Expert</h4>
                    <p className="text-xs text-white/90">Online • Replies instantly</p>
                  </div>
                </div>
                <button
                  onClick={() => setIsOpen(false)}
                  className="text-white/80 hover:text-white transition"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            </div>

            {/* Messages */}
            <div className="p-4 bg-gray-50 h-[300px] overflow-y-auto">
              <div className="space-y-3">
                <div className="flex gap-2">
                  <div className="w-8 h-8 bg-gradient-to-br from-accent to-gold rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-sm">👨‍💼</span>
                  </div>
                  <div className="bg-white rounded-2xl rounded-tl-none p-3 shadow-sm max-w-[80%]">
                    <p className="text-sm text-gray-800">
                      Hi! 👋 I'm here to help you find the perfect UAE property investment.
                    </p>
                  </div>
                </div>
                
                <div className="flex gap-2">
                  <div className="w-8 h-8 bg-gradient-to-br from-accent to-gold rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-sm">👨‍💼</span>
                  </div>
                  <div className="bg-white rounded-2xl rounded-tl-none p-3 shadow-sm max-w-[80%]">
                    <p className="text-sm text-gray-800 mb-2">
                      What are you looking for today?
                    </p>
                    <div className="space-y-2">
                      {quickMessages.map((msg, index) => (
                        <button
                          key={index}
                          onClick={() => setMessage(msg)}
                          className="block w-full text-left text-xs bg-accent-50 hover:bg-accent-100 text-navy px-3 py-2 rounded-lg transition"
                        >
                          {msg}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Input */}
            <div className="p-4 bg-white border-t border-gray-200">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                  placeholder="Type your message..."
                  className="flex-1 px-4 py-2 border-2 border-gray-300 rounded-xl focus:ring-2 focus:ring-accent focus:border-accent outline-none text-sm"
                />
                <button
                  onClick={handleSend}
                  className="bg-gradient-to-r from-accent to-gold hover:from-accent-dark hover:to-gold-dark text-white p-2 rounded-xl transition-all hover:scale-105"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                  </svg>
                </button>
              </div>
              <p className="text-xs text-gray-500 mt-2 text-center">
                Powered by WhatsApp • Instant response
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
