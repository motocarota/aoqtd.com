import { absoluteUrl } from '$lib/config';

export const prerender = true;

export function GET() {
	const body = `# allow crawling everything by default
User-agent: *
Disallow:

Sitemap: ${absoluteUrl('/sitemap.xml')}
`;

	return new Response(body, {
		headers: { 'Content-Type': 'text/plain' }
	});
}
