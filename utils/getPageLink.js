import extractValues from './extractValues';

function getPageLink({pages, index}) {
	if (!pages[index]) {
		return '';
	}

	const p = extractValues(pages[index]);

	return `/it/${p?.chapter}/${p?.page}`;
}

export default getPageLink;
