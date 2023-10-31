import extractValues from '@/utils/extractValues';
import getComicPage from '@/utils/getComicPage';
import mdToHtml from '@/utils/mdToHtml';
import {getPostByParams} from '@/api/posts';
import {getAllPages} from '@/api/comics';
import Post from '@/components/Post';
import Comic from '@/components/Comic';

export default function Home({
	comic,
	md,
	locale,
}) {
	return (
		<>
			<Comic comic={comic} locale={locale} />
			<Post md={md} />
		</>
	);
}

// Returns all the static data for the page
export async function getStaticProps({locale, params}) {
	// Read post data
	const post = getPostByParams({locale, params});
	const md = await mdToHtml(post.content || '');

	// Read comic page data
	const pages = getAllPages({locale});
	const comic = getComicPage({params, pages, locale});

	return {
		props: {
			comic,
			md,
			locale,
		},
	};
}

// Returns all the valid pages from the combination chapter + page dynamic paths
export function getStaticPaths({locales}) {
	const paths = locales.reduce(
		(acc, locale) => {
			const pages = getAllPages({locale});
			return [
				...acc,
				...pages.map(
					fileName => ({
						params: extractValues(fileName),
						locale,
					}),
				),
			];
		},
		[],
	);

	return {
		paths,
		fallback: false,
	};
}
