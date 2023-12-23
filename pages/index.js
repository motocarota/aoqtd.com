import generateRssFeed from '@/utils/generateFeed';
import {Group, Paper, Space, Text, Title} from '@mantine/core';
import Image from 'next/image';
import Link from 'next/link';
import getChapterLink from '@/utils/getChapterLink';
import extractValues from '@/utils/extractValues';
import {getAllPages} from '@/api/comics';

const pageContent = {
	it: {
		intro: (
			<>
				<Title m='md'>Benvenuto a bordo!</Title>
				<Text>Cerchi una storia di antiche leggende, eroiche gesta e nobili eroi senza macchia che salvano il mondo dal male?</Text>
				<Text>Beh, allora sei capitato nel fumetto sbagliato, dolcezza.</Text>
				<Space m='md'/>
				<Text>Questa e&apos; la storia di un manipolo di avventurieri brutti, puzzolenti, cattivi ...e anche un po&apos; stronzi.</Text>
				<Text>Non dire di non essere stato avvisato...</Text>
			</>
		),
	},
	en: {
		intro: (
			<>
				<Title m='md'>Welcome aboard!</Title>
				<Text>Looking for heroic deeds, romance and epic battles against evil? EW!</Text>
				<Text>Just skip on the next webcomic, then!<br/> This is the story of the typical hobo-murderer wrecking ball group that feasts on dungeon master&apos;s tears!</Text>
				<Space m='md'/>
				<Text>Hope you enjoy it!</Text>
			</>
		),
	},
};

export default function Home({chapters, locale}) {
	const t = pageContent[locale];

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

export function getStaticProps({
	params,
}) {
	const {locale} = params;
	const pages = getAllPages({locale});
	const chapters = pages.filter(f => f.endsWith('000.webp'));

	generateRssFeed({posts: pages, locale});

	return {
		props: {
			chapters: chapters.map(c => ({
				image: c,
				url: getChapterLink({chapter: extractValues(c).chapter, skipCheck: true, locale}),
			})),
			locale,
		},
	};
}
