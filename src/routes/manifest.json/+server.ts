import { SITE_NAME, SITE_SHORT_NAME, DEFAULT_DESCRIPTION } from '$lib/config';

export const prerender = true;

export function GET() {
	const manifest = {
		name: SITE_NAME,
		short_name: SITE_SHORT_NAME,
		description: DEFAULT_DESCRIPTION,
		start_url: '/',
		scope: '/',
		display: 'standalone',
		background_color: '#e8e5d6',
		theme_color: '#ac6734',
		icons: [
			{
				src: '/pwa/icon-192.png',
				sizes: '192x192',
				type: 'image/png',
				purpose: 'any'
			},
			{
				src: '/pwa/icon-512.png',
				sizes: '512x512',
				type: 'image/png',
				purpose: 'any'
			},
			{
				src: '/pwa/icon-maskable-192.png',
				sizes: '192x192',
				type: 'image/png',
				purpose: 'maskable'
			},
			{
				src: '/pwa/icon-maskable-512.png',
				sizes: '512x512',
				type: 'image/png',
				purpose: 'maskable'
			}
		]
	};

	return new Response(JSON.stringify(manifest, null, 2), {
		headers: { 'Content-Type': 'application/manifest+json' }
	});
}
