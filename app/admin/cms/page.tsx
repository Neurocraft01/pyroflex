import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth/next";
import { redirect } from "next/navigation";
import CMSForm from "@/components/admin/CMSForm";

export default async function CMSPage() {
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect('/admin/login');
  }

  return (
    <div>
      <h1 style={{ fontFamily: 'var(--font-display)', fontSize: '3.5rem', fontWeight: 900, marginBottom: '2rem', textTransform: 'uppercase' }}>
        CONTENT <span style={{ color: 'var(--pyro-red)' }}>MANAGEMENT</span>
      </h1>
      <p style={{ fontFamily: 'var(--font-body)', color: 'rgba(245,240,235,0.7)', marginBottom: '3rem' }}>
        Edit the content of your pages here. The changes will be saved to your Supabase database and reflected on the live site.
      </p>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
        <CMSForm section="hero" title="Hero Section" fields={['title', 'subtitle', 'cta_text']} />
        <CMSForm section="about" title="About Section" fields={['heading', 'description', 'mission_statement']} />
        <CMSForm section="pricing" title="Pricing Structure" fields={['plan1_name', 'plan1_price', 'plan2_name', 'plan2_price']} />
        <CMSForm section="calendar" title="Calendar Info" fields={['page_title', 'page_description']} />
      </div>
    </div>
  )
}
