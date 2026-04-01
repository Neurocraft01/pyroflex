'use client'
import { useState, useEffect } from 'react'

export default function StickyCTA() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 600)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div style={{
      position: 'fixed',
      bottom: 0,
      left: 0,
      right: 0,
      zIndex: 500,
      transform: visible ? 'translateY(0)' : 'translateY(100%)',
      transition: 'transform 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
      background: 'rgba(13,13,13,0.96)',
      backdropFilter: 'blur(16px)',
      borderTop: '1px solid rgba(255,34,0,0.2)',
      padding: '1rem clamp(1.5rem, 6vw, 6rem)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: '1rem',
      flexWrap: 'wrap',
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
        <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: 'var(--pyro-red)', animation: 'glow-pulse 1.5s ease-in-out infinite', display: 'inline-block' }} />
        <span style={{ fontFamily: 'var(--font-body)', fontSize: '0.68rem', letterSpacing: '0.15em', color: 'rgba(245,240,235,0.5)', fontWeight: 600 }}>
          LIMITED FOUNDING MEMBER SPOTS REMAINING
        </span>
      </div>

      <a href="#pricing" style={{
        fontFamily: 'var(--font-display)',
        fontWeight: 900,
        fontSize: '0.95rem',
        letterSpacing: '0.14em',
        color: 'var(--volcanic-black)',
        background: 'linear-gradient(135deg, var(--pyro-red), var(--ember-orange))',
        padding: '0.65rem 1.8rem',
        textDecoration: 'none',
        clipPath: 'polygon(8px 0%, 100% 0%, calc(100% - 8px) 100%, 0% 100%)',
        animation: 'glow-pulse 2s ease-in-out infinite',
        transition: 'transform 0.2s',
        whiteSpace: 'nowrap',
      }}
        onMouseEnter={e => (e.currentTarget.style.transform = 'scale(1.04)')}
        onMouseLeave={e => (e.currentTarget.style.transform = 'scale(1)')}
      >JOIN PYROFLEX →</a>
    </div>
  )
}
