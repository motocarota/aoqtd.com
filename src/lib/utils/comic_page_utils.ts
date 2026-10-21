import _size from 'lodash/size';
import _omit from 'lodash/omit';
import comic_pages from '$lib/data/comic-pages';

export function getAllPageEntries() {
	return comic_pages.flatMap((chapterData, c) =>
		chapterData.pages.map((_, p) => ({ chapter: String(c), page: String(p) }))
	);
}

export function getAllChapterEntries() {
	return comic_pages.map((_, c) => ({ chapter: String(c) }));
}

export function getLastPage() {
	const c = comic_pages.length - 1;
	const lastChapter = comic_pages[c];
	const p = lastChapter.pages.length - 1;
	const lastPage = lastChapter.pages[p];
	const url = `/c${c}-p${p}`;

	return {
		c,
		p,
		url,
		lastChapter,
		lastPage
	};
}

function toSlug(c: number, p: number): string {
	return `/c${c}-p${p}`;
}

function getPrevPage(c: number, p: number) {
	if (p === 0) {
		if (c <= 1) {
			// on first page --> null
			return null;
		}
		// on first chapter page --> chapter--, chapter-- last page
		const lastPage = _size(comic_pages[c - 1].pages) - 1;

		return toSlug(c - 1, lastPage);
	}
	// else --> page--
	return toSlug(c, p - 1);
}

function getNextPage(c: number, p: number) {
	const chapterCap = _size(comic_pages) - 1;
	const pageCap = _size(comic_pages[c]?.pages) - 1;

	if (p === pageCap) {
		if (c === chapterCap) {
			// on last page --> null
			return null;
		}
		// on last chapter page --> chapter++, page 0
		return toSlug(c + 1, 0);
	}
	// else --> page++
	return toSlug(c, p + 1);
}

function getAdjacentLinks(c: number, p: number) {
	const prevSlug = getPrevPage(c, p);
	const nextSlug = getNextPage(c, p);

	return { prevSlug, nextSlug };
}

export function getPageData(c: number, p: number) {
	const { prevSlug, nextSlug } = getAdjacentLinks(c, p);
	const chapter = _omit(comic_pages[c] ?? {}, 'comic_pages');
	const page = comic_pages[c]?.pages[p] ?? {};

	return {
		prevSlug,
		nextSlug,
		chapter,
		...page
	};
}

export default comic_pages;
