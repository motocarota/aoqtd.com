'use-client';

import extractValues from '@/utils/extractValues';
import getComicPage from '@/utils/getComicPage';
import mdToHtml from '@/utils/mdToHtml';
import {getPostByParams} from '@/api/posts';
import {getAllPages} from '@/api/comics';
import Post from '@/components/Post';
import Comic from '@/components/Comic';
import {LOCALES} from '@/app.config';
import {ReactCusdis} from 'react-cusdis';
import {Box} from '@mantine/core';

export default function Home({
	comic,
	md,
}) {
	const {
		page, chapter, loc,
	} = comic;
	return (
		<>
			<Comic comic={comic} />
			<Post md={md} />
			<Box maw={900} mx='auto' p='md' bg='#fafafa' style={{borderRadius: 10}}>
				<ReactCusdis
					attrs={{
						host: 'https://cusdis.com',
						appId: '62bda7f9-1080-4ecc-b5e7-cb8c9b9fb4b0',
						pageId: `${loc}/${chapter}/${page}`,
						pageTitle: `${loc}/${chapter}/${page}`,
						pageUrl: `${loc}/${chapter}/${page}`,
					}}
				/>
			</Box>
		</>
	);
}

// Returns all the static data for the page
export async function getStaticProps({params}) {
	// Read post data
	const post = getPostByParams({params});
	const md = await mdToHtml(post.content || '');

	// Read comic page data
	const pages = getAllPages(params);
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
	const paths = LOCALES.reduce(
		(acc, loc) => {
			const pages = getAllPages({loc});
			return [
				...acc,
				...pages.map(
					fileName => ({
						params: extractValues(fileName),
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
