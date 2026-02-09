'use client'

import { useEffect } from 'react'

export default function Navbar() {
  useEffect(() => {
    const themeToggle = document.getElementById('theme-toggle')
    const currentTheme = localStorage.getItem('theme')

    // Initialize theme
    function initializeTheme() {
      if (currentTheme) {
        document.documentElement.setAttribute('data-theme', currentTheme)
      } else {
        if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
          document.documentElement.setAttribute('data-theme', 'dark')
        }
      }
    }

    // Toggle theme
    function toggleTheme() {
      const theme = document.documentElement.getAttribute('data-theme')
      const newTheme = theme === 'dark' ? 'light' : 'dark'
      document.documentElement.setAttribute('data-theme', newTheme)
      localStorage.setItem('theme', newTheme)
    }

    initializeTheme()

    if (themeToggle) {
      themeToggle.addEventListener('click', toggleTheme)
    }

    return () => {
      if (themeToggle) {
        themeToggle.removeEventListener('click', toggleTheme)
      }
    }
  }, [])

  return (
    <nav className="navbar">
      <div className="container">
        <span className="logo">AZM</span>
        <ul className="nav-links">
          <li><a href="#hero">About</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#education">Education</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
        <button id="theme-toggle" aria-label="Toggle Dark Mode">
          <span className="icon-sun">☀️</span>
          <span className="icon-moon">🌙</span>
        </button>
      </div>
    </nav>
  )
}
