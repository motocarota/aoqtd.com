import path from 'path';
import fs from 'fs';
import Grid from '@/components/Grid';

export default function Monsters({pages}) {
	return (
		<Grid pages={pages} comic='monsters' />
	);
}

export function getStaticProps() {
	const postsDirectory = path.join(process.cwd(), './public/monsters');
	const filenames = fs.readdirSync(postsDirectory);

	return {
		props: {
			pages: filenames,
		},
	};
}
