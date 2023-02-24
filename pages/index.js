import path from 'path';
import fs from 'fs';
import Head from 'next/head'
import styles from '@/styles/Home.module.css'
import Gallery from '@/components/Gallery'

export default function Home({ pages }) {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <Gallery pages={pages} comic={'aoqtd'} lang={'en'} />
      </main>
    </>
  )
}

export function getStaticProps() {
  const postsDirectory = path.join(process.cwd(), './public/aoqtd/en');
  const filenames = fs.readdirSync(postsDirectory);

  return {
    props: {
      pages: filenames,
    },
  }
}
