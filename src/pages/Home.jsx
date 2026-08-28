import { Link } from 'react-router-dom'
import { services, customers } from '../data/content.js'

export default function Home() {
  return (
    <>
      <section className="hero">
        <div className="container hero__content">
          <span className="eyebrow">Extern IT-avdelning för små och medelstora företag</span>
          <h1>Er IT ska vara osynlig — tills ni behöver den.</h1>
          <p>
            BlackVault sköter helpdesk, Microsoft 365, Azure och nätverket åt er,
            så att teamet kan fokusera på jobbet istället för att felsöka det.
          </p>
          <div className="hero__actions">
            <Link to="/kontakt" className="btn btn-primary">Kontakta oss</Link>
            <Link to="/tjanster" className="btn btn-secondary">Se tjänster</Link>
          </div>
        </div>
        <DialGraphic />
      </section>

      <section className="customers">
        <div className="container">
          <span className="eyebrow">Våra kunder</span>
          <div className="customers__row" style={{ marginTop: 24 }}>
  {customers.map((c) => (
    <div className="customer-slot customer-slot--image" key={c.src}>
      <img src={c.src} alt={c.alt} />
    </div>
  ))}
</div>
          <p style={{ marginTop: 16, fontSize: 13 }}>
            Platshållare — ersätts med riktiga kundlogotyper.
          </p>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">Vad vi erbjuder</span>
            <h2>Ett komplett IT-driftteam, utan att behöva anställa ett.</h2>
          </div>
          <div className="card-grid">
            {services.slice(0, 4).map((s) => (
              <div className="card" key={s.code}>
                <span className="card__code">{s.code}</span>
                <h3>{s.title}</h3>
                <p>{s.text}</p>
              </div>
            ))}
          </div>
          <div style={{ marginTop: 32 }}>
            <Link to="/tjanster" className="btn btn-secondary">Alla tjänster →</Link>
          </div>
        </div>
      </section>
    </>
  )
}

function DialGraphic() {
  return (
    <svg
      className="hero__dial"
      width="380"
      height="380"
      viewBox="0 0 380 380"
      aria-hidden="true"
    >
      <circle cx="190" cy="190" r="170" fill="none" stroke="var(--border)" strokeWidth="1.2" />
      <circle cx="190" cy="190" r="120" fill="none" stroke="var(--border)" strokeWidth="1.2" />
      <circle cx="190" cy="190" r="70" fill="none" stroke="var(--accent)" strokeWidth="1.4" />
      {Array.from({ length: 24 }).map((_, i) => {
        const angle = (i / 24) * Math.PI * 2
        const x1 = 190 + Math.cos(angle) * 170
        const y1 = 190 + Math.sin(angle) * 170
        const x2 = 190 + Math.cos(angle) * 160
        const y2 = 190 + Math.sin(angle) * 160
        return (
          <line
            key={i}
            x1={x1}
            y1={y1}
            x2={x2}
            y2={y2}
            stroke="var(--border)"
            strokeWidth="1.2"
          />
        )
      })}
      <circle cx="190" cy="190" r="3" fill="var(--accent)" />
    </svg>
  )
}
