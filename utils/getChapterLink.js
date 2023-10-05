import getImageUrl from './getImageUrl';
import pad2 from './pad2';

function getChapterLink({pages, chapter}) {
	const chapterPage = getImageUrl({chapter, page: 0});
	if (!pages.includes(chapterPage)) {
		return null;
	}

	return pad2(chapter);
}

export default getChapterLink;
