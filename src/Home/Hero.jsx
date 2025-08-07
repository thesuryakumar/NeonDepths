import React from 'react'
import { Link } from 'react-router-dom'
import './Hero.css'

function Hero() {
  return (
    <div className="hero">
      <div className="slideshow">
        <div className="slide" id="slide1"></div>
        <div className="slide" id="slide2"></div>
        <div className="slide" id="slide3"></div>
      </div>
      <div className="container">
        <div className="hero-content">
          <h1>Welcome to <span className="highlight">The Neon Depths</span></h1>
          <p>
            Dive into a vibrant underwater world where glowing corals meet shimmering schools of fish.
            Explore the magic of the deep sea like never before—interactive, immersive, and unforgettable.
          </p>
          <Link to="/book-tickets" className="btn">Buy Tickets</Link>
        </div>
      </div>
    </div>
  )
}

export default Hero
