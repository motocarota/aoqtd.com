import type { Handle } from '@sveltejs/kit';
import { SITE_NAME, DEFAULT_DESCRIPTION } from '$lib/config';

export const handle: Handle = async ({ event, resolve }) => {
	return resolve(event, {
		transformPageChunk: ({ html }) =>
			html.replace('%app.title%', SITE_NAME).replace('%app.description%', DEFAULT_DESCRIPTION)
	});
};
