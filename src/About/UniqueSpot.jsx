import React, { useState } from 'react'
import './UniqueSpot.css'

function UniqueSpot() {
  const [showPopup, setShowPopup] = useState(false)

  const handleImageClick = () => setShowPopup(true)
  const handleClose = () => setShowPopup(false)

  return (
    <>
      <div className='vision-container'>
        <div className='vision-image-wrapper'>
          <div className='vision-top-img' onClick={handleImageClick}>
            <img 
              src='https://media.gettyimages.com/id/1735129910/video/koi-fish-swimming-in-an-artificial-waterfall.jpg?s=640x640&k=20&c=55SJ6AATJ7hbenc4pb7CvZkJF7rq2Q8fZMEyCPtx2Ak=' 
              alt='Romantic Neon Spot' 
              className='clickable-image'
            />
          </div>
        </div>

        <div className='vision-text'>
          <h2 className='vision-heading'>💖 The Most Romantic Spot in Our Neon Depths</h2>
          <p className='vision-paragraph'>
            Nestled beneath shimmering waterfalls and glowing koi fish, this hidden sanctuary offers a magical experience like no other 🌊✨.
          </p>
          <p className='vision-paragraph'>
            🌺 Peaceful ambiance<br />
            🎶 Soothing underwater melodies<br />
            🌈 Bioluminescent lighting experience<br />
            🐠 Interactive koi fish trails<br />
            💡 Perfect for couples and dreamers
          </p>
        </div>
      </div>

      {showPopup && (
        <div className='popup-overlay' onClick={handleClose}>
          <div className='popup-content' onClick={e => e.stopPropagation()}>
            <button className='close-btn' onClick={handleClose}>×</button>
            <div className='popup-gallery'>
              <img src='https://images.pexels.com/photos/26743117/pexels-photo-26743117.jpeg?cs=srgb&dl=pexels-quang-nguyen-vinh-222549-26743117.jpg&fm=jpg' alt='Gallery 1' />
              <img src='https://i.pinimg.com/736x/0d/ec/5f/0dec5f1e61a44b27650b7697f3ad9acb.jpg' alt='Gallery 2' />
              <img src='https://images.pexels.com/photos/2446439/pexels-photo-2446439.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500' alt='Gallery 3' />
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default UniqueSpot
