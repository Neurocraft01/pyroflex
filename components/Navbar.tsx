'use client'
import { useState, useEffect } from 'react'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      <nav style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        padding: '0 2.5rem',
        height: '72px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        background: scrolled ? 'rgba(13,13,13,0.95)' : 'transparent',
        backdropFilter: scrolled ? 'blur(12px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(255,34,0,0.15)' : '1px solid transparent',
        transition: 'all 0.4s ease',
      }}>
        {/* Logo */}
        <div style={{ display: 'flex', alignItems: 'center', transition: 'transform 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)' }}
             onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.05)'}
             onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}>
          <a href="#" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center' }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/logo.png" alt="Pyroflex Logo" style={{ height: '48px', width: 'auto', objectFit: 'contain' }} />
          </a>
        </div>

        {/* Desktop nav */}
        <div style={{ display: 'flex', gap: '2.5rem', alignItems: 'center' }} className="desktop-nav">
          {['PROGRAMS', 'COACHES', 'CALENDAR', 'PRICING'].map(item => (
            <a key={item} href={item === 'CALENDAR' ? '/calendar' : `/#${item.toLowerCase()}`} style={{
              fontFamily: 'var(--font-body)',
              fontSize: '0.7rem',
              fontWeight: 600,
              letterSpacing: '0.18em',
              color: 'rgba(245,240,235,0.6)',
              textDecoration: 'none',
              transition: 'color 0.2s',
            }}
              onMouseEnter={e => (e.currentTarget.style.color = 'var(--pyro-red)')}
              onMouseLeave={e => (e.currentTarget.style.color = 'rgba(245,240,235,0.6)')}
            >{item}</a>
          ))}
          <a href="#pricing" style={{
            fontFamily: 'var(--font-display)',
            fontWeight: 800,
            fontSize: '0.95rem',
            letterSpacing: '0.12em',
            color: 'var(--volcanic-black)',
            background: 'var(--pyro-red)',
            padding: '0.55rem 1.4rem',
            textDecoration: 'none',
            clipPath: 'polygon(8px 0%, 100% 0%, calc(100% - 8px) 100%, 0% 100%)',
            transition: 'background 0.4s ease, transform 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275), box-shadow 0.4s ease',
            animation: 'glow-pulse 2.5s ease-in-out infinite',
            display: 'inline-block',
          }}
            onMouseEnter={e => { e.currentTarget.style.background = 'var(--ember-orange)'; e.currentTarget.style.transform = 'scale(1.08)'; e.currentTarget.style.boxShadow = '0 0 20px rgba(255, 34, 0, 0.4)' }}
            onMouseLeave={e => { e.currentTarget.style.background = 'var(--pyro-red)'; e.currentTarget.style.transform = 'scale(1)'; e.currentTarget.style.boxShadow = 'none' }}
          >JOIN NOW</a>
        </div>

        {/* Hamburger */}
        <button onClick={() => setMenuOpen(!menuOpen)} style={{ display: 'none', background: 'none', border: 'none', color: 'var(--ash-white)', cursor: 'none', flexDirection: 'column', gap: '5px', padding: '4px' }} className="hamburger">
          {[0,1,2].map(i => <span key={i} style={{ display: 'block', width: '24px', height: '2px', background: i === 1 ? 'var(--pyro-red)' : 'var(--ash-white)', transition: 'all 0.3s' }} />)}
        </button>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div style={{ position: 'fixed', inset: 0, background: 'rgba(13,13,13,0.98)', zIndex: 999, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '2.5rem' }}>
          {['PROGRAMS', 'COACHES', 'CALENDAR', 'PRICING'].map(item => (
            <a key={item} href={item === 'CALENDAR' ? '/calendar' : `/#${item.toLowerCase()}`} onClick={() => setMenuOpen(false)} style={{ fontFamily: 'var(--font-display)', fontWeight: 900, fontSize: '3rem', letterSpacing: '0.1em', color: 'var(--ash-white)', textDecoration: 'none' }}>{item}</a>
          ))}
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .hamburger { display: flex !important; }
        }
      `}</style>
    </>
  )
}
