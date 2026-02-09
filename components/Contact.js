'use client'

import { useScrollAnimation } from '@/hooks/useScrollAnimation'

const CONTACT_LINKS = [
  {
    label: 'Email',
    href: 'mailto:anzymanuel@gmail.com',
    external: false,
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/zyrish-manuel/',
    external: true,
  },
  {
    label: 'GitHub',
    href: 'https://github.com/marze-zy',
    external: true,
  },
]

function ContactLink({ label, href, external }) {
  return (
    <a
      href={href}
      target={external ? '_blank' : undefined}
      rel={external ? 'noopener noreferrer' : undefined}
    >
      {label}
    </a>
  )
}

export default function Contact() {
  const sectionRef = useScrollAnimation()

  return (
    <section id="contact" className="section bg-alt" ref={sectionRef}>
      <div className="container">
        <h2 className="section-title">Get In Touch</h2>
        <div className="contact-content">
          <p>
            I'm always open to new opportunities and collaborations. Feel free to reach out!
          </p>
          <div className="contact-links">
            {CONTACT_LINKS.map((link) => (
              <ContactLink
                key={link.label}
                label={link.label}
                href={link.href}
                external={link.external}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
