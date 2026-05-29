import { useEffect } from 'react'
import Nav from './components/Nav'
import Hero from './components/Hero'
import About from './components/About'
import Experience from './components/Experience'
import Skills from './components/Skills'
import Recommendations from './components/Recommendations'
import Golf from './components/Golf'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add('visible')
          observer.unobserve(e.target)
        }
      }),
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    )
    document.querySelectorAll('.fade-in').forEach(el => observer.observe(el))

    const handleScroll = () => {
      const navbar = document.getElementById('navbar')
      if (navbar) {
        navbar.style.background = window.scrollY > 40
          ? 'rgba(13,17,23,0.97)'
          : 'rgba(13,17,23,0.85)'
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      <Nav />
      <Hero />
      <About />
      <Experience />
      <Skills />
      <Recommendations />
      <Golf />
      <Contact />
      <Footer />
    </>
  )
}
