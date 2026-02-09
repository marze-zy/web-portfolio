'use client'

import { useCallback } from 'react'
import { useThemeToggle } from '@/hooks/useThemeToggle'

const NAV_LINKS = [
  { href: '#hero', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'Projects' },
  { href: '#education', label: 'Education' },
  { href: '#contact', label: 'Contact' },
]

export default function Navbar() {
  const { toggleTheme } = useThemeToggle()

  const handleThemeToggle = useCallback(() => {
    toggleTheme()
  }, [toggleTheme])

  return (
    <nav className="navbar">
      <div className="container">
        <span className="logo">AZM</span>
        <ul className="nav-links">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a href={link.href}>{link.label}</a>
            </li>
          ))}
        </ul>
        <button
          id="theme-toggle"
          onClick={handleThemeToggle}
          aria-label="Toggle Dark Mode"
          type="button"
        >
          <span className="icon-sun">☀️</span>
          <span className="icon-moon">🌙</span>
        </button>
      </div>
    </nav>
  )
}
