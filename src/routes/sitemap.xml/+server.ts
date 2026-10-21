import comic_pages from '$lib/data/comic-pages';
import { absoluteUrl } from '$lib/config';

export const prerender = true;

const staticPaths = [
	'/chapter-list',
	'/about',
	'/chars',
	'/join',
	'/links',
	'/license',
	'/privacy'
];

export function GET() {
	const urls: { loc: string; lastmod?: string }[] = [
		...staticPaths.map((path) => ({ loc: absoluteUrl(path) })),
		...comic_pages.flatMap((chapterData, c) =>
			chapterData.pages.map((p, i) => ({
				loc: absoluteUrl(`/c${c}-p${i}`),
				lastmod: p.pubDate
			}))
		)
	];

	const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
	.map(
		(u) =>
			`	<url>\n\t\t<loc>${u.loc}</loc>${u.lastmod ? `\n\t\t<lastmod>${u.lastmod}</lastmod>` : ''}\n\t</url>`
	)
	.join('\n')}
</urlset>
`;

	return new Response(body, {
		headers: { 'Content-Type': 'application/xml' }
	});
}
