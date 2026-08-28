# BlackVault — exempelhemsida

Enkel React-sida (Vite) för BlackVault. Ljust, minimalistiskt tema.
Sidor: Hem (med "Våra kunder"), Tjänster, Om oss, Kontakt.
Hamburgermenyn visar navigering + vilka positioner som finns i bolaget.

## Köra lokalt

```bash
npm install
npm run dev
```

## Lägga till på GitHub

```bash
git init
git add .
git commit -m "Första versionen av BlackVault-sidan"
git branch -M main
git remote add origin <din-github-repo-url>
git push -u origin main
```

## Deploya på Render

1. Gå till Render → **New** → **Static Site**.
2. Koppla GitHub-repot.
3. Build command: `npm run build`
4. Publish directory: `dist`
5. Deploy.

Sidan använder `HashRouter` (adresser med `/#/tjanster` osv.), så den fungerar
direkt som statisk sajt på Render utan extra omskrivningsregler.

## Byta ut platshållare senare

- **Kundlogotyper**: lägg bilderna i `public/customers/` och byt ut
  `customerPlaceholders`-listan i `src/data/content.js` mot `<img>`-taggar.
- **Teamfoton**: lägg bilderna i `public/team/` och referera dem i
  `namedTeam` i `src/data/content.js`.
- **Kontaktuppgifter**: telefon/e-post i `src/pages/Contact.jsx`.
- **Kontaktformulär**: kopplas mot t.ex. Formspree eller en egen backend
  när sidan ska bli skarp — just nu skickar det inget.
