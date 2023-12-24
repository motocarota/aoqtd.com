import extractValues from './extractValues';

function getPageLink({pages, index, loc}) {
	if (!pages[index]) {
		return '';
	}

	const p = extractValues(pages[index]);

	return `/${loc}/${p?.chapter}/${p?.page}`;
}

export default getPageLink;
