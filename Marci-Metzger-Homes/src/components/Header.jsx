import { useState } from 'react'
import merciLogo from '../assets/merci-logo.png'
import './styles/Header.css'

export function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="header">
      <div className="logo-container">
        <img src={merciLogo} alt="" />
      </div>

      <button
        className={`menu-toggle ${isOpen ? 'open' : ''}`}
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle menu"
        aria-expanded={isOpen}
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      <div className={`links-container ${isOpen ? 'open' : ''}`}>
        <a href="" onClick={() => setIsOpen(false)}>Home</a>
        <a href="" onClick={() => setIsOpen(false)}>Listings</a>
        <a href="" onClick={() => setIsOpen(false)}>Let's Move</a>
        <a href="" onClick={() => setIsOpen(false)}>About Us</a>
      </div>
    </div>
  )
}