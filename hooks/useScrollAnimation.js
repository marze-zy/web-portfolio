import { useEffect, useRef } from 'react'

const OBSERVER_OPTIONS = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px',
}

/**
 * Hook to add scroll animations to elements using Intersection Observer
 * @returns {React.RefObject} Ref to attach to the element to animate
 */
export function useScrollAnimation() {
  const elementRef = useRef(null)

  useEffect(() => {
    if (!elementRef.current) return

    const element = elementRef.current

    // Set initial state
    element.style.opacity = '0'
    element.style.transform = 'translateY(20px)'
    element.style.transition = 'all 0.6s ease-out'

    // Create intersection observer
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = '1'
          entry.target.style.transform = 'translateY(0)'
          observer.unobserve(entry.target)
        }
      })
    }, OBSERVER_OPTIONS)

    observer.observe(element)

    return () => {
      if (element) {
        observer.unobserve(element)
      }
    }
  }, [])

  return elementRef
}
