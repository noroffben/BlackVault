import { useEffect, useState } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import { namedTeam, openRoles } from '../data/content.js'
import './header.css'

const navLinks = [
  { to: '/', label: 'Hem' },
  { to: '/tjanster', label: 'Tjänster' },
  { to: '/om-oss', label: 'Om oss' },
  { to: '/kontakt', label: 'Kontakt' },
]

export default function Header() {
  const [open, setOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    setOpen(false)
  }, [location.pathname])

  useEffect(() => {
    function onKey(e) {
      if (e.key === 'Escape') setOpen(false)
    }
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = open ? 'hidden' : ''
    return () => document.removeEventListener('keydown', onKey)
  }, [open])

  return (
    <header className="site-header">
      <div className="container site-header__row">
        <NavLink to="/" className="wordmark" aria-label="BlackVault, till startsidan">
          <VaultMark />
          BLACKVAULT
        </NavLink>

        <button
          className={`hamburger ${open ? 'is-open' : ''}`}
          aria-label={open ? 'Stäng meny' : 'Öppna meny'}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      <div className={`menu-overlay ${open ? 'is-open' : ''}`}>
        <div className="container menu-overlay__grid">
          <nav aria-label="Huvudmeny">
            <span className="eyebrow">Meny</span>
            <ul className="menu-links">
              {navLinks.map((link) => (
                <li key={link.to}>
                  <NavLink to={link.to} className="menu-links__item">
                    {link.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>

          <div className="menu-positions">
            <span className="eyebrow">Positioner i bolaget</span>
            <ul>
              {namedTeam.map((person) => (
                <li key={person.name}>
                  <strong>{person.title}</strong>
                  <span>{person.name}</span>
                </li>
              ))}
              {openRoles.map((role) => (
                <li key={role.title}>
                  <strong>{role.title}</strong>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </header>
  )
}

function VaultMark() {
  return (
    <svg width="22" height="22" viewBox="0 0 32 32" aria-hidden="true" className="vault-mark">
      <circle cx="16" cy="16" r="14.5" fill="none" stroke="var(--navy)" strokeWidth="1.4" />
      <circle cx="16" cy="16" r="8" fill="none" stroke="var(--accent)" strokeWidth="1.4" />
      <circle cx="16" cy="16" r="1.6" fill="var(--accent)" />
      <line x1="16" y1="16" x2="16" y2="8.5" stroke="var(--accent)" strokeWidth="1.4" strokeLinecap="round" />
    </svg>
  )
}
