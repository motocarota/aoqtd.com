import comic_pages from '$lib/data/comic-pages';

export async function load() {
	const chapters = comic_pages.map((c) => ({
		chapter: c.chapter,
		url: c.url,
		img: `/comic/${c.img}.webp`,
		title: c.title,
		desc: c.desc,
		pubDate: c.pubDate,
		pages: c.pages?.length ?? 0
	}));

	return {
		chapters
	};
}
