import React, { useState } from "react";
import Booking from "./Booking";
import MarriageBooking from "./MarriageBooking";
import AquaBooking from "./AquaBooking";

function DateTimeSelector() {
  const [eventType, setEventType] = useState("proposal");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [proceed, setProceed] = useState(false);

  const handleContinue = () => {
    if (date && time) {
      setProceed(true);
    } else {
      alert("Please select both date and time.");
    }
  };

  if (proceed) {
    const key = `${eventType}-${date}-${time}`;
    if (eventType === "proposal") {
      return <Booking key={key} date={date} time={time} />;
    } else if (eventType === "marriage") {
      return <MarriageBooking key={key} date={date} time={time} />;
    } else if (eventType === "aqua") {
      return <AquaBooking key={key} date={date} time={time} />;
    }
  }

  return (
    <div
      style={{
        marginTop: "50px",
        padding: "30px",
        border: "1px solid #00bcd4",
        borderRadius: "20px",
        boxShadow: "0 8px 20px rgba(0, 188, 212, 0.2)",
        textAlign: "center",
        backgroundColor: "#e0f7fa",
        width: "80%",
        maxWidth: "500px",
        marginLeft: "auto",
        marginRight: "auto",
      }}
    >
      <h2 style={{ marginBottom: "25px", color: "#00796b" }}> Book Your Event</h2>

      <div style={{ marginBottom: "20px" }}>
        <label style={{ display: "block", marginBottom: "8px", fontWeight: "bold" }}>
          Select Event Type:
        </label>
        <select
          value={eventType}
          onChange={(e) => setEventType(e.target.value)}
          style={{
            padding: "10px",
            borderRadius: "8px",
            border: "1px solid #00acc1",
            width: "100%",
          }}
        >
          <option value="proposal">Proposal</option>
          <option value="marriage">Marriage</option>
          <option value="aqua">Aqua Show</option>
        </select>
      </div>

      <div style={{ marginBottom: "20px" }}>
        <label style={{ display: "block", marginBottom: "8px", fontWeight: "bold" }}>
          Select Date:
        </label>
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          style={{
            padding: "10px",
            borderRadius: "8px",
            border: "1px solid #00acc1",
            width: "100%",
          }}
        />
      </div>

      <div style={{ marginBottom: "25px" }}>
        <label style={{ display: "block", marginBottom: "8px", fontWeight: "bold" }}>
          Select Time:
        </label>
        <input
          type="time"
          value={time}
          onChange={(e) => setTime(e.target.value)}
          style={{
            padding: "10px",
            borderRadius: "8px",
            border: "1px solid #00acc1",
            width: "100%",
          }}
        />
      </div>

      <button
        onClick={handleContinue}
        style={{
          backgroundColor: "#00796b",
          color: "#fff",
          padding: "12px 25px",
          border: "none",
          borderRadius: "10px",
          fontWeight: "bold",
          cursor: "pointer",
        }}
      >
        Continue to Seat Selection
      </button>
    </div>
  );
}

export default DateTimeSelector;
