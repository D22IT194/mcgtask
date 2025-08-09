// 1. Import statements
import React, { useState } from 'react'
import './App.css'
import logo from './assets/logo.png'
import background from './assets/Background.png'

// 2. Component definition
function App() {
  // 3. React Hooks
  const [formData, setFormData] = useState({
    email: '',
    fullName: '',
    password: ''
  })

  // 4. Event handlers and functions
  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
  }

  // 5. Return JSX
  return (
    <div className="signup-container">
      <div className="signup-card">
        {/* Left Panel - Branding */}
        <div className="branding-panel">
          <div className="logo">
            <img src={logo} alt="Better Market Logo" className="logo-image" />
          </div>
          <div className="tagline">
            Say hello to global food and beverage producers and suppliers, all in one place
          </div>
        </div>

        {/* Right Panel - Sign Up Form */}
        <div className="form-panel">
          <div className="form-container">
            <h2>Let's get started<br />with a few simple steps</h2>
            
            <form onSubmit={handleSubmit} className="signup-form">
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="fullName">FullName</label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleInputChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  required
                />
              </div>

              <button type="submit" className="signup-button">
                Sign up
              </button>
            </form>

            <div className="form-footer">
              <p>By signing up, you agree to our <a href="#" className="link1">Terms of Service</a>.</p>
              <p>Already have an account? <a href="#" className="link">Log in</a></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
