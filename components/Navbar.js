'use client'

import { useState, useCallback, useEffect } from 'react'
import { useThemeToggle } from '@/hooks/useThemeToggle'

const NAV_LINKS = [
  { href: '#hero', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'Projects' },
  { href: '#education', label: 'Education' },
  { href: '#experience', label: 'Experience' },
  { href: '#contact', label: 'Contact' },
]

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const { toggleTheme } = useThemeToggle()

  const handleThemeToggle = useCallback(() => {
    toggleTheme()
  }, [toggleTheme])

  const handleMenuToggle = useCallback(() => {
    setMobileMenuOpen((prev) => !prev)
  }, [])

  const handleNavLinkClick = useCallback(() => {
    setMobileMenuOpen(false)
  }, [])

  const handleBackdropClick = useCallback((e) => {
    if (e.target === e.currentTarget) {
      setMobileMenuOpen(false)
    }
  }, [])

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }

    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [mobileMenuOpen])

  return (
    <nav className="navbar">
      <div className="container">
        <span className="logo">AZM</span>

        {/* Desktop Navigation */}
        <ul className="nav-links">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a href={link.href}>{link.label}</a>
            </li>
          ))}
        </ul>

        {/* Theme Toggle and Hamburger */}
        <div className="nav-controls">
          <button
            id="theme-toggle"
            onClick={handleThemeToggle}
            aria-label="Toggle Dark Mode"
            type="button"
          >
            <span className="icon-sun">☀️</span>
            <span className="icon-moon">🌙</span>
          </button>

          {/* Hamburger Button */}
          <button
            className="hamburger"
            onClick={handleMenuToggle}
            aria-label="Toggle Mobile Menu"
            type="button"
            aria-expanded={mobileMenuOpen}
          >
            <span className="hamburger-line"></span>
            <span className="hamburger-line"></span>
            <span className="hamburger-line"></span>
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {mobileMenuOpen && (
        <div className="mobile-menu active" onClick={handleBackdropClick}>
          <ul className="mobile-nav-links">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a href={link.href} onClick={handleNavLinkClick}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  )
}
