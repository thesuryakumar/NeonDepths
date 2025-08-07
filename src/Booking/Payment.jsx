import React, { useContext, useState } from "react";
import { SeatContext } from "./SeatContext";
import qr from "../assets/qr.jpg";

const Payment = ({ date, time }) => {
  const { selectedSeats, paymentType, setPaymentType } = useContext(SeatContext);
  const [cardDetails, setCardDetails] = useState({ number: "", name: "", expiry: "", cvv: "" });
  const [confirmed, setConfirmed] = useState(false);

  const handleInput = (e) => {
    setCardDetails({ ...cardDetails, [e.target.name]: e.target.value });
  };

  const confirmPayment = () => {
    setConfirmed(true);
  };

  if (confirmed) {
    return (
      <div
        className="text-center mt-5"
        style={{
          backgroundColor: "#d9faff",
          padding: "30px",
          borderRadius: "16px",
          boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
        }}
      >
        <h2 style={{ color: "#28a745" }}>🎉 Payment Confirmed!</h2>
        <p>Seats Booked: {selectedSeats.join(", ")}</p>
        <p>
          📅 {date} 🕐 {time}
        </p>
      </div>
    );
  }

  return (
    <div
      className="container mt-5"
      style={{
        background: "linear-gradient(135deg, #e0f7fa, #b2ebf2)",
        padding: "30px",
        borderRadius: "20px",
        boxShadow: "0 0 20px rgba(0, 123, 255, 0.2)",
      }}
    >
      <h3 style={{ color: "#007bff", fontWeight: "bold" }}>
        Selected Seats: {selectedSeats.join(", ")}
      </h3>
      <p style={{ color: "#555" }}>
        📅 {date} 🕐 {time}
      </p>
      <div className="mt-3">
        <label className="form-label" style={{ color: "#004d40", fontWeight: "500" }}>
          Select Payment Mode:
        </label>
        <select
          className="form-select"
          style={{ borderColor: "#26c6da" }}
          value={paymentType}
          onChange={(e) => setPaymentType(e.target.value)}
        >
          <option value="qr">Online (QR)</option>
          <option value="card">Card</option>
        </select>
      </div>

      {paymentType === "qr" ? (
        <div
          className="text-center mt-4"
          style={{ backgroundColor: "#e0f2f1", padding: "20px", borderRadius: "12px" }}
        >
          <img
            src={qr}
            alt="QR Code"
            style={{
              width: "200px",
              height: "200px",
              objectFit: "contain",
              marginBottom: "10px",
              borderRadius: "12px",
              border: "2px solid #00bcd4",
            }}
          />
          <p style={{ color: "#00796b" }}>Scan the QR to pay</p>
          <button className="btn btn-primary px-4 py-2" onClick={confirmPayment}>
            Confirm Payment
          </button>
        </div>
      ) : (
        <div className="mt-4">
          <input
            type="text"
            name="number"
            placeholder="Card Number"
            className="form-control mb-2"
            onChange={handleInput}
            style={{ borderColor: "#80deea" }}
          />
          <input
            type="text"
            name="name"
            placeholder="Name on Card"
            className="form-control mb-2"
            onChange={handleInput}
            style={{ borderColor: "#80deea" }}
          />
          <div className="d-flex gap-2 mb-2">
            <input
              type="text"
              name="expiry"
              placeholder="MM/YY"
              className="form-control"
              onChange={handleInput}
              style={{ borderColor: "#80deea" }}
            />
            <input
              type="password"
              name="cvv"
              placeholder="CVV"
              className="form-control"
              onChange={handleInput}
              style={{ borderColor: "#80deea" }}
            />
          </div>
          <button
            className="btn btn-success px-4 py-2"
            style={{ backgroundColor: "#009688", borderColor: "#00796b" }}
            onClick={confirmPayment}
          >
            Pay & Confirm
          </button>
        </div>
      )}
    </div>
  );
};

export default Payment;
