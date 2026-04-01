'use client'
interface Trainer {
  id: string
  name: string
  role: string
  bio: string
  specialties: string[]
  color: string
  initial: string
  image: string
}

export default function Trainers({ trainers }: { trainers: Trainer[] }) {
  if (!trainers.length) return null

  return (
    <section id="coaches" style={{ padding: 'clamp(5rem, 10vw, 9rem) clamp(1.5rem, 6vw, 6rem)', background: 'var(--surface)', position: 'relative', overflow: 'hidden' }}>
      {/* Top accent line */}
      <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '4px', background: 'linear-gradient(90deg, transparent, var(--pyro-red), var(--ember-orange), transparent)' }} />

      {/* Ghost text */}
      <div style={{ position: 'absolute', bottom: '-3rem', right: '-1rem', fontFamily: 'var(--font-display)', fontWeight: 900, fontSize: 'clamp(8rem, 18vw, 18rem)', color: 'rgba(255,34,0,0.025)', userSelect: 'none', lineHeight: 1 }}>FIRE</div>

      <div style={{ position: 'relative', zIndex: 2 }}>
        <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.65rem', letterSpacing: '0.22em', color: 'var(--pyro-red)', marginBottom: '0.8rem', fontWeight: 600 }}>// COACHES</p>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '4rem', flexWrap: 'wrap', gap: '1rem' }}>
          <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 900, fontSize: 'clamp(2.8rem, 6vw, 5.5rem)', lineHeight: 0.9, textTransform: 'uppercase' }}>
            MEET THE<br /><span style={{ color: 'var(--pyro-red)' }}>FIRE STARTERS.</span>
          </h2>
          <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.72rem', lineHeight: 1.8, color: 'rgba(245,240,235,0.35)', maxWidth: '260px' }}>
            Every coach at Pyroflex is a specialist. They don't just guide — they push.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.5px', background: 'rgba(255,34,0,0.12)' }}>
          {trainers.map((trainer) => (
            <div
              key={trainer.id}
              style={{ background: 'var(--volcanic-black)', padding: '0', position: 'relative', overflow: 'hidden', transition: 'transform 0.4s cubic-bezier(0.175,0.885,0.32,1.275)' }}
              onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-6px)'; const overlay = e.currentTarget.querySelector('.trainer-overlay') as HTMLElement; if (overlay) overlay.style.opacity = '1' }}
              onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; const overlay = e.currentTarget.querySelector('.trainer-overlay') as HTMLElement; if (overlay) overlay.style.opacity = '0' }}
            >
              {/* Image */}
              <div style={{ height: '280px', overflow: 'hidden', position: 'relative' }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={trainer.image} alt={trainer.name} style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'brightness(0.7) grayscale(0.3)', transition: 'transform 0.5s ease' }} />
                <div style={{ position: 'absolute', inset: 0, background: `linear-gradient(transparent 40%, var(--volcanic-black) 100%)` }} />
                {/* Bio overlay */}
                <div className="trainer-overlay" style={{ position: 'absolute', inset: 0, background: 'rgba(13,13,13,0.9)', display: 'flex', alignItems: 'center', padding: '1.5rem', opacity: 0, transition: 'opacity 0.35s ease' }}>
                  <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.72rem', lineHeight: 1.9, color: 'rgba(245,240,235,0.7)', letterSpacing: '0.03em' }}>{trainer.bio}</p>
                </div>
              </div>

              {/* Accent bar */}
              <div style={{ height: '3px', background: `linear-gradient(90deg, ${trainer.color}, transparent)` }} />

              {/* Info */}
              <div style={{ padding: '1.5rem 1.5rem 2rem' }}>
                <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 900, fontSize: '1.5rem', letterSpacing: '0.06em', marginBottom: '0.3rem' }}>{trainer.name}</h3>
                <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.58rem', letterSpacing: '0.18em', color: trainer.color === '#F5F0EB' ? 'rgba(245,240,235,0.5)' : trainer.color, fontWeight: 700, marginBottom: '1.2rem' }}>{trainer.role}</p>
                {/* Specialties */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
                  {trainer.specialties.map((s) => (
                    <span key={s} style={{ fontFamily: 'var(--font-body)', fontSize: '0.55rem', letterSpacing: '0.12em', padding: '0.25rem 0.65rem', background: 'rgba(255,34,0,0.08)', border: '1px solid rgba(255,34,0,0.2)', color: 'rgba(245,240,235,0.5)' }}>{s}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
