import React from "react";
import { SeatProvider } from "../Booking/SeatContext";
import DateTimeSelector from "../Booking/DateTimeSelector";

function PageBooking() {
  return (
    <SeatProvider>
      <DateTimeSelector />
    </SeatProvider>
  );
}

export default PageBooking;
