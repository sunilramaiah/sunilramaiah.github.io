import { useState } from 'react'

export default function Nav() {
  const [open, setOpen] = useState(false)

  return (
    <nav id="navbar">
      <div className="nav-logo">SR</div>
      <ul className={`nav-links${open ? ' open' : ''}`}>
        {['about','experience','skills','recommendations','golf','contact'].map(id => (
          <li key={id}>
            <a href={`#${id}`} onClick={() => setOpen(false)}>
              {id.charAt(0).toUpperCase() + id.slice(1)}
            </a>
          </li>
        ))}
      </ul>
      <button
        className="hamburger"
        aria-label="Menu"
        onClick={() => setOpen(o => !o)}
      >
        <span /><span /><span />
      </button>
    </nav>
  )
}
