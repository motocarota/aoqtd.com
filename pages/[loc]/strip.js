import path from 'path';
import fs from 'fs';
import Gallery from '@/components/Gallery';

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
