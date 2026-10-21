import { redirect } from '@sveltejs/kit';
import { getAllChapterEntries } from '$lib/utils/comic_page_utils';

export const prerender = true;

export function entries() {
	return getAllChapterEntries();
}

export function load({ params }) {
	const chapter = parseInt(params.chapter, 10);

	const url = `/c${chapter}-p0`;
	redirect(302, url);
}
