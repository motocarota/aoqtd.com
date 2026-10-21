export const SITE_URL = 'https://www.aoqtd.com';
export const SITE_NAME = 'Another One Quest to Dust';
export const SITE_SHORT_NAME = 'AOQTD';
export const DEFAULT_DESCRIPTION =
	'A free webcomic about a dysfunctional party of adventurers looting dungeons, breaking rules and disappointing their dungeon master.';

export function absoluteUrl(path: string): string {
	return `${SITE_URL}${path.startsWith('/') ? path : `/${path}`}`;
}
