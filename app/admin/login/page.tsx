'use client'
import { useState } from 'react';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';

export default function AdminLogin() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    const res = await signIn('credentials', {
      redirect: false,
      email,
      password,
    });
    
    if (res?.error) {
      setError('Invalid credentials');
    } else {
      router.push('/admin');
    }
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '80vh' }}>
      <form onSubmit={handleLogin} style={{ width: '100%', maxWidth: '400px', background: 'var(--surface)', padding: '3rem', border: '1px solid rgba(255, 34, 0, 0.2)' }}>
        <h1 style={{ fontFamily: 'var(--font-display)', fontSize: '2.5rem', fontWeight: 900, marginBottom: '2rem', textAlign: 'center' }}>
          ADMIN <span style={{ color: 'var(--pyro-red)' }}>LOGIN</span>
        </h1>
        {error && <p style={{ color: 'var(--pyro-red)', marginBottom: '1rem', fontFamily: 'var(--font-body)', fontSize: '0.8rem' }}>{error}</p>}
        
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            <label style={{ fontFamily: 'var(--font-body)', fontSize: '0.7rem', color: 'rgba(245,240,235,0.8)' }}>EMAIL</label>
            <input 
              type="email" 
              value={email}
              onChange={e => setEmail(e.target.value)}
              style={{ padding: '0.8rem', background: 'var(--volcanic-black)', outline: 'none', border: '1px solid rgba(245,240,235,0.2)', color: 'white', fontFamily: 'var(--font-body)' }} 
            />
          </div>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            <label style={{ fontFamily: 'var(--font-body)', fontSize: '0.7rem', color: 'rgba(245,240,235,0.8)' }}>PASSWORD</label>
            <input 
              type="password" 
              value={password}
              onChange={e => setPassword(e.target.value)}
              style={{ padding: '0.8rem', background: 'var(--volcanic-black)', outline: 'none', border: '1px solid rgba(245,240,235,0.2)', color: 'white', fontFamily: 'var(--font-body)' }} 
            />
          </div>
          
          <button type="submit" style={{
            marginTop: '1rem',
            padding: '1rem',
            background: 'linear-gradient(135deg, var(--pyro-red), var(--ember-orange))',
            color: 'var(--volcanic-black)',
            border: 'none',
            fontFamily: 'var(--font-display)',
            fontSize: '1.2rem',
            fontWeight: 900,
            cursor: 'pointer',
            letterSpacing: '0.1em'
          }}>
            SYSTEM OVERRIDE
          </button>
        </div>
      </form>
    </div>
  )
}
