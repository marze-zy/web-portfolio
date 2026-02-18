'use client'

import { useScrollAnimation } from '@/hooks/useScrollAnimation'
import { TrophyIcon } from './Icons'

const PROJECTS_DATA = [
  {
    title: 'AlphaBot',
    role: 'Hardware Engineer | UI Designer',
    date: 'Aug 2024 – Nov 2025',
    award: 'Symposium Candidate for Best Capstone',
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
  },
  {
    title: 'Sakay PH',
    role: 'UI/UX Designer',
    date: '2026',
    details: [
      'Designed the complete user interface and layout for the Sakay PH web application.',
      'Created intuitive and user-friendly design patterns for transportation information.',
      'Focused on accessibility and responsive design principles.',
    ],
    technologies: ['UI/UX Design', 'Web Design', 'Responsive Layout'],
    link: 'https://www.sakay-ph.net/',
    image: '/images/sakay.png',
  },

]

export default function Projects() {
  const sectionRef = useScrollAnimation()

  return (
    <section id="projects" className="section bg-alt" ref={sectionRef}>
      <div className="container">
        <h2 className="section-title">Featured Projects</h2>
        <div className="projects-container">
          {PROJECTS_DATA.map((project, index) => (
            <div key={index} className="project-card">
              {project.image && (
                <div className="project-image-container">
                  <img src={project.image} alt={`${project.title} preview`} className="project-corner-image" />
                </div>
              )}
              <div className="project-content">
                <h3>
                  {project.link ? (
                    <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-link">
                      {project.title} ↗
                    </a>
                  ) : (
                    project.title
                  )}
                  {project.award && (
                    <TrophyIcon className="trophy-icon" />
                  )}
                </h3>
                {project.award && (
                  <div className="award-badge">
                    <span>{project.award}</span>
                  </div>
                )}
                <p className="role">
                  <strong>Role:</strong> {project.role}
                </p>
                <p className="date">{project.date}</p>
                <ul className="project-details">
                  {project.details.map((detail, idx) => (
                    <li key={idx}>{detail}</li>
                  ))}
                </ul>
                <div className="tech-tags">
                  {project.technologies.map((tech) => (
                    <span key={tech}>{tech}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
