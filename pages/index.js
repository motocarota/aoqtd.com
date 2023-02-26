import path from 'path';
import fs from 'fs';
import Head from 'next/head'
import Gallery from '@/components/Gallery'
import generateRssFeed from '@/utils/generateFeed';

export default function Home({ pages }) {
  return (
    <>
      <Head>
        <title>Another One Quest to Dust</title>
        <meta name="description" content="and yet another stupid fantasy webcomic" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <main>
        <Gallery pages={pages} comic={'comic/en'} width={800} />
      </main>
    </>
  )
}

export function getStaticProps() {
  const postsDirectory = path.join(process.cwd(), './public/comic/en');
  const filenames = fs.readdirSync(postsDirectory);
  generateRssFeed(filenames);

  return {
    props: {
      pages: filenames,
    },
  }
}
