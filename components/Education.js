'use client'

import { useScrollAnimation } from '@/hooks/useScrollAnimation'

const EDUCATION_ITEMS = [
  {
    id: 'degree',
    title: 'BS in Computer Engineering',
    school: 'STI College - Caloocan',
    year: 'Expected Graduation: 2026',
    description: 'Specialized coursework in embedded systems, digital electronics, and hardware-software integration.',
  },
  {
    id: 'certifications',
    title: 'TESDA NCIII in Java Programming',
    school: 'Technical Education and Skills Development Authority (TESDA)',
    year: '2024',
    description: 'Learned Java programming fundamentals, object-oriented programming, and software development best practices through a comprehensive training program.',
  },
]

function EducationItem({ title, school, year, description }) {
  return (
    <div className="edu-item">
      <h3>{title}</h3>
      <p className="school">{school}</p>
      <p className="year">{year}</p>
      <p>{description}</p>
    </div>
  )
}

export default function Education() {
  const sectionRef = useScrollAnimation()

  return (
    <section id="education" className="section" ref={sectionRef}>
      <div className="container">
        <h2 className="section-title">Education & Certifications</h2>
        {EDUCATION_ITEMS.map((item) => (
          <EducationItem
            key={item.id}
            title={item.title}
            school={item.school}
            year={item.year}
            description={item.description}
          />
        ))}
      </div>
    </section>
  )
}
