import React from 'react'
import './AquariumVideos.css'

function AquariumVideos() {
  return (
    <div className="video-section">
      <h2 className="video-title">Dive into The Neon Depths</h2>
      <p className="video-description">
        Discover the beauty of marine life with our curated selection of mesmerizing aquarium visuals.
      </p>

      {/* Long video first */}
      <div className="long-video-wrapper zoom-in">
        <iframe
          src="https://www.youtube.com/embed/Aea0Z-d_Szg"
          title="Aquarium Long Video"
          allowFullScreen
        />
      </div>

      {/* Shorts row below */}
      <div className="short-videos-row">
        <div className="short-video-wrapper slide-left">
          <iframe
            src="https://www.youtube.com/embed/o2R19qEZr7s"
            title="Aquarium Short 1"
            allowFullScreen
          />
        </div>
        <div className="short-video-wrapper slide-up">
          <iframe
            src="https://www.youtube.com/embed/FPaWpHC0Xb8"
            title="Aquarium Short 2"
            allowFullScreen
          />
        </div>
        <div className="short-video-wrapper slide-right">
          <iframe
            src="https://www.youtube.com/embed/j4a2X_frKZM"
            title="Aquarium Short 3"
            allowFullScreen
          />
        </div>
      </div>
    </div>
  )
}

export default AquariumVideos
