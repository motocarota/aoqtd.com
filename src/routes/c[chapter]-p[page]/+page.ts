import { getAllPageEntries, getPageData } from '$lib/utils/comic_page_utils';

export const prerender = true;

export function entries() {
	return getAllPageEntries();
}

export function load({ params }) {
	const chapter = parseInt(params.chapter, 10);
	const page = parseInt(params.page, 10);

	// Always resolves to the English asset; the italian variant is swapped
	// in client-side only (see ComicPage.svelte), so the build never has to
	// know about language at all.
	const { prevSlug, nextSlug, img = '', pubDate, caption } = getPageData(chapter, page);
	const imageUrl = `/comic/${img}.webp`;

	return {
		chapter,
		page,
		prevSlug,
		nextSlug,
		imageUrl,
		pubDate,
		caption
	};
}
