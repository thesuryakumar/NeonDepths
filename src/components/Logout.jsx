import React from 'react'
import bg from '../assets/bg.jpg' // Make sure the path is correct

function Logout() {
  return (
    <div
      className="d-flex justify-content-center align-items-center min-vh-100 text-light"
      style={{
        backgroundImage: `url(${bg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      <div
        className="p-4 rounded shadow-lg text-center"
        style={{
          background: 'rgba(255, 255, 255, 0.15)',
          border: '1px solid rgba(0, 255, 128, 0.3)',
          width: '100%',
          maxWidth: '420px',
          backdropFilter: 'blur(3px)',
          boxShadow: '0 0 15px rgba(0, 255, 128, 0.4)'
        }}
      >
        <h2
          className="mb-4"
          style={{
            color: '#eaffea',
            fontWeight: '600',
            letterSpacing: '1px'
          }}
        >
          Neon Depths
        </h2>

        <h5 className="text-white mb-3">Are you sure you want to log out?</h5>

        <button
          className="btn w-100 mb-2 fw-bold"
          style={{
            background: 'linear-gradient(to right, #d0ffd9, #a1f5c9)',
            color: '#000',
            border: 'none',
            boxShadow: '0 0 10px #b6ffdc'
          }}
        >
          Yes, Log Me Out
        </button>

        <button
          className="btn w-100 fw-bold"
          style={{
            background: 'transparent',
            color: '#ffffff',
            border: '1px solid #a1f5c9'
          }}
        >
          Cancel
        </button>
      </div>

      <style>{`
        button:focus {
          outline: none;
          box-shadow: 0 0 5px #a6ffcb;
        }
      `}</style>
    </div>
  )
}

export default Logout
