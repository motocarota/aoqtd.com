import path from 'path';
import fs from 'fs';
import Image from 'next/image';
import {useRouter} from 'next/router';
import Link from 'next/link';
import extractValues from '@/utils/extractValues';
import getPageLink from '@/utils/getPageLink';
import getChapterLink from '@/utils/getChapterLink';
import getImageUrl from '@/utils/getImageUrl';
import {Box, Button, Group, Space, Title} from '@mantine/core';
import getLastPage from '@/utils/geLastPage';
// Import generateRssFeed from '@/utils/generateFeed';

export default function Home({
	imageUrl,
	prevPage,
	nextPage,
	prevChapter,
	nextChapter,
	lastChapter,
	lastPage,
}) {
	const router = useRouter();
	const {page, chapter} = router.query;

	const isFirstPage = page === '00' && chapter === '01';
	const isLastPage = page === lastPage && chapter === lastChapter;

	return (
		<>
			<main>
				<Title order={3} my='md'>
          Chapter {chapter} Page {page}
				</Title>
				<div>
					<Image
						width={700}
						height={500}
						src={`/comic/it/${imageUrl}`}
						alt={page}
					/>
				</div>
				<Group justify='center' wrap='wrap'>
					<Box>
						<Button
							disabled={isFirstPage}
							component={Link}
							href={'/it/01/00'}
							leftSection={<Image src='/first.png' width={15} height={15} />}
						>
          First
						</Button>
						<Button
							disabled={!prevChapter}
							component={Link}
							href={`/it/${prevChapter}/00`}
							leftSection={<Image src='/prev-c.png' width={15} height={15} />}
						>
          chapter
						</Button>

						<Button
							disabled={!prevPage}
							component={Link}
							href={`/it/${prevPage?.chapter}/${prevPage?.page}`}
							leftSection={<Image src='/prev.png' width={15} height={15} />}
						>
            page
						</Button>
					</Box>

					<Space px='lg' />

					<Box>
						<Button
							disabled={!nextPage}
							component={Link}
							href={`/it/${nextPage?.chapter}/${nextPage?.page}`}
							rightSection={<Image src='/next.png' width={15} height={15} />}
						>
            page
						</Button>

						<Button
							disabled={!nextChapter}
							component={Link}
							href={`/it/${nextChapter}/00`}
							rightSection={<Image src='/next-c.png' width={15} height={15} />}
						>
            chapter
						</Button>

						<Button
							disabled={isLastPage}
							component={Link}
							href={`/it/${lastChapter}/${lastPage}`}
							rightSection={<Image src='/last.png' width={15} height={15} />}
						>
          Last
						</Button>
					</Box>
				</Group>
			</main>
		</>
	);
}

export function getStaticProps({params}) {
	const chapterDir = path.join(process.cwd(), './public/comic/it');
	const pages = fs.readdirSync(chapterDir).filter(f => f.endsWith('.png'));
	// GenerateRssFeed(pages);

	const imageUrl = getImageUrl(params);
	const index = pages.indexOf(imageUrl);
	const {
		chapter,
	} = params;

	const prevPage = getPageLink({pages, index: index - 1});
	const nextPage = getPageLink({pages, index: index + 1});
	const prevChapter = getChapterLink({pages, chapter: parseInt(chapter, 10) - 1});
	const nextChapter = getChapterLink({pages, chapter: parseInt(chapter, 10) + 1});
	const {
		page: lastPage,
		chapter: lastChapter,
	} = getLastPage({pages});

	return {
		props: {
			imageUrl,
			prevPage,
			nextPage,
			prevChapter,
			nextChapter,
			lastPage,
			lastChapter,
		},
	};
}

export function getStaticPaths() {
	const pagesDir = path.join(process.cwd(), './public/comic/it/');
	const pages = fs.readdirSync(pagesDir).filter(f => f.endsWith('.png'));

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
