'use client'

import { useState, useEffect } from 'react';

export default function CMSForm({ section, title, fields }: { section: string, title: string, fields: string[] }) {
  const [data, setData] = useState<Record<string, string>>({});
  const [loading, setLoading] = useState(false);
  const [saving, setSaving] = useState(false);
  const [message, setMessage] = useState('');

  useEffect(() => {
    // Fetch current data for this section
    const fetchContent = async () => {
      setLoading(true);
      try {
        const res = await fetch(`/api/cms?section=${section}`);
        if (res.ok) {
          const json = await res.json();
          setData(json.data || {});
        }
      } catch (err) {
        console.error(err);
      }
      setLoading(false);
    };
    fetchContent();
  }, [section]);

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);
    setMessage('');
    try {
      const res = await fetch('/api/cms', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ section, data })
      });
      if (res.ok) {
        setMessage('Changes saved successfully!');
      } else {
        setMessage('Error saving to Supabase. Check your connection.');
      }
    } catch (err) {
      setMessage('Failed to save content.');
    }
    setSaving(false);
    setTimeout(() => setMessage(''), 3000);
  };

  if (loading) return <div style={{ color: 'var(--ash-white)', fontFamily: 'var(--font-body)' }}>Loading {title}...</div>;

  return (
    <div style={{ background: 'var(--surface)', padding: '2rem', border: '1px solid rgba(245,240,235,0.1)' }}>
      <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '1.5rem', fontWeight: 900, marginBottom: '1.5rem', color: 'var(--ember-orange)' }}>
        {title}
      </h2>
      <form onSubmit={handleSave} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        {fields.map(field => (
          <div key={field} style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            <label style={{ fontFamily: 'var(--font-body)', fontSize: '0.8rem', color: 'rgba(245,240,235,0.8)', textTransform: 'uppercase' }}>
              {field.replace('_', ' ')}
            </label>
            {field.includes('description') || field.includes('mission') ? (
              <textarea
                value={data[field] || ''}
                onChange={e => setData(prev => ({ ...prev, [field]: e.target.value }))}
                rows={4}
                style={{ padding: '0.8rem', background: 'var(--volcanic-black)', outline: 'none', border: '1px solid rgba(245,240,235,0.2)', color: 'white', fontFamily: 'var(--font-body)', resize: 'vertical' }}
              />
            ) : (
              <input
                type="text"
                value={data[field] || ''}
                onChange={e => setData(prev => ({ ...prev, [field]: e.target.value }))}
                style={{ padding: '0.8rem', background: 'var(--volcanic-black)', outline: 'none', border: '1px solid rgba(245,240,235,0.2)', color: 'white', fontFamily: 'var(--font-body)' }}
              />
            )}
          </div>
        ))}
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginTop: '1rem' }}>
          <button type="submit" disabled={saving} style={{
            padding: '1rem 2rem',
            background: 'linear-gradient(135deg, var(--pyro-red), var(--ember-orange))',
            color: 'var(--volcanic-black)',
            border: 'none',
            fontFamily: 'var(--font-display)',
            fontSize: '1rem',
            fontWeight: 900,
            cursor: saving ? 'not-allowed' : 'pointer',
            opacity: saving ? 0.7 : 1
          }}>
            {saving ? 'SAVING...' : 'SAVE CHANGES'}
          </button>
          {message && (
            <span style={{ color: message.includes('Error') || message.includes('Failed') ? 'var(--pyro-red)' : '#4CAF50', fontFamily: 'var(--font-body)', fontSize: '0.9rem' }}>
              {message}
            </span>
          )}
        </div>
      </form>
    </div>
  )
}
