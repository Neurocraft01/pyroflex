'use client'
import { useEffect, useRef } from 'react'

export default function Hero({ content }: { content?: Record<string, string> }) {
  const embersRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const container = embersRef.current
    if (!container) return
    const interval = setInterval(() => {
      const ember = document.createElement('div')
      ember.style.cssText = `
        position:absolute;
        width:${2 + Math.random() * 4}px;
        height:${2 + Math.random() * 4}px;
        background:${Math.random() > 0.5 ? '#FF2200' : '#FF6B00'};
        border-radius:50%;
        left:${Math.random() * 100}%;
        bottom:0;
        animation: ember-float ${1.5 + Math.random() * 2}s ease-out forwards;
        pointer-events:none;
      `
      container.appendChild(ember)
      setTimeout(() => ember.remove(), 3500)
    }, 120)
    return () => clearInterval(interval)
  }, [])

  return (
    <section id="hero" style={{ position: 'relative', minHeight: '100vh', display: 'flex', alignItems: 'center', overflow: 'hidden', background: 'var(--volcanic-black)' }}>
      {/* Background Image Layer */}
      <div style={{
        position: 'absolute',
        inset: 0,
        backgroundImage: 'url("https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=1920&q=90")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        opacity: 0.3,
        mixBlendMode: 'luminosity'
      }} />

      {/* Background gradient layers */}
      <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse 80% 60% at 60% 80%, rgba(255,34,0,0.12) 0%, transparent 70%)' }} />
      <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse 50% 40% at 50% 50%, rgba(255,107,0,0.06) 0%, transparent 60%)' }} />
      <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to right, var(--volcanic-black) 0%, rgba(13,13,13,0.8) 50%, rgba(13,13,13,0.4) 100%)' }} />

      {/* Scan line effect */}
      <div style={{ position: 'absolute', inset: 0, overflow: 'hidden', pointerEvents: 'none' }}>
        <div style={{ position: 'absolute', left: 0, right: 0, height: '1px', background: 'linear-gradient(90deg, transparent, rgba(255,34,0,0.3), transparent)', animation: 'scan-line 6s linear infinite' }} />
      </div>

      {/* Grid lines */}
      <div style={{
        position: 'absolute', inset: 0, opacity: 0.04,
        backgroundImage: 'linear-gradient(rgba(245,240,235,1) 1px, transparent 1px), linear-gradient(90deg, rgba(245,240,235,1) 1px, transparent 1px)',
        backgroundSize: '80px 80px',
      }} />

      {/* Ember particles container */}
      <div ref={embersRef} style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }} />

      {/* Big background text */}
      <div style={{
        position: 'absolute',
        right: '-2rem',
        top: '50%',
        transform: 'translateY(-50%)',
        fontFamily: 'var(--font-display)',
        fontWeight: 900,
        fontSize: 'clamp(8rem, 18vw, 22rem)',
        letterSpacing: '-0.02em',
        color: 'rgba(255,34,0,0.04)',
        lineHeight: 0.9,
        userSelect: 'none',
        whiteSpace: 'nowrap',
      }}>
        PYRO<br />FLEX
      </div>

      {/* Content */}
      <div style={{ position: 'relative', zIndex: 2, padding: 'clamp(6rem, 10vw, 10rem) clamp(1.5rem, 6vw, 6rem)', maxWidth: '900px' }}>
        {/* Tag */}
        <div className="animate-fadeUp delay-1" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.6rem', marginBottom: '2rem' }}>
          <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: 'var(--pyro-red)', boxShadow: '0 0 10px var(--pyro-red)', display: 'inline-block', animation: 'glow-pulse 1.5s ease-in-out infinite' }} />
          <span style={{ fontFamily: 'var(--font-body)', fontSize: '0.68rem', fontWeight: 600, letterSpacing: '0.22em', color: 'var(--pyro-red)' }}>EST. 2024 · PUNE, INDIA</span>
        </div>

        <h1 className="animate-fadeUp delay-2" style={{
          fontFamily: 'var(--font-display)',
          fontWeight: 900,
          fontSize: 'clamp(4rem, 11vw, 10rem)',
          lineHeight: 0.88,
          letterSpacing: '-0.01em',
          textTransform: 'uppercase',
          marginBottom: '1.5rem',
          whiteSpace: 'pre-line'
        }}>
          {content?.title || 'IGNITE\nYOUR\nPOTENTIAL'}
        </h1>

        <p className="animate-fadeUp delay-3" style={{
          fontFamily: 'var(--font-body)',
          fontSize: 'clamp(0.75rem, 1.5vw, 0.9rem)',
          lineHeight: 1.8,
          color: 'rgba(245,240,235,0.55)',
          maxWidth: '480px',
          marginBottom: '3rem',
          letterSpacing: '0.04em',
        }}>
          {content?.subtitle || "Pyroflex is not for everyone. It's for the ones who show up at 5AM, who earn their rest, who turn pain into power. If that's you — the door's open."}
        </p>

        <div className="animate-fadeUp delay-4" style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', alignItems: 'center' }}>
          <a href="#pricing" style={{
            fontFamily: 'var(--font-display)',
            fontWeight: 900,
            fontSize: '1.1rem',
            letterSpacing: '0.14em',
            color: 'var(--volcanic-black)',
            background: 'linear-gradient(135deg, var(--pyro-red), var(--ember-orange))',
            padding: '1rem 2.4rem',
            textDecoration: 'none',
            clipPath: 'polygon(12px 0%, 100% 0%, calc(100% - 12px) 100%, 0% 100%)',
            animation: 'glow-pulse 2s ease-in-out infinite',
            transition: 'transform 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275), box-shadow 0.4s ease',
            display: 'inline-block',
          }}
            onMouseEnter={e => { e.currentTarget.style.transform = 'scale(1.08)'; e.currentTarget.style.boxShadow = '0 0 25px rgba(255, 34, 0, 0.3)' }}
            onMouseLeave={e => { e.currentTarget.style.transform = 'scale(1)'; e.currentTarget.style.boxShadow = 'none' }}
          >{content?.cta_text || 'START BURNING →'}</a>

          <a href="#programs" style={{
            fontFamily: 'var(--font-body)',
            fontSize: '0.72rem',
            fontWeight: 600,
            letterSpacing: '0.16em',
            color: 'rgba(245,240,235,0.5)',
            textDecoration: 'none',
            padding: '1rem 0',
            borderBottom: '1px solid rgba(245,240,235,0.2)',
            transition: 'color 0.2s, border-color 0.2s',
          }}
            onMouseEnter={e => { e.currentTarget.style.color = 'var(--ash-white)'; e.currentTarget.style.borderColor = 'var(--pyro-red)' }}
            onMouseLeave={e => { e.currentTarget.style.color = 'rgba(245,240,235,0.5)'; e.currentTarget.style.borderColor = 'rgba(245,240,235,0.2)' }}
          >VIEW PROGRAMS</a>
        </div>
      </div>

      {/* Bottom fade */}
      <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: '200px', background: 'linear-gradient(transparent, var(--volcanic-black))' }} />

      {/* Scroll indicator */}
      <div className="animate-fadeIn delay-6" style={{ position: 'absolute', bottom: '2.5rem', left: '50%', transform: 'translateX(-50%)', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem' }}>
        <span style={{ fontFamily: 'var(--font-body)', fontSize: '0.6rem', letterSpacing: '0.2em', color: 'rgba(245,240,235,0.3)' }}>SCROLL</span>
        <div style={{ width: '1px', height: '40px', background: 'linear-gradient(var(--pyro-red), transparent)' }} />
      </div>
    </section>
  )
}
