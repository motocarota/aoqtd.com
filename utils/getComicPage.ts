import getLastPage from "./getLastPage";
import getChapterLink from "./getChapterLink";
import getImageUrl from "./getImageUrl";
import getPageLink from "./getPageLink";
import getValues from "./getValues";

const getComicPage = ({ params, pages }) => {
	const {
		page,
		chapter,
	} = getValues(params);
	const imageUrl = getImageUrl({ chapter, page });
	const index = pages.indexOf(imageUrl);

	const prevPage = getPageLink({pages, index: index - 1});
	const nextPage = getPageLink({pages, index: index + 1});
	const prevChapter = getChapterLink({pages, chapter: parseInt(chapter, 10) - 1});
	const nextChapter = getChapterLink({pages, chapter: parseInt(chapter, 10) + 1});
	const last = getLastPage({pages});
	const lastPage = `/it/${last.chapter}/${last.page}`;
	const isFirstPage = page === '000' && chapter === '01';
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