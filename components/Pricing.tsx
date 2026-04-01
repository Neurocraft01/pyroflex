'use client'
export default function Pricing({ content }: { content?: Record<string, string> }) {
  const plans = [
    {
      tier: 'STARTER',
      price: content?.plan1_price || '₹1,499',
      period: '/month',
      tag: 'FLOOR ACCESS',
      features: ['Full gym floor access', 'Locker room & showers', '6AM–10PM access', 'Monthly fitness assessment', '2 Group classes/week'],
      cta: 'START HERE',
      highlight: false,
    },
    {
      tier: content?.plan1_name || 'PYRO',
      price: content?.plan2_price || '₹2,999',
      period: '/month',
      tag: 'MOST POPULAR · ◈',
      features: ['Everything in Starter', '24/7 floor access', 'Unlimited group classes', 'Monthly 1-on-1 check-in', 'Nutrition tracking app', 'Guest pass (1/month)'],
      cta: 'JOIN PYRO',
      highlight: true,
    },
    {
      tier: content?.plan2_name || 'DARK MATTER',
      price: '₹6,999',
      period: '/month',
      tag: 'ELITE',
      features: ['Everything in Pyro', '3x weekly PT sessions', 'Custom programming', 'Full nutrition plan', 'Biometric body scans', 'Priority booking'],
      cta: 'GO ELITE',
      highlight: false,
    },
  ];

  return (
    <section id="pricing" style={{
      padding: 'clamp(5rem, 10vw, 9rem) clamp(1.5rem, 6vw, 6rem)',
      background: 'var(--surface)',
      position: 'relative',
      overflow: 'hidden',
    }}>
      {/* Top line */}
      <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '4px', background: 'linear-gradient(90deg, transparent, var(--pyro-red), var(--ember-orange), transparent)' }} />

      {/* Ghost text */}
      <div style={{ position: 'absolute', bottom: '-3rem', right: '-1rem', fontFamily: 'var(--font-display)', fontWeight: 900, fontSize: 'clamp(8rem, 18vw, 18rem)', color: 'rgba(255,34,0,0.03)', userSelect: 'none', lineHeight: 1 }}>JOIN</div>

      <div style={{ position: 'relative', zIndex: 2 }}>
        <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.65rem', letterSpacing: '0.22em', color: 'var(--pyro-red)', marginBottom: '0.8rem', fontWeight: 600 }}>// MEMBERSHIP</p>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '4rem', flexWrap: 'wrap', gap: '1rem' }}>
          <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 900, fontSize: 'clamp(2.8rem, 6vw, 5.5rem)', lineHeight: 0.9, textTransform: 'uppercase' }}>
            NO REASON<br /><span style={{ color: 'var(--pyro-red)' }}>NOT TO.</span>
          </h2>
          <div style={{ fontFamily: 'var(--font-body)', fontSize: '0.7rem', letterSpacing: '0.1em', color: 'rgba(245,240,235,0.4)', display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
            <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: 'var(--pyro-red)', animation: 'glow-pulse 1.5s ease-in-out infinite', display: 'inline-block' }} />
            LIMITED FOUNDING MEMBER SPOTS
          </div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5px', background: 'rgba(255,34,0,0.12)' }}>
          {plans.map(plan => (
            <div key={plan.tier} style={{
              background: plan.highlight ? 'var(--volcanic-black)' : 'var(--surface-2)',
              padding: '2.5rem 2rem',
              position: 'relative',
              overflow: 'hidden',
              outline: plan.highlight ? '1.5px solid var(--pyro-red)' : 'none',
              transition: 'transform 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275), box-shadow 0.4s ease'
            }}
                 onMouseEnter={e => { e.currentTarget.style.transform = 'scale(1.02) translateY(-10px)'; e.currentTarget.style.boxShadow = '0 20px 40px rgba(255, 34, 0, 0.15)' }}
                 onMouseLeave={e => { e.currentTarget.style.transform = 'scale(1) translateY(0)'; e.currentTarget.style.boxShadow = 'none' }}
            >
              {plan.highlight && (
                <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '3px', background: 'linear-gradient(90deg, var(--pyro-red), var(--ember-orange))' }} />
              )}

              <div style={{ marginBottom: '0.5rem' }}>
                <span style={{ fontFamily: 'var(--font-body)', fontSize: '0.6rem', letterSpacing: '0.2em', color: plan.highlight ? 'var(--pyro-red)' : 'rgba(245,240,235,0.35)', fontWeight: 700 }}>{plan.tag}</span>
              </div>

              <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 900, fontSize: '1.8rem', letterSpacing: '0.1em', marginBottom: '1.2rem' }}>{plan.tier}</h3>

              <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.3rem', marginBottom: '2rem' }}>
                <span style={{ fontFamily: 'var(--font-display)', fontWeight: 900, fontSize: 'clamp(2.5rem, 5vw, 3.5rem)', color: plan.highlight ? 'var(--ash-white)' : 'var(--ash-white)' }}>{plan.price}</span>
                <span style={{ fontFamily: 'var(--font-body)', fontSize: '0.7rem', color: 'rgba(245,240,235,0.35)', letterSpacing: '0.08em' }}>{plan.period}</span>
              </div>

              <ul style={{ listStyle: 'none', marginBottom: '2.5rem', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                {plan.features.map(f => (
                  <li key={f} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.7rem' }}>
                    <span style={{ color: plan.highlight ? 'var(--pyro-red)' : 'var(--ember-orange)', fontFamily: 'var(--font-display)', fontWeight: 900, fontSize: '1rem', lineHeight: 1.3 }}>+</span>
                    <span style={{ fontFamily: 'var(--font-body)', fontSize: '0.7rem', color: 'rgba(245,240,235,0.55)', lineHeight: 1.6, letterSpacing: '0.03em' }}>{f}</span>
                  </li>
                ))}
              </ul>

              <a href="#" style={{
                display: 'block',
                fontFamily: 'var(--font-display)',
                fontWeight: 900,
                fontSize: '1rem',
                letterSpacing: '0.14em',
                textAlign: 'center',
                textDecoration: 'none',
                padding: '0.9rem',
                clipPath: 'polygon(10px 0%, 100% 0%, calc(100% - 10px) 100%, 0% 100%)',
                background: plan.highlight ? 'linear-gradient(135deg, var(--pyro-red), var(--ember-orange))' : 'transparent',
                color: plan.highlight ? 'var(--volcanic-black)' : 'var(--ash-white)',
                border: plan.highlight ? 'none' : '1px solid rgba(245,240,235,0.2)',
                transition: 'transform 0.2s, background 0.2s',
                animation: plan.highlight ? 'glow-pulse 2.5s ease-in-out infinite' : 'none',
              }}
                onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.03)'}
                onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
              >{plan.cta} →</a>
            </div>
          ))}
        </div>

        {/* Free trial note */}
        <p style={{ textAlign: 'center', marginTop: '2.5rem', fontFamily: 'var(--font-body)', fontSize: '0.68rem', color: 'rgba(245,240,235,0.3)', letterSpacing: '0.1em' }}>
          YOUR FIRST SESSION IS FREE. <span style={{ color: 'var(--pyro-red)' }}>NO REASON NOT TO.</span>
        </p>
      </div>
    </section>
  )
}
