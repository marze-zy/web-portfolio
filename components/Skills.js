'use client'

import { useScrollAnimation } from '@/hooks/useScrollAnimation'

const SKILL_CATEGORIES = [
  {
    title: 'Core Skills',
    skills: [
      'Frontend Development ( Next.js, HTML, CSS)',
      'Backend Development (Java, Python)',
      'UI/UX Design',
      'Embedded Systems',
      '3D Modeling (CAD)',
      'Git / GitHub',
    ],
  },
  {
    title: 'Tools',
    skills: [
      'KiCad & EasyEDA',
      'Onshape',
      'Visual Studio & Visual Studio Code',
      'IntelliJ'
    ],
  },
  {
    title: 'Soft Skills',
    skills: [
      'Systems Thinking',
      'Cross-Functional Collaboration',
      'Continuous Learning',
    ],
  },
  {
    title: 'Prototyping Stack',
    skills: [
      'Bambu Lab A1 mini 3D Printer',
      'Asus TUF Gaming A15 Laptop',
      'Raspberry Pi 5',
    ],
  },
]

function SkillCategory({ title, skills }) {
  return (
    <div className="skill-category">
      <h3>{title}</h3>
      <ul>
        {skills.map((skill) => (
          <li key={skill}>{skill}</li>
        ))}
      </ul>
    </div>
  )
}

export default function Skills() {
  const sectionRef = useScrollAnimation()

  return (
    <section id="skills" className="section" ref={sectionRef}>
      <div className="container">
        <h2 className="section-title">Technical Expertise</h2>
        <div className="skills-grid">
          {SKILL_CATEGORIES.map((category) => (
            <SkillCategory
              key={category.title}
              title={category.title}
              skills={category.skills}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
