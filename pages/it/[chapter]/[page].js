import extractValues from '@/utils/extractValues';
import getComicPage from '@/utils/getComicPage';
import mdToHtml from '@/utils/mdToHtml';
import {getPostById} from '@/api/posts';
import {getAllPages} from '@/api/comics';
import Post from '@/components/Post';
import Comic from '@/components/Comic';

export default function Home({
	comic,
	md,
}) {
	return (
		<>
			<Comic comic={comic} />
			<Post md={md} />
		</>
	);
}

// Returns all the static data for the page
export async function getStaticProps({params}) {
	// Read post data
	const post = getPostById(`post-${params.chapter}-${params.page}`);
	const md = await mdToHtml(post.content || '');

	// Read comic page data
	const pages = getAllPages();
	const comic = getComicPage({params, pages});

	return {
		props: {
			comic,
			md,
		},
	};
}

// Returns all the valid pages from the combination chapter + page dynamic paths
export function getStaticPaths() {
	const pages = getAllPages();
	const paths = pages.map(
		fileName => ({
			params: extractValues(fileName),
		}),
	);

	return {
		paths,
		fallback: false,
	};
}
