const groups = [
  {
    icon: '🏗️',
    title: 'Engineering Leadership',
    tags: ['Team Building', 'Technical Strategy', 'Hiring & Mentoring', 'Roadmapping', 'Cross-functional Alignment', 'OKRs'],
  },
  {
    icon: '⚙️',
    title: 'Backend Engineering',
    tags: ['Java', 'Spring Boot', 'Node.js', 'Microservices', 'REST APIs', 'Distributed Systems'],
  },
  {
    icon: '📱',
    title: 'Mobile & Frontend',
    tags: ['Android', 'iOS', 'React', 'Full-Stack', 'Mobile SDK'],
  },
  {
    icon: '☁️',
    title: 'Platform & Infrastructure',
    tags: ['Cloud Architecture', 'Payments', 'Promotions Platform', 'Scalability', 'DevOps', 'CI/CD'],
  },
  {
    icon: '🧠',
    title: 'Product & Strategy',
    tags: ['Product Sense', 'Stakeholder Management', 'Go-to-Market', 'Data-Driven Decisions', 'Startup Experience'],
  },
  {
    icon: '🎓',
    title: 'Teaching & Coaching',
    tags: ['Mentorship', 'Engineering Coaching', 'Golf Instruction', 'Public Speaking', 'Knowledge Sharing'],
  },
]

export default function Skills() {
  return (
    <section id="skills">
      <div className="container">
        <div className="section-label">What I Know</div>
        <h2>Skills</h2>
        <div className="section-divider" />
        <div className="skills-grid">
          {groups.map(g => (
            <div className="skill-group fade-in" key={g.title}>
              <div className="skill-group-icon">{g.icon}</div>
              <div className="skill-group-title">{g.title}</div>
              <div className="skill-tags">
                {g.tags.map(t => (
                  <span className="skill-tag" key={t}>{t}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
