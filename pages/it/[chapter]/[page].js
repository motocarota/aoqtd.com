import Image from 'next/image';
import Link from 'next/link';
import extractValues from '@/utils/extractValues';
import getPageLink from '@/utils/getPageLink';
import getChapterLink from '@/utils/getChapterLink';
import getImageUrl from '@/utils/getImageUrl';
import {Button, ButtonGroup, Group, Space, Title, UnstyledButton} from '@mantine/core';
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
          Capitolo:{chapter} Pagina:{page}
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
					<ButtonGroup>
						<Button
							variant='subtle'
							disabled={isFirstPage}
							component={Link}
							href={'/it/01/00'}
							leftSection={<Image src='/first.png' width={15} height={15} />}
						>
          Inizio
						</Button>
						<Button
							variant='subtle'
							disabled={!prevChapter}
							component={Link}
							href={prevChapter}
							leftSection={<Image src='/prev-c.png' width={15} height={15} />}
						>
          Capitolo
						</Button>

						<Button
							variant='subtle'
							disabled={!prevPage}
							component={Link}
							href={prevPage}
							leftSection={<Image src='/prev.png' width={15} height={15} />}
						>
            Pagina
						</Button>
					</ButtonGroup>

					<Space px='lg' />

					<ButtonGroup>
						<Button
							variant='subtle'
							disabled={!nextPage}
							component={Link}
							href={nextPage}
							rightSection={<Image src='/next.png' width={15} height={15} />}
						>
            Pagina
						</Button>

						<Button
							variant='subtle'
							disabled={!nextChapter}
							component={Link}
							href={nextChapter}
							rightSection={<Image src='/next-c.png' width={15} height={15} />}
						>
            Capitolo
						</Button>

						<Button
							variant='subtle'
							disabled={isLastPage}
							component={Link}
							href={lastPage}
							rightSection={<Image src='/last.png' width={15} height={15} />}
						>
						Ultima
						</Button>
					</ButtonGroup>
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
