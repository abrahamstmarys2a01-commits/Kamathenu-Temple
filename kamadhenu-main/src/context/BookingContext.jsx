import React, { createContext, useContext, useState } from 'react';
import BookingModal from '../components/BookingModal';

const BookingContext = createContext(null);

export const useBooking = () => useContext(BookingContext);

export const BookingProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const openBooking = () => setIsOpen(true);
  const closeBooking = () => setIsOpen(false);

  return (
    <BookingContext.Provider value={{ openBooking, closeBooking }}>
      {children}
      <BookingModal isOpen={isOpen} onClose={closeBooking} />
    </BookingContext.Provider>
  );
};
