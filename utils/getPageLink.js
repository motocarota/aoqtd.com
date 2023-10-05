import extractValues from './extractValues';

function getPageLink({pages, index}) {
	if (!pages[index]) {
		return null;
	}

	return extractValues(pages[index]);
}

export default getPageLink;
