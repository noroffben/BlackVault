import { namedTeam, openRoles } from '../data/content.js'

export default function About() {
  return (
    <>
      <section style={{ paddingTop: 64, paddingBottom: 48 }}>
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">Om oss</span>
            <h2>Ett litet team med fokus på att er IT bara fungerar.</h2>
          </div>
          <p style={{ maxWidth: 640, fontSize: 16 }}>
            BlackVault är ett IT-bolag som sköter drift, support och molntjänster åt företag
            som hellre lägger tiden på sin egen verksamhet än på IT-problem. Vi jobbar nära
            varje kund och växer teamet i takt med behovet.
          </p>
        </div>
      </section>

      <section style={{ paddingTop: 0 }}>
        <div className="container">
          <span className="eyebrow">Teamet</span>
          <div className="person-grid" style={{ marginTop: 24 }}>
            {namedTeam.map((person) => (
              <div className="person-card" key={person.name}>
                <div className="person-card__avatar">{person.name.slice(0, 1)}</div>
                <h3>{person.name}</h3>
                <span className="role">{person.title}</span>
                <p>{person.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <span className="eyebrow">Övriga roller i bolaget</span>
          <div className="role-list">
            {openRoles.map((role) => (
              <div className="role-list__item" key={role.title}>
                <strong>{role.title}</strong>
                <span>{role.text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
