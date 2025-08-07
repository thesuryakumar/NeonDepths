import React from 'react'
import { Link } from 'react-router-dom'
import './Footer.css'
import logo from '../assets/logo.png'
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa'
import { FaWhatsapp, FaInstagram, FaSnapchatGhost } from 'react-icons/fa'

function Footer() {
  const locationLinkStyle = {
    color: 'inherit',
    textDecoration: 'none',
    cursor: 'pointer',
    transition: 'color 0.3s ease, textDecoration 0.3s ease',
  }

  // For hover effect with inline styles, use React state
  const [isHovered, setIsHovered] = React.useState(false)

  return (
    <footer className="footer">
      <div className="footer-container">

        {/* Logo & Social Icons Center */}
        <div className="footer-logo-contact">
          <img src={logo} alt="Aquarium Paradise Logo" className="footer-logo" />
          <div className="social-icons">
            <a href="https://wa.me/" target="_blank" rel="noopener noreferrer"><FaWhatsapp /></a>
            <a href="https://www.instagram.com/thesuryakumar?igsh=bnMxNXltcnkzOTBn" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
            <a href="https://www.snapchat.com/add/thesuryakumar?share_id=epnq4hH3vH8&locale=en-US" target="_blank" rel="noopener noreferrer"><FaSnapchatGhost /></a>
          </div>
        </div>
        
        {/* Contact Details Left */}
        <div className="contact-details">
          <p><FaPhoneAlt /> +91-94493</p>
          <p><FaEnvelope /> thesuryakumar01@gmail.com</p>
          <p>
            <FaMapMarkerAlt />{' '}
            <a
              href="https://www.google.com/maps/place/%E0%B2%B5%E0%B2%BF%E0%B2%9C%E0%B2%AF%E0%B2%A8%E0%B2%97%E0%B2%B0,+%E0%B2%AC%E0%B3%86%E0%B2%82%E0%B2%97%E0%B2%B3%E0%B3%82%E0%B2%B0%E0%B3%81,+%E0%B2%95%E0%B2%B0%E0%B3%8D%E0%B2%A8%E0%B2%BE%E0%B2%9F%E0%B2%95/@12.9814736,77.5232078,17z/data=!4m6!3m5!1s0x3bae3dd95efc3ae7:0xc90db791aedd9aad!8m2!3d12.975596!4d77.5353881!16s%2Fm%2F02613d8?entry=ttu&g_ep=EgoyMDI1MDgwNC4wIKXMDSoASAFQAw%3D%3D"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                ...locationLinkStyle,
                color: isHovered ? '#198754' : 'inherit',
                textDecoration: isHovered ? 'underline' : 'none'
              }}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              Bengaluru-560079
            </a>
          </p>
        </div>

        {/* Footer Navigation Right */}
        <div className="footer-links">
          <div className="footer-column">
            <h4>Info</h4>
            <ul>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/contact">Contact Us</Link></li>
              <li><Link to="/gallery">Gallery</Link></li>
              <li><Link to="/events">Events</Link></li>
              <li>Location</li>
              <li>FAQs</li>
            </ul>
          </div>
          <div className="footer-column">
            <h4>Links</h4>
            <ul>
              <li><Link to="/book-tickets">Booking</Link></li>
              <li>School Package</li>
              <li>Fish Explorer</li>
              <li>Offers</li>
              <li>May I Help You</li>
            </ul>
          </div>
          <div className="footer-column">
            <h4>Legal</h4>
            <ul>
              <li>Terms & Conditions</li>
              <li>Privacy Policy</li>
            </ul>
          </div>
        </div>

      </div>

      {/* Footer Bottom */}
      <div className="footer-bottom">
        © 2025 Neon Depths All rights reserved
      </div>
    </footer>
  )
}

export default Footer
