import React, { useState, useEffect } from 'react';
import './ProposalExperience.css'; // Reusing same CSS
import { useNavigate } from 'react-router-dom'
function AquaShow() {
  const [showFullDetails, setShowFullDetails] = useState(false);
  const [images, setImages] = useState([]);
  const navigate = useNavigate()

  useEffect(() => {
    if (showFullDetails) {
      setImages([
        'https://www.deconcarneauapontaven.com//wp-content/uploads/tourinsoft/spectacle-5.jpg',
        'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/11/dd/9d/a8/20170624-080412-largejpg.jpg?w=1200&h=-1&s=1'
      ]);
    } else {
      setImages([
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSviJRrckTkrJsdvf0vIWh74kGJZ0W-bhzU0g&s',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtPpnMxtPA3HB8_AhidA5BYOC5ieuaKNkivg&s'
      ]);
    }
  }, [showFullDetails]);
  const handleBookNow = () => {
    navigate('/book-tickets')
  }

  return (
    <div className='unique-container'>
      <div className='unique-info'>
        <div className="proposal-content">
          <h2>🐠 Aqua Light Show Event</h2>

          {!showFullDetails ? (
            <p>
              Witness the ocean come alive with spectacular lights, synchronized music, and stunning aquatic performances.
            </p>
          ) : (
            <>
              <p>
                🌊 Dive into a world where marine beauty meets performance art. Our Aqua Show features synchronized swimming, vibrant lights, and fantasy-filled marine storytelling!
              </p>
              <ul>
                <li>✨ Laser and LED light projection across the tank</li>
                <li>🎼 Live DJ & synchronized fountain dance</li>
                <li>🧜‍♀️ Mermaid shows and theatrical sea tales</li>
                <li>📸 Meet & greet with performers after the show</li>
                <li>🎟️ Limited seats – exclusive marine night event</li>
              </ul>
              <p>
                Reserve your front-row experience under the waves. Let the ocean entertain you! 🌟
              </p>
            </>
          )}

          <div className="button-group">
            <button className="action-button" onClick={() => setShowFullDetails(!showFullDetails)}>
              {showFullDetails ? 'Show Less' : 'View Full Details'}
            </button>
            <button className="action-button book-now" onClick={handleBookNow}>Book Now</button>
          </div>
        </div>
      </div>

      <div className='unique-image-wrapper'>
        {images.map((src, idx) => (
          <img key={idx} src={src} alt='Aqua Show Event' className='unique-image image-fade' />
        ))}
      </div>
    </div>
  );
}

export default AquaShow;
