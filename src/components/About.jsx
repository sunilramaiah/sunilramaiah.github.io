export default function About() {
  return (
    <section id="about">
      <div className="container">
        <div className="section-label">Who I Am</div>
        <h2>About Me</h2>
        <div className="section-divider" />
        <div className="about-grid fade-in">
          <div className="about-photo-wrap">
            <img src="photo.jpg" alt="Sunil Ramaiah" className="about-photo" />
          </div>
          <div className="about-text">
            <p>
              I'm a <strong>technology executive and engineering leader</strong> based in
              Morgan Hill, California, with over two decades of experience building and
              scaling products that millions of people use every day.
            </p>
            <p>
              At <strong>PayPal</strong>, I lead high-performing engineering teams across
              backend, mobile, and full-stack disciplines — driving innovation in payments,
              promotions, and platform infrastructure. I'm passionate about cultivating
              talent, shipping impactful products, and building cultures where great
              engineers can do their best work.
            </p>
            <p>
              Outside of tech, I'm an avid <strong>golfer and teacher</strong>. I believe
              golf — like engineering — rewards patience, precision, and a commitment to
              continuous improvement. I compete in amateur tournaments and love helping
              others find their love for the game.
            </p>
          </div>
          <div className="about-stats">
            {[
              { num: '20+', label: 'Years of Experience' },
              { num: '500+', label: 'LinkedIn Connections' },
              { num: '4K+', label: 'LinkedIn Followers' },
              { num: '⛳', label: 'Passionate Golfer' },
            ].map(({ num, label }) => (
              <div className="stat-card" key={label}>
                <div className="stat-num">{num}</div>
                <div className="stat-label">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
