'use client';

import React, { createContext, useContext, useState, ReactNode } from 'react';
import BookingModal from '@/components/BookingModal';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';

interface BookingContextType {
  isOpen: boolean;
  openBooking: () => void;
  closeBooking: () => void;
}

const BookingContext = createContext<BookingContextType | undefined>(undefined);

export function BookingProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);

  const openBooking = () => setIsOpen(true);
  const closeBooking = () => setIsOpen(false);

  return (
    <BookingContext.Provider value={{ isOpen, openBooking, closeBooking }}>
      {children}
      <BookingModal isOpen={isOpen} onClose={closeBooking} />
      <FloatingWhatsApp />
    </BookingContext.Provider>
  );
}

export function useBookingModal() {
  const context = useContext(BookingContext);
  if (!context) {
    throw new Error('useBookingModal must be used within a BookingProvider');
  }
  return context;
}
