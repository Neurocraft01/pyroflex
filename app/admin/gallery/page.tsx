'use client'
import { useState, useEffect } from 'react';

export default function GalleryAdmin() {
  const [items, setItems] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchItems = async () => {
    setLoading(true);
    const res = await fetch('/api/admin/collection?name=gallery');
    const json = await res.json();
    setItems(json.items || []);
    setLoading(false);
  };

  useEffect(() => {
    fetchItems();
  }, []);

  const handleDelete = async (id: string) => {
    if (!confirm('Are you sure?')) return;
    await fetch(`/api/admin/collection?name=gallery&id=${id}`, { method: 'DELETE' });
    fetchItems();
  };

  const handleUpdate = async (id: string, field: string, value: any) => {
    await fetch(`/api/admin/collection?name=gallery&id=${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ [field]: value }),
    });
    fetchItems();
  };

  const handleCreate = async () => {
    const newItem = {
      caption: 'New Image',
      url: 'https://images.unsplash.com/photo-1549060279-7e168fcee0c2?w=800&q=80',
      order: Date.now()
    };
    await fetch('/api/admin/collection?name=gallery', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newItem),
    });
    fetchItems();
  };

  if (loading) return <div>Loading...</div>;

  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
        <h1 style={{ fontFamily: 'var(--font-display)', fontSize: '3rem', fontWeight: 900, color: 'var(--ash-white)' }}>
          MANAGE <span style={{ color: 'var(--pyro-red)' }}>GALLERY</span>
        </h1>
        <button onClick={handleCreate} style={{ padding: '0.8rem 1.5rem', background: 'var(--pyro-red)', border: 'none', color: 'var(--volcanic-black)', fontFamily: 'var(--font-display)', fontSize: '1.2rem', fontWeight: 900, cursor: 'pointer' }}>+ ADD IMAGE</button>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '1.5rem' }}>
        {items.sort((a,b)=>a.order - b.order).map(item => (
          <div key={item.id} style={{ background: 'var(--surface)', position: 'relative' }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={item.url} style={{ width: '100%', height: '200px', objectFit: 'cover', display: 'block' }} />
            <div style={{ padding: '1rem', display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
              <div>
                <label style={{ fontSize: '0.65rem', color: 'rgba(255,255,255,0.4)' }}>CAPTION</label>
                <input value={item.caption} onChange={e => handleUpdate(item.id, 'caption', e.target.value)} style={{ width: '100%', padding: '0.4rem', background: '#0a0a0a', color: 'white', border: '1px solid #333' }} />
              </div>
              <div>
                <label style={{ fontSize: '0.65rem', color: 'rgba(255,255,255,0.4)' }}>IMAGE URL</label>
                <input value={item.url} onChange={e => handleUpdate(item.id, 'url', e.target.value)} style={{ width: '100%', padding: '0.4rem', background: '#0a0a0a', color: 'white', border: '1px solid #333' }} />
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '0.5rem' }}>
                <button onClick={() => handleDelete(item.id)} style={{ background: 'none', border: '1px solid var(--pyro-red)', color: 'var(--pyro-red)', padding: '0.3rem 0.8rem', fontSize: '0.7rem', cursor: 'pointer' }}>DELETE</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
