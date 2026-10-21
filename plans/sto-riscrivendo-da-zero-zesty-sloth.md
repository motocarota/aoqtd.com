# Revisione TODO.md — cosa manca

## Context

L'utente sta riscrivendo da zero www.aoqtd.com (SvelteKit + Tailwind) e ha
chiesto solo di rileggere `TODO.md` e confermare che non manchi nulla,
confrontandolo con lo stato reale del codice. Non è stata richiesta
implementazione: questo file riassume i risultati dell'esplorazione ed
elenca cosa proporrei di aggiungere al TODO, in ordine di urgenza.

## 🔴 Bloccante — impatta le voci "setup pages deploy" / "expose gh/gl pages" già in TODO

- **`pnpm build` fallisce oggi.** L'adapter è `@sveltejs/adapter-static`
  (`svelte.config.js`), che richiede tutte le rotte prerenderizzabili, ma
  `src/routes/c[chapter]-p[page]/+page.ts` usa `navigator.language` nel
  `load()` universale per scegliere la variante IT/EN della tavola — questo
  non è disponibile in fase di prerender/SSR e SvelteKit segnala tutte le
  rotte come dinamiche. **Va risolto prima di poter fare deploy statico**,
  quindi le voci "nuovo repo", "expose pages", "setup deploy", "dns" sono
  di fatto bloccate da questo bug non presente in TODO.md.
- **RSS feed punta a localhost**: `src/routes/rss/+server.ts` ha
  `SITE_URL = 'http://localhost:5173'` hardcoded, con l'URL di produzione
  commentato. Da sistemare prima di andare live (feed altrimenti inutile
  in produzione).

## 🟠 Da aggiungere al TODO — gap reali non coperti

- **SEO assente**: nessun `<title>`/meta description per pagina, nessun
  Open Graph/Twitter card, nessuna `sitemap.xml` (solo un `robots.txt`
  vuoto che non la referenzia). `src/app.html` e `+layout.svelte` non
  impostano head per pagina.
- **Nessuna pagina 404/errore custom** (`+error.svelte` mancante ovunque).
- **Privacy policy / cookie consent mancanti**, mentre Mixpanel è già
  attivo in produzione (token hardcoded nel sorgente, non da env) e
  newsletter è in programma — rilevante GDPR con pubblico IT/UE.
- **Link rotti nel Footer**: punta a `/contribute` e `/other-webcomics`,
  rotte inesistenti (quelle reali sono `/join` e `/links`; l'Header usa
  già i path corretti).
- **Layout mobile fragile**: `.content` in `app.css` ha `width`/`max-width`
  fissi a 700px senza media query — rischio overflow su schermi piccoli,
  nonostante commit precedenti "mobile ready" / "fix comic width to 700px".
- **`scripts/generate-comics.js` obsoleto**: scansiona `static/comic/en/*`
  (struttura non più esistente, le immagini sono ora flat in
  `static/comic/aoqtd-{en,it}-*.webp`) e scrive un JSON non più importato
  da nessuna parte — probabilmente da rimuovere o riscrivere.
- **i18n è solo un hack sulle immagini**: lo switch IT/EN avviene solo
  sostituendo il filename dell'immagine via `navigator.language`, il resto
  della UI resta fisso in inglese e `<html lang="en">` è hardcoded. Se
  l'obiettivo è un sito realmente bilingue va ripensato (ed è comunque
  la causa del bug di build sopra).
- **Nessun test e nessuna CI** (no Vitest/Playwright, no
  `.github/workflows`) — se il sito va in produzione con deploy automatico
  su GH/GL Pages, manca un check minimo prima del deploy.
- **PWA/icone assenti**: solo un favicon SVG, nessun manifest.json, nessun
  set di icone per dispositivi.

## 🟡 Minori / nice-to-have

- Immagini senza `srcset`/dimensioni responsive, niente `loading="lazy"`
  sull'immagine principale della tavola (accettabile se sempre above-the-fold,
  ma da verificare).
- `aria-labelledby="comments-heading"` in `Comments.svelte` punta a un id
  che non esiste nel markup.
- Alt text generici su alcune immagini (banner header, chapter cards).

## Non necessario segnalare

- Il TODO menziona "migrare via da instantdb" per like/dislike, ma
  InstantDB non è mai stato integrato nel codice attuale — like/dislike e
  commenti sono già solo stato locale mock (`LikeDislike.svelte`,
  `Comments.svelte`, con TODO inline `// fetch da idb`). Coerente con la
  voce TODO già presente, nessuna azione aggiuntiva da segnalare qui oltre
  a quanto già pianificato.

## Prossimo passo (confermato dall'utente)

Aggiungere tutte le voci sopra a `TODO.md`, in nuove sezioni per
priorità ("BLOCCANTI", "DA AGGIUNGERE", "MINORI"), senza toccare il
codice — solo aggiornamento della lista, nessuna implementazione.
