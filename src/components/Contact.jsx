import { useState } from 'react'

export default function Contact() {
  const [sent, setSent] = useState(false)
  const [form, setForm] = useState({ name: '', email: '', message: '' })

  function handleChange(e) {
    setForm(f => ({ ...f, [e.target.name]: e.target.value }))
  }

  function handleSubmit(e) {
    e.preventDefault()
    const subject = encodeURIComponent(`Message from ${form.name}`)
    const body = encodeURIComponent(`From: ${form.name}\nEmail: ${form.email}\n\n${form.message}`)
    window.location.href = `mailto:sunilramaiah@gmail.com?subject=${subject}&body=${body}`
    setSent(true)
    setForm({ name: '', email: '', message: '' })
  }

  return (
    <section id="contact">
      <div className="container">
        <div className="section-label">Get in Touch</div>
        <h2>Contact</h2>
        <div className="section-divider" />
        <div className="contact-grid fade-in">
          <div>
            <p className="contact-intro">
              Whether you're interested in engineering roles at PayPal, want to talk shop about
              technology leadership, or are looking for a golf partner — I'd love to hear from you.
            </p>
            <div className="contact-links">
              <a
                href="https://www.linkedin.com/in/sunilramaiah/"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-link"
              >
                <div className="contact-link-icon li">💼</div>
                <div className="contact-link-text">
                  <strong>LinkedIn</strong>
                  <span>linkedin.com/in/sunilramaiah</span>
                </div>
              </a>
              <a href="mailto:sunilramaiah@gmail.com" className="contact-link">
                <div className="contact-link-icon email">✉️</div>
                <div className="contact-link-text">
                  <strong>Email</strong>
                  <span>sunilramaiah@gmail.com</span>
                </div>
              </a>
              <a
                href="https://usamtour.bluegolf.com/bluegolf/usamtour22/profile/sramaiah1/tresults.htm"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-link"
              >
                <div className="contact-link-icon golf">⛳</div>
                <div className="contact-link-text">
                  <strong>Golf Profile</strong>
                  <span>US AM Tour — Tournament Results</span>
                </div>
              </a>
            </div>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Your name"
                value={form.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="your@email.com"
                value={form.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                placeholder="Say hello..."
                value={form.message}
                onChange={handleChange}
                required
              />
            </div>
            <button type="submit" className="btn btn-primary">Send Message</button>
            {sent && (
              <div className="form-status">
                Thanks for reaching out! I'll get back to you soon.
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  )
}
