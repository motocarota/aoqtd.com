// from `aoqtd-it-05-002.webp`
// to `/c5-p2`
export function filenameToSlug(filename?: string) {
	if (!filename) {
		return undefined;
	}
	const [name] = (filename ?? '----.*').split('.');
	const [, , c, p] = (name ?? '----').split('-');
	const chapter = parseInt(c, 10);
	const page = parseInt(p, 10);

	if (isFinite(chapter)) {
		return isFinite(page) ? `/c${chapter}-p${page}#comic-page` : `/c${chapter}-p0#comic-page`;
	}

	return '/';
}
