import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/logo.png'

function Navbar() {
  const navStyle = {
    position: 'fixed',
    top: '0',
    left: '0',
    width: '100%',
    zIndex: '1000',
    backdropFilter: 'blur(5px)',
    WebkitBackdropFilter: 'blur(5px)',
    padding: '10px 0'
  }

  const containerStyle = {
    backgroundColor: 'rgba(255, 255, 255, 0.85)',
    borderRadius: '12px',
    padding: '10px 20px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    maxWidth: '95%',
    margin: '0 auto',
    boxShadow: '0 4px 10px rgba(0,0,0,0.1)',
    flexWrap: 'wrap'
  }

  const logoStyle = {
    width: '50px',
    height: '50px',
    borderRadius: '60px'
  }

  const navLinksWrapperStyle = {
    display: 'flex',
    justifyContent: 'space-evenly',
    flex: 1,
    gap: '15px'
  }

  const linkStyle = {
    color: 'black',
    textDecoration: 'none',
    fontWeight: '500',
    fontSize: '16px',
    transition: 'color 0.3s ease'
  }

  const navPaths = {
    Home: '/home',
    About: '/about',
    Contact: '/contact',
    Gallery: '/gallery',
    Events: '/events',
    BookTickets: '/book-tickets'
  }

  return (
    <nav style={navStyle}>
      <div style={containerStyle}>
        <img src={logo} alt='Logo' style={logoStyle} />
        <div style={navLinksWrapperStyle}>
          {Object.entries(navPaths).map(([label, path], index) => (
            <Link
              key={index}
              to={path}
              style={linkStyle}
              onMouseOver={e => e.target.style.color = '#198754'}
              onMouseOut={e => e.target.style.color = 'black'}
            >
              {label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  )
}

export default Navbar
