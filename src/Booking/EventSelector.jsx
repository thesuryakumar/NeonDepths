import React, { useContext } from "react";
import { SeatContext } from "./SeatContext";
import BookingProposal from "./BookingProposal";
import BookingMarriage from "./BookingMarriage";
import BookingAquaShow from "./BookingAquaShow";
import "bootstrap/dist/css/bootstrap.min.css";

const EventSelector = () => {
  const { eventType, setEventType } = useContext(SeatContext);

  const renderBookingComponent = () => {
    switch (eventType) {
      case "marriage":
        return <BookingMarriage />;
      case "aqua":
        return <BookingAquaShow />;
      default:
        return <BookingProposal />;
    }
  };

  return (
    <div className="text-center my-4">
      <h2>Select Event Type</h2>
      <div className="btn-group my-3">
        <button onClick={() => setEventType("proposal")} className="btn btn-outline-danger">
          💌 Proposal
        </button>
        <button onClick={() => setEventType("marriage")} className="btn btn-outline-warning">
          💍 Marriage
        </button>
        <button onClick={() => setEventType("aqua")} className="btn btn-outline-info">
          🐬 Aqua Show
        </button>
      </div>
      {renderBookingComponent()}
    </div>
  );
};

export default EventSelector;
