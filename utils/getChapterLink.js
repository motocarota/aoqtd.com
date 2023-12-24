import getImageUrl from './getImageUrl';
import _padStart from 'lodash/padStart';

function getChapterLink({pages, chapter, skipCheck = false, loc}) {
	if (!skipCheck) {
		const chapterPage = getImageUrl({chapter, page: 0, loc});
		if (!pages.includes(chapterPage)) {
			return '';
		}
	}

	const c = _padStart(chapter, 2, '0');

	return `/${loc}/${c}/000`;
}

export default getChapterLink;
