export default function Hero() {
  return (
    <header id="hero" className="hero">
      <div className="container">
        <h1 className="animated-name">Andrei Zyrish C. Manuel</h1>
        <p className="subtitle">
          Computer Engineering Student </p>
        <p>Embedded Systems & Hardware-Software Integration
        </p>
        <p className="bio">
          Focused on building practical, real-world solutions while strengthening core engineering and collaboration skills.
        </p>
        <div className="hero-btns">
          <a href="#projects" className="btn primary">
            View My Work
          </a>
          <a href="#contact" className="btn secondary">
            Get In Touch
          </a>
          <a href="/CV - ANDREI ZYRISH MANUEL.pdf" download="Andrei_Manuel_Resume.pdf" className="btn secondary">
            Download CV
          </a>
        </div>
      </div>
    </header>
  )
}
