'use client';

import { useState, useEffect } from 'react';

interface Notification {
  id: number;
  message: string;
  location: string;
  time: string;
  type: 'purchase' | 'inquiry' | 'booking';
}

export default function LiveNotifications() {
  const [notifications, setNotifications] = useState<Notification[]>([
    {
      id: 1,
      message: 'Ahmed from Dubai just purchased a Golden Visa property',
      location: 'Dubai',
      time: '2 minutes ago',
      type: 'purchase'
    },
    {
      id: 2,
      message: 'Sarah from London just booked a consultation',
      location: 'London',
      time: '5 minutes ago',
      type: 'booking'
    },
    {
      id: 3,
      message: 'Michael from New York inquired about Palm Jumeirah',
      location: 'New York',
      time: '7 minutes ago',
      type: 'inquiry'
    },
    {
      id: 4,
      message: 'Fatima from Riyadh secured an off-plan unit',
      location: 'Riyadh',
      time: '12 minutes ago',
      type: 'purchase'
    },
    {
      id: 5,
      message: 'John from Sydney booked a property tour',
      location: 'Sydney',
      time: '15 minutes ago',
      type: 'booking'
    }
  ]);
  
  const [activeNotification, setActiveNotification] = useState<Notification | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    // Initial delay before showing first notification
    const initialTimeout = setTimeout(() => {
      showNextNotification();
    }, 3000);
    
    return () => clearTimeout(initialTimeout);
  }, []);
  
  const showNextNotification = () => {
    // Hide current notification
    setIsVisible(false);
    
    // Wait for fade out animation
    setTimeout(() => {
      // Get random notification
      const randomIndex = Math.floor(Math.random() * notifications.length);
      setActiveNotification(notifications[randomIndex]);
      
      // Show new notification
      setIsVisible(true);
      
      // Schedule next notification
      const timeout = setTimeout(() => {
        setIsVisible(false);
        
        // Wait for fade out, then schedule next
        setTimeout(() => {
          showNextNotification();
        }, 500);
      }, 5000);
      
      return () => clearTimeout(timeout);
    }, 500);
  };
  
  if (!activeNotification) return null;
  
  return (
    <div className={`fixed bottom-24 left-6 z-40 transition-all duration-500 transform ${
      isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
    }`}>
      <div className="bg-white rounded-xl shadow-2xl p-4 max-w-xs animate-bounce-small">
        <div className="flex items-start gap-3">
          <div className={`w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 ${
            activeNotification.type === 'purchase' ? 'bg-green-100 text-green-600' :
            activeNotification.type === 'booking' ? 'bg-blue-100 text-blue-600' :
            'bg-amber-100 text-amber-600'
          }`}>
            {activeNotification.type === 'purchase' ? (
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
            ) : activeNotification.type === 'booking' ? (
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
              </svg>
            )}
          </div>
          <div>
            <p className="text-sm font-medium text-gray-800">{activeNotification.message}</p>
            <div className="flex items-center gap-2 mt-1">
              <span className="text-xs text-gray-500">{activeNotification.location}</span>
              <span className="text-xs text-gray-400">•</span>
              <span className="text-xs text-gray-500">{activeNotification.time}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
