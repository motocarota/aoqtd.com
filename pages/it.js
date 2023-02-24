import path from 'path';
import fs from 'fs';
import styles from '@/styles/Home.module.css'
import Gallery from '@/components/Gallery'

export default function Home({ pages }) {
  
  return (
    <>
      <main className={styles.main}>
        <Gallery pages={pages} comic={'aoqtd'} lang={'it'} />
      </main>
    </>
  )
}

export function getStaticProps() {
  const postsDirectory = path.join(process.cwd(), './public/aoqtd/it');
  const filenames = fs.readdirSync(postsDirectory);

  return {
    props: {
      pages: filenames,
    },
  }
}
