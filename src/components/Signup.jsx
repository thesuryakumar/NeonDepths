import React, { useState } from 'react'
import './Signup.css'
import bg from '../assets/bg.png'
import logo from '../assets/logo.png'
import { useNavigate, Link } from 'react-router-dom'

function Signup() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: ''
  })
  const [error, setError] = useState('')
  const navigate = useNavigate()

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value })
    setError('')
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match')
      return
    }

    // You can save to localStorage/backend here if needed
    navigate('/')
  }

  return (
    <div className="signup-container" style={{ backgroundImage: `url(${bg})` }}>
      <div className="signup-box">
        <div className="text-center mb-4">
          <img src={logo} alt="Logo" className="signup-logo" />
          <h2 className="signup-title">Neon Depths</h2>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="name" className="form-label text-white">Name</label>
            <input
              type="text"
              className="form-control custom-input"
              id="name"
              placeholder="Enter your name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-3">
            <label htmlFor="email" className="form-label text-white">Email</label>
            <input
              type="email"
              className="form-control custom-input"
              id="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-3">
            <label htmlFor="phone" className="form-label text-white">Phone Number</label>
            <input
              type="tel"
              className="form-control custom-input"
              id="phone"
              placeholder="Enter your phone number"
              value={formData.phone}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-3">
            <label htmlFor="password" className="form-label text-white">Password</label>
            <input
              type="password"
              className="form-control custom-input"
              id="password"
              placeholder="Enter password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-3">
            <label htmlFor="confirmPassword" className="form-label text-white">Confirm Password</label>
            <input
              type="password"
              className="form-control custom-input"
              id="confirmPassword"
              placeholder="Confirm password"
              value={formData.confirmPassword}
              onChange={handleChange}
              required
            />
          </div>

          {error && <p className="text-danger text-center">{error}</p>}

          <p className="text-white mt-3">
            Already have an account? <Link to="/" className="text-info">Login</Link>
          </p>

          <button type="submit" className="btn btn-signup w-100 fw-bold">
            Sign Up
          </button>
        </form>
      </div>
    </div>
  )
}

export default Signup
