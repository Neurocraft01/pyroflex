'use client'
export default function Footer() {
  return (
    <footer style={{
      background: '#080808',
      borderTop: '1px solid rgba(255,34,0,0.12)',
      padding: '3.5rem clamp(1.5rem, 6vw, 6rem)',
    }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '2rem' }}>
        <div>
          <div style={{ marginBottom: '1rem', transition: 'transform 0.3s ease', display: 'inline-block' }}
               onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.05) translateY(-2px)'}
               onMouseLeave={e => e.currentTarget.style.transform = 'scale(1) translateY(0)'}>
            <a href="#" style={{ textDecoration: 'none' }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/logo.png" alt="Pyroflex Logo" style={{ height: '56px', width: 'auto', objectFit: 'contain' }} />
            </a>
          </div>
          <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.62rem', letterSpacing: '0.15em', color: 'rgba(245,240,235,0.25)' }}>
            PUNE, INDIA · EST. 2024
          </p>
        </div>

        <div style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap' }}>
          {['PROGRAMS', 'COACHES', 'RESULTS', 'PRICING', 'CONTACT'].map(item => (
            <a key={item} href={`#${item.toLowerCase()}`} style={{
              fontFamily: 'var(--font-body)',
              fontSize: '0.62rem',
              letterSpacing: '0.18em',
              color: 'rgba(245,240,235,0.3)',
              textDecoration: 'none',
              transition: 'color 0.2s',
            }}
              onMouseEnter={e => (e.currentTarget.style.color = 'var(--pyro-red)')}
              onMouseLeave={e => (e.currentTarget.style.color = 'rgba(245,240,235,0.3)')}
            >{item}</a>
          ))}
        </div>
      </div>

      <div style={{ marginTop: '2.5rem', paddingTop: '1.5rem', borderTop: '1px solid rgba(255,255,255,0.05)', display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem' }}>
        <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.58rem', letterSpacing: '0.12em', color: 'rgba(245,240,235,0.18)' }}>
          © 2024 PYROFLEX. ALL RIGHTS RESERVED.
        </p>
        <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.58rem', letterSpacing: '0.12em', color: 'rgba(245,240,235,0.18)' }}>
          BUILT FOR PEOPLE WHO DON&apos;T QUIT.
        </p>
      </div>
    </footer>
  )
}
