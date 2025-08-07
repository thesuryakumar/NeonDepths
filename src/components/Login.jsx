import React, { useState } from 'react'
import './Login.css'
import bg from '../assets/bg.png'
import logo from '../assets/logo.png'
import { Link, useNavigate } from 'react-router-dom'

function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    if (email === 'surya@gmail.com' && password === 'surya@1') {
      navigate('/home') // you can update this to navigate somewhere else
    } else {
      setError('Invalid credentials')
    }
  }

  return (
    <div className="login-container" style={{ backgroundImage: `url(${bg})` }}>
      <div className="login-box">
        <div className="text-center mb-4">
          <img src={logo} alt="App Logo" className="login-logo" />
        </div>

        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label text-white">Email</label>
            <input
              type="email"
              className="form-control login-input"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label text-white">Password</label>
            <input
              type="password"
              className="form-control login-input"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          {error && <p className="text-danger text-center">{error}</p>}

          <p className="text-white mt-3 text-center">
            Don't have an account?{' '}
            <Link to="/signup" className="text-info">Sign up</Link>
          </p>

          <button type="submit" className="btn login-btn w-100 fw-bold">
            Login
          </button>
        </form>
      </div>
    </div>
  )
}

export default Login
