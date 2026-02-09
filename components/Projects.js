'use client'

import { useEffect, useRef } from 'react'

export default function Projects() {
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
    <section id="projects" className="section bg-alt" ref={sectionRef}>
      <div className="container">
        <h2 className="section-title">Featured Project</h2>
        <div className="project-card">
          <div className="project-content">
            <h3>AlphaBot</h3>
            <p className="role"><strong>Role:</strong> Hardware & Embedded Systems Designer</p>
            <p className="date">Aug 2024 – Nov 2025</p>
            <ul className="project-details">
              <li>Developed system UI for seamless software interaction and monitoring.</li>
              <li>Engineered full hardware systems: CAD modeling, 3D printing, wiring, and component integration.</li>
              <li>Integrated controllers and actuators using embedded systems fundamentals.</li>
            </ul>
            <div className="tech-tags">
              <span>CAD Modeling</span>
              <span>3D Printing</span>
              <span>Embedded Systems</span>
              <span>UI Design</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
