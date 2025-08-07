import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import './ProposalExperience.css' // Reusing same CSS

function MarriageEvent() {
  const [showFullDetails, setShowFullDetails] = useState(false)
  const [images, setImages] = useState([])
  const navigate = useNavigate()

  useEffect(() => {
    if (showFullDetails) {
      setImages([
        'https://assets.zeezest.com/blogs/PROD_Queen%20Of%20Tears%201_1717086173452_thumb_500.jpeg',
        'https://inkistyle.com/wp-content/uploads/2024/04/Queen-Of-Tears-Fashion-Kim-Ji-Won-Episodes-13-14.jpg',
      ])
    } else {
      setImages([
        'https://dnm.nflximg.net/api/v6/BvVbc2Wxr2w6QuoANoSpJKEIWjQ/AAAAQQbzps8XSosQZykNWTQrKkxxz6A6SIVQ0r8gE_zvzbRQ5yHzdHkqvKHeUxmcDipAcp3RIdYzsPHPhamQnAVTxgpkl-Cht8p0pfYWarYZ6ITjj6ws1cu15QVTs6a7D8_xCyntYHmwvW1M3EXytrWMFlPhzO8.jpg?r=860',
        'https://i.pinimg.com/736x/d3/cd/9b/d3cd9b7e0d1bc25c4b7ce58f2177c223.jpg',
      ])
    }
  }, [showFullDetails])

  const handleBookNow = () => {
    navigate('/book-tickets')
  }

  return (
    <div className='unique-container'>
      <div className='unique-info'>
        <div className='proposal-content'>
          <h2>💍 Wedding Celebration Event</h2>

          {!showFullDetails ? (
            <p>
              Begin your forever in the magic of marine elegance. Celebrate your big day with
              underwater views and breathtaking ambiance.
            </p>
          ) : (
            <>
              <p>
                💒 Say "I do" in a venue like no other – surrounded by shimmering aquatic life and
                serenity. Our wedding packages are tailored for elegance and emotion.
              </p>
              <ul>
                <li>🌊 Scenic aquarium backdrop for vows</li>
                <li>🎵 Live soft music & oceanic ambiance</li>
                <li>📸 Cinematic videography & photography</li>
                <li>🍽️ Gourmet dining with sea-themed decor</li>
                <li>💐 Personalized floral arrangements</li>
              </ul>
              <p>Let us make your wedding a deep dive into romance and joy! 🕊️</p>
            </>
          )}

          <div className='button-group'>
            <button
              className='action-button'
              onClick={() => setShowFullDetails(!showFullDetails)}
            >
              {showFullDetails ? 'Show Less' : 'View Full Details'}
            </button>
            <button className='action-button book-now' onClick={handleBookNow}>
              Book Now
            </button>
          </div>
        </div>
      </div>

      <div className='unique-image-wrapper'>
        {images.map((src, idx) => (
          <img key={idx} src={src} alt='Marriage Event' className='unique-image image-fade' />
        ))}
      </div>
    </div>
  )
}

export default MarriageEvent
