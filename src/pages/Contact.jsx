import { useState } from 'react'

export default function Contact() {
  const [status, setStatus] = useState('idle') // idle | sent

  function handleSubmit(e) {
    e.preventDefault()
    setStatus('sent')
  }

  return (
    <section style={{ paddingTop: 64 }}>
      <div className="container split">
        <div>
          <span className="eyebrow">Kontakt</span>
          <h2 style={{ marginTop: 12, fontSize: 'clamp(28px, 4vw, 38px)' }}>
            Hör av er, så återkommer vi.
          </h2>
          <p style={{ marginTop: 16, maxWidth: 420 }}>
            Oavsett om ni behöver löpande support eller hjälp med ett enskilt projekt —
            berätta vad ni behöver så tar vi det därifrån.
          </p>

          <dl className="contact-info">
            <div>
              <dt>Telefon</dt>
              <dd>+46 70 000 00 00</dd>
            </div>
            <div>
              <dt>E-post</dt>
              <dd>kontakt@blackvault.se</dd>
            </div>
          </dl>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          <label>
            Namn
            <input type="text" name="name" placeholder="Ditt namn" required />
          </label>
          <label>
            E-post
            <input type="email" name="email" placeholder="din@epost.se" required />
          </label>
          <label>
            Meddelande
            <textarea name="message" rows="5" placeholder="Vad kan vi hjälpa er med?" required />
          </label>

          <button type="submit" className="btn btn-primary" disabled={status === 'sent'}>
            {status === 'sent' ? 'Skickat (exempel)' : 'Skicka meddelande'}
          </button>

          <p className="form-note">
            Det här är en exempelsida. Formuläret går att fylla i, men skickar inget
            riktigt mail ännu.
          </p>
        </form>
      </div>
    </section>
  )
}
