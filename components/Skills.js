'use client'

import { useEffect, useRef } from 'react'

export default function Skills() {
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
    <section id="skills" className="section" ref={sectionRef}>
      <div className="container">
        <h2 className="section-title">Technical Expertise</h2>
        <div className="skills-grid">
          <div className="skill-category">
            <h3>Core Skills</h3>
            <ul>
              <li>Embedded Systems</li>
              <li>3D Modeling (CAD)</li>
              <li>Java & Python (Foundational)</li>
              <li>Git / GitHub</li>
            </ul>
          </div>
          <div className="skill-category">
            <h3>Tools & Software</h3>
            <ul>
              <li>KiCad & EasyEDA</li>
              <li>Onshape & AutoCAD</li>
              <li>VS Code & IntelliJ</li>
            </ul>
          </div>
          <div className="skill-category">
            <h3>Soft Skills</h3>
            <ul>
              <li>Problem Solving</li>
              <li>Team Collaboration</li>
              <li>Continuous Learning</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
