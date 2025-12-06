'use client';

import { useState } from 'react';

export default function LanguageToggle() {
  const [isOpen, setIsOpen] = useState(false);
  const [currentLang, setCurrentLang] = useState('EN');

  const languages = [
    { code: 'EN', name: 'English', flag: '🇬🇧' },
    { code: 'AR', name: 'العربية', flag: '🇦🇪' },
    { code: 'FR', name: 'Français', flag: '🇫🇷' },
    { code: 'RU', name: 'Русский', flag: '🇷🇺' },
    { code: 'ZH', name: '中文', flag: '🇨🇳' }
  ];

  const handleLanguageChange = (code: string) => {
    setCurrentLang(code);
    setIsOpen(false);
    // Here you would implement actual language switching logic
    console.log(`Language changed to: ${code}`);
  };

  return (
    <div className="fixed top-24 right-6 z-30">
      <div className="relative">
        {/* Toggle Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="bg-white hover:bg-gray-50 border-2 border-gray-200 hover:border-accent rounded-xl px-4 py-3 shadow-lg transition-all flex items-center gap-2 font-semibold text-navy"
        >
          <svg className="w-5 h-5 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
          </svg>
          <span>{currentLang}</span>
          <svg className={`w-4 h-4 transition-transform ${isOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>

        {/* Dropdown Menu */}
        {isOpen && (
          <div className="absolute top-full right-0 mt-2 w-48 bg-white border-2 border-gray-200 rounded-xl shadow-2xl overflow-hidden animate-slide-up">
            {languages.map((lang) => (
              <button
                key={lang.code}
                onClick={() => handleLanguageChange(lang.code)}
                className={`w-full px-4 py-3 text-left hover:bg-accent/5 transition-colors flex items-center gap-3 ${
                  currentLang === lang.code ? 'bg-accent/10 font-bold' : ''
                }`}
              >
                <span className="text-2xl">{lang.flag}</span>
                <div className="flex-1">
                  <p className="font-semibold text-navy">{lang.name}</p>
                  <p className="text-xs text-gray-500">{lang.code}</p>
                </div>
                {currentLang === lang.code && (
                  <svg className="w-5 h-5 text-accent" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                )}
              </button>
            ))}
            
            {/* Coming Soon Badge */}
            <div className="px-4 py-2 bg-gray-50 border-t border-gray-200">
              <p className="text-xs text-gray-500 text-center">
                More languages coming soon
              </p>
            </div>
          </div>
        )}
      </div>

      {/* Mobile: Floating Language Button */}
      <div className="lg:hidden fixed bottom-20 right-4 z-30">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="w-14 h-14 bg-white hover:bg-gray-50 border-2 border-gray-200 hover:border-accent rounded-full shadow-lg transition-all flex items-center justify-center"
        >
          <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
          </svg>
        </button>
      </div>
    </div>
  );
}
