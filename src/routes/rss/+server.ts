export const prerender = true;
import comic_pages from '$lib/data/comic-pages';
import { SITE_NAME, DEFAULT_DESCRIPTION, absoluteUrl } from '$lib/config';

const AUTHOR = 'Motocarota';

function escapeXml(str: string) {
	return String(str)
		.replace(/&/g, '&amp;')
		.replace(/</g, '&lt;')
		.replace(/>/g, '&gt;')
		.replace(/"/g, '&quot;')
		.replace(/'/g, '&apos;');
}

// CDATA can't contain `]]>`, so split it across two sections
function cdata(str: string) {
	return `<![CDATA[${String(str).replace(/]]>/g, ']]]]><![CDATA[>')}]]>`;
}

function toRfc822(date: string) {
	const d = new Date(date);
	return isNaN(d.getTime()) ? null : d.toUTCString();
}

export async function GET() {
	// chapter/page numbers are the route indices, same as the page slugs (`/c0-p0`)
	const pages = comic_pages.flatMap((chapterData, c) =>
		chapterData.pages.map((p, i) => ({
			...p,
			chapter: c,
			page: i,
			url: absoluteUrl(`/c${c}-p${i}`)
		}))
	);

	// newest first
	const items = pages
		.toReversed()
		.map((p) => {
			const title = `Chapter ${p.chapter}, Page ${p.page}`;
			const imageUrl = absoluteUrl(`/comic/${p.img}.webp`);
			const pubDate = toRfc822(p.pubDate);
			const captionHtml = escapeXml(p.caption).replace(/\n/g, '<br>');

			return `
	<item>
		<title>${escapeXml(title)}</title>
		<description>${escapeXml(p.caption)}</description>
		<link>${escapeXml(p.url)}</link>
		<guid isPermaLink="false">${escapeXml(p.img)}</guid>
		<dc:creator xmlns:dc="http://purl.org/dc/elements/1.1/">${AUTHOR}</dc:creator>${pubDate ? `\n\t\t<pubDate>${pubDate}</pubDate>` : ''}
		<media:content xmlns:media="http://search.yahoo.com/mrss/" url="${escapeXml(imageUrl)}" medium="image"/><content:encoded xmlns:content="http://purl.org/rss/1.0/modules/content/">
			${cdata(`<img src="${imageUrl}" alt="${title}"><p>${captionHtml}</p>`)}
		</content:encoded>
	</item>`;
		})
		.join('');

	const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
<channel>
	<title>${cdata(SITE_NAME)}</title>
	<description>${cdata(DEFAULT_DESCRIPTION)}</description>
	<link>${absoluteUrl('/')}</link>
	<atom:link href="${absoluteUrl('/rss')}" rel="self" type="application/rss+xml"/>${items}
</channel>
</rss>`;

	return new Response(xml, {
		headers: {
			'Content-Type': 'application/xml; charset=utf-8'
		}
	});
}
