import generateRssFeed from '@/utils/generateFeed';
import {Group, Paper, Space, Text, Title} from '@mantine/core';
import Image from 'next/image';
import Link from 'next/link';
import getChapterLink from '@/utils/getChapterLink';
import extractValues from '@/utils/extractValues';
import {getAllPages} from '@/api/comics';

export default function Home({chapters}) {
	return (
		<>
			<Title m='md'>Benvenuto a bordo, viaggiatore</Title>
			<Text>Cerchi una storia di antiche leggende, eroiche gesta e nobili eroi senza macchia che salvano il mondo dal male?</Text>
			<Text>Beh, allora sei capitato nel fumetto sbagliato, dolcezza.</Text>
			<Space m='md'/>
			<Text>Questa e&apos; la storia di un manipolo di avventurieri brutti, puzzolenti, cattivi ...e anche un po&apos; stronzi.</Text>
			<Text>Non dire di non essere stato avvisato...</Text>
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
							src={`/comic/it/${image}`}
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
	const chapters = pages.filter(f => f.endsWith('00.png'));

	generateRssFeed(pages);

	return {
		props: {
			chapters: chapters.map(c => ({
				image: c,
				url: getChapterLink({chapter: extractValues(c).chapter, skipCheck: true}),
			})),
		},
	};
}
