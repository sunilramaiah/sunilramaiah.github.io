const themes = [
  { icon: '🚀', label: 'Bias for Action' },
  { icon: '🧭', label: 'Strong Product Sense' },
  { icon: '🤝', label: 'Mentor & Coach' },
  { icon: '⚙️', label: 'Hands-On Leader' },
  { icon: '🗣️', label: 'Excellent Communicator' },
]

const recs = [
  {
    initials: 'MA',
    quote: "Sunil has an incredible ability to keep projects moving forward without adding extra burden to the team. Whether it's unblocking challenges or coordinating with cross-functional teams, he handles it all smoothly. Sunil's strong product sense ensures decisions are thoughtful and impactful. He also strikes a perfect balance between leadership and hands-on involvement, diving into technical details when necessary. As a mentor, he's approachable and always open for candid discussions, whether it's about work or personal growth.",
    name: 'Mert Akozcan',
    title: 'Senior Software Engineer, Roblox',
    rel: 'Reported to Sunil at Udemy · Jan 2025',
  },
  {
    initials: 'MP',
    quote: 'Sunil is a seasoned engineering lead with outstanding people management and technical skills. He navigates different levels of abstraction with ease — from overall product and business strategy down to code. During his career he worked in all sizes of companies, from startups to large enterprises, which makes him highly adaptable. At Udemy, he successfully led large and important areas across B2B and Consumer. Sunil is an excellent communicator with both technical and non-technical audiences, with a relentless focus on outcomes.',
    name: 'Milorad Pop-Tošić',
    title: 'Director of Engineering, Udemy',
    rel: 'Managed Sunil directly · Dec 2024',
  },
  {
    initials: 'WL',
    quote: 'Sunil showed a strong bias for shipping code and building effective teams. As an IC he showed strong initiative and a bias for action, regularly providing quick solutions to urgent problems. He quickly prototyped a Go ads server to investigate moving from Ruby on Rails for running ads auctions. As the Ads team grew from one team of ~8 ICs to several teams and ~30 ICs, Sunil stepped up as a manager and learned quickly — aligning his team\'s projects with company goals and ensuring a delivery pace that met business needs for rapid experimentation.',
    name: 'William Lundberg',
    title: 'Staff Software Engineer, Instacart',
    rel: 'Worked with Sunil on the Ads team · Dec 2024',
  },
  {
    initials: 'CR',
    quote: 'A rare combination of deep technical expertise and genuine leadership instinct. Sunil brings clarity to complex problems, earns trust across levels of the organization, and consistently raises the bar for the teams around him.',
    name: 'Chandra Rentachintala',
    title: 'VP of Engineering · AI & Security',
    rel: 'Worked with Sunil · Jul 2017',
  },
]

export default function Recommendations() {
  return (
    <section id="recommendations">
      <div className="container">
        <div className="section-label">What Others Say</div>
        <h2>Recommendations</h2>
        <div className="section-divider" />

        <div className="rec-themes fade-in">
          {themes.map(t => (
            <div className="rec-theme" key={t.label}>
              <div className="rec-theme-icon">{t.icon}</div>
              <div className="rec-theme-label">{t.label}</div>
            </div>
          ))}
        </div>

        <div className="rec-cards">
          {recs.map(r => (
            <div className="rec-card fade-in" key={r.name}>
              <p className="rec-quote">{r.quote}</p>
              <div className="rec-author">
                <div className="rec-avatar">{r.initials}</div>
                <div>
                  <div className="rec-author-name">{r.name}</div>
                  <div className="rec-author-title">{r.title}</div>
                  <div className="rec-relationship">{r.rel}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div style={{ textAlign: 'center', marginTop: '2.5rem' }}>
          <a
            href="https://www.linkedin.com/in/sunilramaiah/details/recommendations/"
            target="_blank"
            rel="noopener noreferrer"
            className="tournament-link"
          >
            View all recommendations on LinkedIn →
          </a>
        </div>
      </div>
    </section>
  )
}
