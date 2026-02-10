'use client'

import { useScrollAnimation } from '@/hooks/useScrollAnimation'

const PROJECT_DATA = {
  title: 'AlphaBot',
  role: 'Hardware & Embedded Systems Designer | UI Designer',
  date: 'Aug 2024 – Nov 2025',
  details: [
    'Developed system UI for seamless software interaction and monitoring.',
    'Engineered full hardware systems: CAD modeling, 3D printing, wiring, and component integration.',
    'Integrated controllers and actuators using embedded systems fundamentals.',
  ],
  technologies: [
    'CAD Modeling',
    '3D Printing',
    'Embedded Systems',
    'UI Design',
  ],
}

export default function Projects() {
  const sectionRef = useScrollAnimation()

  return (
    <section id="projects" className="section bg-alt" ref={sectionRef}>
      <div className="container">
        <h2 className="section-title">Featured Project</h2>
        <div className="project-card">
          <div className="project-content">
            <h3>{PROJECT_DATA.title}</h3>
            <p className="role">
              <strong>Role:</strong> {PROJECT_DATA.role}
            </p>
            <p className="date">{PROJECT_DATA.date}</p>
            <ul className="project-details">
              {PROJECT_DATA.details.map((detail, index) => (
                <li key={index}>{detail}</li>
              ))}
            </ul>
            <div className="tech-tags">
              {PROJECT_DATA.technologies.map((tech) => (
                <span key={tech}>{tech}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
