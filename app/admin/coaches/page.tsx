'use client'
import { useState, useEffect } from 'react';

export default function CoachesAdmin() {
  const [items, setItems] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchItems = async () => {
    setLoading(true);
    const res = await fetch('/api/admin/collection?name=trainers');
    const json = await res.json();
    setItems(json.items || []);
    setLoading(false);
  };

  useEffect(() => {
    fetchItems();
  }, []);

  const handleDelete = async (id: string) => {
    if (!confirm('Are you sure?')) return;
    await fetch(`/api/admin/collection?name=trainers&id=${id}`, { method: 'DELETE' });
    fetchItems();
  };

  const handleUpdate = async (id: string, field: string, value: any) => {
    await fetch(`/api/admin/collection?name=trainers&id=${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ [field]: value }),
    });
    fetchItems();
  };

  const handleCreate = async () => {
    const newItem = {
      name: 'NEW COACH',
      role: 'ROLE',
      bio: 'Bio details...',
      specialties: ['SPECIALTY'],
      color: '#FF2200',
      initial: 'N',
      image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&q=80'
    };
    await fetch('/api/admin/collection?name=trainers', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newItem),
    });
    fetchItems();
  };

  if (loading) return <div>Loading Coaches...</div>;

  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
        <h1 style={{ fontFamily: 'var(--font-display)', fontSize: '3rem', fontWeight: 900, color: 'var(--ash-white)' }}>
          MANAGE <span style={{ color: 'var(--pyro-red)' }}>COACHES</span>
        </h1>
        <button onClick={handleCreate} style={{ padding: '0.8rem 1.5rem', background: 'var(--pyro-red)', border: 'none', color: 'var(--volcanic-black)', fontFamily: 'var(--font-display)', fontSize: '1.2rem', fontWeight: 900, cursor: 'pointer' }}>+ ADD COACH</button>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
        {items.map(item => (
          <div key={item.id} style={{ background: 'var(--surface)', padding: '1.5rem', borderLeft: `4px solid ${item.color || 'var(--pyro-red)'}` }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1rem' }}>
              <div>
                <label style={{ display: 'block', fontSize: '0.7rem', color: 'rgba(245,240,235,0.5)', marginBottom: '0.3rem' }}>NAME</label>
                <input value={item.name} onChange={e => handleUpdate(item.id, 'name', e.target.value)} style={{ width: '100%', padding: '0.5rem', background: 'var(--volcanic-black)', color: 'white', border: '1px solid rgba(255,255,255,0.1)' }} />
              </div>
              <div>
                <label style={{ display: 'block', fontSize: '0.7rem', color: 'rgba(245,240,235,0.5)', marginBottom: '0.3rem' }}>ROLE</label>
                <input value={item.role} onChange={e => handleUpdate(item.id, 'role', e.target.value)} style={{ width: '100%', padding: '0.5rem', background: 'var(--volcanic-black)', color: 'white', border: '1px solid rgba(255,255,255,0.1)' }} />
              </div>
              <div style={{ gridColumn: '1 / -1' }}>
                <label style={{ display: 'block', fontSize: '0.7rem', color: 'rgba(245,240,235,0.5)', marginBottom: '0.3rem' }}>BIO</label>
                <textarea rows={3} value={item.bio} onChange={e => handleUpdate(item.id, 'bio', e.target.value)} style={{ width: '100%', padding: '0.5rem', background: 'var(--volcanic-black)', color: 'white', border: '1px solid rgba(255,255,255,0.1)' }} />
              </div>
              <div>
                <label style={{ display: 'block', fontSize: '0.7rem', color: 'rgba(245,240,235,0.5)', marginBottom: '0.3rem' }}>COLOR (HEX)</label>
                <input value={item.color} onChange={e => handleUpdate(item.id, 'color', e.target.value)} style={{ width: '100%', padding: '0.5rem', background: 'var(--volcanic-black)', color: 'white', border: '1px solid rgba(255,255,255,0.1)' }} />
              </div>
              <div>
                <label style={{ display: 'block', fontSize: '0.7rem', color: 'rgba(245,240,235,0.5)', marginBottom: '0.3rem' }}>IMAGE URL</label>
                <input value={item.image} onChange={e => handleUpdate(item.id, 'image', e.target.value)} style={{ width: '100%', padding: '0.5rem', background: 'var(--volcanic-black)', color: 'white', border: '1px solid rgba(255,255,255,0.1)' }} />
              </div>
              {/* Note: Specialties not fully impl as array edit yet for simplicity, it's just a demo admin */}
            </div>
            <button onClick={() => handleDelete(item.id)} style={{ background: 'transparent', border: '1px solid var(--pyro-red)', color: 'var(--pyro-red)', padding: '0.4rem 1rem', cursor: 'pointer', fontFamily: 'var(--font-body)', fontSize: '0.8rem' }}>DELETE</button>
          </div>
        ))}
      </div>
    </div>
  );
}
