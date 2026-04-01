import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth/next";
import { redirect } from "next/navigation";

export default async function AdminDashboard() {
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect('/admin/login');
  }

  return (
    <div>
      <h1 style={{ fontFamily: 'var(--font-display)', fontSize: '3.5rem', fontWeight: 900, marginBottom: '2rem' }}>
        SYSTEM <span style={{ color: 'var(--pyro-red)' }}>DASHBOARD</span>
      </h1>
      
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem', marginBottom: '4rem' }}>
        {[
          { label: 'ACTIVE MEMBERS', value: '432' },
          { label: 'MONTHLY REVENUE', value: '₹12.4L' },
          { label: 'NEW LEADS', value: '24' },
          { label: 'COACHES', value: '8' }
        ].map((stat, i) => (
          <div key={i} style={{ padding: '2rem', background: 'var(--surface)', borderLeft: '4px solid var(--pyro-red)' }}>
            <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.7rem', letterSpacing: '0.15em', color: 'rgba(245,240,235,0.6)', marginBottom: '0.5rem' }}>
              {stat.label}
            </p>
            <p style={{ fontFamily: 'var(--font-display)', fontSize: '3rem', fontWeight: 900, color: 'var(--ash-white)', lineHeight: 1 }}>
              {stat.value}
            </p>
          </div>
        ))}
      </div>

      <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '2rem', fontWeight: 900, marginBottom: '1.5rem', color: 'var(--ember-orange)' }}>
        RECENT CHECKOUTS (SUPABASE DB COMING SOON)
      </h2>
      <div style={{ background: 'var(--surface)', padding: '2rem', border: '1px solid rgba(245,240,235,0.1)' }}>
        <table style={{ width: '100%', textAlign: 'left', borderCollapse: 'collapse', fontFamily: 'var(--font-body)', fontSize: '0.8rem' }}>
          <thead>
            <tr style={{ borderBottom: '1px solid rgba(255,34,0,0.5)', color: 'var(--pyro-red)' }}>
              <th style={{ padding: '1rem', letterSpacing: '0.1em' }}>NAME</th>
              <th style={{ padding: '1rem', letterSpacing: '0.1em' }}>PLAN</th>
              <th style={{ padding: '1rem', letterSpacing: '0.1em' }}>STATUS</th>
              <th style={{ padding: '1rem', letterSpacing: '0.1em' }}>DATE</th>
            </tr>
          </thead>
          <tbody>
            {[
              { name: 'Rahul Sharma', plan: 'PYRO', status: 'ACTIVE', date: 'TODAY' },
              { name: 'Sneha Patil', plan: 'DARK MATTER', status: 'ACTIVE', date: 'YESTERDAY' },
            ].map((row, i) => (
              <tr key={i} style={{ borderBottom: '1px solid rgba(245,240,235,0.05)' }}>
                <td style={{ padding: '1rem', color: 'var(--ash-white)' }}>{row.name}</td>
                <td style={{ padding: '1rem', color: 'rgba(245,240,235,0.7)' }}>{row.plan}</td>
                <td style={{ padding: '1rem' }}><span style={{ padding: '0.2rem 0.5rem', background: 'rgba(255,107,0,0.2)', color: 'var(--ember-orange)', fontSize: '0.65rem', borderRadius: '4px' }}>{row.status}</span></td>
                <td style={{ padding: '1rem', color: 'rgba(245,240,235,0.4)' }}>{row.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
