const metrics = [
  { value: '2,400+', label: 'ACTIVE MEMBERS' },
  { value: '18', label: 'EXPERT COACHES' },
  { value: '98%', label: 'RETENTION RATE' },
  { value: '500+', label: 'TRANSFORMATIONS' },
]

export default function About({ content }: { content?: Record<string, string> }) {
  const heading = content?.heading || "PYROFLEX\nIS FOR PEOPLE\nWHO DON'T\nQUIT.";
  const description = content?.description || "We built Pyroflex around a single truth: most gyms are too comfortable. Too many mirrors, too much AC, not enough accountability. We stripped it back. Every square meter of this space is built to make you better.";
  const mission = content?.mission_statement || "Our coaches don't just count reps. They track progress, push limits, and celebrate every win with you. Because at Pyroflex, your results are our reputation.";

  return (
    <section style={{
      padding: 'clamp(5rem, 10vw, 9rem) clamp(1.5rem, 6vw, 6rem)',
      background: 'var(--surface)',
      position: 'relative',
      overflow: 'hidden',
    }}>
      {/* Diagonal accent */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        height: '4px',
        background: 'linear-gradient(90deg, var(--pyro-red), var(--ember-orange), transparent)',
      }} />

      {/* Big ghost text */}
      <div style={{
        position: 'absolute',
        bottom: '-3rem',
        left: '-1rem',
        fontFamily: 'var(--font-display)',
        fontWeight: 900,
        fontSize: 'clamp(8rem, 20vw, 20rem)',
        color: 'rgba(255,34,0,0.03)',
        lineHeight: 1,
        userSelect: 'none',
        letterSpacing: '-0.02em',
      }}>BURN</div>

      <div style={{ position: 'relative', zIndex: 2 }}>
        {/* Label */}
        <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.65rem', letterSpacing: '0.22em', color: 'var(--pyro-red)', marginBottom: '0.8rem', fontWeight: 600 }}>// WHO WE ARE</p>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '5rem', alignItems: 'start' }} className="about-grid">
          <div>
            <h2 style={{
              fontFamily: 'var(--font-display)',
              fontWeight: 900,
              fontSize: 'clamp(2.8rem, 6vw, 5.5rem)',
              lineHeight: 0.92,
              textTransform: 'uppercase',
              marginBottom: '2.5rem',
              whiteSpace: 'pre-line'
            }}>
              {heading}
            </h2>

            <a href="#pricing" style={{
              display: 'inline-block',
              fontFamily: 'var(--font-display)',
              fontWeight: 800,
              fontSize: '0.95rem',
              letterSpacing: '0.14em',
              color: 'var(--volcanic-black)',
              background: 'var(--pyro-red)',
              padding: '0.8rem 2rem',
              textDecoration: 'none',
              clipPath: 'polygon(10px 0%, 100% 0%, calc(100% - 10px) 100%, 0% 100%)',
              transition: 'transform 0.2s, background 0.2s',
            }}
              onMouseEnter={e => { e.currentTarget.style.background = 'var(--ember-orange)'; e.currentTarget.style.transform = 'scale(1.04)' }}
              onMouseLeave={e => { e.currentTarget.style.background = 'var(--pyro-red)'; e.currentTarget.style.transform = 'scale(1)' }}
            >CLAIM YOUR SPOT</a>
          </div>

          <div>
            <p style={{
              fontFamily: 'var(--font-body)',
              fontSize: '0.82rem',
              lineHeight: 2,
              color: 'rgba(245,240,235,0.5)',
              marginBottom: '3rem',
              letterSpacing: '0.03em',
              whiteSpace: 'pre-line'
            }}>
              {description}
              <br /><br />
              {mission}
            </p>

            {/* Metrics grid */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2px', background: 'rgba(255,34,0,0.12)' }}>
              {metrics.map(m => (
                <div key={m.label} style={{ background: 'var(--volcanic-black)', padding: '1.5rem 1.2rem' }}>
                  <div style={{ fontFamily: 'var(--font-display)', fontWeight: 900, fontSize: '2.2rem', color: 'var(--ash-white)', marginBottom: '0.3rem' }}>{m.value}</div>
                  <div style={{ fontFamily: 'var(--font-body)', fontSize: '0.58rem', letterSpacing: '0.18em', color: 'var(--pyro-red)', fontWeight: 700 }}>{m.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .about-grid { grid-template-columns: 1fr !important; gap: 3rem !important; }
        }
      `}</style>
    </section>
  )
}
