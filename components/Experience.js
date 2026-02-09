'use client'

import { useScrollAnimation } from '@/hooks/useScrollAnimation'

const EXPERIENCE_ITEMS = [
  {
    id: 'exp-1',
    title: 'Frontend Developer Intern',
    company: 'Sakay-PH (Startup)',
    year: 'Jan 2025 – Present',
    description: 'Designing and developing web applications using React and TypeScript. Collaborating with cross-functional teams to implement user-friendly interfaces and optimize performance.',
  },
]

function ExperienceItem({ title, company, year, description }) {
  return (
    <div className="experience-item">
      <h3>{title}</h3>
      <p className="company">{company}</p>
      <p className="year">{year}</p>
      <p>{description}</p>
    </div>
  )
}

export default function Experience() {
  const sectionRef = useScrollAnimation()

  return (
    <section id="experience" className="section bg-alt" ref={sectionRef}>
      <div className="container">
        <h2 className="section-title">Work Experience</h2>
        {EXPERIENCE_ITEMS.map((item) => (
          <ExperienceItem
            key={item.id}
            title={item.title}
            company={item.company}
            year={item.year}
            description={item.description}
          />
        ))}
      </div>
    </section>
  )
}
