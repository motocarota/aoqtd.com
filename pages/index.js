import _map from 'lodash/map';
import generateRssFeed from '@/utils/generateFeed';
import {Group, Paper, Space} from '@mantine/core';
import Image from 'next/image';
import Link from 'next/link';
import getChapterLink from '@/utils/getChapterLink';
import extractValues from '@/utils/extractValues';
import {getAllPages} from '@/api/comics';
import {I18nContext} from '@/Provider/I18n.provider';
import {useContext} from 'react';

export default function Home({chapters}) {
	const {t, locale} = useContext(I18nContext);

	return (
		<>
			{t('intro')} {locale}
			<Space m='md' />
			<Group justify='center' maw={660} m={'auto'}>
				{_map(chapters, ({image, url}, index) => (
					<Paper
						key={index}
						shadow='sm'
						padding='xl'
						component={Link}
						href={`${url}`}
						withBorder
						variant='default'
					>
						<Image
							src={`/comic/${locale}/${image}`}
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

export function getStaticProps() {
	const pages = getAllPages();
	const chapters = pages.filter(f => f.endsWith('000.webp'));
	generateRssFeed({posts: pages});

	return {
		props: {
			chapters: chapters.map(c => ({
				image: c,
				url: getChapterLink({chapter: extractValues(c).chapter, skipCheck: true}),
			})),
		},
	};
}
