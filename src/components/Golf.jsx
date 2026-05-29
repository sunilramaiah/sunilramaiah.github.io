const highlights = [
  {
    icon: '🥇',
    title: 'Ruby Hill Amateur — Champion',
    sub: 'US AM Tour · Hogan Flight · January 8, 2024',
  },
  {
    icon: '🏆',
    title: 'Multiple Tour Wins',
    sub: 'Active competitor on the US AM Tour circuit',
  },
  {
    icon: '🎯',
    title: 'Precision Under Pressure',
    sub: 'Every round is a lesson in focus and decision-making',
  },
  {
    icon: '📚',
    title: 'Teaching the Game',
    sub: 'Sharing fundamentals and love for golf with others',
  },
  {
    icon: '🌿',
    title: 'Continuous Improvement',
    sub: 'Always working on the next aspect of the game',
  },
]

export default function Golf() {
  return (
    <section id="golf">
      <div className="container">
        <div className="section-label">On the Course</div>
        <h2>Golf</h2>
        <div className="section-divider" />
        <div className="golf-layout fade-in">
          <div>
            <p className="golf-intro">
              Golf is more than a hobby for me — it's a pursuit of mastery that mirrors everything
              I love about engineering. Both reward patience, deliberate practice, and the humility
              to keep learning.
            </p>
            <p className="golf-intro">
              I compete in US AM Tour amateur tournaments across the country and have won
              multiple times on tour. Teaching golf gives me the same joy as mentoring
              engineers — watching someone click with a concept and improve is deeply rewarding.
            </p>
            <a
              href="https://usamtour.bluegolf.com/bluegolf/usamtour22/profile/sramaiah1/tresults.htm"
              target="_blank"
              rel="noopener noreferrer"
              className="tournament-link"
            >
              View Tournament Results →
            </a>
          </div>
          <div className="golf-card">
            <div className="golf-card-title">⛳ What Golf Means to Me</div>
            {highlights.map(h => (
              <div className="golf-highlight" key={h.title}>
                <div className="golf-highlight-icon">{h.icon}</div>
                <div className="golf-highlight-text">
                  <strong>{h.title}</strong>
                  <span>{h.sub}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
