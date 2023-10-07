import getLastPage from "./getLastPage";
import getChapterLink from "./getChapterLink";
import getImageUrl from "./getImageUrl";
import getPageLink from "./getPageLink";

const getComicPage = ({ params, pages }) => {
	const imageUrl = getImageUrl(params);
	const index = pages.indexOf(imageUrl);
	const {
		page,
		chapter,
	} = params;

	const prevPage = getPageLink({pages, index: index - 1});
	const nextPage = getPageLink({pages, index: index + 1});
	const prevChapter = getChapterLink({pages, chapter: parseInt(chapter, 10) - 1});
	const nextChapter = getChapterLink({pages, chapter: parseInt(chapter, 10) + 1});
	const last = getLastPage({pages});
	const lastPage = `/it/${last.chapter}/${last.page}`;
	const isFirstPage = page === '00' && chapter === '01';
	const isLastPage = page === last.page && chapter === last.chapter;

	return {
		imageUrl,
		page,
		chapter,
		prevPage,
		nextPage,
		prevChapter,
		nextChapter,
		lastPage,
		isFirstPage,
		isLastPage,
	}
	
};

export default getComicPage;