import React, { useContext, useState } from "react"
import { SeatContext } from "./SeatContext"
import Payment from "./Payment"

const MarriageBooking = ({ date, time }) => {
  const { selectedSeats, setSelectedSeats } = useContext(SeatContext)
  const [proceed, setProceed] = useState(false)

  const seatPrice = 10000
  const maxSeatsAllowed = 10
  const totalSeats = 120
  const seatsPerRow = 10

  const lavender = "#B497BD"
  const creamyWhite = "#FAF9F6"

  const handleSeatClick = (seatNum) => {
    setSelectedSeats((prev) =>
      prev.includes(seatNum)
        ? prev.filter((s) => s !== seatNum)
        : prev.length < maxSeatsAllowed
        ? [...prev, seatNum]
        : prev
    )
  }

  const renderSeats = () => {
    return [...Array(totalSeats)].map((_, index) => {
      const seatNumber = index + 1
      const isSelected = selectedSeats.includes(seatNumber)

      return (
        <button
          key={seatNumber}
          onClick={() => handleSeatClick(seatNumber)}
          style={{
            width: "50px",
            height: "50px",
            margin: "5px",
            borderRadius: "8px",
            backgroundColor: isSelected ? lavender : creamyWhite,
            color: lavender,
            fontWeight: "bold",
            border: `2px solid ${isSelected ? "#8B6FA9" : lavender}`,
            boxShadow: isSelected ? `0 0 10px ${lavender}` : `0 0 4px ${lavender}66`,
            transition: "0.3s",
            cursor: "pointer"
          }}
        >
          {seatNumber}
        </button>
      )
    })
  }

  if (proceed) return <Payment date={date} time={time} />

  const handleSelectAll = () => {
    const allSeats = Array.from({ length: totalSeats }, (_, i) => i + 1)
    setSelectedSeats(allSeats)
  }

  const handleClearAll = () => {
    setSelectedSeats([])
  }

  return (
    <div
      style={{
        padding: "2rem 1rem",
        background: creamyWhite,
        borderRadius: "1.5rem",
        textAlign: "center",
        boxShadow: `0 0 25px ${lavender}66`,
        overflowX: "auto"
      }}
    >
      <h2
        style={{
          color: lavender,
          fontWeight: "bold",
          fontSize: "2rem",
          marginBottom: "1rem"
        }}
      >
        💍 Marriage
      </h2>

      <div
        style={{
          backgroundColor: lavender,
          color: creamyWhite,
          fontWeight: "bold",
          padding: "0.6rem 1.2rem",
          borderRadius: "20px",
          width: "fit-content",
          margin: "0 auto 1.5rem auto",
          boxShadow: `0 0 10px ${lavender}aa`
        }}
      >
        STAGE
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: `repeat(${seatsPerRow}, 1fr)`,
          gap: "0.5rem",
          justifyContent: "center",
          maxWidth: `calc(50px * ${seatsPerRow} + 10px)`,
          margin: "0 auto 2rem auto"
        }}
      >
        {renderSeats()}
      </div>

      <div className="mb-3">
        <button
          style={{
            backgroundColor: lavender,
            color: creamyWhite,
            border: "none",
            padding: "0.5rem 1.2rem",
            borderRadius: "8px",
            marginRight: "1rem",
            cursor: "pointer"
          }}
          onClick={handleSelectAll}
        >
          Select All
        </button>
        <button
          style={{
            backgroundColor: lavender,
            color: creamyWhite,
            border: "none",
            padding: "0.5rem 1.2rem",
            borderRadius: "8px",
            cursor: "pointer"
          }}
          onClick={handleClearAll}
        >
          Clear All
        </button>
      </div>

      <div
        style={{
          backgroundColor: creamyWhite,
          padding: "1.5rem",
          borderRadius: "1rem",
          border: `2px dashed ${lavender}aa`,
          fontSize: "1.1rem",
          maxWidth: "600px",
          margin: "0 auto",
          boxShadow: `inset 0 0 10px ${lavender}33`
        }}
      >
        <p>
          🎫 Selected Seats:{" "}
          <strong style={{ color: lavender }}>
            {selectedSeats.length > 0 ? selectedSeats.join(", ") : "None"}
          </strong>
        </p>
        <p>
          💰 Total Price:{" "}
          <strong style={{ color: lavender }}>
            ₹{selectedSeats.length * seatPrice}
          </strong>
        </p>

        <button
          disabled={selectedSeats.length === 0}
          onClick={() => setProceed(true)}
          style={{
            marginTop: "1rem",
            padding: "0.8rem 2.5rem",
            backgroundColor: lavender,
            color: creamyWhite,
            fontSize: "1rem",
            fontWeight: "bold",
            borderRadius: "10px",
            border: "none",
            cursor: selectedSeats.length === 0 ? "not-allowed" : "pointer",
            opacity: selectedSeats.length === 0 ? 0.5 : 1,
            transition: "0.3s ease-in-out"
          }}
        >
          Proceed to Payment
        </button>
      </div>
    </div>
  )
}

export default MarriageBooking
