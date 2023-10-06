import path from 'path';
import fs from 'fs';
import generateRssFeed from '@/utils/generateFeed';
import {Card, Group, Space, Text, Title} from '@mantine/core';
import Image from 'next/image';
import Link from 'next/link';
import getChapterLink from '@/utils/getChapterLink';
import extractValues from '@/utils/extractValues';

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
			<Group justify='center' maw={600} m={'auto'}>
				{chapters.map(({image, url}, index) => (
					<Card
						key={index}
						shadow='sm'
						padding='xl'
						component={Link}
						href={url}
						withBorder
						variant='default'
					>
						<Card.Section>
							<Image
								src={`/comic/it/${image}`}
								height={100}
								width={160}
								alt='No way!'
							/>
						</Card.Section>
						<Text>Capitolo {index}</Text>
					</Card>

				))}
			</Group>
		</>
	);
}

export function getStaticProps() {
	const postsDirectory = path.join(process.cwd(), './public/comic/it');
	const pages = fs.readdirSync(postsDirectory).filter(f => f.endsWith('.png'));
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
