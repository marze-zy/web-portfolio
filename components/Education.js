'use client'

import { useEffect, useRef } from 'react'

export default function Education() {
  const sectionRef = useRef(null)

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = '1'
          entry.target.style.transform = 'translateY(0)'
          observer.unobserve(entry.target)
        }
      })
    }, observerOptions)

    if (sectionRef.current) {
      sectionRef.current.style.opacity = '0'
      sectionRef.current.style.transform = 'translateY(20px)'
      sectionRef.current.style.transition = 'all 0.6s ease-out'
      observer.observe(sectionRef.current)
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current)
      }
    }
  }, [])

  return (
    <section id="education" className="section" ref={sectionRef}>
      <div className="container">
        <h2 className="section-title">Education & Certifications</h2>
        <div className="edu-item">
          <h3>BS in Computer Engineering</h3>
          <p className="school">Technological Institute of the Philippines (TIP)</p>
          <p className="year">Expected Graduation: 2026</p>
          <p>Specialized coursework in embedded systems, digital electronics, and hardware-software integration.</p>
        </div>
        <div className="edu-item">
          <h3>Technical Certifications</h3>
          <p className="school">Self-Study & Hands-On Projects</p>
          <p className="year">Ongoing</p>
          <p>Continuously learning through project-based experience and industry-standard tools.</p>
        </div>
      </div>
    </section>
  )
}
