import extractValues from './extractValues';

function getLastPage({pages}) {
	const lastPage = pages[pages.length - 1];
	return extractValues(lastPage);
}

export default getLastPage;
