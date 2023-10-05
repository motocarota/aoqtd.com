import Image from 'next/image';
import Link from 'next/link';
import extractValues from '@/utils/extractValues';
import getPageLink from '@/utils/getPageLink';
import getChapterLink from '@/utils/getChapterLink';
import getImageUrl from '@/utils/getImageUrl';
import {Box, Button, Group, Space, Title, UnstyledButton} from '@mantine/core';
import getLastPage from '@/utils/geLastPage';
import readAllPages from '@/utils/getAllPages';
import useKeyboardNavigation from '@/hooks/useKeyboardNavigation';
import {useRouter} from 'next/router';

export default function Home({
	imageUrl,
	page,
	chapter,
	prevPage,
	nextPage,
	prevChapter,
	nextChapter,
	lastPage,
	isFirstPage,
	isLastPage,
}) {
	const router = useRouter();

	useKeyboardNavigation({
		prev() {
			if (prevPage) {
				router.push(prevPage);
			}
		},
		next() {
			if (nextPage) {
				router.push(nextPage);
			}
		},
	});
	return (
		<>
			<main>
				<Title order={3} my='md'>
          Chapter {chapter} Page {page}
				</Title>
				<UnstyledButton
					component={Link}
					href={nextPage}
				>
					<Image
						width={700}
						height={500}
						src={`/comic/it/${imageUrl}`}
						alt={page}
					/>
				</UnstyledButton>
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
							href={prevChapter}
							leftSection={<Image src='/prev-c.png' width={15} height={15} />}
						>
          chapter
						</Button>

						<Button
							disabled={!prevPage}
							component={Link}
							href={prevPage}
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
							href={nextPage}
							rightSection={<Image src='/next.png' width={15} height={15} />}
						>
            page
						</Button>

						<Button
							disabled={!nextChapter}
							component={Link}
							href={nextChapter}
							rightSection={<Image src='/next-c.png' width={15} height={15} />}
						>
            chapter
						</Button>

						<Button
							disabled={isLastPage}
							component={Link}
							href={lastPage}
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

// Returns all the static data for the page
export function getStaticProps({params}) {
	const pages = readAllPages();

	const imageUrl = getImageUrl(params);
	const index = pages.indexOf(imageUrl);
	const {
		page,
		chapter,
	} = params;

	const prevPage = getPageLink({pages, index: index - 1});
	const nextPage = getPageLink({pages, index: index + 1});
	const prevChapter = getChapterLink({pages, chapter: parseInt(chapter, 10) - 1});
	const nextChapter = getChapterLink({pages, chapter: parseInt(chapter, 10) + 1});
	const last = getLastPage({pages});
	const lastPage = `/it/${last.chapter}/${last.page}`;
	const isFirstPage = page === '00' && chapter === '01';
	const isLastPage = page === last.page && chapter === last.chapter;

	return {
		props: {
			imageUrl,
			page,
			chapter,
			prevPage,
			nextPage,
			prevChapter,
			nextChapter,
			lastPage,
			isFirstPage,
			isLastPage,
		},
	};
}

// Returns all the valid pages from the combination chapter + page dynamic paths
export function getStaticPaths() {
	const pages = readAllPages();
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
