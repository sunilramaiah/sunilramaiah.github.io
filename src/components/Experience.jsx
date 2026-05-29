const jobs = [
  {
    current: true,
    company: 'PayPal — San Jose, CA',
    title: 'Engineering Leader',
    date: 'Present',
    desc: 'Leading multiple engineering teams building scalable payments, promotions, and platform products serving hundreds of millions of customers globally. Hiring and growing top-tier talent across backend (Java/Spring), mobile (Android/iOS), and full-stack (Node.js) disciplines. Driving technical strategy, architectural decisions, and cross-functional alignment.',
    badges: [
      { label: 'Java / Spring' },
      { label: 'Node.js' },
      { label: 'Android' },
      { label: 'Payments' },
      { label: 'Hiring', green: true },
    ],
  },
  {
    company: 'Udemy — San Francisco, CA',
    title: 'Engineering Manager',
    date: '2022 – 2024',
    desc: 'Led the Subscriptions, Insights & Reporting, and Integrations teams spanning both B2B and Consumer product lines. Successfully delivered large, high-impact initiatives across the full stack while growing and mentoring a distributed engineering team. Navigated seamlessly between product strategy and deep technical execution.',
    badges: [
      { label: 'EdTech' },
      { label: 'B2B & Consumer' },
      { label: 'Subscriptions' },
      { label: 'Integrations' },
    ],
  },
  {
    company: 'Instacart — San Francisco, CA',
    title: 'Engineering Manager / Senior Software Engineer',
    date: '2020 – 2022',
    desc: 'Joined the Ads team as an IC engineer and quickly stepped into a management role as the team scaled from ~8 to 30+ engineers across multiple squads. Prototyped a Go-based ads auction server to migrate off Ruby on Rails, and drove rapid experimentation to grow the sponsored results product across more customer experiences.',
    badges: [
      { label: 'Go' },
      { label: 'Ruby on Rails' },
      { label: 'Ads & Monetization' },
      { label: 'Team Scaling' },
    ],
  },
  {
    company: 'Uber — San Francisco, CA',
    title: 'Senior Software Engineer',
    date: '2015 – 2020',
    desc: 'Contributed to core platform engineering at one of the world\'s fastest-growing technology companies. Worked on high-scale systems serving millions of rides daily, collaborating across teams to deliver reliable, performant software.',
    badges: [
      { label: 'Distributed Systems' },
      { label: 'Platform Engineering' },
      { label: 'High Scale' },
    ],
  },
  {
    company: 'Apple — Cupertino, CA',
    title: 'Senior Software Engineer — iAd',
    date: '2013 – 2015',
    desc: 'Engineered core features for iAd Workbench, Apple\'s digital advertising platform, enabling advertisers to design and deploy rich interactive ad campaigns across iOS.',
    badges: [
      { label: 'iOS' },
      { label: 'Advertising' },
      { label: 'Mobile SDK' },
    ],
  },
  {
    company: 'Intuit — Mountain View, CA',
    title: 'Senior Software Engineer',
    date: '2011 – 2013',
    desc: 'Built Intuit PaperTrail, an iOS app for receipt and mileage tracking for small business owners. Won the Intuit Tech Challenge (Mar 2012) — a company-wide engineering competition recognizing top innovation.',
    badges: [
      { label: 'iOS' },
      { label: 'FinTech' },
      { label: '🏆 Tech Challenge Winner', green: true },
    ],
  },
  {
    company: 'Qualcomm / MediaFLO — San Diego, CA',
    title: 'Software Engineer',
    date: '2004 – 2006',
    desc: 'Early career engineering role on MediaFLO, Qualcomm\'s mobile broadcast technology platform. Built software for next-generation wireless multimedia delivery systems.',
    badges: [
      { label: 'Embedded Systems' },
      { label: 'Mobile' },
      { label: 'Wireless' },
    ],
  },
]

export default function Experience() {
  return (
    <section id="experience">
      <div className="container">
        <div className="section-label">Career</div>
        <h2>Experience</h2>
        <div className="section-divider" />
        <div className="timeline">
          {jobs.map(job => (
            <div
              key={job.company}
              className={`timeline-item fade-in${job.current ? ' current' : ''}`}
            >
              <div className="timeline-dot" />
              <div className="timeline-card">
                <div className="timeline-header">
                  <div>
                    <div className="timeline-company">{job.company}</div>
                    <div className="timeline-title">{job.title}</div>
                  </div>
                  <div className="timeline-date">{job.date}</div>
                </div>
                <p className="timeline-desc">{job.desc}</p>
                <div className="badge-list">
                  {job.badges.map(b => (
                    <span key={b.label} className={`badge${b.green ? ' green' : ''}`}>
                      {b.label}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
