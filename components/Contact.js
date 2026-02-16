'use client'

import { useScrollAnimation } from '@/hooks/useScrollAnimation'
import { EmailIcon, LinkedInIcon, GitHubIcon, DownloadIcon } from './Icons'

const CONTACT_LINKS = [
  {
    label: 'Email',
    icon: EmailIcon,
    href: 'mailto:anzymanuel@gmail.com',
    external: false,
  },
  {
    label: 'LinkedIn',
    icon: LinkedInIcon,
    href: 'https://www.linkedin.com/in/zyrish-manuel/',
    external: true,
  },
  {
    label: 'GitHub',
    icon: GitHubIcon,
    href: 'https://github.com/marze-zy',
    external: true,
  },
]

function ContactLink({ label, icon: Icon, href, external }) {
  return (
    <a
      href={href}
      target={external ? '_blank' : undefined}
      rel={external ? 'noopener noreferrer' : undefined}
      className="contact-icon-link"
      aria-label={label}
      title={label}
    >
      <Icon className="contact-icon" />
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
                icon={link.icon}
                href={link.href}
                external={link.external}
              />
            ))}
          </div>
          <a
            href="/CV - ANDREI ZYRISH MANUEL.pdf"
            download="CV - ANDREI ZYRISH MANUEL.pdf"
            className="download-resume-btn"
          >
            <DownloadIcon className="download-icon" />
            Download Resume
          </a>
        </div>
      </div>
    </section>
  )
}
