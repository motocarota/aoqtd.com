import getLastPage from './getLastPage';
import getChapterLink from './getChapterLink';
import getImageUrl from './getImageUrl';
import getPageLink from './getPageLink';
import getValues from './getValues';

const getComicPage = ({params, pages}) => {
	const {
		loc,
		page,
		chapter,
	} = getValues(params);
	const imageUrl = getImageUrl(params);
	const index = pages.indexOf(imageUrl);

	const prevPage = getPageLink({pages, index: index - 1, loc});
	const nextPage = getPageLink({pages, index: index + 1, loc});
	const prevChapter = getChapterLink({pages, chapter: parseInt(chapter, 10) - 1, loc});
	const nextChapter = getChapterLink({pages, chapter: parseInt(chapter, 10) + 1, loc});
	const last = getLastPage({pages});
	const lastPage = `/${loc}/${last.chapter}/${last.page}`;
	const isFirstPage = page === '000' && chapter === '01';
	const isLastPage = page === last.page && chapter === last.chapter;

	return {
		imageUrl,
		page,
		chapter,
		loc,
		prevPage,
		nextPage,
		prevChapter,
		nextChapter,
		lastPage,
		isFirstPage,
		isLastPage,
	};
};

export default getComicPage;
