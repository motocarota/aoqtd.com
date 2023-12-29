import generateRssFeed from '@/utils/generateFeed';
import {Group, Paper, Space} from '@mantine/core';
import Image from 'next/image';
import Link from 'next/link';
import getChapterLink from '@/utils/getChapterLink';
import extractValues from '@/utils/extractValues';
import {getAllPages} from '@/api/comics';
import {LOCALES} from '@/app.config';
import {pageContent} from '@/i18n/home.content';

export default function Home({chapters, loc}) {
	const t = pageContent[loc];

	return (
		<>
			{t.intro}
			<Space m='md' />
			<Group justify='center' maw={660} m={'auto'}>
				{chapters.map(({image, url}, index) => (
					<Paper
						key={index}
						shadow='sm'
						padding='xl'
						component={Link}
						href={url}
						withBorder
						variant='default'
					>
						<Image
							src={`/comic/${loc}/${image}`}
							height={200}
							width={300}
							alt='No way!'
						/>
					</Paper>

				))}
			</Group>
		</>
	);
}

export function getStaticProps({
	params = {},
}) {
	const {loc = 'en'} = params;
	const pages = getAllPages({loc});
	const chapters = pages.filter(f => f.endsWith('000.webp'));

	generateRssFeed({posts: pages, loc});

	return {
		props: {
			chapters: chapters.map(c => ({
				image: c,
				url: getChapterLink({
					chapter: extractValues(c).chapter,
					skipCheck: true,
					loc,
				}),
			})),
			loc,
		},
	};
}

export function getStaticPaths() {
	return {
		paths: LOCALES.map(l => `/${l}`),
		fallback: false,
	};
}
