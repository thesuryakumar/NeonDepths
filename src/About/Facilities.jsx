import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './Facilities.css'

function Facilities() {
  const [showHearts, setShowHearts] = useState(false)
  const [showFlowers, setShowFlowers] = useState(false)

  const navigate = useNavigate()

  const handleProposalClick = () => {
    setShowHearts(true)
    setTimeout(() => setShowHearts(false), 3000)
  }

  const handleMarriageClick = () => {
    setShowFlowers(true)
    setTimeout(() => setShowFlowers(false), 3000)
  }

  const handleRegisterClick = () => {
    navigate('/book-tickets')
  }

  return (
    <div className='aqua-vision-container'>
      <h2 className='facility-heading'> Facilities We Offer for Couples</h2>

      <div className='event-cards'>
        <div className='event-card' onClick={handleProposalClick}>
          <img
            src='https://ts1.mm.bing.net/th?id=OIP.meql2e7imdIFzwE93jXzUQHaEV&pid=15.1'
            alt='Proposal Decoration'
          />
          <h3>Proposal Decoration</h3>
          <p>Celebrate your love in style with a dreamy proposal setup filled with lights, flowers, and magic</p>
          {showHearts && <div className='hearts-animation'></div>}
        </div>

        <div className='event-card' onClick={handleMarriageClick}>
          <img
            src='https://images.justwatch.com/backdrop/316813614/s640/season-1'
            alt='Marriage Events'
          />
          <h3>Marriage Events</h3>
          <p>From intimate underwater vows to grand celebrations, we craft unforgettable wedding moments</p>
          {showFlowers && <div className='flowers-animation'></div>}
        </div>
      </div>

      <div className='register-section'>
        <button className='register-btn' onClick={handleRegisterClick}>
          Register Now
        </button>
      </div>
    </div>
  )
}

export default Facilities
