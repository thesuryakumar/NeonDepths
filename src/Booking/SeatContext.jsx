import React, { createContext, useState } from "react";

export const SeatContext = createContext();

export const SeatProvider = ({ children }) => {
  const [selectedSeats, setSelectedSeats] = useState([]);
  const [paymentType, setPaymentType] = useState("qr");
  const [eventType, setEventType] = useState("proposal"); // default is proposal

  return (
    <SeatContext.Provider
      value={{
        selectedSeats,
        setSelectedSeats,
        paymentType,
        setPaymentType,
        eventType,
        setEventType,
      }}
    >
      {children}
    </SeatContext.Provider>
  );
};
