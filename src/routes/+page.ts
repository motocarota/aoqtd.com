import { getLastPage } from '$lib/utils/comic_page_utils';
import { redirect } from '@sveltejs/kit';

export function load() {
	const { url } = getLastPage();
	redirect(302, url);
}
