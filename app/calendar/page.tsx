import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Cursor from '@/components/Cursor'
import { getCMSContent, getCMSCollection } from '@/lib/cms'

export default async function CalendarPage() {
  const content = await getCMSContent('calendar', {
    page_title: 'CLASS\nCALENDAR',
    page_description: 'Crush your goals with our structured schedule. Find the perfect session that fits your lifestyle.'
  });

  const timetable = await getCMSCollection('timetable') || [];
  const days = ['MONDAY', 'TUESDAY', 'WEDNESDAY', 'THURSDAY', 'FRIDAY', 'SATURDAY', 'SUNDAY'];
  
  // Extract unique times and sort them
  const timesSet = new Set<string>();
  timetable.forEach(t => timesSet.add(t.time));
  
  const parseTime = (timeStr: string) => {
    const [time, period] = timeStr.split(' ');
    const [hours, minutes] = time.split(':').map(Number);
    let totalMinutes = (hours % 12) * 60 + (minutes || 0);
    if (period === 'PM') totalMinutes += 12 * 60;
    return totalMinutes;
  };
  
  const sortedTimes = Array.from(timesSet).sort((a, b) => parseTime(a) - parseTime(b));

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
                {sortedTimes.map((time, i) => (
                  <tr key={i} style={{ borderBottom: '1px solid rgba(245,240,235,0.1)' }}>
                    <td style={{ padding: '1.5rem 1rem', fontFamily: 'var(--font-display)', color: 'var(--ash-white)', fontWeight: 900, whiteSpace: 'nowrap' }}>
                      {time}
                    </td>
                    {days.map(day => {
                      const session = timetable.find(t => t.day === day && t.time === time);
                      return (
                        <td key={day} style={{ padding: '1.5rem 1rem' }}>
                          {session ? (
                            <div style={{ 
                              background: 'rgba(255,34,0,0.1)', 
                              border: `1px solid ${session.color || 'var(--pyro-red)'}`,
                              padding: '0.8rem',
                              fontFamily: 'var(--font-body)',
                              display: 'flex',
                              flexDirection: 'column',
                              alignItems: 'center',
                              gap: '0.3rem'
                            }}>
                              <span style={{ 
                                fontSize: '0.8rem',
                                letterSpacing: '0.1em',
                                color: session.color || 'var(--pyro-red)',
                                fontWeight: 700 
                              }}>{session.className}</span>
                              <span style={{ fontSize: '0.6rem', color: 'rgba(245,240,235,0.6)' }}>
                                {session.trainer}
                              </span>
                              <span style={{ fontSize: '0.55rem', padding: '0.15rem 0.4rem', background: 'rgba(255,255,255,0.1)', borderRadius: '2px' }}>
                                {session.duration}
                              </span>
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
