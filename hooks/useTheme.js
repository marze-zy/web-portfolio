import { useEffect } from 'react'

/**
 * Hook to initialize theme from localStorage or system preference
 */
export function useTheme() {
  useEffect(() => {
    const initializeTheme = () => {
      const savedTheme = localStorage.getItem('theme')

      if (savedTheme) {
        document.documentElement.setAttribute('data-theme', savedTheme)
      } else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
        document.documentElement.setAttribute('data-theme', 'dark')
      } else {
        document.documentElement.setAttribute('data-theme', 'light')
      }
    }

    // Initialize on mount
    initializeTheme()

    // Listen for system preference changes
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
    const handleChange = () => {
      if (!localStorage.getItem('theme')) {
        initializeTheme()
      }
    }

    mediaQuery.addEventListener('change', handleChange)
    return () => mediaQuery.removeEventListener('change', handleChange)
  }, [])
}
