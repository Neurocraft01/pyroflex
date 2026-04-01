'use client'
const programs = [
  {
    id: '01',
    name: 'PYRO BURN',
    tag: 'FAT LOSS · HIIT',
    desc: 'High-intensity intervals engineered to torch fat and rebuild stamina. 45-minute sessions that leave you wrecked in the best way.',
    stat: '↓ 8KG AVG / 8 WEEKS',
    color: 'var(--pyro-red)',
  },
  {
    id: '02',
    name: 'IRON FORGE',
    tag: 'STRENGTH · POWERLIFTING',
    desc: 'Progressive overload protocols used by competitive powerlifters. Built for people who want to be genuinely strong — not just look it.',
    stat: '↑ 40% STRENGTH / 12 WEEKS',
    color: 'var(--ember-orange)',
  },
  {
    id: '03',
    name: 'FLEX CIRCUIT',
    tag: 'CONDITIONING · ENDURANCE',
    desc: 'Functional training circuits that build real-world athleticism. Mobility, endurance, and power combined into one brutal system.',
    stat: '↑ VO2 MAX / 6 WEEKS',
    color: 'var(--molten-gold)',
  },
  {
    id: '04',
    name: 'DARK MATTER',
    tag: 'ELITE · PERSONAL TRAINING',
    desc: '1-on-1 sessions with our top coaches. Custom programming, nutrition guidance, and biometric tracking. For those who want everything.',
    stat: 'UNLIMITED RESULTS',
    color: 'var(--ash-white)',
  },
]

export default function Programs() {
  return (
    <section id="programs" style={{ padding: 'clamp(5rem, 10vw, 9rem) clamp(1.5rem, 6vw, 6rem)', background: 'var(--volcanic-black)' }}>
      {/* Header */}
      <div style={{ marginBottom: '4rem', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '1rem' }}>
        <div>
          <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.65rem', letterSpacing: '0.22em', color: 'var(--pyro-red)', marginBottom: '0.8rem', fontWeight: 600 }}>// PROGRAMS</p>
          <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 900, fontSize: 'clamp(3rem, 7vw, 6rem)', lineHeight: 0.9, textTransform: 'uppercase' }}>
            CHOOSE<br />YOUR<br /><span style={{ WebkitTextStroke: '2px rgba(245,240,235,0.3)', color: 'transparent' }}>WEAPON</span>
          </h2>
        </div>
        <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.75rem', lineHeight: 1.8, color: 'rgba(245,240,235,0.4)', maxWidth: '280px', letterSpacing: '0.03em' }}>
          Every program is built around one thing: getting you results that don&apos;t reverse when you leave.
        </p>
      </div>

      {/* Program cards */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5px', background: 'rgba(255,34,0,0.15)' }}>
        {programs.map((p) => (
          <div key={p.id}
            style={{
              background: 'var(--surface)',
              padding: '2.5rem 2rem',
              position: 'relative',
              overflow: 'hidden',
              cursor: 'none',
              transition: 'background 0.3s',
            }}
            onMouseEnter={e => (e.currentTarget.style.background = 'var(--surface-2)')}
            onMouseLeave={e => (e.currentTarget.style.background = 'var(--surface)')}
          >
            {/* BG number */}
            <div style={{
              position: 'absolute', top: '-1rem', right: '-0.5rem',
              fontFamily: 'var(--font-display)', fontWeight: 900,
              fontSize: '7rem', color: 'rgba(255,255,255,0.03)', lineHeight: 1,
              userSelect: 'none',
            }}>{p.id}</div>

            {/* Accent line */}
            <div style={{ width: '40px', height: '3px', background: p.color, marginBottom: '1.5rem' }} />

            <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.6rem', letterSpacing: '0.2em', color: p.color, marginBottom: '0.7rem', fontWeight: 600 }}>{p.tag}</p>
            <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 900, fontSize: '2.2rem', letterSpacing: '0.05em', marginBottom: '1rem', color: 'var(--ash-white)' }}>{p.name}</h3>
            <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.73rem', lineHeight: 1.85, color: 'rgba(245,240,235,0.45)', marginBottom: '2rem', letterSpacing: '0.02em' }}>{p.desc}</p>

            {/* Stat */}
            <div style={{
              display: 'inline-flex', alignItems: 'center', gap: '0.6rem',
              background: 'rgba(255,34,0,0.08)', border: '1px solid rgba(255,34,0,0.2)',
              padding: '0.4rem 0.9rem',
            }}>
              <span style={{ width: '5px', height: '5px', background: p.color, borderRadius: '50%' }} />
              <span style={{ fontFamily: 'var(--font-body)', fontSize: '0.6rem', letterSpacing: '0.15em', color: p.color, fontWeight: 700 }}>{p.stat}</span>
            </div>

            {/* Arrow */}
            <div style={{ position: 'absolute', bottom: '2rem', right: '2rem', fontFamily: 'var(--font-display)', fontSize: '1.2rem', color: 'rgba(245,240,235,0.15)' }}>→</div>
          </div>
        ))}
      </div>
    </section>
  )
}
