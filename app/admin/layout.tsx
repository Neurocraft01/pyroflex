import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth/next";
import { redirect } from "next/navigation";
import Link from 'next/link';

export default async function AdminLayout({ children }: { children: React.ReactNode }) {
  const session = await getServerSession(authOptions);

  return (
    <div style={{ display: 'flex', minHeight: '100vh', background: 'var(--volcanic-black)', color: 'var(--ash-white)' }}>
      {session && (
        <aside style={{ width: '250px', borderRight: '1px solid rgba(255,34,0,0.2)', padding: '2rem', display: 'flex', flexDirection: 'column', gap: '2rem', background: '#080808' }}>
          <div style={{ fontFamily: 'var(--font-display)', fontWeight: 900, fontSize: '1.8rem', letterSpacing: '0.1em' }}>
            ADMIN<span style={{ color: 'var(--pyro-red)' }}>PANEL</span>
          </div>
          <nav style={{ display: 'flex', flexDirection: 'column', gap: '1rem', fontFamily: 'var(--font-body)', fontSize: '0.8rem', letterSpacing: '0.1em' }}>
            <Link href="/admin" style={{ color: 'var(--ash-white)', textDecoration: 'none' }}>DASHBOARD</Link>
            <Link href="/admin/cms" style={{ color: 'var(--ash-white)', textDecoration: 'none' }}>EDIT PAGES</Link>
            <Link href="/" style={{ color: 'var(--pyro-red)', textDecoration: 'none', borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '1rem', marginTop: '1rem' }}>EXIT TO SITE</Link>
          </nav>
        </aside>
      )}
      <main style={{ flex: 1, padding: '3rem', overflowY: 'auto' }}>
        {children}
      </main>
    </div>
  )
}
