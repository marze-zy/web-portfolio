import { useCallback } from 'react'

/**
 * Hook to handle theme toggle functionality
 * @returns {Object} Object with toggleTheme function
 */
export function useThemeToggle() {
  const toggleTheme = useCallback(() => {
    const currentTheme = document.documentElement.getAttribute('data-theme')
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark'

    document.documentElement.setAttribute('data-theme', newTheme)
    localStorage.setItem('theme', newTheme)
  }, [])

  return { toggleTheme }
}
