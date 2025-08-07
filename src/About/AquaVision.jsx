import React from 'react'
import './AquaVision.css'

function AquaVision() {
  return (
    <div className='aqua-vision-container'>
      <div className='aqua-image-wrapper'>
        <div className='aqua-top-img'>
          <img 
            src='https://png.pngtree.com/thumb_back/fh260/background/20241116/pngtree-serene-and-beautiful-underwater-scene-of-a-fish-swimming-gracefully-in-image_16609161.jpg' 
            alt='Underwater Scene' 
          />
        </div>
        <div className='aqua-bottom-imgs'>
          <img 
            src='https://wallpapercrafter.com/desktop2/777589-fish-aquarium-1080P.jpg' 
            alt='Fish Aquarium' 
          />
          <img 
            src='https://static.vecteezy.com/system/resources/thumbnails/050/437/668/small_2x/an-aquarium-with-fish-and-coral-free-video.jpg' 
            alt='Coral Scene' 
          />
        </div>
      </div>

      <div className='aqua-text'>
        <div className='aqua-card'>
          <h2 className='aqua-heading'>🌊 Our Vision</h2>
          <p className='aqua-paragraph'>
            To become the most immersive, educational, and environmentally-conscious aquarium destination that inspires awe and care for marine biodiversity among all age groups 🐠
          </p>
        </div>

        <div className='aqua-card'>
          <h2 className='aqua-heading'>🔍 Our Mission</h2>
          <p className='aqua-paragraph'>
            We aim to deliver world-class aquatic experiences by combining conservation, education, and entertainment. Our mission is to protect marine life and educate the next generation with love and innovation ❤️
          </p>
        </div>

        <div className='aqua-card'>
          <h2 className='aqua-heading'>🐟 How We Care for Each Fish</h2>
          <p className='aqua-paragraph'>
            At Aquarium Paradise, every fish is nurtured with precision and love. Our marine biologists monitor water purity, feeding schedules, and habitat health to ensure stress-free and healthy aquatic life 🧪
          </p>
        </div>
      </div>
    </div>
  )
}

export default AquaVision
