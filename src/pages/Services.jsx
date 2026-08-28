import { Link } from 'react-router-dom'
import { services } from '../data/content.js'

export default function Services() {
  return (
    <section style={{ paddingTop: 64 }}>
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">Tjänster</span>
          <h2>Allt som håller er IT-miljö igång, samlat på ett ställe.</h2>
        </div>

        <div className="card-grid">
          {services.map((s) => (
            <div className="card" key={s.code}>
              <span className="card__code">{s.code}</span>
              <h3>{s.title}</h3>
              <p>{s.text}</p>
            </div>
          ))}
        </div>

        <div style={{ marginTop: 40 }}>
          <Link to="/kontakt" className="btn btn-primary">Boka ett samtal</Link>
        </div>
      </div>
    </section>
  )
}
