import React, { useContext, useState } from "react"
import { SeatContext } from "./SeatContext"
import Payment from "./Payment"

const AquaBooking = ({ date, time, totalSeats = 150 }) => {
  const { selectedSeats, setSelectedSeats } = useContext(SeatContext)
  const [proceed, setProceed] = useState(false)
  const seatPrice = 200

  const handleSeatClick = (seatNum) => {
    setSelectedSeats((prev) =>
      prev.includes(seatNum)
        ? prev.filter((s) => s !== seatNum)
        : [...prev, seatNum]
    )
  }

  // Moved outside renderCircleSeats
  const handleSelectAll = () => {
    const allSeats = Array.from({ length: totalSeats }, (_, i) => i + 1)
    setSelectedSeats(allSeats)
  }
  const handleClearAll = () => {
    setSelectedSeats([])
  }

  if (proceed) return <Payment date={date} time={time} />

  const renderDynamicSeats = () => {
    const rings = []
    let startIndex = 0
    let radius = 100
    let ringSeats = 10

    while (startIndex < totalSeats) {
      const count = Math.min(ringSeats, totalSeats - startIndex)
      rings.push(renderCircleSeats(count, startIndex, radius))
      startIndex += count
      radius += 70
      ringSeats += 10
    }
    return rings
  }

  const renderCircleSeats = (count, startIndex, radius) => {
    return [...Array(count)].map((_, index) => {
      const seatNumber = startIndex + index + 1
      const angle = (index / count) * 2 * Math.PI
      const x = radius * Math.cos(angle)
      const y = radius * Math.sin(angle)
      const isSelected = selectedSeats.includes(seatNumber)

      return (
        <button
          key={seatNumber}
          onClick={() => handleSeatClick(seatNumber)}
          style={{
            position: "absolute",
            left: `calc(50% + ${x}px - 20px)`,
            top: `calc(50% + ${y}px - 20px)`,
            width: "40px",
            height: "40px",
            borderRadius: "50%",
            border: "2px solid #0c4767",
            backgroundColor: isSelected ? "#ffd700" : "#f0f9ff",
            color: "#0c4767",
            fontWeight: "bold",
            fontSize: "0.85rem",
            boxShadow: isSelected ? "0 0 10px #ffd700" : "0 0 5px #00c0ff",
            cursor: "pointer",
            transition: "0.3s",
            zIndex: 10
          }}
        >
          {seatNumber}
        </button>
      )
    })
  }

  return (
    <div
      style={{
        padding: "3rem",
        background: "linear-gradient(135deg, #c0f2ff, #3dd4c0)",
        borderRadius: "1.5rem",
        textAlign: "center",
        boxShadow: "0 0 25px rgba(0, 204, 255, 0.5)",
        overflow: "hidden"
      }}
    >
      <h2
        style={{
          color: "#0c4767",
          fontWeight: "bold",
          fontSize: "2rem",
          marginBottom: "2rem"
        }}
      >
        🐟 Aqua Show 
      </h2>

      <div
        style={{
          position: "relative",
          width: "min(100%, 800px)",
          height: "800px",
          margin: "0 auto 2rem auto",
          borderRadius: "50%",
          backgroundColor: "#e0f7ff",
          border: "5px dashed #0c4767",
          boxShadow: "inset 0 0 20px rgba(0, 204, 255, 0.2)"
        }}
      >
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "120px",
            height: "120px",
            backgroundColor: "#0c4767",
            color: "#fff",
            borderRadius: "50%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontWeight: "bold",
            boxShadow: "0 0 15px #00e1ff",
            zIndex: 20
          }}
        >
          SCREEN
        </div>
        {renderDynamicSeats()}
      </div>
      <div className="mb-3">
        <button
          onClick={handleSelectAll}
          className="btn btn-outline-success mx-2"
          style={{ backgroundColor: "#00e1ff" }}
        >
          Select All
        </button>
        <button
          onClick={handleClearAll}
          className="btn btn-outline-danger"
          style={{ backgroundColor: "#00e1ff" }}
        >
          Clear All
        </button>
      </div>
      <div
        style={{
          backgroundColor: "#e7fcff",
          padding: "1.5rem",
          borderRadius: "1rem",
          border: "2px dashed #3dd4c0",
          fontSize: "1.1rem",
          fontWeight: "500",
          boxShadow: "inset 0 0 10px rgba(0, 204, 255, 0.2)"
        }}
      >
        <p>
          🎫 Selected Seats:{" "}
          <span style={{ fontWeight: "bold", color: "#0c4767" }}>
            {selectedSeats.length > 0 ? selectedSeats.join(", ") : "None"}
          </span>
        </p>
        <p>
          💰 Total Price:{" "}
          <span style={{ fontWeight: "bold", color: "#0c4767" }}>
            ₹{selectedSeats.length * seatPrice}
          </span>
        </p>

        <button
          disabled={selectedSeats.length === 0}
          onClick={() => setProceed(true)}
          style={{
            marginTop: "1rem",
            padding: "0.8rem 2.5rem",
            backgroundColor: "#0c4767",
            color: "#fff",
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

export default AquaBooking
