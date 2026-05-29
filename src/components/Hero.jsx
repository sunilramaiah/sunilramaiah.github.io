export default function Hero() {
  return (
    <section id="hero">
      <div className="hero-bg" />
      <div className="hero-grid" />
      <div className="hero-content">
        <div className="hero-tag">Engineering Leader · Mentor · Golfer</div>
        <h1>Sunil Ramaiah</h1>
        <p className="hero-sub">
          20+ years building <strong>world-class technology</strong> at scale —
          currently leading engineering at <strong>PayPal</strong>.
        </p>
        <div className="hero-cta">
          <a href="#about" className="btn btn-primary">About Me</a>
          <a
            href="https://www.linkedin.com/in/sunilramaiah/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline"
          >
            LinkedIn ↗
          </a>
        </div>
      </div>
      <div className="scroll-indicator">
        <div className="scroll-line" />
        <span>Scroll</span>
      </div>
    </section>
  )
}
