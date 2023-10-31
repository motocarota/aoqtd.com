import getImageUrl from './getImageUrl';
import _padStart from 'lodash/padStart';

function getChapterLink({pages, chapter, skipCheck = false, locale}) {
	if (!skipCheck) {
		const chapterPage = getImageUrl({chapter, page: 0});
		if (!pages.includes(chapterPage)) {
			return '';
		}
	}

	const c = _padStart(chapter, 2, '0');

	return `/${locale}/${c}/000`;
}

export default getChapterLink;
