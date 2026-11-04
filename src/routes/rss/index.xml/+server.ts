// Served at `/rss/` (prerendered to `rss/index.xml`) to keep the same URL as
// the old Ghost feed: GitHub Pages resolves `/rss/` to `index.xml` too, and
// serves it as `application/xml` (an `index.html` would be `text/html`).
export const prerender = true;
import comic_pages from '$lib/data/comic-pages';
import { SITE_NAME, DEFAULT_DESCRIPTION, absoluteUrl } from '$lib/config';

const AUTHOR = 'Motocarota';

// same as Ghost's default feed size
const MAX_ITEMS = 15;

// GUIDs of the pages already published by the old Ghost feed: keeping them
// prevents feed readers from showing those pages again as new items.
const GHOST_GUIDS: Record<string, string> = {
	'aoqtd-en-09-015': '69f5cc9bec537700018f969f',
	'aoqtd-en-09-014': '69e3592f3940d200014be72c',
	'aoqtd-en-09-013': '69da6bc2001ac200014897ae',
	'aoqtd-en-09-012': '69d17d5c2fd39b0001af7963',
	'aoqtd-en-09-011': '69c035281ebf51000120e2c1',
	'aoqtd-en-09-010': '69ab5ac691fe2200014c0b48',
	'aoqtd-en-09-009': '699e37c0b90fa3000172835a',
	'aoqtd-en-09-008': '698c36b8def82d0001db58d0',
	'aoqtd-en-09-007': '697e3bcfa435f10001bea167',
	'aoqtd-en-09-006': '69749560cdd8e100012e8c64',
	'aoqtd-en-09-005': '697000753784bb00019cffde',
	'aoqtd-en-09-004': '6966bc11646a5d00014d016d',
	'aoqtd-en-09-003': '6966bbb7646a5d00014d0161',
	'aoqtd-en-09-002': '6966bb8c646a5d00014d0148',
	'aoqtd-en-08-021': '69553d52d1b114000162a11a'
};

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
		.slice(0, MAX_ITEMS)
		.map((p) => {
			const title = `Chapter ${p.chapter}, Page ${p.page}`;
			const imageUrl = absoluteUrl(`/comic/${p.img}.webp`);
			const pubDate = toRfc822(p.pubDate);
			const captionHtml = p.caption ? `<p>${escapeXml(p.caption).replace(/\n/g, '<br>')}</p>` : '';
			const guid = GHOST_GUIDS[p.img] ?? p.img;

			return `<item><title>${cdata(title)}</title><description>${cdata(captionHtml)}</description><link>${escapeXml(p.url)}</link><guid isPermaLink="false">${escapeXml(guid)}</guid><dc:creator>${cdata(AUTHOR)}</dc:creator>${pubDate ? `<pubDate>${pubDate}</pubDate>` : ''}<media:content url="${escapeXml(imageUrl)}" medium="image"/><content:encoded>${cdata(`<img src="${escapeXml(imageUrl)}" alt="${escapeXml(title)}">${captionHtml}`)}</content:encoded></item>`;
		})
		.join('');

	const siteUrl = absoluteUrl('/');
	const xml = `<?xml version="1.0" encoding="UTF-8"?><rss xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns:content="http://purl.org/rss/1.0/modules/content/" xmlns:atom="http://www.w3.org/2005/Atom" version="2.0" xmlns:media="http://search.yahoo.com/mrss/"><channel><title>${cdata(SITE_NAME)}</title><description>${cdata(DEFAULT_DESCRIPTION)}</description><link>${siteUrl}</link><image><url>${absoluteUrl('/pwa/icon-192.png')}</url><title>${escapeXml(SITE_NAME)}</title><link>${siteUrl}</link></image><lastBuildDate>${new Date().toUTCString()}</lastBuildDate><atom:link href="${absoluteUrl('/rss/')}" rel="self" type="application/rss+xml"/><ttl>60</ttl>${items}</channel></rss>`;

	return new Response(xml, {
		headers: {
			'Content-Type': 'application/rss+xml; charset=utf-8'
		}
	});
}
