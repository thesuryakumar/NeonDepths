import React, { useState, useEffect } from 'react';
import './ProposalExperience.css';
import { useNavigate } from 'react-router-dom'; // 🔥 Add this

function ProposalExperience() {
  const [showFullDetails, setShowFullDetails] = useState(false);
  const [images, setImages] = useState([]);
  const navigate = useNavigate(); // 🔥 Add this

  useEffect(() => {
    if (showFullDetails) {
      setImages([
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTT-UMKJJVl2hxSU6V4M7kFEFletTjac27DhQ&s',
        'https://palmaaquarium.com/storage/app/uploads/public/678/531/666/thumb_660_0_0_0_0_crop.webp'
      ]);
    } else {
      setImages([
        'https://ts1.mm.bing.net/th?id=OIP.meql2e7imdIFzwE93jXzUQHaEV&pid=15.1',
        'https://img-s-msn-com.akamaized.net/tenant/amp/entityid/AA1zWY0s.img?w=768&h=384&m=6&x=1174&y=410&s=106&d=106'
      ]);
    }
  }, [showFullDetails]);

  const toggleDetails = () => {
    setShowFullDetails(prev => !prev);
  };

  const handleBookNow = () => {
    navigate('/book-tickets')
  }

  return (
    <div className='unique-container' style={{flexDirection:"row-reverse",gap:"50px"}}>
      <div className='unique-info'>
        <div className="proposal-content">
          <h2>💖 Love Proposal Event</h2>

          {!showFullDetails ? (
            <p>
              Dive into love with a romantic proposal surrounded by mesmerizing
              aquatic views. Custom lighting, music, and more.
            </p>
          ) : (
            <>
              <p>
                💖 Step into an underwater dream where love blossoms like coral
                reefs! Our Love Proposal Event offers an unforgettable experience
                inside a beautifully themed aquarium venue.
              </p>
              <ul>
                <li>🌊 Surrounded by stunning aquatic life</li>
                <li>🎶 Soft romantic music and ambient lighting</li>
                <li>📷 Professional photographer at your service</li>
                <li>🍷 Candlelight dinner & personalized decorations</li>
                <li>🪑 Custom seating around the central aquarium tank</li>
              </ul>
              <p>
                Book your magical moment today and let your love story begin in
                the depths of beauty! 💫
              </p>
            </>
          )}

          <div className="button-group">
            <button className="action-button" onClick={toggleDetails}>
              {showFullDetails ? 'Show Less' : 'View Full Details'}
            </button>
            <button className="action-button book-now" onClick={handleBookNow}>
              Book Now
            </button>
          </div>
        </div>
      </div>

      <div className='unique-image-wrapper'>
        {images.map((src, idx) => (
          <img
            key={idx}
            src={src}
            alt='Aquarium Visual'
            className='unique-image image-fade'
          />
        ))}
      </div>
    </div>
  );
}

export default ProposalExperience;
