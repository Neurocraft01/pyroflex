'use client'
import { useState } from 'react'

interface GalleryItem {
  id: string
  caption: string
  url: string
  order: number
}

export default function Gallery({ items }: { items: GalleryItem[] }) {
  const [lightbox, setLightbox] = useState<GalleryItem | null>(null)
  const [idx, setIdx] = useState(0)

  const open = (item: GalleryItem, i: number) => { setLightbox(item); setIdx(i) }
  const close = () => setLightbox(null)
  const prev = () => { const ni = (idx - 1 + items.length) % items.length; setIdx(ni); setLightbox(items[ni]) }
  const next = () => { const ni = (idx + 1) % items.length; setIdx(ni); setLightbox(items[ni]) }

  if (!items.length) return null

  return (
    <section id="gallery" style={{ padding: 'clamp(5rem, 10vw, 9rem) clamp(1.5rem, 6vw, 6rem)', background: 'var(--volcanic-black)' }}>
      <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.65rem', letterSpacing: '0.22em', color: 'var(--pyro-red)', marginBottom: '0.8rem', fontWeight: 600 }}>// GALLERY</p>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '3rem', flexWrap: 'wrap', gap: '1rem' }}>
        <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 900, fontSize: 'clamp(2.8rem, 6vw, 5.5rem)', lineHeight: 0.9, textTransform: 'uppercase' }}>
          THE FLOOR.<br /><span style={{ WebkitTextStroke: '2px rgba(245,240,235,0.25)', color: 'transparent' }}>THE GRIND.</span>
        </h2>
        <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.72rem', lineHeight: 1.8, color: 'rgba(245,240,235,0.35)', maxWidth: '260px' }}>
          No photoshop. No staging. Just the space, the equipment, and the work.
        </p>
      </div>

      <div style={{ columns: '3', columnGap: '8px' }} className="gallery-grid">
        {items.map((item, i) => (
          <div key={item.id}
            onClick={() => open(item, i)}
            style={{ breakInside: 'avoid', marginBottom: '8px', position: 'relative', overflow: 'hidden', cursor: 'none', display: 'block' }}
            onMouseEnter={e => {
              const img = e.currentTarget.querySelector('img') as HTMLImageElement
              const cap = e.currentTarget.querySelector('.cap') as HTMLElement
              if (img) img.style.transform = 'scale(1.08)'
              if (cap) cap.style.opacity = '1'
            }}
            onMouseLeave={e => {
              const img = e.currentTarget.querySelector('img') as HTMLImageElement
              const cap = e.currentTarget.querySelector('.cap') as HTMLElement
              if (img) img.style.transform = 'scale(1)'
              if (cap) cap.style.opacity = '0'
            }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={item.url}
              alt={item.caption}
              style={{ width: '100%', display: 'block', transition: 'transform 0.5s cubic-bezier(0.25,1,0.5,1)', filter: 'brightness(0.85)' }}
            />
            <div className="cap" style={{
              position: 'absolute', inset: 0, background: 'linear-gradient(transparent, rgba(13,13,13,0.85))',
              display: 'flex', alignItems: 'flex-end', padding: '1.2rem',
              opacity: 0, transition: 'opacity 0.3s ease'
            }}>
              <span style={{ fontFamily: 'var(--font-body)', fontSize: '0.65rem', letterSpacing: '0.14em', color: 'var(--ash-white)', fontWeight: 600 }}>{item.caption}</span>
            </div>
            <div style={{ position: 'absolute', top: '0.75rem', right: '0.75rem', background: 'var(--pyro-red)', width: '8px', height: '8px', borderRadius: '50%', opacity: 0.7 }} />
          </div>
        ))}
      </div>

      {/* Lightbox */}
      {lightbox && (
        <div
          onClick={close}
          style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.96)', zIndex: 9000, display: 'flex', alignItems: 'center', justifyContent: 'center' }}
        >
          <button onClick={(e) => { e.stopPropagation(); prev() }} style={{ position: 'absolute', left: '2rem', background: 'rgba(255,34,0,0.15)', border: '1px solid var(--pyro-red)', color: 'var(--ash-white)', fontFamily: 'var(--font-display)', fontSize: '1.5rem', width: '52px', height: '52px', cursor: 'pointer', zIndex: 9001 }}>‹</button>
          <div onClick={e => e.stopPropagation()} style={{ maxWidth: '85vw', maxHeight: '85vh', position: 'relative' }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={lightbox.url} alt={lightbox.caption} style={{ maxWidth: '85vw', maxHeight: '80vh', objectFit: 'contain', display: 'block' }} />
            <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.7rem', letterSpacing: '0.15em', color: 'rgba(245,240,235,0.6)', textAlign: 'center', marginTop: '1rem' }}>{lightbox.caption}</p>
            <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.6rem', color: 'var(--pyro-red)', textAlign: 'center', marginTop: '0.25rem' }}>{idx + 1} / {items.length}</p>
          </div>
          <button onClick={(e) => { e.stopPropagation(); next() }} style={{ position: 'absolute', right: '2rem', background: 'rgba(255,34,0,0.15)', border: '1px solid var(--pyro-red)', color: 'var(--ash-white)', fontFamily: 'var(--font-display)', fontSize: '1.5rem', width: '52px', height: '52px', cursor: 'pointer', zIndex: 9001 }}>›</button>
          <button onClick={close} style={{ position: 'absolute', top: '1.5rem', right: '1.5rem', background: 'none', border: 'none', color: 'rgba(245,240,235,0.5)', fontFamily: 'var(--font-body)', fontSize: '0.7rem', cursor: 'pointer', letterSpacing: '0.1em' }}>✕ CLOSE</button>
        </div>
      )}

      <style>{`
        @media (max-width: 900px) { .gallery-grid { columns: 2 !important; } }
        @media (max-width: 560px) { .gallery-grid { columns: 1 !important; } }
      `}</style>
    </section>
  )
}
