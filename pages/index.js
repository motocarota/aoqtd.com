import path from 'path';
import fs from 'fs';
import Gallery from '@/components/Gallery';
import generateRssFeed from '@/utils/generateFeed';

export default function Home({pages}) {
	return (
		<>
			<main>
				<Gallery pages={pages} comic={'comic/en'} width={800} />
			</main>
		</>
	);
}

export function getStaticProps() {
	const postsDirectory = path.join(process.cwd(), './public/comic/en');
	const filenames = fs.readdirSync(postsDirectory);
	generateRssFeed(filenames);

	return {
		props: {
			pages: filenames,
		},
	};
}
