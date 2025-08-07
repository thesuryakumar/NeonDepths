import React, { useState, useContext } from "react";
import { SeatContext } from "./SeatContext";
import Payment from "./Payment";
import "bootstrap/dist/css/bootstrap.min.css";

const Booking = ({ date, time }) => {
  const { selectedSeats, setSelectedSeats } = useContext(SeatContext);
  const [proceed, setProceed] = useState(false);

  const totalSeats = 10;
  const seatPrice = 20000;

  const handleSeatClick = (seatNum) => {
    setSelectedSeats((prev) =>
      prev.includes(seatNum)
        ? prev.filter((s) => s !== seatNum)
        : [...prev, seatNum]
    );
  };

  const handleSelectAll = () => {
    const allSeats = Array.from({ length: totalSeats }, (_, i) => i + 1);
    setSelectedSeats(allSeats);
  };

  const handleClearAll = () => {
    setSelectedSeats([]);
  };

  if (proceed) return <Payment date={date} time={time} />;

  const distributeSeats = (count) => {
    const rings = [];
    let remaining = count;
    let ringIndex = 0;

    while (remaining > 0) {
      const seatsInRing = Math.min(5 + ringIndex * 2, remaining);
      rings.push({ count: seatsInRing, radius: 70 + ringIndex * 60 });
      remaining -= seatsInRing;
      ringIndex++;
    }

    return rings;
  };

  const seatGroups = distributeSeats(totalSeats);
  let seatIndex = 0;

  return (
    <div
      style={{
        padding: "2rem",
        background: "linear-gradient(135deg, #FAF9F6, #FFE4F0)",
        borderRadius: "1.5rem",
        textAlign: "center",
        boxShadow: "0 0 25px rgba(255, 105, 180, 0.3)",
      }}
    >
      <h2
        style={{
          color: "#2E2E2E",
          fontWeight: "bold",
          fontSize: "2rem",
          marginBottom: "1rem",
        }}
      >
        💖 Proposal Circle Booking
      </h2>
      <p className="text-muted">
        📅 {date} 🕐 {time}
      </p>

      <div
        style={{
          position: "relative",
          width: "450px",
          height: "450px",
          margin: "2rem auto",
          borderRadius: "50%",
          backgroundColor: "#FAF9F6",
          border: "3px dashed #FF66CC",
          boxShadow: "inset 0 0 10px rgba(255, 105, 180, 0.2)",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "90px",
            height: "90px",
            backgroundColor: "#FF66CC",
            color: "#fff",
            borderRadius: "50%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontWeight: "bold",
            fontSize: "0.9rem",
            boxShadow: "0 0 10px #FF66CC",
          }}
        >
          ❤️ STAGE
        </div>

        {seatGroups.map((group, groupIndex) => {
          return [...Array(group.count)].map((_, i) => {
            const angle = (i / group.count) * 2 * Math.PI;
            const x = group.radius * Math.cos(angle);
            const y = group.radius * Math.sin(angle);
            const seatNumber = seatIndex + 1;
            const isSelected = selectedSeats.includes(seatNumber);
            seatIndex++;

            return (
              <button
                key={`seat-${groupIndex}-${i}`}
                onClick={() => handleSeatClick(seatNumber)}
                style={{
                  position: "absolute",
                  left: `calc(50% + ${x}px - 20px)`,
                  top: `calc(50% + ${y}px - 20px)`,
                  width: "40px",
                  height: "40px",
                  borderRadius: "50%",
                  backgroundColor: isSelected ? "#FF66CC" : "#fff",
                  border: "2px solid #FF66CC",
                  color: "#2E2E2E",
                  fontWeight: "bold",
                  boxShadow: isSelected
                    ? "0 0 10px #FF66CC"
                    : "0 0 5px rgba(179, 0, 89, 0.2)",
                  transition: "0.3s",
                  cursor: "pointer",
                }}
              >
                {seatNumber}
              </button>
            );
          });
        })}
      </div>

      <div className="mb-3">
        <button
          onClick={handleSelectAll}
          className="btn btn-outline-success mx-2"
          style={{
            backgroundColor: "#FF66CC",
            color: "#fff",
            fontWeight: "bold",
            border: "none",
          }}
        >
          Select All
        </button>
        <button
          onClick={handleClearAll}
          className="btn btn-outline-danger"
          style={{
            backgroundColor: "#FF66CC",
            color: "#fff",
            fontWeight: "bold",
            border: "none",
          }}
        >
          Clear All
        </button>
      </div>

      <div
        style={{
          backgroundColor: "#FAF9F6",
          padding: "1.5rem",
          borderRadius: "1rem",
          border: "2px dashed #FF66CC",
          fontSize: "1.1rem",
          fontWeight: "500",
          boxShadow: "inset 0 0 10px rgba(255, 105, 180, 0.1)",
        }}
      >
        <p>
          🎫 Selected Seats:{" "}
          <span style={{ fontWeight: "bold", color: "#2E2E2E" }}>
            {selectedSeats.length > 0 ? selectedSeats.join(", ") : "None"}
          </span>
        </p>
        <p>
          💰 Total Price:{" "}
          <span style={{ fontWeight: "bold", color: "#2E2E2E" }}>
            ₹{selectedSeats.length * seatPrice}
          </span>
        </p>

        <button
          disabled={selectedSeats.length === 0}
          onClick={() => setProceed(true)}
          style={{
            marginTop: "1rem",
            padding: "0.8rem 2rem",
            backgroundColor: "#FF66CC",
            color: "#fff",
            fontSize: "1rem",
            fontWeight: "bold",
            borderRadius: "10px",
            border: "none",
            cursor: selectedSeats.length === 0 ? "not-allowed" : "pointer",
            opacity: selectedSeats.length === 0 ? 0.5 : 1,
          }}
        >
          Proceed to Payment
        </button>
      </div>
    </div>
  );
};

export default Booking;
