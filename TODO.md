### TODO AOQTD SITE


- allegare dei mdx alle pagine del fumetto

  usare la stessa struttura?
    /blog/<chapter>/<page>.mdx
    fare la fetch durare il getStaticProps

- creare uno script per convertire in .webp

- convertire tutte le immagini in .webp

- aggiornare il tema: piu' colore, meno sterile

- definire homepage
    intro text
    splash image
    chapter select?

- language selector automatico?

- sezione raccomandazioni (?)

- implementare i commenti usando upstash free tier
  https://vercel.com/templates/next.js/blog-with-comments
  https://upstash.com/pricing
  https://auth0.com/pricing

  vercel free trial? https://vercel.com/pricing



DONE
---

- page navigation
  la gallery deve leggere la pagina corrente dall'url della pagina

    aoqtd.com/1/22 --> capitolo 1, pagina 22

    salvare il fumetto nel seguente formato:
     / comic / <lang> / <chapter> / aoqtd-<chapter>-<page>.webp