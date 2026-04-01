export default function StatsBanner() {
  const stats = [
    '2,400+ MEMBERS',
    '24/7 ACCESS',
    '0 EXCUSES',
    '18 EXPERT COACHES',
    'EST. 2024',
    'PUNE\'S #1 GYM',
    '500+ TRANSFORMATIONS',
    '12 WEEKLY CLASSES',
  ]

  const items = [...stats, ...stats]

  return (
    <div style={{
      background: 'var(--pyro-red)',
      padding: '0.9rem 0',
      overflow: 'hidden',
      borderTop: '1px solid rgba(255,255,255,0.1)',
      borderBottom: '1px solid rgba(0,0,0,0.3)',
      position: 'relative',
      zIndex: 10,
    }}>
      <div style={{
        display: 'flex',
        animation: 'marquee 22s linear infinite',
        width: 'max-content',
      }}>
        {items.map((stat, i) => (
          <span key={i} style={{
            fontFamily: 'var(--font-display)',
            fontWeight: 900,
            fontSize: '1rem',
            letterSpacing: '0.16em',
            color: 'var(--volcanic-black)',
            padding: '0 2.5rem',
            whiteSpace: 'nowrap',
            display: 'flex',
            alignItems: 'center',
            gap: '2.5rem',
          }}>
            {stat}
            <span style={{ width: '6px', height: '6px', background: 'var(--volcanic-black)', borderRadius: '50%', opacity: 0.5 }} />
          </span>
        ))}
      </div>
    </div>
  )
}
