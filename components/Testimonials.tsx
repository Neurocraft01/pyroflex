const testimonials = [
  {
    name: 'ARJUN S.',
    tag: 'IRON FORGE · 6 MONTHS',
    quote: 'I walked in barely able to bench 60kg. Now I\'m doing 110. Pyroflex didn\'t just change my body — it changed how I think about limits.',
    result: '+50KG BENCH',
    initial: 'A',
    color: '#FF4400',
  },
  {
    name: 'PRIYA M.',
    tag: 'PYRO BURN · 8 WEEKS',
    quote: 'Lost 9kg and felt strong the entire time. The coaches here actually care about your form, your food, your sleep. It\'s different.',
    result: '−9KG TOTAL',
    initial: 'P',
    color: '#FF6B00',
  },
  {
    name: 'ROHAN K.',
    tag: 'DARK MATTER · 3 MONTHS',
    quote: 'Best investment I\'ve ever made. My PT mapped out exactly what I needed and held me accountable every single session.',
    result: 'COMPLETE RECOMP',
    initial: 'R',
    color: '#FFB300',
  },
]

export default function Testimonials() {
  return (
    <section id="results" style={{
      padding: 'clamp(5rem, 10vw, 9rem) clamp(1.5rem, 6vw, 6rem)',
      background: 'var(--volcanic-black)',
      position: 'relative',
      overflow: 'hidden',
    }}>
      {/* Background accent */}
      <div style={{ position: 'absolute', top: '20%', right: '-10%', width: '500px', height: '500px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(255,34,0,0.05) 0%, transparent 70%)', pointerEvents: 'none' }} />

      <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.65rem', letterSpacing: '0.22em', color: 'var(--pyro-red)', marginBottom: '0.8rem', fontWeight: 600 }}>// RESULTS</p>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '4rem', flexWrap: 'wrap', gap: '1rem' }}>
        <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 900, fontSize: 'clamp(2.8rem, 6vw, 5.5rem)', lineHeight: 0.9, textTransform: 'uppercase' }}>
          REAL PEOPLE.<br /><span style={{ WebkitTextStroke: '2px rgba(245,240,235,0.25)', color: 'transparent' }}>REAL FIRE.</span>
        </h2>
        <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.72rem', lineHeight: 1.8, color: 'rgba(245,240,235,0.35)', maxWidth: '260px' }}>
          No filters. No photoshop. Just the work — and what it produces.
        </p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5px', background: 'rgba(255,34,0,0.12)' }}>
        {testimonials.map((t) => (
          <div key={t.name} style={{ background: 'var(--surface)', padding: '2.5rem 2rem', position: 'relative', overflow: 'hidden' }}>
            {/* Quote mark */}
            <div style={{ position: 'absolute', top: '-0.5rem', right: '1.5rem', fontFamily: 'var(--font-display)', fontSize: '8rem', color: 'rgba(255,34,0,0.06)', lineHeight: 1, userSelect: 'none' }}>&ldquo;</div>

            {/* Result badge */}
            <div style={{
              display: 'inline-block',
              background: 'rgba(255,34,0,0.1)',
              border: `1px solid ${t.color}`,
              padding: '0.3rem 0.8rem',
              marginBottom: '1.5rem',
            }}>
              <span style={{ fontFamily: 'var(--font-body)', fontSize: '0.6rem', letterSpacing: '0.18em', color: t.color, fontWeight: 700 }}>{t.result}</span>
            </div>

            <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.78rem', lineHeight: 1.9, color: 'rgba(245,240,235,0.6)', marginBottom: '2rem', letterSpacing: '0.02em', fontStyle: 'italic' }}>
              &ldquo;{t.quote}&rdquo;
            </p>

            <div style={{ display: 'flex', alignItems: 'center', gap: '0.9rem', borderTop: '1px solid rgba(255,255,255,0.06)', paddingTop: '1.3rem' }}>
              <div style={{
                width: '38px', height: '38px', borderRadius: '50%',
                background: `linear-gradient(135deg, ${t.color}, rgba(13,13,13,0.5))`,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontFamily: 'var(--font-display)', fontWeight: 900, fontSize: '1rem', color: 'var(--volcanic-black)',
              }}>{t.initial}</div>
              <div>
                <div style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: '1rem', letterSpacing: '0.08em' }}>{t.name}</div>
                <div style={{ fontFamily: 'var(--font-body)', fontSize: '0.58rem', letterSpacing: '0.15em', color: 'rgba(245,240,235,0.35)', marginTop: '0.2rem' }}>{t.tag}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
