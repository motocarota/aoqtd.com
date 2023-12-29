import extractValues from '@/utils/extractValues';
import getComicPage from '@/utils/getComicPage';
import mdToHtml from '@/utils/mdToHtml';
import {getPostByParams} from '@/api/posts';
import {getAllPages} from '@/api/comics';
import Post from '@/components/Post';
import Comic from '@/components/Comic';
import {useEffect} from 'react';

export default function Home({
	comic,
	md,
}) {
	const {
		page, chapter, loc,
	} = comic;
	useEffect(
		() => {
			const script = document.createElement('script');
			script.src = 'https://utteranc.es/client.js';
			script.setAttribute('repo', 'motocarota/aoqtd.com');
			script.setAttribute('issue-term', 'pathname');
			script.setAttribute('label', 'comment');
			script.setAttribute('theme', 'github-light');
			script.setAttribute('crossorigin', 'anonymous');
			script.setAttribute('async', true);

			document.body.appendChild(script);

			return () => {
				try {
					const els = document.getElementsByClassName('utterances');
					Array.from(els).map(el => document.body.removeChild(el));
				} catch (err) {
					console.err(err);
				}
			};
		},
		[page, chapter, loc],
	);
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
	const locales = ['it', 'en'];
	const paths = locales.reduce(
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
