import Image from 'next/image';
import Link from 'next/link';
import {Button, ButtonGroup, Group, Space, Title, UnstyledButton} from '@mantine/core';
import useKeyboardNavigation from '@/hooks/useKeyboardNavigation';
import {useRouter} from 'next/router';

export default function Comic({comic, locale}) {
	const {
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
	} = comic;
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
			<Title order={3} my='md'>
				Capitolo {chapter}, Pagina {page}
			</Title>
			<UnstyledButton
				component={Link}
				href={nextPage}
			>
				<Image
					width={700}
					height={500}
					src={`/comic/${locale}/${imageUrl}`}
					alt={`chapter:${chapter} page:${page}`}
					priority
				/>
			</UnstyledButton>

			<Group justify='center' wrap='wrap'>
				<ButtonGroup>
					<Button
						variant='subtle'
						disabled={isFirstPage}
						component={isFirstPage ? null : Link}
						href={`/${locale}/01/00`}
						leftSection={<Image priority={false} src='/first.png' width={15} height={15} />}
					>
          Inizio
					</Button>

					<Button
						variant='subtle'
						disabled={!prevChapter}
						component={prevChapter ? Link : null}
						href={prevChapter}
						leftSection={<Image priority={false} src='/prev-c.png' width={15} height={15} />}
					>
          Capitolo
					</Button>

					<Button
						variant='subtle'
						disabled={!prevPage}
						component={prevPage ? Link : null}
						href={prevPage}
						leftSection={<Image priority={false} src='/prev.png' width={15} height={15} />}
					>
            Pagina
					</Button>
				</ButtonGroup>

				<Space px='lg' />

				<ButtonGroup>
					<Button
						variant='subtle'
						disabled={!nextPage}
						component={nextPage ? Link : null}
						href={nextPage}
						rightSection={<Image priority={false} src='/next.png' width={15} height={15} />}
					>
            Pagina
					</Button>

					<Button
						variant='subtle'
						disabled={!nextChapter}
						component={nextChapter ? Link : null}
						href={nextChapter}
						rightSection={<Image priority={false} src='/next-c.png' width={15} height={15} />}
					>
            Capitolo
					</Button>

					<Button
						variant='subtle'
						disabled={isLastPage}
						component={isLastPage ? null : Link}
						href={lastPage}
						rightSection={<Image priority={false} src='/last.png' width={15} height={15} />}
					>
						Ultima
					</Button>
				</ButtonGroup>
			</Group>
		</>
	);
}
