export default function FinalCTA() {
  return (
    <section style={{
      padding: 'clamp(6rem, 12vw, 12rem) clamp(1.5rem, 6vw, 6rem)',
      background: 'var(--volcanic-black)',
      textAlign: 'center',
      position: 'relative',
      overflow: 'hidden',
    }}>
      {/* Red glow */}
      <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse 70% 50% at 50% 50%, rgba(255,34,0,0.1) 0%, transparent 70%)' }} />
      {/* Grid */}
      <div style={{ position: 'absolute', inset: 0, opacity: 0.03, backgroundImage: 'linear-gradient(rgba(245,240,235,1) 1px, transparent 1px), linear-gradient(90deg, rgba(245,240,235,1) 1px, transparent 1px)', backgroundSize: '80px 80px' }} />

      <div style={{ position: 'relative', zIndex: 2 }}>
        <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.65rem', letterSpacing: '0.22em', color: 'var(--pyro-red)', marginBottom: '1.5rem', fontWeight: 600 }}>// READY TO START?</p>

        <h2 style={{
          fontFamily: 'var(--font-display)',
          fontWeight: 900,
          fontSize: 'clamp(3.5rem, 10vw, 9rem)',
          lineHeight: 0.88,
          textTransform: 'uppercase',
          marginBottom: '2.5rem',
        }}>
          EVERYONE WHO<br />JOINED PYROFLEX<br />
          <span style={{ color: 'var(--pyro-red)' }}>WISHES THEY DID</span><br />IT SOONER.
        </h2>

        <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.8rem', lineHeight: 1.9, color: 'rgba(245,240,235,0.4)', maxWidth: '500px', margin: '0 auto 3.5rem', letterSpacing: '0.04em' }}>
          You already know what you need to do. The question is whether you&apos;re going to do it today, or keep waiting for the right moment. There isn&apos;t one. There&apos;s only now.
        </p>

        <a href="#pricing" style={{
          display: 'inline-block',
          fontFamily: 'var(--font-display)',
          fontWeight: 900,
          fontSize: '1.3rem',
          letterSpacing: '0.16em',
          color: 'var(--volcanic-black)',
          background: 'linear-gradient(135deg, var(--pyro-red), var(--ember-orange))',
          padding: '1.1rem 3.5rem',
          textDecoration: 'none',
          clipPath: 'polygon(16px 0%, 100% 0%, calc(100% - 16px) 100%, 0% 100%)',
          animation: 'glow-pulse 2s ease-in-out infinite',
          transition: 'transform 0.2s',
        }}
          onMouseEnter={e => (e.currentTarget.style.transform = 'scale(1.06)')}
          onMouseLeave={e => (e.currentTarget.style.transform = 'scale(1)')}
        >JOIN PYROFLEX NOW →</a>

        <div style={{ marginTop: '1.5rem', fontFamily: 'var(--font-body)', fontSize: '0.62rem', letterSpacing: '0.12em', color: 'rgba(245,240,235,0.25)' }}>
          FIRST SESSION FREE · NO CONTRACTS · CANCEL ANYTIME
        </div>
      </div>
    </section>
  )
}
