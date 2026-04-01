import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Cursor from '@/components/Cursor'
import { getCMSContent } from '@/lib/cms'

export default async function CalendarPage() {
  const content = await getCMSContent('calendar', {
    page_title: 'CLASS\nCALENDAR',
    page_description: 'Crush your goals with our structured schedule. Find the perfect session that fits your lifestyle.'
  });

  const days = ['MONDAY', 'TUESDAY', 'WEDNESDAY', 'THURSDAY', 'FRIDAY', 'SATURDAY', 'SUNDAY']
  const schedule = [
    { time: '06:00 AM', classes: { MONDAY: 'HIIT', WEDNESDAY: 'HIIT', FRIDAY: 'STRENGTH' } },
    { time: '08:00 AM', classes: { TUESDAY: 'YOGA', THURSDAY: 'YOGA', SATURDAY: 'MOBILITY' } },
    { time: '05:00 PM', classes: { MONDAY: 'BOXING', WEDNESDAY: 'BOXING', FRIDAY: 'HIIT' } },
    { time: '07:00 PM', classes: { MONDAY: 'STRENGTH', TUESDAY: 'STRENGTH', WEDNESDAY: 'STRENGTH', THURSDAY: 'STRENGTH', FRIDAY: 'OPEN GYM' } },
  ]

  return (
    <>
      <Cursor />
      <Navbar />
      <main style={{ minHeight: '100vh', background: 'var(--volcanic-black)', color: 'var(--ash-white)', padding: '8rem 2rem 4rem' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h1 style={{ fontFamily: 'var(--font-display)', fontSize: '4rem', fontWeight: 900, marginBottom: '1rem', textTransform: 'uppercase', whiteSpace: 'pre-line' }}>
            {content.page_title}
          </h1>
          <p style={{ fontFamily: 'var(--font-body)', fontSize: '1.1rem', color: 'rgba(245,240,235,0.7)', marginBottom: '4rem', maxWidth: '600px', whiteSpace: 'pre-line' }}>
            {content.page_description}
          </p>

          <div style={{ overflowX: 'auto', background: 'var(--surface)', padding: '2rem', border: '1px solid rgba(255,34,0,0.2)' }}>
            <table style={{ width: '100%', minWidth: '800px', borderCollapse: 'collapse', textAlign: 'center' }}>
              <thead>
                <tr style={{ borderBottom: '2px solid var(--pyro-red)' }}>
                  <th style={{ padding: '1rem', fontFamily: 'var(--font-display)', color: 'var(--ember-orange)' }}>TIME</th>
                  {days.map(day => (
                    <th key={day} style={{ padding: '1rem', fontFamily: 'var(--font-display)', color: 'var(--ash-white)', letterSpacing: '0.1em' }}>
                      {day}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {schedule.map((slot, i) => (
                  <tr key={i} style={{ borderBottom: '1px solid rgba(245,240,235,0.1)' }}>
                    <td style={{ padding: '1.5rem 1rem', fontFamily: 'var(--font-display)', color: 'var(--ash-white)', fontWeight: 900, whiteSpace: 'nowrap' }}>
                      {slot.time}
                    </td>
                    {days.map(day => {
                      const className = (slot.classes as any)[day]
                      return (
                        <td key={day} style={{ padding: '1.5rem 1rem' }}>
                          {className ? (
                            <div style={{ 
                              background: 'rgba(255,34,0,0.1)', 
                              border: '1px solid var(--pyro-red)',
                              padding: '0.8rem',
                              fontFamily: 'var(--font-body)',
                              fontSize: '0.8rem',
                              letterSpacing: '0.1em',
                              color: 'var(--pyro-red)',
                              fontWeight: 700
                            }}>
                              {className}
                            </div>
                          ) : (
                            <span style={{ color: 'rgba(245,240,235,0.2)' }}>-</span>
                          )}
                        </td>
                      )
                    })}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
