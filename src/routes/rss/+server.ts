export const prerender = true;
import _flatten from 'lodash/flatten';
import comic_pages from '$lib/data/comic-pages';
import { SITE_NAME, DEFAULT_DESCRIPTION, absoluteUrl } from '$lib/config';

function escapeXml(str: string) {
	return String(str)
		.replace(/&/g, '&amp;')
		.replace(/</g, '&lt;')
		.replace(/>/g, '&gt;')
		.replace(/"/g, '&quot;')
		.replace(/'/g, '&apos;');
}

export async function GET() {
	const pages = _flatten(
		comic_pages.map((c) =>
			c.pages.map((p, index) => ({
				...p,
				slug: absoluteUrl(`/c${c.chapter}-p${index}`)
			}))
		)
	);

	const items = pages
		.map((p) => {
			const imageUrl = absoluteUrl(`/comic/${p.img}.webp`);
			const pubDate = new Date(p.pubDate);

			return `
	<item>
		<link>${escapeXml(p.slug)}</link>
		<guid isPermaLink="false">${escapeXml(p.img)}</guid>
		<pubDate>${pubDate.toUTCString()}</pubDate>
		<enclosure url="${escapeXml(imageUrl)}" type="image/webp" length="0" />
		<description><![CDATA[<img src="${imageUrl}" alt="" />]]></description>
	</item>`;
		})
		.join('');

	const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
<channel>
	<title><![CDATA[${SITE_NAME}]]></title>
	<description><![CDATA[${DEFAULT_DESCRIPTION}]]></description>
	<link>${absoluteUrl('/')}</link>
	<atom:link href="${absoluteUrl('/rss/')}" rel="self" type="application/rss+xml"/>${items}
</channel>
</rss>`;

	return new Response(xml, {
		headers: {
			'Content-Type': 'application/xml; charset=utf-8'
		}
	});
}
