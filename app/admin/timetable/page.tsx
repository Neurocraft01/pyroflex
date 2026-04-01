'use client'
import { useState, useEffect } from 'react';

export default function TimetableAdmin() {
  const [items, setItems] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchItems = async () => {
    setLoading(true);
    const res = await fetch('/api/admin/collection?name=timetable');
    const json = await res.json();
    setItems(json.items || []);
    setLoading(false);
  };

  useEffect(() => {
    fetchItems();
  }, []);

  const handleDelete = async (id: string) => {
    if (!confirm('Are you sure?')) return;
    await fetch(`/api/admin/collection?name=timetable&id=${id}`, { method: 'DELETE' });
    fetchItems();
  };

  const handleUpdate = async (id: string, field: string, value: any) => {
    await fetch(`/api/admin/collection?name=timetable&id=${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ [field]: value }),
    });
    fetchItems();
  };

  const handleCreate = async () => {
    const newItem = {
      className: 'NEW CLASS',
      day: 'MONDAY',
      time: '06:00 AM',
      duration: '45 MIN',
      trainer: 'COACH NAME',
      capacity: 20,
      difficulty: 'ALL LEVELS',
      color: '#FF2200',
      category: 'CLASS'
    };
    await fetch('/api/admin/collection?name=timetable', {
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
          MANAGE <span style={{ color: 'var(--pyro-red)' }}>TIMETABLE</span>
        </h1>
        <button onClick={handleCreate} style={{ padding: '0.8rem 1.5rem', background: 'var(--pyro-red)', border: 'none', color: 'var(--volcanic-black)', fontFamily: 'var(--font-display)', fontSize: '1.2rem', fontWeight: 900, cursor: 'pointer' }}>+ ADD CLASS</button>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '1.5rem' }}>
        {items.sort((a,b)=>a.day.localeCompare(b.day)).map(item => (
          <div key={item.id} style={{ background: 'var(--surface)', padding: '1rem', borderTop: `4px solid ${item.color}` }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem', marginBottom: '1rem' }}>
              <div>
                <label style={{ fontSize: '0.65rem', color: 'rgba(255,255,255,0.4)' }}>CLASS NAME</label>
                <input value={item.className} onChange={e => handleUpdate(item.id, 'className', e.target.value)} style={{ width: '100%', padding: '0.4rem', background: '#0a0a0a', color: 'white', border: '1px solid #333' }} />
              </div>
              <div style={{ display: 'flex', gap: '0.5rem' }}>
                <div style={{ flex: 1 }}>
                  <label style={{ fontSize: '0.65rem', color: 'rgba(255,255,255,0.4)' }}>DAY</label>
                  <select value={item.day} onChange={e => handleUpdate(item.id, 'day', e.target.value)} style={{ width: '100%', padding: '0.4rem', background: '#0a0a0a', color: 'white', border: '1px solid #333' }}>
                    {['MONDAY','TUESDAY','WEDNESDAY','THURSDAY','FRIDAY','SATURDAY','SUNDAY'].map(d=><option key={d}>{d}</option>)}
                  </select>
                </div>
                <div style={{ flex: 1 }}>
                  <label style={{ fontSize: '0.65rem', color: 'rgba(255,255,255,0.4)' }}>TIME</label>
                  <input value={item.time} onChange={e => handleUpdate(item.id, 'time', e.target.value)} style={{ width: '100%', padding: '0.4rem', background: '#0a0a0a', color: 'white', border: '1px solid #333' }} />
                </div>
              </div>
              <div>
                <label style={{ fontSize: '0.65rem', color: 'rgba(255,255,255,0.4)' }}>TRAINER</label>
                <input value={item.trainer} onChange={e => handleUpdate(item.id, 'trainer', e.target.value)} style={{ width: '100%', padding: '0.4rem', background: '#0a0a0a', color: 'white', border: '1px solid #333' }} />
              </div>
            </div>
            <button onClick={() => handleDelete(item.id)} style={{ background: 'none', border: '1px solid var(--pyro-red)', color: 'var(--pyro-red)', padding: '0.3rem 0.8rem', fontSize: '0.7rem', cursor: 'pointer' }}>DELETE</button>
          </div>
        ))}
      </div>
    </div>
  );
}
