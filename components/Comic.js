/* eslint-disable @next/next/no-img-element */
import Image from 'next/image';
import Link from 'next/link';
import {Button, ButtonGroup, Group, Space, Title, UnstyledButton} from '@mantine/core';
import useKeyboardNavigation from '@/hooks/useKeyboardNavigation';
import {useRouter} from 'next/router';

export default function Comic({comic}) {
	const {
		imageUrl,
		loc,
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
				Chapter {chapter}, Page {page}
			</Title>
			<UnstyledButton
				component={Link}
				href={nextPage}
			>
				<img
					style={{maxWidth: 880, width: 880}}
					src={`/comic/${loc}/${imageUrl}`}
					alt={`chapter:${chapter} page:${page}`}
				/>
			</UnstyledButton>

			<Group justify='center' wrap='wrap'>
				<ButtonGroup>
					<Button
						variant='subtle'
						disabled={isFirstPage}
						component={isFirstPage ? null : Link}
						href={`/${loc}/01/000`}
					>
						<Image priority={false} src='/first.png' width={15} height={15} alt='nav-first' />
					</Button>

					<Button
						variant='subtle'
						disabled={!prevChapter}
						component={prevChapter ? Link : null}
						href={prevChapter}
					>
						<Image priority={false} src='/prev-c.png' width={15} height={15} alt='nav-prev-chapter' />
					</Button>

					<Button
						variant='subtle'
						disabled={!prevPage}
						component={prevPage ? Link : null}
						href={prevPage}
					>
						<Image priority={false} src='/prev.png' width={15} height={15} alt='nav-prev' />
					</Button>
				</ButtonGroup>

				<Space px='lg' />

				<ButtonGroup>
					<Button
						variant='subtle'
						disabled={!nextPage}
						component={nextPage ? Link : null}
						href={nextPage}
					>
						<Image priority={false} src='/next.png' width={15} height={15} alt='nav-next' />
					</Button>

					<Button
						variant='subtle'
						disabled={!nextChapter}
						component={nextChapter ? Link : null}
						href={nextChapter}
					>
						<Image priority={false} src='/next-c.png' width={15} height={15} alt='nav-next-chapter' />
					</Button>

					<Button
						variant='subtle'
						disabled={isLastPage}
						component={isLastPage ? null : Link}
						href={lastPage}
					>
						<Image priority={false} src='/last.png' width={15} height={15} alt='nav-last' />
					</Button>
				</ButtonGroup>
			</Group>
		</>
	);
}
