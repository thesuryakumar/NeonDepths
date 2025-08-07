import React from 'react'
import './UniqueExperience.css'

function UniqueExperience() {
  return (
    <div className='unique-container'>
      <div className='unique-info'>
        <h2 className='unique-heading'>What Makes Neon Depths Unique?</h2>
        <p className='unique-paragraph'>
          At Aquarium Paradise, we redefine underwater entertainment. From walk-through ocean tunnels and
          immersive marine life zones to interactive learning stations, we promise an unforgettable
          experience. Watch exotic marine species swim over your head, enjoy mesmerizing jellyfish
          displays, and capture picture-perfect moments at every corner.
        </p>
        <p className='unique-paragraph'>
          We’re more than just an aquarium – we’re a world of wonder. Whether you're a child, an adult, or a
          marine enthusiast, Aquarium Paradise offers fun, education, and thrill for everyone.
        </p>
      </div>
      <div className='unique-image-wrapper'>
        <img
          src='https://media.istockphoto.com/id/153782658/photo/biggest-aquarium-in-the-world-atlanta-georgia.jpg?s=612x612&w=0&k=20&c=aTGApHF81O05Dj1aXwI4bUPgji-w1raxC89cacVdHJw='
          alt='Aquarium Experience'
          className='unique-image'
        />
      </div>
    </div>
  )
}

export default UniqueExperience
