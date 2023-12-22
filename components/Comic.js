'use client';
import Image from 'next/image';
import Link from 'next/link';
import {Button, ButtonGroup, Group, Space, Title, UnstyledButton} from '@mantine/core';
import useKeyboardNavigation from '@/hooks/useKeyboardNavigation';
import {useRouter} from 'next/router';
import {useImageUrl} from '@/hooks/useImageUrl';
import {useContext} from 'react';
import {I18nContext} from '@/Provider/I18n.provider';

export default function Comic({comic}) {
	const {
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
	const {t, locale} = useContext(I18nContext);

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
	const imageUrl = useImageUrl({
		name: 'aoqtd',
		page,
		chapter,
	});

	return (
		<>
			<Title order={3} my='md'>
				{t('chapter')} {chapter}, {t('page')} {page}
			</Title>
			<UnstyledButton
				component={Link}
				href={`${nextPage}`}
			>
				<img
					style={{maxWidth: 880, width: 880}}
					src={`/comic/${locale}/${imageUrl}`}
					alt={`chapter:${chapter} page:${page}`}
				/>
			</UnstyledButton>

			<Group justify='center' wrap='wrap'>
				<ButtonGroup>
					<Button
						variant='subtle'
						disabled={isFirstPage}
						component={isFirstPage ? null : Link}
						href={'/01/000'}
						leftSection={<Image priority={false} src='/first.png' width={15} height={15} alt='nav-first' />}
					>
						{t('first')}
					</Button>

					<Button
						variant='subtle'
						disabled={!prevChapter}
						component={prevChapter ? Link : null}
						href={`${prevChapter}`}
						leftSection={<Image priority={false} src='/prev-c.png' width={15} height={15} alt='nav-prev-chapter' />}
					>
						{t('chapter')}
					</Button>

					<Button
						variant='subtle'
						disabled={!prevPage}
						component={prevPage ? Link : null}
						href={`${prevPage}`}
						leftSection={<Image priority={false} src='/prev.png' width={15} height={15} alt='nav-prev' />}
					>
						{t('prev')}
					</Button>
				</ButtonGroup>

				<Space px='lg' />

				<ButtonGroup>
					<Button
						variant='subtle'
						disabled={!nextPage}
						component={nextPage ? Link : null}
						href={`${nextPage}`}
						rightSection={<Image priority={false} src='/next.png' width={15} height={15} alt='nav-next' />}
					>
						{t('next')}
					</Button>

					<Button
						variant='subtle'
						disabled={!nextChapter}
						component={nextChapter ? Link : null}
						href={`${nextChapter}`}
						rightSection={<Image priority={false} src='/next-c.png' width={15} height={15} alt='nav-next-chapter' />}
					>
						{t('chapter')}
					</Button>

					<Button
						variant='subtle'
						disabled={isLastPage}
						component={isLastPage ? null : Link}
						href={`${lastPage}`}
						rightSection={<Image priority={false} src='/last.png' width={15} height={15} alt='nav-last' />}
					>
						{t('last')}
					</Button>
				</ButtonGroup>
			</Group>
		</>
	);
}
