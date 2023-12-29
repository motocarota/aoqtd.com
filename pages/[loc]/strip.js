import path from 'path';
import fs from 'fs';
import Gallery from '@/components/Gallery';
import {LOCALES} from '@/app.config';

export default function Strip({pages}) {
	return (
		<Gallery pages={pages} comic={'strips'} width={600} />
	);
}

export function getStaticProps() {
	const postsDirectory = path.join(process.cwd(), './public/strips');
	const filenames = fs.readdirSync(postsDirectory);

	return {
		props: {
			pages: filenames,
		},
	};
}

export function getStaticPaths() {
	return {
		paths: LOCALES.map(l => `/${l}/monsters`),
		fallback: false,
	};
}
