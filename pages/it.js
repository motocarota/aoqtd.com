import path from 'path';
import fs from 'fs';
import Gallery from '@/components/Gallery';

export default function Home({ pages }) {
  return (
    <Gallery pages={pages} comic="comic/it" width={800} />
  );
}

export function getStaticProps() {
  const postsDirectory = path.join(process.cwd(), './public/comic/it');
  const filenames = fs.readdirSync(postsDirectory);

  return {
    props: {
      pages: filenames,
    },
  };
}
